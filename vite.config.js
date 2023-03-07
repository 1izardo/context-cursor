import { resolve } from "path";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "context-cursor",
      fileName: "context-cursor",
    },
  },
};
