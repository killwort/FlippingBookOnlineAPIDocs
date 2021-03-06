#### Update a publication level trigger
`POST /api/v1/fbonline/publication/{id}/trigger/{triggerId}`

##### Parameters in path and query
|Name|Description|
|-|-|
|<Badge>Path</Badge> id|<Badge>REQUIRED</Badge> The publication identifier.|
|<Badge>Path</Badge> triggerId|<Badge>REQUIRED</Badge> The trigger identifier.|
##### Parameters in request body
|Name|Type|Description|
|-|-|-|
|success|boolean|Indicates wheter your request was succesful or not.|
|wellKnownError|string|Machine-readable error code.|
|message|string|Human-readable error message.|
|error|string|Detailed error code.|
|name|string|Description of a trigger. It is not seen anywhere but via API.|
|endpoint|string|Target URL for the trigger. When trigger fires an event, this URL is POST'ed with corresponding trigger/link/publication data.|
|events|array|Event names for which this trigger should fire.|
##### Response format
|Name|Type|Description|
|-|-|-|
|success|boolean|Indicates wheter your request was succesful or not.|
|wellKnownError|string|Machine-readable error code.|
|message|string|Human-readable error message.|
|error|string|Detailed error code.|
|id|string|Updated trigger identifier.|
