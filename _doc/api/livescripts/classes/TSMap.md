---
title: TSMap
---


## Hierarchy

- [`TSEntityProvider`](TSEntityProvider)

- [`TSWorldEntityProvider`](TSWorldEntityProvider)<[`TSMap`](TSMap)\>

  ↳ **`TSMap`**

  ↳↳ [`TSBattleground`](TSBattleground)

  ↳↳ [`TSInstance`](TSInstance)

## Methods

{: .api-section }
### DoDelayed

{: .code-example }
`DoDelayed(callback): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`map`: [`TSMap`](TSMap), `mgr`: [`TSMainThreadContext`](TSMainThreadContext)) => `void` |

**Returns:** 
`void`

___

{: .api-section }
### GetAreaID

{: .code-example }
`GetAreaID(x, y, z, phasemask): TSNumber<uint32>`

Returns the area ID of the [Map] at the specified X, Y, and Z coordinates.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `phasemask` | `float` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 areaId

___

{: .api-section }
### GetCreature

{: .code-example }
`GetCreature(guid): TSCreature`

Returns a creature in this map by its map id

**`important`** - This is NOT the creatures guid in the database,
             use "GetCreatureBySpawnGUID" for that.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint32` \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### GetCreatureByDBGUID

{: .code-example }
`GetCreatureByDBGUID(dbguid): TSCreature`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `dbguid` | `uint32` |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### GetCreatures

{: .code-example }
`GetCreatures(entry?): TSArray<TSCreature>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `entry?` | `uint32` | only return creatures of this entry. Leave out to select all creatures. |

**Returns:** 
`TSArray`<[`TSCreature`](TSCreature)\>

___

{: .api-section }
### GetDifficulty

{: .code-example }
`GetDifficulty(): TSNumber<int32>`

Returns the difficulty of the [Map].

Always returns 0 if the expansion is pre-TBC.

**Returns:** 
`TSNumber`<`int32`\>

int32 difficulty

___

{: .api-section }
### GetGameObject

{: .code-example }
`GetGameObject(guid): TSGameObject`

Returns a gameobject in this map by its map id

**`important`** - This is NOT the gameobject guid in the database,
             use "GetGameObjectBySpawnGUID" for that.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint32` \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### GetGameObjectByDBGUID

{: .code-example }
`GetGameObjectByDBGUID(dbguid): TSGameObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `dbguid` | `uint32` |

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### GetGameObjects

{: .code-example }
`GetGameObjects(entry?): TSArray<TSGameObject>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `entry?` | `uint32` | only return gameobjects of this entry. Leave out to select all gameobjects. |

**Returns:** 
`TSArray`<[`TSGameObject`](TSGameObject)\>

___

{: .api-section }
### GetHeight

{: .code-example }
`GetHeight(x, y, phasemask): TSNumber<float>`

Returns the height of the [Map] at the given X and Y coordinates.

In case of no height found nil is returned

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `phasemask` | `uint32` |

**Returns:** 
`TSNumber`<`float`\>

float z

___

{: .api-section }
### GetInstanceID

{: .code-example }
`GetInstanceID(): TSNumber<uint32>`

Returns the instance ID of the [Map].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 instanceId

___

{: .api-section }
### GetInstanceScript

{: .code-example }
`GetInstanceScript(): TSInstance`

**Returns:** 
[`TSInstance`](TSInstance)

___

{: .api-section }
### GetMapID

{: .code-example }
`GetMapID(): TSNumber<uint32>`

Returns the ID of the [Map].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 mapId

___

{: .api-section }
### GetName

{: .code-example }
`GetName(): string`

Returns the name of the [Map].

**Returns:** 
`string`

string mapName

___

{: .api-section }
### GetPlayer

{: .code-example }
`GetPlayer(guid): TSPlayer`

Returns a player in this map by its guid

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint32` \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSPlayer`](TSPlayer)

___

{: .api-section }
### GetPlayerCount

{: .code-example }
`GetPlayerCount(): TSNumber<uint32>`

Returns the player count currently on the [Map] (excluding GMs).

**Returns:** 
`TSNumber`<`uint32`\>

uint32 playerCount

___

{: .api-section }
### GetPlayers

{: .code-example }
`GetPlayers(team?): TSArray<TSPlayer>`

Returns a table with all the current [Player]s in the map

    enum TeamId
    {
        TEAM_ALLIANCE = 0,
        TEAM_HORDE = 1,
        TEAM_NEUTRAL = 2

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `team?` | [`TeamId`](../enums/TeamId) | : optional check team of the [Player], Alliance, Horde or Neutral/All (default) |

**Returns:** 
`TSArray`<[`TSPlayer`](TSPlayer)\>

table mapPlayers

___

{: .api-section }
### GetUnits

{: .code-example }
`GetUnits(): TSArray<TSWorldObject>`

**Returns:** 
`TSArray`<[`TSWorldObject`](TSWorldObject)\>

___

{: .api-section }
### GetWorldObject

{: .code-example }
`GetWorldObject(guid): TSWorldObject`

Returns a [WorldObject] by its GUID from the map if it is spawned.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |

**Returns:** 
[`TSWorldObject`](TSWorldObject)

___

{: .api-section }
### HasInstanceScript

{: .code-example }
`HasInstanceScript(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsArena

{: .code-example }
`IsArena(): boolean`

Returns `true` if the [Map] is an arena [BattleGround], `false` otherwise.

**Returns:** 
`boolean`

bool isArena

___

{: .api-section }
### IsBG

{: .code-example }
`IsBG(): boolean`

Returns `true` if the [Map] is a non-arena [BattleGround], `false` otherwise.

**Returns:** 
`boolean`

bool isBattleGround

___

{: .api-section }
### IsDungeon

{: .code-example }
`IsDungeon(): boolean`

Returns `true` if the [Map] is a dungeon, `false` otherwise.

**Returns:** 
`boolean`

bool isDungeon

___

{: .api-section }
### IsEmpty

{: .code-example }
`IsEmpty(): boolean`

Returns `true` if the [Map] has no [Player]s, `false` otherwise.

**Returns:** 
`boolean`

bool isEmpty

___

{: .api-section }
### IsHeroic

{: .code-example }
`IsHeroic(): boolean`

Returns `true` if the [Map] is a heroic, `false` otherwise.

**Returns:** 
`boolean`

bool isHeroic

___

{: .api-section }
### IsInLineOfSight

{: .code-example }
`IsInLineOfSight(x1, y1, z1, x2, y2, z2, phasemask, checks, ignoreFlags): any`

Check if 2 positions are within LoS of each other, following different checks.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x1` | `double` |
| `y1` | `double` |
| `z1` | `double` |
| `x2` | `double` |
| `y2` | `double` |
| `z2` | `double` |
| `phasemask` | `uint32` |
| `checks` | [`LineOfSightChecks`](../enums/LineOfSightChecks) |
| `ignoreFlags` | [`VMapModelIgnoreFlags`](../enums/VMapModelIgnoreFlags) |

**Returns:** 
`any`

___

{: .api-section }
### IsInstance

{: .code-example }
`IsInstance(): boolean`

Returns `true` if the [Map] is an instance, `false` otherwise.

**Returns:** 
`boolean`

bool isBattleGround

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsRaid

{: .code-example }
`IsRaid(): boolean`

Returns `true` if the [Map] is a raid, `false` otherwise.

**Returns:** 
`boolean`

bool isRaid

___

{: .api-section }
### SetWeather

{: .code-example }
`SetWeather(zoneId, weatherType, grade): void`

Sets the [Weather] type based on [WeatherType] and grade supplied.

    enum WeatherType
    {
        WEATHER_TYPE_FINE       = 0,
        WEATHER_TYPE_RAIN       = 1,
        WEATHER_TYPE_SNOW       = 2,
        WEATHER_TYPE_STORM      = 3,
        WEATHER_TYPE_THUNDERS   = 86,
        WEATHER_TYPE_BLACKRAIN  = 90

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `zoneId` | `uint32` |
| `weatherType` | [`WeatherType`](../enums/WeatherType) |
| `grade` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SpawnCreature

{: .code-example }
`SpawnCreature(entry, x, y, z, o, despawnTimer?, phase?): TSCreature`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |
| `despawnTimer?` | `uint32` |
| `phase?` | `uint32` |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### SpawnGameObject

{: .code-example }
`SpawnGameObject(entry, x, y, z, o, despawnTimer?, phase?): TSGameObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |
| `despawnTimer?` | `uint32` |
| `phase?` | `uint32` |

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### ToBG

{: .code-example }
`ToBG(): TSBattleground`

**Returns:** 
[`TSBattleground`](TSBattleground)

___

{: .api-section }
### ToInstance

{: .code-example }
`ToInstance(): TSInstance`

**Returns:** 
[`TSInstance`](TSInstance)


## Inherited Members
[`AddNamedTimer`](./TSWorldEntityProvider#addnamedtimer) [`AddTimer`](./TSWorldEntityProvider#addtimer) [`ClearEntityGroups`](./TSWorldEntityProvider#clearentitygroups) [`GetBool`](./TSEntityProvider#getbool) [`GetEntityGroup`](./TSWorldEntityProvider#getentitygroup) [`GetFloat`](./TSEntityProvider#getfloat) [`GetGUIDNumber`](./TSEntityProvider#getguidnumber) [`GetInt`](./TSEntityProvider#getint) [`GetJsonArray`](./TSEntityProvider#getjsonarray) [`GetJsonObject`](./TSEntityProvider#getjsonobject) [`GetNumber`](./TSEntityProvider#getnumber) [`GetObject`](./TSEntityProvider#getobject) [`GetRawDouble`](./TSEntityProvider#getrawdouble) [`GetRawFloat`](./TSEntityProvider#getrawfloat) [`GetRawInt16`](./TSEntityProvider#getrawint16) [`GetRawInt32`](./TSEntityProvider#getrawint32) [`GetRawInt64`](./TSEntityProvider#getrawint64) [`GetRawInt8`](./TSEntityProvider#getrawint8) [`GetRawUInt16`](./TSEntityProvider#getrawuint16) [`GetRawUInt32`](./TSEntityProvider#getrawuint32) [`GetRawUInt64`](./TSEntityProvider#getrawuint64) [`GetRawUInt8`](./TSEntityProvider#getrawuint8) [`GetString`](./TSEntityProvider#getstring) [`GetUInt`](./TSEntityProvider#getuint) [`GetUInt64`](./TSEntityProvider#getuint64) [`HasBool`](./TSEntityProvider#hasbool) [`HasFloat`](./TSEntityProvider#hasfloat) [`HasGUIDNumber`](./TSEntityProvider#hasguidnumber) [`HasInt`](./TSEntityProvider#hasint) [`HasJsonArray`](./TSEntityProvider#hasjsonarray) [`HasJsonObject`](./TSEntityProvider#hasjsonobject) [`HasNumber`](./TSEntityProvider#hasnumber) [`HasObject`](./TSEntityProvider#hasobject) [`HasString`](./TSEntityProvider#hasstring) [`HasUInt`](./TSEntityProvider#hasuint) [`HasUInt64`](./TSEntityProvider#hasuint64) [`RemoveEntityGroup`](./TSWorldEntityProvider#removeentitygroup) [`RemoveTimer`](./TSWorldEntityProvider#removetimer) [`SetBool`](./TSEntityProvider#setbool) [`SetFloat`](./TSEntityProvider#setfloat) [`SetGUIDNumber`](./TSEntityProvider#setguidnumber) [`SetInt`](./TSEntityProvider#setint) [`SetJsonArray`](./TSEntityProvider#setjsonarray) [`SetJsonObject`](./TSEntityProvider#setjsonobject) [`SetNumber`](./TSEntityProvider#setnumber) [`SetObject`](./TSEntityProvider#setobject) [`SetRawDouble`](./TSEntityProvider#setrawdouble) [`SetRawFloat`](./TSEntityProvider#setrawfloat) [`SetRawInt16`](./TSEntityProvider#setrawint16) [`SetRawInt32`](./TSEntityProvider#setrawint32) [`SetRawInt64`](./TSEntityProvider#setrawint64) [`SetRawInt8`](./TSEntityProvider#setrawint8) [`SetRawUInt16`](./TSEntityProvider#setrawuint16) [`SetRawUInt32`](./TSEntityProvider#setrawuint32) [`SetRawUInt64`](./TSEntityProvider#setrawuint64) [`SetRawUInt8`](./TSEntityProvider#setrawuint8) [`SetString`](./TSEntityProvider#setstring) [`SetUInt`](./TSEntityProvider#setuint) [`SetUInt64`](./TSEntityProvider#setuint64)
