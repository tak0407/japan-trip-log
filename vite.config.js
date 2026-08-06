import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/japan-trip-log/",
  plugins: [react()],
  build: {
    sourcemap: true
  }
});
