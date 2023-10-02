---
title: TSDBJsonProvider
---


## Hierarchy

- **`TSDBJsonProvider`**

  ↳ [`TSPlayer`](TSPlayer)

## Methods

{: .api-section }
### ClearDBJson

{: .code-example }
`ClearDBJson(): void`

**Returns:** 
`void`

___

{: .api-section }
### DeleteDBField

{: .code-example }
`DeleteDBField(key): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### DeleteDBJson

{: .code-example }
`DeleteDBJson(): void`

**Returns:** 
`void`

___

{: .api-section }
### GetDBArray

{: .code-example }
`GetDBArray(key, def?): TSJsonArray`

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
### GetDBBool

{: .code-example }
`GetDBBool(key, def?): boolean`

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
### GetDBFloat

{: .code-example }
`GetDBFloat(key, def?): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `float` |

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetDBInt32

{: .code-example }
`GetDBInt32(key, def?): TSNumber<int32>`

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
### GetDBInt64

{: .code-example }
`GetDBInt64(key, def?): TSNumber<int64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `def?` | `int64` |

**Returns:** 
`TSNumber`<`int64`\>

___

{: .api-section }
### GetDBNumber

{: .code-example }
`GetDBNumber(key, def?): TSNumber<double>`

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
### GetDBObject

{: .code-example }
`GetDBObject(key, def?): TSJsonObject`

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
### GetDBString

{: .code-example }
`GetDBString(key, def?): string`

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
### GetDBUInt32

{: .code-example }
`GetDBUInt32(key, def?): TSNumber<uint32>`

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
### GetDBUInt64

{: .code-example }
`GetDBUInt64(key, def?): TSNumber<uint64>`

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
### LoadDBJson

{: .code-example }
`LoadDBJson(): void`

**Returns:** 
`void`

___

{: .api-section }
### SaveDBJson

{: .code-example }
`SaveDBJson(): void`

**Returns:** 
`void`

___

{: .api-section }
### SetDBArray

{: .code-example }
`SetDBArray(key, value): void`

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
### SetDBBool

{: .code-example }
`SetDBBool(key, value): void`

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
### SetDBFloat

{: .code-example }
`SetDBFloat(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `float` |

**Returns:** 
`void`

___

{: .api-section }
### SetDBInt32

{: .code-example }
`SetDBInt32(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `int32` |

**Returns:** 
`void`

___

{: .api-section }
### SetDBInt64

{: .code-example }
`SetDBInt64(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `int64` |

**Returns:** 
`void`

___

{: .api-section }
### SetDBNumber

{: .code-example }
`SetDBNumber(key, value): void`

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
### SetDBObject

{: .code-example }
`SetDBObject(key, value): void`

**`lua_only`** - This method is not available in livescripts.

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
### SetDBString

{: .code-example }
`SetDBString(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### SetDBUInt32

{: .code-example }
`SetDBUInt32(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetDBUInt64

{: .code-example }
`SetDBUInt64(key, value): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `uint64` |

**Returns:** 
`void`

