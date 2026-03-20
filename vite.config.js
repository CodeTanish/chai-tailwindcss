import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ChaiStyle",
      fileName: "index",
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
});