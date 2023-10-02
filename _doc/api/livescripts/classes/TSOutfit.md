---
title: TSOutfit
---


## Methods

{: .api-section }
### ApplyCopy

{: .code-example }
`ApplyCopy(creature, settings?, race?, gender?): any`

Applies a copy of this outfit to the target creature

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `creature` | [`TSCreature`](TSCreature) |
| `settings?` | [`Outfit`](../enums/Outfit) |
| `race?` | `RaceID` |
| `gender?` | [`Gender`](../enums/Gender) |

**Returns:** 
`any`

___

{: .api-section }
### ApplyRef

{: .code-example }
`ApplyRef(creature): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `creature` | [`TSCreature`](TSCreature) |

**Returns:** 
`void`

___

{: .api-section }
### ClearMainhand

{: .code-example }
`ClearMainhand(): TSOutfit`

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### ClearOffhand

{: .code-example }
`ClearOffhand(): TSOutfit`

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### ClearRanged

{: .code-example }
`ClearRanged(): TSOutfit`

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### GetClass

{: .code-example }
`GetClass(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetDisplayID

{: .code-example }
`GetDisplayID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetFace

{: .code-example }
`GetFace(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetGender

{: .code-example }
`GetGender(): Gender`

**Returns:** 
[`Gender`](../enums/Gender)

___

{: .api-section }
### GetGuild

{: .code-example }
`GetGuild(): TSGUID`

**Returns:** 
[`TSGUID`](TSGUID)

___

{: .api-section }
### GetHairColor

{: .code-example }
`GetHairColor(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetHairStyle

{: .code-example }
`GetHairStyle(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetMainhand

{: .code-example }
`GetMainhand(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetOffhand

{: .code-example }
`GetOffhand(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetRace

{: .code-example }
`GetRace(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetRanged

{: .code-example }
`GetRanged(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetSkin

{: .code-example }
`GetSkin(): TSNumber<uint8>`

**Returns:** 
`TSNumber`<`uint8`\>

___

{: .api-section }
### GetSoundID

{: .code-example }
`GetSoundID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### SetClass

{: .code-example }
`SetClass(Class): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `Class` | `ClassID` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetDisplayID

{: .code-example }
`SetDisplayID(displayID): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `displayID` | `uint32` |

**Returns:** 
`void`

___

{: .api-section }
### SetFace

{: .code-example }
`SetFace(face): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `face` | `uint8` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetGuild

{: .code-example }
`SetGuild(guild): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guild` | `TSNumber`<`uint32`\> \| [`TSGUID`](TSGUID) |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetHairColor

{: .code-example }
`SetHairColor(color): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `color` | `uint8` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetHairStyle

{: .code-example }
`SetHairStyle(hair): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `hair` | `uint8` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetItem

{: .code-example }
`SetItem(slot, entry): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EquipmentSlots`](../enums/EquipmentSlots) |
| `entry` | `uint32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetItemByDisplayID

{: .code-example }
`SetItemByDisplayID(slot, displayId): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `slot` | [`EquipmentSlots`](../enums/EquipmentSlots) |
| `displayId` | `uint32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetMainhand

{: .code-example }
`SetMainhand(mainhand): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mainhand` | `uint32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetOffhand

{: .code-example }
`SetOffhand(offhand): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `offhand` | `uint32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetRanged

{: .code-example }
`SetRanged(ranged): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `ranged` | `uint32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetSkin

{: .code-example }
`SetSkin(face): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `face` | `uint8` |

**Returns:** 
[`TSOutfit`](TSOutfit)

___

{: .api-section }
### SetSoundID

{: .code-example }
`SetSoundID(soundId): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `soundId` | `uint32` |

**Returns:** 
[`TSOutfit`](TSOutfit)

