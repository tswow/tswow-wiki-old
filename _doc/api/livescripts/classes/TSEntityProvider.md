---
title: TSEntityProvider
---


## Hierarchy

- **`TSEntityProvider`**

  ↳ [`TSGameObjectTemplate`](TSGameObjectTemplate)

  ↳ [`TSCreatureTemplate`](TSCreatureTemplate)

  ↳ [`TSAura`](TSAura)

  ↳ [`TSAuraEffect`](TSAuraEffect)

  ↳ [`TSAuraApplication`](TSAuraApplication)

  ↳ [`TSMap`](TSMap)

  ↳ [`TSBattlegroundPlayer`](TSBattlegroundPlayer)

  ↳ [`TSSpell`](TSSpell)

  ↳ [`TSObject`](TSObject)

  ↳ [`TSItemTemplate`](TSItemTemplate)

  ↳ [`TSSpellInfo`](TSSpellInfo)

## Methods

{: .api-section }
### GetBool

{: .code-example }
`GetBool(key, def?): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `boolean` |

**Returns:** 
`boolean`

___

{: .api-section }
### GetFloat

{: .code-example }
`GetFloat(key, def?): TSNumber<double>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `float` |

**Returns:** 
`TSNumber`<`double`\>

___

{: .api-section }
### GetGUIDNumber

{: .code-example }
`GetGUIDNumber(key?, def?): TSGUID`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key?` | `string` |
| `def?` | [`TSGUID`](TSGUID) |

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetInt

{: .code-example }
`GetInt(key, def?): TSNumber<int32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `int32` |

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetJsonArray

{: .code-example }
`GetJsonArray(key, def?): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### GetJsonObject

{: .code-example }
`GetJsonObject(key, def?): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### GetNumber

{: .code-example }
`GetNumber(key, def?): TSNumber<double>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `double` |

**Returns:** 
`TSNumber`<`double`\>

___

{: .api-section }
### GetObject

{: .code-example }
`GetObject<T>(key, value): T`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `T` |

**Returns:** 
`T`

___

{: .api-section }
### GetRawDouble

{: .code-example }
`GetRawDouble(offset): TSNumber<double>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`double`\>

___

{: .api-section }
### GetRawFloat

{: .code-example }
`GetRawFloat(offset): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetRawInt16

{: .code-example }
`GetRawInt16(offset): TSNumber<int16>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`int16`\>

___

{: .api-section }
### GetRawInt32

{: .code-example }
`GetRawInt32(offset): TSNumber<int32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### GetRawInt64

{: .code-example }
`GetRawInt64(offset): TSNumber<int64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`int64`\>

___

{: .api-section }
### GetRawInt8

{: .code-example }
`GetRawInt8(offset): TSNumber<int8>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`int8`\>

___

{: .api-section }
### GetRawUInt16

{: .code-example }
`GetRawUInt16(offset): TSNumber<uint16>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`uint16`\>

___

{: .api-section }
### GetRawUInt32

{: .code-example }
`GetRawUInt32(offset): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetRawUInt64

{: .code-example }
`GetRawUInt64(offset): TSNumber<uint64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`uint64`\>

___

{: .api-section }
### GetRawUInt8

{: .code-example }
`GetRawUInt8(offset): TSNumber<uint8>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetString

{: .code-example }
`GetString(key, def?): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `string` |

**Returns:** 
`string`

___

{: .api-section }
### GetUInt

{: .code-example }
`GetUInt(key, def?): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetUInt64

{: .code-example }
`GetUInt64(key, def?): TSNumber<uint64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `uint64` |

**Returns:** 
`TSNumber`<`uint64`\>

___

{: .api-section }
### HasBool

{: .code-example }
`HasBool(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasFloat

{: .code-example }
`HasFloat(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasGUIDNumber

{: .code-example }
`HasGUIDNumber(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasInt

{: .code-example }
`HasInt(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasJsonArray

{: .code-example }
`HasJsonArray(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasJsonObject

{: .code-example }
`HasJsonObject(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasNumber

{: .code-example }
`HasNumber(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasObject

{: .code-example }
`HasObject(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasString

{: .code-example }
`HasString(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasUInt

{: .code-example }
`HasUInt(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasUInt64

{: .code-example }
`HasUInt64(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### SetBool

{: .code-example }
`SetBool(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetFloat

{: .code-example }
`SetFloat(key, value): TSNumber<double>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `double` |

**Returns:** 
`TSNumber`<`double`\>

___

{: .api-section }
### SetGUIDNumber

{: .code-example }
`SetGUIDNumber(key, value): TSGUID`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | [`TSGUID`](TSGUID) |

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### SetInt

{: .code-example }
`SetInt(key, value): TSNumber<int32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `int32` |

**Returns:** 
`TSNumber`<`int32`\>

___

{: .api-section }
### SetJsonArray

{: .code-example }
`SetJsonArray(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
`void`

___

{: .api-section }
### SetJsonObject

{: .code-example }
`SetJsonObject(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
`void`

___

{: .api-section }
### SetNumber

{: .code-example }
`SetNumber(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `double` |

**Returns:** 
`void`

___

{: .api-section }
### SetObject

{: .code-example }
`SetObject<T>(key, obj): T`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `obj` | `T` |

**Returns:** 
`T`

___

{: .api-section }
### SetRawDouble

{: .code-example }
`SetRawDouble(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `double` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawFloat

{: .code-example }
`SetRawFloat(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawInt16

{: .code-example }
`SetRawInt16(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `int16` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawInt32

{: .code-example }
`SetRawInt32(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawInt64

{: .code-example }
`SetRawInt64(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `int64` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawInt8

{: .code-example }
`SetRawInt8(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `int8` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawUInt16

{: .code-example }
`SetRawUInt16(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `uint16` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawUInt32

{: .code-example }
`SetRawUInt32(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawUInt64

{: .code-example }
`SetRawUInt64(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SetRawUInt8

{: .code-example }
`SetRawUInt8(offset, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offset` | `uint8` |
| `value` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetString

{: .code-example }
`SetString(key, value): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `string` |

**Returns:** 
`string`

___

{: .api-section }
### SetUInt

{: .code-example }
`SetUInt(key, value): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### SetUInt64

{: .code-example }
`SetUInt64(key, value): TSNumber<uint64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `uint64` |

**Returns:** 
`TSNumber`<`uint64`\>

