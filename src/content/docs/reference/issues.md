---
title: Known issues
description: A list of known issues in AxOS.
---

> <p style="color: cyan; font-weight: bold;">NOTE</p>
>
> As AxOS lacks feedback from the community, this page is not complete. If you encounter an issue, please report it to us so that we can add it here.

### Contents

- [Contents](#contents)
- [Invalid or corrupted packages](#invalid-or-corrupted-packages)
- [Mouse cursor is getting bigger in Plasma](#mouse-cursor-is-getting-bigger-in-plasma)
- [Can't boot: /dev/disk/by-label' device did not show up after 30 seconds...](#cant-boot-devdiskby-label-device-did-not-show-up-after-30-seconds)
- [Blank cheatsheet issue in sleex](#blank-cheatsheet-issue-in-sleex)
- [Resolution issue in sleex](#resolution-issue-in-sleex)
- [Greyed out next button in locale screen in AxOS installer](#greyed-out-next-button-in-locale-screen-in-axos-installer)
- [Greeter asking for live user password](#greeter-asking-for-live-user-password)
- [Can't screenshare on Sleex](#cant-screenshare-on-sleex)
- [Report an issue](#report-an-issue)

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

Is your sleex widgets overflowing?

Edit the scale of the shell: edit `/usr/share/sleex/shell.qml` and adjust this variable at the top of the file.

```
//@ pragma Env QT_SCALE_FACTOR=1
```

The bigger the number is, the bigger the shell will be. After you did that, reboot or relogin.

### Greyed out next button in locale screen in AxOS installer

This happens because the locale that you selected is not installed in the system.

To fix this, edit `/etc/locale.gen` and uncomment the locale that you want. Then, run `locale-gen` in a terminal to install locale that you want.

If you don't want this method, then you can select another locale that is installed on the system.

### Greeter asking for live user password

> <p style="color: cyan; font-weight: bold;">NOTE</p>
>
> This is not an AxOS issue.

If you see the installer asking for live user password, it means that you are trying to run AxOS in Vbox or Vmware. They don't play well with AxOS so it is recommended to use either Qemu or HyperV.

### Can't screenshare on Sleex

This means your portal is not configured.

1. Edit `/usr/share/xdg-desktop-portal/portals/hyprland.portal` and add Sleex to the list on the last line. It should looks like that:
   ```
   UseIn=wlroots;Hyprland;sway;Wayfire;river;Sleex;
   ```
2. Restart your portals: `systemctl --user restart xdg-desktop-portal.service`
3. Check if the hyprland portal is running: `systemctl --user status xdg-desktop-portal-hyprland.service`. If it is, then it should work.

### Report an issue

If your issue is not listed here, please open an issue on the [GitHub repository](https://github.com/AxOS-project/axos), or contact us on [Discord](https://discord.gg/sG3NBMYg77) or via email at [ardox@axos-project.com](mailto:ardox@axos-project.com).
