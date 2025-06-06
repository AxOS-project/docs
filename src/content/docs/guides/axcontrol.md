---
title: Axcontrol
description: Axcontrol is a powerful, lightweight, and easy-to-use control center for AXOS.
---

Axcontrol (or `axctl`) is a powerful tool that gives users more control over their desktop. It is designed to be simple and interact with your device to change properties of your system.

## Installation

Axcontrol comes preinstalled with AXOS so you can use it right away. However if it is not found, you can install it using `epsi install axctl`.

## Usage

Axcontrol is a command line tool and it should be used from the terminal. These are the commands that you can use with Axcontrol:

```bash
# Toggle splash screen off/on
# Splash screen is the screen which shows `axos` with a loading bar
axctl toggle-splash-screen
```

```bash
# Toggle the boot menu off/on
# Boot menu is the screen which shows the boot options of `axos`
axctl toggle-boot-menu
```

```bash
# Change user hostname
axctl change-hostname newHostname
axctl hostname newHostname # this works as well.
```

```bash
# Network controls
axctl net status # Outputs a detailed information about your internet status
axctl net restart # Restarts your internet
axctl net test # Tests your internet connectivity
```

```bash
# Get device informations
axctl device-info
```

```bash
# Refresh/fetch the (default) desktop style
axctl load-style-config
# Caution: this could overwrite some existing configurations
```
