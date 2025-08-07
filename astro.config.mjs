// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.axos-project.com/",
  base: "/docs",
  integrations: [
    starlight({
      title: "AxOS Docs",
      customCss: ["/src/tailwind.css"],
      social: {
        github: "https://github.com/axos-project/",
      },
      logo: {
        light: "/public/assets/axos-light.svg",
        dark: "/public/assets/axos-dark.svg",
      },
      sidebar: [
        {
          label: "Get started!",
          autogenerate: { directory: "get-started" },
        },
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
