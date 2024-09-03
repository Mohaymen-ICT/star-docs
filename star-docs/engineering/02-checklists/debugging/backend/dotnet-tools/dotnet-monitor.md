## دستورالعمل‌های کار با ابزار dotnet-monitor در محیط‌های عملیاتی

### احراز هویت

برای احراز هویت می‌توانیم کلید‌ها را با این دستور ایجاد کنیم:

```bash
dotnet-monitor generatekey -e "3650.00:00:00"
```

دستور بالا یک توکن JWT با ۱۰ سال انقضا از حالا ایجاد می‌کند ([مستندات](https://github.com/dotnet/dotnet-monitor/blob/99e9fbec72b1babefe926ccfbe8c746b16953077/src/Tools/dotnet-monitor/Strings.resx#L939)).

مستندات کامل در [اینجا](https://github.com/dotnet/dotnet-monitor/blob/main/documentation/api-key-setup.md) موجود است.

### تغییرات در Docker Compose

برای اتصال یک کانتینر دات‌نت مانیتور به تصاویر خود، این سرویس را به فایل Docker Compose خود اضافه کنید:

```yaml
  dotnet-monitor:
    image: repo.mohaymen.ir:3060/utilities/dotnet-monitor:8
    container_name: dotnet_monitor
    user: 200000:200000
    environment:
      - DOTNETMONITOR_Authentication__MonitorApiKey__Subject=fc9cfcfd-dc94-4dd1-8525-43d7d9399f70
      - DOTNETMONITOR_Authentication__MonitorApiKey__PublicKey=eyJjcnYiOiJQLTM4NCIsImtleV9vcHMiOltdLCJrdHkiOiJFQyIsIm90aCI6W10sIngiOiJsU3AzTnpUMzludkRoS1ktVFpRTy1KTm5ZSUZ6LUEtUnRxVU1tajM2NkZiWG5zLVgyOVN1ZHphMjJIbVBBU2p2IiwieDVjIjpbXSwieSI6IkI3NFhNUVFaalpoVGpXdnFZZHhvOEtTV0hTT3EzUXdKYVk1WWZFS3NxU0dlZTF4WlFadlFBUExPTjZLU1hTVHAifQ
      - DOTNETMONITOR_Urls=http://+:52323
      - DOTNETMONITOR_DiagnosticPort__ConnectionMode=Listen
      - DOTNETMONITOR_Storage__DefaultSharedPath=/diagnostics
      - DOTNETMONITOR_Storage__DumpTempFolder=/tmp
    ports:
      - 52323:52323
    volumes:
      - diagnostics:/diagnostics
      - diagnosticsDump:/tmp
    restart: no
    networks:
      - star_network
```

و برای تنها یک سرویس که نیاز به بررسی دارد، این مقادیر را اضافه کنید:

```yaml
    environment:
      - DOTNET_DiagnosticPorts=/home/star/dotnet-monitor.sock,suspend
    volumes:
      - diagnostics:/home/star/:Z
      - diagnosticsDump:/tmp
```

و همچنین این volume را در انتهای فایل Docker Compose تعریف کنید:

```yaml
volumes:
  diagnostics: { }
  diagnosticsDump: { }
```

### ارسال درخواست‌ها با استفاده از CURL

برای ارسال درخواست‌ها به دات‌نت مانیتور، می‌توانید از دستورات زیر استفاده کنید:

#### دریافت مشخصات Apiهای مختلف

با دستور زیر یک جیسون کامل به منظور توصیف تمام قابلیت‌های این سرویس به صورت 
openApi3
فراهم می‌شود.
```bash
curl -X GET --location "http://localhost:52323/" \
    -H "Accept: application/json" \
    -H "Authorization: Bearer Your-Token"
```


#### دریافت تمام پردازش‌های متصل

```bash
curl -X GET --location "http://localhost:52323/processes" \
    -H "Accept: application/json" \
    -H "Authorization: Bearer Your-Token"
```

#### دریافت جزئیات یک پردازش متصل

```bash
curl -X GET --location "http://localhost:52323/env" \
    -H "Accept: application/json" \
    -H "Authorization: Bearer Your-Token"
```

#### دریافت دامپ حافظه

```bash
curl -X GET --location "http://localhost:52323/dump?type=Full" \
    -H "Accept: application/json" \
    -H "Authorization: Bearer Your-Token" 
```

#### دریافت فایل Trace

```bash
curl -X GET --location "http://localhost:52323/trace?durationSeconds=15" \
    -H "Accept: application/json" \
    -H "Authorization: Bearer Your-Token"
```

:::tip
**شناسه فرآیند (PID)**
  در صورتی که فقط یک پردازش خاص به
  `dotnet-monitor`
  متصل شده باشد نیازی به اضافه‌کردن فیلترهایی روی پردازش‌ها نیاز نیست و به صورت خودکار روی همان پردازش خاص 
عملیات انجام می‌شود.

:::

## کانفیگ چند نمونه‌ی dotnet-monitor برای سرویس‌های مختلف 

برای مانیتور کردن چندین سرویس لازم است چندین نمونه
dotnet-monitor
ایجاد شود.

یک نمونه فایل داکر نوشته شده برای چندین سرویس به صورت زیر است.

```yaml
services:
  redis:
    image: redis:7.2-rc3-bookworm
    container_name: star_redis
    restart: unless-stopped
    volumes:
      - ./redis-data:/var/lib/redis
    ports:
      - "6379:6379"
    command: [
      "redis-server",
      "--requirepass", "123",
      "--appendonly", "yes",
      "--maxmemory-policy", "allkeys-lru",
      "--maxmemory", "4000mb",
      "--save", "900", "1",
      "--save", "300", "10",
      "--save", "60", "10000",
    ]
    healthcheck:
      test: [ "CMD-SHELL", "redis-cli AUTH \"Redis@123\"", "redis-cli ping | grep PONG" ]
      interval: 1s
      timeout: 3s
      retries: 5
    networks:
      - star_network

  star_am:
    image: repo.mohaymen.ir:3060/starrelease/am-29
    container_name: AM
    hostname: am
    volumes:
      - ./configs/AM/License.xml:/opt/MicroService.AccessManagement/output/License.xml
      - ./configs/AM/configs:/opt/MicroService.AccessManagement/output/configs
      - ./configs/AM/Logs:/opt/MicroService.AccessManagement/output/Logs:Z
      - diagnostics-am:/home/star/:Z
      - diagnosticsDump-am:/tmp
    command: sh -c "dotnet MigrationFramework.dll AutoMigration && dotnet MSSE.AM.dll"
    pull_policy: always
    environment:
      - DOTNET_DiagnosticPorts=/home/star/dotnet-monitor.sock,suspend
    ports:
      - 58081:58081
    restart: unless-stopped
    networks:
      - star_network

  star_web:
    image: repo.mohaymen.ir:3060/starrelease/web-29
    container_name: Web
    hostname: web
    volumes:
      - ./configs/Web/nginx.conf:/etc/nginx/nginx.conf
      - ./configs/Web/web.uiconfig:/opt/output/web.uiconfig
    pull_policy: always
    ports:
      - 80:8080
    networks:
      - star_network
    restart: unless-stopped

  star_dia:
    image: repo.mohaymen.ir:3060/starrelease/dia-29
    container_name: DIA
    hostname: dia
    ports:
      - 58088:58088
    volumes:
      - ./configs/DIA/License.xml:/opt/ETLEngine/output/License.xml:Z
      - ./configs/DIA/configs:/opt/ETLEngine/output/configs:Z
      - ./configs/DIA/Logs:/opt/ETLEngine/output/Logs:Z
      - diagnostics-dia:/home/star/:Z
      - diagnosticsDump-dia:/tmp
    command: sh -c "dotnet MigrationFramework.dll AutoMigration && dotnet MSSE.DIA.dll"
    pull_policy: always
    environment:
      - DOTNET_DiagnosticPorts=/home/star/dotnet-monitor.sock,suspend
    restart: unless-stopped
    depends_on:
      star_am:
        condition: service_started
    networks:
      - star_network

  dotnet-monitor-am:
    image: repo.mohaymen.ir:3060/utilities/dotnet-monitor:8
    container_name: dotnet_monitor-am
    user: 200000:200000
    environment:
      - DOTNETMONITOR_Authentication__MonitorApiKey__Subject=fc9cfcfd-dc94-4dd1-8525-43d7d9399f70
      - DOTNETMONITOR_Authentication__MonitorApiKey__PublicKey=eyJjcnYiOiJQLTM4NCIsImtleV9vcHMiOltdLCJrdHkiOiJFQyIsIm90aCI6W10sIngiOiJsU3AzTnpUMzludkRoS1ktVFpRTy1KTm5ZSUZ6LUEtUnRxVU1tajM2NkZiWG5zLVgyOVN1ZHphMjJIbVBBU2p2IiwieDVjIjpbXSwieSI6IkI3NFhNUVFaalpoVGpXdnFZZHhvOEtTV0hTT3EzUXdKYVk1WWZFS3NxU0dlZTF4WlFadlFBUExPTjZLU1hTVHAifQ
      - DOTNETMONITOR_Urls=http://+:52323
      - DOTNETMONITOR_DiagnosticPort__ConnectionMode=Listen
      - DOTNETMONITOR_Storage__DefaultSharedPath=/diagnostics
      - DOTNETMONITOR_Storage__DumpTempFolder=/tmp
    ports:
      - 52323:52323
    volumes:
      - diagnostics-am:/diagnostics
      - diagnosticsDump-am:/tmp
    restart: no
    networks:
      - star_network

  dotnet-monitor-dia:
    image: repo.mohaymen.ir:3060/utilities/dotnet-monitor:8
    container_name: dotnet_monitor-dia
    user: 200000:200000
    environment:
      - DOTNETMONITOR_Authentication__MonitorApiKey__Subject=fc9cfcfd-dc94-4dd1-8525-43d7d9399f70
      - DOTNETMONITOR_Authentication__MonitorApiKey__PublicKey=eyJjcnYiOiJQLTM4NCIsImtleV9vcHMiOltdLCJrdHkiOiJFQyIsIm90aCI6W10sIngiOiJsU3AzTnpUMzludkRoS1ktVFpRTy1KTm5ZSUZ6LUEtUnRxVU1tajM2NkZiWG5zLVgyOVN1ZHphMjJIbVBBU2p2IiwieDVjIjpbXSwieSI6IkI3NFhNUVFaalpoVGpXdnFZZHhvOEtTV0hTT3EzUXdKYVk1WWZFS3NxU0dlZTF4WlFadlFBUExPTjZLU1hTVHAifQ
      - DOTNETMONITOR_Urls=http://+:52323
      - DOTNETMONITOR_DiagnosticPort__ConnectionMode=Listen
      - DOTNETMONITOR_Storage__DefaultSharedPath=/diagnostics
      - DOTNETMONITOR_Storage__DumpTempFolder=/tmp
    ports:
      - 52324:52323
    volumes:
      - diagnostics-dia:/diagnostics
      - diagnosticsDump-dia:/tmp
    restart: no
    networks:
      - star_network


networks:
  star_network:
    driver: bridge


volumes:
  diagnostics-dia: { }
  diagnosticsDump-dia: { }
  diagnostics-am: { }
  diagnosticsDump-am: { }
```