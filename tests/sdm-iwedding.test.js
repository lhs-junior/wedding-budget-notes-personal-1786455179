// node tests/sdm-iwedding.test.js — 실지불액 계산 자체검사
const assert=require('assert');
const fs=require('fs'),vm=require('vm'),path=require('path');
// 브라우저처럼 같은 전역에서 두 스크립트를 실행
for(const f of ['sdm-iwedding-audit.js','sdm-iwedding.js'])vm.runInThisContext(fs.readFileSync(path.join(__dirname,'..',f),'utf8'));
const calc=globalThis.SDM_IW_CALC;
const c={base:237,req:[{v:25},{v:25},{v:5.5}],opts:[{v:11},{v:44}],disc:[{v:10}],unknown:['a','b']};
assert.deepStrictEqual(calc(c,{}),{base:237,req:55.5,opt:0,disc:10,total:282.5,unknown:2});
assert.strictEqual(calc(c,{1:true}).total,326.5);
assert.strictEqual(calc(c,{0:true,1:true}).total,337.5);
// 데이터 무결성: 받은 견적 기준선, 숫자형 금액, 중복 id 없음
const D=globalThis.SDM_IW;
assert.deepStrictEqual(D.baseline.map(b=>b.total),[237,270]);
assert.strictEqual(new Set(D.combos.map(c=>c.id)).size,D.combos.length);
D.combos.forEach(c=>{assert.strictEqual(typeof c.base,'number');[...c.req,...c.opts,...c.disc].forEach(x=>assert.strictEqual(typeof x.v,'number',c.id+' '+x.k));});
const est=id=>{const c=D.combos.find(x=>x.id===id),sel={};c.opts.forEach((o,i)=>{if(o.on)sel[i]=true});return calc(c,sel).total;};
assert.strictEqual(est('b1'),287);assert.strictEqual(est('b2'),320);assert.strictEqual(est('our1'),236); // picks 문구의 차액 근거
console.log('ok');
