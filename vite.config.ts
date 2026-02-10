import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    react(),
    tsconfigPaths(),
  ],

  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
