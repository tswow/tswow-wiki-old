---
title: TSCollisions
---


## Methods

{: .api-section }
### Add

{: .code-example }
`Add(id, range, minDelay, maxHits, callback): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `string` |
| `range` | `float` |
| `minDelay` | `uint32` |
| `maxHits` | `uint32` |
| `callback` | `TSCollisionCallback` |

**Returns:** 
`any`

___

{: .api-section }
### Contains

{: .code-example }
`Contains(id): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### Get

{: .code-example }
`Get(id): TSCollisionEntry`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `string` |

**Returns:** 
[`TSCollisionEntry`](TSCollisionEntry)

