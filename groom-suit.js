/* groom-suit.js — 신랑 예복 렌탈 페이지: 스드메 탭과 같은 구성(결정·업체·후기·준비 가이드·내 견적) */
(function(){
var root=document.getElementById('p-suit');
if(!root||typeof SUIT==='undefined')return;
var D=SUIT;
var SK='wedding-budget-notes:suit:v1';
var st;try{st=JSON.parse(localStorage.getItem(SK)||'{}');}catch(e){st={};}
if(st._v!==1)st={_v:1,checks:{},quotes:[]};
function save(){try{localStorage.setItem(SK,JSON.stringify(st));}catch(e){}}
var ui={kind:'',q:''};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function man(n){return n==null?'미확인':(Math.round(n*10)/10).toLocaleString()+'만';}
function a(u,t){return u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(t)+'</a>':esc(t);}
function grade(gr){return '<span class="iw-grade iw-g'+esc(gr)+'" title="'+esc(D.gradeInfo[gr]||'')+'">'+esc(gr)+'</span>';}
function li(list,empty){return (list||[]).length?'<ul>'+list.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>':(empty?'<p class="sd-muted">'+esc(empty)+'</p>':'');}
function sec(title,body,cls){return body?'<section class="md-sec'+(cls?' '+cls:'')+'"><h5>'+title+'</h5>'+body+'</section>':'';}

var V=D.vendors.map(function(v,i){
  v.id=i;v.photos=v.photos||[];
  v.revs=D.reviews.filter(function(r){return r.vendor&&(r.vendor.indexOf(v.name)===0||v.name.indexOf(r.vendor)===0);});
  /* 카드 대표가: 상하의 1벌 이상인 공개가 중 가장 낮은 값 (상의만·셔츠만 같은 단품 제외) */
  var ps=(v.prices||[]).filter(function(p){return p.won>0&&!p.part;}).sort(function(x,y){return x.won-y.won;});
  v.low=ps[0]||null;
  return v;});

function tagsOf(v){return '<span class="vc-tag'+(v.kind==='대여'?' good':'')+'">'+esc(v.kind)+'</span>'+(v.area?'<span class="vc-tag">'+esc(v.area)+'</span>':'');}
function thumb(v,cls){var p=v.photos[0];return p?'<img class="'+cls+'" src="'+esc(p.src)+'" alt="'+esc(v.name)+' 대표 사진" loading="lazy" decoding="async">':'<span class="'+cls+' vt-ph" aria-hidden="true">'+esc(v.name.slice(0,2))+'</span>';}
function slides(v){
  var ps=v.photos.slice(0,6);if(ps.length<2)return thumb(v,'vt-img');
  return '<span class="vt-slides vt-img">'+ps.map(function(p,i){return '<img class="'+(i?'':'on')+'" src="'+esc(p.src)+'" alt="'+(i?'':esc(v.name)+' 사진')+'" loading="lazy" decoding="async">';}).join('')+
   '<span class="vt-dots" aria-hidden="true">'+ps.map(function(p,i){return '<i'+(i?'':' class="on"')+'></i>';}).join('')+'</span></span>';
}
var tick=0;
function rotate(){
  if(document.hidden||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))return;
  tick++;var H=innerHeight;
  document.querySelectorAll('.vt-slides').forEach(function(el,i){
   if((tick+i)%2)return;
   var r=el.getBoundingClientRect();if(!r.width||r.bottom<0||r.top>H)return;
   var im=el.querySelectorAll('img'),dt=el.querySelectorAll('.vt-dots i'),k=0;
   im.forEach(function(x,j){if(x.classList.contains('on'))k=j;});
   var n=(k+1)%im.length;im[k].classList.remove('on');im[n].classList.add('on');
   if(dt[k])dt[k].classList.remove('on');if(dt[n])dt[n].classList.add('on');});
}
function tile(v){
  return '<button type="button" class="vt" data-vid="'+v.id+'">'+slides(v)+
   '<span class="vt-body"><span class="vt-role">'+esc(v.kind)+' · '+esc(v.station||v.area||'')+'</span>'+
   '<b class="vt-name">'+esc(v.name)+'</b>'+
   '<span class="vt-price">'+(v.low?grade(v.low.grade)+' <b>'+man(v.low.won)+'~</b>':grade('미확인')+' <b>가격 미공개</b>')+'</span>'+
   '<span class="vt-tags">'+tagsOf(v)+'</span>'+
   '<span class="vt-meta">후기 '+v.revs.length+'건'+(v.photos.length?' · 사진 '+v.photos.length:'')+'</span></span></button>';
}
function detail(v){
  var gal=v.photos.length?'<div class="md-galw"><button type="button" class="md-nav" data-gal="-1" aria-label="이전 사진">‹</button><button type="button" class="md-nav md-next" data-gal="1" aria-label="다음 사진">›</button><div class="md-gal">'+v.photos.map(function(x,i){return '<a href="'+esc(x.from||x.src)+'" target="_blank" rel="noopener"><img src="'+esc(x.src)+'" alt="'+esc(v.name)+' 사진 '+(i+1)+'" loading="'+(i<2?'eager':'lazy')+'" decoding="async"'+(x.w&&x.h?' style="aspect-ratio:'+x.w+'/'+x.h+'"':'')+'></a>';}).join('')+'</div></div><p class="md-src">사진 '+v.photos.length+'장 · 출처 업체 공식 페이지 (누르면 원본)</p>'
   :'<div class="md-nogal">'+thumb(v,'md-ph')+'<p>공개 사진을 아직 모으지 못했어요.</p></div>';
  var head='<header class="md-head"><span class="vt-role">'+esc(v.kind)+'</span><h4>'+esc(v.name)+'</h4><div class="vt-tags">'+tagsOf(v)+'</div></header>';
  var ads=v.revs.filter(function(r){return r.ad;}).length;
  var kpi='<div class="md-kpi"><div><small>가장 낮은 공개 대여가</small><b>'+(v.low?man(v.low.won):'미공개')+'</b><span>'+(v.low?grade(v.low.grade)+' '+esc(v.low.item):'')+'</span></div>'+
   '<div><small>후기</small><b>'+v.revs.length+'건</b><span>'+(ads?'협찬·광고 '+ads+'건 포함':'협찬 고지 없음')+'</span></div>'+
   '<div><small>위치</small><b>'+esc(v.area||'미확인')+'</b><span>'+esc(v.station||'')+'</span></div></div>';
  var body='';
  body+=sec('가격 근거 (확인일 기준, 2027년 가격 아님)',(v.prices||[]).length?'<ul>'+v.prices.map(function(p){return '<li>'+grade(p.grade)+' <b>'+esc(p.price)+'</b> · '+a(p.url,p.item)+'<small>'+esc([/VAT|부가세/.test(p.cond)?'':p.vat,p.cond,p.checked?'확인 '+p.checked:''].filter(Boolean).join(' · '))+'</small></li>';}).join('')+'</ul>':'<p class="sd-muted">공개가 없음 · 문의 필요</p>');
  body+=sec('특징',v.style?'<p>'+esc(v.style)+'</p>':'');
  body+=sec('대여가에 포함',li(v.included));
  body+=sec('별도 비용',(v.extras||[]).length?'<ul>'+v.extras.map(function(x){return '<li>'+esc(x.k)+(x.v!=null?' <b>'+man(x.v)+'</b>':'')+'</li>';}).join('')+'</ul>':'','md-cost');
  body+=sec('대여 규정',li(v.rules));
  body+=sec('사이즈 (173cm · 상의 100~105 기준)',v.sizes?'<p>'+esc(v.sizes)+'</p>':'');
  body+=sec('아직 확인 안 된 것',li(v.unknown),'md-unk');
  body+=sec('후기 '+v.revs.length+'건',v.revs.length?'<ul class="md-rev">'+v.revs.map(revItem).join('')+'</ul>':'');
  body+=sec('주소',v.address?'<p>'+esc(v.address)+'</p>':'');
  var links=(v.links||[]).map(function(l){return a(l.url,l.label+' →');}).join('');
  return '<div class="md-top"><button type="button" class="md-x" data-close aria-label="닫기">←</button><b>'+esc(v.name)+'</b></div>'+gal+head+kpi+body+(links?'<div class="iw-links md-links">'+links+'</div>':'');
}
function revItem(x){return '<li><div><span class="iw-kind">'+esc(x.kind)+'</span> '+a(x.url,x.date+' '+(x.title||''))+(x.ad?' <span class="sd-ad sd-ad-y">'+esc(x.ad)+'</span>':'')+'</div>'+(x.paid?'<small>지불 '+esc(x.paid)+'</small>':'')+(x.body?'<small>'+esc(x.body)+'</small>':'')+(x.good?'<p class="md-good">+ '+esc(x.good)+'</p>':'')+(x.bad?'<p class="md-bad">− '+esc(x.bad)+'</p>':'')+'</li>';}

function vendorGrid(){
  var q=ui.q.trim().toLowerCase();
  var rows=V.filter(function(v){return (!ui.kind||v.kind===ui.kind)&&(!q||(v.name+' '+(v.area||'')).toLowerCase().indexOf(q)>=0);});
  rows.sort(function(x,y){return (y.revs.length-x.revs.length)||((x.low?x.low.won:999)-(y.low?y.low.won:999));});
  return rows.length?'<p class="sd-stat"><b>'+rows.length+'곳</b></p><div class="vt-grid">'+rows.map(tile).join('')+'</div>':'<p class="sd-muted">조건에 맞는 업체가 없어요.</p>';
}
function kinds(){var k={};V.forEach(function(v){k[v.kind]=1;});return [['','전체']].concat(Object.keys(k).map(function(x){return [x,x];}));}
function chips(name,opts){return opts.map(function(o){return '<button class="sd-chip'+(ui[name]===o[0]?' on':'')+'" data-k="'+name+'" data-v="'+esc(o[0])+'">'+esc(o[1])+'</button>';}).join('');}

function decide(){
  var lows=V.filter(function(v){return v.low;}).map(function(v){return v.low.won;});
  var ads=D.reviews.filter(function(r){return r.ad;}).length;
  var verdicts=(D.verdicts||[]).length?'<div class="gl-verdicts">'+D.verdicts.map(function(v){return '<div><span>'+esc(v[0])+'</span><b>'+esc(v[1])+'</b></div>';}).join('')+'</div>':'';
  var rows=V.slice().sort(function(x,y){return (x.low?x.low.won:999)-(y.low?y.low.won:999);}).map(function(v){
    return '<tr data-vid="'+v.id+'"><td><b>'+esc(v.name)+'</b><small>'+esc(v.kind)+' · '+esc(v.area||'')+'</small></td><td class="sd-num">'+(v.low?grade(v.low.grade)+' <b>'+man(v.low.won)+'</b><small>'+esc(v.low.vat)+'</small><small>'+esc(v.low.item)+'</small>':'미공개')+'</td><td>'+esc((v.included||[]).join(', ')||'미확인')+'</td><td>'+esc((v.unknown||[]).slice(0,2).join(' · ')||'–')+'</td><td class="sd-num">'+v.revs.length+'</td></tr>';}).join('');
  return '<section class="sd-sec"><h3>결론</h3>'+verdicts+
   '<div class="sd-kpi"><div><small>조사한 업체</small><b>'+V.length+'곳</b><span>'+esc(kinds().slice(1).map(function(k){return k[1]+' '+V.filter(function(v){return v.kind===k[0];}).length;}).join(' · '))+'</span></div>'+
   '<div><small>공개 대여가 (가장 싼 상품 기준)</small><b>'+(lows.length?man(Math.min.apply(null,lows))+' ~ '+man(Math.max.apply(null,lows)):'–')+'</b><span>업체 공식 페이지 · '+esc(D.checked)+' 확인</span></div>'+
   '<div><small>원문 확인한 후기</small><b>'+D.reviews.length+'건</b><span>협찬·광고 고지 '+ads+'건</span></div></div>'+
   '<p class="sd-note">'+esc(D.basis)+'</p></section>'+
   '<section class="sd-sec"><h3>한눈 비교</h3><p class="sd-lead">줄을 누르면 사진·가격 근거·포함/별도 비용·대여 규정·후기가 열려요.</p><div class="sd-tablewrap"><table class="sd-table gs-tbl"><thead><tr><th>업체</th><th>가장 낮은 대여가</th><th>포함</th><th>확인 필요</th><th>후기</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
   '<details class="iw-more"><summary>가격 등급 설명</summary><div class="iw-legend">'+Object.keys(D.gradeInfo).map(function(k){return '<span>'+grade(k)+' '+esc(D.gradeInfo[k])+'</span>';}).join('')+'</div></details></section>';
}
function reviews(){
  var pat=(D.patterns||[]).map(function(p){return '<li><b>'+esc(p.k)+'</b><small>'+esc(p.why)+'</small><small>'+(p.urls||[]).map(function(u,i){return a(u,'근거 '+(i+1));}).join(' · ')+'</small></li>';}).join('');
  var list=D.reviews.slice().sort(function(x,y){return String(y.date).localeCompare(String(x.date));});
  return '<section class="sd-sec"><h3>대여 예복 후기에서 반복된 불만·추가금</h3><div class="md-sec" style="margin:0;border:0">'+(pat?'<ul>'+pat+'</ul>':'<p class="sd-muted">정리된 패턴 없음</p>')+'</div></section>'+
   '<section class="sd-sec"><h3>후기 원문 '+list.length+'건</h3><p class="sd-lead">원문을 직접 열어 확인한 글만 넣었어요. 협찬 고지가 있는 글은 표시했어요.</p><div class="md-sec" style="margin:0;border:0"><ul class="md-rev">'+list.map(function(r){return revItem(Object.assign({},r,{kind:r.vendor+' · '+r.kind}));}).join('')+'</ul></div></section>';
}
function check(k,t,sub){return '<label class="sd-task'+(st.checks[k]?' done':'')+'"><input type="checkbox" data-ck="'+k+'"'+(st.checks[k]?' checked':'')+'><span>'+esc(t)+(sub?'<small>'+esc(sub)+'</small>':'')+'</span></label>';}
var QUESTIONS=[
 ['촬영일과 본식일이 다르면 대여를 두 번 해야 하나요? 두 번이면 각각 얼마예요?','대여는 보통 1박 2일 기준이라 날짜가 다르면 따로 잡히는 경우가 많음'],
 ['셔츠·타이·구두·조끼·커머번드 중 대여가에 들어간 건 뭐예요?','조끼·구두가 별도인 곳이 있음'],
 ['보증금은 얼마고, 언제 어떻게 돌려받아요?',''],
 ['수선은 소매·바지 기장까지 무료예요? 허리·어깨는요?','상의 100~105, 173cm 체형이면 기장 수선 위주일 가능성이 큼'],
 ['피팅은 몇 번이고, 2027년 9월 예식이면 언제 예약해야 해요?','예약 오픈 시점은 업체마다 다름'],
 ['오염·파손·연체 시 비용 기준이 계약서에 적혀 있어요?',''],
 ['오늘 들은 가격이 2027년 9월에도 적용돼요? 아니면 가격이 바뀔 수 있어요?','지금 공개가는 2026년 가격. 계약 시 적용가를 서면으로']
];
function guide(){
  return '<div class="sd-guide">'+
  '<section><h3>1. 방문 전</h3>'+
   check('g-date','촬영일·본식일 확정 후 날짜 2개 들고 가기','2027.9.12(일) 본식 · 촬영일은 스튜디오 일정에 따름')+
   check('g-pkg','스드메 패키지에 촬영용 턱시도가 포함됐는지 먼저 확인','포함이면 본식용만 빌리면 됨')+
   check('g-size','평소 입는 셔츠 목둘레·구두 사이즈 메모','173cm · 75kg · 상의 100~105')+
   check('g-ref','원하는 색(블랙·네이비·화이트)·라펠 사진 2~3장 저장')+
  '</section>'+
  '<section><h3>2. 피팅 중: 이 순서로 물어보기</h3><ol class="sd-qs">'+QUESTIONS.map(function(q,i){return '<li>'+check('q'+i,'“'+q[0]+'”',q[1])+'</li>';}).join('')+'</ol>'+
   '<button class="sd-btn" id="gsCopyQ">질문 목록 복사</button><span id="gsCopyMsg" class="sd-muted"></span>'+
   '<h4>입어볼 때 볼 것</h4><ul class="sd-flags">'+['어깨 주름','목 뒤가 뜨는지','가슴 여유','바지 끝단 꺾임','팔 길이(셔츠 소매 1cm 보이게)','앉았을 때 편한지','원단 광택·구김','파손 배상 조건'].map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>'+
  '</section>'+
  '<section><h3>3. 계약 후</h3>'+
   check('a-log','받은 견적을 “내 견적”에 기록')+
   check('a-photo','계약서·대여 규정 사진 저장')+
   check('a-pick','픽업·반납 일시와 장소 캘린더에 넣기','연체는 하루 단위로 크게 붙는 곳이 있음')+
  '</section></div>';
}
function quotes(){
  var list=st.quotes.map(function(q,i){return '<article class="sd-myq"><header><b>'+esc(q.co||'업체 미입력')+'</b><span>'+esc(q.what||'구성 미입력')+'</span><button class="sd-x" data-del="'+i+'" aria-label="삭제">삭제</button></header>'+
    '<div class="sd-myq-grid"><div><small>견적가</small><b>'+man(q.price)+'</b></div><div><small>포함</small><b>'+esc(['셔츠','타이','구두','조끼'].filter(function(k){return q[k];}).join('·')||'없음')+'</b></div><div><small>기록일</small><b>'+esc(q.at)+'</b></div></div></article>';}).join('');
  return '<form id="gsForm" class="sd-form"><input name="co" placeholder="업체"><input name="what" placeholder="구성 (예: 본식 1벌 + 촬영 2벌)">'+
   '<input name="price" type="number" step="0.5" min="0" placeholder="견적가(만원)" required>'+
   '<fieldset><legend>견적가에 포함된 것</legend>'+['셔츠','타이','구두','조끼'].map(function(k){return '<label><input type="checkbox" name="'+k+'"> '+k+'</label>';}).join('')+'</fieldset>'+
   '<button class="sd-btn" type="submit">견적 추가</button></form>'+(list||'<p class="sd-muted">아직 기록한 견적이 없어요.</p>');
}

var VIEWS=[['decide','결정'],['vendors','업체'],['reviews','후기'],['guide','준비 가이드'],['mine','내 견적']];
var view;try{view=sessionStorage.getItem('suit:view')||'decide';}catch(e){view='decide';}
function panel(id,html){return '<div class="sd-panel" data-view="'+id+'"'+(view===id?'':' hidden')+'>'+html+'</div>';}
function render(){
  root.innerHTML='<div class="sd">'+
  '<header class="sd-hero"><h2>신랑 예복 렌탈</h2><p>'+esc(D.checked)+' 기준 공개 정보 · 2027.9.12(일) L65 본식</p></header>'+
  '<nav class="sd-subnav" role="tablist" aria-label="예복 메뉴">'+VIEWS.map(function(v){return '<button role="tab" data-view="'+v[0]+'" aria-selected="'+(view===v[0])+'"'+(view===v[0]?' class="on"':'')+'>'+v[1]+'</button>';}).join('')+'</nav>'+
  panel('decide',decide())+
  panel('vendors','<section class="sd-sec"><div class="vf"><div class="vf-roles">'+chips('kind',kinds())+'</div><input id="gsQ" class="sd-q" type="search" placeholder="업체명·지역 검색" value="'+esc(ui.q)+'"></div><p class="sd-lead">카드를 누르면 사진·가격 근거·포함/별도 비용·대여 규정·후기가 모두 열려요.</p><div id="gsVendors">'+vendorGrid()+'</div></section>')+
  panel('reviews',reviews())+
  panel('guide','<section class="sd-sec"><h3>대여 준비 가이드</h3>'+guide()+'</section>')+
  panel('mine','<section class="sd-sec"><h3>내 견적 기록</h3><div id="gsQuotes">'+quotes()+'</div></section>')+
  '</div>';
  bind();
}
/* 모바일에서 표를 카드처럼: 각 칸에 머리글 이름을 붙임 */
function labelTables(){root.querySelectorAll('table.sd-table').forEach(function(t){var hs=[].map.call(t.querySelectorAll('thead th'),function(h){return h.textContent;});t.querySelectorAll('tbody tr').forEach(function(tr){[].forEach.call(tr.children,function(td,i){if(hs[i])td.setAttribute('data-label',hs[i]);});});});}
var dlg=null;
function openVendor(id){
  var v=V[id];if(!v)return;
  if(!dlg){dlg=document.createElement('dialog');dlg.className='md';document.body.appendChild(dlg);
   dlg.addEventListener('click',function(e){var n=e.target.closest('[data-gal]');if(n){var gl=dlg.querySelector('.md-gal');gl.scrollBy({left:+n.dataset.gal*gl.clientWidth*0.8,behavior:'smooth'});return;}
    if(e.target===dlg||e.target.closest('[data-close]'))closeVendor();});
   dlg.addEventListener('cancel',function(e){e.preventDefault();closeVendor();});
   addEventListener('popstate',function(){if(dlg.open)dlg.close();});}
  dlg.innerHTML='<div class="md-in">'+detail(v)+'</div>';
  if(!dlg.open){dlg.showModal();history.pushState({suitVendor:id},'');}
  dlg.querySelector('.md-in').scrollTop=0;
}
function closeVendor(){if(history.state&&history.state.suitVendor!=null)history.back();else if(dlg)dlg.close();}
function bind(){
  labelTables();
  root.querySelectorAll('.sd-subnav [data-view]').forEach(function(b){b.onclick=function(){
    view=b.dataset.view;try{sessionStorage.setItem('suit:view',view);}catch(e){}
    root.querySelectorAll('.sd-subnav [data-view]').forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-selected',on);});
    root.querySelectorAll('.sd-panel').forEach(function(pn){pn.hidden=pn.dataset.view!==view;});
  };});
  root.querySelectorAll('.sd-chip[data-k]').forEach(function(b){b.onclick=function(){ui[b.dataset.k]=b.dataset.v;root.querySelectorAll('.sd-chip[data-k="'+b.dataset.k+'"]').forEach(function(x){x.classList.toggle('on',x===b);});document.getElementById('gsVendors').innerHTML=vendorGrid();};});
  var q=document.getElementById('gsQ');if(q)q.oninput=function(){ui.q=q.value;document.getElementById('gsVendors').innerHTML=vendorGrid();};
  root.querySelectorAll('[data-ck]').forEach(function(x){x.onchange=function(){st.checks[x.dataset.ck]=x.checked;save();x.closest('.sd-task').classList.toggle('done',x.checked);};});
  var cp=document.getElementById('gsCopyQ');if(cp)cp.onclick=function(){var txt=QUESTIONS.map(function(q,i){return (i+1)+'. '+q[0];}).join('\n'),msg=document.getElementById('gsCopyMsg');(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){msg.textContent=' 복사됐어요';},function(){msg.textContent=' 복사가 막혀 있어요. 길게 눌러 선택해 주세요';});};
  bindQuotes();
}
function bindQuotes(){
  var f=document.getElementById('gsForm');
  if(f)f.onsubmit=function(ev){ev.preventDefault();var d=new FormData(f),price=parseFloat(d.get('price'));if(!(price>0))return;
    st.quotes.push({co:d.get('co')||'',what:d.get('what')||'',price:price,셔츠:!!d.get('셔츠'),타이:!!d.get('타이'),구두:!!d.get('구두'),조끼:!!d.get('조끼'),at:new Date().toISOString().slice(0,10)});save();
    document.getElementById('gsQuotes').innerHTML=quotes();bindQuotes();};
  root.querySelectorAll('[data-del]').forEach(function(b){b.onclick=function(){st.quotes.splice(+b.dataset.del,1);save();document.getElementById('gsQuotes').innerHTML=quotes();bindQuotes();};});
}
root.addEventListener('click',function(e){var t=e.target.closest('[data-vid]');if(t)openVendor(+t.dataset.vid);});
setInterval(rotate,1600);
render();
})();
