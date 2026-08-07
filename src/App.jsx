import BottomNavigation from "./components/BottomNavigation.jsx";
import GuideView from "./components/GuideView.jsx";
import Header from "./components/Header.jsx";
import MapView from "./components/MapView.jsx";
import NowView from "./components/NowView.jsx";
import OfflineBanner from "./components/OfflineBanner.jsx";
import PrepView from "./components/PrepView.jsx";
import ScheduleView from "./components/ScheduleView.jsx";
import UpdateNotice from "./components/UpdateNotice.jsx";
import { TripProvider } from "./state/TripContext.jsx";

export default function App() {
  return (
    <TripProvider>
      <OfflineBanner />
      <div className="app-shell">
        <Header />
        <main className="tab-content">
          <NowView />
          <ScheduleView />
          <MapView />
          <PrepView />
        </main>
      </div>
      <GuideView />
      <UpdateNotice />
      <BottomNavigation />
    </TripProvider>
  );
}
