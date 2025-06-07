---
title: Custom Disk Handling
description: Options on how to handle disk partitioning
---

So, if you are planning on custom partitioning, you probably know what you're doing, so I'll make this pretty short.

### Minimal Requirements to install

| Partition |Min Size|      FS       |
|-----------|--------|---------------|
| /         |  10 GB | Linux native  |
| /boot/efi | 250 MB |    FAT32      |
|-----------|--------|---------------|

![Select partitions](/assets/images/man1-1.png)
Gparted is available if you wish/need.
You can view the available choice for supported filesystems and mount points by clicking on the menus as shown below.
![Disk choices](/assets/images/man2-1.png)
![Disk choices](/assets/images/man3-1.png)
You'll probably end up with something like this below when finished, unless you add more partitions of course.
![Disk](/assets/images/man4-1.png)
Click Next to continue
## Conclusion

Disk done.  There is currently no checking to make sure you did it right, that's on you.
