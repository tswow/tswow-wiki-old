---
title: TSCreature
---


## Hierarchy

- [`TSUnit`](TSUnit)

  ↳ **`TSCreature`**

## Methods

{: .api-section }
### AddLootMode

{: .code-example }
`AddLootMode(lootMode): void`

Adds a loot mode to the [Creature]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `lootMode` | `uint16` |

**Returns:** 
`void`

___

{: .api-section }
### AttackStart

{: .code-example }
`AttackStart(target): void`

Make the [Creature] attack `target`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |

**Returns:** 
`void`

___

{: .api-section }
### CallAssistance

{: .code-example }
`CallAssistance(): void`

Make the [Creature] call for assistance in combat from other nearby [Creature]s.

**Returns:** 
`void`

___

{: .api-section }
### CallForHelp

{: .code-example }
`CallForHelp(radius): void`

Make the [Creature] call for help in combat from friendly [Creature]s within `radius`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `radius` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### CanAggro

{: .code-example }
`CanAggro(): boolean`

Returns `true` if the [Creature] can start attacking nearby hostile [Unit]s,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool canAggro

___

{: .api-section }
### CanAssistTo

{: .code-example }
`CanAssistTo(u, enemy, checkfaction): boolean`

Returns `true` if the [Creature] can assist `friend` in combat against `enemy`,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `u` | [`TSUnit`](TSUnit) | - |
| `enemy` | [`TSUnit`](TSUnit) | : the Unit that we would attack if we assist `friend` |
| `checkfaction` | `boolean` | - |

**Returns:** 
`boolean`

bool canAssist

___

{: .api-section }
### CanCompleteQuest

{: .code-example }
`CanCompleteQuest(quest_id): boolean`

Returns `true` if the [Creature] completes the [Quest] with the ID `questID`,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `quest_id` | `uint32` |

**Returns:** 
`boolean`

bool completesQuest

___

{: .api-section }
### CanFly

{: .code-example }
`CanFly(): boolean`

Returns `true` if the [Creature] can fly,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool canFly

___

{: .api-section }
### CanStartAttack

{: .code-example }
`CanStartAttack(target, force): boolean`

Returns true if the [Creature] can start attacking specified target

Does not work on most targets

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |
| `force` | `boolean` |

**Returns:** 
`boolean`

___

{: .api-section }
### CanSwim

{: .code-example }
`CanSwim(): boolean`

Returns `true` if the [Creature] can move through deep water,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool canSwim

___

{: .api-section }
### CanWalk

{: .code-example }
`CanWalk(): boolean`

Returns `true` if the [Creature] can move on land,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool canWalk

___

{: .api-section }
### DespawnOrUnsummon

{: .code-example }
`DespawnOrUnsummon(msTimeToDespawn): void`

Despawn this [Creature].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `msTimeToDespawn` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### FindThreatListEntry

{: .code-example }
`FindThreatListEntry(targetType, playerOnly, position, dist, aura): TSUnit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `targetType` | `uint32` |
| `playerOnly` | `boolean` |
| `position` | `uint32` |
| `dist` | `float` |
| `aura` | `int32` |

**Returns:** 
[`TSUnit`](TSUnit)

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
### FleeToGetAssistance

{: .code-example }
`FleeToGetAssistance(): void`

Make the [Creature] flee combat to get assistance from a nearby friendly [Creature].

**Returns:** 
`void`

___

{: .api-section }
### GetAIName

{: .code-example }
`GetAIName(): string`

Returns the [Creature]'s AI name.

This is used by the core to assign the Creature's default AI.

If the Creature is scripted by Eluna, the AI is n.

**Returns:** 
`string`

string AIName

___

{: .api-section }
### GetAggroRange

{: .code-example }
`GetAggroRange(target): TSNumber<float>`

Returns the aggro range of the [Creature] for `target`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |

**Returns:** 
`TSNumber`<`float`\>

float aggroRange

___

{: .api-section }
### GetCorpseDelay

{: .code-example }
`GetCorpseDelay(): TSNumber<uint32>`

Returns the delay between when the [Creature] dies and when its body despawns.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 corpseDelay : the delay, in seconds

___

{: .api-section }
### GetCreatureFamily

{: .code-example }
`GetCreatureFamily(): CreatureFamily`

Returns the [Creature]'s creature family ID (enumerated in CreatureFamily.dbc).

    enum CreatureFamily
    {
        CREATURE_FAMILY_NONE                = 0,    // TrinityCore only
        CREATURE_FAMILY_WOLF                = 1,
        CREATURE_FAMILY_CAT                 = 2,
        CREATURE_FAMILY_SPIDER              = 3,
        CREATURE_FAMILY_BEAR                = 4,
        CREATURE_FAMILY_BOAR                = 5,
        CREATURE_FAMILY_CROCOLISK           = 6,
        CREATURE_FAMILY_CARRION_BIRD        = 7,
        CREATURE_FAMILY_CRAB                = 8,
        CREATURE_FAMILY_GORILLA             = 9,
        CREATURE_FAMILY_HORSE_CUSTOM        = 10,   // Does not exist in DBC but used for horse like beasts in DB
        CREATURE_FAMILY_RAPTOR              = 11,
        CREATURE_FAMILY_TALLSTRIDER         = 12,
        CREATURE_FAMILY_FELHUNTER           = 15,
        CREATURE_FAMILY_VOIDWALKER          = 16,
        CREATURE_FAMILY_SUCCUBUS            = 17,
        CREATURE_FAMILY_DOOMGUARD           = 19,
        CREATURE_FAMILY_SCORPID             = 20,
        CREATURE_FAMILY_TURTLE              = 21,
        CREATURE_FAMILY_IMP                 = 23,
        CREATURE_FAMILY_BAT                 = 24,
        CREATURE_FAMILY_HYENA               = 25,
        CREATURE_FAMILY_BIRD_OF_PREY        = 26,   // Named CREATURE_FAMILY_OWL in Mangos
        CREATURE_FAMILY_WIND_SERPENT        = 27,
        CREATURE_FAMILY_REMOTE_CONTROL      = 28,
        CREATURE_FAMILY_FELGUARD            = 29,   // This and below is TBC+
        CREATURE_FAMILY_DRAGONHAWK          = 30,
        CREATURE_FAMILY_RAVAGER             = 31,
        CREATURE_FAMILY_WARP_STALKER        = 32,
        CREATURE_FAMILY_SPOREBAT            = 33,
        CREATURE_FAMILY_NETHER_RAY          = 34,
        CREATURE_FAMILY_SERPENT             = 35,
        CREATURE_FAMILY_SEA_LION            = 36,   // TBC only
        CREATURE_FAMILY_MOTH                = 37,   // This and below is WotLK+
        CREATURE_FAMILY_CHIMAERA            = 38,
        CREATURE_FAMILY_DEVILSAUR           = 39,
        CREATURE_FAMILY_GHOUL               = 40,
        CREATURE_FAMILY_SILITHID            = 41,
        CREATURE_FAMILY_WORM                = 42,
        CREATURE_FAMILY_RHINO               = 43,
        CREATURE_FAMILY_WASP                = 44,
        CREATURE_FAMILY_CORE_HOUND          = 45,
        CREATURE_FAMILY_SPIRIT_BEAST        = 46
    }

**Returns:** 
[`CreatureFamily`](../enums/CreatureFamily)

creatureFamily

___

{: .api-section }
### GetCreatureSpellCooldownDelay

{: .code-example }
`GetCreatureSpellCooldownDelay(spell): TSNumber<uint32>`

Returns the [Creature]'s cooldown for `spellID`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 cooldown : the cooldown, in milliseconds

___

{: .api-section }
### GetCurrentWaypointID

{: .code-example }
`GetCurrentWaypointID(): TSNumber<uint32>`

Returns the current waypoint ID of the [Creature].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 wpId

___

{: .api-section }
### GetDBTableGUIDLow

{: .code-example }
`GetDBTableGUIDLow(): TSNumber<uint32>`

Returns the guid of the [Creature] that is used as the ID in the database

**Returns:** 
`TSNumber`<`uint32`\>

uint32 dbguid

___

{: .api-section }
### GetDefaultMovementType

{: .code-example }
`GetDefaultMovementType(): TSNumber<uint32>`

Returns the default movement type for this [Creature].

**Returns:** 
`TSNumber`<`uint32`\>

defaultMovementType

___

{: .api-section }
### GetHomePosition

{: .code-example }
`GetHomePosition(): TSPosition`

Returns position the [Creature] returns to when evading from combat
  or respawning.

**Returns:** 
[`TSPosition`](TSPosition)

float x

___

{: .api-section }
### GetLoot

{: .code-example }
`GetLoot(): TSLoot`

**Returns:** 
[`TSLoot`](TSLoot)

___

{: .api-section }
### GetLootMode

{: .code-example }
`GetLootMode(): TSNumber<uint16>`

**Returns:** 
`TSNumber`<`uint16`\>

___

{: .api-section }
### GetLootRecipient

{: .code-example }
`GetLootRecipient(): TSPlayer`

Returns the [Player] that can loot this [Creature].

**Returns:** 
[`TSPlayer`](TSPlayer)

lootRecipient : the player or `nil`

___

{: .api-section }
### GetLootRecipientGroup

{: .code-example }
`GetLootRecipientGroup(): TSGroup`

Returns the [Group] that can loot this [Creature].

**Returns:** 
[`TSGroup`](TSGroup)

lootRecipientGroup : the group or `nil`

___

{: .api-section }
### GetMainhand

{: .code-example }
`GetMainhand(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetNPCFlags

{: .code-example }
`GetNPCFlags(): TSNumber<uint32>`

Returns the [Creature]'s NPC flags.

These are used to control whether the NPC is a vendor, can repair items,
  can give quests, etc.

**Returns:** 
`TSNumber`<`uint32`\>

npcFlags

___

{: .api-section }
### GetOffhand

{: .code-example }
`GetOffhand(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetOutfit

{: .code-example }
`GetOutfit(): TSOutfit`

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### GetOutfitCopy

{: .code-example }
`GetOutfitCopy(settings?, race?, gender?): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `settings?` | [`Outfit`](../enums/Outfit) |
| `race?` | `int32` |
| `gender?` | `int32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### GetRanged

{: .code-example }
`GetRanged(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetReactState

{: .code-example }
`GetReactState(): ReactStates`

Gets how a [Creature] responds to being attacked.

**Returns:** 
[`ReactStates`](../enums/ReactStates)

ReactStates. 0 = Passive, 1, = Defensive, 2 = Aggressive

___

{: .api-section }
### GetRespawnDelay

{: .code-example }
`GetRespawnDelay(): TSNumber<uint32>`

Returns the time it takes for this [Creature] to respawn once killed.

This value does not usually change over a [Creature]'s lifespan,
  but can be modified by [Creature:SetRespawnDelay].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 respawnDelay : the respawn delay, in seconds

___

{: .api-section }
### GetScriptID

{: .code-example }
`GetScriptID(): TSNumber<uint32>`

Returns the [Creature]'s script ID.

Every C++ script name is assigned a unique ID by the core.
  This returns the ID for this [Creature]'s script name.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 scriptID

___

{: .api-section }
### GetScriptName

{: .code-example }
`GetScriptName(): string`

Returns the [Creature]'s script name.

This is used by the core to apply C++ scripts to the Creature.

It is not used by Eluna. Eluna will  AI scripts.

**Returns:** 
`string`

string scriptName

___

{: .api-section }
### GetShieldBlockValue

{: .code-example }
`GetShieldBlockValue(): TSNumber<uint32>`

Returns the [Creature]'s shield block value.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 shieldBlockValue

___

{: .api-section }
### GetTemplate

{: .code-example }
`GetTemplate(): TSCreatureTemplate`

**Returns:** 
[`TSCreatureTemplate`](TSCreatureTemplate)

___

{: .api-section }
### GetThreat

{: .code-example }
`GetThreat(target, includeOffline?): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |
| `includeOffline?` | `boolean` |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetThreatList

{: .code-example }
`GetThreatList(): TSArray<TSUnit>`

**Returns:** 
`TSArray`<[`TSUnit`](TSUnit)\>

___

{: .api-section }
### GetThreatListCount

{: .code-example }
`GetThreatListCount(): int`

Returns the number of [Unit]s in this [Creature]'s threat list.

**Returns:** 
`int`

int targetsCount

___

{: .api-section }
### GetWanderRadius

{: .code-example }
`GetWanderRadius(): TSNumber<float>`

Returns the radius the [Creature] is permitted to wander from its
  respawn point.

**Returns:** 
`TSNumber`<`float`\>

float wanderRadius

___

{: .api-section }
### GetWaypointPath

{: .code-example }
`GetWaypointPath(): TSNumber<uint32>`

Returns the current waypoint path ID of the [Creature].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 pathId

___

{: .api-section }
### HasCategoryCooldown

{: .code-example }
`HasCategoryCooldown(spell): boolean`

Returns `true` if the [Creature] cannot cast `spellId` due to a category cooldown,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |

**Returns:** 
`boolean`

bool hasCooldown

___

{: .api-section }
### HasLootMode

{: .code-example }
`HasLootMode(lootMode): boolean`

Returns true if [Creature] has the specified loot mode

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `lootMode` | `uint16` |

**Returns:** 
`boolean`

bool hasLootMode

___

{: .api-section }
### HasLootRecipient

{: .code-example }
`HasLootRecipient(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### HasQuest

{: .code-example }
`HasQuest(questId): boolean`

Returns `true` if the [Creature] starts the [Quest] `questId`,
  and returns `false` otherwise.

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
### HasSearchedAssistance

{: .code-example }
`HasSearchedAssistance(): boolean`

Returns `true` if the [Creature] has searched for combat assistance already,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool searchedForAssistance

___

{: .api-section }
### HasSpell

{: .code-example }
`HasSpell(id): boolean`

Returns `true` if the [Creature] can cast `spellId` when mind-controlled,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`boolean`

bool hasSpell

___

{: .api-section }
### HasSpellCooldown

{: .code-example }
`HasSpellCooldown(spellId): boolean`

Returns `true` if the [Creature] has `spellId` on cooldown,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |

**Returns:** 
`boolean`

bool hasCooldown

___

{: .api-section }
### IsAIEnabled

{: .code-example }
`IsAIEnabled(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsCivilian

{: .code-example }
`IsCivilian(): boolean`

Returns `true` if the [Creature] is a civilian,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool isCivilian

___

{: .api-section }
### IsDamageEnoughForLootingAndReward

{: .code-example }
`IsDamageEnoughForLootingAndReward(): boolean`

Returns true if the [Creature] is damaged enough for looting

**Returns:** 
`boolean`

bool isDamagedEnough

___

{: .api-section }
### IsElite

{: .code-example }
`IsElite(): boolean`

Returns `true` if the [Creature]'s rank is Elite or Rare Elite,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool isElite

___

{: .api-section }
### IsGuard

{: .code-example }
`IsGuard(): boolean`

Returns `true` if the [Creature] is a city guard,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool isGuard

___

{: .api-section }
### IsInEvadeMode

{: .code-example }
`IsInEvadeMode(): boolean`

Returns `true` if the [Creature] is returning to its spawn position from combat,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool inEvadeMode

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

#### Overrides

[TSUnit](TSUnit).[IsNull](TSUnit.md#isnull)

___

{: .api-section }
### IsRacialLeader

{: .code-example }
`IsRacialLeader(): boolean`

Returns `true` if the [Creature] is the leader of a player faction,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool isLeader

___

{: .api-section }
### IsReputationGainDisabled

{: .code-example }
`IsReputationGainDisabled(): boolean`

Returns `true` if the [Creature] is set to not give reputation when killed,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool reputationDisabled

___

{: .api-section }
### IsTappedBy

{: .code-example }
`IsTappedBy(player): boolean`

Returns `true` if the [Creature] will give its loot to `player`,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`boolean`

bool tapped

___

{: .api-section }
### IsTargetableForAttack

{: .code-example }
`IsTargetableForAttack(mustBeDead): boolean`

Returns `true` if the [Creature] can be targeted for attack,
  and returns `false` otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mustBeDead` | `boolean` |

**Returns:** 
`boolean`

bool targetable

___

{: .api-section }
### IsTrigger

{: .code-example }
`IsTrigger(): boolean`

Returns `true` if the [Creature] is an invisible trigger,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool canFly

___

{: .api-section }
### IsWorldBoss

{: .code-example }
`IsWorldBoss(): boolean`

Returns `true` if the [Creature]'s rank is Boss,
  and returns `false` otherwise.

**Returns:** 
`boolean`

bool isWorldBoss

___

{: .api-section }
### MoveWaypoint

{: .code-example }
`MoveWaypoint(): void`

Make the [Creature] start following its waypoint path.

**Returns:** 
`void`

___

{: .api-section }
### RemoveCorpse

{: .code-example }
`RemoveCorpse(): void`

Remove this [Creature]'s corpse.

**Returns:** 
`void`

___

{: .api-section }
### RemoveLootMode

{: .code-example }
`RemoveLootMode(lootMode): void`

Removes specified loot mode from [Creature]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `lootMode` | `uint16` |

**Returns:** 
`void`

___

{: .api-section }
### ResetLootMode

{: .code-example }
`ResetLootMode(): void`

Resets [Creature]'s loot mode to default

**Returns:** 
`void`

___

{: .api-section }
### Respawn

{: .code-example }
`Respawn(): void`

Respawn this [Creature].

**Returns:** 
`void`

___

{: .api-section }
### SaveToDB

{: .code-example }
`SaveToDB(): void`

Save the [Creature] in the database.

**Returns:** 
`void`

___

{: .api-section }
### SelectVictim

{: .code-example }
`SelectVictim(): TSUnit`

Make the [Creature] try to find a new target.

This should be called every update cycle for the Creature's AI.

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### SetAggroEnabled

{: .code-example }
`SetAggroEnabled(allow): void`

Sets whether the [Creature] can be aggroed.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `allow` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetCanFly

{: .code-example }
`SetCanFly(enable): void`

Sets whether the Creature can fly. Usually mixed with Disable Gravity.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enable` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetDeathState

{: .code-example }
`SetDeathState(state): void`

Sets the [Creature]'s death state to `deathState`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `state` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetDefaultMovementType

{: .code-example }
`SetDefaultMovementType(type): void`

Sets the default movement type of the [Creature].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetDisableGravity

{: .code-example }
`SetDisableGravity(disable): void`

Makes the [Creature] able to fly if enabled.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `disable` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetDisableReputationGain

{: .code-example }
`SetDisableReputationGain(disable): void`

Sets whether the [Creature] gives reputation or not.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `disable` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetEquipmentSlots

{: .code-example }
`SetEquipmentSlots(main_hand, off_hand, ranged): void`

Equips given [Item]s to the [Unit]. Using 0 removes the equipped [Item]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `main_hand` | `uint32` |
| `off_hand` | `uint32` |
| `ranged` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetHomePosition

{: .code-example }
`SetHomePosition(x, y, z, o): void`

Sets the position the [Creature] returns to when evading from combat
  or respawning.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetHover

{: .code-example }
`SetHover(enable): void`

Sets whether the creature is hovering / levitating or not.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enable` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetInCombatWithZone

{: .code-example }
`SetInCombatWithZone(): void`

Sets the [Creature] as in combat with all [Player]s in the dungeon instance.

This is used by raid bosses to prevent Players from using out-of-combat
  actions once the encounter has begun.

**Returns:** 
`void`

___

{: .api-section }
### SetLootMode

{: .code-example }
`SetLootMode(lootMode): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `lootMode` | `uint16` |

**Returns:** 
`void`

___

{: .api-section }
### SetLootRecipient

{: .code-example }
`SetLootRecipient(unit, withGroup?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `unit` | [`TSUnit`](TSUnit) |  |
| `withGroup?` | `boolean` | whether to include group, true by default |

**Returns:** 
`any`

___

{: .api-section }
### SetMainhand

{: .code-example }
`SetMainhand(mainhand): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mainhand` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetNPCFlags

{: .code-example }
`SetNPCFlags(flags): void`

Sets the [Creature]'s NPC flags to `flags`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `flags` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetNoCallAssistance

{: .code-example }
`SetNoCallAssistance(val): void`

Sets whether the [Creature] can call nearby enemies for help in combat or not.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetNoSearchAssistance

{: .code-example }
`SetNoSearchAssistance(val): void`

Sets whether the [Creature] can search for assistance at low health or not.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetOffhand

{: .code-example }
`SetOffhand(offhand): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offhand` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetOutfit

{: .code-example }
`SetOutfit(outfit): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `outfit` | [`TSOutfit`](TSOutfit) |

**Returns:** 
`void`

___

{: .api-section }
### SetRanged

{: .code-example }
`SetRanged(ranged): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `ranged` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetReactState

{: .code-example }
`SetReactState(state): void`

Sets how a [Creature] responds to being attacked.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `state` | [`ReactStates`](../enums/ReactStates) |

**Returns:** 
`void`

___

{: .api-section }
### SetRespawnDelay

{: .code-example }
`SetRespawnDelay(delay): void`

Sets the time it takes for the [Creature] to respawn when killed.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `delay` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetWalk

{: .code-example }
`SetWalk(enable): void`

Sets whether the [Creature] is currently walking or running.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enable` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetWanderRadius

{: .code-example }
`SetWanderRadius(dist): void`

Sets the distance the [Creature] can wander from it's spawn point.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `dist` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### UpdateEntry

{: .code-example }
`UpdateEntry(entry, dataGuidLow): void`

Transform the [Creature] into another Creature.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `dataGuidLow` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### UpdateLevelDependantStats

{: .code-example }
`UpdateLevelDependantStats(): void`

Updates max hp, hp, and stats

**Returns:** 
`void`


## Inherited Members
[`AddAura`](./TSUnit#addaura) [`AddCollision`](./TSUnit#addcollision) [`AddNamedTimer`](./TSUnit#addnamedtimer) [`AddThreat`](./TSUnit#addthreat) [`AddTimer`](./TSUnit#addtimer) [`AddUnitState`](./TSUnit#addunitstate) [`Attack`](./TSUnit#attack) [`AttackStop`](./TSUnit#attackstop) [`CastCustomSpell`](./TSUnit#castcustomspell) [`CastSpell`](./TSUnit#castspell) [`CastSpellAoF`](./TSUnit#castspellaof) [`ClearEntityGroups`](./TSUnit#clearentitygroups) [`ClearInCombat`](./TSUnit#clearincombat) [`ClearThreatList`](./TSUnit#clearthreatlist) [`ClearUnitState`](./TSUnit#clearunitstate) [`CountPctFromCurHealth`](./TSUnit#countpctfromcurhealth) [`CountPctFromMaxHealth`](./TSUnit#countpctfrommaxhealth) [`DeMorph`](./TSUnit#demorph) [`DealDamage`](./TSUnit#dealdamage) [`DealHeal`](./TSUnit#dealheal) [`Dismount`](./TSUnit#dismount) [`DoDelayed`](./TSUnit#dodelayed) [`EmoteState`](./TSUnit#emotestate) [`GetAreaID`](./TSUnit#getareaid) [`GetArmor`](./TSUnit#getarmor) [`GetAura`](./TSUnit#getaura) [`GetAuraApplication`](./TSUnit#getauraapplication) [`GetAuraApplicationOfRankedSpell`](./TSUnit#getauraapplicationofrankedspell) [`GetAuraApplications`](./TSUnit#getauraapplications) [`GetAuraEffectsByType`](./TSUnit#getauraeffectsbytype) [`GetAuraOfRankedSpell`](./TSUnit#getauraofrankedspell) [`GetBaseSpellPower`](./TSUnit#getbasespellpower) [`GetBool`](./TSUnit#getbool) [`GetCharmGUID`](./TSUnit#getcharmguid) [`GetCharmerGUID`](./TSUnit#getcharmerguid) [`GetClass`](./TSUnit#getclass) [`GetClassAsString`](./TSUnit#getclassasstring) [`GetClassMask`](./TSUnit#getclassmask) [`GetCollision`](./TSUnit#getcollision) [`GetCollisions`](./TSUnit#getcollisions) [`GetControlled`](./TSUnit#getcontrolled) [`GetController`](./TSUnit#getcontroller) [`GetControllerGUID`](./TSUnit#getcontrollerguid) [`GetControllerGUIDS`](./TSUnit#getcontrollerguids) [`GetCoreByte`](./TSUnit#getcorebyte) [`GetCoreFloat`](./TSUnit#getcorefloat) [`GetCoreInt32`](./TSUnit#getcoreint32) [`GetCoreUInt16`](./TSUnit#getcoreuint16) [`GetCoreUInt32`](./TSUnit#getcoreuint32) [`GetCoreUInt64`](./TSUnit#getcoreuint64) [`GetCorpse`](./TSUnit#getcorpse) [`GetCreatorGUID`](./TSUnit#getcreatorguid) [`GetCreature`](./TSUnit#getcreature) [`GetCreatureType`](./TSUnit#getcreaturetype) [`GetCreaturesInRange`](./TSUnit#getcreaturesinrange) [`GetCritterGUID`](./TSUnit#getcritterguid) [`GetCurrentSpell`](./TSUnit#getcurrentspell) [`GetDisplayID`](./TSUnit#getdisplayid) [`GetDistance`](./TSUnit#getdistance) [`GetDistance2d`](./TSUnit#getdistance2d) [`GetDistanceToPoint`](./TSUnit#getdistancetopoint) [`GetDistanceToPoint2d`](./TSUnit#getdistancetopoint2d) [`GetEffectiveOwner`](./TSUnit#geteffectiveowner) [`GetEntityGroup`](./TSUnit#getentitygroup) [`GetEntry`](./TSUnit#getentry) [`GetFaction`](./TSUnit#getfaction) [`GetFactionTemplate`](./TSUnit#getfactiontemplate) [`GetFirstControlled`](./TSUnit#getfirstcontrolled) [`GetFloat`](./TSUnit#getfloat) [`GetGUID`](./TSUnit#getguid) [`GetGUIDLow`](./TSUnit#getguidlow) [`GetGUIDNumber`](./TSUnit#getguidnumber) [`GetGameObject`](./TSUnit#getgameobject) [`GetGameObjectsInRange`](./TSUnit#getgameobjectsinrange) [`GetGender`](./TSUnit#getgender) [`GetHealth`](./TSUnit#gethealth) [`GetHealthPct`](./TSUnit#gethealthpct) [`GetInstanceID`](./TSUnit#getinstanceid) [`GetInt`](./TSUnit#getint) [`GetJsonArray`](./TSUnit#getjsonarray) [`GetJsonObject`](./TSUnit#getjsonobject) [`GetLevel`](./TSUnit#getlevel) [`GetLiquidStatus`](./TSUnit#getliquidstatus) [`GetMap`](./TSUnit#getmap) [`GetMapID`](./TSUnit#getmapid) [`GetMaxHealth`](./TSUnit#getmaxhealth) [`GetMaxNegativeAuraModifier`](./TSUnit#getmaxnegativeauramodifier) [`GetMaxPositiveAuraModifier`](./TSUnit#getmaxpositiveauramodifier) [`GetMaxPower`](./TSUnit#getmaxpower) [`GetMountID`](./TSUnit#getmountid) [`GetMovementType`](./TSUnit#getmovementtype) [`GetName`](./TSUnit#getname) [`GetNativeDisplayID`](./TSUnit#getnativedisplayid) [`GetNearestCreature`](./TSUnit#getnearestcreature) [`GetNearestGameObject`](./TSUnit#getnearestgameobject) [`GetNearestPlayer`](./TSUnit#getnearestplayer) [`GetNumber`](./TSUnit#getnumber) [`GetO`](./TSUnit#geto) [`GetObject`](./TSUnit#getobject) [`GetOwner`](./TSUnit#getowner) [`GetOwnerGUID`](./TSUnit#getownerguid) [`GetPet`](./TSUnit#getpet) [`GetPetGUID`](./TSUnit#getpetguid) [`GetPhaseID`](./TSUnit#getphaseid) [`GetPhaseMask`](./TSUnit#getphasemask) [`GetPlayer`](./TSUnit#getplayer) [`GetPlayersInRange`](./TSUnit#getplayersinrange) [`GetPosition`](./TSUnit#getposition) [`GetPower`](./TSUnit#getpower) [`GetPowerPct`](./TSUnit#getpowerpct) [`GetPowerType`](./TSUnit#getpowertype) [`GetRace`](./TSUnit#getrace) [`GetRaceAsString`](./TSUnit#getraceasstring) [`GetRaceMask`](./TSUnit#getracemask) [`GetRawDouble`](./TSUnit#getrawdouble) [`GetRawFloat`](./TSUnit#getrawfloat) [`GetRawInt16`](./TSUnit#getrawint16) [`GetRawInt32`](./TSUnit#getrawint32) [`GetRawInt64`](./TSUnit#getrawint64) [`GetRawInt8`](./TSUnit#getrawint8) [`GetRawUInt16`](./TSUnit#getrawuint16) [`GetRawUInt32`](./TSUnit#getrawuint32) [`GetRawUInt64`](./TSUnit#getrawuint64) [`GetRawUInt8`](./TSUnit#getrawuint8) [`GetRelativeAngle`](./TSUnit#getrelativeangle) [`GetRelativePoint`](./TSUnit#getrelativepoint) [`GetRemainingCooldown`](./TSUnit#getremainingcooldown) [`GetResistance`](./TSUnit#getresistance) [`GetScale`](./TSUnit#getscale) [`GetSpeed`](./TSUnit#getspeed) [`GetStandState`](./TSUnit#getstandstate) [`GetStat`](./TSUnit#getstat) [`GetString`](./TSUnit#getstring) [`GetTotalAuraModifier`](./TSUnit#gettotalauramodifier) [`GetTotalAuraModifierByMiscMask`](./TSUnit#gettotalauramodifierbymiscmask) [`GetTotalAuraMultiplier`](./TSUnit#gettotalauramultiplier) [`GetTypeID`](./TSUnit#gettypeid) [`GetUInt`](./TSUnit#getuint) [`GetUInt64`](./TSUnit#getuint64) [`GetUnit`](./TSUnit#getunit) [`GetUnitsInRange`](./TSUnit#getunitsinrange) [`GetVehicle`](./TSUnit#getvehicle) [`GetVehicleKit`](./TSUnit#getvehiclekit) [`GetVictim`](./TSUnit#getvictim) [`GetX`](./TSUnit#getx) [`GetY`](./TSUnit#gety) [`GetZ`](./TSUnit#getz) [`GetZoneID`](./TSUnit#getzoneid) [`HasAura`](./TSUnit#hasaura) [`HasAuraType`](./TSUnit#hasauratype) [`HasBool`](./TSUnit#hasbool) [`HasCollision`](./TSUnit#hascollision) [`HasCooldown`](./TSUnit#hascooldown) [`HasFlag`](./TSUnit#hasflag) [`HasFloat`](./TSUnit#hasfloat) [`HasGUIDNumber`](./TSUnit#hasguidnumber) [`HasInt`](./TSUnit#hasint) [`HasJsonArray`](./TSUnit#hasjsonarray) [`HasJsonObject`](./TSUnit#hasjsonobject) [`HasNumber`](./TSUnit#hasnumber) [`HasObject`](./TSUnit#hasobject) [`HasString`](./TSUnit#hasstring) [`HasUInt`](./TSUnit#hasuint) [`HasUInt64`](./TSUnit#hasuint64) [`HasUnitState`](./TSUnit#hasunitstate) [`HealthAbovePct`](./TSUnit#healthabovepct) [`HealthBelowPct`](./TSUnit#healthbelowpct) [`InterruptSpell`](./TSUnit#interruptspell) [`IsAlive`](./TSUnit#isalive) [`IsArmorer`](./TSUnit#isarmorer) [`IsAttackingPlayer`](./TSUnit#isattackingplayer) [`IsAuctioneer`](./TSUnit#isauctioneer) [`IsBanker`](./TSUnit#isbanker) [`IsBattleMaster`](./TSUnit#isbattlemaster) [`IsBehind`](./TSUnit#isbehind) [`IsCasting`](./TSUnit#iscasting) [`IsCharmed`](./TSUnit#ischarmed) [`IsCorpse`](./TSUnit#iscorpse) [`IsCreature`](./TSUnit#iscreature) [`IsDead`](./TSUnit#isdead) [`IsDying`](./TSUnit#isdying) [`IsFriendlyTo`](./TSUnit#isfriendlyto) [`IsFriendlyToPlayers`](./TSUnit#isfriendlytoplayers) [`IsFullHealth`](./TSUnit#isfullhealth) [`IsGameObject`](./TSUnit#isgameobject) [`IsGossip`](./TSUnit#isgossip) [`IsGuildMaster`](./TSUnit#isguildmaster) [`IsHostileTo`](./TSUnit#ishostileto) [`IsHostileToPlayers`](./TSUnit#ishostiletoplayers) [`IsInAccessiblePlaceFor`](./TSUnit#isinaccessibleplacefor) [`IsInBack`](./TSUnit#isinback) [`IsInCombat`](./TSUnit#isincombat) [`IsInFront`](./TSUnit#isinfront) [`IsInMap`](./TSUnit#isinmap) [`IsInRange`](./TSUnit#isinrange) [`IsInRange2d`](./TSUnit#isinrange2d) [`IsInRange3d`](./TSUnit#isinrange3d) [`IsInWater`](./TSUnit#isinwater) [`IsInWorld`](./TSUnit#isinworld) [`IsInnkeeper`](./TSUnit#isinnkeeper) [`IsItem`](./TSUnit#isitem) [`IsMounted`](./TSUnit#ismounted) [`IsNeutralToAll`](./TSUnit#isneutraltoall) [`IsOnVehicle`](./TSUnit#isonvehicle) [`IsOutdoors`](./TSUnit#isoutdoors) [`IsPlayer`](./TSUnit#isplayer) [`IsPvPFlagged`](./TSUnit#ispvpflagged) [`IsQuestGiver`](./TSUnit#isquestgiver) [`IsRooted`](./TSUnit#isrooted) [`IsSchoolLocked`](./TSUnit#isschoollocked) [`IsServiceProvider`](./TSUnit#isserviceprovider) [`IsSpiritGuide`](./TSUnit#isspiritguide) [`IsSpiritHealer`](./TSUnit#isspirithealer) [`IsSpiritService`](./TSUnit#isspiritservice) [`IsStandState`](./TSUnit#isstandstate) [`IsStopped`](./TSUnit#isstopped) [`IsTabardDesigner`](./TSUnit#istabarddesigner) [`IsTaxi`](./TSUnit#istaxi) [`IsTrainer`](./TSUnit#istrainer) [`IsUnderWater`](./TSUnit#isunderwater) [`IsUnit`](./TSUnit#isunit) [`IsVendor`](./TSUnit#isvendor) [`IsWithinDist`](./TSUnit#iswithindist) [`IsWithinDist2d`](./TSUnit#iswithindist2d) [`IsWithinDist3d`](./TSUnit#iswithindist3d) [`IsWithinDistInMap`](./TSUnit#iswithindistinmap) [`IsWithinLoS`](./TSUnit#iswithinlos) [`Jump`](./TSUnit#jump) [`JumpTo`](./TSUnit#jumpto) [`Kill`](./TSUnit#kill) [`KnockbackFrom`](./TSUnit#knockbackfrom) [`LockSpellSchool`](./TSUnit#lockspellschool) [`ModifyCooldown`](./TSUnit#modifycooldown) [`ModifyPower`](./TSUnit#modifypower) [`Mount`](./TSUnit#mount) [`MoveChase`](./TSUnit#movechase) [`MoveClear`](./TSUnit#moveclear) [`MoveConfused`](./TSUnit#moveconfused) [`MoveExpire`](./TSUnit#moveexpire) [`MoveFleeing`](./TSUnit#movefleeing) [`MoveFollow`](./TSUnit#movefollow) [`MoveHome`](./TSUnit#movehome) [`MoveIdle`](./TSUnit#moveidle) [`MoveJump`](./TSUnit#movejump) [`MoveLand`](./TSUnit#moveland) [`MoveRandom`](./TSUnit#moverandom) [`MoveStop`](./TSUnit#movestop) [`MoveTakeoff`](./TSUnit#movetakeoff) [`MoveTo`](./TSUnit#moveto) [`NearTeleport`](./TSUnit#nearteleport) [`PerformEmote`](./TSUnit#performemote) [`PlayDirectSound`](./TSUnit#playdirectsound) [`PlayDistanceSound`](./TSUnit#playdistancesound) [`PlayMusic`](./TSUnit#playmusic) [`PowerSelectorHelper`](./TSUnit#powerselectorhelper) [`PrepareMove`](./TSUnit#preparemove) [`RemoveAllAuras`](./TSUnit#removeallauras) [`RemoveAllControlled`](./TSUnit#removeallcontrolled) [`RemoveAllMinionsByEntry`](./TSUnit#removeallminionsbyentry) [`RemoveAura`](./TSUnit#removeaura) [`RemoveCharmedBy`](./TSUnit#removecharmedby) [`RemoveEntityGroup`](./TSUnit#removeentitygroup) [`RemoveFlag`](./TSUnit#removeflag) [`RemoveTimer`](./TSUnit#removetimer) [`ResetAllCooldowns`](./TSUnit#resetallcooldowns) [`ResetCooldown`](./TSUnit#resetcooldown) [`ScaleThreat`](./TSUnit#scalethreat) [`SendChatMessageToPlayer`](./TSUnit#sendchatmessagetoplayer) [`SendPacket`](./TSUnit#sendpacket) [`SendUnitEmote`](./TSUnit#sendunitemote) [`SendUnitSay`](./TSUnit#sendunitsay) [`SendUnitWhisper`](./TSUnit#sendunitwhisper) [`SendUnitYell`](./TSUnit#sendunityell) [`SetArmor`](./TSUnit#setarmor) [`SetBool`](./TSUnit#setbool) [`SetCharm`](./TSUnit#setcharm) [`SetCharmedBy`](./TSUnit#setcharmedby) [`SetConfused`](./TSUnit#setconfused) [`SetCoreByte`](./TSUnit#setcorebyte) [`SetCoreFloat`](./TSUnit#setcorefloat) [`SetCoreInt16`](./TSUnit#setcoreint16) [`SetCoreInt32`](./TSUnit#setcoreint32) [`SetCoreUInt16`](./TSUnit#setcoreuint16) [`SetCoreUInt32`](./TSUnit#setcoreuint32) [`SetCoreUInt64`](./TSUnit#setcoreuint64) [`SetCreatorGUID`](./TSUnit#setcreatorguid) [`SetCritterGUID`](./TSUnit#setcritterguid) [`SetDisplayID`](./TSUnit#setdisplayid) [`SetFFA`](./TSUnit#setffa) [`SetFacing`](./TSUnit#setfacing) [`SetFacingToObject`](./TSUnit#setfacingtoobject) [`SetFaction`](./TSUnit#setfaction) [`SetFeared`](./TSUnit#setfeared) [`SetFlag`](./TSUnit#setflag) [`SetFloat`](./TSUnit#setfloat) [`SetGUIDNumber`](./TSUnit#setguidnumber) [`SetHealth`](./TSUnit#sethealth) [`SetInt`](./TSUnit#setint) [`SetJsonArray`](./TSUnit#setjsonarray) [`SetJsonObject`](./TSUnit#setjsonobject) [`SetLevel`](./TSUnit#setlevel) [`SetMaxHealth`](./TSUnit#setmaxhealth) [`SetMaxPower`](./TSUnit#setmaxpower) [`SetName`](./TSUnit#setname) [`SetNativeDisplayID`](./TSUnit#setnativedisplayid) [`SetNumber`](./TSUnit#setnumber) [`SetObject`](./TSUnit#setobject) [`SetOwnerGUID`](./TSUnit#setownerguid) [`SetPetGUID`](./TSUnit#setpetguid) [`SetPhaseMask`](./TSUnit#setphasemask) [`SetPower`](./TSUnit#setpower) [`SetPowerType`](./TSUnit#setpowertype) [`SetPvP`](./TSUnit#setpvp) [`SetRawDouble`](./TSUnit#setrawdouble) [`SetRawFloat`](./TSUnit#setrawfloat) [`SetRawInt16`](./TSUnit#setrawint16) [`SetRawInt32`](./TSUnit#setrawint32) [`SetRawInt64`](./TSUnit#setrawint64) [`SetRawInt8`](./TSUnit#setrawint8) [`SetRawUInt16`](./TSUnit#setrawuint16) [`SetRawUInt32`](./TSUnit#setrawuint32) [`SetRawUInt64`](./TSUnit#setrawuint64) [`SetRawUInt8`](./TSUnit#setrawuint8) [`SetResistance`](./TSUnit#setresistance) [`SetRooted`](./TSUnit#setrooted) [`SetSanctuary`](./TSUnit#setsanctuary) [`SetScale`](./TSUnit#setscale) [`SetSheath`](./TSUnit#setsheath) [`SetSpeed`](./TSUnit#setspeed) [`SetStandState`](./TSUnit#setstandstate) [`SetString`](./TSUnit#setstring) [`SetUInt`](./TSUnit#setuint) [`SetUInt64`](./TSUnit#setuint64) [`SetWaterWalk`](./TSUnit#setwaterwalk) [`SpawnCreature`](./TSUnit#spawncreature) [`StartCooldown`](./TSUnit#startcooldown) [`StopSpellCast`](./TSUnit#stopspellcast) [`SummonGameObject`](./TSUnit#summongameobject) [`ToCorpse`](./TSUnit#tocorpse) [`ToCreature`](./TSUnit#tocreature) [`ToGameObject`](./TSUnit#togameobject) [`ToItem`](./TSUnit#toitem) [`ToPlayer`](./TSUnit#toplayer) [`ToUnit`](./TSUnit#tounit) [`UpdateCoreUInt32`](./TSUnit#updatecoreuint32)
