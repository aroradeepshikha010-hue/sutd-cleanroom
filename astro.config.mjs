import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aroradeepshikha010-hue.github.io",
  base: "/sutd-cleanroom",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
