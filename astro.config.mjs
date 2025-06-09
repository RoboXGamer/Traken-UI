// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
      title: "Traken UI",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "start" },
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
      ],
      customCss: ["./src/global.css"],
    }),
    react(),
  ],

  adapter: netlify(),
});