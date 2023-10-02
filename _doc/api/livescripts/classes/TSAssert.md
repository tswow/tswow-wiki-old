---
title: TSAssert
---


## Methods

{: .api-section }
### Equals

{: .code-example }
`Equals<T>(a, b, reason?): void`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `a` | `T` |
| `b` | `T` |
| `reason?` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### HasItem

{: .code-example }
`HasItem(player, item, count?, checkBank?, reason?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |
| `item` | `uint32` |
| `count?` | `uint32` |
| `checkBank?` | `boolean` |
| `reason?` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### HasSpell

{: .code-example }
`HasSpell(player, spell, reason?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |
| `spell` | `uint32` |
| `reason?` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### IsFalse

{: .code-example }
`IsFalse(expression, reason?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `expression` | `boolean` |
| `reason?` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### IsTrue

{: .code-example }
`IsTrue(expression, reason?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `expression` | `boolean` |
| `reason?` | `string` |

**Returns:** 
`void`

