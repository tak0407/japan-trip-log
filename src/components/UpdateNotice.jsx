import { useCallback, useEffect, useRef, useState } from "react";

// Ported from showUpdateAvailable() / registerServiceWorker() and the bootstrap
// block at the bottom of app.js — same script URL, same default scope.
export default function UpdateNotice() {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const isReloadingForUpdate = useRef(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return undefined;

    let cancelled = false;

    const showUpdateAvailable = (worker) => {
      if (!cancelled) setWaitingWorker(worker);
    };

    const onControllerChange = () => {
      if (isReloadingForUpdate.current) window.location.reload();
    };

    const registerServiceWorker = async () => {
      const registration = await navigator.serviceWorker.register("./service-worker.js");
      if (registration.waiting) showUpdateAvailable(registration.waiting);
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdateAvailable(worker);
          }
        });
      });
      registration.update().catch(() => {});
    };

    const startServiceWorker = () => {
      registerServiceWorker().catch((error) => console.error("Service worker registration failed", error));
    };

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    if (document.readyState === "complete") startServiceWorker();
    else window.addEventListener("load", startServiceWorker, { once: true });

    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      window.removeEventListener("load", startServiceWorker);
    };
  }, []);

  const handleUpdate = useCallback(() => {
    if (!waitingWorker) return;
    isReloadingForUpdate.current = true;
    setIsUpdating(true);
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  }, [waitingWorker]);

  return (
    <div className="update-toast" id="updateToast" role="status" hidden={!waitingWorker}>
      <span>새 버전을 사용할 수 있어요.</span>
      <button type="button" id="updateButton" disabled={isUpdating} onClick={handleUpdate}>
        {isUpdating ? "업데이트 중…" : "지금 업데이트"}
      </button>
    </div>
  );
}
