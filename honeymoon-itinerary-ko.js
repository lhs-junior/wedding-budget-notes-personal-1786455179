/* 한국어 신혼여행 상세 일정표: 운항시간 출처 확인, 관광은 선택 제안 */
(function(){
'use strict';
const host=document.querySelector('#p-honeymoon .cruise-app');if(!host)return;
const plans=[
{title:'MSC 비르투오사',sub:'2027년 9월 14일(화) 승선 · 7박 8일 · 바르셀로나 왕복',source:'https://www.icruise.com/itineraries/7-night-barcelona-to-barcelona-cruise_msc-virtuosa_9-14-2027.html',rows:[
['9/13 월','파리 → 바르셀로나','시간 미정','오전 항공으로 바르셀로나 도착, 전용 차량 체크인. 사그라다 파밀리아 주변 산책 또는 휴식','전날 바르셀로나 숙박 필수 권장 · 프랑스 입국 후 별도 항공'],
['9/14 화','바르셀로나 승선','19:00 출항','호텔 체크아웃 → 항구 이동 → 승선·안전훈련 → 선내 식사','실제 승선 마감은 선사 예약서 기준'],
['9/15 수','해상일','종일','수영장·공연·휴식, 가족 5명 식사시간 확인','유료 음료·인터넷 가격 별도 확인'],
['9/16 목','튀니스(라굴레트)','08:00~18:00','기항지 관광 또는 선내 휴식 선택','튀니지 외교부 여행경보 및 항만 투어 운영 여부 반드시 확인'],
['9/17 금','팔레르모','08:00~18:00','구시가지·대성당 주변 가벼운 도보 관광, 점심','소매치기 유의·귀선 시간 확인'],
['9/18 토','나폴리','06:00~17:00','나폴리 시내 짧은 투어 또는 폼페이 선택','폼페이는 이동·보행 부담이 큼'],
['9/19 일','리보르노','09:00~20:00','피사 또는 피렌체 투어 중 선택, 부모님 체력 고려','피렌체 장거리 왕복·귀선 위험'],
['9/20 월','마르세유','10:00~18:00','구항·노트르담 드 라 가르드 주변 관광 또는 휴식','항구 셔틀 비용·귀선 마감 확인'],
['9/21 화','바르셀로나 하선','07:00 입항','하선 후 가족 3명 귀국 동선과 부부 2명 후속 여행 분리','아침 입항 즉시 공항 출발 가능하다는 보장 없음']]},
{title:'윈드스타 스타 익스플로러',sub:'2027년 9월 15일(수) 승선 · 8박 9일 · 바르셀로나 → 로마',source:'https://windstarcruisesale.com/itinerary/8-night-yachtsmans-harbors-of-the-rivieras-cruise/736263/1625433',rows:[
['9/13 월','인천 → 파리','항공 미확정','파리 도착·공항 인근 또는 시내 숙박','5좌석 실제 항공운임·수하물 확인'],
['9/14 화','파리 → 바르셀로나','항공 미확정','이른 항공 이동, 체크인 후 짧은 바르셀로나 관광','항공 지연 대비 전날 입항하는 일정'],
['9/15 수','바르셀로나 승선','17:00 출항','호텔 → 승선항 → 체크인·안전훈련·저녁 식사','선사 자료에 13:00 승선 시작 표시; 예약 시 재확인'],
['9/16 목','팔라모스','08:00~22:00','구항·해안 산책, 긴 점심, 휴식 중심','관광은 선택 제안'],
['9/17 금','포르방드르','08:00~17:00','프랑스 남부 항구 풍경·현지 식당','선내 귀선 마감 별도 확인'],
['9/18 토','사나리쉬르메르','08:00~18:00','프로방스 소도시 산책과 카페','항구에서 마을까지 이동 방식 확인'],
['9/19 일','몬테카를로','08:00~23:59','모나코 구시가·항구 관광 후 자유시간','혼잡한 관광지 소지품 관리'],
['9/20 월','칸','07:00~18:00','크루아제트 거리 산책·해변 휴식','텐더 승하선 여부 선사 확인'],
['9/21 화','포르토피노','09:00~21:00','해안 마을 사진·짧은 산책','텐더와 이동약자 접근성 확인'],
['9/22 수','포르토페라이오(엘바섬)','08:00~18:00','구시가지 산책 또는 해변 휴식','관광 택시·투어 비용 확인'],
['9/23 목','치비타베키아(로마) 하선','07:00 입항','가족 3명 로마 공항 이동·귀국, 부부 2명 로마 여행 시작','항구→공항 이동을 포함한 별도 견적 필요']]}
];
const section=document.createElement('section');section.className='cruise-section cruise-ko-itinerary';section.id='cruise-ko-itinerary';
section.innerHTML='<div class="cruise-section-title"><div><span class="cruise-eyebrow">일정표 / DAILY SCHEDULE</span><h3>날짜별 상세 일정</h3></div></div><p class="cruise-note">운항시간은 공개 판매 항차 기준의 현지시간입니다. 관광 코스는 제안이며 예약·기항지 투어 확정이 아닙니다. 파리 경유 항공편의 실제 운항시간과 운임은 확인되지 않았습니다.</p><div class="cruise-plan-tabs"><button type="button" data-plan="0" class="active">9/14 MSC 7박</button><button type="button" data-plan="1">9/15 윈드스타 8박</button></div><div id="cruise-ko-plan"></div>';
const anchor=host.querySelector('#cruise-logistics');host.insertBefore(section,anchor);
const escapeHtml=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
function draw(i){
const p=plans[i];
section.querySelector('#cruise-ko-plan').innerHTML='<h4>'+escapeHtml(p.title)+'</h4><p>'+escapeHtml(p.sub)+'</p><div class="cruise-schedule-table"><div class="cruise-schedule-head"><span>날짜</span><span>위치</span><span>선박 운항시간</span><span>추천 일정</span><span>확인할 사항</span></div>'+p.rows.map(r=>'<div class="cruise-schedule-row">'+r.map(x=>'<span>'+escapeHtml(x)+'</span>').join('')+'</div>').join('')+'</div><p class="cruise-note"><a href="'+escapeHtml(p.source)+'" target="_blank" rel="noopener">원문 항차 출처 확인 ↗</a> · 가격과 승선 가능 객실은 별도 확인해야 합니다.</p>';
section.querySelectorAll('[data-plan]').forEach(b=>{const active=b.dataset.plan===String(i);b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}
section.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>draw(Number(b.dataset.plan))));draw(0);
})();
