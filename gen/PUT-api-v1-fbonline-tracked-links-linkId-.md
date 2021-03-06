#### Modify or delete specified tracked link
`PUT /api/v1/fbonline/tracked_links/{linkId}`

With this method your application may update or delete a tracked link.
::: warning
Updates do not reset tracked link event counters thus disabling and then re-enabling some event for the link
will not cause to trigger it again if it happened before.
:::
##### Parameters in request body
|Name|Type|Description|
|-|-|-|
|title|string|Tracked link title visible only to owner.|
|publicationUid|string|Publication unique identifier for the created link.|
|publicationHashid|string|Publication URL identifier for the created link.|
|publicationUrl|string|Publication URL for the created link.|
|notificationType|string|Method for delivering notification on link events. Can be one of the following values: `Email` - notify via email;  `Zapier` - notify via [zapier](https://zapier.com/) integration.|
|onViewTriggerSingle|boolean|Should notification be delivered when link is opened for the first time?|
|onViewTrigger|boolean|Should notification be delivered when link is opened (first 10 times)?|
|onDownload|boolean|Should notification be delivered when PDF download or printing is requested for linked publication?|
|onNotOpenedUntil|boolean|Should notification be delivered when link is not opened until specified date/time (ISO 8601 format)?|
##### Response format
|Name|Type|Description|
|-|-|-|
|success|boolean|Indicates if your request has been successful or not.|
|wellKnownError|string|Machine-readable error code.|
|message|string|Human-readable error message.|
|error|string|Detailed error code.|
|total|integer|Total number of links matching request (one).|
|userTotal|integer|Total number of links in your account (disregarding filters/offset/count).|
|links|array|One link matching your request.|
|links.id|string|Link unique identifier.|
|links.title|string|Link title (visible only to link owner, not end-user).|
|links.state|string|Link state. It may consist of any combination (comma separated) of the following values: `WithNewData` - there is some 'unseen' statistics collected for the link; `WithoutNewData` - there is no 'unseen' statistics for the link; `Active` - link is active and enabled; `Deleted` - link was deleted and unavailable to end-users (readers); `Expired` - link's lifetime ended - it was not clicked before set expiration time.|
|links.createdAt|string|Link creation timestamp. ISO 8601 date format.|
|links.urlName|string|Unique URL part for the link. To get full URL you should prefix it with `https://online.flippingbook.com/link/` (for the default domain).|
|links.triggerId|string|Trigger identifier for the link.|
|links.shortStats|object|View statistics for the link.|
|links.shortStats.fullStats|object|Statistics for tracked link|
|links.shortStats.fullStats.lastViewedAt|string|Date/time of last view, ISO 8601 format.|
|links.shortStats.fullStats.viewDuration|number|Total viewing time (seconds).|
|links.shortStats.fullStats.visits|number|Total number of views.|
|links.shortStats.sinceLastUpdate|object|Statistics for tracked link|
|links.shortStats.sinceLastUpdate.lastViewedAt|string|Date/time of last view, ISO 8601 format.|
|links.shortStats.sinceLastUpdate.viewDuration|number|Total viewing time (seconds).|
|links.shortStats.sinceLastUpdate.visits|number|Total number of views.|
|links.publication|object|Parent publication excerpt.|
|links.publication.id|object|Parent publication identifiers.|
|links.publication.id.id|string|Parent publication unique identifier.|
|links.publication.id.hashId|string|Parent publication URL identifier.|
|links.publication.title|string|Parent publication name.|
|links.publication.url|string|Parent publication canonical URL.|
|links.triggers|object|Triggers for the link.|
|links.triggers.onView|object|View trigger for the link.|
|links.triggers.onView.enabled|boolean|Is this trigger enabled.|
|links.triggers.onView.amount|number|How many times this trigger is allowed to fire.|
|links.triggers.onDownload|object|Download trigger for the link.|
|links.triggers.onDownload.enabled|boolean|Is this trigger enabled.|
|links.triggers.onNotOpenedUntil|object|Link not opened before trigger for the link.|
|links.triggers.onNotOpenedUntil.enabled|boolean|Is this trigger enabled.|
|links.triggers.onNotOpenedUntil.until|string|When this trigger should fire.|
|links.triggers.triggerVia|string|Trigger delivery method. Can be one of the following values:  `Email` - notify via email;  `Zapier` - notify via [zapier](https://zapier.com/) integration.|
