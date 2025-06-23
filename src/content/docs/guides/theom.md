---
title: Theom
description: The fourth desktop environment for AxOS.
---

## Table of Contents

1. [Installation](#installation)

   - [Epsilon Install](#epsilon-install)
   - [Manual Install](#manual-install)

2. [Keybindings](#keybindings)

   - [Essentials](#essentials)
   - [Workspace Management](#workspace-management)
   - [Window Focus](#window-focus)
   - [Window Movement](#window-movement)
   - [Layout](#layout)
   - [Scratchpad](#scratchpad)
   - [Resize Mode](#resize-mode)

3. [Configuration](#configuration)

   - [Configuring Theom](#configuring-theom)
   - [Important Notes](#important-notes)
   - [Config Structure](#config-structure)

     - [appearance](#appearance)
     - [bar](#bar)
     - [widgets](#widgets)
     - [compositor](#compositor)
     - [osd](#osd)

   - [Troubleshooting](#troubleshooting)

4. [Keybinding Configuration](#keybinding-configuration)

   - [Getting Started](#getting-started)
   - [Syntax](#syntax)
   - [Variables](#variables)
   - [Reloading](#reloading)
   - [Recovery](#recovery)

5. [PITFALLS IN THEOM](#PITFALLS-IN-THEOM)

## Installation

There are two ways to install Theom: via Epsilon, or manually.

### Epsilon Install

To install using Epsilon, run:

```bash
epsi install theom
```

This will fetch and install the latest version automatically.

### Manual Install

1. Download the latest release from [GitHub Releases](https://github.com/AxOS-project/Theom/releases).
2. Install the package:

```bash
sudo pacman -U <downloaded-file>
```

Replace `<downloaded-file>` with the actual filename.

---

## Keybindings

> The `mod` key refers to the **Super (Windows)** key.

### Essentials

- `mod+Return` — Launch terminal (default: Alacritty)
- `mod+d` — Open application launcher (Rofi)
- `mod+Shift+d` — Open Theom dashboard
- `mod+Shift+q` — Close focused window
- `mod+f` — Toggle fullscreen
- `mod+Shift+space` — Toggle floating mode
- `mod+space` — Switch between tiling and floating
- `mod+Shift+e` — Exit i3 with confirmation
- `Print` — Take screenshot with Flameshot

### Workspace Management

- `mod+1` through `mod+0` — Switch to workspace 1–10
- `mod+Shift+1` through `mod+Shift+0` — Move window to workspace 1–10

### Window Focus

- `mod+j/k/l/semicolon` — Focus left/down/up/right
- `mod+Arrow Keys` — Focus in respective direction
- `mod+a` — Focus parent container

### Window Movement

- `mod+Shift+j/k/l/semicolon` — Move window left/down/up/right
- `mod+Shift+Arrow Keys` — Move window with arrow keys

### Layout

- `mod+h` — Horizontal split
- `mod+v` — Vertical split
- `mod+e` — Toggle split orientation
- `mod+s` — Stacking layout
- `mod+w` — Tabbed layout

### Scratchpad

- `mod+minus` — Send window to scratchpad
- `mod+Shift+minus` — Show first scratchpad window

### Resize Mode

- `mod+r` — Enter resize mode

  - `j/Left` — Shrink width
  - `k/Down` — Grow height
  - `l/Up` — Shrink height
  - `semicolon/Right` — Grow width
  - `Enter/Escape/mod+r` — Exit resize mode

---

## Configuration

### Configuring Theom

Main configuration file:

```bash
~/.config/theom/config.toml
```

This file manages themes, widgets, compositor modes, and more.

### Important Notes

> **Do not change the structure**. Only edit **values**. Changing or removing keys like `[appearance]` or `theme = ...` may cause errors.

---

### Config Structure

#### `[appearance]`

Controls visual theme and wallpaper.

```toml
[appearance]
theme = "light"
wallpaper = "/usr/share/backgrounds/dunes-sun.jpg"
```

- `theme`: Either `"light"` or `"dark"`.
- `wallpaper`: Full path to wallpaper image.

#### `[bar]`

Specifies the bar system.

```toml
[bar]
polybar_layout = "stuck"
use_eww = true
```

- `use_eww = true` uses Eww for bar and widgets (recommended).
- `use_eww = false` uses Polybar (deprecated).

#### `[widgets]`

Controls widget visibility and source files.

```toml
[widgets]
enable_widgets = true
show = [
    "~/.config/widgets/time.lua",
    "~/.config/widgets/uptime.lua"
]
```

- `show` lists Lua widgets using [Conky](https://github.com/brndnmtthws/conky) syntax.

#### `[compositor]`

Manages transparency, shadows, and performance.

```toml
[compositor]
compositing = true
compositing_mode = "performance"
```

- Modes:

  - `performance`: Faster, lighter (recommended)
  - `compatibility`: Heavier but reduces glitches (for VMs, etc.)

#### `[osd]`

Currently deprecated.

```toml
[osd]
osd = false
```

---

### Troubleshooting

If your config breaks:

1. Open a TTY (`Ctrl + Alt + F3`).
2. Restore the config:

```bash

# Option 1: Auto-regenerate
rm ~/.config/theom/config.toml
theom-setup # regenerates the file

# Option 2: Restore the default manually
cp /usr/share/theom/config/theom/config.toml ~/.config/theom/
```

3. Re-login.

---

## Keybinding Configuration

### Getting Started

The keybindings config is at:

```bash
~/.config/theom/keybindings.conf
```

This file follows the same syntax as i3wm configs.

> **Caution:** This is part of the window manager. Mistakes can prevent access to your desktop.

### Syntax

Each keybinding uses the following format:

```conf
bindsym <key combo> <action>
```

Example:

```conf
bindsym $mod+Return exec alacritty
```

- `$mod` is defined as a variable, usually `Mod4`.
- `alacritty` launches the terminal.

#### Variables

Variables improve readability and reuse:

```conf
set $mod Mod4
```

Only `$mod` is defined by default. You can add more.

### Reloading

To reload after editing keybindings:

- Run `i3-msg restart`
- Or press `mod+Shift+r`

### Recovery

If you break it:

1. Try opening a terminal. If that fails, use `Ctrl + Alt + F3`.
2. Reset keybindings:

```bash
# Option 1: Auto-regenerate
rm ~/.config/theom/keybindings.conf
theom-setup # regenerates the config

# Option 2: Restore default manually
cp /usr/share/theom/config/theom/keybindings.conf ~/.config/theom/
```

3. Re-login.

---

## PITFALLS IN THEOM

Theom has as a few pitfalls due to it's philosophies.

You can read the common pitfalls in theom at our [GitHub Wiki](https://github.com/AxOS-project/Theom/wiki/Pitfalls-in-Theom)
