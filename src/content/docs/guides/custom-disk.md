---
title: Manual partitioning
description: Options on how to handle disk partitioning
---

So, if you are planning on custom partitioning, you probably know what you're doing, so I'll make this pretty short.
The recommended tool to manually partition your disks is `cfdisk` it's a pretty straight-forward tool to manually setup your disks

### Minimal Requirements to install

| Mountpoint|Min Size|      FS       |
|-----------|--------|---------------|
| /boot/efi | 250 MB |    FAT32 (or VFAT)      |
| /         |  10 GB | Linux native (ext4 or btrfs are recommended)  |

Optionally you can have a [swap partition](https://wiki.archlinux.org/title/Swap).
For systems without hibernation and RAM under 2GB, use 2-3 times your RAM; for 2GB to 8GB of RAM, use RAM size; and for more than 8GB RAM, a swap size of 8GB or less, or even half RAM, is often sufficient, though memory-intensive tasks might require more.

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
