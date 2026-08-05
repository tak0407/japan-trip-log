const TRIP_DAYS = [
  {
    id: "2026-08-11",
    label: "8.11 Tue",
    title: "아사쿠사 + 시부야",
    dateText: "2026년 8월 11일 화요일",
    stops: [
      {
        id: "d1-move-asakusa",
        time: "14:20",
        title: "아사쿠사 이동",
        area: "우에노 -> 아사쿠사",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Asakusa%20Tokyo"
      },
      {
        id: "d1-asakusa",
        time: "14:30-16:30",
        title: "아사쿠사 관광",
        area: "아사쿠사",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Senso-ji%20Kaminarimon%20Nakamise%20Tokyo",
        items: ["카미나리몬", "나카미세 거리", "센소지", "아사쿠사 주변 산책"]
      },
      {
        id: "d1-move-shibuya",
        time: "16:40",
        title: "시부야 이동",
        area: "아사쿠사 -> 시부야",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Shibuya%20Tokyo"
      },
      {
        id: "d1-dinner",
        time: "17:10-18:10",
        title: "저녁식사",
        area: "시부야",
        type: "식사"
      },
      {
        id: "d1-shibuya",
        time: "18:10-20:30",
        title: "시부야 관광",
        area: "시부야",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Hachiko%20Statue%20Shibuya%20Scramble%20Crossing",
        items: ["하치코 동상", "스크램블 교차로", "시부야 거리 야경"],
        note: "시부야 스카이는 시간상 생략 추천. 후지산, TeamLab, 요코하마 야경 일정이 있음."
      },
      {
        id: "d1-return",
        time: "21:00",
        title: "우에노 숙소 복귀",
        area: "시부야 -> 우에노",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Ueno%20Tokyo"
      }
    ]
  },
  {
    id: "2026-08-12",
    label: "8.12 Wed",
    title: "요코스카 + 요코하마",
    dateText: "2026년 8월 12일 수요일",
    stops: [
      {
        id: "d2-leave",
        time: "07:30",
        title: "우에노 출발",
        area: "우에노",
        type: "이동"
      },
      {
        id: "d2-yokosuka-arrive",
        time: "09:00 전후",
        title: "요코스카 도착",
        area: "요코스카",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Yokosuka%20Japan"
      },
      {
        id: "d2-cruise",
        time: "10:00 전후",
        title: "요코스카 군항크루즈",
        area: "요코스카",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Yokosuka%20Naval%20Port%20Cruise"
      },
      {
        id: "d2-yokohama-move",
        time: "12:00",
        title: "요코하마 이동",
        area: "요코스카 -> 요코하마",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Yokohama%20Japan"
      },
      {
        id: "d2-lunch",
        time: "12:30-13:30",
        title: "점심",
        area: "요코하마",
        type: "식사"
      },
      {
        id: "d2-nissan",
        time: "13:30-14:30",
        title: "닛산 갤러리",
        area: "요코하마",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Nissan%20Gallery%20Yokohama"
      },
      {
        id: "d2-cupnoodles",
        time: "14:30-16:00",
        title: "컵누들 박물관",
        area: "요코하마",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Cup%20Noodles%20Museum%20Yokohama"
      },
      {
        id: "d2-minatomirai",
        time: "16:00-17:00",
        title: "미나토미라이 산책",
        area: "요코하마",
        type: "산책",
        map: "https://www.google.com/maps/search/?api=1&query=Minatomirai%20Yokohama"
      },
      {
        id: "d2-dinner",
        time: "17:00-18:00",
        title: "저녁식사",
        area: "요코하마",
        type: "식사"
      },
      {
        id: "d2-night",
        time: "18:00-20:30",
        title: "요코하마 야경",
        area: "요코하마",
        type: "야경",
        map: "https://www.google.com/maps/search/?api=1&query=Yokohama%20Red%20Brick%20Warehouse%20Cosmo%20World",
        items: ["빨간벽돌창고", "관람차", "항구 산책"]
      },
      {
        id: "d2-return",
        time: "21:30",
        title: "숙소",
        area: "요코하마 -> 우에노",
        type: "이동"
      }
    ]
  },
  {
    id: "2026-08-13",
    label: "8.13 Thu",
    title: "G-Cans + 철도박물관 + TeamLab",
    dateText: "2026년 8월 13일 목요일",
    stops: [
      {
        id: "d3-leave",
        time: "07:30",
        title: "우에노 출발",
        area: "우에노",
        type: "이동"
      },
      {
        id: "d3-gcans-arrive",
        time: "09:30 전후",
        title: "G-Cans 도착",
        area: "사이타마",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Metropolitan%20Area%20Outer%20Underground%20Discharge%20Channel"
      },
      {
        id: "d3-gcans-tour",
        time: "10:00-10:55",
        title: "G-Cans 투어",
        area: "수도권 외곽 방수로",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=G-Cans%20Saitama"
      },
      {
        id: "d3-omiya-lunch",
        time: "12:00",
        title: "오미야 이동 및 점심",
        area: "오미야",
        type: "식사",
        map: "https://www.google.com/maps/search/?api=1&query=Omiya%20Saitama"
      },
      {
        id: "d3-railway",
        time: "13:00-16:00",
        title: "사이타마 철도박물관",
        area: "오미야",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Railway%20Museum%20Saitama"
      },
      {
        id: "d3-tokyo-move",
        time: "16:00",
        title: "도쿄 이동",
        area: "오미야 -> 도쿄",
        type: "이동"
      },
      {
        id: "d3-tsukishima",
        time: "17:00-18:00",
        title: "츠키시마 이동",
        area: "츠키시마",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Tsukishima%20Tokyo"
      },
      {
        id: "d3-monja",
        time: "17:00-18:00",
        title: "몬자야키 저녁식사",
        area: "츠키시마",
        type: "식사",
        map: "https://www.google.com/maps/search/?api=1&query=Tsukishima%20Monjayaki"
      },
      {
        id: "d3-teamlab",
        time: "18:30-21:00",
        title: "TeamLab Planets",
        area: "도요스",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=TeamLab%20Planets%20Tokyo"
      },
      {
        id: "d3-night",
        time: "21:00 이후",
        title: "도요스, 오다이바 야경",
        area: "도요스 / 오다이바",
        type: "선택",
        map: "https://www.google.com/maps/search/?api=1&query=Toyosu%20Odaiba%20night%20view"
      },
      {
        id: "d3-return",
        time: "22:00",
        title: "숙소",
        area: "도쿄 -> 우에노",
        type: "이동"
      }
    ]
  },
  {
    id: "2026-08-14",
    label: "8.14 Fri",
    title: "후지산 투어 + 마지막 쇼핑",
    dateText: "2026년 8월 14일 금요일",
    stops: [
      {
        id: "d4-tokyo-station",
        time: "08:00",
        title: "도쿄역 출발",
        area: "도쿄역",
        type: "이동",
        map: "https://www.google.com/maps/search/?api=1&query=Tokyo%20Station"
      },
      {
        id: "d4-fuji-tour",
        time: "종일",
        title: "후지산 버스투어",
        area: "후지산",
        type: "관광",
        map: "https://www.google.com/maps/search/?api=1&query=Mount%20Fuji%20bus%20tour"
      },
      {
        id: "d4-tour-end",
        time: "18:50",
        title: "도쿄역 해산",
        area: "도쿄역",
        type: "이동"
      },
      {
        id: "d4-ueno-move",
        time: "19:20",
        title: "우에노 이동",
        area: "도쿄역 -> 우에노",
        type: "이동"
      },
      {
        id: "d4-ameyoko",
        time: "19:30-21:00",
        title: "아메요코 쇼핑",
        area: "우에노",
        type: "쇼핑",
        map: "https://www.google.com/maps/search/?api=1&query=Ameyoko%20Ueno%20Tokyo",
        items: ["일본 과자", "기념품", "드럭스토어", "식품류"]
      },
      {
        id: "d4-pack",
        time: "21:30",
        title: "숙소, 짐 정리",
        area: "우에노",
        type: "정리"
      }
    ]
  },
  {
    id: "2026-08-15",
    label: "8.15 Sat",
    title: "귀국 준비",
    dateText: "2026년 8월 15일 토요일",
    stops: [
      {
        id: "d5-morning",
        time: "오전",
        title: "여유 시간",
        area: "우에노",
        type: "자유"
      },
      {
        id: "d5-checkout",
        time: "체크아웃",
        title: "숙소 체크아웃",
        area: "우에노",
        type: "정리"
      },
      {
        id: "d5-airport",
        time: "공항 이동 전",
        title: "공항 이동 준비",
        area: "도쿄",
        type: "이동"
      }
    ]
  }
];

const DEFAULT_PACKING = [
  { id: "passport", category: "서류", label: "여권" },
  { id: "reservation", category: "서류", label: "숙소, 투어 예약 확인" },
  { id: "cash", category: "서류", label: "엔화 현금" },
  { id: "card", category: "서류", label: "해외 결제 카드" },
  { id: "esim", category: "기기", label: "eSIM 또는 유심" },
  { id: "battery", category: "기기", label: "보조배터리" },
  { id: "charger", category: "기기", label: "충전기, 케이블" },
  { id: "adapter", category: "기기", label: "돼지코 어댑터" },
  { id: "shoes", category: "의류", label: "많이 걸을 신발" },
  { id: "rain", category: "의류", label: "우산 또는 우비" },
  { id: "medicine", category: "기타", label: "상비약" },
  { id: "bag", category: "기타", label: "접이식 쇼핑백" }
];

const STORAGE_KEY = "japan-trip-log:v1";
const APP_VERSION = 3;
const VIEWS = ["now", "schedule", "map", "journal", "expense", "prep"];
const CALENDAR_START_MINUTES = 7 * 60;
const CALENDAR_END_MINUTES = 23 * 60;
const MAP_CENTER = [35.6814, 139.7658];
const MAP_ZOOM = 10;
const PINNED_STOP_IDS = new Set([
  "d1-asakusa", "d1-shibuya",
  "d2-cruise", "d2-nissan", "d2-cupnoodles", "d2-minatomirai", "d2-night",
  "d3-gcans-tour", "d3-railway", "d3-teamlab",
  "d4-fuji-tour", "d4-ameyoko"
]);
const MAP_COORDINATES = {
  "d1-asakusa": [35.7134032, 139.7955265],
  "d1-shibuya": [35.6590597, 139.7006279],
  "d2-cruise": [35.2831231, 139.6616122],
  "d2-nissan": [35.4637, 139.6250],
  "d2-cupnoodles": [35.4554856, 139.6388810],
  "d2-minatomirai": [35.4594441, 139.6323669],
  "d2-night": [35.4524046, 139.6429182],
  "d3-gcans-tour": [35.9910983, 139.7805654],
  "d3-railway": [35.9217287, 139.6178610],
  "d3-teamlab": [35.6493800, 139.7897280],
  "d4-fuji-tour": [35.3628384, 138.7307677],
  "d4-ameyoko": [35.7100592, 139.7745428]
};

const state = loadState();
if (state.appVersion !== APP_VERSION) {
  state.activeView = "now";
  state.appVersion = APP_VERSION;
}

let selectedDayId = state.selectedDayId || TRIP_DAYS[0].id;
let activeView = VIEWS.includes(state.activeView) ? state.activeView : "now";
let selectedMapStopId = state.selectedMapStopId || "";
let mapDayFilter = TRIP_DAYS.some((day) => day.id === state.mapDayFilter)
  ? state.mapDayFilter
  : selectedDayId;
let selectedNowStopId = "";
let tripMap = null;
let mapMarkers = [];
let markerByStopId = new Map();
let googleMapsPromise = null;

const nodes = {
  completionMetric: document.querySelector("#completionMetric"),
  completionBar: document.querySelector("#completionBar"),
  checkedMetric: document.querySelector("#checkedMetric"),
  journalMetric: document.querySelector("#journalMetric"),
  expenseMetric: document.querySelector("#expenseMetric"),
  dayTabs: document.querySelector("#dayTabs"),
  nowClock: document.querySelector("#nowClock"),
  nowKicker: document.querySelector("#nowKicker"),
  nowTitle: document.querySelector("#nowTitle"),
  nowMeta: document.querySelector("#nowMeta"),
  nowStatus: document.querySelector("#nowStatus"),
  nowActions: document.querySelector("#nowActions"),
  weekRail: document.querySelector("#weekRail"),
  weekCalendar: document.querySelector("#weekCalendar"),
  selectedDateLabel: document.querySelector("#selectedDateLabel"),
  selectedDayTitle: document.querySelector("#selectedDayTitle"),
  selectedDayStatus: document.querySelector("#selectedDayStatus"),
  nextStopCard: document.querySelector("#nextStopCard"),
  stopList: document.querySelector("#stopList"),
  journalForm: document.querySelector("#journalForm"),
  journalDay: document.querySelector("#journalDay"),
  journalList: document.querySelector("#journalList"),
  journalCount: document.querySelector("#journalCount"),
  mapDayFilters: document.querySelector("#mapDayFilters"),
  mapTimeline: document.querySelector("#mapTimeline"),
  mapCanvas: document.querySelector("#mapCanvas"),
  mapBottomSheet: document.querySelector("#mapBottomSheet"),
  mapSheetClose: document.querySelector("#mapSheetClose"),
  mapSheetDay: document.querySelector("#mapSheetDay"),
  mapSheetTitle: document.querySelector("#mapSheetTitle"),
  mapSheetMeta: document.querySelector("#mapSheetMeta"),
  mapSheetItems: document.querySelector("#mapSheetItems"),
  mapSheetOpenLink: document.querySelector("#mapSheetOpenLink"),
  packingList: document.querySelector("#packingList"),
  packingForm: document.querySelector("#packingForm"),
  packingStatus: document.querySelector("#packingStatus"),
  expenseForm: document.querySelector("#expenseForm"),
  expenseDay: document.querySelector("#expenseDay"),
  expenseSummary: document.querySelector("#expenseSummary"),
  expenseRows: document.querySelector("#expenseRows"),
  expenseCount: document.querySelector("#expenseCount"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  resetButton: document.querySelector("#resetButton"),
  routeCanvas: document.querySelector("#routeCanvas"),
  bottomNav: document.querySelector("#bottomNav"),
  viewPanels: document.querySelectorAll("[data-view-panel]")
};

function loadState() {
  const fallback = {
    checkedStops: {},
    checkedPacking: {},
    customPacking: [],
    journal: [],
    expenses: [],
    selectedDayId: TRIP_DAYS[0].id,
    activeView: "now",
    selectedMapStopId: "",
    mapDayFilter: "all",
    appVersion: APP_VERSION
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    return { ...fallback, ...JSON.parse(raw) };
  } catch (error) {
    console.warn("Failed to load local trip data", error);
    return fallback;
  }
}

function persist() {
  state.selectedDayId = selectedDayId;
  state.activeView = activeView;
  state.selectedMapStopId = selectedMapStopId;
  state.mapDayFilter = mapDayFilter;
  state.appVersion = APP_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatYen(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getAllStops() {
  return TRIP_DAYS.flatMap((day) => day.stops);
}

function getStopById(stopId) {
  return getCalendarItems().find((item) => item.id === stopId);
}

function getMappableStops() {
  return TRIP_DAYS.flatMap((day) => day.stops
    .filter((stop) => stop.map && PINNED_STOP_IDS.has(stop.id) && MAP_COORDINATES[stop.id])
    .map((stop) => ({ ...stop, dayId: day.id, dayLabel: day.label, dayTitle: day.title })));
}

function getSelectedDay() {
  return TRIP_DAYS.find((day) => day.id === selectedDayId) || TRIP_DAYS[0];
}

function getStopMapQuery(stop) {
  if (!stop) return "Tokyo Japan";
  try {
    const url = new URL(stop.map);
    return url.searchParams.get("query") || url.searchParams.get("q") || `${stop.title} ${stop.area} Japan`;
  } catch (error) {
    return `${stop.title} ${stop.area} Japan`;
  }
}

function getSelectedMapStop() {
  const mappableStops = getMappableStops();
  const filteredStops = mapDayFilter === "all"
    ? mappableStops
    : mappableStops.filter((stop) => stop.dayId === mapDayFilter);
  const selected = filteredStops.find((stop) => stop.id === selectedMapStopId);
  if (selected) return selected;
  const sameDay = filteredStops.find((stop) => stop.dayId === selectedDayId);
  return sameDay || filteredStops[0] || mappableStops[0];
}

function getDayProgress(day) {
  const total = day.stops.length;
  const done = day.stops.filter((stop) => state.checkedStops[stop.id]).length;
  return { done, total };
}

function parseStopStartMinutes(time, index) {
  const value = String(time || "");
  const match = value.match(/(\d{1,2}):(\d{2})/);
  if (match) return Number(match[1]) * 60 + Number(match[2]);
  if (value.includes("종일")) return 8 * 60;
  if (value.includes("오전")) return 9 * 60;
  if (value.includes("체크아웃")) return 10 * 60;
  if (value.includes("공항")) return 11 * 60;
  return 8 * 60 + index * 60;
}

function parseStopEndMinutes(time, startMinutes) {
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

function createTripDate(dayId, minutes) {
  const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mins = String(minutes % 60).padStart(2, "0");
  return new Date(`${dayId}T${hours}:${mins}:00+09:00`);
}

function getCalendarItems() {
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

function getNowContext() {
  const now = new Date();
  const items = getCalendarItems();
  const selected = selectedNowStopId ? items.find((item) => item.id === selectedNowStopId) : null;
  if (selected) return { mode: "selected", item: selected, now };

  const current = items.find((item) => now >= item.startDate && now < item.endDate);
  if (current) return { mode: "current", item: current, now };

  const next = items.find((item) => now < item.startDate);
  if (next) return { mode: "next", item: next, now };

  return { mode: "complete", item: items[items.length - 1], now };
}

function render() {
  renderActiveView();
  renderNow();
  renderMetrics();
  renderDayTabs();
  renderNextStop();
  renderStops();
  renderMap();
  renderJournalFormDays();
  renderJournal();
  renderPacking();
  renderExpenseFormDays();
  renderExpenses();
  drawRouteCanvas();
}

function renderActiveView() {
  nodes.viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === activeView;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  nodes.bottomNav.querySelectorAll("[data-view]").forEach((button) => {
    if (button.dataset.view === activeView) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (activeView === "map") {
    loadGoogleMaps().then(renderMap).catch((error) => console.error(error));
  }
}

function renderMetrics() {
  const allStops = getAllStops();
  const checked = allStops.filter((stop) => state.checkedStops[stop.id]).length;
  const percent = allStops.length ? Math.round((checked / allStops.length) * 100) : 0;
  const expenseTotal = state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  nodes.completionMetric.textContent = `${percent}%`;
  nodes.completionBar.style.width = `${percent}%`;
  nodes.checkedMetric.textContent = `${checked} / ${allStops.length}`;
  nodes.journalMetric.textContent = `${state.journal.length}개`;
  nodes.expenseMetric.textContent = formatYen(expenseTotal);
}

function renderNow() {
  const context = getNowContext();
  const item = context.item;
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit"
  });

  nodes.nowClock.textContent = `일본 기준 ${formatter.format(context.now)}`;

  if (!item) {
    nodes.nowKicker.textContent = "지금";
    nodes.nowTitle.textContent = "일정이 없습니다";
    nodes.nowMeta.textContent = "";
    nodes.nowStatus.textContent = "대기";
    nodes.weekRail.innerHTML = "";
    nodes.weekCalendar.innerHTML = '<p class="empty-state">표시할 일정이 없습니다.</p>';
    return;
  }

  const statusText = {
    current: "진행 중",
    next: "다음 일정",
    selected: "선택 일정",
    complete: "여행 완료"
  }[context.mode];

  nodes.nowKicker.textContent = `${item.dayLabel} · ${item.dayTitle}`;
  nodes.nowTitle.textContent = item.title;
  nodes.nowMeta.textContent = `${item.time} · ${item.area} · ${item.type}`;
  nodes.nowStatus.textContent = statusText;

  renderWeekRail(item);
  renderWeekCalendar(item, context);
}

function renderWeekRail(activeItem) {
  nodes.weekRail.innerHTML = TRIP_DAYS.map((day) => {
    const progress = getDayProgress(day);
    const dayItems = getCalendarItems().filter((item) => item.dayId === day.id);
    const first = dayItems[0];
    const last = dayItems[dayItems.length - 1];
    const isActive = activeItem && activeItem.dayId === day.id;
    const timeRange = first && last ? `${first.time} - ${last.time}` : "일정 없음";

    return `
      <button class="week-rail-day" type="button" data-now-day-id="${day.id}" aria-current="${isActive ? "true" : "false"}">
        <span>${escapeHTML(day.label)}</span>
        <strong>${escapeHTML(day.title)}</strong>
        <small>${escapeHTML(timeRange)} · ${progress.done}/${progress.total}</small>
      </button>
    `;
  }).join("");
}

function renderWeekCalendar(activeItem, context) {
  const items = getCalendarItems();
  const duration = CALENDAR_END_MINUTES - CALENDAR_START_MINUTES;
  const labels = [];

  for (let minutes = CALENDAR_START_MINUTES; minutes <= CALENDAR_END_MINUTES; minutes += 120) {
    labels.push(`
      <span style="top: ${((minutes - CALENDAR_START_MINUTES) / duration) * 100}%">
        ${String(Math.floor(minutes / 60)).padStart(2, "0")}:00
      </span>
    `);
  }

  const dayColumns = TRIP_DAYS.map((day) => {
    const dayItems = items.filter((item) => item.dayId === day.id);
    const grouped = dayItems.reduce((acc, item) => {
      const key = `${item.startMinutes}-${item.endMinutes}`;
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    }, {});

    return `
      <section class="calendar-day-column" data-calendar-day="${day.id}">
        ${dayItems.map((item) => {
          const top = Math.max(0, ((item.startMinutes - CALENDAR_START_MINUTES) / duration) * 100);
          const height = Math.max(6.5, ((item.endMinutes - item.startMinutes) / duration) * 100);
          const group = grouped[`${item.startMinutes}-${item.endMinutes}`] || [item];
          const laneIndex = group.findIndex((entry) => entry.id === item.id);
          const laneWidth = 100 / group.length;
          const left = laneIndex * laneWidth;
          const isCurrent = context.mode === "current" && activeItem && item.id === activeItem.id;
          const isSelected = activeItem && item.id === activeItem.id;
          const isDone = Boolean(state.checkedStops[item.id]);
          const classes = [
            "calendar-event",
            isCurrent ? "is-current" : "",
            isSelected ? "is-selected" : "",
            isDone ? "is-done" : ""
          ].filter(Boolean).join(" ");

          return `
            <button
              class="${classes}"
              type="button"
              data-calendar-stop-id="${item.id}"
              style="top: ${top}%; height: ${height}%; left: calc(${left}% + 3px); width: calc(${laneWidth}% - 6px);"
              aria-label="${escapeHTML(item.time)} ${escapeHTML(item.title)}">
              <span>${escapeHTML(item.time)}</span>
              <strong>${escapeHTML(item.title)}</strong>
            </button>
          `;
        }).join("")}
      </section>
    `;
  }).join("");

  nodes.weekCalendar.innerHTML = `
    <div class="week-calendar-header">
      <div class="calendar-corner">시간</div>
      ${TRIP_DAYS.map((day) => `
        <button class="calendar-day-heading" type="button" data-now-day-id="${day.id}" aria-selected="${activeItem && activeItem.dayId === day.id ? "true" : "false"}">
          <span>${escapeHTML(day.label)}</span>
          <strong>${escapeHTML(day.title)}</strong>
        </button>
      `).join("")}
    </div>
    <div class="week-calendar-body">
      <div class="time-axis">${labels.join("")}</div>
      ${dayColumns}
    </div>
  `;
}

function renderNextStop() {
  const day = getSelectedDay();
  const nextStop = day.stops.find((stop) => !state.checkedStops[stop.id]);
  const progress = getDayProgress(day);

  if (!nextStop) {
    nodes.nextStopCard.innerHTML = `
      <div>
        <p class="panel-kicker">${escapeHTML(day.label)}</p>
        <h2>오늘 일정 완료</h2>
        <p>${escapeHTML(day.title)} 일정이 모두 체크됐습니다.</p>
      </div>
      <span class="status-pill">${progress.done} / ${progress.total}</span>
    `;
    return;
  }

  nodes.nextStopCard.innerHTML = `
    <div>
      <p class="panel-kicker">다음 일정</p>
      <h2>${escapeHTML(nextStop.time)} · ${escapeHTML(nextStop.title)}</h2>
      <p>${escapeHTML(nextStop.area)} · ${escapeHTML(nextStop.type)}</p>
    </div>
    <span class="status-pill">${progress.done} / ${progress.total}</span>
  `;
}

function renderDayTabs() {
  nodes.dayTabs.innerHTML = TRIP_DAYS.map((day) => {
    const progress = getDayProgress(day);
    const selected = day.id === selectedDayId ? "true" : "false";
    return `
      <button class="day-tab" type="button" data-day-id="${day.id}" aria-selected="${selected}">
        <strong>${escapeHTML(day.label)}</strong>
        <span>${escapeHTML(day.title)}</span>
        <span>${progress.done} / ${progress.total}</span>
      </button>
    `;
  }).join("");
}

function renderStops() {
  const day = getSelectedDay();
  const progress = getDayProgress(day);

  nodes.selectedDateLabel.textContent = day.dateText;
  nodes.selectedDayTitle.textContent = day.title;
  nodes.selectedDayStatus.textContent = `${progress.done} / ${progress.total}`;

  nodes.stopList.innerHTML = day.stops.map((stop) => {
    const checked = state.checkedStops[stop.id] ? "checked" : "";
    const items = Array.isArray(stop.items) && stop.items.length
      ? `<ul class="stop-items">${stop.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
      : "";
    const note = stop.note ? `<p class="stop-note">${escapeHTML(stop.note)}</p>` : "";
    const map = stop.map
      ? `<button class="small-action map-action" type="button" data-map-stop-id="${stop.id}">지도</button>`
      : "";
    const actions = `
      <div class="stop-actions">
        ${map}
        <button class="small-action" type="button" data-log-stop-id="${stop.id}">기록</button>
      </div>
    `;

    return `
      <section class="stop-card">
        <input class="stop-check" type="checkbox" data-stop-id="${stop.id}" aria-label="${escapeHTML(stop.title)} 완료" ${checked}>
        <div>
          <div class="stop-topline">
            <span class="stop-time">${escapeHTML(stop.time)}</span>
            ${actions}
          </div>
          <h3 class="stop-title">${escapeHTML(stop.title)}</h3>
          <div class="stop-meta">
            <span class="tag">${escapeHTML(stop.area)}</span>
            <span class="tag">${escapeHTML(stop.type)}</span>
          </div>
          ${items}
          ${note}
        </div>
      </section>
    `;
  }).join("");
}

function loadGoogleMaps() {
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

function renderMap() {
  const mappableStops = getMappableStops();
  const visibleStops = mappableStops.filter((stop) => stop.dayId === mapDayFilter);

  nodes.mapDayFilters.innerHTML = TRIP_DAYS.map((day) => (
    `<button class="map-day-filter" type="button" data-map-day-filter="${day.id}" aria-pressed="${day.id === mapDayFilter ? "true" : "false"}">${escapeHTML(day.label)}</button>`
  )).join("");
  nodes.mapTimeline.innerHTML = visibleStops.length
    ? visibleStops.map((stop, index) => `
      <button class="map-timeline-stop" type="button" data-map-timeline-stop-id="${stop.id}">
        <span class="map-timeline-time">${escapeHTML(stop.time)}</span>
        <span class="map-timeline-dot">${index + 1}</span>
        <strong>${escapeHTML(stop.title)}</strong>
      </button>
    `).join("")
    : '<span class="map-timeline-empty">장소 확정 전</span>';
  nodes.mapBottomSheet.hidden = true;

  if (!tripMap && window.google?.maps) {
    tripMap = new google.maps.Map(nodes.mapCanvas, {
      center: { lat: MAP_CENTER[0], lng: MAP_CENTER[1] },
      zoom: MAP_ZOOM,
      mapId: "DEMO_MAP_ID",
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      clickableIcons: false,
      gestureHandling: "greedy"
    });
  }
  if (!tripMap) return;

  mapMarkers.forEach((marker) => { marker.map = null; });
  markerByStopId.clear();
  mapMarkers = visibleStops.map((stop, index) => {
    const [lat, lng] = MAP_COORDINATES[stop.id];
    const pin = new google.maps.marker.PinElement({
      glyph: String(index + 1),
      background: "#286f9e",
      borderColor: "#ffffff",
      glyphColor: "#ffffff"
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: tripMap,
      position: { lat, lng },
      title: stop.title,
      content: pin.element
    });
    marker.addListener("click", () => openMapSheet(stop));
    markerByStopId.set(stop.id, marker);
    return marker;
  });

  if (visibleStops.length > 1) {
    const bounds = new google.maps.LatLngBounds();
    visibleStops.forEach((stop) => {
      const [lat, lng] = MAP_COORDINATES[stop.id];
      bounds.extend({ lat, lng });
    });
    tripMap.fitBounds(bounds, { top: 150, right: 40, bottom: 130, left: 40 });
  } else if (visibleStops.length === 1) {
    const [lat, lng] = MAP_COORDINATES[visibleStops[0].id];
    tripMap.setCenter({ lat, lng });
    tripMap.setZoom(15);
  } else {
    tripMap.setCenter({ lat: MAP_CENTER[0], lng: MAP_CENTER[1] });
    tripMap.setZoom(MAP_ZOOM);
  }
}

function openMapSheet(stop) {
  selectedMapStopId = stop.id;
  nodes.mapSheetDay.textContent = `${stop.dayLabel} · ${stop.dayTitle}`;
  nodes.mapSheetTitle.textContent = stop.title;
  nodes.mapSheetMeta.textContent = `${stop.time} · ${stop.area} · ${stop.type}`;
  nodes.mapSheetItems.innerHTML = (stop.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  nodes.mapSheetOpenLink.href = stop.map;
  nodes.mapBottomSheet.hidden = false;
  persist();
}

function renderJournalFormDays() {
  const currentValue = nodes.journalDay.value || selectedDayId;
  nodes.journalDay.innerHTML = TRIP_DAYS.map((day) => (
    `<option value="${day.id}">${escapeHTML(day.label)} ${escapeHTML(day.title)}</option>`
  )).join("");
  nodes.journalDay.value = TRIP_DAYS.some((day) => day.id === currentValue) ? currentValue : selectedDayId;
}

function renderJournal() {
  const entries = [...state.journal]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  nodes.journalCount.textContent = `${state.journal.length}개`;

  if (!entries.length) {
    nodes.journalList.innerHTML = '<p class="empty-state">아직 기록이 없습니다.</p>';
    return;
  }

  nodes.journalList.innerHTML = entries.map((entry) => {
    const day = TRIP_DAYS.find((item) => item.id === entry.dayId);
    return `
    <article class="entry-card">
      <header>
        <h3>${escapeHTML(entry.title)}</h3>
        <span class="tag">${escapeHTML(entry.type)}</span>
      </header>
      <p>${escapeHTML(entry.note || "")}</p>
      <footer>
        <span>${escapeHTML(day ? day.label : entry.dayId)} · ${escapeHTML(entry.rating)}점</span>
        <button class="link-button" type="button" data-delete-journal="${entry.id}">삭제</button>
      </footer>
    </article>
    `;
  }).join("");
}

function renderPacking() {
  const items = [...DEFAULT_PACKING, ...state.customPacking];
  const done = items.filter((item) => state.checkedPacking[item.id]).length;
  const grouped = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  nodes.packingStatus.textContent = `${done} / ${items.length}`;
  nodes.packingList.innerHTML = Object.entries(grouped).map(([category, categoryItems]) => `
    <section class="packing-category">
      <p class="packing-title">${escapeHTML(category)}</p>
      ${categoryItems.map((item) => {
        const checked = state.checkedPacking[item.id] ? "checked" : "";
        const doneClass = checked ? "done" : "";
        return `
          <label class="check-row">
            <input type="checkbox" data-packing-id="${item.id}" ${checked}>
            <span class="${doneClass}">${escapeHTML(item.label)}</span>
          </label>
        `;
      }).join("")}
    </section>
  `).join("");
}

function renderExpenseFormDays() {
  const currentValue = nodes.expenseDay.value || selectedDayId;
  nodes.expenseDay.innerHTML = TRIP_DAYS.map((day) => (
    `<option value="${day.id}">${escapeHTML(day.label)} ${escapeHTML(day.title)}</option>`
  )).join("");
  nodes.expenseDay.value = TRIP_DAYS.some((day) => day.id === currentValue) ? currentValue : selectedDayId;
}

function renderExpenses() {
  const expenses = [...state.expenses].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const total = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const byCategory = summarize(expenses, "category");
  const byPayer = summarize(expenses, "payer");

  nodes.expenseCount.textContent = `${expenses.length}건`;
  nodes.expenseSummary.innerHTML = [
    ["총 지출", formatYen(total)],
    ["식비", formatYen(byCategory["식비"] || 0)],
    ["교통", formatYen(byCategory["교통"] || 0)],
    ["최다 결제자", topSummaryLabel(byPayer)]
  ].map(([label, value]) => `
    <div class="summary-chip">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  if (!expenses.length) {
    nodes.expenseRows.innerHTML = `
      <tr>
        <td colspan="6">아직 지출 기록이 없습니다.</td>
      </tr>
    `;
    return;
  }

  nodes.expenseRows.innerHTML = expenses.map((expense) => {
    const day = TRIP_DAYS.find((item) => item.id === expense.dayId);
    return `
      <tr>
        <td>${escapeHTML(day ? day.label : expense.dayId)}</td>
        <td>${escapeHTML(expense.category)}</td>
        <td>${formatYen(Number(expense.amount || 0))}</td>
        <td>${escapeHTML(expense.payer || "-")}</td>
        <td>${escapeHTML(expense.memo || "-")}</td>
        <td><button class="link-button" type="button" data-delete-expense="${expense.id}">삭제</button></td>
      </tr>
    `;
  }).join("");
}

function summarize(items, key) {
  return items.reduce((acc, item) => {
    const label = item[key] || "미입력";
    acc[label] = (acc[label] || 0) + Number(item.amount || 0);
    return acc;
  }, {});
}

function topSummaryLabel(summary) {
  const [label, value] = Object.entries(summary).sort((a, b) => b[1] - a[1])[0] || [];
  return label ? `${label} ${formatYen(value)}` : "-";
}

function drawRouteCanvas() {
  const canvas = nodes.routeCanvas;
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.round(rect.width * ratio));
  const height = Math.max(160, Math.round(rect.height * ratio));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const w = width / ratio;
  const h = height / ratio;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#dfecef";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(40, 111, 158, 0.10)";
  ctx.beginPath();
  ctx.moveTo(w * 0.04, h * 0.72);
  ctx.bezierCurveTo(w * 0.22, h * 0.44, w * 0.42, h * 0.88, w * 0.64, h * 0.56);
  ctx.bezierCurveTo(w * 0.79, h * 0.34, w * 0.94, h * 0.48, w * 0.98, h * 0.30);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  const points = [
    { x: 0.13, y: 0.34, label: "Ueno" },
    { x: 0.27, y: 0.24, label: "Asakusa" },
    { x: 0.40, y: 0.45, label: "Shibuya" },
    { x: 0.58, y: 0.62, label: "Yokohama" },
    { x: 0.70, y: 0.36, label: "Omiya" },
    { x: 0.84, y: 0.66, label: "Fuji" }
  ];

  ctx.strokeStyle = "#286f9e";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = point.x * w;
    const y = point.y * h;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  points.forEach((point, index) => {
    const x = point.x * w;
    const y = point.y * h;
    ctx.fillStyle = index === 0 ? "#2d7a58" : "#ffffff";
    ctx.strokeStyle = index === points.length - 1 ? "#b7791f" : "#286f9e";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#1d2428";
    ctx.font = "700 12px system-ui, sans-serif";
    ctx.fillText(point.label, x - 18, y - 14);
  });
}

nodes.dayTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-id]");
  if (!button) return;
  selectedDayId = button.dataset.dayId;
  nodes.journalDay.value = selectedDayId;
  nodes.expenseDay.value = selectedDayId;
  persist();
  render();
});

nodes.bottomNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  activeView = button.dataset.view;
  if (activeView === "now") {
    selectedNowStopId = "";
  }
  persist();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

nodes.nowActions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-now-action]");
  if (!button) return;
  const item = getNowContext().item;
  if (!item) return;

  selectedDayId = item.dayId;

  if (button.dataset.nowAction === "map" && item.map) {
    selectedMapStopId = item.id;
    mapDayFilter = item.dayId;
    activeView = "map";
  }

  if (button.dataset.nowAction === "log") {
    activeView = "journal";
    render();
    nodes.journalDay.value = item.dayId;
    nodes.journalForm.elements.title.value = item.title;
    nodes.journalForm.elements.note.focus();
    persist();
    return;
  }

  if (button.dataset.nowAction === "schedule") {
    activeView = "schedule";
  }

  persist();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function selectNowDay(dayId) {
  const item = getCalendarItems().find((entry) => entry.dayId === dayId);
  if (!item) return;
  selectedDayId = dayId;
  selectedNowStopId = item.id;
  persist();
  render();
}

nodes.weekRail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-now-day-id]");
  if (!button) return;
  selectNowDay(button.dataset.nowDayId);
});

nodes.weekCalendar.addEventListener("click", (event) => {
  const stopButton = event.target.closest("[data-calendar-stop-id]");
  if (stopButton) {
    const item = getStopById(stopButton.dataset.calendarStopId);
    if (!item) return;
    selectedDayId = item.dayId;
    selectedNowStopId = item.id;
    selectedMapStopId = item.map ? item.id : selectedMapStopId;
    persist();
    render();
    return;
  }

  const dayButton = event.target.closest("[data-now-day-id]");
  if (!dayButton) return;
  selectNowDay(dayButton.dataset.nowDayId);
});

nodes.stopList.addEventListener("change", (event) => {
  const input = event.target.closest("[data-stop-id]");
  if (!input) return;
  state.checkedStops[input.dataset.stopId] = input.checked;
  persist();
  render();
});

nodes.stopList.addEventListener("click", (event) => {
  const mapButton = event.target.closest("[data-map-stop-id]");
  if (mapButton) {
    selectedMapStopId = mapButton.dataset.mapStopId;
    activeView = "map";
    persist();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const button = event.target.closest("[data-log-stop-id]");
  if (!button) return;
  const day = getSelectedDay();
  const stop = day.stops.find((item) => item.id === button.dataset.logStopId);
  if (!stop) return;
  activeView = "journal";
  persist();
  render();
  nodes.journalDay.value = selectedDayId;
  nodes.journalForm.elements.title.value = stop.title;
  nodes.journalForm.elements.note.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

nodes.mapSheetClose.addEventListener("click", () => {
  nodes.mapBottomSheet.hidden = true;
});

nodes.mapDayFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-day-filter]");
  if (!button) return;
  mapDayFilter = button.dataset.mapDayFilter;
  selectedDayId = mapDayFilter;
  nodes.mapBottomSheet.hidden = true;
  persist();
  render();
});

nodes.mapTimeline.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-timeline-stop-id]");
  if (!button || !tripMap) return;
  const stop = getMappableStops().find((item) => item.id === button.dataset.mapTimelineStopId);
  if (!stop) return;
  const [lat, lng] = MAP_COORDINATES[stop.id];
  tripMap.panTo({ lat, lng });
  tripMap.setZoom(15);
  openMapSheet(stop);
});

nodes.packingList.addEventListener("change", (event) => {
  const input = event.target.closest("[data-packing-id]");
  if (!input) return;
  state.checkedPacking[input.dataset.packingId] = input.checked;
  persist();
  render();
});

nodes.journalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(nodes.journalForm);
  state.journal.push({
    id: `journal-${crypto.randomUUID()}`,
    dayId: String(form.get("dayId") || selectedDayId),
    title: String(form.get("title") || "").trim(),
    note: String(form.get("note") || "").trim(),
    type: String(form.get("type") || "기타"),
    rating: String(form.get("rating") || "5"),
    createdAt: new Date().toISOString()
  });
  nodes.journalForm.reset();
  persist();
  render();
});

nodes.journalList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-journal]");
  if (!button) return;
  state.journal = state.journal.filter((entry) => entry.id !== button.dataset.deleteJournal);
  persist();
  render();
});

nodes.packingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(nodes.packingForm);
  const label = String(form.get("item") || "").trim();
  if (!label) return;
  state.customPacking.push({
    id: `custom-${crypto.randomUUID()}`,
    category: "추가",
    label
  });
  nodes.packingForm.reset();
  persist();
  render();
});

nodes.expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(nodes.expenseForm);
  const amount = Number(form.get("amount") || 0);
  if (!amount) return;
  state.expenses.push({
    id: `expense-${crypto.randomUUID()}`,
    dayId: String(form.get("dayId") || selectedDayId),
    category: String(form.get("category") || "기타"),
    amount,
    payer: String(form.get("payer") || "").trim(),
    memo: String(form.get("memo") || "").trim(),
    createdAt: new Date().toISOString()
  });
  nodes.expenseForm.reset();
  nodes.expenseDay.value = selectedDayId;
  persist();
  render();
});

nodes.expenseRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-expense]");
  if (!button) return;
  state.expenses = state.expenses.filter((expense) => expense.id !== button.dataset.deleteExpense);
  persist();
  render();
});

nodes.exportButton.addEventListener("click", () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    itinerary: TRIP_DAYS,
    data: state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `japan-trip-log-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
});

nodes.importInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const payload = JSON.parse(await file.text());
    const imported = payload.data || payload;
    state.checkedStops = imported.checkedStops || {};
    state.checkedPacking = imported.checkedPacking || {};
    state.customPacking = Array.isArray(imported.customPacking) ? imported.customPacking : [];
    state.journal = Array.isArray(imported.journal) ? imported.journal : [];
    state.expenses = Array.isArray(imported.expenses) ? imported.expenses : [];
    selectedDayId = imported.selectedDayId || selectedDayId;
    activeView = VIEWS.includes(imported.activeView) ? imported.activeView : activeView;
    selectedMapStopId = imported.selectedMapStopId || selectedMapStopId;
    mapDayFilter = TRIP_DAYS.some((day) => day.id === imported.mapDayFilter)
      ? imported.mapDayFilter
      : selectedDayId;
    persist();
    render();
  } catch (error) {
    alert("가져오기에 실패했습니다. JSON 파일을 확인해주세요.");
  } finally {
    event.target.value = "";
  }
});

nodes.resetButton.addEventListener("click", () => {
  const confirmed = confirm("체크, 기록, 지출을 모두 초기화할까요?");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  selectedDayId = TRIP_DAYS[0].id;
  selectedMapStopId = "";
  mapDayFilter = TRIP_DAYS[0].id;
  selectedNowStopId = "";
  activeView = "now";
  render();
});

window.addEventListener("resize", drawRouteCanvas);

render();
