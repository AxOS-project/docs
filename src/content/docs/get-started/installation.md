---
title: Install AxOS
description: How to install AxOS
---

So, you are ready to install AxOS? Great! This guide will help you to install AxOS on your computer.


## Prerequisites
### Required

| Component | Plasma | Calla | Sleex |
|-----------|--------|--------|-----------|
| CPU | 64-bit (x86_64) | 64-bit (x86_64) | 64-bit (x86_64) |
| RAM | 4GB | 2GB | 4GB |
| Disk Space | 10GB | 10GB | 10GB |

### Recommended

| Component | Plasma | Calla | Sleex |
|-----------|--------|--------|-----------|
| RAM | 8GB | 4GB | 8GB |
| Disk Space | 50GB | 20GB | 40GB |

<br />

**AxOS doesn't support 32 bits and ARM architectures.** If you are using a 32 bits or ARM architecture, you won't be able to install AxOS.

**Secure boot is not supported** and **YOU WON'T BE ABLE TO BOOT WITHOUT UEFI**.

## Create the installation media

The installation media is a USB drive or an SD card used to install AxOS. Any of these will work if you have at least **2GB** of free space.

### Get the ISO

The ISO (or .iso) is the installation image of AxOS. You can download it from the [AxOS release page](https://github.com/axos-project/axos/releases/latest).

### Flash the ISO to the installation media

There are three ways to create the installation media:

**On Linux/MacOS:**
You can either use the **Balena Etcher** app or the **dd** command.
```bash
sudo dd if=/path/to/axos.iso of=/dev/sdX bs=4M status=progress && sync
```
Be sure to replace `/path/to/axos.iso` with the actual path to the ISO file on your system and `/dev/sdX` with the actual path to the USB drive or SD card on your system.
You can find the path to the USB drive or SD card by running `lsblk` or `fdisk -l`.

**On Windows:**
You can use the **Rufus** app or the **Balena Etcher** app. You can also use the **dd** command, but it's not recommended because it's more difficult to use.

## Start the installation

You have the installation media ready, now you can start the installation.

### Boot from the installation media

1. Plug the installation media into your computer while it's powered off.
2. Access the boot menu of your computer. The key to access the boot menu varies from one computer to another, but it's usually **F2**, **F10**, **F12**, **Delete**, **Esc**, or **F1**.
3. Select the installation media as the boot device.

You should now boot on the live AxOS environment. The live environment is a testing environment, so you can try AxOS without having to install it. By default, the live environment is the **Plasma** desktop environment.

## Install AxOS

Are you ready to install AxOS? Great! You can find an app in the app menu called **Install AxOS**. This app will guide you through the installation process. 
The different steps are:

- Select the time zone
- Select the keyboard layout
- Create the user (username, password, admin rights, etc.)
- Select the disk to install AxOS on
- Select the desktop environment (Plasma, Calla, or Sleex)
- Select the kernel (Linux or Linux-zen)
- Miscellaneous settings (NVidia drivers, hostname, etc.)
- Recap and install

Once you launch the installation, the installation will start. The installer will fetch the latest packages and install them in the selected disk. This process can take a few minutes, depending on the speed of your disk and internet connection.

## Conclusion

You have now installed AxOS! You can now reboot your computer and enjoy your new operating system.