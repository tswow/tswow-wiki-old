---
title: TSQuest
---


## Methods

{: .api-section }
### GetFlags

{: .code-example }
`GetFlags(): TSNumber<uint32>`

Returns the [Quest]'s flags.

**Returns:** 
`TSNumber`<`uint32`\>

flags

___

{: .api-section }
### GetID

{: .code-example }
`GetID(): TSNumber<uint32>`

Returns entry ID of the [Quest].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 entryId

___

{: .api-section }
### GetLevel

{: .code-example }
`GetLevel(): TSNumber<uint32>`

Returns the [Quest]'s level.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 level

___

{: .api-section }
### GetMinLevel

{: .code-example }
`GetMinLevel(): TSNumber<uint32>`

Returns the minimum level required to pick up the [Quest].

**Returns:** 
`TSNumber`<`uint32`\>

uint32 minLevel

___

{: .api-section }
### GetNextQuestID

{: .code-example }
`GetNextQuestID(): TSNumber<int32>`

Returns the next [Quest] entry ID.

**Returns:** 
`TSNumber`<`int32`\>

int32 entryId

___

{: .api-section }
### GetNextQuestInChain

{: .code-example }
`GetNextQuestInChain(): TSNumber<int32>`

Returns the next [Quest] entry ID in the specific [Quest] chain.

**Returns:** 
`TSNumber`<`int32`\>

int32 entryId

___

{: .api-section }
### GetPrevQuestID

{: .code-example }
`GetPrevQuestID(): TSNumber<int32>`

Returns the previous [Quest] entry ID.

**Returns:** 
`TSNumber`<`int32`\>

int32 entryId

___

{: .api-section }
### GetType

{: .code-example }
`GetType(): TSNumber<uint32>`

Returns the [Quest]'s type.

TODO: Document types available.

**Returns:** 
`TSNumber`<`uint32`\>

uint32 type

___

{: .api-section }
### HasFlag

{: .code-example }
`HasFlag(flag): boolean`

Returns 'true' if the [Quest] has the specified flag, false otherwise.
Below flags are based off of 3.3.5a. Subject to change.

    enum QuestFlags
    {
        // Flags used at server and sent to client
        QUEST_FLAGS_NONE                    = 0x0,
        QUEST_FLAGS_STAY_ALIVE              = 0x1,       // Not used currently
        QUEST_FLAGS_PARTY_ACCEPT            = 0x2,       // Not used currently. If player in party, all players that can accept this quest will receive confirmation box to accept quest CMSG_QUEST_CONFIRM_ACCEPT/SMSG_QUEST_CONFIRM_ACCEPT
        QUEST_FLAGS_EXPLORATION             = 0x4,       // Not used currently
        QUEST_FLAGS_SHARABLE                = 0x8,       // Can be shared: Player::CanShareQuest()
        QUEST_FLAGS_HAS_CONDITION           = 0x10,      // Not used currently
        QUEST_FLAGS_HIDE_REWARD_POI         = 0x20,      // Not used currently: Unsure of content
        QUEST_FLAGS_RAID                    = 0x40,      // Not used currently
        QUEST_FLAGS_TBC                     = 0x80,      // Not used currently: Available if TBC expansion enabled only
        QUEST_FLAGS_NO_MONEY_FROM_XP        = 0x100,     // Not used currently: Experience is not converted to gold at max level
        QUEST_FLAGS_TRACKING                = 0x400,     // These quests are automatically rewarded on quest complete and they will never appear in quest log client side.
        QUEST_FLAGS_DEPRECATE_REPUTATION    = 0x800,     // Not used currently
        QUEST_FLAGS_DAILY                   = 0x1000,    // Used to know quest is Daily one
        QUEST_FLAGS_FLAGS_PVP               = 0x2000,    // Having this quest in log forces PvP flag
        QUEST_FLAGS_UNAVAILABLE             = 0x4000,    // Used on quests that are not generically available
        QUEST_FLAGS_WEEKLY                  = 0x8000,
        QUEST_FLAGS_AUTOCOMPLETE            = 0x10000,   // auto complete
        QUEST_FLAGS_DISPLAY_ITEM_IN_TRACKER = 0x20000,   // Displays usable item in quest tracker
        QUEST_FLAGS_OBJ_TEXT                = 0x40000,   // use Objective text as Complete text
        QUEST_FLAGS_AUTO_ACCEPT             = 0x80000,   // The client recognizes this flag as auto-accept. However, NONE of the current quests (3.3.5a) have this flag. Maybe blizz used to use it, or will use it in the future.

        // ... 4.x added flags up to 0x80000000 - all unknown for now
    }

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `flag` | [`QuestFlags`](../enums/QuestFlags) | : all available flags can be seen above |

**Returns:** 
`boolean`

bool hasFlag

___

{: .api-section }
### IsDaily

{: .code-example }
`IsDaily(): boolean`

Returns 'true' if the [Quest] is a daily quest, false otherwise.

**Returns:** 
`boolean`

bool isDaily

___

{: .api-section }
### IsNull

{: .code-example }
`IsNull(): boolean`

**Returns:** 
`boolean`

___

{: .api-section }
### IsRepeatable

{: .code-example }
`IsRepeatable(): boolean`

Returns 'true' if the [Quest] is repeatable, false otherwise.

**Returns:** 
`boolean`

bool isRepeatable

