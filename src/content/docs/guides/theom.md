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

# TOSD client commands

`tosd-client` is the cli tool that comes with tosd. `tosd-client` allows easy communication between the `tosd-server` to draw OSD (On Screen Display) on the screen.

## Positional arguments and options

| Positional arguments | Options                 |
| -------------------- | ----------------------- |
| text                 | -d, --duration          |
| mode {slider, text}  | -s, --size              |
| value                | -p, --position          |
|                      | -x, --dont-reuse-window |
|                      | --background-color      |
|                      | --text-color            |
|                      | --slider-fill-color     |
|                      | --slider-knob-color     |

### Arguments

- The text argument should be passed as a string like this: `tosd-client "the text value"`
- The mode value should be either slider or text. Example: `tosd-client "" slider`
- The value argument value should be the number or string that you pass to the mode. Example: `tosd-client "" slider 50`

### Options (utils)

- The `--duration` option or `-d` in short will tell the osd to show the window for the specified amount of time. The value will be in seconds. Example: `tosd-client "" slider 50 -d 2`
- The `--size` option or `-s` in short will be the size of the window. `1.0` is the default size. Use example: `tosd-client "" slider 50 -d 2 -s 0.5`
- The `--position` option or `-p` in short will tell the osd to position the window to a specific place. There are 8 positions where you can position the window. `TL` for top left posiition, `T` for top, `TR` for top right, `L` for left, `C` for center, `R` for right, `BL` for bottom left, `B` for bottom,`BR` for bottom right. Use example: `tosd-client "" slider 50 -d 2 -s 0.5 -p TR`
- The `--dont-reuse-window` option or `-x` in short will tell the server to not reuse the previous window. Using it is not recommended because by using it, you may encounter many issues if the server is requested and overloaded with too much requests. Usage example: `tosd-client "" slider 50 -d 2 -s 0.5 -p TR -x`

### Options (styling)

> NOTE: All the values to the styling options should be in hexadecimal as a string. Example: "#ffffff" for white.

- The `--background-color` option is used to set the background color of the osd window. Use example: `tosd-client "" slider 50 -d 2 -s 0.5 -p TR -r --background-color "#000000"`
- The `--text-color` option is used to set the text color of the osd window. Use example: `tosd-client "" slider 50 -d 2 -s 0.5 -p TR -r --text-color "#ffffff"`
- The `--slider-fill-color` option is used to set the color of the slider. Use example: `tosd-client "" slider 50 -d 2 -s 0.5 -p TR -r --slider-fill-color "#333333"`
  The `--slider-knob-color` option is used to set the color of the knob of the slider. Use example: `tosd-client "" slider 50 -d 2 -s 0.5 -p TR -r --slider-knob-color "#555555"`
