---
title: Spell
---






{: .api-section }
### OnAfterCast




{: .code-example }
`OnAfterCast((spell,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAfterDispel




{: .code-example }
`OnAfterDispel((aura,dispel,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `aura` | [`TSAura`](../classes/TSAura) |
| `dispel` | [`TSDispelInfo`](../classes/TSDispelInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAfterEffectApply




{: .code-example }
`OnAfterEffectApply((effect,application,modes,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `modes` | [`AuraEffectHandleMode`](../enums/AuraEffectHandleMode) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAfterEffectProc




{: .code-example }
`OnAfterEffectProc((effect,application,proc,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `proc` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAfterEffectRemove




{: .code-example }
`OnAfterEffectRemove((effect,application,modes,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `modes` | [`AuraEffectHandleMode`](../enums/AuraEffectHandleMode) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAfterHit




{: .code-example }
`OnAfterHit((spell,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnAfterProc




{: .code-example }
`OnAfterProc((application,proc,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `proc` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnApply




{: .code-example }
`OnApply((effect,application,type) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `type` | [`AuraEffectHandleMode`](../enums/AuraEffectHandleMode) |

{: .api-section }
### OnBeforeCast




{: .code-example }
`OnBeforeCast((spell,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnBeforeHit




{: .code-example }
`OnBeforeHit((spell,miss,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `miss` | [`SpellMissInfo`](../enums/SpellMissInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCalcAuraCrit



critChance should be between 0 and 1


{: .code-example }
`OnCalcAuraCrit((aura,chance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `aura` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `chance` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnCalcCrit



critChance should be between 0 and 1


{: .code-example }
`OnCalcCrit((spelL,chance) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spelL` | [`TSSpell`](../classes/TSSpell) |
| `chance` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnCalcHit



hitChance should be an integer between 0 and 10000


{: .code-example }
`OnCalcHit((spell,hitChance,attacker,defender) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `hitChance` | `TSMutableNumber`<`int32`\> |
| `attacker` | [`TSWorldObject`](../classes/TSWorldObject) |
| `defender` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnCalcMeleeMiss




{: .code-example }
`OnCalcMeleeMiss((spell,miss,attacker,victim,attackType,skillDiff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `miss` | `TSMutableNumber`<`float`\> |
| `attacker` | [`TSUnit`](../classes/TSUnit) |
| `victim` | [`TSUnit`](../classes/TSUnit) |
| `attackType` | [`WeaponAttackType`](../enums/WeaponAttackType) |
| `skillDiff` | `int32` |

{: .api-section }
### OnCalcMiss




{: .code-example }
`OnCalcMiss((spell,target,missCondition,[SpellMissInfo](../enums/SpellMissInfo)\>,effectMask) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `target` | [`TSUnit`](../classes/TSUnit) |
| `missCondition` | [`TSMutable`](../classes/TSMutable)<[`SpellMissInfo`](../enums/SpellMissInfo) |
| `[SpellMissInfo](../enums/SpellMissInfo)\>` | undefined |
| `effectMask` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnCalcReflect



reflectCHance should be an integer between 0 and 10000


{: .code-example }
`OnCalcReflect((spell,reflectChance,attacker,victim) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `reflectChance` | `TSMutableNumber`<`int32`\> |
| `attacker` | [`TSWorldObject`](../classes/TSWorldObject) |
| `victim` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnCalcResist



resistChance should be an integer between 0 and 10000


{: .code-example }
`OnCalcResist((spell,resistChance,attacker,defender) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `resistChance` | `TSMutableNumber`<`int32`\> |
| `attacker` | [`TSWorldObject`](../classes/TSWorldObject) |
| `defender` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnCalcSpellPowerLevelPenalty




{: .code-example }
`OnCalcSpellPowerLevelPenalty((spell,penalty,caster) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `penalty` | `TSMutableNumber`<`float`\> |
| `caster` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnCast




{: .code-example }
`OnCast((spell) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |

{: .api-section }
### OnCheckAreaTarget




{: .code-example }
`OnCheckAreaTarget((aura,unit,result,boolean\>,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `aura` | [`TSAura`](../classes/TSAura) |
| `unit` | [`TSUnit`](../classes/TSUnit) |
| `result` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCheckCast




{: .code-example }
`OnCheckCast((spell,result,[SpellCastResult](../enums/SpellCastResult)\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `result` | [`TSMutable`](../classes/TSMutable)<[`SpellCastResult`](../enums/SpellCastResult) |
| `[SpellCastResult](../enums/SpellCastResult)\>` | undefined |

{: .api-section }
### OnCheckEffectProc




{: .code-example }
`OnCheckEffectProc((effect,application,procEvent,result,boolean\>,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `procEvent` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `result` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCheckProc




{: .code-example }
`OnCheckProc((application,procEvent,result,boolean\>,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `procEvent` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `result` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnDamageEarly




{: .code-example }
`OnDamageEarly((spell,damage,info,type,isCrit,effectMask) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `damage` | `TSMutableNumber`<`int32`\> |
| `info` | [`TSSpellDamageInfo`](../classes/TSSpellDamageInfo) |
| `type` | `TSNumber`<`uint32`\> |
| `isCrit` | `boolean` |
| `effectMask` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnDamageLate




{: .code-example }
`OnDamageLate((spell,damage,info,type,isCrit,effectMask) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `damage` | `TSMutableNumber`<`int32`\> |
| `info` | [`TSSpellDamageInfo`](../classes/TSSpellDamageInfo) |
| `type` | `TSNumber`<`uint32`\> |
| `isCrit` | `boolean` |
| `effectMask` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnDestinationTargetSelect




{: .code-example }
`OnDestinationTargetSelect((spell,dest,index,target,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `dest` | [`TSSpellDestination`](../classes/TSSpellDestination) |
| `index` | [`SpellEffIndex`](../enums/SpellEffIndex) |
| `target` | [`TSSpellImplicitTargetInfo`](../classes/TSSpellImplicitTargetInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnDispel




{: .code-example }
`OnDispel((aura,dispel,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `aura` | [`TSAura`](../classes/TSAura) |
| `dispel` | [`TSDispelInfo`](../classes/TSDispelInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffect




{: .code-example }
`OnEffect((spell,cancel,boolean\>,info,mode,unitTarget,item,obj,corpse) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `info` | [`TSSpellEffectInfo`](../classes/TSSpellEffectInfo) |
| `mode` | [`SpellEffectHandleMode`](../enums/SpellEffectHandleMode) |
| `unitTarget` | [`TSUnit`](../classes/TSUnit) |
| `item` | [`TSItem`](../classes/TSItem) |
| `obj` | [`TSGameObject`](../classes/TSGameObject) |
| `corpse` | [`TSCorpse`](../classes/TSCorpse) |

{: .api-section }
### OnEffectAbsorb




{: .code-example }
`OnEffectAbsorb((effect,application,damage,absorbAmount,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `damage` | [`TSDamageInfo`](../classes/TSDamageInfo) |
| `absorbAmount` | `TSMutableNumber`<`uint32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectAfterAbsorb




{: .code-example }
`OnEffectAfterAbsorb((effect,application,damage,absorbAmount,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `damage` | [`TSDamageInfo`](../classes/TSDamageInfo) |
| `absorbAmount` | `TSMutableNumber`<`uint32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectAfterManaShield




{: .code-example }
`OnEffectAfterManaShield((effect,application,damage,absorbAmount,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `damage` | [`TSDamageInfo`](../classes/TSDamageInfo) |
| `absorbAmount` | `TSMutableNumber`<`uint32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectApplyGlyph



**`note`** Use with Player.OnGlyphInitForLevel


{: .code-example }
`OnEffectApplyGlyph((spell,locked,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `locked` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectCalcAmount




{: .code-example }
`OnEffectCalcAmount((effect,amount,canBeReclalculated,boolean\>,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `amount` | `TSMutableNumber`<`int32`\> |
| `canBeReclalculated` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectCalcPeriodic




{: .code-example }
`OnEffectCalcPeriodic((effect,isPeriodic,boolean\>,amplitude,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `isPeriodic` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `amplitude` | `TSMutableNumber`<`int32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectCalcSpellMod




{: .code-example }
`OnEffectCalcSpellMod((effect,modifier,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `modifier` | [`TSSpellModifier`](../classes/TSSpellModifier) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectManaShield




{: .code-example }
`OnEffectManaShield((effect,application,damage,absorbAmount,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `damage` | [`TSDamageInfo`](../classes/TSDamageInfo) |
| `absorbAmount` | `TSMutableNumber`<`uint32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectPeriodic




{: .code-example }
`OnEffectPeriodic((effect,application,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectProc




{: .code-example }
`OnEffectProc((effect,application,eventInfo,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `eventInfo` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnEffectSplit




{: .code-example }
`OnEffectSplit((effect,application,damage,splitAmount,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `damage` | [`TSDamageInfo`](../classes/TSDamageInfo) |
| `splitAmount` | `TSMutableNumber`<`uint32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnHit




{: .code-example }
`OnHit((spell) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |

{: .api-section }
### OnLearn




{: .code-example }
`OnLearn((spell,player,active,disabled,superceded,from_skill) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `active` | `boolean` |
| `disabled` | `boolean` |
| `superceded` | `boolean` |
| `from_skill` | `uint32` |

{: .api-section }
### OnLearnTalent




{: .code-example }
`OnLearnTalent((spell,player,tabId,talentId,talentRank,spellId,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `tabId` | `uint32` |
| `talentId` | `uint32` |
| `talentRank` | `uint32` |
| `spellId` | `uint32` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnObjectAreaTargetSelect




{: .code-example }
`OnObjectAreaTargetSelect((spell,objects,index,target,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `objects` | [`TSWorldObjectCollection`](../classes/TSWorldObjectCollection) |
| `index` | [`SpellEffIndex`](../enums/SpellEffIndex) |
| `target` | [`TSSpellImplicitTargetInfo`](../classes/TSSpellImplicitTargetInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnObjectTargetSelect




{: .code-example }
`OnObjectTargetSelect((spell,object,index,target,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `object` | [`TSMutableWorldObject`](../classes/TSMutableWorldObject) |
| `index` | [`SpellEffIndex`](../enums/SpellEffIndex) |
| `target` | [`TSSpellImplicitTargetInfo`](../classes/TSSpellImplicitTargetInfo) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnPeriodicDamage




{: .code-example }
`OnPeriodicDamage((aura,damage) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `aura` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `damage` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnPrepareProc




{: .code-example }
`OnPrepareProc((application,procEvent,prepare,boolean\>,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `procEvent` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `prepare` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnProc




{: .code-example }
`OnProc((application,proc,handled,boolean\>,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `proc` | [`TSProcEventInfo`](../classes/TSProcEventInfo) |
| `handled` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnRemove




{: .code-example }
`OnRemove((effect,application,type) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |
| `application` | [`TSAuraApplication`](../classes/TSAuraApplication) |
| `type` | `uint32` |

{: .api-section }
### OnResistAbsorbCalculate




{: .code-example }
`OnResistAbsorbCalculate((spelL,damage,resistAmount,absorbAmount,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spelL` | [`TSSpell`](../classes/TSSpell) |
| `damage` | [`TSDamageInfo`](../classes/TSDamageInfo) |
| `resistAmount` | `TSMutableNumber`<`uint32`\> |
| `absorbAmount` | `TSMutableNumber`<`int32`\> |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnSetDuration




{: .code-example }
`OnSetDuration((effect,duration,withMods,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAura`](../classes/TSAura) |
| `duration` | `TSMutableNumber`<`int32`\> |
| `withMods` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnSuccessfulDispel




{: .code-example }
`OnSuccessfulDispel((spell,dispelType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `dispelType` | `uint32` |

{: .api-section }
### OnTick




{: .code-example }
`OnTick((effect) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `effect` | [`TSAuraEffect`](../classes/TSAuraEffect) |

{: .api-section }
### OnTrainerSend




{: .code-example }
`OnTrainerSend((spell,trainerId,receiver,allow,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `trainerId` | `uint32` |
| `receiver` | [`TSPlayer`](../classes/TSPlayer) |
| `allow` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnUnlearn




{: .code-example }
`OnUnlearn((spell,player,disabled,learn_low_rank) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `disabled` | `boolean` |
| `learn_low_rank` | `boolean` |

{: .api-section }
### OnUnlearnTalent




{: .code-example }
`OnUnlearnTalent((spell,player,tab_index,tier,column,rank,direct) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `spell` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `tab_index` | `uint32` |
| `tier` | `uint32` |
| `column` | `uint32` |
| `rank` | `uint32` |
| `direct` | `boolean` |
