import { useState } from "react";
import { ActionButton } from "@seed-design/react";
import { DEFAULT_PACKING } from "../data/trip.js";
import { useTrip } from "../state/TripContext.jsx";

function groupByCategory(items) {
  const grouped = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});
  return Object.entries(grouped);
}

export default function PrepView() {
  const {
    state,
    togglePackingItem,
    addPackingItem,
    removePackingItem,
    exportData,
    importData,
    resetData
  } = useTrip();

  const [newItem, setNewItem] = useState("");

  const isActive = state.activeView === "prep";
  const items = [...DEFAULT_PACKING, ...state.customPacking];
  const done = items.filter((item) => state.checkedPacking[item.id]).length;
  const groups = groupByCategory(items);

  const handleSubmit = (event) => {
    event.preventDefault();
    const label = String(newItem || "").trim();
    if (!label) return;
    addPackingItem(label);
    setNewItem("");
  };

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
              <span>가는 편 · 8월 11일</span>
              <strong>WE 501 · 인천 09:50 → 나리타 12:00</strong>
              <small>비행시간 2시간 10분 · 예약 확정</small>
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
              <p className="panel-kicker">준비</p>
              <h2>준비물</h2>
            </div>
            <span className="status-pill" id="packingStatus">{`${done} / ${items.length}`}</span>
          </div>
          <div className="packing-list" id="packingList">
            {groups.map(([category, categoryItems]) => (
              <section className="packing-category" key={category}>
                <p className="packing-title">{category}</p>
                {categoryItems.map((item) => {
                  const checked = Boolean(state.checkedPacking[item.id]);
                  return (
                    <div className="check-row" key={item.id}>
                      <label className="packing-check">
                        <input
                          type="checkbox"
                          data-packing-id={item.id}
                          checked={checked}
                          onChange={(event) => togglePackingItem(item.id, event.target.checked)}
                        />
                        <span className={checked ? "done" : ""}>{item.label}</span>
                      </label>
                      {item.id.startsWith("custom-") ? (
                        <button
                          className="packing-delete"
                          type="button"
                          data-delete-packing={item.id}
                          aria-label={`${item.label} 삭제`}
                          onClick={() => removePackingItem(item.id)}
                        >
                          ×
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </section>
            ))}
          </div>
          <form className="inline-form" id="packingForm" onSubmit={handleSubmit}>
            <input
              name="item"
              type="text"
              maxLength="32"
              placeholder="추가 준비물"
              value={newItem}
              onChange={(event) => setNewItem(event.target.value)}
            />
            <ActionButton variant="neutralWeak" size="medium" type="submit">추가</ActionButton>
          </form>
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
          <p className="data-manager-note">체크 상태와 직접 추가한 준비물은 현재 기기에 저장됩니다.</p>
        </details>
      </div>
    </section>
  );
}
