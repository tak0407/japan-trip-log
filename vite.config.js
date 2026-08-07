import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { seedDesignPlugin } from "@seed-design/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/japan-trip-log/",
  plugins: [react(), seedDesignPlugin(), tsconfigPaths()],
  build: {
    sourcemap: true
  }
});
