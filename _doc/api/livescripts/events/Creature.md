---
title: Creature
---






{: .api-section }
### OnCalcBaseGain




{: .code-example }
`OnCalcBaseGain((victim,gain,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `victim` | [`TSCreature`](../classes/TSCreature) |
| `gain` | `TSMutableNumber`<`uint32`\> |
| `killer` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnCalcColorCode




{: .code-example }
`OnCalcColorCode((creature,code,player,playerLevel,creatureLevel) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `code` | `TSMutableNumber`<`uint8`\> |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `playerLevel` | `TSNumber`<`uint32`\> |
| `creatureLevel` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnCalcGain




{: .code-example }
`OnCalcGain((victim,gain,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `victim` | [`TSCreature`](../classes/TSCreature) |
| `gain` | `TSMutableNumber`<`uint32`\> |
| `killer` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnCanGeneratePickPocketLoot



NOTE: Only use this event to enable pickpocket loot
Use "CreatureOnGeneratePickPocketLoot" to actually generate loot


{: .code-example }
`OnCanGeneratePickPocketLoot((creature,player,canGenerate,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `canGenerate` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCharmed




{: .code-example }
`OnCharmed((creature,isNew) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `isNew` | `boolean` |

{: .api-section }
### OnCorpseRemoved




{: .code-example }
`OnCorpseRemoved((creature,delay) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `delay` | `uint32` |

{: .api-section }
### OnCreate




{: .code-example }
`OnCreate((creature,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnDeath




{: .code-example }
`OnDeath((dying,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `dying` | [`TSCreature`](../classes/TSCreature) |
| `killer` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnDeathEarly




{: .code-example }
`OnDeathEarly((dying,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `dying` | [`TSCreature`](../classes/TSCreature) |
| `killer` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnDespawn




{: .code-example }
`OnDespawn((despawning,summoner) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `despawning` | [`TSCreature`](../classes/TSCreature) |
| `summoner` | [`TSWorldObject`](../classes/TSWorldObject) |

{: .api-section }
### OnGenerateLoot




{: .code-example }
`OnGenerateLoot((generating,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `generating` | [`TSCreature`](../classes/TSCreature) |
| `killer` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnGeneratePickPocketLoot



NOTE: You may need to also call "OnCanGeneratePickPocketLoot" if this doesn't fire for your specific creature


{: .code-example }
`OnGeneratePickPocketLoot((creature,player,loot) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `loot` | [`TSLoot`](../classes/TSLoot) |

{: .api-section }
### OnGenerateSkinningLoot




{: .code-example }
`OnGenerateSkinningLoot((creature,player,loot) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `loot` | [`TSLoot`](../classes/TSLoot) |

{: .api-section }
### OnGossipHello




{: .code-example }
`OnGossipHello((creature,player,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipSelect




{: .code-example }
`OnGossipSelect((creature,player,menuId,selectionId,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `menuId` | `number` |
| `selectionId` | `number` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnGossipSelectCode




{: .code-example }
`OnGossipSelectCode((creature,player,menuId,selectionId,code,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `menuId` | `number` |
| `selectionId` | `number` |
| `code` | `string` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnHitBySpell




{: .code-example }
`OnHitBySpell((target,caster,spellInfo) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `target` | [`TSCreature`](../classes/TSCreature) |
| `caster` | [`TSWorldObject`](../classes/TSWorldObject) |
| `spellInfo` | [`TSSpellInfo`](../classes/TSSpellInfo) |

{: .api-section }
### OnIsSummoned




{: .code-example }
`OnIsSummoned((summoned,summoner) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `summoned` | [`TSCreature`](../classes/TSCreature) |
| `summoner` | [`TSWorldObject`](../classes/TSWorldObject) |

{: .api-section }
### OnJustAppeared




{: .code-example }
`OnJustAppeared((creature) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnJustEnteredCombat




{: .code-example }
`OnJustEnteredCombat((creature,target) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `target` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnKilledUnit




{: .code-example }
`OnKilledUnit((killer,killed) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `killer` | [`TSCreature`](../classes/TSCreature) |
| `killed` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnMoveInLOS




{: .code-example }
`OnMoveInLOS((creature,seen) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `seen` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnMovementInform




{: .code-example }
`OnMovementInform((creature,type,id) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `type` | `uint32` |
| `id` | `uint32` |

{: .api-section }
### OnOwnerAttacked




{: .code-example }
`OnOwnerAttacked((creature,attacker) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `attacker` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnOwnerAttacks




{: .code-example }
`OnOwnerAttacks((creature,target) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `target` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnPassengerBoarded




{: .code-example }
`OnPassengerBoarded((creature,passenger,seatId,isFirst) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `passenger` | [`TSUnit`](../classes/TSUnit) |
| `seatId` | `int8` |
| `isFirst` | `boolean` |

{: .api-section }
### OnQuestAccept




{: .code-example }
`OnQuestAccept((creature,player,quest) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `quest` | [`TSQuest`](../classes/TSQuest) |

{: .api-section }
### OnQuestReward




{: .code-example }
`OnQuestReward((creature,player,quest,selection) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `selection` | `uint32` |

{: .api-section }
### OnReachedHome




{: .code-example }
`OnReachedHome((creature) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnReceiveEmote




{: .code-example }
`OnReceiveEmote((receiver,player,emote) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `receiver` | [`TSCreature`](../classes/TSCreature) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `emote` | `uint32` |

{: .api-section }
### OnReload




{: .code-example }
`OnReload((creature) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnSendVendorItem




{: .code-example }
`OnSendVendorItem((creature,item,player,shouldSend,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `item` | [`TSItemTemplate`](../classes/TSItemTemplate) |
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `shouldSend` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnSpellCastFinished




{: .code-example }
`OnSpellCastFinished((caster,spellInfo,reason) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `caster` | [`TSCreature`](../classes/TSCreature) |
| `spellInfo` | [`TSSpellInfo`](../classes/TSSpellInfo) |
| `reason` | [`SpellFinishReason`](../enums/SpellFinishReason) |

{: .api-section }
### OnSpellClick




{: .code-example }
`OnSpellClick((creature,clicker,isFirst) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `clicker` | [`TSUnit`](../classes/TSUnit) |
| `isFirst` | `boolean` |

{: .api-section }
### OnSpellHitTarget




{: .code-example }
`OnSpellHitTarget((caster,target,spellInfo) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `caster` | [`TSCreature`](../classes/TSCreature) |
| `target` | [`TSWorldObject`](../classes/TSWorldObject) |
| `spellInfo` | [`TSSpellInfo`](../classes/TSSpellInfo) |

{: .api-section }
### OnSummonDespawn




{: .code-example }
`OnSummonDespawn((summoner,summon) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `summoner` | [`TSCreature`](../classes/TSCreature) |
| `summon` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnSummonDies




{: .code-example }
`OnSummonDies((summoner,summon,killer) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `summoner` | [`TSCreature`](../classes/TSCreature) |
| `summon` | [`TSCreature`](../classes/TSCreature) |
| `killer` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnSummoned




{: .code-example }
`OnSummoned((summoner,summon) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `summoner` | [`TSCreature`](../classes/TSCreature) |
| `summon` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnUpdateAI




{: .code-example }
`OnUpdateAI((creature,diff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `diff` | `uint32` |

{: .api-section }
### OnUpdateArmor




{: .code-example }
`OnUpdateArmor((creature,value,isGuardian) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `value` | `TSMutableNumber`<`float`\> |
| `isGuardian` | `boolean` |

{: .api-section }
### OnUpdateAttackPowerDamage




{: .code-example }
`OnUpdateAttackPowerDamage((creature,base,mod,multiplier,isGuardian,ranged) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `base` | `TSMutableNumber`<`float`\> |
| `mod` | `TSMutableNumber`<`float`\> |
| `multiplier` | `TSMutableNumber`<`float`\> |
| `isGuardian` | `boolean` |
| `ranged` | `boolean` |

{: .api-section }
### OnUpdateDamagePhysical




{: .code-example }
`OnUpdateDamagePhysical((creature,min,max,isGuardian,attType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `min` | `TSMutableNumber`<`float`\> |
| `max` | `TSMutableNumber`<`float`\> |
| `isGuardian` | `boolean` |
| `attType` | [`WeaponAttackType`](../enums/WeaponAttackType) |

{: .api-section }
### OnUpdateLvlDepArmor




{: .code-example }
`OnUpdateLvlDepArmor((creature,armorOut,baseArmor) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `armorOut` | `TSMutableNumber`<`uint32`\> |
| `baseArmor` | `TSNumber`<`float`\> |

{: .api-section }
### OnUpdateLvlDepAttackPower




{: .code-example }
`OnUpdateLvlDepAttackPower((creature,attackPower,rangedAttackPower) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `attackPower` | `TSMutableNumber`<`uint32`\> |
| `rangedAttackPower` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnUpdateLvlDepBaseDamage




{: .code-example }
`OnUpdateLvlDepBaseDamage((creature,baseMinDamage,baseMaxDamage,baseDamageIn) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `baseMinDamage` | `TSMutableNumber`<`uint32`\> |
| `baseMaxDamage` | `TSMutableNumber`<`uint32`\> |
| `baseDamageIn` | `TSNumber`<`float`\> |

{: .api-section }
### OnUpdateLvlDepMaxHealth




{: .code-example }
`OnUpdateLvlDepMaxHealth((creature,maxHealth,rankHealthMod,baseHp) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `maxHealth` | `TSMutableNumber`<`uint32`\> |
| `rankHealthMod` | `TSNumber`<`float`\> |
| `baseHp` | `TSNumber`<`uint32`\> |

{: .api-section }
### OnUpdateLvlDepMaxMana




{: .code-example }
`OnUpdateLvlDepMaxMana((creature,maxMana,baseMana) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `maxMana` | `TSMutableNumber`<`uint32`\> |
| `baseMana` | `TSNumber`<`float`\> |

{: .api-section }
### OnUpdateMaxHealth




{: .code-example }
`OnUpdateMaxHealth((creature,value,isGuardian) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `value` | `TSMutableNumber`<`float`\> |
| `isGuardian` | `boolean` |

{: .api-section }
### OnUpdateMaxPower




{: .code-example }
`OnUpdateMaxPower((creature,value,isGuardian,powerType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `value` | `TSMutableNumber`<`float`\> |
| `isGuardian` | `boolean` |
| `powerType` | [`Powers`](../enums/Powers) |

{: .api-section }
### OnUpdateResistance




{: .code-example }
`OnUpdateResistance((creature,value,isGuardian,school) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `value` | `TSMutableNumber`<`float`\> |
| `isGuardian` | `boolean` |
| `school` | [`SpellSchools`](../enums/SpellSchools) |

{: .api-section }
### OnWaypointPathEnded




{: .code-example }
`OnWaypointPathEnded((creature,id,path) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `id` | `uint32` |
| `path` | `uint32` |

{: .api-section }
### OnWaypointReached




{: .code-example }
`OnWaypointReached((creature,id,path) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `id` | `uint32` |
| `path` | `uint32` |

{: .api-section }
### OnWaypointStarted




{: .code-example }
`OnWaypointStarted((creature,id,path) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `id` | `uint32` |
| `path` | `uint32` |
