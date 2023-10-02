---
title: TSWeather
---


## Methods

{: .api-section }
### GetIntensity

{: .code-example }
`GetIntensity(): TSNumber<float>`

**Returns:** 
`TSNumber`<`float`\>

___

{: .api-section }
### GetMap

{: .code-example }
`GetMap(): TSMap`

**Returns:** 
[`TSMap`](TSMap)

___

{: .api-section }
### GetScriptID

{: .code-example }
`GetScriptID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetState

{: .code-example }
`GetState(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetType

{: .code-example }
`GetType(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### GetZone

{: .code-example }
`GetZone(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>

___

{: .api-section }
### SetWeather

{: .code-example }
`SetWeather(type, intensity, triggerScripts?): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `type` | [`WeatherType`](../enums/WeatherType) |
| `intensity` | `float` |
| `triggerScripts?` | `boolean` |

**Returns:** 
`void`

