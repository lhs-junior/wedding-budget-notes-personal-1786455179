/* sdm.js — 스드메 탭: 실계약 사례 표 + 같은 조합 비교 + 상담 가이드 + 내 견적 기록 */
(function(){
var root=document.getElementById('p-sdm');
if(!root||typeof SDM_CASES==='undefined')return;
var SK='wedding-budget-notes:sdm:v1';
var st;try{st=JSON.parse(localStorage.getItem(SK)||'{}');}catch(e){st={};}
if(st._v!==1)st={_v:1,checks:{},quotes:[]};
function save(){localStorage.setItem(SK,JSON.stringify(st));}
var ui={how:'비동행',reg:'',sort:'asc',q:'',open:'',contractOnly:true};
var vendorUi={role:'',q:''};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function man(n){return n==null?'':(Math.round(n*10)/10).toLocaleString()+'만';}
function median(a){if(!a.length)return null;var b=a.slice().sort(function(x,y){return x-y;}),m=b.length>>1;return b.length%2?b[m]:(b[m-1]+b[m])/2;}
var ADD={orig:44,helper:50,tour:11};
function hasInc(c,k){return (c.inc||[]).some(function(x){return x.indexOf(k)>=0;});}

/* 통계 기준: 비동행 · 계약 완료 */
var base=SDM_CASES.filter(function(c){return c.how==='비동행'&&c.st==='계약';});
var seoul=base.filter(function(c){return c.reg==='서울';});
var medAll=median(base.map(function(c){return c.c;})),medSeoul=median(seoul.map(function(c){return c.c;}));

function filtered(){
  var q=ui.q.trim().toLowerCase();
  var r=SDM_CASES.filter(function(c){
    if(ui.how&&c.how!==ui.how)return false;
    if(ui.reg==='서울'&&c.reg!=='서울')return false;
    if(ui.reg==='기타'&&c.reg==='서울')return false;
    if(ui.contractOnly&&c.st!=='계약')return false;
    if(q&&[c.s,c.d,c.m,c.co].join(' ').toLowerCase().indexOf(q)<0)return false;
    return true;});
  r.sort(function(a,b){if(ui.sort==='new')return b.date.localeCompare(a.date);return ui.sort==='asc'?a.c-b.c:b.c-a.c;});
  return r;
}
function vend(v){if(!v||/^미기재/.test(v))return '<span class="sd-muted">'+esc(v||'미기재')+'</span>';var key=v.split(/[·(]/)[0].trim();return '<button class="sd-v" data-q="'+esc(key)+'">'+esc(v)+'</button>';}
function adTag(a){return '<span class="sd-ad sd-ad-'+(a==='광고'?'y':a==='비광고'?'n':'u')+'">'+(a==='광고'?'광고성':a==='비광고'?'비광고':'고지 없음')+'</span>';}

function caseRows(){
  var r=filtered();
  var prices=r.map(function(c){return c.c;});
  var stat=r.length?('<b>'+r.length+'건</b> · 중간값 <b>'+man(median(prices))+'</b> · '+man(Math.min.apply(null,prices))+' ~ '+man(Math.max.apply(null,prices))):'조건에 맞는 사례가 없어요.';
  var body=r.map(function(c){
    var open=ui.open===c.id;
    var incTxt=(c.inc&&c.inc.length)?c.inc.join(', '):'명시 없음';
    var tr='<tr class="sd-row'+(open?' on':'')+'" data-id="'+c.id+'">'+
      '<td class="sd-num"><b>'+man(c.c)+'</b>'+(c.paid?'<small>할인 후 '+man(c.paid)+'</small>':'')+(c.st==='견적'?'<small class="sd-quote">견적</small>':'')+'</td>'+
      '<td>'+vend(c.s)+(c.l65?' <span class="sd-l65" title="L65 협력업체 목록에 있는 스튜디오">L65 협력</span>':'')+'</td><td>'+vend(c.d)+'</td><td>'+vend(c.m)+'</td>'+
      '<td>'+esc(c.co)+'<small>'+esc(c.how)+' · '+esc(c.reg)+'</small></td>'+
      '<td class="sd-num">'+(c.all?man(c.all):'<span class="sd-muted">–</span>')+'</td>'+
      '<td class="sd-date">'+esc(c.date)+'</td></tr>';
    if(open){tr+='<tr class="sd-detail"><td colspan="7"><dl>'+
      '<dt>계약가에 포함</dt><dd>'+esc(incTxt)+'</dd>'+
      '<dt>별도라고 적힌 것</dt><dd>'+esc((c.out&&c.out.length)?c.out.join(', '):'명시 없음')+'</dd>'+
      (c.note?'<dt>메모</dt><dd>'+esc(c.note)+'</dd>':'')+
      '<dt>출처</dt><dd><a href="'+esc(c.src)+'" target="_blank" rel="noopener">원문 열기</a> '+adTag(c.ad)+'</dd></dl></td></tr>';}
    return tr;}).join('');
  return '<p class="sd-stat">'+stat+'</p><div class="sd-tablewrap"><table class="sd-table"><thead><tr><th>계약가</th><th>스튜디오</th><th>드레스</th><th>메이크업</th><th>플래너사</th><th>추가금 포함</th><th>시기</th></tr></thead><tbody>'+body+'</tbody></table></div>';
}
function chips(name,opts){return opts.map(function(o){return '<button class="sd-chip'+(ui[name]===o[0]?' on':'')+'" data-k="'+name+'" data-v="'+esc(o[0])+'">'+esc(o[1])+'</button>';}).join('');}
function controls(){
  return '<div class="sd-ctl"><div>'+chips('how',[['비동행','비동행'],['동행','동행'],['토탈샵','토탈샵'],['','전체']])+'</div>'+
  '<div>'+chips('reg',[['','전 지역'],['서울','서울'],['기타','서울 외·미기재']])+'</div>'+
  '<div>'+chips('sort',[['asc','낮은 순'],['desc','높은 순'],['new','최신 순']])+
  '<label class="sd-chk"><input type="checkbox" id="sdContractOnly"'+(ui.contractOnly?' checked':'')+'> 계약한 사례만</label></div>'+
  '<input id="sdQ" class="sd-q" placeholder="업체명으로 찾기 (예: 아뜨레블랑, 헤움, 세미앙)" value="'+esc(ui.q)+'"></div>';
}
function sameBlock(){
  return SDM_SAME.map(function(g){
    return '<article class="sd-same"><h4>'+esc(g.what)+'</h4><table>'+g.rows.map(function(r){return '<tr><th>'+esc(r[0])+'</th><td>'+esc(r[1])+'</td></tr>';}).join('')+'</table><p>'+esc(g.take)+'</p><a href="'+esc(g.src)+'" target="_blank" rel="noopener">원문</a> '+adTag(g.ad)+'</article>';
  }).join('');
}

var ROLE_INFO={
 studio:{label:'스튜디오',title:'촬영 결과물',desc:'공간·세트·작가·보정 스타일을 결정해요.',checks:['촬영 시간·의상 벌수','원본·수정본 포함','야간·로드씬 추가금','지정 작가·페이지 추가금']},
 dress:{label:'드레스',title:'드레스 선택 범위',desc:'촬영·본식 드레스와 피팅, 라벨 등급이 핵심이에요.',checks:['촬영/본식 제공 벌수','피팅비·투어비','프리미엄 라벨 추가금','신상·지정 드레스 추가금']},
 makeup:{label:'메이크업',title:'헤어·메이크업',desc:'촬영일·본식일 헤어와 메이크업을 담당해요.',checks:['원장/부원장/실장 직급','촬영·본식 포함 범위','얼리스타트','헤어변형·출장비']}
};
function cleanVendor(v){return String(v||'').replace(/\([^)]*\)/g,'').split('·')[0].trim();}
function buildVendors(){
 var map={};
 SDM_CASES.forEach(function(c){
  [['studio',c.s],['dress',c.d],['makeup',c.m]].forEach(function(x){
   var role=x[0],name=cleanVendor(x[1]);if(!name||/^미기재/.test(name))return;
   var k=role+'|'+name;if(!map[k])map[k]={role:role,name:name,cases:[],extras:{},notes:[]};
   var v=map[k];v.cases.push(c);
   (c.out||[]).forEach(function(e){var key=e.replace(/\s*\d+(?:\.\d+)?(?:만|만원)?(?:×\d+)?/g,'').trim();if(key)v.extras[key]=(v.extras[key]||0)+1;});
   if(c.note&&v.notes.indexOf(c.note)<0)v.notes.push(c.note);
  });
 });
 return Object.keys(map).map(function(k){var v=map[k],p=v.cases.map(function(c){return c.c;});v.med=median(p);v.min=Math.min.apply(null,p);v.max=Math.max.apply(null,p);v.contracts=v.cases.filter(function(c){return c.st==='계약';}).length;v.extraList=Object.keys(v.extras).sort(function(a,b){return v.extras[b]-v.extras[a];}).slice(0,4);return v;});
}
var VENDORS=buildVendors();
function vendorCards(){
 var q=vendorUi.q.trim().toLowerCase(),rows=VENDORS.filter(function(v){return (!vendorUi.role||v.role===vendorUi.role)&&(!q||v.name.toLowerCase().indexOf(q)>=0);});
 rows.sort(function(a,b){return b.cases.length-a.cases.length||a.name.localeCompare(b.name);});
 if(!rows.length)return '<p class="sd-muted">조건에 맞는 업체가 없어요.</p>';
 return '<div class="sd-vendor-grid">'+rows.slice(0,36).map(function(v){
  var r=ROLE_INFO[v.role],level=v.cases.length>=3?'높음':v.cases.length>=2?'보통':'낮음';
  var extras=v.extraList.length?v.extraList.map(function(e){return esc(e)+'('+v.extras[e]+'건)';}).join(' · '):'확인된 별도비용 없음';
  var notes=v.notes.slice(0,2).map(function(n){return '<li>'+esc(n)+'</li>';}).join('');
  var src=v.cases.slice(0,3).map(function(c){return '<a href="'+esc(c.src)+'" target="_blank" rel="noopener">'+esc(c.date)+' '+esc(c.co)+'</a>';}).join(' · ');
  var key=v.role+'|'+v.name,rr=(typeof SDM_VENDOR_RESEARCH!=='undefined'&&SDM_VENDOR_RESEARCH[key])||null;
  var painGuide=(typeof SDM_PAIN_GUIDE!=='undefined'&&SDM_PAIN_GUIDE[v.role])||r.checks;
  var researched=rr?'<span class="sd-researched">후기 조사 '+esc(rr.researched)+'</span>':'<span class="sd-researched sd-unresearched">업체별 불편후기 추가 조사 필요</span>';
  var rrStyle=rr?'<div class="sd-vendor-block"><b>어떤 스타일?</b><p>'+esc(rr.style)+'</p></div>':'';
  var rrInc=rr&&rr.includes&&rr.includes.length?'<div class="sd-vendor-block"><b>확인된 구성</b><p>'+rr.includes.map(esc).join(' · ')+'</p></div>':'';
  var rrCost=rr&&rr.costTriggers&&rr.costTriggers.length?'<div class="sd-vendor-block sd-cost"><b>💸 돈이 더 붙는 지점</b><ul>'+rr.costTriggers.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>':'';
  var rrPain=rr&&rr.pain&&rr.pain.length?'<div class="sd-vendor-block sd-pain"><b>⚠ 후기에서 먼저 볼 불편·고생 포인트</b><ul>'+rr.pain.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>':'<div class="sd-vendor-block sd-pain"><b>⚠ 이 업체 후기에서 꼭 찾을 것</b><ul>'+painGuide.slice(0,4).map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  var rrAvoid=rr&&rr.avoid&&rr.avoid.length?'<div class="sd-vendor-block sd-avoid"><b>우리의 방어법</b><ul>'+rr.avoid.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>':'';
  var rrSrc=rr&&rr.sources&&rr.sources.length?rr.sources.map(function(s){return '<a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.label)+' · '+esc(s.kind)+'</a>';}).join(' · '):'';
  return '<article class="sd-vendor-card"><header><div><span class="sd-role">'+r.label+'</span><h4>'+esc(v.name)+'</h4>'+researched+'</div><span class="sd-confidence">'+level+'</span></header>'+
   '<p class="sd-vendor-what"><b>'+r.title+'</b> · '+r.desc+'</p>'+
   rrStyle+
   '<div class="sd-vendor-metrics"><div><small>확인 사례</small><b>'+v.cases.length+'건</b><span>계약 '+v.contracts+'건</span></div><div><small>조합 계약가</small><b>'+man(v.med)+'</b><span>'+man(v.min)+' ~ '+man(v.max)+'</span></div><div><small>근거량</small><b>'+level+'</b><span>가격·후기 판단 자료</span></div></div>'+
   rrInc+rrCost+rrPain+rrAvoid+
   '<div class="sd-vendor-block"><b>현재 계약사례의 추가비</b><p>'+extras+'</p></div>'+
   '<div class="sd-vendor-block"><b>기존 계약 메모</b>'+(notes?'<ul>'+notes+'</ul>':'<p class="sd-muted">구체 메모 없음</p>')+'</div>'+
   '<div class="sd-vendor-block"><b>상담 때 기본 확인</b><p>'+r.checks.map(esc).join(' · ')+'</p></div><footer>'+(rrSrc?rrSrc+(src?' · ':''):'')+src+'</footer></article>';
 }).join('')+'</div>';
}
function vendorSection(){
 var btns=[['','전체'],['studio','스튜디오'],['dress','드레스'],['makeup','메이크업']].map(function(x){return '<button class="sd-chip'+(vendorUi.role===x[0]?' on':'')+'" data-vrole="'+x[0]+'">'+x[1]+'</button>';}).join('');
 var researchCount=typeof SDM_VENDOR_RESEARCH!=='undefined'?Object.keys(SDM_VENDOR_RESEARCH).length:0;
 return '<section class="sd-sec"><h3>가격 말고 업체 자체를 비교</h3><p class="sd-lead">무엇을 해주는 곳인지 → <b>후기에서 실제로 고생한 지점</b> → 추가금 발생 조건 → 피하는 방법 → 최종가 순서로 봐요. 현재 업체별 심층후기 '+researchCount+'곳 조사 완료.</p>'+
  '<div class="sd-meaning-grid">'+Object.keys(ROLE_INFO).map(function(k){var r=ROLE_INFO[k];return '<article><span>'+r.label+'</span><b>'+r.title+'</b><p>'+r.desc+'</p><small>'+r.checks.join(' · ')+'</small></article>';}).join('')+'</div>'+
  '<div class="sd-value-rule"><b>가성비 판단 순서</b><span>① 원하는 결과에 맞는가 → ② 기본가 포함 범위 → ③ 필수 추가비 포함 최종가 → ④ 실제 후기·근거 수 → ⑤ 같은 조건 업체 비교</span></div>'+
  '<div class="sd-ctl"><div>'+btns+'</div><input id="sdVendorQ" class="sd-q" placeholder="업체명 검색" value="'+esc(vendorUi.q)+'"></div><div id="sdVendors">'+vendorCards()+'</div></section>';
}
function check(k,t,sub){return '<label class="sd-task'+(st.checks[k]?' done':'')+'"><input type="checkbox" data-ck="'+k+'"'+(st.checks[k]?' checked':'')+'><span>'+t+(sub?'<small>'+sub+'</small>':'')+'</span></label>';}
var QUESTIONS=[
 ['이 조합으로 원본·수정본, 피팅비, 헬퍼비, 투어비까지 넣은 최종 총액이 얼마예요?','기본가만 들으면 실지출보다 55~100만 낮게 들림'],
 ['스튜디오·드레스·메이크업 단가를 업체별로 따로 적어주세요.','다른 회사에 같은 조합으로 견적 받을 때 필요'],
 ['본식 원판·DVD는 L65 필수라 빼주세요. 본식스냅도 빼고 다시 계산해주세요.','식장에서 원판·DVD·컨시어지 약 200만 별도 결제'],
 ['헬퍼비는 촬영·본식 각각 얼마고 현금인가요? 2부 드레스면 추가되나요?','보통 회당 25만, 2부·연장 시 +5만'],
 ['드레스 라벨 업그레이드하면 최대 얼마까지 붙어요? 상한 적어주실 수 있어요?','블랙라인 추가금 최대 50만을 약속받은 사례 있음'],
 ['메이크업 원장·부원장·실장 차이 금액이랑, 얼리스타트는 몇 시부터 얼마예요?','일요일 예식 시간이 이르면 얼리비 발생'],
 ['계약 후 업체를 바꾸면 위약금이 업체별로 얼마예요?','표준계약서는 선택 전·후 위약금 고지를 요구'],
 ['공정위 표준약관 쓰세요? 계약서에 가격표 붙여주시나요?','2026년 5월부터 가격표시 의무'],
 ['여기서 계약하면 14일 청약철회 되나요?','업체 상설 매장에서 연 박람회는 철회권 없음'],
 ['계약금 얼마고, 서비스 시작 전에 취소하면 얼마 돌려받아요?','분쟁해결기준: 총액 10% 공제 후 환급']
];
function guide(){
  return '<div class="sd-guide">'+
  '<section><h3>1. 상담 전</h3>'+
   check('g-budget','예산은 실지출 기준으로 정하기','계약가 목표 = 실지출 예산 − 약 100만 (원본 44 + 헬퍼 50 + 투어비 11)')+
   check('g-scrap','스튜디오·드레스·메이크업 원하는 사진 2~3개씩 저장')+
   check('g-l65','L65 조건 메모해 가기','2027.9.12(일) 예식 · 본식 원판·DVD 식장 필수 · 청량리 이동')+
   check('g-order','상담 순서 정하기','비동행 2곳 먼저, 비교용 동행 1곳. 현장계약 혜택 큰 곳은 마지막에')+
   check('g-named','동행 업체는 플래너를 먼저 지정','한 회사에서 한 번 상담한 플래너는 바꾸기 어려움')+
  '</section>'+
  '<section><h3>2. 상담 중: 이 순서로 물어보기</h3><ol class="sd-qs">'+QUESTIONS.map(function(q,i){return '<li><label class="sd-task'+(st.checks['q'+i]?' done':'')+'"><input type="checkbox" data-ck="q'+i+'"'+(st.checks['q'+i]?' checked':'')+'><span>“'+esc(q[0])+'”<small>'+esc(q[1])+'</small></span></label></li>';}).join('')+'</ol>'+
   '<button class="sd-btn" id="sdCopyQ">질문 목록 복사</button><span id="sdCopyMsg" class="sd-muted"></span>'+
   '<h4>이러면 한 번 더 의심</h4><ul class="sd-flags"><li>“오늘만 이 가격” (박람회는 매달 열려요)</li><li>총액만 말하고 업체별 단가를 안 적어줌</li><li>싼 샵을 말하면 계속 비싼 샵으로 유도</li><li>헬퍼·원본을 “나중에 안내”로 미룸</li><li>표준약관도 가격표도 없음</li></ul>'+
  '</section>'+
  '<section><h3>3. 상담 후</h3>'+
   check('a-log','받은 견적을 아래 “내 견적 기록”에 입력','같은 조합이 회사마다 60~100만 차이 난 사례가 있음')+
   check('a-same','제일 싼 곳 조합으로 다른 회사에 한 번 더 견적 요청')+
   check('a-card','계약금은 카드 할부로','문제 생기면 할부 항변권')+
   check('a-photo','계약서 비고란(별도 항목) 사진 저장')+
   '<p class="sd-src">근거: <a href="https://www.easylaw.go.kr/CSP/CnpClsMain.laf?ccfNo=2&cciNo=3&cnpClsNo=1&csmSeq=1894" target="_blank" rel="noopener">소비자분쟁해결기준(결혼준비대행)</a> · <a href="https://www.l65hotelwedding.co.kr/partner/" target="_blank" rel="noopener">L65 협력업체</a></p>'+
  '</section></div>';
}
function estimate(q){var add=0,parts=[];if(!q.orig){add+=ADD.orig;parts.push('원본·수정본 44');}if(!q.helper){add+=ADD.helper;parts.push('헬퍼 50');}if(!q.tour){add+=ADD.tour;parts.push('투어비 11');}return {total:q.price+add,parts:parts};}
function pct(v,arr){var n=arr.filter(function(x){return x<=v;}).length;return Math.round(n/arr.length*100);}
function matches(q){var names=[q.s,q.d,q.m].filter(Boolean).map(function(x){return x.trim().toLowerCase();}).filter(function(x){return x.length>=2;});if(!names.length)return [];return SDM_CASES.filter(function(c){var hay=[c.s,c.d,c.m].join(' ').toLowerCase();return names.some(function(n){return hay.indexOf(n)>=0;});}).slice(0,6);}
function quotes(){
  var seoulPrices=seoul.map(function(c){return c.c;});
  var list=st.quotes.map(function(q,i){
    var e=estimate(q),m=matches(q),p=pct(q.price,seoulPrices);
    return '<article class="sd-myq"><header><b>'+esc(q.co||'업체 미입력')+'</b><span>'+esc([q.s,q.d,q.m].filter(Boolean).join(' / ')||'조합 미입력')+'</span><button class="sd-x" data-del="'+i+'" aria-label="삭제">삭제</button></header>'+
      '<div class="sd-myq-grid"><div><small>계약가</small><b>'+man(q.price)+'</b></div><div><small>예상 실지출</small><b>'+man(e.total)+'</b><small>'+(e.parts.length?'+ '+esc(e.parts.join(', ')):'필수 항목 모두 포함')+'</small></div><div><small>서울 비동행 계약 '+seoulPrices.length+'건 중</small><b>'+(p<=0?'가장 쌈':'하위 '+p+'%')+'</b><small>중간값 '+man(medSeoul)+'</small></div></div>'+
      (m.length?'<p class="sd-muted">같은 업체가 들어간 사례: '+m.map(function(c){return '<a href="'+esc(c.src)+'" target="_blank" rel="noopener">'+esc(c.co)+' '+man(c.c)+'</a>';}).join(' · ')+'</p>':'')+'</article>';
  }).join('');
  return '<form id="sdForm" class="sd-form">'+
   '<input name="co" placeholder="플래너사 (예: 제이웨딩)"><input name="s" placeholder="스튜디오"><input name="d" placeholder="드레스"><input name="m" placeholder="메이크업">'+
   '<input name="price" type="number" step="0.5" min="0" placeholder="계약가(만원)" required>'+
   '<fieldset><legend>계약가에 포함된 것</legend><label><input type="checkbox" name="orig"> 원본·수정본</label><label><input type="checkbox" name="helper"> 헬퍼비</label><label><input type="checkbox" name="tour"> 투어비</label></fieldset>'+
   '<button class="sd-btn" type="submit">견적 추가</button></form>'+(list||'<p class="sd-muted">아직 기록한 견적이 없어요. 상담에서 받은 금액을 넣으면 실지출과 사례 대비 위치를 바로 보여줘요.</p>');
}
var TIER_LABEL={A:'A · 검증됨',B:'B · 실계약 후기',C:'C · 업체 공개가',D:'D · 확인 안됨'};
var TIER_DESC={A:'서로 다른 사람이 같은 가격을 독립적으로 확인',B:'실제 계약자 1인칭 후기지만 출처 1건',C:'업체 자체 페이지·광고성 후기. 실거래 확인 안됨',D:'가격 미공개(DM 전용) 또는 근거 약함'};
var snapUi={tier:''};
function snapPrice(c){var s=c.solo?parseFloat(c.solo):null,d=c.duo?parseFloat(c.duo):null;return s!=null?s:(d!=null?d:999);}
function snapRows(){
  var rows=SNAP_CASES.filter(function(c){return !snapUi.tier||c.tier===snapUi.tier;});
  rows.sort(function(a,b){return snapPrice(a)-snapPrice(b);});
  var body=rows.map(function(c){
    var src=(c.src||[]).map(function(s){return s.url&&/^https?:/.test(s.url)?'<a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.note||'출처')+'</a>':esc((s.url||'')+(s.note?' · '+s.note:''));}).join(' · ');
    return '<tr><td class="sd-tier sd-tier-'+c.tier+'">'+c.tier+'</td><td><b>'+esc(c.name)+'</b></td><td class="sd-num">'+esc(c.solo||'–')+'</td><td class="sd-num">'+esc(c.duo||'–')+'</td><td class="sd-note">'+esc(c.note||'')+(src?'<br><small>'+src+'</small>':'')+'</td></tr>';
  }).join('');
  return '<p class="sd-stat">'+rows.length+'곳</p><div class="sd-tablewrap"><table class="sd-table"><thead><tr><th>등급</th><th>업체</th><th>1인</th><th>2인</th><th>메모·출처</th></tr></thead><tbody>'+body+'</tbody></table></div>';
}
function snapSection(){
  var counts={};SNAP_CASES.forEach(function(c){counts[c.tier]=(counts[c.tier]||0)+1;});
  return '<section class="sd-sec"><h3>본식 아이폰스냅 업체 비교</h3>'+
  '<p class="sd-lead">숨고·네이버 블로그·카페·크몽·Threads·인스타그램을 직접 열어 모았어요. 등급은 가격이 얼마나 믿을 만한지를 뜻해요.</p>'+
  '<div class="sd-tierlegend">'+['A','B','C','D'].map(function(t){return '<div><b class="sd-tier sd-tier-'+t+'">'+t+'</b><span>'+TIER_DESC[t]+' ('+(counts[t]||0)+'곳)</span></div>';}).join('')+'</div>'+
  '<div class="sd-ctl"><div>'+['','A','B','C','D'].map(function(t){return '<button class="sd-chip'+(snapUi.tier===t?' on':'')+'" data-snapt="'+t+'">'+(t?TIER_LABEL[t]:'전체')+'</button>';}).join('')+'</div></div>'+
  '<div id="snapRows">'+snapRows()+'</div>'+
  '<p class="sd-note">A등급도 \'업체가 지금 내건 할인가가 진짜\'라는 확인이지, 실제 그 값에 계약이 됐다는 보장은 아니에요. 계약 전엔 항상 최신 가격을 다시 물어보세요. 이 밖에 존재만 확인되고 가격을 못 찾은 업체가 15곳 더 있어요 (ARC ONE, 몹시도사랑히, 비쥬스냅, 뉴올드, 디아일, 러브하드, 포레버위드유, 블루아이, 디어마이선샤인, 이은, sorisnap, 모먼트무브, 오브하우스, 아로소, 오제스냅, 무브아, 마인드그라피, 수이프레임, 하루그라피, 잉스냅).</p>'+
  '</section>';
}
function bindSnap(){
  root.querySelectorAll('[data-snapt]').forEach(function(b){b.onclick=function(){snapUi.tier=b.dataset.snapt;root.querySelectorAll('[data-snapt]').forEach(function(x){x.classList.toggle('on',x.dataset.snapt===snapUi.tier);});document.getElementById('snapRows').innerHTML=snapRows();};});
}
function render(){
  root.innerHTML='<div class="sd">'+
  '<header class="sd-hero"><h2>스드메</h2><p>네이버 카페 원문 '+SDM_CASES.length+'건을 직접 열어 업체 조합과 금액을 정리했어요. (2026-09-24 수집)</p>'+
   '<div class="sd-kpi"><div><small>비동행 계약가 중간값</small><b>'+man(medAll)+'</b><span>업체명 공개 '+base.length+'건 · 서울만 '+seoul.length+'건은 '+man(medSeoul)+'</span></div>'+
   '<div><small>거의 항상 붙는 추가금</small><b>+55~100만</b><span>원본·수정본 44 · 헬퍼 50 · 투어비 11</span></div>'+
   '<div><small>L65 기준 목표 실지출</small><b>280~320만</b><span>계약가 220~250 + 추가금. 본식 원판·DVD는 식장 필수라 별도</span></div></div></header>'+
  vendorSection()+
  '<section class="sd-sec"><h3>실제 계약 사례</h3><p class="sd-lead">줄을 누르면 포함·별도 항목과 원문 링크가 나와요. 업체명을 누르면 그 업체가 들어간 사례만 모아 봐요.</p>'+controls()+'<div id="sdCases">'+caseRows()+'</div>'+
   '<p class="sd-note">다이렉트 카페 글이 많아요. 다이렉트 카페는 운영사가 직접 운영하고 후기 작성 시 포인트를 줘서 “광고성”으로 표시했어요. 금액은 원문 그대로입니다.</p></section>'+
  '<section class="sd-sec"><h3>같은 조합, 다른 회사 견적</h3><p class="sd-lead">동행이냐 비동행이냐보다, 같은 조합을 어느 회사가 견적 내느냐의 차이가 더 컸어요.</p><div class="sd-same-grid">'+sameBlock()+'</div>'+
   '<p class="sd-note">웨딩킹 비교글 3건은 웨딩킹 운영 카페의 홍보글이라 차이가 과장됐을 수 있어요.</p></section>'+
  (typeof SNAP_CASES!=='undefined'?snapSection():'')+
  '<section class="sd-sec"><h3>플래너 상담 가이드</h3>'+guide()+'</section>'+
  '<section class="sd-sec"><h3>내 견적 기록</h3><div id="sdQuotes">'+quotes()+'</div></section>'+
  '</div>';
  bind();
}
function refreshCases(){document.getElementById('sdCases').innerHTML=caseRows();bindCases();}
function bindCases(){
  root.querySelectorAll('.sd-row').forEach(function(tr){tr.onclick=function(ev){if(ev.target.closest('.sd-v')||ev.target.closest('a'))return;ui.open=ui.open===tr.dataset.id?'':tr.dataset.id;refreshCases();};});
  root.querySelectorAll('.sd-v').forEach(function(b){b.onclick=function(ev){ev.stopPropagation();ui.q=b.dataset.q;ui.how='';ui.contractOnly=false;render();var t=document.getElementById('sdQ');if(t)t.scrollIntoView({block:'center'});};});
}
function bind(){
  root.querySelectorAll('[data-vrole]').forEach(function(b){b.onclick=function(){vendorUi.role=b.dataset.vrole;root.querySelectorAll('[data-vrole]').forEach(function(x){x.classList.toggle('on',x===b);});document.getElementById('sdVendors').innerHTML=vendorCards();};});
  var vq=document.getElementById('sdVendorQ');if(vq)vq.oninput=function(){vendorUi.q=vq.value;document.getElementById('sdVendors').innerHTML=vendorCards();};
  root.querySelectorAll('.sd-chip[data-k]').forEach(function(b){b.onclick=function(){ui[b.dataset.k]=b.dataset.v;root.querySelectorAll('.sd-chip[data-k="'+b.dataset.k+'"]').forEach(function(x){x.classList.toggle('on',x===b);});refreshCases();};});
  var co=document.getElementById('sdContractOnly');if(co)co.onchange=function(){ui.contractOnly=co.checked;refreshCases();};
  var q=document.getElementById('sdQ');if(q)q.oninput=function(){ui.q=q.value;refreshCases();};
  bindCases();
  bindSnap();
  root.querySelectorAll('[data-ck]').forEach(function(x){x.onchange=function(){st.checks[x.dataset.ck]=x.checked;save();x.closest('.sd-task').classList.toggle('done',x.checked);};});
  var cp=document.getElementById('sdCopyQ');if(cp)cp.onclick=function(){var txt=QUESTIONS.map(function(q,i){return (i+1)+'. '+q[0];}).join('\n');var msg=document.getElementById('sdCopyMsg');(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){msg.textContent=' 복사됐어요';},function(){msg.textContent=' 복사가 막혀 있어요. 길게 눌러 선택해 주세요';});};
  bindQuotes();
}
function bindQuotes(){
  var f=document.getElementById('sdForm');
  if(f)f.onsubmit=function(ev){ev.preventDefault();var d=new FormData(f),price=parseFloat(d.get('price'));if(!(price>0))return;
    st.quotes.push({co:d.get('co')||'',s:d.get('s')||'',d:d.get('d')||'',m:d.get('m')||'',price:price,orig:!!d.get('orig'),helper:!!d.get('helper'),tour:!!d.get('tour'),at:new Date().toISOString().slice(0,10)});save();
    document.getElementById('sdQuotes').innerHTML=quotes();bindQuotes();};
  root.querySelectorAll('[data-del]').forEach(function(b){b.onclick=function(){st.quotes.splice(+b.dataset.del,1);save();document.getElementById('sdQuotes').innerHTML=quotes();bindQuotes();};});
}
render();
})();
