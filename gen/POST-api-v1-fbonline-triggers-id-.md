#### Update the trigger
`POST /api/v1/fbonline/triggers/{id}`

With this method your application may modify the trigger. Either events for which the trigger is 
fired or webhook address could be modified.
##### Parameters in path and query
|Name|Description|
|-|-|
|<Badge>Path</Badge> id|<Badge>REQUIRED</Badge> The trigger identifier.|
##### Parameters in request body
|Name|Type|Description|
|-|-|-|
|trigger|object||
|trigger.triggerOn|string|Scope type of the trigger.|
|trigger.events|array|List of events for which the trigger shoud fire.|
|trigger.endpoint|string|Endpoint of webhook to call upon firing the trigger. When it is called, trigger data  and fire context are POSTed to your hook.|
|trigger.limitTo|object|Trigger scope. Can be `null` - in this case trigger should fire for specified events for all books/tracked links in your account.|
|trigger.limitTo.parentObject|string|Scope type of the trigger.|
|trigger.limitTo.parentObjectId|string||
##### Response format
|Name|Type|Description|
|-|-|-|
|success|boolean|Indicates if your request has been successful or not.|
|wellKnownError|string|Machine-readable error code.|
|message|string|Human-readable error message.|
|error|string|Detailed error code.|
|id|string|Updated trigger identifier.|
