---
title: TSDictionary
---


## Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `K` |
| `V` |

## Indexable

▪ [custom: `string`]: `V`

## Methods

{: .api-section }
### contains

{: .code-example }
`contains(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `K` |

**Returns:** 
`boolean`

___

{: .api-section }
### filter

{: .code-example }
`filter(callback): TSDictionary<K, V>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`key`: `K`, `value`: `V`) => `boolean` |

**Returns:** 
[`TSDictionary`](TSDictionary)<`K`, `V`\>

___

{: .api-section }
### forEach

{: .code-example }
`forEach(callback): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`key`: `K`, `value`: `V`) => `void` |

**Returns:** 
`any`

___

{: .api-section }
### keys

{: .code-example }
`keys(): TSArray<K>`

**Returns:** 
`TSArray`<`K`\>

___

{: .api-section }
### map

{: .code-example }
`map<M>(callback): TSDictionary<K, M>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `M` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`key`: `K`, `value`: `V`, `self`: [`TSDictionary`](TSDictionary)<`K`, `V`\>) => `M` |

**Returns:** 
[`TSDictionary`](TSDictionary)<`K`, `M`\>

___

{: .api-section }
### reduce

{: .code-example }
`reduce<T>(callback, initial): T`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `callback` | (`previous`: `T`, `key`: `K`, `value`: `V`) => `T` |
| `initial` | `T` |

**Returns:** 
`T`

___

{: .api-section }
### set

{: .code-example }
`set(key, value): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `K` |
| `value` | `V` |

**Returns:** 
`any`

