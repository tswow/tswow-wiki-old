---
title: TSLoot
---


## Methods

{: .api-section }
### AddItem

{: .code-example }
`AddItem(id, minCount, maxCount, lootMode?, needsQuest?, groupId?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `minCount` | `uint8` |
| `maxCount` | `uint8` |
| `lootMode?` | `uint16` |
| `needsQuest?` | `boolean` |
| `groupId?` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### AddLooter

{: .code-example }
`AddLooter(looter): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `looter` | `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### Clear

{: .code-example }
`Clear(): void`

**Returns:** 
`void`

___

{: .api-section }
### Filter

{: .code-example }
`Filter(predicate): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `predicate` | (`item`: [`TSLootItem`](TSLootItem)) => `boolean` |

**Returns:** 
`any`

___

{: .api-section }
### GetGeneratesNormally

{: .code-example }
`GetGeneratesNormally(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### GetItem

{: .code-example }
`GetItem(index): TSLootItem`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSLootItem`](TSLootItem)

___

{: .api-section }
### GetItemCount

{: .code-example }
`GetItemCount(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetLootOwnerGUID

{: .code-example }
`GetLootOwnerGUID(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetLootType

{: .code-example }
`GetLootType(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetMoney

{: .code-example }
`GetMoney(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetQuestItem

{: .code-example }
`GetQuestItem(index): TSLootItem`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSLootItem`](TSLootItem)

___

{: .api-section }
### GetQuestItemCount

{: .code-example }
`GetQuestItemCount(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### IsLooted

{: .code-example }
`IsLooted(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### RemoveLooter

{: .code-example }
`RemoveLooter(looter): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `looter` | `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SetGeneratesNormally

{: .code-example }
`SetGeneratesNormally(normal): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `normal` | `boolean` |

**Returns:** 
`any`

___

{: .api-section }
### SetLootOwner

{: .code-example }
`SetLootOwner(owner): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `owner` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
`any`

___

{: .api-section }
### SetLootType

{: .code-example }
`SetLootType(lootType): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `lootType` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetMoney

{: .code-example }
`SetMoney(money): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `money` | `uint32` |

**Returns:** 
`void`

