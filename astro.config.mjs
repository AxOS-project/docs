// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AxOS Docs",
      customCss: ["/src/tailwind.css"],
      social: {
        github: "https://github.com/axos-project/",
      },
      logo: {
        light: "/src/assets/axos-light.svg",
        dark: "/src/assets/axos-dark.svg",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
