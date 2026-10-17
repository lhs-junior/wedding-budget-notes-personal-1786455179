/* 2026-10-17 5-adult cruise + flight price comparison (Trip.com, official lines, Naver flights); checked up to cabin/fare screens only. */
(function(){'use strict';
const app=document.querySelector('#p-honeymoon .cruise-app');if(!app)return;
const LE='https://www.royalcaribbean.com/itinerary/7-night-western-mediterranean-cruise-from-rome-civitavecchia-on-legend-LE7IP234?sailDate=2027-09-16&packageCode=LE7IP234&groupId=LE07ROM-237457943';
const T='https://kr.trip.com/cruises/selectrooms/';
// Trip.com 2+3 = (2인실 1인가 x2) + (3인실 1인가 x3), 항구 이용료 포함 '부터' 가격 합산. 선내 서비스 요금 별도.
const rows=[
['9/17 금','MSC Musica · 마르세유 왕복 7박','내측 6,422,366원 / 발코니 7,720,204원','즉시 확정 · iCruise 2인실 US$943(미국 판매사)',T+'154505?departure=2027-09-17'],
['9/16 목','Costa Smeralda · 로마 왕복 7박','내측 6,613,498원 / 발코니 8,483,402원','Costa 공식은 4명 초과 시 상담 전용',T+'44528?departure=2027-09-16'],
['9/17 금','Costa Toscana · 로마 왕복 7박','내측 6,824,682원 / 발코니 8,483,402원','트립닷컴 상세에 8%·5% 쿠폰 표시(조건 미확인)',T+'47720?departure=2027-09-17'],
['9/14 화','MSC Virtuosa · 바르셀로나 왕복 7박','내측 7,721,540원 / 발코니 9,725,104원','MSC 미국 공식 2+3 US$4,967.70 / US$7,077.70 (미국 프로모션은 미국 거주자 한정 명시)',T+'187349?departure=2027-09-14'],
['9/15 수','MSC World Europa · 로마 왕복 7박','내측 9,271,996원 / 발코니 11,918,464원','한국 ICK 2인1실 1인 US$1,459~ · 5인 상담 필수',T+'154673?departure=2027-09-15'],
['9/16 목','Royal Legend of the Seas · 로마 왕복 7박','내측 12,897,241원 / 발코니 15,407,421원','Royal 공식 2+3 US$9,469.20 / US$11,350.20 · CruiseTMK 10월 2번째 승객 60% 할인 견적 필요',T+'145139?departure=2027-09-16'],
['9/16 목','MSC Orchestra · 마르세유 왕복 7박','판매처 미발견','트립닷컴 검색 안 됨 · 해외 판매처 다수 매진','https://www.affordabletours.com/cruises/s/167991270916']
];
const fl=[
['인천→마르세유','터키항공 이스탄불 경유 9/14·15 23:20→다음날 09:20 (17시간)','1인 799,111원~'],
['인천→마르세유','스위스항공 취리히 경유 9/15 09:30→18:10 (15시간 40분, 최단)','1인 992,809원~'],
['인천→마르세유','에어프랑스 파리 경유 9/14·15 11:40→21:55 (17시간 15분)','1인 1,141,200원~'],
['인천→파리','에어프랑스 직항 9/15 11:40→18:40 · 아시아나 직항 9/13·15 10:05→17:20','1인 1,123,900원~ / 1,155,100원~'],
['인천→로마','아시아나 직항 9/14 13:20→19:35','1인 1,291,800원~'],
['인천→바르셀로나','아시아나 직항 9/13 11:50→19:10 (9/14 출발은 Virtuosa 19:00 출항에 못 맞춤)','1인 1,346,500원~'],
['로마→인천','아시아나 직항 9/23 21:25→다음날 15:40','1인 1,339,900원~'],
['바르셀로나→인천','아시아나 직항 9/21 20:50→다음날 16:20','1인 1,354,770원~']
];
const kr=[
['Royal Caribbean · CruiseTMK(투어마케팅코리아)','1544-3441 · customer@rccl.kr · 평일 09:30~16:30. Legend 9/16 1인 내측 US$1,941.24(세금 포함) 노출 · 2026년 10월 예약 시 2번째 승객 60% 할인, 10/15~19 예약 시 객실당 내측 $225·발코니 $300 할인 공지',[['Legend 2027년 9월 요금','https://booking.cruisetmk.kr/swift/cruise?siid=1185585&searchcruise=1&lang=16&ship=15469&startdate=09%2F01%2F2027&enddate=09%2F30%2F2027&destinationtype=Ocean'],['투어마케팅코리아','https://www.tourmktg.co.kr/']]],
['MSC · 크루즈예약.com(ICK)','inquiry@cruisebooking.co.kr · 카카오톡 · 평일 09~17시. 5인 이상·3실 이상 별도 문의 · 객실 전원 만 65세 이상 시 내측 5%·발코니 10% 시니어 할인 공지(자격 문구 55세/65세 혼재, 확인 필요)',[['예약엔진','https://book.cruisebooking.co.kr/'],['상담·회사 안내','https://cruisebooking.co.kr/']]],
['Costa · 코스타크루즈 부산(GRS)','1544-2393 · 카카오톡 @코스타크루즈부산 · 평일 10~17시. 2027년 9월 항차 미노출',[['노선 검색','https://www.costacruisebusan.com/'],['고객문의','https://www.costacruisebusan.com/contact.html']]],
['하나투어','1577-1233(크루즈 ARS 7번) · 09~20시. 해당 날짜 상품 미노출',[['크루즈 상품','https://www.hanatour.com/package/cruise']]],
['모두투어','1544-5252 · 평일 09~18시. 해당 날짜 상품 미노출',[['테마여행(크루즈 포함)','https://www.modetour.com/package/theme']]],
['참좋은여행','크루즈/테마 02-2185-2650 · 평일 09~18시. 해당 날짜 상품 미노출',[['크루즈 상품','https://m.verygoodtour.com/Home/SubMain?menuCode=1200401']]],
['노랑풍선','크루즈/테마 02-2022-2490 · 평일 09~18시. 해당 날짜 상품 미노출',[['테마/크루즈','https://www.ybtour.co.kr/m/submain/pkg/AL00000']]],
['롯데관광','1577-3000 · LT투어 1566-0802 · 평일 09~18시. 해당 날짜 상품 미노출',[['롯데관광 크루즈','https://www.lottetour.com/main/cruise'],['LT투어 크루즈','https://lottecruise.com/']]],
['트립닷컴 크루즈','1666-0060 · 온라인 즉시 확정, 객실당 1~4명 선택 가능. 항구 이용료 포함, 선내 서비스 요금 별도',[['크루즈 검색','https://kr.trip.com/cruises/']]],
['크루즈맵','예약 창구 아님(색인·예약처 연결) · 02-2068-2799',[['2027년 9월 출항 색인','https://travelersmap.co.kr/cruise/departures/2027-09']]]
];
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const s=document.createElement('section');s.className='cruise-section cruise-marseille-audit';s.id='cruise-booking-check';
s.innerHTML='<div class="cruise-section-title"><div><span class="cruise-eyebrow">어디서 어떻게 예약할까 · 2026.10.17 조회</span><h3>성인 5명 크루즈·항공 최저가</h3></div><span class="cruise-counter">2+3 객실 기준 · 싼 순</span></div><div class="cruise-audit-extra"><strong>결론: 트립닷컴에서 MSC Musica 9/17 마르세유 + 터키항공 이스탄불 경유</strong><p>2인실+3인실 내측 6,422,366원(발코니 7,720,204원), 인천→마르세유 1인 799,111원~. 트립닷컴은 한국어·원화·5명 온라인 즉시 확정이 되는 유일한 판매처였고, 한국 여행사·Costa·MSC 한국 판매처는 5인 이상이 상담 전용입니다. 2+2+1(3실)은 1인실 요금 때문에 Musica 기준 2+3보다 약 183~230만원 비쌉니다.</p></div><p class="cruise-note">크루즈 금액은 트립닷컴 객실 선택 화면의 2인실·3인실 1인당 \'부터\' 가격(항구 이용료 포함)을 인원수만큼 더한 값이며, 실제 객실 선택 시 달라질 수 있습니다. 선내 서비스 요금은 별도. 항공은 네이버 항공권 성인 1인 편도 카드할인 기준가입니다.</p><div class="cruise-audit-table"><div class="cruise-audit-head"><span>승선일</span><span>항차</span><span>트립닷컴 2+3 합계</span><span>다른 판매처·프로모션</span><span>예약 화면</span></div>'+rows.map(r=>'<div class="cruise-audit-row">'+r.slice(0,4).map(v=>'<span>'+esc(v)+'</span>').join('')+'<span><a href="'+esc(r[4])+'" target="_blank" rel="noopener">열기 ↗</a></span></div>').join('')+'</div><div class="cruise-audit-extra"><strong>항공편 (성인 1인 편도 · 2027년 9월)</strong><p>'+fl.map(f=>'<b>'+esc(f[0])+'</b> '+esc(f[1])+' — '+esc(f[2])).join('<br>')+'<br><a href="https://flight.naver.com/flights/international/SEL:city-MRS:airport-20270914?adult=5&amp;isDirect=false&amp;fareType=Y&amp;sort=duration:asc" target="_blank" rel="noopener">네이버 인천→마르세유 5명 ↗</a> · <a href="https://flight.naver.com/flights/international/SEL:city-PAR:city-20270915?adult=5&amp;isDirect=false&amp;fareType=Y" target="_blank" rel="noopener">네이버 인천→파리 5명 ↗</a></p></div><div class="cruise-audit-extra"><strong>한국 예약 창구 · 직접 검색용 링크</strong><p>'+kr.map(k=>'<b>'+esc(k[0])+'</b> '+esc(k[1])+' — '+k[2].map(l=>'<a href="'+esc(l[1])+'" target="_blank" rel="noopener">'+esc(l[0])+' ↗</a>').join(' · ')).join('<br>')+'</p></div><div class="cruise-flight-sources"><a href="'+LE+'" target="_blank" rel="noopener">Royal Legend 9/16 공식 일정 ↗</a><a href="https://booking.cruisetmk.kr/swift/cruise?siid=1185585&amp;searchcruise=1&amp;lang=16&amp;ship=15469&amp;startdate=09%2F01%2F2027&amp;enddate=09%2F30%2F2027&amp;destinationtype=Ocean" target="_blank" rel="noopener">CruiseTMK Legend 9월 요금 ↗</a></div>';
app.insertBefore(s,app.querySelector('#cruise-compare'));})();
