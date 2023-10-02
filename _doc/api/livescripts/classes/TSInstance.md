---
title: TSInstance
---


## Hierarchy

- [`TSMap`](TSMap)

  ↳ **`TSInstance`**

## Methods

{: .api-section }
### BindAllPlayers

{: .code-example }
`BindAllPlayers(): void`

**Returns:** 
`void`

___

{: .api-section }
### DoCastSpellOnPlayers

{: .code-example }
`DoCastSpellOnPlayers(spell, includePets, includeControlled): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |
| `includePets` | `boolean` |
| `includeControlled` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### DoCloseDoorOrButton

{: .code-example }
`DoCloseDoorOrButton(guid): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
`void`

___

{: .api-section }
### DoRemoveAurasDueToSpellOnPlayers

{: .code-example }
`DoRemoveAurasDueToSpellOnPlayers(spell, includePets?, includeControlled?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |
| `includePets?` | `boolean` |
| `includeControlled?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### DoRespawnGameObject

{: .code-example }
`DoRespawnGameObject(guid, seconds): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |
| `seconds` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### DoSendNotify

{: .code-example }
`DoSendNotify(message): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `message` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### DoStartTimedAchievement

{: .code-example }
`DoStartTimedAchievement(type, entry): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### DoStopTimedAchievement

{: .code-example }
`DoStopTimedAchievement(type, entry): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### DoUpdateAchievementCriteria

{: .code-example }
`DoUpdateAchievementCriteria(type, miscValue1?, miscValue2?, unit?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `miscValue1?` | `uint32` |
| `miscValue2?` | `uint32` |
| `unit?` | [`TSUnit`](TSUnit) |

**Returns:** 
`void`

___

{: .api-section }
### DoUpdateWorldState

{: .code-example }
`DoUpdateWorldState(worldStateId, worldStateValue): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `worldStateId` | `uint32` |
| `worldStateValue` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### DoUseDoorOrButton

{: .code-example }
`DoUseDoorOrButton(guid, withRestoreTime?, useAlternativeState?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |
| `withRestoreTime?` | `uint32` |
| `useAlternativeState?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### GetBossInfo

{: .code-example }
`GetBossInfo(id): TSBossInfo`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
[`TSBossInfo`](TSBossInfo)

___

{: .api-section }
### GetBossState

{: .code-example }
`GetBossState(id): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetEncounterCount

{: .code-example }
`GetEncounterCount(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetFactionInInstance

{: .code-example }
`GetFactionInInstance(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetMaxPlayers

{: .code-example }
`GetMaxPlayers(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetMaxResetDelay

{: .code-example }
`GetMaxResetDelay(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetObjectGUID

{: .code-example }
`GetObjectGUID(type): TSNumber<uint64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`TSNumber`<`uint64`\>

___

{: .api-section }
### GetTeamIDInInstance

{: .code-example }
`GetTeamIDInInstance(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### HasPermBoundPlayers

{: .code-example }
`HasPermBoundPlayers(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsEncounterInProgress

{: .code-example }
`IsEncounterInProgress(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

#### Overrides

[TSMap](TSMap).[IsNull](TSMap.md#isnull)

___

{: .api-section }
### MarkAreaTriggerDone

{: .code-example }
`MarkAreaTriggerDone(id): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveFromMap

{: .code-example }
`RemoveFromMap(player, deleteFromWorld): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |
| `deleteFromWorld` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### ResetAreaTriggerDone

{: .code-example }
`ResetAreaTriggerDone(id): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SaveToDB

{: .code-example }
`SaveToDB(): void`

**Returns:** 
`void`

___

{: .api-section }
### SetBossState

{: .code-example }
`SetBossState(id, encounterState): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `encounterState` | `uint32` |

**Returns:** 
`void`

___

## Inherited Members
[`AddNamedTimer`](./TSMap#addnamedtimer) [`AddTimer`](./TSMap#addtimer) [`ClearEntityGroups`](./TSMap#clearentitygroups) [`DoDelayed`](./TSMap#dodelayed) [`GetAreaID`](./TSMap#getareaid) [`GetBool`](./TSMap#getbool) [`GetCreature`](./TSMap#getcreature) [`GetCreatureByDBGUID`](./TSMap#getcreaturebydbguid) [`GetCreatures`](./TSMap#getcreatures) [`GetDifficulty`](./TSMap#getdifficulty) [`GetEntityGroup`](./TSMap#getentitygroup) [`GetFloat`](./TSMap#getfloat) [`GetGUIDNumber`](./TSMap#getguidnumber) [`GetGameObject`](./TSMap#getgameobject) [`GetGameObjectByDBGUID`](./TSMap#getgameobjectbydbguid) [`GetGameObjects`](./TSMap#getgameobjects) [`GetHeight`](./TSMap#getheight) [`GetInstanceID`](./TSMap#getinstanceid) [`GetInstanceScript`](./TSMap#getinstancescript) [`GetInt`](./TSMap#getint) [`GetJsonArray`](./TSMap#getjsonarray) [`GetJsonObject`](./TSMap#getjsonobject) [`GetMapID`](./TSMap#getmapid) [`GetName`](./TSMap#getname) [`GetNumber`](./TSMap#getnumber) [`GetObject`](./TSMap#getobject) [`GetPlayer`](./TSMap#getplayer) [`GetPlayerCount`](./TSMap#getplayercount) [`GetPlayers`](./TSMap#getplayers) [`GetRawDouble`](./TSMap#getrawdouble) [`GetRawFloat`](./TSMap#getrawfloat) [`GetRawInt16`](./TSMap#getrawint16) [`GetRawInt32`](./TSMap#getrawint32) [`GetRawInt64`](./TSMap#getrawint64) [`GetRawInt8`](./TSMap#getrawint8) [`GetRawUInt16`](./TSMap#getrawuint16) [`GetRawUInt32`](./TSMap#getrawuint32) [`GetRawUInt64`](./TSMap#getrawuint64) [`GetRawUInt8`](./TSMap#getrawuint8) [`GetString`](./TSMap#getstring) [`GetUInt`](./TSMap#getuint) [`GetUInt64`](./TSMap#getuint64) [`GetUnits`](./TSMap#getunits) [`GetWorldObject`](./TSMap#getworldobject) [`HasBool`](./TSMap#hasbool) [`HasFloat`](./TSMap#hasfloat) [`HasGUIDNumber`](./TSMap#hasguidnumber) [`HasInstanceScript`](./TSMap#hasinstancescript) [`HasInt`](./TSMap#hasint) [`HasJsonArray`](./TSMap#hasjsonarray) [`HasJsonObject`](./TSMap#hasjsonobject) [`HasNumber`](./TSMap#hasnumber) [`HasObject`](./TSMap#hasobject) [`HasString`](./TSMap#hasstring) [`HasUInt`](./TSMap#hasuint) [`HasUInt64`](./TSMap#hasuint64) [`IsArena`](./TSMap#isarena) [`IsBG`](./TSMap#isbg) [`IsDungeon`](./TSMap#isdungeon) [`IsEmpty`](./TSMap#isempty) [`IsHeroic`](./TSMap#isheroic) [`IsInLineOfSight`](./TSMap#isinlineofsight) [`IsInstance`](./TSMap#isinstance) [`IsRaid`](./TSMap#israid) [`RemoveEntityGroup`](./TSMap#removeentitygroup) [`RemoveTimer`](./TSMap#removetimer) [`SetBool`](./TSMap#setbool) [`SetFloat`](./TSMap#setfloat) [`SetGUIDNumber`](./TSMap#setguidnumber) [`SetInt`](./TSMap#setint) [`SetJsonArray`](./TSMap#setjsonarray) [`SetJsonObject`](./TSMap#setjsonobject) [`SetNumber`](./TSMap#setnumber) [`SetObject`](./TSMap#setobject) [`SetRawDouble`](./TSMap#setrawdouble) [`SetRawFloat`](./TSMap#setrawfloat) [`SetRawInt16`](./TSMap#setrawint16) [`SetRawInt32`](./TSMap#setrawint32) [`SetRawInt64`](./TSMap#setrawint64) [`SetRawInt8`](./TSMap#setrawint8) [`SetRawUInt16`](./TSMap#setrawuint16) [`SetRawUInt32`](./TSMap#setrawuint32) [`SetRawUInt64`](./TSMap#setrawuint64) [`SetRawUInt8`](./TSMap#setrawuint8) [`SetString`](./TSMap#setstring) [`SetUInt`](./TSMap#setuint) [`SetUInt64`](./TSMap#setuint64) [`SetWeather`](./TSMap#setweather) [`SpawnCreature`](./TSMap#spawncreature) [`SpawnGameObject`](./TSMap#spawngameobject) [`ToBG`](./TSMap#tobg) [`ToInstance`](./TSMap#toinstance)
