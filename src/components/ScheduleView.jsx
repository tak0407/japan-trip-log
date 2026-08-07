import { MAP_COORDINATES, PLACE_DETAILS, TRIP_DAYS } from "../data/trip.js";
import { GUIDES } from "../data/guides.js";
import { getAllStops, getDayProgress, getSelectedDay, getStopById } from "../lib/tripUtils.js";
import { useTrip } from "../state/TripContext.jsx";

function ProgressCard({ state }) {
  const allStops = getAllStops();
  const checked = allStops.filter((stop) => state.checkedStops[stop.id]).length;
  const percent = allStops.length ? Math.round((checked / allStops.length) * 100) : 0;

  return (
    <section className="schedule-progress-card" aria-label="여행 일정 진행률">
      <div>
        <span className="metric-label">전체 일정 진행</span>
        <strong id="completionMetric">{`${percent}%`}</strong>
      </div>
      <div className="schedule-progress-detail">
        <span id="checkedMetric">{`${checked} / ${allStops.length}`}</span>
        <span className="metric-sub">완료</span>
      </div>
      <div className="meter" aria-hidden="true"><span id="completionBar" style={{ width: `${percent}%` }} /></div>
    </section>
  );
}

function DayTabs({ state, selectedDayId, onSelectDay }) {
  return (
    <nav className="day-tabs" aria-label="날짜 선택" id="dayTabs">
      {TRIP_DAYS.map((day) => {
        const progress = getDayProgress(day, state);
        const shortLabel = day.label.split(" ")[0];
        return (
          <button
            className="day-tab"
            type="button"
            data-day-id={day.id}
            aria-selected={day.id === selectedDayId ? "true" : "false"}
            aria-label={`${day.label}, ${day.title}, ${progress.done} / ${progress.total} 완료`}
            key={day.id}
            onClick={() => onSelectDay(day.id)}
          >
            <strong>{shortLabel}</strong>
          </button>
        );
      })}
    </nav>
  );
}

function NextStopCard({ day, state }) {
  const nextStop = day.stops.find((stop) => !state.checkedStops[stop.id]);
  const progress = getDayProgress(day, state);

  if (!nextStop) {
    return (
      <article className="next-card" id="nextStopCard">
        <div>
          <p className="panel-kicker">{day.label}</p>
          <h2>오늘 일정 완료</h2>
          <p>{`${day.title} 일정이 모두 체크됐습니다.`}</p>
        </div>
        <span className="status-pill">{`${progress.done} / ${progress.total}`}</span>
      </article>
    );
  }

  return (
    <article className="next-card" id="nextStopCard">
      <div>
        <p className="panel-kicker">다음 미완료 일정</p>
        <h2>{`${nextStop.time} · ${nextStop.title}`}</h2>
        <p>{`${nextStop.area} · ${nextStop.type}`}</p>
      </div>
      <span className="status-pill">{`${progress.done} / ${progress.total}`}</span>
    </article>
  );
}

function StopCard({ stop, checked, onToggle, onDetail, onMap, onGuide }) {
  const isMappable = Boolean(stop.map && stop.address && MAP_COORDINATES[stop.id]);
  const hasDetail = Boolean(PLACE_DETAILS[stop.id]);
  const hasGuide = Boolean(GUIDES[stop.id]);

  return (
    <section className="stop-card">
      <input
        className="stop-check"
        type="checkbox"
        data-stop-id={stop.id}
        aria-label={`${stop.title} 완료`}
        checked={checked}
        onChange={(event) => onToggle(stop.id, event.target.checked)}
      />
      <div>
        <div className="stop-topline">
          <span className="stop-time">{stop.time}</span>
          <div className="stop-actions">
            {hasGuide ? (
              <button
                className="small-action guide-action"
                type="button"
                data-guide-stop-id={stop.id}
                onClick={() => onGuide(stop.id)}
              >가이드</button>
            ) : null}
            {hasDetail ? (
              <button
                className="small-action"
                type="button"
                data-detail-stop-id={stop.id}
                onClick={() => onDetail(stop.id)}
              >상세</button>
            ) : null}
            {isMappable ? (
              <button
                className="small-action map-action"
                type="button"
                data-map-stop-id={stop.id}
                onClick={() => onMap(stop.id)}
              >앱 지도</button>
            ) : null}
            {stop.map ? (
              <a className="small-action" href={stop.map} target="_blank" rel="noreferrer">Google Maps</a>
            ) : null}
          </div>
        </div>
        <h3 className="stop-title">{stop.title}</h3>
        <div className="stop-meta">
          <span className="tag">{stop.area}</span>
          <span className="tag">{stop.type}</span>
        </div>
        {Array.isArray(stop.items) && stop.items.length ? (
          <ul className="stop-items">
            {stop.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : null}
        {stop.note ? <p className="stop-note">{stop.note}</p> : null}
      </div>
    </section>
  );
}

export default function ScheduleView() {
  const {
    state,
    setActiveView,
    setSelectedDayId,
    setMapDayFilter,
    setSelectedMapStopId,
    toggleStopChecked,
    openPlaceDetail,
    openGuide
  } = useTrip();

  const isActive = state.activeView === "schedule";
  const day = getSelectedDay(state.selectedDayId);
  const progress = getDayProgress(day, state);

  const handleDetail = (stopId) => {
    const stop = getStopById(stopId);
    if (!stop) return;
    setSelectedMapStopId(stop.id);
    setMapDayFilter(stop.dayId);
    setActiveView("map");
    openPlaceDetail(stop, "schedule");
  };

  const handleMap = (stopId) => {
    const stop = getStopById(stopId);
    if (!stop) return;
    setSelectedMapStopId(stop.id);
    setMapDayFilter(stop.dayId);
    setActiveView("map");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className={isActive ? "tab-panel is-active" : "tab-panel"}
      id="schedulePanel"
      data-view-panel="schedule"
      hidden={!isActive}
    >
      <ProgressCard state={state} />
      <DayTabs state={state} selectedDayId={state.selectedDayId} onSelectDay={setSelectedDayId} />
      <NextStopCard day={day} state={state} />
      <article className="panel itinerary-panel">
        <div className="panel-heading">
          <div>
            <p className="panel-kicker" id="selectedDateLabel">{day.dateText}</p>
            <h2 id="selectedDayTitle">{day.title}</h2>
          </div>
          <span className="status-pill" id="selectedDayStatus">{`${progress.done} / ${progress.total}`}</span>
        </div>
        <div className="stop-list" id="stopList">
          {day.stops.map((stop) => (
            <StopCard
              key={stop.id}
              stop={stop}
              checked={Boolean(state.checkedStops[stop.id])}
              onToggle={toggleStopChecked}
              onDetail={handleDetail}
              onMap={handleMap}
              onGuide={openGuide}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
