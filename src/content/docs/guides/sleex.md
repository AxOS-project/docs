---
title: Sleex
description: The third desktop environement for AxOS.
---

![Sleex](/docs/assets/sleex.png)

Sleex (based on the Hyprland compositor) is the third desktop environment for AxOS. It is the most aesthetic and feature-rich desktop environment of the 3. It has a lot of features, smooth animations and a lot of cool stuff.

In this page, you will learn how to use Sleex, how to customize it and how to fix some common issues.

<video width="100%" height="auto" controls>
  <source src="/docs/assets/desktops/sleex.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*This video shows an older version of Sleex. The current version may look a bit different (I can't make a new video at every commit).*

## Installation

When installing AxOS, you can choose Sleex as your desktop environment. If you didn't choose it during the installation, you can install it by running the following command:

```bash
epsi i sleex
```
or
```bash
epsi install sleex
```

You can also install it with pacman.

**To install Sleex on another arch-based os, follow the instructions on the README of the [github page](https://github.com/AxOS-project/Sleex/tree/main?tab=readme-ov-file#cross-distro).**


## Keybinds

Sleex is a tiling window manager, so it is recommended to use it with a keyboard. You can find every keybinds by pressing `Super + F1`. If you need, you can add keybinds in the `~/.config/hypr/custom/keybinds.conf` file. The configuration method can be found in the [Hyprland documentation](https://wiki.hyprland.org/Configuring/Binds/)

## Widgets

Sleex has a built-in widget system. You can add, remove and change the code of these in `/usr/share/sleex/`. You can also add your own widgets by creating a new file in this folder and editing `/usr/share/sleex/shell.qml`.

### Bar

The bar is the top bar of Sleex. Several modules can be found on it.

<video autoPlay muted loop playsInline controls>
  <source src="/docs/assets/sleex/bar.mp4" type="video/mp4" />
  Your browser is from 1998 and doesn't support video.
</video>

*The current version may look a bit different (I can't make a new video at every commit).*

- The title module, named spaceleft shows the process's title (big and white) and the process class/id (small and grey). Scroll on it to change the screen brightness.
- The resources module shows the current usage of CPU, SWAP and RAM. If the percentage is over 90%, it turns orange.
- The Workspace module shows the workspaces, if they're used and the primary app of each. It can be customized in the settings app to show numbers, show the icons, and others.
- The clock module shows the date and time. The formats can be changed in the settings app.
- The tray module shows the applications tray. It can be opened with a right click.
- The system icons module, named sideright, shows dynamic icons such as the mute status, bluetooth status and connected device, the wifi strenght and, if compatible, the battery. Scroll on it to change the audio volume, middle click to mute and right click to go to the next track if something is playing.

### Dashboard

The dashboard is a widget with several modules. You can open it by clicking on the right side of the bar, or by pressing `Super + D`.

<video autoPlay muted loop playsInline controls>
  <source src="/docs/assets/sleex/dash.mp4" type="video/mp4" />
  Your browser is from 1998 and doesn't support video.
</video>

*The current version may look a bit different (I can't make a new video at every commit).*

#### Home tab
In the home tab, you will find simple display elements:
- **User greeting**, because we are polite. You must set the profile icon in the settings app.
- **Clock**. Well, do I need to explain ?
- **Contribution number** using the github API. Add your username in the settings app.
- **Notification center** with the list of notifications. Click on the arrow to expand them. There is also a button to enable DnD, so you won't get notification popups.
- **Music controller** to control the music. Surprising, isn't it ?
- **Weather module** based on your current location according to your public IP.
- **Calendar** that doesn't do much...

#### Todo tab
It's a simple todo list, nothing more nothing less.

You can add tasks, mark them as done, delete them, move them up and down etc. The tasks are saved in `.sleex/user/todo.json`.

#### AI assistant

The AI assistant is a tab where you can use LLMs **with your API keys**.

*Note: Sleex is not affiliated with any of the model providers included in the AI assistant.*

Some commands are available to make your experience better:
- Type `/model` to select a model. Locally installed Ollama models are detected automatically.
- Type `/key` for instructions on how to get an API key for online models.

Currently, Gemini models with tools can edit your shell config or execute commands (with your confirmation). you can for example ask it increase or decrease your brightness.

#### Agenda (or Calendar) tab

The calendar tab is an interactive calendar where you can add, remove and edit events. 

Events are controlled with the `khal` command line tool.

You can enable the remote calendar sync by enabling the `vdirsyncer` option in the settings app. Note that you need to configure `vdirsyncer` manually. You can find a default configuration file at `~/.config/vdirsyncer/config` for Google Agenda sync (not affiliated).

You can find a VDirSyncer configuration tutorial on the [vdirsyncer documentation](https://vdirsyncer.pimutils.org/en/stable/tutorial.html).

### Desktop

On the desktop, you can find:
- A discrete watermark at the bottom right (that can be disabled in the settings app)
- A desktop clock, that can be moved, toggled and themed (dark or light) in the settings app.
- A random quote at the bottom left, that can be toggled in the settings app.

<video autoPlay muted loop playsInline controls>
  <source src="/docs/assets/sleex/desktop_clock.mp4" type="video/mp4" />
  Your browser is from 1998 and doesn't support video.
</video>

*The current version may look a bit different (I can't make a new video at every commit).*

### Dock

The dock is a widget where you can pin apps to access them rapidely.

When an app is open, the icon shows at the right of it. If you right click on it, the app will be pined and will be there even if it is not opened.

<video autoPlay muted loop playsInline controls>
  <source src="/docs/assets/sleex/dock.mp4" type="video/mp4" />
  Your browser is from 1998 and doesn't support video.
</video>


### Overview

The overview is a widget where you can see the current workspaces and the apps of each workspaces. You can drag and drop apps between workspaces and close them with middle click.

This widget is also an app launcher. Search for the app you want to open, then press enter or click on it. The search bar is also a calculator, a web search and a convertor.

Results can include:
- Apps installed on your system
- Math calculations
- Commands to run in terminal
- Web search
- (prefix with `/`) Launcher actions
- (prefix with `;`) Clipboard history items
- (prefix with `:`) Emojis

<video autoPlay muted loop playsInline controls>
  <source src="/docs/assets/sleex/overview.mp4" type="video/mp4" />
  Your browser is from 1998 and doesn't support video.
</video>

*The current version may look a bit different (I can't make a new video at every commit).*

### Settings

The settings app is a primary element of Sleex. On It, you can find multiple tabs with different functions:
- The **Style** tab is to configure simple elements such as the wallpaper, the color scheme and the light/dark mode.
- The **Interface** tab is to configure the sleex shell elements.
- The **Behavior** tab is to configure some shell backend / system elements.
- The **Sound** tab is to configure audio inputs/outputs.
- The **Bluetooth** tab is to configure bluetooth and connect devices.
- The **Wifi** tab is to configure wifi.
- The **Display** tab is to configure displays.
- The **Privacy** tab is to configure privacy-related options such as location services, AI policy etc.
- The **About** tab contains basic infos about AxOS and Sleex.

<video autoPlay muted loop playsInline controls>
  <source src="/docs/assets/sleex/settings.mp4" type="video/mp4" />
  Your browser is from 1998 and doesn't support video.
</video>

*The current version may look a bit different (I can't make a new video at every commit).*


## Developers

You want to contribute to the developement of Sleex? Cool! here are some things you might want to know:

- The code of the sleex shell is located in `/usr/share/sleex/`. You can also find it on the github repository: [Sleex](https://github.com/AxOS-project/sleex)
- The Sleex interface and widgets are made with [Quickshell](https://quickshell.org/).

Pull requests are really appreciated! If you have any question, you can ask them on the [AxOS Discord server](https://discord.com/invite/xQdtDBFmsy).
