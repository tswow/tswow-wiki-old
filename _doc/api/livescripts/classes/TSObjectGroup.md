---
title: TSObjectGroup
---


## Accessors

{: .api-section }
### length

• `get` **length**(): `TSNumber`<`uint32`\>

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### Clear

{: .code-example }
`Clear(): any`

**Returns:** 
`any`

___

{: .api-section }
### Remove

{: .code-example }
`Remove(obj): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`void`

___

{: .api-section }
### filterInPlace

{: .code-example }
`filterInPlace(callback): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`obj`: [`TSWorldObject`](TSWorldObject)) => `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### forEach

{: .code-example }
`forEach(callback): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`obj`: [`TSWorldObject`](TSWorldObject)) => `void` |

**Returns:** 
`void`

