---
title: Player
---






{: .api-section }
### OnBindToInstance




{: .code-example }
`OnBindToInstance((player,difficulty,mapId,permanent,extendState) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `difficulty` | `uint32` |
| `mapId` | `uint32` |
| `permanent` | `boolean` |
| `extendState` | `uint8` |

{: .api-section }
### OnCalcGreyLevel




{: .code-example }
`OnCalcGreyLevel((player,level) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `level` | `TSMutableNumber`<`uint8`\> |

{: .api-section }
### OnCalcGroupGain




{: .code-example }
`OnCalcGroupGain((killer,groupRate,count,isRaid) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `killer` | [`TSPlayer`](../classes/TSPlayer) |
| `groupRate` | `TSMutableNumber`<`float`\> |
| `count` | `TSNumber`<`uint32`\> |
| `isRaid` | `boolean` |

{: .api-section }
### OnCalcIntellectManaBonus




{: .code-example }
`OnCalcIntellectManaBonus((player,bonus,baseInt,bonusInt) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `bonus` | `TSMutableNumber`<`float`\> |
| `baseInt` | `TSNumber`<`float`\> |
| `bonusInt` | `TSNumber`<`float`\> |

{: .api-section }
### OnCalcSkillGainChance




{: .code-example }
`OnCalcSkillGainChance((player,chance,skillId,value,grayLevel,greenLevel,yellowLevel) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `chance` | `TSMutableNumber`<`int`\> |
| `skillId` | `int` |
| `value` | `int` |
| `grayLevel` | `int` |
| `greenLevel` | `int` |
| `yellowLevel` | `int` |

{: .api-section }
### OnCalcStaminaHealthBonus




{: .code-example }
`OnCalcStaminaHealthBonus((player,bonus,baseStam,bonusStam) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `bonus` | `TSMutableNumber`<`float`\> |
| `baseStam` | `TSNumber`<`float`\> |
| `bonusStam` | `TSNumber`<`float`\> |

{: .api-section }
### OnCalcTalentPoints




{: .code-example }
`OnCalcTalentPoints((player,talents) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `talents` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnCalcZeroDiff




{: .code-example }
`OnCalcZeroDiff((player,zeroDiff) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `zeroDiff` | `TSMutableNumber`<`uint8`\> |

{: .api-section }
### OnChat




{: .code-example }
`OnChat((player,channel,msg,type,lang) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `channel` | [`TSChannel`](../classes/TSChannel) |
| `msg` | [`TSMutableString`](../classes/TSMutableString) |
| `type` | `uint32` |
| `lang` | `uint32` |

{: .api-section }
### OnChatGroup




{: .code-example }
`OnChatGroup((player,group,message,type,lang) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `group` | [`TSGroup`](../classes/TSGroup) |
| `message` | [`TSMutableString`](../classes/TSMutableString) |
| `type` | `uint32` |
| `lang` | `uint32` |

{: .api-section }
### OnChatGuild




{: .code-example }
`OnChatGuild((player,guild,message,type,lang) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `guild` | [`TSGuild`](../classes/TSGuild) |
| `message` | [`TSMutableString`](../classes/TSMutableString) |
| `type` | `uint32` |
| `lang` | `uint32` |

{: .api-section }
### OnCommand




{: .code-example }
`OnCommand((player,command,found,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `command` | [`TSMutableString`](../classes/TSMutableString) |
| `found` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnCreate




{: .code-example }
`OnCreate((player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnCreateEarly




{: .code-example }
`OnCreateEarly((player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnCreatureKill




{: .code-example }
`OnCreatureKill((killer,killed) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `killer` | [`TSPlayer`](../classes/TSPlayer) |
| `killed` | [`TSCreature`](../classes/TSCreature) |

{: .api-section }
### OnDelete




{: .code-example }
`OnDelete((guid,accountId) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guid` | `uint64` |
| `accountId` | `uint32` |

{: .api-section }
### OnDuelEnd




{: .code-example }
`OnDuelEnd((winner,loser,type) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `winner` | [`TSPlayer`](../classes/TSPlayer) |
| `loser` | [`TSPlayer`](../classes/TSPlayer) |
| `type` | `uint32` |

{: .api-section }
### OnDuelRequest




{: .code-example }
`OnDuelRequest((target,challenger) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `target` | [`TSPlayer`](../classes/TSPlayer) |
| `challenger` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnDuelStart




{: .code-example }
`OnDuelStart((player1,player2) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player1` | [`TSPlayer`](../classes/TSPlayer) |
| `player2` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnEmote




{: .code-example }
`OnEmote((player,emote) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `emote` | `uint32` |

{: .api-section }
### OnFailedDelete




{: .code-example }
`OnFailedDelete((guid,accountId) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `guid` | `uint64` |
| `accountId` | `uint32` |

{: .api-section }
### OnFreeTalentPointsChanged




{: .code-example }
`OnFreeTalentPointsChanged((player,points) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `points` | `uint32` |

{: .api-section }
### OnGenerateItemLoot




{: .code-example }
`OnGenerateItemLoot((player,item,loot,type) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `item` | [`TSItem`](../classes/TSItem) |
| `loot` | [`TSLoot`](../classes/TSLoot) |
| `type` | `uint32` |

{: .api-section }
### OnGiveXP




{: .code-example }
`OnGiveXP((player,amount,victim) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `amount` | `TSMutableNumber`<`uint32`\> |
| `victim` | [`TSUnit`](../classes/TSUnit) |

{: .api-section }
### OnGlyphInitForLevel



**`note`** Use with Spell.OnEffectApplyGlyph


{: .code-example }
`OnGlyphInitForLevel((player,activeGlyphSlot) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `activeGlyphSlot` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnLearnTalent




{: .code-example }
`OnLearnTalent((player,tabId,talentId,talentRank,spellId,cancel,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `tabId` | `uint32` |
| `talentId` | `uint32` |
| `talentRank` | `uint32` |
| `spellId` | `uint32` |
| `cancel` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnLevelChanged




{: .code-example }
`OnLevelChanged((player,oldLevel) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `oldLevel` | `uint8` |

{: .api-section }
### OnLogin




{: .code-example }
`OnLogin((player,firstLogin) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `firstLogin` | `boolean` |

{: .api-section }
### OnLogout




{: .code-example }
`OnLogout((player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnLootCorpse




{: .code-example }
`OnLootCorpse((player,corpse) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `corpse` | [`TSCorpse`](../classes/TSCorpse) |

{: .api-section }
### OnMapChanged




{: .code-example }
`OnMapChanged((player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnMoneyChanged




{: .code-example }
`OnMoneyChanged((player,amount) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `amount` | `TSMutableNumber`<`int32`\> |

{: .api-section }
### OnMoneyLimit




{: .code-example }
`OnMoneyLimit((player,amount) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `amount` | `int32` |

{: .api-section }
### OnMovieComplete




{: .code-example }
`OnMovieComplete((player,movieId) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `movieId` | `uint32` |

{: .api-section }
### OnPVPKill




{: .code-example }
`OnPVPKill((killer,killed) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `killer` | [`TSPlayer`](../classes/TSPlayer) |
| `killed` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnPlayerKilledByCreature




{: .code-example }
`OnPlayerKilledByCreature((killer,killed) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `killer` | [`TSCreature`](../classes/TSCreature) |
| `killed` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnPlayerRepop




{: .code-example }
`OnPlayerRepop((player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnQuestObjectiveProgress




{: .code-example }
`OnQuestObjectiveProgress((player,quest,objectiveIndex,progress) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `quest` | [`TSQuest`](../classes/TSQuest) |
| `objectiveIndex` | `uint32` |
| `progress` | `uint16` |

{: .api-section }
### OnQuestStatusChange




{: .code-example }
`OnQuestStatusChange((player,questId) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `questId` | `uint32` |

{: .api-section }
### OnReload




{: .code-example }
`OnReload((player,firstLogin) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `firstLogin` | `boolean` |

{: .api-section }
### OnReputationChange




{: .code-example }
`OnReputationChange((player,factionId,standing,incremental) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `factionId` | `uint32` |
| `standing` | `TSMutableNumber`<`int32`\> |
| `incremental` | `boolean` |

{: .api-section }
### OnReputationPriceDiscount




{: .code-example }
`OnReputationPriceDiscount((player,faction,creature,money) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `faction` | [`TSFactionTemplate`](../classes/TSFactionTemplate) |
| `creature` | [`TSCreature`](../classes/TSCreature) |
| `money` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnSave




{: .code-example }
`OnSave((player) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |

{: .api-section }
### OnSay




{: .code-example }
`OnSay((player,msg,type,lang) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `msg` | [`TSMutableString`](../classes/TSMutableString) |
| `type` | `uint32` |
| `lang` | `uint32` |

{: .api-section }
### OnSendMail




{: .code-example }
`OnSendMail((player,draft,delay) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `draft` | [`TSMailDraft`](../classes/TSMailDraft) |
| `delay` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnSpellCast




{: .code-example }
`OnSpellCast((player,spell,skipCheck) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `spell` | [`TSSpell`](../classes/TSSpell) |
| `skipCheck` | `boolean` |

{: .api-section }
### OnTalentsReset




{: .code-example }
`OnTalentsReset((player,noCost) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `noCost` | `boolean` |

{: .api-section }
### OnTalentsResetEarly




{: .code-example }
`OnTalentsResetEarly((player,noCost,boolean\>) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `noCost` | [`TSMutable`](../classes/TSMutable)<`boolean` |
| `boolean\>` | undefined |

{: .api-section }
### OnTalentsResetLate




{: .code-example }
`OnTalentsResetLate((player,noCost) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `noCost` | `boolean` |

{: .api-section }
### OnTextEmote




{: .code-example }
`OnTextEmote((player,textEmote,emoteNum,guid) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `textEmote` | `uint32` |
| `emoteNum` | `uint32` |
| `guid` | `uint64` |

{: .api-section }
### OnTradeCompleted




{: .code-example }
`OnTradeCompleted((me,him,myItems,hisItems,myGold,hisGold) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `me` | [`TSPlayer`](../classes/TSPlayer) |
| `him` | [`TSPlayer`](../classes/TSPlayer) |
| `myItems` | `TSArray`<[`TSItem`](TSItem)\> |
| `hisItems` | `TSArray`<[`TSItem`](TSItem)\> |
| `myGold` | `uint32` |
| `hisGold` | `uint32` |

{: .api-section }
### OnUpdateArmor




{: .code-example }
`OnUpdateArmor((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateArmorPenetration




{: .code-example }
`OnUpdateArmorPenetration((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`int32`\> |

{: .api-section }
### OnUpdateAttackPower




{: .code-example }
`OnUpdateAttackPower((player,attackPower) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `attackPower` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateBlockPercentage




{: .code-example }
`OnUpdateBlockPercentage((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateCrit




{: .code-example }
`OnUpdateCrit((player,value,attackType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |
| `attackType` | [`WeaponAttackType`](../enums/WeaponAttackType) |

{: .api-section }
### OnUpdateDodgePercentage




{: .code-example }
`OnUpdateDodgePercentage((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateExpertise




{: .code-example }
`OnUpdateExpertise((player,value,type,item) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`int32`\> |
| `type` | [`WeaponAttackType`](../enums/WeaponAttackType) |
| `item` | [`TSItem`](../classes/TSItem) |

{: .api-section }
### OnUpdateManaRegen




{: .code-example }
`OnUpdateManaRegen((player,power,mp5,manaRegen) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `power` | `TSMutableNumber`<`float`\> |
| `mp5` | `TSMutableNumber`<`float`\> |
| `manaRegen` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateMaxHealth




{: .code-example }
`OnUpdateMaxHealth((player,health) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `health` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateMaxPower




{: .code-example }
`OnUpdateMaxPower((player,power,type,bonus) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `power` | `TSMutableNumber`<`float`\> |
| `type` | [`Powers`](../enums/Powers) |
| `bonus` | `TSNumber`<`float`\> |

{: .api-section }
### OnUpdateMeleeHitChance




{: .code-example }
`OnUpdateMeleeHitChance((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateMeleeHitChances




{: .code-example }
`OnUpdateMeleeHitChances((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateParryPercentage




{: .code-example }
`OnUpdateParryPercentage((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateRangedAttackPower




{: .code-example }
`OnUpdateRangedAttackPower((player,attackPower) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `attackPower` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateRangedHitChances




{: .code-example }
`OnUpdateRangedHitChances((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateResistance




{: .code-example }
`OnUpdateResistance((player,value,school) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |
| `school` | [`SpellSchools`](../enums/SpellSchools) |

{: .api-section }
### OnUpdateRuneRegen




{: .code-example }
`OnUpdateRuneRegen((player,value,runteType) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |
| `runteType` | [`RuneType`](../enums/RuneType) |

{: .api-section }
### OnUpdateShieldBlock




{: .code-example }
`OnUpdateShieldBlock((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`uint32`\> |

{: .api-section }
### OnUpdateSpellCrit




{: .code-example }
`OnUpdateSpellCrit((player,value,school) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |
| `school` | [`SpellSchools`](../enums/SpellSchools) |

{: .api-section }
### OnUpdateSpellHitChances




{: .code-example }
`OnUpdateSpellHitChances((player,value) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `value` | `TSMutableNumber`<`float`\> |

{: .api-section }
### OnUpdateZone




{: .code-example }
`OnUpdateZone((player,newZone,newArea) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `player` | [`TSPlayer`](../classes/TSPlayer) |
| `newZone` | `uint32` |
| `newArea` | `uint32` |

{: .api-section }
### OnWhisper




{: .code-example }
`OnWhisper((sender,receiver,message,type,lang) => void`
#### Event Parameters

{: .table .table-bordered .event-table .api-table}
| Name | Type |
|-
| `sender` | [`TSPlayer`](../classes/TSPlayer) |
| `receiver` | [`TSPlayer`](../classes/TSPlayer) |
| `message` | [`TSMutableString`](../classes/TSMutableString) |
| `type` | `uint32` |
| `lang` | `uint32` |
