---
title: Dual boot tutorial
description: How do do a dual boot with Windows (or any other OS)
---

# Dual Boot Guide: Windows + AxOS

How to do a full **dual boot installation** with **Windows 11** and **AxOS** (Windows 10 should work as well).

> **System Requirements**: [Check here](https://www.axos-project.com/docs/get-started/installation/#required)
> Minimum disk space: **10 GB** (but **50 GB or more is strongly recommended** for a smoother experience)

## Step 0: Before You Begin

> I will **skip the steps** for flashing AxOS to a USB. Please make sure you’ve already created a **bootable USB**.


## Step 1: Create Free Space on Your Disk (Windows)

We need to shrink an existing partition to make room for AxOS.

### Instructions:

1. Press `Win + X` → choose **Disk Management**
   *or*
   Press `Win + R`, type `diskmgmt.msc`, and hit Enter.
2. In the Disk Management window:
   * Right-click on a partition with enough free space (e.g. your D: drive)
   * Click **"Shrink Volume"**
   * Enter how much you want to shrink (in MB). For example, `50000` for 50 GB
   * Click **"Shrink"**

This will create **unallocated space** which we’ll use to install AxOS.


## Step 2: Boot into AxOS from USB

1. Reboot your computer
2. Enter your **BIOS/UEFI menu**
3. Select your **bootable USB** device
4. Boot to AxOS


## Step 3: Verify Free Space in AxOS

Once inside the live AxOS, open the terminal (`Win + Enter`) and run:

```bash
sudo parted -l
```

This will list all available disks and their partitions.

Look for something like:

```
Unallocated space: 50GB
```

Or run:

```bash
sudo parted -l | grep "Unallocated"
```

> **Note:** Take note of your disk’s name — it could be something like:
>
> * `/dev/sda`
> * `/dev/nvme0n1`
>
> We’ll use that name in the next step.


## Step 4: Create Partitions with `gdisk`

We’ll now use `gdisk` to manually create two partitions:

* One for the **EFI System** (`/boot/efi`)
* One for the **Linux Root** (`/`)

Replace `yourdiskname` below with your actual disk name (e.g. `/dev/sda` or `/dev/nvme0n1`).

```bash
sudo gdisk /dev/yourdiskname
```

### Inside `gdisk`:

1. Press `n` to create a **new partition**
2. Press `Enter` to accept default partition number
3. Press `Enter` to accept default first sector
4. Type `+512M` → this creates a 512MB partition
5. Type `EF00` → this sets it as an **EFI System** partition

EFI partition done!


### Create the Root Partition (`/`):

1. Press `n` again
2. Press `Enter` for all prompts (partition number, first/last sector, partition type)
3. Type `w` and press `Enter` to **write changes**

> Confirm with `y` if asked.

We’ve now created two partitions.

> ⚠️ The **partition names** depend on your disk:
>
> * If your disk is `/dev/sda`, partitions will be `/dev/sda1`, `/dev/sda2`, etc.
> * If your disk is `/dev/nvme0n1`, partitions will be `/dev/nvme0n1p1`, `/dev/nvme0n1p2`, etc.
>   *(Note the **"p"** before the number of partition)*


## Step 5: Mount the Partitions

### Mount the Root Partition (Linux filesystem):

```bash
sudo mount /dev/nvme0n1p2 /mnt
```

### Create and Mount EFI Directory:

```bash
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/nvme0n1p1 /mnt/boot/efi
```

> **Adjust disk and partition names and numbers as needed.**

Now we’re ready to launch the installer.


## Step 6: Launch the AxOS Installer

1. Open the **AxOS Install** application from the menu.
2. Proceed through the installation.
3. When you get to **"Installation disk and partitioning"**, choose **Manual Partitioning**.

### Configure the Mount Points:

* For the **EFI partition**:

  * Set **FAT32** format
  * Set mount point to `/boot/efi`

* For the **Linux root partition**:

  * Set **ext4** format (ext4 is an example, but it's also recommended)
  * Set mount point to `/`

4. Continue through the installer
5. Once installation finishes, reboot

> **Adjust disk and partition names and numbers as needed.**

## Step 8: Configure GRUB to Detect Windows

After rebooting into AxOS:

### 1. Open a terminal and edit the GRUB config:

```bash
sudo nano /etc/default/grub
```

### 2. Find this line:

```bash
GRUB_DISABLE_OS_PROBER
```

Change it to:

```bash
GRUB_DISABLE_OS_PROBER=false
```

> **Save and Exit Nano**:
>
> * Press `Ctrl + O` (to save)
> * Press `Enter` (to confirm filename)
> * Press `Ctrl + X` (to exit)

### 3. Detect Windows:

```bash
sudo os-prober
```

If it returns your Windows installation, proceed.


## Step 9: Generate GRUB Config

Choose the appropriate command depending on your system:

### BIOS Systems:

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

### UEFI Systems:

```bash
sudo grub-mkconfig -o /boot/efi/EFI/grub/grub.cfg
```

> ⚠️ If you are not sure what to choost stick to BIOS System.


## Final Step: Reboot

Now reboot your system:

```bash
sudo reboot now
```

You should now see the **GRUB boot menu**, with both **AxOS** and **Windows** listed.

---

## Done
