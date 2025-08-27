---
title: Manual partitioning
description: Options on how to handle disk partitioning
---

So, if you are planning on custom partitioning, you probably know what you're doing, so I'll make this pretty short.
The recommended tool to manually partition your disks is `cfdisk` it's a pretty straight-forward tool to manually setup your disks

To use `cfdisk` you can just open up your terminal and type `sudo cfdisk <your disk to partition i.e /dev/sda or /dev/nvme0n1>`.
If you don't know about your disk name then you can type and run `lsblk` to know about your disk to partition.

### Minimal Requirements to install

| Mountpoint|Min Size|      FS       |
|-----------|--------|---------------|
| /boot/efi | 250 MB |    FAT32 (or VFAT)      |
| /         |  10 GB | Linux native (ext4 or btrfs are recommended)  |

### Swap
Optionally you can have a [swap partition](https://wiki.archlinux.org/title/Swap).
>For systems without hibernation and RAM under 2GB, use 2-3 times your RAM; for 2GB to 8GB of RAM, use RAM size; and for more than 8GB RAM, a swap size of 8GB or less, or even half RAM, is often sufficient, though memory-intensive tasks might require more.

In simple words if you have lets say 8GB of RAM installed on your machine then your swap partition size should be 8 x 1/2 which is half of 8

If you have 16 GB of RAM on your machine then your swap partition size would be 16 x 1/2 which is 8GB
Here's an example of a minimal disk setup with swap partition for 16 GB of RAM:
| Mountpoint|Min Size|      FS       |
|-----------|--------|---------------|
| /boot/efi | 250 MB |    FAT32 (or VFAT)      |
|           | 8 GB   | Linux Swap |
| /         |  10 GB | Linux native (ext4 or btrfs are recommended)  |

> Always remember that you should **not** mount the swap partition anywhere on the device just leave the mountpoint empty

Taking the Windows dual boot example from below with swap your partition table should look like this if you have 8GB of RAM
| Mountpoint         |  Size  |    FS     |
|--------------------|--------|-----------|
| Windows EFI        | 100 MB | Fat32     |
| Microsoft reserved | 250 MB | NTFS      |
| Basic data part.   | 250 GB | NTFS      |
| Windows Recovery   | 800 MB | NTFS      |
| /boot/efi          | 250 MB | FAT32     |
|                    | 4 GB   | Linux Swap |
| /                  | 240 GB | EXT4      |


---

Here is an example for windows dual boot on a 500G drive:

| Mountpoint         |  Size  |    FS     |
|--------------------|--------|-----------|
| Windows EFI        | 100 MB | Fat32     |
| Microsoft reserved | 250 MB | NTFS      |
| Basic data part.   | 250 GB | NTFS      |
| Windows Recovery   | 800 MB | NTFS      |
| /boot/efi          | 250 MB | FAT32     |
| /                  | 240 GB | EXT4      |


When finished with partitioning, click Next to continue.
