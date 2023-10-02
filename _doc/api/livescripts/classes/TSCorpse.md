---
title: TSCorpse
---


## Hierarchy

- [`TSWorldObject`](TSWorldObject)

  ↳ **`TSCorpse`**

## Methods

{: .api-section }
### GetGhostTime

{: .code-example }
`GetGhostTime(): TSNumber<uint32>`

Returns the time when the [Player] became a ghost and spawned this [Corpse].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 ghostTime

___

{: .api-section }
### GetLoot

{: .code-example }
`GetLoot(): TSLoot`

**Returns:** 
[`TSLoot`](TSLoot)

___

{: .api-section }
### GetOwnerGUID

{: .code-example }
`GetOwnerGUID(): TSGUID`

Returns the GUID of the [Player] that left the [Corpse] behind.

**Returns:** 
[`TSGUID`](TSGUID)

uint64 ownerGUID

___

{: .api-section }
### GetType

{: .code-example }
`GetType(): CorpseType`

Returns the [CorpseType] of a [Corpse].

    enum CorpseType
    {
        CORPSE_BONES             = 0,
        CORPSE_RESURRECTABLE_PVE = 1,
        CORPSE_RESURRECTABLE_PVP = 2
    }

**Returns:** 
[`CorpseType`](../enums/CorpseType)

corpseType

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
### ResetGhostTime

{: .code-example }
`ResetGhostTime(): void`

Sets the "ghost time" to the current time.

See [Corpse:GetGhostTime].

**Returns:** 
`void`

___

{: .api-section }
### SaveToDB

{: .code-example }
`SaveToDB(): void`

Saves the [Corpse] to the database.

**Returns:** 
`void`

___

## Inherited Members
[`AddCollision`](./TSWorldObject#addcollision) [`AddNamedTimer`](./TSWorldObject#addnamedtimer) [`AddTimer`](./TSWorldObject#addtimer) [`CastCustomSpell`](./TSWorldObject#castcustomspell) [`CastSpell`](./TSWorldObject#castspell) [`CastSpellAoF`](./TSWorldObject#castspellaof) [`ClearEntityGroups`](./TSWorldObject#clearentitygroups) [`DoDelayed`](./TSWorldObject#dodelayed) [`GetAreaID`](./TSWorldObject#getareaid) [`GetBool`](./TSWorldObject#getbool) [`GetCollision`](./TSWorldObject#getcollision) [`GetCollisions`](./TSWorldObject#getcollisions) [`GetCoreByte`](./TSWorldObject#getcorebyte) [`GetCoreFloat`](./TSWorldObject#getcorefloat) [`GetCoreInt32`](./TSWorldObject#getcoreint32) [`GetCoreUInt16`](./TSWorldObject#getcoreuint16) [`GetCoreUInt32`](./TSWorldObject#getcoreuint32) [`GetCoreUInt64`](./TSWorldObject#getcoreuint64) [`GetCorpse`](./TSWorldObject#getcorpse) [`GetCreature`](./TSWorldObject#getcreature) [`GetCreaturesInRange`](./TSWorldObject#getcreaturesinrange) [`GetDistance`](./TSWorldObject#getdistance) [`GetDistance2d`](./TSWorldObject#getdistance2d) [`GetDistanceToPoint`](./TSWorldObject#getdistancetopoint) [`GetDistanceToPoint2d`](./TSWorldObject#getdistancetopoint2d) [`GetEffectiveOwner`](./TSWorldObject#geteffectiveowner) [`GetEntityGroup`](./TSWorldObject#getentitygroup) [`GetEntry`](./TSWorldObject#getentry) [`GetFactionTemplate`](./TSWorldObject#getfactiontemplate) [`GetFloat`](./TSWorldObject#getfloat) [`GetGUID`](./TSWorldObject#getguid) [`GetGUIDLow`](./TSWorldObject#getguidlow) [`GetGUIDNumber`](./TSWorldObject#getguidnumber) [`GetGameObject`](./TSWorldObject#getgameobject) [`GetGameObjectsInRange`](./TSWorldObject#getgameobjectsinrange) [`GetInstanceID`](./TSWorldObject#getinstanceid) [`GetInt`](./TSWorldObject#getint) [`GetJsonArray`](./TSWorldObject#getjsonarray) [`GetJsonObject`](./TSWorldObject#getjsonobject) [`GetLiquidStatus`](./TSWorldObject#getliquidstatus) [`GetMap`](./TSWorldObject#getmap) [`GetMapID`](./TSWorldObject#getmapid) [`GetName`](./TSWorldObject#getname) [`GetNearestCreature`](./TSWorldObject#getnearestcreature) [`GetNearestGameObject`](./TSWorldObject#getnearestgameobject) [`GetNearestPlayer`](./TSWorldObject#getnearestplayer) [`GetNumber`](./TSWorldObject#getnumber) [`GetO`](./TSWorldObject#geto) [`GetObject`](./TSWorldObject#getobject) [`GetPhaseID`](./TSWorldObject#getphaseid) [`GetPhaseMask`](./TSWorldObject#getphasemask) [`GetPlayer`](./TSWorldObject#getplayer) [`GetPlayersInRange`](./TSWorldObject#getplayersinrange) [`GetPosition`](./TSWorldObject#getposition) [`GetRawDouble`](./TSWorldObject#getrawdouble) [`GetRawFloat`](./TSWorldObject#getrawfloat) [`GetRawInt16`](./TSWorldObject#getrawint16) [`GetRawInt32`](./TSWorldObject#getrawint32) [`GetRawInt64`](./TSWorldObject#getrawint64) [`GetRawInt8`](./TSWorldObject#getrawint8) [`GetRawUInt16`](./TSWorldObject#getrawuint16) [`GetRawUInt32`](./TSWorldObject#getrawuint32) [`GetRawUInt64`](./TSWorldObject#getrawuint64) [`GetRawUInt8`](./TSWorldObject#getrawuint8) [`GetRelativePoint`](./TSWorldObject#getrelativepoint) [`GetScale`](./TSWorldObject#getscale) [`GetString`](./TSWorldObject#getstring) [`GetTypeID`](./TSWorldObject#gettypeid) [`GetUInt`](./TSWorldObject#getuint) [`GetUInt64`](./TSWorldObject#getuint64) [`GetUnit`](./TSWorldObject#getunit) [`GetUnitsInRange`](./TSWorldObject#getunitsinrange) [`GetX`](./TSWorldObject#getx) [`GetY`](./TSWorldObject#gety) [`GetZ`](./TSWorldObject#getz) [`GetZoneID`](./TSWorldObject#getzoneid) [`HasBool`](./TSWorldObject#hasbool) [`HasCollision`](./TSWorldObject#hascollision) [`HasFlag`](./TSWorldObject#hasflag) [`HasFloat`](./TSWorldObject#hasfloat) [`HasGUIDNumber`](./TSWorldObject#hasguidnumber) [`HasInt`](./TSWorldObject#hasint) [`HasJsonArray`](./TSWorldObject#hasjsonarray) [`HasJsonObject`](./TSWorldObject#hasjsonobject) [`HasNumber`](./TSWorldObject#hasnumber) [`HasObject`](./TSWorldObject#hasobject) [`HasString`](./TSWorldObject#hasstring) [`HasUInt`](./TSWorldObject#hasuint) [`HasUInt64`](./TSWorldObject#hasuint64) [`IsBehind`](./TSWorldObject#isbehind) [`IsCorpse`](./TSWorldObject#iscorpse) [`IsCreature`](./TSWorldObject#iscreature) [`IsFriendlyTo`](./TSWorldObject#isfriendlyto) [`IsFriendlyToPlayers`](./TSWorldObject#isfriendlytoplayers) [`IsGameObject`](./TSWorldObject#isgameobject) [`IsHostileTo`](./TSWorldObject#ishostileto) [`IsHostileToPlayers`](./TSWorldObject#ishostiletoplayers) [`IsInBack`](./TSWorldObject#isinback) [`IsInFront`](./TSWorldObject#isinfront) [`IsInMap`](./TSWorldObject#isinmap) [`IsInRange`](./TSWorldObject#isinrange) [`IsInRange2d`](./TSWorldObject#isinrange2d) [`IsInRange3d`](./TSWorldObject#isinrange3d) [`IsInWorld`](./TSWorldObject#isinworld) [`IsItem`](./TSWorldObject#isitem) [`IsNeutralToAll`](./TSWorldObject#isneutraltoall) [`IsOutdoors`](./TSWorldObject#isoutdoors) [`IsPlayer`](./TSWorldObject#isplayer) [`IsUnit`](./TSWorldObject#isunit) [`IsWithinDist`](./TSWorldObject#iswithindist) [`IsWithinDist2d`](./TSWorldObject#iswithindist2d) [`IsWithinDist3d`](./TSWorldObject#iswithindist3d) [`IsWithinDistInMap`](./TSWorldObject#iswithindistinmap) [`IsWithinLoS`](./TSWorldObject#iswithinlos) [`PlayDirectSound`](./TSWorldObject#playdirectsound) [`PlayDistanceSound`](./TSWorldObject#playdistancesound) [`PlayMusic`](./TSWorldObject#playmusic) [`RemoveEntityGroup`](./TSWorldObject#removeentitygroup) [`RemoveFlag`](./TSWorldObject#removeflag) [`RemoveTimer`](./TSWorldObject#removetimer) [`SendPacket`](./TSWorldObject#sendpacket) [`SetBool`](./TSWorldObject#setbool) [`SetCoreByte`](./TSWorldObject#setcorebyte) [`SetCoreFloat`](./TSWorldObject#setcorefloat) [`SetCoreInt16`](./TSWorldObject#setcoreint16) [`SetCoreInt32`](./TSWorldObject#setcoreint32) [`SetCoreUInt16`](./TSWorldObject#setcoreuint16) [`SetCoreUInt32`](./TSWorldObject#setcoreuint32) [`SetCoreUInt64`](./TSWorldObject#setcoreuint64) [`SetFlag`](./TSWorldObject#setflag) [`SetFloat`](./TSWorldObject#setfloat) [`SetGUIDNumber`](./TSWorldObject#setguidnumber) [`SetInt`](./TSWorldObject#setint) [`SetJsonArray`](./TSWorldObject#setjsonarray) [`SetJsonObject`](./TSWorldObject#setjsonobject) [`SetNumber`](./TSWorldObject#setnumber) [`SetObject`](./TSWorldObject#setobject) [`SetPhaseMask`](./TSWorldObject#setphasemask) [`SetRawDouble`](./TSWorldObject#setrawdouble) [`SetRawFloat`](./TSWorldObject#setrawfloat) [`SetRawInt16`](./TSWorldObject#setrawint16) [`SetRawInt32`](./TSWorldObject#setrawint32) [`SetRawInt64`](./TSWorldObject#setrawint64) [`SetRawInt8`](./TSWorldObject#setrawint8) [`SetRawUInt16`](./TSWorldObject#setrawuint16) [`SetRawUInt32`](./TSWorldObject#setrawuint32) [`SetRawUInt64`](./TSWorldObject#setrawuint64) [`SetRawUInt8`](./TSWorldObject#setrawuint8) [`SetScale`](./TSWorldObject#setscale) [`SetString`](./TSWorldObject#setstring) [`SetUInt`](./TSWorldObject#setuint) [`SetUInt64`](./TSWorldObject#setuint64) [`SpawnCreature`](./TSWorldObject#spawncreature) [`SummonGameObject`](./TSWorldObject#summongameobject) [`ToCorpse`](./TSWorldObject#tocorpse) [`ToCreature`](./TSWorldObject#tocreature) [`ToGameObject`](./TSWorldObject#togameobject) [`ToItem`](./TSWorldObject#toitem) [`ToPlayer`](./TSWorldObject#toplayer) [`ToUnit`](./TSWorldObject#tounit) [`UpdateCoreUInt32`](./TSWorldObject#updatecoreuint32)
