import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { seedDesignPlugin } from "@seed-design/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// Stamps the service worker cache name with a per-build id so every deploy
// ships a byte-different worker — otherwise installed PWAs never see updates.
function serviceWorkerVersionPlugin() {
  const buildId = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  return {
    name: "service-worker-version",
    apply: "build",
    closeBundle() {
      const swPath = resolve(__dirname, "dist/service-worker.js");
      const source = readFileSync(swPath, "utf8");
      writeFileSync(swPath, source.replace("__CACHE_VERSION__", buildId));
    }
  };
}

export default defineConfig({
  base: "/japan-trip-log/",
  plugins: [react(), seedDesignPlugin(), tsconfigPaths(), serviceWorkerVersionPlugin()],
  build: {
    sourcemap: true
  }
});
