---
title: GameObject
---






{: .api-section }
### OnCreate




{: .code-example }
`OnCreate((obj,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnDamaged




{: .code-example }
`OnDamaged((obj,damagerOrHealer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `damagerOrHealer` | [`TSWorldObject`](../classes/TSWorldObject) |

{: .api-section }
### OnDestroyed




{: .code-example }
`OnDestroyed((obj,destroyer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `destroyer` | [`TSWorldObject`](../classes/TSWorldObject) |

{: .api-section }
### OnDialogStatus




{: .code-example }
`OnDialogStatus((obj,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnGOStateChanged




{: .code-example }
`OnGOStateChanged((obj,state) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `state` | `uint32` |

{: .api-section }
### OnGenerateFishLoot




{: .code-example }
`OnGenerateFishLoot((obj,player,loot,isJunk) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `loot` | [`TSLoot`](../classes/TSLoot) |
| `isJunk` | `boolean` |

{: .api-section }
### OnGenerateLoot




{: .code-example }
`OnGenerateLoot((obj,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnGossipHello




{: .code-example }
`OnGossipHello((obj,player,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipSelect




{: .code-example }
`OnGossipSelect((obj,player,menuId,selection,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `menuId` | `uint32` |
| `selection` | `uint32` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipSelectCode




{: .code-example }
`OnGossipSelectCode((obj,player,menuId,selection,text,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `menuId` | `uint32` |
| `selection` | `uint32` |
| `text` | `string` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnLootStateChanged




{: .code-example }
`OnLootStateChanged((obj,state,changer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `state` | `uint32` |
| `changer` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnQuestAccept




{: .code-example }
`OnQuestAccept((obj,player,quest) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `quest` | [`TSQuest`](../classes/TSQuest) |

{: .api-section }
### OnReload




{: .code-example }
`OnReload((obj) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |

{: .api-section }
### OnRemove




{: .code-example }
`OnRemove((obj) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |

{: .api-section }
### OnUpdate




{: .code-example }
`OnUpdate((obj,diff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `diff` | `uint32` |

{: .api-section }
### OnUse




{: .code-example }
`OnUse((obj,user,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `user` | [`TSUnit`](../classes/TSUnit) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
