/* 2027-09-16 Marseille departure alternative: ten nights, not a 7–8 night match. */
(function(){
'use strict';
const host=document.querySelector('#p-honeymoon .cruise-app');if(!host)return;
const days=[
['9/13 월','인천 → 파리','항공편·5석 미확인','파리 도착 후 1박. 항공 지연 시 다음 일정 보호 필요'],
['9/14 화','파리 → 마르세유','TGV 이동 권장안','파리 리옹역→마르세유 생샤를역 TGV, 통상 약 3시간대. 2027년 해당 열차·5석은 미확인'],
['9/15 수','마르세유','승선 전 여유일','항구 위치 확인, 여권·승선권 점검, 가족 휴식 및 구항 산책'],
['9/16 목','마르세유 승선','17:00 출항','체크인 마감은 선사 예약서로 확인. MPCT 승선 여부·Gate 4 차량 진입 확인'],
['9/17 금','해상일','종일','선내 시설·휴식, 멀미 대책 및 선내 결제 확인'],
['9/18 토','말라가','08:00–18:00','구시가 산책 또는 해변 관광, 출항 전 귀선'],
['9/19 일','카디스','07:00–17:00','카디스 구시가지 관광. 세비야 왕복은 장거리 이동이므로 귀선 위험'],
['9/20 월','리스본','09:00–18:00','구시가·벨렝 등 선택 관광. 언덕·노면전차 대기 고려'],
['9/21 화','해상일','종일','선내 휴식 및 귀국 전 이동계획 재점검'],
['9/22 수','알리칸테','10:00–18:00','항구·구시가지 관광 및 휴식'],
['9/23 목','마온(메노르카)','09:30–16:00','항구와 구시가지 산책. 오후 귀선 시각 유의'],
['9/24 금','올비아(사르데냐)','10:00–19:00','해변 또는 시내 투어, 이동수단 확인'],
['9/25 토','제노바','09:00–18:00','구항·시내 산책, 소매치기와 귀선시간 확인'],
['9/26 일','마르세유 하선','09:00 입항','가족 3명 귀국, 신혼부부 2명 유럽 연장. 항공 출발시각과 항구→공항 이동 여유 확보']
];
const escapeHtml=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const s=document.createElement('section');s.className='cruise-section cruise-marseille-extra';s.id='cruise-marseille-16';
s.innerHTML='<div class="cruise-section-title"><div><span class="cruise-eyebrow">추가 검토 / 9월 16일</span><h3>마르세유 승선 · MSC 신포니아</h3></div><span class="cruise-counter">10박 11일 · 기존 7~8박 조건 초과</span></div><div class="cruise-flight-warning"><strong>공개 출항 상품 확인 · 2027.09.16(목) 17:00 출항 → 09.26(일) 09:00 입항</strong><p>프랑스 마르세유 왕복. 크루즈 자체는 확인됐지만 5명 선실 재고, 파리↔마르세유 열차·항공 5석 및 최종 결제금액은 확인되지 않았습니다. 이 안은 기존 7~8박 조건을 완화할 경우에만 유효합니다.</p></div><div class="cruise-marseille-price"><div><small>해외 판매처 내측 객실 참고 시작가 · 1명</small><strong>US$1,771~</strong><span>5명 단순 5배 US$8,855~ · 3인실/1인실 추가요금, 항공, 세금 포함조건 별도 검증</span></div><div><small>유럽 예약 사이트의 별도 표시가</small><strong>€2,642</strong><span>SeaScanner 2명 설정 조회 화면의 요금 · 상품/객실·포함조건을 직접 대조할 것</span></div></div><p class="cruise-note">미국·유럽 판매처의 가격 표시 통화가 다릅니다. 유로가 무조건 결제 통화라는 뜻은 아닙니다. 원화 환산은 신혼여행 탭의 일별 기준환율과 실제 카드 수수료를 구분해 확인하세요.</p><h4 class="cruise-marseille-subtitle">파리 경유 포함 날짜별 이동·기항 일정</h4><div class="cruise-schedule-table"><div class="cruise-schedule-head"><span>날짜</span><span>위치</span><span>현지시각</span><span>일정</span><span>확인할 사항</span></div>'+days.map(r=>'<div class="cruise-schedule-row">'+r.map((x,i)=>'<span>'+escapeHtml(x)+'</span>').join('')+'</div>').join('')+'</div><div class="cruise-two"><article><h4>항공·열차 안전성</h4><p>9월 13일 파리 도착 → 14일 마르세유 이동 → 15일 현지 숙박 → 16일 승선이면 이동 지연 완충일을 확보할 수 있습니다. 다만 TGV는 실제 2027년 열차와 수하물 조건 확인이 필요합니다.</p><a target="_blank" rel="noopener" href="https://www.sncf-connect.com/">SNCF 프랑스 열차 검색 ↗</a></article><article><h4>실제 승선 터미널</h4><p>마르세유항은 터미널별 출입구가 다릅니다. 대형선 일반 크루즈 터미널은 Gate 4를 사용하나 선박별 정확한 터미널은 승선권으로 최종 확인해야 합니다.</p><a target="_blank" rel="noopener" href="https://www.marseille-port.fr/en/cruise-passengers">마르세유 항만 공식 안내 ↗</a></article></div><div class="cruise-flight-sources"><a href="https://www.icruise.com/itineraries/10-night-marseille-to-marseille-cruise_msc-sinfonia_9-16-2027.html" target="_blank" rel="noopener">해외 상품·운항표 ↗</a><a href="https://cruise.veltra.com/en/cruise/MSC-SX20270916MRSMRS" target="_blank" rel="noopener">VELTRA 출항표 ↗</a><a href="https://www.seascanner.com/cruise-k291991-western-mediterranean-msc-sinfonia-marseilles" target="_blank" rel="noopener">유럽 요금 참고 ↗</a></div>';
const anchor=host.querySelector('#cruise-flight-plan')||host.querySelector('#cruise-ko-itinerary');host.insertBefore(s,anchor);
})();
