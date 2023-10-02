---
title: Item
---






{: .api-section }
### OnBank




{: .code-example }
`OnBank((item,player,bag,slot,swap,result) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `bag` | `uint8` |
| `slot` | `uint8` |
| `swap` | `boolean` |
| `result` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnCalculateFeralAttackPower




{: .code-example }
`OnCalculateFeralAttackPower((item,extra,result) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItemTemplate`](../classes/TSItemTemplate) |
| `extra` | `TSNumber`<`int32`\> |
| `result` | `TSMutableNumber`<`int32`\> |

{: .api-section }
### OnCanChangeEquipState




{: .code-example }
`OnCanChangeEquipState((template,res,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `template` | [`TSItemTemplate`](../classes/TSItemTemplate) |
| `res` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCanEquip




{: .code-example }
`OnCanEquip((item,player,slot,swap,result,[InventoryResult](../enums/InventoryResult)\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `slot` | [`EquipmentSlots`](../enums/EquipmentSlots) |
| `swap` | `boolean` |
| `result` | [`TSMutable`](../classes/TSMutable)<[`InventoryResult`](../enums/InventoryResult) |
| `[InventoryResult](../enums/InventoryResult)\>` | undefined |

{: .api-section }
### OnCanUse




{: .code-example }
`OnCanUse((item,player,result) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `result` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnCanUseType




{: .code-example }
`OnCanUseType((item,player,result) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItemTemplate`](../classes/TSItemTemplate) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `result` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnCastSpell




{: .code-example }
`OnCastSpell((item,player,unit,spell,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `unit` | [`TSUnit`](../classes/TSUnit) |
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnDestroyEarly




{: .code-example }
`OnDestroyEarly((item,player,result,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `result` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEquip




{: .code-example }
`OnEquip((item,player,slot,isMerge) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `slot` | [`EquipmentSlots`](../enums/EquipmentSlots) |
| `isMerge` | `boolean` |

{: .api-section }
### OnExpire




{: .code-example }
`OnExpire((template,player,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `template` | [`TSItemTemplate`](../classes/TSItemTemplate) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipHello




{: .code-example }
`OnGossipHello((item,player,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipSelect




{: .code-example }
`OnGossipSelect((item,player,menuId,selectionId,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `menuId` | `uint32` |
| `selectionId` | `uint32` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipSelectCode




{: .code-example }
`OnGossipSelectCode((item,player,menuId,selectionId,text,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `menuId` | `uint32` |
| `selectionId` | `uint32` |
| `text` | `string` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnLFGRollEarly




{: .code-example }
`OnLFGRollEarly((item,looted,looter,result) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItemTemplate`](../classes/TSItemTemplate) |
| `looted` | [`TSWorldObject`](../classes/TSWorldObject) |
| `looter` | [`TSPlayer`](../classes/TSPlayer) |
| `result` | `TSMutableNumber`<`int32`\> |

{: .api-section }
### OnQuestAccept




{: .code-example }
`OnQuestAccept((item,player,quest) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `quest` | [`TSQuest`](../classes/TSQuest) |

{: .api-section }
### OnRemove




{: .code-example }
`OnRemove((item,player,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnTakenAsLoot




{: .code-example }
`OnTakenAsLoot((item,lootItem,loot,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `lootItem` | [`TSLootItem`](../classes/TSLootItem) |
| `loot` | [`TSLoot`](../classes/TSLoot) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnUnequip




{: .code-example }
`OnUnequip((item,player,isSwap,result) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `isSwap` | `boolean` |
| `result` | `TSMutableNumber`<[`InventoryResult`](../enums/InventoryResult)\> |

{: .api-section }
### OnUse




{: .code-example }
`OnUse((item,player,reserved,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `item` | [`TSItem`](../classes/TSItem) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `reserved` | `void` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
