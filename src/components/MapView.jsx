import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ActionButton, Icon } from "@seed-design/react";
import { IconCrosshairLine, IconMagnifyingglassLine } from "@karrotmarket/react-monochrome-icon";
import {
  ACCOMMODATION,
  MAP_CENTER,
  MAP_COORDINATES,
  MAP_ZOOM,
  PLACE_DETAILS,
  TRIP_DAYS
} from "../data/trip.js";
import { getMapPoints, getMappableStops } from "../lib/tripUtils.js";
import { loadGoogleMaps } from "../lib/googleMaps.js";
import { useTrip } from "../state/TripContext.jsx";
import PlaceDetail from "./PlaceDetail.jsx";

const SHEET_EXIT_TIMEOUT = 280;
const SHEET_SNAP_TIMEOUT = 190;
const SHEET_DISMISS_DELTA = 96;
const SHEET_FLICK_VELOCITY = 0.55; // px/ms downward — a quick flick dismisses below the delta
const SHEET_FLICK_MIN_DELTA = 28;
const SHEET_MAX_UP_DELTA = 16; // rubber-band ceiling when dragging upward
const SHEET_DRAG_FADE_RANGE = 220; // px of drag mapped onto the fade progress var

function prefersReducedMotion() {
  return typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getVisibleStops(mapDayFilter) {
  return getMappableStops().filter((stop) => stop.dayId === mapDayFilter);
}

// Mirrors renderOfflineMapList() in app.js.
function OfflinePlaces({ visibleStops }) {
  const places = [
    {
      title: ACCOMMODATION.title,
      meta: "숙소 · 전 일정",
      address: ACCOMMODATION.address
    },
    ...visibleStops.map((stop) => ({
      title: stop.title,
      meta: `${stop.time} · ${stop.area}`,
      address: `${stop.mapPlace || stop.title} · ${stop.address}`
    }))
  ];

  return (
    <div className="map-offline-list" id="mapOfflineList">
      {places.map((place, index) => (
        <article className="map-offline-place" key={`${place.title}-${index}`}>
          <span>{index ? index : "H"}</span>
          <div>
            <strong>{place.title}</strong>
            <small>{place.meta}</small>
            <p>{place.address}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function MapView() {
  const {
    state,
    placeDetail,
    setMapDayFilter,
    setSelectedDayId,
    setSelectedMapStopId,
    openPlaceDetail,
    closePlaceDetail
  } = useTrip();

  const activeView = state.activeView;
  const mapDayFilter = state.mapDayFilter;
  const isMapView = activeView === "map";

  const visibleStops = useMemo(() => getVisibleStops(mapDayFilter), [mapDayFilter]);

  // ---- module globals from app.js, now instance-scoped refs -----------------
  const tripMapRef = useRef(null);
  const mapMarkersRef = useRef([]);
  const mapRouteLineRef = useRef(null);
  const markerByStopIdRef = useRef(new Map());
  const renderedMapDayFilterRef = useRef("");
  const placeSearchElementRef = useRef(null);
  const searchMarkerRef = useRef(null);
  const selectedSearchPlaceRef = useRef(null);
  const locationMarkerRef = useRef(null);
  const mapStatusTimerRef = useRef(0);
  const mapResizeFrameRef = useRef(0);
  const mapSheetDragRef = useRef(null);

  const panelRef = useRef(null);
  const canvasRef = useRef(null);
  const searchHostRef = useRef(null);
  const sheetRef = useRef(null);

  const [mapReady, setMapReady] = useState(false);
  const [isOffline, setIsOffline] = useState(() => typeof navigator !== "undefined" && !navigator.onLine);
  const [searchOpen, setSearchOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [locateBusy, setLocateBusy] = useState(false);

  const [sheet, setSheet] = useState(null);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetClosing, setSheetClosing] = useState(false);

  const sheetVisibleRef = useRef(false);
  const sheetTokenRef = useRef(0);
  const sheetTransientRef = useRef({ dragging: false, snapping: false, dismissing: false });
  const searchOpenRef = useRef(false);
  const activeViewRef = useRef(activeView);

  activeViewRef.current = activeView;
  searchOpenRef.current = searchOpen;

  // `is-dragging` / `is-snapping` are gesture-scoped classes that app.js toggled
  // imperatively; keep them out of React state (they change per pointer event)
  // but re-apply after every render so a re-render never drops them.
  const applySheetTransient = useCallback(() => {
    const node = sheetRef.current;
    if (!node) return;
    node.classList.toggle("is-dragging", sheetTransientRef.current.dragging);
    node.classList.toggle("is-snapping", sheetTransientRef.current.snapping);
    node.classList.toggle("is-dismissing", sheetTransientRef.current.dismissing);
  }, []);

  useLayoutEffect(applySheetTransient);

  const resetSheetDragStyles = useCallback(() => {
    sheetTransientRef.current = { dragging: false, snapping: false, dismissing: false };
    applySheetTransient();
    sheetRef.current?.style.removeProperty("--map-sheet-drag-y");
    sheetRef.current?.style.removeProperty("--map-sheet-drag-p");
  }, [applySheetTransient]);

  // showAnimated(nodes.mapBottomSheet) in app.js
  const showSheet = useCallback((next) => {
    sheetTokenRef.current += 1;
    resetSheetDragStyles();
    setSheet(next);
    setSheetClosing(false);
    setSheetVisible(true);
    sheetVisibleRef.current = true;
  }, [resetSheetDragStyles]);

  // Direct `nodes.mapBottomSheet.hidden = true` in app.js (no exit animation).
  const hideSheetImmediate = useCallback(() => {
    sheetTokenRef.current += 1;
    resetSheetDragStyles();
    setSheetClosing(false);
    setSheetVisible(false);
    sheetVisibleRef.current = false;
  }, [resetSheetDragStyles]);

  // hideAnimated(nodes.mapBottomSheet) in app.js
  const hideSheetAnimated = useCallback(() => {
    if (!sheetVisibleRef.current) return;
    const node = sheetRef.current;
    sheetTokenRef.current += 1;
    const token = sheetTokenRef.current;
    resetSheetDragStyles();

    if (prefersReducedMotion() || !node) {
      setSheetClosing(false);
      setSheetVisible(false);
      sheetVisibleRef.current = false;
      return;
    }

    setSheetClosing(true);
    let finished = false;
    const finish = () => {
      if (finished || sheetTokenRef.current !== token) return;
      finished = true;
      setSheetClosing(false);
      setSheetVisible(false);
      sheetVisibleRef.current = false;
    };
    node.addEventListener("animationend", finish, { once: true });
    window.setTimeout(finish, SHEET_EXIT_TIMEOUT);
  }, [resetSheetDragStyles]);

  // Drag-dismiss variant: slide out from the current dragged position instead of
  // snapping back to 0 and replaying the sheet-exit keyframe (which visibly jumps).
  const dismissSheetFromDrag = useCallback(() => {
    const node = sheetRef.current;
    if (!sheetVisibleRef.current) return;
    if (prefersReducedMotion() || !node) {
      hideSheetImmediate();
      return;
    }
    sheetTokenRef.current += 1;
    const token = sheetTokenRef.current;
    sheetTransientRef.current = { dragging: false, snapping: false, dismissing: true };
    applySheetTransient();
    node.style.setProperty("--map-sheet-drag-y", `${node.offsetHeight + 120}px`);
    node.style.setProperty("--map-sheet-drag-p", "1");
    let finished = false;
    const finish = () => {
      if (finished || sheetTokenRef.current !== token) return;
      finished = true;
      hideSheetImmediate();
    };
    node.addEventListener("transitionend", finish, { once: true });
    window.setTimeout(finish, SHEET_EXIT_TIMEOUT);
  }, [applySheetTransient, hideSheetImmediate]);

  // ---- status pill ---------------------------------------------------------
  const showMapControlStatus = useCallback((message, duration = 2600) => {
    window.clearTimeout(mapStatusTimerRef.current);
    setStatusMessage(message);
    mapStatusTimerRef.current = window.setTimeout(() => setStatusMessage(""), duration);
  }, []);

  // ---- search --------------------------------------------------------------
  const syncMapSearchViewport = useCallback(() => {
    const viewportOffset = Math.max(0, window.visualViewport?.offsetTop || 0);
    panelRef.current?.style.setProperty("--map-search-viewport-offset", `${viewportOffset}px`);
  }, []);

  const closeMapSearch = useCallback(() => {
    document.activeElement?.blur();
    setSearchOpen(false);
    searchOpenRef.current = false;
    panelRef.current?.style.removeProperty("--map-search-viewport-offset");
  }, []);

  const openMapSearch = useCallback(() => {
    syncMapSearchViewport();
    setSearchOpen(true);
    searchOpenRef.current = true;
  }, [syncMapSearchViewport]);

  const clearSearchMarker = useCallback(() => {
    if (searchMarkerRef.current) searchMarkerRef.current.map = null;
    searchMarkerRef.current = null;
    selectedSearchPlaceRef.current = null;
  }, []);

  const openSearchPlaceSheet = useCallback((place) => {
    showSheet({ kind: "search", place });
  }, [showSheet]);

  const showSearchPlace = useCallback((place) => {
    clearSearchMarker();
    const position = { lat: place.location.lat(), lng: place.location.lng() };
    const pin = new google.maps.marker.PinElement({
      glyphText: "•",
      background: "#b7791f",
      borderColor: "#ffffff",
      glyphColor: "#ffffff",
      scale: 1.15
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: tripMapRef.current,
      position,
      title: place.displayName || "검색한 장소",
      content: pin,
      gmpClickable: true
    });
    searchMarkerRef.current = marker;
    selectedSearchPlaceRef.current = place;
    marker.addEventListener("gmp-click", () => openSearchPlaceSheet(place));
    tripMapRef.current?.panTo(position);
    tripMapRef.current?.setZoom(16);
    closeMapSearch();
    openSearchPlaceSheet(place);
  }, [clearSearchMarker, closeMapSearch, openSearchPlaceSheet]);

  // Handlers referenced from imperative Google Maps listeners: kept in refs so
  // the listeners registered once never read a stale closure.
  const showSearchPlaceRef = useRef(showSearchPlace);
  showSearchPlaceRef.current = showSearchPlace;

  const openMapSheet = useCallback((stop, subPlace = null) => {
    setSelectedMapStopId(stop.id);
    showSheet({ kind: "stop", stop, subPlace });
  }, [setSelectedMapStopId, showSheet]);
  const openMapSheetRef = useRef(openMapSheet);
  openMapSheetRef.current = openMapSheet;

  const openAccommodationSheet = useCallback(() => {
    showSheet({ kind: "accommodation" });
  }, [showSheet]);
  const openAccommodationSheetRef = useRef(openAccommodationSheet);
  openAccommodationSheetRef.current = openAccommodationSheet;

  const initializePlaceSearch = useCallback(async () => {
    if (placeSearchElementRef.current || !window.google?.maps) return;
    const { PlaceAutocompleteElement } = await google.maps.importLibrary("places");
    if (placeSearchElementRef.current) return;
    const element = new PlaceAutocompleteElement({ includedRegionCodes: ["jp"] });
    element.placeholder = "일본 장소 검색";
    element.setAttribute("aria-label", "일본 장소 검색");
    element.addEventListener("gmp-select", async (event) => {
      const placePrediction = event.placePrediction;
      if (!placePrediction) return;
      const place = placePrediction.toPlace();
      await place.fetchFields({ fields: ["displayName", "formattedAddress", "location", "googleMapsURI"] });
      if (!place.location) return;
      showSearchPlaceRef.current(place);
    });
    placeSearchElementRef.current = element;
    searchHostRef.current?.append(element);
  }, []);

  // ---- map instance --------------------------------------------------------
  // Lazy: the map is only created the first time the 지도 tab is shown, then kept.
  useEffect(() => {
    if (!isMapView || tripMapRef.current || isOffline) return undefined;
    let cancelled = false;
    loadGoogleMaps().then(() => {
      if (cancelled || tripMapRef.current || !canvasRef.current) return;
      tripMapRef.current = new google.maps.Map(canvasRef.current, {
        center: { lat: MAP_CENTER[0], lng: MAP_CENTER[1] },
        zoom: MAP_ZOOM,
        mapId: "DEMO_MAP_ID",
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        clickableIcons: false,
        isFractionalZoomEnabled: true,
        gestureHandling: "greedy"
      });
      setMapReady(true);
      initializePlaceSearch().catch((error) => console.error(error));
    }).catch((error) => console.error(error));
    return () => { cancelled = true; };
  }, [isMapView, isOffline, initializePlaceSearch]);

  // ---- markers + route line (renderMap body) -------------------------------
  useEffect(() => {
    const map = tripMapRef.current;
    if (!map || !window.google?.maps) return;
    if (renderedMapDayFilterRef.current === mapDayFilter && mapMarkersRef.current.length) return;

    mapMarkersRef.current.forEach((marker) => { marker.map = null; });
    if (mapRouteLineRef.current) {
      mapRouteLineRef.current.setMap(null);
      mapRouteLineRef.current = null;
    }
    markerByStopIdRef.current.clear();

    const mapPoints = getMapPoints(visibleStops);
    mapMarkersRef.current = mapPoints.map((point) => {
      const [lat, lng] = point.coordinates;
      const pin = new google.maps.marker.PinElement({
        glyphText: point.label,
        background: "#286f9e",
        borderColor: "#ffffff",
        glyphColor: "#ffffff"
      });
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat, lng },
        title: point.title,
        content: pin,
        gmpClickable: true
      });
      marker.addEventListener("gmp-click", () => {
        openMapSheetRef.current(point.stop, point.id === point.stop.id ? null : point);
      });
      markerByStopIdRef.current.set(point.id, marker);
      if (!markerByStopIdRef.current.has(point.stop.id)) markerByStopIdRef.current.set(point.stop.id, marker);
      return marker;
    });

    const [hotelLat, hotelLng] = ACCOMMODATION.coordinates;
    const hotelPin = new google.maps.marker.PinElement({
      glyphText: "H",
      background: "#2f7d68",
      borderColor: "#ffffff",
      glyphColor: "#ffffff"
    });
    const hotelMarker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: hotelLat, lng: hotelLng },
      title: ACCOMMODATION.title,
      content: hotelPin,
      gmpClickable: true
    });
    hotelMarker.addEventListener("gmp-click", () => openAccommodationSheetRef.current());
    mapMarkersRef.current.push(hotelMarker);
    markerByStopIdRef.current.set(ACCOMMODATION.id, hotelMarker);

    const routePath = mapPoints.map((point) => {
      const [lat, lng] = point.coordinates;
      return { lat, lng };
    });
    if (canvasRef.current) canvasRef.current.dataset.routePoints = String(routePath.length);
    if (routePath.length > 1) {
      mapRouteLineRef.current = new google.maps.Polyline({
        map,
        path: routePath,
        geodesic: true,
        strokeColor: "#286f9e",
        strokeOpacity: 0.9,
        strokeWeight: 5,
        clickable: false
      });
    }

    if (visibleStops.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      mapPoints.forEach((point) => {
        const [lat, lng] = point.coordinates;
        bounds.extend({ lat, lng });
      });
      map.fitBounds(bounds, { top: 210, right: 40, bottom: 130, left: 40 });
    } else if (visibleStops.length === 1) {
      const [lat, lng] = MAP_COORDINATES[visibleStops[0].id];
      map.setCenter({ lat, lng });
      map.setZoom(15);
    } else {
      map.setCenter({ lat: MAP_CENTER[0], lng: MAP_CENTER[1] });
      map.setZoom(MAP_ZOOM);
    }
    renderedMapDayFilterRef.current = mapDayFilter;
  }, [mapDayFilter, mapReady, visibleStops]);

  // renderMap() hid the sheet on every map render (view activation / day change).
  useEffect(() => {
    if (!isMapView) return;
    hideSheetImmediate();
  }, [isMapView, mapDayFilter, hideSheetImmediate]);

  // ---- resize syncing (syncTripMapSize) ------------------------------------
  const syncTripMapSize = useCallback(() => {
    const map = tripMapRef.current;
    if (!map || activeViewRef.current !== "map" || !window.google?.maps) return;
    if (mapResizeFrameRef.current) cancelAnimationFrame(mapResizeFrameRef.current);
    const center = map.getCenter();
    const zoom = map.getZoom();
    mapResizeFrameRef.current = requestAnimationFrame(() => {
      google.maps.event.trigger(map, "resize");
      if (center && Number.isFinite(zoom)) map.moveCamera({ center, zoom });
      mapResizeFrameRef.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", syncTripMapSize);
    window.addEventListener("orientationchange", syncTripMapSize);
    let observer = null;
    if ("ResizeObserver" in window && canvasRef.current) {
      observer = new ResizeObserver(syncTripMapSize);
      observer.observe(canvasRef.current);
    }
    return () => {
      window.removeEventListener("resize", syncTripMapSize);
      window.removeEventListener("orientationchange", syncTripMapSize);
      observer?.disconnect();
    };
  }, [syncTripMapSize]);

  useEffect(() => {
    if (!isMapView) return;
    syncTripMapSize();
  }, [isMapView, mapReady, syncTripMapSize]);

  // ---- connectivity (updateConnectivityStatus) -----------------------------
  useEffect(() => {
    const update = () => setIsOffline(!navigator.onLine);
    const onVisibilityChange = () => {
      if (document.hidden) return;
      update();
    };
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isOffline && searchOpenRef.current) closeMapSearch();
  }, [isOffline, closeMapSearch]);

  // ---- iOS keyboard / visualViewport ---------------------------------------
  useEffect(() => {
    if (!searchOpen) return undefined;
    syncMapSearchViewport();
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      syncMapSearchViewport();
      inner = requestAnimationFrame(() => placeSearchElementRef.current?.focus({ preventScroll: true }));
    });
    return () => {
      cancelAnimationFrame(outer);
      if (inner) cancelAnimationFrame(inner);
    };
  }, [searchOpen, syncMapSearchViewport]);

  useEffect(() => {
    if (!window.visualViewport) return undefined;
    const handle = () => {
      if (searchOpenRef.current) syncMapSearchViewport();
    };
    window.visualViewport.addEventListener("resize", handle);
    window.visualViewport.addEventListener("scroll", handle);
    return () => {
      window.visualViewport.removeEventListener("resize", handle);
      window.visualViewport.removeEventListener("scroll", handle);
    };
  }, [syncMapSearchViewport]);

  // ---- place detail interplay (Phase 2C notes) ------------------------------
  useEffect(() => {
    if (placeDetail) hideSheetImmediate();
  }, [placeDetail, hideSheetImmediate]);

  const previousPlaceDetailRef = useRef(null);
  useEffect(() => {
    const previous = previousPlaceDetailRef.current;
    previousPlaceDetailRef.current = placeDetail;
    if (!previous || placeDetail) return undefined;
    if (previous.returnView === "schedule") return undefined;
    if (activeViewRef.current !== "map") return undefined;
    const delay = prefersReducedMotion() ? 0 : SHEET_EXIT_TIMEOUT;
    const timer = window.setTimeout(() => {
      document.getElementById("mapSheetDetailButton")?.focus();
    }, delay);
    return () => window.clearTimeout(timer);
  }, [placeDetail]);

  useEffect(() => () => {
    window.clearTimeout(mapStatusTimerRef.current);
    if (mapResizeFrameRef.current) cancelAnimationFrame(mapResizeFrameRef.current);
  }, []);

  // ---- current location -----------------------------------------------------
  const showCurrentLocation = useCallback(() => {
    if (!navigator.geolocation || !tripMapRef.current) {
      showMapControlStatus("이 기기에서는 현재 위치를 사용할 수 없어요.", 4000);
      return;
    }

    setLocateBusy(true);
    showMapControlStatus("현재 위치를 확인하고 있어요.", 10000);
    navigator.geolocation.getCurrentPosition((position) => {
      const current = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      if (locationMarkerRef.current) locationMarkerRef.current.map = null;
      const pin = new google.maps.marker.PinElement({
        glyphText: "●",
        background: "#2f7d68",
        borderColor: "#ffffff",
        glyphColor: "#ffffff",
        scale: 1.05
      });
      locationMarkerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: tripMapRef.current,
        position: current,
        title: "내 위치",
        content: pin,
        zIndex: 100
      });
      tripMapRef.current.panTo(current);
      tripMapRef.current.setZoom(17);
      showMapControlStatus("현재 위치로 이동했어요.");
      setLocateBusy(false);
    }, () => {
      showMapControlStatus("위치 권한을 허용한 뒤 다시 눌러주세요.", 4500);
      setLocateBusy(false);
    }, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    });
  }, [showMapControlStatus]);

  // ---- drag-to-dismiss gesture ---------------------------------------------
  const onHandlePointerDown = useCallback((event) => {
    if (!sheetVisibleRef.current || sheetTransientRef.current.dismissing) return;
    mapSheetDragRef.current = {
      pointerId: event.pointerId,
      startY: event.clientY,
      deltaY: 0,
      prevY: event.clientY,
      prevT: event.timeStamp,
      velocity: 0
    };
    sheetRef.current?.setPointerCapture(event.pointerId);
    sheetTransientRef.current = { dragging: true, snapping: false, dismissing: false };
    applySheetTransient();
    event.preventDefault();
  }, [applySheetTransient]);

  const onSheetPointerMove = useCallback((event) => {
    const drag = mapSheetDragRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;
    const raw = event.clientY - drag.startY;
    // Downward follows the finger; upward gets rubber-band resistance.
    drag.deltaY = raw >= 0
      ? raw
      : -Math.min(SHEET_MAX_UP_DELTA, -raw * 0.25);
    const dt = event.timeStamp - drag.prevT;
    if (dt > 0) {
      const instant = (event.clientY - drag.prevY) / dt;
      drag.velocity = drag.velocity * 0.4 + instant * 0.6;
      drag.prevY = event.clientY;
      drag.prevT = event.timeStamp;
    }
    const node = sheetRef.current;
    if (node) {
      node.style.setProperty("--map-sheet-drag-y", `${drag.deltaY}px`);
      node.style.setProperty(
        "--map-sheet-drag-p",
        `${Math.min(1, Math.max(0, drag.deltaY / SHEET_DRAG_FADE_RANGE))}`
      );
    }
    event.preventDefault();
  }, []);

  const snapSheetBack = useCallback((clearDragY) => {
    sheetTransientRef.current = { dragging: false, snapping: true, dismissing: false };
    applySheetTransient();
    sheetRef.current?.style.setProperty("--map-sheet-drag-y", "0px");
    sheetRef.current?.style.setProperty("--map-sheet-drag-p", "0");
    window.setTimeout(() => {
      sheetTransientRef.current = { ...sheetTransientRef.current, snapping: false };
      applySheetTransient();
      if (clearDragY) {
        sheetRef.current?.style.removeProperty("--map-sheet-drag-y");
        sheetRef.current?.style.removeProperty("--map-sheet-drag-p");
      }
    }, SHEET_SNAP_TIMEOUT);
  }, [applySheetTransient]);

  const onSheetPointerUp = useCallback((event) => {
    const drag = mapSheetDragRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;
    const deltaY = drag.deltaY;
    const velocity = drag.velocity;
    mapSheetDragRef.current = null;
    sheetRef.current?.releasePointerCapture?.(event.pointerId);
    const flicked = deltaY > SHEET_FLICK_MIN_DELTA && velocity > SHEET_FLICK_VELOCITY;
    if (deltaY > SHEET_DISMISS_DELTA || flicked) {
      dismissSheetFromDrag();
      return;
    }
    snapSheetBack(true);
  }, [dismissSheetFromDrag, snapSheetBack]);

  const onSheetPointerCancel = useCallback(() => {
    if (!mapSheetDragRef.current) return;
    mapSheetDragRef.current = null;
    snapSheetBack(false);
  }, [snapSheetBack]);

  // ---- click handlers -------------------------------------------------------
  const onDayFilterClick = useCallback((dayId) => {
    setMapDayFilter(dayId);
    setSelectedDayId(dayId);
    clearSearchMarker();
    if (placeDetail) closePlaceDetail();
    hideSheetImmediate();
  }, [setMapDayFilter, setSelectedDayId, clearSearchMarker, placeDetail, closePlaceDetail, hideSheetImmediate]);

  const onAccommodationClick = useCallback(() => {
    const map = tripMapRef.current;
    if (!map) return;
    const [lat, lng] = ACCOMMODATION.coordinates;
    map.panTo({ lat, lng });
    map.setZoom(17);
    openAccommodationSheet();
  }, [openAccommodationSheet]);

  const onTimelineStopClick = useCallback((stop) => {
    const map = tripMapRef.current;
    if (!map) return;
    const points = getMapPoints([stop]);
    if (points.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      points.forEach((point) => {
        const [lat, lng] = point.coordinates;
        bounds.extend({ lat, lng });
      });
      map.fitBounds(bounds, { top: 210, right: 40, bottom: 300, left: 40 });
    } else {
      const [lat, lng] = points[0].coordinates;
      map.panTo({ lat, lng });
      map.setZoom(15);
    }
    openMapSheet(stop);
  }, [openMapSheet]);

  const onSubPlaceClick = useCallback((place) => {
    const map = tripMapRef.current;
    const stop = sheet?.kind === "stop" ? sheet.stop : null;
    if (!map || !stop || !place) return;
    const [lat, lng] = place.coordinates;
    map.panTo({ lat, lng });
    map.setZoom(17);
    openMapSheet(stop, place);
  }, [sheet, openMapSheet]);

  const onDetailButtonClick = useCallback(() => {
    if (sheet?.kind !== "stop") return;
    const stop = sheet.stop;
    if (!PLACE_DETAILS[stop.id]) return;
    openPlaceDetail(stop, "map");
  }, [sheet, openPlaceDetail]);

  // ---- sheet content (openMapSheet / openSearchPlaceSheet / openAccommodationSheet)
  let sheetDay = "장소";
  let sheetTitle = "장소 상세정보";
  let sheetMeta = "";
  let sheetAddress = "";
  let sheetSubPlaces = [];
  let sheetDetailHidden = true;
  let sheetDetailStopId;
  let sheetOpenHref = "#";

  if (sheet?.kind === "stop") {
    const { stop, subPlace } = sheet;
    sheetDay = `${stop.dayLabel} · ${stop.dayTitle}`;
    sheetTitle = subPlace?.title || stop.title;
    sheetMeta = subPlace
      ? `${stop.time} · ${stop.title}의 세부 장소`
      : `${stop.time} · ${stop.area} · ${stop.type}`;
    sheetAddress = subPlace ? subPlace.address : `${stop.mapPlace || stop.title} · ${stop.address}`;
    sheetSubPlaces = stop.subPlaces?.length && !subPlace ? stop.subPlaces : [];
    sheetDetailHidden = !PLACE_DETAILS[stop.id];
    sheetDetailStopId = stop.id;
    sheetOpenHref = subPlace?.map || stop.map;
  } else if (sheet?.kind === "search") {
    const place = sheet.place;
    const position = { lat: place.location.lat(), lng: place.location.lng() };
    const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${position.lat},${position.lng}`)}`;
    sheetDay = "검색한 장소";
    sheetTitle = place.displayName || "장소";
    sheetMeta = place.formattedAddress || "주소 정보 없음";
    sheetAddress = "";
    sheetOpenHref = place.googleMapsURI || fallbackUrl;
  } else if (sheet?.kind === "accommodation") {
    sheetDay = "숙소 · 전 일정";
    sheetTitle = ACCOMMODATION.title;
    sheetMeta = ACCOMMODATION.subtitle;
    sheetAddress = ACCOMMODATION.address;
    sheetOpenHref = ACCOMMODATION.map;
  }

  const panelClassName = ["tab-panel", isMapView ? "is-active" : "", searchOpen ? "is-searching" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={panelClassName}
      id="mapPanel"
      data-view-panel="map"
      hidden={!isMapView}
      ref={panelRef}
    >
      <article className="panel map-panel">
        <div className="map-search-panel" id="mapSearchPanel" hidden={!searchOpen}>
          <div className="map-search" id="mapSearch" aria-label="장소 검색" ref={searchHostRef} />
          <button
            className="map-search-close"
            id="mapSearchClose"
            type="button"
            aria-label="검색 닫기"
            onClick={closeMapSearch}
          >×</button>
        </div>
        <div className="map-day-filters" id="mapDayFilters" aria-label="여행 날짜 선택">
          {TRIP_DAYS.map((day) => (
            <button
              className="map-day-filter"
              type="button"
              data-map-day-filter={day.id}
              aria-pressed={day.id === mapDayFilter ? "true" : "false"}
              key={day.id}
              onClick={() => onDayFilterClick(day.id)}
            >{day.label.split(" ")[0]}</button>
          ))}
        </div>
        <div className="map-timeline" id="mapTimeline" aria-label="선택한 날짜의 방문 장소">
          <button
            className="map-timeline-stop is-accommodation"
            type="button"
            data-map-accommodation=""
            onClick={onAccommodationClick}
          >
            <span className="map-timeline-time">숙소</span>
            <span className="map-timeline-dot">H</span>
            <strong>{ACCOMMODATION.title}</strong>
          </button>
          {visibleStops.length
            ? visibleStops.map((stop, index) => (
              <button
                className="map-timeline-stop"
                type="button"
                data-map-timeline-stop-id={stop.id}
                key={stop.id}
                onClick={() => onTimelineStopClick(stop)}
              >
                <span className="map-timeline-time">{stop.time}</span>
                <span className="map-timeline-dot">{index + 1}</span>
                <strong>{stop.title}</strong>
                {stop.subPlaces?.length ? <small>{`${stop.subPlaces.length}곳`}</small> : null}
              </button>
            ))
            : <span className="map-timeline-empty">장소 확정 전</span>}
        </div>
        <div className="map-canvas" id="mapCanvas" role="application" aria-label="여행 장소 지도" ref={canvasRef} />
        <section
          className="map-offline-panel"
          id="mapOfflinePanel"
          aria-labelledby="mapOfflineTitle"
          hidden={!isOffline || !isMapView}
        >
          <p className="panel-kicker">오프라인 지도 대신</p>
          <h2 id="mapOfflineTitle">저장된 장소와 주소</h2>
          <p>인터넷이 연결되면 지도가 자동으로 다시 열려요.</p>
          <OfflinePlaces visibleStops={visibleStops} />
        </section>
        <div className="map-floating-controls" aria-label="지도 기능">
          <button
            className="map-fab"
            id="mapSearchToggle"
            type="button"
            aria-label="장소 검색"
            aria-expanded={searchOpen ? "true" : "false"}
            disabled={isOffline}
            onClick={() => (searchOpen ? closeMapSearch() : openMapSearch())}
          >
            <Icon svg={<IconMagnifyingglassLine />} size={24} />
          </button>
          <button
            className="map-fab"
            id="mapLocateButton"
            type="button"
            aria-label="내 위치로 이동"
            disabled={isOffline || locateBusy}
            onClick={showCurrentLocation}
          >
            <Icon svg={<IconCrosshairLine />} size={24} />
          </button>
        </div>
        <p className="map-control-status" id="mapControlStatus" role="status" hidden={!statusMessage}>{statusMessage}</p>
        <aside
          className={sheetClosing ? "map-bottom-sheet is-closing" : "map-bottom-sheet"}
          id="mapBottomSheet"
          hidden={!sheetVisible}
          aria-live="polite"
          ref={sheetRef}
          onPointerMove={onSheetPointerMove}
          onPointerUp={onSheetPointerUp}
          onPointerCancel={onSheetPointerCancel}
        >
          <div
            className="map-sheet-handle"
            id="mapSheetHandle"
            aria-hidden="true"
            onPointerDown={onHandlePointerDown}
          />
          <button
            className="map-sheet-close"
            id="mapSheetClose"
            type="button"
            aria-label="장소 상세정보 닫기"
            onClick={hideSheetAnimated}
          >×</button>
          <p className="panel-kicker" id="mapSheetDay">{sheetDay}</p>
          <h2 id="mapSheetTitle">{sheetTitle}</h2>
          <p id="mapSheetMeta">{sheetMeta}</p>
          <p className="map-sheet-address" id="mapSheetAddress">{sheetAddress}</p>
          <ul id="mapSheetItems" className={sheetSubPlaces.length ? "is-subplaces" : undefined}>
            {sheetSubPlaces.map((place, index) => (
              <li key={place.id}>
                <button
                  type="button"
                  data-map-subplace-id={place.id}
                  onClick={() => onSubPlaceClick(place)}
                >
                  <span>{index + 1}</span>
                  <span><strong>{place.title}</strong><small>{place.address}</small></span>
                </button>
              </li>
            ))}
          </ul>
          <div className="map-sheet-actions">
            <ActionButton
              className="full"
              variant="neutralSolid"
              size="large"
              id="mapSheetDetailButton"
              type="button"
              hidden={sheetDetailHidden}
              data-stop-id={sheetDetailStopId}
              onClick={onDetailButtonClick}
            >장소 상세보기</ActionButton>
            <ActionButton asChild className="full" variant="neutralWeak" size="large">
              <a id="mapSheetOpenLink" href={sheetOpenHref} target="_blank" rel="noreferrer">Google Maps에서 열기</a>
            </ActionButton>
          </div>
        </aside>
        <PlaceDetail />
      </article>
    </section>
  );
}
