---
title: Theom
description: The fourth desktop environment of AxOS.
---

![Theom](/docs/assets/theom4.png)

Theom (based on i3wm) is the fourth desktop environment for AxOS. It is mainly focused on asthetics, customization, and low resource usage.

In this section, you will learn how to customize and use Theom.

## Installation

When installing AxOS, you can choose Theom as your desktop environment. If you didn't choose it during the installation, you can install it by running the following command:

```bash
epsi i theom
```

or

```bash
epsi install theom
```

If you are on some other operating system other than AxOS, read our [Porting to other OS Documentation](https://github.com/AxOS-project/Theom/wiki/Porting-to-other-OS).

## Keybindings

Just like Sleex and Calla, it is a tiling window manager. So you can control almost everything with your keyboard. You can find all the default keybindings in the cheetsheet which can be opened by pressing `Mod + F1` (Where `mod` being the windows key). If needed, you can even modify/add new keybindings in the `~/.config/theom/keybindings.conf` file. The configuration syntax can be found in the [i3wm Keybinding Documentation](https://i3wm.org/docs/userguide.html#keybindings).

## Configuring Theom

Main configuration file:

```bash
~/.config/theom/config.toml
```

This file manages themes, widgets, compositor modes, and more.

### Important Notes

> **Do not change the structure**. Only edit **values**. Changing or removing keys like `[appearance]` or `theme = ...` may cause errors.

### Config Structure

#### `[appearance]`

Controls visual theme and wallpaper.

```toml
[appearance]
theme = "light"
wallpaper = "/usr/share/backgrounds/theom/dunes-sun.jpg"
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
    "~/.config/theom/twidgets/time.lua",
    "~/.config/theom/twidgets/uptime.lua"
]
```

- `show` lists Lua widgets using [Conky](https://github.com/brndnmtthws/conky) syntax.

#### `[compositor]`

Manages the theom compositor (picom).

```toml
[compositor]
compositing = true # Enables the compositor (false disables it)
compositing_mode = "performance"
animations = "basic"
```

- Compositing Modes:

  - `performance`: Faster, lighter (recommended)
  - `compatibility`: Heavier but reduces glitches (for VMs, etc.)

- Animation Modes:

  - `none`: No animations, lightest, fastest
  - `basic`: Minimal animations, fast (default)
  - `fancy`: Fancy animations, quite heavy

#### `[osd]`

Currently deprecated.

```toml
[osd]
osd = false
```

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

<p style="font-size: 0.9em; text-align: center;">
  Last updated: <strong>2025-09-28</strong> • Theom <strong>v4</strong>
</p>
