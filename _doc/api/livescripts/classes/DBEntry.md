---
title: DBEntry
---


## Methods

{: .api-section }
### Delete

{: .code-example }
`Delete(): void`

Removes this entry from the database immediately.

**Returns:** 
`void`

___

{: .api-section }
### Load

{: .code-example }
`Load(): boolean`

Reads this entry from the database.

If it does not yet exist in the database,
this function does nothing.

**Returns:** 
`boolean`

___

{: .api-section }
### Save

{: .code-example }
`Save(): void`

Writes this entry to the database

**Returns:** 
`void`

