---
title: Manual partitioning
description: Options on how to handle disk partitioning
---

So, if you are planning on custom partitioning, you probably know what you're doing, so I'll make this pretty short.

### Minimal Requirements to install

| Mountpoint|Min Size|      FS       |
|-----------|--------|---------------|
| /boot/efi | 250 MB |    FAT32 (or VFAT)      |
| /         |  10 GB | Linux native (ext4 or btrfs are recommended)  |

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
