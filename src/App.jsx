import { useEffect } from "react";
import { ActionButton } from "@seed-design/react";

function Header() {
  return (
    <header className="topbar">
      <div className="brand-block">
        <p className="eyebrow">2026.08.11 - 08.15</p>
        <h1>Japan Trip Log</h1>
        <p className="subtitle">도쿄, 요코스카, 요코하마, 사이타마, 후지산</p>
      </div>
      <div className="route-visual" aria-label="여행 동선 미니맵">
        <canvas id="routeCanvas" width="520" height="180" />
      </div>
    </header>
  );
}

function NowView() {
  return (
    <section className="tab-panel is-active" id="nowPanel" data-view-panel="now">
      <section className="now-dashboard">
        <p className="now-clock" id="nowClock">현재 시간 확인 중</p>
        <article className="now-current-card" id="nowCurrentCard">
          <div>
            <p className="panel-kicker" id="nowKicker">지금</p>
            <h2 id="nowTitle">현재 일정 확인</h2>
            <p id="nowMeta" />
            <p className="now-countdown" id="nowCountdown" hidden />
          </div>
          <div className="now-card-side">
            <span className="status-pill" id="nowStatus">대기</span>
            <div className="now-actions" id="nowActions">
              <ActionButton variant="neutralSolid" size="large" id="nowMapButton" type="button" data-now-action="map">지도에서 보기</ActionButton>
              <ActionButton asChild variant="neutralWeak" size="large">
                <a id="nowGoogleMapsLink" href="#" target="_blank" rel="noreferrer">Google Maps</a>
              </ActionButton>
              <ActionButton variant="ghost" size="large" type="button" data-now-action="schedule">전체 일정</ActionButton>
            </div>
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
          <div className="today-timeline" id="weekCalendar" aria-label="선택한 날짜 일정" />
        </section>
      </section>
    </section>
  );
}

function ScheduleView() {
  return (
    <section className="tab-panel" id="schedulePanel" data-view-panel="schedule" hidden>
      <section className="schedule-progress-card" aria-label="여행 일정 진행률">
        <div>
          <span className="metric-label">전체 일정 진행</span>
          <strong id="completionMetric">0%</strong>
        </div>
        <div className="schedule-progress-detail">
          <span id="checkedMetric">0 / 0</span>
          <span className="metric-sub">완료</span>
        </div>
        <div className="meter" aria-hidden="true"><span id="completionBar" /></div>
      </section>
      <nav className="day-tabs" aria-label="날짜 선택" id="dayTabs" />
      <article className="next-card" id="nextStopCard" />
      <article className="panel itinerary-panel">
        <div className="panel-heading">
          <div>
            <p className="panel-kicker" id="selectedDateLabel">일정</p>
            <h2 id="selectedDayTitle">날짜별 일정</h2>
          </div>
          <span className="status-pill" id="selectedDayStatus">0 / 0</span>
        </div>
        <div className="stop-list" id="stopList" />
      </article>
    </section>
  );
}

function PlaceDetail() {
  return (
    <section className="place-detail-view" id="placeDetailView" role="dialog" aria-modal="true" aria-labelledby="placeDetailTitle" hidden>
      <header className="place-detail-header">
        <button className="place-detail-back" id="placeDetailClose" type="button" aria-label="지도 상세정보로 돌아가기">‹</button>
        <div>
          <p>PLACE DETAIL</p>
          <strong id="placeDetailHeaderTitle">장소 상세</strong>
        </div>
      </header>
      <div className="place-detail-scroll" id="placeDetailScroll">
        <section className="place-detail-hero">
          <span className="place-detail-symbol" id="placeDetailSymbol" aria-hidden="true">旅</span>
          <p className="place-detail-day" id="placeDetailDay" />
          <h2 id="placeDetailTitle">장소 상세</h2>
          <p className="place-detail-summary" id="placeDetailSummary" />
        </section>
        <section className="place-detail-section place-detail-location">
          <p className="place-detail-label">대표 지점</p>
          <strong id="placeDetailMapPlace" />
          <p id="placeDetailAddress" />
        </section>
        <div className="place-detail-info" id="placeDetailInfo" />
        <p className="place-detail-notice" id="placeDetailNotice" hidden />
        <section className="place-detail-section">
          <p className="place-detail-label">놓치지 말 것</p>
          <ul className="place-detail-list" id="placeDetailHighlights" />
        </section>
        <section className="place-detail-section" id="placeDetailSubPlacesSection" hidden>
          <p className="place-detail-label">세부 장소</p>
          <div className="place-detail-subplaces" id="placeDetailSubPlaces" />
        </section>
        <section className="place-detail-section">
          <p className="place-detail-label">여행 메모</p>
          <ul className="place-detail-list muted" id="placeDetailTips" />
        </section>
        <p className="place-detail-updated">2026년 8월 여행 기준 · 운영정보는 방문 전 공식 페이지에서 다시 확인</p>
      </div>
      <footer className="place-detail-actions">
        <ActionButton asChild variant="neutralWeak" size="large">
          <a id="placeDetailOfficialLink" href="#" target="_blank" rel="noreferrer">공식 정보</a>
        </ActionButton>
        <ActionButton asChild variant="neutralSolid" size="large">
          <a id="placeDetailMapLink" href="#" target="_blank" rel="noreferrer">Google Maps</a>
        </ActionButton>
      </footer>
    </section>
  );
}

function MapView() {
  return (
    <section className="tab-panel" id="mapPanel" data-view-panel="map" hidden>
      <article className="panel map-panel">
        <div className="map-search-panel" id="mapSearchPanel" hidden>
          <div className="map-search" id="mapSearch" aria-label="장소 검색" />
          <button className="map-search-close" id="mapSearchClose" type="button" aria-label="검색 닫기">×</button>
        </div>
        <div className="map-day-filters" id="mapDayFilters" aria-label="여행 날짜 선택" />
        <div className="map-timeline" id="mapTimeline" aria-label="선택한 날짜의 방문 장소" />
        <div className="map-canvas" id="mapCanvas" role="application" aria-label="여행 장소 지도" />
        <section className="map-offline-panel" id="mapOfflinePanel" aria-labelledby="mapOfflineTitle" hidden>
          <p className="panel-kicker">오프라인 지도 대신</p>
          <h2 id="mapOfflineTitle">저장된 장소와 주소</h2>
          <p>인터넷이 연결되면 지도가 자동으로 다시 열려요.</p>
          <div className="map-offline-list" id="mapOfflineList" />
        </section>
        <div className="map-floating-controls" aria-label="지도 기능">
          <button className="map-fab" id="mapSearchToggle" type="button" aria-label="장소 검색" aria-expanded="false">
            <span className="map-fab-search-icon" aria-hidden="true" />
          </button>
          <button className="map-fab" id="mapLocateButton" type="button" aria-label="내 위치로 이동">
            <span className="map-fab-location-icon" aria-hidden="true" />
          </button>
        </div>
        <p className="map-control-status" id="mapControlStatus" role="status" hidden />
        <aside className="map-bottom-sheet" id="mapBottomSheet" hidden aria-live="polite">
          <button className="map-sheet-close" id="mapSheetClose" type="button" aria-label="장소 상세정보 닫기">×</button>
          <p className="panel-kicker" id="mapSheetDay">장소</p>
          <h2 id="mapSheetTitle">장소 상세정보</h2>
          <p id="mapSheetMeta" />
          <p className="map-sheet-address" id="mapSheetAddress" />
          <ul id="mapSheetItems" />
          <div className="map-sheet-actions">
            <ActionButton className="full" variant="neutralSolid" size="large" id="mapSheetDetailButton" type="button">장소 상세보기</ActionButton>
            <ActionButton asChild className="full" variant="neutralWeak" size="large">
              <a id="mapSheetOpenLink" href="#" target="_blank" rel="noreferrer">Google Maps에서 열기</a>
            </ActionButton>
          </div>
        </aside>
        <PlaceDetail />
      </article>
    </section>
  );
}

function PrepView() {
  return (
    <section className="tab-panel" id="prepPanel" data-view-panel="prep" hidden>
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
            <span className="status-pill" id="packingStatus">0 / 0</span>
          </div>
          <div className="packing-list" id="packingList" />
          <form className="inline-form" id="packingForm">
            <input name="item" type="text" maxLength="32" placeholder="추가 준비물" />
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
            <ActionButton variant="neutralSolid" type="button" id="exportButton">데이터 내보내기</ActionButton>
            <label className="button ghost" htmlFor="importInput">데이터 가져오기</label>
            <input id="importInput" type="file" accept="application/json" hidden />
            <ActionButton variant="criticalSolid" type="button" id="resetButton">체크 데이터 초기화</ActionButton>
          </section>
          <p className="data-manager-note">체크 상태와 직접 추가한 준비물은 현재 기기에 저장됩니다.</p>
        </details>
      </div>
    </section>
  );
}

function BottomNavigation() {
  const items = [
    ["now", "지금"],
    ["schedule", "일정"],
    ["map", "지도"],
    ["prep", "준비"]
  ];

  return (
    <nav className="bottom-nav" id="bottomNav" aria-label="주요 메뉴">
      {items.map(([view, label], index) => (
        <button
          className="bottom-nav-item"
          type="button"
          data-view={view}
          aria-current={index === 0 ? "page" : undefined}
          aria-controls={`${view}Panel`}
          key={view}
        >
          <span className={`nav-icon nav-icon-${view}`} aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default function App() {
  useEffect(() => {
    import("../app.js");
  }, []);

  return (
    <>
      <div className="offline-banner" id="offlineBanner" role="status" hidden>
        오프라인 상태예요. 저장된 일정과 주소는 계속 확인할 수 있어요.
      </div>
      <div className="app-shell">
        <Header />
        <main className="tab-content">
          <NowView />
          <ScheduleView />
          <MapView />
          <PrepView />
        </main>
      </div>
      <div className="update-toast" id="updateToast" role="status" hidden>
        <span>새 버전을 사용할 수 있어요.</span>
        <button type="button" id="updateButton">지금 업데이트</button>
      </div>
      <BottomNavigation />
    </>
  );
}
