---
title: TSGameObject
---


## Hierarchy

- [`TSWorldObject`](TSWorldObject)

  ↳ **`TSGameObject`**

## Methods

{: .api-section }
### Despawn

{: .code-example }
`Despawn(forced?, delayMs?, respawnSecs?): void`

Despawns a [GameObject]

The gameobject may be automatically respawned by the core

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `forced?` | `boolean` | = false: Whether to directly call the despawn function. |
| `delayMs?` | `uint32` | = 0: How long (in milliseconds) to wait before despawning. Ignored if forced = false. |
| `respawnSecs?` | `uint32` | = 0: How long (in seconds) to stay despawned. Ignored if forced = false. |

**Returns:** 
`void`

___

{: .api-section }
### FireSmartEvent

{: .code-example }
`FireSmartEvent(id, unit, var0, var1, bvar, spell, obj): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `unit` | [`TSUnit`](TSUnit) |
| `var0` | `uint32` |
| `var1` | `uint32` |
| `bvar` | `boolean` |
| `spell` | [`TSSpellInfo`](TSSpellInfo) |
| `obj` | [`TSGameObject`](TSGameObject) |

**Returns:** 
`any`

___

{: .api-section }
### GetDBTableGUIDLow

{: .code-example }
`GetDBTableGUIDLow(): TSNumber<uint32>`

Returns the guid of the [GameObject] that is used as the ID in the database

**Returns:** 
`TSNumber`<`uint32`\>

uint32 dbguid

___

{: .api-section }
### GetDisplayID

{: .code-example }
`GetDisplayID(): TSNumber<uint32>`

Returns display ID of the [GameObject]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 displayId

___

{: .api-section }
### GetGoState

{: .code-example }
`GetGoState(): GOState`

Returns the state of a [GameObject]
Below are client side [GOState]s off of 3.3.5a

    enum GOState
    {
        GO_STATE_ACTIVE             = 0,                        // show in world as used and not reset (closed door open)
        GO_STATE_READY              = 1,                        // show in world as ready (closed door close)
        GO_STATE_ACTIVE_ALTERNATIVE = 2                         // show in world as used in alt way and not reset (closed door open by cannon fire)
    }

**Returns:** 
[`GOState`](../enums/GOState)

goState

___

{: .api-section }
### GetLoot

{: .code-example }
`GetLoot(): TSLoot`

**Returns:** 
[`TSLoot`](TSLoot)

___

{: .api-section }
### GetLootRecipient

{: .code-example }
`GetLootRecipient(): TSPlayer`

Returns the [Player] that can loot the [GameObject]

Not the original looter and may be nil.

**Returns:** 
[`TSPlayer`](TSPlayer)

player

___

{: .api-section }
### GetLootRecipientGroup

{: .code-example }
`GetLootRecipientGroup(): TSGroup`

Returns the [Group] that can loot the [GameObject]

Not the original looter and may be nil.

**Returns:** 
[`TSGroup`](TSGroup)

group

___

{: .api-section }
### GetLootState

{: .code-example }
`GetLootState(): LootState`

Returns the [LootState] of a [GameObject]
Below are [LootState]s off of 3.3.5a

    enum LootState
    {
        GO_NOT_READY = 0,
        GO_READY,                                               // can be ready but despawned, and then not possible activate until spawn
        GO_ACTIVATED,
        GO_JUST_DEACTIVATED
    }

**Returns:** 
[`LootState`](../enums/LootState)

lootState

___

{: .api-section }
### GetTemplate

{: .code-example }
`GetTemplate(): TSGameObjectTemplate`

Returns the [GameObjectTemplate] data for this gameobject.

**Returns:** 
[`TSGameObjectTemplate`](TSGameObjectTemplate)

___

{: .api-section }
### HasQuest

{: .code-example }
`HasQuest(questId): boolean`

Returns 'true' if the [GameObject] can give the specified [Quest]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `questId` | `uint32` |

**Returns:** 
`boolean`

bool hasQuest

___

{: .api-section }
### IsAIEnabled

{: .code-example }
`IsAIEnabled(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsActive

{: .code-example }
`IsActive(): boolean`

Returns 'true' if the [GameObject] is active

**Returns:** 
`boolean`

bool isActive

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

#### Overrides

[TSWorldObject](TSWorldObject).[IsNull](TSWorldObject.md#isnull)

___

{: .api-section }
### IsSpawned

{: .code-example }
`IsSpawned(): boolean`

Returns 'true' if the [GameObject] is spawned

**Returns:** 
`boolean`

bool isSpawned

___

{: .api-section }
### IsTransport

{: .code-example }
`IsTransport(): boolean`

Returns 'true' if the [GameObject] is a transport

**Returns:** 
`boolean`

bool isTransport

___

{: .api-section }
### RemoveFromWorld

{: .code-example }
`RemoveFromWorld(deldb): void`

Removes [GameObject] from the world

The object is no longer reachable after this and it is not respawned.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `deldb` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### Respawn

{: .code-example }
`Respawn(): void`

Respawns a [GameObject]

**Returns:** 
`void`

___

{: .api-section }
### SaveToDB

{: .code-example }
`SaveToDB(): void`

Saves [GameObject] to the database

**Returns:** 
`void`

___

{: .api-section }
### SetGoState

{: .code-example }
`SetGoState(state): void`

Sets the state of a [GameObject]

    enum GOState
    {
        GO_STATE_ACTIVE             = 0,                        // show in world as used and not reset (closed door open)
        GO_STATE_READY              = 1,                        // show in world as ready (closed door close)
        GO_STATE_ACTIVE_ALTERNATIVE = 2                         // show in world as used in alt way and not reset (closed door open by cannon fire)
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `state` | [`GOState`](../enums/GOState) | : all available go states can be seen above |

**Returns:** 
`void`

___

{: .api-section }
### SetLootState

{: .code-example }
`SetLootState(state): void`

Sets the [LootState] of a [GameObject]
Below are [LootState]s off of 3.3.5a

    enum LootState
    {
        GO_NOT_READY = 0,
        GO_READY,                                               // can be ready but despawned, and then not possible activate until spawn
        GO_ACTIVATED,
        GO_JUST_DEACTIVATED
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `state` | [`LootState`](../enums/LootState) | : all available loot states can be seen above |

**Returns:** 
`void`

___

{: .api-section }
### SetRespawnTime

{: .code-example }
`SetRespawnTime(respawn): void`

Sets the respawn or despawn time for the gameobject.

Respawn time is also used as despawn time depending on gameobject settings

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `respawn` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### UseDoorOrButton

{: .code-example }
`UseDoorOrButton(delay): void`

Activates a door or a button/lever

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `delay` | `uint32` |

**Returns:** 
`void`


## Inherited Members
[`AddCollision`](./TSWorldObject#addcollision) [`AddNamedTimer`](./TSWorldObject#addnamedtimer) [`AddTimer`](./TSWorldObject#addtimer) [`CastCustomSpell`](./TSWorldObject#castcustomspell) [`CastSpell`](./TSWorldObject#castspell) [`CastSpellAoF`](./TSWorldObject#castspellaof) [`ClearEntityGroups`](./TSWorldObject#clearentitygroups) [`DoDelayed`](./TSWorldObject#dodelayed) [`GetAreaID`](./TSWorldObject#getareaid) [`GetBool`](./TSWorldObject#getbool) [`GetCollision`](./TSWorldObject#getcollision) [`GetCollisions`](./TSWorldObject#getcollisions) [`GetCoreByte`](./TSWorldObject#getcorebyte) [`GetCoreFloat`](./TSWorldObject#getcorefloat) [`GetCoreInt32`](./TSWorldObject#getcoreint32) [`GetCoreUInt16`](./TSWorldObject#getcoreuint16) [`GetCoreUInt32`](./TSWorldObject#getcoreuint32) [`GetCoreUInt64`](./TSWorldObject#getcoreuint64) [`GetCorpse`](./TSWorldObject#getcorpse) [`GetCreature`](./TSWorldObject#getcreature) [`GetCreaturesInRange`](./TSWorldObject#getcreaturesinrange) [`GetDistance`](./TSWorldObject#getdistance) [`GetDistance2d`](./TSWorldObject#getdistance2d) [`GetDistanceToPoint`](./TSWorldObject#getdistancetopoint) [`GetDistanceToPoint2d`](./TSWorldObject#getdistancetopoint2d) [`GetEffectiveOwner`](./TSWorldObject#geteffectiveowner) [`GetEntityGroup`](./TSWorldObject#getentitygroup) [`GetEntry`](./TSWorldObject#getentry) [`GetFactionTemplate`](./TSWorldObject#getfactiontemplate) [`GetFloat`](./TSWorldObject#getfloat) [`GetGUID`](./TSWorldObject#getguid) [`GetGUIDLow`](./TSWorldObject#getguidlow) [`GetGUIDNumber`](./TSWorldObject#getguidnumber) [`GetGameObject`](./TSWorldObject#getgameobject) [`GetGameObjectsInRange`](./TSWorldObject#getgameobjectsinrange) [`GetInstanceID`](./TSWorldObject#getinstanceid) [`GetInt`](./TSWorldObject#getint) [`GetJsonArray`](./TSWorldObject#getjsonarray) [`GetJsonObject`](./TSWorldObject#getjsonobject) [`GetLiquidStatus`](./TSWorldObject#getliquidstatus) [`GetMap`](./TSWorldObject#getmap) [`GetMapID`](./TSWorldObject#getmapid) [`GetName`](./TSWorldObject#getname) [`GetNearestCreature`](./TSWorldObject#getnearestcreature) [`GetNearestGameObject`](./TSWorldObject#getnearestgameobject) [`GetNearestPlayer`](./TSWorldObject#getnearestplayer) [`GetNumber`](./TSWorldObject#getnumber) [`GetO`](./TSWorldObject#geto) [`GetObject`](./TSWorldObject#getobject) [`GetPhaseID`](./TSWorldObject#getphaseid) [`GetPhaseMask`](./TSWorldObject#getphasemask) [`GetPlayer`](./TSWorldObject#getplayer) [`GetPlayersInRange`](./TSWorldObject#getplayersinrange) [`GetPosition`](./TSWorldObject#getposition) [`GetRawDouble`](./TSWorldObject#getrawdouble) [`GetRawFloat`](./TSWorldObject#getrawfloat) [`GetRawInt16`](./TSWorldObject#getrawint16) [`GetRawInt32`](./TSWorldObject#getrawint32) [`GetRawInt64`](./TSWorldObject#getrawint64) [`GetRawInt8`](./TSWorldObject#getrawint8) [`GetRawUInt16`](./TSWorldObject#getrawuint16) [`GetRawUInt32`](./TSWorldObject#getrawuint32) [`GetRawUInt64`](./TSWorldObject#getrawuint64) [`GetRawUInt8`](./TSWorldObject#getrawuint8) [`GetRelativePoint`](./TSWorldObject#getrelativepoint) [`GetScale`](./TSWorldObject#getscale) [`GetString`](./TSWorldObject#getstring) [`GetTypeID`](./TSWorldObject#gettypeid) [`GetUInt`](./TSWorldObject#getuint) [`GetUInt64`](./TSWorldObject#getuint64) [`GetUnit`](./TSWorldObject#getunit) [`GetUnitsInRange`](./TSWorldObject#getunitsinrange) [`GetX`](./TSWorldObject#getx) [`GetY`](./TSWorldObject#gety) [`GetZ`](./TSWorldObject#getz) [`GetZoneID`](./TSWorldObject#getzoneid) [`HasBool`](./TSWorldObject#hasbool) [`HasCollision`](./TSWorldObject#hascollision) [`HasFlag`](./TSWorldObject#hasflag) [`HasFloat`](./TSWorldObject#hasfloat) [`HasGUIDNumber`](./TSWorldObject#hasguidnumber) [`HasInt`](./TSWorldObject#hasint) [`HasJsonArray`](./TSWorldObject#hasjsonarray) [`HasJsonObject`](./TSWorldObject#hasjsonobject) [`HasNumber`](./TSWorldObject#hasnumber) [`HasObject`](./TSWorldObject#hasobject) [`HasString`](./TSWorldObject#hasstring) [`HasUInt`](./TSWorldObject#hasuint) [`HasUInt64`](./TSWorldObject#hasuint64) [`IsBehind`](./TSWorldObject#isbehind) [`IsCorpse`](./TSWorldObject#iscorpse) [`IsCreature`](./TSWorldObject#iscreature) [`IsFriendlyTo`](./TSWorldObject#isfriendlyto) [`IsFriendlyToPlayers`](./TSWorldObject#isfriendlytoplayers) [`IsGameObject`](./TSWorldObject#isgameobject) [`IsHostileTo`](./TSWorldObject#ishostileto) [`IsHostileToPlayers`](./TSWorldObject#ishostiletoplayers) [`IsInBack`](./TSWorldObject#isinback) [`IsInFront`](./TSWorldObject#isinfront) [`IsInMap`](./TSWorldObject#isinmap) [`IsInRange`](./TSWorldObject#isinrange) [`IsInRange2d`](./TSWorldObject#isinrange2d) [`IsInRange3d`](./TSWorldObject#isinrange3d) [`IsInWorld`](./TSWorldObject#isinworld) [`IsItem`](./TSWorldObject#isitem) [`IsNeutralToAll`](./TSWorldObject#isneutraltoall) [`IsOutdoors`](./TSWorldObject#isoutdoors) [`IsPlayer`](./TSWorldObject#isplayer) [`IsUnit`](./TSWorldObject#isunit) [`IsWithinDist`](./TSWorldObject#iswithindist) [`IsWithinDist2d`](./TSWorldObject#iswithindist2d) [`IsWithinDist3d`](./TSWorldObject#iswithindist3d) [`IsWithinDistInMap`](./TSWorldObject#iswithindistinmap) [`IsWithinLoS`](./TSWorldObject#iswithinlos) [`PlayDirectSound`](./TSWorldObject#playdirectsound) [`PlayDistanceSound`](./TSWorldObject#playdistancesound) [`PlayMusic`](./TSWorldObject#playmusic) [`RemoveEntityGroup`](./TSWorldObject#removeentitygroup) [`RemoveFlag`](./TSWorldObject#removeflag) [`RemoveTimer`](./TSWorldObject#removetimer) [`SendPacket`](./TSWorldObject#sendpacket) [`SetBool`](./TSWorldObject#setbool) [`SetCoreByte`](./TSWorldObject#setcorebyte) [`SetCoreFloat`](./TSWorldObject#setcorefloat) [`SetCoreInt16`](./TSWorldObject#setcoreint16) [`SetCoreInt32`](./TSWorldObject#setcoreint32) [`SetCoreUInt16`](./TSWorldObject#setcoreuint16) [`SetCoreUInt32`](./TSWorldObject#setcoreuint32) [`SetCoreUInt64`](./TSWorldObject#setcoreuint64) [`SetFlag`](./TSWorldObject#setflag) [`SetFloat`](./TSWorldObject#setfloat) [`SetGUIDNumber`](./TSWorldObject#setguidnumber) [`SetInt`](./TSWorldObject#setint) [`SetJsonArray`](./TSWorldObject#setjsonarray) [`SetJsonObject`](./TSWorldObject#setjsonobject) [`SetNumber`](./TSWorldObject#setnumber) [`SetObject`](./TSWorldObject#setobject) [`SetPhaseMask`](./TSWorldObject#setphasemask) [`SetRawDouble`](./TSWorldObject#setrawdouble) [`SetRawFloat`](./TSWorldObject#setrawfloat) [`SetRawInt16`](./TSWorldObject#setrawint16) [`SetRawInt32`](./TSWorldObject#setrawint32) [`SetRawInt64`](./TSWorldObject#setrawint64) [`SetRawInt8`](./TSWorldObject#setrawint8) [`SetRawUInt16`](./TSWorldObject#setrawuint16) [`SetRawUInt32`](./TSWorldObject#setrawuint32) [`SetRawUInt64`](./TSWorldObject#setrawuint64) [`SetRawUInt8`](./TSWorldObject#setrawuint8) [`SetScale`](./TSWorldObject#setscale) [`SetString`](./TSWorldObject#setstring) [`SetUInt`](./TSWorldObject#setuint) [`SetUInt64`](./TSWorldObject#setuint64) [`SpawnCreature`](./TSWorldObject#spawncreature) [`SummonGameObject`](./TSWorldObject#summongameobject) [`ToCorpse`](./TSWorldObject#tocorpse) [`ToCreature`](./TSWorldObject#tocreature) [`ToGameObject`](./TSWorldObject#togameobject) [`ToItem`](./TSWorldObject#toitem) [`ToPlayer`](./TSWorldObject#toplayer) [`ToUnit`](./TSWorldObject#tounit) [`UpdateCoreUInt32`](./TSWorldObject#updatecoreuint32)
