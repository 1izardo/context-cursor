import { resolve } from "path";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/global.ts"),
      name: "context-cursor-global",
      fileName: "context-cursor-global",
    },
    rollupOptions: {
      output: {
        dir: "dist/global/",
      },
    },
  },
};
