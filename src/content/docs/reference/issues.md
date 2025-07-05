---
title: Known issues
description: A list of known issues in AxOS.
---

<!-- This needs to be removed later since axos is gaining traction -->

(As i don't have a lot of feedback from the community, this page is not complete. If you encounter an issue, please report it to us.)

### Contents

- [Invalid or corrupted packages](#invalid-or-corrupted-packages)
- [Mouse cursor is getting bigger in Plasma](#mouse-cursor-is-getting-bigger-in-plasma)
- [Can't login to Sleex](#cant-login-to-sleex)
- [Can't boot: /dev/disk/by-label' device did not show up after 30 seconds...](#cant-boot-devdiskby-label-device-did-not-show-up-after-30-seconds)
- [Blank cheatsheet issue in sleex](#blank-cheatsheet-issue-in-sleex)
- [Resolution issue in sleex](#resolution-issue-in-sleex)

### Invalid or corrupted packages

This can happen sometimes with Pacman if the keys have been corrupted. To fix this, you can run the following commands:

```bash
# Initialize the keys
sudo pacman-key --init
# Populate the keys
sudo pacman-key --populate archlinux
```

Then, you can try to install the package again. If it still doesn't work, you can try to remove the package and then install it again.

### Mouse cursor is getting bigger in Plasma

You are shaking your mouse, right? That's why the mouse cursor is getting bigger. This is a easter egg from the developers of Plasma. To fix this, you can disable it by switching accessibility > Shake Cursor > Enable.

### Can't login to Sleex

We are talking here about when the login screen logins and then goes back to the login screen.

This is a known issue with the hyprland package. This can happen sometimes when the packagers are updating the libraries. I cannot provide a fix for this, but there are two options for you:

1. Wait for the packagers to fix the issue. This can take some time, so be patient.
2. open the TTY (`Ctrl + Alt + F3`) and login with your username and password. Then, you can run the following command to start the Sleex desktop environment:

```bash
# run the sleex command to see what library is missing
sleex
```

Then, you can run the following command:

```bash
# if the missing library is libhyprutils.so.X (X is the version number)
sudo ln -sf /usr/lib/libhyprutils.so.X /usr/lib/libhyprutils.so.Y # Where Y is an older / newer version of the library
```

This is a temporary fix, like putting a band-aid on a wound, but it will do the job until the packagers fix the issue.

### Can't boot: /dev/disk/by-label' device did not show up after 30 seconds...

This happens when the UEFI is disabled.

Enable it in your BIOS (Or in your VM settings if you are using a VM) to fix this issue.

### Blank cheatsheet issue in sleex

The issue occours because the cheatsheet uses the `keybinds.conf` configuration file. When sleex starts for the first time, it also chooses the good configuration file to apply. The widget is generated before the configuration file which causes this issue.

To fix this issue, you just have to do any of the three things listed below.

- Refresh the widgets. (Ctrl+Alt+Win+R)
- Reboot.
- Log out and log back in.

### Resolution issue in sleex

Is your sleex widgets overflowing? It's a known issue in sleex.

Currently there is no fix for this but the maintainers of sleex are working on fixing this issue.

### Report an issue

If your issue is not listed here, please open an issue on the [GitHub repository](https://github.com/AxOS-project/axos), or contact us on [Discord](https://discord.gg/sG3NBMYg77) or via email at [ardox@axos-project.com](mailto:ardox@axos-project.com).
