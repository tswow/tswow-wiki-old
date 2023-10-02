---
title: TSVehicle
---


## Methods

{: .api-section }
### AddPassenger

{: .code-example }
`AddPassenger(passenger, seatId): void`

Adds [Unit] passenger to a specified seat in the [Vehicle]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `passenger` | [`TSUnit`](TSUnit) |
| `seatId` | `int8` |

**Returns:** 
`void`

___

{: .api-section }
### GetEntry

{: .code-example }
`GetEntry(): TSNumber<uint32>`

Returns the [Vehicle]'s entry

**Returns:** 
`TSNumber`<`uint32`\>

uint32 entry

___

{: .api-section }
### GetOwner

{: .code-example }
`GetOwner(): TSUnit`

Returns the [Vehicle]'s owner

**Returns:** 
[`TSUnit`](TSUnit)

owner

___

{: .api-section }
### GetPassenger

{: .code-example }
`GetPassenger(seatId): TSUnit`

Returns the [Vehicle]'s passenger in the specified seat

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `seatId` | `int8` |

**Returns:** 
[`TSUnit`](TSUnit)

passenger

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsOnBoard

{: .code-example }
`IsOnBoard(passenger): boolean`

Returns true if the [Unit] passenger is on board

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `passenger` | [`TSUnit`](TSUnit) |

**Returns:** 
`boolean`

bool isOnBoard

___

{: .api-section }
### RemovePassenger

{: .code-example }
`RemovePassenger(passenger): void`

Removes [Unit] passenger from the [Vehicle]

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `passenger` | [`TSUnit`](TSUnit) |

**Returns:** 
`void`

