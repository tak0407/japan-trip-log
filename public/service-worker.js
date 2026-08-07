const CACHE_NAME = "japan-trip-log-v30";
const STATIC_ASSETS = ["./manifest.webmanifest", "./icon.svg"];

async function cacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  const response = await fetch("./");
  await cache.put("./", response.clone());

  const html = await response.text();
  const linkedAssets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => new URL(match[1], self.registration.scope))
    .filter((url) => url.origin === self.location.origin)
    .map((url) => url.href);
  const staticAssets = STATIC_ASSETS.map((path) => new URL(path, self.registration.scope).href);

  await cache.addAll([...new Set([...staticAssets, ...linkedAssets])]);
}

self.addEventListener("install", (event) => {
  event.waitUntil(cacheAppShell());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((response) => response || caches.match("./")))
  );
});
