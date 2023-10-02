---
title: Quest
---






{: .api-section }
### OnAccept




{: .code-example }
`OnAccept((quest,player,questgiver) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `questgiver` | [`TSObject`](../classes/TSObject) |

{: .api-section }
### OnObjectiveProgress




{: .code-example }
`OnObjectiveProgress((quest,player,index,progress) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `index` | `TSNumber`<`uint32`\> |
| `progress` | `TSNumber`<`uint16`\> |

{: .api-section }
### OnReward




{: .code-example }
`OnReward((quest,player,questgiver,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `questgiver` | [`TSObject`](../classes/TSObject) |
| `value` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnRewardXP




{: .code-example }
`OnRewardXP((quest,player,reward) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `reward` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnSpellFinish




{: .code-example }
`OnSpellFinish((quest,player,questgiver) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `questgiver` | [`TSSpell`](../classes/TSSpell) |

{: .api-section }
### OnStatusChanged




{: .code-example }
`OnStatusChanged((quest,player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
