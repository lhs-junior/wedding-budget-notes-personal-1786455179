/* 대한항공 SKYPASS 3인 보너스 항공권 우선순위 예약 준비표. 공개 정보 기반, 실시간 좌석 미확인. */
(function(){'use strict';
const app=document.querySelector('#p-honeymoon .cruise-app');if(!app)return;
const s=document.createElement('section');s.className='cruise-section cruise-mileage-plan';s.id='cruise-mileage-plan';
const trips=[
{rank:'1순위',name:'바르셀로나',airport:'BCN',route:'인천 → 바르셀로나',decision:'9/13 출국 우선. 9/14 출국은 당일 크루즈 승선에 사용하면 안 되며, 9/15 이후 승선 항차를 고를 것.',link:'https://www.koreanair.com/flights/ko-kr/flights-from-seoul-to-barcelona'},
{rank:'2순위',name:'마르세유',airport:'MRS',route:'인천 → 파리(CDG) → 마르세유',decision:'대한항공 파리행 보너스편 + 별도 열차/항공. 파리 도착 후 최소 하루의 이동 여유; 9/16~19 승선 검토.',link:'https://www.koreanair.com/flights/ko-kr/flights-from-seoul-to-paris'},
{rank:'3순위',name:'로마',airport:'FCO',route:'인천 → 로마',decision:'9/13 출국이면 9/14 이후 승선, 9/14 출국이면 9/15 이후 승선 검토. 치비타베키아 항구 이동 시간 별도 확보.',link:'https://www.koreanair.com/flights/ko-kr/flights-from-seoul-to-rome'}
];
s.innerHTML='<div class="cruise-section-title"><div><span class="cruise-eyebrow">대한항공 마일리지 · 3명</span><h3>취소석이 열리면 예약할 준비</h3></div><span class="cruise-counter">2027.09.13 / 09.14 출국</span></div><p class="cruise-note">크루즈 총 5명 계획과 구분: 아래 마일리지 항공권 대상은 **성인 3명**입니다. 3석의 실제 잔여 재고는 대한항공 예약 단계에서만 확정됩니다. 검색/대기/문자 알림은 예약 완료가 아닙니다.</p><div class="cruise-mileage-priority">'+trips.map(t=>'<article><span>'+t.rank+'</span><h4>'+t.name+' <small>'+t.airport+'</small></h4><p>'+t.route+'</p><p>'+t.decision+'</p><a target="_blank" rel="noopener" href="'+t.link+'">대한항공 노선 조회 ↗</a></article>').join('')+'</div><div class="cruise-flight-warning"><strong>항공편 조회는 두 출발일을 각각 확인</strong><p>2027년 9월 13일(월) 및 14일(화), 인천 출발, 편도, 성인 3명. 대한항공 마일리지 예매 → 가까운 날짜 함께 조회 → 일반석 보너스(필요하면 프레스티지) 선택. 잔여 1석은 3인 구매 가능이 아닙니다. 당일 경유편은 보호되는 연결발권인지 별도 확인합니다.</p></div><div class="cruise-two"><article><h4>지금 미리 완료할 것</h4><p>3명 여권 영문 이름·생년월일 확인, 스카이패스 계정/로그인, 사용 가능한 잔여 마일리지, 카드 해외결제 및 세금·유류할증료 결제 준비. 가족 마일리지 합산 시 항공권을 발급할 수 있는 가족관계인지 확인하고 사전 등록. 가족 외 동행인은 본인 계정 또는 해당 규정에 맞는 별도 발권 수단 필요.</p><a target="_blank" rel="noopener" href="https://www.koreanair.com/contents/skypass/benefits/family-plan/pooling">대한항공 가족 마일리지 양도·합산 안내 ↗</a></article><article><h4>취소석이 나왔을 때</h4><p><b>①</b> 3명 동시 검색→ <b>②</b> 실제 보너스 항공편·세금 확인→ <b>③</b> 승선 가능 도착일/시각 확인→ <b>④</b> 즉시 결제·발권→ <b>⑤</b> e-티켓 번호 3개 확인. 3인 동시 재고가 없으면 2+1 또는 1+1+1 분리 예약 가능성과 서로 다른 항공편 위험을 먼저 검토합니다.</p><a target="_blank" rel="noopener" href="https://www.koreanair.com/contents/booking/reservation-guide/how-to-book/mileage-booking-guide/award-ticket">대한항공 공식 보너스 항공권 예매 ↗</a></article></div><div class="cruise-flight-evidence"><h4>대기예약 및 취소표 확인 체크리스트</h4><div class="cruise-flight-checks">'+[
'2027.09.13 출국 · BCN 성인 3명 마일리지 일반석 조회',
'2027.09.14 출국 · BCN 성인 3명 마일리지 일반석 조회',
'2027.09.13·14 출국 · ICN→CDG 성인 3명 조회(마르세유 연결)',
'2027.09.13·14 출국 · ICN→FCO 성인 3명 조회',
'3명 동시 보너스석이 없으면 해당 항공편 보너스 대기예약 제공 여부 확인',
'3인 총 필요 마일리지와 세금·유류할증료·카드 결제 준비',
'크루즈 확정 승선일보다 하루 전 유럽 도착 가능 여부 확인',
'3명 동시 불가능 시 분리 발권 위험 및 가족 마일리지 사용 가능 여부 확인',
'결제 후 3명 각각 e-티켓 번호·영문 이름·수하물 확인'
].map(t=>'<label><input type="checkbox"> '+t+'</label>').join('')+'</div></div><p class="cruise-note">공식 안내: 대한항공은 360일 전 오전 9시(한국시간) 예약을 개시하며, 온라인은 예약과 동시 구매해야 합니다. 2027년 9월 13·14일은 이미 예약 개시 구간에 해당합니다. 보너스 대기예약은 확약 보장이 아니므로, 자리가 생기면 확정 통지·구매기한을 확인해야 합니다.</p>';
app.insertBefore(s,app.querySelector('#cruise-booking-check')||app.querySelector('#cruise-compare'));})();
