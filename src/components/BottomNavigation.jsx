import { Icon } from "@seed-design/react";
import {
  IconBookOpenLine,
  IconCalendarLine,
  IconClockLine,
  IconMapLocationpinLine
} from "@karrotmarket/react-monochrome-icon";
import { useTrip } from "../state/TripContext.jsx";

const NAV_ITEMS = [
  ["now", "지금", IconClockLine],
  ["schedule", "일정", IconCalendarLine],
  ["map", "지도", IconMapLocationpinLine],
  ["prep", "정보", IconBookOpenLine]
];

export default function BottomNavigation() {
  const { state, setActiveView } = useTrip();

  // Mirrors the nodes.bottomNav click handler in app.js.
  const handleClick = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bottom-nav" id="bottomNav" aria-label="주요 메뉴">
      {NAV_ITEMS.map(([view, label, NavIcon]) => (
        <button
          className="bottom-nav-item"
          type="button"
          data-view={view}
          aria-current={state.activeView === view ? "page" : undefined}
          aria-controls={`${view}Panel`}
          key={view}
          onClick={() => handleClick(view)}
        >
          <Icon className="nav-icon" svg={<NavIcon />} size={24} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
