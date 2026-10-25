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

var D=SDM_IW,ui={role:'',kind:'',fabric:'',sort:'grade',cmp:D.combos.filter(function(c){return c.defaultCmp;}).map(function(c){return c.id;}),sel:{}};
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

function vendorCard(v){
 var r=v.reviews||{items:[]};
 return '<article class="iw-card"><header><div><span class="sd-role">'+esc(D.roleLabel[v.role])+(v.total!=null?' · '+(v.total==='both'?'토탈·비토탈 상품 모두':v.total?'토탈':'비토탈'):'')+(v.fabric?' · '+esc(v.fabric):'')+'</span><h4>'+esc(v.name)+'</h4></div>'+revBadge(r)+'</header>'+
  (v.style?'<p class="iw-style">'+esc(v.style)+'</p>':'')+
  (v.insta?'<div class="iw-insta">'+v.insta.map(function(i){return '<a href="'+esc(i.url)+'" target="_blank" rel="noopener">Instagram @'+esc(i.handle)+' →</a>';}).join('')+(v.instaFeel?'<p>피드 느낌: '+esc(v.instaFeel)+'</p>':'')+'</div>':'')+
  '<div class="iw-prods">'+(v.products||[]).map(function(p){return '<div class="iw-prod"><div>'+grade(p.grade)+' <b>'+esc(p.price)+'</b></div><p>'+a(p.url,p.name)+'</p><small>'+esc(p.cond||'')+' · 확인 '+esc(p.checked||D.checked)+'</small></div>';}).join('')+'</div>'+
  '<details class="iw-more"><summary>포함·추가금·후기 펼치기</summary>'+
  ((v.benefits||[]).length?'<div class="sd-vendor-block sd-avoid"><b>쿠폰·특전 (상세페이지 표기, 중복 적용 여부 미확인)</b>'+li(v.benefits)+'</div>':'')+
  '<div class="sd-vendor-block"><b>상품가에 포함</b>'+li(v.included,'상세페이지에서 확인되지 않음')+'</div>'+
  '<div class="sd-vendor-block sd-cost"><b>확인된 별도 비용</b>'+money(v.extras)+'</div>'+
  '<div class="sd-vendor-block sd-pain"><b>아직 확인 안 된 비용·조건</b>'+li(v.unknown,'없음')+'</div>'+
  '<div class="sd-vendor-block"><b>후기 '+(r.items||[]).length+'건</b>'+((r.items||[]).length?'<ul class="iw-revlist">'+r.items.map(function(x){return '<li><span class="iw-kind">'+esc(x.kind)+'</span> '+a(x.url,x.date+' '+(x.title||''))+(x.ad?' <span class="sd-ad sd-ad-y">'+esc(x.ad)+'</span>':'')+(x.paid?'<small>지불 '+esc(x.paid)+'</small>':'')+(x.good?'<small>+ '+esc(x.good)+'</small>':'')+(x.bad?'<small>− '+esc(x.bad)+'</small>':'')+'</li>';}).join('')+'</ul>':'<p class="sd-muted">확보한 최근 후기 없음</p>')+(r.note?'<p class="sd-evidence-note">'+esc(r.note)+'</p>':'')+'</div>'+
  '</details>'+(g.SDM_OLD?g.SDM_OLD.memo(v.role,v.name):'')+
  '<footer>'+(v.iwUrl?a(v.iwUrl,'아이웨딩 업체정보'):'')+((v.links||[]).length?' · '+v.links.map(function(l){return a(l.url,l.label);}).join(' · '):'')+'</footer></article>';
}
function vendors(){
 var q=(ui.q||'').trim().toLowerCase(),O=g.SDM_OLD;
 var hit=function(name){return !q||name.toLowerCase().indexOf(q)>=0;};
 var rows=D.vendors.filter(function(v){
  if(ui.role&&v.role!==ui.role)return false;
  if(ui.kind&&!(v.role==='studio'&&(v.total==='both'||(ui.kind==='total'?v.total:!v.total))))return false;
  if(ui.fabric&&!(v.role==='dress'&&String(v.fabric||'').indexOf(ui.fabric)>=0))return false;
  return hit(v.name);});
 rows.sort(function(x,y){return ui.sort==='review'?((y.reviews||{}).independent||0)-((x.reviews||{}).independent||0):(x.role+x.name).localeCompare(y.role+y.name);});
 // 아이웨딩 카드와 겹치지 않는 카페 계약사례 업체 (토탈·소재 정보가 없어 그 필터에선 숨김)
 var used={};if(O)D.vendors.forEach(function(v){O.matches(v.role,v.name).forEach(function(m){used[m.role+'|'+m.name]=1;});});
 var olds=O&&!ui.kind&&!ui.fabric?O.list().filter(function(v){return !used[v.role+'|'+v.name]&&(!ui.role||v.role===ui.role)&&hit(v.name);}):[];
 var hidden=O&&(ui.kind||ui.fabric)?'<p class="sd-note">카페 계약사례 업체는 토탈·소재 정보가 없어 이 필터에서는 숨겼어요.</p>':'';
 var cnt='<p class="sd-stat">검증 업체 <b>'+rows.length+'곳</b> · 카페 계약사례 업체 <b>'+olds.length+'곳</b></p>';
 return (rows.length||olds.length)?cnt+'<div class="iw-grid">'+rows.map(vendorCard).join('')+olds.map(O.card).join('')+'</div>'+hidden:'<p class="sd-muted">조건에 맞는 업체가 없어요.</p>'+hidden;
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
 return '<h4 class="iw-h">다가오는 현장 혜택 · 마감 일정</h4><p class="sd-lead">'+esc(e.summary)+'</p>'+
  '<ul class="iw-events">'+e.rows.map(function(r){return '<li><b>'+esc(r.when)+'</b><span>'+a(r.url,r.what)+(r.note?'<small>'+esc(r.note)+'</small>':'')+'</span></li>';}).join('')+'</ul>'+
  (e.none&&e.none.length?'<details class="iw-more"><summary>공지가 없던 곳</summary><ul>'+e.none.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></details>':'');
}
function direct(){
 var d=D.direct;if(!d)return '';
 return '<h4 class="iw-h">다이렉트결혼준비와 비교</h4><p class="sd-lead">'+esc(d.summary)+'</p>'+
  '<div class="iw-blk"><b>다이렉트 견적이 더 싸 보일 수 있는 이유 (원문 근거)</b><ul>'+d.why.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>'+
  '<div class="iw-blk"><b>다이렉트 카페 금액 사례</b><ul>'+d.cases.map(function(c){return '<li>'+a(c.url,c.date+' '+c.combo)+' · '+esc(c.price)+'</li>';}).join('')+'</ul></div>'+
  '<div class="iw-links">'+d.links.map(function(l){return a(l.url,l.label+' →');}).join('')+'</div>';
}
function grades(){return '<div class="iw-legend">'+Object.keys(D.gradeInfo).map(function(k){return '<span>'+grade(k)+' '+esc(D.gradeInfo[k])+'</span>';}).join('')+'</div>';}
g.SDM_IW_PARTS={
 decide:function(){
  var b=D.baseline;
  return '<section class="sd-sec iw"><h3>받은 견적 · 검증 '+esc(D.checked)+'</h3>'+
   '<div class="iw-base">'+b.map(function(x){return '<div><small>'+esc(x.label)+' '+grade(x.grade)+'</small><b>'+man(x.total)+'</b><span>'+esc(x.parts)+'</span></div>';}).join('')+'</div>'+
   '<details class="iw-more iw-memo"><summary>근거·계산 메모 펼치기</summary><p>'+esc(D.baselineNote)+'</p><p>'+esc(D.summary)+'</p>'+grades()+'</details>'+
   '<h4 class="iw-h">추천 TOP 3 · 비토탈</h4>'+(D.picksNote?'<p class="sd-lead">'+esc(D.picksNote)+'</p>':'')+picks()+events()+
   calcTable()+pkgTable()+direct()+
   '<h4 class="iw-h">조합 비교 · 실지불액 계산</h4><p class="sd-lead">2~4개를 골라 나란히 보세요. 모든 조합에 같은 기준(헬퍼비)을 더해 비교해요. 선택 옵션은 체크한 것만 더하고, 미확인 비용은 합계에 넣지 않고 개수로만 보여줘요.</p>'+
   '<div class="iw-combos">'+D.combos.map(comboRow).join('')+'</div><p class="iw-cmpmsg" id="iwCmpMsg" aria-live="polite"></p><div id="iwCmp">'+compare()+'</div></section>';
 },
 vendors:function(){
  return '<section class="sd-sec iw"><h3>업체 목록</h3><p class="sd-lead">업체 하나에 카드 하나예요. 아이웨딩 검증 카드에는 가격 등급·포함·별도 비용·쿠폰·후기·공식 인스타가, 카페 계약사례가 있는 업체는 같은 카드 안 "카페 계약사례 메모"에 함께 들어 있어요.</p>'+grades()+
   '<div class="sd-ctl"><div>'+chips('role',[['','전체'],['studio','스튜디오'],['dress','드레스'],['makeup','메이크업']])+'</div><div>'+chips('kind',[['','토탈·비토탈'],['total','토탈'],['nontotal','비토탈']])+chips('fabric',[['','소재 전체'],['실크','실크'],['비즈','비즈']])+chips('sort',[['grade','이름순'],['review','후기 많은 순']])+'</div><input id="iwVendorQ" class="sd-q" placeholder="업체명 검색 (예: 에델린, 원세컨드, 헤움)" value="'+esc(ui.q||'')+'"></div>'+
   '<div id="iwVendors">'+vendors()+'</div></section>';
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
 root.querySelectorAll('.iw').forEach(function(sec){
  sec.addEventListener('click',function(e){
   var b=e.target.closest('[data-iwk]');if(!b)return;
   ui[b.dataset.iwk]=b.dataset.iwv;
   sec.querySelectorAll('[data-iwk="'+b.dataset.iwk+'"]').forEach(function(x){x.classList.toggle('on',x===b);});
   var v=q('#iwVendors');if(v)v.innerHTML=vendors();
  });
  sec.addEventListener('change',function(e){
   var t=e.target,msg=q('#iwCmpMsg');
   if(t.dataset.cmp){
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
