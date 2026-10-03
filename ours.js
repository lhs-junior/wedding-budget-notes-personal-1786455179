/* ours.js — "우리 결혼식" 탭: 두 번째 비밀번호로 암호문을 브라우저에서 복호화 */
(function(){
var root=document.getElementById('p-ours');
if(!root||typeof OURS_ENC==='undefined')return;
var CK='wedding-budget-notes:ours:v1',SS='wedding-budget-notes:ours:pw';
var checks;try{checks=JSON.parse(localStorage.getItem(CK)||'{}');}catch(e){checks={};}
function b64(s){var b=atob(s),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a;}
function decrypt(pw){
  var s=crypto.subtle,E=OURS_ENC;
  return s.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey'])
   .then(function(k){return s.deriveKey({name:'PBKDF2',salt:b64(E.salt),iterations:E.iter,hash:'SHA-256'},k,{name:'AES-GCM',length:256},false,['decrypt']);})
   .then(function(key){return s.decrypt({name:'AES-GCM',iv:b64(E.iv)},key,b64(E.ct));})
   .then(function(buf){return new TextDecoder().decode(buf);});
}
function show(html){
  root.innerHTML='<div class="sd ow">'+html+'<button class="ow-lock" id="owLock">다시 잠그기</button></div>';
  root.querySelectorAll('[data-ock]').forEach(function(x){x.checked=!!checks[x.dataset.ock];x.closest('.sd-task').classList.toggle('done',x.checked);
    x.onchange=function(){checks[x.dataset.ock]=x.checked;localStorage.setItem(CK,JSON.stringify(checks));x.closest('.sd-task').classList.toggle('done',x.checked);};});
  document.getElementById('owLock').onclick=function(){sessionStorage.removeItem(SS);gate();};
}
function gate(msg){
  root.innerHTML='<div class="ow-gate"><h2>우리 결혼식 관련 정보</h2><p>비밀번호를 한 번 더 입력해주세요</p><p class="ow-hint">힌트: 의왕 현관문에 있는 번호</p><form id="owForm"><input id="owPw" type="password" inputmode="numeric" autocomplete="off" placeholder="••••"><button>열기</button></form><p class="ow-err">'+(msg||'')+'</p></div>';
  document.getElementById('owForm').onsubmit=function(ev){ev.preventDefault();var pw=document.getElementById('owPw').value.trim();
    decrypt(pw).then(function(h){sessionStorage.setItem(SS,pw);show(h);},function(){gate('비밀번호가 맞지 않아요.');});};
}
var saved=sessionStorage.getItem(SS);
if(saved)decrypt(saved).then(show,function(){gate();});else gate();
})();
