---
title: TSBattleground
---


## Hierarchy

- [`TSMap`](TSMap)

  ↳ **`TSBattleground`**

## Methods

{: .api-section }
### AddCreature

{: .code-example }
`AddCreature(entry, type, x, y, z, o, respawnTime?, teamId?): TSCreature`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `type` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |
| `respawnTime?` | `uint32` |
| `teamId?` | [`TeamId`](../enums/TeamId) |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### AddObject

{: .code-example }
`AddObject(type, entry, x, y, z, o, rot0, rot1, rot2, rot3, respawnTime?, goState?): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `entry` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |
| `rot0` | `float` |
| `rot1` | `float` |
| `rot2` | `float` |
| `rot3` | `float` |
| `respawnTime?` | `uint32` |
| `goState?` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### AddSpiritGuide

{: .code-example }
`AddSpiritGuide(type, x, y, z, o, teamId?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |
| `teamId?` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`void`

___

{: .api-section }
### CastSpell

{: .code-example }
`CastSpell(spell, team?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |
| `team?` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### CloseDoor

{: .code-example }
`CloseDoor(type): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### EndBG

{: .code-example }
`EndBG(winnerTeam?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `winnerTeam?` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`void`

___

{: .api-section }
### GetAlivePlayersCountByTeam

{: .code-example }
`GetAlivePlayersCountByTeam(team): TSNumber<uint32>`

Returns the amount of alive players in the [BattleGround] by the team ID.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `team` | [`TeamId`](../enums/TeamId) | : team ID |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 count

___

{: .api-section }
### GetBGAlivePlayerCount

{: .code-example }
`GetBGAlivePlayerCount(team?): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `team?` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetBGCreature

{: .code-example }
`GetBGCreature(type, logErrors?): TSCreature`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `logErrors?` | `boolean` |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### GetBGGameObject

{: .code-example }
`GetBGGameObject(type, logErrors?): TSGameObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |
| `logErrors?` | `boolean` |

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### GetBGName

{: .code-example }
`GetBGName(): string`

Returns the name of the [BattleGround].

**Returns:** 
`string`

string name

___

{: .api-section }
### GetBGPlayer

{: .code-example }
`GetBGPlayer(guid): TSBattlegroundPlayer`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSBattlegroundPlayer`](TSBattlegroundPlayer)

___

{: .api-section }
### GetBGPlayerCount

{: .code-example }
`GetBGPlayerCount(team?): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `team?` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetBGPlayers

{: .code-example }
`GetBGPlayers(): TSArray<TSBattlegroundPlayer>`

**Returns:** 
`TSArray`<[`TSBattlegroundPlayer`](TSBattlegroundPlayer)\>

___

{: .api-section }
### GetBGRaid

{: .code-example }
`GetBGRaid(faction): TSGroup`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `faction` | [`TeamId`](../enums/TeamId) |

**Returns:** 
[`TSGroup`](TSGroup)

___

{: .api-section }
### GetBonusHonorFromKillCount

{: .code-example }
`GetBonusHonorFromKillCount(kills): TSNumber<uint32>`

Returns the bonus honor given by amount of kills in the specific [BattleGround].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `kills` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 bonusHonor

___

{: .api-section }
### GetBracketID

{: .code-example }
`GetBracketID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetEndTime

{: .code-example }
`GetEndTime(): TSNumber<uint32>`

Returns the end time of the [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 endTime

___

{: .api-section }
### GetFreeSlotsForTeam

{: .code-example }
`GetFreeSlotsForTeam(team): TSNumber<uint32>`

Returns the amount of free slots for the selected team in the specific [BattleGround].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `team` | [`TeamId`](../enums/TeamId) | : team ID |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 freeSlots

___

{: .api-section }
### GetInstanceID

{: .code-example }
`GetInstanceID(): TSNumber<uint32>`

Returns the instance ID of the [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 instanceId

#### Overrides

[TSMap](TSMap).[GetInstanceID](TSMap.md#getinstanceid)

___

{: .api-section }
### GetMaxLevel

{: .code-example }
`GetMaxLevel(): TSNumber<uint32>`

Returns the max allowed [Player] level of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 maxLevel

___

{: .api-section }
### GetMaxPlayers

{: .code-example }
`GetMaxPlayers(): TSNumber<uint32>`

Returns the maximum allowed [Player] count of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 maxPlayerCount

___

{: .api-section }
### GetMaxPlayersPerTeam

{: .code-example }
`GetMaxPlayersPerTeam(): TSNumber<uint32>`

Returns the maximum allowed [Player] count per team of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 maxTeamPlayerCount

___

{: .api-section }
### GetMinLevel

{: .code-example }
`GetMinLevel(): TSNumber<uint32>`

Returns the minimum allowed [Player] level of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 minLevel

___

{: .api-section }
### GetMinPlayers

{: .code-example }
`GetMinPlayers(): TSNumber<uint32>`

Returns the minimum allowed [Player] count of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 minPlayerCount

___

{: .api-section }
### GetMinPlayersPerTeam

{: .code-example }
`GetMinPlayersPerTeam(): TSNumber<uint32>`

Returns the minimum allowed [Player] count per team of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 minTeamPlayerCount

___

{: .api-section }
### GetObjectType

{: .code-example }
`GetObjectType(guid): TSNumber<int32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetScore

{: .code-example }
`GetScore(guid): TSBattlegroundScore`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSBattlegroundScore`](TSBattlegroundScore)

___

{: .api-section }
### GetStartDelayTime

{: .code-example }
`GetStartDelayTime(): TSNumber<int32>`

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetStartMaxDist

{: .code-example }
`GetStartMaxDist(): TSNumber<float>`

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetStartO

{: .code-example }
`GetStartO(teamid): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `teamid` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetStartTime

{: .code-example }
`GetStartTime(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetStartX

{: .code-example }
`GetStartX(teamid): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `teamid` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetStartY

{: .code-example }
`GetStartY(teamid): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `teamid` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetStartZ

{: .code-example }
`GetStartZ(teamid): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `teamid` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetStatus

{: .code-example }
`GetStatus(): TSNumber<uint32>`

Returns the status of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

status

___

{: .api-section }
### GetTeamScore

{: .code-example }
`GetTeamScore(team): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `team` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetTypeID

{: .code-example }
`GetTypeID(): TSNumber<uint32>`

Returns the type ID of the [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

typeId

___

{: .api-section }
### GetUniqueBracketID

{: .code-example }
`GetUniqueBracketID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetWinner

{: .code-example }
`GetWinner(): TSNumber<uint32>`

Returns the winning team of the specific [BattleGround].

**Returns:** 
`TSNumber`<`uint32`\>

team

___

{: .api-section }
### IsHoliday

{: .code-example }
`IsHoliday(): boolean`

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
### IsPlayerInBG

{: .code-example }
`IsPlayerInBG(guid): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
`boolean`

___

{: .api-section }
### IsRandom

{: .code-example }
`IsRandom(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### OpenDoor

{: .code-example }
`OpenDoor(type): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### PlaySound

{: .code-example }
`PlaySound(sound, team?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `sound` | `uint32` |
| `team?` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveAura

{: .code-example }
`RemoveAura(aura, team?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `aura` | `uint32` |
| `team?` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveCreature

{: .code-example }
`RemoveCreature(type): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### RemoveObject

{: .code-example }
`RemoveObject(type): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### RemoveObjectFromWorld

{: .code-example }
`RemoveObjectFromWorld(type): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### RewardHonor

{: .code-example }
`RewardHonor(honor, team?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `honor` | `uint32` |
| `team?` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RewardReputation

{: .code-example }
`RewardReputation(faction, reputation, team?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `faction` | `uint32` |
| `reputation` | `uint32` |
| `team?` | [`TeamId`](../enums/TeamId) |

**Returns:** 
`void`

___

{: .api-section }
### SendMessage

{: .code-example }
`SendMessage(entry, type, source?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `type` | `uint8` |
| `source?` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### SendPacket

{: .code-example }
`SendPacket(packet, team?, sender?, self?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `packet` | [`TSWorldPacket`](TSWorldPacket) |
| `team?` | [`TeamId`](../enums/TeamId) |
| `sender?` | [`TSPlayer`](TSPlayer) |
| `self?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetHoliday

{: .code-example }
`SetHoliday(isHoliday): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `isHoliday` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetStartDelayTime

{: .code-example }
`SetStartDelayTime(time): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `time` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetStartMaxDist

{: .code-example }
`SetStartMaxDist(maxDist): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `maxDist` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetStartPosition

{: .code-example }
`SetStartPosition(teamId, x, y, z, o): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `teamId` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetStartTime

{: .code-example }
`SetStartTime(time): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `time` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### UpdateWorldState

{: .code-example }
`UpdateWorldState(variable, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `variable` | `uint32` |
| `value` | `uint32` |

**Returns:** 
`void`


## Inherited Members
[`AddNamedTimer`](./TSMap#addnamedtimer) [`AddTimer`](./TSMap#addtimer) [`ClearEntityGroups`](./TSMap#clearentitygroups) [`DoDelayed`](./TSMap#dodelayed) [`GetAreaID`](./TSMap#getareaid) [`GetBool`](./TSMap#getbool) [`GetCreature`](./TSMap#getcreature) [`GetCreatureByDBGUID`](./TSMap#getcreaturebydbguid) [`GetCreatures`](./TSMap#getcreatures) [`GetDifficulty`](./TSMap#getdifficulty) [`GetEntityGroup`](./TSMap#getentitygroup) [`GetFloat`](./TSMap#getfloat) [`GetGUIDNumber`](./TSMap#getguidnumber) [`GetGameObject`](./TSMap#getgameobject) [`GetGameObjectByDBGUID`](./TSMap#getgameobjectbydbguid) [`GetGameObjects`](./TSMap#getgameobjects) [`GetHeight`](./TSMap#getheight) [`GetInstanceScript`](./TSMap#getinstancescript) [`GetInt`](./TSMap#getint) [`GetJsonArray`](./TSMap#getjsonarray) [`GetJsonObject`](./TSMap#getjsonobject) [`GetMapID`](./TSMap#getmapid) [`GetName`](./TSMap#getname) [`GetNumber`](./TSMap#getnumber) [`GetObject`](./TSMap#getobject) [`GetPlayer`](./TSMap#getplayer) [`GetPlayerCount`](./TSMap#getplayercount) [`GetPlayers`](./TSMap#getplayers) [`GetRawDouble`](./TSMap#getrawdouble) [`GetRawFloat`](./TSMap#getrawfloat) [`GetRawInt16`](./TSMap#getrawint16) [`GetRawInt32`](./TSMap#getrawint32) [`GetRawInt64`](./TSMap#getrawint64) [`GetRawInt8`](./TSMap#getrawint8) [`GetRawUInt16`](./TSMap#getrawuint16) [`GetRawUInt32`](./TSMap#getrawuint32) [`GetRawUInt64`](./TSMap#getrawuint64) [`GetRawUInt8`](./TSMap#getrawuint8) [`GetString`](./TSMap#getstring) [`GetUInt`](./TSMap#getuint) [`GetUInt64`](./TSMap#getuint64) [`GetUnits`](./TSMap#getunits) [`GetWorldObject`](./TSMap#getworldobject) [`HasBool`](./TSMap#hasbool) [`HasFloat`](./TSMap#hasfloat) [`HasGUIDNumber`](./TSMap#hasguidnumber) [`HasInstanceScript`](./TSMap#hasinstancescript) [`HasInt`](./TSMap#hasint) [`HasJsonArray`](./TSMap#hasjsonarray) [`HasJsonObject`](./TSMap#hasjsonobject) [`HasNumber`](./TSMap#hasnumber) [`HasObject`](./TSMap#hasobject) [`HasString`](./TSMap#hasstring) [`HasUInt`](./TSMap#hasuint) [`HasUInt64`](./TSMap#hasuint64) [`IsArena`](./TSMap#isarena) [`IsBG`](./TSMap#isbg) [`IsDungeon`](./TSMap#isdungeon) [`IsEmpty`](./TSMap#isempty) [`IsHeroic`](./TSMap#isheroic) [`IsInLineOfSight`](./TSMap#isinlineofsight) [`IsInstance`](./TSMap#isinstance) [`IsRaid`](./TSMap#israid) [`RemoveEntityGroup`](./TSMap#removeentitygroup) [`RemoveTimer`](./TSMap#removetimer) [`SetBool`](./TSMap#setbool) [`SetFloat`](./TSMap#setfloat) [`SetGUIDNumber`](./TSMap#setguidnumber) [`SetInt`](./TSMap#setint) [`SetJsonArray`](./TSMap#setjsonarray) [`SetJsonObject`](./TSMap#setjsonobject) [`SetNumber`](./TSMap#setnumber) [`SetObject`](./TSMap#setobject) [`SetRawDouble`](./TSMap#setrawdouble) [`SetRawFloat`](./TSMap#setrawfloat) [`SetRawInt16`](./TSMap#setrawint16) [`SetRawInt32`](./TSMap#setrawint32) [`SetRawInt64`](./TSMap#setrawint64) [`SetRawInt8`](./TSMap#setrawint8) [`SetRawUInt16`](./TSMap#setrawuint16) [`SetRawUInt32`](./TSMap#setrawuint32) [`SetRawUInt64`](./TSMap#setrawuint64) [`SetRawUInt8`](./TSMap#setrawuint8) [`SetString`](./TSMap#setstring) [`SetUInt`](./TSMap#setuint) [`SetUInt64`](./TSMap#setuint64) [`SetWeather`](./TSMap#setweather) [`SpawnCreature`](./TSMap#spawncreature) [`SpawnGameObject`](./TSMap#spawngameobject) [`ToBG`](./TSMap#tobg) [`ToInstance`](./TSMap#toinstance)
