/* snap-cases.js — 아이폰스냅(본식 서브스냅) 업체 비교, 4단계 검증 기준 적용 (2026-09-24 수집)
 * tier: 'A'=서로 다른 사람이 같은 가격을 별도로 확인(검증됨) | 'B'=실계약자 1인칭 후기(단일출처지만 실거래) |
 *       'C'=업체 자체 페이지/광고성 후기(가격은 있으나 실거래 확인 안됨) | 'D'=가격 확인 안됨(존재만 확인, DM전용 등)
 * solo/duo: 만원 단위 텍스트. discount는 있으면 할인 후 가격
 * src: [{url, note}] 실제로 연 URL만
 */
var SNAP_CASES = [
 {name:'빅러브스냅', tier:'A', solo:'23 → 19(할인)', duo:null, note:'업체 공지가와 실계약 후기(minniestory) 24만이 서로 맞음', src:[{url:'https://blog.naver.com/biglovesnap',note:'업체 공지 2026-05'}]},
 {name:'디와이스냅', tier:'A', solo:'25 → 19(할인)', duo:null, note:'서로 다른 두 블로거(라라, 파워J)가 각자 인스타 확인한 가격이 정확히 일치', src:[{url:'https://www.korea-iphone.com/blog/OgRcmXhDQFCz.html',note:'2026'}]},
 {name:'베일로그', tier:'A', solo:'25 → 20(할인)', duo:'옵션 있음(가격 확인 안됨)', note:'두 블로거 확인 일치. 2인 작가 옵션이 있다고만 나오고 금액은 없음', src:[{url:'https://www.korea-iphone.com/blog/OgRcmXhDQFCz.html',note:'2026'}]},
 {name:'비마이러브스냅', tier:'A', solo:'실장 30 → 26(할인)', duo:null, note:'두 블로거 확인 일치. 대표는 이보다 비쌈(가격 미기재)', src:[{url:'https://www.korea-iphone.com/blog/OgRcmXhDQFCz.html',note:'2026'}]},
 {name:'올더모먼트', tier:'A', solo:'25 → 20(할인)', duo:null, note:'두 블로거 확인 일치', src:[{url:'https://www.korea-iphone.com/blog/OgRcmXhDQFCz.html',note:'2026'}]},
 {name:'제로스냅', tier:'A', solo:'25 → 15(할인)', duo:null, note:'두 블로거 확인 일치. 이벤트 종료 가능성 있다고 업체가 명시', src:[{url:'https://www.korea-iphone.com/blog/OgRcmXhDQFCz.html',note:'2026'}]},
 {name:'엘로디스냅', tier:'A', solo:'25 → 20(할인)', duo:null, note:'두 블로거 확인 일치', src:[{url:'https://www.korea-iphone.com/blog/OgRcmXhDQFCz.html',note:'2026'}]},
 {name:'히어유어스냅', tier:'B', solo:'베이직 38 / 시그니처 45(VAT포함,2부+영상)', duo:null, note:'실계약자 1인칭 후기. 하이앤드 포지션', src:[{url:'https://blog.naver.com/blackwallstation/224035042152',note:'계약후기'}]},
 {name:'오퍼스스냅', tier:'B', solo:'35(2부+5)', duo:null, note:'실계약자 본인 후기, 원본·영상 분량 구체적', src:[{url:'blog(pass1)',note:'실계약'}]},
 {name:'실루엣스냅', tier:'B', solo:'스탠다드 할인 후 36', duo:null, note:'멕마웨 카페 실계약 댓글', src:[{url:'멕마웨카페 2026-07',note:'댓글'}]},
 {name:'모멘디크스냅', tier:'B', solo:'26 → 20(프로모션 전부 적용시 15)', duo:null, note:'실계약 후기, 2025-02', src:[{url:'blog(pass1)',note:'실계약'}]},
 {name:'모멘토에르모소', tier:'B', solo:'20 → 17', duo:null, note:'실계약, 원본400+장·보정10장 구체 기재', src:[{url:'blog(pass1)',note:'실계약'}]},
 {name:'마이보케스냅', tier:'B', solo:'30', duo:null, note:'2026년 실계약 후기', src:[{url:'blog(pass1)',note:'실계약'}]},
 {name:'슈어스스냅', tier:'C', solo:'15 → 9.9(이벤트)', duo:'25 → 19.9(이벤트)', note:'숨고 자체 프로필 가격. 여성 2인, 서울 강남', src:[{url:'숨고 프로필',note:'업체페이지'}]},
 {name:'웨디드스냅', tier:'C', solo:null, duo:'13 (시간무제한, 오픈특가)', note:'숨고 고수소식(업체 작성)', src:[{url:'숨고 2026-05-21',note:'업체글'}]},
 {name:'에하스냅', tier:'C', solo:'33', duo:'55 ~ 72', note:'업체 자체 페이지 기준. 2인 가격이 확인된 몇 안 되는 곳', src:[{url:'heuer.kr',note:'업체페이지'}]},
 {name:'플레저스냅', tier:'C', solo:'25(스탠다드)/28(디럭스)/33(프리미엄, 호텔예식용)', duo:null, note:'크몽 판매 페이지, 리뷰 15건·거래 27건', src:[{url:'https://kmong.com/gig/625140',note:'크몽'}]},
 {name:'스냅스케치', tier:'C', solo:'9(가성비)/19→14(베이직)/25→20(스페셜)', duo:null, note:'협찬성 소개 블로그로 보임, 4~5월 한정 할인', src:[{url:'https://m.blog.naver.com/beatus220/224249588814',note:'2026-04'}]},
 {name:'니앤디', tier:'C', solo:'35', duo:'40(2부까지)', note:'후기 블로그 기준', src:[{url:'blog(pass1)',note:''}]},
 {name:'디마로스냅', tier:'C', solo:'35', duo:null, note:'식전 1.5h~원판, 릴스 30초 포함', src:[{url:'blog(pass1)',note:''}]},
 {name:'원앤온리', tier:'C', solo:'실장 30 / 대표 38', duo:null, note:'식1h전~원판(2h), 원본400+', src:[{url:'blog(pass1)',note:''}]},
 {name:'문라이트스냅', tier:'C', solo:'38(2부+5.5)', duo:null, note:'식1h전~원판', src:[{url:'blog(pass1)',note:''}]},
 {name:'마이디어스냅', tier:'C', solo:'35(초상권 미동의시 38, 대표지정 +5)', duo:null, note:'', src:[{url:'blog(pass2)',note:''}]},
 {name:'유얼마이뮤즈', tier:'C', solo:'38.5', duo:null, note:'', src:[{url:'blog(pass2)',note:''}]},
 {name:'더노트', tier:'C', solo:'대표 34 / 실장 25(할인시 10만대)', duo:null, note:'', src:[{url:'blog(pass1,2)',note:''}]},
 {name:'호지스냅', tier:'C', solo:'28', duo:null, note:'', src:[{url:'blog(pass2)',note:''}]},
 {name:'아이보리스냅', tier:'C', solo:'20', duo:null, note:'서울 영등포, 본식서브 2시간', src:[{url:'숨고 Q&A',note:''}]},
 {name:'메이크마이뮤즈', tier:'C', solo:'25', duo:null, note:'', src:[{url:'숨고',note:''}]},
 {name:'유어아이즈스냅', tier:'D', solo:'18(본식)/15(스튜디오)', duo:null, note:'2023년 자료라 오래됨', src:[{url:'숨고 2023',note:'구자료'}]},
 {name:'아델라인스냅', tier:'C', solo:'10(2시간)', duo:null, note:'', src:[{url:'숨고',note:''}]},
 {name:'아워니스', tier:'D', solo:'10만원대', duo:null, note:'구체 금액 확인 안됨', src:[{url:'숨고',note:''}]},
 {name:'OAN 오안스냅', tier:'D', solo:null, duo:'10만원대(이벤트)', note:'금액·시기 구체적이지 않음', src:[{url:'blog(pass2)',note:''}]},
 {name:'셀린스냅', tier:'D', solo:null, duo:'18(2023년 자료)', note:'구자료라 지금 가격과 다를 수 있음', src:[{url:'2023',note:'구자료'}]},
 {name:'보니따스냅', tier:'D', solo:null, duo:'옵션 있음(가격 확인 안됨)', note:'Threads 본인 홍보글에서 "2인이 각도 다양"이라고만 언급, 금액 없음', src:[{url:'threads.com/@bonita_snap_',note:'2026'}]},
 {name:'유아르스냅', tier:'D', solo:null, duo:null, note:'직접 인스타그램·하이라이트 확인함 — 가격이 텍스트로 공개돼 있지 않고 DM 상담 전용. 사업자등록증은 공개. 계약 예약금만 10만원으로 확인', src:[{url:'https://blog.naver.com/psh4169/224143605627',note:'계약후기(금액 미기재)'},{url:'instagram.com/yuar_snap',note:'직접 방문, 가격 텍스트 없음'}]},
 {name:'도어스냅', tier:'D', solo:'실장 55 / 대표 65', duo:null, note:'후기 작성자가 인용한 견적이라 원 출처 미확인', src:[{url:'blog(pass1)',note:'인용, 원출처 미확인'}]}
];
