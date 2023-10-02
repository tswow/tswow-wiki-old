---
title: TSUnit
---


## Hierarchy

- [`TSWorldObject`](TSWorldObject)

  ↳ **`TSUnit`**

  ↳↳ [`TSPlayer`](TSPlayer)

  ↳↳ [`TSCreature`](TSCreature)

## Methods

{: .api-section }
### AddAura

{: .code-example }
`AddAura(spell, target): TSAura`

Adds the [Aura] of the given spell entry on the given target from the [Unit].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spell` | `uint32` | - |
| `target` | [`TSUnit`](TSUnit) | : aura will be applied on the target |

**Returns:** 
[`TSAura`](TSAura)

aura

___

{: .api-section }
### AddThreat

{: .code-example }
`AddThreat(victim, threat, spell?, schoolMask?, ignoreModifiers?, ignoreRedirects?, raw?): void`

Adds threat to the [Unit] from the victim.

    enum SpellSchoolMask
    {
        NONE    = 0,
        NORMAL  = 1,
        HOLY    = 2,
        FIRE    = 4,
        NATURE  = 8,
        FROST   = 16,
        SHADOW  = 32,
        ARCANE  = 64,
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `victim` | [`TSUnit`](TSUnit) | : [Unit] that caused the threat |
| `threat` | `float` | - |
| `spell?` | `uint32` | - |
| `schoolMask?` | `uint32` \| [`SpellSchoolMask`](../enums/SpellSchoolMask) | = 0 : [SpellSchoolMask] of the threat causer |
| `ignoreModifiers?` | `boolean` | - |
| `ignoreRedirects?` | `boolean` | - |
| `raw?` | `boolean` | - |

**Returns:** 
`void`

___

{: .api-section }
### AddUnitState

{: .code-example }
`AddUnitState(state): void`

Adds the given unit state for the [Unit].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `state` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### Attack

{: .code-example }
`Attack(who, meleeAttack): boolean`

The [Unit] tries to attack a given target

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `who` | [`TSUnit`](TSUnit) | : [Unit] to attack |
| `meleeAttack` | `boolean` | - |

**Returns:** 
`boolean`

didAttack : if the [Unit] did not attack

___

{: .api-section }
### AttackStop

{: .code-example }
`AttackStop(): boolean`

The [Unit] stops attacking its target

**Returns:** 
`boolean`

bool isAttacking : if the [Unit] wasn't attacking already

___

{: .api-section }
### ClearInCombat

{: .code-example }
`ClearInCombat(): void`

Clears the [Unit]'s combat

**Returns:** 
`void`

___

{: .api-section }
### ClearThreatList

{: .code-example }
`ClearThreatList(apply, x): void`

Clears the [Unit]'s threat list.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |
| `x` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### ClearUnitState

{: .code-example }
`ClearUnitState(state): void`

Removes the given unit state from the [Unit].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `state` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### CountPctFromCurHealth

{: .code-example }
`CountPctFromCurHealth(health): TSNumber<int32>`

Returns calculated percentage from Health

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `health` | `int32` |

**Returns:** 
`TSNumber`<`int32`\>

int32 percentage

___

{: .api-section }
### CountPctFromMaxHealth

{: .code-example }
`CountPctFromMaxHealth(health): TSNumber<int32>`

Returns calculated percentage from Max Health

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `health` | `int32` |

**Returns:** 
`TSNumber`<`int32`\>

int32 percentage

___

{: .api-section }
### DeMorph

{: .code-example }
`DeMorph(): void`

Unmorphs the [Unit] setting it's display ID back to the native display ID.

**Returns:** 
`void`

___

{: .api-section }
### DealDamage

{: .code-example }
`DealDamage(target, damage, durabilityloss, school, spell?): void`

Makes the [Unit] damage the target [Unit]

    enum SpellSchools
    {
        SPELL_SCHOOL_NORMAL  = 0,
        SPELL_SCHOOL_HOLY    = 1,
        SPELL_SCHOOL_FIRE    = 2,
        SPELL_SCHOOL_NATURE  = 3,
        SPELL_SCHOOL_FROST   = 4,
        SPELL_SCHOOL_SHADOW  = 5,
        SPELL_SCHOOL_ARCANE  = 6,
        MAX_SPELL_SCHOOL     = 7
     }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSUnit`](TSUnit) | : [Unit] to damage |
| `damage` | `uint32` | - |
| `durabilityloss` | `boolean` | - |
| `school` | [`SpellSchools`](../enums/SpellSchools) | = MAX_SPELL_SCHOOL : school the damage is done in or MAX_SPELL_SCHOOL for direct damage |
| `spell?` | `uint32` | - |

**Returns:** 
`void`

___

{: .api-section }
### DealHeal

{: .code-example }
`DealHeal(target, spell, amount, critical): void`

Makes the [Unit] heal the target [Unit] with given spell

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSUnit`](TSUnit) | : [Unit] to heal |
| `spell` | `uint32` | - |
| `amount` | `uint32` | - |
| `critical` | `boolean` | - |

**Returns:** 
`void`

___

{: .api-section }
### Dismount

{: .code-example }
`Dismount(): void`

Dismounts the [Unit].

**Returns:** 
`void`

___

{: .api-section }
### EmoteState

{: .code-example }
`EmoteState(emoteId): void`

Makes the [Unit] perform the given emote continuously.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `emoteId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### GetArmor

{: .code-example }
`GetArmor(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetAura

{: .code-example }
`GetAura(spellID, casterGuid?, itemCasterGuid?, reqEffMask?): TSAura`

Returns the [Aura] of the given spell entry on the [Unit] or nil.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spellID` | `uint32` | - |
| `casterGuid?` | [`TSGUID`](TSGUID) | - |
| `itemCasterGuid?` | [`TSGUID`](TSGUID) | - |
| `reqEffMask?` | `uint8` | = 0 (any): bitmask of the effects that must be active for the matching aura |

**Returns:** 
[`TSAura`](TSAura)

aura : aura object or nil

___

{: .api-section }
### GetAuraApplication

{: .code-example }
`GetAuraApplication(spellID, casterGuid?, itemCasterGuid?, reqEffMask?, except?): TSAuraApplication`

Returns the [AuraApplication] of the given spell entry on the [Unit] or nil.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spellID` | `uint32` | - |
| `casterGuid?` | [`TSGUID`](TSGUID) | - |
| `itemCasterGuid?` | [`TSGUID`](TSGUID) | - |
| `reqEffMask?` | `uint8` | = 0 (any): bitmask of the effects that must be active for the matching aura |
| `except?` | [`TSAuraApplication`](TSAuraApplication) | = null: application to exclude from search result |

**Returns:** 
[`TSAuraApplication`](TSAuraApplication)

aura : aura object or nil

___

{: .api-section }
### GetAuraApplicationOfRankedSpell

{: .code-example }
`GetAuraApplicationOfRankedSpell(spellID, casterGuid?, itemCasterGuid?, reqEffMask?, except?): TSAuraApplication`

Returns the [AuraApplication] of the given spell entry on the [Unit] or nil.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spellID` | `uint32` | - |
| `casterGuid?` | [`TSGUID`](TSGUID) | - |
| `itemCasterGuid?` | [`TSGUID`](TSGUID) | - |
| `reqEffMask?` | `uint8` | = 0 (any): bitmask of the effects that must be active for the matching aura |
| `except?` | [`TSAuraApplication`](TSAuraApplication) | = null: application to exclude from search result |

**Returns:** 
[`TSAuraApplication`](TSAuraApplication)

aura : aura object or nil

___

{: .api-section }
### GetAuraApplications

{: .code-example }
`GetAuraApplications(): TSArray<TSAuraApplication>`

Returns all [AuraApplication]s attached to this [Unit].

**Returns:** 
`TSArray`<[`TSAuraApplication`](TSAuraApplication)\>

___

{: .api-section }
### GetAuraEffectsByType

{: .code-example }
`GetAuraEffectsByType(type): TSArray<TSAuraEffect>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`AuraType`](../enums/AuraType) |

**Returns:** 
`TSArray`<[`TSAuraEffect`](TSAuraEffect)\>

___

{: .api-section }
### GetAuraOfRankedSpell

{: .code-example }
`GetAuraOfRankedSpell(spellID, casterGuid?, itemCasterGuid?, reqEffMask?): TSAura`

Returns the [Aura] of the given spell entry on the [Unit] or nil.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spellID` | `uint32` | - |
| `casterGuid?` | [`TSGUID`](TSGUID) | - |
| `itemCasterGuid?` | [`TSGUID`](TSGUID) | - |
| `reqEffMask?` | `uint8` | = 0 (any): bitmask of the effects that must be active for the matching aura |

**Returns:** 
[`TSAura`](TSAura)

aura : aura object or nil

___

{: .api-section }
### GetBaseSpellPower

{: .code-example }
`GetBaseSpellPower(spellschool): TSNumber<uint32>`

Returns the [Unit]'s base spell power

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellschool` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 spellPower

___

{: .api-section }
### GetCharmGUID

{: .code-example }
`GetCharmGUID(): TSGUID`

Returns the GUID of the [Unit]'s charmed entity.

**Returns:** 
[`TSGUID`](TSGUID)

uint64 charmedGUID

___

{: .api-section }
### GetCharmerGUID

{: .code-example }
`GetCharmerGUID(): TSGUID`

Returns the [Unit]'s charmer's GUID.

**Returns:** 
[`TSGUID`](TSGUID)

uint64 charmerGUID

___

{: .api-section }
### GetClass

{: .code-example }
`GetClass(): TSNumber<uint32>`

Returns the [Unit]'s class ID.

**Returns:** 
`TSNumber`<`uint32`\>

class

___

{: .api-section }
### GetClassAsString

{: .code-example }
`GetClassAsString(locale): string`

Returns the [Unit]'s class' name in given or default locale or nil.

    enum LocaleConstant
    {
        LOCALE_enUS = 0,
        LOCALE_koKR = 1,
        LOCALE_frFR = 2,
        LOCALE_deDE = 3,
        LOCALE_zhCN = 4,
        LOCALE_zhTW = 5,
        LOCALE_esES = 6,
        LOCALE_esMX = 7,
        LOCALE_ruRU = 8
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `locale` | [`LocaleConstant`](../enums/LocaleConstant) | = DEFAULT_LOCALE |

**Returns:** 
`string`

string className : class name or nil

___

{: .api-section }
### GetClassMask

{: .code-example }
`GetClassMask(): TSNumber<uint32>`

Returns the class mask

**Returns:** 
`TSNumber`<`uint32`\>

uint32 classmask

___

{: .api-section }
### GetControlled

{: .code-example }
`GetControlled(): TSArray<TSUnit>`

**Returns:** 
`TSArray`<[`TSUnit`](TSUnit)\>

___

{: .api-section }
### GetController

{: .code-example }
`GetController(): TSUnit`

Returns the [Unit]'s charmer or owner.

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### GetControllerGUID

{: .code-example }
`GetControllerGUID(): TSGUID`

Returns the GUID of the [Unit]'s charmer or owner.

**Returns:** 
[`TSGUID`](TSGUID)

uint64 controllerGUID

___

{: .api-section }
### GetControllerGUIDS

{: .code-example }
`GetControllerGUIDS(): TSNumber<uint64>`

Returns the GUID of the [Unit]'s charmer or owner or its own GUID.

**Returns:** 
`TSNumber`<`uint64`\>

uint64 controllerGUID

___

{: .api-section }
### GetCreatorGUID

{: .code-example }
`GetCreatorGUID(): TSGUID`

Returns the [Unit]'s creator's GUID.

**Returns:** 
[`TSGUID`](TSGUID)

uint64 creatorGUID

___

{: .api-section }
### GetCreatureType

{: .code-example }
`GetCreatureType(): CreatureType`

Returns the [Unit]'s creature type ID (enumerated in CreatureType.dbc).

    enum CreatureType
    {
        CREATURE_TYPE_BEAST            = 1
        CREATURE_TYPE_DRAGONKIN        = 2
        CREATURE_TYPE_DEMON            = 3
        CREATURE_TYPE_ELEMENTAL        = 4
        CREATURE_TYPE_GIANT            = 5
        CREATURE_TYPE_UNDEAD           = 6
        CREATURE_TYPE_HUMANOID         = 7
        CREATURE_TYPE_CRITTER          = 8
        CREATURE_TYPE_MECHANICAL       = 9
        CREATURE_TYPE_NOT_SPECIFIED    = 10
        CREATURE_TYPE_TOTEM            = 11
        CREATURE_TYPE_NON_COMBAT_PET   = 12
        CREATURE_TYPE_GAS_CLOUD        = 13
    }

**Returns:** 
[`CreatureType`](../enums/CreatureType)

creatureType

___

{: .api-section }
### GetCritterGUID

{: .code-example }
`GetCritterGUID(): TSNumber<uint64>`

Returns the Critter Guid

**Returns:** 
`TSNumber`<`uint64`\>

uint64 critterGuid

___

{: .api-section }
### GetCurrentSpell

{: .code-example }
`GetCurrentSpell(type): TSSpell`

Returns the currently casted [Spell] of given type or nil.

    enum CurrentSpellTypes
    {
        CURRENT_MELEE_SPELL             = 0,
        CURRENT_GENERIC_SPELL           = 1,
        CURRENT_CHANNELED_SPELL         = 2,
        CURRENT_AUTOREPEAT_SPELL        = 3
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`CurrentSpellTypes`](../enums/CurrentSpellTypes) |

**Returns:** 
[`TSSpell`](TSSpell)

castedSpell

___

{: .api-section }
### GetDisplayID

{: .code-example }
`GetDisplayID(): TSNumber<uint32>`

Returns the [Unit]'s current display ID.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 displayId

___

{: .api-section }
### GetFaction

{: .code-example }
`GetFaction(): TSNumber<uint32>`

Returns the [Unit]'s faction ID.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 faction

___

{: .api-section }
### GetFirstControlled

{: .code-example }
`GetFirstControlled(): TSUnit`

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### GetGender

{: .code-example }
`GetGender(): TSNumber<uint8>`

Returns the [Unit]'s gender.

**Returns:** 
`TSNumber`<`uint8`\>

uint8 gender : 0 for male, 1 for female and 2 for none

___

{: .api-section }
### GetHealth

{: .code-example }
`GetHealth(): TSNumber<uint32>`

Returns the [Unit]'s health amount.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 healthAmount

___

{: .api-section }
### GetHealthPct

{: .code-example }
`GetHealthPct(): TSNumber<float>`

Returns the [Unit]'s health percent.

**Returns:** 
`TSNumber`<`float`\>

float healthPct

___

{: .api-section }
### GetLevel

{: .code-example }
`GetLevel(): TSNumber<uint8>`

Returns the [Unit]'s level.

**Returns:** 
`TSNumber`<`uint8`\>

uint8 level

___

{: .api-section }
### GetMaxHealth

{: .code-example }
`GetMaxHealth(): TSNumber<uint32>`

Returns the [Unit]'s max health.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 maxHealth

___

{: .api-section }
### GetMaxNegativeAuraModifier

{: .code-example }
`GetMaxNegativeAuraModifier(auraType): int32`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `auraType` | [`AuraType`](../enums/AuraType) |

**Returns:** 
`int32`

___

{: .api-section }
### GetMaxPositiveAuraModifier

{: .code-example }
`GetMaxPositiveAuraModifier(auraType): int32`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `auraType` | [`AuraType`](../enums/AuraType) |

**Returns:** 
`int32`

___

{: .api-section }
### GetMaxPower

{: .code-example }
`GetMaxPower(type): TSNumber<uint32>`

Returns the [Unit]'s max power amount for given power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`Powers`](../enums/Powers) \| ``-1`` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 maxPowerAmount

___

{: .api-section }
### GetMountID

{: .code-example }
`GetMountID(): TSNumber<uint32>`

Returns the [Unit]'s mount's modelID.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 mountId : displayId of the mount

___

{: .api-section }
### GetMovementType

{: .code-example }
`GetMovementType(): MovementGeneratorType`

Returns the current movement type for this [Unit].

enum MovementGeneratorType
{
    IDLE_MOTION_TYPE                = 0,
    RANDOM_MOTION_TYPE              = 1,
    WAYPOINT_MOTION_TYPE            = 2,
    MAX_DB_MOTION_TYPE              = 3,
    ANIMAL_RANDOM_MOTION_TYPE       = 3, // TC

    CONFUSED_MOTION_TYPE            = 4,
    CHASE_MOTION_TYPE               = 5,
    HOME_MOTION_TYPE                = 6,
    FLIGHT_MOTION_TYPE              = 7,
    POINT_MOTION_TYPE               = 8,
    FLEEING_MOTION_TYPE             = 9,
    DISTRACT_MOTION_TYPE            = 10,
    ASSISTANCE_MOTION_TYPE          = 11,
    ASSISTANCE_DISTRACT_MOTION_TYPE = 12,
    TIMED_FLEEING_MOTION_TYPE       = 13,
    FOLLOW_MOTION_TYPE              = 14,
    EFFECT_MOTION_TYPE              = 15, // mangos
    ROTATE_MOTION_TYPE              = 15, // TC
    EFFECT_MOTION_TYPE              = 16, // TC
    NULL_MOTION_TYPE                = 17, // TC
}

**Returns:** 
[`MovementGeneratorType`](../enums/MovementGeneratorType)

movementType

___

{: .api-section }
### GetNativeDisplayID

{: .code-example }
`GetNativeDisplayID(): TSNumber<uint32>`

Returns the [Unit]'s native/original display ID.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 displayId

___

{: .api-section }
### GetOwner

{: .code-example }
`GetOwner(): TSUnit`

Returns the [Unit]'s owner.

**Returns:** 
[`TSUnit`](TSUnit)

owner

___

{: .api-section }
### GetOwnerGUID

{: .code-example }
`GetOwnerGUID(): TSGUID`

Returns the [Unit]'s owner's GUID.

**Returns:** 
[`TSGUID`](TSGUID)

uint64 ownerGUID

___

{: .api-section }
### GetPet

{: .code-example }
`GetPet(index?): TSCreature`

Returns the [Unit]'s pet.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index?` | `number` |

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### GetPetGUID

{: .code-example }
`GetPetGUID(index?): TSGUID`

Returns the GUID of the [Unit]'s pet.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index?` | `number` |

**Returns:** 
[`TSGUID`](TSGUID)

uint64 petGUID

___

{: .api-section }
### GetPower

{: .code-example }
`GetPower(type): TSNumber<uint32>`

Returns the [Unit]'s power amount for given power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`Powers`](../enums/Powers) \| ``-1`` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 powerAmount

___

{: .api-section }
### GetPowerPct

{: .code-example }
`GetPowerPct(type): TSNumber<float>`

Returns the [Unit]'s power percent for given power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`Powers`](../enums/Powers) \| ``-1`` |

**Returns:** 
`TSNumber`<`float`\>

float powerPct

___

{: .api-section }
### GetPowerType

{: .code-example }
`GetPowerType(): Powers`

Returns the [Unit]'s current power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

**Returns:** 
[`Powers`](../enums/Powers)

powerType

___

{: .api-section }
### GetRace

{: .code-example }
`GetRace(): TSNumber<uint32>`

Returns the [Unit]'s race ID.

**Returns:** 
`TSNumber`<`uint32`\>

race

___

{: .api-section }
### GetRaceAsString

{: .code-example }
`GetRaceAsString(locale): string`

Returns the [Unit]'s race's name in given or default locale or nil.

    enum LocaleConstant
    {
        LOCALE_enUS = 0,
        LOCALE_koKR = 1,
        LOCALE_frFR = 2,
        LOCALE_deDE = 3,
        LOCALE_zhCN = 4,
        LOCALE_zhTW = 5,
        LOCALE_esES = 6,
        LOCALE_esMX = 7,
        LOCALE_ruRU = 8
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `locale` | [`LocaleConstant`](../enums/LocaleConstant) | = DEFAULT_LOCALE : locale to return the race name in |

**Returns:** 
`string`

string raceName : race name or nil

___

{: .api-section }
### GetRaceMask

{: .code-example }
`GetRaceMask(): TSNumber<uint32>`

Returns the race mask

**Returns:** 
`TSNumber`<`uint32`\>

uint32 racemask

___

{: .api-section }
### GetRelativeAngle

{: .code-example }
`GetRelativeAngle(x, y): float`

Return angle towards point given from Unit.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |

**Returns:** 
`float`

___

{: .api-section }
### GetRemainingCooldown

{: .code-example }
`GetRemainingCooldown(spell): uint32`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |

**Returns:** 
`uint32`

remaining cooldown in milliseconds

___

{: .api-section }
### GetResistance

{: .code-example }
`GetResistance(school): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `school` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetSpeed

{: .code-example }
`GetSpeed(type): TSNumber<float>`

Returns the [Unit]'s speed of given [UnitMoveType].

    enum UnitMoveType
    {
        MOVE_WALK           = 0,
        MOVE_RUN            = 1,
        MOVE_RUN_BACK       = 2,
        MOVE_SWIM           = 3,
        MOVE_SWIM_BACK      = 4,
        MOVE_TURN_RATE      = 5,
        MOVE_FLIGHT         = 6,
        MOVE_FLIGHT_BACK    = 7,
        MOVE_PITCH_RATE     = 8
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`UnitMoveType`](../enums/UnitMoveType) |

**Returns:** 
`TSNumber`<`float`\>

float speed

___

{: .api-section }
### GetStandState

{: .code-example }
`GetStandState(): UnitStandState`

Returns the [Unit]'s current stand state.

**Returns:** 
[`UnitStandState`](../enums/UnitStandState)

uint8 standState

___

{: .api-section }
### GetStat

{: .code-example }
`GetStat(stat): TSNumber<float>`

Returns [Unit]'s specified stat

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `stat` | `uint32` |

**Returns:** 
`TSNumber`<`float`\>

float stat

___

{: .api-section }
### GetTotalAuraModifier

{: .code-example }
`GetTotalAuraModifier(auraType): int32`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `auraType` | [`AuraType`](../enums/AuraType) |

**Returns:** 
`int32`

___

{: .api-section }
### GetTotalAuraModifierByMiscMask

{: .code-example }
`GetTotalAuraModifierByMiscMask(auraType, miscMask): int32`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `auraType` | [`AuraType`](../enums/AuraType) |
| `miscMask` | `uint32` |

**Returns:** 
`int32`

___

{: .api-section }
### GetTotalAuraMultiplier

{: .code-example }
`GetTotalAuraMultiplier(auraType): float`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `auraType` | [`AuraType`](../enums/AuraType) |

**Returns:** 
`float`

___

{: .api-section }
### GetVehicle

{: .code-example }
`GetVehicle(): TSVehicle`

**Returns:** 
[`TSVehicle`](TSVehicle)

___

{: .api-section }
### GetVehicleKit

{: .code-example }
`GetVehicleKit(): TSVehicle`

Returns [Unit]'s [Vehicle] methods

**Returns:** 
[`TSVehicle`](TSVehicle)

vehicle

___

{: .api-section }
### GetVictim

{: .code-example }
`GetVictim(): TSUnit`

Returns the [Unit]'s current victim target or nil.

**Returns:** 
[`TSUnit`](TSUnit)

victim

___

{: .api-section }
### HasAura

{: .code-example }
`HasAura(spell, casterGuid?, itemCasterGuid?, reqEffMask?): boolean`

Returns true if the [Unit] has an aura from the given spell entry.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |
| `casterGuid?` | [`TSGUID`](TSGUID) |
| `itemCasterGuid?` | [`TSGUID`](TSGUID) |
| `reqEffMask?` | `uint8` |

**Returns:** 
`boolean`

bool hasAura

___

{: .api-section }
### HasAuraType

{: .code-example }
`HasAuraType(type): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`AuraType`](../enums/AuraType) |

**Returns:** 
`boolean`

___

{: .api-section }
### HasCooldown

{: .code-example }
`HasCooldown(spell, itemId?, ignoreCategory?): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spell` | `uint32` |  |
| `itemId?` | `uint32` | = 0 (no item) |
| `ignoreCategory?` | `boolean` | = true |

**Returns:** 
`boolean`

___

{: .api-section }
### HasUnitState

{: .code-example }
`HasUnitState(state): boolean`

Returns true if the [Unit] has the given unit state.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `state` | `uint32` | : an unit state |

**Returns:** 
`boolean`

bool hasState

___

{: .api-section }
### HealthAbovePct

{: .code-example }
`HealthAbovePct(pct): boolean`

Returns true if the [Unit]'s health is above the given percentage.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `pct` | `int32` |

**Returns:** 
`boolean`

bool isAbove

___

{: .api-section }
### HealthBelowPct

{: .code-example }
`HealthBelowPct(pct): boolean`

Returns true if the [Unit]'s health is below the given percentage.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `pct` | `int32` |

**Returns:** 
`boolean`

bool isBelow

___

{: .api-section }
### InterruptSpell

{: .code-example }
`InterruptSpell(spellType, delayed): void`

Interrupts [Unit]'s spell state, casting, etc.

if spell is not interruptible, it will return

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellType` | `int` |
| `delayed` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### IsAlive

{: .code-example }
`IsAlive(): boolean`

Returns true if the [Unit] is alive.

**Returns:** 
`boolean`

bool isAlive

___

{: .api-section }
### IsArmorer

{: .code-example }
`IsArmorer(): boolean`

Returns true if the [Unit] is an armorer and can repair equipment.

**Returns:** 
`boolean`

bool isArmorer

___

{: .api-section }
### IsAttackingPlayer

{: .code-example }
`IsAttackingPlayer(): boolean`

Returns true if the [Unit] is attacking a player.

**Returns:** 
`boolean`

bool isAttackingPlayer

___

{: .api-section }
### IsAuctioneer

{: .code-example }
`IsAuctioneer(): boolean`

Returns true if the [Unit] an auctioneer.

**Returns:** 
`boolean`

bool isAuctioneer

___

{: .api-section }
### IsBanker

{: .code-example }
`IsBanker(): boolean`

Returns true if the [Unit] is a banker.

**Returns:** 
`boolean`

bool isBanker

___

{: .api-section }
### IsBattleMaster

{: .code-example }
`IsBattleMaster(): boolean`

Returns true if the [Unit] is a battle master.

**Returns:** 
`boolean`

bool isBattleMaster

___

{: .api-section }
### IsCasting

{: .code-example }
`IsCasting(): boolean`

Returns true if the [Unit] is casting a spell

**Returns:** 
`boolean`

bool isCasting

___

{: .api-section }
### IsCharmed

{: .code-example }
`IsCharmed(): boolean`

Returns true if the [Unit] is a charmed.

**Returns:** 
`boolean`

bool isCharmed

___

{: .api-section }
### IsDead

{: .code-example }
`IsDead(): boolean`

Returns true if the [Unit] is dead.

**Returns:** 
`boolean`

bool isDead

___

{: .api-section }
### IsDying

{: .code-example }
`IsDying(): boolean`

Returns true if the [Unit] is dying.

**Returns:** 
`boolean`

bool isDying

___

{: .api-section }
### IsFullHealth

{: .code-example }
`IsFullHealth(): boolean`

Returns true if the [Unit] has full health.

**Returns:** 
`boolean`

bool hasFullHealth

___

{: .api-section }
### IsGossip

{: .code-example }
`IsGossip(): boolean`

Returns true if the [Unit] is able to show a gossip window.

**Returns:** 
`boolean`

bool hasGossip

___

{: .api-section }
### IsGuildMaster

{: .code-example }
`IsGuildMaster(): boolean`

Returns true if the [Unit] a guild master.

**Returns:** 
`boolean`

bool isGuildMaster

___

{: .api-section }
### IsInAccessiblePlaceFor

{: .code-example }
`IsInAccessiblePlaceFor(creature): boolean`

Returns true if the [Unit] is in an accessible place for the given [Creature].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `creature` | [`TSCreature`](TSCreature) |

**Returns:** 
`boolean`

bool isAccessible

___

{: .api-section }
### IsInCombat

{: .code-example }
`IsInCombat(): boolean`

Returns true if the [Unit] is in combat.

**Returns:** 
`boolean`

bool inCombat

___

{: .api-section }
### IsInWater

{: .code-example }
`IsInWater(): boolean`

Returns true if the [Unit] is in water.

**Returns:** 
`boolean`

bool inWater

___

{: .api-section }
### IsInnkeeper

{: .code-example }
`IsInnkeeper(): boolean`

Returns true if the [Unit] an innkeeper.

**Returns:** 
`boolean`

bool isInnkeeper

___

{: .api-section }
### IsMounted

{: .code-example }
`IsMounted(): boolean`

Returns true if the [Unit] is mounted.

**Returns:** 
`boolean`

bool isMounted

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
### IsOnVehicle

{: .code-example }
`IsOnVehicle(): boolean`

Returns true if the [Unit] is on a [Vehicle].

**Returns:** 
`boolean`

bool isOnVehicle

___

{: .api-section }
### IsPvPFlagged

{: .code-example }
`IsPvPFlagged(): boolean`

Returns true if the [Unit] flagged for PvP.

**Returns:** 
`boolean`

bool isPvP

___

{: .api-section }
### IsQuestGiver

{: .code-example }
`IsQuestGiver(): boolean`

Returns true if the [Unit] is a quest giver.

**Returns:** 
`boolean`

bool questGiver

___

{: .api-section }
### IsRooted

{: .code-example }
`IsRooted(): boolean`

Returns true if the [Unit] is rooted.

**Returns:** 
`boolean`

bool isRooted

___

{: .api-section }
### IsSchoolLocked

{: .code-example }
`IsSchoolLocked(schoolMask): boolean`

Checks if any of the supplied spell schools are locked.

**`warn`** - Accepts [SpellSchoolMask], NOT [SpellSchool]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `schoolMask` | [`SpellSchoolMask`](../enums/SpellSchoolMask) | [SpellSchoolMask] of affected schools |

**Returns:** 
`boolean`

true if any of the supplied spell schools are locked, otherwise not

___

{: .api-section }
### IsServiceProvider

{: .code-example }
`IsServiceProvider(): boolean`

Returns true if the [Unit] provides services like vendor, training and auction.

**Returns:** 
`boolean`

bool isTabardDesigner

___

{: .api-section }
### IsSpiritGuide

{: .code-example }
`IsSpiritGuide(): boolean`

Returns true if the [Unit] is a spirit guide.

**Returns:** 
`boolean`

bool isSpiritGuide

___

{: .api-section }
### IsSpiritHealer

{: .code-example }
`IsSpiritHealer(): boolean`

Returns true if the [Unit] is a spirit healer.

**Returns:** 
`boolean`

bool isSpiritHealer

___

{: .api-section }
### IsSpiritService

{: .code-example }
`IsSpiritService(): boolean`

Returns true if the [Unit] is a spirit guide or spirit healer.

**Returns:** 
`boolean`

bool isSpiritService

___

{: .api-section }
### IsStandState

{: .code-example }
`IsStandState(): boolean`

Returns true if the [Unit] is standing.

**Returns:** 
`boolean`

bool isStanding

___

{: .api-section }
### IsStopped

{: .code-example }
`IsStopped(): boolean`

Returns true if the [Unit] is not moving.

**Returns:** 
`boolean`

bool notMoving

___

{: .api-section }
### IsTabardDesigner

{: .code-example }
`IsTabardDesigner(): boolean`

Returns true if the [Unit] is a tabard designer.

**Returns:** 
`boolean`

bool isTabardDesigner

___

{: .api-section }
### IsTaxi

{: .code-example }
`IsTaxi(): boolean`

Returns true if the [Unit] is a taxi master.

**Returns:** 
`boolean`

bool isTaxi

___

{: .api-section }
### IsTrainer

{: .code-example }
`IsTrainer(): boolean`

Returns true if the [Unit] a trainer.

**Returns:** 
`boolean`

bool isTrainer

___

{: .api-section }
### IsUnderWater

{: .code-example }
`IsUnderWater(): boolean`

Returns true if the [Unit] is under water.

**Returns:** 
`boolean`

bool underWater

___

{: .api-section }
### IsVendor

{: .code-example }
`IsVendor(): boolean`

Returns true if the [Unit] is a vendor.

**Returns:** 
`boolean`

bool isVendor

___

{: .api-section }
### Jump

{: .code-example }
`Jump(speedXY, speedZ, forward?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `speedXY` | `float` |  |
| `speedZ` | `float` |  |
| `forward?` | `boolean` | = true |

**Returns:** 
`any`

___

{: .api-section }
### JumpTo

{: .code-example }
`JumpTo(obj, speedZ, withOrientation?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |  |
| `speedZ` | `float` |  |
| `withOrientation?` | `boolean` | = false |

**Returns:** 
`any`

___

{: .api-section }
### Kill

{: .code-example }
`Kill(target, durLoss): void`

Makes the [Unit] kill the target [Unit]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSUnit`](TSUnit) | : [Unit] to kill |
| `durLoss` | `boolean` | - |

**Returns:** 
`void`

___

{: .api-section }
### KnockbackFrom

{: .code-example }
`KnockbackFrom(x, y, speedXY, speedZ): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `speedXY` | `float` |
| `speedZ` | `float` |

**Returns:** 
`any`

___

{: .api-section }
### LockSpellSchool

{: .code-example }
`LockSpellSchool(schoolMask, lockoutTime): void`

**`warn`** - Accepts [SpellSchoolMask], NOT [SpellSchool]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `schoolMask` | [`SpellSchoolMask`](../enums/SpellSchoolMask) | [SpellSchoolMask] of schools |
| `lockoutTime` | `uint32` |  |

**Returns:** 
`void`

___

{: .api-section }
### ModifyCooldown

{: .code-example }
`ModifyCooldown(spell, cooldownModMs): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spell` | `uint32` |  |
| `cooldownModMs` | `int32` | how much to change the cooldown in milliseconds |

**Returns:** 
`void`

___

{: .api-section }
### ModifyPower

{: .code-example }
`ModifyPower(type, amt): void`

modifies the [Unit]'s power amount for the given power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`Powers`](../enums/Powers) \| ``-1`` |
| `amt` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### Mount

{: .code-example }
`Mount(displayId): void`

Mounts the [Unit] on the given displayID/modelID.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `displayId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### MoveChase

{: .code-example }
`MoveChase(target, dist, angle): void`

The [Unit] will chase the target

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSUnit`](TSUnit) | : target to chase |
| `dist` | `float` | - |
| `angle` | `float` | - |

**Returns:** 
`void`

___

{: .api-section }
### MoveClear

{: .code-example }
`MoveClear(reset): void`

Clears the [Unit]'s movement

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `reset` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### MoveConfused

{: .code-example }
`MoveConfused(): void`

The [Unit] will move confused

**Returns:** 
`void`

___

{: .api-section }
### MoveExpire

{: .code-example }
`MoveExpire(reset): void`

The [Unit]'s movement expires and clears movement

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `reset` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### MoveFleeing

{: .code-example }
`MoveFleeing(target, time): void`

The [Unit] will flee

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |
| `time` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### MoveFollow

{: .code-example }
`MoveFollow(target, dist, angle): void`

The [Unit] will follow the target

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `target` | [`TSUnit`](TSUnit) | : target to follow |
| `dist` | `float` | - |
| `angle` | `float` | - |

**Returns:** 
`void`

___

{: .api-section }
### MoveHome

{: .code-example }
`MoveHome(): void`

The [Unit] will move to its set home location

**Returns:** 
`void`

___

{: .api-section }
### MoveIdle

{: .code-example }
`MoveIdle(): void`

The [Unit] will be idle

**Returns:** 
`void`

___

{: .api-section }
### MoveJump

{: .code-example }
`MoveJump(x, y, z, zSpeed, maxHeight, id): void`

Makes the [Unit] jump to the coordinates

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `zSpeed` | `float` |
| `maxHeight` | `float` |
| `id` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### MoveLand

{: .code-example }
`MoveLand(id, x, y, z): void`

The [Unit] will land from the air at the coordinates.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### MoveRandom

{: .code-example }
`MoveRandom(radius): void`

The [Unit] will move at random

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `radius` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### MoveStop

{: .code-example }
`MoveStop(): void`

Stops the [Unit]'s movement

**Returns:** 
`void`

___

{: .api-section }
### MoveTakeoff

{: .code-example }
`MoveTakeoff(id, x, y, z): void`

The [Unit] will take off from the ground and fly to the coordinates.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### MoveTo

{: .code-example }
`MoveTo(id, x, y, z, genPath, finalAngle?): void`

The [Unit] will move to the coordinates

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `genPath` | `boolean` |
| `finalAngle?` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### NearTeleport

{: .code-example }
`NearTeleport(x, y, z, o): void`

Makes the [Unit] teleport to given coordinates within same map.

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
### PerformEmote

{: .code-example }
`PerformEmote(emoteId): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `emoteId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### PowerSelectorHelper

{: .code-example }
`PowerSelectorHelper(unit, powerType): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `unit` | [`TSUnit`](TSUnit) |
| `powerType` | `int` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### PrepareMove

{: .code-example }
`PrepareMove(): void`

**Returns:** 
`void`

___

{: .api-section }
### RemoveAllAuras

{: .code-example }
`RemoveAllAuras(): void`

Removes all [Aura]'s from the [Unit].

    Note: talents and racials are also auras, use with caution

**Returns:** 
`void`

___

{: .api-section }
### RemoveAllControlled

{: .code-example }
`RemoveAllControlled(): void`

**Returns:** 
`void`

___

{: .api-section }
### RemoveAllMinionsByEntry

{: .code-example }
`RemoveAllMinionsByEntry(entry): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveAura

{: .code-example }
`RemoveAura(spellId): void`

Removes [Aura] of the given spell entry from the [Unit].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveCharmedBy

{: .code-example }
`RemoveCharmedBy(charmer): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `charmer` | [`TSUnit`](TSUnit) |

**Returns:** 
`void`

___

{: .api-section }
### ResetAllCooldowns

{: .code-example }
`ResetAllCooldowns(): void`

Resets all spell cooldowns

**Returns:** 
`void`

___

{: .api-section }
### ResetCooldown

{: .code-example }
`ResetCooldown(spellId, update?): any`

Resets the cooldown of a specific spell

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `spellId` | `uint32` |  |
| `update?` | `boolean` | = false |

**Returns:** 
`any`

___

{: .api-section }
### ScaleThreat

{: .code-example }
`ScaleThreat(victim, scale, raw?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `victim` | [`TSUnit`](TSUnit) |
| `scale` | `float` |
| `raw?` | `boolean` |

**Returns:** 
`any`

___

{: .api-section }
### SendChatMessageToPlayer

{: .code-example }
`SendChatMessageToPlayer(type, lang, msg, target): void`

Sends chat message to [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint8` |
| `lang` | `uint32` |
| `msg` | `string` |
| `target` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### SendUnitEmote

{: .code-example }
`SendUnitEmote(msg, receiver, bossEmote): void`

The [Unit] will emote the message

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `msg` | `string` | - |
| `receiver` | [`TSUnit`](TSUnit) | = nil : specific [Unit] to receive the message |
| `bossEmote` | `boolean` | - |

**Returns:** 
`void`

___

{: .api-section }
### SendUnitSay

{: .code-example }
`SendUnitSay(msg, language): void`

The [Unit] will say the message

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `msg` | `string` |
| `language` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SendUnitWhisper

{: .code-example }
`SendUnitWhisper(msg, lang, receiver, bossWhisper): void`

The [Unit] will whisper the message to a [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `msg` | `string` | - |
| `lang` | `uint32` | - |
| `receiver` | [`TSPlayer`](TSPlayer) | : specific [Unit] to receive the message |
| `bossWhisper` | `boolean` | - |

**Returns:** 
`void`

___

{: .api-section }
### SendUnitYell

{: .code-example }
`SendUnitYell(msg, language): void`

The [Unit] will yell the message

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `msg` | `string` |
| `language` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetArmor

{: .code-example }
`SetArmor(val): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `int32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### SetCharm

{: .code-example }
`SetCharm(target, apply): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetCharmedBy

{: .code-example }
`SetCharmedBy(charmer, type, application?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `charmer` | [`TSUnit`](TSUnit) |
| `type` | [`CharmType`](../enums/CharmType) |
| `application?` | [`TSAuraApplication`](TSAuraApplication) |

**Returns:** 
`void`

___

{: .api-section }
### SetConfused

{: .code-example }
`SetConfused(apply): void`

Confuses the [Unit], if 'false' specified, the [Unit] is no longer confused.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetCreatorGUID

{: .code-example }
`SetCreatorGUID(guid): void`

Sets creator GUID

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
`void`

___

{: .api-section }
### SetCritterGUID

{: .code-example }
`SetCritterGUID(guid): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
`void`

___

{: .api-section }
### SetDisplayID

{: .code-example }
`SetDisplayID(model): void`

Sets the [Unit]'s modelID.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `model` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetFFA

{: .code-example }
`SetFFA(apply): void`

Sets the [Unit]'s FFA flag on or off.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetFacing

{: .code-example }
`SetFacing(o): void`

Sets the [Unit]'s facing/orientation.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `o` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetFacingToObject

{: .code-example }
`SetFacingToObject(obj): void`

Sets the [Unit] to face the given [WorldObject]'s direction.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`void`

___

{: .api-section }
### SetFaction

{: .code-example }
`SetFaction(factionId): void`

Sets the [Unit]'s faction.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `factionId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetFeared

{: .code-example }
`SetFeared(apply): void`

Fears the [Unit], if 'false' specified, the [Unit] is no longer feared.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetHealth

{: .code-example }
`SetHealth(amt): void`

Sets the [Unit]'s health.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amt` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetLevel

{: .code-example }
`SetLevel(newlevel): void`

Sets the [Unit]'s level.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `newlevel` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetMaxHealth

{: .code-example }
`SetMaxHealth(amt): void`

Sets the [Unit]'s max health.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amt` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetMaxPower

{: .code-example }
`SetMaxPower(type, amt): void`

Sets the [Unit]'s max power amount for the given power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`Powers`](../enums/Powers) \| ``-1`` |
| `amt` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetName

{: .code-example }
`SetName(name): void`

Sets the [Unit]'s name internally.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### SetNativeDisplayID

{: .code-example }
`SetNativeDisplayID(model): void`

Sets the [Unit]'s native/default modelID.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `model` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetOwnerGUID

{: .code-example }
`SetOwnerGUID(guid): void`

Sets the [Unit]'s owner GUID to given GUID.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
`void`

___

{: .api-section }
### SetPetGUID

{: .code-example }
`SetPetGUID(guid): void`

Sets pet GUID

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) |

**Returns:** 
`void`

___

{: .api-section }
### SetPower

{: .code-example }
`SetPower(type, amt): void`

Sets the [Unit]'s power amount for the given power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`Powers`](../enums/Powers) \| ``-1`` |
| `amt` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetPowerType

{: .code-example }
`SetPowerType(type): void`

Sets the [Unit]'s power type.

    enum Powers
    {
        POWER_MANA        = 0,
        POWER_RAGE        = 1,
        POWER_FOCUS       = 2,
        POWER_ENERGY      = 3,
        POWER_HAPPINESS   = 4,
        POWER_RUNE        = 5,
        POWER_RUNIC_POWER = 6,
        POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `type` | [`Powers`](../enums/Powers) | : a valid power type |

**Returns:** 
`void`

___

{: .api-section }
### SetPvP

{: .code-example }
`SetPvP(apply): void`

Sets the [Unit]'s PvP on or off.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetResistance

{: .code-example }
`SetResistance(school, val): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `school` | `uint32` |
| `val` | `int32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### SetRooted

{: .code-example }
`SetRooted(apply): void`

Roots the [Unit] to the ground, if 'false' specified, unroots the [Unit].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetSanctuary

{: .code-example }
`SetSanctuary(apply): void`

Sets the [Unit]'s sanctuary flag on or off.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetSheath

{: .code-example }
`SetSheath(sheathed): void`

Sets the [Unit]'s sheath state.

    enum SheathState
    {
        SHEATH_STATE_UNARMED  = 0, // non prepared weapon
        SHEATH_STATE_MELEE    = 1, // prepared melee weapon
        SHEATH_STATE_RANGED   = 2  // prepared ranged weapon

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `sheathed` | [`SheathState`](../enums/SheathState) |

**Returns:** 
`void`

___

{: .api-section }
### SetSpeed

{: .code-example }
`SetSpeed(type, rate, forced): void`

Sets the [Unit]'s speed of given [UnitMoveType] to given rate.
If forced, packets sent to clients forcing the visual change.

    enum UnitMoveType
    {
        MOVE_WALK           = 0,
        MOVE_RUN            = 1,
        MOVE_RUN_BACK       = 2,
        MOVE_SWIM           = 3,
        MOVE_SWIM_BACK      = 4,
        MOVE_TURN_RATE      = 5,
        MOVE_FLIGHT         = 6,
        MOVE_FLIGHT_BACK    = 7,
        MOVE_PITCH_RATE     = 8
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`UnitMoveType`](../enums/UnitMoveType) |
| `rate` | `float` |
| `forced` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetStandState

{: .code-example }
`SetStandState(state): void`

Sets the [Unit]'s stand state

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `state` | [`UnitStandState`](../enums/UnitStandState) |

**Returns:** 
`void`

___

{: .api-section }
### SetWaterWalk

{: .code-example }
`SetWaterWalk(enable): void`

Toggles (Sets) [Unit]'s water walking

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enable` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### StartCooldown

{: .code-example }
`StartCooldown(spell, item?, spl?, onHold?): void`

Starts the cooldown of a new spell

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spell` | `uint32` |
| `item?` | `uint32` |
| `spl?` | [`TSSpell`](TSSpell) |
| `onHold?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### StopSpellCast

{: .code-example }
`StopSpellCast(spellId): void`

Stops the [Unit]'s current spell cast

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |

**Returns:** 
`void`

___

## Inherited Members
[`AddCollision`](./TSWorldObject#addcollision) [`AddNamedTimer`](./TSWorldObject#addnamedtimer) [`AddTimer`](./TSWorldObject#addtimer) [`CastCustomSpell`](./TSWorldObject#castcustomspell) [`CastSpell`](./TSWorldObject#castspell) [`CastSpellAoF`](./TSWorldObject#castspellaof) [`ClearEntityGroups`](./TSWorldObject#clearentitygroups) [`DoDelayed`](./TSWorldObject#dodelayed) [`GetAreaID`](./TSWorldObject#getareaid) [`GetBool`](./TSWorldObject#getbool) [`GetCollision`](./TSWorldObject#getcollision) [`GetCollisions`](./TSWorldObject#getcollisions) [`GetCoreByte`](./TSWorldObject#getcorebyte) [`GetCoreFloat`](./TSWorldObject#getcorefloat) [`GetCoreInt32`](./TSWorldObject#getcoreint32) [`GetCoreUInt16`](./TSWorldObject#getcoreuint16) [`GetCoreUInt32`](./TSWorldObject#getcoreuint32) [`GetCoreUInt64`](./TSWorldObject#getcoreuint64) [`GetCorpse`](./TSWorldObject#getcorpse) [`GetCreature`](./TSWorldObject#getcreature) [`GetCreaturesInRange`](./TSWorldObject#getcreaturesinrange) [`GetDistance`](./TSWorldObject#getdistance) [`GetDistance2d`](./TSWorldObject#getdistance2d) [`GetDistanceToPoint`](./TSWorldObject#getdistancetopoint) [`GetDistanceToPoint2d`](./TSWorldObject#getdistancetopoint2d) [`GetEffectiveOwner`](./TSWorldObject#geteffectiveowner) [`GetEntityGroup`](./TSWorldObject#getentitygroup) [`GetEntry`](./TSWorldObject#getentry) [`GetFactionTemplate`](./TSWorldObject#getfactiontemplate) [`GetFloat`](./TSWorldObject#getfloat) [`GetGUID`](./TSWorldObject#getguid) [`GetGUIDLow`](./TSWorldObject#getguidlow) [`GetGUIDNumber`](./TSWorldObject#getguidnumber) [`GetGameObject`](./TSWorldObject#getgameobject) [`GetGameObjectsInRange`](./TSWorldObject#getgameobjectsinrange) [`GetInstanceID`](./TSWorldObject#getinstanceid) [`GetInt`](./TSWorldObject#getint) [`GetJsonArray`](./TSWorldObject#getjsonarray) [`GetJsonObject`](./TSWorldObject#getjsonobject) [`GetLiquidStatus`](./TSWorldObject#getliquidstatus) [`GetMap`](./TSWorldObject#getmap) [`GetMapID`](./TSWorldObject#getmapid) [`GetName`](./TSWorldObject#getname) [`GetNearestCreature`](./TSWorldObject#getnearestcreature) [`GetNearestGameObject`](./TSWorldObject#getnearestgameobject) [`GetNearestPlayer`](./TSWorldObject#getnearestplayer) [`GetNumber`](./TSWorldObject#getnumber) [`GetO`](./TSWorldObject#geto) [`GetObject`](./TSWorldObject#getobject) [`GetPhaseID`](./TSWorldObject#getphaseid) [`GetPhaseMask`](./TSWorldObject#getphasemask) [`GetPlayer`](./TSWorldObject#getplayer) [`GetPlayersInRange`](./TSWorldObject#getplayersinrange) [`GetPosition`](./TSWorldObject#getposition) [`GetRawDouble`](./TSWorldObject#getrawdouble) [`GetRawFloat`](./TSWorldObject#getrawfloat) [`GetRawInt16`](./TSWorldObject#getrawint16) [`GetRawInt32`](./TSWorldObject#getrawint32) [`GetRawInt64`](./TSWorldObject#getrawint64) [`GetRawInt8`](./TSWorldObject#getrawint8) [`GetRawUInt16`](./TSWorldObject#getrawuint16) [`GetRawUInt32`](./TSWorldObject#getrawuint32) [`GetRawUInt64`](./TSWorldObject#getrawuint64) [`GetRawUInt8`](./TSWorldObject#getrawuint8) [`GetRelativePoint`](./TSWorldObject#getrelativepoint) [`GetScale`](./TSWorldObject#getscale) [`GetString`](./TSWorldObject#getstring) [`GetTypeID`](./TSWorldObject#gettypeid) [`GetUInt`](./TSWorldObject#getuint) [`GetUInt64`](./TSWorldObject#getuint64) [`GetUnit`](./TSWorldObject#getunit) [`GetUnitsInRange`](./TSWorldObject#getunitsinrange) [`GetX`](./TSWorldObject#getx) [`GetY`](./TSWorldObject#gety) [`GetZ`](./TSWorldObject#getz) [`GetZoneID`](./TSWorldObject#getzoneid) [`HasBool`](./TSWorldObject#hasbool) [`HasCollision`](./TSWorldObject#hascollision) [`HasFlag`](./TSWorldObject#hasflag) [`HasFloat`](./TSWorldObject#hasfloat) [`HasGUIDNumber`](./TSWorldObject#hasguidnumber) [`HasInt`](./TSWorldObject#hasint) [`HasJsonArray`](./TSWorldObject#hasjsonarray) [`HasJsonObject`](./TSWorldObject#hasjsonobject) [`HasNumber`](./TSWorldObject#hasnumber) [`HasObject`](./TSWorldObject#hasobject) [`HasString`](./TSWorldObject#hasstring) [`HasUInt`](./TSWorldObject#hasuint) [`HasUInt64`](./TSWorldObject#hasuint64) [`IsBehind`](./TSWorldObject#isbehind) [`IsCorpse`](./TSWorldObject#iscorpse) [`IsCreature`](./TSWorldObject#iscreature) [`IsFriendlyTo`](./TSWorldObject#isfriendlyto) [`IsFriendlyToPlayers`](./TSWorldObject#isfriendlytoplayers) [`IsGameObject`](./TSWorldObject#isgameobject) [`IsHostileTo`](./TSWorldObject#ishostileto) [`IsHostileToPlayers`](./TSWorldObject#ishostiletoplayers) [`IsInBack`](./TSWorldObject#isinback) [`IsInFront`](./TSWorldObject#isinfront) [`IsInMap`](./TSWorldObject#isinmap) [`IsInRange`](./TSWorldObject#isinrange) [`IsInRange2d`](./TSWorldObject#isinrange2d) [`IsInRange3d`](./TSWorldObject#isinrange3d) [`IsInWorld`](./TSWorldObject#isinworld) [`IsItem`](./TSWorldObject#isitem) [`IsNeutralToAll`](./TSWorldObject#isneutraltoall) [`IsOutdoors`](./TSWorldObject#isoutdoors) [`IsPlayer`](./TSWorldObject#isplayer) [`IsUnit`](./TSWorldObject#isunit) [`IsWithinDist`](./TSWorldObject#iswithindist) [`IsWithinDist2d`](./TSWorldObject#iswithindist2d) [`IsWithinDist3d`](./TSWorldObject#iswithindist3d) [`IsWithinDistInMap`](./TSWorldObject#iswithindistinmap) [`IsWithinLoS`](./TSWorldObject#iswithinlos) [`PlayDirectSound`](./TSWorldObject#playdirectsound) [`PlayDistanceSound`](./TSWorldObject#playdistancesound) [`PlayMusic`](./TSWorldObject#playmusic) [`RemoveEntityGroup`](./TSWorldObject#removeentitygroup) [`RemoveFlag`](./TSWorldObject#removeflag) [`RemoveTimer`](./TSWorldObject#removetimer) [`SendPacket`](./TSWorldObject#sendpacket) [`SetBool`](./TSWorldObject#setbool) [`SetCoreByte`](./TSWorldObject#setcorebyte) [`SetCoreFloat`](./TSWorldObject#setcorefloat) [`SetCoreInt16`](./TSWorldObject#setcoreint16) [`SetCoreInt32`](./TSWorldObject#setcoreint32) [`SetCoreUInt16`](./TSWorldObject#setcoreuint16) [`SetCoreUInt32`](./TSWorldObject#setcoreuint32) [`SetCoreUInt64`](./TSWorldObject#setcoreuint64) [`SetFlag`](./TSWorldObject#setflag) [`SetFloat`](./TSWorldObject#setfloat) [`SetGUIDNumber`](./TSWorldObject#setguidnumber) [`SetInt`](./TSWorldObject#setint) [`SetJsonArray`](./TSWorldObject#setjsonarray) [`SetJsonObject`](./TSWorldObject#setjsonobject) [`SetNumber`](./TSWorldObject#setnumber) [`SetObject`](./TSWorldObject#setobject) [`SetPhaseMask`](./TSWorldObject#setphasemask) [`SetRawDouble`](./TSWorldObject#setrawdouble) [`SetRawFloat`](./TSWorldObject#setrawfloat) [`SetRawInt16`](./TSWorldObject#setrawint16) [`SetRawInt32`](./TSWorldObject#setrawint32) [`SetRawInt64`](./TSWorldObject#setrawint64) [`SetRawInt8`](./TSWorldObject#setrawint8) [`SetRawUInt16`](./TSWorldObject#setrawuint16) [`SetRawUInt32`](./TSWorldObject#setrawuint32) [`SetRawUInt64`](./TSWorldObject#setrawuint64) [`SetRawUInt8`](./TSWorldObject#setrawuint8) [`SetScale`](./TSWorldObject#setscale) [`SetString`](./TSWorldObject#setstring) [`SetUInt`](./TSWorldObject#setuint) [`SetUInt64`](./TSWorldObject#setuint64) [`SpawnCreature`](./TSWorldObject#spawncreature) [`SummonGameObject`](./TSWorldObject#summongameobject) [`ToCorpse`](./TSWorldObject#tocorpse) [`ToCreature`](./TSWorldObject#tocreature) [`ToGameObject`](./TSWorldObject#togameobject) [`ToItem`](./TSWorldObject#toitem) [`ToPlayer`](./TSWorldObject#toplayer) [`ToUnit`](./TSWorldObject#tounit) [`UpdateCoreUInt32`](./TSWorldObject#updatecoreuint32)
