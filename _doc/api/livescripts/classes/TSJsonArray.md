---
title: TSJsonArray
---


## Accessors

{: .api-section }
### length

• `get` **length**(): `TSNumber`<`uint32`\>

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetGUIDNumber

{: .code-example }
`GetGUIDNumber(index, def?): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `def?` | [`TSGUID`](TSGUID) |

**Returns:** 
`string`

___

{: .api-section }
### GetJsonArray

{: .code-example }
`GetJsonArray(index, def?): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `def?` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### GetJsonObject

{: .code-example }
`GetJsonObject(index, def?): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `def?` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### GetNumber

{: .code-example }
`GetNumber(index, def?): TSNumber<double>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `def?` | `double` |

**Returns:** 
`TSNumber`<`double`\>

___

{: .api-section }
### GetString

{: .code-example }
`GetString(index, def?): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `def?` | `string` |

**Returns:** 
`string`

___

{: .api-section }
### HasBool

{: .code-example }
`HasBool(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasGUIDNumber

{: .code-example }
`HasGUIDNumber(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasJsonArray

{: .code-example }
`HasJsonArray(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasJsonObject

{: .code-example }
`HasJsonObject(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasNull

{: .code-example }
`HasNull(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasNumber

{: .code-example }
`HasNumber(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### HasString

{: .code-example }
`HasString(index): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
`boolean`

___

{: .api-section }
### InsertBool

{: .code-example }
`InsertBool(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | `boolean` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### InsertGUIDNumber

{: .code-example }
`InsertGUIDNumber(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | [`TSGUID`](TSGUID) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### InsertJsonArray

{: .code-example }
`InsertJsonArray(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### InsertJsonObject

{: .code-example }
`InsertJsonObject(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### InsertNull

{: .code-example }
`InsertNull(index): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### InsertNumber

{: .code-example }
`InsertNumber(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | `double` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### InsertString

{: .code-example }
`InsertString(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | `string` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### IsValid

{: .code-example }
`IsValid(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### PushBool

{: .code-example }
`PushBool(value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `boolean` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### PushGUIDNumber

{: .code-example }
`PushGUIDNumber(value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | [`TSGUID`](TSGUID) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### PushJsonArray

{: .code-example }
`PushJsonArray(value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### PushJsonObject

{: .code-example }
`PushJsonObject(value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### PushNull

{: .code-example }
`PushNull(index): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### PushNumber

{: .code-example }
`PushNumber(value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `double` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### PushString

{: .code-example }
`PushString(value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `string` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### Remove

{: .code-example }
`Remove(index): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetBool

{: .code-example }
`SetBool(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | `boolean` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetGUIDNumber

{: .code-example }
`SetGUIDNumber(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | [`TSGUID`](TSGUID) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetJsonArray

{: .code-example }
`SetJsonArray(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetJsonObject

{: .code-example }
`SetJsonObject(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetNull

{: .code-example }
`SetNull(index): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetNumber

{: .code-example }
`SetNumber(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | `double` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### SetString

{: .code-example }
`SetString(index, value): TSJsonArray`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `index` | `uint32` |
| `value` | `string` |

**Returns:** 
[`TSJsonArray`](TSJsonArray)

___

{: .api-section }
### toString

{: .code-example }
`toString(indents?): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `indents?` | `uint32` |

**Returns:** 
`string`

