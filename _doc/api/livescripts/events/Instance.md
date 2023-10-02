---
title: Instance
---






{: .api-section }
### OnBossStateChange




{: .code-example }
`OnBossStateChange((instance,id,state) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `id` | `uint32` |
| `state` | `uint32` |

{: .api-section }
### OnCanKillBoss




{: .code-example }
`OnCanKillBoss((instance,bossId,player,canKill,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `bossId` | `uint32` |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `canKill` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCreate



**`deprecated`** use OnLoad and check 'created' argument


{: .code-example }
`OnCreate((instance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |

{: .api-section }
### OnFillInitialWorldStates




{: .code-example }
`OnFillInitialWorldStates((instance,packet) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `packet` | [`TSWorldStatePacket`](../classes/TSWorldStatePacket) |

{: .api-section }
### OnLoad




{: .code-example }
`OnLoad((instance,created) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `created` | `boolean` |

{: .api-section }
### OnLoadDoorData




{: .code-example }
`OnLoadDoorData((instance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |

{: .api-section }
### OnLoadMinionData




{: .code-example }
`OnLoadMinionData((instance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |

{: .api-section }
### OnLoadObjectData




{: .code-example }
`OnLoadObjectData((instance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |

{: .api-section }
### OnPlayerEnter




{: .code-example }
`OnPlayerEnter((instance,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnPlayerLeave




{: .code-example }
`OnPlayerLeave((instance,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnReload




{: .code-example }
`OnReload((instance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |

{: .api-section }
### OnSave




{: .code-example }
`OnSave((instance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |

{: .api-section }
### OnSetBossNumber




{: .code-example }
`OnSetBossNumber((instance,num) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `num` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnUpdate




{: .code-example }
`OnUpdate((instance,diff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `instance` | [`TSInstance`](../classes/TSInstance) |
| `diff` | `uint32` |
