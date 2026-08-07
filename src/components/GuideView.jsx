import { useEffect, useRef, useState } from "react";
import { ActionButton } from "@seed-design/react";
import { GUIDES } from "../data/guides.js";
import { getStopById } from "../lib/tripUtils.js";
import { useTrip } from "../state/TripContext.jsx";

const EXIT_TIMEOUT = 280;

function prefersReducedMotion() {
  return typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Full-screen step-by-step guide overlay. Same mount-and-toggle animation
// pattern as PlaceDetail: `hidden` + `is-closing` drive the detail keyframes.
export default function GuideView() {
  const { guideStopId, closeGuide } = useTrip();
  const [entryStopId, setEntryStopId] = useState("");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const viewRef = useRef(null);
  const scrollRef = useRef(null);
  const closeRef = useRef(null);
  const tokenRef = useRef(0);

  useEffect(() => {
    if (guideStopId) {
      tokenRef.current += 1;
      setEntryStopId(guideStopId);
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
  }, [guideStopId, visible]);

  useEffect(() => {
    if (!guideStopId) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    closeRef.current?.focus();
  }, [guideStopId]);

  useEffect(() => {
    if (!visible || closing) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeGuide();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible, closing, closeGuide]);

  const guide = entryStopId ? GUIDES[entryStopId] : null;
  const stop = entryStopId ? getStopById(entryStopId) : null;
  const isOpen = visible && Boolean(guide);

  return (
    <section
      className={closing ? "place-detail-view guide-view is-closing" : "place-detail-view guide-view"}
      id="guideView"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guideTitle"
      hidden={!isOpen}
      ref={viewRef}
    >
      <header className="place-detail-header">
        <button
          className="place-detail-back"
          id="guideClose"
          type="button"
          aria-label="가이드 닫기"
          ref={closeRef}
          onClick={closeGuide}
        >‹</button>
        <div>
          <p>TRAVEL GUIDE</p>
          <strong id="guideHeaderTitle">{guide ? guide.title : "여행 가이드"}</strong>
        </div>
      </header>
      <div className="place-detail-scroll" id="guideScroll" ref={scrollRef}>
        <section className="place-detail-hero guide-hero">
          <p className="place-detail-day" id="guideDay">
            {stop ? `${stop.dayLabel} · ${stop.time} · ${stop.type}` : ""}
          </p>
          <h2 id="guideTitle">{guide ? guide.title : "여행 가이드"}</h2>
          <p className="place-detail-summary" id="guideSubtitle">{guide ? guide.subtitle : ""}</p>
        </section>
        {(guide?.sections || []).map((section, sectionIndex) => (
          <section className="place-detail-section guide-section" key={section.heading}>
            <p className="place-detail-label">{`${sectionIndex + 1}. ${section.heading}`}</p>
            <ol className="guide-steps">
              {section.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
        ))}
        {guide?.tips?.length ? (
          <section className="place-detail-section guide-section">
            <p className="place-detail-label">팁</p>
            <ul className="place-detail-list muted">
              {guide.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </section>
        ) : null}
        <p className="place-detail-updated">2026년 8월 초 기준 정보 · 요금과 운영은 출발 전 다시 확인</p>
      </div>
      <footer className="place-detail-actions guide-actions">
        {(guide?.links || []).map((link) => (
          <ActionButton asChild variant="neutralWeak" size="large" key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
          </ActionButton>
        ))}
        <ActionButton variant="neutralSolid" size="large" type="button" onClick={closeGuide}>확인</ActionButton>
      </footer>
    </section>
  );
}
