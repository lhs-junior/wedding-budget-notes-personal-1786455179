/* USD/KRW display and reference rate refresh. Daily benchmark, not an intraday live quote. */
(function(){
'use strict';
const root=document.getElementById('p-honeymoon');
if(!root)return;
const byId=id=>root.querySelector('#'+id);
const list=byId('cruise-list'),fx=byId('cruise-fx');
if(!list||!fx)return;
const status=byId('cruise-rate-status'),usd=byId('cruise-use-usd'),krw=byId('cruise-use-krw'),refresh=byId('cruise-refresh-rate');
let currency='USD',rateDate='',apiVerified=false;
const korean=n=>Math.round(n).toLocaleString('ko-KR')+'원';
const dollar=n=>'US$ '+Number(n).toLocaleString('en-US',{maximumFractionDigits:2});
function rate(){const n=Number(fx.value);return Number.isFinite(n)&&n>0?n:0;}
function label(){
  const n=rate();
  if(!n){status.textContent='올바른 환율을 입력해 주세요';return;}
  const origin=apiVerified?'Frankfurter 기준환율 (일 1회 갱신) · '+rateDate:'수동 입력 환율 · 실시간 확인되지 않음';
  status.textContent='1 USD = '+n.toLocaleString('ko-KR',{maximumFractionDigits:4})+' KRW · '+origin;
}
function apply(){
  const n=rate();
  list.querySelectorAll('.cruise-option-price strong').forEach(el=>{
    let value=Number(el.dataset.usd);
    if(!Number.isFinite(value)||value<=0){
      const match=el.textContent.match(/US\$\s*([\d,]+(?:\.\d+)?)/);
      if(match){value=Number(match[1].replace(/,/g,''));el.dataset.usd=String(value);}
    }
    if(Number.isFinite(value)&&value>0){
      const output=currency==='KRW'&&n?korean(value*n):dollar(value);
      if(el.textContent!==output)el.textContent=output;
    }
  });
  usd.classList.toggle('active',currency==='USD');
  krw.classList.toggle('active',currency==='KRW');
  usd.setAttribute('aria-pressed',String(currency==='USD'));
  krw.setAttribute('aria-pressed',String(currency==='KRW'));
  const total=byId('cruise-total'),caption=byId('cruise-total-caption');
  if(total&&caption){
    let wonValue=Number(total.dataset.won);
    if(!Number.isFinite(wonValue)){
      const text=total.textContent.replace(/[^0-9]/g,'');
      if(text){wonValue=Number(text);total.dataset.won=String(wonValue);}
    }
    if(currency==='KRW'){
      if(Number.isFinite(wonValue))total.textContent=korean(wonValue);
    }else if(n&&Number.isFinite(wonValue)){total.textContent=dollar(wonValue/n);}
    const note=byId('cruise-currency-total-note');
    if(note)note.textContent=currency==='USD'?'USD 환산액 · 항공 및 기타 원화 예산도 동일 환율로 환산':'KRW 계산액';
  }
  label();
}
function updateAfterCalc(){
  const total=byId('cruise-total');
  if(!total)return;
  const txt=total.textContent;
  if(txt.includes('원')){const v=Number(txt.replace(/[^\d]/g,''));if(Number.isFinite(v))total.dataset.won=String(v);}
  apply();
}
[usd,krw].forEach((el,i)=>el.addEventListener('click',()=>{currency=i?'KRW':'USD';apply();}));
const calcInputs=['cruise-budget-ship','cruise-fx','cruise-air','cruise-extra'];
calcInputs.forEach(id=>byId(id)?.addEventListener('input',()=>{
  if(id==='cruise-fx')apiVerified=false;
  // original estimator's handler runs first and writes KRW
  updateAfterCalc();
}));
const listObserver=new MutationObserver(records=>{
 if(records.some(record=>record.type==='childList'))apply();
});
listObserver.observe(list,{childList:true});
async function loadRate(){
 refresh.disabled=true;
 status.textContent='USD/KRW 기준환율 조회 중…';
 try{
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),10000);
  let response;
  try{response=await fetch('https://api.frankfurter.dev/v2/rate/USD/KRW',{cache:'no-store',signal:controller.signal});}
  finally{clearTimeout(timeout);}
  if(!response.ok)throw new Error('HTTP '+response.status);
  const data=await response.json();
  const value=Number(data.rate);
  if(data.base!=='USD'||data.quote!=='KRW'||!Number.isFinite(value)||value<100||value>10000||!/^\d{4}-\d\d-\d\d$/.test(String(data.date)))throw new Error('invalid rate');
  fx.value=String(value);
  rateDate=data.date;
  apiVerified=true;
  byId('cruise-budget-ship')?.dispatchEvent(new Event('input',{bubbles:true}));
  updateAfterCalc();
 }catch(e){
  apiVerified=false;
  status.textContent='환율 자동조회 실패 · 직접 입력한 값 사용 (실시간 환율 아님)';
  apply();
 }finally{refresh.disabled=false;}
}
refresh.addEventListener('click',loadRate);
const budgetHeader=byId('cruise-total')?.parentElement;
if(budgetHeader){const el=document.createElement('small');el.id='cruise-currency-total-note';el.textContent='';budgetHeader.appendChild(el);}
apply();loadRate();
})();