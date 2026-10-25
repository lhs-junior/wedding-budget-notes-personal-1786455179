/* sdm-iwedding.js — 스드메 탭: 아이웨딩 상세페이지·후기 검증 섹션 (데이터: sdm-iwedding-audit.js)
 * 실지불액 = 기본가 + 미포함 필수비용 + 선택 옵션 - 실제 적용 할인. 미확인 비용은 더하지 않고 개수로만 표시.
 */
(function(g){
function sum(a){return (a||[]).reduce(function(t,x){return t+(+x.v||0);},0);}
function calc(c,sel){
 var opt=(c.opts||[]).filter(function(o,i){return sel&&sel[i];});
 return {base:c.base,req:sum(c.req),opt:sum(opt),disc:sum(c.disc),total:Math.round((c.base+sum(c.req)+sum(opt)-sum(c.disc))*10)/10,unknown:(c.unknown||[]).length};
}
g.SDM_IW_CALC=calc;
if(typeof document==='undefined'||typeof SDM_IW==='undefined')return;

var D=SDM_IW,ui={role:'',kind:'',fabric:'',sort:'focus',cmp:D.combos.filter(function(c){return c.defaultCmp;}).map(function(c){return c.id;}),sel:{}};
D.combos.forEach(function(c){(c.opts||[]).forEach(function(o,i){if(o.on){(ui.sel[c.id]=ui.sel[c.id]||{})[i]=true;}});});
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function man(n){return n==null?'미확인':(Math.round(n*10)/10).toLocaleString()+'만';}
function a(u,t){return u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(t)+'</a>':esc(t);}
function grade(gr){return '<span class="iw-grade iw-g'+esc(gr)+'" title="'+esc(D.gradeInfo[gr]||'')+'">'+esc(gr)+'</span>';}
function money(list){return (list||[]).length?'<ul>'+list.map(function(x){return '<li>'+esc(x.k)+(x.v!=null?' <b>'+man(x.v)+'</b>':'')+(x.note?' <small>'+esc(x.note)+'</small>':'')+'</li>';}).join('')+'</ul>':'<p class="sd-muted">확인된 항목 없음</p>';}
function li(list,empty){return (list||[]).length?'<ul>'+list.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>':'<p class="sd-muted">'+(empty||'없음')+'</p>';}
function chips(k,opts){return opts.map(function(o){return '<button class="sd-chip'+(ui[k]===o[0]?' on':'')+'" data-iwk="'+k+'" data-iwv="'+esc(o[0])+'">'+esc(o[1])+'</button>';}).join('');}
function revBadge(r){
 var n=r.independent||0,cls=n>=3?'ok':n>=1?'mid':'warn';
 return '<span class="iw-rev iw-rev-'+cls+'">독립 후기 '+n+'건'+(r.latest?' · 최신 '+esc(r.latest):'')+(n<3?' · 부족':'')+'</span>';
}

/* 통합 업체 카드: 아이웨딩 검증 + 카페 계약사례 + 조사 메모 + 인스타를 한 카드에 */
function fit(text,re){var m=String(text||'').match(re);return m?m[0]:'';}
function model(v,old){
 var O=g.SDM_OLD,role=v.role,link=O?O.link(role,v.name):{matches:[],rrs:[]};
 var cases=[].concat(old?[old]:link.matches);
 var rr=link.rrs[0]||null,texts=[v.style,v.instaFeel,rr&&rr.style].join(' ');
 var r=v.reviews||{items:[],independent:rr&&rr.reviewEvidence?rr.reviewEvidence.recent:0,latest:rr&&rr.reviewEvidence?rr.reviewEvidence.latest:null};
 var allCase=[];cases.forEach(function(c){allCase=allCase.concat(c.cases);});
 var prices=allCase.map(function(c){return c.c;});
 var p0=(v.products||[])[0];
 var insta=(v.insta||[]).slice();
 if(!insta.length&&rr&&rr.links)rr.links.forEach(function(l){if(/instagram\.com/.test(l.url))insta.push({handle:l.url.replace(/^.*instagram\.com\/|\/$/g,'').split('/')[0],url:l.url});});
 return {v:v,old:old,role:role,roles:[role],name:v.name,cases:cases,rrs:link.rrs,
  portrait:/인물/.test(texts)?'인물 중심':(role==='studio'?'미확인':''),
  fabric:v.fabric||(role==='dress'?(/실크/.test(texts)&&/비즈/.test(texts)?'실크·비즈':/실크/.test(texts)?'실크':/비즈/.test(texts)?'비즈':'미확인'):''),
  kind:role!=='studio'?'':v.total==='both'?'토탈·비토탈':v.total===true?'토탈':v.total===false?'비토탈':(/토탈/.test(v.name+cases.map(function(c){return c.cases.map(function(x){return x.s;}).join(' ');}).join(' '))?'토탈 사례 있음':''),
  price:p0?{t:p0.price,gr:p0.grade,url:p0.url,name:p0.name}:null,
  cafe:prices.length?{n:prices.length,contracts:cases.reduce(function(t,c){return t+c.contracts;},0),min:Math.min.apply(null,prices),max:Math.max.apply(null,prices)}:null,
  rev:{n:r.independent||0,all:(r.items||[]).length,latest:r.latest},
  extras:(v.extras&&v.extras.length?v.extras.map(function(x){return x.k+(x.v!=null?' '+man(x.v):'');}):[]).concat(cases.reduce(function(acc,c){return acc.concat(c.extraList.map(function(e){return '카페 사례: '+e+' ('+c.extras[e]+'건)';}));},[])).concat(v.extras&&v.extras.length?[]:(rr&&rr.costTriggers)||[]).slice(0,4),
  cond:p0&&p0.cond?p0.cond:'',unk:(v.unknown||[])[0]||'',
  insta:insta,feel:v.instaFeel||'',photos:(g.SDM_PHOTOS||{})[v.name]||[]};
}
function hasRole(m,r){return m.role===r||(m.roles||[]).indexOf(r)>=0;}
function tag(t,cls){return t?'<span class="vc-tag'+(cls?' '+cls:'')+'">'+esc(t)+'</span>':'';}
function roleText(m){return (m.roles&&m.roles.length>1?m.roles:[m.role]).map(function(r){return D.roleLabel[r]||r;}).join('·')+(m.roles&&m.roles.length>1?' (토탈샵)':'');}
function baseName(n){return String(n).replace(/\s*\(.*\)$/,'');}
function subName(n){var x=String(n).match(/\((.*)\)$/);return x?x[1]:'';}
/* 카드에 보일 짧은 가격: "… = 114만" → 114만, "118만 → 노투어 107만" → 107만, 그 외 첫 금액 */
function shortPrice(t){t=String(t||'');var s=t.split(/=|→/).pop(),x=s.match(/[\d.]+만/)||t.match(/[\d.]+만/);return x?x[0]:t;}
function tagsOf(m){
 var fabCls=/실크/.test(m.fabric)?'good':m.fabric==='비즈'||/비즈 위주|비즈·튈/.test(m.fabric)?'warn':'';
 return (m.role==='studio'?tag(m.portrait==='인물 중심'?'인물 중심':'인물 중심 미확인',m.portrait==='인물 중심'?'good':''):'')+(m.role==='dress'?tag(m.fabric,fabCls):'')+tag(m.kind,m.kind==='비토탈'||m.kind==='토탈·비토탈'?'good':'');
}
function priceOf(m){
 if(m.price)return {gr:m.price.gr,t:shortPrice(m.price.t),full:m.price.t};
 if(m.cafe)return {gr:m.cafe.contracts?'C':'D',t:'단독가 미확인',full:'카페 '+(m.cafe.contracts?'계약':'견적')+' 사례만 있음 · 조합 전체가 '+man(m.cafe.min)+'~'+man(m.cafe.max)};
 return {gr:'미확인',t:'가격 미확인',full:''};
}
function thumb(m,cls){
 var p=m.photos[0];
 return p?'<img class="'+cls+'" src="'+esc(p.src)+'" alt="'+esc(baseName(m.name))+' 대표 사진" loading="lazy" decoding="async">':'<span class="'+cls+' vt-ph vt-'+esc(m.role)+'" aria-hidden="true">'+esc(baseName(m.name).slice(0,2))+'</span>';
}
/* 목록 카드: 사진·이름·가격·태그만. 나머지는 상세 모달에서 */
function tile(m){
 var p=priceOf(m);
 return '<button type="button" class="vt'+(m.cafeOnly?' vt-cafe':'')+'" data-vid="'+m.id+'">'+thumb(m,'vt-img')+
  '<span class="vt-body"><span class="vt-role">'+esc(roleText(m))+(subName(m.name)?' · '+esc(subName(m.name)):'')+'</span>'+
  '<b class="vt-name">'+esc(baseName(m.name))+'</b>'+
  '<span class="vt-price">'+grade(p.gr)+' <b>'+esc(p.t)+'</b></span>'+
  '<span class="vt-tags">'+tagsOf(m)+'</span>'+
  '<span class="vt-meta">후기 '+m.rev.n+'건'+(m.cafe?' · 카페 사례 '+m.cafe.n+'건':'')+(m.photos.length?' · 사진 '+m.photos.length:'')+'</span></span></button>';
}
function sec(title,body,cls){return body?'<section class="md-sec'+(cls?' '+cls:'')+'"><h5>'+title+'</h5>'+body+'</section>':'';}
/* 상세 모달: 업체에 대해 모은 것 전부. 새 정보는 여기 섹션으로 추가 */
function detail(m){
 var v=m.v,O=g.SDM_OLD,r=v.reviews||{items:[]},p=priceOf(m);
 var gal=m.photos.length?'<div class="md-galw"><button type="button" class="md-nav" data-gal="-1" aria-label="이전 사진">‹</button><button type="button" class="md-nav md-next" data-gal="1" aria-label="다음 사진">›</button><div class="md-gal">'+m.photos.map(function(x,i){return '<a href="'+esc(x.src)+'" target="_blank" rel="noopener"><img src="'+esc(x.src)+'" alt="'+esc(baseName(m.name))+' 사진 '+(i+1)+'" loading="'+(i<2?'eager':'lazy')+'" decoding="async"'+(x.w&&x.h?' style="aspect-ratio:'+x.w+'/'+x.h+'"':'')+'></a>';}).join('')+'</div></div><p class="md-src">사진 '+m.photos.length+'장 · 출처 '+a(v.iwUrl,'아이웨딩 업체정보')+' (옆으로 넘겨 보기, 누르면 원본)</p>'
  :'<div class="md-nogal">'+thumb(m,'md-ph')+'<p>공개 사진을 아직 모으지 못했어요.'+(m.insta.length?' 인스타에서 분위기를 보세요.':'')+'</p></div>';
 var head='<header class="md-head"><span class="vt-role">'+esc(roleText(m))+(subName(m.name)?' · '+esc(subName(m.name)):'')+'</span><h4>'+esc(baseName(m.name))+'</h4><div class="vt-tags">'+tagsOf(m)+'</div>'+
  (m.insta.length?'<div class="md-ig">'+m.insta.map(function(i){return '<a class="vc-ig" href="'+esc(i.url)+'" target="_blank" rel="noopener">인스타 @'+esc(i.handle)+'</a>';}).join('')+'</div>':'')+'</header>';
 var kpi='<div class="md-kpi"><div><small>가격</small><b>'+esc(p.t)+'</b><span>'+grade(p.gr)+' '+esc(D.gradeInfo[p.gr]||'')+'</span></div>'+
  '<div><small>독립 후기</small><b>'+m.rev.n+'건</b><span>'+(m.rev.latest?'최신 '+esc(m.rev.latest):'날짜 미확인')+(m.rev.n<3?' · 3건 미만':'')+'</span></div>'+
  '<div><small>카페 사례</small><b>'+(m.cafe?m.cafe.n+'건':'없음')+'</b><span>'+(m.cafe?'실계약 '+m.cafe.contracts+'건 · 조합가 '+man(m.cafe.min)+(m.cafe.max!==m.cafe.min?'~'+man(m.cafe.max):''):'')+'</span></div></div>';
 var body='';
 body+=sec('가격 근거',(p.full&&p.full!==p.t?'<p class="md-price">'+esc(p.full)+'</p>':'')+(m.cond?'<p>'+esc(m.cond)+'</p>':'')+(v.products&&v.products.length?'<ul>'+v.products.map(function(x){return '<li>'+grade(x.grade)+' <b>'+esc(x.price)+'</b> · '+a(x.url,x.name)+(x.cond?'<small>'+esc(x.cond)+'</small>':'')+'</li>';}).join('')+'</ul>':''));
 body+=sec('특징',v.style?'<p>'+esc(v.style)+'</p>'+(m.feel?'<p class="sd-muted">인스타 느낌: '+esc(m.feel)+'</p>':''):(m.feel?'<p>'+esc(m.feel)+'</p>':''));
 body+=sec('상품가에 포함',(v.included||[]).length?li(v.included):'');
 body+=sec('별도 비용',(v.extras||[]).length||m.extras.length?((v.extras||[]).length?money(v.extras):li(m.extras)):'','md-cost');
 body+=sec('쿠폰·특전',(v.benefits||[]).length?li(v.benefits):'');
 body+=sec('아직 확인 안 된 것',(v.unknown||[]).length?li(v.unknown):'','md-unk');
 body+=sec('후기 '+(r.items||[]).length+'건',(r.items||[]).length?'<ul class="md-rev">'+r.items.map(function(x){return '<li><div><span class="iw-kind">'+esc(x.kind)+'</span> '+a(x.url,x.date+' '+(x.title||''))+(x.ad?' <span class="sd-ad sd-ad-y">'+esc(x.ad)+'</span>':'')+'</div>'+(x.paid?'<small>지불 '+esc(x.paid)+'</small>':'')+(x.good?'<p class="md-good">+ '+esc(x.good)+'</p>':'')+(x.bad?'<p class="md-bad">− '+esc(x.bad)+'</p>':'')+'</li>';}).join('')+'</ul>'+(r.note?'<p class="sd-evidence-note">'+esc(r.note)+'</p>':''):'');
 if(O){m.cases.forEach(function(c){body+=sec('카페 계약사례 · '+esc(c.name),O.caseBlocks(c));});m.rrs.forEach(function(rr){body+=sec('조사 메모 ('+esc(rr.researched)+')',O.researchBlocks(rr,m.role));});
  if(!m.rrs.length&&O.roleInfo[m.role])body+=sec('상담 때 확인할 것','<p>'+O.roleInfo[m.role].checks.map(esc).join(' · ')+'</p>');}
 var links=(v.iwUrl?a(v.iwUrl,'아이웨딩 업체정보 →'):'')+(v.links||[]).map(function(l){return a(l.url,l.label+' →');}).join('');
 return '<div class="md-top"><button type="button" class="md-x" data-close aria-label="닫기">←</button><b>'+esc(baseName(m.name))+'</b></div>'+gal+head+kpi+body+(links?'<div class="iw-links md-links">'+links+'</div>':'');
}
function allModels(){
 var O=g.SDM_OLD,list=D.vendors.map(function(v){return model(v,null);}),used={};
 list.forEach(function(m){m.cases.forEach(function(c){used[c.role+'|'+c.name]=1;});});
 if(O)O.list().forEach(function(c){if(used[c.role+'|'+c.name])return;
  var rr=O.rrFor(c.role+'|'+c.name);
  var fake={role:c.role,name:c.name,style:rr?rr.style:'',reviews:null,links:rr&&rr.links?rr.links:[]};
  var same=list.filter(function(x){return x.cafeOnly&&x.name===c.name;})[0];
  if(same){same.cases.push(c);same.roles.push(c.role);if(rr)same.rrs.push(rr);same.cafe.n+=c.cases.length;same.cafe.contracts+=c.contracts;same.cafe.min=Math.min(same.cafe.min,c.min);same.cafe.max=Math.max(same.cafe.max,c.max);return;}
  var m=model(fake,c);m.cases=[c];m.rrs=rr?[rr]:[];m.cafeOnly=true;
  if(rr&&rr.reviewEvidence)m.rev={n:rr.reviewEvidence.recent||0,all:0,latest:rr.reviewEvidence.latest};
  list.push(m);});
 list.forEach(function(m,i){m.id=i;});
 return list;
}
var MODELS=null;
function vendors(){
 MODELS=MODELS||allModels();
 var q=(ui.q||'').trim().toLowerCase();
 var rows=MODELS.filter(function(m){
  if(ui.role&&!hasRole(m,ui.role))return false;
  if(ui.kind==='total'&&!/토탈/.test(m.kind.replace('비토탈','')))return false;
  if(ui.kind==='nontotal'&&!/비토탈/.test(m.kind))return false;
  if(ui.fabric&&!(m.role==='dress'&&m.fabric.indexOf(ui.fabric)>=0))return false;
  return !q||m.name.toLowerCase().indexOf(q)>=0;});
 rows.sort(function(x,y){
  var verified=(y.cafeOnly?0:1)-(x.cafeOnly?0:1);if(verified)return verified;
  var F=['클레스튜디오','안나스포사','에델린','메라키웨딩','제이와이','아우어스튜디오','르네아뜰리에'],fx=F.findIndex(function(n){return x.name.indexOf(n)===0;}),fy=F.findIndex(function(n){return y.name.indexOf(n)===0;});
  if(ui.sort==='focus'&&(fx>=0||fy>=0))return (fx<0?99:fx)-(fy<0?99:fy);
  if(ui.sort==='review'||ui.sort==='focus')return (y.rev.n-x.rev.n)||((y.cafe?y.cafe.n:0)-(x.cafe?x.cafe.n:0));
  return (x.role+x.name).localeCompare(y.role+y.name);});
 var nV=rows.filter(function(m){return !m.cafeOnly;}).length;
 return rows.length?'<p class="sd-stat"><b>'+rows.length+'곳</b> · 아이웨딩 검증 '+nV+'곳 + 카페 계약사례만 있는 업체 '+(rows.length-nV)+'곳</p><div class="vt-grid">'+rows.map(tile).join('')+'</div>':'<p class="sd-muted">조건에 맞는 업체가 없어요.</p>';
}

function comboRow(c){
 var r=calc(c,ui.sel[c.id]),on=ui.cmp.indexOf(c.id)>=0;
 return '<label class="iw-combo'+(on?' on':'')+'"><input type="checkbox" data-cmp="'+c.id+'"'+(on?' checked':'')+'><span><b>'+esc(c.name)+'</b><small>'+(c.total?'토탈':'비토탈')+' · '+grade(c.grade)+' 기본 '+man(c.base)+' → 예상 '+man(r.total)+(r.unknown?' · 미확인 '+r.unknown+'개':'')+'</small></span></label>';
}
function diff(n,base){var d=Math.round((n-base)*10)/10;return (d>0?'+':'')+d+'만';}
function compare(){
 var list=D.combos.filter(function(c){return ui.cmp.indexOf(c.id)>=0;});
 if(!list.length)return '<p class="sd-muted">위에서 2~4개를 고르세요.</p>';
 function est(id){var c=D.combos.filter(function(x){return x.id===id;})[0];return calc(c,ui.sel[id]).total;}
 var b1=est('b1'),b2=est('b2');
 return '<div class="iw-cmp">'+list.map(function(c){
  var r=calc(c,ui.sel[c.id]),sel=ui.sel[c.id]||{};
  return '<article class="iw-cmpcol"><h4>'+esc(c.name)+'</h4><p class="iw-sub">'+(c.total?'토탈':'비토탈')+' · '+grade(c.grade)+' '+a(c.src,c.srcLabel)+'</p>'+
   '<p class="iw-cond">'+esc(c.cond)+'</p>'+
   '<dl class="iw-dl"><dt>기본가</dt><dd>'+man(r.base)+'</dd><dt>미포함 필수</dt><dd>+'+man(r.req)+'</dd><dt>선택 옵션</dt><dd>+'+man(r.opt)+'</dd><dt>적용 할인</dt><dd>−'+man(r.disc)+'</dd><dt class="iw-tot">예상 실지불</dt><dd class="iw-tot">'+man(r.total)+'</dd>'+
   '<dt>에델린 조합 예상('+man(b1)+') 대비</dt><dd>'+diff(r.total,b1)+'</dd><dt>메라키 조합 예상('+man(b2)+') 대비</dt><dd>'+diff(r.total,b2)+'</dd></dl>'+
   ((c.req||[]).length?'<div class="iw-blk"><b>미포함 필수비용</b>'+money(c.req)+'</div>':'')+
   ((c.opts||[]).length?'<div class="iw-blk"><b>선택 옵션 (체크하면 합산)</b>'+c.opts.map(function(o,i){return '<label class="iw-opt"><input type="checkbox" data-opt="'+c.id+'" data-i="'+i+'"'+(sel[i]?' checked':'')+'> '+esc(o.k)+' <b>'+man(o.v)+'</b></label>';}).join('')+'</div>':'')+
   ((c.disc||[]).length?'<div class="iw-blk"><b>적용 할인</b>'+money(c.disc)+'</div>':'')+
   '<div class="iw-blk iw-unk"><b>미확인 '+(c.unknown||[]).length+'개 · 합계에 넣지 않음</b>'+li(c.unknown)+'</div></article>';
 }).join('')+'</div>';
}

function picks(){
 return '<div class="iw-picks">'+D.picks.map(function(p){
  return '<article class="iw-pick"><span class="iw-rank">'+esc(p.rank)+'</span><h4>'+esc(p.title)+'</h4>'+
   '<dl class="iw-pickdl"><dt>추천 이유</dt><dd>'+esc(p.why)+'</dd><dt>기존 대비 장점</dt><dd>'+esc(p.pros)+'</dd><dt>기존 대비 단점</dt><dd>'+esc(p.cons)+'</dd><dt>가격 차이</dt><dd>'+esc(p.diff)+'</dd><dt>추가금 리스크</dt><dd>'+esc(p.risk)+'</dd><dt>후기 근거</dt><dd>'+esc(p.reviews)+'</dd><dt>상세페이지</dt><dd>'+(p.links||[]).map(function(l){return a(l.url,l.label);}).join(' · ')+'</dd><dt>근거 부족</dt><dd>'+esc(p.gaps)+'</dd></dl></article>';
 }).join('')+'</div>';
}
function roles(){
 return '<div class="sd-tablewrap"><table class="sd-table iw-roles"><thead><tr><th>할 일</th><th>플래너 이용</th><th>셀프 준비</th></tr></thead><tbody>'+D.roles.map(function(r){return '<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';}).join('')+'</tbody></table></div>';
}

function totalVs(){
 var t=D.totalVs;
 return '<div class="sd-tablewrap"><table class="sd-table iw-roles"><thead><tr><th>항목</th><th>토탈</th><th>비토탈</th></tr></thead><tbody>'+t.rows.map(function(r){return '<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';}).join('')+'</tbody></table></div>'+
  '<div class="iw-claims">'+t.claims.map(function(c){return '<article><b>'+esc(c[0])+'</b><span class="iw-verdict">'+esc(c[1])+'</span><p>'+esc(c[2])+'</p></article>';}).join('')+'</div><p class="iw-cond">'+esc(t.verdict)+'</p>';
}
function calcTable(){
 var c=D.calc;if(!c)return '';
 var base=c.rows[0]&&c.rows[0].final;
 return '<h4 class="iw-h">아이웨딩 공식 계산기 · 비토탈 조합 비교</h4><p class="sd-lead">'+esc(c.basis)+' '+a(c.url,'계산기 열기')+'</p>'+
  '<div class="sd-tablewrap"><table class="sd-table iw-calc"><thead><tr><th>조합 (스튜디오 + 드레스 + 메이크업)</th><th class="sd-num">최종 할인가</th><th class="sd-num">받은 견적 조합 대비</th></tr></thead><tbody>'+
  c.rows.slice().sort(function(x,y){return (x.final==null)-(y.final==null)||x.final-y.final;}).map(function(r){return '<tr'+(r===c.rows[0]?' class="iw-calc-base"':'')+'><td>'+esc(r.combo)+(r.final==null?'<small>'+esc(r.status+' · '+r.note)+'</small>':'')+'</td><td class="sd-num"><b>'+(r.final==null?'계산 불가':man(r.final))+'</b></td><td class="sd-num">'+(r.final==null?'–':r===c.rows[0]?'기준':diff(r.final,base))+'</td></tr>';}).join('')+
  '</tbody></table></div>';
}
function pkgTable(){
 var k=D.pkgs;if(!k)return '';
 return '<h4 class="iw-h">인물 중심 스튜디오 비토탈 기성 패키지 · 300만 이하</h4><p class="sd-lead">'+esc(k.basis)+'</p>'+
  '<div class="sd-tablewrap"><table class="sd-table iw-calc"><thead><tr><th>패키지</th><th class="sd-num">최종 혜택가</th><th class="sd-num">옵션 적용가</th><th>드레스 실크 근거</th></tr></thead><tbody>'+
  k.rows.slice().sort(function(x,y){return x.max-y.max;}).map(function(r){return '<tr><td>'+a(r.url,r.name)+'<small>'+esc(r.opts)+'</small></td><td class="sd-num">'+man(r.final)+'</td><td class="sd-num"><b>'+man(r.max)+'</b>'+(r.match?'':'<small>헤드라인 최대혜택가와 불일치</small>')+'</td><td>'+esc(r.silk)+'</td></tr>';}).join('')+
  '</tbody></table></div>';
}
function events(){
 var e=D.events;if(!e)return '';
 return '<h3>다가오는 혜택 · 마감</h3><p class="sd-lead">매주 주말 청담 라운지 페스타: 스드메 신규 계약 시 10만원 추가 할인(1회). 자세한 공지 원문은 각 줄 링크.</p>'+
  '<ul class="iw-events">'+e.rows.map(function(r){return '<li><b>'+esc(r.when)+'</b><span>'+a(r.url,r.what)+(r.note?'<small>'+esc(r.note)+'</small>':'')+'</span></li>';}).join('')+'</ul>'+
  '<details class="iw-more"><summary>공지 원문 요약</summary><p>'+esc(e.summary)+'</p></details>'+(e.none&&e.none.length?'<details class="iw-more"><summary>공지가 없던 곳</summary><ul>'+e.none.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></details>':'');
}
function direct(){
 var d=D.direct;if(!d)return '';
 return '<h4 class="iw-h">다이렉트결혼준비와 비교</h4><p class="sd-lead">'+esc(d.summary)+'</p>'+
  '<div class="iw-blk"><b>다이렉트 견적이 더 싸 보일 수 있는 이유 (원문 근거)</b><ul>'+d.why.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>'+
  '<div class="iw-blk"><b>다이렉트 카페 금액 사례</b><ul>'+d.cases.map(function(c){return '<li>'+a(c.url,c.date+' '+c.combo)+' · '+esc(c.price)+'</li>';}).join('')+'</ul></div>'+
  '<div class="iw-links">'+d.links.map(function(l){return a(l.url,l.label+' →');}).join('')+'</div>';
}
function cartTable(){
 var c=D.cart;if(!c)return '';
 return '<h4 class="iw-h">견적함 화면 확인 · 업체별 금액</h4><p class="sd-lead">'+esc(c.basis)+'</p>'+
  '<div class="sd-tablewrap"><table class="sd-table iw-calc"><thead><tr><th>조합 · 업체별 금액(만원)</th><th class="sd-num">비수기·첫타임·노투어</th><th>다른 선택</th></tr></thead><tbody>'+
  c.rows.map(function(r){return '<tr><td><b>'+esc(r.combo)+'</b><small>'+esc(r.items)+'</small><small>'+esc(r.note)+'</small></td><td class="sd-num"><b>'+man(r.final)+'</b></td><td>'+esc(r.other)+'</td></tr>';}).join('')+
  '</tbody></table></div><p class="sd-note">'+esc(c.common)+'</p>';
}
function grades(){return '<div class="iw-legend">'+Object.keys(D.gradeInfo).map(function(k){return '<span>'+grade(k)+' '+esc(D.gradeInfo[k])+'</span>';}).join('')+'</div>';}
/* 상세 모달: 휴대폰 뒤로가기로 닫히도록 history 한 칸 사용 */
var dlg=null;
function openVendor(id){
 MODELS=MODELS||allModels();var m=MODELS[id];if(!m)return;
 if(!dlg){dlg=document.createElement('dialog');dlg.className='md';document.body.appendChild(dlg);
  dlg.addEventListener('click',function(e){var n=e.target.closest('[data-gal]');if(n){var gl=dlg.querySelector('.md-gal');gl.scrollBy({left:+n.dataset.gal*gl.clientWidth*0.8,behavior:'smooth'});return;}
   if(e.target===dlg||e.target.closest('[data-close]'))closeVendor();});
  dlg.addEventListener('cancel',function(e){e.preventDefault();closeVendor();});
  g.addEventListener('popstate',function(){if(dlg.open)dlg.close();});}
 dlg.innerHTML='<div class="md-in">'+detail(m)+'</div>';
 if(!dlg.open){dlg.showModal();history.pushState({sdmVendor:id},'');}
 dlg.querySelector('.md-in').scrollTop=0;
}
function closeVendor(){if(history.state&&history.state.sdmVendor!=null)history.back();else if(dlg)dlg.close();}
/* 조합 이름("클레 + 에델린 + 제이와이")의 각 업체를 카드 모델과 이어 사진으로 보여줌 */
function comboThumbs(name){
 MODELS=MODELS||allModels();
 return '<div class="gl-thumbs">'+name.split(' + ').map(function(part){var k=part.replace(/\(.*\)/,'').trim();
  var m=MODELS.filter(function(x){return !x.cafeOnly&&baseName(x.name).indexOf(k)===0;})[0];
  return m?'<button type="button" class="gl-th" data-vid="'+m.id+'">'+thumb(m,'gl-img')+'<span>'+esc(part)+'</span></button>':'<span class="gl-th">'+esc(part)+'</span>';}).join('')+'</div>';
}
g.SDM_IW_PARTS={
 decide:function(){
  var G=D.glance;
  var glance=G?'<section class="sd-sec iw"><h3>결론</h3><div class="gl-verdicts">'+G.verdicts.map(function(v){return '<div><span>'+esc(v[0])+'</span><b>'+esc(v[1])+'</b></div>';}).join('')+'</div>'+
   '<h3 class="gl-h">한눈 비교</h3><p class="sd-lead">'+esc(G.basis)+'</p>'+
   '<div class="gl">'+G.rows.map(function(r){return '<article class="gl-row"><div class="gl-top"><span class="vc-tag'+(r.tag==='받은 견적'?'':' good')+'">'+esc(r.tag)+'</span><h4>'+esc(r.name)+'</h4><div class="gl-price"><b>'+man(r.price)+'</b><span>'+(r.diff==='기준'?'기준':esc(r.diff)+'만')+'</span><em>헬퍼 포함 '+man(r.price+50)+'</em></div></div><small class="gl-note">'+esc(r.priceNote)+'</small>'+comboThumbs(r.name)+
    '<dl class="vc-facts"><dt>스튜디오</dt><dd>'+esc(r.studio)+'</dd><dt>드레스</dt><dd class="'+esc(r.dressCls)+'">'+esc(r.dress)+'</dd><dt>메이크업</dt><dd>'+esc(r.makeup)+'</dd><dt>주의</dt><dd>'+esc(r.risk)+'</dd></dl></article>';}).join('')+'</div><p class="gl-tip">'+esc(G.tip)+'</p></section>':'';
  return glance+
   '<section class="sd-sec iw">'+events()+'</section>'+
   '<section class="sd-sec iw"><details class="iw-fold"><summary>추천 이유 자세히 (TOP 3)</summary>'+(D.picksNote?'<p class="sd-lead">'+esc(D.picksNote)+'</p>':'')+picks()+'</details>'+
   '<details class="iw-fold"><summary>가격 근거 · 견적함 / 공식 계산기 / 기성 패키지</summary>'+cartTable()+calcTable()+pkgTable()+'</details>'+
   '<details class="iw-fold"><summary>직접 비교 계산기 (옵션 넣어 보기)</summary><p class="sd-lead">2~4개를 골라 나란히 보세요. 모든 조합에 같은 기준(헬퍼비)을 더해 비교해요. 선택 옵션은 체크한 것만 더하고, 미확인 비용은 합계에 넣지 않고 개수로만 보여줘요.</p>'+
    '<div class="iw-combos">'+D.combos.map(comboRow).join('')+'</div><p class="iw-cmpmsg" id="iwCmpMsg" aria-live="polite"></p><div id="iwCmp">'+compare()+'</div></details>'+
   '<details class="iw-fold"><summary>다이렉트결혼준비와 비교</summary>'+direct()+'</details>'+
   '<details class="iw-fold"><summary>근거·계산 메모</summary><p>'+esc(D.baselineNote)+'</p><p>'+esc(D.summary)+'</p>'+grades()+'</details></section>';
 },
 vendors:function(){
  function sel(k,label,opts){return '<label class="vf-sel"><span>'+label+'</span><select data-iwk="'+k+'">'+opts.map(function(o){return '<option value="'+esc(o[0])+'"'+(ui[k]===o[0]?' selected':'')+'>'+esc(o[1])+'</option>';}).join('')+'</select></label>';}
  return '<section class="sd-sec iw"><div class="vf"><div class="vf-roles">'+chips('role',[['','전체'],['studio','스튜디오'],['dress','드레스'],['makeup','메이크업']])+'</div>'+
   '<input id="iwVendorQ" class="sd-q" type="search" placeholder="업체명 검색" value="'+esc(ui.q||'')+'">'+
   '<div class="vf-sels">'+sel('kind','촬영',[['','전체'],['total','토탈'],['nontotal','비토탈']])+sel('fabric','소재',[['','전체'],['실크','실크'],['비즈','비즈']])+sel('sort','정렬',[['focus','견적·추천 먼저'],['review','후기 많은 순'],['grade','이름순']])+'</div></div>'+
   '<p class="sd-lead">카드를 누르면 사진·가격 근거·포함/별도 비용·후기·카페 사례가 모두 열려요.</p>'+
   '<div id="iwVendors">'+vendors()+'</div><details class="iw-more"><summary>가격 등급 설명</summary>'+grades()+'</details></section>';
 },
 guide:function(){
  return '<section class="sd-sec iw">'+(D.totalVs?'<h3>토탈(포괄) vs 비토탈 · 들리는 얘기 따져보기</h3>'+totalVs():'')+
   '<h4 class="iw-h">플래너 이용 vs 셀프 준비</h4>'+roles()+
   '<div class="iw-links">'+D.pages.map(function(p){return '<a href="'+esc(p.url)+'">'+esc(p.label)+' →</a>';}).join('')+'</div></section>';
 }
};
g.SDM_IW_BIND=function(root){
 function q(sel){return root.querySelector(sel);}
 function redraw(){var c=q('#iwCmp');if(c)c.innerHTML=compare();root.querySelectorAll('.iw-combos').forEach(function(x){x.innerHTML=D.combos.map(comboRow).join('');});}
 var vq=q('#iwVendorQ');if(vq)vq.addEventListener('input',function(){ui.q=vq.value;var v=q('#iwVendors');if(v)v.innerHTML=vendors();});
 root.addEventListener('click',function(e){var t=e.target.closest('[data-vid]');if(t)openVendor(+t.dataset.vid);});
 root.querySelectorAll('.iw').forEach(function(sec){
  sec.addEventListener('click',function(e){
   var b=e.target.closest('button[data-iwk]');if(!b)return;
   ui[b.dataset.iwk]=b.dataset.iwv;
   sec.querySelectorAll('[data-iwk="'+b.dataset.iwk+'"]').forEach(function(x){x.classList.toggle('on',x===b);});
   var v=q('#iwVendors');if(v)v.innerHTML=vendors();
  });
  sec.addEventListener('change',function(e){
   var t=e.target,msg=q('#iwCmpMsg');
   if(t.tagName==='SELECT'&&t.dataset.iwk){ui[t.dataset.iwk]=t.value;var v=q('#iwVendors');if(v)v.innerHTML=vendors();}
   else if(t.dataset.cmp){
    var id=t.dataset.cmp,i=ui.cmp.indexOf(id);
    if(t.checked&&i<0){if(ui.cmp.length>=4){t.checked=false;msg.textContent='최대 4개까지 비교할 수 있어요.';return;}ui.cmp.push(id);}
    if(!t.checked&&i>=0)ui.cmp.splice(i,1);
    msg.textContent='';redraw();
   }else if(t.dataset.opt){
    var s=ui.sel[t.dataset.opt]=ui.sel[t.dataset.opt]||{};s[t.dataset.i]=t.checked;redraw();
   }
  });
 });
};
})(typeof window!=='undefined'?window:globalThis);
