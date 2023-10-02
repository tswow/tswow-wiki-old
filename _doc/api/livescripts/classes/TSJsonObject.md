---
title: TSJsonObject
---


## Accessors

{: .api-section }
### length

• `get` **length**(): `TSNumber`<`uint32`\>

**Returns:** 
`TSNumber`<`uint32`\>

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
### HasNull

{: .code-example }
`HasNull(key): boolean`

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
### IsValid

{: .code-example }
`IsValid(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### Remove

{: .code-example }
`Remove(key): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### SetBool

{: .code-example }
`SetBool(key, value): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `boolean` |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### SetJsonArray

{: .code-example }
`SetJsonArray(key, value): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | [`TSJsonArray`](TSJsonArray) |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### SetJsonObject

{: .code-example }
`SetJsonObject(key, value): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | [`TSJsonObject`](TSJsonObject) |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### SetNull

{: .code-example }
`SetNull(key): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### SetNumber

{: .code-example }
`SetNumber(key, value): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `double` |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

___

{: .api-section }
### SetString

{: .code-example }
`SetString(key, value): TSJsonObject`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `string` |
| `value` | `string` |

**Returns:** 
[`TSJsonObject`](TSJsonObject)

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

