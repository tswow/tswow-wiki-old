---
title: Windows Installation
excerpt: Installing TSWoW from a repack
icon:
  type: fa
  name: fa-paper-plane
color: green
---

This guide will explain how to set up a fully working TSWoW development environment with a working server that you can connect to from your local computer.

**Note: Just like many tools in WoW development, TSWoW does not permit spaces in filepaths. Make sure your installation path and client files do not contain any spaces**

## Prerequisites

You will need to install the following programs:

- World of Warcraft 3.3.5a client

    - Currently, I can only verify that the _enGB_ and _enUS_ clients work, please make an [issue](https://github.com/tswow/tswow/issues) if you use another locale and you face any problems.

    - Please make sure there are **no spaces** anywhere in the pathname to your WoW client **or the TSWoW installation**.

- **All** the following versions of VCRedist:
    - [Latest x86](https://aka.ms/vs/16/release/vc_redist.x86.exe)
    - [Latest x64](https://aka.ms/vs/16/release/vc_redist.x64.exe)
    - [2013 x86](https://download.microsoft.com/download/2/E/6/2E61CFA4-993B-4DD4-91DA-3737CD5CD6E3/vcredist_x86.exe)
    - [2013 x64](https://download.microsoft.com/download/2/E/6/2E61CFA4-993B-4DD4-91DA-3737CD5CD6E3/vcredist_x64.exe)

- [VSCodium version 1.60](https://github.com/VSCodium/vscodium/releases/download/1.55.2/VSCodiumSetup-x64-1.55.2.exe)

- (Optional) To compile **live scripts**, you will also need [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/). The whole first part of this tutorial series will only be using data scripts, so you don't need to install this yet.

    - <span>When installing Visual Studio, you will be asked to choose what packages to install in a window similar to the following. The **only** package that is necessary for building Live Scripts is `Desktop development with C++`, as shown below. The only toggle you need to select is in the red square, everything else can use default settings.</span>

{:refdef: style="text-align: center;"}
![](../vs-installer.png)
{:refdef}

## Installation

1. [Download the latest version of TSWoW from here](https://github.com/tswow/tswow/releases/latest)

2. Extract the TSWoW archive. The installation folder should contain (roughly) the following files and folders:

    ```
    package-lock.json
    package.json
    bin
    coredata
    modules
    node_modules
    ```
3. Start the VSCodium editor. Press F1 and type "Open folder", select the first option and select your TSWoW installation folder. This is your new development environment.

4. Configure your client path. Open the file `node.conf` (shortcut. press `Ctrl+P` and type `node.conf`) and fill in the `Default.Client` field. This should be the **directory** that contains your client executable. Keep in mind that backslashes need to be doubled:

valid:
```yaml
Default.Client = "C:\\dev\\wow\\335\\client"
```

valid:
```yaml
Default.Client = "/home/myuser/wow/335/client"
```

not valid:
```
Default.Client = "C:\dev\wow\335\client"
```

## Starting the server

1. Inside VSCodium, press ``Ctrl+` `` OR press `F1` and type `Toggle Terminal` and select the first option. This should open a terminal inside VSCodium.

2. This terminal should be inside your TSWoW installation directory. If not, navigate to it using `cd` commands.

3. Run the command `npm run start`. This will start the automatic installation and then start the server.

4. Wait for the core database installation. This is a long process on the first installation and can take a long time depending on your machine. 20-30 minutes isn't rare. You know the installation is done when you see a message similar to `TrinityCore rev. 2a67a101096e 2021-04-23 09:24:53 +0200 (tswow branch) (Win64, RelWithDebInfo, Dynamic) (worldserver-daemon) ready...`.

5. To create a gm account, type `create account myuser mypassword 3` (this commands requires that at least one worldserver is currently running)

6. You can now start the client with the command `start client` and log in to the game.
