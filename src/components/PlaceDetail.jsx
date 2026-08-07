import { useEffect, useRef, useState } from "react";
import { ActionButton } from "@seed-design/react";
import { PLACE_DETAILS } from "../data/trip.js";
import { useTrip } from "../state/TripContext.jsx";

const EXIT_TIMEOUT = 280;

function prefersReducedMotion() {
  return typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function PlaceDetail() {
  const { placeDetail, closePlaceDetail } = useTrip();
  const [entry, setEntry] = useState(null);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const viewRef = useRef(null);
  const scrollRef = useRef(null);
  const closeRef = useRef(null);
  const tokenRef = useRef(0);

  // Mirrors showAnimated/hideAnimated in app.js: the element stays mounted and the
  // `hidden` attribute + `is-closing` class drive the detail-enter / detail-exit
  // keyframes declared in styles.css.
  useEffect(() => {
    if (placeDetail) {
      tokenRef.current += 1;
      setEntry(placeDetail);
      setClosing(false);
      setVisible(true);
      return undefined;
    }

    if (!visible) return undefined;

    const token = tokenRef.current + 1;
    tokenRef.current = token;

    if (prefersReducedMotion()) {
      setVisible(false);
      setClosing(false);
      return undefined;
    }

    setClosing(true);

    let finished = false;
    const finish = () => {
      if (finished || tokenRef.current !== token) return;
      finished = true;
      setClosing(false);
      setVisible(false);
    };
    const node = viewRef.current;
    node?.addEventListener("animationend", finish, { once: true });
    const timer = window.setTimeout(finish, EXIT_TIMEOUT);

    return () => {
      window.clearTimeout(timer);
      node?.removeEventListener("animationend", finish);
    };
  }, [placeDetail, visible]);

  useEffect(() => {
    if (!placeDetail) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    closeRef.current?.focus();
  }, [placeDetail]);

  useEffect(() => {
    if (!visible || closing) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closePlaceDetail();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible, closing, closePlaceDetail]);

  const stop = entry?.stop;
  const detail = stop ? PLACE_DETAILS[stop.id] : null;
  const isOpen = visible && Boolean(detail);

  const infoItems = detail
    ? [
      ["운영시간", detail.hours],
      ["입장·요금", detail.fee],
      ["교통", detail.transit],
      ["체류시간", detail.duration],
      ["예약", detail.reservation]
    ]
    : [];
  const subPlaces = stop?.subPlaces || [];

  return (
    <section
      className={closing ? "place-detail-view is-closing" : "place-detail-view"}
      id="placeDetailView"
      role="dialog"
      aria-modal="true"
      aria-labelledby="placeDetailTitle"
      hidden={!isOpen}
      data-return-view={entry?.returnView || "map"}
      ref={viewRef}
    >
      <header className="place-detail-header">
        <button
          className="place-detail-back"
          id="placeDetailClose"
          type="button"
          aria-label="지도 상세정보로 돌아가기"
          ref={closeRef}
          onClick={closePlaceDetail}
        >‹</button>
        <div>
          <p>PLACE DETAIL</p>
          <strong id="placeDetailHeaderTitle">{stop ? (stop.mapPlace || stop.title) : "장소 상세"}</strong>
        </div>
      </header>
      <div className="place-detail-scroll" id="placeDetailScroll" ref={scrollRef}>
        <section className="place-detail-hero">
          <span className="place-detail-symbol" id="placeDetailSymbol" aria-hidden="true">{detail ? detail.symbol : "旅"}</span>
          <p className="place-detail-day" id="placeDetailDay">{stop ? `${stop.dayLabel} · ${stop.time} · ${stop.type}` : ""}</p>
          <h2 id="placeDetailTitle">{stop ? stop.title : "장소 상세"}</h2>
          <p className="place-detail-summary" id="placeDetailSummary">{detail ? detail.summary : ""}</p>
        </section>
        <section className="place-detail-section place-detail-location">
          <p className="place-detail-label">대표 지점</p>
          <strong id="placeDetailMapPlace">{stop ? (stop.mapPlace || stop.title) : ""}</strong>
          <p id="placeDetailAddress">{stop ? stop.address : ""}</p>
        </section>
        <div className="place-detail-info" id="placeDetailInfo">
          {infoItems.map(([label, value]) => (
            <div className="place-detail-info-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <p className="place-detail-notice" id="placeDetailNotice" hidden={!detail?.notice}>{detail?.notice || ""}</p>
        <section className="place-detail-section">
          <p className="place-detail-label">놓치지 말 것</p>
          <ul className="place-detail-list" id="placeDetailHighlights">
            {(detail?.highlights || []).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="place-detail-section" id="placeDetailSubPlacesSection" hidden={!subPlaces.length}>
          <p className="place-detail-label">세부 장소</p>
          <div className="place-detail-subplaces" id="placeDetailSubPlaces">
            {subPlaces.map((place, index) => (
              <a className="place-detail-subplace" href={place.map} target="_blank" rel="noreferrer" key={place.id || place.title}>
                <span>{index + 1}</span>
                <span>
                  <strong>{place.title}</strong>
                  <small>{place.address}</small>
                </span>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </section>
        <section className="place-detail-section">
          <p className="place-detail-label">여행 메모</p>
          <ul className="place-detail-list muted" id="placeDetailTips">
            {(detail?.tips || []).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <p className="place-detail-updated">2026년 8월 여행 기준 · 운영정보는 방문 전 공식 페이지에서 다시 확인</p>
      </div>
      <footer className="place-detail-actions">
        <ActionButton asChild variant="neutralWeak" size="large">
          <a id="placeDetailOfficialLink" href={detail?.officialUrl || "#"} target="_blank" rel="noreferrer">공식 정보</a>
        </ActionButton>
        <ActionButton asChild variant="neutralSolid" size="large">
          <a id="placeDetailMapLink" href={stop?.map || "#"} target="_blank" rel="noreferrer">Google Maps</a>
        </ActionButton>
      </footer>
    </section>
  );
}
