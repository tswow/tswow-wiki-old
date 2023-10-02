---
title: TSAuraEffect
---


## Hierarchy

- [`TSEntityProvider`](TSEntityProvider)

  ↳ **`TSAuraEffect`**

## Methods

{: .api-section }
### GetAmount

{: .code-example }
`GetAmount(): TSNumber<int32>`

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetAmplitude

{: .code-example }
`GetAmplitude(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetAura

{: .code-example }
`GetAura(): TSAura`

**Returns:** 
[`TSAura`](TSAura)

___

{: .api-section }
### GetAuraType

{: .code-example }
`GetAuraType(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetCaster

{: .code-example }
`GetCaster(): TSUnit`

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### GetCasterGUID

{: .code-example }
`GetCasterGUID(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetEffectIndex

{: .code-example }
`GetEffectIndex(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetID

{: .code-example }
`GetID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetMiscValue

{: .code-example }
`GetMiscValue(): TSNumber<int32>`

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetMiscValueB

{: .code-example }
`GetMiscValueB(): TSNumber<int32>`

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetPeriodicTimer

{: .code-example }
`GetPeriodicTimer(): TSNumber<int32>`

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetRemainingTicks

{: .code-example }
`GetRemainingTicks(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetSpellInfo

{: .code-example }
`GetSpellInfo(): TSSpellInfo`

**Returns:** 
[`TSSpellInfo`](TSSpellInfo)

___

{: .api-section }
### GetTickNumber

{: .code-example }
`GetTickNumber(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetTotalTicks

{: .code-example }
`GetTotalTicks(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsPeriodic

{: .code-example }
`IsPeriodic(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### ResetPeriodic

{: .code-example }
`ResetPeriodic(): void`

**Returns:** 
`void`

___

{: .api-section }
### ResetTicks

{: .code-example }
`ResetTicks(): void`

**Returns:** 
`void`

___

{: .api-section }
### SetAmount

{: .code-example }
`SetAmount(amount): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `amount` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetPeriodicTimer

{: .code-example }
`SetPeriodicTimer(periodicTimer): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `periodicTimer` | `int32` |

**Returns:** 
`void`

___

## Inherited Members
[`GetBool`](./TSEntityProvider#getbool) [`GetFloat`](./TSEntityProvider#getfloat) [`GetGUIDNumber`](./TSEntityProvider#getguidnumber) [`GetInt`](./TSEntityProvider#getint) [`GetJsonArray`](./TSEntityProvider#getjsonarray) [`GetJsonObject`](./TSEntityProvider#getjsonobject) [`GetNumber`](./TSEntityProvider#getnumber) [`GetObject`](./TSEntityProvider#getobject) [`GetRawDouble`](./TSEntityProvider#getrawdouble) [`GetRawFloat`](./TSEntityProvider#getrawfloat) [`GetRawInt16`](./TSEntityProvider#getrawint16) [`GetRawInt32`](./TSEntityProvider#getrawint32) [`GetRawInt64`](./TSEntityProvider#getrawint64) [`GetRawInt8`](./TSEntityProvider#getrawint8) [`GetRawUInt16`](./TSEntityProvider#getrawuint16) [`GetRawUInt32`](./TSEntityProvider#getrawuint32) [`GetRawUInt64`](./TSEntityProvider#getrawuint64) [`GetRawUInt8`](./TSEntityProvider#getrawuint8) [`GetString`](./TSEntityProvider#getstring) [`GetUInt`](./TSEntityProvider#getuint) [`GetUInt64`](./TSEntityProvider#getuint64) [`HasBool`](./TSEntityProvider#hasbool) [`HasFloat`](./TSEntityProvider#hasfloat) [`HasGUIDNumber`](./TSEntityProvider#hasguidnumber) [`HasInt`](./TSEntityProvider#hasint) [`HasJsonArray`](./TSEntityProvider#hasjsonarray) [`HasJsonObject`](./TSEntityProvider#hasjsonobject) [`HasNumber`](./TSEntityProvider#hasnumber) [`HasObject`](./TSEntityProvider#hasobject) [`HasString`](./TSEntityProvider#hasstring) [`HasUInt`](./TSEntityProvider#hasuint) [`HasUInt64`](./TSEntityProvider#hasuint64) [`SetBool`](./TSEntityProvider#setbool) [`SetFloat`](./TSEntityProvider#setfloat) [`SetGUIDNumber`](./TSEntityProvider#setguidnumber) [`SetInt`](./TSEntityProvider#setint) [`SetJsonArray`](./TSEntityProvider#setjsonarray) [`SetJsonObject`](./TSEntityProvider#setjsonobject) [`SetNumber`](./TSEntityProvider#setnumber) [`SetObject`](./TSEntityProvider#setobject) [`SetRawDouble`](./TSEntityProvider#setrawdouble) [`SetRawFloat`](./TSEntityProvider#setrawfloat) [`SetRawInt16`](./TSEntityProvider#setrawint16) [`SetRawInt32`](./TSEntityProvider#setrawint32) [`SetRawInt64`](./TSEntityProvider#setrawint64) [`SetRawInt8`](./TSEntityProvider#setrawint8) [`SetRawUInt16`](./TSEntityProvider#setrawuint16) [`SetRawUInt32`](./TSEntityProvider#setrawuint32) [`SetRawUInt64`](./TSEntityProvider#setrawuint64) [`SetRawUInt8`](./TSEntityProvider#setrawuint8) [`SetString`](./TSEntityProvider#setstring) [`SetUInt`](./TSEntityProvider#setuint) [`SetUInt64`](./TSEntityProvider#setuint64)
