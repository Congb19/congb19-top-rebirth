import{_ as k}from"./C4GYL_cA.js";import{_ as v,B as p,y as h,J as m,c as r,b,w as n,o as c,a as o,F as w,k as A,H as l,n as C,t as a,d as g}from"./B7ZUWATF.js";const x={class:"keyboard-container"},B={class:"status-header"},N={class:"counter"},D={class:"last-key"},K={class:"keyboard-grid"},L={class:"key-label"},O={class:"key-state"},U={__name:"keyboard",setup(V){const t=p({}),d=p(""),y=h(()=>Object.keys(t.value).length),i=e=>{console.log("press:",e);const s={" ":"Space",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",Control:"Control",Meta:"Win/Cmd",AltGraph:"Alt/Option",Alt:"Alt/Option"};return(s==null?void 0:s[e])||(e==null?void 0:e.toUpperCase())};return m(document,"keydown",e=>{t.value[e.key]||(t.value[e.key]=!0,d.value=i(e.key),e.preventDefault())}),m(document,"keyup",e=>{t.value[e.key]=!1,setTimeout(()=>{delete t.value[e.key]},100)}),(e,s)=>{const f=k;return c(),r("div",x,[b(f,null,{header:n(()=>[o("div",B,[o("div",N,"按键数量: "+a(l(y)),1),o("div",D,"最后按键: "+a(l(d)||"无"),1)])]),footer:n(()=>s[0]||(s[0]=[g(" 按键即可自动检测 ")])),default:n(()=>[o("div",K,[(c(!0),r(w,null,A(l(t),(_,u)=>(c(),r("div",{key:u,class:C(["key-block",{active:_}])},[o("div",L,a(i(u)),1),o("div",O,a(_?"按下":"抬起"),1)],2))),128))])]),_:1})])}}},S=v(U,[["__scopeId","data-v-77a1022a"]]);export{S as default};
