---
title: Extending the LiveScript API
icon:
  type: fa
  name: fa-book
excerpt: Learn how to extend the core with your own custom LiveScript events and functions
color: green
---

Adding new LiveScript events and functions is a fairly straightforward process once you've [built tswow from source](installation). Note that it is not possible to extend the livescripting API from a repack.

The LiveScript API classes can be found in the [tswow-core](https://github.com/tswow/tswow/tree/master/tswow-core) subproject. The `Public` folder contains public header files (such as `TSPlayer.h`), while the `Private` folder contains implementations (such as `TSPlayer.cpp) that contain actual implementations for livescript functions.

For all livescript extensions, it is important that public header files do **not** refer to internal trinitycore headers, because those headers are by design not available when building livescripts. If you need to refer to internal trinitycore types, they must only be available as forward declarations in your public header files, and only actually imported in the private implementations.

## Adding a method to a TS* class

TS* classes refers to classes such as `TSPlayer`, `TSUnit`, TSMap` that wrap internal trinitycore classes such as `Player`, `Unit` and `Map`.

For example, let's pretend that we want to add the method `TSPlayer::SetLevel`. This method is already implemented, but is used here as a simple example.

- First, we need to add a declaration to the `TSPlayer` class in `TSPlayer.h`:
  ```c++
  void SetLevel(uint32 level)
  ```
- Then, we need to create an implementation for this method in the `TSPlayer.cpp` class:
  ```c++
  void TSPlayer::SetLevel(uint32 level)
  {
      // In TSPlayer.h, we can see that TSPlayer has a reference to the internal trinitycore "Player" called "player".
      player->SetLevel(level);
  }
  ```
- Finally, to make our method visible to livescripts, we must add a typescript declaration to `tswow-core/Public/global.d.ts`. We can find the "TSPlayer" class by searching for "interface TSPlayer" and simply add a line among the other methods declared for it:
  ```ts
  SetLevel(level: uint32): void
  ```

- **Optional**: to make our method available to lua scripts, we need to add an additional declaration to `TSPlayerLua.cpp` similar to other functions declared in that file:
  ```c++
  LUA_FIELD(ts_player, TSPlayer, SetLevel);
  ```
  _Note: for some classes, such as `TSUnit`, functions are actually added in `TSUnitLua.h` instead of `TSUnitLua.cpp`, just check where all the other methods are registered for your class if you're unsure where to place them.

We can now compile the core, and if all went well we should have a new livescript method available to our livescripts.

#### Handling strings, arrays, or maps in Lua functions

If you want to expose methods that take strings, arrays, maps to lua you need to specify separate convertor functions, because lua doesn't understand optional arguments or the string/collection classes tswow uses.

Typically, this is done by adding additional private functions to the `TS*` class and adding `TSLua` as a friend class so it can access them.

For example, let's pretend that we want to add the made up method `TSPlayer::SetName(TSString)` to Lua.

First, we need to add a private method to the `TSPlayer` class in `TSPlayer.h` called `LSetName(std::string const&)`, and implement it in `TSPlayer.cpp`:

```c++
void TSPlayer::LSetName(std::string const& name)
{
    SetName(TSString(name));
}
```

To register this method in Lua, we need to use a slightly more manual syntax to register our method in `TSPlayerLua.cpp`:

```c++
player.set_function("SetName", &TSPlayer::LSetName);
```

You do not need to change anything else in `global.d.ts` or the original method declarations.

Arrays and Maps can be handled similarly, and you can find examples for how to convert them and what types to use in `TSGlobal.h`, `TSGlobal.cpp` and `TSGlobalLua.cpp`.

#### Handling optional arguments in Lua functions

Lua has no concept of C++ optional arguments, so if we want to expose functions with optional arguments, we must create separate lua functions for each possible number of parameters.

For example, let's pretend we want to add the made up function `TSPlayer::CallOptionalArguments(uint32 a = 0,uint32 b = 0)` to Lua. 

First, we must add three declarations to the `TSPlayer` class in `TSPlayer.h` (and just like with the above section, make sure `TSLua` is a friend class):

```ts
void LCallOptionalArguments0(uint32 a, uint32 b);
void LCallOptionalArguments1(uint32 a);
void LCallOptionalArguments2();
```

Then, we need to add implementations to these inside `TSPlayer.cpp`:

```c++
void TSPlayer::LCallOptionalArguments0(uint32 a, uint32 b)
{
    CallOptionalArguments(a,b);
}
void TSPlayer::LCallOptionalArguments1(uint32 a)
{
    CallOptionalArguments(a);
}
void TSPlayer::LCallOptionalArguments2()
{
    CallOptionalArguments();
}
```

Finally, to register these to Lua we need to add a slightly more manual registration to `TSPlayerLua.cpp`:

```c++
ts_player.set_function("CallOptionalArguments", sol::override(
    &TSPlayer::LCallOptionalArguments0,
    &TSPlayer::LCallOptionalArguments1,
    &TSPlayer::LCallOptionalArguments2
));
```

You do not need to change anything else in `global.d.ts` or the original method declarations.

#### Adding a new LiveScript global function

Global functions are registered very similar to TS* class methods, with the only difference that in their public declarations it is important to prefix their public header declaration with the `TS_GAME_API` (or aliased as `TC_GAME_API`):

```c++
TS_GAME_API void MyLivescriptFunction();
```

You can then register the function to lua in one of the `XLua.cpp` files, or `TSLuaGlobal.cpp` to the `sol::state` using the `set_function` metod:

```c++
state.set_function("MyLivescriptFunction",MyLivescriptFunction)
```

Handling strings, arrays, maps or optional arguments in Lua works the same for global functions as with class methods.

### Adding a new LiveScript event

Let's pretend that we want to add a new player event "Player.OnLevelChanged". This event is already implemented in tswow, but is used here as a simple example.

- First, we need to add a declaration for the event under the correct category in the `TSEvents` struct in `TSEvents.h`. Searching for "PlayerEvents", we can find the declaration `struct PlayerEvents`. Here, we add a new event using the `EVENT` macro, where the first argument is the name of the event and all following arguments are the typenames for the parameters the event should have:
  ```c++
  EVENT(OnLevelChanged, TSPlayer player, uint8 oldLevel)
  ```
  _Note that we avoid adding a separate argument for the **new** level, since this can already be accessed through the TSPlayer object itself_.
- Now, we need to call this event from somewhere in the core itself. A good place for this event might be inside the `Player::GiveLevel` function inside `Player.cpp`. To fire this event, we need to make sure the `TSEvents.h` header itself is included, as well as any headers for the `TS*` classes that it expects. Then, we can fire the event using the `FIRE` macro, and make sure to convert all arguments to the `TS*` classes that the event expects:
  ```c++
  // somewhere inside Player::GiveLevel
  
  // First argument is the event category, second is event name, and the rest are the event arguments.
  FIRE(Player,OnLevelChanged,TSPlayer(this),oldLevel)
  ```
- Finally, to make this event available to livescripts we need to add typescript declaration to `tswow-core/Public/global.d.ts`. Events are found in class declarations inside the `_hidden` namespace, and we can find the Player event class by searching for `class Player<T>`:
  ```ts
  // somewhere in Player<T>
  OnLevelChanged(callback: (player: TSPlayer, oldLevel: uint8) => void): void
  ```
- **Optional**: To make this event available to lua, we need to add a similar row to the other player events in `TSEventsLua.cpp`. If we open it, we can find a section intended for player events using the `player_events` variable:
  ```c++
  LUA_HANDLE(player_events, PlayerEvents, OnLevelChanged);
  ```
We can now compile the core, and if all went well we should have a new event available to our livescripts.

#### ID-bound events

Some event categories, such as `Creature`, have events that can be called both for **all** creatures in the server, but also for individual creature templates.

To create an id-bound event in an existing category, you simply replace the `EVENT` macro inside `TSEvents.h` with `ID_EVENT`.

When you want to fire an id-bound event, instead of `FIRE` you use the `FIRE_ID` macro. The argument order is different from the `FIRE` macro, and the **first** argument this macro expects is a special event tag that the individual entity has access to.
Where exactly this event is stored differs between entities, but for a TrinityCore `Creature`, it can be accessed through `Creature::GetCreatureTemplate()->events.id`.
The arguments following are the normal arguments you'd give an equivalent `FIRE` macro:

```c++
FIRE_ID(GetCreatureTemplate()->events.id,Creature,MyCustomCreatureEvent,TSCreature(this),...)
```

Note that events fired with the `FIRE_ID` macro automatically calls the `FIRE` macro for the event it receives so that the event fires both bound and unbound listeners.
You should **not** make a separate call to `FIRE` if you already call `FIRE_ID`, and doing so will cause the event to fire twice for unbound listeners.

#### Passing values by reference to events

In C++, a common way to allow functions or events to manipulate variables (especially numbers, booleans and strings) is to pass the value _by reference_, e.g:

```c++
void MyFunction(uint32 & valueByRef)
{
    valueByRef = 20; // changes the value of "valueByRef" not only in the local function
}
```

Since TypeScript has no concept of passing variables by value or reference, we use a special wrapper class called `TSMutable<T>` to pass primitives we want to allow the script to manipulate, which takes a variables address and allows Livescripts to change it via a `set` and `get` function.

For example, if you have the event `Player.MyNutableEvent(TSPlayer, TSMutable<float>)` you would call this event by wrapping some local float variable in a TSMutable class:

```c++
// Somewhere in Player.cpp

float someLocalFloatVariable = ...

FIRE(Player,MyMutableEvent, TSPlayer(this), TSMutable<float>(&someLocalFloatVariable));

// If any events manipulated the TSMutable by calling "set", the changes have applied to "someLocalFloatVariable" here.
```

For strings specifically, we use another special class called `TSMutableString` for technical reasons, but it works just the same as other mutables:

```ts
// Somewhere in Player.cpp

std::string someLocalStringVariable = "...";

FIRE(Player,MyMutableStringEvent, TSPlayer(this), TSMutableString(&someLocalStringVariable))
```

TSMutables are declared in global.d.ts just as they are presented, as a `TSMutable<T>` or `TSMutableString` class wrapping its underlying type:

```ts
MyMutableEvent(callback: (player: TSPlayer, value: TSMutable<float>) => void)
MyMutableStringEvent(callback: (player: TSPlayer, value: TSMutableString) => void)
```

## Contributing Changes to TSWoW

We are generally very welcoming of proposed additions to our livescripting API, but contributions should follow some guidelines for us to accept them into our official repository:
 
- It is a good idea to discuss new additions with us before working on them, to make sure it's something we feel is useful for our users in general. This is especially true for larger additions such as completely new event categories or TS* classes.
- Both events and functions should (with very few exceptions) always be available to both LiveScripts and Lua scripts, so adding a working Lua declaration is necessary.
- Any Lua override functions should follow the conventions we use (be private in the class/having `TSLua` as a friend, have the `L` prefix and count from 0 and up for overloaded methods)
- Events to id-bound categories should (with very few exceptions) always be id-bound as well.
- Events and methods should have _some_ general usability, as in that someone else could realistically make use of the added functionality. 
- Events and methods should (with very few exceptions) not accept more parameters than necessary. If some event parameter can already be deduced or accessed from other parameters, it should not be added separately.
- For class hierarchies, methods should (with very few exceptions) be added to the lowest common class possible (`Unit` methods should be added to `TSUnit`, not `TSPlayer`)
