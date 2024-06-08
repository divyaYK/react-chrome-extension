import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    target: "esnext",
    rollupOptions: {
      input: {
        homepage: "./extension_home/index.html",
      },
      output: {
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
