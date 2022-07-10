---
title: Live Scripts
icon:
  type: fa
  name: fa-book
excerpt: Scripting the server with TypeScript
color: green
---

LiveScripts are the server scripts of TSWoW, just like Eluna or C++ scripts in TrinityCore. By default, LiveScripts are transpiled into Lua code that runs very similar to Eluna, but can also be re-configured to be transpiled into C++, allowing much better performance and multithreaded support.

This article describes LiveScripts as written in TypeScript and applies regardless of what backend you use. For backend-specific information and considerations, see the separate articles:

- [LiveScripts (Lua)](./livescripts-lua)
- [LiveScripts (C++)](./livescripts-cxx)

## Building
To build livescripts, the `build scripts` command is used. If you want to specifically build your scripts as either Lua or C++, use the additioanl `lua` or `c++` flag:

- `build scripts lua`
- `build scripts c++`

By default, livescript builds will trigger a minimal datascripts build to refresh inline livescripts. If you're not using inline scripts, you can disable this to slightly improve build times by using the `no-inline` flag when building scripts:

- `build scripts no-inline`

You can also configure default behaviors for script runtimes and inlinescripts in `livescripts.conf` inside your livescripts directory.

## Entry point

The main file for all live scripts in a module is `module-name/livescripts/livescripts.ts`. In this file, we define an entrypoint as such:

```ts
// "Main" is the entrypoint for tswow livescripts.
export function Main(events: TSEvents) {
    events.Player.OnSay((player,msg)=>{
        player.SendBroadcastMessage('You said: '+msg.get())
    });
}
```

## Lifetime

The `Main` function is called during server startup or when the script is reloaded. During reload, all previous event handlers are removed and any memory should be cleaned up automatically.

## Referring to IDs

Sometimes, it is necessary to reference ids generated from a datascript in a livescript. Since datascripts and livescripts run in completely different processes, you cannot just import datascript variables into livescripts. Instead, there are a couple of different macros you can use to move numerical data from datascripts to LiveScripts.

All the macros described below are **compile-time macros**, meaning they only accept string literals as arguments, and will throw an error if the compiler cannot find the registered tags or ids from previous datascript builds.

### Tags

ID tags are special names that we attach one or multiple ids to. To use ID tags, we must first create them in datascripts, and then create a corresponding macro in our livescripts to import them.

For example, let's say that we have a spell that we want to attach a script to. To achieve this, we first use the datascript `Tags.add` method to register a tag name, and then the livescript `TAG` macro to import it:

**DataScript**
```ts
std.Spells
    .create('mymod','myspell')
    .Name.enGB.set('My Spell')
    .Tags.add('mymod','mytag')
```

**LiveScript**
```ts
export function Main(events: TSEvents) {
    events.Spell.OnCast(TAG('mymod','mytag'), (spell) => {
        // do something
    })
}
```

### Multiple Ids

The primary benefit of using ID tags is that a single tag can be used to refer to **multiple** ids, allowing us to register the same scripts to multiple entities:

**Datascript**
```ts
std.Spells
    .create('mymod','myspell-1')
    .Name.enGB.set('My First Spell')
    .Tags.add('mymod','mytag')

std.Spells
    .create('mymod','myspell-2')
    .Name.enGB.set('My Second Spell')
    .Tags.add('mymod','mytag') // <-- Same tag as above
```

**Livescripts**
```ts
export function Main(events: TSEvents) {
    // This event will now apply to both "My First Spell" and "My Second Spell"
    events.Spell.OnCast(TAG('mymod','mytag'), (spell) => {
    })
}
```

### Tag variables

Tag macros are simply resolved into an expression containing the tagged ids at compile-time, meaning you can also read them into variables for other uses.

**DataScript**
```ts
std.Spells
    .create('mymod','myspell-1')
    .Tags.add('mymod','mytag')
```

**LiveScript**
```ts
export function Main(events: TSEvents) {
    // an array containing all the ids tagged with "mymod":"mytag"
    let myTag = TAG('mymod','mytag')
}
```

### Unique Tags

Sometimes we might want a tag that can only refer to **one** ID instead of messing with the array that the `TAG` macro gives us. For this, we use the `addUnique` datascript method and the `UTAG` livescript macro.

**DataScript**
```ts
std.Spells
    .create('mymod','myspell-1')
    .Tags.addUnique('mymod','my-unique-tag')
```

**LiveScript**
```ts
export function Main(events: TSEvents) {
    // a single number
    let myId = UTAG('mymod','my-unique-tag')
}
```


Normal tags can be applied to multiple ids

### GetID

The `GetID` macro can be used to grab ids directly from registered mod/id pairs. This is an older macro, and we generally recommend to use tags instead.

To find the the correct arguments for a datascript entity registered as `("my-mod","my-id")`, we can open the file `coredata/IDs.ts` and `CTRL+F` for `"my-mod","my-id"`, and then simply copy the line we find into our livescript.

**Important**: Some datascript entities automatically register multiple ids to a single input id pair, commonly with an index suffix (For example, `CreatureTemplate#Spawns#add`:
: [`("my-mod","my-spawn-1"),("my-mod","my-spawn-2")`]) or a subtype suffix (For example, `std.Mounts`: `[("my-mod","my-mount-spell"),("my-mod","my-mount-item")]`). Make sure that you grab the match you are looking for from `coredata/IDs.ts`.

## Timers
TSWoW supports a simple type of timer for delayed or repeated events. These timers can be applied to `TSWorldObjects` (which includes `TSUnits`, `TSCreatures`, `TSGameObjects` and `TSPlayers`) or `TSMaps`:

```ts
export function Main(events: TSEvents) {
    events.Player.OnSay((player)=>{
        // Timer on player
        player.AddTimer(1000,player=>{
            console.log(`[player]: One second passed`)
        })

        // Timer on map
        player.GetMap().AddTimer(1000,map=>{
            console.log(`[map]: One second passed`)
        })
    })
}
```

## Data tags
TSWoW can store temporary data on game entities such as `TSWorldObjects` (which includes `TSUnits`, `TSCreatures`, `TSGameObjects` and `TSPlayers`), `TSMaps` and `TSItems`. You can store either primitive values or entire custom classes:

### Primitives

We can store primitives directly on world objects using `SetNumber`/`SetString`/`SetBool`, and read them with `GetNumber`/`GetString`/`GetBool`

```ts
export function Main(events: TSEvents) {
    events.Player.OnSay((player)=>{
        player.SetNumber('my-number',10)
        player.SetString('my-string','hello world')
        player.SetBool('my-bool',true)
    })
}
```

### Custom Classes

We can also store entire custom data classes this way, suitable for more complex storage. Typically, we add it by attempting to read it and supplying a default second argument:

```ts
class MyClass extends TSClass {
    value: uint32 = 0;
}

export function Main(events: TSEvents) {
    events.Player.OnSay((player)=>{
        // Second parameter is default value added and returned
        // if we didn't already contain this object
        let cls = player.GetObject('my-object',new MyClass());
        console.log('Class value:'+cls.value++);
    });
}
```

## Persistent Data

Saving and loading data is done by writing queries to either the `Characters`, `Auth` or `World` databases. You almost always want to write live data to the `Characters` database only.

### SQL Commands

We can create SQL commands as such:

```ts
// There is also QueryAuth and QueryCharacters.
const res = QueryWorld('SELECT name FROM item_template WHERE entry=25;');

// Iterate on each row
while(res.GetRow()) {
    // Get the first captured value (we only specified one)
    console.log(res.GetString(0));
}
```

### ORM

TSWoW has support for automatic object-relational mapping (ORM) in livescripts. This means we can specify classes in TypeScript that are automatically translated to an SQL table that we can easily save objects to. Below is a simple example ORM class:

```ts
// A DBEntry is the simplest type of database class.
// It maps only to a single row in a database and can
// easily be attached to entities such as players.

// This class maps player IDs to a simple click counter

// @CharactersTable specifies that we want to save
// this table in the Characters database.
// (This is almost always what we want)
@CharactersTable
export class ORMDemoEntry extends DBEntry {
    constructor(player: uint64) {
        super();
        this.player = player
    }

    // A primary key is the variable that uniquely identifies
    // this row in the table. Since we are mapping players,
    // we use the player GUID here.
    @DBPrimaryKey
    player: uint64 = 0

    // The @Field decorator is used to specify other class
    // variables we want to store in the database
    @DBField
    clickCounter: uint32 = 0

    // If we don't specify the @Field decorator,
    // the value is not saved to the database.
    memoryValue: uint32 = 0;

    // Helper function to get and attach a database object
    // to a player.
    static get(player: TSPlayer): ORMDemoEntry {

        // This either returns a cached version of
        // the save data from the player object (from a previous call),
        // or if it isn't found, creates a new save object
        // and stores it on the player.
        return player.GetObject('ORMDemoEntry'

            // LoadDBEntry is the normal global function
            // we use to load DBEntry classes.
            , LoadDBEntry(new ORMDemoEntry(player.GetGUID()))
        )
    }

    static Save(player: TSPlayer) {
        ORMDemoEntry.get(player).Save();
    }

    static Delete(playerGuid: uint64) {
        LoadDBEntry(new ORMDemoEntry(playerGuid)).Delete()
    }

    static Reset(player: TSPlayer){
        ORMDemoEntry.get(player).clickCounter = 0
    }

    static Increase(player: TSPlayer) {
        ORMDemoEntry.get(player).clickCounter++;
    }
}
```

#### Field types

Only primitive types (ints, floats, strings) can be used as @Fields or @PrimaryKeys (strings can currently NOT be used as primary keys). The table below shows all valid field types:

| **Type** | **@DBField** | **@DBPrimaryKey** |
|----------|--------------|-------------------|
| string   | Yes          | Yes*              |
| float    | Yes          | **No**            |
| double   | Yes          | **No**            |
| int      | Yes          | Yes               |
| int8     | Yes          | Yes               |
| int16    | Yes          | Yes               |
| int32    | Yes          | Yes               |
| int64    | Yes          | Yes               |
| uint8    | Yes          | Yes               |
| uint16   | Yes          | Yes               |
| uint32   | Yes          | Yes               |
| uint64   | Yes          | Yes               |

*_strings must use @DBPrimaryKeyVarChar(charCount) to be primary keys_