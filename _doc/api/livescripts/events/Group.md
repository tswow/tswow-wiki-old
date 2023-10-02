---
title: Group
---






{: .api-section }
### OnAddMember




{: .code-example }
`OnAddMember((group,guid) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `group` | [`TSGroup`](../classes/TSGroup) |
| `guid` | `uint64` |

{: .api-section }
### OnChangeLeader




{: .code-example }
`OnChangeLeader((group,newLeaderGuid,oldLeaderGuid) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `group` | [`TSGroup`](../classes/TSGroup) |
| `newLeaderGuid` | `uint64` |
| `oldLeaderGuid` | `uint64` |

{: .api-section }
### OnDisband




{: .code-example }
`OnDisband((group) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `group` | [`TSGroup`](../classes/TSGroup) |

{: .api-section }
### OnInviteMember




{: .code-example }
`OnInviteMember((group,guid) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `group` | [`TSGroup`](../classes/TSGroup) |
| `guid` | `uint64` |

{: .api-section }
### OnRemoveMember




{: .code-example }
`OnRemoveMember((group,guid,method,kicker,reason) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `group` | [`TSGroup`](../classes/TSGroup) |
| `guid` | `uint64` |
| `method` | `uint32` |
| `kicker` | `uint64` |
| `reason` | `string` |
