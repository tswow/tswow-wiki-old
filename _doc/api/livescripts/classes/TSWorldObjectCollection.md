---
title: TSWorldObjectCollection
---


## Properties

{: .api-section }
### length

• **length**: `TSNumber`<`uint32`\>

___

{: .api-section }
### find

{: .code-example }
`find(callback): TSWorldObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`obj`: [`TSWorldObject`](TSWorldObject)) => `boolean` |

**Returns:** 
[`TSWorldObject`](TSWorldObject)

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

___

{: .api-section }
### get

{: .code-example }
`get(index): TSWorldObject`

**`warn`** This is an O(n) operation, because the backing type is an std::list

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSWorldObject`](TSWorldObject)

