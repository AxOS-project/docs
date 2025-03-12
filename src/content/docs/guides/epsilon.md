---
title: Epsilon
description: Epsilon is a powerful, lightweight, and easy-to-use package manager for AxOS
---

Epsilon (or `epsi`) is a powerful, lightweight, and easy-to-use package manager for AxOS. It is designed to be simple to use, and to provide a simple way to install, update, and remove packages on your system.

Epsilon fetches packages from the pacman repositories and the AUR, and can install packages from both sources. It also provides a simple way to manage your system's packages, and to keep your system up-to-date.

## Installation

Epsilon comes pre-installed on AxOS, so you don't need to install it separately. You can start using it right away.

## Usage

Epsilon is a command-line tool, and can be used from the terminal. Here are the commands that you can use with Epsilon:

```bash
# Just install a package or a list of packages
epsi install <package1> <package2> ...
epsi i <package1> <package2> ...
epsi -S <package1> <package2> ...
epsi sync <package1> <package2> ...
```

```bash
# Remove a package or a list of packages
epsi remove <package1> <package2> ...
epsi rm <package1> <package2> ...
epsi -R <package1> <package2> ...
```

```bash
# Search for a package (to know the exact name or to check if it's available)
epsi search <package>
```

```bash
# List all installed packages
epsi query
epsi -Q

# Tip: You can also use grep to search for a specific package
epsi query | grep <package>
```

```bash
# Upgrades locally installed packages to their latest versions
epsi upgrade
epsi -Syu
```

```bash
# Generates shell completions for supported shells (bash, fish, elvish, pwsh)
epsi gencomp <shell>
epsi -G <shell>
```

```bash
# Removes all orphaned packages and clears the package cache
epsi clean
epsi -C
```

```bash
# Queries for and returns available package updates
epsi checkupdates
```

```bash
# Runs pacdiff (a tool to help merge .pacnew files)
epsi diff
epsi -d
```

```bash
# Print help
epsi help
epsi -h
```

Flags can also be used:

```bash
  -v, --verbose...           # Sets the level of verbosity
      --noconfirm            # Complete operation without prompting user
  -q, --quiet                # Make some commands have less output (only clean, upgrade, and install are supported)
      --sudoloop             # Loops sudo in the background to ensure it doesn't time out during long builds
  -c, --cachedir <CACHEDIR>  # Sets a custom AUR clone and build directory for the specified operation
  -h, --help                 # Print help information
  -V, --version              # Print version information
```