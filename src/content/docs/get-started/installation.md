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

**Support of virtual machine architecture is also currently problematical and your mileage may vary.  We recommend actual hardware installation for various reasons.  Otherwise, evaluate the LIVE iso before installing, it is a point in time release but with our featured desktop environment, Sleex.**

## Create the installation media

The installation media is a USB drive or an SD card used to install AxOS.   You must have at least **2GB** of free space. This number may change with subsequent releases.

### Get the ISO

The ISO (or .iso) is the installation image of AxOS. You can download it from the [AxOS release page](https://github.com/axos-project/axos/releases/latest).  Please ensure you have the lastest ISO, previous ISOs will often have issues with the changing nature of Arch-Linux.

### Flash the ISO to the installation media

There are three ways to create the installation media:

**On Linux/MacOS:**

Your mileage may vary with different image-writing applications (just as all other distro experience).  Ventoy also works at the time of this writing.

You can either use the **Balena Etcher** app or the **dd** command.
```bash
sudo dd if=/path/to/axos.iso of=/dev/sdX bs=4M status=progress && sync
```
Be aware that careless application of this command can and will likely eat your hard drive.

Be sure to replace `/path/to/axos.iso` with the actual path to the ISO file on your system and `/dev/sdX` with the actual path to the USB drive or SD card on your system.
You can find the path to the USB drive or SD card by running `lsblk` or `fdisk -l`.

**On Windows:**
You can use the **Rufus** app or the **Balena Etcher** app. You can also use the **dd** command, but it's not recommended because it's more difficult to use.

## Start the installation

If you have the installation media ready, now you can start the installation.

### Boot from the installation media

1. Plug the installation media into your computer while it's powered off.  This may mean inserting it into a slot or attaching via USB.
2. Access the boot menu of your computer. The key to access the boot menu varies from one computer to another, but it's usually **F2**, **F10**, **F12**, **Delete**, **Esc**, or **F1**.
3. Select the installation media as the boot device.

You should now boot on the live AxOS environment. The live environment is a testing environment, so you can try AxOS without having to install it. By default, the live environment is the **Sleex** desktop environment.

You should now see this screen (or very similar).
![Grub Boot Menu](/assets/images/boot.png)

## Install AxOS

Are you ready to install AxOS? Great! The install app should automatically start, otherwise you can find it in the app menu called **Install AxOS**. This app will guide you through the installation process.  Use the super key (Windows key) to activate the search menu if needed. 
![Install App](/assets/images/install1.png)

The different steps are:

- Select the keyboard layout
![Select Keyboard](/assets/images/install2-1.png)
- Select the timezone
![Select timezone](/assets/images/install4-1.png)
- Set the locale and set date
![Select locale](/assets/images/install5-1.png)
- Create the user (username, password, admin rights, etc.)
![Create User](/assets/images/users-1.png)
- Select the desktop environment (Plasma, Calla, or Sleex)
![Select Desktop](/assets/images/install7-1.png)
- Select the kernel (Linux or Linux-zen)
![Select kernel](/assets/images/install8-1.png)
- Miscellaneous settings (NVidia drivers, app packages, etc.)  If none are desired, you can simply Next and go to the next screen. This is simply for convenience and you can certainly add anything you need later manually.
![Select Misc](/assets/images/install9-1.png)
- Select the disk to install AxOS on
You have choices here, you can install whole disk (the default) by clicking on a disk, select existing partitions and set mount points, or launch an external partitioning program to create a new custom partition scheme.<br>
You can click on the image below to open a document with some details on manual partitioning support, if you wish/need.
[![Select Misc](/assets/images/disk1-1.png)](http://url/custom-disk.html)]
- Recap and install
Take a look at the choices you've made, validate everything, and then start the installation.  The installer will fetch the latest packages and install them in the selected disk. This process can take a few minutes, depending on the speed of your disk and internet connection.

## Conclusion

You have now installed AxOS! You can now reboot your computer and enjoy your new operating system.
