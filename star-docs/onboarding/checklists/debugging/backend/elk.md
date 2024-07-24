#  دیباگ با استفاده از استک ELK (Elastic Logstash Kibana)


برای باگ‌هایی که به کندی یک عملکرد در سیستم مرتبط است، یکی از راه‌های دیباگ و تشخیص مشکل، استفاده از لاگ‌های 
performance
سرویس‌های ستاره است.

## تشخیص سرویس‌های مرتبط
با توجه به ماژولی که با آن کار داریم و کندی در آن مشاهده می‌شود، لاگ پرفورمنس مربوط به آن سرویس را از مشتری درخواست می‌کنیم.

## بارگذاری لاگ‌ها

برای بارگذاری و به اشتراک‌گذاری نتایج بین افراد مختلف داخل واحد،
یک نسخه‌ی کامل از استک
ELK
در دسترس است.
برای بارگذاری یک فایل لاگ لازم است مراحل زیر انجام شود.

+ به سرور
  `192.168.30.83`
با نام کاربری و رمزعبوری که در اختیار دارید،
ریموت بزنید.
+ در آدرس زیر، پوشه‌های مختلف به ازای هر پروژه ایجاد شده است.
پوشه‌ی متناظر با پروژه‌ی باگ گزارش شده را باز کنید. (برای اینکار از فیلد component در ایشوی باگ جیرا استفاده کنید.)

در مثال زیر، پوشه‌ی 
`IST`
مورد نظر است.

![Folders for every project in server](images/folder-projects.png)
![Bug in jira](images/bug-in-jira.png)

+ در پوشه‌ی مورد نظر، یک پوشه‌ی جدید به همان نام شناسه ایشوی جیرا ایجاد کنید.
در مثال زیر، شناسه‌ی ایشو برابر مقدار 
`DATALM-101006`
است.
![Issue code in jira](images/issue-code-details.png)

+ فایل‌های فشرده را از ایشو دانلود کنید و به پوشه‌ی مربوطه انتقال دهید. 
+ چون فایل‌های لاگ حجیم هستند معمولا به صورت فشرده نگه‌داری و ارسال می‌شوند. برای بارگذاری شدن مناسب لاگ‌ها باید آن‌ها را از حالت فشرده خارج کنید.
+ بررسی کنید که سرویس ویندوزی 
filebeat
در سرور 
در حال اجرا باشد و در صورتی که این سرویس 
stop 
شده باشد فرایند انجام نمی‌شود و باید ابتدا آن را 
start
کنید تا فایل‌ها بارگذاری شوند.

![Filebeat service is running](images/filebeat-is-running.png)


## تحلیل لاگ‌ها

برای تحلیل لاگ‌ها روش‌های مختلفی در رابط کاربری کیبانا فراهم شده است.

### ساختار لاگ

یک فایل لاگ به صورت یک جیسون است که شامل کلید و مقادیری است که به تیم فنی امکان درک وقایع در سیستم عملیاتی را می‌دهد.

نمونه‌ی یک فایل لاگ به صورت زیر است.

```json
{
  "_index": "star-logs-000007",
  "_type": "_doc",
  "_id": "RyLQ3pAB57zJKhoG64Mv",
  "_score": 1,
  "fields": {
    "agent.version.keyword": [
      "7.17.9"
    ],
    "details.status.keyword": [
      "success"
    ],
    "fields.Environment.keyword": [
      "qa-beta"
    ],
    "details.AsyncTaskRunnerTook": [
      0
    ],
    "destination_ip.keyword": [
      "10.233.74.76"
    ],
    "details.Method": [
      "POST"
    ],
    "details.SerTook": [
      0
    ],
    "host.name.keyword": [
      "laportal-statefulset-0"
    ],
    "details.ApiFullName.keyword": [
      "IUserManagementApi.GetSimpleUsers"
    ],
    "details.DestinationService": [
      "AM"
    ],
    "details.ApiFullName": [
      "IUserManagementApi.GetSimpleUsers"
    ],
    "host.hostname": [
      "laportal-statefulset-0"
    ],
    "details.fail": [
      0
    ],
    "host.mac": [
      "9e:8f:37:0f:82:f2"
    ],
    "source_ip": [
      "10.233.97.174"
    ],
    "details.Method.keyword": [
      "POST"
    ],
    "source_ip_chain": [
      "10.233.75.105, 10.233.97.174"
    ],
    "host.os.version": [
      "20.04.5 LTS (Focal Fossa)"
    ],
    "details.TotalNetTook": [
      10
    ],
    "origin_ip.keyword": [
      "10.233.75.105"
    ],
    "source_ip_port": [
      "10.233.97.174:58982"
    ],
    "agent.name": [
      "laportal-statefulset-0"
    ],
    "id": [
      "de3dbcf6-63dd-43d8-a695-4ff2a0f6b00c"
    ],
    "transaction_id": [
      "765cecd3-b577-4588-b3f1-191ae1835ee5"
    ],
    "host.os.type": [
      "linux"
    ],
    "agent.id.keyword": [
      "ef616235-a2de-404b-b423-179165ce2fc1"
    ],
    "input.type": [
      "log"
    ],
    "agent.hostname": [
      "laportal-statefulset-0"
    ],
    "details.RespStatusCode": [
      200
    ],
    "log.flags": [
      "multiline"
    ],
    "tags": [
      "beats_input_codec_plain_applied"
    ],
    "details.process_name.keyword": [
      "MSSE.LAPortal"
    ],
    "host.architecture": [
      "x86_64"
    ],
    "destination_ip_port.keyword": [
      "10.233.74.76:58084"
    ],
    "user_name.keyword": [
      "2c031bd6-470e-4610-a8cb-3900d510c64d"
    ],
    "agent.id": [
      "ef616235-a2de-404b-b423-179165ce2fc1"
    ],
    "host.containerized": [
      true
    ],
    "distributed_transaction_id.keyword": [
      "753d8e16-304a-4f95-a8c5-c4b44e093a11"
    ],
    "input.type.keyword": [
      "log"
    ],
    "user_name": [
      "2c031bd6-470e-4610-a8cb-3900d510c64d"
    ],
    "tags.keyword": [
      "beats_input_codec_plain_applied"
    ],
    "parent_proc": [
      "f66633c8-f815-40aa-b358-553723bb346a"
    ],
    "details.ConectionTook": [
      0
    ],
    "details.service_name.keyword": [
      "MSSE.LAPortal"
    ],
    "details.ReqBytes": [
      51
    ],
    "host.ip": [
      "10.233.74.76",
      "fe80::9c8f:37ff:fe0f:82f2"
    ],
    "agent.type": [
      "filebeat"
    ],
    "log_type": [
      "response"
    ],
    "token_user_name.keyword": [
      "2c031bd6-470e-4610-a8cb-3900d510c64d"
    ],
    "host.os.kernel.keyword": [
      "5.4.0-177-generic"
    ],
    "log.flags.keyword": [
      "multiline"
    ],
    "details.ApiControllerName": [
      "IUserManagementApi"
    ],
    "origin_ip_port.keyword": [
      "10.233.75.105:0"
    ],
    "timestamp": [
      "2024-07-23T08:58:56.426Z"
    ],
    "agent.type.keyword": [
      "filebeat"
    ],
    "agent.ephemeral_id.keyword": [
      "9e73798a-6d23-4093-9ec6-7cc2bac3bf12"
    ],
    "agent.name.keyword": [
      "laportal-statefulset-0"
    ],
    "host.os.codename": [
      "focal"
    ],
    "details.Url": [
      "/api/UserManagementApi/GetSimpleUsers"
    ],
    "details.full_version": [
      "403.2.0.10"
    ],
    "@timestamp": [
      "2024-07-23T08:58:56.426Z"
    ],
    "host.os.platform": [
      "ubuntu"
    ],
    "log.file.path": [
      "/var/log/service_logs/laportal-statefulset-0_star/Performance/20240723.json"
    ],
    "agent.ephemeral_id": [
      "9e73798a-6d23-4093-9ec6-7cc2bac3bf12"
    ],
    "log_type.keyword": [
      "response"
    ],
    "source_ip_chain.keyword": [
      "10.233.75.105, 10.233.97.174"
    ],
    "details.Url.keyword": [
      "/api/UserManagementApi/GetSimpleUsers"
    ],
    "host.architecture.keyword": [
      "x86_64"
    ],
    "source_ip_port.keyword": [
      "10.233.97.174:58982"
    ],
    "distributed_transaction_id": [
      "753d8e16-304a-4f95-a8c5-c4b44e093a11"
    ],
    "token_user_name": [
      "2c031bd6-470e-4610-a8cb-3900d510c64d"
    ],
    "details.RespBytes": [
      849
    ],
    "agent.hostname.keyword": [
      "laportal-statefulset-0"
    ],
    "ecs.version.keyword": [
      "1.12.0"
    ],
    "host.ip.keyword": [
      "10.233.74.76",
      "fe80::9c8f:37ff:fe0f:82f2"
    ],
    "destination_ip": [
      "10.233.74.76"
    ],
    "details.activity.keyword": [
      "StatelessCall"
    ],
    "host.os.name": [
      "Ubuntu"
    ],
    "details.DeserTook": [
      0
    ],
    "host.name": [
      "laportal-statefulset-0"
    ],
    "details.ApiName": [
      "GetSimpleUsers"
    ],
    "host.os.version.keyword": [
      "20.04.5 LTS (Focal Fossa)"
    ],
    "fields.Environment": [
      "qa-beta"
    ],
    "details.activity": [
      "StatelessCall"
    ],
    "details.module_name": [
      "mrpc"
    ],
    "source_ip_chain_port": [
      "10.233.75.105:0, 10.233.97.174:58982"
    ],
    "log.offset": [
      5793482
    ],
    "transaction_id.keyword": [
      "765cecd3-b577-4588-b3f1-191ae1835ee5"
    ],
    "process_tag.keyword": [
      "Client.StatelessCall.Response"
    ],
    "details.full_version.keyword": [
      "403.2.0.10"
    ],
    "ecs.version": [
      "1.12.0"
    ],
    "details.ApiControllerName.keyword": [
      "IUserManagementApi"
    ],
    "host.hostname.keyword": [
      "laportal-statefulset-0"
    ],
    "agent.version": [
      "7.17.9"
    ],
    "host.os.family": [
      "debian"
    ],
    "source_ip_chain_port.keyword": [
      "10.233.75.105:0, 10.233.97.174:58982"
    ],
    "details.Command": [
      "StatelessApiCall"
    ],
    "details.process_name": [
      "MSSE.LAPortal"
    ],
    "details.success": [
      1
    ],
    "details.DestinationService.keyword": [
      "AM"
    ],
    "details.area.keyword": [
      "Client"
    ],
    "details.status": [
      "success"
    ],
    "details.module_name.keyword": [
      "mrpc"
    ],
    "id.keyword": [
      "de3dbcf6-63dd-43d8-a695-4ff2a0f6b00c"
    ],
    "host.os.kernel": [
      "5.4.0-177-generic"
    ],
    "@version": [
      "1"
    ],
    "host.os.name.keyword": [
      "Ubuntu"
    ],
    "process_tag": [
      "Client.StatelessCall.Response"
    ],
    "details.ApiName.keyword": [
      "GetSimpleUsers"
    ],
    "log.file.path.keyword": [
      "/var/log/service_logs/laportal-statefulset-0_star/Performance/20240723.json"
    ],
    "host.os.codename.keyword": [
      "focal"
    ],
    "request_id.keyword": [
      "b884b4ab-8810-46d9-a99d-9075f68c279a"
    ],
    "host.mac.keyword": [
      "9e:8f:37:0f:82:f2"
    ],
    "destination_ip_port": [
      "10.233.74.76:58084"
    ],
    "details.Command.keyword": [
      "StatelessApiCall"
    ],
    "details.service_name": [
      "MSSE.LAPortal"
    ],
    "details.major_version": [
      "403"
    ],
    "host.os.family.keyword": [
      "debian"
    ],
    "details.major_version.keyword": [
      "403"
    ],
    "source_ip.keyword": [
      "10.233.97.174"
    ],
    "host.os.type.keyword": [
      "linux"
    ],
    "host.os.platform.keyword": [
      "ubuntu"
    ],
    "parent_proc.keyword": [
      "f66633c8-f815-40aa-b358-553723bb346a"
    ],
    "details.WaitingTook": [
      9
    ],
    "origin_ip_port": [
      "10.233.75.105:0"
    ],
    "details.response_time": [
      11
    ],
    "details.area": [
      "Client"
    ],
    "request_id": [
      "b884b4ab-8810-46d9-a99d-9075f68c279a"
    ],
    "origin_ip": [
      "10.233.75.105"
    ]
  }
}
```

در ادامه به هر جیسون مشابه مثال بالا یک لاگ گفته می‌شود و متناظر با یک سند در الستیک‌سرچ است.


### تحلیل لاگ با Discover

محیط 
Discover
کیبانا یک محیط برای مشاهده‌ی خام تمام لاگ‌های ثبت شده است. در این صفحه به سادگی می‌توانیم لاگ‌ها را فیلتر کنیم. براساس برخی ستون‌ها مرتب‌سازی کنیم و برخی از مقادیر را از محدوده‌ی دید خود حذف کنیم.

برای آشنایی با امکانات 
Discover
[این ویدیو](https://www.youtube.com/watch?v=b4Edz_ybA_8)
را بررسی کنید.

:::tip
این محیط مناسب رسم نمودارهای متنوع و با جزئیات نیست و فقط لاگ‌ها به صورت خام مشاهده می‌شود. برای نمودارهای پیچیده‌تر باید یک داشبورد بسازیم.
:::

این محیط از 
[این آدرس](http://192.168.30.101:5600/app/discover)
قابل دسترس است.

#### تغییر محدوده‌ی زمانی
![Kibana timestamp](images/kibana/timestamp.png)
در این بخش امکان تعیین محدوده‌ی زمانی نمایش لاگ‌ها وجود دارد.

:::tip
در ابتدای تحلیل این مقدار تا حدی که مطمئن باشید شامل تمام لاگ‌های مورد نظر است بزرگ کنید.
:::

#### اضافه کردن ستون‌های داده
![Kibana add columns](images/kibana/columns.png)

در این بخش ستون‌های معروف و پرتکرار در لاگ‌ها به همراه امکان جستجو و اضافه کردن ستون‌ها به جدول وجود دارد.

با انتخاب یک ستون (در بخش ستون‌های معروف یا جستجوی دقیق ستون) ستون خاص به جدول سمت راست اضافه می‌شود و می‌توانیم مقدارها را به صورت دقیق مشاهده کنیم. 
#### مشاهده یا عدم مشاهده‌ی یک داده‌ی خاص در ستون‌های مختلف

با انتخاب هر یک از مقادیر در ستون‌های موجود در جدول، اگر روی علامت + کلیک شود این مقدار 
فیلتر
می‌شود. یعنی فقط لاگ‌هایی که این مقدار را دارند نمایش داده می‌شوند.

در صورتی که روی علامت - کلیک شود، تمام لاگ‌هایی که این مقدار را دارند نشان داده نمی‌شوند. این ویژگی برای حذف لاگ‌های نامرتبط و تمرکز روی موارد مهم، مفید است. 

#### مشاهده‌ی تجمع زمانی داده‌ها و تعداد کل داده‌های مطابق با فیلتر

در تمام لحظات تحلیل مطابق با فیلتر زمانی و فیلترهای ستون‌ها تعداد کل لاگ‌ها، فراوانی زمانی (صرفا از نظر تعداد) قابل مشاهده است.
همین موارد در برخی از تحلیل‌ها به ما کمک می‌کند و حائذ اهمیت است.

![Time line and total count](images/kibana/timeline.png)


### تحلیل‌های تجمیعی با اسفتاده از Dashboard

برای تحلیل‌های تجمیعی و مشاهده‌ی وضعیت تجمیعی لاگ‌ها لازم است یک 
**داشبورد**
بسازیم و نمودارهای متفاوت را در آن تعریف کنیم تا امکان فهم کلی نسبت به لاگ‌های تجمیع‌شده وجود داشته باشد.

برای ادامه‌ی تحلیل لازم است مراحل زیر را طی کنیم.

+ یک داشبورد با نام مشخص و با مفهوم متناسب با کدایشوی باگ ایجاد کنید که در آینده به سادگی تشخیص دهیم هر داشبورد برای چه هدفی ساخته شده است.
  (پیشنهاد می‌شود که کد ایشو را در ابتدای عنوان داشبورد قرار دهید.)
+ فیلتر مورد نیاز برای محدود‌سازی لاگ‌ها را در ابتدای صفحه ایجاد کنید.
:::tip
یکی از راه‌های فیلتر کردن لاگ استفاده از کلید
`log.file.path`
کنید.

با توجه به روش
tokenizer
الستیک در صورتی که فقط یک بخش را فیلتر کنید هر مسیری که شامل آن بخش باشد فیلتر می‌شود و قابل مشاهده خواهد بود. 
:::
+ سپس برای پاسخ به هر یک از سوالات و احتمالات مطرح شده نیاز است یک نمودار خاص برای این تحلیل استفاده شود.
در کیبانا هر نمودار یک 
Lens
نامیده می‌شود.

در 
[این ویدیو](https://www.youtube.com/watch?v=DzGwmr8nKPg)
توضیحات کلی در مورد ساخت داشبورد و نمودار داده شده است.

انواع روش‌های تجمیع‌سازی به تفصیل و با جزئيات مورد نیاز در 
[این ویدیو](https://www.youtube.com/watch?v=j-eCKDhj-Os)
توضیح داده شده است.

:::tip
استفاده از 
percentile
در تحلیل‌ها بسیار مفید است و کمک می‌کند نسبت به داده‌ها دید خوبی بگیریم و فقط به حداقل و حداکثر داده‌ها محدود نمی‌شویم و در عمل بهتر نسبت به توزیع‌داده شهود پیدا می‌کنیم.
:::

## مشخصات و کلیدهای معروف در لاگ‌ها


<table>
<tr>
<td>نام کلید</td>
<td>شرح</td>
<td>مثال‌های معروف</td>
</tr>

<tr>
<td>
`details.area`
</td>
<td>
هر لاگ مربوط به یک بخش بزرگ از کد است. برای تفکیک لاگ‌های مرتبط با یک منطق و فعالیت مشخص از این کلید استفاده می‌شود و آن را فیلتر می‌کنیم.
</td>
<td>
`Client`
برای مواقعی است که سرویس مورد نظر کلاینت است و به دیگر سرویس‌ها درخواست داده است.

`Server`
برای مواقعی است که سرویس مورد نظر، سرور بوده به کاربران پاسخ داده است.
</td>
</tr>
<tr>
<td>
`details.activity`
</td>
<td>
منطق و کاری که انجام شده است و منجر به ایجاد شدن این لاگ شده است.
</td>
<td>
هر مقدار
`details.area`
دارای مقادیر مشخصی است که باید با استفاده از کد منطق دقیق‌ را متوجه شویم.
</td>
</tr>
<tr>
<td>
`log_type`
</td>
<td>
به ازای هر عملیات در ستاره یک لاگ شروع و پایان وجود دارد که در این فیلد مشخص می‌شود.
</td>
<td>
مقدار‌های این فیلد 
`response`
(لاگ انتهای عملیات)
یا 
`request`
(لاگ ابتدای عملیات)
است.
</td>
</tr>

<tr>
<td>`process_tag`</td>
<td>
این کلید ترکیب مقدارهای 
`details.area`,
`details.activity`,
`log_type`
است
</td>
<td>
`dataflow.short_time_service_execute.Request`
</td>
</tr>

<tr>
<td>
`details.response_time`
</td>
<td>
این کلید فقط در لاگ‌ها با 
`log_type = response`
وجود دارد و فاصله‌ی زمانی بین 
`request`
و 
`response`
را با واحد میلی‌ثانیه نشان می‌دهد.
</td>
<td>
مقدار زیاد و بیش از حد انتظار در عملیات‌ها نشان‌دهنده‌ی کندی در سیستم است.
</td>
</tr>

<tr>
<td>
`transaction_id`
</td>
<td>
یک شناسه‌ی که برای درخواست‌ها در محدوده‌ی سرویس یکتاست

می‌توان از طریق فیلتر کردن روی این مقدار تمام لاگ‌های مرتبط با یک عملیات مشخص در یک سرویس را مشاهده کرد. 
</td>
<td>
`3eaeb0a2-b00d-4c95-9eb8-59fea3243806`
</td>
</tr>

<tr>
<td>`distributed_transaction_id`</td>
<td>
این مقدار شناسه‌ی یکتا بین چند سرویس است و در صورتی که یک سرویس به سرویس‌های متعدد درخواست بدهد این شناسه بین تمام لاگ‌های ثبت شده توسط همه‌ی سرویس‌ها یکتاست.

با فیلتر کردن این مقدار امکان دسترسی به تمام لاگ‌ها وجود دارد. 
</td>
<td>
`13fb7e67-d595-47c6-b1ce-2be8e2912bcf`
</td>
</tr>

<tr>
<td>`log.file.path`</td>
<td>
در زمان بارگذاری لاگ‌ها، هر فایل یک 
path
مشخص دارد و آدرس اولیه‌ی آن برای پیگیری بهتر لاگ‌ها و فیلتر کردن برای تحلیل استفاده می‌شود.
</td>
<td>
`D:\Program Files\Mohaymen\StarLogs\26\AM\MOHAYMEN_STAR-SERVICES$\Performance\20240723.json`
</td>
</tr>

<tr>
<td>`details.service_name`</td>
<td>
نام سرویسی که لاگ را ثبت کرده است.
</td>
<td>
`MSSE.AM`,
`MSSE.LADW`,
`MSSE.DM`
</td>
</tr>

<tr>
<td>`details.service_name`</td>
<td>
نام سرویسی که لاگ را ثبت کرده است.
</td>
<td>
`MSSE.AM`,
`MSSE.LADW`,
`MSSE.DM`
</td>
</tr>

<tr>
<td>`details.Url`</td>
<td>
آدرس 
url
که کاربر درخواست داده است.
</td>
<td>
این لاگ در 
`details.area = client, server`
وجود دارد و هر مقداری می‌تواند باشد.
</td>
</tr>

<tr>
<td>`details.status`</td>
<td>
وضعیت موفق یا ناموفق بودن این درخواست را نشان می‌دهد.

در صورتی که در این بخش کد استثنایی پرتاب شود به عنوان خطا تلقی می‌شود.
</td>
<td>
`success`,`fail`
</td>
</tr>

<tr>
<td>`details.RespStatusCode`</td>
<td>
در درخواست‌های 
HTTP
کد پاسخ دریافتی از سرور را نشان می‌دهد.
</td>
<td>
`200`,`202`,`400`,`500`

:::tip
در صورتی که درخواست خیلی طولانی باشد هر یک دقیقه یک درخواست با کد 202 ایجاد می‌شود و بین کلاینت و سرور جابه‌جا می‌شود. 
:::

</td>
</tr>

</table>