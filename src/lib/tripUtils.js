import {
  CALENDAR_END_MINUTES,
  MAP_COORDINATES,
  PINNED_STOP_IDS,
  TRIP_DAYS
} from "../data/trip.js";

export function getAllStops() {
  return TRIP_DAYS.flatMap((day) => day.stops);
}

export function getStopById(stopId) {
  return getCalendarItems().find((item) => item.id === stopId);
}

export function getMappableStops() {
  return TRIP_DAYS.flatMap((day) => day.stops
    .filter((stop) => stop.map && stop.address && PINNED_STOP_IDS.has(stop.id) && MAP_COORDINATES[stop.id])
    .map((stop) => ({ ...stop, dayId: day.id, dayLabel: day.label, dayTitle: day.title })));
}

export function getMapPoints(stops) {
  return stops.flatMap((stop, stopIndex) => {
    if (stop.subPlaces?.length) {
      return stop.subPlaces.map((place, placeIndex) => ({
        ...place,
        stop,
        id: place.id,
        label: `${stopIndex + 1}-${placeIndex + 1}`,
        coordinates: place.coordinates
      }));
    }

    return [{
      id: stop.id,
      title: stop.title,
      address: stop.address,
      map: stop.map,
      stop,
      label: String(stopIndex + 1),
      coordinates: MAP_COORDINATES[stop.id]
    }];
  });
}

export function getSelectedDay(selectedDayId) {
  return TRIP_DAYS.find((day) => day.id === selectedDayId) || TRIP_DAYS[0];
}

export function getStopMapQuery(stop) {
  if (!stop) return "Tokyo Japan";
  try {
    const url = new URL(stop.map);
    return url.searchParams.get("query") || url.searchParams.get("q") || `${stop.title} ${stop.area} Japan`;
  } catch (error) {
    return `${stop.title} ${stop.area} Japan`;
  }
}

export function getSelectedMapStop({ mapDayFilter, selectedMapStopId, selectedDayId }) {
  const mappableStops = getMappableStops();
  const filteredStops = mapDayFilter === "all"
    ? mappableStops
    : mappableStops.filter((stop) => stop.dayId === mapDayFilter);
  const selected = filteredStops.find((stop) => stop.id === selectedMapStopId);
  if (selected) return selected;
  const sameDay = filteredStops.find((stop) => stop.dayId === selectedDayId);
  return sameDay || filteredStops[0] || mappableStops[0];
}

export function getDayProgress(day, state) {
  const total = day.stops.length;
  const done = day.stops.filter((stop) => state.checkedStops[stop.id]).length;
  return { done, total };
}

export function parseStopStartMinutes(time, index) {
  const value = String(time || "");
  const match = value.match(/(\d{1,2}):(\d{2})/);
  if (match) return Number(match[1]) * 60 + Number(match[2]);
  if (value.includes("종일")) return 8 * 60;
  if (value.includes("오전")) return 9 * 60;
  if (value.includes("체크아웃")) return 10 * 60;
  if (value.includes("공항")) return 11 * 60;
  return 8 * 60 + index * 60;
}

export function parseStopEndMinutes(time, startMinutes) {
  const value = String(time || "");
  const range = value.match(/\d{1,2}:\d{2}\s*[-~]\s*(\d{1,2}):(\d{2})/);
  if (range) return Number(range[1]) * 60 + Number(range[2]);
  if (value.includes("종일")) return 18 * 60 + 50;
  if (value.includes("이후")) return Math.min(startMinutes + 90, CALENDAR_END_MINUTES);
  if (value.includes("전후")) return startMinutes + 60;
  if (value.includes("오전")) return 11 * 60;
  if (value.includes("체크아웃")) return 11 * 60;
  return Math.min(startMinutes + 60, CALENDAR_END_MINUTES);
}

export function createTripDate(dayId, minutes) {
  const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mins = String(minutes % 60).padStart(2, "0");
  return new Date(`${dayId}T${hours}:${mins}:00+09:00`);
}

export function getCalendarItems() {
  return TRIP_DAYS.flatMap((day) => day.stops.map((stop, index) => {
    const startMinutes = parseStopStartMinutes(stop.time, index);
    const endMinutes = Math.max(startMinutes + 30, parseStopEndMinutes(stop.time, startMinutes));
    return {
      ...stop,
      dayId: day.id,
      dayLabel: day.label,
      dayTitle: day.title,
      startMinutes,
      endMinutes,
      startDate: createTripDate(day.id, startMinutes),
      endDate: createTripDate(day.id, endMinutes)
    };
  })).sort((a, b) => a.startDate - b.startDate);
}

export function getNowContext(selectedNowStopId, now = new Date()) {
  const items = getCalendarItems();
  const selected = selectedNowStopId ? items.find((item) => item.id === selectedNowStopId) : null;
  if (selected) return { mode: "selected", item: selected, now };

  const current = items.find((item) => now >= item.startDate && now < item.endDate);
  if (current) return { mode: "current", item: current, now };

  const next = items.find((item) => now < item.startDate);
  if (next) return { mode: "next", item: next, now };

  return { mode: "complete", item: items[items.length - 1], now };
}

export function getNowCountdown(context) {
  if (context.mode !== "current" && context.mode !== "next") return "";
  const target = context.mode === "current" ? context.item.endDate : context.item.startDate;
  const totalMinutes = Math.max(0, Math.ceil((target - context.now) / 60000));
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const parts = [];
  if (days) parts.push(`${days}일`);
  if (hours) parts.push(`${hours}시간`);
  if (!days && minutes) parts.push(`${minutes}분`);
  const prefix = context.mode === "current" ? "종료까지" : "시작까지";
  return `${prefix} ${parts.join(" ") || "곧"}`;
}
