---
title: TSGuild
---


## Methods

{: .api-section }
### AddMember

{: .code-example }
`AddMember(player, rankId): void`

Adds the specified [Player] to the [Guild] at the specified rank.

If no rank is specified, defaults to none.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player` | [`TSPlayer`](TSPlayer) | : the [Player] to be added to the guild |
| `rankId` | `uint8` | - |

**Returns:** 
`void`

___

{: .api-section }
### DeleteMember

{: .code-example }
`DeleteMember(player, isDisbanding): void`

Removes the specified [Player] from the [Guild].

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player` | [`TSPlayer`](TSPlayer) | : the [Player] to be removed from the guild |
| `isDisbanding` | `boolean` | - |

**Returns:** 
`void`

___

{: .api-section }
### Disband

{: .code-example }
`Disband(): void`

Disbands the [Guild]

**Returns:** 
`void`

___

{: .api-section }
### GetID

{: .code-example }
`GetID(): TSNumber<uint32>`

Returns the [Guild]s entry ID

**Returns:** 
`TSNumber`<`uint32`\>

uint32 entryId

___

{: .api-section }
### GetInfo

{: .code-example }
`GetInfo(): string`

Returns the [Guild]s current info

**Returns:** 
`string`

string guildInfo

___

{: .api-section }
### GetLeader

{: .code-example }
`GetLeader(): TSPlayer`

Finds and returns the [Guild] leader by their GUID if logged in

**Returns:** 
[`TSPlayer`](TSPlayer)

leader

___

{: .api-section }
### GetLeaderGUID

{: .code-example }
`GetLeaderGUID(): TSGUID`

Returns [Guild] leader GUID

**Returns:** 
[`TSGUID`](TSGUID)

uint64 leaderGUID

___

{: .api-section }
### GetMOTD

{: .code-example }
`GetMOTD(): string`

Returns the [Guild]s current Message Of The Day

**Returns:** 
`string`

string guildMOTD

___

{: .api-section }
### GetMemberCount

{: .code-example }
`GetMemberCount(): TSNumber<uint32>`

Returns the member count of this [Guild]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 memberCount

___

{: .api-section }
### GetMembers

{: .code-example }
`GetMembers(): TSArray<TSPlayer>`

Returns a table with the [Player]s in this [Guild]

Only the players that are online and on some map.

**Returns:** 
`TSArray`<[`TSPlayer`](TSPlayer)\>

table guildPlayers : table of [Player]s

___

{: .api-section }
### GetName

{: .code-example }
`GetName(): string`

Returns the [Guild]s name

**Returns:** 
`string`

string guildName

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### SendPacket

{: .code-example }
`SendPacket(data): void`

Sends a [WorldPacket] to all the [Player]s in the [Guild]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `data` | [`TSWorldPacket`](TSWorldPacket) |

**Returns:** 
`void`

___

{: .api-section }
### SendPacketToRanked

{: .code-example }
`SendPacketToRanked(data, ranked): void`

Sends a [WorldPacket] to all the [Player]s at the specified rank in the [Guild]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `data` | [`TSWorldPacket`](TSWorldPacket) |
| `ranked` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetBankTabText

{: .code-example }
`SetBankTabText(tabId, text): void`

Sets the information of the bank tab specified

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `tabId` | `uint8` |
| `text` | `string` |

**Returns:** 
`void`

___

{: .api-section }
### SetLeader

{: .code-example }
`SetLeader(player): void`

Sets the leader of this [Guild]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `player` | [`TSPlayer`](TSPlayer) |

**Returns:** 
`void`

___

{: .api-section }
### SetMemberRank

{: .code-example }
`SetMemberRank(player, newRank): void`

Promotes/demotes the [Player] to the specified rank.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player` | [`TSPlayer`](TSPlayer) | : the [Player] to be promoted/demoted |
| `newRank` | `uint8` | - |

**Returns:** 
`void`

