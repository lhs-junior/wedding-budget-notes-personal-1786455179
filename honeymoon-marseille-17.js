/* 2027-09-17 Marseille 7-night sailing, verified against iCruise and CruiseTimetables. */
(function(){'use strict';
const app=document.querySelector('#p-honeymoon .cruise-app');if(!app)return;
const rows=[
['9/13 월','인천 → 파리','항공 미확인','5명 출국, 파리 숙박'],
['9/14 화','파리 → 마르세유','TGV 후보','열차 5석·예약 가능 일정 확인'],
['9/15 수','마르세유','자유 일정','시내 관광·휴식'],
['9/16 목','마르세유','승선 전박','항구 이동 점검·짐 정리. 원래 16일 MSC Sinfonia 10박과 구분'],
['9/17 금','마르세유 승선','19:00 출항','MSC Musica 7박 탑승, 선사 체크인 마감 별도 확인'],
['9/18 토','제노바','09:00~17:00','구항·도심 관광, 가족 보행량 확인'],
['9/19 일','치비타베키아(로마)','08:00~19:00','로마 이동시간 포함 투어 예약, 귀선 위험 고려'],
['9/20 월','팔레르모','11:00~20:00','구시가지·대성당 주변 관광'],
['9/21 화','해상일','종일','선내 휴식·공연'],
['9/22 수','이비사','12:30~23:00','항구 주변 관광·휴식'],
['9/23 목','발렌시아','07:00~16:00','시내 또는 예술과학도시 방문, 이동 시간 점검'],
['9/24 금','마르세유 하선','13:00 입항','가족 3명 귀국·부부 2명 후속 유럽여행. 오후 하선이므로 귀국편 시간 주의']
];
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const el=document.createElement('section');el.id='cruise-marseille-17';el.className='cruise-section cruise-marseille-extra';
el.innerHTML='<div class="cruise-section-title"><div><span class="cruise-eyebrow">추가 확인 · 7박 대안</span><h3>9월 17일 출발 · MSC 무지카</h3></div><span class="cruise-counter">7박 8일 · 마르세유 왕복</span></div><div class="cruise-flight-warning"><strong>2027.09.17(금) 19:00 출항 → 09.24(금) 13:00 입항</strong><p>iCruise·CruiseTimetables 두 출항표로 마르세유 7박 상품 확인. 9/16이 아닌 9/17 승선입니다. 가족 5명 실제 선실 재고와 최종 견적은 미확인입니다.</p></div><div class="cruise-marseille-price"><div><small>해외 판매처 내측 객실 · 1인 참고 시작가</small><strong>US$865~</strong><span>2인1실 기준 · 5명 단순 합산 US$4,325 · 3인실/싱글 추가요금과 항공 제외</span></div><div><small>여행기간</small><strong>7박 8일</strong><span>기존 7~8박 희망에 부합 · 9/24 13:00 하선으로 귀국편은 여유 있게 선택</span></div></div><h4 class="cruise-marseille-subtitle">파리 경유부터 하선까지 날짜별 상세 일정</h4><div class="cruise-schedule-table"><div class="cruise-schedule-head"><span>날짜</span><span>방문지</span><span>현지시간</span><span>실행 일정</span><span>검증 사항</span></div>'+rows.map(r=>'<div class="cruise-schedule-row">'+r.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div>').join('')+'</div><p class="cruise-note">관광은 예시 제안이며 항차 시각은 판매처 공개정보입니다. 항공·기차·호텔은 실제 5인 재고가 확인되지 않았습니다.</p><div class="cruise-flight-sources"><a href="https://www.icruise.com/itineraries/7-night-marseille-to-marseille-cruise_msc-musica_9-17-2027.html" target="_blank" rel="noopener">iCruise 7박 상품 ↗</a><a href="https://www.cruisetimetables.com/cruisesonmscmusica-17sep2027.html" target="_blank" rel="noopener">교차 출항표 ↗</a><a href="https://travelersmap.co.kr/cruise/v/msc-musica-7n-marseille-393c72aaa3d6" target="_blank" rel="noopener">국내 크루즈맵 항로 ↗</a></div>';
const anchor=app.querySelector('#cruise-marseille-16');app.insertBefore(el,anchor);})();
