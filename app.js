const ASAKUSA_SUB_PLACES = [
  {
    id: "d1-asakusa-kaminarimon",
    title: "카미나리몬",
    address: "〒111-0032 도쿄도 다이토구 아사쿠사 2-3-1",
    coordinates: [35.711144, 139.796365],
    map: "https://www.google.com/maps/search/?api=1&query=Kaminarimon%20Gate%202-3-1%20Asakusa%20Tokyo"
  },
  {
    id: "d1-asakusa-nakamise",
    title: "나카미세 거리",
    address: "〒111-0032 도쿄도 다이토구 아사쿠사 1-36-3",
    coordinates: [35.712443, 139.796482],
    map: "https://www.google.com/maps/search/?api=1&query=Nakamise%20Shopping%20Street%201-36-3%20Asakusa%20Tokyo"
  },
  {
    id: "d1-asakusa-sensoji",
    title: "센소지",
    address: "〒111-0032 도쿄도 다이토구 아사쿠사 2-3-1",
    coordinates: [35.7147651, 139.7966553],
    map: "https://www.google.com/maps/search/?api=1&query=Senso-ji%202-3-1%20Asakusa%20Taito%20Tokyo"
  },
  {
    id: "d1-asakusa-riverwalk",
    title: "주변 산책 · 스미다강",
    address: "도쿄도 다이토구 하나카와도 1초메 스미다 공원 일대",
    coordinates: [35.713700, 139.802800],
    map: "https://www.google.com/maps/search/?api=1&query=Sumida%20Park%20Asakusa%20Tokyo"
  }
];

const SHIBUYA_SUB_PLACES = [
  {
    id: "d3-shibuya-hachiko",
    title: "하치코 동상",
    address: "도쿄도 시부야구 도겐자카 2-1",
    coordinates: [35.6590597, 139.7006279],
    map: "https://www.google.com/maps/search/?api=1&query=Hachiko%20Statue%202-1%20Dogenzaka%20Shibuya%20Tokyo"
  },
  {
    id: "d3-shibuya-crossing",
    title: "시부야 스크램블 교차로",
    address: "도쿄도 시부야구 도겐자카 2초메 시부야역 앞",
    coordinates: [35.659482, 139.700559],
    map: "https://www.google.com/maps/search/?api=1&query=Shibuya%20Scramble%20Crossing%20Tokyo"
  },
  {
    id: "d3-shibuya-centergai",
    title: "시부야 센터가이",
    address: "도쿄도 시부야구 우다가와초 24 인근",
    coordinates: [35.660154, 139.699462],
    map: "https://www.google.com/maps/search/?api=1&query=Shibuya%20Center-gai%20Tokyo"
  }
];

const TRIP_DAYS = [
  {
    id: "2026-08-11",
    label: "8.11 Tue",
    title: "입국 + 아사쿠사 + TeamLab + 오다이바",
    dateText: "2026년 8월 11일 화요일",
    stops: [
      {
        id: "d1-flight-in",
        time: "09:50-12:00",
        title: "인천 → 나리타 (WE 501)",
        area: "ICN → NRT",
        type: "항공",
        mapPlace: "나리타 국제공항",
        address: "〒282-0004 지바현 나리타시 후루고메 1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Narita%20International%20Airport",
        note: "예약 확정 · 비행시간 2시간 10분"
      },
      {
        id: "d1-asakusa",
        time: "14:20",
        title: "아사쿠사 관광",
        area: "아사쿠사",
        type: "관광",
        mapPlace: "센소지",
        address: "〒111-0032 도쿄도 다이토구 아사쿠사 2-3-1",
        map: "https://www.google.com/maps/search/?api=1&query=Senso-ji%202-3-1%20Asakusa%20Taito%20Tokyo",
        items: ["카미나리몬", "나카미세 거리", "센소지", "주변 산책"],
        subPlaces: ASAKUSA_SUB_PLACES
      },
      {
        id: "d1-dinner",
        time: "저녁",
        title: "저녁식사",
        area: "긴자 / 츠키지마 / 도쿄역 / 우에노",
        type: "미정",
        note: "어디서 먹을지 아직 정하지 않음"
      },
      {
        id: "d1-teamlab",
        time: "18:30",
        title: "TeamLab Planets 입장",
        area: "도요스",
        type: "관광",
        mapPlace: "teamLab Planets TOKYO",
        address: "〒135-0061 도쿄도 고토구 도요스 6-1-16",
        map: "https://www.google.com/maps/search/?api=1&query=teamLab%20Planets%20TOKYO%206-1-16%20Toyosu",
        note: "각자 예약 완료 · 현장에서 eSIM 받기"
      },
      {
        id: "d1-odaiba",
        time: "TeamLab 이후",
        title: "오다이바 야경",
        area: "오다이바",
        type: "야경",
        mapPlace: "오다이바 해변공원",
        address: "〒135-0091 도쿄도 미나토구 다이바 1-4",
        map: "https://www.google.com/maps/search/?api=1&query=Odaiba%20Marine%20Park%201-4%20Daiba%20Minato%20Tokyo"
      }
    ]
  },
  {
    id: "2026-08-12",
    label: "8.12 Wed",
    title: "요코스카 + 요코하마",
    dateText: "2026년 8월 12일 수요일",
    stops: [
      { id: "d2-leave", time: "07:00", title: "우에노 출발", area: "우에노 -> 시오이리", type: "이동" },
      { id: "d2-arrive", time: "08:20", title: "시오이리역 도착", area: "요코스카", type: "이동" },
      {
        id: "d2-verny",
        time: "08:20-08:55",
        title: "베르니 공원 · 항구 산책",
        area: "요코스카",
        type: "산책",
        mapPlace: "베르니 공원",
        address: "〒238-0042 가나가와현 요코스카시 시오이리초 1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Verny%20Park%201-1%20Shioiricho%20Yokosuka",
        note: "군함과 잠수함이 정박해 있는 경우가 많음"
      },
      {
        id: "d2-mikasa",
        time: "09:00-09:45",
        title: "기념함 미카사 관람",
        area: "요코스카",
        type: "관광",
        mapPlace: "기념함 미카사",
        address: "〒238-0003 가나가와현 요코스카시 이나오카초 82-19",
        map: "https://www.google.com/maps/search/?api=1&query=Memorial%20Ship%20Mikasa%2082-19%20Inaokacho%20Yokosuka"
      },
      { id: "d2-board", time: "09:45-09:55", title: "승선장 이동 및 발권", area: "시오이리", type: "이동", note: "예약 내용 제시 후 결제 및 발권" },
      {
        id: "d2-cruise",
        time: "10:00-10:45",
        title: "Yokosuka Naval Port 군항 크루즈",
        area: "요코스카",
        type: "관광",
        mapPlace: "YOKOSUKA 군항 크루즈 시오이리 터미널",
        address: "〒238-0041 가나가와현 요코스카시 혼초 2-1-12",
        map: "https://www.google.com/maps/search/?api=1&query=YOKOSUKA%20Naval%20Port%20Cruise%202-1-12%20Honcho%20Yokosuka",
        note: "예약 완료"
      },
      { id: "d2-yokohama-move", time: "11:00", title: "시오이리 출발", area: "시오이리 -> 요코하마", type: "이동" },
      { id: "d2-yokohama-arrive", time: "11:30", title: "요코하마 도착", area: "요코하마", type: "이동" },
      { id: "d2-lunch", time: "11:40-12:40", title: "점심", area: "요코하마", type: "식사" },
      {
        id: "d2-nissan",
        time: "13:00-14:20",
        title: "닛산 글로벌 본사 갤러리",
        area: "요코하마",
        type: "관광",
        mapPlace: "닛산 글로벌 본사 갤러리",
        address: "〒220-8686 가나가와현 요코하마시 니시구 다카시마 1-1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Nissan%20Global%20Headquarters%20Gallery%201-1-1%20Takashima%20Yokohama"
      },
      {
        id: "d2-cupnoodles",
        time: "14:30-15:40",
        title: "컵누들 뮤지엄 요코하마",
        area: "요코하마",
        type: "관광",
        mapPlace: "컵누들 뮤지엄 요코하마",
        address: "〒231-0001 가나가와현 요코하마시 나카구 신코 2-3-4",
        map: "https://www.google.com/maps/search/?api=1&query=CUPNOODLES%20MUSEUM%20YOKOHAMA%202-3-4%20Shinko"
      },
      {
        id: "d2-redbrick",
        time: "15:40-17:30",
        title: "빨간벽돌창고 · 항구 산책",
        area: "요코하마",
        type: "산책",
        mapPlace: "요코하마 빨간벽돌창고",
        address: "〒231-0001 가나가와현 요코하마시 나카구 신코 1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Yokohama%20Red%20Brick%20Warehouse%201-1%20Shinko"
      },
      {
        id: "d2-osanbashi",
        time: "17:30-18:10",
        title: "오산바시 옥상공원 노을",
        area: "요코하마",
        type: "전망",
        mapPlace: "요코하마항 오산바시 국제여객터미널",
        address: "〒231-0002 가나가와현 요코하마시 나카구 가이간도리 1-1-4",
        map: "https://www.google.com/maps/search/?api=1&query=Yokohama%20Osanbashi%20Pier%201-1-4%20Kaigandori"
      },
      { id: "d2-dinner", time: "18:10-19:00", title: "저녁식사", area: "오산바시 근처", type: "식사" },
      {
        id: "d2-cosmo",
        time: "19:00-20:20",
        title: "코스모월드 클락 21 · 미나토미라이 산책",
        area: "요코하마",
        type: "야경",
        mapPlace: "요코하마 코스모월드 대관람차 코스모 클락 21",
        address: "〒231-0001 가나가와현 요코하마시 나카구 신코 2-8-1",
        map: "https://www.google.com/maps/search/?api=1&query=Cosmo%20Clock%2021%20Yokohama",
        note: "관람차 한 바퀴 약 15분 · 산책하며 요코하마역으로 이동"
      },
      { id: "d2-return", time: "20:30", title: "요코하마 출발", area: "요코하마 -> 우에노", type: "이동" },
      { id: "d2-hotel-arrive", time: "21:20-21:30", title: "우에노 도착", area: "우에노", type: "이동" }
    ]
  },
  {
    id: "2026-08-13",
    label: "8.13 Thu",
    title: "G-Cans + 철도박물관 + 시부야",
    dateText: "2026년 8월 13일 목요일",
    stops: [
      { id: "d3-leave", time: "07:30", title: "우에노 출발", area: "우에노 -> G-Cans", type: "이동", note: "우쓰노미야선 · 도부 어반파크라인 · 버스 환승" },
      {
        id: "d3-gcans-tour",
        time: "10:00-10:55",
        title: "G-Cans 투어",
        area: "수도권 외곽 방수로",
        type: "관광",
        mapPlace: "류큐칸(龍Q館)",
        address: "〒344-0111 사이타마현 가스카베시 가미카나사키 720",
        map: "https://www.google.com/maps/search/?api=1&query=Ryukyukan%20720%20Kamikanasaki%20Kasukabe",
        note: "예약 완료"
      },
      { id: "d3-omiya-lunch", time: "11:40", title: "오미야역 도착 · 점심", area: "오미야", type: "식사" },
      {
        id: "d3-railway",
        time: "12:30-15:30",
        title: "철도박물관",
        area: "오미야",
        type: "관광",
        mapPlace: "철도박물관",
        address: "〒330-0852 사이타마현 사이타마시 오미야구 오나리초 3-47",
        map: "https://www.google.com/maps/search/?api=1&query=The%20Railway%20Museum%203-47%20Onaricho%20Omiya%20Saitama",
        note: "예약 완료 · 오미야역에서 뉴셔틀 한 정거장"
      },
      { id: "d3-monja", time: "17:00", title: "몬자야키 저녁식사", area: "츠키시마", type: "식사", note: "시부야까지 약 20분" },
      {
        id: "d3-shibuya",
        time: "18:00",
        title: "시부야 관광",
        area: "시부야",
        type: "관광",
        mapPlace: "하치코 동상",
        address: "도쿄도 시부야구 도겐자카 2-1",
        map: "https://www.google.com/maps/search/?api=1&query=Hachiko%20Statue%202-1%20Dogenzaka%20Shibuya%20Tokyo",
        items: ["하치코 동상", "스크램블 교차로", "시부야 야경"],
        subPlaces: SHIBUYA_SUB_PLACES
      }
    ]
  },
  {
    id: "2026-08-14",
    label: "8.14 Fri",
    title: "후지산 투어 + 쇼핑 + 스카이트리",
    dateText: "2026년 8월 14일 금요일",
    stops: [
      { id: "d4-tokyo-station", time: "08:00", title: "후지산 투어 출발", area: "도쿄역", type: "투어", note: "도쿄역 출발" },
      { id: "d4-fuji-tour", time: "종일", title: "후지산 투어", area: "후지산", type: "관광" },
      { id: "d4-tour-end", time: "18:50", title: "도쿄역 해산", area: "도쿄역", type: "이동" },
      { id: "d4-shopping", time: "저녁", title: "쇼핑", area: "도쿄", type: "쇼핑" },
      {
        id: "d4-skytree",
        time: "밤",
        title: "도쿄 스카이트리 야경",
        area: "오시아게",
        type: "야경",
        mapPlace: "도쿄 스카이트리",
        address: "〒131-0045 도쿄도 스미다구 오시아게 1-1-2",
        map: "https://www.google.com/maps/search/?api=1&query=Tokyo%20Skytree%201-1-2%20Oshiage%20Sumida"
      }
    ]
  },
  {
    id: "2026-08-15",
    label: "8.15 Sat",
    title: "귀국 · WE 502",
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
        time: "출발 전",
        title: "나리타 공항 이동 · 출국 수속",
        area: "우에노 → 나리타공항",
        type: "이동",
        note: "국제선 탑승에 맞춰 여유 있게 공항 도착"
      },
      {
        id: "d5-flight-out",
        time: "13:30-16:15",
        title: "나리타 → 인천 (WE 502)",
        area: "NRT → ICN",
        type: "항공",
        mapPlace: "나리타 국제공항",
        address: "〒282-0004 지바현 나리타시 후루고메 1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Narita%20International%20Airport",
        note: "예약 확정 · 비행시간 2시간 45분"
      }
    ]
  }
];

const DEFAULT_PACKING = [
  { id: "passport", category: "출발 전 확인", label: "여권 유효기간 확인" },
  { id: "reservation", category: "출발 전 확인", label: "항공, 숙소, 투어 예약 화면 저장" },
  { id: "insurance", category: "출발 전 확인", label: "여행자보험 및 비상 연락처" },
  { id: "esim", category: "출발 전 확인", label: "eSIM 개통 준비" },
  { id: "cash", category: "서류", label: "엔화 현금" },
  { id: "card", category: "서류", label: "해외 결제 카드" },
  { id: "battery", category: "기기", label: "보조배터리" },
  { id: "charger", category: "기기", label: "충전기, 케이블" },
  { id: "adapter", category: "기기", label: "돼지코 어댑터" },
  { id: "shoes", category: "의류", label: "많이 걸을 신발" },
  { id: "rain", category: "의류", label: "우산 또는 우비" },
  { id: "sun", category: "의류", label: "선크림, 모자" },
  { id: "cooling", category: "기타", label: "휴대용 선풍기 또는 쿨링용품" },
  { id: "medicine", category: "기타", label: "상비약" },
  { id: "bag", category: "기타", label: "접이식 쇼핑백" }
];

const STORAGE_KEY = "japan-trip-log:v1";
const APP_VERSION = 3;
const VIEWS = ["now", "schedule", "map", "prep"];
const CALENDAR_START_MINUTES = 7 * 60;
const CALENDAR_END_MINUTES = 23 * 60;
const MAP_CENTER = [35.6814, 139.7658];
const MAP_ZOOM = 10;
const ACCOMMODATION = {
  id: "hotel-marutani",
  title: "호텔 마루타니",
  subtitle: "Hotel Marutani · 2.5성급",
  address: "〒110-0005 도쿄도 다이토구 우에노 6-7-6",
  coordinates: [35.70936, 139.77590],
  map: "https://www.google.com/maps/search/?api=1&query=Hotel%20Marutani%206-7-6%20Ueno%20Taito%20Tokyo"
};
const PINNED_STOP_IDS = new Set([
  "d1-flight-in", "d1-asakusa", "d1-teamlab", "d1-odaiba",
  "d2-verny", "d2-mikasa", "d2-cruise", "d2-nissan", "d2-cupnoodles", "d2-redbrick", "d2-osanbashi", "d2-cosmo",
  "d3-gcans-tour", "d3-railway", "d3-shibuya",
  "d4-skytree", "d5-flight-out"
]);
const MAP_COORDINATES = {
  "d1-flight-in": [35.7720, 140.3929],
  "d1-asakusa": [35.7147651, 139.7966553],
  "d1-teamlab": [35.6493800, 139.7897280],
  "d1-odaiba": [35.6296290, 139.7755280],
  "d2-verny": [35.284377, 139.654470],
  "d2-mikasa": [35.285066, 139.674169],
  "d2-cruise": [35.2831231, 139.6616122],
  "d2-nissan": [35.4637, 139.6250],
  "d2-cupnoodles": [35.4554856, 139.6388810],
  "d2-redbrick": [35.4524046, 139.6429182],
  "d2-osanbashi": [35.451544, 139.647455],
  "d2-cosmo": [35.455302, 139.636633],
  "d3-gcans-tour": [35.9910983, 139.7805654],
  "d3-railway": [35.9217287, 139.6178610],
  "d3-shibuya": [35.6590597, 139.7006279],
  "d4-skytree": [35.7100627, 139.8107004],
  "d5-flight-out": [35.7720, 140.3929]
};

const PLACE_DETAILS = {
  "d1-flight-in": {
    symbol: "着",
    summary: "WE 501편으로 인천에서 출발해 여행 첫날 정오에 나리타 국제공항에 도착하는 항공 일정.",
    hours: "09:50 출발 · 12:00 도착",
    fee: "항공권 예약 확정",
    transit: "인천 ICN → 나리타 NRT",
    duration: "2시간 10분",
    reservation: "WE 501 예약 확정",
    officialUrl: "https://www.narita-airport.jp/ko/",
    highlights: ["12:00 나리타 도착", "입국심사와 수하물 수령", "도쿄 시내 이동"],
    tips: ["이용 터미널은 항공권 예약 상세에서 다시 확인", "14:20 아사쿠사 일정까지 입국·이동 시간을 고려"]
  },
  "d1-asakusa": {
    symbol: "寺",
    summary: "카미나리몬에서 나카미세 거리를 지나 센소지 본당까지 이어지는 아사쿠사의 대표 산책 동선.",
    hours: "본당 06:00-17:00 (8월)",
    fee: "무료",
    transit: "아사쿠사역에서 도보 약 5분",
    duration: "약 2시간",
    reservation: "예약 불필요",
    officialUrl: "https://www.senso-ji.jp/",
    highlights: ["카미나리몬 사진 촬영", "나카미세 거리 간식과 기념품", "센소지 본당과 오층탑"],
    tips: ["본당 내부와 참배객의 동선을 방해하지 않기", "나카미세 상점은 늦은 오후부터 순차 마감"]
  },
  "d3-shibuya": {
    symbol: "渋",
    summary: "하치코 동상을 시작점으로 스크램블 교차로와 시부야 중심가의 야경을 둘러보는 일정.",
    hours: "야외 공간 상시 개방",
    fee: "무료",
    transit: "시부야역 하치코 출구 바로 앞",
    duration: "저녁 자유 관람",
    reservation: "예약 불필요",
    officialUrl: "https://www.gotokyo.org/jp/kanko/shibuya/spot/p_0050.html",
    highlights: ["하치코 동상", "스크램블 교차로 횡단", "센터가이와 시부야 네온 거리"],
    tips: ["퇴근 시간대에는 매우 혼잡하므로 사진 촬영 중 보행 방해 주의", "하치코 동상과 교차로는 도보 1분 거리"]
  },
  "d2-cruise": {
    symbol: "艦",
    summary: "미 해군과 해상자위대 함정을 가까이에서 보는 약 45분간의 요코스카 항만 크루즈.",
    hours: "통상 10:00-16:00 매시 운항",
    fee: "성인 ¥2,000-2,500 (운항일 등급별)",
    transit: "시오이리역 도보 약 5분 · Coaska 2층 발권",
    duration: "승선 약 45분",
    reservation: "사전 예약 권장",
    officialUrl: "https://yokosuka-gunko.jp/information/",
    highlights: ["미 해군 요코스카 기지", "해상자위대 함정과 잠수함", "생방송 선내 가이드"],
    tips: ["10:00편 운항 여부와 예약 상태를 전날 다시 확인", "출항 전에 2층 시오이리 터미널에서 발권"]
  },
  "d2-verny": {
    symbol: "港",
    summary: "군함과 잠수함이 정박한 항구를 바라보며 걷는 프랑스식 정원 공원.",
    hours: "공원 상시 개방",
    fee: "무료",
    transit: "시오이리역에서 도보 약 5분",
    duration: "약 35분",
    reservation: "예약 불필요",
    officialUrl: "https://www.kanagawaparks.com/verny/",
    highlights: ["요코스카 항구", "군함과 잠수함 조망", "해안 산책로"],
    tips: ["08:55에는 다음 일정으로 바로 이동", "함정 정박 여부는 당일 상황에 따라 달라짐"]
  },
  "d2-nissan": {
    symbol: "N",
    summary: "최신 닛산 차량과 기술, 헤리티지 전시를 자유롭게 체험하는 글로벌 본사 갤러리.",
    hours: "평일 10:00-18:00",
    fee: "무료",
    transit: "요코하마역 동쪽 출구 도보 7분",
    duration: "약 1시간",
    reservation: "일반 관람 예약 불필요",
    officialUrl: "https://www2.nissan.co.jp/GALLERY/HQ/",
    highlights: ["최신 전시 차량", "헤리티지 존과 코리도", "닛산 부티크와 갤러리 카페"],
    tips: ["일부 전시 차량은 실제 탑승 가능", "2026년 8월 12일은 공식 휴관일 목록에 없음"]
  },
  "d2-cupnoodles": {
    symbol: "杯",
    summary: "인스턴트 라면의 역사와 발명 과정을 보고 나만의 컵누들을 만들 수 있는 체험형 박물관.",
    hours: "10:00-18:00 · 입장 마감 17:00",
    fee: "성인 ¥500 · 체험 별도",
    transit: "미나토미라이역·바샤미치역 도보 8분",
    duration: "약 1시간 30분",
    reservation: "온라인 티켓·체험 예약 확인",
    officialUrl: "https://www.cupnoodles-museum.jp/ko/yokohama/",
    highlights: ["인스턴트 누들 히스토리 큐브", "마이 컵누들 팩토리", "뮤지엄 숍"],
    tips: ["화요일 휴관이지만 여행일은 수요일", "마이 컵누들 팩토리는 현장 번호표가 필요할 수 있음"]
  },
  "d2-minatomirai": {
    symbol: "港",
    summary: "랜드마크 타워를 기준점으로 항구와 고층 빌딩 사이를 걷는 미나토미라이 산책.",
    hours: "상점 11:00-20:00 · 식당은 매장별 상이",
    fee: "산책 무료 · 시설별 별도",
    transit: "미나토미라이역 도보 3분",
    duration: "약 1시간",
    reservation: "예약 불필요",
    officialUrl: "https://www.yokohama-landmark.jp/",
    highlights: ["랜드마크 플라자", "항구 방향 스카이라인", "사쿠라기초 방면 보행로"],
    tips: ["다음 일정인 컵누들 박물관·빨간벽돌창고 방향으로 이어 걷기 좋음"]
  },
  "d2-redbrick": {
    symbol: "煉",
    summary: "빨간벽돌창고를 중심으로 관람차와 항구 조명이 이어지는 요코하마 대표 야경 코스.",
    hours: "1호관 10:00-19:00 · 2호관 11:00-20:00",
    fee: "야외 관람 무료",
    transit: "바샤미치역·니혼오도리역 도보 6분",
    duration: "약 1시간 50분",
    reservation: "예약 불필요",
    officialUrl: "https://www.yokohama-akarenga.jp/",
    highlights: ["빨간벽돌창고 야간 조명", "코스모클락 21 관람차", "항구 산책로"],
    tips: ["실내 상점은 야경 일정 중 먼저 마감", "관람차 탑승 시 운영 종료 시간을 현장에서 확인"]
  },
  "d3-gcans-tour": {
    symbol: "龍",
    summary: "수도권 침수를 막는 거대 지하 방수로의 조압수조를 내려가 보는 55분 기본 투어.",
    hours: "예약 시간 10:00-10:55",
    fee: "지하신전 코스 1인 ¥1,200",
    transit: "미나미사쿠라이역 도보 25-30분",
    duration: "약 55분",
    reservation: "사전 예약 필수",
    officialUrl: "https://gaikaku.jp/",
    highlights: ["거대한 조압수조", "59개의 콘크리트 기둥", "치수 시설 해설"],
    tips: ["예약 확인 화면과 운동화 준비", "계단 이동이 포함되므로 시작 전에 화장실 이용"]
  },
  "d3-railway": {
    symbol: "鉄",
    summary: "실물 철도 차량과 운전 체험, 철도 기술과 역사를 한곳에서 보는 대형 철도 박물관.",
    hours: "10:00-17:00",
    fee: "성인 사전 ¥1,500 · 당일 ¥1,600",
    transit: "철도박물관역에서 도보 1분",
    duration: "약 3시간",
    reservation: "온라인 사전 입장권 권장",
    officialUrl: "https://www.railway-museum.jp/",
    highlights: ["차량 스테이션 실물 열차", "철도 디오라마", "운전·업무 체험 프로그램"],
    tips: ["화요일 휴관이지만 여행일은 목요일", "체험 프로그램은 입장 후 별도 추첨·접수가 있을 수 있음"]
  },
  "d1-teamlab": {
    symbol: "光",
    summary: "물과 정원, 빛의 작품 안을 맨발로 이동하며 몸 전체로 체험하는 몰입형 미술관.",
    hours: "날짜별 상이 · 예약 입장 18:30",
    fee: "성인 ¥3,600부터",
    transit: "신토요스역 도보 1분",
    duration: "약 2시간 30분",
    reservation: "시간 지정 티켓 필수",
    officialUrl: "https://teamlabplanets.dmm.com/",
    highlights: ["Water Area", "Garden Area", "대형 몰입형 빛 작품"],
    tips: ["무릎 정도까지 물에 들어가는 구간이 있어 걷기 편한 복장 권장", "QR 티켓은 입장 전에 미리 화면에 띄워두기"]
  },
  "d1-odaiba": {
    symbol: "橋",
    summary: "레인보우브리지와 도쿄 도심 조명을 한눈에 보는 오다이바의 대표 해변 야경 포인트.",
    hours: "상시 개방",
    fee: "무료",
    transit: "오다이바카이힌코엔역·다이바역 도보 3분",
    duration: "선택 약 1시간",
    reservation: "예약 불필요",
    officialUrl: "https://www.tptc.co.jp/park/01_02",
    highlights: ["레인보우브리지 야경", "오다이바 자유의 여신상", "도쿄만 해변 산책"],
    tips: ["TeamLab 종료 후 피로도와 막차 시간을 확인", "해변은 바람이 강할 수 있음"]
  },
  "d2-mikasa": {
    symbol: "艦",
    summary: "1902년에 건조된 현존 세계 최고(最古)급 강철 전함을 직접 관람하는 일정.",
    hours: "4-9월 09:00-17:30",
    fee: "성인 ¥600",
    transit: "요코스카추오역에서 도보 약 15분",
    duration: "약 45분",
    reservation: "현장 입장 가능",
    officialUrl: "https://www.kinenkan-mikasa.or.jp/",
    highlights: ["상갑판과 주포", "함교", "일본해 해전 전시실"],
    tips: ["입장 마감은 폐관 30분 전", "09:45 이후 크루즈 승선장 이동 시간을 현장에서 확인"]
  },
  "d2-osanbashi": {
    symbol: "夕",
    summary: "항구와 미나토미라이 스카이라인을 360도로 바라보며 노을을 감상하는 옥상공원.",
    hours: "옥상 광장 24시간 개방",
    fee: "무료",
    transit: "니혼오도리역에서 도보 약 7분",
    duration: "약 40분",
    reservation: "예약 불필요",
    officialUrl: "https://osanbashi.jp/",
    highlights: ["고래의 등 옥상공원", "요코하마 항구 노을", "미나토미라이 전경"],
    tips: ["바닷바람에 대비할 겉옷 준비", "18:10 저녁 일정에 맞춰 이동"]
  },
  "d2-cosmo": {
    symbol: "輪",
    summary: "코스모 클락 21 관람차를 타고 미나토미라이 야경을 본 뒤 요코하마역 방향으로 걷는 일정.",
    hours: "운영시간은 당일 공식 안내 확인",
    fee: "관람차 현장 요금 확인",
    transit: "미나토미라이역에서 도보 약 2분",
    duration: "약 1시간 20분",
    reservation: "현장 이용",
    officialUrl: "https://cosmoworld.jp/",
    highlights: ["코스모 클락 21", "약 15분간의 관람차", "미나토미라이 야경 산책"],
    tips: ["20:30 요코하마 출발 시간을 기준으로 탑승 대기열 확인"]
  },
  "d4-skytree": {
    symbol: "空",
    summary: "도쿄 동부의 불빛을 내려다보는 여행 마지막 밤의 전망 일정.",
    hours: "날짜별 운영시간 확인",
    fee: "전망대 티켓 종류별 상이",
    transit: "오시아게역 또는 도쿄스카이트리역에서 바로 연결",
    duration: "약 1-2시간",
    reservation: "시간 지정 티켓 권장",
    officialUrl: "https://www.tokyo-skytree.jp/",
    highlights: ["전망데크", "도쿄 야경", "스카이트리 타운"],
    tips: ["후지산 투어 해산과 쇼핑 후 이동 시간을 고려", "마지막 입장 시간을 당일 확인"]
  },
  "d5-flight-out": {
    symbol: "発",
    summary: "WE 502편으로 나리타 국제공항에서 출발해 인천으로 돌아오는 귀국 항공 일정.",
    hours: "13:30 출발 · 16:15 도착",
    fee: "항공권 예약 확정",
    transit: "나리타 NRT → 인천 ICN",
    duration: "2시간 45분",
    reservation: "WE 502 예약 확정",
    officialUrl: "https://www.narita-airport.jp/ko/",
    highlights: ["13:30 나리타 출발", "출국 수속", "16:15 인천 도착"],
    tips: ["이용 터미널은 항공권 예약 상세에서 다시 확인", "우에노에서 공항까지 이동시간과 국제선 수속시간을 충분히 확보"]
  }
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
let mapRouteLine = null;
let markerByStopId = new Map();
let renderedMapDayFilter = "";
let googleMapsPromise = null;
let placeSearchElement = null;
let searchMarker = null;
let selectedSearchPlace = null;
let locationMarker = null;
let mapStatusTimer = null;
let mapResizeFrame = null;
let mapSheetDrag = null;
let waitingServiceWorker = null;
let isReloadingForUpdate = false;

const nodes = {
  completionMetric: document.querySelector("#completionMetric"),
  completionBar: document.querySelector("#completionBar"),
  checkedMetric: document.querySelector("#checkedMetric"),
  dayTabs: document.querySelector("#dayTabs"),
  nowClock: document.querySelector("#nowClock"),
  nowKicker: document.querySelector("#nowKicker"),
  nowTitle: document.querySelector("#nowTitle"),
  nowMeta: document.querySelector("#nowMeta"),
  nowCountdown: document.querySelector("#nowCountdown"),
  nowStatus: document.querySelector("#nowStatus"),
  nowActions: document.querySelector("#nowActions"),
  nowMapButton: document.querySelector("#nowMapButton"),
  nowGoogleMapsLink: document.querySelector("#nowGoogleMapsLink"),
  nowNextCard: document.querySelector("#nowNextCard"),
  nowDayLabel: document.querySelector("#nowDayLabel"),
  weekCalendar: document.querySelector("#weekCalendar"),
  selectedDateLabel: document.querySelector("#selectedDateLabel"),
  selectedDayTitle: document.querySelector("#selectedDayTitle"),
  selectedDayStatus: document.querySelector("#selectedDayStatus"),
  nextStopCard: document.querySelector("#nextStopCard"),
  stopList: document.querySelector("#stopList"),
  offlineBanner: document.querySelector("#offlineBanner"),
  mapPanel: document.querySelector("#mapPanel .map-panel"),
  mapSearch: document.querySelector("#mapSearch"),
  mapSearchPanel: document.querySelector("#mapSearchPanel"),
  mapSearchToggle: document.querySelector("#mapSearchToggle"),
  mapSearchClose: document.querySelector("#mapSearchClose"),
  mapLocateButton: document.querySelector("#mapLocateButton"),
  mapControlStatus: document.querySelector("#mapControlStatus"),
  mapDayFilters: document.querySelector("#mapDayFilters"),
  mapTimeline: document.querySelector("#mapTimeline"),
  mapCanvas: document.querySelector("#mapCanvas"),
  mapOfflinePanel: document.querySelector("#mapOfflinePanel"),
  mapOfflineList: document.querySelector("#mapOfflineList"),
  mapBottomSheet: document.querySelector("#mapBottomSheet"),
  mapSheetHandle: document.querySelector("#mapSheetHandle"),
  mapSheetClose: document.querySelector("#mapSheetClose"),
  mapSheetDay: document.querySelector("#mapSheetDay"),
  mapSheetTitle: document.querySelector("#mapSheetTitle"),
  mapSheetMeta: document.querySelector("#mapSheetMeta"),
  mapSheetAddress: document.querySelector("#mapSheetAddress"),
  mapSheetItems: document.querySelector("#mapSheetItems"),
  mapSheetDetailButton: document.querySelector("#mapSheetDetailButton"),
  mapSheetOpenLink: document.querySelector("#mapSheetOpenLink"),
  placeDetailView: document.querySelector("#placeDetailView"),
  placeDetailClose: document.querySelector("#placeDetailClose"),
  placeDetailScroll: document.querySelector("#placeDetailScroll"),
  placeDetailHeaderTitle: document.querySelector("#placeDetailHeaderTitle"),
  placeDetailSymbol: document.querySelector("#placeDetailSymbol"),
  placeDetailDay: document.querySelector("#placeDetailDay"),
  placeDetailTitle: document.querySelector("#placeDetailTitle"),
  placeDetailSummary: document.querySelector("#placeDetailSummary"),
  placeDetailMapPlace: document.querySelector("#placeDetailMapPlace"),
  placeDetailAddress: document.querySelector("#placeDetailAddress"),
  placeDetailInfo: document.querySelector("#placeDetailInfo"),
  placeDetailNotice: document.querySelector("#placeDetailNotice"),
  placeDetailHighlights: document.querySelector("#placeDetailHighlights"),
  placeDetailTips: document.querySelector("#placeDetailTips"),
  placeDetailSubPlacesSection: document.querySelector("#placeDetailSubPlacesSection"),
  placeDetailSubPlaces: document.querySelector("#placeDetailSubPlaces"),
  placeDetailOfficialLink: document.querySelector("#placeDetailOfficialLink"),
  placeDetailMapLink: document.querySelector("#placeDetailMapLink"),
  packingList: document.querySelector("#packingList"),
  packingForm: document.querySelector("#packingForm"),
  packingStatus: document.querySelector("#packingStatus"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  resetButton: document.querySelector("#resetButton"),
  updateToast: document.querySelector("#updateToast"),
  updateButton: document.querySelector("#updateButton"),
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
    .filter((stop) => stop.map && stop.address && PINNED_STOP_IDS.has(stop.id) && MAP_COORDINATES[stop.id])
    .map((stop) => ({ ...stop, dayId: day.id, dayLabel: day.label, dayTitle: day.title })));
}

function getMapPoints(stops) {
  return stops.flatMap((stop, stopIndex) => {
    if (stop.subPlaces?.length) {
      return stop.subPlaces.map((place, placeIndex) => ({
        ...place,
        stop,
        id: place.id,
        label: `${stopIndex + 1}-${placeIndex + 1}`,
        coordinates: place.coordinates
      }));
    }

    return [{
      id: stop.id,
      title: stop.title,
      address: stop.address,
      map: stop.map,
      stop,
      label: String(stopIndex + 1),
      coordinates: MAP_COORDINATES[stop.id]
    }];
  });
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
  if (activeView === "now") renderNow();
  if (activeView === "schedule") {
    renderMetrics();
    renderDayTabs();
    renderNextStop();
    renderStops();
  }
  if (activeView === "map") renderMap();
  if (activeView === "prep") renderPacking();
  if (activeView !== "map") drawRouteCanvas();
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

  if (activeView === "map" && navigator.onLine && !tripMap) {
    loadGoogleMaps().then(renderMap).catch((error) => console.error(error));
  }
  updateConnectivityStatus();
}

function renderMetrics() {
  const allStops = getAllStops();
  const checked = allStops.filter((stop) => state.checkedStops[stop.id]).length;
  const percent = allStops.length ? Math.round((checked / allStops.length) * 100) : 0;

  nodes.completionMetric.textContent = `${percent}%`;
  nodes.completionBar.style.width = `${percent}%`;
  nodes.checkedMetric.textContent = `${checked} / ${allStops.length}`;
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
    nodes.nowCountdown.hidden = true;
    nodes.nowStatus.textContent = "대기";
    nodes.nowNextCard.innerHTML = "";
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
  const countdown = getNowCountdown(context);
  nodes.nowCountdown.textContent = countdown;
  nodes.nowCountdown.hidden = !countdown;

  const hasMap = Boolean(item.map);
  nodes.nowMapButton.hidden = !hasMap;
  nodes.nowGoogleMapsLink.hidden = !hasMap;
  if (hasMap) nodes.nowGoogleMapsLink.href = item.map;

  const items = getCalendarItems();
  const itemIndex = items.findIndex((entry) => entry.id === item.id);
  const nextItem = itemIndex >= 0 ? items[itemIndex + 1] : null;
  nodes.nowNextCard.innerHTML = nextItem ? `
    <div>
      <p class="panel-kicker">다음 일정</p>
      <h3>${escapeHTML(nextItem.time)} · ${escapeHTML(nextItem.title)}</h3>
      <p>${escapeHTML(nextItem.area)} · ${escapeHTML(nextItem.type)}</p>
    </div>
    <button class="small-action" type="button" data-now-next-id="${nextItem.id}">확인</button>
  ` : `
    <div>
      <p class="panel-kicker">다음 일정</p>
      <h3>모든 일정이 끝났어요</h3>
      <p>체크하지 못한 준비물과 짐을 확인해주세요.</p>
    </div>
  `;

  renderTodayTimeline(item.dayId, item, context);
}

function getNowCountdown(context) {
  if (context.mode !== "current" && context.mode !== "next") return "";
  const target = context.mode === "current" ? context.item.endDate : context.item.startDate;
  const totalMinutes = Math.max(0, Math.ceil((target - context.now) / 60000));
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const parts = [];
  if (days) parts.push(`${days}일`);
  if (hours) parts.push(`${hours}시간`);
  if (!days && minutes) parts.push(`${minutes}분`);
  const prefix = context.mode === "current" ? "종료까지" : "시작까지";
  return `${prefix} ${parts.join(" ") || "곧"}`;
}

function renderTodayTimeline(dayId, activeItem, context) {
  const day = TRIP_DAYS.find((entry) => entry.id === dayId) || TRIP_DAYS[0];
  const dayItems = getCalendarItems().filter((item) => item.dayId === day.id);
  nodes.nowDayLabel.textContent = `${day.label} · ${day.title}`;
  nodes.weekCalendar.innerHTML = dayItems.map((item, index) => {
    const isCurrent = context.mode === "current" && item.id === activeItem.id;
    const isSelected = item.id === activeItem.id;
    const isDone = Boolean(state.checkedStops[item.id]);
    const classes = [
      "today-timeline-item",
      isCurrent ? "is-current" : "",
      isSelected ? "is-selected" : "",
      isDone ? "is-done" : ""
    ].filter(Boolean).join(" ");
    return `
      <button class="${classes}" type="button" data-calendar-stop-id="${item.id}">
        <span class="today-timeline-marker" aria-hidden="true">${index + 1}</span>
        <span class="today-timeline-time">${escapeHTML(item.time)}</span>
        <span class="today-timeline-copy">
          <strong>${escapeHTML(item.title)}</strong>
          <small>${escapeHTML(item.area)} · ${escapeHTML(item.type)}</small>
        </span>
      </button>
    `;
  }).join("");
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
      <p class="panel-kicker">다음 미완료 일정</p>
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
    const shortLabel = day.label.split(" ")[0];
    return `
      <button class="day-tab" type="button" data-day-id="${day.id}" aria-selected="${selected}" aria-label="${escapeHTML(`${day.label}, ${day.title}, ${progress.done} / ${progress.total} 완료`)}">
        <strong>${escapeHTML(shortLabel)}</strong>
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
    const isMappable = Boolean(stop.map && stop.address && MAP_COORDINATES[stop.id]);
    const detail = PLACE_DETAILS[stop.id]
      ? `<button class="small-action" type="button" data-detail-stop-id="${stop.id}">상세</button>`
      : "";
    const map = isMappable
      ? `<button class="small-action map-action" type="button" data-map-stop-id="${stop.id}">앱 지도</button>`
      : "";
    const googleMaps = stop.map
      ? `<a class="small-action" href="${escapeHTML(stop.map)}" target="_blank" rel="noreferrer">Google Maps</a>`
      : "";
    const actions = `
      <div class="stop-actions">
        ${detail}${map}${googleMaps}
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

async function initializePlaceSearch() {
  if (placeSearchElement || !window.google?.maps) return;
  const { PlaceAutocompleteElement } = await google.maps.importLibrary("places");
  placeSearchElement = new PlaceAutocompleteElement({ includedRegionCodes: ["jp"] });
  placeSearchElement.placeholder = "일본 장소 검색";
  placeSearchElement.setAttribute("aria-label", "일본 장소 검색");
  placeSearchElement.addEventListener("gmp-select", async (event) => {
    const placePrediction = event.placePrediction;
    if (!placePrediction) return;
    const place = placePrediction.toPlace();
    await place.fetchFields({ fields: ["displayName", "formattedAddress", "location", "googleMapsURI"] });
    if (!place.location) return;
    showSearchPlace(place);
  });
  nodes.mapSearch.append(placeSearchElement);
}

function clearSearchMarker() {
  if (searchMarker) searchMarker.map = null;
  searchMarker = null;
  selectedSearchPlace = null;
}

function showSearchPlace(place) {
  clearSearchMarker();
  const position = { lat: place.location.lat(), lng: place.location.lng() };
  const pin = new google.maps.marker.PinElement({
    glyphText: "•",
    background: "#b7791f",
    borderColor: "#ffffff",
    glyphColor: "#ffffff",
    scale: 1.15
  });
  searchMarker = new google.maps.marker.AdvancedMarkerElement({
    map: tripMap,
    position,
    title: place.displayName || "검색한 장소",
    content: pin,
    gmpClickable: true
  });
  selectedSearchPlace = place;
  searchMarker.addEventListener("gmp-click", () => openSearchPlaceSheet(place));
  tripMap.panTo(position);
  tripMap.setZoom(16);
  closeMapSearch();
  openSearchPlaceSheet(place);
}

function openMapSearch() {
  syncMapSearchViewport();
  nodes.mapPanel.classList.add("is-searching");
  nodes.mapSearchPanel.hidden = false;
  nodes.mapSearchToggle.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    syncMapSearchViewport();
    requestAnimationFrame(() => placeSearchElement?.focus({ preventScroll: true }));
  });
}

function closeMapSearch() {
  document.activeElement?.blur();
  nodes.mapSearchPanel.hidden = true;
  nodes.mapPanel.classList.remove("is-searching");
  nodes.mapPanel.style.removeProperty("--map-search-viewport-offset");
  nodes.mapSearchToggle.setAttribute("aria-expanded", "false");
}

function syncMapSearchViewport() {
  const viewportOffset = Math.max(0, window.visualViewport?.offsetTop || 0);
  nodes.mapPanel.style.setProperty("--map-search-viewport-offset", `${viewportOffset}px`);
}

function showMapControlStatus(message, duration = 2600) {
  clearTimeout(mapStatusTimer);
  nodes.mapControlStatus.textContent = message;
  nodes.mapControlStatus.hidden = false;
  mapStatusTimer = setTimeout(() => {
    nodes.mapControlStatus.hidden = true;
  }, duration);
}

function showCurrentLocation() {
  if (!navigator.geolocation || !tripMap) {
    showMapControlStatus("이 기기에서는 현재 위치를 사용할 수 없어요.", 4000);
    return;
  }

  nodes.mapLocateButton.disabled = true;
  showMapControlStatus("현재 위치를 확인하고 있어요.", 10000);
  navigator.geolocation.getCurrentPosition((position) => {
    const current = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    if (locationMarker) locationMarker.map = null;
    const pin = new google.maps.marker.PinElement({
      glyphText: "●",
      background: "#2f7d68",
      borderColor: "#ffffff",
      glyphColor: "#ffffff",
      scale: 1.05
    });
    locationMarker = new google.maps.marker.AdvancedMarkerElement({
      map: tripMap,
      position: current,
      title: "내 위치",
      content: pin,
      zIndex: 100
    });
    tripMap.panTo(current);
    tripMap.setZoom(17);
    showMapControlStatus("현재 위치로 이동했어요.");
    nodes.mapLocateButton.disabled = false;
  }, () => {
    showMapControlStatus("위치 권한을 허용한 뒤 다시 눌러주세요.", 4500);
    nodes.mapLocateButton.disabled = false;
  }, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  });
}

function openSearchPlaceSheet(place) {
  const position = { lat: place.location.lat(), lng: place.location.lng() };
  const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${position.lat},${position.lng}`)}`;
  nodes.mapSheetDay.textContent = "검색한 장소";
  nodes.mapSheetTitle.textContent = place.displayName || "장소";
  nodes.mapSheetMeta.textContent = place.formattedAddress || "주소 정보 없음";
  nodes.mapSheetAddress.textContent = "";
  nodes.mapSheetItems.innerHTML = "";
  nodes.mapSheetDetailButton.hidden = true;
  nodes.mapSheetOpenLink.href = place.googleMapsURI || fallbackUrl;
  showAnimated(nodes.mapBottomSheet);
}

function openAccommodationSheet() {
  nodes.mapSheetDay.textContent = "숙소 · 전 일정";
  nodes.mapSheetTitle.textContent = ACCOMMODATION.title;
  nodes.mapSheetMeta.textContent = ACCOMMODATION.subtitle;
  nodes.mapSheetAddress.textContent = ACCOMMODATION.address;
  nodes.mapSheetItems.classList.remove("is-subplaces");
  nodes.mapSheetItems.innerHTML = "";
  nodes.mapSheetDetailButton.hidden = true;
  nodes.mapSheetOpenLink.href = ACCOMMODATION.map;
  showAnimated(nodes.mapBottomSheet);
}

function renderPlaceDetailList(node, items) {
  node.innerHTML = items.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
}

function openPlaceDetail(stop, returnView = "map") {
  const detail = PLACE_DETAILS[stop.id];
  if (!detail) return;

  const infoItems = [
    ["운영시간", detail.hours],
    ["입장·요금", detail.fee],
    ["교통", detail.transit],
    ["체류시간", detail.duration],
    ["예약", detail.reservation]
  ];

  nodes.placeDetailHeaderTitle.textContent = stop.mapPlace || stop.title;
  nodes.placeDetailSymbol.textContent = detail.symbol;
  nodes.placeDetailDay.textContent = `${stop.dayLabel} · ${stop.time} · ${stop.type}`;
  nodes.placeDetailTitle.textContent = stop.title;
  nodes.placeDetailSummary.textContent = detail.summary;
  nodes.placeDetailMapPlace.textContent = stop.mapPlace || stop.title;
  nodes.placeDetailAddress.textContent = stop.address;
  nodes.placeDetailInfo.innerHTML = infoItems.map(([label, value]) => `
    <div class="place-detail-info-item">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");
  nodes.placeDetailNotice.textContent = detail.notice || "";
  nodes.placeDetailNotice.hidden = !detail.notice;
  renderPlaceDetailList(nodes.placeDetailHighlights, detail.highlights);
  renderPlaceDetailList(nodes.placeDetailTips, detail.tips);
  nodes.placeDetailSubPlacesSection.hidden = !stop.subPlaces?.length;
  nodes.placeDetailSubPlaces.innerHTML = (stop.subPlaces || []).map((place, index) => `
    <a class="place-detail-subplace" href="${escapeHTML(place.map)}" target="_blank" rel="noreferrer">
      <span>${index + 1}</span>
      <span>
        <strong>${escapeHTML(place.title)}</strong>
        <small>${escapeHTML(place.address)}</small>
      </span>
      <b aria-hidden="true">↗</b>
    </a>
  `).join("");
  nodes.placeDetailOfficialLink.href = detail.officialUrl;
  nodes.placeDetailMapLink.href = stop.map;
  nodes.mapBottomSheet.hidden = true;
  nodes.placeDetailView.dataset.returnView = returnView;
  nodes.placeDetailView.classList.remove("is-closing");
  nodes.placeDetailView.hidden = false;
  nodes.placeDetailScroll.scrollTop = 0;
  nodes.placeDetailClose.focus();
}

function showAnimated(node) {
  node.dataset.animationToken = String(Number(node.dataset.animationToken || 0) + 1);
  node.classList.remove("is-closing", "is-dragging", "is-snapping");
  node.style.removeProperty("--map-sheet-drag-y");
  node.hidden = false;
}

function hideAnimated(node, onComplete) {
  if (node.hidden) {
    onComplete?.();
    return;
  }

  const token = String(Number(node.dataset.animationToken || 0) + 1);
  node.dataset.animationToken = token;
  node.classList.remove("is-dragging", "is-snapping");
  node.style.removeProperty("--map-sheet-drag-y");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    node.hidden = true;
    onComplete?.();
    return;
  }

  node.classList.add("is-closing");
  let finished = false;
  const finish = () => {
    if (finished || node.dataset.animationToken !== token) return;
    finished = true;
    node.classList.remove("is-closing");
    node.hidden = true;
    onComplete?.();
  };
  node.addEventListener("animationend", finish, { once: true });
  window.setTimeout(finish, 280);
}

function closePlaceDetail() {
  const returnView = nodes.placeDetailView.dataset.returnView;
  hideAnimated(nodes.placeDetailView, () => {
    if (returnView === "schedule") {
      activeView = "schedule";
      nodes.placeDetailView.dataset.returnView = "map";
      persist();
      render();
      return;
    }
    nodes.mapSheetDetailButton.focus();
  });
}

function renderMap() {
  const mappableStops = getMappableStops();
  const visibleStops = mappableStops.filter((stop) => stop.dayId === mapDayFilter);
  renderOfflineMapList(visibleStops);

  nodes.mapDayFilters.innerHTML = TRIP_DAYS.map((day) => (
    `<button class="map-day-filter" type="button" data-map-day-filter="${day.id}" aria-pressed="${day.id === mapDayFilter ? "true" : "false"}">${escapeHTML(day.label.split(" ")[0])}</button>`
  )).join("");
  nodes.mapTimeline.innerHTML = `
    <button class="map-timeline-stop is-accommodation" type="button" data-map-accommodation>
      <span class="map-timeline-time">숙소</span>
      <span class="map-timeline-dot">H</span>
      <strong>${escapeHTML(ACCOMMODATION.title)}</strong>
    </button>
  ` + (visibleStops.length
    ? visibleStops.map((stop, index) => `
      <button class="map-timeline-stop" type="button" data-map-timeline-stop-id="${stop.id}">
        <span class="map-timeline-time">${escapeHTML(stop.time)}</span>
        <span class="map-timeline-dot">${index + 1}</span>
        <strong>${escapeHTML(stop.title)}</strong>
        ${stop.subPlaces?.length ? `<small>${stop.subPlaces.length}곳</small>` : ""}
      </button>
    `).join("")
    : '<span class="map-timeline-empty">장소 확정 전</span>');
  nodes.mapBottomSheet.hidden = true;

  if (!tripMap && window.google?.maps) {
    tripMap = new google.maps.Map(nodes.mapCanvas, {
      center: { lat: MAP_CENTER[0], lng: MAP_CENTER[1] },
      zoom: MAP_ZOOM,
      mapId: "DEMO_MAP_ID",
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      clickableIcons: false,
      isFractionalZoomEnabled: true,
      gestureHandling: "greedy"
    });
  }
  if (!tripMap) return;
  initializePlaceSearch().catch((error) => console.error(error));
  if (renderedMapDayFilter === mapDayFilter && mapMarkers.length) return;

  mapMarkers.forEach((marker) => { marker.map = null; });
  if (mapRouteLine) {
    mapRouteLine.setMap(null);
    mapRouteLine = null;
  }
  markerByStopId.clear();
  const mapPoints = getMapPoints(visibleStops);
  mapMarkers = mapPoints.map((point) => {
    const [lat, lng] = point.coordinates;
    const pin = new google.maps.marker.PinElement({
      glyphText: point.label,
      background: "#286f9e",
      borderColor: "#ffffff",
      glyphColor: "#ffffff"
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: tripMap,
      position: { lat, lng },
      title: point.title,
      content: pin,
      gmpClickable: true
    });
    marker.addEventListener("gmp-click", () => openMapSheet(point.stop, point.id === point.stop.id ? null : point));
    markerByStopId.set(point.id, marker);
    if (!markerByStopId.has(point.stop.id)) markerByStopId.set(point.stop.id, marker);
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
    map: tripMap,
    position: { lat: hotelLat, lng: hotelLng },
    title: ACCOMMODATION.title,
    content: hotelPin,
    gmpClickable: true
  });
  hotelMarker.addEventListener("gmp-click", openAccommodationSheet);
  mapMarkers.push(hotelMarker);
  markerByStopId.set(ACCOMMODATION.id, hotelMarker);

  const routePath = mapPoints.map((point) => {
    const [lat, lng] = point.coordinates;
    return { lat, lng };
  });
  nodes.mapCanvas.dataset.routePoints = String(routePath.length);
  if (routePath.length > 1) {
    mapRouteLine = new google.maps.Polyline({
      map: tripMap,
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
    tripMap.fitBounds(bounds, { top: 210, right: 40, bottom: 130, left: 40 });
  } else if (visibleStops.length === 1) {
    const [lat, lng] = MAP_COORDINATES[visibleStops[0].id];
    tripMap.setCenter({ lat, lng });
    tripMap.setZoom(15);
  } else {
    tripMap.setCenter({ lat: MAP_CENTER[0], lng: MAP_CENTER[1] });
    tripMap.setZoom(MAP_ZOOM);
  }
  renderedMapDayFilter = mapDayFilter;
}

function syncTripMapSize() {
  if (!tripMap || activeView !== "map" || !window.google?.maps) return;
  if (mapResizeFrame) cancelAnimationFrame(mapResizeFrame);
  const center = tripMap.getCenter();
  const zoom = tripMap.getZoom();
  mapResizeFrame = requestAnimationFrame(() => {
    google.maps.event.trigger(tripMap, "resize");
    if (center && Number.isFinite(zoom)) tripMap.moveCamera({ center, zoom });
    mapResizeFrame = null;
  });
}

function renderOfflineMapList(visibleStops = getMappableStops().filter((stop) => stop.dayId === mapDayFilter)) {
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
  nodes.mapOfflineList.innerHTML = places.map((place, index) => `
    <article class="map-offline-place">
      <span>${index ? index : "H"}</span>
      <div>
        <strong>${escapeHTML(place.title)}</strong>
        <small>${escapeHTML(place.meta)}</small>
        <p>${escapeHTML(place.address)}</p>
      </div>
    </article>
  `).join("");
}

function updateConnectivityStatus() {
  const isOffline = !navigator.onLine;
  nodes.offlineBanner.hidden = !isOffline || activeView === "map";
  nodes.mapOfflinePanel.hidden = !isOffline || activeView !== "map";
  nodes.mapSearchToggle.disabled = isOffline;
  nodes.mapLocateButton.disabled = isOffline;
  if (isOffline && !nodes.mapSearchPanel.hidden) closeMapSearch();
}

function openMapSheet(stop, subPlace = null) {
  selectedMapStopId = stop.id;
  nodes.mapSheetDay.textContent = `${stop.dayLabel} · ${stop.dayTitle}`;
  nodes.mapSheetTitle.textContent = subPlace?.title || stop.title;
  nodes.mapSheetMeta.textContent = subPlace
    ? `${stop.time} · ${stop.title}의 세부 장소`
    : `${stop.time} · ${stop.area} · ${stop.type}`;
  nodes.mapSheetAddress.textContent = subPlace
    ? subPlace.address
    : `${stop.mapPlace || stop.title} · ${stop.address}`;
  nodes.mapSheetItems.classList.toggle("is-subplaces", Boolean(stop.subPlaces?.length && !subPlace));
  nodes.mapSheetItems.innerHTML = stop.subPlaces?.length && !subPlace
    ? stop.subPlaces.map((place, index) => `
      <li>
        <button type="button" data-map-subplace-id="${escapeHTML(place.id)}">
          <span>${index + 1}</span>
          <span><strong>${escapeHTML(place.title)}</strong><small>${escapeHTML(place.address)}</small></span>
        </button>
      </li>
    `).join("")
    : "";
  nodes.mapSheetDetailButton.hidden = !PLACE_DETAILS[stop.id];
  nodes.mapSheetDetailButton.dataset.stopId = stop.id;
  nodes.mapSheetOpenLink.href = subPlace?.map || stop.map;
  showAnimated(nodes.mapBottomSheet);
  persist();
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
          <div class="check-row">
            <label class="packing-check">
              <input type="checkbox" data-packing-id="${item.id}" ${checked}>
              <span class="${doneClass}">${escapeHTML(item.label)}</span>
            </label>
            ${item.id.startsWith("custom-") ? `<button class="packing-delete" type="button" data-delete-packing="${item.id}" aria-label="${escapeHTML(item.label)} 삭제">×</button>` : ""}
          </div>
        `;
      }).join("")}
    </section>
  `).join("");
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

  if (button.dataset.nowAction === "schedule") {
    activeView = "schedule";
  }

  persist();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

nodes.nowNextCard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-now-next-id]");
  if (!button) return;
  const item = getStopById(button.dataset.nowNextId);
  if (!item) return;
  selectedDayId = item.dayId;
  selectedNowStopId = item.id;
  persist();
  render();
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
  }
});

nodes.stopList.addEventListener("change", (event) => {
  const input = event.target.closest("[data-stop-id]");
  if (!input) return;
  state.checkedStops[input.dataset.stopId] = input.checked;
  persist();
  render();
});

nodes.stopList.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail-stop-id]");
  if (detailButton) {
    const stop = getStopById(detailButton.dataset.detailStopId);
    if (!stop) return;
    selectedMapStopId = stop.id;
    mapDayFilter = stop.dayId;
    activeView = "map";
    persist();
    render();
    openPlaceDetail(stop, "schedule");
    return;
  }

  const mapButton = event.target.closest("[data-map-stop-id]");
  if (mapButton) {
    const stop = getStopById(mapButton.dataset.mapStopId);
    if (!stop) return;
    selectedMapStopId = stop.id;
    mapDayFilter = stop.dayId;
    activeView = "map";
    persist();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

});

nodes.mapSheetHandle.addEventListener("pointerdown", (event) => {
  if (nodes.mapBottomSheet.hidden) return;
  mapSheetDrag = {
    pointerId: event.pointerId,
    startY: event.clientY,
    deltaY: 0
  };
  nodes.mapBottomSheet.setPointerCapture(event.pointerId);
  nodes.mapBottomSheet.classList.remove("is-snapping");
  nodes.mapBottomSheet.classList.add("is-dragging");
  event.preventDefault();
});

nodes.mapBottomSheet.addEventListener("pointermove", (event) => {
  if (!mapSheetDrag || event.pointerId !== mapSheetDrag.pointerId) return;
  mapSheetDrag.deltaY = Math.max(0, event.clientY - mapSheetDrag.startY);
  nodes.mapBottomSheet.style.setProperty("--map-sheet-drag-y", `${mapSheetDrag.deltaY}px`);
  event.preventDefault();
});

nodes.mapBottomSheet.addEventListener("pointerup", (event) => {
  if (!mapSheetDrag || event.pointerId !== mapSheetDrag.pointerId) return;
  const deltaY = mapSheetDrag.deltaY;
  mapSheetDrag = null;
  nodes.mapBottomSheet.releasePointerCapture?.(event.pointerId);
  if (deltaY > 96) {
    hideAnimated(nodes.mapBottomSheet);
    return;
  }
  nodes.mapBottomSheet.classList.remove("is-dragging");
  nodes.mapBottomSheet.classList.add("is-snapping");
  nodes.mapBottomSheet.style.setProperty("--map-sheet-drag-y", "0px");
  window.setTimeout(() => {
    nodes.mapBottomSheet.classList.remove("is-snapping");
    nodes.mapBottomSheet.style.removeProperty("--map-sheet-drag-y");
  }, 190);
});

nodes.mapBottomSheet.addEventListener("pointercancel", () => {
  if (!mapSheetDrag) return;
  mapSheetDrag = null;
  nodes.mapBottomSheet.classList.remove("is-dragging");
  nodes.mapBottomSheet.classList.add("is-snapping");
  nodes.mapBottomSheet.style.setProperty("--map-sheet-drag-y", "0px");
  window.setTimeout(() => nodes.mapBottomSheet.classList.remove("is-snapping"), 190);
});

nodes.mapSheetClose.addEventListener("click", () => {
  hideAnimated(nodes.mapBottomSheet);
});

nodes.mapSheetDetailButton.addEventListener("click", () => {
  const stop = getMappableStops().find((item) => item.id === nodes.mapSheetDetailButton.dataset.stopId);
  if (stop) openPlaceDetail(stop);
});

nodes.placeDetailClose.addEventListener("click", closePlaceDetail);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !nodes.placeDetailView.hidden) {
    closePlaceDetail();
  }
});

nodes.mapDayFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-day-filter]");
  if (!button) return;
  mapDayFilter = button.dataset.mapDayFilter;
  selectedDayId = mapDayFilter;
  clearSearchMarker();
  nodes.placeDetailView.hidden = true;
  nodes.mapBottomSheet.hidden = true;
  persist();
  render();
});

nodes.mapSearchToggle.addEventListener("click", () => {
  if (nodes.mapSearchPanel.hidden) openMapSearch();
  else closeMapSearch();
});

nodes.mapSearchClose.addEventListener("click", closeMapSearch);
nodes.mapLocateButton.addEventListener("click", showCurrentLocation);

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => {
    if (!nodes.mapSearchPanel.hidden) syncMapSearchViewport();
  });
  window.visualViewport.addEventListener("scroll", () => {
    if (!nodes.mapSearchPanel.hidden) syncMapSearchViewport();
  });
}

nodes.mapTimeline.addEventListener("click", (event) => {
  const accommodationButton = event.target.closest("[data-map-accommodation]");
  if (accommodationButton && tripMap) {
    const [lat, lng] = ACCOMMODATION.coordinates;
    tripMap.panTo({ lat, lng });
    tripMap.setZoom(17);
    openAccommodationSheet();
    return;
  }
  const button = event.target.closest("[data-map-timeline-stop-id]");
  if (!button || !tripMap) return;
  const stop = getMappableStops().find((item) => item.id === button.dataset.mapTimelineStopId);
  if (!stop) return;
  const points = getMapPoints([stop]);
  if (points.length > 1) {
    const bounds = new google.maps.LatLngBounds();
    points.forEach((point) => {
      const [lat, lng] = point.coordinates;
      bounds.extend({ lat, lng });
    });
    tripMap.fitBounds(bounds, { top: 210, right: 40, bottom: 300, left: 40 });
  } else {
    const [lat, lng] = points[0].coordinates;
    tripMap.panTo({ lat, lng });
    tripMap.setZoom(15);
  }
  openMapSheet(stop);
});

nodes.mapSheetItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-subplace-id]");
  if (!button || !tripMap) return;
  const stop = getMappableStops().find((item) => item.id === selectedMapStopId);
  const place = stop?.subPlaces?.find((item) => item.id === button.dataset.mapSubplaceId);
  if (!stop || !place) return;
  const [lat, lng] = place.coordinates;
  tripMap.panTo({ lat, lng });
  tripMap.setZoom(17);
  openMapSheet(stop, place);
});

nodes.packingList.addEventListener("change", (event) => {
  const input = event.target.closest("[data-packing-id]");
  if (!input) return;
  state.checkedPacking[input.dataset.packingId] = input.checked;
  persist();
  render();
});

nodes.packingList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-packing]");
  if (!button) return;
  const itemId = button.dataset.deletePacking;
  state.customPacking = state.customPacking.filter((item) => item.id !== itemId);
  delete state.checkedPacking[itemId];
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
  const confirmed = confirm("일정·준비물 체크 상태와 직접 추가한 준비물을 초기화할까요?");
  if (!confirmed) return;
  state.checkedStops = {};
  state.checkedPacking = {};
  state.customPacking = [];
  persist();
  render();
});

function showUpdateAvailable(worker) {
  waitingServiceWorker = worker;
  nodes.updateToast.hidden = false;
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  const registration = await navigator.serviceWorker.register("./service-worker.js");
  if (registration.waiting) showUpdateAvailable(registration.waiting);
  registration.addEventListener("updatefound", () => {
    const worker = registration.installing;
    if (!worker) return;
    worker.addEventListener("statechange", () => {
      if (worker.state === "installed" && navigator.serviceWorker.controller) {
        showUpdateAvailable(worker);
      }
    });
  });
  registration.update().catch(() => {});
}

nodes.updateButton.addEventListener("click", () => {
  if (!waitingServiceWorker) return;
  isReloadingForUpdate = true;
  nodes.updateButton.disabled = true;
  nodes.updateButton.textContent = "업데이트 중…";
  waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (isReloadingForUpdate) window.location.reload();
  });
  const startServiceWorker = () => {
    registerServiceWorker().catch((error) => console.error("Service worker registration failed", error));
  };
  if (document.readyState === "complete") startServiceWorker();
  else window.addEventListener("load", startServiceWorker, { once: true });
}

window.addEventListener("resize", () => {
  drawRouteCanvas();
  syncTripMapSize();
});
window.addEventListener("orientationchange", syncTripMapSize);

if ("ResizeObserver" in window) {
  const mapResizeObserver = new ResizeObserver(syncTripMapSize);
  mapResizeObserver.observe(nodes.mapCanvas);
}

window.addEventListener("online", () => {
  updateConnectivityStatus();
  if (activeView === "map") {
    loadGoogleMaps().then(renderMap).catch((error) => console.error(error));
  }
});

window.addEventListener("offline", updateConnectivityStatus);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  updateConnectivityStatus();
  if (activeView === "now") {
    selectedNowStopId = "";
    renderNow();
  }
});

setInterval(() => {
  if (!document.hidden && activeView === "now") renderNow();
}, 30000);

render();
