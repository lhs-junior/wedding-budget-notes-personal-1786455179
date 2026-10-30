/* sdm-dress-perks.js — 르블랑 대체 드레스샵: 퍼스트·촬영 컬러·애프터 무료 조건 (2026-10-30 아이웨딩 쿠폰 원문 확인)
 * 피팅비·헬퍼비는 어느 샵이나 별도라 비교에서 뺌. 시즌(성수기/비수기) 구분은 전 샵 원문에서 확인 못 함 → '미확인'.
 */
var DRESS_PERKS={
 checked:'2026-10-30',
 groups:[
  ['first','퍼스트 포함 무료가 원문에 있는 곳'],
  ['both','촬영 컬러 + 애프터 둘 다 무료로 표시된 곳'],
  ['one','컬러·애프터 중 하나만 무료, 또는 퍼스트 할인'],
  ['none','현재 판매 조건 원문을 못 찾은 곳']
 ],
 /* g: 그룹, style: 스타일, first: 퍼스트 일반 추가금, perks: 원문 혜택(조건·마감), sept: 2027.9.12(일) 본식 기준 판단 */
 shops:[
  {n:'르블랑웨딩 (기준)',ig:'le_blanc_wedding_official',sim:-1,g:'first',style:'실크',first:'77만~110만 (비용 항목엔 55만~ 따로 표기)',
   perks:['지정예약: 프리미엄 무료, 퍼스트 포함 (촬영+본식 또는 본식만)','현장결정: 프리미엄 무료, 퍼스트 포함','당일결정 쿠폰은 퍼스트 제외 — 현장결정과 다름','지정예약: 촬영 컬러 1벌 + 애프터 1벌 무료','모두 2026.12.31까지'],
   sept:'아이웨딩 지정예약이면 퍼스트·컬러·애프터 무료가 각각 표시됨. 받았다는 320만 견적이 이 쿠폰을 적용한 금액인지 먼저 확인해야 함',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d353/17719'],['쿠폰 목록','https://www.iwedding.co.kr/enterprise/prd/coupons/co_sl_d353/17719'],['지정예약 퍼스트','https://www.iwedding.co.kr/coupon/detail/10264'],['컬러+애프터','https://www.iwedding.co.kr/coupon/detail/10367']]},
  {n:'메라키웨딩',ig:'merakiwedding_official',sim:4,g:'first',style:'실크·비즈',first:'99만',
   perks:['지정예약 또는 당일결정: 퍼스트 포함 무료 업그레이드 (본식 메인 1벌 한정, 2026.11.03까지)','촬영+본식 당일결정 또는 지정예약: 촬영용 또는 애프터 1벌 무료 (12.31까지)','촬영 구성: 화이트 3벌 또는 화이트 2 + 컬러 1 (시그니처 컬러 제외)'],
   sept:'퍼스트 무료 + 컬러는 기본 구성으로 가능. 애프터는 컬러와 택1이라 셋 다는 미확인. 퍼스트 쿠폰 마감이 11/3로 가장 빠름',
   src:[['촬영+본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d351/17533']]},
  {n:'이브스더데이',ig:'eves.theday',sim:3,g:'first',style:'미확인',first:'110만',
   perks:['현장결정: 전 라벨 무료, 퍼스트 포함 (촬영+본식 또는 본식만)','지정예약 또는 당일결정: 퍼스트 55만 고정','12.31까지','컬러·애프터 무료 조건 미확인'],
   sept:'현장결정이면 퍼스트 무료 후보. 컬러·애프터는 미확인',
   src:[['본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d263/18789']]},
  {n:'하우스오브에이미',ig:'houseofamy_official',sim:3,g:'first',style:'미확인',first:'110만',
   perks:['당일결정: 퍼스트 무료 업그레이드','본식만 지정예약 또는 현장결정: 애프터 1벌 무료','12.31까지','촬영 컬러 무료 미확인'],
   sept:'퍼스트 무료 후보. 애프터 쿠폰은 본식만 계약 조건이라 촬영+본식이면 적용 미확인',
   src:[['본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d52/18700']]},
  {n:'브라이덜온유',ig:'bridalonu_official',sim:3,g:'first',style:'수입 실크·타프타',first:'50만~100만',
   perks:['지정계약: 내맘대로패키지·온유패키지 퍼스트 무료 (10.31까지)','컬러·애프터 무료 미확인'],
   sept:'퍼스트 쿠폰이 10/31에 끝남 — 바로 확인 필요',
   src:[['본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d380/22159'],['쿠폰','https://www.iwedding.co.kr/coupon/detail/10809']]},
  {n:'니콜스포사',ig:'nicolesposa_weddingdress',sim:4,g:'both',style:'실크·비즈·레이스',first:'미확인',
   perks:['지정예약 또는 당일결정: 촬영 컬러 1벌 + 애프터 기본라인 1벌 무료','전 라벨 무료 쿠폰은 신상·퍼스트 별도 비용','둘 다 10.31까지'],
   sept:'컬러+애프터 후보, 퍼스트는 유료. 쿠폰 10/31 마감',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d342/13754'],['컬러+애프터','https://www.iwedding.co.kr/coupon/detail/9074']]},
  {n:'쥬빌리브라이드',ig:'jubilee.bride',sim:4,g:'both',style:'미확인',first:'미확인',
   perks:['촬영+본식 현장결정: 컬러 1벌 + 애프터 기본라인 1벌 무료','지정예약: 컬러 또는 애프터 택1','2027.03.31까지, "기간 내 신규 계약 고객" 적용'],
   sept:'현장결정이면 컬러+애프터 후보. 퍼스트 미확인',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d286/14474'],['현장결정 쿠폰','https://www.iwedding.co.kr/coupon/detail/10472']]},
  {n:'클라라웨딩',ig:'clarawedding_official',sim:3,g:'both',style:'실크 상품 있음',first:'100만',
   perks:['촬영+본식 지정예약: 컬러 + 애프터 1벌 무료','당일결정: 컬러 또는 애프터 택1','12.31까지'],
   sept:'지정예약이면 컬러+애프터 후보. 퍼스트는 유료',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d181/17941'],['지정예약 쿠폰','https://www.iwedding.co.kr/coupon/detail/10955']]},
  {n:'도화브라이드',ig:'dohhwabride_korea',sim:4,g:'both',style:'미확인',first:'33만~55만',
   perks:['지정예약: 컬러 1벌 + 애프터 기본라인 1벌 무료','현장결정: 컬러 또는 애프터 택1','전 라벨 무료 쿠폰은 퍼스트 포함 여부 미확인','10.31까지'],
   sept:'지정예약이면 컬러+애프터 후보. 퍼스트 추가금이 낮은 편',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d287/12411'],['쿠폰 목록','https://www.iwedding.co.kr/enterprise/prd/coupons/co_sl_d287/12411']]},
  {n:'아뜰리에로리에',ig:'atelierlaurier_official',sim:4,g:'both',style:'미확인',first:'30만',
   perks:['당일결정 또는 지정예약: 컬러 1벌 + 애프터 1벌 무료 (12.31까지)','기본 촬영 구성에 컬러 1벌이 이미 있어, 쿠폰 컬러가 추가 1벌인지 미확인'],
   sept:'컬러+애프터 후보. 퍼스트 30만이라 유료여도 부담이 작음',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d186/14312'],['쿠폰','https://www.iwedding.co.kr/coupon/detail/10465']]},
  {n:'크리드제이',ig:'creedj_official',sim:4,g:'one',style:'수입·잔잔한 비즈·레이스',first:'미확인',
   perks:['본식 지정예약 또는 당일결정: 애프터 1벌 무료 (12.31까지)','2026.10 후기엔 컬러·애프터 각 1벌 무료, 전 라벨 무료는 퍼스트 제외 (현재 조건 아님)'],
   sept:'클레 A타입+크리드제이+제이와이 패키지가 아이웨딩에 있음. 애프터 무료 후보',
   src:[['본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d283/18816'],['클레+제이와이 패키지','https://www.iwedding.co.kr/enterprise/prd/co_sl_i001/18205'],['후기','https://m.blog.naver.com/top9508/224431389529']]},
  {n:'디아일',ig:'the_aisle_official',sim:3,g:'one',style:'실크',first:'미확인',
   perks:['본식만 지정예약 또는 당일결정: 애프터 1벌 무료 (12.31까지)','퍼스트·컬러 미확인'],
   sept:'애프터 쿠폰이 본식만 계약 조건',
   src:[['본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d148/6663']]},
  {n:'르네아뜰리에',ig:'rene_atelier_official',sim:4,g:'one',style:'깨끗한 실크·과하지 않은 비즈',first:'미확인',
   perks:['촬영+본식 또는 본식만, 지정예약 또는 당일결정: 애프터 1벌 무료 (12.31까지)','기본 촬영 구성에 컬러 1벌 포함'],
   sept:'기본 컬러 + 애프터 무료라 결과적으로 컬러·애프터 둘 다 후보',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d335/13124'],['쿠폰','https://www.iwedding.co.kr/coupon/detail/9686']]},
  {n:'안나스포사',ig:'annasposaclassic',sim:4,g:'one',style:'클래식 실크·오간자',first:'미확인',
   perks:['지정예약: 본식 선홀딩 1벌 전 라벨 무료, 퍼스트 제외 (12.31까지)','촬영+본식 기본 구성에 컬러 1벌 포함','애프터 무료 미확인'],
   sept:'컬러는 기본 구성. 퍼스트·애프터는 유료 가능성',
   src:[['촬영+본식 상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d114/16226'],['쿠폰','https://www.iwedding.co.kr/coupon/detail/10260']]},
  {n:'모리엠포티',ig:'morimforti_office',sim:4,g:'one',style:'실크',first:'99만',
   perks:['촬영+본식 또는 촬영만 당일결정: 촬영 컬러 1벌 무료','본식만 지정예약: 애프터 무료','시그니처 무료 업그레이드의 퍼스트 포함 미확인','12.31까지'],
   sept:'컬러·애프터 쿠폰 조건이 달라 한 계약에 둘 다는 미확인',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d221/5347'],['애프터 쿠폰','https://www.iwedding.co.kr/coupon/detail/8978']]},
  {n:'로우케이',ig:'leaukxthebeulah_official',sim:3,g:'one',style:'미카도·오간자, 심플',first:'미확인',
   perks:['지정예약: 전 라벨 무료, 퍼스트 제외','지정예약: 컬러 또는 애프터 기본라인 택1','12.31까지'],
   sept:'택1만 확인',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d371/20427']]},
  {n:'로브드K',ig:'robedek.official',sim:3,g:'one',style:'청순·로맨틱, 실크',first:'미확인',
   perks:['지정예약: 전 라벨 무료 (퍼스트 포함 미확인)','촬영+본식 지정예약: 컬러 또는 애프터 택1','12.31까지'],
   sept:'택1만 확인',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d254/6219']]},
  {n:'셀린아뜰리에',ig:'celineatelier_wedding',sim:4,g:'one',style:'미카도 실크·밝은 비즈',first:'88만~132만',
   perks:['지정예약 또는 당일결정: 퍼스트 50% 할인','지정예약: 전 라벨 무료, 퍼스트 제외','컬러 또는 기본 애프터 택1','12.31까지'],
   sept:'퍼스트 반값 + 택1',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d157/18811']]},
  {n:'조슈아벨',ig:'joshuabelle_office',sim:4,g:'one',style:'오간자 실크·꽃 장식',first:'미확인',
   perks:['지정예약 또는 당일결정: 퍼스트 50% 할인 (12.31까지)','애프터 무료는 지정예약, 컬러 무료는 당일·현장결정 — 결정 조건이 달라 중복 미확인 (둘 다 10.31까지)','애프터 세탁비 11만 별도'],
   sept:'퍼스트 반값. 컬러·애프터 동시 적용은 미확인',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d267/18809'],['쿠폰 목록','https://www.iwedding.co.kr/enterprise/prd/coupons/co_sl_d267/18809']]},
  {n:'에토프꾸뛰르',ig:'etoffecouture_official',sim:4,g:'one',style:'미카도·자가드 실크',first:'수입라인 99만',
   perks:['지정예약: 애프터 1벌 무료','당일결정: 애프터 또는 당일 홀딩 프리미엄 무료 (퍼스트 포함 미확인)','12.31까지'],
   sept:'애프터 무료 후보',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d241/13436']]},
  {n:'아벨바이케이',ig:'abelbyk_official',sim:4,g:'one',style:'수입·잔잔한 비즈',first:'55만~',
   perks:['지정예약: 20만 할인 + 오뜨라인 무료 + 컬러 또는 애프터 택1','현장결정: 오뜨라인 전라인 무료 + 컬러 또는 애프터','오뜨라인 무료에 퍼스트 포함 미확인','12.31까지'],
   sept:'택1. 퍼스트 포함 여부 물어볼 것',
   src:[['상품','https://www.iwedding.co.kr/enterprise/prd/co_sl_d269/23546']]},
  {n:'에스띠아',ig:'hestia_bride',sim:4,g:'none',style:'오간자·미카도, 단아한 실크',first:'미확인',
   perks:['아이웨딩 판매 상품 없음','2023·2024 후기: 당일결정 시 모든 라벨 추가금 없음 + 촬영 컬러 1벌 + 2부 서비스 (퍼스트 언급 없음)','2026.02 후기: 촬영가봉에 유색 포함 4벌, 무료 여부 미기재'],
   sept:'현재 혜택 미확인',
   src:[['2024 후기','https://reveduete.tistory.com/90']]},
  {n:'브라이드영',ig:'brideyoung_',sim:5,g:'none',style:'새틴·오간자 실크·펄비즈',first:'미확인',
   perks:['아이웨딩 상품 없음, 웨딩북은 “정찰제”로만 표시','2025.03 후기: 다이렉트 박람회 지정계약 퍼스트 +30만 (혜택 없으면 +80만)','2024.06 후기: 지정계약인데 입은 4벌 모두 +20만~30만, 미리 안내 안 해 불만','2026 후기들: 당일 혜택은 비밀댓글로만 공유'],
   sept:'현재 혜택 미확인',
   src:[['2025 후기','https://m.blog.naver.com/ag_468/223785704114']]},
  {n:'마리에드오늘',ig:'mariee_de_oneul',sim:4,g:'none',style:'미카도·오간자, 부드러운 실크',first:'미확인',
   perks:['아이웨딩 원문 없음','후기는 혜택을 이메일로만 공유'],
   sept:'현재 혜택 미확인',
   src:[['후기','https://m.blog.naver.com/dyes99/224446249921']]},
  {n:'리디아브라이드',ig:'lydiabride_official',sim:4,g:'none',style:'청순·깔끔한 실크',first:'미확인',
   perks:['아이웨딩 원문 없음'],
   sept:'현재 혜택 미확인',
   src:[['웨딩라운지','https://weddinglounge.co.kr/item/biz_view.php?bi_idx=87&select_bit_idx=300']]},
  {"n": "라포레", "ig": "laforet___official", "sim": 0, "g": "first", "style": "사진 판단 보류 (흰 투피스·튤 겹치마)", "first": "미확인 (블랙 55만~88만, 프리미엄 110만~220만, 수입 110만~165만)", "perks": ["지정예약 또는 당일결정: 퍼스트 무료 (수입라인 제외), 촬영+본식 또는 본식", "촬영+본식 지정예약: 촬영드레스 1벌 + 애프터 1벌 무료", "촬영+본식 당일결정: 촬영 또는 애프터 택1", "쿠폰 7개 모두 2026.12.31까지, “기간 내 신규 계약 고객”, 조기 마감 가능", "촬영 기본 구성: 화이트 2 + 컬러 1"], "sept": "지정예약이면 퍼스트·촬영드레스·애프터 무료가 각각 있음 — 셋 다 쿠폰 기준으로 가장 가까움. 중복 적용·지점(서울/대구) 미확인", "src": [["업체", "https://www.iwedding.co.kr/enterprise/info/co_sl_d331"], ["쿠폰 목록", "https://www.iwedding.co.kr/enterprise/info/coupons/co_sl_d331"], ["퍼스트 무료", "https://www.iwedding.co.kr/coupon/detail/10761"], ["촬영+애프터", "https://www.iwedding.co.kr/coupon/detail/9838"]]},
  {"n": "플로렌스웨딩", "ig": "florencewedding_official", "sim": 0, "g": "one", "style": "사진 판단 보류 (테마 의상 많음)", "first": "미확인 (블랙 88만~165만, 시그니처 88만~220만)", "perks": ["촬영+본식 당일결정 또는 지정예약: 촬영 또는 애프터 택1", "지정예약: 블랙라벨 무료, 당일결정: 당일 홀딩 블랙라벨 무료", "시그니처 30% 할인", "2026.12.31까지"], "sept": "택1. 퍼스트 무료 없음", "src": [["본식 상품", "https://www.iwedding.co.kr/enterprise/prd/co_sl_d228/18703"], ["쿠폰 목록", "https://www.iwedding.co.kr/enterprise/info/coupons/co_sl_d228"]]},
  {"n": "벨에포크", "ig": "bellepoque_weddingdress", "sim": 0, "g": "one", "style": "사진 판단 보류", "first": "시그니처 +88만, 스페셜 +110만~220만", "perks": ["촬영+본식 당일결정 또는 지정예약: 촬영 컬러 또는 애프터 택1", "당일결정: 당일 홀딩 스페셜라인 무료", "2026.12.31까지", "애프터 일반 33만~88만"], "sept": "택1. 퍼스트라는 이름의 라인 없음 — 스페셜라인이 최상위인지 물어볼 것", "src": [["상품", "https://www.iwedding.co.kr/enterprise/prd/co_sl_d330/14936"], ["쿠폰 목록", "https://www.iwedding.co.kr/enterprise/info/coupons/co_sl_d330"]]},
  {"n": "바이원드레스", "ig": "byonedress", "sim": 3, "g": "one", "style": "튜브톱 볼륨형, 레이스·장식 많음 · 강남 선릉로162길", "first": "미확인 (예: 에블린 대여 150만)", "perks": ["공식몰: 본식 대여 고객 촬영 드레스 특전, 추가 시 1벌 22만", "공식몰: 지정 방문 고객 2부 드레스 무료 (30만 상당)", "신규회원 10% 할인", "2026-10-30 공식 페이지 원문 재확인 (Aside·Haiku): 위 3건 문구 일치, 피팅룸 강남구 선릉로162길 49 3층", "특전 벌 수·마감·중복은 포스터 이미지에만 있을 수 있어 미확인, 아이웨딩 상품 없음"], "sept": "촬영 특전 + 2부 무료가 둘 다 공식몰에 있음. 중복·조건 미확인", "src": [["본식 촬영 특전", "https://byonedress.com/board/gallery/read2.html?no=24&board_no=13"], ["2부 무료", "https://byonedress.com/board/gallery/read2.html?no=23&board_no=13"]]},
  {"n": "브라이드케이", "ig": "bride_k_wedding", "sim": 4, "g": "one", "style": "광택 튜브톱·넓은 치마, 촘촘한 반짝임", "first": "미확인", "perks": ["2025.06 후기: 당일지정 시 블랙라벨 추가요금 없이, 프리미엄 50% 할인, 2부 드레스 지원", "2026.02 후기: 유색 드레스 1벌 서비스", "현재 쿠폰 원문 없음 (다이렉트는 로그인 회원만)"], "sept": "후기상 컬러·2부 지원 사례. 퍼스트 언급 없음", "src": [["2025 후기", "https://m.blog.naver.com/dmgk32/223899754751"], ["2026 후기", "https://m.blog.naver.com/astre1102/224186704971"]]},
  {"n": "브라이드이오니 (대구)", "ig": "bride_aeoni", "sim": 3, "g": "one", "style": "장식 적은 슬림형, 홀터넥", "first": "189만 정찰제 (본식 헤메 포함, 2026.02 후기)", "perks": ["2026.02 후기: 당일계약 시 2부 드레스·촬영 드레스·부케 중 택1", "본식 드레스 추가금 없음"], "sept": "대구라 서울 촬영·본식이면 동선 불리", "src": [["2026 후기", "https://m.blog.naver.com/mi0603/224199055474"]]},
  {"n": "케이트린", "ig": "katelynn_official", "sim": 4, "g": "none", "style": "광택 치마, 오프숄더 드레이핑, 겹스커트", "first": "미확인", "perks": ["아이웨딩 검색 0건, 다이렉트 프로모션은 로그인 회원만", "다이렉트 게재 후기: 미카도실크 드레스 추가금 없이 진행 (단일 사례)"], "sept": "혜택 미확인", "src": [["다이렉트", "https://www.directwedding.co.kr/dress/katelynn"]]},
  {"n": "로브마지오", "ig": "robemaggio_official", "sim": 4, "g": "none", "style": "장식 적은 흰 원단, 직선 탑·사선 주름 · 맑은 비즈·실크", "first": "미확인 (가격 문의)", "perks": ["아이웨딩 검색 0건, 다이렉트 프로모션은 로그인 회원만"], "sept": "혜택 미확인", "src": [["다이렉트", "https://www.directwedding.co.kr/dress/robemaggio"], ["더퍼스트웨딩", "https://thefirstwedding.com/shop_view/?idx=100"]]},
  {"n": "디케웨딩", "ig": "tychewedding", "sim": 4, "g": "none", "style": "장식 적은 하트탑·원숄더 주름 · 자체제작", "first": "미확인", "perks": ["아이웨딩 검색 0건, 다이렉트 프로모션은 로그인 회원만", "다이렉트 게재 후기: 홀딩 드레스 추가금 없음, 촬영 유색은 마음에 드는 게 없어 따로 대여"], "sept": "혜택 미확인", "src": [["다이렉트", "https://www.directwedding.co.kr/dress/tyche"]]},
  {"n": "위드브라이드", "ig": "with_bride", "sim": 4, "g": "none", "style": "광택 튜브톱, 레이스 슬림형, 겹스커트", "first": "미확인 (베이직→블랙→프리미엄)", "perks": ["아이웨딩 검색 0건, 당일 혜택은 후기에서 비밀댓글로만 공유"], "sept": "혜택 미확인", "src": [["다이렉트", "https://www.directwedding.co.kr/dress/withbride"]]},
  {"n": "루비나엘웨딩", "ig": "luvinalwedding", "sim": 4, "g": "none", "style": "매끈한 흰 볼륨형, 꽃무늬·반짝이 장식", "first": "블랙라벨 +40만 (드레스별 상이)", "perks": ["다이렉트웨딩몰: 루비나엘+히엘 본식 드레스1 + 신랑신부 헤메 702,000원", "컬러·애프터·퍼스트 혜택 미확인"], "sept": "본식만 기준 저렴. 촬영 혜택 미확인", "src": [["다이렉트웨딩몰", "https://www.directweddingmall.com/goods/view_goods.php?pnum=128"]]},
  {"n": "이본느", "ig": "atelier_ivonne", "sim": 4, "g": "none", "style": "장식 적은 흰 탑, 사선 주름, 얇은 겹치마", "first": "미확인", "perks": ["청담 촬영·본식 대여샵 이본느 후기: 스냅 촬영용 3벌 60만 (스튜디오 제휴가, 보증금 30만)", "인스타 @atelier_ivonne과 같은 업체인지 미확인"], "sept": "본식 혜택 미확인", "src": [["2026 후기", "https://m.blog.naver.com/mmj_b/224439571354"]]},
  {"n": "메리코인비", "ig": "marry_coin_b", "sim": 4, "g": "none", "style": "매끈한 슬림형, 오프숄더 볼륨형", "first": "벌당 대여 55만~120만 (2025.12 기준표)", "perks": ["공식 공지: 제휴 할인 10%, 시즌오프 드레스 제외", "3벌 이상은 패키지로 따로 안내"], "sept": "벌당 대여 방식이라 패키지 혜택 구조가 다름", "src": [["공식 가격표", "https://m.blog.naver.com/bebon1007/223527204909"]]},
  {"n": "마이도터스웨딩", "ig": "mydaughters_wedding", "sim": 3, "g": "none", "style": "튜브톱, 풍성한 주름 치마", "first": "미확인", "perks": ["아이웨딩 표시가: 촬영+본식 600만, 본식 400만", "쿠폰 목록 표시 없음"], "sept": "표시가가 높음", "src": [["아이웨딩", "https://www.iwedding.co.kr/enterprise/info/co_sl_d178"]]}
 ],
 igChecked:'2026-10-30',
 igNote:'유사도는 Aside가 공식 인스타 최근 게시물(대부분 그리드 대표 이미지·릴스 표지) 9장 이상을 르블랑 12장과 비교한 주관 점수예요. 소재(실크·오간자·미카도)는 사진으로 확정하지 않았고, 대부분 4점이라 점수 차이는 크지 않아요.',
  asks:[
  '2027.9.12(일) 본식, 2027년 봄~여름 촬영에도 이 쿠폰이 적용되나요? 예식 월·요일(성수기·주말)로 빠지는 조건이 있나요?',
  '퍼스트 무료와 컬러·애프터 무료를 촬영+본식 한 계약에 같이 받을 수 있나요?',
  '지정예약·당일결정·현장결정 중 어느 걸로 해야 하나요? 쿠폰 마감 전에 계약까지 해야 하나요, 방문 예약만 하면 되나요?',
  '퍼스트 무료가 실크 드레스에도 똑같이 적용되나요? 1벌 한정인가요?'
 ]
};

function SDM_DRESS_PERKS(){
 var D=DRESS_PERKS;
 function ig(h,sc){return '<a href="https://www.instagram.com/'+esc(h)+'/" target="_blank" rel="noopener">@'+esc(h)+'</a><br>'+(sc>0?sc+'/5':sc<0?'기준':'사진 판단 보류');}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 return '<section class="sd-sec"><h3>르블랑 대체 드레스샵 혜택</h3>'+
  '<p class="sd-lead">조건: 퍼스트 무료 · 촬영 컬러 무료 · 애프터 무료 · 실크·오간자·잔잔한 비즈. 아이웨딩 상품과 쿠폰 원문은 '+D.checked+'에 확인했어요. 피팅비·헬퍼비는 어느 샵이나 따로 붙어서 비교에서 뺐어요.</p>'+
  '<p class="sd-note"><b>성수기·비수기:</b> 조사한 곳 모두 원문에서 시즌 구분을 확인하지 못해서 <b>미확인</b>으로 둬요. 상품 페이지와 쿠폰을 빠짐없이 다 읽었다고는 할 수 없어서 “제한 없음”으로 쓰지 않았어요. 쿠폰 마감일은 계약 기한이지 예식일 기준이 아니에요. 9월 일요일은 보통 성수기라 상담할 때 꼭 물어보세요. 세 혜택을 한 계약에서 모두 받을 수 있다고 확인된 곳도 없어요.</p>'+
  D.groups.map(function(g){
   var rows=D.shops.filter(function(s){return s.g===g[0];}).sort(function(a,b){function k(x){return x.sim<0?9:x.sim;}return k(b)-k(a);});
   return '<h4>'+g[1]+' ('+rows.length+')</h4><div class="sd-tablewrap"><table class="sd-table"><thead><tr><th>샵</th><th>인스타 · 르블랑 유사도</th><th>스타일</th><th>퍼스트 일반가</th><th>혜택 원문 (조건·마감)</th><th>2027.9.12 기준</th><th>출처</th></tr></thead><tbody>'+
    rows.map(function(s){return '<tr><td><b>'+esc(s.n)+'</b></td><td>'+ig(s.ig,s.sim)+'</td><td>'+esc(s.style)+'</td><td>'+esc(s.first)+'</td><td>'+s.perks.map(esc).join('<br>')+'</td><td>'+esc(s.sept)+'</td><td>'+s.src.map(function(l){return '<a href="'+esc(l[1])+'" target="_blank" rel="noopener">'+esc(l[0])+'</a>';}).join('<br>')+'</td></tr>';}).join('')+
    '</tbody></table></div>';
  }).join('')+
  '<p class="sd-note">'+esc(D.igNote)+' (인스타 확인 '+D.igChecked+')</p>'+
  '<h4>상담 때 서면으로 받을 질문</h4><ol>'+D.asks.map(function(q){return '<li>'+esc(q)+'</li>';}).join('')+'</ol>'+
  '</section>';
}
