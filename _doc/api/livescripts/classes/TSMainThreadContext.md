---
title: TSMainThreadContext
---


## Methods

{: .api-section }
### GetAllPlayers

{: .code-example }
`GetAllPlayers(): TSArray<TSPlayer>`

**Returns:** 
`TSArray`<[`TSPlayer`](TSPlayer)\>

___

{: .api-section }
### GetMap

{: .code-example }
`GetMap(mapid, instanceId?): TSMap`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mapid` | `uint32` |
| `instanceId?` | `uint32` |

**Returns:** 
[`TSMap`](TSMap)

___

{: .api-section }
### GetPlayer

{: .code-example }
`GetPlayer(guid): TSPlayer`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |

**Returns:** 
[`TSPlayer`](TSPlayer)

___

{: .api-section }
### SendMail

{: .code-example }
`SendMail(senderType, from, subject, body, money?, cod?, delay?, items?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `senderType` | `uint8` |
| `from` | `uint64` |
| `subject` | `string` |
| `body` | `string` |
| `money?` | `uint32` |
| `cod?` | `uint32` |
| `delay?` | `uint32` |
| `items?` | `TSArray`<[`TSItem`](TSItem)\> |

**Returns:** 
`void`

