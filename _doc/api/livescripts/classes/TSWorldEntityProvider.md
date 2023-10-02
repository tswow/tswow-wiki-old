---
title: TSWorldEntityProvider
---


## Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

## Hierarchy

- **`TSWorldEntityProvider`**

  ↳ [`TSMap`](TSMap)

  ↳ [`TSBattlegroundPlayer`](TSBattlegroundPlayer)

  ↳ [`TSWorldObject`](TSWorldObject)

## Methods

{: .api-section }
### AddNamedTimer

{: .code-example }
`AddNamedTimer(name, delay, repeats, flags, callback): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |
| `delay` | `uint32` |
| `repeats` | `uint32` |
| `flags` | `uint32` |
| `callback` | (`owner`: `T`, `timer`: [`TSTimer`](TSTimer)) => `void` |

**Returns:** 
`any`

___

{: .api-section }
### AddTimer

{: .code-example }
`AddTimer(delay, repeats, flags, callback): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `delay` | `uint32` |
| `repeats` | `uint32` |
| `flags` | `uint32` |
| `callback` | (`owner`: `T`, `timer`: [`TSTimer`](TSTimer)) => `void` |

**Returns:** 
`any`

___

{: .api-section }
### ClearEntityGroups

{: .code-example }
`ClearEntityGroups(name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
`any`

___

{: .api-section }
### GetEntityGroup

{: .code-example }
`GetEntityGroup(name): TSObjectGroup`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
[`TSObjectGroup`](TSObjectGroup)

___

{: .api-section }
### RemoveEntityGroup

{: .code-example }
`RemoveEntityGroup(name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
`any`

___

{: .api-section }
### RemoveTimer

{: .code-example }
`RemoveTimer(name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
`any`

