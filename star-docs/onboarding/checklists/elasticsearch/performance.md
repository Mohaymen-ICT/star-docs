# چک لیست بررسی کندی های الستیک‌سرچ

برای بررسی کندی‌های الستیک‌سرچ ممکن است اشکالاتی در تنظیمات کلاستر باشد یا روی یک داده و ایندکس خاص و یا کوئری مشخص دچار مشکل باشد.

## بررسی سلامت کلاستر

* با اجرای کوئری‌های متادیتا در کیبانا و بررسی زمان پاسخ‌گویی هر کدام می‌توان از سلامت کلی کلاستر اطمینان پیدا کرد.


    * اطمینان از در دسترس بودن نود
        برای بررسی در دسترس بودن یک نود درخواست زیر را اجرا کنید.

        ```
        GET /
        ```
        خروجی این درخواست نام نودی که به آن درخواست ارسال شده و نسخه‌ی آن را نشان می‌دهد.


    * بررسی سلامت نودها
        
        ```
        GET _cat/nodes?v
        ```
        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html)
        آمده است.
        زمان پاسخ‌گویی به این کوئری مهم است و در صورتی که طولانی شود نشان‌دهنده‌ی عدم پایداری در کلاستر است.

    * بررسی وضعیت نودها
        
        ```
        GET _nodes/stats
        ```
        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-nodes-stats.html)
        آمده است.
        زمان پاسخ‌گویی به این کوئری مهم است و در صورتی که طولانی شود نشان‌دهنده‌ی عدم پایداری در کلاستر است.

    * بررسی سلامت ایندکس‌ها
        
        ```
        GET _cat/indices?v
        ```
        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html)
        آمده است.
        
    * بررسی سلامت کلی کلاستر
        
        ```
        GET _cat/health?v
        ```
        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-health.html)
        آمده است.
        
    * بررسی ساختار نگاشت‌های ایندکس‌ها

        برای دریافت نگاشت برای تمامی ایندکس‌ها از کوئری زیر استفاده می‌شود.
        ```
        GET /_mapping
        ```
        
        برای بررسی نگاشت یک ایندکس خاص می‌توان کوئری زیر را اجرا کرد.
        ```
        GET /my-index-000001/_mapping
        ```
        
        برای بررسی نگاشت چند ایندکس مشخص می‌توان از کاما استفاده کرد.
        ```
        GET /my-index-000001,my-index-000002/_mapping
        ```
        
        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-get-mapping.html)
        آمده است.
    
    * بررسی وضعیت کلی کلاستر

        برای دید کلی نسبت به شرایط کلاستر این کوئری داده‌های مفیدی می‌دهد.

        ```
        GET /_cluster/stats
        ```
        
        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-stats.html)
        آمده است.

    * بررسی تنظیمات کلاستر

        برای دسترسی به تنظیمات کلی کلاستر از کوئری زیر استفاده می‌شود.
        ```
        GET /_cluster/settings
        ```


        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-get-settings.html)
        آمده است.       


    * بررسی وضعیت شارد‌ها
    
        برای دریافت وضعیت شاردها از کوئری زیر استفاده می‌شود.

        ```
        GET _cat/shards?v
        ```

        توضیحات خروجی این کوئری در 
        [مستندات الستیک‌سرچ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-shards.html)
        آمده است.       


    * بررسی وضعیت اندازه‌ی اشاره‌گر‌ها در JVM

        در صورتی که مقدار حافظه‌ی 
        RAM
        که به 
        JVM
        داده می‌شود خیلی زیاد باشد(بیش از 32 گیگابایت)
        باعث افزایش اندازه‌ی پوینتر شده و باعث کندی می‌شود.

        ```
        GET /_nodes/jvm?filter_path=nodes.*.jvm.using_compressed_ordinary_object_pointers
        ```
        
        در صورتی که پاسخ این کوئری 
        `false`
        باشد به معنی عدم بهینه‌بودن اندازه‌ی پوینترها است و باید بررسی بشود و این میزان حافظه باید بهتر است بین چند نود تقسیم بشود به جای اینکه یک نود با 
        RAM
        بسیار زیاد ایجاد شود.
        


## جلسات بررسی تیم فنی
+ [جلسه‌ی اول بررسی روش‌های دیباگ کلاستر الستیک](https://splus.ir/star_learning_dev/286)


## لینک‌های مهم سایت الستیک‌سرچ برای بهینه‌سازی کلاستر
+ [Tune for search speed](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-search-speed.html)
+ [Tune for indexing speed](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html)
+ [Tune for disk usage](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-disk-usage.html)
+ [Size your shards](https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html)
+ [Advanced tuning: finding and fixing slow Elasticsearch queries](https://www.elastic.co/blog/advanced-tuning-finding-and-fixing-slow-elasticsearch-queries)