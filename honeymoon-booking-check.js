/* 2026-10-17 5-adult booking check on official cruise-line booking flows (stopped before guest info; no hold/payment). */
(function(){'use strict';
const app=document.querySelector('#p-honeymoon .cruise-app');if(!app)return;
const VI='https://www.msccruisesusa.com/booking/cabin-types?bookingItinCd=UY5R&itineraryCode=UY5R&date=14%2F09%2F2027-21%2F09%2F2027&cruiseID=VI20270914BCNBCN';
const LE='https://www.royalcaribbean.com/room-selection/type-and-subtype?sailDate=2027-09-16&shipCode=LE&groupId=LE07ROM-237457943';
const rows=[
['9/14 화','MSC Virtuosa · 바르셀로나 왕복 7박','2+3','객실 등급 화면 도달 · 방별(2인/3인) 따로 조회 후 합산 · 잔여 수량 표시 없음','인사이드 US$4,967.70 / 발코니 US$7,077.70',VI],
['9/14 화','MSC Virtuosa · 바르셀로나 왕복 7박','2+2+1','방별(2인/2인/1인) 조회 합산 · 1인실 인사이드 US$1,435.54','인사이드 US$5,777.70 / 발코니 US$8,587.70',VI],
['9/16 목','Royal Legend of the Seas · 로마 왕복 7박','2+3','2실 동시 선택 후 추가옵션 화면까지 진행 · 인사이드 "Only 3 left"','인사이드 US$9,469.20 / 발코니 US$11,350.20',LE],
['9/16 목','Royal Legend of the Seas · 로마 왕복 7박','2+2+1','3실 동시 선택 가능 · 1인 인사이드 3실, 1인 발코니 6실 남음','인사이드 US$11,711.20 / 발코니 US$15,707.20',LE],
['9/15 수','MSC World Europa · 로마 왕복 7박','미확인','공식 사이트 객실 화면 미도달. 한국 ICK 엔진에 1인 내측 US$1,459~(2인1실) 노출, 5인은 상담 필수','5인 총액 미확인','https://book.cruisebooking.co.kr/'],
['9/16 목','MSC Orchestra · 마르세유 왕복 7박','미확인','공식 사이트 객실 화면 미도달. 해외 판매처 다수 매진 표시','미확인','https://www.affordabletours.com/cruises/s/167991270916'],
['9/17 금','MSC Musica · 마르세유 왕복 7박','미확인','공식 사이트 객실 화면 미도달','미확인','https://www.icruise.com/itineraries/7-night-marseille-to-marseille-cruise_msc-musica_9-17-2027.html'],
['9/16·17','Costa Smeralda / Toscana · 로마 왕복 7박','미확인','성인 4명 초과 시 상담 폼으로만 진행. 2인 총액 €2,058 / €1,998','5인 총액 미확인','https://www.costacrociere.it/cruises/CIV07AD5/SM07270916.html']
];
const kr=[
['Royal Caribbean · CruiseTMK(투어마케팅코리아)','1544-3441 · customer@rccl.kr · 평일 09:30~16:30. Legend 9/16 1인 내측 US$1,941.24(세금 포함) 노출',[['Legend 2027년 9월 요금','https://booking.cruisetmk.kr/swift/cruise?siid=1185585&searchcruise=1&lang=16&ship=15469&startdate=09%2F01%2F2027&enddate=09%2F30%2F2027&destinationtype=Ocean'],['투어마케팅코리아','https://www.tourmktg.co.kr/']]],
['MSC · 크루즈예약.com(ICK)','inquiry@cruisebooking.co.kr · 카카오톡 · 평일 09~17시. 5인 이상·3실 이상 별도 문의',[['예약엔진','https://book.cruisebooking.co.kr/'],['상담·회사 안내','https://cruisebooking.co.kr/']]],
['Costa · 코스타크루즈 부산(GRS)','1544-2393 · 카카오톡 @코스타크루즈부산 · 평일 10~17시. 2027년 9월 항차 미노출',[['노선 검색','https://www.costacruisebusan.com/'],['고객문의','https://www.costacruisebusan.com/contact.html']]],
['하나투어','1577-1233(크루즈 ARS 7번) · 09~20시. 해당 날짜 상품 미노출',[['크루즈 상품','https://k.hanatour.com/package/cruise']]],
['모두투어','1544-5252 · 평일 09~18시. 해당 날짜 상품 미노출',[['크루즈 검색','https://www.modetour.com/search?keyword=%ED%81%AC%EB%A3%A8%EC%A6%88']]],
['참좋은여행','크루즈/테마 02-2185-2650 · 평일 09~18시. 해당 날짜 상품 미노출',[['크루즈 상품','https://m.verygoodtour.com/Home/SubMain?menuCode=1200401']]],
['노랑풍선','크루즈/테마 02-2022-2490 · 평일 09~18시. 해당 날짜 상품 미노출',[['테마/크루즈','https://www.ybtour.co.kr/m/submain/pkg/AL00000']]],
['롯데관광','1577-3000 · LT투어 1566-0802 · 평일 09~18시. 해당 날짜 상품 미노출',[['롯데관광 크루즈','https://www.lottetour.com/main/cruise'],['LT투어 크루즈','https://lottecruise.com/']]],
['크루즈맵','예약 창구 아님(색인·예약처 연결) · 02-2068-2799',[['2027년 9월 출항 색인','https://travelersmap.co.kr/cruise/departures/2027-09']]]
];
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const s=document.createElement('section');s.className='cruise-section cruise-marseille-audit';s.id='cruise-booking-check';
s.innerHTML='<div class="cruise-section-title"><div><span class="cruise-eyebrow">실제 예약 화면 검증 · 2026.10.17</span><h3>성인 5명 예약 가능 여부</h3></div><span class="cruise-counter">객실 화면 확인 2개 항차 · 미확인 5개</span></div><p class="cruise-note">선사 공식 예약 사이트에서 날짜·인원·객실을 직접 넣고 가격이 뜨는 화면까지만 진행했습니다(개인정보·홀드·결제 없음). 금액은 모두 세금·수수료 포함, 미국 시장 USD 기준이며 한국 거주자 요금은 미확인입니다.</p><div class="cruise-audit-table"><div class="cruise-audit-head"><span>승선일</span><span>항차</span><span>방 구성</span><span>예약 화면 결과</span><span>5인 총액 · 근거</span></div>'+rows.map(r=>'<div class="cruise-audit-row">'+r.slice(0,4).map(v=>'<span>'+esc(v)+'</span>').join('')+'<span><a href="'+esc(r[5])+'" target="_blank" rel="noopener">'+esc(r[4])+' ↗</a></span></div>').join('')+'</div><div class="cruise-audit-extra"><strong>한국 예약 창구 · 직접 검색용 링크</strong><p>'+kr.map(k=>'<b>'+esc(k[0])+'</b> '+esc(k[1])+' — '+k[2].map(l=>'<a href="'+esc(l[1])+'" target="_blank" rel="noopener">'+esc(l[0])+' ↗</a>').join(' · ')).join('<br>')+'</p></div><div class="cruise-flight-sources"><a href="'+LE+'" target="_blank" rel="noopener">Royal 객실 선택 화면 ↗</a><a href="'+VI+'" target="_blank" rel="noopener">MSC Virtuosa 예약 흐름 ↗</a><a href="https://booking.cruisetmk.kr/swift/cruise?siid=1185585&amp;searchcruise=1&amp;lang=16&amp;ship=15469&amp;startdate=09%2F01%2F2027&amp;enddate=09%2F30%2F2027&amp;destinationtype=Ocean" target="_blank" rel="noopener">CruiseTMK Legend 9월 요금 ↗</a></div>';
app.insertBefore(s,app.querySelector('#cruise-compare'));})();
