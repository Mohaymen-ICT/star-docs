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