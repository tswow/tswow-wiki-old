---
title: Windows Installation (short)
excerpt: Shorter guide for installing on Windows
icon:
  type: fa
  name: fa-paper-plane
color: green
---

- Install all the following programs
    - [Latest x86](https://aka.ms/vs/16/release/vc_redist.x86.exe)
    - [Latest x64](https://aka.ms/vs/16/release/vc_redist.x64.exe)
    - [2013 x86](https://download.microsoft.com/download/2/E/6/2E61CFA4-993B-4DD4-91DA-3737CD5CD6E3/vcredist_x86.exe)
    - [2013 x64](https://download.microsoft.com/download/2/E/6/2E61CFA4-993B-4DD4-91DA-3737CD5CD6E3/vcredist_x64.exe)

- Install a World of Warcraft 3.3.5a client to `C:\wowdev\client` (`C:\wowdev\client\wow.exe` should exist)
- [Download tswow](https://github.com/tswow/tswow/releases/latest) and extract it to `C:\wowdev\tswow` (`C:\wowdev\tswow\node.conf` should exist)
- Open a command window in your extracted tswow directory (shift+right click and select "Open Powershell Window Here")
- Type in "./start" into the command window and wait for tswow to install all files for you. This usually takes a while.
- Once you get a message similar to `TrinityCore rev .... (worldserver-daemon) ready`, your worldserver has started.
- Type in `create account username password 3 -1` to create a gm account
- Log in to the game.