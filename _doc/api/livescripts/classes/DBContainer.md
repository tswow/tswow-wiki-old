---
title: DBContainer
---


## Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `T` | extends [`DBArrayEntry`](DBArrayEntry) |

## Methods

{: .api-section }
### Add

{: .code-example }
`Add(value): T`

Adds a new value to be owned by this container.

- Adding a value belonging to another container is invalid and
  will cause an exception. This applies even if the object
  has been deleted from the old collection.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `T` |

**Returns:** 
`T`

___

{: .api-section }
### Save

{: .code-example }
`Save(): any`

Writes all dirty array members to the database, and
removes all marked for deletion.

**Returns:** 
`any`

___

{: .api-section }
### Size

{: .code-example }
`Size(): TSNumber<uint32>`

Counts all active (non-removed) entries currently in this container.

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### ToArray

{: .code-example }
`ToArray(): TSArray<T>`

Converts this container into an array.

- The generated array holds no ownership of the items contained

**Returns:** 
`TSArray`<`T`\>

___

{: .api-section }
### TotalSize

{: .code-example }
`TotalSize(): TSNumber<uint32>`

Counts all entries currently in memory, including those scheduled
to be removed

- Removed entries are freed from memory on "DBContainer#Save()"

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### find

{: .code-example }
`find(callback): T`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`value`: `T`) => `boolean` |

**Returns:** 
`T`

___

{: .api-section }
### forEach

{: .code-example }
`forEach(callback): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`value`: `T`) => `void` |

**Returns:** 
`any`

___

{: .api-section }
### reduce

{: .code-example }
`reduce<M>(callback, init): any`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `M` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`old`: `M`, `cur`: `T`) => `M` |
| `init` | `M` |

**Returns:** 
`any`

