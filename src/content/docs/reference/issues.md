---
title: Known issues
description: A list of known issues in AxOS.
---

(As i don't have a lot of feedback from the community, this page is not complete. If you encounter an issue, please report it to us.)

## Invalid or corrupted packages

This can happen sometimes with Pacman if the keys have been corrupted. To fix this, you can run the following commands:

```bash
# Initialize the keys
sudo pacman-key --init
# Populate the keys
sudo pacman-key --populate archlinux
```
Then, you can try to install the package again. If it still doesn't work, you can try to remove the package and then install it again.

## Mouse cursor is getting bigger in Plasma

You are shaking your mouse, right? That's why the mouse cursor is getting bigger. This is a easter egg from the developers of Plasma. To fix this, you can disable it by switching accessibility > Shake Cursor > Enable.

## Report an issue

If your issue is not listed here, please open an issue on the [GitHub repository](https://github.com/AxOS-project/axos), or contact us on [Discord](https://discord.gg/sG3NBMYg77) or via email at [ardox@axos-project.com](mailto:ardox@axos-project.com).
