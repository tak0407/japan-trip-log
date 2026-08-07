let googleMapsPromise = null;

// Ported from loadGoogleMaps() in app.js: same script URL, params and
// singleton-promise behaviour. The API key comes from window.GOOGLE_MAPS_API_KEY,
// which src/main.jsx sets from import.meta.env.VITE_GOOGLE_MAPS_API_KEY.
export function loadGoogleMaps() {
  if (window.google?.maps) return Promise.resolve(window.google.maps);
  if (googleMapsPromise) return googleMapsPromise;

  googleMapsPromise = new Promise((resolve, reject) => {
    const apiKey = window.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      reject(new Error("Google Maps API key is missing"));
      return;
    }

    window.__japanTripGoogleMapsReady = () => resolve(window.google.maps);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&language=ko&region=JP&libraries=marker&loading=async&callback=__japanTripGoogleMapsReady`;
    script.async = true;
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.append(script);
  });
  return googleMapsPromise;
}

export function isGoogleMapsReady() {
  return Boolean(window.google?.maps);
}
