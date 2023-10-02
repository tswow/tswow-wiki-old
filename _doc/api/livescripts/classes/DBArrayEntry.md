---
title: DBArrayEntry
---


## Methods

{: .api-section }
### Delete

{: .code-example }
`Delete(): any`

Marks this entry for deletion. A deleted entry cannot
be added to any other container.

**Returns:** 
`any`

___

{: .api-section }
### Index

{: .code-example }
`Index(): TSNumber<uint64>`

Returns the internal Index used by this array entry.

These cannot be controlled by the programmer at all,
and should only be used for debugging.

**Returns:** 
`TSNumber`<`uint64`\>

___

{: .api-section }
### IsDeleted

{: .code-example }
`IsDeleted(): any`

Returns true if this entry has been deleted from its owner.

**Returns:** 
`any`

___

{: .api-section }
### IsDirty

{: .code-example }
`IsDirty(): any`

Returns true if this entry will be saved to database on the
next call to DBContainer#Save on its owner.

**Returns:** 
`any`

___

{: .api-section }
### MarkDirty

{: .code-example }
`MarkDirty(): any`

Marks this entry to be saved to the database for the next
call to DBContainer#Save on its owner.

**Returns:** 
`any`

