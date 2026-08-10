import { useCallback, useEffect, useRef, useState } from "react";
import {
  IconArrowClockwiseCircularLine,
  IconCheckmarkLine,
  IconChevronDownSmallLine
} from "@karrotmarket/react-monochrome-icon";
import { useTrip } from "../state/TripContext.jsx";

const TRIGGER_DISTANCE = 72; // px pulled before a release refreshes
const MAX_DISTANCE = 110; // rubber-band ceiling
const RESISTANCE = 0.5;
const MIN_SPINNER_MS = 700; // keep the spinner visible long enough to read
const COMPLETE_MS = 520;
const PULL_VIEWS = ["now", "schedule", "prep"]; // the map owns its own gestures

// Installed PWAs have no browser pull-to-refresh, so we provide our own.
// In a normal browser tab the native gesture already exists — stay out of it.
function isStandalone() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(display-mode: standalone)").matches
    || window.navigator.standalone === true;
}

export default function PullToRefresh() {
  const { state, placeDetail, guideStopId, requestRefresh } = useTrip();
  const [distance, setDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const dragRef = useRef(null);
  const frameRef = useRef(0);
  const finishTimerRef = useRef(0);
  const dismissTimerRef = useRef(0);
  const refreshingRef = useRef(false);
  const distanceRef = useRef(0);

  const setPullDistance = useCallback((next) => {
    distanceRef.current = next;
    setDistance(next);
  }, []);

  const enabled = isStandalone()
    && PULL_VIEWS.includes(state.activeView)
    && !placeDetail
    && !guideStopId;

  const runRefresh = useCallback(async () => {
    if (refreshingRef.current) return;
    window.clearTimeout(finishTimerRef.current);
    window.clearTimeout(dismissTimerRef.current);
    refreshingRef.current = true;
    setCompleted(false);
    setRefreshing(true);
    setPullDistance(TRIGGER_DISTANCE);
    const startedAt = Date.now();
    try {
      await requestRefresh();
    } finally {
      const elapsed = Date.now() - startedAt;
      finishTimerRef.current = window.setTimeout(() => {
        refreshingRef.current = false;
        setRefreshing(false);
        setCompleted(true);
        dismissTimerRef.current = window.setTimeout(() => {
          setCompleted(false);
          setPullDistance(0);
        }, COMPLETE_MS);
      }, Math.max(0, MIN_SPINNER_MS - elapsed));
    }
  }, [requestRefresh, setPullDistance]);

  useEffect(() => {
    if (!enabled) {
      setPullDistance(0);
      return undefined;
    }

    const onTouchStart = (event) => {
      if (refreshingRef.current || event.touches.length !== 1) return;
      if (window.scrollY > 0) return;
      dragRef.current = { startY: event.touches[0].clientY, active: false };
    };

    const onTouchMove = (event) => {
      const drag = dragRef.current;
      if (!drag) return;
      const delta = event.touches[0].clientY - drag.startY;

      // An upward move (or any scroll away from the top) hands the gesture back.
      if (delta <= 0 || window.scrollY > 0) {
        dragRef.current = null;
        if (drag.active) setPullDistance(0);
        return;
      }

      drag.active = true;
      const pulled = Math.min(MAX_DISTANCE, delta * RESISTANCE);
      // preventDefault stops the page from rubber-banding under our indicator.
      if (event.cancelable) event.preventDefault();
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => setPullDistance(pulled));
    };

    const onTouchEnd = () => {
      const drag = dragRef.current;
      dragRef.current = null;
      if (!drag?.active) return;
      cancelAnimationFrame(frameRef.current);
      if (distanceRef.current >= TRIGGER_DISTANCE) runRefresh();
      else setPullDistance(0);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchcancel", onTouchEnd);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [enabled, runRefresh, setPullDistance]);

  useEffect(() => () => {
    window.clearTimeout(finishTimerRef.current);
    window.clearTimeout(dismissTimerRef.current);
  }, []);

  const ready = distance >= TRIGGER_DISTANCE;
  const visible = distance > 0 || refreshing || completed;
  const progress = Math.min(1, distance / TRIGGER_DISTANCE);
  const pullOffset = Math.min(10, (distance * 0.75) - 40);
  const label = completed
    ? "최신 상태예요"
    : refreshing
      ? "최신 일정 확인 중"
      : ready
        ? "놓으면 새로고침"
        : "아래로 당겨 새로고침";

  const PullIcon = completed
    ? IconCheckmarkLine
    : refreshing || ready
      ? IconArrowClockwiseCircularLine
      : IconChevronDownSmallLine;

  return (
    <div
      className={`pull-refresh${refreshing ? " is-refreshing" : ""}${ready ? " is-ready" : ""}${completed ? " is-complete" : ""}`}
      id="pullRefresh"
      aria-hidden={!visible}
      hidden={!visible}
      style={{
        "--pull-angle": `${progress * 360}deg`,
        "--pull-offset": `${pullOffset}px`,
        "--pull-progress": progress
      }}
    >
      <span className="pull-refresh-orb" aria-hidden="true">
        <PullIcon className="pull-refresh-icon" size={19} />
      </span>
      <span className="pull-refresh-label" role="status">
        {label}
      </span>
    </div>
  );
}
