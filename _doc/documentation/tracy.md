---
title: Tracy
icon:
  type: fa
  name: fa-book
excerpt: Set up profiling to find what's slowing your server down
color: green
---

TSWoW can be built with support for [tracy](https://github.com/wolfpld/tracy), the C++ frame profiler.

When enabled, tracy can be used to track function calls both in the core and in your own scripts using very simple commands. The server can then be connected and viewed in realtime by the [tracy server application](https://github.com/wolfpld/tracy/releases)

This article will outline specific configurations needed to make tracy work with tswow, but for general usage and how to set up the tracy server you can refer to the [official tracy documentation](https://github.com/wolfpld/tracy/releases/latest/download/tracy.pdf).

### Notes
- The tracy project refers to its gui application that's used to view profiling data as the "tracy server". This should not be confused with the tswow worldserver, which runs the "tracy client".
- TSWoW always builds tracy with on-demand profiling, so data is only collected when a tracy server is actively connected to the worldserver.
- Tracy is currently set up to work with the 0.8.1 version of the tracy server, but we might try to upgrade this to automatically follow the latest released version in the future. If you get errors that the tracy version is out of date, try either version 0.8.1 or the latest version released on tracys official repository.
- **Tracy can currently not be used from lua scripts in TSWoW**

## Enabling Tracy for the core

_Note: If you are using an official tswow repack, tracy should be automatically enabled for all core categories since version 0.15._

To use tracy at all, it must be enabled when you build the core. To do this, you must supply a tracy flag either to the `npm run build` command or the `build trinitycore-xxx` interactive command:

- `npm run build tracy=*`
- `build trinitycore-relwithdebinfo tracy=*`

### Choosing what builtin categories to profile

By using the argument `tracy=*`, you enable tracy profiling for all builtin categories. You can also choose to specify exactly what builtin categories you want to profile by default:

- world: profile events outside of individual map updates
- map: profile map update events
- entity: reserved but unused
- spell: reserved but unused
- database: reserved but unused

For example, to build tswow and only profile world update events, you would use the tracy flag `tracy=world`, and for building world and map updates you would use the flag `tracy=world,map`

### Building tracy without builtin categories

To completely skip profiling all builtin categories (useful when you only want to profile your own livescripts, you can use the plain `tracy` flag:

- `npm run build tracy`
- `build trinitycore-relwithdebinfo tracy`

### Profiling new core functions using existing builtin categories

You can easily add new profile points to the core using the `TC_ZONE_SCOPED` and `TS_ZONE_SCOPED_N` (for named scopes) macros, defined in [TSProfile.h](https://github.com/tswow/tswow/blob/master/tswow-core/Public/TSProfile.h). 
As its argument, provide the profiling category that fits best, e.g. `WORLD_PROFILE` or `MAP_PROFILE`. 

For some examples, see [World.cpp](https://github.com/tswow/TrinityCore/blob/tswow/src/server/game/World/World.cpp) and [Map.cpp](https://github.com/tswow/TrinityCore/blob/5a8d134b0ed5efedbe9f512e6301c31ba6af0325/src/server/game/Maps/Map.cpp)

Feel free to use the `entity`, `spell` or `database` categories if you think they fit your use.

### Adding new builtin categories

Builtin categories are all defined in [TSProfile.h](https://github.com/tswow/tswow/blob/master/tswow-core/Public/TSProfile.h), and all you need to create a new category can be found in that file. 
Build scripts automatically parse this file to figure out what profiling categories exists, so make sure to follow the formatting used by the other categories (`ifdef PROFILE_X`, `X_PROFILE` etc.).

## Using tracy in LiveScripts

Similarly to when you build the core, you enable tracy when building livescripts using the `tracy` flag. In livescripts it is possible to define your own profiling categories, and similarly to core categories you can choose what categories should be enabled:

- Enable all script categories: `build scripts tracy=*`
- Enable specific script categories: `build scripts tracy=myCategory`

### Profiling with LiveScript categories

First, we need to create a profiling category and define a color to use for it. Note that the variable name we assign this category to is the name we use to filter it.

```ts
const MY_PROFILING_CATEGORY = TS_ZONE_CATEGORY(0xff0000)
```

With this category, we can now start placing `TS_ZONE_SCOPED` declarations at the top of function calls we want profiled under it:

```ts
export function MyExpensiveFunctionCall()
{
    TS_ZONE_SCOPED(MY_PROFILING_CATEGORY)
}
```

If we want to profile specific events without a function call, it is a good idea to instead use the `TS_ZONE_SCOPED_N` macro to give the profiling point a descriptive name, since the event itself is placed inside an anonymous lambda:

```ts
export function Main(events: TSEvents) {
    events.Player.OnSomeExpensiveEvent(() => {
        TS_ZONE_SCOPED_N(MY_PROFILING_CATEGORY, "Player.OnSomeExpensiveEvent");
    });
}
```

Note that since the `TS_ZONE_SCOPED` family of functions are special compile-time macros, you cannot give them variables (other than globally defined profiling categories) as parameters.

## Viewing your profiled data

See the [official tracy documentation](https://github.com/wolfpld/tracy)
