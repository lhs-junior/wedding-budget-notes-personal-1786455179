/* groom-suit.js — 신랑 예복 탭: 스드메 탭과 같은 구성(결정·업체·후기·준비 가이드·내 견적) */
(function(){
var root=document.getElementById('p-suit');
if(!root||typeof SUIT==='undefined')return;
var D=SUIT;
/* sdm-ui.css의 #p-sdm 전용 규칙(모바일 카드형 표·여백)을 #p-suit에도 그대로 복사해 스드메와 같은 화면이 되게 함 */
(function(){var out=[];function walk(rules,wrap){[].forEach.call(rules,function(r){if(r.cssRules&&r.media)walk(r.cssRules,'@media '+r.media.mediaText);else if(r.selectorText&&r.selectorText.indexOf('#p-sdm')>=0){var t=r.cssText.split('#p-sdm').join('#p-suit');out.push(wrap?wrap+'{'+t+'}':t);}});}
 [].forEach.call(document.styleSheets,function(s){if(/sdm-ui\.css/.test(s.href||''))try{walk(s.cssRules,'');}catch(e){}});
 /* index.html 전역 td가 nowrap이라, 문장이 든 후기 표는 줄바꿈 허용 */
 out.push('#gsRevs .sd-table td{white-space:normal}#gsRevs .sd-table td.sd-date{white-space:nowrap}');
 document.head.insertAdjacentHTML('beforeend','<style>'+out.join('\n')+'</style>');})();
var SK='wedding-budget-notes:suit:v1';
var st;try{st=JSON.parse(localStorage.getItem(SK)||'{}');}catch(e){st={};}
if(st._v!==1)st={_v:1,checks:{},quotes:[]};
function save(){try{localStorage.setItem(SK,JSON.stringify(st));}catch(e){}}
var ui={kind:'',q:'',reg:'',sort:'pick',src:'',noAd:false,rq:'',open:''};
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
  v.reg=v.kind==='온라인 대여'?'택배':/종로|광진|건대/.test(v.area||'')?'강북':'강남';
  return v;});
/* 결론 카드에 이름이 나온 업체 = 스드메의 "받은 견적·추천" 표시에 해당 */
var PICK=D.verdicts.map(function(x){return x[1].split(' ')[0];});
function inc(v,k){return (v.included||[]).some(function(x){return x.indexOf(k)>=0;});}
function ext(v,k){return (v.extras||[]).some(function(x){return x.k.indexOf(k)>=0;});}
/* 카드 태그: 스드메처럼 업체 성격(포함 범위·VAT·위치)만 */
function tagsOf(v){
  var t=function(s,c){return '<span class="vc-tag'+(c?' '+c:'')+'">'+esc(s)+'</span>';};
  return (v.low?t(v.low.vat,v.low.vat==='VAT 포함'?'good':''):'')+(inc(v,'셔츠')?t('셔츠 포함','good'):'')+(inc(v,'구두')?t('구두 포함','good'):ext(v,'구두')?t('구두 별도','warn'):'')+(v.reg==='강북'?t('L65 가까움','good'):'');
}
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
   '<span class="vt-body"><span class="vt-role">'+esc(v.kind)+(PICK.indexOf(v.name)>=0?' · 결론 후보':'')+'</span>'+
   '<b class="vt-name">'+esc(v.name)+'</b>'+
   '<span class="vt-price">'+(v.low?grade(v.low.grade)+' <b>'+man(v.low.won)+'</b>':grade('미확인')+' <b>가격 미공개</b>')+'</span>'+
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
  var rows=V.filter(function(v){return (!ui.kind||v.kind===ui.kind)&&(!ui.reg||v.reg===ui.reg)&&(!q||(v.name+' '+(v.area||'')).toLowerCase().indexOf(q)>=0);});
  function price(v){return v.low?v.low.won:999;}
  rows.sort(function(x,y){
    if(ui.sort==='pick'){var px=PICK.indexOf(x.name),py=PICK.indexOf(y.name);if(px>=0||py>=0)return (px<0?99:px)-(py<0?99:py);}
    if(ui.sort==='price')return price(x)-price(y);
    return (y.revs.length-x.revs.length)||(price(x)-price(y));});
  var nShop=rows.filter(function(v){return v.reg!=='택배';}).length;
  return rows.length?'<p class="sd-stat"><b>'+rows.length+'곳</b> · 매장 대여 '+nShop+'곳 + 택배 대여 '+(rows.length-nShop)+'곳</p><div class="vt-grid">'+rows.map(tile).join('')+'</div>':'<p class="sd-muted">조건에 맞는 업체가 없어요.</p>';
}
function sel(k,label,opts){return '<label class="vf-sel"><span>'+label+'</span><select data-k="'+k+'">'+opts.map(function(o){return '<option value="'+esc(o[0])+'"'+(ui[k]===o[0]?' selected':'')+'>'+esc(o[1])+'</option>';}).join('')+'</select></label>';}
function kinds(){var k={};V.forEach(function(v){k[v.kind]=1;});return [['','전체']].concat(Object.keys(k).map(function(x){return [x,x];}));}
function chips(name,opts){return opts.map(function(o){return '<button class="sd-chip'+(ui[name]===o[0]?' on':'')+'" data-k="'+name+'" data-v="'+esc(o[0])+'">'+esc(o[1])+'</button>';}).join('');}

/* 결정 화면: 스드메 결정 화면과 같은 구조 (결론 3개 → 사진 카드 한눈 비교 → 접힌 근거) */
function glRow(v){
  var thumbs=v.photos.slice(0,3).map(function(p,i){return '<button type="button" class="gl-th" data-vid="'+v.id+'"><img class="gl-img" src="'+esc(p.src)+'" alt="'+esc(v.name)+' 사진 '+(i+1)+'" loading="lazy" decoding="async"></button>';}).join('');
  var extras=(v.extras||[]).map(function(x){return x.k+(x.v!=null?' '+man(x.v):'');}).join(' · ');
  return '<article class="gl-row"><div class="gl-top"><span class="vc-tag'+(v.kind==='대여'?' good':'')+'">'+esc(v.kind)+'</span><h4>'+esc(v.name)+'</h4><div class="gl-price"><b>'+(v.low?man(v.low.won):'미공개')+'</b><span>'+(v.low?esc(v.low.vat):'')+'</span><em>후기 '+v.revs.length+'건</em></div></div>'+
   '<small class="gl-note">'+(v.low?esc(v.low.item):'')+'</small>'+
   (thumbs?'<div class="gl-thumbs">'+thumbs+'</div>':'')+
   '<dl class="vc-facts"><dt>위치</dt><dd>'+esc(v.station||v.area||'미확인')+'</dd><dt>포함</dt><dd>'+esc((v.included||[]).join(' · ')||'미확인')+'</dd>'+(extras?'<dt>별도</dt><dd class="warn">'+esc(extras)+'</dd>':'')+'<dt>확인 필요</dt><dd>'+esc((v.unknown||[])[0]||'–')+'</dd></dl>'+
   '<button type="button" class="sd-btn" data-vid="'+v.id+'" style="margin-top:10px">상세 보기</button></article>';
}
function decide(){
  var lows=V.filter(function(v){return v.low;}).map(function(v){return v.low.won;});
  var ads=D.reviews.filter(function(r){return r.ad;}).length;
  var rows=V.slice().sort(function(x,y){return (x.low?x.low.won:999)-(y.low?y.low.won:999);});
  /* 한눈 비교는 매장 대여 후보만. 택배 대여·열린옷장(취업 정장 중심)은 접어 둠 */
  function cheap(v){return v.kind==='온라인 대여'||v.name==='열린옷장';}
  var main=rows.filter(function(v){return !cheap(v);}),alt=rows.filter(cheap);
  return '<section class="sd-sec"><h3>결론</h3><div class="gl-verdicts">'+D.verdicts.map(function(v){return '<div><span>'+esc(v[0])+'</span><b>'+esc(v[1])+'</b></div>';}).join('')+'</div>'+
   '<h3 class="gl-h">한눈 비교</h3><p class="sd-lead">매장 대여 후보를 가장 싼 상하의 1벌 공개가 순으로 놓았어요. '+esc(D.checked)+' 업체 공식 페이지 기준이고, 사진이나 상세 보기를 누르면 가격 근거·대여 규정·후기가 열려요.</p>'+
   '<div class="gl">'+main.map(glRow).join('')+'</div><p class="gl-tip">'+esc(D.tip)+'</p></section>'+
   '<section class="sd-sec"><details class="iw-fold"><summary>저가·택배 대여 '+alt.length+'곳 (매장 피팅 없음·후기 거의 없음)</summary><div class="gl">'+alt.map(glRow).join('')+'</div></details>'+
   '<details class="iw-fold"><summary>근거·가격 메모</summary>'+
   '<div class="sd-kpi"><div><small>조사한 업체</small><b>'+V.length+'곳</b><span>'+esc(kinds().slice(1).map(function(k){return k[1]+' '+V.filter(function(v){return v.kind===k[0];}).length;}).join(' · '))+'</span></div>'+
   '<div><small>공개 대여가 (가장 싼 상품 기준)</small><b>'+(lows.length?man(Math.min.apply(null,lows))+' ~ '+man(Math.max.apply(null,lows)):'–')+'</b><span>업체 공식 페이지 · '+esc(D.checked)+' 확인</span></div>'+
   '<div><small>원문 확인한 후기</small><b>'+D.reviews.length+'건</b><span>협찬·광고 고지 '+ads+'건</span></div></div>'+
   '<p class="sd-note">'+esc(D.basis)+'</p><div class="iw-legend">'+Object.keys(D.gradeInfo).map(function(k){return '<span>'+grade(k)+' '+esc(D.gradeInfo[k])+'</span>';}).join('')+'</div></details></section>';
}
/* 후기 화면: 스드메 "계약 사례"와 같은 구조 (KPI → 필터 → 줄을 누르면 펼쳐지는 표 → 패턴 카드) */
function srcOf(r){return r.kind.split(' ·')[0];}
/* 표 칸은 스드메처럼 짧게, 전문은 줄을 펼쳐서 */
function clip(t,n){t=String(t||'').split(/(?<=[.。])\s/)[0];return t.length>n?t.slice(0,n)+'…':t;}
function revRows(){
  var q=ui.rq.trim().toLowerCase();
  var r=D.reviews.filter(function(x){return (!ui.src||srcOf(x)===ui.src)&&(!ui.noAd||!x.ad)&&(!q||(x.vendor+' '+(x.title||'')).toLowerCase().indexOf(q)>=0);})
   .sort(function(x,y){return String(y.date).localeCompare(String(x.date));});
  var paid=r.filter(function(x){return /\d\s*만|\d{2,3},\d{3}원/.test(x.paid||'');}).length;
  var body=r.map(function(x){
    var id=x.url,open=ui.open===id;
    var tr='<tr class="sd-row'+(open?' on':'')+'" data-rid="'+esc(id)+'"><td><b>'+esc(x.vendor)+'</b></td><td>'+esc(clip(x.paid,40)||'–')+'</td><td>'+esc(clip(x.good,40)||'–')+'</td><td>'+esc(clip(x.bad,40)||'–')+'</td><td>'+esc(x.kind)+'<small>'+(x.ad?'광고성':'고지 없음')+'</small></td><td class="sd-date">'+esc(x.date)+'</td></tr>';
    if(open)tr+='<tr class="sd-detail"><td colspan="6"><dl><dt>제목</dt><dd>'+esc(x.title||'')+'</dd>'+(x.paid?'<dt>지불·구성</dt><dd>'+esc(x.paid)+'</dd>':'')+(x.good?'<dt>좋았던 점</dt><dd>'+esc(x.good)+'</dd>':'')+(x.bad?'<dt>불편·추가금</dt><dd>'+esc(x.bad)+'</dd>':'')+(x.body?'<dt>체형·상황</dt><dd>'+esc(x.body)+'</dd>':'')+(x.ad?'<dt>광고 고지</dt><dd>'+esc(x.ad)+'</dd>':'')+'<dt>출처</dt><dd>'+a(x.url,'원문 열기')+' <span class="sd-ad sd-ad-'+(x.ad?'y':'u')+'">'+(x.ad?'광고성':'고지 없음')+'</span></dd></dl></td></tr>';
    return tr;}).join('');
  return '<p class="sd-stat"><b>'+r.length+'건</b> · 금액이 적힌 글 '+paid+'건</p><div class="sd-tablewrap"><table class="sd-table"><thead><tr><th>업체</th><th>지불·구성</th><th>좋았던 점</th><th>불편·추가금</th><th>출처</th><th>시기</th></tr></thead><tbody>'+body+'</tbody></table></div>';
}
function reviews(){
  var n=function(s){return D.reviews.filter(function(x){return srcOf(x)===s;}).length;};
  var ads=D.reviews.filter(function(x){return x.ad;}).length;
  var pat=(D.patterns||[]).map(function(p){return '<article class="sd-same"><h4>'+esc(p.k)+'</h4><p>'+esc(p.why)+'</p>'+(p.urls||[]).map(function(u,i){return a(u,'원문 '+(i+1));}).join(' · ')+'</article>';}).join('');
  return '<section class="sd-sec"><h3>실제 이용 후기</h3><p class="sd-lead">네이버 블로그·카페·인스타 원문 '+D.reviews.length+'건을 직접 열어 금액과 불편한 점을 정리했어요. (2026-10-25 수집) 줄을 누르면 체형·광고 고지·원문 링크가 나와요.</p>'+
   '<div class="sd-kpi"><div><small>원문 확인한 후기</small><b>'+D.reviews.length+'건</b><span>블로그 '+n('블로그')+' · 카페 '+n('카페')+' · 인스타 '+n('인스타')+'</span></div>'+
   '<div><small>광고·협찬 고지</small><b>'+ads+'건</b><span>카페 포인트·협찬 문구가 원문에 있는 글</span></div>'+
   '<div><small>매장 대여 1벌 공개가</small><b>'+(function(){var w=V.filter(function(v){return v.low&&v.reg!=='택배'&&v.name!=='열린옷장';}).map(function(v){return v.low.won;});return man(Math.min.apply(null,w))+'~'+man(Math.max.apply(null,w));})()+'</b><span>업체 공식 페이지 기준 · 결정 화면 참고</span></div></div>'+
   '<div class="sd-ctl"><div>'+chips('src',[['','전체'],['블로그','블로그'],['카페','카페'],['인스타','인스타']])+
   '<label class="sd-chk"><input type="checkbox" id="gsNoAd"'+(ui.noAd?' checked':'')+'> 광고성 빼기</label></div>'+
   '<input id="gsRQ" class="sd-q" placeholder="업체명으로 찾기 (예: 루쏘소, 르셀루)" value="'+esc(ui.rq)+'"></div>'+
   '<div id="gsRevs">'+revRows()+'</div>'+
   '<p class="sd-note">인스타는 업체명·가격을 "댓글 주시면 DM" 으로만 알려준 글과 맞춤 정장 후기를 뺐어요. 가입이 필요한 카페(제이웨딩 결혼준비, 대구결혼준비모임) 글은 못 열었어요.</p></section>'+
   '<section class="sd-sec"><h3>후기에서 반복된 불만·추가금</h3><p class="sd-lead">업체와 상관없이 여러 후기에서 나온 것만 모았어요.</p><div class="sd-same-grid">'+pat+'</div></section>';
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
/* 준비 가이드 위쪽: 스드메의 "토탈 vs 비토탈 · 들리는 얘기 따져보기"에 해당. 값은 수집한 공식가·후기에서만 */
var RENT_VS=[
 ['본식 1벌 가격','15.9~40만 (제이진슈트 15.9 · 루스플렌 19+VAT · 루쏘소 22 · 르셀루 40)','맞춤 포함 패키지 59~150만 (텍수트 76 · 루스플렌 70+VAT · 르셀루 150)'],
 ['핏','기성복 + 소매·바지 기장 수선 (루쏘소는 기장 수선 무료)','몸에 맞춰 제작, 가봉 2회 안팎'],
 ['방문 횟수','피팅 1~2회 + 픽업·반납','5회 다녀왔다는 카페 후기 있음 (세인츠아머)'],
 ['예식 후','반납 (1박2일, 연체 시 루쏘소 하루 대여료 100% · 텍수트 하루 20만)','내 옷. 평소 정장을 안 입으면 다시 입을 일이 적음'],
 ['촬영','여러 벌 빌려 분위기 바꾸기 쉬움 (루쏘소 2벌이면 날짜 나눠 사용 가능)','맞춤 1벌 + 촬영 대여 2벌 패키지가 흔함']
];
var CLAIMS=[
 ['"대여는 아빠 정장 핏이다"','반만 맞음','인기 사이즈가 빠져 큰 사이즈를 입은 후기는 있어요. 상의 100~105는 공개된 사이즈 범위 안이라 일찍 예약하면 피할 수 있어요.'],
 ['"구두는 따로 내야 한다"','업체마다 다름','루스플렌 3벌 패키지·르셀루·세인츠아머는 포함, 제이진슈트는 +5만, 상의원은 위생상 대여 안 함.'],
 ['"촬영·본식 날짜가 다르면 두 번 빌려야 한다"','맞음','대여가 보통 1박2일이라 픽업·반납을 두 번 해요. 패키지도 "촬영 N벌 + 본식 1벌"로 나뉘어 있어요.'],
 ['"싼 데는 비지떡"','근거 부족','택배 대여(9~15만)는 후기를 못 찾았어요. 매장 대여끼리는 가격과 만족도가 같이 움직인다는 근거가 없어요.']
];
function rentVs(){
  return '<h3>대여 vs 맞춤 · 들리는 얘기 따져보기</h3><div class="sd-tablewrap"><table class="sd-table iw-roles"><thead><tr><th>항목</th><th>대여</th><th>맞춤</th></tr></thead><tbody>'+RENT_VS.map(function(r){return '<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';}).join('')+'</tbody></table></div>'+
   '<div class="iw-claims">'+CLAIMS.map(function(c){return '<article><b>'+esc(c[0])+'</b><span class="iw-verdict">'+esc(c[1])+'</span><p>'+esc(c[2])+'</p></article>';}).join('')+'</div>'+
   '<p class="iw-cond">평소 정장을 안 입으면 본식은 대여가 가성비예요. 촬영용은 스드메 패키지 턱시도를 먼저 확인하고, 모자라면 같은 매장에서 촬영+본식 묶음으로 빌리는 게 픽업·반납이 덜 번거로워요.</p>';
}
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
  var list=st.quotes.map(function(q,i){
    /* 같은 업체 공개가와 나란히: 스드메 "내 견적"의 사례 대비 위치에 해당 */
    var v=V.filter(function(x){return q.co&&(q.co.indexOf(x.name)>=0||x.name.indexOf(q.co.trim())===0);})[0];
    var miss=['셔츠','구두','조끼'].filter(function(k){return !q[k];});
    return '<article class="sd-myq"><header><b>'+esc(q.co||'업체 미입력')+'</b><span>'+esc(q.what||'구성 미입력')+'</span><button class="sd-x" data-del="'+i+'" aria-label="삭제">삭제</button></header>'+
    '<div class="sd-myq-grid"><div><small>견적가</small><b>'+man(q.price)+'</b><small>기록 '+esc(q.at)+'</small></div><div><small>견적에 없는 것</small><b>'+esc(miss.join('·')||'모두 포함')+'</b><small>'+(miss.length?'별도면 더 붙을 수 있어요':'')+'</small></div>'+
    '<div><small>'+(v?esc(v.name)+' 공개가 (가장 싼 1벌)':'같은 업체 공개가')+'</small><b>'+(v&&v.low?man(v.low.won):'–')+'</b><small>'+(v&&v.low?esc(v.low.vat+' · '+D.checked):'업체명을 조사 목록과 같게 쓰면 나와요')+'</small></div></div></article>';}).join('');
  return '<form id="gsForm" class="sd-form"><input name="co" placeholder="업체"><input name="what" placeholder="구성 (예: 본식 1벌 + 촬영 2벌)">'+
   '<input name="price" type="number" step="0.5" min="0" placeholder="견적가(만원)" required>'+
   '<fieldset><legend>견적가에 포함된 것</legend>'+['셔츠','타이','구두','조끼'].map(function(k){return '<label><input type="checkbox" name="'+k+'"> '+k+'</label>';}).join('')+'</fieldset>'+
   '<button class="sd-btn" type="submit">견적 추가</button></form>'+(list||'<p class="sd-muted">아직 기록한 견적이 없어요. 피팅 때 받은 금액을 넣으면 빠진 항목과 같은 업체 공개가를 바로 보여줘요.</p>');
}

var VIEWS=[['decide','결정'],['vendors','업체'],['reviews','후기'],['guide','준비 가이드'],['mine','내 견적']];
var view;try{view=sessionStorage.getItem('suit:view')||'decide';}catch(e){view='decide';}
function panel(id,html){return '<div class="sd-panel" data-view="'+id+'"'+(view===id?'':' hidden')+'>'+html+'</div>';}
function render(){
  root.innerHTML='<div class="sd">'+
  '<header class="sd-hero"><h2>신랑 예복</h2></header>'+
  '<nav class="sd-subnav" role="tablist" aria-label="예복 메뉴">'+VIEWS.map(function(v){return '<button role="tab" data-view="'+v[0]+'" aria-selected="'+(view===v[0])+'"'+(view===v[0]?' class="on"':'')+'>'+v[1]+'</button>';}).join('')+'</nav>'+
  panel('decide',decide())+
  panel('vendors','<section class="sd-sec"><div class="vf"><div class="vf-roles">'+chips('kind',kinds())+'</div><input id="gsQ" class="sd-q" type="search" placeholder="업체명 검색" value="'+esc(ui.q)+'">'+
   '<div class="vf-sels">'+sel('reg','위치',[['','전체'],['강북','종로·건대'],['강남','강남권'],['택배','택배']])+sel('sort','정렬',[['pick','결론 후보 먼저'],['price','낮은 가격 순'],['review','후기 많은 순']])+'</div></div>'+
   '<p class="sd-lead">카드를 누르면 사진·가격 근거·포함/별도 비용·대여 규정·후기가 모두 열려요.</p><div id="gsVendors">'+vendorGrid()+'</div><details class="iw-more"><summary>가격 등급 설명</summary><div class="iw-legend">'+Object.keys(D.gradeInfo).map(function(k){return '<span>'+grade(k)+' '+esc(D.gradeInfo[k])+'</span>';}).join('')+'</div></details></section>')+
  panel('reviews',reviews())+
  panel('guide','<section class="sd-sec">'+rentVs()+'</section><section class="sd-sec"><h3>피팅 가이드</h3>'+guide()+'</section>')+
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
  function redraw(){document.getElementById('gsVendors').innerHTML=vendorGrid();refreshRevs();}
  root.querySelectorAll('.sd-chip[data-k]').forEach(function(b){b.onclick=function(){ui[b.dataset.k]=b.dataset.v;root.querySelectorAll('.sd-chip[data-k="'+b.dataset.k+'"]').forEach(function(x){x.classList.toggle('on',x===b);});redraw();};});
  root.querySelectorAll('select[data-k]').forEach(function(s){s.onchange=function(){ui[s.dataset.k]=s.value;redraw();};});
  var q=document.getElementById('gsQ');if(q)q.oninput=function(){ui.q=q.value;redraw();};
  var rq=document.getElementById('gsRQ');if(rq)rq.oninput=function(){ui.rq=rq.value;refreshRevs();};
  var na=document.getElementById('gsNoAd');if(na)na.onchange=function(){ui.noAd=na.checked;refreshRevs();};
  bindRevs();
  root.querySelectorAll('[data-ck]').forEach(function(x){x.onchange=function(){st.checks[x.dataset.ck]=x.checked;save();x.closest('.sd-task').classList.toggle('done',x.checked);};});
  var cp=document.getElementById('gsCopyQ');if(cp)cp.onclick=function(){var txt=QUESTIONS.map(function(q,i){return (i+1)+'. '+q[0];}).join('\n'),msg=document.getElementById('gsCopyMsg');(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){msg.textContent=' 복사됐어요';},function(){msg.textContent=' 복사가 막혀 있어요. 길게 눌러 선택해 주세요';});};
  bindQuotes();
}
function refreshRevs(){var el=document.getElementById('gsRevs');if(!el)return;el.innerHTML=revRows();labelTables();bindRevs();}
function bindRevs(){root.querySelectorAll('tr[data-rid]').forEach(function(tr){tr.onclick=function(ev){if(ev.target.closest('a'))return;ui.open=ui.open===tr.dataset.rid?'':tr.dataset.rid;refreshRevs();};});}
function bindQuotes(){
  var f=document.getElementById('gsForm');
  if(f)f.onsubmit=function(ev){ev.preventDefault();var d=new FormData(f),price=parseFloat(d.get('price'));if(!(price>0))return;
    st.quotes.push({co:d.get('co')||'',what:d.get('what')||'',price:price,셔츠:!!d.get('셔츠'),타이:!!d.get('타이'),구두:!!d.get('구두'),조끼:!!d.get('조끼'),at:new Date().toISOString().slice(0,10)});save();
    document.getElementById('gsQuotes').innerHTML=quotes();bindQuotes();};
  root.querySelectorAll('[data-del]').forEach(function(b){b.onclick=function(){st.quotes.splice(+b.dataset.del,1);save();document.getElementById('gsQuotes').innerHTML=quotes();bindQuotes();};});
}
root.addEventListener('click',function(e){var t=e.target.closest('[data-vid]');if(t)openVendor(+t.dataset.vid);});
/* 스드메 탭이 이미 문서 전체 .vt-slides를 넘기고 있으면 중복 타이머를 만들지 않음 */
if(!window.__sdmRotate)window.__sdmRotate=setInterval(rotate,1600);
render();
})();
