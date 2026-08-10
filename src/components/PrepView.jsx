import { ActionButton } from "@seed-design/react";
import { GUIDES } from "../data/guides.js";
import { getCalendarItems } from "../lib/tripUtils.js";
import { useTrip } from "../state/TripContext.jsx";

// Guides in itinerary order, carrying the day/time of the stop they belong to.
function getGuideEntries() {
  return getCalendarItems()
    .filter((item) => GUIDES[item.id])
    .map((item) => ({ item, guide: GUIDES[item.id] }));
}

export default function PrepView() {
  const { state, exportData, importData, resetData, openGuide } = useTrip();

  const isActive = state.activeView === "prep";
  const guideEntries = getGuideEntries();

  const handleImportChange = async (event) => {
    const input = event.target;
    const file = input.files[0];
    if (!file) return;
    try {
      await importData(file);
    } finally {
      input.value = "";
    }
  };

  return (
    <section
      className={isActive ? "tab-panel is-active" : "tab-panel"}
      id="prepPanel"
      data-view-panel="prep"
      hidden={!isActive}
    >
      <div className="prep-grid">
        <article className="panel reservation-panel">
          <div className="panel-heading compact">
            <div>
              <p className="panel-kicker">예약 정보</p>
              <h2>출발 전에 바로 확인</h2>
            </div>
          </div>
          <div className="reservation-grid">
            <section className="reservation-card">
              <span>가는 편 · 8월 11일 · 파라타항공</span>
              <strong>WE 501 · 인천 09:50 → 나리타 12:00</strong>
              <small>인천 제1터미널 · B21~B32 (8월 10일 조회) · 예약 확정</small>
            </section>
            <section className="reservation-card">
              <span>오는 편 · 8월 15일</span>
              <strong>WE 502 · 나리타 13:30 → 인천 16:15</strong>
              <small>비행시간 2시간 45분 · 예약 확정</small>
            </section>
            <section className="reservation-card">
              <span>숙소 · 8월 11일–15일</span>
              <strong>호텔 마루타니 · 우에노</strong>
              <small>6-7-6 Ueno, Taito-ku, Tokyo 110-0005</small>
              <a href="https://www.google.com/maps/search/?api=1&query=Hotel%20Marutani%206-7-6%20Ueno%20Taito%20Tokyo" target="_blank" rel="noreferrer">Google Maps</a>
            </section>
            <section className="reservation-card">
              <span>예약 일정</span>
              <strong>TeamLab · 군항 크루즈 · G-Cans · 철도박물관</strong>
              <small>각 예약 화면과 입장 시간을 출발 전에 재확인</small>
            </section>
          </div>
        </article>
        <article className="panel">
          <div className="panel-heading compact">
            <div>
              <p className="panel-kicker">이동 가이드</p>
              <h2>낯선 구간 단계별 안내</h2>
            </div>
            <span className="status-pill">{`${guideEntries.length}개`}</span>
          </div>
          <div className="guide-index">
            {guideEntries.map(({ item, guide }) => (
              <button
                className="guide-index-item"
                type="button"
                data-guide-stop-id={item.id}
                key={item.id}
                onClick={() => openGuide(item.id)}
              >
                <span className="guide-index-day">{`${item.dayLabel.split(" ")[0]} · ${item.time}`}</span>
                <strong>{guide.title}</strong>
                <small>{guide.subtitle}</small>
              </button>
            ))}
          </div>
        </article>
        <details className="panel data-manager">
          <summary>
            <span>
              <span className="panel-kicker">기기 데이터</span>
              <strong>데이터 관리</strong>
            </span>
            <span aria-hidden="true">⌄</span>
          </summary>
          <section className="control-row" aria-label="데이터 관리">
            <ActionButton variant="neutralSolid" type="button" id="exportButton" onClick={exportData}>데이터 내보내기</ActionButton>
            <label className="button ghost" htmlFor="importInput">데이터 가져오기</label>
            <input
              id="importInput"
              type="file"
              accept="application/json"
              hidden
              onChange={handleImportChange}
            />
            <ActionButton variant="criticalSolid" type="button" id="resetButton" onClick={resetData}>체크 데이터 초기화</ActionButton>
          </section>
          <p className="data-manager-note">일정 체크 상태는 현재 기기에 저장됩니다.</p>
        </details>
      </div>
    </section>
  );
}
