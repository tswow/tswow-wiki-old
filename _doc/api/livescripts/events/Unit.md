---
title: Unit
---






{: .api-section }
### OnCalcHeal




{: .code-example }
`OnCalcHeal((healer,target,heal) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `healer` | [`TSUnit`](../classes/TSUnit) |
| `target` | [`TSUnit`](../classes/TSUnit) |
| `heal` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnCalcMeleeCrit




{: .code-example }
`OnCalcMeleeCrit((attacker,victim,crit,attackType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `attacker` | [`TSUnit`](../classes/TSUnit) |
| `victim` | [`TSUnit`](../classes/TSUnit) |
| `crit` | `TSMutableNumber`<`float`\> |
| `attackType` | [`WeaponAttackType`](../enums/WeaponAttackType) |

{: .api-section }
### OnCalcMeleeOutcome




{: .code-example }
`OnCalcMeleeOutcome((attacker,victim,missChance,critChance,dodgeChance,blockChance,parryChance,attackType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `attacker` | [`TSUnit`](../classes/TSUnit) |
| `victim` | [`TSUnit`](../classes/TSUnit) |
| `missChance` | `TSMutableNumber`<`float`\> |
| `critChance` | `TSMutableNumber`<`float`\> |
| `dodgeChance` | `TSMutableNumber`<`float`\> |
| `blockChance` | `TSMutableNumber`<`float`\> |
| `parryChance` | `TSMutableNumber`<`float`\> |
| `attackType` | [`WeaponAttackType`](../enums/WeaponAttackType) |

{: .api-section }
### OnCalcMissChance




{: .code-example }
`OnCalcMissChance((unit,chance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `unit` | [`TSUnit`](../classes/TSUnit) |
| `chance` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnCalcScaleThreat




{: .code-example }
`OnCalcScaleThreat((owner,target,value,raw) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `owner` | [`TSUnit`](../classes/TSUnit) |
| `target` | [`TSUnit`](../classes/TSUnit) |
| `value` | `TSMutableNumber`<`float`\> |
| `raw` | `boolean` |

{: .api-section }
### OnCalcThreatEarly




{: .code-example }
`OnCalcThreatEarly((owner,target,value,spell,raw) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `owner` | [`TSUnit`](../classes/TSUnit) |
| `target` | [`TSUnit`](../classes/TSUnit) |
| `value` | `TSMutableNumber`<`float`\> |
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `raw` | `boolean` |

{: .api-section }
### OnCalcThreatLate




{: .code-example }
`OnCalcThreatLate((owner,target,value,spell,raw) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `owner` | [`TSUnit`](../classes/TSUnit) |
| `target` | [`TSUnit`](../classes/TSUnit) |
| `value` | `TSMutableNumber`<`float`\> |
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `raw` | `boolean` |

{: .api-section }
### OnDeath



Fires AFTER auras are removed and kill procs


{: .code-example }
`OnDeath((victim,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `victim` | [`TSUnit`](../classes/TSUnit) |
| `killer` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnDeathEarly



 Fires BEFORE auras are removed and kill procs


{: .code-example }
`OnDeathEarly((victim,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `victim` | [`TSUnit`](../classes/TSUnit) |
| `killer` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnEnterCombat




{: .code-example }
`OnEnterCombat((unit) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `unit` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnEnterCombatWith




{: .code-example }
`OnEnterCombatWith((me,other) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `me` | [`TSUnit`](../classes/TSUnit) |
| `other` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnExitCombat




{: .code-example }
`OnExitCombat((unit) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `unit` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnExitCombatWith




{: .code-example }
`OnExitCombatWith((me,other) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `me` | [`TSUnit`](../classes/TSUnit) |
| `other` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnLiquidStatusChanged




{: .code-example }
`OnLiquidStatusChanged((unit,newStatus) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `unit` | [`TSUnit`](../classes/TSUnit) |
| `newStatus` | `TSMutableNumber`<[`LiquidStatus`](../enums/LiquidStatus)\> |

{: .api-section }
### OnMeleeDamageEarly




{: .code-example }
`OnMeleeDamageEarly((info,damage,type,index) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `info` | [`TSMeleeDamageInfo`](../classes/TSMeleeDamageInfo) |
| `damage` | `TSMutableNumber`<`uint32`\> |
| `type` | `TSNumber`<`uint32`\> |
| `index` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnMeleeDamageLate




{: .code-example }
`OnMeleeDamageLate((info,damage,type,index) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `info` | [`TSMeleeDamageInfo`](../classes/TSMeleeDamageInfo) |
| `damage` | `TSMutableNumber`<`uint32`\> |
| `type` | `TSNumber`<`uint32`\> |
| `index` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnOutdoorsChanged




{: .code-example }
`OnOutdoorsChanged((unit,newStatus,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `unit` | [`TSUnit`](../classes/TSUnit) |
| `newStatus` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnSetTarget




{: .code-example }
`OnSetTarget((me,selection,oldSelection) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `me` | [`TSUnit`](../classes/TSUnit) |
| `selection` | `uint64` |
| `oldSelection` | `uint64` |
