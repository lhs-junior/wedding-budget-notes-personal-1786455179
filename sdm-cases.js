/* sdm-cases.js — 스드메 실계약 사례 (네이버 카페 원문 직접 열람, 2026-09-24 수집)
 * c    : 글에 적힌 계약가(만원)
 * paid : 할인 적용 후 계약가(글에 명시된 경우만)
 * all  : 추가금까지 붙인 실지출(글에 명시된 경우만)
 * inc  : 계약가에 포함됐다고 적힌 항목 / out : 별도라고 적힌 항목
 * ad   : '광고'=포인트·혜택 받고 작성 고지 또는 운영사 홍보글, '불명'=고지 없음, '비광고'=혜택 없음 명시
 * st   : '계약' 또는 '견적'(계약 전)
 */
var SDM_CASES = [
 {id:'dw9397333', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-09', s:'세미앙', d:'셀린아뜰리에·안나스포사·제이스포사 중', m:'보이드바이박철', c:323.5, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9397333', note:'비동행 계약금 30만'},
 {id:'dw9403790', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-09', s:'세미앙', d:'로브마지오', m:'유림', c:314, inc:['원본','수정본'], out:['헬퍼','드레스투어비','부케'], ad:'광고', src:'https://cafe.naver.com/directwedding/9403790', note:''},
 {id:'dw9105900', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-06', s:'세미앙', d:'브라이덜수지', m:'유림', c:306, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9105900', note:''},
 {id:'dw9123151', l65:1, st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-07', s:'더청담', d:'브라이드벨라', m:'헤움', c:304, paid:270, inc:['원본','수정본'], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9123151', note:'당일 바우처로 270만 계약'},
 {id:'dw9146157', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-07', s:'피아(비토탈)', d:'브라이드K', m:'메이븐', c:287, all:298, inc:['원본','수정본'], out:['투어비 11'], ad:'불명', src:'https://cafe.naver.com/directwedding/9146157', note:'드레스를 마리에제이로 하면 -20만'},
 {id:'dw8906379', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-05', s:'미기재', d:'셀레네', m:'보이드바이박철 실장', c:225, all:285.5, inc:[], out:['원판 44','투어비 16.5'], ad:'광고', src:'https://cafe.naver.com/directwedding/8906379', note:'헬퍼는 285.5에 미포함'},
 {id:'dw9019132', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-06', s:'메리드하우스', d:'위드브라이드', m:'메이븐 부원장', c:267, paid:252, inc:['원본','수정본'], out:['헬퍼 50'], ad:'광고', src:'https://cafe.naver.com/directwedding/9019132', note:'박람회 할인 15만'},
 {id:'dw9169860', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-07', s:'헤로하우스(토탈)', d:'렌느브라이덜', m:'히엘', c:259, paid:192, inc:['원본'], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9169860', note:'박람회 포인트·캐시백 등 67만 할인 반영'},
 {id:'dw9385128', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-09', s:'테오그라피(토탈)', d:'세인트모니카', m:'로나', c:256, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9385128', note:'우아르로 바꾸면 +10만'},
 {id:'dw9169610', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-07', s:'스튜디오 사이', d:'브라이드윤', m:'로나 부원장', c:248.5, inc:['원본','수정본','투어비'], out:['헬퍼','작가지정','2부 드레스'], ad:'광고', src:'https://cafe.naver.com/directwedding/9169610', note:'스드메 188 + 원판·수정본 49.5 + 투어비 11'},
 {id:'dw8843240', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-04', s:'어바웃제인', d:'로브마지오·더케네스블랑 중', m:'메이블·히엘 중', c:247, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/8843240', note:''},
 {id:'dw8796117', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-04', s:'구호스튜디오', d:'아뜨레블랑', m:'려움 실장', c:220, inc:['원본','수정본','투어비'], out:['헬퍼','헤어변형','드레스 업그레이드'], ad:'광고', src:'https://cafe.naver.com/directwedding/8796117', note:'더케네스블랑 선택 시 +35만'},
 {id:'dw9142690', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-07', s:'원세컨드(세미)', d:'제이스포사', m:'앤드뮤', c:213, paid:180, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9142690', note:''},
 {id:'dw9363905', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-09', s:'로에빈(토탈)', d:'아뜨레블랑', m:'에스토브 부원장', c:209, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9363905', note:'2부 드레스·라벨 업그레이드 무료'},
 {id:'dw9238211', l65:1, st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-08', s:'섬 스튜디오(토탈)', d:'아뜨레블랑·브라이드영 중', m:'김선진끌로에 부원장', c:198, all:253, inc:[], out:['원본·수정본 44','피팅비 11','헬퍼','헤어변형'], ad:'광고', src:'https://cafe.naver.com/directwedding/9238211', note:''},
 {id:'dw9360257', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-09', s:'메이스튜디오(토탈)', d:'에델린', m:'치치라보', c:194, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9360257', note:'박람회 당일 계약'},
 {id:'dw9207124', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-07', s:'지니어스(토탈)', d:'아뜨레블랑', m:'메이븐', c:188, inc:['원본','수정본'], out:['헤어변형 25'], ad:'광고', src:'https://cafe.naver.com/directwedding/9207124', note:''},
 {id:'dw9282933', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-08', s:'헤로하우스(토탈)', d:'에델린·모니카블랑쉬·아이테오 중', m:'헤움', c:170, paid:145, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9282933', note:'바우처·업체 할인'},
 {id:'dw9068953', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-06', s:'메이스튜디오(토탈)', d:'더케네스블랑', m:'히엘', c:148, all:203, inc:[], out:['원본·수정본 44','피팅비 11'], ad:'광고', src:'https://cafe.naver.com/directwedding/9068953', note:'헬퍼는 203에 미포함'},
 {id:'dw8544578', st:'계약', co:'다이렉트', how:'비동행', reg:'서울', date:'2026-01', s:'스토리지고유(5시간)', d:'하오에·아이테오 중', m:'김활란뮤즈네프', c:475, inc:['원본','피팅비'], out:['헤어변형'], ad:'광고', src:'https://cafe.naver.com/directwedding/8544578', note:'스튜디오 170 별도 결제 합산. 고가 조합'},
 {id:'dw9372514', l65:1, st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-09', s:'이포토에세이(토탈)', d:'아뜨레블랑', m:'헤움', c:199, paid:184, inc:['원본','수정본'], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9372514', note:''},
 {id:'dw9306637', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-08', s:'어바웃제인(12월 촬영)', d:'아뜨레블랑', m:'헤움 부원장', c:239, paid:180, inc:[], out:['이모님 출장비 25×2'], ad:'광고', src:'https://cafe.naver.com/directwedding/9306637', note:'비수기 촬영·드레스 지정·카드 캐시백'},
 {id:'dw9104027', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-06', s:'부겐빌리아', d:'에델린꾸뛰르', m:'헤움', c:250, all:320, inc:[], out:['스튜디오 추가금 70'], ad:'광고', src:'https://cafe.naver.com/directwedding/9104027', note:''},
 {id:'dw9183547', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-07', s:'원세컨드', d:'에델린꾸뛰르', m:'치치라보', c:191, inc:['원본'], out:['헬퍼 50'], ad:'광고', src:'https://cafe.naver.com/directwedding/9183547', note:'원본 27.5 포함'},
 {id:'dw8575629', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-02', s:'원세컨드', d:'에델린', m:'치치라보', c:190, inc:['원본'], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/8575629', note:'원본 USB 제공'},
 {id:'dw9157866', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-07', s:'미기재', d:'브라이드벨라', m:'메이븐', c:180, all:235, inc:[], out:['필수 추가금 55'], ad:'광고', src:'https://cafe.naver.com/directwedding/9157866', note:''},
 {id:'dw8541258', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-01', s:'스텔라그라피(세미)', d:'브라이드영', m:'로나', c:164.7, inc:['원본'], out:['헬퍼','얼리스타트'], ad:'광고', src:'https://cafe.naver.com/directwedding/8541258', note:'정가 179.7에서 15만 할인'},
 {id:'dw8107332', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2025-10', s:'플로우', d:'브라이드영', m:'겐그레아', c:260, inc:['원본'], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/8107332', note:''},
 {id:'dw9028424', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-06', s:'테레지아(토탈)', d:'제이스포사', m:'고센뷰티', c:312, all:329, inc:[], out:['헬퍼 50','헤어변형 30','앨범 11'], ad:'광고', src:'https://cafe.naver.com/directwedding/9028424', note:'예식 후 정산'},
 {id:'dw9405135', st:'계약', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-09', s:'셀럽비비(토탈)', d:'브라이드벨라(미정)', m:'헤움', c:221, paid:191, inc:['원본','수정본'], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9405135', note:'카드 할인 30만'},
 {id:'dw9233715', st:'계약', co:'다이렉트', how:'비동행', reg:'인천', date:'2026-08', s:'아르센', d:'리혜', m:'아뜰리에썸머', c:211, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9233715', note:'할인 후 200만 미만'},
 {id:'dw9384266', st:'계약', co:'다이렉트', how:'비동행', reg:'수원', date:'2026-09', s:'FTS스튜디오(토탈)', d:'오브제하우스', m:'오브제하우스', c:170, all:219.5, inc:[], out:['원본·수정본 44','피팅비 5.5'], ad:'광고', src:'https://cafe.naver.com/directwedding/9384266', note:''},
 {id:'dw9106485', st:'계약', co:'다이렉트', how:'비동행', reg:'수원', date:'2026-06', s:'모노그램', d:'브라이드벨라·아뜨레블랑 중', m:'메리드메리', c:218, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/directwedding/9106485', note:''},
 {id:'dw9067043', st:'계약', co:'다이렉트', how:'비동행', reg:'수원', date:'2026-06', s:'1016수원', d:'S브라이드·라벨르엘린 중', m:'드레스샵 토탈', c:275, inc:['원본','수정본'], out:['헤어변형 28','헬퍼 50+','피팅비'], ad:'광고', src:'https://cafe.naver.com/directwedding/9067043', note:''},
 {id:'kb277', l65:1, st:'계약', co:'아이웨딩', how:'비동행', reg:'미기재', date:'2026-09', s:'가을 스튜디오', d:'메라키·비비드블랑·보네르 중', m:'김청경', c:240, all:309, inc:[], out:['헬퍼 25','야간씬 11','블랙라벨 11','드레스 추가 22'], ad:'불명', src:'https://cafe.naver.com/kimbride/277', note:'L65 협력사는 가을 시그니처·더브라이드 지점'},
 {id:'kb215', st:'계약', co:'아이웨딩', how:'비동행', reg:'미기재', date:'2026-09', s:'클레 A타입', d:'리안마리', m:'고센뷰티', c:247, inc:[], out:[], ad:'불명', src:'https://cafe.naver.com/kimbride/215', note:'실장가로 원장 업그레이드'},
 {id:'yz349925', st:'계약', co:'요즘웨딩', how:'비동행', reg:'미기재', date:'2026-09', s:'프라베소', d:'발레리아스포사·더에이미 중', m:'청담러비', c:316, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/poohstory/349925', note:'계약금 40만'},
 {id:'wk2454148', st:'계약', co:'웨딩킹', how:'비동행', reg:'서울', date:'2026-04', s:'지니어스(토탈)', d:'렌느브라이덜', m:'겐그레아', c:140.5, inc:[], out:[], ad:'불명', src:'https://cafe.naver.com/llchyll/2454148', note:'아이웨딩 다른 조합(클레/모네뜨아르/비기닝) 185 견적과 비교'},
 {id:'dw8995282', st:'견적', co:'다이렉트', how:'비동행', reg:'미기재', date:'2026-05', s:'라흐(토탈)', d:'브라이드윤', m:'치치라보', c:154, all:260, inc:[], out:['원본','피팅비','헬퍼 50'], ad:'불명', src:'https://cafe.naver.com/directwedding/8995282', note:'가견적. 추가금 포함 예상치'},
 {id:'dw9166777a', st:'견적', co:'다이렉트', how:'비동행', reg:'수원', date:'2026-07', s:'로라하우스 수원(토탈)', d:'렌느브라이덜', m:'히엘 부원장', c:273, inc:[], out:['헤어변형 출장비'], ad:'불명', src:'https://cafe.naver.com/directwedding/9166777', note:'같은 글에서 드레스만 바꾼 두 견적'},
 {id:'dw9166777b', st:'견적', co:'다이렉트', how:'비동행', reg:'수원', date:'2026-07', s:'로라하우스 수원(토탈)', d:'펠리스노비아', m:'히엘 부원장', c:258, inc:[], out:['헬퍼'], ad:'불명', src:'https://cafe.naver.com/directwedding/9166777', note:'드레스만 바꿔 15만 차이'},
 {id:'cr43580', st:'견적', co:'미기재', how:'비동행', reg:'미기재', date:'2025-09', s:'라크마', d:'디아일', m:'이경민포레', c:398, all:448, inc:[], out:['헬퍼 50'], ad:'불명', src:'https://cafe.naver.com/crc61class/43580', note:'고가 조합 견적'},
 {id:'mm651536', st:'계약', co:'멕마웨', how:'동행', reg:'미기재', date:'2026-05', s:'라흐', d:'스띨레디허', m:'유림', c:246, inc:['동행','부케'], out:['개인 옵션'], ad:'불명', src:'https://cafe.naver.com/makemywedding/651536', note:'동행인데 비동행 가격대'},
 {id:'wk2511686', st:'계약', co:'베리굿', how:'동행', reg:'서울', date:'2025-10', s:'미기재(단가 180)', d:'로즈로사', m:'미기재(단가 80)', c:460, inc:['부케 2회'], out:['플래닝피 3%'], ad:'비광고', src:'https://cafe.naver.com/llchyll/2511686', note:'드레스 194'},
 {id:'bl_dalgom', st:'계약', co:'베리굿', how:'동행', reg:'미기재', date:'2026-04', s:'스튜디오 사이(오전)', d:'소노(지정)', m:'드이희 실장', c:423.5, all:436.2, inc:[], out:['플래닝피 3% 12.7'], ad:'비광고', src:'https://blog.naver.com/dalgom339/224263963859', note:'블로그. 헬퍼 전 금액'},
 {id:'bl_erica', st:'계약', co:'베리굿', how:'동행', reg:'미기재', date:'2026-07', s:'스튜디오 사이', d:'렌느브라이덜', m:'뷰티진동희', c:299, inc:[], out:['플래닝피 3%'], ad:'광고', src:'https://blog.naver.com/erica1769/224360614698', note:'블로그. 프로모션가'},
 {id:'bl_work', st:'계약', co:'아이니', how:'동행', reg:'미기재', date:'2026-04', s:'행사가 스튜디오', d:'누벨드블랑', m:'비올', c:296, inc:[], out:['부케(포함 시 326)'], ad:'불명', src:'https://blog.naver.com/work00012/224255996215', note:'블로그. 풀동행'},
 {id:'wk2553892', st:'계약', co:'샐리브라이드', how:'토탈샵', reg:'수원', date:'2026-07', s:'샐리브라이드', d:'샐리브라이드', m:'샐리브라이드', c:281, inc:['부케','액자'], out:[], ad:'불명', src:'https://cafe.naver.com/llchyll/2553892', note:'한 매장에서 스드메 전부'},
 {id:'wk2470214', st:'계약', co:'샐리브라이드', how:'토탈샵', reg:'수원', date:'2026-04', s:'샐리브라이드', d:'샐리브라이드(정찰제)', m:'샐리브라이드', c:285, paid:265, inc:['원본','앨범','액자'], out:[], ad:'불명', src:'https://cafe.naver.com/llchyll/2470214', note:'당일 현장 할인'},
 {id:'wk2608875', st:'계약', co:'브라이덜휘', how:'토탈샵', reg:'수원', date:'2026-09', s:'미기재', d:'브라이덜휘', m:'서휘메이크업', c:330, inc:[], out:[], ad:'광고', src:'https://cafe.naver.com/llchyll/2608875', note:'실크 무료 업그레이드'},
 {id:'wk2494112', st:'계약', co:'IWC인천웨딩', how:'비동행', reg:'인천', date:'2026-03', s:'미기재(서울 소재, +20)', d:'로코코로(지정)', m:'미기재', c:148, all:168, inc:['2부 드레스'], out:['서울 스튜디오 20'], ad:'불명', src:'https://cafe.naver.com/llchyll/2494112', note:'정찰제 이벤트'}
];

/* 같은 업체·같은 조합을 여러 곳에서 견적 받은 사례 */
var SDM_SAME = [
 {what:'드레스만 · 브라이드손윤희 지정', rows:[['워크인(정가)','220~230'],['베리굿(동행)','187 + 플래닝피 3% · 스드메 중 2개 계약 필수'],['신부야(비동행)','150 + 계약금·서비스료 → 약 187'],['와이즈','180 (최종 계약)'],['아이웨딩(비동행)','223']], take:'작성자 결론: 플래닝피가 있든 없든 결국 180만원대로 비슷', ad:'불명', src:'https://cafe.naver.com/makemywedding/614943'},
 {what:'같은 스드메 조합 (업체명 비공개)', rows:[['동행','420만대'],['비동행','380만대']], take:'동행이 약 40만 비쌈', ad:'비광고', src:'https://blog.naver.com/haabby_/224345232487'},
 {what:'조안 · 브라이드K · 겐그레아', rows:[['웨딩킹','178.5'],['다이렉트','242']], take:'같은 비동행끼리 63.5만 차이', ad:'광고', src:'https://cafe.naver.com/llchyll/2555638'},
 {what:'스튜디오 사이 · 더에이미 · 유림', rows:[['웨딩킹','282'],['다이렉트','381.5']], take:'같은 비동행끼리 약 100만 차이', ad:'광고', src:'https://cafe.naver.com/llchyll/2577920'},
 {what:'로라스튜디오 · 더에이미 · 꾸띠원', rows:[['웨딩킹','254.5'],['다이렉트','320']], take:'같은 비동행끼리 65.5만 차이', ad:'광고', src:'https://cafe.naver.com/llchyll/2559360'}
];
