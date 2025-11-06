---
title: Secure Boot
description: How to enable and use Secure Boot with AxOS.
---

Secure Boot is a security feature that helps ensure that your device boots using only software that is trusted by the Original Equipment Manufacturer (OEM). AxOS doesn't natively support Secure Boot, but you can enable it's support. 

This guide walks you through enabling **Secure Boot** with **TPM support** on AxOS using `sbctl` and `GRUB`.

## Install `sbctl`

`sbctl` (Secure Boot Control) is a tool to manage Secure Boot keys and sign EFI binaries.

```bash
epsi i sbctl
```

*Tip: You can check its version with `sbctl --version` to ensure the installation worked.*

## Enter Setup Mode in UEFI

Reboot into your BIOS/UEFI firmware and **enable Setup Mode**.
This disables Secure Boot temporarily, allowing you to register your own custom keys later.

> 💡 In most BIOS interfaces, you’ll find this under:
> Security → Secure Boot → Set Secure Boot Mode → Custom / Setup Mode

## Create Secure Boot Keys

Use sbctl to generate your custom Secure Boot keys.
These consist of the **PK (Platform Key)**, **KEK (Key Exchange Key)**, and **db (Signature Database)**.

```bash
sudo sbctl create-keys
```

## Enroll Microsoft Keys (Optional but Recommended)

If you dual-boot with Windows, you’ll need to enroll Microsoft’s keys.
Otherwise, Windows will refuse to boot under Secure Boot.

```bash
sudo sbctl enroll-keys -m
```

- The `-m` flag tells `sbctl` to also import **Microsoft’s KEK and db keys**.

## Sign the Linux Kernel

Now you need to sign your Linux kernel so the firmware recognizes it as trusted.

```bash
sudo sbctl sign -s /boot/vmlinuz-linux
```

⚙️ If you use a different kernel (like linux-zen, linux-lts, or a custom one), replace the path accordingly.

## Install GRUB with TPM & Secure Boot Support

Reinstall GRUB with TPM modules enabled and shim lock disabled (since sbctl handles signing).

```bash
sudo grub-install \
  --target=x86_64-efi \
  --efi-directory=/boot/efi \
  --bootloader-id=AxOS \
  --disable-shim-lock \
  --modules="tpm"
```

- The `--modules="tpm"` flag ensures GRUB supports the Trusted Platform Module for measured boot.
- The `--disable-shim-lock` is important. We’re using our own keys, not the Microsoft “shim” loader.

## Regenerate the GRUB Configuration

Once GRUB is installed, regenerate its configuration file to include all detected boot entries.

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Check for errors, you should see lines mentioning your kernel and initramfs being found.

## Sign GRUB and Boot Files

Finally, sign all EFI executables used during boot.
This includes your GRUB binary and any distribution-specific bootloaders.

```bash
sudo sbctl sign -s /boot/efi/EFI/AxOS/grubx64.efi
sudo sbctl sign -s /boot/efi/EFI/BOOT/BOOTX64.EFI
sudo sbctl sign -s /boot/efi/EFI/GRUB/grubx64.efi
```

## Final Checks

1. Verify all files:
    ```bash
    sudo sbctl verify
    ```
2. Reboot and enter UEFI settings again.
3. **Enable Secure Boot**.
4. Save and exit.

If everything was done correctly, your system should boot into AxOS with Secure Boot enabled!

If you get a black screen or signature error, don’t panic. You can disable Secure Boot temporarily, boot into Linux, and recheck which EFI binaries weren’t signed.

