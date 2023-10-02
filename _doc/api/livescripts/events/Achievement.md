---
title: Achievement
---






{: .api-section }
### OnComplete




{: .code-example }
`OnComplete((player,entry) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `entry` | [`TSAchievementEntry`](../classes/TSAchievementEntry) |

{: .api-section }
### OnUpdate




{: .code-example }
`OnUpdate((player,achievement,criteria,progressType,timeElapsed,timeCompleted) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `achievement` | [`TSAchievementEntry`](../classes/TSAchievementEntry) |
| `criteria` | [`TSAchievementCriteriaEntry`](../classes/TSAchievementCriteriaEntry) |
| `progressType` | [`ProgressType`](../enums/ProgressType) |
| `timeElapsed` | `TSNumber`<`uint32`\> |
| `timeCompleted` | `boolean` |
