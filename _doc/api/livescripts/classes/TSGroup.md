---
title: TSGroup
---


## Methods

{: .api-section }
### AddMember

{: .code-example }
`AddMember(player): boolean`

Adds a new member to the [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player` | [`TSPlayer`](TSPlayer) | : [Player] to add to the group |

**Returns:** 
`boolean`

bool added : true if member was added

___

{: .api-section }
### ConvertToRaid

{: .code-example }
`ConvertToRaid(): void`

Converts this [Group] to a raid [Group]

**Returns:** 
`void`

___

{: .api-section }
### Disband

{: .code-example }
`Disband(): void`

Disbands this [Group]

**Returns:** 
`void`

___

{: .api-section }
### GetGUID

{: .code-example }
`GetGUID(): TSGUID`

Returns the [Group]'s GUID

**Returns:** 
[`TSGUID`](TSGUID)

uint64 groupGUID

___

{: .api-section }
### GetLeaderGUID

{: .code-example }
`GetLeaderGUID(): TSNumber<uint64>`

Returns [Group] leader GUID

**Returns:** 
`TSNumber`<`uint64`\>

uint64 leaderGUID

___

{: .api-section }
### GetMemberGUID

{: .code-example }
`GetMemberGUID(name): TSGUID`

Returns a [Group] member's GUID by their name

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
[`TSGUID`](TSGUID)

uint64 memberGUID

___

{: .api-section }
### GetMemberGroup

{: .code-example }
`GetMemberGroup(guid): TSNumber<uint8>`

Returns the [Player]'s subgroup ID of this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |

**Returns:** 
`TSNumber`<`uint8`\>

uint8 subGroupID : a valid subgroup ID or MAX_RAID_SUBGROUPS+1

___

{: .api-section }
### GetMembers

{: .code-example }
`GetMembers(): TSArray<TSPlayer>`

Returns a table with the [Player]s in this [Group]

**Returns:** 
`TSArray`<[`TSPlayer`](TSPlayer)\>

table groupPlayers : table of [Player]s

___

{: .api-section }
### GetMembersCount

{: .code-example }
`GetMembersCount(): TSNumber<uint32>`

Returns the member count of this [Group]

**Returns:** 
`TSNumber`<`uint32`\>

uint32 memberCount

___

{: .api-section }
### HasFreeSlotSubGroup

{: .code-example }
`HasFreeSlotSubGroup(subGroup): boolean`

Returns 'true' if the subgroup has free slots in this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `subGroup` | `uint8` |

**Returns:** 
`boolean`

bool hasFreeSlot

___

{: .api-section }
### IsAssistant

{: .code-example }
`IsAssistant(guid): boolean`

Returns 'true' if the [Player] is an assistant of this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |

**Returns:** 
`boolean`

bool isAssistant

___

{: .api-section }
### IsBGGroup

{: .code-example }
`IsBGGroup(): boolean`

Returns 'true' if the [Group] is a battleground [Group]

**Returns:** 
`boolean`

bool isBG

___

{: .api-section }
### IsFull

{: .code-example }
`IsFull(): boolean`

Returns 'true' if the [Group] is full

**Returns:** 
`boolean`

bool isFull

___

{: .api-section }
### IsLeader

{: .code-example }
`IsLeader(guid): boolean`

Returns 'true' if the [Player] is the [Group] leader

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
`boolean`

bool isLeader

___

{: .api-section }
### IsMember

{: .code-example }
`IsMember(guid): boolean`

Returns 'true' if the [Player] is a member of this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
`boolean`

bool isMember

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsRaidGroup

{: .code-example }
`IsRaidGroup(): boolean`

Returns 'true' if the [Group] is a raid [Group]

**Returns:** 
`boolean`

bool isRaid

___

{: .api-section }
### RemoveMember

{: .code-example }
`RemoveMember(guid, method): boolean`

Removes a [Player] from this [Group] and returns 'true' if successful

    enum RemoveMethod
    {
        GROUP_REMOVEMETHOD_DEFAULT  = 0,
        GROUP_REMOVEMETHOD_KICK     = 1,
        GROUP_REMOVEMETHOD_LEAVE    = 2,
        GROUP_REMOVEMETHOD_KICK_LFG = 3
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `guid` | [`TSGUID`](TSGUID) \| `uint64` | - |
| `method` | [`RemoveMethod`](../enums/RemoveMethod) | : method used to remove the player |

**Returns:** 
`boolean`

bool removed

___

{: .api-section }
### SameSubGroup

{: .code-example }
`SameSubGroup(player1, player2): boolean`

Returns 'true' if the [Player]s are in the same subgroup in this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `player1` | [`TSPlayer`](TSPlayer) | : first [Player] to check |
| `player2` | [`TSPlayer`](TSPlayer) | : second [Player] to check |

**Returns:** 
`boolean`

bool sameSubGroup

___

{: .api-section }
### SendPacket

{: .code-example }
`SendPacket(data, ignorePlayersInBg, ignore): void`

Sends a specified [WorldPacket] to this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `data` | [`TSWorldPacket`](TSWorldPacket) |
| `ignorePlayersInBg` | `boolean` |
| `ignore` | `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SetLeader

{: .code-example }
`SetLeader(guid): void`

Sets the leader of this [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) \| `uint64` |

**Returns:** 
`void`

___

{: .api-section }
### SetMembersGroup

{: .code-example }
`SetMembersGroup(guid, subGroup): void`

Sets the member's subGroup

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | [`TSGUID`](TSGUID) \| `uint64` |
| `subGroup` | `uint8` |

**Returns:** 
`void`

___

{: .api-section }
### SetTargetIcon

{: .code-example }
`SetTargetIcon(icon, target, setter): void`

Sets the target icon of an object for the [Group]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `icon` | `uint8` |
| `target` | `uint64` |
| `setter` | `uint64` |

**Returns:** 
`void`

