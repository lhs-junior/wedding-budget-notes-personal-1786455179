/* 2027 flight-first travel plan. No invented inventory or fares. */
(function(){
'use strict';
const host=document.querySelector('#p-honeymoon .cruise-app');if(!host)return;
const section=document.createElement('section');section.className='cruise-section cruise-flight-plan';section.id='cruise-flight-plan';
section.innerHTML=`<div class="cruise-section-title"><div><span class="cruise-eyebrow">항공 연결 / 예약 전 검증</span><h3>비행기를 놓치면 크루즈도 못 탑니다</h3></div></div>
<p class="cruise-note">2027년 9월 13~14일의 특정 항공편, 좌석 5석, 운임은 현재 확정된 자료를 확보하지 못했습니다. 노선 운항과 날짜별 항차를 구분한 실무용 계획표입니다. 시간은 현지시간이며, 예약 가능한 항공편이 확인되기 전까지 계획을 확정하지 마세요.</p>
<div class="cruise-flight-warning"><strong>항공권 확정 상태: 미확인 · 5인 동시 예약 보장 없음</strong><p>인천→파리→바르셀로나를 서로 다른 항공권으로 예약하면 첫 비행기 지연 시 후속편 보호가 없을 수 있습니다. 가능한 한 동일 발권/연결 보호 여부를 먼저 확인하세요.</p></div>
<div class="cruise-flight-grid">
<article class="cruise-flight-card"><span>1안 · 출발일 유지 / 추천</span><h4>9/15 바르셀로나 승선</h4><ol>
<li><b>9/13 월</b> 인천(ICN) → 파리(CDG) · 해당 날짜 실제 직항 편명·도착시간·5석 확인 필요</li>
<li><b>9/13 월</b> 파리 공항 근처 또는 시내 숙박 · 야간 도착 여부에 따라 선택</li>
<li><b>9/14 화</b> 파리(CDG 또는 ORY) → 바르셀로나(BCN) · 가능한 이른 직항편 우선</li>
<li><b>9/14 화</b> 바르셀로나 1박 · 공항 픽업, 객실 배치·수하물·가벼운 관광</li>
<li><b>9/15 수</b> 호텔 → 크루즈 터미널 · Windstar Star Explorer 17:00 출항, 공식 일정에 13:00 승선 표시</li>
<li><b>9/23 목</b> 치비타베키아 07:00 입항 → 로마 FCO 이동. 가족 3명 귀국, 부부 2명 유럽 추가 여행</li>
</ol><p class="cruise-flight-warning-inline">주의: 크루즈 8박의 객실 5명 재고와 항공편은 미확인. 항공보다 크루즈 비용이 높은 상품입니다.</p></article>
<article class="cruise-flight-card"><span>2안 · 저렴한 크루즈 / 항공 위험</span><h4>9/14 바르셀로나 승선</h4><ol>
<li><b>9/13 월</b> 인천 → 파리 도착, 같은 날 바르셀로나 이동 가능 항공편 조합을 우선 검색</li>
<li><b>9/13 월</b> 바르셀로나 전박 확보가 가능할 때만 추진</li>
<li><b>9/14 화</b> MSC Virtuosa 19:00 출항 · 승선 마감은 별도 확인</li>
<li><b>9/21 화</b> 바르셀로나 07:00 입항 · 3명 귀국과 2명 후속 일정 분리</li>
</ol><p class="cruise-flight-warning-inline">파리에서 9/14 오전 이동해 그날 바로 승선하는 안은 권장하지 않습니다. 9/13 파리 도착 후 바르셀로나까지 이동이 불가능하면 파리 경유 계획 자체를 조정해야 합니다.</p></article>
</div>
<div class="cruise-flight-evidence"><h4>항공권 구매 전에 확보해야 할 실제 증빙</h4>
<div class="cruise-flight-checks">
<label><input type="checkbox">9월 13일 ICN→CDG 실제 편명·현지 도착시각·5석 동일 운임 확인</label>
<label><input type="checkbox">9월 14일 CDG/ORY→BCN 실제 편명·현지 도착시각·5석 확인</label>
<label><input type="checkbox">별도 발권 여부·환승 실패 시 보호·취소/변경 규정 확인</label>
<label><input type="checkbox">모든 항공편의 위탁수하물 5인분, 유럽 공항 이동시간 확인</label>
<label><input type="checkbox">파리 호텔 1박 및 바르셀로나 호텔 1박의 5인 객실 배치</label>
<label><input type="checkbox">바르셀로나 공항→호텔→승선항 차량과 짐 수납 확인</label>
<label><input type="checkbox">Windstar 9/15 또는 MSC 9/14 공식 승선 마감 확인</label>
<label><input type="checkbox">하선 직후 3명 귀국편(BCN 또는 FCO), 2명 신혼여행 연장 항공권 별도 확인</label>
<label><input type="checkbox">지연·결항 시 대체편과 보험 미승선 보장 조건 확인</label>
</div></div>
<div class="cruise-flight-sources"><a target="_blank" rel="noopener" href="https://www.koreanair.com/flights/ko-kr/flights-from-seoul-to-paris">대한항공 인천→파리 공식 예약 검색 ↗</a><a target="_blank" rel="noopener" href="https://wwws.airfrance.co.kr/">에어프랑스 다구간 항공권 확인 ↗</a><a target="_blank" rel="noopener" href="https://www.icruise.com/itineraries/8-night-yachtsmans-harbors-of-the-rivieras-cruise_star-explorer_9-15-2027.html">9/15 크루즈 상세 출처 ↗</a></div>`;
const target=host.querySelector('#cruise-ko-itinerary')||host.querySelector('#cruise-logistics');host.insertBefore(section,target);
})();