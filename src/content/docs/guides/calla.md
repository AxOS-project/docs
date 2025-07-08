---
title: Calla
description: The second desktop environement for AxOS.
---

Calla (based on awesomewm) is the second desktop environment for AxOS made by [Stardust-kyun](https://github.com/Stardust-kyun). It is one of the most minimal and lightweight desktop environment that AxOS provides. It is generally less stable than Kde Plasma.

## Installation

You can install Calla by running the following command:

```bash
epsi i calla
```

## Keybindings

### Essentials

- `Super + F1` — Show help
- `Super + Space` — Show menu
- `Super + D` — Show application launcher
- `Super + Q` — Close application
- `Super + Enter` — Open terminal
- `Super + L` — Lock screen
- `Super + E` — Open file manager
- `Super + W` — Open firefox

### Window Management

- `Super + Shift + R` — Reload awesomewm
- `Super + Shift + C` — Show configuration
- `Super + Z` — Move to the next layout
- `Super + Tab` — Move to the next window
- `Super + Shift +  Tab` — Move to the previous window

### Window behaviour

- `Super + B` — Toggle sticky
- `Super + M` — Toggle Maximize
- `Super + N` — Toggle Minimize
- `Super + S` — Toggle floating
- `Super + F` — Toggle full screen

### Screenshots

- `Super + Shift + Print` — Take full screen screenshot
- `Super + Ctrl + Print` — Take full screen screenshot with delay (5 secs)
- `Super + Print` — Take part screenshot

### Volume and Brightness

> <p style="color: cyan; font-weight: bold;">NOTE</p>
>
> The following keybindings can be different on each keyboard.
> For example XF86AudioRaiseVolume can be f8 on some keyboards.

- `Super + XF86AudioRaiseVolume` — Raise volume
- `Super + XF86AudioLowerVolume` — Lower volume
- `Super + XF86AudioMute` — Mute volume
- `Super + XF86MonBrightnessUp` — Raise brightness
- `Super + XF86MonBrightnessDown` — Lower brightness

## Customizing

You can customize calla keybindings by editing the `/usr/share/calla/desktop/config/bind.lua` file.
