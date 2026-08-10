import { useEffect } from "react";

export default function OrientationLock() {
  useEffect(() => {
    const orientation = window.screen?.orientation;
    if (typeof orientation?.lock !== "function") return undefined;

    const lockPortrait = () => {
      if (document.visibilityState === "hidden") return;
      Promise.resolve()
        .then(() => orientation.lock("portrait"))
        .catch(() => {
          // Browser policy may require an installed PWA or fullscreen mode.
        });
    };

    lockPortrait();
    document.addEventListener("fullscreenchange", lockPortrait);
    document.addEventListener("visibilitychange", lockPortrait);
    document.addEventListener("pointerdown", lockPortrait, { once: true });

    return () => {
      document.removeEventListener("fullscreenchange", lockPortrait);
      document.removeEventListener("visibilitychange", lockPortrait);
      document.removeEventListener("pointerdown", lockPortrait);
    };
  }, []);

  return null;
}
