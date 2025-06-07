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

> <p style="color: red; font-weight: bold;">CAUTION</p> 
>
> The EFI partition should **ALWAYS** be in front of the root partition.

An example of good partitioning is:

| Mountpoint| Size|      FS       |
|-----------|--------|---------------|
| /boot/efi | 250 MB |    FAT32      |
| /         | 500 GB | Linux native |


When finished with partitioning, click Next to continue.
