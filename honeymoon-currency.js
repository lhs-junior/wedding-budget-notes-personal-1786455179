/* Korean-first cruise budget display: KRW default, EUR and original USD reference. */
(function(){
'use strict';
const root=document.getElementById('p-honeymoon');if(!root)return;
const q=id=>root.querySelector('#'+id);
const list=q('cruise-list'),fx=q('cruise-fx'),status=q('cruise-rate-status'),refresh=q('cruise-refresh-rate');
if(!list||!fx||!status||!refresh)return;
const usd=q('cruise-use-usd'),krw=q('cruise-use-krw');
const eur=document.createElement('button');eur.type='button';eur.id='cruise-use-eur';eur.textContent='유로 € (EUR)';usd.after(eur);
usd.textContent='달러 $ (USD)';krw.textContent='원화 ₩ (KRW)';
const money=(n,c)=>c==='KRW'?Math.round(n).toLocaleString('ko-KR')+'원':c==='EUR'?'€'+n.toLocaleString('ko-KR',{maximumFractionDigits:2}):'US$'+n.toLocaleString('ko-KR',{maximumFractionDigits:2});
let currency='KRW',eurPerKrw=0,updated='',verifiedUSD=false,verifiedEUR=false,budgetWon=0,updating=false;
const rate=()=>{const n=Number(fx.value);return Number.isFinite(n)&&n>0?n:0;};
function showStatus(){
 const u=rate();
 let info='1달러 = '+(u?u.toLocaleString('ko-KR',{maximumFractionDigits:4}):'미입력')+'원';
 if(eurPerKrw)info+=' · 1유로 = '+eurPerKrw.toLocaleString('ko-KR',{maximumFractionDigits:4})+'원';
 info+=verifiedUSD&&verifiedEUR?' · '+updated+' 기준환율 (매일 갱신)':' · 일부 또는 전체 수동/미확인 환율';
 status.textContent=info;
}
function update(){
 if(updating)return;updating=true;
 const u=rate(),e=eurPerKrw;
 list.querySelectorAll('.cruise-option-price strong').forEach(node=>{
   let original=Number(node.dataset.usd);
   if(!original){const match=node.textContent.match(/US\$\s*([\d,]+(?:\.\d+)?)/);if(match){original=Number(match[1].replace(/,/g,''));node.dataset.usd=String(original);}}
   if(!original)return;
   if(currency==='KRW')node.textContent=u?money(original*u,'KRW'):money(original,'USD');
   if(currency==='EUR')node.textContent=u&&e?money(original*u/e,'EUR'):money(original,'USD');
   if(currency==='USD')node.textContent=money(original,'USD');
 });
 const total=q('cruise-total'),note=q('cruise-currency-total-note');
 if(total&&Number.isFinite(budgetWon)){
   if(currency==='KRW')total.textContent=money(budgetWon,'KRW');
   if(currency==='EUR')total.textContent=e?money(budgetWon/e,'EUR'):'환율 미확인';
   if(currency==='USD')total.textContent=u?money(budgetWon/u,'USD'):'환율 미확인';
 }
 [krw,eur,usd].forEach(b=>{const active=b.id==='cruise-use-'+currency.toLowerCase();b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 if(note)note.textContent='해외 판매 사이트의 달러 참고가격을 환산한 값입니다. 실제 결제 통화와 청구액은 예약처마다 다릅니다.';
 showStatus();updating=false;
}
const note=document.createElement('small');note.id='cruise-currency-total-note';q('cruise-total')?.parentElement?.appendChild(note);
function syncBudget(){const t=q('cruise-total');if(!t)return;const match=t.textContent.match(/^([\d,]+)원$/);if(match)budgetWon=Number(match[1].replace(/,/g,''));update();}
[krw,eur,usd].forEach((b,i)=>b.addEventListener('click',()=>{if(i===1&&!eurPerKrw){showStatus();return;}currency=['KRW','EUR','USD'][i];update();}));
['cruise-budget-ship','cruise-air','cruise-extra','cruise-fx'].forEach(id=>q(id)?.addEventListener('input',()=>{if(id==='cruise-fx')verifiedUSD=false;syncBudget();}));
new MutationObserver(records=>{if(records.some(r=>r.type==='childList'))update();}).observe(list,{childList:true});
async function fetchRate(from,to){const res=await fetch('https://api.frankfurter.dev/v2/rate/'+from+'/'+to,{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status);const d=await res.json();if(d.base!==from||d.quote!==to||!Number.isFinite(d.rate)||d.rate<=0||!/^\d{4}-\d\d-\d\d$/.test(d.date))throw Error('invalid rate');return d;}
async function refreshRates(){
 refresh.disabled=true;status.textContent='원화·유로 기준환율 조회 중…';
 const data=await Promise.allSettled([fetchRate('USD','KRW'),fetchRate('EUR','KRW')]);
 if(data[0].status==='fulfilled'){const d=data[0].value;fx.value=String(d.rate);verifiedUSD=true;updated=d.date;}else verifiedUSD=false;
 if(data[1].status==='fulfilled'){const d=data[1].value;eurPerKrw=d.rate;verifiedEUR=true;updated=updated||d.date;}else verifiedEUR=false;
 q('cruise-budget-ship')?.dispatchEvent(new Event('input',{bubbles:true}));
 syncBudget();refresh.disabled=false;
}
refresh.addEventListener('click',refreshRates);
syncBudget();refreshRates();
})();
