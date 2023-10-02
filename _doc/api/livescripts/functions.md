---
title: Functions
excerpt: Global functions
icon:
  type: fa
  name: fa-cubes
color: green
---


### ASSERT\_WORLD\_TABLE

{: .code-example }
`ASSERT_WORLD_TABLE(table, columns?): any`

Runs a compile-time check that a given world database table exists.

**Important**: This function does **nothing** at runtime.

**Motivation**: It's easy to forget building datascripts after a rebuild
                or reinstallation before you build your scripts.
                This helps you catch such errors before you try reading it in the worldserver.

**Type Codes**: Optionally, the second argument can be used to supply a string list of type characters
                to check that the table has some expected number of columns with specific types.
                `i` checks for integer types, `s` for strings, `f` for floats and `*` for any type.

**Examples**:

    ASSERT_WORLD_TABLE("my_table","s") // asserts "my_table" column 1 is a string.

    ASSERT_WORLD_TABLE("my_table","*i") // asserts "my_table" column 2 is an integer.

    ASSERT_WORLD_TABLE("my_table","si") // asserts "my_table" column 1 is a string and column 2 is an integer.

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `table` | `string` |
| `columns?` | `string` |

**Returns:** 
`any`


___

### AppendFile

{: .code-example }
`AppendFile(file, value): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `file` | `string` |
| `value` | `string` |

**Returns:** 
`any`


___

### AuthDatabaseInfo

{: .code-example }
`AuthDatabaseInfo(): TSDatabaseConnectionInfo`

**Returns:** 
[`TSDatabaseConnectionInfo`](classes/TSDatabaseConnectionInfo)


___

### AuthTable

{: .code-example }
`AuthTable(classTarget): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `classTarget` | `any` |

**Returns:** 
`any`


___

### CharacterDatabaseInfo

{: .code-example }
`CharacterDatabaseInfo(): TSDatabaseConnectionInfo`

**Returns:** 
[`TSDatabaseConnectionInfo`](classes/TSDatabaseConnectionInfo)


___

### CharactersTable

{: .code-example }
`CharactersTable(classTarget): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `classTarget` | `any` |

**Returns:** 
`any`


___

### CreateArray

{: .code-example }
`CreateArray<T>(obj): TSArray<T>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | `T`[] |

**Returns:** 
`TSArray`<`T`\>


___

### CreateCustomPacket

{: .code-example }
`CreateCustomPacket(opcode, size): TSPacketWrite`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `opcode` | `uint32` |
| `size` | `uint32` |

**Returns:** 
[`TSPacketWrite`](classes/TSPacketWrite)


___

### CreateDictionary

{: .code-example }
`CreateDictionary<K, V>(obj): TSDictionary<K, V>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `K` |
| `V` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `obj` | `Object` |

**Returns:** 
[`TSDictionary`](classes/TSDictionary)<`K`, `V`\>


___

### CreateGUID

{: .code-example }
`CreateGUID(high, counter): TSGUID`

Constructs a new GUID object for global entities

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `high` | [`HighGuid`](enums/HighGuid) |
| `counter` | `TSNumber`<`uint32`\> |

**Returns:** 
[`TSGUID`](interfaces/TSGUID)


___

### CreateItem

{: .code-example }
`CreateItem(entry, count): TSItem`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `count` | `uint32` |

**Returns:** 
[`TSItem`](classes/TSItem)


___

### CreateItemEntry

{: .code-example }
`CreateItemEntry(entry, count): TSItemEntry`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |
| `count` | `uint32` |

**Returns:** 
[`TSItemEntry`](classes/TSItemEntry)


___

### CreateItemTemplate

{: .code-example }
`CreateItemTemplate(entry, copyItemID?): TSItemTemplate`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type | Description |
|-
| `entry` | `uint32` | The id to be used for the new item template. |
| `copyItemID?` | `uint32` | - |

**Returns:** 
[`TSItemTemplate`](interfaces/TSItemTemplate)


___

### CreateLootItem

{: .code-example }
`CreateLootItem(id, reference?, chance?, lootmode?, needsQuest?, groupId?, minCount?, maxCount?): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `id` | `uint32` |
| `reference?` | `uint32` |
| `chance?` | `float` |
| `lootmode?` | `uint16` |
| `needsQuest?` | `boolean` |
| `groupId?` | `uint8` |
| `minCount?` | `uint8` |
| `maxCount?` | `uint8` |

**Returns:** 
`any`


___

### CreateMutex

{: .code-example }
`CreateMutex(): TSMutex`

**Returns:** 
[`TSMutex`](interfaces/TSMutex)


___

### CreateMutexLock

{: .code-example }
`CreateMutexLock(): TSMutex`

**`deprecated`** use CreateMutex

**Returns:** 
[`TSMutex`](interfaces/TSMutex)


___

### CreateOutfit

{: .code-example }
`CreateOutfit(race, gender): TSOutfit`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `race` | [`Race`](enums/Race) |
| `gender` | [`Gender`](enums/Gender) |

**Returns:** 
[`TSOutfit`](interfaces/TSOutfit)


___

### CreatePosition

{: .code-example }
`CreatePosition(map, x, y, z, o): TSPosition`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `map` | `uint32` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `o` | `float` |

**Returns:** 
[`TSPosition`](classes/TSPosition)


___

### CreateTSMutable

{: .code-example }
`CreateTSMutable<T>(ptr): TSMutable<T, T>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `T` |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `ptr` | `T` |

**Returns:** 
[`TSMutable`](interfaces/TSMutable)<`T`, `T`\>


___

### DBField

{: .code-example }
`DBField(fieldTarget, name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `fieldTarget` | `any` |
| `name` | `any` |

**Returns:** 
`any`


___

### DBFieldVarChar

{: .code-example }
`DBFieldVarChar(chars): (target: any, name: any) => void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `chars` | `number` |

**Returns:** 
`fn`

▸ (`target`, `name`): `void`

##### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | `any` |
| `name` | `any` |

#**Returns:** 
`void`


___

### DBPrimaryKey

{: .code-example }
`DBPrimaryKey(pkTarget, name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `pkTarget` | `any` |
| `name` | `any` |

**Returns:** 
`any`


___

### DBPrimaryKeyVarChar

{: .code-example }
`DBPrimaryKeyVarChar(chars): (target: any, name: any) => void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `chars` | `number` |

**Returns:** 
`fn`

▸ (`target`, `name`): `void`

##### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `target` | `any` |
| `name` | `any` |

#**Returns:** 
`void`


___

### DeleteDBArrayEntry

{: .code-example }
`DeleteDBArrayEntry<T>(con, sql): void`

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `T` | extends [`DBArrayEntry`](classes/DBArrayEntry)<`T`\> |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `con` | (...`args`: `any`[]) => `T` |
| `sql` | `string` |

**Returns:** 
`void`


___

### DeleteDBEntry

{: .code-example }
`DeleteDBEntry<T>(con, sql): void`

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `T` | extends [`DBEntry`](classes/DBEntry)<`T`\> |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `con` | (...`args`: `any`[]) => `T` |
| `sql` | `string` |

**Returns:** 
`void`


___

### EmptyGUID

{: .code-example }
`EmptyGUID(): TSGUID`

Creates an empty invalid guid

**Returns:** 
[`TSGUID`](interfaces/TSGUID)


___

### FileExists

{: .code-example }
`FileExists(file): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `file` | `string` |

**Returns:** 
`boolean`


___

### GetActiveGameEvents

{: .code-example }
`GetActiveGameEvents(): TSArray<uint16>`

**Returns:** 
`TSArray`<`uint16`\>


___

### GetAuthDBConnection

{: .code-example }
`GetAuthDBConnection(): TSAuthDatabaseConnection`

**Returns:** 
[`TSAuthDatabaseConnection`](interfaces/TSAuthDatabaseConnection)


___

### GetCharactersDBConnection

{: .code-example }
`GetCharactersDBConnection(): TSCharactersDatabaseConnection`

**Returns:** 
[`TSCharactersDatabaseConnection`](interfaces/TSCharactersDatabaseConnection)


___

### GetCreatureTemplate

{: .code-example }
`GetCreatureTemplate(entry): TSCreatureTemplate`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
[`TSCreatureTemplate`](interfaces/TSCreatureTemplate)


___

### GetCurrTime

{: .code-example }
`GetCurrTime(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>


___

### GetFactionTemplate

{: .code-example }
`GetFactionTemplate(entry): TSFactionTemplate`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
[`TSFactionTemplate`](interfaces/TSFactionTemplate)


___

### GetGameObjectTemplate

{: .code-example }
`GetGameObjectTemplate(entry): TSGameObjectTemplate`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
[`TSGameObjectTemplate`](interfaces/TSGameObjectTemplate)


___

### GetGuild

{: .code-example }
`GetGuild(guid): TSGuild`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint32` |

**Returns:** 
[`TSGuild`](interfaces/TSGuild)


___

### GetGuildByLeader

{: .code-example }
`GetGuildByLeader(guid): TSGuild`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `guid` | `uint64` |

**Returns:** 
[`TSGuild`](interfaces/TSGuild)


___

### GetGuildByName

{: .code-example }
`GetGuildByName(name): TSGuild`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `name` | `string` |

**Returns:** 
[`TSGuild`](interfaces/TSGuild)


___

### GetID

{: .code-example }
`GetID(table, mod, name): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `table` | `string` |
| `mod` | `string` |
| `name` | `string` |

**Returns:** 
`TSNumber`<`uint32`\>


___

### GetIDTag

{: .code-example }
`GetIDTag(mod, id): TSArray<uint32>`

**`deprecated`** use TAG macro

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mod` | `string` |
| `id` | `string` |

**Returns:** 
`TSArray`<`uint32`\>


___

### GetIDTagUnique

{: .code-example }
`GetIDTagUnique(mod, id): TSNumber<uint32>`

**`deprecated`** use UTAG

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mod` | `string` |
| `id` | `string` |

**Returns:** 
`TSNumber`<`uint32`\>


___

### GetItemTemplate

{: .code-example }
`GetItemTemplate(entry): TSItemTemplate`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
[`TSItemTemplate`](interfaces/TSItemTemplate)


___

### GetSpellInfo

{: .code-example }
`GetSpellInfo(entry): TSSpellInfo`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
[`TSSpellInfo`](interfaces/TSSpellInfo)


___

### GetTalentSpellCost

{: .code-example }
`GetTalentSpellCost(entry): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `entry` | `uint32` |

**Returns:** 
`TSNumber`<`uint32`\>


___

### GetUnixTime

{: .code-example }
`GetUnixTime(): TSNumber<uint64>`

**Returns:** 
`TSNumber`<`uint64`\>


___

### GetWorldDBConnection

{: .code-example }
`GetWorldDBConnection(): TSWorldDatabaseConnection`

**Returns:** 
[`TSWorldDatabaseConnection`](interfaces/TSWorldDatabaseConnection)


___

### HAS\_TAG

{: .code-example }
`HAS_TAG(item, mod, id): bool`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `item` | `uint32` |
| `mod` | `string` |
| `id` | `string` |

**Returns:** 
`bool`


___

### IsGameEventActive

{: .code-example }
`IsGameEventActive(event): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `event` | `uint16` |

**Returns:** 
`boolean`


___

### IsHolidayActive

{: .code-example }
`IsHolidayActive(holiday): boolean`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `holiday` | `uint16` |

**Returns:** 
`boolean`


___

### LoadDBArrayEntry

{: .code-example }
`LoadDBArrayEntry<T>(cons, ...pks): DBContainer<T>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `T` | extends [`DBArrayEntry`](classes/DBArrayEntry)<`T`\> |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `cons` | (...`args`: `any`[]) => `T` |
| `...pks` | `any`[] |

**Returns:** 
[`DBContainer`](classes/DBContainer)<`T`\>


___

### LoadDBEntry

{: .code-example }
`LoadDBEntry<T>(value): T`

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `T` | extends [`DBEntry`](classes/DBEntry)<`T`\> |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `value` | `T` |

**Returns:** 
`T`


___

### MakeDBDict

{: .code-example }
`MakeDBDict<K, V>(): TSDBDict<K, V>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name |
|-
| `K` |
| `V` |

**Returns:** 
[`TSDBDict`](classes/TSDBDict)<`K`, `V`\>


___

### Message

{: .code-example }
`Message(classTarget): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `classTarget` | `any` |

**Returns:** 
`any`


___

### ModID

{: .code-example }
`ModID(): TSNumber<uint32>`

**Returns:** 
`TSNumber`<`uint32`\>


___

### MsgClass

{: .code-example }
`MsgClass(classTarget, name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `classTarget` | `any` |
| `name` | `string` |

**Returns:** 
`any`


___

### MsgClassArray

{: .code-example }
`MsgClassArray(size): (field: any, name: any) => void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `size` | `number` |

**Returns:** 
`fn`

▸ (`field`, `name`): `void`

##### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `field` | `any` |
| `name` | `any` |

#**Returns:** 
`void`


___

### MsgPrimitive

{: .code-example }
`MsgPrimitive(classTarget, name): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `classTarget` | `any` |
| `name` | `string` |

**Returns:** 
`any`


___

### MsgPrimitiveArray

{: .code-example }
`MsgPrimitiveArray(capacity): (field: any, name: any) => void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `capacity` | `number` |

**Returns:** 
`fn`

▸ (`field`, `name`): `void`

##### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `field` | `any` |
| `name` | `any` |

#**Returns:** 
`void`


___

### MsgString

{: .code-example }
`MsgString(size): (field: any, name: any) => void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `size` | `number` |

**Returns:** 
`fn`

▸ (`field`, `name`): `void`

##### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `field` | `any` |
| `name` | `any` |

#**Returns:** 
`void`


___

### MsgStringArray

{: .code-example }
`MsgStringArray(arrSize, stringSize): (field: any, name: any) => void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `arrSize` | `number` |
| `stringSize` | `number` |

**Returns:** 
`fn`

▸ (`field`, `name`): `void`

##### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `field` | `any` |
| `name` | `any` |

#**Returns:** 
`void`


___

### NULL\_GAMEOBJECT

{: .code-example }
`NULL_GAMEOBJECT(): TSGameObject`

**Returns:** 
[`TSGameObject`](interfaces/TSGameObject)


___

### NULL\_MAP

{: .code-example }
`NULL_MAP(): TSMap`

**Returns:** 
[`TSMap`](interfaces/TSMap)


___

### NULL\_PLAYER

{: .code-example }
`NULL_PLAYER(): TSPlayer`

**Returns:** 
[`TSPlayer`](interfaces/TSPlayer)


___

### NULL\_SPELLINFO

{: .code-example }
`NULL_SPELLINFO(): TSSpellInfo`

**Returns:** 
[`TSSpellInfo`](interfaces/TSSpellInfo)


___

### NULL\_UNIT

{: .code-example }
`NULL_UNIT(): TSUnit`

**Returns:** 
[`TSUnit`](interfaces/TSUnit)


___

### PrepareAuthQuery

{: .code-example }
`PrepareAuthQuery(query): TSPreparedStatementAuth`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
[`TSPreparedStatementAuth`](interfaces/TSPreparedStatementAuth)


___

### PrepareCharactersQuery

{: .code-example }
`PrepareCharactersQuery(query): TSPreparedStatementCharacters`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
[`TSPreparedStatementCharacters`](interfaces/TSPreparedStatementCharacters)


___

### PrepareWorldQuery

{: .code-example }
`PrepareWorldQuery(query): TSPreparedStatementWorld`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
[`TSPreparedStatementWorld`](interfaces/TSPreparedStatementWorld)


___

### QueryAuth

{: .code-example }
`QueryAuth(query): TSDatabaseResult`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
[`TSDatabaseResult`](classes/TSDatabaseResult)


___

### QueryAuthAsync

{: .code-example }
`QueryAuthAsync(query): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
`void`


___

### QueryCharacters

{: .code-example }
`QueryCharacters(query): TSDatabaseResult`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
[`TSDatabaseResult`](classes/TSDatabaseResult)


___

### QueryCharactersAsync

{: .code-example }
`QueryCharactersAsync(query): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
`void`


___

### QueryDBEntry

{: .code-example }
`QueryDBEntry<T>(con, sql): TSArray<T>`

#### Type parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `T` | extends [`DBEntry`](classes/DBEntry)<`T`\> |

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `con` | (...`args`: `any`[]) => `T` |
| `sql` | `string` |

**Returns:** 
`TSArray`<`T`\>


___

### QueryWorld

{: .code-example }
`QueryWorld(query): TSDatabaseResult`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
[`TSDatabaseResult`](classes/TSDatabaseResult)


___

### QueryWorldAsync

{: .code-example }
`QueryWorldAsync(query): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `query` | `string` |

**Returns:** 
`void`


___

### ReadDirectory

{: .code-example }
`ReadDirectory(directory): string[]`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `directory` | `string` |

**Returns:** 
`string`[]


___

### ReadFile

{: .code-example }
`ReadFile(file, def?): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `file` | `string` |
| `def?` | `string` |

**Returns:** 
`string`


___

### SendWorldMessage

{: .code-example }
`SendWorldMessage(message): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `message` | `string` |

**Returns:** 
`any`


___

### StartGameEvent

{: .code-example }
`StartGameEvent(event_id): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `event_id` | `uint16` |

**Returns:** 
`void`


___

### StopGameEvent

{: .code-example }
`StopGameEvent(event_id): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `event_id` | `uint16` |

**Returns:** 
`void`


___

### SyncHttpGet

{: .code-example }
`SyncHttpGet(url): string`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `url` | `string` |

**Returns:** 
`string`


___

### TAG

{: .code-example }
`TAG(mod, id): TSArray<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mod` | `string` |
| `id` | `string` |

**Returns:** 
`TSArray`<`uint32`\>


___

### TS\_ZONE\_CATEGORY

{: .code-example }
`TS_ZONE_CATEGORY(color): ZoneCategory`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `color` | `uint32` |

**Returns:** 
`ZoneCategory`


___

### TS\_ZONE\_SCOPED

{: .code-example }
`TS_ZONE_SCOPED(cat): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `cat` | `uint32` |

**Returns:** 
`void`


___

### TS\_ZONE\_SCOPED\_N

{: .code-example }
`TS_ZONE_SCOPED_N(cat): void`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `cat` | `uint32` |

**Returns:** 
`void`


___

### ToDouble

{: .code-example }
`ToDouble(val): TSNumber<double>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`double`\>


___

### ToFloat

{: .code-example }
`ToFloat(val): TSNumber<float>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`float`\>


___

### ToInt16

{: .code-example }
`ToInt16(val): TSNumber<int16>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`int16`\>


___

### ToInt32

{: .code-example }
`ToInt32(val): TSNumber<int32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`int32`\>


___

### ToInt64

{: .code-example }
`ToInt64(val): TSNumber<int64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`int64`\>


___

### ToInt8

{: .code-example }
`ToInt8(val): TSNumber<int8>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`int8`\>


___

### ToStr

{: .code-example }
`ToStr(val): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `number` |

**Returns:** 
`any`


___

### ToUInt16

{: .code-example }
`ToUInt16(val): TSNumber<int16>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`int16`\>


___

### ToUInt32

{: .code-example }
`ToUInt32(val): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`uint32`\>


___

### ToUInt64

{: .code-example }
`ToUInt64(val): TSNumber<uint64>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`uint64`\>


___

### ToUInt8

{: .code-example }
`ToUInt8(val): TSNumber<uint8>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `val` | `string` |

**Returns:** 
`TSNumber`<`uint8`\>


___

### UTAG

{: .code-example }
`UTAG(mod, id): TSNumber<uint32>`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `mod` | `string` |
| `id` | `string` |

**Returns:** 
`TSNumber`<`uint32`\>


___

### WorldDatabaseInfo

{: .code-example }
`WorldDatabaseInfo(): TSDatabaseConnectionInfo`

**Returns:** 
[`TSDatabaseConnectionInfo`](classes/TSDatabaseConnectionInfo)


___

### WorldTable

{: .code-example }
`WorldTable(classTarget): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `classTarget` | `any` |

**Returns:** 
`any`


___

### WriteFile

{: .code-example }
`WriteFile(file, value): any`

#### Parameters

{: .table .api-table .table-bordered}
| Name | Type |
|-
| `file` | `string` |
| `value` | `any` |

**Returns:** 
`any`


___