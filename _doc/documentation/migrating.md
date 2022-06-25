---
title: Migrating
icon:
  type: fa
  name: fa-book
excerpt: Moving your existing project to TSWoW
color: green
---

TSWoW is a very powerful tool for custom wotlk content, but it's a tool that works quite differently from any other toolset or framework in the scene.

How complicated it is to migrate an existing project to TSWoW generally depends on a few common variables:

- What core was originally used for development (TrinityCore, AzerothCore, CMaNGOS)
- How heavily the core was modified
- How many third-party solutions were integrated
- What scripting solution was used / if any (core scripts, Eluna)
- How much data was modified / created
- How well changes were documented
- What schemes were used for ID-generation

Typically, TrinityCore projects will see an easier migration than AzerothCore/CMaNGOS projects, since TSWoW is based on TrinityCore. 
Core scripts written for modern TrinityCore should work with tswow without any modifications. Eluna can be merged into tswow without too much hassle, but eluna scripts can also be rewritten to work with TSWoWs own improved Lua scripting solution.

The purpose of this article is to give a general outline of things and pitfalls that typically require consideration when migrating a project to tswow, but it can of course not even begin to cover everything.

Before deciding whether you think migrating to TSWoW is worth the initial hurdle of getting all your work over, we strongly recommend that you take a look at what tswow can actually do from a fresh environment, such as by following our [introductory tutorial](tutorials/introduction).

We're also very happy to answer any questions you may have on our [discord server](https://discord.gg/M89n6TZh9x).

## Server Core

If your previous core was based on AzerothCore, CMaNGOS or a very old version of TrinityCore, you can generally not merge core edits to tswow directly, since tswow is based off modern TrinityCore.

### Git History

If you have a trinitycore fork that you would like to merge with the tswow source tree, we generally recommend that you attempt to merge or cherrypick _your edits_ into a fresh tswow fork, instead of trying to merge or cherrypick tswow into your existing source tree.
This is both because our project structure is broader than trinitycore itself and only includes it as a submodule, and that the more you rebase or rework _our_ commit history, the more difficult it will be to accept new updates from us in the future.

If you have a clean fork off modern TrinityCore, this order matters less since you wouldn't have to rewrite or rebase either history.

### Conflicts

TSWoW largely works the same as TrinityCore, but not all behavior is the exact same. In addition to normal sane regression testing, you need to very carefully watch any merge conflicts that arise and not just naively accept our changes without considering what assumptions they change.

### Server Scripts

If your server scripts are written for modern TrinityCore, you should be able to port them to tswow without any modifications. We do not make any significant changes to how server scripts work, and if you encounter merge conflicts in script files it is because we have to manually fire some of our events from them, which you don't need to worry about for your own projects.

If you aren't already heavily invested into core scripts, you may also want to consider porting over your scripts into [TSWoW livescripts](documentation/livescripts), as we have a much more powerful and flexible event system that can be reloaded at runtime similar to TrinityCores own hotswap system.

## Eluna

With the 0.15 release, TSWoW ships its own lua/typescript scripting solution as a highly compatible complement to the C++ scripting solution "LiveScripts". The API itself is originally based off Eluna, and is thus highly compatible with a lot of Eluna scripts. However, this compatibility is not complete, and it's not possible to just drag-and-drop an eluna script and expect it to work in our lua modules.

If you want to port Eluna scripts to TSWoW, we recommend that you get familiar with our [lua](documentation/lua) and [livescript](documentation/livescripts) scripting environments, and pay extra attention to how we register events.

Another solution is to merge eluna itself into TSWoW, but keep in mind that this will give you a project layout that is largely not very compatible with how tswow itself works (Eluna will still expect scripts to be available in the worldservers working directory, for example). 

### AIO

We currently are not aware of anyone trying AIO with TSWoWs lua environment, but theoretically it should be possible to get it to work with our lua scripting environment without too many edits.

TSWoW also has its own [addon framework](documentation/addons) that can work with both LiveScripts and our Lua scripts over addon messages, and can be written in TypeScript. Note that our addon system does not support live loading or object messages the way AIO does, and is not intended to be a replacement or substitute for AIO.

## SQL and DBC

The difficulty of porting over SQL/DBC edits relies heavily on how many tables have been manipulated, how well changes have been documented and how well numeric ids have been handled and documented.

### IDs

One of the core features of TSWoW is [automatically assigning numerical ids](documentation/ids), which operates on a specific set of assumptions for what ids it is allowed to use.

If you need to port large quantities of dbc or sql data for tswow, and you do not wish to rewrite it to use our id generation scheme, you need to manually craft an [ids.txt file](https://github.com/ihm-tswow/test/blob/main/_doc/documentation/ids.md#persistent-allocation) that tells tswow what tables you have your own custom ids in that it cannot touch. When you manually add entries to this file, tswow respects them even if it does not make its own persistent entries for those tables.

The format of `ids.txt` is fairly straightforward, each line lists what table the range is valid for, the registry name of the allocation, and the lower and upper bounds of the allocation range.

For SQL tables, the table name is identical to the SQL table name, and for DBC tables it is identical to the name of the DBC file without the ".dbc" extension.

For example, if you wanted to protect the ids 20000-21000 in Spell.dbc, you would add the following line to your ids.txt:

```
Spell|migrated:spells|200000|210000|
```

### DBC

The recommended way to port DBC edits to TSWoW is to rewrite them as [datascripts](documentation/datascripts). However, since this is not always realistic this section will attempt to outline the alternative of using your own DBC files as input for TSWoW datascripts.

When TSWoW extracts dbc files from the client, it places them inside your [datasets](documentation/dataset) `dbc_source` directory. This directory is not regenerated unless you tell tswow to do that, so it is possible to add your own custom crafted DBCs to this directory and use as a basis and build datascripts on top of. This is especially powerful if you plan to use HD models in your patch, since those typically come with their own set of dbc files.

However, you cannot just drag and drop any dbc file into this directory without making sure it is _sorted_ in a way that TSWoW expects.

Most dbc files read by tswow are assumed to be sorted from low to high ids (almost exclusively the first column in any dbc file), because this significantly speeds up lookup times when building datascripts. 

An easy way to check if tswow expects a table to be sorted is to type in `std.DBC.DBCName` in a datascript and check if that DBC has a "findById" method. If it does, that means tswow is performing a special search that requires ids to be sorted, and will fail with undefined results if the input dbc is not sorted according to this expectation.

Since manually sorting a DBC file can be a very time-consuming, you can abuse two features of TSWoW that allows you to load arbitrary DBC files into memory, and sort them using a special event.

For example, if you have a custom Spell.dbc that you want to sort before adding it to your `dbc_source`, you can load it into a datscript like this and sort it programmatically:

```ts
std.Events.sort("my-custom-sort", () => {
    const dbc = std.DBCLoader.Spell('path-to-my-own-spell.dbc').
    dbc.binarySort(0,(x=>x.ID.get()))
    dbc.write('output-spell.dbc')
});
```

If you do this, make sure to keep a backup of your original spell.dbc so nothing goes wrong.

#### A warning about extracting DBC files

TSWoWs extractors are more powerful than those of other projects, and reads even custom and directory MPQs by default. It is recommended that you never extract dbc files from a client with custom patches applied, or at least remove or disable/rename all custom dbcs before you extract them.

### SQL

_note: this section is describing a feature I'm planning to implement for tswow before 0.15, but if this message is still here it's possible i forgot to do it, or just forgot to remove this message. Ask in the discord if it's stil here and you want to do it._

Just like with DBC edits, the recommended way to port edits to TSWoW is to rewrite them as [datascripts](documentation/datascripts). Since this is not always realistic, we will here describe the possible alternatives.

If your database structure is close to that of the latest upstream TrinityCore, it is possible to create a full database dump just like TrinityCore does and use that as a basis for TSWoW scripts. How exactly to do this depends on what database manager you use, but is commonly found as a type of "database backup" feature.

Once you've generated an SQL file that does the same thing as the standard TDB + your custom changes, you can place it in your dataset directory and call it "tdb.sql". To make sure it is being used by tswow as both the input and output database, run the command `build database`.

## Client Lua/GLUEXML/FrameXML

Extracted client interface files are stored separately in a datasets `luaxml_source` directory, which is used as a basis for datascripts and automatically copied to the `luaxml` directory after processing by datascripts every build.

In an empty project, tswow does not process these files at all, and you can easily just place your own custom interface files into `luaxml_source`.

However, a few mods created in tswow datascripts _will_ write to these files, especially custom classes. 
Our custom class code does touch on interface files that are commonly modified for custom character creation screens.
Some of the issues you may face can be fixed if tswow use better hooks into those files, so if things break you can nag on us a little and we can see if there are things we can improve, but if you heavily change the layout of these files it might not be possible for tswow to inject code into them no matter how hard we try.

_(planned feature for 0.15, if this message is here i might've forgot to implement it!)_
In the worst case scenario, you can stop tswow from generating code to these files entirely with the `no-luaxml` flag when building datascripts. However, if you do this you will need to create the necessary edits yourself to these files.

## Assets

TSWoW assets can commonly be ported quite easily. TSWoW modules have an `assets` endpoint that works as an MPQ archive that we automatically symlink into the client. Simply move all your custom assets from your old MPQ archive or directory into your tswow modules "assets" directory and it should work like a normal MPQ patch the next time you start the game.

The benefit of using asset directories is both that you can organize your assets the same way as your other tswow scripts and data, but also that you can easily package it all into an output MPQ with the `package` family of commands.

Alternatively, you can simply keep your old MPQ archive or directory MPQ in the client, only removing DBC/lua/xml files, and tswow will simply ignore it (but see the above warning about extracting dbc with custom patches installed).
