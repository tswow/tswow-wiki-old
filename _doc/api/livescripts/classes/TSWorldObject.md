---
title: TSWorldObject
---


## Hierarchy

- [`TSObject`](TSObject)

- [`TSWorldEntityProvider`](TSWorldEntityProvider)<[`TSWorldObject`](TSWorldObject)\>

  ↳ **`TSWorldObject`**

  ↳↳ [`TSCorpse`](TSCorpse)

  ↳↳ [`TSGameObject`](TSGameObject)

  ↳↳ [`TSUnit`](TSUnit)

## Methods

{: .api-section }
### AddCollision

{: .code-example }
`AddCollision(id, range, minDelay, maxHits, cb): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `string` |
| `range` | `float` |
| `minDelay` | `uint32` |
| `maxHits` | `uint32` |
| `cb` | `TSCollisionCallback` |

**Returns:** 
`any`

___

{: .api-section }
### CastCustomSpell

{: .code-example }
`CastCustomSpell(target, spell, triggered?, bp0?, bp1?, bp2?, castItem?, originalCaster?): SpellCastResult`

Casts the [Spell] at target [Unit] with custom basepoints or casters.
See also [Unit:CastSpell].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSItem`](TSItem) \| [`TSWorldObject`](TSWorldObject) | = nil |
| `spell` | `uint32` | - |
| `triggered?` | `boolean` | - |
| `bp0?` | `int32` | - |
| `bp1?` | `int32` | - |
| `bp2?` | `int32` | - |
| `castItem?` | [`TSItem`](TSItem) | = nil |
| `originalCaster?` | `uint64` | - |

**Returns:** 
[`SpellCastResult`](../enums/SpellCastResult)

___

{: .api-section }
### CastSpell

{: .code-example }
`CastSpell(target, spell, triggered?): SpellCastResult`

Makes the [Unit] cast the spell on the target.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSItem`](TSItem) \| [`TSWorldObject`](TSWorldObject) | = nil : can be self or another unit |
| `spell` | `uint32` | - |
| `triggered?` | `boolean` | - |

**Returns:** 
[`SpellCastResult`](../enums/SpellCastResult)

___

{: .api-section }
### CastSpellAoF

{: .code-example }
`CastSpellAoF(_x, _y, _z, spell, triggered?): SpellCastResult`

Makes the [Unit] cast the spell to the given coordinates, used for area effect spells.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `_x` | `float` |
| `_y` | `float` |
| `_z` | `float` |
| `spell` | `uint32` |
| `triggered?` | `boolean` |

**Returns:** 
[`SpellCastResult`](../enums/SpellCastResult)

___

{: .api-section }
### DoDelayed

{: .code-example }
`DoDelayed(callback): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`obj`: [`TSWorldObject`](TSWorldObject), `mgr`: [`TSMainThreadContext`](TSMainThreadContext)) => `void` |

**Returns:** 
`void`

___

{: .api-section }
### GetAreaID

{: .code-example }
`GetAreaID(): TSNumber<uint32>`

Returns the current area ID of the [WorldObject]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 areaId

___

{: .api-section }
### GetCollision

{: .code-example }
`GetCollision(id): TSCollisionEntry`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `string` |

**Returns:** 
[`TSCollisionEntry`](TSCollisionEntry)

___

{: .api-section }
### GetCollisions

{: .code-example }
`GetCollisions(): TSCollisions`

**Returns:** 
[`TSCollisions`](TSCollisions)

___

{: .api-section }
### GetCorpse

{: .code-example }
`GetCorpse(guid): TSCorpse`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSCorpse`](TSCorpse)

___

{: .api-section }
### GetCreature

{: .code-example }
`GetCreature(guid): TSCreature`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### GetCreaturesInRange

{: .code-example }
`GetCreaturesInRange(range, entry, hostile, dead): TSArray<TSCreature>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range` | `float` |
| `entry` | `uint32` |
| `hostile` | `uint32` |
| `dead` | `uint32` |

**Returns:** 
`TSArray`<[`TSCreature`](TSCreature)\>

___

{: .api-section }
### GetDistance

{: .code-example }
`GetDistance(target): TSNumber<float>`

Returns the distance from this [WorldObject] to another [WorldObject]

The function takes into account the given object sizes. See also [WorldObject:GetExactDistance], [WorldObject:GetDistance2d]

**`proto`** dist = (obj)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`TSNumber`<`float`\>

float dist : the distance in yards

___

{: .api-section }
### GetDistance2d

{: .code-example }
`GetDistance2d(target): TSNumber<float>`

Returns the distance from this [WorldObject] to another [WorldObject]

The function takes into account the given object sizes. See also [WorldObject:GetDistance], [WorldObject:GetExactDistance2d]

**`proto`** dist = (obj)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`TSNumber`<`float`\>

float dist : the distance in yards

___

{: .api-section }
### GetDistanceToPoint

{: .code-example }
`GetDistanceToPoint(x, y, z): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetDistanceToPoint2d

{: .code-example }
`GetDistanceToPoint2d(X, Y): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `X` | `float` |
| `Y` | `float` |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetFactionTemplate

{: .code-example }
`GetFactionTemplate(): TSFactionTemplate`

**Returns:** 
[`TSFactionTemplate`](TSFactionTemplate)

___

{: .api-section }
### GetGameObject

{: .code-example }
`GetGameObject(guid): TSGameObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### GetGameObjectsInRange

{: .code-example }
`GetGameObjectsInRange(range, entry, hostile): TSArray<TSGameObject>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range` | `float` |
| `entry` | `uint32` |
| `hostile` | `uint32` |

**Returns:** 
`TSArray`<[`TSGameObject`](TSGameObject)\>

___

{: .api-section }
### GetInstanceID

{: .code-example }
`GetInstanceID(): TSNumber<uint32>`

Returns the current instance ID of the [WorldObject]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 instanceId

___

{: .api-section }
### GetLiquidStatus

{: .code-example }
`GetLiquidStatus(): LiquidStatus`

**Returns:** 
[`LiquidStatus`](../enums/LiquidStatus)

___

{: .api-section }
### GetMap

{: .code-example }
`GetMap(): TSMap`

Returns the current [Map] object of the [WorldObject]

**Returns:** 
[`TSMap`](TSMap)

mapObject

___

{: .api-section }
### GetMapID

{: .code-example }
`GetMapID(): TSNumber<uint32>`

Returns the current map ID of the [WorldObject]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 mapId

___

{: .api-section }
### GetName

{: .code-example }
`GetName(): string`

Returns the name of the [WorldObject]

**Returns:** 
`string`

string name

___

{: .api-section }
### GetNearestCreature

{: .code-example }
`GetNearestCreature(range?, entry?, hostile?, dead?): TSCreature`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range?` | `float` |
| `entry?` | `uint32` |
| `hostile?` | `uint32` \| [`Attitude`](../enums/Attitude) |
| `dead?` | `uint32` \| [`DeathStatus`](../enums/DeathStatus) |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### GetNearestGameObject

{: .code-example }
`GetNearestGameObject(range?, entry?, hostile?): TSGameObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range?` | `float` |
| `entry?` | `uint32` |
| `hostile?` | `uint32` \| [`Attitude`](../enums/Attitude) |

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### GetNearestPlayer

{: .code-example }
`GetNearestPlayer(range?, hostile?, dead?): TSPlayer`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range?` | `float` |
| `hostile?` | `uint32` \| [`Attitude`](../enums/Attitude) |
| `dead?` | `uint32` \| [`DeathStatus`](../enums/DeathStatus) |

**Returns:** 
[`TSPlayer`](TSPlayer)

___

{: .api-section }
### GetO

{: .code-example }
`GetO(): TSNumber<float>`

Returns the current orientation of the [WorldObject]

**Returns:** 
`TSNumber`<`float`\>

float orientation / facing

___

{: .api-section }
### GetPhaseID

{: .code-example }
`GetPhaseID(): TSNumber<uint64>`

Returns the [WorldObject]'s phase id.

**Returns:** 
`TSNumber`<`uint64`\>

___

{: .api-section }
### GetPhaseMask

{: .code-example }
`GetPhaseMask(): TSNumber<uint32>`

Returns the current phase of the [WorldObject]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 phase

___

{: .api-section }
### GetPlayer

{: .code-example }
`GetPlayer(guid): TSPlayer`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSPlayer`](TSPlayer)

___

{: .api-section }
### GetPlayersInRange

{: .code-example }
`GetPlayersInRange(range, hostile, dead): TSArray<TSPlayer>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range` | `float` |
| `hostile` | `uint32` |
| `dead` | `uint32` |

**Returns:** 
`TSArray`<[`TSPlayer`](TSPlayer)\>

___

{: .api-section }
### GetPosition

{: .code-example }
`GetPosition(): TSPosition`

**Returns:** 
[`TSPosition`](TSPosition)

___

{: .api-section }
### GetRelativePoint

{: .code-example }
`GetRelativePoint(dist, rad): TSPosition`

Returns the x, y and z of a point dist away from the [WorldObject].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `dist` | `float` |
| `rad` | `float` |

**Returns:** 
[`TSPosition`](TSPosition)

float x

___

{: .api-section }
### GetUnit

{: .code-example }
`GetUnit(guid): TSUnit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### GetUnitsInRange

{: .code-example }
`GetUnitsInRange(range, hostile, dead): TSArray<TSUnit>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `range` | `float` |
| `hostile` | `uint32` |
| `dead` | `uint32` |

**Returns:** 
`TSArray`<[`TSUnit`](TSUnit)\>

___

{: .api-section }
### GetX

{: .code-example }
`GetX(): TSNumber<float>`

Returns the current X coordinate of the [WorldObject]

**Returns:** 
`TSNumber`<`float`\>

float x

___

{: .api-section }
### GetY

{: .code-example }
`GetY(): TSNumber<float>`

Returns the current Y coordinate of the [WorldObject]

**Returns:** 
`TSNumber`<`float`\>

float y

___

{: .api-section }
### GetZ

{: .code-example }
`GetZ(): TSNumber<float>`

Returns the current Z coordinate of the [WorldObject]

**Returns:** 
`TSNumber`<`float`\>

float z

___

{: .api-section }
### GetZoneID

{: .code-example }
`GetZoneID(): TSNumber<uint32>`

Returns the current zone ID of the [WorldObject]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 zoneId

___

{: .api-section }
### HasCollision

{: .code-example }
`HasCollision(id): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `string` |

**Returns:** 
`any`

___

{: .api-section }
### IsBehind

{: .code-example }
`IsBehind(obj): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`boolean`

___

{: .api-section }
### IsFriendlyTo

{: .code-example }
`IsFriendlyTo(obj): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`boolean`

___

{: .api-section }
### IsFriendlyToPlayers

{: .code-example }
`IsFriendlyToPlayers(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsHostileTo

{: .code-example }
`IsHostileTo(obj): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`boolean`

___

{: .api-section }
### IsHostileToPlayers

{: .code-example }
`IsHostileToPlayers(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsInBack

{: .code-example }
`IsInBack(target, arc): boolean`

Returns true if the target is in the given arc behind the [WorldObject]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |
| `arc` | `float` |

**Returns:** 
`boolean`

bool isInBack

___

{: .api-section }
### IsInFront

{: .code-example }
`IsInFront(target, arc): boolean`

Returns true if the target is in the given arc in front of the [WorldObject]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |
| `arc` | `float` |

**Returns:** 
`boolean`

bool isInFront

___

{: .api-section }
### IsInMap

{: .code-example }
`IsInMap(target): boolean`

Returns true if the [WorldObject]s are on the same map

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`boolean`

bool isInMap

___

{: .api-section }
### IsInRange

{: .code-example }
`IsInRange(target, minrange, maxrange, is3D): boolean`

Returns true if the target is within given range

Notice that the distance is measured from the edge of the [WorldObject]s.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |
| `minrange` | `float` |
| `maxrange` | `float` |
| `is3D` | `boolean` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsInRange2d

{: .code-example }
`IsInRange2d(x, y, minrange, maxrange): boolean`

Returns true if the point is within given range

Notice that the distance is measured from the edge of the [WorldObject].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `minrange` | `float` |
| `maxrange` | `float` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsInRange3d

{: .code-example }
`IsInRange3d(x, y, z, minrange, maxrange): boolean`

Returns true if the point is within given range

Notice that the distance is measured from the edge of the [WorldObject].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `minrange` | `float` |
| `maxrange` | `float` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsNeutralToAll

{: .code-example }
`IsNeutralToAll(): boolean`

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

[TSObject](TSObject).[IsNull](TSObject.md#isnull)

___

{: .api-section }
### IsOutdoors

{: .code-example }
`IsOutdoors(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsWithinDist

{: .code-example }
`IsWithinDist(target, distance, is3D): boolean`

Returns true if the target is in the given distance of the [WorldObject]

Notice that the distance is measured from the edge of the [WorldObject]s.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |
| `distance` | `float` |
| `is3D` | `boolean` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsWithinDist2d

{: .code-example }
`IsWithinDist2d(x, y, dist): boolean`

Returns true if the point is in the given distance of the [WorldObject]

The distance is measured only in x,y coordinates.
Notice that the distance is measured from the edge of the [WorldObject].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `dist` | `float` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsWithinDist3d

{: .code-example }
`IsWithinDist3d(x, y, z, dist): boolean`

Returns true if the point is in the given distance of the [WorldObject]

Notice that the distance is measured from the edge of the [WorldObject].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `dist` | `float` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsWithinDistInMap

{: .code-example }
`IsWithinDistInMap(target, distance, is3D): boolean`

Returns true if the [WorldObject] is on the same map and within given distance

Notice that the distance is measured from the edge of the [WorldObject]s.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |
| `distance` | `float` |
| `is3D` | `boolean` |

**Returns:** 
`boolean`

bool isInDistance

___

{: .api-section }
### IsWithinLoS

{: .code-example }
`IsWithinLoS(target, x, y, z): boolean`

Returns true if the given [WorldObject] or coordinates are in the [WorldObject]'s line of sight

**`proto`** isInLoS = (worldobject)

**`proto`** isInLoS = (x, y, z)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSWorldObject`](TSWorldObject) |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

**Returns:** 
`boolean`

bool isInLoS

___

{: .api-section }
### PlayDirectSound

{: .code-example }
`PlayDirectSound(soundId, player): void`

The [WorldObject] plays a sound to a [Player]

If no [Player] provided it will play the sound to everyone near.
This method will play sound and does not interrupt prvious sound.

See also [WorldObject:PlayDistanceSound], [WorldObject:PlayMusic]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `soundId` | `uint32` | - |
| `player` | [`TSPlayer`](TSPlayer) | = nil : [Player] to play the sound to |

**Returns:** 
`void`

___

{: .api-section }
### PlayDistanceSound

{: .code-example }
`PlayDistanceSound(soundId, player): void`

The [WorldObject] plays a sound to a [Player]

If no [Player] it will play the sound to everyone near.
Sound will fade the further you are from the [WorldObject].
This method interrupts previously playing sound.

See also [WorldObject:PlayDirectSound], [WorldObject:PlayMusic]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `soundId` | `uint32` | - |
| `player` | [`TSPlayer`](TSPlayer) | = nil : [Player] to play the sound to |

**Returns:** 
`void`

___

{: .api-section }
### PlayMusic

{: .code-example }
`PlayMusic(musicid, player): void`

The [WorldObject] plays music to a [Player]

If no [Player] provided it will play the music to everyone near.
This method does not interrupt previously played music.

See also [WorldObject:PlayDistanceSound], [WorldObject:PlayDirectSound]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `musicid` | `uint32` | - |
| `player` | [`TSPlayer`](TSPlayer) | = nil : [Player] to play the music to |

**Returns:** 
`void`

___

{: .api-section }
### SendPacket

{: .code-example }
`SendPacket(data): void`

Sends a [WorldPacket] to [Player]s in sight of the [WorldObject].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `data` | [`TSWorldPacket`](TSWorldPacket) |

**Returns:** 
`void`

___

{: .api-section }
### SetPhaseMask

{: .code-example }
`SetPhaseMask(phaseMask, update, id): void`

Sets the [WorldObject]'s phase mask.

**`note`** changing PhaseType will always force a phase update

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `phaseMask` | `uint32` |
| `update` | `boolean` |
| `id` | `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SpawnCreature

{: .code-example }
`SpawnCreature(entry, x, y, z, o, spawnType, despawnTimer): TSCreature`

Spawns the creature at specified location.

    enum TempSummonType
    {
        TEMPSUMMON_TIMED_OR_DEAD_DESPAWN       = 1, // despawns after a specified time OR when the creature disappears
        TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN     = 2, // despawns after a specified time OR when the creature dies
        TEMPSUMMON_TIMED_DESPAWN               = 3, // despawns after a specified time
        TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT = 4, // despawns after a specified time after the creature is out of combat
        TEMPSUMMON_CORPSE_DESPAWN              = 5, // despawns instantly after death
        TEMPSUMMON_CORPSE_TIMED_DESPAWN        = 6, // despawns after a specified time after death
        TEMPSUMMON_DEAD_DESPAWN                = 7, // despawns when the creature disappears
        TEMPSUMMON_MANUAL_DESPAWN              = 8, // despawnswhen TSWorldObject::UnSummon() is called
        TEMPSUMMON_TIMED_OOC_OR_CORPSE_DESPAWN = 9, // despawns after a specified time (OOC) OR when the creature dies
        TEMPSUMMON_TIMED_OOC_OR_DEAD_DESPAWN   = 10 // despawns after a specified time (OOC) OR when the creature disappears

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `entry` | `uint32` | - |
| `x` | `float` | - |
| `y` | `float` | - |
| `z` | `float` | - |
| `o` | `float` | - |
| `spawnType` | [`TempSummonType`](../enums/TempSummonType) | = MANUAL_DESPAWN : defines how and when the creature despawns |
| `despawnTimer` | `uint32` | - |

**Returns:** 
[`TSCreature`](TSCreature)

spawnedCreature

___

{: .api-section }
### SummonGameObject

{: .code-example }
`SummonGameObject(entry, x, y, z, o, respawnDelay): TSGameObject`

Spawns a [GameObject] at specified location.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |
| `respawnDelay` | `uint32` |

**Returns:** 
[`TSGameObject`](TSGameObject)

gameObject

___

## Inherited Members
[`AddNamedTimer`](./TSWorldEntityProvider#addnamedtimer) [`AddTimer`](./TSWorldEntityProvider#addtimer) [`ClearEntityGroups`](./TSWorldEntityProvider#clearentitygroups) [`GetBool`](./TSObject#getbool) [`GetCoreByte`](./TSObject#getcorebyte) [`GetCoreFloat`](./TSObject#getcorefloat) [`GetCoreInt32`](./TSObject#getcoreint32) [`GetCoreUInt16`](./TSObject#getcoreuint16) [`GetCoreUInt32`](./TSObject#getcoreuint32) [`GetCoreUInt64`](./TSObject#getcoreuint64) [`GetEffectiveOwner`](./TSObject#geteffectiveowner) [`GetEntityGroup`](./TSWorldEntityProvider#getentitygroup) [`GetEntry`](./TSObject#getentry) [`GetFloat`](./TSObject#getfloat) [`GetGUID`](./TSObject#getguid) [`GetGUIDLow`](./TSObject#getguidlow) [`GetGUIDNumber`](./TSObject#getguidnumber) [`GetInt`](./TSObject#getint) [`GetJsonArray`](./TSObject#getjsonarray) [`GetJsonObject`](./TSObject#getjsonobject) [`GetNumber`](./TSObject#getnumber) [`GetObject`](./TSObject#getobject) [`GetRawDouble`](./TSObject#getrawdouble) [`GetRawFloat`](./TSObject#getrawfloat) [`GetRawInt16`](./TSObject#getrawint16) [`GetRawInt32`](./TSObject#getrawint32) [`GetRawInt64`](./TSObject#getrawint64) [`GetRawInt8`](./TSObject#getrawint8) [`GetRawUInt16`](./TSObject#getrawuint16) [`GetRawUInt32`](./TSObject#getrawuint32) [`GetRawUInt64`](./TSObject#getrawuint64) [`GetRawUInt8`](./TSObject#getrawuint8) [`GetScale`](./TSObject#getscale) [`GetString`](./TSObject#getstring) [`GetTypeID`](./TSObject#gettypeid) [`GetUInt`](./TSObject#getuint) [`GetUInt64`](./TSObject#getuint64) [`HasBool`](./TSObject#hasbool) [`HasFlag`](./TSObject#hasflag) [`HasFloat`](./TSObject#hasfloat) [`HasGUIDNumber`](./TSObject#hasguidnumber) [`HasInt`](./TSObject#hasint) [`HasJsonArray`](./TSObject#hasjsonarray) [`HasJsonObject`](./TSObject#hasjsonobject) [`HasNumber`](./TSObject#hasnumber) [`HasObject`](./TSObject#hasobject) [`HasString`](./TSObject#hasstring) [`HasUInt`](./TSObject#hasuint) [`HasUInt64`](./TSObject#hasuint64) [`IsCorpse`](./TSObject#iscorpse) [`IsCreature`](./TSObject#iscreature) [`IsGameObject`](./TSObject#isgameobject) [`IsInWorld`](./TSObject#isinworld) [`IsItem`](./TSObject#isitem) [`IsPlayer`](./TSObject#isplayer) [`IsUnit`](./TSObject#isunit) [`RemoveEntityGroup`](./TSWorldEntityProvider#removeentitygroup) [`RemoveFlag`](./TSObject#removeflag) [`RemoveTimer`](./TSWorldEntityProvider#removetimer) [`SetBool`](./TSObject#setbool) [`SetCoreByte`](./TSObject#setcorebyte) [`SetCoreFloat`](./TSObject#setcorefloat) [`SetCoreInt16`](./TSObject#setcoreint16) [`SetCoreInt32`](./TSObject#setcoreint32) [`SetCoreUInt16`](./TSObject#setcoreuint16) [`SetCoreUInt32`](./TSObject#setcoreuint32) [`SetCoreUInt64`](./TSObject#setcoreuint64) [`SetFlag`](./TSObject#setflag) [`SetFloat`](./TSObject#setfloat) [`SetGUIDNumber`](./TSObject#setguidnumber) [`SetInt`](./TSObject#setint) [`SetJsonArray`](./TSObject#setjsonarray) [`SetJsonObject`](./TSObject#setjsonobject) [`SetNumber`](./TSObject#setnumber) [`SetObject`](./TSObject#setobject) [`SetRawDouble`](./TSObject#setrawdouble) [`SetRawFloat`](./TSObject#setrawfloat) [`SetRawInt16`](./TSObject#setrawint16) [`SetRawInt32`](./TSObject#setrawint32) [`SetRawInt64`](./TSObject#setrawint64) [`SetRawInt8`](./TSObject#setrawint8) [`SetRawUInt16`](./TSObject#setrawuint16) [`SetRawUInt32`](./TSObject#setrawuint32) [`SetRawUInt64`](./TSObject#setrawuint64) [`SetRawUInt8`](./TSObject#setrawuint8) [`SetScale`](./TSObject#setscale) [`SetString`](./TSObject#setstring) [`SetUInt`](./TSObject#setuint) [`SetUInt64`](./TSObject#setuint64) [`ToCorpse`](./TSObject#tocorpse) [`ToCreature`](./TSObject#tocreature) [`ToGameObject`](./TSObject#togameobject) [`ToItem`](./TSObject#toitem) [`ToPlayer`](./TSObject#toplayer) [`ToUnit`](./TSObject#tounit) [`UpdateCoreUInt32`](./TSObject#updatecoreuint32)
