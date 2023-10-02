---
title: World
---






{: .api-section }
### OnCalcHonor




{: .code-example }
`OnCalcHonor((honor,level,multiplier) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `honor` | `TSMutableNumber`<`float`\> |
| `level` | `uint8` |
| `multiplier` | `float` |

{: .api-section }
### OnConfigLoad




{: .code-example }
`OnConfigLoad((reload) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `reload` | `boolean` |

{: .api-section }
### OnMotdChange




{: .code-example }
`OnMotdChange((newMotd) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `newMotd` | `string` |

{: .api-section }
### OnOpenStateChange




{: .code-example }
`OnOpenStateChange((open) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `open` | `boolean` |

{: .api-section }
### OnShutdown




{: .code-example }
`OnShutdown(() => void`
#### Event Parameters
This event has no parameters.

{: .api-section }
### OnShutdownCancel




{: .code-example }
`OnShutdownCancel(() => void`
#### Event Parameters
This event has no parameters.

{: .api-section }
### OnShutdownInitiate




{: .code-example }
`OnShutdownInitiate((code,mask) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `code` | `uint32` |
| `mask` | `uint32` |

{: .api-section }
### OnStartup




{: .code-example }
`OnStartup(() => void`
#### Event Parameters
This event has no parameters.

{: .api-section }
### OnUpdate




{: .code-example }
`OnUpdate((diff,mgr) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `diff` | `uint32` |
| `mgr` | [`TSMainThreadContext`](../classes/TSMainThreadContext) |
