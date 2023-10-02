---
title: Guild
---






{: .api-section }
### OnAddMember




{: .code-example }
`OnAddMember((guild,player,plRank) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `plRank` | `TSMutableNumber`<`uint8`\> |

{: .api-section }
### OnBankEvent




{: .code-example }
`OnBankEvent((guild,eventType,tabId,playerGuid,itemOrMoney,itemStackCount,destTabId) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `eventType` | `uint8` |
| `tabId` | `uint8` |
| `playerGuid` | `uint32` |
| `itemOrMoney` | `uint32` |
| `itemStackCount` | `uint16` |
| `destTabId` | `uint8` |

{: .api-section }
### OnCreate




{: .code-example }
`OnCreate((guild,leader,name) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `leader` | [`TSPlayer`](../classes/TSPlayer) |
| `name` | `string` |

{: .api-section }
### OnDisband




{: .code-example }
`OnDisband((guild) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |

{: .api-section }
### OnEvent




{: .code-example }
`OnEvent((guild,eventType,playerGuid1,playerGuid2,newRank) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `eventType` | `uint8` |
| `playerGuid1` | `uint32` |
| `playerGuid2` | `uint32` |
| `newRank` | `uint8` |

{: .api-section }
### OnInfoChanged




{: .code-example }
`OnInfoChanged((guild,newInfo) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `newInfo` | `string` |

{: .api-section }
### OnMOTDChanged




{: .code-example }
`OnMOTDChanged((guild,newMotd) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `newMotd` | `string` |

{: .api-section }
### OnMemberDepositMoney




{: .code-example }
`OnMemberDepositMoney((guild,player,amount) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `amount` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnMemberWitdrawMoney




{: .code-example }
`OnMemberWitdrawMoney((guild,player,amount,isRepair) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `amount` | `TSMutableNumber`<`uint32`\> |
| `isRepair` | `boolean` |

{: .api-section }
### OnRemoveMember




{: .code-example }
`OnRemoveMember((guild,player,isDisbanding,isKicked) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `isDisbanding` | `boolean` |
| `isKicked` | `boolean` |
