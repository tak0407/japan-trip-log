import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { APP_VERSION, STORAGE_KEY, TRIP_DAYS, VIEWS } from "../data/trip.js";

const TripContext = createContext(null);

function createFallbackState() {
  return {
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
}

function normalizeState(raw) {
  const next = { ...createFallbackState(), ...raw };

  if (next.appVersion !== APP_VERSION) {
    next.activeView = "now";
    next.appVersion = APP_VERSION;
  }

  next.selectedDayId = next.selectedDayId || TRIP_DAYS[0].id;
  next.activeView = VIEWS.includes(next.activeView) ? next.activeView : "now";
  next.selectedMapStopId = next.selectedMapStopId || "";
  next.mapDayFilter = TRIP_DAYS.some((day) => day.id === next.mapDayFilter)
    ? next.mapDayFilter
    : next.selectedDayId;

  return next;
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return normalizeState({});
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    console.warn("Failed to load local trip data", error);
    return normalizeState({});
  }
}

export function TripProvider({ children }) {
  const [state, setState] = useState(loadState);
  const [selectedNowStopId, setSelectedNowStopId] = useState("");
  const [placeDetail, setPlaceDetail] = useState(null);
  const [guideStopId, setGuideStopId] = useState("");
  const stateRef = useRef(state);

  stateRef.current = state;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Failed to save local trip data", error);
    }
  }, [state]);

  const setActiveView = useCallback((view) => {
    if (view === "now") setSelectedNowStopId("");
    setState((prev) => ({ ...prev, activeView: view, appVersion: APP_VERSION }));
  }, []);

  const setSelectedDayId = useCallback((dayId) => {
    setState((prev) => ({ ...prev, selectedDayId: dayId }));
  }, []);

  const setMapDayFilter = useCallback((dayId) => {
    setState((prev) => ({ ...prev, mapDayFilter: dayId }));
  }, []);

  const setSelectedMapStopId = useCallback((stopId) => {
    setState((prev) => ({ ...prev, selectedMapStopId: stopId || "" }));
  }, []);

  const toggleStopChecked = useCallback((stopId, checked) => {
    setState((prev) => ({
      ...prev,
      checkedStops: {
        ...prev.checkedStops,
        [stopId]: typeof checked === "boolean" ? checked : !prev.checkedStops[stopId]
      }
    }));
  }, []);

  const togglePackingItem = useCallback((itemId, checked) => {
    setState((prev) => ({
      ...prev,
      checkedPacking: {
        ...prev.checkedPacking,
        [itemId]: typeof checked === "boolean" ? checked : !prev.checkedPacking[itemId]
      }
    }));
  }, []);

  const addPackingItem = useCallback((label) => {
    const trimmed = String(label || "").trim();
    if (!trimmed) return;
    setState((prev) => ({
      ...prev,
      customPacking: [...prev.customPacking, {
        id: `custom-${crypto.randomUUID()}`,
        category: "추가",
        label: trimmed
      }]
    }));
  }, []);

  const removePackingItem = useCallback((itemId) => {
    setState((prev) => {
      const checkedPacking = { ...prev.checkedPacking };
      delete checkedPacking[itemId];
      return {
        ...prev,
        customPacking: prev.customPacking.filter((item) => item.id !== itemId),
        checkedPacking
      };
    });
  }, []);

  const exportData = useCallback(() => {
    const payload = {
      exportedAt: new Date().toISOString(),
      itinerary: TRIP_DAYS,
      data: stateRef.current
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `japan-trip-log-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }, []);

  const importData = useCallback(async (source) => {
    try {
      const payload = typeof source?.text === "function"
        ? JSON.parse(await source.text())
        : source;
      const imported = payload.data || payload;
      setState((prev) => {
        const selectedDayId = imported.selectedDayId || prev.selectedDayId;
        return {
          ...prev,
          checkedStops: imported.checkedStops || {},
          checkedPacking: imported.checkedPacking || {},
          customPacking: Array.isArray(imported.customPacking) ? imported.customPacking : [],
          journal: Array.isArray(imported.journal) ? imported.journal : [],
          expenses: Array.isArray(imported.expenses) ? imported.expenses : [],
          selectedDayId,
          activeView: VIEWS.includes(imported.activeView) ? imported.activeView : prev.activeView,
          selectedMapStopId: imported.selectedMapStopId || prev.selectedMapStopId,
          mapDayFilter: TRIP_DAYS.some((day) => day.id === imported.mapDayFilter)
            ? imported.mapDayFilter
            : selectedDayId,
          appVersion: APP_VERSION
        };
      });
      return true;
    } catch (error) {
      alert("가져오기에 실패했습니다. JSON 파일을 확인해주세요.");
      return false;
    }
  }, []);

  const resetData = useCallback(() => {
    const confirmed = confirm("일정·준비물 체크 상태와 직접 추가한 준비물을 초기화할까요?");
    if (!confirmed) return false;
    setState((prev) => ({
      ...prev,
      checkedStops: {},
      checkedPacking: {},
      customPacking: []
    }));
    return true;
  }, []);

  const openGuide = useCallback((stopId) => {
    if (!stopId) return;
    setGuideStopId(stopId);
  }, []);

  const closeGuide = useCallback(() => {
    setGuideStopId("");
  }, []);

  const openPlaceDetail = useCallback((stop, returnView = "map") => {
    if (!stop) return;
    setPlaceDetail({ stop, returnView });
  }, []);

  const closePlaceDetail = useCallback(() => {
    setPlaceDetail((prev) => {
      if (prev?.returnView === "schedule") {
        setState((current) => ({ ...current, activeView: "schedule" }));
      }
      return null;
    });
  }, []);

  const value = useMemo(() => ({
    state,
    selectedNowStopId,
    placeDetail,
    guideStopId,
    openGuide,
    closeGuide,
    setActiveView,
    setSelectedDayId,
    setMapDayFilter,
    setSelectedMapStopId,
    setSelectedNowStopId,
    toggleStopChecked,
    togglePackingItem,
    addPackingItem,
    removePackingItem,
    exportData,
    importData,
    resetData,
    openPlaceDetail,
    closePlaceDetail
  }), [
    state,
    selectedNowStopId,
    placeDetail,
    guideStopId,
    openGuide,
    closeGuide,
    setActiveView,
    setSelectedDayId,
    setMapDayFilter,
    setSelectedMapStopId,
    toggleStopChecked,
    togglePackingItem,
    addPackingItem,
    removePackingItem,
    exportData,
    importData,
    resetData,
    openPlaceDetail,
    closePlaceDetail
  ]);

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}

export function useTrip() {
  const value = useContext(TripContext);
  if (!value) throw new Error("useTrip must be used within a TripProvider");
  return value;
}
