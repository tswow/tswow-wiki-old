---
title: TSObject
---


## Hierarchy

- [`TSEntityProvider`](TSEntityProvider)

  ↳ **`TSObject`**

  ↳↳ [`TSItem`](TSItem)

  ↳↳ [`TSWorldObject`](TSWorldObject)

## Methods

{: .api-section }
### GetCoreByte

{: .code-example }
`GetCoreByte(index, offset): TSNumber<uint8>`

Returns the data at the specified index and offset, casted to an unsigned 8-bit integer.

E.g. if you want the second byte at index 10, you would pass in 1 as the offset.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`uint8`\>

uint8 value

___

{: .api-section }
### GetCoreFloat

{: .code-example }
`GetCoreFloat(index): TSNumber<float>`

Returns the data at the specified index, casted to a single-precision floating point value.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |

**Returns:** 
`TSNumber`<`float`\>

float value

___

{: .api-section }
### GetCoreInt32

{: .code-example }
`GetCoreInt32(index): TSNumber<int32>`

Returns the data at the specified index, casted to a signed 32-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |

**Returns:** 
`TSNumber`<`int32`\>

int32 value

___

{: .api-section }
### GetCoreUInt16

{: .code-example }
`GetCoreUInt16(index, offset): TSNumber<uint16>`

Returns the data at the specified index and offset, casted to a signed 16-bit integer.

E.g. if you want the second half-word at index 10, you would pass in 1 as the offset.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`uint16`\>

uint16 value

___

{: .api-section }
### GetCoreUInt32

{: .code-example }
`GetCoreUInt32(index): TSNumber<uint32>`

Returns the data at the specified index, casted to a unsigned 32-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |

**Returns:** 
`TSNumber`<`uint32`\>

uint32 value

___

{: .api-section }
### GetCoreUInt64

{: .code-example }
`GetCoreUInt64(index): TSNumber<uint64>`

Returns the data at the specified index, casted to an unsigned 64-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |

**Returns:** 
`TSNumber`<`uint64`\>

uint64 value

___

{: .api-section }
### GetEffectiveOwner

{: .code-example }
`GetEffectiveOwner(): TSUnit`

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### GetEntry

{: .code-example }
`GetEntry(): TSNumber<uint32>`

Returns the entry of the [Object].

[Player]s do not have an "entry".

**Returns:** 
`TSNumber`<`uint32`\>

uint32 entry

___

{: .api-section }
### GetGUID

{: .code-example }
`GetGUID(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetGUIDLow

{: .code-example }
`GetGUIDLow(): TSNumber<uint32>`

Returns the low-part of the [Object]'s GUID.

On TrinityCore all low GUIDs are different for all objects of the same type.
For example creatures in instances are assigned new GUIDs when the Map is created.

On MaNGOS and cMaNGOS low GUIDs are unique only on the same map.
For example creatures in instances use the same low GUID assigned for that spawn in the database.
This is why to identify a creature you have to know the instanceId and low GUID. See [Map:GetIntstanceId]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 guidLow

___

{: .api-section }
### GetScale

{: .code-example }
`GetScale(): TSNumber<float>`

Returns the scale/size of the [Object].

This affects the size of a [WorldObject] in-game, but [Item]s don't have a "scale".

**Returns:** 
`TSNumber`<`float`\>

float scale

___

{: .api-section }
### GetTypeID

{: .code-example }
`GetTypeID(): TypeID`

Returns the TypeId of the [Object].

    enum TypeID
    {
        TYPEID_OBJECT        = 0,
        TYPEID_ITEM          = 1,
        TYPEID_CONTAINER     = 2,
        TYPEID_UNIT          = 3,
        TYPEID_PLAYER        = 4,
        TYPEID_GAMEOBJECT    = 5,
        TYPEID_DYNAMICOBJECT = 6,
        TYPEID_CORPSE        = 7

**Returns:** 
[`TypeID`](../enums/TypeID)

uint8 typeID

___

{: .api-section }
### HasFlag

{: .code-example }
`HasFlag(index, flag): boolean`

Returns `true` if the specified flag is set, otherwise `false`.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint16` |
| `flag` | `uint32` |

**Returns:** 
`boolean`

bool hasFlag

___

{: .api-section }
### IsCorpse

{: .code-example }
`IsCorpse(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsCreature

{: .code-example }
`IsCreature(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsGameObject

{: .code-example }
`IsGameObject(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsInWorld

{: .code-example }
`IsInWorld(): boolean`

Returns `true` if the [Object] has been added to its [Map], otherwise `false`.

**Returns:** 
`boolean`

bool inWorld

___

{: .api-section }
### IsItem

{: .code-example }
`IsItem(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsPlayer

{: .code-example }
`IsPlayer(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsUnit

{: .code-example }
`IsUnit(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### RemoveFlag

{: .code-example }
`RemoveFlag(index, flag): void`

Removes a flag from the value at the specified index.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint16` |
| `flag` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreByte

{: .code-example }
`SetCoreByte(index, offset, value): void`

Sets the data at the specified index and offset to the given value, converted to an unsigned 8-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `offset` | `uint8` |
| `value` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreFloat

{: .code-example }
`SetCoreFloat(index, value): void`

Sets the data at the specified index to the given value, converted to a single-precision floating point value.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `value` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreInt16

{: .code-example }
`SetCoreInt16(index, offset, value): void`

Sets the data at the specified index to the given value, converted to a signed 16-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `offset` | `uint8` |
| `value` | `int16` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreInt32

{: .code-example }
`SetCoreInt32(index, value): void`

Sets the data at the specified index to the given value, converted to a signed 32-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `value` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreUInt16

{: .code-example }
`SetCoreUInt16(index, offset, value): void`

Sets the data at the specified index to the given value, converted to an unsigned 16-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `offset` | `uint8` |
| `value` | `uint16` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreUInt32

{: .code-example }
`SetCoreUInt32(index, value): void`

Sets the data at the specified index to the given value, converted to an unsigned 32-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `value` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetCoreUInt64

{: .code-example }
`SetCoreUInt64(index, value): void`

Sets the data at the specified index to the given value, converted to an unsigned 64-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `value` | `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SetFlag

{: .code-example }
`SetFlag(index, flag): void`

Sets the specified flag in the data value at the specified index.

If the flag was already set, it remains set.

To remove a flag, use [Object:RemoveFlag].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint16` |
| `flag` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetScale

{: .code-example }
`SetScale(size): void`

Sets the [Object]'s scale/size to the given value.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `size` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### ToCorpse

{: .code-example }
`ToCorpse(): TSCorpse`

**Returns:** 
[`TSCorpse`](TSCorpse)

___

{: .api-section }
### ToCreature

{: .code-example }
`ToCreature(): TSCreature`

**Returns:** 
[`TSCreature`](TSCreature)

___

{: .api-section }
### ToGameObject

{: .code-example }
`ToGameObject(): TSGameObject`

**Returns:** 
[`TSGameObject`](TSGameObject)

___

{: .api-section }
### ToItem

{: .code-example }
`ToItem(): TSItem`

**Returns:** 
[`TSItem`](TSItem)

___

{: .api-section }
### ToPlayer

{: .code-example }
`ToPlayer(): TSPlayer`

**Returns:** 
[`TSPlayer`](TSPlayer)

___

{: .api-section }
### ToUnit

{: .code-example }
`ToUnit(): TSUnit`

**Returns:** 
[`TSUnit`](TSUnit)

___

{: .api-section }
### UpdateCoreUInt32

{: .code-example }
`UpdateCoreUInt32(index, value): void`

Sets the data at the specified index to the given value, converted to an unsigned 32-bit integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `UpdateFields` |
| `value` | `uint32` |

**Returns:** 
`void`


## Inherited Members
[`GetBool`](./TSEntityProvider#getbool) [`GetFloat`](./TSEntityProvider#getfloat) [`GetGUIDNumber`](./TSEntityProvider#getguidnumber) [`GetInt`](./TSEntityProvider#getint) [`GetJsonArray`](./TSEntityProvider#getjsonarray) [`GetJsonObject`](./TSEntityProvider#getjsonobject) [`GetNumber`](./TSEntityProvider#getnumber) [`GetObject`](./TSEntityProvider#getobject) [`GetRawDouble`](./TSEntityProvider#getrawdouble) [`GetRawFloat`](./TSEntityProvider#getrawfloat) [`GetRawInt16`](./TSEntityProvider#getrawint16) [`GetRawInt32`](./TSEntityProvider#getrawint32) [`GetRawInt64`](./TSEntityProvider#getrawint64) [`GetRawInt8`](./TSEntityProvider#getrawint8) [`GetRawUInt16`](./TSEntityProvider#getrawuint16) [`GetRawUInt32`](./TSEntityProvider#getrawuint32) [`GetRawUInt64`](./TSEntityProvider#getrawuint64) [`GetRawUInt8`](./TSEntityProvider#getrawuint8) [`GetString`](./TSEntityProvider#getstring) [`GetUInt`](./TSEntityProvider#getuint) [`GetUInt64`](./TSEntityProvider#getuint64) [`HasBool`](./TSEntityProvider#hasbool) [`HasFloat`](./TSEntityProvider#hasfloat) [`HasGUIDNumber`](./TSEntityProvider#hasguidnumber) [`HasInt`](./TSEntityProvider#hasint) [`HasJsonArray`](./TSEntityProvider#hasjsonarray) [`HasJsonObject`](./TSEntityProvider#hasjsonobject) [`HasNumber`](./TSEntityProvider#hasnumber) [`HasObject`](./TSEntityProvider#hasobject) [`HasString`](./TSEntityProvider#hasstring) [`HasUInt`](./TSEntityProvider#hasuint) [`HasUInt64`](./TSEntityProvider#hasuint64) [`SetBool`](./TSEntityProvider#setbool) [`SetFloat`](./TSEntityProvider#setfloat) [`SetGUIDNumber`](./TSEntityProvider#setguidnumber) [`SetInt`](./TSEntityProvider#setint) [`SetJsonArray`](./TSEntityProvider#setjsonarray) [`SetJsonObject`](./TSEntityProvider#setjsonobject) [`SetNumber`](./TSEntityProvider#setnumber) [`SetObject`](./TSEntityProvider#setobject) [`SetRawDouble`](./TSEntityProvider#setrawdouble) [`SetRawFloat`](./TSEntityProvider#setrawfloat) [`SetRawInt16`](./TSEntityProvider#setrawint16) [`SetRawInt32`](./TSEntityProvider#setrawint32) [`SetRawInt64`](./TSEntityProvider#setrawint64) [`SetRawInt8`](./TSEntityProvider#setrawint8) [`SetRawUInt16`](./TSEntityProvider#setrawuint16) [`SetRawUInt32`](./TSEntityProvider#setrawuint32) [`SetRawUInt64`](./TSEntityProvider#setrawuint64) [`SetRawUInt8`](./TSEntityProvider#setrawuint8) [`SetString`](./TSEntityProvider#setstring) [`SetUInt`](./TSEntityProvider#setuint) [`SetUInt64`](./TSEntityProvider#setuint64)
