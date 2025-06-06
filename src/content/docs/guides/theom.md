---
title: Theom
description: The fourth desktop environement for AxOS.
---

# Installation

There are two methods of installing theom. You cane either install it manually, or use epsilon to install it.

## Epsilon install

- Installing with epsilon is easy, just run the following command:

```bash
epsi install theom
```

## Manual install

- Install the latest version from the [github releases](https://github.com/AxOS-project/Theom/releases) and run the following command.

```
sudo pacman -U <installed-file>
```

# Keyboard shortcuts

> The `mod` key is also known as the windows key.

## Essentials

- `mod+Return` — Open terminal (opens the default terminal - Alacritty)
- `mod+d` — Launch application launcher (Rofi is the default)
- `mod+Shift+d` — Open Theom dashboard
- `mod+Shift+q` — Close the focused window
- `mod+f` — Toggle fullscreen for the focused window
- `mod+Shift+space` — Toggle floating mode for the focused window
- `mod+space` — Toggle focus between tiling and floating windows
- `mod+Shift+e` — Exit i3 with confirmation
- `Print` — Take a screenshot using Flameshot

## Workspace Management

- `mod+1` through `mod+0` — Switch to workspace 1–10
- `mod+Shift+1` through `mod+Shift+0` — Move focused window to workspace 1–10

## Window Focus

- `mod+j` — Focus left
- `mod+k` — Focus down
- `mod+l` — Focus up
- `mod+semicolon` — Focus right
- `mod+Left/Down/Up/Right` — Focus window in that direction
- `mod+a` — Focus the parent container

## Window Movement

- `mod+Shift+j` — Move window left
- `mod+Shift+k` — Move window down
- `mod+Shift+l` — Move window up
- `mod+Shift+semicolon` — Move window right
- `mod+Shift+Left/Down/Up/Right` — Move window using arrow keys

## Layout

- `mod+h` — Split container horizontally
- `mod+v` — Split container vertically
- `mod+e` — Toggle split orientation
- `mod+s` — Set layout to stacking
- `mod+w` — Set layout to tabbed

## Scratchpad

- `mod+minus` — Move the currently focused window to the scratchpad
- `mod+Shift+minus` — Show the first window from the scratchpad

## Resize Mode

- `mod+r` — Enter resize mode
  - `j` / `Left` — Shrink width
  - `k` / `Down` — Grow height
  - `l` / `Up` — Shrink height
  - `semicolon` / `Right` — Grow width
  - `Enter` / `Escape` / `mod+r` — Exit resize mode

# Customising Theom

## Desktop

You can customise theom by editing the **config.toml** file located at `~/.config/.theom/config.toml`. This is the file that you should edit to change the looks of the theom desktop.

## Keybindings

To change the keybindings, edit the **keybindings.conf** file located at `~/.config/.theom/keybindings.conf`. This file contains both the keybindings and what that keybinding does. So you can customise both the keybindings and the applications that the keybindings open in this one config file.
