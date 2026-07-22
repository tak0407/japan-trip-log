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
const VIEWS = ["schedule", "journal", "expense", "prep"];

const state = loadState();
let selectedDayId = state.selectedDayId || TRIP_DAYS[0].id;
let activeView = VIEWS.includes(state.activeView) ? state.activeView : "schedule";

const nodes = {
  completionMetric: document.querySelector("#completionMetric"),
  completionBar: document.querySelector("#completionBar"),
  checkedMetric: document.querySelector("#checkedMetric"),
  journalMetric: document.querySelector("#journalMetric"),
  expenseMetric: document.querySelector("#expenseMetric"),
  dayTabs: document.querySelector("#dayTabs"),
  selectedDateLabel: document.querySelector("#selectedDateLabel"),
  selectedDayTitle: document.querySelector("#selectedDayTitle"),
  selectedDayStatus: document.querySelector("#selectedDayStatus"),
  nextStopCard: document.querySelector("#nextStopCard"),
  stopList: document.querySelector("#stopList"),
  journalForm: document.querySelector("#journalForm"),
  journalDay: document.querySelector("#journalDay"),
  journalList: document.querySelector("#journalList"),
  journalCount: document.querySelector("#journalCount"),
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
    activeView: "schedule"
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

function getSelectedDay() {
  return TRIP_DAYS.find((day) => day.id === selectedDayId) || TRIP_DAYS[0];
}

function getDayProgress(day) {
  const total = day.stops.length;
  const done = day.stops.filter((stop) => state.checkedStops[stop.id]).length;
  return { done, total };
}

function render() {
  renderActiveView();
  renderMetrics();
  renderDayTabs();
  renderNextStop();
  renderStops();
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
      ? `<a class="map-link" href="${escapeHTML(stop.map)}" target="_blank" rel="noreferrer">지도</a>`
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
  ctx.fillStyle = "#f8ead5";
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
    ctx.fillStyle = index === 0 ? "#2d7a58" : "#fffdf7";
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
  persist();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

nodes.stopList.addEventListener("change", (event) => {
  const input = event.target.closest("[data-stop-id]");
  if (!input) return;
  state.checkedStops[input.dataset.stopId] = input.checked;
  persist();
  render();
});

nodes.stopList.addEventListener("click", (event) => {
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
  activeView = "schedule";
  render();
});

window.addEventListener("resize", drawRouteCanvas);

render();
