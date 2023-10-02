---
title: TSAuctionHouseObject
---


## Methods

{: .api-section }
### AddAuction

{: .code-example }
`AddAuction(entry): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | [`TSAuctionEntry`](TSAuctionEntry) |

**Returns:** 
`any`

___

{: .api-section }
### GetCount

{: .code-example }
`GetCount(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetEntry

{: .code-example }
`GetEntry(key): TSAuctionEntry`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `uint32` |

**Returns:** 
[`TSAuctionEntry`](TSAuctionEntry)

___

{: .api-section }
### GetKeys

{: .code-example }
`GetKeys(): TSArray<uint32>`

**Returns:** 
`TSArray`<`uint32`\>

___

{: .api-section }
### RemoveAuction

{: .code-example }
`RemoveAuction(key): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `key` | `uint32` \| [`TSAuctionEntry`](TSAuctionEntry) |

**Returns:** 
`boolean`

