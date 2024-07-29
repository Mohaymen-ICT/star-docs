# dotnet-dump 

برای باگ‌هایی که مسئله‌ی حافظه وجود دارد و می‌خواهیم دقیقا شی‌هایی که در حافظه وجود دارد را مورد بررسی قرار دهیم. از ابزار 
dotnet-dump
استفاده می‌کنیم.

## نصب ابزار در سیستم
برای نصب ابزار در سیستم از دستور زیر استفاده می‌کنیم.

```bash
dotnet tool install --global dotnet-dump
```

پس از آن می‌توانیم از دستورات مختلف این ابزار استفاده کنیم.

لینک توضیحات کامل این ابزار در
[این صفحه](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump)
وجود دارد.

## تحلیل لاگ فایل دامپ
ابزار 
dotnet-dump
به شما امکان بررسی فایل‌های دامپ را می‌دهد و می‌توان از راه داده‌های خوبی از فایل استخراج کرد.
دستورات و امکانات این ابزار در 
[این سایت](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#dotnet-dump-analyze)
و به صورت مفصل‌تر در
[این صفحه](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#analyze-sos-commands)
و
[این صفحه](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/sos-debugging-extension)
قابل مشاهده است.

## استفاده در محیط عملیاتی
در لحظه‌ای که سرویس دچار مشکل می‌شود لازم است یک دستوری در کانتینر بزنیم که باعث می‌شود فایل لاگ دامپ تهیه شود.
در این حالت یک لاگ با اطلاعات مشخصی از حافظه به صورت یک فایل ذخیره می‌شود.
سپس لازم است فایل را از داخل کانتینر خارج کنیم تا بتوانیم آن‌را تحلیل کنیم.

دستور ساخت فایل دامپ به صورت زیر است.

```bash
dotnet-dump collect -p 1 
```

هم‌چنین امکان تعیین نوع لاگ‌گیری و جزئیات آن را در دستور تعیین کرد. که در
[این لینک](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#synopsis-1)
به صورت مفصل توضیح داده شده است.

در صورت نیاز به انتهای فایل فرمت
`.dmp`
را اضافه کنید. پس از آن می‌توان فایل را با 
Visual studio
یا ابزارهای دیگر
باز کرد.


