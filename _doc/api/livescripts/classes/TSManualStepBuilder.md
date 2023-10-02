---
title: TSManualStepBuilder
---


## Methods

{: .api-section }
### description

{: .code-example }
`description(description): TSManualStepBuilder`

Sets the displayed description of this step

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `description` | `string` |

**Returns:** 
[`TSManualStepBuilder`](TSManualStepBuilder)

___

{: .api-section }
### setup

{: .code-example }
`setup(callback): any`

Sets a function to call when the player starts this step

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`player`: [`TSPlayer`](TSPlayer)) => `void` |

**Returns:** 
`any`

___

{: .api-section }
### verify

{: .code-example }
`verify(callback): any`

Sets a function to call when the player attempts to finish this step

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`player`: [`TSPlayer`](TSPlayer), `assert`: [`TSAssert`](TSAssert)) => `void` |

**Returns:** 
`any`

