/* sdm-vendor-research.js — 업체별 스타일/후기/불편·추가금 조사
 * 원칙: 홍보성 장점보다 "실제로 고생할 수 있는 지점"과 회피법을 먼저 기록.
 * pain 항목은 해당 업체 후기에서 직접 확인된 사실과, 그 후기에서 파생되는 주의점을 분리해 적는다.
 */
var SDM_PAIN_GUIDE = {
 studio:[
  '원본·수정본 비용이 기본가에서 빠져 있는지',
  '촬영 후 셀렉 때 앨범 페이지·액자 업그레이드 영업이 있는지',
  '작가 지정비와 지정하지 않았을 때 결과 편차',
  '야간·로드·옥상 등 원하는 씬의 추가금과 촬영 가능 시간',
  '샘플과 실제 촬영 구도가 비슷하게 반복되는지',
  '보정본 수량·수정 횟수·납기'
 ],
 dress:[
  '기본 라벨에서 실제로 선택할 만한 드레스가 충분한지',
  '블랙/프리미엄/신상 라벨 추가금 상한',
  '투어·촬영가봉·본식가봉 때 입어볼 수 있는 벌 수와 피팅비',
  '당일지정 혜택이 계약서 특약에 남는지',
  '촬영·본식 헬퍼비와 2부 드레스·연장비',
  '사진 촬영 금지 시 비교할 수 있도록 스케치·메모가 가능한지'
 ],
 makeup:[
  '원장·부원장·실장 직급별 추가금과 실제 담당 범위',
  '베이스·눈·헤어를 여러 담당자가 나눠 하는지',
  '주말·새벽 대기시간과 얼리스타트 비용',
  '원하는 레퍼런스를 반영해 주는지, 수정 요청 시 즉시 대응하는지',
  '신랑 헤어·메이크업 포함 범위',
  '촬영 중 헤어변형이 별도 출장인지'
 ]
};

var SDM_VENDOR_RESEARCH = {
 'studio|세미앙':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2025-09',note:'2025년 후기 2건 확인. 다이렉트 우수후기는 제휴/리워드 가능성을 감안해 개인 블로그 후기와 함께 판단.'},
  hero:'https://cdn.imweb.me/thumbnail/20250905/ff312390a763f.jpg',
  links:[{label:'화보 보기',url:'https://www.thefirstwedding.com/studio/?idx=159'},{label:'인스타그램',url:'https://www.instagram.com/_semia.n/'},{label:'업체 정보',url:'https://thefirstwedding.com/shop_view/198?idx=198'}],
  style:'인물중심 · 모던 · 차분한 감성. 심플/그리너리 배경, 비토탈 진행.',
  includes:['드레스 3벌 + 자유복 2벌까지','촬영 중간 모니터링','원본·수정본 JPG 제공'],
  costTriggers:['야간씬 선택 +22만','작가 지정 +22~33만','드레스 1벌 추가 +11만'],
  pain:[
   '원하는 샘플이 야간씬이면 기본 촬영에 포함되지 않아 22만원이 추가된다.',
   '특정 작가의 샘플을 보고 골랐다면 작가 지정 없이 같은 결과를 기대하기 어렵다. 지정비가 별도다.',
   '외부 헤어변형은 3시간 제한이 있어 촬영 동선과 시간을 미리 맞춰야 한다.'
  ],
  avoid:['좋아하는 샘플의 작가 이름부터 확인','야간씬 포함 최종가로 비교','헤어변형 출장 시간을 촬영 타임과 함께 확정'],
  sources:[
   {label:'다이렉트 상품정보',url:'https://directwedding.webflow.io/studio/semia-n',kind:'업체정보'}
  ]
 },
 'studio|원세컨드':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2026-08',note:'2026년 카카오 공식채널에 최근 이용후기 여러 건 확인. 동일 플랫폼 비중이 높아 독립 출처 추가 확보가 바람직.'},
  hero:'https://cdn.imweb.me/upload/S20240204aca494e0b4938/34c54edef8d46.jpg',
  links:[{label:'화보 보기',url:'https://yozmwedding.co.kr/studio/?bmode=view&idx=18307399'},{label:'다이렉트',url:'https://www.directwedding.co.kr/studio/onesecond'},{label:'웨딩북 후기',url:'https://www.wdgbook.com/page/onesecondstudio/review/cbfa0a1f-809f-11e9-a278-0ab3aefe6e38'}],
  style:'세미촬영 · 인물중심 · 짧은 시간에 다양한 포즈를 빠르게 진행하는 타입.',
  includes:['세미촬영 후기 기준 약 2시간 촬영','비치 드레스·장신구 활용 가능 사례','원본+앨범+액자 구성 사례'],
  costTriggers:['후기 사례: 원본 23만','후기 사례: 드레스 대여/헬퍼 10만','신랑 턱시도 대여 5.5만 사례'],
  pain:[
   '포즈와 배경을 스튜디오가 빠르게 리드하는 만큼 커플별 결과가 비슷하게 느껴질 수 있다는 후기가 있다.',
   '촬영 장수는 많아도 연사 비중이 커 실제로 고를 만한 컷은 체감상 훨씬 적을 수 있다.',
   '세미촬영 기본가만 보면 저렴해 보여도 원본·드레스/헬퍼 비용이 별도로 붙은 사례가 있다.'
  ],
  avoid:['개성 있는 사진이 중요하면 원하는 포즈·구도 5개는 미리 전달','원본비 포함 여부 확인','총 촬영 장수보다 최종 보정본 수량으로 비교'],
  sources:[
   {label:'실촬영 후기',url:'https://duckgarden.tistory.com/17',kind:'개인후기'}
  ]
 },
 'studio|메이스튜디오':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2025-10',note:'2025년 개인 블로그 촬영후기와 다이렉트 후기 확인. 배경 다양성 장점과 셀렉 추가비는 별도 확인 필요.'},
  hero:'https://cdn.imweb.me/upload/S201904265cc294845b98d/9fb847de9fa0b.jpg',
  links:[{label:'화보 보기',url:'https://www.directwedding.co.kr/studio/may'},{label:'촬영 후기',url:'https://yyyyy13.tistory.com/66'},{label:'셀렉 후기',url:'https://sweets-sokuri.tistory.com/entry/%EC%9B%A8%EB%94%A9-%EA%B2%B0%ED%98%BC-%EC%A4%80%EB%B9%84-21-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%B4%AC%EC%98%81-%EB%A9%94%EC%9D%B4-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%ED%86%A0%ED%83%88%EC%83%B5-4-%EC%85%80%EB%A0%89-%ED%9B%84%EA%B8%B0'}],
  style:'깔끔한 인물 + 그리너리/배경 혼합. 실내에서 야외 느낌을 내는 세트가 특징.',
  includes:['실내 다중 배경','날씨 영향이 적은 촬영 환경'],
  costTriggers:['후기 사례: 앨범 페이지 추가 장당 3만원','원본·수정본 44만원 별도 계약 사례 존재','피팅비 별도 계약 사례 존재'],
  pain:[
   '셀렉 단계에서 앨범 페이지를 추가하다 보면 비용이 빠르게 늘어난다는 실제 후기가 있다. 4페이지만 추가해도 12만원 사례.',
   '스튜디오 공간이 아주 넓지는 않다는 후기가 있어 큰 규모 세트장 느낌을 기대하면 차이가 있을 수 있다.',
   '토탈 패키지는 기본가가 낮아도 원본·수정본과 피팅비가 별도로 붙은 계약 사례가 있다.'
  ],
  avoid:['촬영 전 앨범 기본 페이지 수와 장당 추가금 확인','셀렉 전 최대 추가 페이지 수를 둘이 합의','원본·수정본 포함 최종가로 비교'],
  sources:[
   {label:'촬영후기',url:'https://yyyyy13.tistory.com/66',kind:'개인후기'},
   {label:'셀렉후기',url:'https://sweets-sokuri.tistory.com/entry/%EC%9B%A8%EB%94%A9-%EA%B2%B0%ED%98%BC-%EC%A4%80%EB%B9%84-21-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%B4%AC%EC%98%81-%EB%A9%94%EC%9D%B4-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%ED%86%A0%ED%83%88%EC%83%B5-4-%EC%85%80%EB%A0%89-%ED%9B%84%EA%B8%B0',kind:'개인후기'}
  ]
 },
 'dress|아뜨레블랑':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2026-04',note:'최근 24개월 후기 2명 이상 확인. 일부 후기는 포인트 제공 고지가 있어 광고성 가능성은 별도 감안.'},
  hero:'https://www.weddingcrowd.kr/data/partner/297/20240625013839_341823_19%EA%BE%B8%EB%AF%B8%EA%B8%B0.jpg',
  links:[{label:'드레스 사진 12장',url:'https://www.weddingnote.co.kr/dress/attrait_blanc'},{label:'2026 촬영가봉 후기',url:'https://pandarank.net/contents/69dd02ef8926cb45bfa23856'},{label:'2025 2부가봉 후기',url:'https://www.keyzard.cc/seohee109/nb/223862005629'}],
  style:'실크와 잔비즈 모두 선택지가 있는 편. 촬영가봉에서 여러 벌 비교하는 후기 다수.',
  includes:['촬영가봉 6벌 피팅 후 3벌 선택 사례','당일지정 시 블랙라벨 업그레이드 혜택 사례'],
  costTriggers:['드레스투어 피팅비 사례 5만','라벨 업그레이드 여부는 계약별 확인 필요','2부 드레스는 계약/프로모션별 서비스 여부 차이'],
  pain:[
   '드레스 투어 자체가 체력 소모가 크고 샵을 늘릴수록 피팅비가 누적된다는 실제 후기들이 있다.',
   '실크만 생각하고 갔다가 잔비즈가 더 잘 어울려 선택 기준이 바뀌는 사례처럼, 사진만 보고 정한 취향이 현장에서 쉽게 바뀔 수 있다.',
   '당일지정 혜택은 시기별로 달라질 수 있어 말로만 듣고 계약하면 나중에 적용 범위가 모호해질 수 있다.'
  ],
  avoid:['투어를 2~3곳으로 압축','추가금 없는 라인도 반드시 함께 피팅','당일지정·블랙라벨·2부드레스 혜택을 계약서에 문구로 남기기'],
  sources:[
   {label:'드레스투어 후기',url:'https://2nd-daughter.tistory.com/317',kind:'개인후기'},
   {label:'본식가봉 후기',url:'https://2nd-daughter.tistory.com/331',kind:'개인후기'},
   {label:'최근 촬영가봉 후기',url:'https://pandarank.net/contents/69e7922bec661c6b33ae1a46',kind:'후기재가공'}
  ]
 },
 'dress|브라이드벨라':{
  researched:'2026-10-06',
  hero:'https://cdn.imweb.me/upload/S2024100788c40fba991cd/9d4e2782b073b.jpg',
  links:[{label:'컬렉션 보기',url:'https://colorinwedding.com/bridebella'},{label:'인스타그램',url:'https://www.instagram.com/bridebella_/'},{label:'상품/FAQ',url:'https://www.directwedding.co.kr/dress/bridebella'}],
  style:'기본·상위 라벨 선택 구조가 있는 드레스샵. 촬영 3벌+본식 1벌 기본 안내.',
  includes:['기본라벨 촬영드레스 3벌','기본라벨 본식드레스 1벌'],
  costTriggers:['촬영드레스 추가','본식 2부 드레스','라벨 업그레이드: 안내상 보통 각 최소 30만원부터'],
  pain:[
   '기본 패키지 안에서도 상위 라벨·2부·촬영 드레스 추가를 고르면 비용이 커질 수 있다.',
   '드레스 투어는 10~15분 이상 지각하면 피팅이 어렵거나 일정 취소/위약금 가능성이 안내돼 있어 이동시간을 빡빡하게 잡으면 위험하다.',
   '당일지정 혜택은 샵과 시기에 따라 달라 동일 후기의 혜택을 그대로 기대하면 안 된다.'
  ],
  avoid:['투어 사이 최소 20~30분 이동 여유','기본라벨에서 실제 고를 수 있는 드레스 먼저 요청','라벨별 최대 추가금표를 상담 때 받기'],
  sources:[
   {label:'브라이드벨라 안내/FAQ',url:'https://www.directwedding.co.kr/dress/bridebella',kind:'업체정보'}
  ]
 },
 'makeup|헤움':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2026-02',note:'2025 실제 후기와 2026 신랑 메이크업 후기를 확인. 남녀 담당 범위와 주말 혼잡도는 계약 전 재확인.'},
  hero:'https://www.directweddingmall.com/goods/img_dir/thum_img/WSP02039_16722193946.jpg',
  links:[{label:'공식 화보·상품',url:'https://directweddingmall.com/goods/view_comp.php?ccode=WSP02039'},{label:'2025 실제 후기',url:'https://www.keyzard.cc/seohee109/nb/223891980318'},{label:'과거 후기 모음',url:'https://www.wdgbook.com/page/heumm'}],
  style:'과하지 않고 깨끗한 피부표현·단아한 스타일 후기가 많음.',
  includes:['촬영/본식 헤어·메이크업 사례','요청 스타일 상담'],
  costTriggers:['직급 지정비는 계약별 확인','얼리스타트·신랑 포함 범위는 계약별 확인'],
  pain:[
   '메이크업은 원하는 느낌을 말로만 설명하면 해석 차이가 생길 수 있어 레퍼런스 사진을 준비하라는 후기 조언이 반복된다.',
   '완료 후 이동하기 전에 수정 요청을 해야 한다. 샵을 나온 뒤 마음에 안 드는 부분을 발견하면 대응하기 어렵다.',
   '피부 트러블이 심한 경우 평소 쓰는 화장품을 가져오라는 안내가 있어 민감성 피부는 사전 준비가 필요하다.'
  ],
  avoid:['원하는 사진 2~3장 + 싫은 사진 1장 준비','샵을 나가기 전 자연광/실내조명에서 둘 다 확인','민감성 피부면 익숙한 기초제품 지참'],
  sources:[
   {label:'촬영·본식 후기',url:'https://2nd-daughter.tistory.com/339',kind:'개인후기'},
   {label:'웨딩북 후기',url:'https://www.wdgbook.com/page/heumm/review/5ae370d9-dd99-11e7-93b9-0abe8d4f74d3',kind:'플랫폼후기'}
  ]
 },
 'makeup|치치라보':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2025-09',note:'2025년 촬영 후기와 본식 선택 후기를 확인. 발렛 5천원, 붙임머리·지정비 등 부대비용을 별도 확인.'},
  hero:'https://www.iwedding.co.kr/center/iweddingb/product_coupon/coupon_8733_1710900026_74893900_3232256100.jpg',
  links:[{label:'상품·사진',url:'https://www.iwedding.co.kr/enterprise/prd/co_sl_m195/13459'},{label:'화보 보기',url:'https://m.fundegi.co.kr/store/makeup.htm?idx=2382&mode=view&page=2'},{label:'촬영 후기',url:'https://oslife.tistory.com/29'}],
  style:'자연스럽고 단정한 음영 계열. 촬영 콘셉트를 보고 맞춰주는 후기가 있음.',
  includes:['헤어 후 메이크업, 촬영 전 최종 터치 사례','드레스 환복 공간 사례'],
  costTriggers:['직급 지정·얼리·헤어변형은 계약별 확인 필요'],
  pain:[
   '촬영 메이크업은 실제 눈으로 볼 때 평소보다 진하게 느껴질 수 있어 처음 받으면 당황할 수 있다는 후기가 있다.',
   '헤어와 메이크업을 단계별로 이동하며 진행하는 구조라 촬영 시간에 쫓기지 않도록 충분한 시작 시간을 잡아야 한다.',
   '샵 이름보다 실제 담당자 실력 편차가 중요하다는 후기 관찰이 있어 담당 직급/이름을 확인할 필요가 있다.'
  ],
  avoid:['촬영용 메이크업 농도를 사진으로 미리 합의','메이크업 종료 예정시간과 스튜디오 이동시간 역산','가능하면 담당자/직급을 계약서에 명시'],
  sources:[
   {label:'촬영 메이크업 후기',url:'https://oslife.tistory.com/29',kind:'개인후기'},
   {label:'선택 이유 후기',url:'https://blogpak.tistory.com/5',kind:'개인후기'}
  ]
 },
 'makeup|메이븐':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2026-08',note:'2025 실제 후기와 2026 최근 패키지 이용정보를 확인. 후기 독립성은 계속 보강 필요.'},
  hero:'https://dpycx2otlpy9z.cloudfront.net/v3/dnna01d8m6k3w.cloudfront.net/partner/202403/20240313/07e427b1-8a84-4317-ae7d-66a1431237f3_w1200.jpeg',
  links:[{label:'2025 실제 후기',url:'https://www.keyzard.cc/gyomjilak/nb/223932016168'},{label:'화보·후기',url:'https://www.weddingbook.com/partner/89b6c64e-6352-11ea-9bb0-0ab3aefe6e38?inApp=0&tab=review'},{label:'다이렉트',url:'https://www.directwedding.co.kr/makeup/maven'}],
  style:'담당자가 레퍼런스와 요구사항을 확인하고 단계적으로 색조를 조정하는 방식의 후기.',
  includes:['기초/베이스 후 담당자 메이크업 진행 사례','헤어 후 색조 추가·수정 단계 사례'],
  costTriggers:['부원장 등 직급 지정 계약 사례','직급별 가격은 계약별 확인 필요'],
  pain:[
   '1차 메이크업이 마음에 안 들어도 헤어 후 최종 수정 단계에서 요청하는 구조라, 불만을 참고 있다가 끝까지 말하지 않으면 그대로 나갈 수 있다.',
   '베이스와 담당 메이크업이 나뉘어 진행될 수 있어 “누가 어느 단계까지 하는지”를 모르고 가면 기대와 다를 수 있다.',
   '눈썹·아이메이크업처럼 취향이 강한 부분은 요구사항을 구체적으로 말하지 않으면 결과 차이가 크게 느껴질 수 있다.'
  ],
  avoid:['눈썹·아이라인·속눈썹·블러셔 각각 싫은 스타일까지 말하기','최종 색조 전에 거울로 중간 확인 요청','계약한 직급이 어느 단계부터 직접 하는지 확인'],
  sources:[
   {label:'촬영 메이크업 후기',url:'https://www.keyzard.cc/by1uv/nb/223276316004',kind:'후기재게시'}
  ]
 },
 'dress|렌느브라이덜':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2025-10',note:'최근 후기 2건 이상 확인. 사진촬영 가능은 강점이지만 피팅비·헬퍼비·서비스드레스 조건은 계약 전 재확인 필요.'},
  hero:'https://weddingcrowd.kr/data/partner/331/20250911113442_473556_%EB%A0%8C%EB%8A%9014007.jpg',
  links:[{label:'공식 룩북',url:'https://www.reinebridal.com/'},{label:'2025 드레스투어 후기',url:'https://yyaallee.tistory.com/18'},{label:'2024 후기',url:'https://www.weddingbook.com/review/188112?reviewType=WEDDINGBOOK_REVIEW'}],
  style:'실크·비즈·레이스 선택 폭이 넓고 클래식하면서 여성스러운 스타일.',
  includes:['촬영가봉 1시간 내 6벌 피팅 안내','본식가봉 1시간 내 4벌 피팅 안내','사진촬영 가능'],
  costTriggers:['피팅비 5.5만','촬영 헬퍼 기본 25만','서울 외 지역·야외·시간 연장 추가','서비스드레스 이용 시 헬퍼비 +5만'],
  pain:['사진 촬영이 가능해 비교는 편하지만 서비스드레스도 헬퍼비가 추가된다.','주차는 발렛 위주라 동선 계획이 필요하다는 최근 후기가 있다.'],
  avoid:['서비스드레스까지 포함한 최종 헬퍼비 계산','촬영시간 5시간 초과 여부 확인','발렛비·주차 방식 확인'],
  sources:[{label:'공식 촬영가봉 안내',url:'https://www.reinebridal.com/729025555/?bmode=view&idx=17715552',kind:'공식'},{label:'최근 개인후기',url:'https://yyaallee.tistory.com/18',kind:'개인후기'}]
 },
 'studio|스튜디오 사이':{
  researched:'2026-10-06',
  reviewEvidence:{recent:0,latest:'',note:'최근 24개월 독립 후기 2건은 아직 미확보. 화보는 최신이지만 후기 평가는 보류.'},
  hero:'https://cdn.imweb.me/upload/S20240204aca494e0b4938/cb6aecf0f384e.jpg',
  links:[{label:'최신 화보',url:'https://yozmwedding.co.kr/studio/?bmode=view&idx=46027979'},{label:'후기 모음',url:'https://www.wdgbook.com/page/fotography/review/2f670a7b-7b74-11e7-93b9-0abe8d4f74d3'}],
  style:'가든·야외 느낌과 인물 중심 구도를 섞는 감성적인 스타일.',
  includes:['다양한 실내/가든 배경','야간 조명씬 화보 확인'],
  costTriggers:['앨범 페이지·액자 업그레이드 가능성','작가/야간씬 추가 여부는 상담 확인'],
  pain:['최신 독립후기가 부족해 현재 촬영팀 편차를 판단하기 어렵다.'],
  avoid:['최근 작가별 실제 촬영본 요청','앨범 기본 페이지 수·추가 단가 확인'],
  sources:[{label:'요즘웨딩 최신 화보',url:'https://yozmwedding.co.kr/studio/?bmode=view&idx=46027979',kind:'업체정보'}]
 },
 'studio|헤로하우스':{
  researched:'2026-10-06',
  reviewEvidence:{recent:0,latest:'',note:'최근 24개월 독립 후기 2건 미확보. 현재는 최신 화보와 상품 구성 위주로만 참고.'},
  hero:'https://cdn.imweb.me/upload/S20240204aca494e0b4938/a4a5ccd1453ec.jpg',
  links:[{label:'화보·구성',url:'https://yozmwedding.co.kr/studio/?bmode=view&idx=53488377'}],
  style:'화이트 인물컷과 자연광·가든을 섞는 밝고 깨끗한 스타일.',
  includes:['4시간 촬영 안내','앨범·액자 포함 구성 확인'],
  costTriggers:['야간 전구씬','추가 의상·수정본 범위는 계약별 확인'],
  pain:['가든·야외 컷 비중이 있어 날씨와 촬영시간대에 따라 원하는 결과가 달라질 수 있다.'],
  avoid:['우천 시 대체씬 확인','야간·가든씬 촬영 가능 시간을 계약서에 명시'],
  sources:[{label:'요즘웨딩',url:'https://yozmwedding.co.kr/studio/?bmode=view&idx=53488377',kind:'업체정보'}]
 },
 'dress|제이스포사':{
  researched:'2026-10-06',
  reviewEvidence:{recent:2,latest:'2025-09',note:'최근 투어·가봉 후기 2건 이상 확인. 일부 후기는 제휴/리워드 가능성을 감안해 실제 추가금표 확인 필요.'},
  hero:'https://cdn.imweb.me/upload/S20240204aca494e0b4938/075d811961d7c.png',
  links:[{label:'화보 보기',url:'https://yozmwedding.co.kr/dress/?bmode=view&idx=18308833'},{label:'업체 정보',url:'https://www.directwedding.co.kr/dress/jsposa'}],
  style:'모던·클래식 기반에 화려한 비딩과 로맨틱한 라인이 섞인 스타일.',
  includes:['촬영드레스 3벌·본식 1벌 기본 안내','투어 4벌·촬영가봉 6벌·본식가봉 4벌 수준 안내'],
  costTriggers:['촬영드레스 추가','2부 드레스','라벨 업그레이드 보통 최소 30만부터'],
  pain:['시그니처·상위 라인이 마음에 들면 현장에서 추가금이 커질 수 있다.','10~15분 이상 지각 시 피팅이 어렵거나 일정 취소 가능성이 있다.'],
  avoid:['기본라벨부터 먼저 피팅','투어 간 이동시간 20분 이상 확보','당일지정 혜택을 계약서에 명시'],
  sources:[{label:'다이렉트 업체정보',url:'https://www.directwedding.co.kr/dress/jsposa',kind:'업체정보'}]
 },
 'makeup|히엘':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2026-03',note:'최근 후기 1건은 확인했지만 2건 기준에는 아직 부족. 현재는 화보와 공식 추가비 구조를 함께 참고.'},
  hero:'https://cdn-optimized.imweb.me/upload/S2024100788c40fba991cd/1fdf9a9549248.jpg?w=1920',
  links:[{label:'화보 보기',url:'https://thefirstwedding.com/makeup/?idx=208'},{label:'업체 정보',url:'https://www.directwedding.co.kr/makeup/hiel'}],
  style:'피부톤 맞춤 베이스와 과하지 않은 화사한 색조, 자연스럽고 또렷한 웨딩 메이크업.',
  includes:['신부 헤어·메이크업','신랑 포함 범위는 계약별 확인'],
  costTriggers:['특정 아티스트 지정','얼리스타트','레이트아웃','헤어피스·흑채·컷트·염색·펌','혼주 헤어메이크업'],
  pain:['낮 예식이어도 샵 이동·대기 때문에 생각보다 매우 이른 스타트가 잡힐 수 있다.','직급을 계약해도 어느 단계까지 직접 담당하는지 확인이 필요하다.'],
  avoid:['예식장 이동시간까지 넣어 얼리스타트 여부 계산','계약 직급의 실제 담당 단계 확인','혼주 얼리비 포함 여부 질문'],
  sources:[{label:'다이렉트 업체정보',url:'https://www.directwedding.co.kr/makeup/hiel',kind:'업체정보'}]
 },
 'dress|로브마지오':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2025',note:'2025 본식 후기 1건 확인. 최근 독립 후기 1건 이상 추가 확보 전까지 판단 보류.'},
  hero:'https://cdn-optimized.imweb.me/upload/S2024100788c40fba991cd/b235823eeb03c.jpg?w=1920',
  links:[{label:'화보 보기',url:'https://thefirstwedding.com/dress/?idx=100'},{label:'업체 화보',url:'https://yozmwedding.co.kr/dress/?bmode=view&idx=26285675'}],
  style:'실크 중심의 정제되고 고급스러운 스타일. 오간자·미카도 계열을 비교하기 좋음.',
  includes:['드레스 피팅','본식 드레스'],
  costTriggers:['피팅비 5.5만 안내','헬퍼비 25만 안내','지역·시간 추가 가능'],
  pain:['실크 소재와 라인별 체감 차이가 커서 화보만 보고 결정하기 어렵다.'],
  avoid:['조명 아래 원단 광택 직접 비교','헬퍼비·시간 추가 포함 최종가 확인'],
  sources:[{label:'더퍼스트웨딩',url:'https://thefirstwedding.com/dress/?idx=100',kind:'업체정보'}]
 },
 'makeup|유림':{
  researched:'2026-10-06',
  reviewEvidence:{recent:0,latest:'',note:'최신 화보·상품은 확인되지만 최근 24개월 독립 후기 2건은 미확보. 오래된 후기 154건은 현재 품질 판단에서 제외.'},
  hero:'https://www.iwedding.co.kr/center/iweddingb/product/800_22397_1756888317_12892200_3232256098.jpg',
  links:[{label:'최신 상품·화보',url:'https://www.iwedding.co.kr/enterprise/prd/co_sl_m209/22397'},{label:'후기 모음',url:'https://www.weddingbook.com/partner/e729255c-8521-11e6-93b9-0abe8d4f74d3'}],
  style:'맑고 자연스러운 피부 표현과 부드러운 색조 계열.',
  includes:['신랑·신부 촬영 헤어메이크업 상품 확인'],
  costTriggers:['직급 지정','얼리스타트','피스 여부는 계약 확인'],
  pain:['과거 후기에는 주말 대기시간과 담당자 변경 사례가 있어 현재 운영 방식 재확인이 필요하다.'],
  avoid:['최근 담당자 포트폴리오 확인','주말 예상 소요시간·대기시간 질문','촬영과 본식 담당자 동일 여부 확인'],
  sources:[{label:'아이웨딩 최신 상품',url:'https://www.iwedding.co.kr/enterprise/prd/co_sl_m209/22397',kind:'업체정보'}]
 },
 'makeup|겐그레아':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2025-09',note:'2025 최근 진행후기는 확인했지만 같은 채널 중심이라 독립 후기 2건 기준에는 아직 부족.'},
  hero:'https://blog.kakaocdn.net/dna/0Dcfe/btrjVCt1LhE/AAAAAAAAAAAAAAAAAAAAAMRm-1vPFhZcCxuUjPcgMQrhOMucnCAUq6lPIOFCh6JY/img.jpg?allow_ip=&allow_referer=&credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&signature=7RzT4tej%2BASZfpvksPfbnDV%2Fztg%3D',
  links:[{label:'2025 진행 후기',url:'https://thewedd.com/2025/09/14/%EA%B2%90%EA%B7%B8%EB%A0%88%EC%95%84-%EB%A9%94%EC%9D%B4%ED%81%AC%EC%97%85-%EC%A7%84%ED%96%89%ED%9B%84%EA%B8%B0/'},{label:'메이크업샵 정보',url:'https://m.fundegi.co.kr/store/makeup.htm'}],
  style:'화려한 색조부터 세미스모키까지 요청에 맞춰 강약 조절하는 스타일.',
  includes:['촬영 헤어·메이크업','헤어피스 선택 가능 사례'],
  costTriggers:['헤어피스','직급 지정','얼리스타트 여부 확인'],
  pain:['과거 후기에는 담당자 변경 후 결과가 달라졌다는 사례가 있어 “샵 이름”보다 담당자 고정이 중요하다.','오래된 후기에는 대기공간이 작거나 주말 혼잡했다는 지적도 있다.'],
  avoid:['촬영·본식 동일 담당자 여부 확인','원하는 눈썹·립 색을 사진으로 지정','주말 대기시간 여유 확보'],
  sources:[{label:'2025 진행후기',url:'https://thewedd.com/2025/09/14/%EA%B2%90%EA%B7%B8%EB%A0%88%EC%95%84-%EB%A9%94%EC%9D%B4%ED%81%AC%EC%97%85-%EC%A7%84%ED%96%89%ED%9B%84%EA%B8%B0/',kind:'최근후기'}]
 },
 'dress|에델린':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2026-07',note:'2026 실제 본식 후기 1건 확인. 최근 24개월 독립 후기 2건 기준에는 아직 부족.'},
  hero:'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202212%2F19%2FWEDDING21%2F20221219110007565xadp.jpg',
  links:[{label:'업체 정보',url:'https://www.directwedding.co.kr/dress/edeline'},{label:'2026 실제 후기',url:'https://nochedeverano26.tistory.com/1732'},{label:'2026 이벤트',url:'https://www.iwedding.co.kr/event/detail/46921'}],
  style:'화려한 비즈·레이스가 강점인 드레스샵. 반짝임과 입체감 있는 본식 드레스 선호 시 후보가 많음.',
  includes:['투어 약 4벌','촬영가봉 약 6벌','본식가봉 약 4벌 수준 안내'],
  costTriggers:['프리미엄/블랙라벨 업그레이드','2부 드레스','피팅비·헬퍼비'],
  pain:['당일 혜택이 크더라도 상위 라벨을 입어본 뒤 추가금이 커질 수 있다.','주말에는 인기 드레스가 예식에 나가 투어 선택지가 줄 수 있다.'],
  avoid:['수·목 투어 우선','기본라벨에서 먼저 선택 가능한 벌 수 확인','당일혜택을 계약서에 명시'],
  sources:[{label:'다이렉트 업체정보',url:'https://www.directwedding.co.kr/dress/edeline',kind:'업체정보'},{label:'2026 실제후기',url:'https://nochedeverano26.tistory.com/1732',kind:'개인후기'}]
 },
 'dress|브라이드윤':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2025-H2',note:'2025 하반기 본식 실사용 후기 1건 확인. 신생업체라 후기 축적량이 적어 추가 조사 필요.'},
  links:[{label:'화보·후기',url:'https://www.directwedding.co.kr/dress/brideyun'},{label:'주소 확인',url:'https://willyoumarrygo.com/dress/%EC%84%9C%EC%9A%B8/193880285/'}],
  style:'자체제작 기반의 실크·레이스 드레스. 클래식하면서 디테일 포인트가 있는 유니크한 스타일.',
  includes:['본식 드레스','악세사리 대여 후기 확인'],
  costTriggers:['신상/퍼스트웨어 여부','헬퍼비·피팅비는 계약별 확인'],
  pain:['신생업체라 가격·추가금·헬퍼 품질 데이터가 아직 충분히 쌓이지 않았다.','드레스 자체 컨디션은 좋다는 후기지만 후기 표본이 적다.'],
  avoid:['최근 본식 후기 최소 2~3건 더 확인','드레스 상태와 헬퍼 포함 범위를 계약서로 확인'],
  sources:[{label:'다이렉트 2025 후기',url:'https://www.directwedding.co.kr/dress/brideyun',kind:'플랫폼후기'}]
 },
 'studio|어바웃제인':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2025-05',note:'2025 실제 촬영후기 1건 확인. 과거 장문의 후기들은 스타일 참고용으로만 사용.'},
  hero:'https://www.iwedding.co.kr/_next/image?q=75&url=https%3A%2F%2Fwww.iwedding.co.kr%2Fcenter%2Fwebsite%2Fbrandplus%2F1759130416.jpg&w=2048',
  links:[{label:'화보 보기',url:'https://www.iwedding.co.kr/enterprise/info/co_sl_s332'},{label:'2025 실제 후기',url:'https://choicehalls.com/blog/2025/05/13/%EC%96%B4%EB%B0%94%EC%9B%83%EC%A0%9C%EC%9D%B8-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%B6%94%EC%B2%9C-%EC%9D%B4%EC%9C%A0/'}],
  style:'인물 중심·따뜻한 색감. 계절감 있는 야외와 하우스 배경을 섞는 스타일.',
  includes:['인물 중심 촬영','야외·야간 전구씬 가능 사례','단독 촬영 선호 후기'],
  costTriggers:['내곡동 위치로 인한 드레스 헬퍼 출장 추가 가능','야간/로케이션 조건은 계약별 확인'],
  pain:['청담권과 거리가 있어 이동/헬퍼 출장비가 추가될 수 있다.','단독 촬영 여부와 실제 촬영팀 운영 방식은 계약 전 확인이 필요하다.'],
  avoid:['메이크업샵→스튜디오 이동시간 계산','헬퍼 출장비 포함 최종가 확인','야간씬 포함 여부 계약서 명시'],
  sources:[{label:'2025 실제후기',url:'https://choicehalls.com/blog/2025/05/13/%EC%96%B4%EB%B0%94%EC%9B%83%EC%A0%9C%EC%9D%B8-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%B6%94%EC%B2%9C-%EC%9D%B4%EC%9C%A0/',kind:'개인후기'}]
 },
 'studio|지니어스':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2025-H2',note:'2025 하반기 실제 촬영후기 1건 확인. 최근 독립 후기 1건 추가 확보 필요.'},
  hero:'https://cdn.imweb.me/upload/S20240204aca494e0b4938/15f49b6cf1beb.jpg',
  links:[{label:'최신 화보',url:'https://yozmwedding.co.kr/studio/?bmode=view&idx=156312947'},{label:'2025 촬영후기',url:'https://www.directwedding.co.kr/studio/genius'},{label:'과거 셀렉후기',url:'https://yannichoongs.tistory.com/397?category=965870'}],
  style:'배경 중심이지만 인물컷도 병행. 지하~옥상까지 다양한 세트와 발랄한 연출이 강점.',
  includes:['토탈 진행 가능','건물 내 헤어·메이크업·가봉·촬영 동선','다양한 배경'],
  costTriggers:['앨범 페이지 추가','액자 업그레이드','셀렉 단계 추가결제'],
  pain:['과거 셀렉 후기에서 기본 액자가 마음에 들지 않아 원목 액자로 바꾸며 25만원 추가된 사례가 있다.','촬영팀이 여러 팀 동시에 움직여 원하는 배경 대기 가능성이 있다.'],
  avoid:['기본 액자 실물 미리 확인','앨범 추가 페이지 상한 합의','원하는 배경 우선순위 3개 전달'],
  sources:[{label:'2025 촬영후기',url:'https://www.directwedding.co.kr/studio/genius',kind:'플랫폼후기'},{label:'과거 셀렉후기',url:'https://yannichoongs.tistory.com/397?category=965870',kind:'과거후기'}]
 },
 'makeup|고센뷰티':{
  researched:'2026-10-06',
  reviewEvidence:{recent:3,latest:'2026-10',note:'2025 실제 촬영후기와 2026 최근 이용후기 2건 이상 확인. 최근성 기준 충족.'},
  hero:'https://www.iwedding.co.kr/center/website/brandplus/1722409307.jpg',
  links:[{label:'화보 보기',url:'https://www.iwedding.co.kr/enterprise/info/co_sl_m009'},{label:'2025 실제 후기',url:'https://weddingdirect.tistory.com/52?category=1185695'},{label:'2026 최근 후기',url:'https://www.myrealtrip.com/guides/115785'}],
  style:'매끄러운 피부표현과 자연스러운 색조. 음영·코랄 등 레퍼런스에 맞춰 조정하는 후기 확인.',
  includes:['신부 헤어·메이크업','신랑 헤어·메이크업','바디 메이크업 사례'],
  costTriggers:['옆머리 커트 추가','직급 지정','얼리스타트','혼주 메이크업'],
  pain:['샵 입구가 눈에 잘 띄지 않았다는 후기가 있다.','옆머리 길이 때문에 현장에서 커트를 권유받고 추가비가 발생한 실제 사례가 있다.','헤어와 메이크업 층이 달라 이동이 반복될 수 있다.'],
  avoid:['옆머리·잔머리 셀프컷 금지','레퍼런스 3장 이상 준비','예상 소요시간 3시간 기준으로 이동계획'],
  sources:[{label:'2025 개인후기',url:'https://weddingdirect.tistory.com/52?category=1185695',kind:'개인후기'},{label:'2026 실제이용후기',url:'https://www.myrealtrip.com/guides/115785',kind:'플랫폼후기'}]
 },
 'makeup|로나':{
  researched:'2026-10-06',
  reviewEvidence:{recent:1,latest:'2025',note:'2025 계약·선호 후기는 확인했지만 실제 본식/촬영 독립 후기 2건 기준에는 아직 부족.'},
  hero:'https://cdn.imweb.me/upload/S20240204aca494e0b4938/0c76dd73ee378.jpeg',
  links:[{label:'화보 보기',url:'https://yozmwedding.co.kr/makeup/?bmode=view&idx=152274468'},{label:'다이렉트 정보',url:'https://www.directwedding.co.kr/makeup/lona'},{label:'2025 계약후기',url:'https://challenger-yj.tistory.com/61'}],
  style:'촉촉한 피부표현과 자연스러운 메이크업·헤어. 과하지 않은 청담식 웨딩 메이크업.',
  includes:['신랑·신부 본식 헤어메이크업 상품 확인'],
  costTriggers:['직급 지정','얼리스타트','레이트아웃','헤어피스·컷·염색·펌'],
  pain:['다이렉트 자체 고객리뷰가 거의 없어 실제 담당자별 편차 파악이 어렵다.','예식 시간이 낮이어도 이동시간 때문에 얼리스타트가 붙을 수 있다.'],
  avoid:['담당자 최근 작업물 직접 확인','촬영·본식 동일 담당자 여부 확인','얼리스타트 기준시각 계약 전에 질문'],
  sources:[{label:'다이렉트 업체정보',url:'https://www.directwedding.co.kr/makeup/lona',kind:'업체정보'},{label:'2025 계약후기',url:'https://challenger-yj.tistory.com/61',kind:'개인후기'}]
 }
};
