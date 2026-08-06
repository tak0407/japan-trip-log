# Japan Trip Log

2026년 8월 일본 여행 일정과 장소를 확인하는 React PWA입니다.

## 포함 기능

- 8월 11일-15일 날짜별 일정 체크
- React 19 + Vite 기반 모바일 웹앱
- 바텀 내비게이션 기반 지금/일정/지도/준비 분리
- 현재/다음 일정을 바로 보는 `지금` 타임라인
- 일정 탭의 다음 일정 카드
- Google Maps 기반 장소 지도 탭
- 날짜별 필터와 전체 화면 지도 보기
- 준비물 체크와 추가 준비물 입력
- JSON 데이터 내보내기/가져오기
- GitHub Pages 배포 워크플로우
- PWA 설치 및 일정 화면 오프라인 캐시

## 로컬 실행

```bash
npm install
npm run dev
```

프로덕션 빌드는 `npm run build`, 빌드 결과 확인은 `npm run preview`를 사용합니다.

## GitHub Pages 배포

`main` 브랜치에 push하면 GitHub Actions가 Vite 앱을 빌드해 GitHub Pages에 배포합니다. 지도 API 키는 저장소의 `GOOGLE_MAPS_API_KEY` Actions secret을 사용합니다.

기록 데이터는 각 브라우저의 로컬 저장소에 저장됩니다. 여러 사람이 같은 기록을 맞추려면 앱 안의 `데이터 내보내기`와 `데이터 가져오기`를 사용합니다.
