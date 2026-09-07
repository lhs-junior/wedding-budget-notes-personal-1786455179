/* honeymoon.js — 신혼여행 탭 렌더링·상호작용·저장 */
(function(){
var SK='wedding-budget-notes:honeymoon:v1';
var state;try{state=JSON.parse(localStorage.getItem(SK)||'{}');}catch(e){state={};}
if(state._v!==1){state={_v:1,picks:[],budgetMax:null,cmpIds:[]};}
function save(){localStorage.setItem(SK,JSON.stringify(state));}
function esc(s){return String(s||'').replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function fmt(n){if(n==null)return'확인 안 됨';return n.toLocaleString()+'만원';}
function badge(st){var m={'official_confirmed':'공식','independent_two_source':'2곳검증','single_source':'단일출처','unknown':'확인 안 됨'};var c={'official_confirmed':'#2e7d32','independent_two_source':'#1565c0','single_source':'#ef6c00','unknown':'#999'};return'<span class="hm-badge" style="background:'+c[st]+'">'+esc(m[st]||st)+'</span>';}
function srcLink(ids){if(!ids||!ids.length)return'';return ids.map(function(id){var s=HONEYMOON_SOURCES[id];if(!s)return'';return'<a href="'+esc(s.u)+'" target="_blank" class="hm-src" title="'+esc(s.t)+' · '+esc(s.p)+'">'+esc(s.p)+(s.fromPrice?' (부터가)':'')+'</a>';}).join(' ');}

function renderList(){
var wrap=document.getElementById('hmList');if(!wrap)return;
var html='<div class="hm-baseline"><b>기준:</b> 가을 출발 · 10박 이상 · 2인';
if(state.budgetMax)html+=' · 예산 상한 '+state.budgetMax+'만원';
html+='<span style="color:#999;margin-left:8px">(출발 연·월, 최종 예산은 후보를 본 뒤 확정)</span></div>';
html+='<div class="hm-controls"><label>예산 상한(만원) <input type="number" id="hmBudget" value="'+(state.budgetMax||'')+'" placeholder="미입력 시 전체 표시" style="width:120px"></label>';
html+='<button id="hmBudgetApply" class="hm-btn">적용</button><button id="hmBudgetClear" class="hm-btn-s">초기화</button></div>';
HONEYMOON_DEST.forEach(function(d){
var totalEst=d.cost&&d.cost.direct&&d.cost.direct.total?d.cost.direct.total.v:null;
var evalClass='';var evalLabel='';
if(state.budgetMax&&totalEst!=null){
if(totalEst<=state.budgetMax){evalClass='hm-pass';evalLabel='통과';}
else{evalClass='hm-over';evalLabel='조건 초과';}
}else if(state.budgetMax&&totalEst==null){evalClass='hm-hold';evalLabel='보류(비용 미확인)';}
var picked=state.picks.indexOf(d.id)>=0;
html+='<div class="hm-card '+evalClass+'" data-id="'+d.id+'">';
html+='<div class="hm-card-head">';
html+='<div><b class="hm-name">'+esc(d.name)+'</b><small class="hm-region">'+esc(d.region)+'</small>';
if(evalLabel)html+='<span class="hm-eval">'+evalLabel+'</span>';
html+='</div>';
html+='<button class="hm-pick'+(picked?' on':'')+'" data-pick="'+d.id+'">'+(picked?'✓ 담김':'후보에 담기')+'</button>';
html+='</div>';
html+='<p class="hm-summary">'+esc(d.summary.v)+' '+badge(d.summary.st)+'</p>';
html+='<div class="hm-chips">';
html+='<span class="hm-chip" title="가을 적합 월">🍂 '+d.autumn.v.months.map(function(m){return m+'월';}).join('·')+'</span>';
html+='<span class="hm-chip" title="여행 일수">🗓️ '+d.trip.v.nights+'박</span>';
html+='<span class="hm-chip" title="2인 예상 총액">💰 '+(totalEst!=null?fmt(totalEst):'확인 안 됨')+'</span>';
html+='<span class="hm-chip" title="이동">✈️ '+esc(d.mobility.v.longHaul.replace('인천→','').substring(0,20))+'</span>';
html+='</div>';
// 4 experiences 한줄씩
html+='<div class="hm-exp-grid">';
['nature','rest','culture','adventure'].forEach(function(k){
var label={nature:'🏔 자연',rest:'🛏 휴식',culture:'🍽 문화·미식',adventure:'🧗 모험'}[k];
html+='<div class="hm-exp-item"><b>'+label+'</b><span>'+esc((d.exp[k].v||'').substring(0,60))+(d.exp[k].v.length>60?'…':'')+'</span></div>';
});
html+='</div>';
// 반복 단점 1줄
if(d.cons.length)html+='<div class="hm-con">⚠️ '+esc(d.cons[0].v)+' '+badge(d.cons[0].st)+'</div>';
html+='<button class="hm-detail-btn" data-detail="'+d.id+'">상세 보기</button>';
html+='</div>';
});
wrap.innerHTML=html;
// picked count
var pickedCount=state.picks.length;
var cmpBtn=document.getElementById('hmCompareBtn');
if(cmpBtn){cmpBtn.disabled=pickedCount<2;cmpBtn.textContent=pickedCount>=2?'담은 '+pickedCount+'곳 비교':'2곳 이상 담으면 비교 가능';}
// events
wrap.querySelectorAll('[data-pick]').forEach(function(b){b.onclick=function(e){e.stopPropagation();togglePick(b.dataset.pick);};});
wrap.querySelectorAll('[data-detail]').forEach(function(b){b.onclick=function(e){e.stopPropagation();openDetail(b.dataset.detail);};});
wrap.querySelectorAll('.hm-card').forEach(function(c){c.onclick=function(){openDetail(c.dataset.id);};});
document.getElementById('hmBudgetApply').onclick=function(){var v=parseInt(document.getElementById('hmBudget').value);state.budgetMax=v>0?v:null;save();renderList();};
document.getElementById('hmBudgetClear').onclick=function(){state.budgetMax=null;document.getElementById('hmBudget').value='';save();renderList();};
}

function togglePick(id){
var idx=state.picks.indexOf(id);
if(idx>=0)state.picks.splice(idx,1);
else if(state.picks.length>=3){alert('비교는 최대 3곳까지 가능합니다.');return;}
else state.picks.push(id);
save();renderList();
}

function openDetail(id){
var d=HONEYMOON_DEST.find(function(x){return x.id===id;});if(!d)return;
var modal=document.getElementById('hmModal');
var body=document.getElementById('hmModalBody');
var html='<h2>'+esc(d.name)+' <small>'+esc(d.region)+'</small></h2>';
html+='<p>'+esc(d.summary.v)+' '+badge(d.summary.st)+' '+srcLink(d.summary.s)+'</p>';

// 가을
html+='<h3>🍂 가을 적합성 '+badge(d.autumn.st)+'</h3>';
html+='<p>'+esc(d.autumn.v.cond)+'</p>';
if(d.autumn.v.cautions.length)html+='<ul>'+d.autumn.v.cautions.map(function(c){return'<li>⚠️ '+esc(c)+'</li>';}).join('')+'</ul>';
html+=srcLink(d.autumn.s);

// 일정
html+='<h3>🗓️ '+d.trip.v.nights+'박 예시 일정</h3>';
html+='<p><b>경로:</b> '+d.trip.v.route.map(esc).join(' → ')+'</p>';
html+='<table class="hm-table"><tr><th>출발</th><th>도착</th><th>수단</th><th>시간</th></tr>';
d.trip.v.segs.forEach(function(s){html+='<tr><td>'+esc(s.f)+'</td><td>'+esc(s.t)+'</td><td>'+esc(s.m)+'</td><td>'+esc(s.d)+'</td></tr>';});
html+='</table>';
html+=srcLink(d.trip.s);

// 경험
html+='<h3>네 가지 경험</h3>';
['nature','rest','culture','adventure'].forEach(function(k){
var label={nature:'🏔 자연',rest:'🛏 휴식',culture:'🍽 문화·미식',adventure:'🧗 모험'}[k];
html+='<div class="hm-exp-detail"><b>'+label+'</b><p>'+esc(d.exp[k].v)+'</p></div>';
});

// 이동
html+='<h3>✈️ 이동과 피로</h3>';
html+='<p><b>장거리:</b> '+esc(d.mobility.v.longHaul)+'</p>';
if(d.mobility.v.transfers.length)html+='<p><b>경유:</b> '+d.mobility.v.transfers.map(esc).join(', ')+'</p>';
if(d.mobility.v.fatigue.length)html+='<ul>'+d.mobility.v.fatigue.map(function(f){return'<li>'+esc(f)+'</li>';}).join('')+'</ul>';

// 반복 단점
html+='<h3>⚠️ 반복되는 단점</h3><ul>';
d.cons.forEach(function(c){html+='<li>'+esc(c.v)+' '+badge(c.st)+' '+srcLink(c.s)+'</li>';});
html+='</ul>';

// 비용
html+='<h3>💰 2인 비용 비교</h3>';
html+='<p class="hm-cost-basis"><b>비교 기준:</b> '+esc(d.cost.basis)+'</p>';
html+='<div class="hm-cost-grid">';
// 패키지
html+='<div class="hm-cost-box"><h4>여행사 패키지</h4>';
if(d.cost.pkg.provider)html+='<p><b>'+esc(d.cost.pkg.provider)+'</b> '+esc(d.cost.pkg.name||'')+'</p>';
html+='<p>'+(d.cost.pkg.total!=null?'<b>'+fmt(d.cost.pkg.total)+'</b>':'확인 안 됨')+'</p>';
if(d.cost.pkg.note)html+='<small>'+esc(d.cost.pkg.note)+'</small>';
html+=' '+badge(d.cost.pkg.st)+' '+srcLink(d.cost.pkg.s);
html+='</div>';
// 직접예약
html+='<div class="hm-cost-box"><h4>직접 예약</h4>';
html+='<table class="hm-table"><tr><th>항목</th><th>금액</th><th>비고</th></tr>';
['airfare','hotel','other','total'].forEach(function(k){
var item=d.cost.direct[k];if(!item)return;
var label={airfare:'항공',hotel:'숙소',other:'식비·이동·투어',total:'2인 합계'}[k];
html+='<tr><td>'+label+'</td><td class="num">'+(item.v!=null?fmt(item.v):'확인 안 됨')+'</td><td><small>'+esc(item.note||'')+'</small></td></tr>';
});
html+='</table>';
html+='<small>잠정 시나리오 — 출발 연·월 확정 시 재확인 필요</small>';
html+='</div></div>';
if(d.cost.ref)html+='<p class="hm-ref">참고: '+esc(d.cost.ref)+' '+srcLink(d.cost.refS)+'</p>';

body.innerHTML=html;
modal.classList.add('open');
modal.focus();
}

function renderCompare(){
if(state.picks.length<2){alert('2곳 이상 담아야 비교할 수 있습니다.');return;}
var dests=state.picks.map(function(id){return HONEYMOON_DEST.find(function(x){return x.id===id;});}).filter(Boolean);
var modal=document.getElementById('hmModal');
var body=document.getElementById('hmModalBody');
var cols=dests.length;
var html='<h2>후보 비교 ('+cols+'곳)</h2>';
html+='<table class="hm-cmp-table"><thead><tr><th></th>';
dests.forEach(function(d){html+='<th>'+esc(d.name)+'</th>';});
html+='</tr></thead><tbody>';
// rows
var rows=[
{label:'가을 적합 월',fn:function(d){return d.autumn.v.months.map(function(m){return m+'월';}).join('·');}},
{label:'일수',fn:function(d){return d.trip.v.nights+'박';}},
{label:'장거리 이동',fn:function(d){return d.mobility.v.longHaul;}},
{label:'🏔 자연',fn:function(d){return d.exp.nature.v.substring(0,80);}},
{label:'🛏 휴식',fn:function(d){return d.exp.rest.v.substring(0,80);}},
{label:'🍽 문화·미식',fn:function(d){return d.exp.culture.v.substring(0,80);}},
{label:'🧗 모험',fn:function(d){return d.exp.adventure.v.substring(0,80);}},
{label:'핵심 단점',fn:function(d){return d.cons[0]?d.cons[0].v:'-';}},
{label:'2인 추정 총액',fn:function(d){var t=d.cost&&d.cost.direct&&d.cost.direct.total?d.cost.direct.total.v:null;return t!=null?fmt(t):'확인 안 됨';}},
{label:'검증 상태',fn:function(d){return d.cost&&d.cost.direct&&d.cost.direct.total?'잠정 시나리오':'확인 안 됨';}}
];
rows.forEach(function(r){
html+='<tr><td><b>'+esc(r.label)+'</b></td>';
dests.forEach(function(d){html+='<td>'+esc(r.fn(d))+'</td>';});
html+='</tr>';
});
html+='</tbody></table>';
html+='<p style="color:#999;font-size:12px;margin-top:12px">모든 비용은 잠정 시나리오이며, 출발 연·월 확정 시 재확인이 필요합니다. 총액만으로 우열을 판단하지 마세요.</p>';
body.innerHTML=html;
modal.classList.add('open');
modal.focus();
}

// init
var page=document.getElementById('p-honeymoon');if(!page)return;
page.innerHTML='<section class="hm-wrap">'+
'<h2>신혼여행 후보 비교</h2>'+
'<p class="hm-intro">인기순이 아닙니다. 가을 출발·10박 이상에서 자연·휴식·문화·모험을 함께 담을 수 있는 후보를 비교하고, 실제 비용 구조를 봅니다.</p>'+
'<div id="hmList"></div>'+
'<div class="hm-compare-bar"><button id="hmCompareBtn" class="hm-btn" disabled>2곳 이상 담으면 비교 가능</button></div>'+
'</section>'+
'<div class="hm-modal" id="hmModal" tabindex="-1" role="dialog" aria-modal="true">'+
'<div class="hm-modal-inner">'+
'<button class="hm-modal-close" id="hmModalClose" aria-label="닫기">×</button>'+
'<div id="hmModalBody"></div>'+
'</div></div>';

renderList();
document.getElementById('hmCompareBtn').onclick=renderCompare;
document.getElementById('hmModalClose').onclick=function(){document.getElementById('hmModal').classList.remove('open');};
document.getElementById('hmModal').onclick=function(e){if(e.target===this)this.classList.remove('open');};
document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.getElementById('hmModal').classList.remove('open');}});
})();
