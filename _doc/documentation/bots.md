---
title: Bots
icon:
  type: fa
  name: fa-book
excerpt: Automatic bot farming with TypeScript
color: green
---

The TSWoW botting framework is a tool for connecting real player bots to the server. They can be scripted using TypeScript or Lua, which is transpiled into and executed as Lua by the bot process. If you wish to code bots using C++, you currently need to do so by building tswow from source and adding command/profile scripts directly into the source code.

_note: player bots is currently a [pull request](https://github.com/tswow/tswow/pull/690), and not yet merged into the master branch of TSWoW._

# Preamble

In TSWoW, player bots run in a separate process alongside the worldserver of an individual realm, but this process can be detached and used as an independent tool as well, running it under TSWoW just makes it easier to script with TypeScript during development. The following sections will assume running bots under TSWoW, and a separate section will explain how to run bots as a separate detached process, such as from a completely different machine.

# Overview

Bots live in the `bots` endpoint of your modules, alongside things like `datascripts`, `livescripts`, `assets` and so on. Inside this endpoint there can be two directories, `profiles` and `command`. These directories correspond to the two types of scripts you can use to automate the botting process:

- `profiles`: Sets of events and behaviors that control an individual bot, registered to a specific name
- `command`: Global scripts and user commands that execute in the main thread to control the botting process as a whole.

## Building / Lifetime

Bots can be started for a running realm using the `start bots` command, and bot scripts can be built and reloaded using the `build bots` command.

## Command

Command scripts are executed in the main thread of the botting process, and is used to do things like creating and destroying bots, or specifying user commands to manage the botting process as a whole. It can also automate the botting process without the use of commands by simply writing code directly into the script files.

For example, if you automatically want to log in a bot when the process start, you can use the `StartBot` function:

```ts
// profile refers to a profile registry name that we'll describe shortly
StartBot('myusername','mypassword','profile')
```

You can also specify a user command to do the same:

```ts
const USERNAME_ARG = 'username'
const PASSWORD_ARG = 'password'
const PROFILE_ARG = 'profile'
CreateCommand('my-custom-login')
    .AddStringParam(USERNAME_ARG)
    .AddStringParam(PASSWORD_ARG)
    .AddStringParam(PROFILE_ARG)
    .SetCallback((args) => {
        StartBot(
            args.GetString(USERNAME_ARG),
            args.GetString(PASSWORD_ARG),
            args.GetString(PROFILE_ARG)
        )
    })
```

## Profile

Profiles allow us to collect events and beheavior trees that we apply to individual bots spawned in `command` scripts. For performance, these scripts will execute separately in multiple threads, meaning things like global variables cannot be used to track any global state.

### Creating a profile

Creating a profile is done with the `CreateBotProfile` command, and can be given a name with the `Register` method:

```ts
CreateBotProfile()
    .Register('mymod','myprofile')
```

If you wish to run a bot using this profile, you would use the following code in a **command script** (note that it is not possible to start bots from profile scripts):

```ts
StartBot('myusername','mypassword','mymod:myprofile')
```

### Listening to events

Adding event listeners to your bot profiles is straight-forward, and uses methods you get directly on the profile object:

```ts
CreateBotProfile()
    .Register('mymod','myprofile')
    .OnLoad((bot) => {
        console.log('Hello world!')
    })
```

### Packet Handling

The botting framework will automatically handle authentication and the packets involved with talking to the authserver and enabling encryption for the worldserver, and while we expose events to manipulate them it is rarely necessary to do so. Once you're fully connected to the game, the framework will no longer send any automatic packets for you, and you can send whatever you want to the worldserver. Ingoing world packets are listened to using the `OnWorldPacket(opcode, callback: (bot: Bot, packet: WorldPacket)=>void)` event listener, and outgoing worldpackets are created using the `CreateWorldPacket(opcode: Opcode)...Send(bot: Bot)` function:

```ts
// Requests character list when fully connected to the worldserver (SMSG_ADDON_INFO is a common opcode to wait for)
CreateBotProfile()
    .Register('mymod','myprofile')
    .OnWorldPacket(Opcodes.SMSG_ADDON_INFO, (bot, packet) => {
        CreateWorldPacket(Opcodes.CMSG_CHAR_ENUM).Send(bot)
    })
```

We provide some helper events for common SMSG (server message) opcodes like `SMSG_CHAR_ENUM` that provide more descriptive classes than raw WorldPackets, and similarly provide some helper classes for common CMSG (client message) opcodes like `CMSG_PLAYER_LOGIN`:

```ts
// Logs in to the first character on the character list
CreateBotProfile()
    .Register('mymod','myprofile')
    // Raw WorldPacket listener and creator
    .OnWorldPacket(Opcodes.SMSG_ADDON_INFO, (bot, packet) => {
        CreateWorldPacket(Opcodes.CMSG_CHAR_ENUM).Send(bot)
    })
    // Helper event and packet creator
    .OnSMSGCharEnum((bot,packet) => {
        CMSGPlayerLogin.create()
            // selects the first character on the character selection screen
            .SetGUID(packet.GetEntry(0).GetGUID())
            .Send(bot)
    })
```

### Storing Data

You can store custom data on the `Bot` objects using `GetData` / `SetData`. 

**warning**: When you `reload` or build bot data, stored data is flushed. This can cause unexpected behavior if you keep bots logged in when reloading.

```ts
CreateBotProfile()
    .Register('mymod','myprofile')
    // Raw WorldPacket listener and creator
    .OnLoad((bot) => {
        bot.SetData<number>('mynumber',10)
        console.log(bot.GetData<number>('mynumber'))
    })
```

## Timers and Behavior Trees (wip)

Aside from event listeners, bot profiles can also be automated using [behavior trees](https://youtu.be/6VBCXvfNlCM). The layout we use is similar to most conventional implementations of behavior trees, but there are a few differences.

Currently this part of the system is mostly implemented and tested, but undocumented.

### Basic timer

The simplest use of behavior trees is to attach a basic repeating timer to your bots:

```ts
CreateBotProfile()
    .Register('mymod','myprofile')
    .SetBehaviorRoot(BotCreateLeaf((bot) => {
        console.log('Automatic loop')
        return 1000; // sleep at least 1 second
    }))
```

## A basic functional bot profile

This is a simple bot profile that logs into the worldserver and walks in a very choppy but straight line. Note that I've focused on just getting bots working so we can use them for stress testing, so proper movement will be implemented later:

```ts
class BotPosition {
    x: number;
    y: number;
    z: number;
    o: number;
    map: number;
    constructor(map: number, x: number, y: number, z: number, o: number){
        this.map = map;
        this.x = x;
        this.y = y;
        this.z = z;
        this.o = o;
    }
}

RootBot
    .Register('mymod','mybot')
    // 1. Request character selection screen
    .OnWorldPacket(Opcodes.SMSG_ADDON_INFO,(bot,packet)=>{
        CMSGCharEnum.create().Send(bot)
    })
    .OnWorldPacket(Opcodes.SMSG_CHAR_CREATE, (bot, packet) => {
        CMSGCharEnum.create().Send(bot)
    })

    // 2. Select or create a character
    .OnSMSGCharEnum((bot,packet) => {
        // Create a new character if we have none (does not handle duplicate names)
        if(packet.EntryCount() === 0) {
            let letters = 'abcdefghijklmnopqrstuvwx';
            let name = "b"
            for(let i=0;i<11;++i) {
                while(true) {
                    let newLetter = letters[Math.floor(letters.length * Math.random())]
                    if(newLetter !== name[name.length-1]) {
                        name+=newLetter;
                        break;
                    }
                }
            }
            CMSGCharCreate.create()
                .SetName(name)
                .SetClass(1)
                .SetRace(1)
                .SetSkin(6)
                .SetFace(5)
                .SetHairStyle(0)
                .SetHairColor(0)
                .SetFacialHair(5)
                .SetOutfitID(0)
                .Send(bot)
        } else {
            bot.SetData('GUID',packet.GetEntry(0).GetGUID())
            CMSGPlayerLogin.create()
                .SetGUID(packet.GetEntry(0).GetGUID())
                .Send(bot)
        }
    })

    // Save login position
    .OnSMSGLoginVerifyWorld((bot,packet) => {
        bot.SetData('position',new BotPosition(packet.GetMap(),packet.GetX(),packet.GetY(),packet.GetZ(),packet.GetO()));
            CMSGSetActiveMover.create()
                .SetGUID(bot.GetData('GUID'))
                .Send(bot)
    })

    // Move in a straight line on top of terrain every 250ms
    .SetBehaviorRoot(BotCreateLeaf((bot) => {
        if(bot.HasData('position')) {
            let pos = bot.GetData<BotPosition>('position')
            let gHeight = GetHeight(pos.map,pos.x,pos.y)

            // this looks dumb, and for better results you should have a 
            // state machine to first send the move_forward packet, and 
            // afterwards only send heartbeats

            MovementPacket.create(Opcodes.MSG_MOVE_START_FORWARD)
                .SetGUID(bot.GetData('GUID'))
                .SetX(pos.x++)
                .SetY(pos.y)
                .SetZ(gHeight)
                .SetO(0)
                .Send(bot)
        }
        return 250;
    }))
```