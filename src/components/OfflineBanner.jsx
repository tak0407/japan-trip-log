import { useEffect, useState } from "react";
import { useTrip } from "../state/TripContext.jsx";

// The #offlineBanner half of updateConnectivityStatus() in app.js:
// hidden = !isOffline || activeView === "map".
export default function OfflineBanner() {
  const { state } = useTrip();
  const [isOffline, setIsOffline] = useState(() => typeof navigator !== "undefined" && !navigator.onLine);

  useEffect(() => {
    const update = () => setIsOffline(!navigator.onLine);
    const onVisibilityChange = () => {
      if (document.hidden) return;
      update();
    };

    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div
      className="offline-banner"
      id="offlineBanner"
      role="status"
      hidden={!isOffline || state.activeView === "map"}
    >
      오프라인 상태예요. 저장된 일정과 주소는 계속 확인할 수 있어요.
    </div>
  );
}
