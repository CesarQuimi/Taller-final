import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://dcarpioargos.github.io/prueba_dist/",
  // build: {
  //   outDir: "dist",
  //   assetsDir: "assets",
  //   sourcemap: true,
  // },
});
