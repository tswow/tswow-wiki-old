# Compiling

**TODO: Not finished**

The purpose of this document is to:

1. Walk users through how to build TSWoW from source
2. Document important details and common issues

## Windows Compilation Guide

This guide will walk you through every step in compiling TSWoW from source.

### Prerequisites

- [Git](https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.2/Git-2.30.0.2-64-bit.exe)
- [Visual Studio 2019+](https://visualstudio.microsoft.com/downloads/)

All other dependencies can be installed during the installation.

### Installation

When building TSWoW from source, we are concerned about three directories: 
- The `source` directory is the root directory containing all source code used to build TSWoW. 
- The `build` directory contains all intermediate files and build configurations
- The `install` directory is where we install TSWoW

The source, build and install directories should all be **separate**. Do not place any of them inside any of the others. The recommended setup is to have a `tswow-root` containing all three folders.

1. Run the following command (_optionally in a new empty folder_): `git clone https://github.com/tswow/tswow.git --recurse`
    - This will create the `source` directory, called "tswow".
    - This download is expected to take some time
  
2. Open `source/build.yaml`. Here you can configure where tswow should place `build` and `install` directories. 
    - **Do not set `install` to point at your normal TSWoW installation unless you know what you're doing, it will frequently flush out all your settings and modules!**
  
3. In the `source` directory, run the command `npm i`

4. In the `source` directory, run the command `npm run build`.
    - This will start automatic installation of some additional dependencies.
    - It's not recommended to try and override this, we do it automatically because the versions matter a lot.

5. Install dependencies (TSWoW expects these to be in the `build` directory, so you need most even if you normally compile TrinityCore
    - [Install Boost](https://sourceforge.net/projects/boost/files/boost-binaries/1.72.0/boost_1_72_0-msvc-14.2-64.exe/download)
        - The typical path to install this to is `C:\local\boost_1_72_0`
        - Open an elevated command prompt and type this command: `"setx BOOST_ROOT C:/local/boost_1_72_0" /M` (replacing the path with your boost path)
        - Should not be necessary if you can already compile TrinityCore
    - [Install CMake](https://github.com/Kitware/CMake/releases/download/v3.18.3/cmake-3.18.3-win64-x64.zip)
        - Install it to `build/cmake` (The path `build/cmake/cmake-3.18.3-win64-x64` should exist) 
    - [Install OpenSSL v1.1.1](https://slproweb.com/products/Win32OpenSSL.html)
        - Set installation path to `build/openssl` 
        - Set it to copy OpenSSL binaries to "The OpenSSL binaries (/bin) directory".
    - [Install MySQL v5.7.32-x64](https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.32-winx64.zip)
        - Extract it to `build/mysql` (The path `build/mysql/mysql-mysql-5.7.32-winx64` should exist)
    - [Install blpconverter](https://github.com/tswow/BLPConverter/releases/download/1.0/BLPConverter.exe)
        - Place it at `build/blpconverter.exe`
        
6. You should now have entered the main TSWoW build program. You can now build any components you want
    - All TypeScript for TSWoW and the transpiler is compiled automatically as long as the build program is running
    - We currently have a bug where the prompt doesn't allow you to enter anything. Restarting the build script seems to fix this for now.

7. To get a fully working TSWoW installation, you can run the `build full` command, which will compile TrinityCore and all other components necessary. 
    - To build only TrinityCore, you can use the command `build trinitycore-release`

8. You should now be able to start TSWoW from the new installation folder.

## Known Issues

- `build release` doesn't work with a normal `install` directory. To build a release, you must run turn off the build script, change the install directory to an empty/non-existing directory in `source/build.yaml` and start the build script again.