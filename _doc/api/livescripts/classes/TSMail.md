---
title: TSMail
---


## Methods

{: .api-section }
### AddItem

{: .code-example }
`AddItem(entry, count, player?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
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
| `predicate` | (`info`: [`TSMailItemInfo`](TSMailItemInfo)) => `boolean` |

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
### GetChecked

{: .code-example }
`GetChecked(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetID

{: .code-example }
`GetID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetItemCount

{: .code-example }
`GetItemCount(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetItems

{: .code-example }
`GetItems(): TSArray<TSMailItemInfo>`

**Returns:** 
`TSArray`<[`TSMailItemInfo`](TSMailItemInfo)\>

___

{: .api-section }
### GetMoney

{: .code-example }
`GetMoney(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetReceiver

{: .code-example }
`GetReceiver(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetSender

{: .code-example }
`GetSender(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetState

{: .code-example }
`GetState(): TSNumber<int16>`

**Returns:** 
`TSNumber`<`int16`\>

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
### GetType

{: .code-example }
`GetType(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### RemoveAllItems

{: .code-example }
`RemoveAllItems(): any`

**Returns:** 
`any`

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
### SetCOD

{: .code-example }
`SetCOD(cod): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `cod` | `uint32` |

**Returns:** 
`any`

___

{: .api-section }
### SetChecked

{: .code-example }
`SetChecked(checked): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `checked` | `uint32` |

**Returns:** 
`any`

___

{: .api-section }
### SetMoney

{: .code-example }
`SetMoney(money): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `money` | `uint32` |

**Returns:** 
`any`

___

{: .api-section }
### SetSender

{: .code-example }
`SetSender(type, guid): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint8` |
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
`any`

___

{: .api-section }
### SetState

{: .code-example }
`SetState(state): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `state` | `uint8` |

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

