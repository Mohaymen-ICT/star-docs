# باگ‌های ساده‌ی سمت سرور

باگ‌هایی که بر اثر درخواست کاربر یک خطا و استثنا پرتاب می‌شود در این دسته از باگ‌ها قرار می‌گیرند.
برای رفع چنین باگ‌هایی موارد زیر را بررسی می‌کنیم.

### سرویس‌های مرتبط با باگ و نسخه‌ی آن‌ها 

در بخش اول جزئیات خطا نام سرویسی که خطا در آن رخ داده است مشخص می‌شود.
```text
exception message:
خطا در سرویس LAPortal 30.0.4.0
```
در مثال فوق در سرویس 
LAPortal
خطا اتفاق افتاده است. نسخه‌ی دقیق سرویس
`30.0.4`
در محیط عملیاتی هم در ادامه ذکر شده است.

---

```text
exception message:
خطا در سرویس LAPortal 0.0.0.0
```

در صورتی که نسخه‌ی دیباگ باشد نسخه به صورت 
`0.0.0.0`
مشخص می‌شود.

---

```text
exception message:
خطا در سرویس LAPortal 30.0.4.0
خطا در سرویس LADW 30.0.8.0
```

در صورتی که یک درخواست بین چند سرویس جابه جا شود. جزئیات خطا مانند مثال فوق است به این‌صورت که ابتدا درخواست به سرویس 
LAPortal
رسیده، سپس از این سرویس یک درخواست به سرویس 
LADW
داده شده است.

نسخه‌ی سرویس‌ها هم مثل قبل نمایش داده می‌شود.


###  متن خطای استثنای پرتاب شده

بعد از آن متن خطای استثنای مشخص می‌شود و به صورت مشخص قابل بررسی است.

```text
- Sequence contains no matching element
```
در مثال فوق یک خطای معروف سی‌شارپ پرتاب شده است.

مثال‌های دیگر این مورد به صورت زیر است.
```text
- مقدار یکی از شی ها تهی است.
Object reference not set to an instance of an object.
```
```text
- Sequence contains more than one element
```
```text
- The given key was not present in the dictionary.
```
```text
- An item with the same key has already been added.
```

:::tip
به طور کلی، نمایش خطاهای انگلیسی به کاربر نشان‌دهنده وجود اشکال در سیستم است. در مواردی که لازم است خطایی به کاربر نمایش داده شود و این خطا ناشی از عملکرد نادرست سیستم نباشد، باید حتماً به زبان فارسی ترجمه شود.
:::


### توضیحات کاربر

در صورتی که کاربر در زمان دریافت جزئیات خطا توضیحات خاصی اضافه کرده باشد در بخش زیر نمایش داده می‌شود.

```text
description:
    User description
```

این بخش معمولا توضیح خاصی در بر ندارد و لازم است در ایشو و نحوه‌ی تولید باگ جزئياتی که کاربر ذکر کرده است را بررسی کنید.


### مکان رخ دادن خطا و StackTrace

در بخش 
StackTrace
توضیحات دقیق مکانی که خطای مورد نظر اتفاق افتاده است. را مشخص می‌کند.

```text
stack trace:
خطا در سرویس LAPortal 30.0.4.0
خطا در سرویس LADW 30.0.8.0 Exception_AppId: 5e62f1b1-60b5-43b7-829f-b64618c9a08c, Exception_UniqueId: 236612, Exception_LocalDateTime: 2024-05-15T13:35:55.6477723+03:30, Exception_UTCDateTime: 2024-05-15T10:05:55.6477723Z
   at System.ThrowException.Throw(Exception exception)
   at Mohaymen.Mrpc.Client.DynamicHighLevel.InvokeManager.DynamicInvokeManager.InvokeRawLevel(RawRequestInfo requestInfo, IMrpcPerformanceMetricItems mrpcPerformanceMetricItems, CancellationToken cancellationToken, HttpStatusCode[] desiredStatuses)
   at Mohaymen.Mrpc.Client.DynamicHighLevel.InvokeManager.DynamicInvokeManager.InvokeLongRequest[TProgress](LongRequestProvider requestProvider, IProgress`1 progress, CancellationToken cancellationToken, HttpStatusCode[] desiredStatuses)
   at Mohaymen.Mrpc.Client.DynamicHighLevel.DynamicClientChannel.InvokeRawStatelessStored[TProgress](ExtraRequestInfo extraRequestInfo, String apiControllerName, String apiName, ApiParameter apiParameter, Type resultType, IProgress`1 progress, CancellationToken cancellationToken)
   at Mohaymen.Mrpc.Client.DynamicHighLevel.DynamicClientChannel.InvokeStatelessStored[TProgress](ExtraRequestInfo extraRequestInfo, String apiControllerName, String apiName, Type resultType, ApiParameter apiParameter, IProgress`1 progress, CancellationToken cancellationToken)
   at Mohaymen.Mrpc.Client.HighLevel.StatelessControllerBuilder`1.<>c__DisplayClass11_0`1.<<MethodInvoker>b__0>d.MoveNext()
--- End of stack trace from previous location ---
   at Mohaymen.BaseLibraries.Threading.Tasks.AsyncTaskRunner.<>c__DisplayClass5_0`1.<<Run>b__0>d.MoveNext()
--- End of stack trace from previous location ---
   at Microsoft.VisualStudio.Threading.JoinableTask.CompleteOnCurrentThread()
   at Microsoft.VisualStudio.Threading.JoinableTask`1.CompleteOnCurrentThread()
   at Mohaymen.BaseLibraries.Threading.Tasks.AsyncTaskRunner.Run[T](Func`1 func)
   at Mohaymen.Mrpc.Client.HighLevel.StatelessControllerBuilder`1.MethodInvoker[TProgress](IDynamicClientChannel dynamicClient, String methodName, ApiParameter apiParameter, Type resultType, IProgress`1 progress, CancellationToken cancellationToken)
   at Mohaymen.Mrpc.Client.HighLevel.StatelessControllerBuilder`1.<>c__DisplayClass9_0`1.<CreateController>b__0(String methodName, ApiParameter apiParameter, Type resultType)
   at Mohaymen.Mrpc.Client.HighLevel.ControllerImplementation.ControllerImplementor.<>c__DisplayClass10_0`1.<Implement>b__0(String methodName, Object[] parameters)
   at EventStoreGraphExplorerApi.GetEventStoreGraph(SimorghExplorerRequest, List`1, CancellationToken)
   at LAP.MicroService.IAP.Plugin.OntologyExplorer.EventStore.EventStoreExplorerGraphProvider.LoadEventStoreData(SimorghPortalRequest simorghPortalRequest, PagingInfo pagingInfo) in /opt/MicroService.IAP/MicroService.IAP/MicroService.IAP.Plugin.OntologyExplorer/EventStore/EventStoreExplorerGraphProvider.cs:line 48
   at MicroService.IAP.Plugin.OntologyCommon.Business.SimorghCommonDataProvider`1.LoadEventStoreData(SimorghPortalRequest simorghPortalRequest)+MoveNext()
   at LAP.MicroService.IAP.Plugin.OntologyCommon.Business.SimorghDataSet.GetDatasetData(SimorghPortalRequest simorghPortalRequest) in /opt/MicroService.IAP/MicroService.IAP/MicroService.IAP.Plugin.OntologyCommon/Business/SimorghDataSet.cs:line 141
   at LAP.MicroService.IAP.Plugin.OntologyCommon.Business.SimorghDataSet.CreateDataset(SimorghPortalRequest simorghPortalRequest) in /opt/MicroService.IAP/MicroService.IAP/MicroService.IAP.Plugin.OntologyCommon/Business/SimorghDataSet.cs:line 93
   at LAP.MicroService.IAP.Plugin.OntologyExplorer.EventStore.Api.SimorghExplorerPackage.CreateDataset(SimorghPortalExplorerRequest simorghPortalExplorerRequest) in /opt/MicroService.IAP/MicroService.IAP/MicroService.IAP.Plugin.OntologyExplorer/EventStore/Api/SimorghExplorerPackage.cs:line 41
   at LAP.Facade.Business.Explorer.EventStoreExplorerBusiness.CreateDataset(SimorghPortalExplorerRequest simorghPortalExplorerRequest, Int64 currentNodes, Int64 currentEdges) in /opt/MicroService.IAP/MicroService.IAP/Facade/Business/Explorer/EventStoreExplorerBusiness.cs:line 77
   at (Object, Object[])
   at Mohaymen.Mrpc.Host.ApiControllerManager.DefaultApiControllerManager.ApiInfo.Invoke(IApiController apiController, Dictionary`2 ordinalParameters, Dictionary`2 nameParameters, Object apiParameter, IClientEventService`1 clientEventService, CancellationToken cancellationToken)
   at Mohaymen.Mrpc.Host.Service.Processor.ApiControllerServiceProcessorExecute.InvokeApi(RequestMessageServiceInfoExecute requestMessageService, Object content, Type outputType, IClientEventService`1 clientEventService, IApiController apiController, CancellationToken executionCancellationToken)
    - ServerHandledException exception Exception_AppId: 5e62f1b1-60b5-43b7-829f-b64618c9a08c, Exception_UniqueId: 236611, Exception_LocalDateTime: 2024-05-15T13:35:55.6438544+03:30, Exception_UTCDateTime: 2024-05-15T10:05:55.6438544Z
       at System.ThrowException.Throw(Exception exception)
       at Mohaymen.Mrpc.Client.DynamicHighLevel.InvokeManager.DynamicInvokeManager.InvokeRawLevelCore(RawRequestInfo requestInfo, IMrpcPerformanceMetricItems mrpcPerformanceMetricItems, CancellationToken cancellationToken, HttpStatusCode[] desiredStatuses)
       at Mohaymen.Mrpc.Client.DynamicHighLevel.InvokeManager.DynamicInvokeManager.InvokeRawLevel(RawRequestInfo requestInfo, IMrpcPerformanceMetricItems mrpcPerformanceMetricItems, CancellationToken cancellationToken, HttpStatusCode[] desiredStatuses)
        - Sequence contains no matching element Exception_AppId: 1b48e161-de6a-4d07-ab1e-a74d0cf4912f, Exception_UniqueId: 36938, Exception_LocalDateTime: 2024-05-15T13:36:01.8017496+03:30, Exception_UTCDateTime: 2024-05-15T10:06:01.8017496Z
           at System.Linq.ThrowHelper.ThrowNoMatchException()
           at System.Linq.Enumerable.First[TSource](IEnumerable`1 source, Func`2 predicate)
           at LAP.Simorgh.Graph.Completion.Class.AttributeConverter.GetType(Int64 elementId, Int64 attributeId) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Completion/Class/AttributeConverter.cs:line 64
           at LAP.Simorgh.Graph.Completion.Class.AttributeConverter.ConvertAttribute(Int64 elementId, CompletionAttribute attribute) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Completion/Class/AttributeConverter.cs:line 51
           at LAP.Simorgh.Graph.Completion.Class.AttributeConverter.ConvertInstance(CompletionInstance instance) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Completion/Class/AttributeConverter.cs:line 38
           at LAP.Simorgh.Graph.Completion.Class.AttributeConverter.ConvertToRealValue(List`1 instances) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Completion/Class/AttributeConverter.cs:line 30
           at LAP.Simorgh.Graph.Completion.CompletionBusiness.Complete(EventStoreGraphCompletionRequest request, CancellationToken cancellationToken) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Completion/CompletionBusiness.cs:line 50
           at LAP.Simorgh.Graph.Api.EventStoreGraphCompletionApi.Complete(EventStoreGraphCompletionRequest request, CancellationToken cancellationToken) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Api/EventStoreGraphCompletionApi.cs:line 36
           at LAP.Simorgh.Graph.Logic.Completion.CompletionManager.Complete(List`1 instances, CancellationToken cancellationToken) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Logic/Completion/CompletionManager.cs:line 61
           at LAP.Simorgh.Graph.EventStoreGraphProvider.TryComplete(List`1 result, CancellationToken cancellationToken) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/EventStoreGraphProvider.cs:line 103
           at LAP.Simorgh.Graph.EventStoreGraphProvider.GetEventStoreGraph(SimorghRequest request, Dictionary`2 keyAttributes, CancellationToken cancellationToken) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/EventStoreGraphProvider.cs:line 58
           at LAP.Simorgh.Graph.Api.EventStoreGraphExplorerApi.GetEventStoreGraph(SimorghExplorerRequest request, List`1 keyAttributes, CancellationToken cancellationToken) in /opt/MicroService.LAP.DW/MicroService.IAP/Simorgh/Graph/Api/EventStoreGraphExplorerApi.cs:line 54
           at (Object, Object[])
           at Mohaymen.Mrpc.Host.ApiControllerManager.DefaultApiControllerManager.ApiInfo.Invoke(IApiController apiController, Dictionary`2 ordinalParameters, Dictionary`2 nameParameters, Object apiParameter, IClientEventService`1 clientEventService, CancellationToken cancellationToken)
           at Mohaymen.Mrpc.Host.Service.Processor.ApiControllerServiceProcessorExecute.InvokeApi(RequestMessageServiceInfoExecute requestMessageService, Object content, Type outputType, IClientEventService`1 clientEventService, IApiController apiController, CancellationToken executionCancellationToken)
```

در مثال فوق تمام بخش‌ها و لایه‌هایی از کد که منجر به پرتاب شدن آن استثنا شده است نشان داده می‌شود.

با بررسی دقیق روال فراخوانی کلاس‌ها می‌توان محدوده و مشکل را شناسایی کنیم.
:::warning
در برخی حالات توابع یک خطی ممکن است در کدهای تولید شده در حالت 
Release
حذف شوند و در 
StackTrace
نمایش داده نشوند.
:::

### باز تولید باگ
پس از شناسایی جایی که باگ و اشکال رخ داده است لازم است به وسیله‌ی تست واحد
(Unit test)
یا تولید دستی باگ آن را مجددا باز تولید کنیم.

:::tip
در نهایت لازم است برای هر باگ حتما یک تست واحد که با خطا اجرا می‌شود نوشته بشود و برای رفع باگ آن خطا را رفع کنیم و در 
summary
تابع تست، لینک ایشو را قرار می‌دهیم.
:::



این فرایند ممکن است چالشی باشد باید با استفاده از تمام داده‌هایی که در مورد باگ داریم تلاش کنیم آن را باز تولید کنیم.

#### داده‌هایی که باید از ایشو و محیط کارفرمایی کسب شود.
+ اطلاعات و روش تولید باگ که توسط گزارش‌کننده‌ی ایشو در جیرا ذکر شده
+ شرایط و جزئيات منابع و ساختار اشیای تعریف که در ایشو ذکر شده
+ فایل‌ها یا فیلم پیوست شده در ایشو
+ حجم داده و شرایط داده‌ی بارگذاری شده
+ کامنت‌های قبلی ایشو که در رفت‌وبرگشت با گزارش‌کننده‌ی ایشو تبادل شده است.
+ کانفیگ‌هایی که در محیط مشتری انجام شده است.

#### مواردی که باید برای تکمیل اطلاعات در تیم فنی و کدها بررسی بشود.
+ حالت‌های خاصی رفتار آن بخش کد که از روی بررسی کدهای مرتبط قابل بررسی است
+ بررسی شود که چه کانفیگ‌هایی ممکن است روی این رفتار اثر بگذارد.
+ توجه به داده‌های خاص مانند مقدارهای خالی، تهی، صفر و مشابه این مثال‌ها برای تولید باگ
+ توجه به حالت‌هایی که المان‌های یک آرایه دقیقا مشخص نیست و ممکن است مقدارهای متفاوتی داشته باشد.


:::tip
در برخی موارد برای بررسی باگ‌ها نیاز به بررسی لاگ پرفورمنس یا تکنیک‌های پیشرفته‌تر دیباگ است که در چک‌لیست‌های دیگر به صورت دقیق بررسی می‌شود.
:::

### فهم دقیق رفتار سیستم
به منظور رفع باگ لازم است رفتار دقیق سیستم را بدانیم. برای این کار روش‌های زیر پیشنهاد می‌شود.
+ با استفاده از راهنمای‌ کاربری و راهنمای راهبری ستاره رفتار دقیق را مطالعه کنید.
+ به تست‌ها واحد نوشته شده مرتبط با کلاس‌ها و کامنت‌ها توجه کنید و منطق کدها را بررسی کنید.
+ از کامیت کدهای موجود استوری مربوطه را پیدا کنید و سند استوری را مطالعه کنید.
+ از افراد مطلع در تیم بپرسید و انتظار کاربر از سیستم را شفاف کنید.
+ کدهای موجود را به صورت دقیق بررسی کنید و تلاش کنید منطق باطنی آن را متوجه شوید. 


### رفع باگ
با توجه به منطقی که از رفتار سیستم انتظار داریم و با در نظر گرفتن کدهای موجود، تغییرات مورد نظر را به دقت اعمال می‌کنیم. در این تغییرات باید به رفتار صحیح سیستم و مدیریت حالت‌های خاص توجه ویژه‌ای داشته باشیم تا از خراب شدن عملکرد دیگر بخش‌ها جلوگیری شود. برای تغییرات و کلاس‌های جدید حتما تست‌های مناسب نوشته شود. همچنین، برای کلاس‌ها و بخش‌های قدیمی، تلاش کنیم تا با
refactor
و بازنویسی کدها، ساختار و کیفیت کدها بهبود یابد.
