---
title: Battleground
---






{: .api-section }
### OnAchievementCriteria




{: .code-example }
`OnAchievementCriteria((bg,criteria,player,target,miscValueA,handled,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `criteria` | `TSNumber`<`uint32`\> |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `target` | [`TSUnit`](../classes/TSUnit) |
| `miscValueA` | `TSNumber`<`uint32`\> |
| `handled` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAddCreature




{: .code-example }
`OnAddCreature((bg,type,entry,x,y,z,o,respawnTime) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `type` | `TSNumber`<`uint32`\> |
| `entry` | `TSMutableNumber`<`uint32`\> |
| `x` | `TSMutableNumber`<`float`\> |
| `y` | `TSMutableNumber`<`float`\> |
| `z` | `TSMutableNumber`<`float`\> |
| `o` | `TSMutableNumber`<`float`\> |
| `respawnTime` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnAddGameObject




{: .code-example }
`OnAddGameObject((bg,type,entry,goState,x,y,z,o,rot0,rot1,rot2,rot3) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `type` | `TSNumber`<`uint32`\> |
| `entry` | `TSMutableNumber`<`uint32`\> |
| `goState` | `TSMutableNumber`<`uint8`\> |
| `x` | `TSMutableNumber`<`float`\> |
| `y` | `TSMutableNumber`<`float`\> |
| `z` | `TSMutableNumber`<`float`\> |
| `o` | `TSMutableNumber`<`float`\> |
| `rot0` | `TSMutableNumber`<`float`\> |
| `rot1` | `TSMutableNumber`<`float`\> |
| `rot2` | `TSMutableNumber`<`float`\> |
| `rot3` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnAddPlayer




{: .code-example }
`OnAddPlayer((bg,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnAddSpiritGuide




{: .code-example }
`OnAddSpiritGuide((bg,type,entry,teamId,x,y,z,o) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `type` | `TSNumber`<`uint32`\> |
| `entry` | `TSMutableNumber`<`uint32`\> |
| `teamId` | `TSMutableNumber`<`uint8`\> |
| `x` | `TSMutableNumber`<`float`\> |
| `y` | `TSMutableNumber`<`float`\> |
| `z` | `TSMutableNumber`<`float`\> |
| `o` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnAreaTrigger




{: .code-example }
`OnAreaTrigger((bg,player,trigger,handled,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `trigger` | `uint32` |
| `handled` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCanCreate




{: .code-example }
`OnCanCreate((bg,success,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `success` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnClickFlag




{: .code-example }
`OnClickFlag((bg,player,flagObj) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `flagObj` | [`TSGameObject`](../classes/TSGameObject) |

{: .api-section }
### OnCloseDoors




{: .code-example }
`OnCloseDoors((bg) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |

{: .api-section }
### OnCreate




{: .code-example }
`OnCreate((bg) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |

{: .api-section }
### OnDestroyGate




{: .code-example }
`OnDestroyGate((bg,player,target) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `target` | [`TSGameObject`](../classes/TSGameObject) |

{: .api-section }
### OnDropFlag




{: .code-example }
`OnDropFlag((bg,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnEndEarly




{: .code-example }
`OnEndEarly((bg,winner) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `winner` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnEndLate



Note that "winner" can no longer be changed at this stage,
for that, use "OnEndEarly"


{: .code-example }
`OnEndLate((bg,winner) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `winner` | `uint32` |

{: .api-section }
### OnGenericEvent




{: .code-example }
`OnGenericEvent((bg,obj,eventId,invoker) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `obj` | [`TSWorldObject`](../classes/TSWorldObject) |
| `eventId` | `uint32` |
| `invoker` | [`TSWorldObject`](../classes/TSWorldObject) |

{: .api-section }
### OnKillCreature




{: .code-example }
`OnKillCreature((bg,victim,killer,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `victim` | [`TSCreature`](../classes/TSCreature) |
| `killer` | `any` |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnKillPlayer




{: .code-example }
`OnKillPlayer((bg,victim,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `victim` | [`TSPlayer`](../classes/TSPlayer) |
| `killer` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnOpenDoors




{: .code-example }
`OnOpenDoors((bg) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |

{: .api-section }
### OnPlayerLogin




{: .code-example }
`OnPlayerLogin((bg,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnPlayerLogout




{: .code-example }
`OnPlayerLogout((bg,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnPlayerUnderMap




{: .code-example }
`OnPlayerUnderMap((bg,player,handled,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `handled` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnReload




{: .code-example }
`OnReload((bg) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |

{: .api-section }
### OnRemovePlayer




{: .code-example }
`OnRemovePlayer((bg,guid,player,teamId) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `guid` | `uint64` |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `teamId` | `uint32` |

{: .api-section }
### OnReset




{: .code-example }
`OnReset((bg) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |

{: .api-section }
### OnSelect




{: .code-example }
`OnSelect((bgType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bgType` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnSendScore




{: .code-example }
`OnSendScore((bg,score,packet,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `score` | [`TSBattlegroundScore`](../classes/TSBattlegroundScore) |
| `packet` | [`TSWorldPacket`](../classes/TSWorldPacket) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnUpdateEarly




{: .code-example }
`OnUpdateEarly((bg,diff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `diff` | `uint32` |

{: .api-section }
### OnUpdateLate




{: .code-example }
`OnUpdateLate((bg,diff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `diff` | `uint32` |

{: .api-section }
### OnUpdateScore




{: .code-example }
`OnUpdateScore((bg,player,type,isAddHonor,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bg` | [`TSBattleground`](../classes/TSBattleground) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `type` | `uint32` |
| `isAddHonor` | `boolean` |
| `value` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnWeight




{: .code-example }
`OnWeight((bgType,weight,origType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `bgType` | `TSNumber`<`uint32`\> |
| `weight` | `TSMutableNumber`<`float`\> |
| `origType` | `TSNumber`<`uint32`\> |
