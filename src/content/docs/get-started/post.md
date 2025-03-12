---
title: Post-installation
description: After installation, you can configure your system by following this guide.
---

You now have a fully installed AxOS system. However, you may want to configure your system to your liking. This guide will guide you through the post-installation process.

## Configure your system

Each desktop environment has its own configuration.

### On Plasma

Plasma has a graphical configuration tool called **System Settings**. You can access it by clicking on the **System Settings** icon in the app menu.

### On Calla

Calla has no graphical configuration tool for the system itself. You should therefore use the command line to configure your system. However, there is an app to configure
some elements of Calla itself. You can access it by clicking the **gear** icon in the app menu.


### On Sleex

Sleex has a graphical configuration app. You can access it by clicking on the **Settings** icon in the right panel, by pressing **Super + I** or by searching for **Settings** in the app menu.

> Note that some elements of the app (such as the wallpaper) are not working because it uses the GNOME library. It will be fixed in the future.

## Install apps and packages

### Discover (Plasma only)

Discover is the graphical app to install apps and packages. You can access it by clicking on the **Discover** icon in the app menu.

### Epsilon 

Epsilon (`epsi`) is the package manager for AxOS. You can manage your packages by using the `epsi` command:

```bash
# Install a package
epsi install package1 package2 package3
epsi i package1 package2 package3
epsi -S package1 package2 package3
epsi sync package1 package2 package3

# Remove a package
epsi remove package1 package2 package3
epsi rm package1 package2 package3
epsi -R package1 package2 package3

# Search for a package
epsi search package1 package2 package3
epsi -Ss package1 package2 package3
```
You can find the usage of the command by running `epsi --help` or `epsi -h`.

Epsilon has a lot more packages than the other package managers, as it also searches in the AUR (Arch User Repository).

### Pacman

Pacman is the package manager for Arch Linux. It is the same package manager as the one used on Arch Linux.
You can manage your packages by using the `pacman` command. You can find the usage of the command in the [Arch Linux documentation](https://wiki.archlinux.org/title/Pacman).

This option is also a safe way, but it will not search in the AUR, so you will possibly not find all the packages you want.