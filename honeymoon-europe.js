/* honeymoon-europe.js — 2027 유럽 가족 크루즈 + 신혼여행 상품 보드 */
(function(){
  var page=document.getElementById('p-honeymoon');
  if(!page)return;

  var FX={usd:1343.19, eur:1512.34, gbp:1774.42, asOf:'2026-10-04'};
  var guests=7;
  var gratuity=18.5;

  var PRODUCTS=[
    {
      id:'east-athens',
      rank:'1순위',
      tone:'best',
      title:'동지중해 · 그리스 & 터키 7박',
      subtitle:'결혼식 5일 뒤 바로 출항 · 가족 7명 일정 궁합 최고',
      ship:'Royal Caribbean · Rhapsody of the Seas',
      dates:'2027.09.17 → 09.24',
      start:'아테네(피레우스) 왕복',
      priceUsd:930,
      route:['아테네','미코노스','에페소스','이스탄불 1박','해상일','산토리니','아테네'],
      tender:['미코노스','산토리니'],
      family:'부모님이 매 기항지에 내릴 필요 없음. 이스탄불은 1박 이상 정박이라 관광 강도를 낮추기 쉽다.',
      fit:['9/12 예식 후 9/13~14 출국 가능','아테네 2~3박 시차 적응 후 승선','그리스 섬 + 유적 + 이스탄불을 한 번에','하선 후 부부만 포르투갈 연결하기 쉬움'],
      caution:['Rhapsody는 오래되고 작은 편이라 최신 대형선 시설 기대에는 약함','미코노스·산토리니 텐더 승하선','에페소스는 많이 걷고 9월 햇볕이 강할 수 있음','터키 포함이 마음에 걸리면 크로아티아형 대안 검토'],
      source:'https://www.royalcaribbean.com/cruises/itinerary/7-night-best-of-greece-turkey-from-atenas-on-rhapsody/RH07ATH-2230925252?country=USA&currency=USD&sail-date=2027-09-17'
    },
    {
      id:'east-ravenna',
      rank:'안전·풍경 대안',
      tone:'safe',
      title:'동지중해 · 그리스 제도 & 크로아티아 7박',
      subtitle:'터키를 빼고 산토리니·미코노스·아테네·스플리트',
      ship:'Royal Caribbean · Brilliance of the Seas',
      dates:'2027.09.25 → 10.02',
      start:'라벤나(베니스 권역) 왕복',
      priceUsd:1145,
      route:['라벤나','해상일','산토리니','미코노스','아테네','해상일','스플리트','라벤나'],
      tender:['산토리니','미코노스'],
      family:'해상일이 2일이라 부모님 휴식 비중이 높다. 다만 라벤나 승선항 접근은 아테네보다 번거롭다.',
      fit:['그리스 섬 풍경 + 크로아티아 조합','해상일 2일로 체력 회복','터키 제외를 원할 때 깔끔한 선택'],
      caution:['결혼식 후 출항까지 13일이라 전체 3주 일정과 충돌','라벤나 이동 동선이 아테네보다 복잡','산토리니·미코노스는 텐더'],
      source:'https://www.royalcaribbean.com/cruises/itinerary/7-night-greek-isles-from-ravenna-on-brilliance/BR07BLQ-2504782598?country=USA&currency=USD&sail-date=2027-09-25'
    },
    {
      id:'west-rome',
      rank:'가족 편의 대안',
      tone:'family',
      title:'서부지중해 · 이탈리아·스페인·프랑스 7박',
      subtitle:'유명 도시 위주 · 항구 접근과 가족 설명이 가장 쉬운 정석 코스',
      ship:'Royal Caribbean · Legend of the Seas',
      dates:'2027.09.16 출항 편성 확인',
      start:'로마(치비타베키아) 왕복',
      priceUsd:null,
      route:['로마','나폴리/카프리','바르셀로나','마요르카','마르세유','라스페치아','로마'],
      tender:[],
      family:'첫 유럽 크루즈에 설명하기 쉽고 유명 관광지 비중이 높다. Legend는 신형 대형선이라 선내 시설도 강점.',
      fit:['9/12 예식 직후 일정이 맞음','가족에게 익숙한 유명 도시','선내 시설을 중요하게 보면 가장 강함','부부 후속 여행을 포르투갈로 바꾸면 중복 적음'],
      caution:['기항지마다 대도시 관광을 하면 체력 소모 큼','로마-치비타베키아 이동 별도','9/16 정확한 객실가는 7명 구성으로 재견적 필요'],
      source:'https://www.royalcaribbeanincentives.com/content/uploads/Europe-Deployment-2027.pdf'
    }
  ];

  var REVIEWS=[
    {
      type:'한국 영상',
      title:'동부 지중해 9박 11일 탑승기',
      channel:'일상이여행 Everyday travel',
      note:'베니스 출발 → 그리스·이탈리아. 승선·객실·식사·전일항해를 한국어로 자세히 보여준다. 영상 설명의 당시 패키지는 항공+호텔2박+크루즈7박+기항지투어 포함 1인 500~550만원 수준이었지만, 2022년 체험 제공 영상이라 현재 가격 근거로 쓰면 안 된다.',
      video:'ZnkmeOp-1nc',
      sponsored:true
    },
    {
      type:'한국 영상',
      title:'미코노스·산토리니·코토르 동부지중해 후기',
      channel:'헤이나의 헬로크루즈',
      note:'한국어 브이로그로 동지중해 풍경과 실제 기항지 분위기를 보기 좋다. 일정 선택 전에 “내가 기대하는 풍경”을 확인하는 참고 영상.',
      video:'Kq3gbdzO7e8',
      sponsored:false
    },
    {
      type:'최근 해외 후기',
      title:'Greek Isles — Beautiful… and Exhausting',
      channel:'3rd Orbit Travelers · 2025',
      note:'Brilliance 7박 그리스 제도. 풍경은 매우 좋았지만 긴 기항지 투어와 이른 출발이 반복돼 “아름답지만 피곤했다”는 평가. 부모님은 모든 날 하선하지 않는 설계가 필요하다는 근거로 활용.',
      video:'CbUPL1s-H-8',
      sponsored:false
    }
  ];

  var SOURCES=[
    ['9/17 아테네 출항 공식 일정·가격','Royal Caribbean','https://www.royalcaribbean.com/cruises/itinerary/7-night-best-of-greece-turkey-from-atenas-on-rhapsody/RH07ATH-2230925252?country=USA&currency=USD&sail-date=2027-09-17'],
    ['9/25 라벤나 출항 공식 일정·가격','Royal Caribbean','https://www.royalcaribbean.com/cruises/itinerary/7-night-greek-isles-from-ravenna-on-brilliance/BR07BLQ-2504782598?country=USA&currency=USD&sail-date=2027-09-25'],
    ['2027 유럽 배치표','Royal Caribbean Incentives','https://www.royalcaribbeanincentives.com/content/uploads/Europe-Deployment-2027.pdf'],
    ['선내 서비스 팁 정책','Royal Caribbean','https://www.royalcaribbean.com/faq/questions/onboard-service-gratuity-expense'],
    ['세금·항만비 안내','Royal Caribbean','https://www.royalcaribbean.com/faq/questions/how-much-are-taxes-fees-and-port-expenses'],
    ['그리스 크루즈 하선세 법령','Greek Government','https://www.e-nomothesia.gr/index.php/kya-3133-1-45989-2025.html'],
    ['ETIAS 공식 안내','EU','https://www.travel-europe.europa.eu/etias'],
    ['마데이라 9~11월 계절 정보','Visit Madeira','https://visitmadeira.com/en/blog/visit-madeira/when-is-the-best-time-to-visit-madeira/'],
    ['마데이라 교통·Uber/Bolt','Visit Madeira','https://www.visitmadeira.com/en/travel-info/faq/'],
    ['Rhapsody 실제 탑승 커뮤니티 의견','Reddit / r/royalcaribbean','https://www.reddit.com/r/royalcaribbean/comments/18ywx0k'],
    ['그리스 기항지 투어 후기','Reddit / r/royalcaribbean','https://www.reddit.com/r/royalcaribbean/comments/1v3jyvu/royal_caribbean_cruise_greek_isles/'],
    ['MSC Armonia 9/19 베니스 7박 판매 스냅샷','Cruise Critic','https://www.cruisecritic.com/en-gb/find-a-cruise/destination-eastern-mediterranean/month-september-2027'],
    ['MSC Armonia 아드리아해 실제 후기','Reddit / r/MSCCruises','https://www.reddit.com/r/MSCCruises/comments/1va5mj3/msc_armonia_adriatic_itinerary_excursion/'],
    ['MSC Armonia 최근 선박 후기','Reddit / r/MSCCruises','https://www.reddit.com/r/MSCCruises/comments/1vwf1uy/msc_armonia_review/'],
    ['Celestyal 7박 공식 요금·포함항목','Celestyal','https://celestyal.com/our-cruises/idyllic-greece/7-nights'],
    ['Celestyal 4박 공식 요금·포함항목','Celestyal','https://celestyal.com/us/our-cruises/iconic-greek-islands/4-nights'],
    ['Costa 2027년 9월 공식 요금','Costa','https://www.costacruises.com/cruises-by-season/september-cruises.html'],
    ['MSC Orchestra 9/14 일정·가격','iCruise','https://www.icruise.com/itineraries/7-night-piraeus-to-piraeus-cruise_msc-orchestra_9-14-2027.html'],
    ['MSC Orchestra 9/14 일정 교차검증','Travel Weekly Asia','https://www.travelweekly-asia.com/Cruise/MSC-Cruises/MSC-Orchestra/Cruise-p61282293?id=359108'],
    ['MSC Orchestra 한국어 선박·운항정보','크루즈맵','https://travelersmap.co.kr/cruise/ship/msc-orchestra-ship']
  ];

  function won(n){return Math.round(n/10000).toLocaleString()+'만원';}
  function usdToWon(v){return v*FX.usd;}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function link(u,t){return '<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(t)+'</a>';}

  function routeSvg(p){
    var route=p.route;
    var w=760,h=150,left=38,right=722,y=75;
    var gap=(right-left)/(route.length-1);
    var points=route.map(function(x,i){return {x:left+gap*i,label:x};});
    var line=points.map(function(pt){return pt.x+','+y;}).join(' ');
    return '<svg class="hme-route-svg" viewBox="0 0 '+w+' '+h+'" role="img" aria-label="'+esc(p.title)+' 한글 노선도">'
      +'<polyline points="'+line+'" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'
      +points.map(function(pt,i){
        var labelY=i%2===0?42:118;
        var tender=p.tender.indexOf(pt.label)>=0;
        return '<circle cx="'+pt.x+'" cy="'+y+'" r="'+(i===0||i===points.length-1?8:6)+'" class="'+(tender?'tender':'')+'"/>'
          +'<line x1="'+pt.x+'" y1="'+(y+(labelY<y?-9:9))+'" x2="'+pt.x+'" y2="'+(labelY<y?52:98)+'" stroke="currentColor" opacity=".25"/>'
          +'<text x="'+pt.x+'" y="'+labelY+'" text-anchor="middle">'+esc(pt.label)+'</text>';
      }).join('')
      +'</svg>';
  }

  function costPanel(p){
    if(!p.priceUsd){
      return '<div class="hme-price-main"><span>7명 객실가</span><strong>재견적 필요</strong><small>9/16 편성은 확인 · 객실 구성별 실시간 가격 확인 필요</small></div>';
    }
    var base=usdToWon(p.priceUsd*guests);
    var tip=usdToWon(gratuity*7*guests);
    return '<div class="hme-price-main"><span>현재 공식 시작가</span><strong>1인 $'+p.priceUsd.toLocaleString()+'</strong><small>세금·항만비 포함 표시가 · 객실 유형에 따라 변동</small></div>'
      +'<div class="hme-cost-row"><span>7명 단순 합산</span><b>'+won(base)+'</b><small>$'+(p.priceUsd*guests).toLocaleString()+' × 환율 '+FX.usd.toLocaleString()+'원</small></div>'
      +'<div class="hme-cost-row"><span>일반객실 서비스 팁</span><b>약 '+won(tip)+'</b><small>$18.50 × 7박 × 7명 · 현재 공식 정책</small></div>'
      +'<div class="hme-cost-row estimate"><span>실제 예약</span><b>2+2+3 객실 견적 필수</b><small>3인실 재고·객실 등급·프로모션 때문에 단순 7배와 달라질 수 있음</small></div>';
  }

  function productCard(p){
    return '<article class="hme-product '+p.tone+'">'
      +'<div class="hme-product-top"><div><span class="hme-rank">'+esc(p.rank)+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.subtitle)+'</p></div><div class="hme-date"><b>'+esc(p.dates)+'</b><span>'+esc(p.start)+'</span></div></div>'
      +'<div class="hme-route">'+routeSvg(p)+'</div>'
      +'<div class="hme-product-grid"><div><h4>상품 포인트</h4><ul>'+p.fit.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>'
      +'<div><h4>부모님과 탈 때</h4><p>'+esc(p.family)+'</p><h4 class="warn">꼭 알고 예약</h4><ul class="warn-list">'+p.caution.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>'
      +'<aside class="hme-cost">'+costPanel(p)+'<a class="hme-source-btn" href="'+esc(p.source)+'" target="_blank" rel="noopener">공식 일정 확인 ↗</a></aside></div>'
      +'</article>';
  }

  function reviewCard(r){
    return '<article class="hme-review"><div class="hme-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/'+r.video+'" title="'+esc(r.title)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
      +'<div class="hme-review-body"><span>'+esc(r.type)+(r.sponsored?' · 제공/광고 표시 있음':'')+'</span><h4>'+esc(r.title)+'</h4><b>'+esc(r.channel)+'</b><p>'+esc(r.note)+'</p><a href="https://www.youtube.com/watch?v='+r.video+'" target="_blank" rel="noopener">YouTube에서 보기 ↗</a></div></article>';
  }

  var timeline=[
    ['9/12','결혼식','서울'],
    ['9/12 밤~13','유럽 출국','인천 → 아테네'],
    ['9/13','아테네 도착','호텔 1박 · 가족 함께'],
    ['9/14~21','가족 크루즈','MSC Orchestra 동지중해 7박 · 7명'],
    ['9/21','가족 귀국 / 부부 이동','가족: 한국 · 부부: 포르투갈'],
    ['9/21~24','관광 70 · 휴식 30','리스본 3박'],
    ['9/24~29','휴식 70 · 관광 30','마데이라 5박'],
    ['9/29~10/02','관광 50 · 휴식 50','포르투 3박'],
    ['10/02~03','귀국','총 약 3주']
  ];

  var html='<section class="hme-shell">'
    +'<header class="hme-hero"><div><span class="hme-kicker">2027 EUROPE HONEYMOON · FAMILY CRUISE</span><h2>가족과 7박 크루즈,<br>둘만의 유럽 신혼여행 10~12일</h2><p>9월 12일 예식 · 가족 7명 · 총 약 3주 · 관광과 힐링 50:50. 여행사 상품을 고르듯 실제 2027 운항 일정, 숨은 비용, 후기까지 한 화면에서 비교합니다.</p><div class="hme-hero-chips"><span>👨‍👩‍👧‍👦 7명</span><span>🚢 7박</span><span>💑 부부 10~12일 추가</span><span>🚗 무렌트 기본</span></div></div>'
    +'<div class="hme-pick"><small>딥서치 후 현재 추천</small><strong>9/14 아테네 출항</strong><span>MSC Orchestra · 동지중해 7박</span><em>9/12 밤 출국 → 9/13 아테네 도착 → 1박 → 9/14 18:00 승선. 현재 조건에 가장 정확히 맞습니다.</em></div></header>'

    +'<section class="hme-section"><div class="hme-section-head"><span>01</span><div><h3>크루즈 상품 비교</h3><p>가격보다 먼저 일정 궁합·부모님 체력·배의 성격을 봅니다. 가격은 공식 페이지의 현재 표시가 스냅샷입니다.</p></div></div>'
    +PRODUCTS.map(productCard).join('')+'</section>'
    +'<section class="hme-section"><div class="hme-section-head"><span>01-A</span><div><h3>딥서치 검증 1순위 · 9/14 MSC Orchestra</h3><p>해외 4개 이상의 일정 DB/판매처와 한국어 크루즈 DB에서 교차검증했습니다.</p></div></div><div class="hme-alt-card value"><span class="hme-proof official">출항일 교차검증 완료</span><h4>MSC Orchestra · 2027.09.14 아테네(피레우스) 왕복 7박</h4><b>9/14 18:00 출항 → 9/21 07:00 귀항</b><p>아테네 → 카타콜론(올림피아) → 케팔로니아/아르고스톨리 → 코르푸 → 바리 → 해상일 → 미코노스 → 아테네.</p><ul><li>CruiseMapper: 9/14 피레우스 왕복 7박 확인</li><li>iCruise: 동일 항차 CN-14215816, 세금·수수료 포함 $1,230/인 내측 표시</li><li>Travel Weekly Asia: 동일 날짜·동일 기항지, 내측 $813부터 표시 — 판매채널별 가격 차 큼</li><li>CruiseTimetables: 9/14 출항·9/21 귀항·동일 기항지 확인</li><li>한국 크루즈맵: MSC Orchestra 피레우스 왕복 7박 운항축 및 2027년 9월 출항 존재 확인</li></ul><p><b>중요:</b> 표시가격은 판매처마다 $813~$1,230 이상 차이가 나므로, 실제 예약은 7명·3객실 기준 최종 인보이스로 다시 받아야 합니다.</p></div></section>'
    +'<section class="hme-section"><div class="hme-section-head"><span>01-B</span><div><h3>놓친 노선까지 다시 찾은 결과</h3><p>공식가·제3자 판매가·포함항목을 분리해서 비교합니다. “가장 싼 표시가”가 곧 최저 총비용은 아닙니다.</p></div></div>'
    +'<div class="hme-alt-grid">'
      +'<article class="hme-alt-card value"><span class="hme-proof third">제3자 판매 스냅샷</span><h4>MSC Armonia · 아드리아해 7박</h4><b>2027.09.19 베니스 출항 · £799/인 내측 사례</b><p>베니스 → 두브로브니크 → 코르푸 → 코토르 → 브린디시 → 스플리트 → 베니스. 7명 단순 합산은 약 '+won(799*7*FX.gbp)+'. 다만 MSC 공식 직판가·서비스차지 포함 여부는 별도 재확인해야 합니다.</p><ul><li>항구 가까운 도시가 많아 DIY 관광 비중을 높이기 좋음</li><li>최근 아드리아해 후기에 따르면 두브로브니크 외 대부분 항구는 도보 5분권 또는 무료 셔틀 사례</li><li>단점: Armonia는 오래된 소형선이고 최근 음식·시설 평가가 엇갈림</li></ul><a href="https://www.cruisecritic.com/en-gb/find-a-cruise/destination-eastern-mediterranean/month-september-2027" target="_blank" rel="noopener">판매 스냅샷 확인 ↗</a></article>'
      +'<article class="hme-alt-card"><span class="hme-proof official">공식가</span><h4>Celestyal · Idyllic Greece 7박</h4><b>2027년 9월 $1,429/인부터</b><p>아테네 → 쿠사다시 → 로도스 → 크레타 → 산토리니 → 미코노스 → 밀로스 → 아테네. 7명 단순 합산 약 '+won(1429*7*FX.usd)+'.</p><ul><li>항만비·gratuities·Essential Wi‑Fi·기본 식사/음료 포함</li><li>표시가는 높지만 Royal처럼 팁을 별도 더하지 않아 포함항목 보정 필요</li><li>그리스 집중형이라 가족 크루즈 자체가 여행의 핵심일 때 적합</li></ul><a href="https://celestyal.com/our-cruises/idyllic-greece/7-nights" target="_blank" rel="noopener">Celestyal 공식 ↗</a></article>'
      +'<article class="hme-alt-card budget"><span class="hme-proof official">공식가 · 비용절감 특수안</span><h4>Celestyal · 그리스 섬 4박</h4><b>2027년 9월 $859/인부터</b><p>아테네 → 미코노스 → 쿠사다시 → 파트모스 → 로도스 → 크레타 → 산토리니 → 아테네. 7명 단순 합산 약 '+won(859*7*FX.usd)+'.</p><ul><li>항만비·gratuities·Essential Wi‑Fi 포함</li><li>가족 크루즈 비용을 줄이고 부부 신혼여행 2주에 예산 집중 가능</li><li>단점: 4박에 7개 항구라 부모님 휴양형 일정으로는 너무 빡빡함</li></ul><a href="https://celestyal.com/us/our-cruises/iconic-greek-islands/4-nights" target="_blank" rel="noopener">Celestyal 공식 ↗</a></article>'
      +'<article class="hme-alt-card muted"><span class="hme-proof official">공식가</span><h4>Costa · 2027년 9월</h4><b>서부 $1,412 / 동부 $1,487부터</b><p>Taxes & Fees는 포함이지만 성인 gratuity €12/박은 별도. 7명 기준 표시가만 각각 약 '+won(1412*7*FX.usd)+' / '+won(1487*7*FX.usd)+'부터입니다.</p><ul><li>현재 확인가만 보면 “Costa라서 무조건 싸다”는 결론은 틀림</li><li>프로모션·날짜별 가격 하락은 있을 수 있지만 3개 객실 동시 확보 리스크 존재</li><li>지금은 Royal/MSC/Celestyal보다 우선순위를 낮춤</li></ul><a href="https://www.costacruises.com/cruises-by-season/september-cruises.html" target="_blank" rel="noopener">Costa 공식 ↗</a></article>'
    +'</div></section>'

    +'<section class="hme-section"><div class="hme-section-head"><span>01-C</span><div><h3>서유럽·지중해를 싸게 타는 실전 방법</h3><p>선사 가격보다 더 큰 차이는 객실·기항지 투어·포함항목·예약 시점에서 납니다.</p></div></div>'
    +'<div class="hme-save-grid"><div><b>1. 배보다 노선 우선</b><strong>기항지형 유럽 크루즈</strong><p>최근 MSC 유럽 후기에서도 매일 아침 하선해 관광하고 돌아와 저녁 먹고 자는 패턴이라, 선박 시설에 프리미엄을 크게 줄 필요가 없다는 의견이 반복됩니다.</p></div><div><b>2. 항구 가까운 노선</b><strong>아드리아해가 유리</strong><p>스플리트·코토르·두브로브니크 등은 도시 자체가 항구와 가깝습니다. 로마·피렌체처럼 항구↔도심 장거리 이동 비용을 줄일 수 있습니다.</p></div><div><b>3. 선사 투어 선별</b><strong>7명이면 사설 밴 비교</strong><p>도보권 항구는 DIY, 에페소스·로마처럼 멀거나 귀항 실패 리스크가 큰 곳만 선사 투어. 7명이면 전용 밴이 7장 투어권보다 경쟁력 있을 수 있습니다.</p></div><div><b>4. 객실 믹스</b><strong>신혼부부만 발코니</strong><p>부부 1실 발코니 + 부모님 2실 내측/오션뷰 조합을 우선 견적. 가족 공용시간은 객실보다 라운지·식당·갑판에서 보냅니다.</p></div><div><b>5. 패키지 자동구매 금지</b><strong>음료·Wi‑Fi 손익 계산</strong><p>유럽 기항지형은 낮에 배 밖에 있는 시간이 길어 전원 음료패키지·Wi‑Fi가 손해일 수 있습니다. 기본 식사만으로도 충분하다는 후기가 많습니다.</p></div><div><b>6. 표시가가 아니라 최종 인보이스</b><strong>포함항목 표준화</strong><p>객실가 + taxes/port fees + daily gratuity + 하선세 + 필수 셔틀/교통까지 합친 뒤 비교해야 합니다. 판매 국가에 따라 gratuity 포함 여부도 다릅니다.</p></div></div>'
    +'<div class="hme-ranking"><b>현재 결론</b><span>일정 궁합 1위 <strong>MSC Orchestra 9/14 아테네</strong></span><span>백업 1위 <strong>Royal 9/17 아테네</strong></span><span>가성비 재검증 <strong>MSC 아드리아해</strong></span><span>포함항목 명확성 <strong>Celestyal</strong></span></div></section>'


    +'<section class="hme-section"><div class="hme-section-head"><span>02</span><div><h3>“부모님은 계속 배에 있어도 돼?”</h3><p>네. 크루즈는 매 기항지 하선이 의무가 아닙니다. 가족 7명이 같은 배를 호텔처럼 쓰고, 기항지마다 각자 강도를 조절할 수 있습니다.</p></div></div>'
    +'<div class="hme-family-grid"><div><b>전원 하선</b><strong>아테네 · 이스탄불</strong><p>대표 관광지만 가이드/차량으로 편하게.</p></div><div><b>선택 하선</b><strong>미코노스 · 산토리니</strong><p>부모님 컨디션에 따라 배에서 쉬어도 됨. 텐더 이동까지 고려.</p></div><div><b>부부/자녀만</b><strong>에페소스 집중 관광</strong><p>유적지 보행량이 많아 부모님은 선내 휴식 선택 가능.</p></div><div><b>다 같이 휴식</b><strong>해상일</strong><p>수영장·카페·공연·정찬 등 배 자체를 즐기는 날.</p></div></div></section>'

    +'<section class="hme-section"><div class="hme-section-head"><span>03</span><div><h3>7명 비용, 이렇게 나눠서 봐야 합니다</h3><p>크루즈가 비싸 보이지 않게 “배값”과 항공·전후박·투어를 섞지 않습니다.</p></div></div>'
    +'<div class="hme-budget"><div class="fixed"><h4>① 크루즈 고정에 가까운 비용</h4><p><b>객실요금</b> 공식 시작가 × 인원. 기본 식사·숙박·도시간 이동이 포함됩니다.</p><p><b>세금·항만비</b> 판매채널에 따라 기본운임과 따로 보이거나 최종 표시가에 포함됩니다. 예약 인보이스의 Taxes, fees and port expenses를 반드시 확인하세요.</p><p><b>선내 팁</b> 현재 일반 객실 USD 18.50/인/일. 7명 7박이면 약 '+won(usdToWon(gratuity*7*7))+'.</p><p><b>3개 객실</b> 권장 가정은 2+2+3. 실제 3인실 재고에 따라 가격이 달라집니다.</p></div>'
    +'<div><h4>② 선택하면 늘어나는 비용</h4><p><b>기항지 투어</b> 모든 항구에서 살 필요 없음. 에페소스처럼 이동이 필요한 곳만 집중.</p><p><b>음료·Wi-Fi·스페셜티 식당</b> 기본 상품에 꼭 필요한 비용은 아님.</p><p><b>부모님 투어</b> 매일이 아니라 2~3개 핵심 기항지만 같이 가면 체력·비용 모두 절약.</p></div>'
    +'<div><h4>③ 크루즈와 분리할 비용</h4><p><b>한국↔유럽 항공</b> 7명 전체 항공과 부부 후속 여행 오픈조/다구간 항공을 별도 비교.</p><p><b>승선 전 2~3박</b> 시차 적응용 아테네 숙소.</p><p><b>부부 후속 10~12일</b> 포르투갈은 신혼여행 예산으로 별도 관리.</p></div></div>'
    +'<div class="hme-fee-grid"><div><b>그리스 하선세</b><strong>9월 미코노스·산토리니 각 €20/인</strong><p>두 섬 모두 7명이 하선하면 €280 규모. Royal Caribbean은 최근 예약분은 booking taxes/fees에 포함하고, 해당 항구에서 배에 남으면 SeaPass로 크레딧한다고 안내합니다.</p></div><div><b>선내 추가구매 팁</b><strong>음료·스페셜티 등 +18%</strong><p>음료·음료패키지·스페셜티 다이닝·룸서비스·미니바 등에 자동 gratuity가 추가됩니다. 스파·살롱은 +20%입니다.</p></div><div><b>기항지에서 새는 돈</b><strong>투어·셔틀·현지교통</strong><p>텐더 보트 자체는 크루즈 이동의 일부지만 산토리니 케이블카, 항구↔도심 셔틀·택시·현지투어는 별도일 수 있습니다.</p></div><div><b>계약 후 변동 가능</b><strong>정부세·유류할증 등</strong><p>정부가 새 세금을 도입하거나 선사 약관상 surcharge가 생길 수 있어 최종 인보이스와 출항 전 공지를 다시 봐야 합니다.</p></div></div><p class="hme-disclaimer">※ 원화 환산은 '+FX.asOf+' 기준 참고 환율 USD 1 = '+FX.usd.toLocaleString()+'원, EUR 1 = '+FX.eur.toLocaleString()+'원. 실제 결제 환율·객실 재고·정부세 변경에 따라 달라집니다.</p></section>'

    +'<section class="hme-section"><div class="hme-section-head"><span>04</span><div><h3>총 3주 추천 일정</h3><p>크루즈에서 관광 강도를 높이고, 뒤 10~12일은 포르투갈에서 속도를 낮추는 구성입니다.</p></div></div>'
    +'<div class="hme-timeline">'+timeline.map(function(x){return '<div><time>'+x[0]+'</time><span>'+x[1]+'</span><b>'+x[2]+'</b></div>';}).join('')+'</div>'
    +'<div class="hme-portugal"><div><span>리스본 3박</span><b>관광 70 : 힐링 30</b><p>구시가지·벨렝·신트라. 렌터카 없이 대중교통/Bolt.</p></div><div class="focus"><span>마데이라 5박</span><b>관광 30 : 힐링 70</b><p>리조트·자연·전망대·레바다. 9~10월은 여름보다 한결 여유로운 시기.</p></div><div><span>포르투 3박</span><b>관광 50 : 힐링 50</b><p>도루강·구시가지·와이너리. 도보와 대중교통 중심.</p></div></div></section>'

    +'<section class="hme-section"><div class="hme-section-head"><span>05</span><div><h3>운전은 선택 옵션</h3><p>첫 해외운전이므로 무렌터카 버전을 기본 상품으로 두고, 현지에서 자신이 생기면 마데이라 2~3일만 렌트하는 안을 추가합니다.</p></div></div>'
    +'<div class="hme-drive"><div class="recommended"><span>추천</span><h4>렌터카 없이</h4><ul><li>리스본·포르투: 대중교통 + Bolt/Uber</li><li>마데이라: 푼샬 숙박 + 동/서부 일일투어</li><li>공항: Aerobus/택시/사전 픽업</li><li>국제면허·주차·보험 스트레스 최소</li></ul></div><div><span>선택</span><h4>마데이라 2~3일만 렌트</h4><ul><li>원하는 전망대를 자유롭게 이동</li><li>산악 경사·좁은 길·급커브 적응 필요</li><li>자동변속 차량 + 완전면책 우선 검토</li><li>출국 전 국제운전 관련 서류와 렌터카 약관 재확인</li></ul></div></div></section>'

    +'<section class="hme-section"><div class="hme-section-head"><span>06</span><div><h3>한국인 후기·영상으로 먼저 체감하기</h3><p>영상은 분위기·동선 참고용입니다. 비용 판단은 영상 요약만 믿지 않고 선사 공식 요금·세금 정책과 실제 후기 글을 교차검증합니다.</p></div></div><div class="hme-reviews">'+REVIEWS.map(reviewCard).join('')+'</div>'
    +'<div class="hme-review-points"><div><b>후기에서 반복되는 장점</b><p>짐을 매일 싸지 않고 여러 나라를 이동 · 저녁마다 배로 돌아오니 가족 관리가 쉬움 · 그리스 섬 풍경 만족도가 높음.</p></div><div><b>후기에서 반복되는 단점</b><p>그리스 제도는 기항지 중심이라 생각보다 피곤함 · 텐더 대기 · 오래된 소형선은 “선박 자체가 목적”인 사람에게 심심할 수 있음.</p></div><div><b>우리에게 적용</b><p>부모님은 매일 하선시키지 않고 2~3개 핵심 기항지만 함께. 배는 호텔처럼 쓰고, 부부는 필요한 날 별도 관광.</p></div></div></section>'

    +'<section class="hme-section"><div class="hme-section-head"><span>07</span><div><h3>비자·입국 체크</h3><p>3주 여행 자체 때문에 별도 장기 관광비자를 준비하는 일정은 아닙니다. 다만 2027년에는 ETIAS를 출국 전에 확인해야 합니다.</p></div></div>'
    +'<div class="hme-entry"><div><b>쉥겐 단기체류</b><strong>90일 / 180일 규칙</strong><p>3주 일정은 기간 자체로는 문제 없음. 여권 유효기간과 이전 유럽 체류일수는 별도 확인.</p></div><div><b>ETIAS</b><strong>2026년 4분기 시작 예정</strong><p>EU 공식 안내상 신청비 €20. 2027년 9월 출국 전 실제 시행 상태와 승인 여부 확인.</p></div><div><b>EES</b><strong>전자 출입국</strong><p>비EU 단기 방문객의 전자 출입국 절차가 운영 중이므로 첫 입국에 시간 여유.</p></div></div></section>'

    +'<section class="hme-section hme-sources"><div class="hme-section-head"><span>08</span><div><h3>검증 출처</h3><p>상품 가격·운항은 공식 자료를 우선하고, 후기는 실제 경험 참고용으로 분리했습니다.</p></div></div><div class="hme-source-list">'+SOURCES.map(function(s){return '<a href="'+esc(s[2])+'" target="_blank" rel="noopener"><b>'+esc(s[0])+'</b><span>'+esc(s[1])+' ↗</span></a>';}).join('')+'</div>'
    +'<div class="hme-final"><b>다음 견적 단계</b><p>가족 7명의 정확한 관계와 “누가 누구와 같은 방을 써도 되는지”가 정해지면, 2+2+3 / 2+2+2+1 객실 배치를 비교해 실제 견적표를 만들 수 있습니다.</p></div></section>'
    +'</section>';

  page.innerHTML=html;
})();