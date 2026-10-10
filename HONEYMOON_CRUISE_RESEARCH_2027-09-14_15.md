# 2027년 9월 14·15일 승선 유럽 크루즈 — 조사·검증 상태표

기준일 2026-10-10. 정확히 2027-09-14 또는 2027-09-15 현지 항구 **승선**, 7박 또는 8박, 가족 7명. 예식 후 한국 출발일은 역산한다. 확인되지 않은 가격, 항공편, 위험 등급을 만들어내지 않는다.

## 공개 항차 확인 목록 (서로 다른 승선 항구는 별도 항차)

| 승선 | 박수 | 선박 | 항구 | 참고 USD/인 | 근거 |
|---|---:|---|---|---:|---|
| 09-14 | 7 | MSC Virtuosa | Barcelona | 1207 | https://travelersmap.co.kr/cruise/v/msc-virtuosa-7n-barcelona-da6fbd58f071 |
| 09-14 | 7 | MSC Orchestra | Piraeus | 995 | https://www.icruise.com/itineraries/7-night-piraeus-to-piraeus-cruise_msc-orchestra_9-14-2027.html |
| 09-14 | 7 | MSC Fantasia | Livorno | 1146 | https://www.cruisetimetables.com/msccruises-14sep2027.html |
| 09-14 | 7 | MSC Seaview | Genoa | 1199 | https://www.cruisetimetables.com/msccruises-14sep2027.html |
| 09-14 | 7 | MSC World Asia | Messina | 1409 | https://www.cruisetimetables.com/msccruises-14sep2027.html |
| 09-15 | 7 | MSC World Europa | Civitavecchia | 1211 | https://www.icruise.com/itineraries/7-night-civitavecchia-to-civitavecchia-cruise_msc-world-europa_9-15-2027.html |
| 09-15 | 7 | MSC Fantasia | Cannes | 1139 | https://www.cruisetimetables.com/msccruises-15sep2027.html |
| 09-15 | 7 | MSC Seaview | Naples | 1231 | https://www.cruisetimetables.com/msccruises-15sep2027.html |
| 09-15 | 7 | MSC World Asia | Valletta | 1699 | https://www.cruisetimetables.com/msccruises-15sep2027.html |
| 09-15 | 8 | Windstar Star Explorer | Barcelona → Civitavecchia | 3323 | https://www.icruise.com/itineraries/8-night-yachtsmans-harbors-of-the-rivieras-cruise_star-explorer_9-15-2027.html |

주의: 시작가는 2인1실 1인 참고가격의 서로 다른 판매처 표시가. **7인 결제 총액과 무관**할 수 있다. Windstar는 https://windstarcruisesale.com/itinerary/8-night-yachtsmans-harbors-of-the-rivieras-cruise/736263/1625433 에서 $5,130을 표시해 포함조건 대조 필요.

## 공개 출항 데이터의 모수와 한계

- https://travelersmap.co.kr/cruise/departures/2027-09 : 크루즈맵 2027년 9월 색인은 현재 638편/선사 10곳/선박 86척으로 안내. 이것은 9/14·15 승선, 유럽 7~8박 638개가 아니다. 전체 세계 권역 혼합이며 한국 전 여행사의 총 수량도 아니다.
- https://www.barcelonacruiseguide.com/barcelona-cruise-calendar/monthly-cruise-schedule/September-2027 : 바르셀로나 9/14 Virtuosa 7박, 9/15 Star Explorer 8박 + 16박 표시. 16박 제외.
- https://www.cruisetimetables.com/costacruises-sep2027.html : Costa 월간 전체를 날짜별 재검증해야 한다. 현재 위 10개 목록이 전선사 전수조사라고 표시하지 않는다.
- 중복 노선, 동일 항차를 다른 승선항에서 탑승하는 편을 구별해야 한다.

## A–Z 실행 중 미완료

| 영역 | 확인해야 할 사항 | 현재 상태 |
|---|---|---|
| 전 선사 전수조사 | MSC, Costa, Royal Caribbean, NCL, Celebrity, AIDA, Princess, Viking, Windstar, Silversea, Oceania, Virgin, Celestyal, 리버 포함 + 유럽 승선항 | 미완료 |
| 한국 판매처 | 크루즈맵, MSC 한국, 크루지아, 크루즈나라, 크루즈마루, 하나투어, 모두투어, 참좋은여행, 노랑풍선 개별 상품 | 일부 색인만 확인 |
| 항공 | 2027-09-12/13 출발 ICN→BCN/FCO/ATH 등 실제 편명, 시각, 7좌석, 환승, 수하물, 취소 규정 | 미확인 |
| 숙소 | 승선 전 호텔 7인 방 구성, 이동, 24시간 체크인 | 미확인 |
| 선실 | 2+2+3, 2+2+2+1 실시간 선실 재고/세금/팁/미성년자 규칙 | 미확인 |
| 기항지 | 일별 시간표, 텐더, 접근 교통, 투어비, 보행 난이도 | 부분 |
| 안전 | 개별 경보, 절도/성범죄/테러/전쟁/중동 불안, 보험·의료 | 미검증 |
| 귀국 | 5명 한국 귀국 및 2명 추가 유럽여행 1~2주 다구간 | 미확인 |
| UI | 편집형 비교화면, 필터, 계획 비용 계산기 | 구현; 실제 브라우저 QA 필요 |

## 산식 설명
초기 계획예산 계산기의 값 = (판매처 참고 1인 USD × 7명 × 직접 입력 환율) + (직접 입력한 항공 1인 예산 × 7명) + 기타 임의 입력 예산. 실제 구매 견적이 아니다. 선실 추가금, 팁, 항만비, 부부 후속 여행 등 모두 확정 금액 미포함 가능.
