---
title: TSChannel
---


## Methods

{: .api-section }
### CheckPassword

{: .code-example }
`CheckPassword(password): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `password` | `string` |

**Returns:** 
`boolean`

___

{: .api-section }
### GetFlags

{: .code-example }
`GetFlags(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetID

{: .code-example }
`GetID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetName

{: .code-example }
`GetName(locale?): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `locale?` | `uint32` |

**Returns:** 
`string`

___

{: .api-section }
### GetNumPlayers

{: .code-example }
`GetNumPlayers(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### HasFlag

{: .code-example }
`HasFlag(flag): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `flag` | `uint8` |

**Returns:** 
`boolean`

___

{: .api-section }
### IsAnnounce

{: .code-example }
`IsAnnounce(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsConstant

{: .code-example }
`IsConstant(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsLFG

{: .code-example }
`IsLFG(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### JoinChannel

{: .code-example }
`JoinChannel(player, password?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |
| `password?` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### LeaveChannel

{: .code-example }
`LeaveChannel(player, send?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |
| `send?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### Say

{: .code-example }
`Say(guid, what, lang): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |
| `what` | `string` |
| `lang` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetAnnounce

{: .code-example }
`SetAnnounce(announce): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `announce` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetDirty

{: .code-example }
`SetDirty(): void`

**Returns:** 
`void`

___

{: .api-section }
### SetInvisible

{: .code-example }
`SetInvisible(player, on): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |
| `on` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetOwner

{: .code-example }
`SetOwner(guid, exclaim?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |
| `exclaim?` | `boolean` |

**Returns:** 
`void`

___

{: .api-section }
### SetPassword

{: .code-example }
`SetPassword(password): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `password` | `string` |

**Returns:** 
`void`

