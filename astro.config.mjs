import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://deepshikha.github.io",
  base: "/sutd-cleanroom",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
