import { useCallback, useEffect, useMemo, useState } from "react";
import { ActionButton } from "@seed-design/react";
import { TRIP_DAYS } from "../data/trip.js";
import {
  getCalendarItems,
  getNowContext,
  getNowCountdown,
  getStopById
} from "../lib/tripUtils.js";
import { useTrip } from "../state/TripContext.jsx";

const NOW_TICK_MS = 30000;

const STATUS_TEXT = {
  current: "진행 중",
  next: "다음 일정",
  selected: "선택 일정",
  complete: "여행 완료"
};

const clockFormatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Tokyo",
  month: "numeric",
  day: "numeric",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit"
});

function NowActions({ hasMap, mapHref, onMap, onSchedule }) {
  return (
    <div className="now-actions" id="nowActions">
      <ActionButton
        variant="neutralSolid"
        size="large"
        id="nowMapButton"
        type="button"
        data-now-action="map"
        hidden={!hasMap}
        onClick={onMap}
      >
        지도에서 보기
      </ActionButton>
      <ActionButton asChild variant="neutralWeak" size="large">
        <a id="nowGoogleMapsLink" href={mapHref} target="_blank" rel="noreferrer" hidden={!hasMap}>Google Maps</a>
      </ActionButton>
      <ActionButton
        variant="ghost"
        size="large"
        type="button"
        data-now-action="schedule"
        onClick={onSchedule}
      >
        전체 일정
      </ActionButton>
    </div>
  );
}

function NowNextCard({ nextItem, onConfirm }) {
  if (!nextItem) {
    return (
      <article className="now-next-card" id="nowNextCard">
        <div>
          <p className="panel-kicker">다음 일정</p>
          <h3>모든 일정이 끝났어요</h3>
          <p>체크하지 못한 준비물과 짐을 확인해주세요.</p>
        </div>
      </article>
    );
  }

  return (
    <article className="now-next-card" id="nowNextCard">
      <div>
        <p className="panel-kicker">다음 일정</p>
        <h3>{`${nextItem.time} · ${nextItem.title}`}</h3>
        <p>{`${nextItem.area} · ${nextItem.type}`}</p>
      </div>
      <button
        className="small-action"
        type="button"
        data-now-next-id={nextItem.id}
        onClick={() => onConfirm(nextItem.id)}
      >
        확인
      </button>
    </article>
  );
}

function TodayTimeline({ dayItems, activeItem, mode, checkedStops, onSelect }) {
  return (
    <div className="today-timeline" id="weekCalendar" aria-label="선택한 날짜 일정">
      {dayItems.map((item, index) => {
        const isCurrent = mode === "current" && item.id === activeItem.id;
        const isSelected = item.id === activeItem.id;
        const isDone = Boolean(checkedStops[item.id]);
        const classes = [
          "today-timeline-item",
          isCurrent ? "is-current" : "",
          isSelected ? "is-selected" : "",
          isDone ? "is-done" : ""
        ].filter(Boolean).join(" ");

        return (
          <button
            className={classes}
            type="button"
            data-calendar-stop-id={item.id}
            key={item.id}
            onClick={() => onSelect(item.id)}
          >
            <span className="today-timeline-marker" aria-hidden="true">{index + 1}</span>
            <span className="today-timeline-time">{item.time}</span>
            <span className="today-timeline-copy">
              <strong>{item.title}</strong>
              <small>{`${item.area} · ${item.type}`}</small>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function NowView() {
  const {
    state,
    selectedNowStopId,
    setActiveView,
    setSelectedDayId,
    setMapDayFilter,
    setSelectedMapStopId,
    setSelectedNowStopId
  } = useTrip();

  const [now, setNow] = useState(() => new Date());

  // app.js: setInterval(() => { if (!document.hidden && activeView === "now") renderNow(); }, 30000)
  useEffect(() => {
    if (state.activeView !== "now") return undefined;
    const timer = setInterval(() => {
      if (!document.hidden) setNow(new Date());
    }, NOW_TICK_MS);
    return () => clearInterval(timer);
  }, [state.activeView]);

  // app.js only reset the selection when the 지금 tab was the active view;
  // this component now stays mounted for every view, so gate it explicitly.
  useEffect(() => {
    if (state.activeView !== "now") return undefined;
    const onVisibilityChange = () => {
      if (document.hidden) return;
      setSelectedNowStopId("");
      setNow(new Date());
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [state.activeView, setSelectedNowStopId]);

  const context = useMemo(
    () => getNowContext(selectedNowStopId, now),
    [selectedNowStopId, now]
  );
  const item = context.item;

  const items = useMemo(() => getCalendarItems(), []);
  const nextItem = useMemo(() => {
    if (!item) return null;
    const itemIndex = items.findIndex((entry) => entry.id === item.id);
    return itemIndex >= 0 ? items[itemIndex + 1] || null : null;
  }, [items, item]);

  const day = useMemo(() => {
    if (!item) return null;
    return TRIP_DAYS.find((entry) => entry.id === item.dayId) || TRIP_DAYS[0];
  }, [item]);

  const dayItems = useMemo(() => {
    if (!day) return [];
    return items.filter((entry) => entry.dayId === day.id);
  }, [items, day]);

  const handleNowAction = useCallback((action) => {
    const target = getNowContext(selectedNowStopId, new Date()).item;
    if (!target) return;

    setSelectedDayId(target.dayId);

    if (action === "map" && target.map) {
      setSelectedMapStopId(target.id);
      setMapDayFilter(target.dayId);
      setActiveView("map");
    }

    if (action === "schedule") {
      setActiveView("schedule");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedNowStopId, setSelectedDayId, setSelectedMapStopId, setMapDayFilter, setActiveView]);

  const handleNextConfirm = useCallback((stopId) => {
    const target = getStopById(stopId);
    if (!target) return;
    setSelectedDayId(target.dayId);
    setSelectedNowStopId(target.id);
  }, [setSelectedDayId, setSelectedNowStopId]);

  const handleTimelineSelect = useCallback((stopId) => {
    const target = getStopById(stopId);
    if (!target) return;
    setSelectedDayId(target.dayId);
    setSelectedNowStopId(target.id);
    if (target.map) setSelectedMapStopId(target.id);
  }, [setSelectedDayId, setSelectedNowStopId, setSelectedMapStopId]);

  const isActive = state.activeView === "now";
  const panelClassName = isActive ? "tab-panel is-active" : "tab-panel";
  const clockText = `일본 기준 ${clockFormatter.format(context.now)}`;

  if (!item) {
    return (
      <section className={panelClassName} id="nowPanel" data-view-panel="now" hidden={!isActive}>
        <section className="now-dashboard">
          <p className="now-clock" id="nowClock">{clockText}</p>
          <article className="now-current-card" id="nowCurrentCard">
            <div>
              <p className="panel-kicker" id="nowKicker">지금</p>
              <h2 id="nowTitle">일정이 없습니다</h2>
              <p id="nowMeta" />
              <p className="now-countdown" id="nowCountdown" hidden />
            </div>
            <div className="now-card-side">
              <span className="status-pill" id="nowStatus">대기</span>
              <NowActions
                hasMap
                mapHref="#"
                onMap={() => handleNowAction("map")}
                onSchedule={() => handleNowAction("schedule")}
              />
            </div>
          </article>
          <article className="now-next-card" id="nowNextCard" />
          <section className="now-timeline-panel">
            <div className="panel-heading compact">
              <div>
                <p className="panel-kicker">하루 타임라인</p>
                <h2 id="nowDayLabel">오늘 일정</h2>
              </div>
            </div>
            <div className="today-timeline" id="weekCalendar" aria-label="선택한 날짜 일정">
              <p className="empty-state">표시할 일정이 없습니다.</p>
            </div>
          </section>
        </section>
      </section>
    );
  }

  const countdown = getNowCountdown(context);
  const hasMap = Boolean(item.map);

  return (
    <section className={panelClassName} id="nowPanel" data-view-panel="now" hidden={!isActive}>
      <section className="now-dashboard">
        <p className="now-clock" id="nowClock">{clockText}</p>
        <article className="now-current-card" id="nowCurrentCard">
          <div>
            <p className="panel-kicker" id="nowKicker">{`${item.dayLabel} · ${item.dayTitle}`}</p>
            <h2 id="nowTitle">{item.title}</h2>
            <p id="nowMeta">{`${item.time} · ${item.area} · ${item.type}`}</p>
            <p className="now-countdown" id="nowCountdown" hidden={!countdown}>{countdown}</p>
          </div>
          <div className="now-card-side">
            <span className="status-pill" id="nowStatus">{STATUS_TEXT[context.mode]}</span>
            <NowActions
              hasMap={hasMap}
              mapHref={hasMap ? item.map : "#"}
              onMap={() => handleNowAction("map")}
              onSchedule={() => handleNowAction("schedule")}
            />
          </div>
        </article>
        <NowNextCard nextItem={nextItem} onConfirm={handleNextConfirm} />
        <section className="now-timeline-panel">
          <div className="panel-heading compact">
            <div>
              <p className="panel-kicker">하루 타임라인</p>
              <h2 id="nowDayLabel">{`${day.label} · ${day.title}`}</h2>
            </div>
          </div>
          <TodayTimeline
            dayItems={dayItems}
            activeItem={item}
            mode={context.mode}
            checkedStops={state.checkedStops}
            onSelect={handleTimelineSelect}
          />
        </section>
      </section>
    </section>
  );
}
