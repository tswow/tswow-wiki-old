---
title: TSPlayer
---


## Hierarchy

- [`TSUnit`](TSUnit)

- [`TSDBJsonProvider`](TSDBJsonProvider)

  ↳ **`TSPlayer`**

## Methods

{: .api-section }
### AddComboPoints

{: .code-example }
`AddComboPoints(target, count): void`

Adds combo points to the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSUnit`](TSUnit) |
| `count` | `int8` |

**Returns:** 
`void`

___

{: .api-section }
### AddItem

{: .code-example }
`AddItem(itemId, itemCount, propertyId?): TSItem`

Adds the given amount of the specified item entry to the player.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `itemId` | `uint32` |
| `itemCount` | `uint32` |
| `propertyId?` | `int32` |

**Returns:** 
[`TSItem`](TSItem)

item : the item that was added or nil

___

{: .api-section }
### AddItemToSlotRaw

{: .code-example }
`AddItemToSlotRaw(bag, slot, itemId, count, propertyId?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `bag` | `uint8` |
| `slot` | `uint8` |
| `itemId` | `uint32` |
| `count` | `uint32` |
| `propertyId?` | `int32` |

**Returns:** 
`any`

___

{: .api-section }
### AddLifetimeKills

{: .code-example }
`AddLifetimeKills(val): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### AdvanceAllSkills

{: .code-example }
`AdvanceAllSkills(step): void`

Advances all of the [Player]s skills to the amount specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `step` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### AdvanceSkill

{: .code-example }
`AdvanceSkill(_skillId, _step): void`

Advances a [Player]s specific skill to the amount specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `_skillId` | `uint32` |
| `_step` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### AdvanceSkillsToMax

{: .code-example }
`AdvanceSkillsToMax(): void`

Advances all of the [Player]s weapon skills to the maximum amount available

**Returns:** 
`void`

___

{: .api-section }
### ApplyAllItemMods

{: .code-example }
`ApplyAllItemMods(): void`

Apply all item's stats on player

**`note`** Generally only used when creating/modifying ItemTemplates

**Returns:** 
`void`

___

{: .api-section }
### ApplyItemMods

{: .code-example }
`ApplyItemMods(item, slot, apply, updateAuras): void`

Apply single item's stats on player

**`note`** Generally only used when creating/modifying ItemTemplates

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `item` | [`TSItem`](TSItem) |
| `slot` | `uint8` |
| `apply` | `boolean` |
| `updateAuras` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### AreaExploredOrEventHappens

{: .code-example }
`AreaExploredOrEventHappens(questId): void`

Completes the [Quest] if a [Quest] area is explored, or completes the [Quest]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `questId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### CanBeDPS

{: .code-example }
`CanBeDPS(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### CanBeHealer

{: .code-example }
`CanBeHealer(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### CanBeLeader

{: .code-example }
`CanBeLeader(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### CanBeTank

{: .code-example }
`CanBeTank(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### CanBlock

{: .code-example }
`CanBlock(): boolean`

Returns 'true' if the [Player] can block incomming attacks, 'false' otherwise.

**Returns:** 
`boolean`

bool canBlock

___

{: .api-section }
### CanCompleteQuest

{: .code-example }
`CanCompleteQuest(entry): boolean`

Returns 'true' if the [Player] satisfies all requirements to complete the quest entry.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`boolean`

bool canComplete

___

{: .api-section }
### CanEquipItem

{: .code-example }
`CanEquipItem(item, slot, entry): boolean`

Returns true if the player can equip the given [Item] or item entry to the given slot, false otherwise.

**`proto`** canEquip = (item, slot)

**`proto`** canEquip = (entry, slot)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `item` | [`TSItem`](TSItem) | : item to equip |
| `slot` | `uint32` | - |
| `entry` | `uint32` | - |

**Returns:** 
`boolean`

bool canEquip

___

{: .api-section }
### CanFly

{: .code-example }
`CanFly(): boolean`

Returns 'true' if the [Player] can fly, 'false' otherwise.

**Returns:** 
`boolean`

bool canFly

___

{: .api-section }
### CanParry

{: .code-example }
`CanParry(): boolean`

Returns 'true' if the [Player] can parry incomming attacks, 'false' otherwise.

**Returns:** 
`boolean`

bool canParry

___

{: .api-section }
### CanShareQuest

{: .code-example }
`CanShareQuest(entry): boolean`

Returns 'true' if the [Player] can share [Quest] specified by ID, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`boolean`

bool hasSpellCooldown

___

{: .api-section }
### CanSpeak

{: .code-example }
`CanSpeak(): boolean`

Returns 'true' if the [Player] can currently communicate through chat, 'false' otherwise.

**Returns:** 
`boolean`

bool canSpeak

___

{: .api-section }
### CanTitanGrip

{: .code-example }
`CanTitanGrip(): boolean`

Returns 'true' if the [Player] can Titan Grip, 'false' otherwise.

**Returns:** 
`boolean`

bool canTitanGrip

___

{: .api-section }
### CanUninviteFromGroup

{: .code-example }
`CanUninviteFromGroup(): boolean`

Returns 'true' if the [Player] has permission to uninvite others from the current group, 'false' otherwise.

**Returns:** 
`boolean`

bool canUninviteFromGroup

___

{: .api-section }
### CanUseItem

{: .code-example }
`CanUseItem(item, entry): boolean`

Returns 'true' if the [Player] can use the item or item entry specified, 'false' otherwise.

**`proto`** canUse = (item)

**`proto`** canUse = (entry)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `item` | [`TSItem`](TSItem) | : an instance of an item |
| `entry` | `uint32` | - |

**Returns:** 
`boolean`

bool canUse

___

{: .api-section }
### ClearComboPoints

{: .code-example }
`ClearComboPoints(): void`

Clears the [Player]s combo points

**Returns:** 
`void`

___

{: .api-section }
### CompleteQuest

{: .code-example }
`CompleteQuest(entry): void`

Completes the given quest entry for the [Player] and tries to satisfy all quest requirements.

The player should have the quest to complete it.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### DurabilityLoss

{: .code-example }
`DurabilityLoss(item, percent): void`

Damages specified [Item]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `item` | [`TSItem`](TSItem) |
| `percent` | `double` |

**Returns:** 
`void`

___

{: .api-section }
### DurabilityLossAll

{: .code-example }
`DurabilityLossAll(percent, inventory): void`

Damages all [Item]s equipped. If inventory is true, damages [Item]s in bags

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `percent` | `double` |
| `inventory` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### DurabilityPointLossForEquipSlot

{: .code-example }
`DurabilityPointLossForEquipSlot(slot): void`

Sets durability loss for an [Item] in the specified slot

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### DurabilityPointsLoss

{: .code-example }
`DurabilityPointsLoss(item, points): void`

Sets durability loss for the specified [Item]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `item` | [`TSItem`](TSItem) |
| `points` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### DurabilityPointsLossAll

{: .code-example }
`DurabilityPointsLossAll(points, inventory): void`

Sets durability loss on all [Item]s equipped

If inventory is true, sets durability loss for [Item]s in bags

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `points` | `int32` |
| `inventory` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### DurabilityRepair

{: .code-example }
`DurabilityRepair(position, cost, discountMod): TSNumber<uint32>`

Repairs [Item] at specified position. Returns total repair cost

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `position` | `uint16` |
| `cost` | `boolean` |
| `discountMod` | `float` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 totalCost

___

{: .api-section }
### DurabilityRepairAll

{: .code-example }
`DurabilityRepairAll(cost, discountMod, guildBank): TSNumber<uint32>`

Repairs all [Item]s. Returns total repair cost

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `cost` | `boolean` |
| `discountMod` | `float` |
| `guildBank` | `boolean` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 totalCost

___

{: .api-section }
### EquipItem

{: .code-example }
`EquipItem(item, slot): TSItem`

Equips the given item or item entry to the given slot. Returns the equipped item or nil.

    enum EquipmentSlots // 19 slots
    {
        EQUIPMENT_SLOT_START        = 0,
        EQUIPMENT_SLOT_HEAD         = 0,
        EQUIPMENT_SLOT_NECK         = 1,
        EQUIPMENT_SLOT_SHOULDERS    = 2,
        EQUIPMENT_SLOT_BODY         = 3,
        EQUIPMENT_SLOT_CHEST        = 4,
        EQUIPMENT_SLOT_WAIST        = 5,
        EQUIPMENT_SLOT_LEGS         = 6,
        EQUIPMENT_SLOT_FEET         = 7,
        EQUIPMENT_SLOT_WRISTS       = 8,
        EQUIPMENT_SLOT_HANDS        = 9,
        EQUIPMENT_SLOT_FINGER1      = 10,
        EQUIPMENT_SLOT_FINGER2      = 11,
        EQUIPMENT_SLOT_TRINKET1     = 12,
        EQUIPMENT_SLOT_TRINKET2     = 13,
        EQUIPMENT_SLOT_BACK         = 14,
        EQUIPMENT_SLOT_MAINHAND     = 15,
        EQUIPMENT_SLOT_OFFHAND      = 16,
        EQUIPMENT_SLOT_RANGED       = 17,
        EQUIPMENT_SLOT_TABARD       = 18,
        EQUIPMENT_SLOT_END          = 19

    enum InventorySlots // 4 slots
    {
        INVENTORY_SLOT_BAG_START    = 19,
        INVENTORY_SLOT_BAG_END      = 23

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `item` | `uint32` \| [`TSItem`](TSItem) | : item to equip (entry or TSItem) |
| `slot` | [`EquipmentSlots`](../enums/EquipmentSlots) \| [`InventorySlots`](../enums/InventorySlots) | - |

**Returns:** 
[`TSItem`](TSItem)

equippedItem : item or nil if equipping failed

___

{: .api-section }
### FailQuest

{: .code-example }
`FailQuest(entry): void`

Sets the given [Quest] entry failed for the [Player].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### GetAccountID

{: .code-example }
`GetAccountID(): TSNumber<uint32>`

Returns the [Player]s account ID

**Returns:** 
`TSNumber`<`uint32`\>

uint32 accountId

___

{: .api-section }
### GetAccountName

{: .code-example }
`GetAccountName(): string`

Returns the [Player]s account name

**Returns:** 
`string`

string accountName

___

{: .api-section }
### GetActiveSpec

{: .code-example }
`GetActiveSpec(): TSNumber<uint32>`

Returns the [Player]s active spec ID

**Returns:** 
`TSNumber`<`uint32`\>

uint32 specId

___

{: .api-section }
### GetArenaPoints

{: .code-example }
`GetArenaPoints(): TSNumber<uint32>`

Returns the [Player]s current amount of Arena Points

**Returns:** 
`TSNumber`<`uint32`\>

uint32 arenaPoints

___

{: .api-section }
### GetAverageItemLevel

{: .code-example }
`GetAverageItemLevel(): TSNumber<float>`

Returns the average item level of the items equipped by this player

**`note`** This check takes into account the quality of items,
and items below epic quality loses 13 levels to a lowest
effective itemlevel of 0

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetBG

{: .code-example }
`GetBG(): TSBattleground`

**Returns:** 
[`TSBattleground`](TSBattleground)

___

{: .api-section }
### GetBGPlayer

{: .code-example }
`GetBGPlayer(): TSBattlegroundPlayer`

**Returns:** 
[`TSBattlegroundPlayer`](TSBattlegroundPlayer)

___

{: .api-section }
### GetBGTypeID

{: .code-example }
`GetBGTypeID(): TSNumber<uint32>`

Returns the [Player]s current [BattleGround] type ID

**Returns:** 
`TSNumber`<`uint32`\>

typeId

___

{: .api-section }
### GetBaseSkillValue

{: .code-example }
`GetBaseSkillValue(skill): TSNumber<uint16>`

Returns base skill value

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 baseVal

___

{: .api-section }
### GetBattlegroundID

{: .code-example }
`GetBattlegroundID(): TSNumber<uint32>`

Returns the [Player]s current [BattleGround] ID

**Returns:** 
`TSNumber`<`uint32`\>

uint32 battleGroundId

___

{: .api-section }
### GetChampioningFaction

{: .code-example }
`GetChampioningFaction(): TSNumber<uint32>`

Returns the faction ID the [Player] is currently flagged as champion for

**Returns:** 
`TSNumber`<`uint32`\>

uint32 championingFaction

___

{: .api-section }
### GetChatTag

{: .code-example }
`GetChatTag(): TSNumber<uint8>`

Returns active GM chat tag

**Returns:** 
`TSNumber`<`uint8`\>

uint8 tag

___

{: .api-section }
### GetComboPoints

{: .code-example }
`GetComboPoints(): TSNumber<uint8>`

Returns [Player]'s combo points

**Returns:** 
`TSNumber`<`uint8`\>

uint8 comboPoints

___

{: .api-section }
### GetComboTarget

{: .code-example }
`GetComboTarget(): TSUnit`

Returns [Unit] target combo points are on

**Returns:** 
[`TSUnit`](TSUnit)

target

___

{: .api-section }
### GetCorpse

{: .code-example }
`GetCorpse(): TSCorpse`

Returns the [Player]s [Corpse] object

**Returns:** 
[`TSCorpse`](TSCorpse)

corpse

#### Overrides

[TSUnit](TSUnit).[GetCorpse](TSUnit.md#getcorpse)

___

{: .api-section }
### GetDbLocaleIndex

{: .code-example }
`GetDbLocaleIndex(): int`

Returns the [Player]s database locale index

**Returns:** 
`int`

int localeIndex

___

{: .api-section }
### GetDbcLocale

{: .code-example }
`GetDbcLocale(): TSNumber<uint32>`

Returns the [Player]s game client locale

**Returns:** 
`TSNumber`<`uint32`\>

locale

___

{: .api-section }
### GetDifficulty

{: .code-example }
`GetDifficulty(isRaid): TSNumber<int32>`

Returns raid or dungeon difficulty

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `isRaid` | `boolean` |

**Returns:** 
`TSNumber`<`int32`\>

int32 difficulty

___

{: .api-section }
### GetDrunkValue

{: .code-example }
`GetDrunkValue(): TSNumber<uint16>`

Returns the [Player]s current level of intoxication

**Returns:** 
`TSNumber`<`uint16`\>

uint16 drunkValue

___

{: .api-section }
### GetEquippedItemBySlot

{: .code-example }
`GetEquippedItemBySlot(slot): TSItem`

Returns a [Player]s [Item] object by gear slot specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | `uint8` |

**Returns:** 
[`TSItem`](TSItem)

item

___

{: .api-section }
### GetFace

{: .code-example }
`GetFace(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetFacialStyle

{: .code-example }
`GetFacialStyle(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetFreeInventorySpace

{: .code-example }
`GetFreeInventorySpace(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetFreeTalentPoints

{: .code-example }
`GetFreeTalentPoints(): TSNumber<uint32>`

Returns the [Player]s free talent point amount

**Returns:** 
`TSNumber`<`uint32`\>

uint32 freeTalentPointAmt

___

{: .api-section }
### GetGMRank

{: .code-example }
`GetGMRank(): TSNumber<uint32>`

Returns the [Player]s GM Rank

**Returns:** 
`TSNumber`<`uint32`\>

gmRank

___

{: .api-section }
### GetGlobalSelection

{: .code-example }
`GetGlobalSelection(): TSUnit`

Returns the [Player]s currently selected [Unit] object,
even if said unit is in another map or in no map at all.

**`warn`** not thread-safe

**`warn`** currently only works across maps if the selected unit is a player.

**Returns:** 
[`TSUnit`](TSUnit)

target unit

___

{: .api-section }
### GetGossipTextID

{: .code-example }
`GetGossipTextID(obj): TSNumber<uint32>`

Returns the database textID of the [WorldObject]'s gossip header text for the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 textId : key to npc_text database table

___

{: .api-section }
### GetGroup

{: .code-example }
`GetGroup(): TSGroup`

Returns the [Player]s [Group] object

**Returns:** 
[`TSGroup`](TSGroup)

group

___

{: .api-section }
### GetGroupInvite

{: .code-example }
`GetGroupInvite(): TSGroup`

Returns [Group] invitation

**Returns:** 
[`TSGroup`](TSGroup)

group

___

{: .api-section }
### GetGuild

{: .code-example }
`GetGuild(): TSGuild`

Returns the [Player]s [Guild] object

**Returns:** 
[`TSGuild`](TSGuild)

guild

___

{: .api-section }
### GetGuildID

{: .code-example }
`GetGuildID(): TSNumber<uint32>`

Returns the [Player]s current [Guild] ID

**Returns:** 
`TSNumber`<`uint32`\>

uint32 guildId

___

{: .api-section }
### GetGuildName

{: .code-example }
`GetGuildName(): string`

Returns the name of the [Player]s current [Guild]

**Returns:** 
`string`

string guildName

___

{: .api-section }
### GetGuildRank

{: .code-example }
`GetGuildRank(): TSNumber<uint32>`

Returns the [Player]s current guild rank

**Returns:** 
`TSNumber`<`uint32`\>

uint32 guildRank

___

{: .api-section }
### GetHairColor

{: .code-example }
`GetHairColor(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetHairStyle

{: .code-example }
`GetHairStyle(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetHealthBonusFromStamina

{: .code-example }
`GetHealthBonusFromStamina(): TSNumber<float>`

Returns health bonus from amount of stamina

**Returns:** 
`TSNumber`<`float`\>

float bonus

___

{: .api-section }
### GetHonorPoints

{: .code-example }
`GetHonorPoints(): TSNumber<uint32>`

Returns the [Player]s current amount of Honor Points

**Returns:** 
`TSNumber`<`uint32`\>

uint32 honorPoints

___

{: .api-section }
### GetInGameTime

{: .code-example }
`GetInGameTime(): TSNumber<uint32>`

Returns the amount of time the [Player] has spent ingame

**Returns:** 
`TSNumber`<`uint32`\>

uint32 inGameTime

___

{: .api-section }
### GetItemByEntry

{: .code-example }
`GetItemByEntry(entry): TSItem`

Returns an [Item] from the player by entry.

The item can be equipped, in bags or in bank.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
[`TSItem`](TSItem)

item

___

{: .api-section }
### GetItemByGUID

{: .code-example }
`GetItemByGUID(guid): TSItem`

Returns an [Item] from the player by guid.

The item can be equipped, in bags or in bank.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) \| `uint64` |

**Returns:** 
[`TSItem`](TSItem)

item

___

{: .api-section }
### GetItemByPos

{: .code-example }
`GetItemByPos(bag, slot): TSItem`

Returns an item in given bag on given slot.

<pre>
Possible and most commonly used combinations:

bag = 255
slots 0-18 equipment
slots 19-22 equipped bag slots
slots 23-38 backpack
slots 39-66 bank main slots
slots 67-74 bank bag slots
slots 86-117 keyring

bag = 19-22
slots 0-35 for equipped bags

bag = 67-74
slots 0-35 for bank bags
</pre>

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `bag` | `uint8` |
| `slot` | `uint8` |

**Returns:** 
[`TSItem`](TSItem)

item : [Item] or nil

___

{: .api-section }
### GetItemCount

{: .code-example }
`GetItemCount(entry, checkinBank): TSNumber<uint32>`

Returns amount of the specified [Item] the [Player] has.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `checkinBank` | `boolean` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 itemamount

___

{: .api-section }
### GetLatency

{: .code-example }
`GetLatency(): TSNumber<uint32>`

Returns the [Player]s current latency in MS

**Returns:** 
`TSNumber`<`uint32`\>

uint32 latency

___

{: .api-section }
### GetLevelPlayedTime

{: .code-example }
`GetLevelPlayedTime(): TSNumber<uint32>`

Returns the [Player]s time played at current level

**Returns:** 
`TSNumber`<`uint32`\>

uint32 currLevelPlayTime

___

{: .api-section }
### GetLifetimeKills

{: .code-example }
`GetLifetimeKills(): TSNumber<uint32>`

Returns the [Player]s lifetime Honorable Kills

**Returns:** 
`TSNumber`<`uint32`\>

uint32 lifeTimeKils

___

{: .api-section }
### GetManaBonusFromIntellect

{: .code-example }
`GetManaBonusFromIntellect(): TSNumber<float>`

Returns mana bonus from amount of intellect

**Returns:** 
`TSNumber`<`float`\>

float bonus

___

{: .api-section }
### GetMaxSkillValue

{: .code-example }
`GetMaxSkillValue(skill): TSNumber<uint16>`

Returns max value of specified skill

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 val

___

{: .api-section }
### GetMoney

{: .code-example }
`GetMoney(): TSNumber<uint32>`

Returns the [Player]s amount of money in copper

**Returns:** 
`TSNumber`<`uint32`\>

uint32 money

___

{: .api-section }
### GetNextRandomRaidMember

{: .code-example }
`GetNextRandomRaidMember(radius): TSPlayer`

Returns a random Raid Member [Player] object within radius specified of [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `radius` | `float` |

**Returns:** 
[`TSPlayer`](TSPlayer)

player

___

{: .api-section }
### GetOriginalGroup

{: .code-example }
`GetOriginalGroup(): TSGroup`

Returns [Player]s original [Group] object

**Returns:** 
[`TSGroup`](TSGroup)

group

___

{: .api-section }
### GetOriginalSubGroup

{: .code-example }
`GetOriginalSubGroup(): TSNumber<uint8>`

Returns [Player]s original sub group

**Returns:** 
`TSNumber`<`uint8`\>

uint8 subGroup

___

{: .api-section }
### GetOutfitCopy

{: .code-example }
`GetOutfitCopy(settings?, race?, gender?): TSOutfit`

Generates a creature outfit from this player.

- If no race/gender is provided, the players race, gender and
appearance is automatically copied to the creature.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `settings?` | [`Outfit`](../enums/Outfit) | bitmask of components that should be included in the copy |
| `race?` | `RaceID` | player race by default |
| `gender?` | [`Gender`](../enums/Gender) | player gender by default |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### GetPhaseMaskForSpawn

{: .code-example }
`GetPhaseMaskForSpawn(): TSNumber<uint32>`

Returns the normal phase of the player instead of the actual phase possibly containing GM phase

**Returns:** 
`TSNumber`<`uint32`\>

uint32 phasemask

___

{: .api-section }
### GetPlayerIP

{: .code-example }
`GetPlayerIP(): string`

Returns the [Player]s IP address

**Returns:** 
`string`

string ip

___

{: .api-section }
### GetPureMaxSkillValue

{: .code-example }
`GetPureMaxSkillValue(skill): TSNumber<uint16>`

Returns max value of specified skill without bonus'

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 pureVal

___

{: .api-section }
### GetPureSkillValue

{: .code-example }
`GetPureSkillValue(skill): TSNumber<uint16>`

Returns skill value without bonus'

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 pureVal

___

{: .api-section }
### GetQuestLevel

{: .code-example }
`GetQuestLevel(quest): TSNumber<uint32>`

Returns the quest level of the [Player]s [Quest] specified by object

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `quest` | [`TSQuest`](TSQuest) |

**Returns:** 
`TSNumber`<`uint32`\>

questRewardStatus

___

{: .api-section }
### GetQuestRewardPermTalentPoints

{: .code-example }
`GetQuestRewardPermTalentPoints(): TSNumber<uint32>`

Returns the amount of talent points rewarded by quests to this player.

Permanent talent points are by default always added on top of the players normal
talent count.

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetQuestRewardStatus

{: .code-example }
`GetQuestRewardStatus(questId): boolean`

Returns 'true' if the [Player]s [Quest] specified by entry ID has been rewarded, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `questId` | `uint32` |

**Returns:** 
`boolean`

bool questRewardStatus

___

{: .api-section }
### GetQuestRewardTempTalentPoints

{: .code-example }
`GetQuestRewardTempTalentPoints(): TSNumber<uint32>`

Returns the amount of "temporary" talent points rewarded by quests to this player.

This is the type of talent points used by death knights in the scarlet enclave map.
By default it has no use for any other class or in any other map, but can be used
by custom scripts to replicate similar effects for other classes.

**`see`** TSEvents.Player.OnCalcTalentPoints

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetQuestStatus

{: .code-example }
`GetQuestStatus(entry): TSNumber<uint32>`

Returns the status of the [Player]s [Quest] specified by entry ID

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

questStatus

___

{: .api-section }
### GetReputation

{: .code-example }
`GetReputation(faction): TSNumber<int32>`

Returns the amount of reputation the [Player] has with the faction specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `faction` | `uint32` |

**Returns:** 
`TSNumber`<`int32`\>

int32 reputationAmt

___

{: .api-section }
### GetReputationRank

{: .code-example }
`GetReputationRank(faction): TSNumber<uint32>`

Returns the [Player]s reputation rank of faction specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `faction` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

rank

___

{: .api-section }
### GetReqKillOrCastCurrentCount

{: .code-example }
`GetReqKillOrCastCurrentCount(questId, entry): TSNumber<uint16>`

Returns [Quest] required [Creature] or [GameObject] count

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `questId` | `uint32` |
| `entry` | `int32` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 count

___

{: .api-section }
### GetRestBonus

{: .code-example }
`GetRestBonus(): TSNumber<float>`

Returns the [Player]s current resting bonus

**Returns:** 
`TSNumber`<`float`\>

float restBonus

___

{: .api-section }
### GetSelection

{: .code-example }
`GetSelection(): TSUnit`

Returns the [Player]s currently selected [Unit] object

**Returns:** 
[`TSUnit`](TSUnit)

unit

___

{: .api-section }
### GetShieldBlockValue

{: .code-example }
`GetShieldBlockValue(): TSNumber<uint32>`

Returns the [Player]s current shield block value

**Returns:** 
`TSNumber`<`uint32`\>

uint32 blockValue

___

{: .api-section }
### GetSkillPermBonusValue

{: .code-example }
`GetSkillPermBonusValue(skill): TSNumber<int16>`

Returns skill permanent bonus value

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`int16`\>

___

{: .api-section }
### GetSkillTempBonusValue

{: .code-example }
`GetSkillTempBonusValue(skill): TSNumber<int16>`

Returns skill temporary bonus value

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`int16`\>

___

{: .api-section }
### GetSkillValue

{: .code-example }
`GetSkillValue(skill): TSNumber<uint16>`

Returns skill value

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 val

___

{: .api-section }
### GetSkinColor

{: .code-example }
`GetSkinColor(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetSpecsCount

{: .code-example }
`GetSpecsCount(entry, mapid, zone): TSNumber<uint8>`

Returns the amount of available specs the [Player] currently has

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `mapid` | `uint32` |
| `zone` | `uint32` |

**Returns:** 
`TSNumber`<`uint8`\>

uint8 specCount

___

{: .api-section }
### GetSpellCooldownDelay

{: .code-example }
`GetSpellCooldownDelay(spellId): TSNumber<uint32>`

Returns the [Player]s cooldown delay by specified [Spell] ID

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 spellCooldownDelay

___

{: .api-section }
### GetSpellMap

{: .code-example }
`GetSpellMap(): TSDictionary<uint32, TSPlayerSpell>`

Returns all spells known by this player

**Returns:** 
[`TSDictionary`](TSDictionary)<`uint32`, [`TSPlayerSpell`](TSPlayerSpell)\>

___

{: .api-section }
### GetSubGroup

{: .code-example }
`GetSubGroup(): TSNumber<uint8>`

Returns [Player]s current sub group

**Returns:** 
`TSNumber`<`uint8`\>

uint8 subGroup

___

{: .api-section }
### GetTalentPointsInTree

{: .code-example }
`GetTalentPointsInTree(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetTeam

{: .code-example }
`GetTeam(): TSNumber<uint32>`

Returns the [Player]s [TeamId]

**Returns:** 
`TSNumber`<`uint32`\>

teamId

___

{: .api-section }
### GetTotalPlayedTime

{: .code-example }
`GetTotalPlayedTime(): TSNumber<uint32>`

Returns the [Player]s total time played

**Returns:** 
`TSNumber`<`uint32`\>

uint32 totalPlayTime

___

{: .api-section }
### GetXPRestBonus

{: .code-example }
`GetXPRestBonus(xp): TSNumber<uint32>`

Returns rested experience bonus

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `xp` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 xpBonus

___

{: .api-section }
### GiveXP

{: .code-example }
`GiveXP(xp, victim): void`

Gives the [Player] experience

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `xp` | `uint32` | - |
| `victim` | [`TSUnit`](TSUnit) | = nil |

**Returns:** 
`void`

___

{: .api-section }
### GossipAddQuests

{: .code-example }
`GossipAddQuests(source): void`

Adds the gossip items to the [Player]'s gossip for the quests the given [WorldObject] can offer to the player.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `source` | [`TSWorldObject`](TSWorldObject) | : a questgiver with quests |

**Returns:** 
`void`

___

{: .api-section }
### GossipClearMenu

{: .code-example }
`GossipClearMenu(): void`

Clears the [Player]s current gossip item list.

See also: [Player:GossipMenuAddItem], [Player:GossipSendMenu], [Player:GossipAddQuests], [Player:GossipComplete]

    Note: This is needed when you show a gossip menu without using gossip hello or select hooks which do this automatically.
    Usually this is needed when using [Player] is the sender of a Gossip Menu.

**Returns:** 
`void`

___

{: .api-section }
### GossipComplete

{: .code-example }
`GossipComplete(): void`

Closes the [Player]s currently open Gossip Menu.

See also: [Player:GossipMenuAddItem], [Player:GossipAddQuests], [Player:GossipSendMenu], [Player:GossipClearMenu]

**Returns:** 
`void`

___

{: .api-section }
### GossipMenuAddItem

{: .code-example }
`GossipMenuAddItem(icon, msg, sender?, id?, code?, promptMsg?, moneyRequired?): void`

Adds a new item to the gossip menu shown to the [Player] on next call to [Player:GossipSendMenu].

sender and intid are numbers which are passed directly to the gossip selection handler. Internally they are partly used for the database gossip handling.
code specifies whether to show a box to insert text to. The player inserted text is passed to the gossip selection handler.
money specifies an amount of money the player needs to have to click the option. An error message is shown if the player doesn't have enough money.
Note that the money amount is only checked client side and is not removed from the player either. You will need to check again in your code before taking action.

See also: [Player:GossipSendMenu], [Player:GossipAddQuests], [Player:GossipComplete], [Player:GossipClearMenu]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `icon` | [`GossipOptionIcon`](../enums/GossipOptionIcon) |
| `msg` | `string` |
| `sender?` | `uint32` |
| `id?` | `uint32` |
| `code?` | `boolean` |
| `promptMsg?` | `string` |
| `moneyRequired?` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### GossipSendMenu

{: .code-example }
`GossipSendMenu(npc_text, sender, menu_id?): void`

Sends the current gossip items of the player to him as a gossip menu with header text from the given textId.

If sender is a [Player] then menu_id is mandatory, otherwise it is not used for anything.
menu_id is the ID used to trigger the OnGossipSelect registered for players. See [Global:RegisterPlayerGossipEvent]

See also: [Player:GossipMenuAddItem], [Player:GossipAddQuests], [Player:GossipComplete], [Player:GossipClearMenu]

**`proto`** (npc_text, sender)

**`proto`** (npc_text, sender, menu_id)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `npc_text` | `uint32` | - |
| `sender` | [`TSObject`](TSObject) | : object acting as the source of the sent gossip menu |
| `menu_id?` | `uint32` | - |

**Returns:** 
`void`

___

{: .api-section }
### GossipSendPOI

{: .code-example }
`GossipSendPOI(x, y, icon, flags, data, iconText): void`

Sends POI to the location on your map

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `icon` | `uint32` |
| `flags` | `uint32` |
| `data` | `uint32` |
| `iconText` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### GossipSendTextMenu

{: .code-example }
`GossipSendTextMenu(sender, text, language?, emote0?, emote0Delay?, emote1?, emote1Delay?, emote2?, emote2Delay?, menuId?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `sender` | [`TSObject`](TSObject) |
| `text` | `string` |
| `language?` | `uint32` |
| `emote0?` | `uint32` |
| `emote0Delay?` | `uint32` |
| `emote1?` | `uint32` |
| `emote1Delay?` | `uint32` |
| `emote2?` | `uint32` |
| `emote2Delay?` | `uint32` |
| `menuId?` | `uint32` |

**Returns:** 
`any`

___

{: .api-section }
### GossipSendTextMenuGendered

{: .code-example }
`GossipSendTextMenuGendered(sender, maleText, femaleText, language?, emote0?, emote0Delay?, emote1?, emote1Delay?, emote2?, emote2Delay?, menuId?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `sender` | [`TSObject`](TSObject) |
| `maleText` | `string` |
| `femaleText` | `string` |
| `language?` | `uint32` |
| `emote0?` | `uint32` |
| `emote0Delay?` | `uint32` |
| `emote1?` | `uint32` |
| `emote1Delay?` | `uint32` |
| `emote2?` | `uint32` |
| `emote2Delay?` | `uint32` |
| `menuId?` | `uint32` |

**Returns:** 
`any`

___

{: .api-section }
### GroupCreate

{: .code-example }
`GroupCreate(invited): TSGroup`

Creates a new [Group] with the creator [Player] as leader.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `invited` | [`TSPlayer`](TSPlayer) | : player to add to group |

**Returns:** 
[`TSGroup`](TSGroup)

createdGroup : the created group or nil

___

{: .api-section }
### GroupEventHappens

{: .code-example }
`GroupEventHappens(questId, obj): void`

Completes a [Quest] if in a [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `questId` | `uint32` |
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`void`

___

{: .api-section }
### GroupInvite

{: .code-example }
`GroupInvite(invited): boolean`

Makes the [Player] invite another player to a group.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `invited` | [`TSPlayer`](TSPlayer) | : player to invite to group |

**Returns:** 
`boolean`

bool success : true if the player was invited to a group

___

{: .api-section }
### HasAchieved

{: .code-example }
`HasAchieved(achievementId): boolean`

Returns 'true' if the [Player] has completed the specified achievement, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `achievementId` | `uint32` |

**Returns:** 
`boolean`

bool hasAchieved

___

{: .api-section }
### HasAtLoginFlag

{: .code-example }
`HasAtLoginFlag(flag): boolean`

Returns true if [Player] has specified login flag

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `flag` | `uint32` |

**Returns:** 
`boolean`

bool hasLoginFlag

___

{: .api-section }
### HasItem

{: .code-example }
`HasItem(itemId, count, check_bank): boolean`

Returns 'true' if the [Player] has the given amount of item entry specified, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `itemId` | `uint32` |
| `count` | `uint32` |
| `check_bank` | `boolean` |

**Returns:** 
`boolean`

bool hasItem

___

{: .api-section }
### HasQuest

{: .code-example }
`HasQuest(quest): boolean`

Returns 'true' if the [Player] has an active [Quest] by specific ID, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `quest` | `uint32` |

**Returns:** 
`boolean`

bool hasQuest

___

{: .api-section }
### HasQuestForGO

{: .code-example }
`HasQuestForGO(entry): boolean`

Returns true if [Player] has [Quest] for [GameObject]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `int32` |

**Returns:** 
`boolean`

bool hasQuest

___

{: .api-section }
### HasQuestForItem

{: .code-example }
`HasQuestForItem(entry): boolean`

Returns 'true' if the [Player] has a quest for the item entry specified, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`boolean`

bool hasQuest

___

{: .api-section }
### HasRunes

{: .code-example }
`HasRunes(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### HasSkill

{: .code-example }
`HasSkill(skill): boolean`

Returns 'true' if the [Player] has a skill by specific ID, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skill` | `uint32` |

**Returns:** 
`boolean`

bool hasSkill

___

{: .api-section }
### HasSpell

{: .code-example }
`HasSpell(id): boolean`

Returns 'true' if the [Player] has a [Spell] by specific ID, 'false' otherwise.

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

Returns 'true' if the [Spell] specified by ID is currently on cooldown for the [Player], 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |

**Returns:** 
`boolean`

bool hasSpellCooldown

___

{: .api-section }
### HasTalent

{: .code-example }
`HasTalent(spellId, spec): boolean`

Returns 'true' if the [Player] has a talent by ID in specified spec, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |
| `spec` | `uint8` |

**Returns:** 
`boolean`

bool hasTalent

___

{: .api-section }
### HasTitle

{: .code-example }
`HasTitle(id): boolean`

Returns 'true' if the [Player] has a title by specific ID, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`boolean`

bool hasTitle

___

{: .api-section }
### InArena

{: .code-example }
`InArena(): boolean`

Returns 'true' if the [Player] is currently in an arena, 'false' otherwise.

**Returns:** 
`boolean`

bool inArena

___

{: .api-section }
### InBG

{: .code-example }
`InBG(): boolean`

Returns 'true' if the [Player] is currently in a [BattleGround], 'false' otherwise.

**Returns:** 
`boolean`

bool inBattleGround

___

{: .api-section }
### InBGQueue

{: .code-example }
`InBGQueue(): boolean`

Returns 'true' if the [Player] is currently in a [BattleGround] queue, 'false' otherwise.

**Returns:** 
`boolean`

bool inBattlegroundQueue

___

{: .api-section }
### IncompleteQuest

{: .code-example }
`IncompleteQuest(entry): void`

Sets the given quest entry incomplete for the [Player].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### IsAFK

{: .code-example }
`IsAFK(): boolean`

Returns 'true' if the [Player] is 'Away From Keyboard' flagged, 'false' otherwise.

**Returns:** 
`boolean`

bool isAFK

___

{: .api-section }
### IsAcceptingWhispers

{: .code-example }
`IsAcceptingWhispers(): boolean`

Returns 'true' if the [Player] is accepting whispers, 'false' otherwise.

**Returns:** 
`boolean`

bool isAcceptingWhispers

___

{: .api-section }
### IsAlliance

{: .code-example }
`IsAlliance(): boolean`

Returns 'true' if the [Player] is a part of the Alliance faction, 'false' otherwise.

**Returns:** 
`boolean`

bool isAlliance

___

{: .api-section }
### IsDND

{: .code-example }
`IsDND(): boolean`

Returns 'true' if the [Player] is 'Do Not Disturb' flagged, 'false' otherwise.

**Returns:** 
`boolean`

bool isDND

___

{: .api-section }
### IsFalling

{: .code-example }
`IsFalling(): boolean`

Returns 'true' if the [Player] is currently falling, 'false' otherwise.

**Returns:** 
`boolean`

bool isFalling

___

{: .api-section }
### IsFlying

{: .code-example }
`IsFlying(): boolean`

Returns 'true' if the [Player] is currently flying, 'false' otherwise.

**Returns:** 
`boolean`

bool isFlying

___

{: .api-section }
### IsGM

{: .code-example }
`IsGM(): boolean`

Returns 'true' if the [Player] is a Game Master, 'false' otherwise.

Note: This is only true when GM tag is activated! For alternative see [Player:GetGMRank]

**Returns:** 
`boolean`

bool isGM

___

{: .api-section }
### IsGMChat

{: .code-example }
`IsGMChat(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsGMVisible

{: .code-example }
`IsGMVisible(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsGroupVisibleFor

{: .code-example }
`IsGroupVisibleFor(target): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`boolean`

___

{: .api-section }
### IsHonorOrXPTarget

{: .code-example }
`IsHonorOrXPTarget(victim): boolean`

Returns 'true' if the [Player] is eligible for Honor or XP gain by [Unit] specified, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `victim` | [`TSUnit`](TSUnit) |

**Returns:** 
`boolean`

bool isHonorOrXPTarget

___

{: .api-section }
### IsHorde

{: .code-example }
`IsHorde(): boolean`

Returns 'true' if the [Player] is a part of the Horde faction, 'false' otherwise.

**Returns:** 
`boolean`

bool isHorde

___

{: .api-section }
### IsImmuneToDamage

{: .code-example }
`IsImmuneToDamage(): boolean`

Returns 'true' if the [Player] is immune to everything.

**Returns:** 
`boolean`

bool isImmune

___

{: .api-section }
### IsInArenaTeam

{: .code-example }
`IsInArenaTeam(type): boolean`

Returns 'true' if the [Player] is in an arena team specified by type, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | `uint32` |

**Returns:** 
`boolean`

bool isInArenaTeam

___

{: .api-section }
### IsInGroup

{: .code-example }
`IsInGroup(): boolean`

Returns 'true' if the [Player] is in a [Group], 'false' otherwise.

**Returns:** 
`boolean`

bool isInGroup

___

{: .api-section }
### IsInGuild

{: .code-example }
`IsInGuild(): boolean`

Returns 'true' if the [Player] is in a [Guild], 'false' otherwise.

**Returns:** 
`boolean`

bool isInGuild

___

{: .api-section }
### IsInSameGroupWith

{: .code-example }
`IsInSameGroupWith(target): boolean`

Returns 'true' if the [Player] is currently in the same [Group] as another [Player] by object, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`boolean`

bool isInSameGroupWith

___

{: .api-section }
### IsInSameRaidWith

{: .code-example }
`IsInSameRaidWith(target): boolean`

Returns 'true' if the [Player] is currently in the same raid as another [Player] by object, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`boolean`

bool isInSameRaidWith

___

{: .api-section }
### IsInWater

{: .code-example }
`IsInWater(): boolean`

Returns 'true' if the [Player] is currently in water, 'false' otherwise.

**Returns:** 
`boolean`

bool isInWater

#### Overrides

[TSUnit](TSUnit).[IsInWater](TSUnit.md#isinwater)

___

{: .api-section }
### IsMoving

{: .code-example }
`IsMoving(): boolean`

Returns 'true' if the [Player] is currently moving, 'false' otherwise.

**Returns:** 
`boolean`

bool isMoving

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
### IsRested

{: .code-example }
`IsRested(): boolean`

Returns 'true' if the [Player] is currently rested, 'false' otherwise.

**Returns:** 
`boolean`

bool isRested

___

{: .api-section }
### IsTaxiCheater

{: .code-example }
`IsTaxiCheater(): boolean`

Returns 'true' if the [Player] has taxi cheat activated, 'false' otherwise.

**Returns:** 
`boolean`

bool isTaxiCheater

___

{: .api-section }
### IsVisibleForPlayer

{: .code-example }
`IsVisibleForPlayer(target): boolean`

Returns 'true' if the [Player] can see anoter [Player] specified by object, 'false' otherwise.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`boolean`

bool isVisibleForPlayer

___

{: .api-section }
### KickPlayer

{: .code-example }
`KickPlayer(): void`

Kicks the [Player] from the server

**Returns:** 
`void`

___

{: .api-section }
### KillPlayer

{: .code-example }
`KillPlayer(durability?): void`

Kills the [Player]
durability: whether to lose durability (false by default)

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `durability?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### KilledMonsterCredit

{: .code-example }
`KilledMonsterCredit(entry): void`

Gives [Quest] monster killed credit

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### LearnClassSpells

{: .code-example }
`LearnClassSpells(trainer, quests, limitQuestsByLevel?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `trainer` | `boolean` |
| `quests` | `boolean` |
| `limitQuestsByLevel?` | `boolean` |

**Returns:** 
`any`

___

{: .api-section }
### LearnSpell

{: .code-example }
`LearnSpell(id): void`

Teaches the [Player] the [Spell] specified by entry ID

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### LearnTalent

{: .code-example }
`LearnTalent(id, rank): void`

Learn the [Player] the talent specified by talent_id and talentRank

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `rank` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### LeaveBG

{: .code-example }
`LeaveBG(teleToEntryPoint): void`

Forces the [Player] to leave a [BattleGround]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `teleToEntryPoint` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### LogoutPlayer

{: .code-example }
`LogoutPlayer(save): void`

Forces the [Player] to log out

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `save` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### ModifyArenaPoints

{: .code-example }
`ModifyArenaPoints(amount): void`

Adds or detracts from the [Player]s current Arena Points

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amount` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### ModifyHonorPoints

{: .code-example }
`ModifyHonorPoints(amount): void`

Adds or detracts from the [Player]s current Honor Points

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amount` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### ModifyMoney

{: .code-example }
`ModifyMoney(amt): void`

Adds or subtracts from the [Player]s money in copper

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amt` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### Mute

{: .code-example }
`Mute(muteseconds): void`

Mutes the [Player] for the amount of seconds specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `muteseconds` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveAllItemMods

{: .code-example }
`RemoveAllItemMods(): void`

Remove all item's stats on player

**`note`** Generally only used when creating/modifying ItemTemplates

**Returns:** 
`void`

___

{: .api-section }
### RemoveFromBGRaid

{: .code-example }
`RemoveFromBGRaid(): void`

Forcefully removes the [Player] from a [BattleGround] raid group

**Returns:** 
`void`

___

{: .api-section }
### RemoveFromGroup

{: .code-example }
`RemoveFromGroup(): void`

Forces the [Player] to leave a [Group]

**Returns:** 
`void`

___

{: .api-section }
### RemoveItem

{: .code-example }
`RemoveItem(item, itemCount?): void`

Removes the given amount of the specified [Item] from the player.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `item` | [`TSItem`](TSItem) | : item to remove |
| `itemCount?` | `uint32` | - |

**Returns:** 
`void`

___

{: .api-section }
### RemoveItemByEntry

{: .code-example }
`RemoveItemByEntry(entry, itemCount?): void`

Removes the given amount of the specified item template from the player.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `itemCount?` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveItemMods

{: .code-example }
`RemoveItemMods(item, slot): void`

Remove single item's stats on player

**`note`** Generally only used when creating/modifying ItemTemplates

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `item` | [`TSItem`](TSItem) |
| `slot` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveLifetimeKills

{: .code-example }
`RemoveLifetimeKills(val): void`

Removes specified amount of lifetime kills

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveQuest

{: .code-example }
`RemoveQuest(entry): void`

Removes the given quest entry from the [Player].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### RemoveSpell

{: .code-example }
`RemoveSpell(entry, disabled, learn_low_rank): void`

Removes the [Spell] from the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `disabled` | `boolean` |
| `learn_low_rank` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### RemovedInsignia

{: .code-example }
`RemovedInsignia(looter): void`

Loots [Player]'s bones for insignia

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `looter` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### ResetAchievements

{: .code-example }
`ResetAchievements(): void`

Reset the [Player]s completed achievements

**Returns:** 
`void`

___

{: .api-section }
### ResetAllCooldowns

{: .code-example }
`ResetAllCooldowns(): void`

Resets all of the [Player]'s cooldowns

**Returns:** 
`void`

#### Overrides

[TSUnit](TSUnit).[ResetAllCooldowns](TSUnit.md#resetallcooldowns)

___

{: .api-section }
### ResetPetTalents

{: .code-example }
`ResetPetTalents(pType): void`

Resets the [Player]s pets talent points

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `pType` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### ResetSpellCooldown

{: .code-example }
`ResetSpellCooldown(spellId, update): void`

Resets cooldown of the specified spell

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `spellId` | `uint32` |
| `update` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### ResetTalents

{: .code-example }
`ResetTalents(no_cost): void`

Resets the [Player]s talents

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `no_cost` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### ResetTalentsCost

{: .code-example }
`ResetTalentsCost(): TSNumber<uint32>`

Returns the [Player]s accumulated talent reset cost

**Returns:** 
`TSNumber`<`uint32`\>

uint32 resetCost

___

{: .api-section }
### ResurrectPlayer

{: .code-example }
`ResurrectPlayer(percent, sickness): void`

Resurrects the [Player].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `percent` | `float` |
| `sickness` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### RewardQuest

{: .code-example }
`RewardQuest(entry): void`

Rewards the given quest entry for the [Player] if he has completed it.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SaveToDB

{: .code-example }
`SaveToDB(): void`

Saves the [Player] to the database

**Returns:** 
`void`

___

{: .api-section }
### Say

{: .code-example }
`Say(text, lang): void`

Sends say text from the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `text` | `string` |
| `lang` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SendAddonMessage

{: .code-example }
`SendAddonMessage(prefix, message, channel, receiver): void`

Sends addon message to the [Player] receiver

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `prefix` | `string` |
| `message` | `string` |
| `channel` | `uint8` |
| `receiver` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### SendAreaTriggerMessage

{: .code-example }
`SendAreaTriggerMessage(msg): void`

Sends an Area Trigger Message to the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `msg` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### SendAuctionMenu

{: .code-example }
`SendAuctionMenu(unit): void`

Sends an auction house window to the [Player] from the [Unit] specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `unit` | [`TSUnit`](TSUnit) |

**Returns:** 
`void`

___

{: .api-section }
### SendBroadcastMessage

{: .code-example }
`SendBroadcastMessage(message): void`

Sends a Broadcast Message to the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `message` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### SendCinematicStart

{: .code-example }
`SendCinematicStart(CinematicSequenceId): void`

Starts a cinematic for the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `CinematicSequenceId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SendCreatureQueryPacket

{: .code-example }
`SendCreatureQueryPacket(entry): void`

Sends a [Creature] cache packet to the [Player] from the [Creature] entry specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `number` |

**Returns:** 
`void`

___

{: .api-section }
### SendData

{: .code-example }
`SendData(data): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `data` | `any` |

**Returns:** 
`any`

___

{: .api-section }
### SendGameObjectQueryPacket

{: .code-example }
`SendGameObjectQueryPacket(entry): void`

Sends a [GameObject] cache packet to the [Player] from the [GameObject] entry specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `number` |

**Returns:** 
`void`

___

{: .api-section }
### SendGuildInvite

{: .code-example }
`SendGuildInvite(plr): void`

Sends a guild invitation from the [Player]s [Guild] to the [Player] object specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `plr` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### SendItemQueryPacket

{: .code-example }
`SendItemQueryPacket(entry): void`

Sends a [Item] cache packet to the [Player] from the [Item] entry specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `number` \| [`TSItemTemplate`](TSItemTemplate) |

**Returns:** 
`void`

___

{: .api-section }
### SendListInventory

{: .code-example }
`SendListInventory(obj): void`

Sends a vendor window to the [Player] from the [WorldObject] specified.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`void`

___

{: .api-section }
### SendMail

{: .code-example }
`SendMail(senderType, from, subject, body, money?, cod?, items?, itemEntries?): any`

Immediately sends a mail to this player

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `senderType` | `uint8` |
| `from` | `uint64` |
| `subject` | `string` |
| `body` | `string` |
| `money?` | `uint32` |
| `cod?` | `uint32` |
| `items?` | `TSArray`<[`TSItem`](TSItem)\> |
| `itemEntries?` | `TSArray`<[`TSItemEntry`](TSItemEntry)\> |

**Returns:** 
`any`

___

{: .api-section }
### SendMovieStart

{: .code-example }
`SendMovieStart(MovieId): void`

Starts a movie for the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `MovieId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SendNotification

{: .code-example }
`SendNotification(msg): void`

Sends a Notification to the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `msg` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### SendPacketPlayer

{: .code-example }
`SendPacketPlayer(data, selfOnly): void`

Sends a [WorldPacket] to the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `data` | [`TSWorldPacket`](TSWorldPacket) |
| `selfOnly` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SendQuestTemplate

{: .code-example }
`SendQuestTemplate(questId, activateAccept): void`

Shows a quest accepting window to the [Player] for the given quest.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `questId` | `uint32` |
| `activateAccept` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SendShowBank

{: .code-example }
`SendShowBank(obj): void`

Sends a bank window to the [Player] from the [WorldObject] specified.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`void`

___

{: .api-section }
### SendShowMailBox

{: .code-example }
`SendShowMailBox(guid): void`

Shows the mailbox window to the player from specified guid.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) \| `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SendSpiritResurrect

{: .code-example }
`SendSpiritResurrect(): void`

Sends a spirit resurrection request to the [Player]

**Returns:** 
`void`

___

{: .api-section }
### SendTabardVendorActivate

{: .code-example }
`SendTabardVendorActivate(obj): void`

Sends a tabard vendor window to the [Player] from the [WorldObject] specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) |

**Returns:** 
`void`

___

{: .api-section }
### SendTaxiMenu

{: .code-example }
`SendTaxiMenu(creature): void`

Sends a flightmaster window to the [Player] from the [Creature] specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `creature` | [`TSCreature`](TSCreature) |

**Returns:** 
`void`

___

{: .api-section }
### SendTrainerList

{: .code-example }
`SendTrainerList(obj): void`

Sends a trainer window to the [Player] from the [Creature] specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | [`TSCreature`](TSCreature) |

**Returns:** 
`void`

___

{: .api-section }
### SendUpdateWorldState

{: .code-example }
`SendUpdateWorldState(worldState, value): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `worldState` | `uint32` |
| `value` | `uint32` |

**Returns:** 
`any`

___

{: .api-section }
### SetAcceptWhispers

{: .code-example }
`SetAcceptWhispers(on): void`

Toggles whether the [Player] accepts whispers or not

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetArenaPoints

{: .code-example }
`SetArenaPoints(arenaP): void`

Sets the [Player]s Arena Points to the amount specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `arenaP` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetAtLoginFlag

{: .code-example }
`SetAtLoginFlag(flag): void`

Sets the [Player]s login flag to the flag specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `flag` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetBankBagSlotCount

{: .code-example }
`SetBankBagSlotCount(count): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `count` | `uint8` |

**Returns:** 
`any`

___

{: .api-section }
### SetBindPoint

{: .code-example }
`SetBindPoint(x, y, z, mapId, areaId): void`

Sets the [Player]s home location to the location specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `mapId` | `uint32` |
| `areaId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetDrunkValue

{: .code-example }
`SetDrunkValue(newDrunkValue): void`

Sets the [Player]s intoxication level to the level specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `newDrunkValue` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetFace

{: .code-example }
`SetFace(face): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `face` | `uint8` |

**Returns:** 
`any`

___

{: .api-section }
### SetFacialStyle

{: .code-example }
`SetFacialStyle(style): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `style` | `uint8` |

**Returns:** 
`any`

___

{: .api-section }
### SetFactionForRace

{: .code-example }
`SetFactionForRace(race): void`

Sets the [Player]s faction standing to that of the race specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `race` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetFreeTalentPoints

{: .code-example }
`SetFreeTalentPoints(points): void`

Sets the [Player]s free talent points to the amount specified for the current spec

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `points` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetGMChat

{: .code-example }
`SetGMChat(on): void`

Toggle Blizz (GM) tag

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetGMVisible

{: .code-example }
`SetGMVisible(on): void`

Toggles whether the [Player] has GM visibility on or off

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetGameMaster

{: .code-example }
`SetGameMaster(on): void`

Toggles the [Player]s GM mode on or off

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetGender

{: .code-example }
`SetGender(_gender): void`

Sets the [Player]s gender to gender specified

- GENDER_MALE    = 0
- GENDER_FEMALE  = 1

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `_gender` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetGuildRank

{: .code-example }
`SetGuildRank(rank): void`

Sets the [Player]s guild rank to the rank specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `rank` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetHairColor

{: .code-example }
`SetHairColor(color): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `color` | `uint8` |

**Returns:** 
`any`

___

{: .api-section }
### SetHairStyle

{: .code-example }
`SetHairStyle(style): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `style` | `uint8` |

**Returns:** 
`any`

___

{: .api-section }
### SetHonorPoints

{: .code-example }
`SetHonorPoints(honorP): void`

Sets the [Player]s Honor Points to the amount specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `honorP` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetKnownTitle

{: .code-example }
`SetKnownTitle(id): void`

Adds the specified title to the [Player]s list of known titles

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetLifetimeKills

{: .code-example }
`SetLifetimeKills(val): void`

Sets the [Player]s amount of Lifetime Honorable Kills to the value specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetMoney

{: .code-example }
`SetMoney(amt): void`

Sets the [Player]s amount of money in copper

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amt` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetPlayerLock

{: .code-example }
`SetPlayerLock(apply): void`

Locks the player controls and disallows all movement and casting.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `apply` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetPvPDeath

{: .code-example }
`SetPvPDeath(on): void`

Toggles PvP Death

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetQuestStatus

{: .code-example }
`SetQuestStatus(entry, status): void`

Sets [Quest] state

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `status` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetReputation

{: .code-example }
`SetReputation(faction, value): void`

Sets the [Player]s reputation amount for the faction specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `faction` | `uint32` |
| `value` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetRestBonus

{: .code-example }
`SetRestBonus(bonus): void`

Sets the [Player]s rest bonus to the amount specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `bonus` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetSheath

{: .code-example }
`SetSheath(sheathed): void`

Sets the [Player]s sheathe state to the state specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `sheathed` | `uint32` |

**Returns:** 
`void`

#### Overrides

[TSUnit](TSUnit).[SetSheath](TSUnit.md#setsheath)

___

{: .api-section }
### SetSkill

{: .code-example }
`SetSkill(id, step, currVal, maxVal): void`

Sets (increases) skill of the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint16` |
| `step` | `uint16` |
| `currVal` | `uint16` |
| `maxVal` | `uint16` |

**Returns:** 
`void`

___

{: .api-section }
### SetSkinColor

{: .code-example }
`SetSkinColor(color): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `color` | `uint8` |

**Returns:** 
`any`

___

{: .api-section }
### SetTaxiCheat

{: .code-example }
`SetTaxiCheat(on): void`

Toggles whether the [Player] has taxi cheat enabled or not

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SpawnBones

{: .code-example }
`SpawnBones(): void`

Converts [Player]'s corpse to bones

**Returns:** 
`void`

___

{: .api-section }
### StartTaxi

{: .code-example }
`StartTaxi(pathId): void`

Attempts to start the taxi/flying to the given pathID

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `pathId` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SummonPlayer

{: .code-example }
`SummonPlayer(summoner): void`

Sends a summon request to the player from the given summoner

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `summoner` | [`TSUnit`](TSUnit) |

**Returns:** 
`void`

___

{: .api-section }
### TalkedToCreature

{: .code-example }
`TalkedToCreature(entry, creature): void`

Gives [Quest] monster talked to credit

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `creature` | [`TSCreature`](TSCreature) |

**Returns:** 
`void`

___

{: .api-section }
### Teleport

{: .code-example }
`Teleport(mapId, x, y, z, o): boolean`

Teleports a [Player] to the location specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mapId` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |

**Returns:** 
`boolean`

___

{: .api-section }
### TextEmote

{: .code-example }
`TextEmote(text): void`

Sends a text emote from the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `text` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### ToggleAFK

{: .code-example }
`ToggleAFK(): void`

Toggle the [Player]s 'Away From Keyboard' flag

**Returns:** 
`void`

___

{: .api-section }
### ToggleDND

{: .code-example }
`ToggleDND(): void`

Toggle the [Player]s 'Do Not Disturb' flag

**Returns:** 
`void`

___

{: .api-section }
### TryAddMoney

{: .code-example }
`TryAddMoney(amount): boolean`

Attempts to give [Player] money in copper.

- If the given amount causes the players money to overflow,
  their money remains unchanged and the function returns false

- If the given amount does not cause overflow,
  the money is added and the function returns true.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amount` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### TryReduceMoney

{: .code-example }
`TryReduceMoney(amount): boolean`

Attempts to take money from [Player] in copper.

- If the taken amount is higher than the players current money,
  their money remains unchanged and the function returns false.

- If the taken amount is smaller than or equal to the players current
  money, their money remains unchanged and the function returns true.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amount` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### UnbindAllInstances

{: .code-example }
`UnbindAllInstances(): void`

Unbinds the [Player] from his instances except the one he currently is in.

**Returns:** 
`void`

___

{: .api-section }
### UnbindInstance

{: .code-example }
`UnbindInstance(map, difficulty): void`

Unbinds the [Player] from his instances except the one he currently is in.

Difficulty is not used on classic.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `map` | `uint32` |
| `difficulty` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### UnlockAchievement

{: .code-example }
`UnlockAchievement(entry): void`

Unlocks the specified achievement for the [Player]s

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### UnsetKnownTitle

{: .code-example }
`UnsetKnownTitle(id): void`

Removes a title by ID from the [Player]s list of known titles

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### UpdateCache

{: .code-example }
`UpdateCache(): void`

Applies all custom item cache to player

**`note`** Generally only used when creating/modifying ItemTemplates

**Returns:** 
`void`

___

{: .api-section }
### Whisper

{: .code-example }
`Whisper(text, lang, receiver, guid): void`

Sends whisper text from the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `text` | `string` | - |
| `lang` | `uint32` | - |
| `receiver` | [`TSPlayer`](TSPlayer) | : is the [Player] that will receive the whisper, if TrinityCore |
| `guid` | [`TSGUID`](TSGUID) \| `uint64` | - |

**Returns:** 
`void`

___

{: .api-section }
### Yell

{: .code-example }
`Yell(text, lang): void`

Sends yell text from the [Player]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `text` | `string` |
| `lang` | `uint32` |

**Returns:** 
`void`


## Inherited Members
[`AddAura`](./TSUnit#addaura) [`AddCollision`](./TSUnit#addcollision) [`AddNamedTimer`](./TSUnit#addnamedtimer) [`AddThreat`](./TSUnit#addthreat) [`AddTimer`](./TSUnit#addtimer) [`AddUnitState`](./TSUnit#addunitstate) [`Attack`](./TSUnit#attack) [`AttackStop`](./TSUnit#attackstop) [`CastCustomSpell`](./TSUnit#castcustomspell) [`CastSpell`](./TSUnit#castspell) [`CastSpellAoF`](./TSUnit#castspellaof) [`ClearDBJson`](./TSDBJsonProvider#cleardbjson) [`ClearEntityGroups`](./TSUnit#clearentitygroups) [`ClearInCombat`](./TSUnit#clearincombat) [`ClearThreatList`](./TSUnit#clearthreatlist) [`ClearUnitState`](./TSUnit#clearunitstate) [`CountPctFromCurHealth`](./TSUnit#countpctfromcurhealth) [`CountPctFromMaxHealth`](./TSUnit#countpctfrommaxhealth) [`DeMorph`](./TSUnit#demorph) [`DealDamage`](./TSUnit#dealdamage) [`DealHeal`](./TSUnit#dealheal) [`DeleteDBField`](./TSDBJsonProvider#deletedbfield) [`DeleteDBJson`](./TSDBJsonProvider#deletedbjson) [`Dismount`](./TSUnit#dismount) [`DoDelayed`](./TSUnit#dodelayed) [`EmoteState`](./TSUnit#emotestate) [`GetAreaID`](./TSUnit#getareaid) [`GetArmor`](./TSUnit#getarmor) [`GetAura`](./TSUnit#getaura) [`GetAuraApplication`](./TSUnit#getauraapplication) [`GetAuraApplicationOfRankedSpell`](./TSUnit#getauraapplicationofrankedspell) [`GetAuraApplications`](./TSUnit#getauraapplications) [`GetAuraEffectsByType`](./TSUnit#getauraeffectsbytype) [`GetAuraOfRankedSpell`](./TSUnit#getauraofrankedspell) [`GetBaseSpellPower`](./TSUnit#getbasespellpower) [`GetBool`](./TSUnit#getbool) [`GetCharmGUID`](./TSUnit#getcharmguid) [`GetCharmerGUID`](./TSUnit#getcharmerguid) [`GetClass`](./TSUnit#getclass) [`GetClassAsString`](./TSUnit#getclassasstring) [`GetClassMask`](./TSUnit#getclassmask) [`GetCollision`](./TSUnit#getcollision) [`GetCollisions`](./TSUnit#getcollisions) [`GetControlled`](./TSUnit#getcontrolled) [`GetController`](./TSUnit#getcontroller) [`GetControllerGUID`](./TSUnit#getcontrollerguid) [`GetControllerGUIDS`](./TSUnit#getcontrollerguids) [`GetCoreByte`](./TSUnit#getcorebyte) [`GetCoreFloat`](./TSUnit#getcorefloat) [`GetCoreInt32`](./TSUnit#getcoreint32) [`GetCoreUInt16`](./TSUnit#getcoreuint16) [`GetCoreUInt32`](./TSUnit#getcoreuint32) [`GetCoreUInt64`](./TSUnit#getcoreuint64) [`GetCreatorGUID`](./TSUnit#getcreatorguid) [`GetCreature`](./TSUnit#getcreature) [`GetCreatureType`](./TSUnit#getcreaturetype) [`GetCreaturesInRange`](./TSUnit#getcreaturesinrange) [`GetCritterGUID`](./TSUnit#getcritterguid) [`GetCurrentSpell`](./TSUnit#getcurrentspell) [`GetDBArray`](./TSDBJsonProvider#getdbarray) [`GetDBBool`](./TSDBJsonProvider#getdbbool) [`GetDBFloat`](./TSDBJsonProvider#getdbfloat) [`GetDBInt32`](./TSDBJsonProvider#getdbint32) [`GetDBInt64`](./TSDBJsonProvider#getdbint64) [`GetDBNumber`](./TSDBJsonProvider#getdbnumber) [`GetDBObject`](./TSDBJsonProvider#getdbobject) [`GetDBString`](./TSDBJsonProvider#getdbstring) [`GetDBUInt32`](./TSDBJsonProvider#getdbuint32) [`GetDBUInt64`](./TSDBJsonProvider#getdbuint64) [`GetDisplayID`](./TSUnit#getdisplayid) [`GetDistance`](./TSUnit#getdistance) [`GetDistance2d`](./TSUnit#getdistance2d) [`GetDistanceToPoint`](./TSUnit#getdistancetopoint) [`GetDistanceToPoint2d`](./TSUnit#getdistancetopoint2d) [`GetEffectiveOwner`](./TSUnit#geteffectiveowner) [`GetEntityGroup`](./TSUnit#getentitygroup) [`GetEntry`](./TSUnit#getentry) [`GetFaction`](./TSUnit#getfaction) [`GetFactionTemplate`](./TSUnit#getfactiontemplate) [`GetFirstControlled`](./TSUnit#getfirstcontrolled) [`GetFloat`](./TSUnit#getfloat) [`GetGUID`](./TSUnit#getguid) [`GetGUIDLow`](./TSUnit#getguidlow) [`GetGUIDNumber`](./TSUnit#getguidnumber) [`GetGameObject`](./TSUnit#getgameobject) [`GetGameObjectsInRange`](./TSUnit#getgameobjectsinrange) [`GetGender`](./TSUnit#getgender) [`GetHealth`](./TSUnit#gethealth) [`GetHealthPct`](./TSUnit#gethealthpct) [`GetInstanceID`](./TSUnit#getinstanceid) [`GetInt`](./TSUnit#getint) [`GetJsonArray`](./TSUnit#getjsonarray) [`GetJsonObject`](./TSUnit#getjsonobject) [`GetLevel`](./TSUnit#getlevel) [`GetLiquidStatus`](./TSUnit#getliquidstatus) [`GetMap`](./TSUnit#getmap) [`GetMapID`](./TSUnit#getmapid) [`GetMaxHealth`](./TSUnit#getmaxhealth) [`GetMaxNegativeAuraModifier`](./TSUnit#getmaxnegativeauramodifier) [`GetMaxPositiveAuraModifier`](./TSUnit#getmaxpositiveauramodifier) [`GetMaxPower`](./TSUnit#getmaxpower) [`GetMountID`](./TSUnit#getmountid) [`GetMovementType`](./TSUnit#getmovementtype) [`GetName`](./TSUnit#getname) [`GetNativeDisplayID`](./TSUnit#getnativedisplayid) [`GetNearestCreature`](./TSUnit#getnearestcreature) [`GetNearestGameObject`](./TSUnit#getnearestgameobject) [`GetNearestPlayer`](./TSUnit#getnearestplayer) [`GetNumber`](./TSUnit#getnumber) [`GetO`](./TSUnit#geto) [`GetObject`](./TSUnit#getobject) [`GetOwner`](./TSUnit#getowner) [`GetOwnerGUID`](./TSUnit#getownerguid) [`GetPet`](./TSUnit#getpet) [`GetPetGUID`](./TSUnit#getpetguid) [`GetPhaseID`](./TSUnit#getphaseid) [`GetPhaseMask`](./TSUnit#getphasemask) [`GetPlayer`](./TSUnit#getplayer) [`GetPlayersInRange`](./TSUnit#getplayersinrange) [`GetPosition`](./TSUnit#getposition) [`GetPower`](./TSUnit#getpower) [`GetPowerPct`](./TSUnit#getpowerpct) [`GetPowerType`](./TSUnit#getpowertype) [`GetRace`](./TSUnit#getrace) [`GetRaceAsString`](./TSUnit#getraceasstring) [`GetRaceMask`](./TSUnit#getracemask) [`GetRawDouble`](./TSUnit#getrawdouble) [`GetRawFloat`](./TSUnit#getrawfloat) [`GetRawInt16`](./TSUnit#getrawint16) [`GetRawInt32`](./TSUnit#getrawint32) [`GetRawInt64`](./TSUnit#getrawint64) [`GetRawInt8`](./TSUnit#getrawint8) [`GetRawUInt16`](./TSUnit#getrawuint16) [`GetRawUInt32`](./TSUnit#getrawuint32) [`GetRawUInt64`](./TSUnit#getrawuint64) [`GetRawUInt8`](./TSUnit#getrawuint8) [`GetRelativeAngle`](./TSUnit#getrelativeangle) [`GetRelativePoint`](./TSUnit#getrelativepoint) [`GetRemainingCooldown`](./TSUnit#getremainingcooldown) [`GetResistance`](./TSUnit#getresistance) [`GetScale`](./TSUnit#getscale) [`GetSpeed`](./TSUnit#getspeed) [`GetStandState`](./TSUnit#getstandstate) [`GetStat`](./TSUnit#getstat) [`GetString`](./TSUnit#getstring) [`GetTotalAuraModifier`](./TSUnit#gettotalauramodifier) [`GetTotalAuraModifierByMiscMask`](./TSUnit#gettotalauramodifierbymiscmask) [`GetTotalAuraMultiplier`](./TSUnit#gettotalauramultiplier) [`GetTypeID`](./TSUnit#gettypeid) [`GetUInt`](./TSUnit#getuint) [`GetUInt64`](./TSUnit#getuint64) [`GetUnit`](./TSUnit#getunit) [`GetUnitsInRange`](./TSUnit#getunitsinrange) [`GetVehicle`](./TSUnit#getvehicle) [`GetVehicleKit`](./TSUnit#getvehiclekit) [`GetVictim`](./TSUnit#getvictim) [`GetX`](./TSUnit#getx) [`GetY`](./TSUnit#gety) [`GetZ`](./TSUnit#getz) [`GetZoneID`](./TSUnit#getzoneid) [`HasAura`](./TSUnit#hasaura) [`HasAuraType`](./TSUnit#hasauratype) [`HasBool`](./TSUnit#hasbool) [`HasCollision`](./TSUnit#hascollision) [`HasCooldown`](./TSUnit#hascooldown) [`HasFlag`](./TSUnit#hasflag) [`HasFloat`](./TSUnit#hasfloat) [`HasGUIDNumber`](./TSUnit#hasguidnumber) [`HasInt`](./TSUnit#hasint) [`HasJsonArray`](./TSUnit#hasjsonarray) [`HasJsonObject`](./TSUnit#hasjsonobject) [`HasNumber`](./TSUnit#hasnumber) [`HasObject`](./TSUnit#hasobject) [`HasString`](./TSUnit#hasstring) [`HasUInt`](./TSUnit#hasuint) [`HasUInt64`](./TSUnit#hasuint64) [`HasUnitState`](./TSUnit#hasunitstate) [`HealthAbovePct`](./TSUnit#healthabovepct) [`HealthBelowPct`](./TSUnit#healthbelowpct) [`InterruptSpell`](./TSUnit#interruptspell) [`IsAlive`](./TSUnit#isalive) [`IsArmorer`](./TSUnit#isarmorer) [`IsAttackingPlayer`](./TSUnit#isattackingplayer) [`IsAuctioneer`](./TSUnit#isauctioneer) [`IsBanker`](./TSUnit#isbanker) [`IsBattleMaster`](./TSUnit#isbattlemaster) [`IsBehind`](./TSUnit#isbehind) [`IsCasting`](./TSUnit#iscasting) [`IsCharmed`](./TSUnit#ischarmed) [`IsCorpse`](./TSUnit#iscorpse) [`IsCreature`](./TSUnit#iscreature) [`IsDead`](./TSUnit#isdead) [`IsDying`](./TSUnit#isdying) [`IsFriendlyTo`](./TSUnit#isfriendlyto) [`IsFriendlyToPlayers`](./TSUnit#isfriendlytoplayers) [`IsFullHealth`](./TSUnit#isfullhealth) [`IsGameObject`](./TSUnit#isgameobject) [`IsGossip`](./TSUnit#isgossip) [`IsGuildMaster`](./TSUnit#isguildmaster) [`IsHostileTo`](./TSUnit#ishostileto) [`IsHostileToPlayers`](./TSUnit#ishostiletoplayers) [`IsInAccessiblePlaceFor`](./TSUnit#isinaccessibleplacefor) [`IsInBack`](./TSUnit#isinback) [`IsInCombat`](./TSUnit#isincombat) [`IsInFront`](./TSUnit#isinfront) [`IsInMap`](./TSUnit#isinmap) [`IsInRange`](./TSUnit#isinrange) [`IsInRange2d`](./TSUnit#isinrange2d) [`IsInRange3d`](./TSUnit#isinrange3d) [`IsInWorld`](./TSUnit#isinworld) [`IsInnkeeper`](./TSUnit#isinnkeeper) [`IsItem`](./TSUnit#isitem) [`IsMounted`](./TSUnit#ismounted) [`IsNeutralToAll`](./TSUnit#isneutraltoall) [`IsOnVehicle`](./TSUnit#isonvehicle) [`IsOutdoors`](./TSUnit#isoutdoors) [`IsPlayer`](./TSUnit#isplayer) [`IsPvPFlagged`](./TSUnit#ispvpflagged) [`IsQuestGiver`](./TSUnit#isquestgiver) [`IsRooted`](./TSUnit#isrooted) [`IsSchoolLocked`](./TSUnit#isschoollocked) [`IsServiceProvider`](./TSUnit#isserviceprovider) [`IsSpiritGuide`](./TSUnit#isspiritguide) [`IsSpiritHealer`](./TSUnit#isspirithealer) [`IsSpiritService`](./TSUnit#isspiritservice) [`IsStandState`](./TSUnit#isstandstate) [`IsStopped`](./TSUnit#isstopped) [`IsTabardDesigner`](./TSUnit#istabarddesigner) [`IsTaxi`](./TSUnit#istaxi) [`IsTrainer`](./TSUnit#istrainer) [`IsUnderWater`](./TSUnit#isunderwater) [`IsUnit`](./TSUnit#isunit) [`IsVendor`](./TSUnit#isvendor) [`IsWithinDist`](./TSUnit#iswithindist) [`IsWithinDist2d`](./TSUnit#iswithindist2d) [`IsWithinDist3d`](./TSUnit#iswithindist3d) [`IsWithinDistInMap`](./TSUnit#iswithindistinmap) [`IsWithinLoS`](./TSUnit#iswithinlos) [`Jump`](./TSUnit#jump) [`JumpTo`](./TSUnit#jumpto) [`Kill`](./TSUnit#kill) [`KnockbackFrom`](./TSUnit#knockbackfrom) [`LoadDBJson`](./TSDBJsonProvider#loaddbjson) [`LockSpellSchool`](./TSUnit#lockspellschool) [`ModifyCooldown`](./TSUnit#modifycooldown) [`ModifyPower`](./TSUnit#modifypower) [`Mount`](./TSUnit#mount) [`MoveChase`](./TSUnit#movechase) [`MoveClear`](./TSUnit#moveclear) [`MoveConfused`](./TSUnit#moveconfused) [`MoveExpire`](./TSUnit#moveexpire) [`MoveFleeing`](./TSUnit#movefleeing) [`MoveFollow`](./TSUnit#movefollow) [`MoveHome`](./TSUnit#movehome) [`MoveIdle`](./TSUnit#moveidle) [`MoveJump`](./TSUnit#movejump) [`MoveLand`](./TSUnit#moveland) [`MoveRandom`](./TSUnit#moverandom) [`MoveStop`](./TSUnit#movestop) [`MoveTakeoff`](./TSUnit#movetakeoff) [`MoveTo`](./TSUnit#moveto) [`NearTeleport`](./TSUnit#nearteleport) [`PerformEmote`](./TSUnit#performemote) [`PlayDirectSound`](./TSUnit#playdirectsound) [`PlayDistanceSound`](./TSUnit#playdistancesound) [`PlayMusic`](./TSUnit#playmusic) [`PowerSelectorHelper`](./TSUnit#powerselectorhelper) [`PrepareMove`](./TSUnit#preparemove) [`RemoveAllAuras`](./TSUnit#removeallauras) [`RemoveAllControlled`](./TSUnit#removeallcontrolled) [`RemoveAllMinionsByEntry`](./TSUnit#removeallminionsbyentry) [`RemoveAura`](./TSUnit#removeaura) [`RemoveCharmedBy`](./TSUnit#removecharmedby) [`RemoveEntityGroup`](./TSUnit#removeentitygroup) [`RemoveFlag`](./TSUnit#removeflag) [`RemoveTimer`](./TSUnit#removetimer) [`ResetCooldown`](./TSUnit#resetcooldown) [`SaveDBJson`](./TSDBJsonProvider#savedbjson) [`ScaleThreat`](./TSUnit#scalethreat) [`SendChatMessageToPlayer`](./TSUnit#sendchatmessagetoplayer) [`SendPacket`](./TSUnit#sendpacket) [`SendUnitEmote`](./TSUnit#sendunitemote) [`SendUnitSay`](./TSUnit#sendunitsay) [`SendUnitWhisper`](./TSUnit#sendunitwhisper) [`SendUnitYell`](./TSUnit#sendunityell) [`SetArmor`](./TSUnit#setarmor) [`SetBool`](./TSUnit#setbool) [`SetCharm`](./TSUnit#setcharm) [`SetCharmedBy`](./TSUnit#setcharmedby) [`SetConfused`](./TSUnit#setconfused) [`SetCoreByte`](./TSUnit#setcorebyte) [`SetCoreFloat`](./TSUnit#setcorefloat) [`SetCoreInt16`](./TSUnit#setcoreint16) [`SetCoreInt32`](./TSUnit#setcoreint32) [`SetCoreUInt16`](./TSUnit#setcoreuint16) [`SetCoreUInt32`](./TSUnit#setcoreuint32) [`SetCoreUInt64`](./TSUnit#setcoreuint64) [`SetCreatorGUID`](./TSUnit#setcreatorguid) [`SetCritterGUID`](./TSUnit#setcritterguid) [`SetDBArray`](./TSDBJsonProvider#setdbarray) [`SetDBBool`](./TSDBJsonProvider#setdbbool) [`SetDBFloat`](./TSDBJsonProvider#setdbfloat) [`SetDBInt32`](./TSDBJsonProvider#setdbint32) [`SetDBInt64`](./TSDBJsonProvider#setdbint64) [`SetDBNumber`](./TSDBJsonProvider#setdbnumber) [`SetDBObject`](./TSDBJsonProvider#setdbobject) [`SetDBString`](./TSDBJsonProvider#setdbstring) [`SetDBUInt32`](./TSDBJsonProvider#setdbuint32) [`SetDBUInt64`](./TSDBJsonProvider#setdbuint64) [`SetDisplayID`](./TSUnit#setdisplayid) [`SetFFA`](./TSUnit#setffa) [`SetFacing`](./TSUnit#setfacing) [`SetFacingToObject`](./TSUnit#setfacingtoobject) [`SetFaction`](./TSUnit#setfaction) [`SetFeared`](./TSUnit#setfeared) [`SetFlag`](./TSUnit#setflag) [`SetFloat`](./TSUnit#setfloat) [`SetGUIDNumber`](./TSUnit#setguidnumber) [`SetHealth`](./TSUnit#sethealth) [`SetInt`](./TSUnit#setint) [`SetJsonArray`](./TSUnit#setjsonarray) [`SetJsonObject`](./TSUnit#setjsonobject) [`SetLevel`](./TSUnit#setlevel) [`SetMaxHealth`](./TSUnit#setmaxhealth) [`SetMaxPower`](./TSUnit#setmaxpower) [`SetName`](./TSUnit#setname) [`SetNativeDisplayID`](./TSUnit#setnativedisplayid) [`SetNumber`](./TSUnit#setnumber) [`SetObject`](./TSUnit#setobject) [`SetOwnerGUID`](./TSUnit#setownerguid) [`SetPetGUID`](./TSUnit#setpetguid) [`SetPhaseMask`](./TSUnit#setphasemask) [`SetPower`](./TSUnit#setpower) [`SetPowerType`](./TSUnit#setpowertype) [`SetPvP`](./TSUnit#setpvp) [`SetRawDouble`](./TSUnit#setrawdouble) [`SetRawFloat`](./TSUnit#setrawfloat) [`SetRawInt16`](./TSUnit#setrawint16) [`SetRawInt32`](./TSUnit#setrawint32) [`SetRawInt64`](./TSUnit#setrawint64) [`SetRawInt8`](./TSUnit#setrawint8) [`SetRawUInt16`](./TSUnit#setrawuint16) [`SetRawUInt32`](./TSUnit#setrawuint32) [`SetRawUInt64`](./TSUnit#setrawuint64) [`SetRawUInt8`](./TSUnit#setrawuint8) [`SetResistance`](./TSUnit#setresistance) [`SetRooted`](./TSUnit#setrooted) [`SetSanctuary`](./TSUnit#setsanctuary) [`SetScale`](./TSUnit#setscale) [`SetSpeed`](./TSUnit#setspeed) [`SetStandState`](./TSUnit#setstandstate) [`SetString`](./TSUnit#setstring) [`SetUInt`](./TSUnit#setuint) [`SetUInt64`](./TSUnit#setuint64) [`SetWaterWalk`](./TSUnit#setwaterwalk) [`SpawnCreature`](./TSUnit#spawncreature) [`StartCooldown`](./TSUnit#startcooldown) [`StopSpellCast`](./TSUnit#stopspellcast) [`SummonGameObject`](./TSUnit#summongameobject) [`ToCorpse`](./TSUnit#tocorpse) [`ToCreature`](./TSUnit#tocreature) [`ToGameObject`](./TSUnit#togameobject) [`ToItem`](./TSUnit#toitem) [`ToPlayer`](./TSUnit#toplayer) [`ToUnit`](./TSUnit#tounit) [`UpdateCoreUInt32`](./TSUnit#updatecoreuint32)
