// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from 'starlight-theme-nova';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.axos-project.com/",
  base: "/docs",
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova(/* options */),
      ],
      title: "AxOS Docs",
      customCss: ["/src/tailwind.css", "./src/styles/custom.css"],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/axos-project', },
      ],
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
          label: "Desktop Environments",
          autogenerate: { directory: "desktops" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "AxOS specific softwares",
          autogenerate: { directory: "axos-softwares" },
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
