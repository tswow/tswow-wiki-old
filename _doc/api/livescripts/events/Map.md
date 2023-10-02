---
title: Map
---






{: .api-section }
### OnCheckEncounter




{: .code-example }
`OnCheckEncounter((map,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnCreate




{: .code-example }
`OnCreate((map) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |

{: .api-section }
### OnCreatureCreate




{: .code-example }
`OnCreatureCreate((map,creature,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCreatureRemove




{: .code-example }
`OnCreatureRemove((map,creature) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `creature` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnGameObjectCreate




{: .code-example }
`OnGameObjectCreate((map,obj,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGameObjectRemove




{: .code-example }
`OnGameObjectRemove((map,obj) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `obj` | [`TSGameObject`](../classes/TSGameObject) |

{: .api-section }
### OnPlayerEnter




{: .code-example }
`OnPlayerEnter((map,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnPlayerLeave




{: .code-example }
`OnPlayerLeave((map,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnReload




{: .code-example }
`OnReload((map) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |

{: .api-section }
### OnUpdate




{: .code-example }
`OnUpdate((map,diff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `diff` | `uint32` |

{: .api-section }
### OnUpdateDelayed




{: .code-example }
`OnUpdateDelayed((map,diff,mgr) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `diff` | `uint32` |
| `mgr` | [`TSMainThreadContext`](../classes/TSMainThreadContext) |

{: .api-section }
### OnWeatherChange




{: .code-example }
`OnWeatherChange((map,weather) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `weather` | [`TSWeather`](../classes/TSWeather) |

{: .api-section }
### OnWeatherUpdate




{: .code-example }
`OnWeatherUpdate((map,weather) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `map` | [`TSMap`](../classes/TSMap) |
| `weather` | [`TSWeather`](../classes/TSWeather) |
