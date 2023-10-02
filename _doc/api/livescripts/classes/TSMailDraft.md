---
title: TSMailDraft
---


## Methods

{: .api-section }
### AddItem

{: .code-example }
`AddItem(enry, count, player?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enry` | `uint32` |
| `count` | `uint8` |
| `player?` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`any`

___

{: .api-section }
### FilterItems

{: .code-example }
`FilterItems(predicate): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `predicate` | (`item`: [`TSItem`](TSItem)) => `boolean` |

**Returns:** 
`any`

___

{: .api-section }
### GetBody

{: .code-example }
`GetBody(): string`

**Returns:** 
`string`

___

{: .api-section }
### GetCOD

{: .code-example }
`GetCOD(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetItem

{: .code-example }
`GetItem(item): TSItem`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `item` | `uint64` |

**Returns:** 
[`TSItem`](TSItem)

___

{: .api-section }
### GetItemKeys

{: .code-example }
`GetItemKeys(): TSArray<uint64>`

**Returns:** 
`TSArray`<`uint64`\>

___

{: .api-section }
### GetMoney

{: .code-example }
`GetMoney(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetSubject

{: .code-example }
`GetSubject(): string`

**Returns:** 
`string`

___

{: .api-section }
### GetTemplateID

{: .code-example }
`GetTemplateID(): TSNumber<int16>`

**Returns:** 
`TSNumber`<`int16`\>

___

{: .api-section }
### SetBody

{: .code-example }
`SetBody(body): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `body` | `string` |

**Returns:** 
`any`

___

{: .api-section }
### SetSubject

{: .code-example }
`SetSubject(subject): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `subject` | `string` |

**Returns:** 
`any`

___

{: .api-section }
### SetTemplateID

{: .code-example }
`SetTemplateID(id): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint16` |

**Returns:** 
`any`

