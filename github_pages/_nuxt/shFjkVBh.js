import{g as y,r as d,f as b,J as x,q as C,K as N,c as u,o as n,b as B,w as c,y as T,l as s,m as V,d as p,s as D,a as R,k as F,t as f,F as M,I as U}from"./BoxtMhU7.js";import{_ as q}from"./CWpb1QbX.js";const z=g=>{const o=y(),a=d("ready"),l=d();let t=d([0,0]);const m=b(()=>t.value[1]>t.value[0]?t.value[1]-t.value[0]:0),i=()=>{const v=Math.random()*5;a.value="waiting",l.value=setTimeout(()=>{a.value="testing",t.value[0]=Number(Date.now())},3e3+v*1e3)},r=async()=>{a.value==="ready"||a.value==="waiting"?(e(),o.add({title:"抢跑了！",timeout:2e3})):a.value==="testing"&&(t.value[1]=Number(Date.now()),await x(),g(Number(m.value)),e())},e=()=>{clearTimeout(l.value),a.value="ready",t.value[0]=0,t.value[1]=0};return{status:a,start:i,trig:r}},E={class:"cb-reaction"},I={key:0},L=C({__name:"reaction",setup(g){const o=N([]),a=d(0),l=r=>{a.value=r,o.unshift(r)},{status:t,start:m,trig:i}=z(l);return(r,e)=>{const v=V,k=q;return n(),u("div",E,[B(k,null,{header:c(()=>e[1]||(e[1]=[p(" 请在点击“开始”按钮开始测试。下方方块变为绿色时，迅速点击它！ ")])),footer:c(()=>[R("div",null,"最新一次成绩："+f(s(a))+" ms",1),s(o).length>0?(n(),u("div",I,[e[3]||(e[3]=p(" 历史记录：")),(n(!0),u(M,null,U(s(o),(_,w)=>(n(),u("span",{key:w},f(_)+" ms ",1))),128))])):F("",!0)]),default:c(()=>[s(t)==="ready"?(n(),T(v,{key:0,onClick:s(m)},{default:c(()=>e[2]||(e[2]=[p("开始")])),_:1},8,["onClick"])):(n(),u("div",{key:1,class:D(["cb-reaction-board",{waiting:s(t)==="waiting",testing:s(t)==="testing"}]),onMousedown:e[0]||(e[0]=(..._)=>s(i)&&s(i)(..._))},null,34))]),_:1})])}}});export{L as _};
