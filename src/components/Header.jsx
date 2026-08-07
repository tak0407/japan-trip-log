import { useCallback, useEffect, useRef } from "react";
import { useTrip } from "../state/TripContext.jsx";

// Mirrors drawRouteCanvas() in app.js — same geometry, colors and label offsets.
const ROUTE_POINTS = [
  { x: 0.13, y: 0.34, label: "Ueno" },
  { x: 0.27, y: 0.24, label: "Asakusa" },
  { x: 0.40, y: 0.45, label: "Shibuya" },
  { x: 0.58, y: 0.62, label: "Yokohama" },
  { x: 0.70, y: 0.36, label: "Omiya" },
  { x: 0.84, y: 0.66, label: "Fuji" }
];

function drawRouteCanvas(canvas) {
  if (!canvas) return;

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

  ctx.strokeStyle = "#286f9e";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ROUTE_POINTS.forEach((point, index) => {
    const x = point.x * w;
    const y = point.y * h;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ROUTE_POINTS.forEach((point, index) => {
    const x = point.x * w;
    const y = point.y * h;
    ctx.fillStyle = index === 0 ? "#2d7a58" : "#ffffff";
    ctx.strokeStyle = index === ROUTE_POINTS.length - 1 ? "#b7791f" : "#286f9e";
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

export default function Header() {
  const { state } = useTrip();
  const canvasRef = useRef(null);

  const redraw = useCallback(() => {
    drawRouteCanvas(canvasRef.current);
  }, []);

  // app.js redrew at the end of render() whenever the active view was not the map.
  useEffect(() => {
    if (state.activeView === "map") return;
    redraw();
  }, [state.activeView, redraw]);

  // app.js redrew unconditionally on window resize.
  useEffect(() => {
    window.addEventListener("resize", redraw);
    return () => window.removeEventListener("resize", redraw);
  }, [redraw]);

  return (
    <header className="topbar">
      <div className="brand-block">
        <p className="eyebrow">2026.08.11 - 08.15</p>
        <h1>Japan Trip Log</h1>
        <p className="subtitle">도쿄, 요코스카, 요코하마, 사이타마, 후지산</p>
      </div>
      <div className="route-visual" aria-label="여행 동선 미니맵">
        <canvas id="routeCanvas" width="520" height="180" ref={canvasRef} />
      </div>
    </header>
  );
}
