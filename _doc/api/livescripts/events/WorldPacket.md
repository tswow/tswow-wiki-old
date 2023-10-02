---
title: WorldPacket
---






{: .api-section }
### OnReceive




{: .code-example }
`OnReceive((opcode,packet,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `opcode` | `TSNumber`<`uint32`\> |
| `packet` | [`TSWorldPacket`](../classes/TSWorldPacket) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnSend




{: .code-example }
`OnSend((packet,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `packet` | [`TSWorldPacket`](../classes/TSWorldPacket) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
