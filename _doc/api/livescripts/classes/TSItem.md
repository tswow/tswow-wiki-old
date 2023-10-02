---
title: TSItem
---


## Hierarchy

- [`TSObject`](TSObject)

  ↳ **`TSItem`**

## Methods

{: .api-section }
### CanBeTraded

{: .code-example }
`CanBeTraded(mail): boolean`

Returns 'true' if the [Item] can be traded, 'false' otherwise

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mail` | `boolean` |

**Returns:** 
`boolean`

bool isTradeable

___

{: .api-section }
### ClearEnchantment

{: .code-example }
`ClearEnchantment(slot): boolean`

Removes an enchant from the [Item] by the specified slot

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |

**Returns:** 
`boolean`

bool enchantmentRemoved : if enchantment is successfully removed from specified (EnchantmentSlot)slot, returns 'true', otherwise 'false'

___

{: .api-section }
### GetAllowableClass

{: .code-example }
`GetAllowableClass(): TSNumber<uint32>`

Returns the [Player] classes allowed to use this [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 allowableClass

___

{: .api-section }
### GetAllowableRace

{: .code-example }
`GetAllowableRace(): TSNumber<uint32>`

Returns the [Player] races allowed to use this [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 allowableRace

___

{: .api-section }
### GetBagSize

{: .code-example }
`GetBagSize(): TSNumber<uint32>`

Returns the bag size of this [Item], 0 if [Item] is not a bag

**Returns:** 
`TSNumber`<`uint32`\>

uint32 bagSize

___

{: .api-section }
### GetBagSlot

{: .code-example }
`GetBagSlot(): TSNumber<uint8>`

Returns the [Item]s current bag slot

**Returns:** 
`TSNumber`<`uint8`\>

uint8 bagSlot

___

{: .api-section }
### GetBuyCount

{: .code-example }
`GetBuyCount(): TSNumber<uint32>`

Returns the default purchase count of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 count

___

{: .api-section }
### GetBuyPrice

{: .code-example }
`GetBuyPrice(): TSNumber<uint32>`

Returns the purchase price of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 price

___

{: .api-section }
### GetClass

{: .code-example }
`GetClass(): TSNumber<uint32>`

Returns class of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 class

___

{: .api-section }
### GetCount

{: .code-example }
`GetCount(): TSNumber<uint32>`

Returns the [Item]s stack count

**Returns:** 
`TSNumber`<`uint32`\>

uint32 count

___

{: .api-section }
### GetDisplayID

{: .code-example }
`GetDisplayID(): TSNumber<uint32>`

Returns the display ID of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 displayId

___

{: .api-section }
### GetEnchantmentCharges

{: .code-example }
`GetEnchantmentCharges(slot): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetEnchantmentDuration

{: .code-example }
`GetEnchantmentDuration(slot): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetEnchantmentID

{: .code-example }
`GetEnchantmentID(enchant_slot): TSNumber<uint32>`

Returns the [Item]s enchantment ID by enchant slot specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enchant_slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 enchantId : the id of the enchant slot specified

___

{: .api-section }
### GetInventoryType

{: .code-example }
`GetInventoryType(): TSNumber<uint32>`

Returns the inventory type of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 inventoryType

___

{: .api-section }
### GetItemLevel

{: .code-example }
`GetItemLevel(): TSNumber<uint32>`

Returns the [Item]s level

**Returns:** 
`TSNumber`<`uint32`\>

uint32 itemLevel

___

{: .api-section }
### GetItemSet

{: .code-example }
`GetItemSet(): TSNumber<uint32>`

Returns the item set ID of this [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 itemSetId

___

{: .api-section }
### GetMaxStackCount

{: .code-example }
`GetMaxStackCount(): TSNumber<uint32>`

Returns the [Item]s max stack count

**Returns:** 
`TSNumber`<`uint32`\>

uint32 maxCount

___

{: .api-section }
### GetName

{: .code-example }
`GetName(): string`

Returns the name of the [Item]

**Returns:** 
`string`

string name

___

{: .api-section }
### GetOwner

{: .code-example }
`GetOwner(): TSPlayer`

Returns the [Player] who currently owns the [Item]

**Returns:** 
[`TSPlayer`](TSPlayer)

player : the [Player] who owns the [Item]

___

{: .api-section }
### GetOwnerGUID

{: .code-example }
`GetOwnerGUID(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetQuality

{: .code-example }
`GetQuality(): TSNumber<uint32>`

Returns the quality of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 quality

___

{: .api-section }
### GetRandomProperty

{: .code-example }
`GetRandomProperty(): TSNumber<uint32>`

Returns the random property ID of this [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 randomPropertyId

___

{: .api-section }
### GetRandomSuffix

{: .code-example }
`GetRandomSuffix(): TSNumber<int32>`

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetRequiredLevel

{: .code-example }
`GetRequiredLevel(): TSNumber<uint32>`

Returns the minimum level required to use this [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 requiredLevel

___

{: .api-section }
### GetSellPrice

{: .code-example }
`GetSellPrice(): TSNumber<uint32>`

Returns the sell price of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 price

___

{: .api-section }
### GetSlot

{: .code-example }
`GetSlot(): TSNumber<uint8>`

Returns the [Item]s current slot

**Returns:** 
`TSNumber`<`uint8`\>

uint8 slot

___

{: .api-section }
### GetSpellID

{: .code-example }
`GetSpellID(index): TSNumber<uint32>`

Returns the spell ID tied to the [Item] by spell index

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 spellId : the id of the spell

___

{: .api-section }
### GetSpellTrigger

{: .code-example }
`GetSpellTrigger(index): TSNumber<uint32>`

Returns the spell trigger tied to the [Item] by spell index

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 spellTrigger : the spell trigger of the specified index

___

{: .api-section }
### GetStatsCount

{: .code-example }
`GetStatsCount(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetSubClass

{: .code-example }
`GetSubClass(): TSNumber<uint32>`

Returns subclass of the [Item]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 subClass

___

{: .api-section }
### GetTemplate

{: .code-example }
`GetTemplate(): TSItemTemplate`

**Returns:** 
[`TSItemTemplate`](TSItemTemplate)

___

{: .api-section }
### HasQuest

{: .code-example }
`HasQuest(quest): boolean`

Returns 'true' if the [Item] has the [Quest] specified tied to it, 'false' otherwise

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
### IsArmorVellum

{: .code-example }
`IsArmorVellum(): boolean`

Returns 'true' if the [Item] is an armor vellum, 'false' otherwise

**Returns:** 
`boolean`

bool isArmorVellum

___

{: .api-section }
### IsBag

{: .code-example }
`IsBag(): boolean`

Returns 'true' if the [Item] is a bag, 'false' otherwise

**Returns:** 
`boolean`

bool isBag

___

{: .api-section }
### IsBoundAccountWide

{: .code-example }
`IsBoundAccountWide(): boolean`

Returns 'true' if the [Item] is account bound, 'false' otherwise

**Returns:** 
`boolean`

bool isAccountBound

___

{: .api-section }
### IsBoundByEnchant

{: .code-example }
`IsBoundByEnchant(): boolean`

Returns 'true' if the [Item] is bound to a [Player] by an enchant, 'false' otehrwise

**Returns:** 
`boolean`

bool isBoundByEnchant

___

{: .api-section }
### IsBroken

{: .code-example }
`IsBroken(): boolean`

Returns 'true' if the [Item] is broken, 'false' otherwise

**Returns:** 
`boolean`

bool isBroken

___

{: .api-section }
### IsConjuredConsumable

{: .code-example }
`IsConjuredConsumable(): boolean`

Returns 'true' if the [Item] is a conjured consumable, 'false' otherwise

**Returns:** 
`boolean`

bool isConjuredConsumable

___

{: .api-section }
### IsCurrencyToken

{: .code-example }
`IsCurrencyToken(): boolean`

Returns 'true' if the [Item] is a currency token, 'false' otherwise

**Returns:** 
`boolean`

bool isCurrencyToken

___

{: .api-section }
### IsEquipped

{: .code-example }
`IsEquipped(): boolean`

Returns 'true' if the [Item] is currently equipped, 'false' otherwise

**Returns:** 
`boolean`

bool isEquipped

___

{: .api-section }
### IsInBag

{: .code-example }
`IsInBag(): boolean`

Returns 'true' if the [Item] is currently in a bag, 'false' otherwise

**Returns:** 
`boolean`

bool isInBag

___

{: .api-section }
### IsInTrade

{: .code-example }
`IsInTrade(): boolean`

Returns 'true' if the [Item] is currently in a trade window, 'false' otherwise

**Returns:** 
`boolean`

bool isInTrade

___

{: .api-section }
### IsLocked

{: .code-example }
`IsLocked(): boolean`

Returns 'true' if the [Item] is locked, 'false' otherwise

**Returns:** 
`boolean`

bool isLocked

___

{: .api-section }
### IsNotBoundToPlayer

{: .code-example }
`IsNotBoundToPlayer(player): boolean`

Returns 'true' if the [Item] is not bound to the [Player] specified, 'false' otherwise

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player` | [`TSPlayer`](TSPlayer) | : the [Player] object to check the item against |

**Returns:** 
`boolean`

bool isNotBound

___

{: .api-section }
### IsNotEmptyBag

{: .code-example }
`IsNotEmptyBag(): boolean`

Returns 'true' if the [Item] is a not an empty bag, 'false' otherwise

**Returns:** 
`boolean`

bool isNotEmptyBag

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
### IsPotion

{: .code-example }
`IsPotion(): boolean`

Returns 'true' if the [Item] is a potion, 'false' otherwise

**Returns:** 
`boolean`

bool isPotion

___

{: .api-section }
### IsSoulBound

{: .code-example }
`IsSoulBound(): boolean`

Returns 'true' if the [Item] is soulbound, 'false' otherwise

**Returns:** 
`boolean`

bool isSoulBound

___

{: .api-section }
### IsWeaponVellum

{: .code-example }
`IsWeaponVellum(): boolean`

Returns 'true' if the [Item] is a weapon vellum, 'false' otherwise

**Returns:** 
`boolean`

bool isWeaponVellum

___

{: .api-section }
### SaveToDB

{: .code-example }
`SaveToDB(): void`

Saves the [Item] to the database

**Returns:** 
`void`

___

{: .api-section }
### SetBinding

{: .code-example }
`SetBinding(soulbound): void`

Sets the binding of the [Item] to 'true' or 'false'

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `soulbound` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetCount

{: .code-example }
`SetCount(count): void`

Sets the stack count of the [Item]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `count` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetEnchantment

{: .code-example }
`SetEnchantment(enchant, slot): boolean`

Sets the specified enchantment of the [Item] to the specified slot

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `enchant` | `uint32` |
| `slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |

**Returns:** 
`boolean`

bool enchantmentSuccess : if enchantment is successfully set to specified (EnchantmentSlot)slot, returns 'true', otherwise 'false'

___

{: .api-section }
### SetEnchantmentCharges

{: .code-example }
`SetEnchantmentCharges(slot, charges): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |
| `charges` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetEnchantmentDuration

{: .code-example }
`SetEnchantmentDuration(slot, duration): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EnchantmentSlot`](../enums/EnchantmentSlot) |
| `duration` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetOwner

{: .code-example }
`SetOwner(player): void`

Sets the [Player] specified as the owner of the [Item]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player` | [`TSPlayer`](TSPlayer) | : the [Player] specified |

**Returns:** 
`void`

___

{: .api-section }
### UpdateItemSuffixFactor

{: .code-example }
`UpdateItemSuffixFactor(): void`

**Returns:** 
`void`


## Inherited Members
[`GetBool`](./TSObject#getbool) [`GetCoreByte`](./TSObject#getcorebyte) [`GetCoreFloat`](./TSObject#getcorefloat) [`GetCoreInt32`](./TSObject#getcoreint32) [`GetCoreUInt16`](./TSObject#getcoreuint16) [`GetCoreUInt32`](./TSObject#getcoreuint32) [`GetCoreUInt64`](./TSObject#getcoreuint64) [`GetEffectiveOwner`](./TSObject#geteffectiveowner) [`GetEntry`](./TSObject#getentry) [`GetFloat`](./TSObject#getfloat) [`GetGUID`](./TSObject#getguid) [`GetGUIDLow`](./TSObject#getguidlow) [`GetGUIDNumber`](./TSObject#getguidnumber) [`GetInt`](./TSObject#getint) [`GetJsonArray`](./TSObject#getjsonarray) [`GetJsonObject`](./TSObject#getjsonobject) [`GetNumber`](./TSObject#getnumber) [`GetObject`](./TSObject#getobject) [`GetRawDouble`](./TSObject#getrawdouble) [`GetRawFloat`](./TSObject#getrawfloat) [`GetRawInt16`](./TSObject#getrawint16) [`GetRawInt32`](./TSObject#getrawint32) [`GetRawInt64`](./TSObject#getrawint64) [`GetRawInt8`](./TSObject#getrawint8) [`GetRawUInt16`](./TSObject#getrawuint16) [`GetRawUInt32`](./TSObject#getrawuint32) [`GetRawUInt64`](./TSObject#getrawuint64) [`GetRawUInt8`](./TSObject#getrawuint8) [`GetScale`](./TSObject#getscale) [`GetString`](./TSObject#getstring) [`GetTypeID`](./TSObject#gettypeid) [`GetUInt`](./TSObject#getuint) [`GetUInt64`](./TSObject#getuint64) [`HasBool`](./TSObject#hasbool) [`HasFlag`](./TSObject#hasflag) [`HasFloat`](./TSObject#hasfloat) [`HasGUIDNumber`](./TSObject#hasguidnumber) [`HasInt`](./TSObject#hasint) [`HasJsonArray`](./TSObject#hasjsonarray) [`HasJsonObject`](./TSObject#hasjsonobject) [`HasNumber`](./TSObject#hasnumber) [`HasObject`](./TSObject#hasobject) [`HasString`](./TSObject#hasstring) [`HasUInt`](./TSObject#hasuint) [`HasUInt64`](./TSObject#hasuint64) [`IsCorpse`](./TSObject#iscorpse) [`IsCreature`](./TSObject#iscreature) [`IsGameObject`](./TSObject#isgameobject) [`IsInWorld`](./TSObject#isinworld) [`IsItem`](./TSObject#isitem) [`IsPlayer`](./TSObject#isplayer) [`IsUnit`](./TSObject#isunit) [`RemoveFlag`](./TSObject#removeflag) [`SetBool`](./TSObject#setbool) [`SetCoreByte`](./TSObject#setcorebyte) [`SetCoreFloat`](./TSObject#setcorefloat) [`SetCoreInt16`](./TSObject#setcoreint16) [`SetCoreInt32`](./TSObject#setcoreint32) [`SetCoreUInt16`](./TSObject#setcoreuint16) [`SetCoreUInt32`](./TSObject#setcoreuint32) [`SetCoreUInt64`](./TSObject#setcoreuint64) [`SetFlag`](./TSObject#setflag) [`SetFloat`](./TSObject#setfloat) [`SetGUIDNumber`](./TSObject#setguidnumber) [`SetInt`](./TSObject#setint) [`SetJsonArray`](./TSObject#setjsonarray) [`SetJsonObject`](./TSObject#setjsonobject) [`SetNumber`](./TSObject#setnumber) [`SetObject`](./TSObject#setobject) [`SetRawDouble`](./TSObject#setrawdouble) [`SetRawFloat`](./TSObject#setrawfloat) [`SetRawInt16`](./TSObject#setrawint16) [`SetRawInt32`](./TSObject#setrawint32) [`SetRawInt64`](./TSObject#setrawint64) [`SetRawInt8`](./TSObject#setrawint8) [`SetRawUInt16`](./TSObject#setrawuint16) [`SetRawUInt32`](./TSObject#setrawuint32) [`SetRawUInt64`](./TSObject#setrawuint64) [`SetRawUInt8`](./TSObject#setrawuint8) [`SetScale`](./TSObject#setscale) [`SetString`](./TSObject#setstring) [`SetUInt`](./TSObject#setuint) [`SetUInt64`](./TSObject#setuint64) [`ToCorpse`](./TSObject#tocorpse) [`ToCreature`](./TSObject#tocreature) [`ToGameObject`](./TSObject#togameobject) [`ToItem`](./TSObject#toitem) [`ToPlayer`](./TSObject#toplayer) [`ToUnit`](./TSObject#tounit) [`UpdateCoreUInt32`](./TSObject#updatecoreuint32)
