export const ASAKUSA_SUB_PLACES = [
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

export const SHIBUYA_SUB_PLACES = [
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

export const TRIP_DAYS = [
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
        note: "츠키지 장외시장은 저녁 영업 안 함 · 추천: 긴자 이른 저녁 → 유라쿠초선으로 도요스 이동 (약 25분)"
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
        note: "각자 예약 완료 · eSIM 수령 · 맨발 관람(물에 들어감) · 예약 시간 15분 전 도착"
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
        map: "https://www.google.com/maps/search/?api=1&query=Yokohama%20Osanbashi%20Pier%201-1-4%20Kaigandori",
        note: "8월 중순 일몰은 18:30 전후 · 노을 보려면 18:40까지 머무는 편이 좋음"
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
      { id: "d2-return", time: "20:30", title: "요코하마 출발", area: "요코하마 -> 우에노", type: "이동", note: "미나토미라이역에서 걸어 요코하마역까지 20분 이상 · 미나토미라이선 이용이 편함" },
      { id: "d2-hotel-arrive", time: "21:20-21:30", title: "우에노 도착", area: "우에노", type: "이동" }
    ]
  },
  {
    id: "2026-08-13",
    label: "8.13 Thu",
    title: "G-Cans + 철도박물관 + 시부야",
    dateText: "2026년 8월 13일 목요일",
    stops: [
      { id: "d3-leave", time: "07:30", title: "우에노 출발", area: "우에노 -> G-Cans", type: "이동", note: "우쓰노미야선으로 오미야 → 도부 어반파크라인 → 미나미사쿠라이 · 역 북구에서 버스(배차 적음, 안 맞으면 택시 약 10분) → 용Q관" },
      {
        id: "d3-gcans-tour",
        time: "10:00-10:55",
        title: "G-Cans 투어",
        area: "수도권 외곽 방수로",
        type: "관광",
        mapPlace: "류큐칸(龍Q館)",
        address: "〒344-0111 사이타마현 가스카베시 가미카나사키 720",
        map: "https://www.google.com/maps/search/?api=1&query=Ryukyukan%20720%20Kamikanasaki%20Kasukabe",
        note: "예약 완료 · 예약번호 wqFamOfK4 (10:00)"
      },
      { id: "d3-omiya-lunch", time: "11:40", title: "오미야역 도착 · 점심", area: "오미야", type: "식사", note: "실제 도착은 12시 전후 예상 · 에키벤 사서 철도박물관 안에서 먹는 것도 방법" },
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
      { id: "d3-monja", time: "17:00-18:00", title: "몬자야키 저녁식사", area: "츠키시마", type: "식사", note: "오미야에서 약 1시간(16:50 도착 예상) · 직접 구워 먹어서 1시간 이상 걸림" },
      {
        id: "d3-shibuya",
        time: "18:30",
        title: "시부야 관광",
        area: "시부야",
        type: "관광",
        mapPlace: "하치코 동상",
        address: "도쿄도 시부야구 도겐자카 2-1",
        map: "https://www.google.com/maps/search/?api=1&query=Hachiko%20Statue%202-1%20Dogenzaka%20Shibuya%20Tokyo",
        items: ["하치코 동상", "스크램블 교차로", "시부야 야경"],
        note: "츠키시마에서 약 30-35분 · 19시쯤 어두워져 야경까지 이어서 보기 좋음",
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

export const DEFAULT_PACKING = [
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

export const STORAGE_KEY = "japan-trip-log:v1";
export const APP_VERSION = 3;
export const VIEWS = ["now", "schedule", "map", "prep"];
export const CALENDAR_START_MINUTES = 7 * 60;
export const CALENDAR_END_MINUTES = 23 * 60;
export const MAP_CENTER = [35.6814, 139.7658];
export const MAP_ZOOM = 10;
export const ACCOMMODATION = {
  id: "hotel-marutani",
  title: "호텔 마루타니",
  subtitle: "Hotel Marutani · 2.5성급",
  address: "〒110-0005 도쿄도 다이토구 우에노 6-7-6",
  coordinates: [35.70936, 139.77590],
  map: "https://www.google.com/maps/search/?api=1&query=Hotel%20Marutani%206-7-6%20Ueno%20Taito%20Tokyo"
};
export const PINNED_STOP_IDS = new Set([
  "d1-flight-in", "d1-asakusa", "d1-teamlab", "d1-odaiba",
  "d2-verny", "d2-mikasa", "d2-cruise", "d2-nissan", "d2-cupnoodles", "d2-redbrick", "d2-osanbashi", "d2-cosmo",
  "d3-gcans-tour", "d3-railway", "d3-shibuya",
  "d4-skytree", "d5-flight-out"
]);
export const MAP_COORDINATES = {
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

export const PLACE_DETAILS = {
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
