---
title: TSPacketWrite
---


## Methods

{: .api-section }
### BroadcastAround

{: .code-example }
`BroadcastAround(obj, range, self?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `obj` | [`TSWorldObject`](TSWorldObject) | - |
| `range` | `float` | - |
| `self?` | `boolean` | default: true |

**Returns:** 
`any`

___

{: .api-section }
### BroadcastMap

{: .code-example }
`BroadcastMap(map, teamOnly): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `map` | [`TSMap`](TSMap) |
| `teamOnly` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SendToPlayer

{: .code-example }
`SendToPlayer(player): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### Size

{: .code-example }
`Size(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### WriteDouble

{: .code-example }
`WriteDouble(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `double` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteFloat

{: .code-example }
`WriteFloat(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `float` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteInt16

{: .code-example }
`WriteInt16(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `int16` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteInt32

{: .code-example }
`WriteInt32(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `int32` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteInt64

{: .code-example }
`WriteInt64(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `int64` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteInt8

{: .code-example }
`WriteInt8(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `int8` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteString

{: .code-example }
`WriteString(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `string` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteUInt16

{: .code-example }
`WriteUInt16(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `uint16` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteUInt32

{: .code-example }
`WriteUInt32(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `uint32` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteUInt64

{: .code-example }
`WriteUInt64(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `uint64` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

___

{: .api-section }
### WriteUInt8

{: .code-example }
`WriteUInt8(value): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `uint8` |

**Returns:** 
[`TSPacketWrite`](TSPacketWrite)

