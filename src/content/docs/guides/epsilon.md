---
title: Epsilon
description: Epsilon is a powerful, lightweight, and easy-to-use package manager for AxOS
---

Epsilon (or `epsi`) is a powerful, lightweight, and easy-to-use package manager for AxOS. It is designed to be simple to use, and to provide an easy way to install, update, manage, and remove packages on your system.

Epsilon fetches packages from the pacman repositories and the AUR, and can install packages from both sources. It also provides a simple way to manage your system's packages, services, and keep your system up-to-date.

## Installation

Epsilon comes pre-installed on AxOS, so you don't need to install it separately. You can start using it right away.

## Package and Service handling

One speciality of epsilon is that it provides a simple way to handle package and services through manifest files. These files are written in YAML.

Here is an example manifest file:

```yaml
# Packages from the mirrors
packages: 
  install:
    - vim
    - alacritty
  # same effect as packages_aur.remove
  remove:
    - nano

# Packages from the aur
packages_aur:
  install:
    - shim-signed
  # same effect as packages.remove
  remove:
    - thunar

# Repsitories to add as mirrors
repos:
  axos:
    siglevel: Optional TrustAll
    server: https://axos-project.com/AxMirrors/$arch

# Services to enable/disable
services:
  enable:
    - docker
  disable:
    - mongod
```

These files can be applied simply by running the following command:

```bash
epsi manifest apply <PATH_TO_FILE> [OPTIONS]
```

Moreover, epsilon can also generate a manifest file from your current system setup which can be used to revert to your old package and service setup in certain scenarios like reinstalling AxOS. 

```bash
epsi manifest generate <OUTPUT_PATH> [OPTIONS]
```

## Commands

Epsilon is a command-line tool, and can be used from the terminal. Here are the commands that you can use with Epsilon:

```bash
# Just install a package or a list of packages
epsi install <package1> <package2> ...
epsi i <package1> <package2> ...
epsi -S <package1> <package2> ...
epsi sync <package1> <package2> ...

# Install from a specific repo
epsi install <package1> <package2> ... --aur # installs the package from the aur
epsi install <package1> <package2> ... --repo # installs the package from the axos or arch repos
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

# Search in a particular repo
epsi search <package> --aur # Searches for the package in aur
epsi search <package> --repo # Searches for the package in axos or arch repos
```

```bash
# Refresh repositories and update the package database
epsi sync
epsi -y
epsi sy
```

```bash
# List all installed packages
epsi query
epsi -Q

# List only explicitly installed packages
epsi query --explicit
epsi -Qe

# Get information about a package
epsi query --info <package>

# Check which package owns a file
epsi query --owns <path/to/file> # Example: epsi query --owns /usr/bin/python

# List all installed packages installed from a specific repo
epsi query --aur # lists packages from the aur
epsi query --repo # lists packages from the arch/axos repos

# Tip: You can also use grep to search for a specific package
epsi query | grep <package>
```

```bash
# Upgrades locally installed packages to their latest versions
epsi upgrade
epsi -Syu

# Upgrade with backup
epsi upgrade -s -d
epsi upgrade --with-snapshot --delete-snapshot-onfail

epsi -Syu -s -x
epsi -Syu --with-snapshot --replace-snapshot
```

```bash
# Apply a manifest
epsi manifest apply <path/to/file>

# Apply a manifest but reinstall up-to-date packages
epsi manifest apply <path/to/file> --install-all
epsi manifest apply <path/to/file> -I
```

```bash
# Generate a manifest
epsi manifest generate <path/to/output>

# Show a JSON form of manifest before writing
epsi manifest generate <path/to/output> --view-json
epsi manifest generate <path/to/output> -j

# Only include user installed packages
epsi manifest generate <path/to/output> --user-installed
epsi manifest generate <path/to/output> -u

# Include AUR packages too
epsi manifest generate <path/to/output> --include-aur
epsi manifest generate <path/to/output> -a

# Set enabled servivces
epsi manifest generate <path/to/output> --enabled-services <service1> <service2> ...
epsi manifest generate <path/to/output> -S <service1> <service2> ...

# Set disabled services
epsi manifest generate <path/to/output> --disabled-services <service1> <service2> ...
epsi manifest generate <path/to/output> -s <service1> <service2> ...
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
