---
title: Live Scripts (Lua)
icon:
  type: fa
  name: fa-book
excerpt: Lua-specific information for LiveScripts
color: green
---

[Main LiveScripts Article](./livescripts)

Lua LiveScripts use the [TypeScriptToLua](https://typescripttolua.github.io/) transpiler to convert TypeScript to Lua code, which is the same transpiler we use for [AddOn development](./addons), although with slightly different settings.

LiveScripts currently use [Lua version 5.4](https://www.lua.org/manual/5.4/manual.html).

Since Lua is a very similar language to JavaScript, the language behaves mostly like you would expect normal TypeScript transpiled to JavaScript to do. If you find something that works when transpiling to C++ and _does not work_ when transpiling to Lua, please [report it as a bug](https://github.com/tswow/tswow).

If you are planning to use your module as a public library, or host a server with more than a few hundred players, it is recommended that you familiarize yourself with the [C++ limitations](./livescripts-cxx#language-differences) and consider following them to make migrating to it easier if you would ever need to do so in the future.

## Raw Lua

When using the Lua backend, it is also possible to write parts of your LiveScripts in plain `.lua` files as well. If building your module targeting C++, plain lua files are completely ignored. If you want to use both raw lua and transpile some code to C++, you have to use separate modules.

### Migrating from Eluna
Writing raw lua is especially useful if you are migrating a project from Eluna to TSWoW, since our API is largely derived from Eluna. However, especially how events are handled still works differently from TSWoW, and it is almost never possible to just drag and drop an Eluna script into a livescript and having it work without modification.

### Exporting and Importing Modules
Lua files can export modules by using the `return` keyword in the global scope:

_livescripts/some-directory/LibraryFile.lua_
```lua
local MyLibraryFunction()
  print("Hello world from my Library")
end

return {"MyLibraryFunction"=MyLibraryFunction}
```

To import modules from another Lua file, use the `require` function. `require` can resolve script paths both locally from the current directory, and globally from the current module root. Note that for global imports, you must include the `livescripts` (or `shared`) prefix.

_livescripts/some-directory/MainFile.lua_
```lua
-- Local import
local __LibraryFile_Local = require("LibraryFile")

-- Global import, identical to above local import
local __LibraryFile_Global = require("livescripts/some-directory/LibraryFile")

-- Access module exports
__LibraryFile_Local.MyLibraryFunction()
```