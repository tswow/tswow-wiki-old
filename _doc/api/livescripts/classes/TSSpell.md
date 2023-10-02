---
title: TSSpell
---


## Hierarchy

- [`TSEntityProvider`](TSEntityProvider)

  ↳ **`TSSpell`**

## Methods

{: .api-section }
### Cancel

{: .code-example }
`Cancel(): void`

Cancels the [Spell].

**Returns:** 
`void`

___

{: .api-section }
### Cast

{: .code-example }
`Cast(skipCheck): void`

Casts the [Spell].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `skipCheck` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### Finish

{: .code-example }
`Finish(): void`

Finishes the [Spell].

**Returns:** 
`void`

___

{: .api-section }
### GetAuraStackAmountOverride

{: .code-example }
`GetAuraStackAmountOverride(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetBasePoints

{: .code-example }
`GetBasePoints(index): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetCastTime

{: .code-example }
`GetCastTime(): TSNumber<int32>`

Returns the cast time of the [Spell].

**Returns:** 
`TSNumber`<`int32`\>

int32 castTime

___

{: .api-section }
### GetCaster

{: .code-example }
`GetCaster(): TSWorldObject`

Returns the [Unit] that casted the [Spell].

**Returns:** 
[`TSWorldObject`](TSWorldObject)

caster

___

{: .api-section }
### GetCritChanceOverride

{: .code-example }
`GetCritChanceOverride(): TSNumber<float>`

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetDuration

{: .code-example }
`GetDuration(): TSNumber<int32>`

Returns the spell duration of the [Spell].

**Returns:** 
`TSNumber`<`int32`\>

int32 duration

___

{: .api-section }
### GetEntry

{: .code-example }
`GetEntry(): TSNumber<uint32>`

Returns the entry ID of the [Spell].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 entryId

___

{: .api-section }
### GetGlyphSlot

{: .code-example }
`GetGlyphSlot(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetMaxAffectedTargetsOverride

{: .code-example }
`GetMaxAffectedTargetsOverride(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetOriginalCaster

{: .code-example }
`GetOriginalCaster(): TSWorldObject`

Returns the [WorldObject] that originally casted the [Spell].

**Returns:** 
[`TSWorldObject`](TSWorldObject)

original caster

___

{: .api-section }
### GetOriginalOrCurrentCaster

{: .code-example }
`GetOriginalOrCurrentCaster(): TSWorldObject`

Returns the [WorldObject] that originally casted the [Spell], or the current caster.

**Returns:** 
[`TSWorldObject`](TSWorldObject)

original or current caster

___

{: .api-section }
### GetPowerCost

{: .code-example }
`GetPowerCost(): TSNumber<uint32>`

Returns the power cost of the [Spell].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 powerCost

___

{: .api-section }
### GetRadiusModOverride

{: .code-example }
`GetRadiusModOverride(): TSNumber<float>`

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetSpellInfo

{: .code-example }
`GetSpellInfo(): TSSpellInfo`

**Returns:** 
[`TSSpellInfo`](TSSpellInfo)

___

{: .api-section }
### GetTarget

{: .code-example }
`GetTarget(): TSObject`

Returns the target [Object] of the [Spell].

The target can be any of the following [Object] types:
- [Player]
- [Creature]
- [GameObject]
- [Item]
- [Corpse]

**Returns:** 
[`TSObject`](TSObject)

target

___

{: .api-section }
### GetTargetDest

{: .code-example }
`GetTargetDest(): TSPosition`

Returns the target destination coordinates of the [Spell].

**Returns:** 
[`TSPosition`](TSPosition)

float x : x coordinate of the [Spell]

___

{: .api-section }
### IsAutoRepeat

{: .code-example }
`IsAutoRepeat(): boolean`

Returns `true` if the [Spell] is automatically repeating, `false` otherwise.

**Returns:** 
`boolean`

bool isAutoRepeating

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### SetAutoRepeat

{: .code-example }
`SetAutoRepeat(repeat): void`

Sets the [Spell] to automatically repeat.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `repeat` | `boolean` |

**Returns:** 
`void`

___

## Inherited Members
[`GetBool`](./TSEntityProvider#getbool) [`GetFloat`](./TSEntityProvider#getfloat) [`GetGUIDNumber`](./TSEntityProvider#getguidnumber) [`GetInt`](./TSEntityProvider#getint) [`GetJsonArray`](./TSEntityProvider#getjsonarray) [`GetJsonObject`](./TSEntityProvider#getjsonobject) [`GetNumber`](./TSEntityProvider#getnumber) [`GetObject`](./TSEntityProvider#getobject) [`GetRawDouble`](./TSEntityProvider#getrawdouble) [`GetRawFloat`](./TSEntityProvider#getrawfloat) [`GetRawInt16`](./TSEntityProvider#getrawint16) [`GetRawInt32`](./TSEntityProvider#getrawint32) [`GetRawInt64`](./TSEntityProvider#getrawint64) [`GetRawInt8`](./TSEntityProvider#getrawint8) [`GetRawUInt16`](./TSEntityProvider#getrawuint16) [`GetRawUInt32`](./TSEntityProvider#getrawuint32) [`GetRawUInt64`](./TSEntityProvider#getrawuint64) [`GetRawUInt8`](./TSEntityProvider#getrawuint8) [`GetString`](./TSEntityProvider#getstring) [`GetUInt`](./TSEntityProvider#getuint) [`GetUInt64`](./TSEntityProvider#getuint64) [`HasBool`](./TSEntityProvider#hasbool) [`HasFloat`](./TSEntityProvider#hasfloat) [`HasGUIDNumber`](./TSEntityProvider#hasguidnumber) [`HasInt`](./TSEntityProvider#hasint) [`HasJsonArray`](./TSEntityProvider#hasjsonarray) [`HasJsonObject`](./TSEntityProvider#hasjsonobject) [`HasNumber`](./TSEntityProvider#hasnumber) [`HasObject`](./TSEntityProvider#hasobject) [`HasString`](./TSEntityProvider#hasstring) [`HasUInt`](./TSEntityProvider#hasuint) [`HasUInt64`](./TSEntityProvider#hasuint64) [`SetBool`](./TSEntityProvider#setbool) [`SetFloat`](./TSEntityProvider#setfloat) [`SetGUIDNumber`](./TSEntityProvider#setguidnumber) [`SetInt`](./TSEntityProvider#setint) [`SetJsonArray`](./TSEntityProvider#setjsonarray) [`SetJsonObject`](./TSEntityProvider#setjsonobject) [`SetNumber`](./TSEntityProvider#setnumber) [`SetObject`](./TSEntityProvider#setobject) [`SetRawDouble`](./TSEntityProvider#setrawdouble) [`SetRawFloat`](./TSEntityProvider#setrawfloat) [`SetRawInt16`](./TSEntityProvider#setrawint16) [`SetRawInt32`](./TSEntityProvider#setrawint32) [`SetRawInt64`](./TSEntityProvider#setrawint64) [`SetRawInt8`](./TSEntityProvider#setrawint8) [`SetRawUInt16`](./TSEntityProvider#setrawuint16) [`SetRawUInt32`](./TSEntityProvider#setrawuint32) [`SetRawUInt64`](./TSEntityProvider#setrawuint64) [`SetRawUInt8`](./TSEntityProvider#setrawuint8) [`SetString`](./TSEntityProvider#setstring) [`SetUInt`](./TSEntityProvider#setuint) [`SetUInt64`](./TSEntityProvider#setuint64)
