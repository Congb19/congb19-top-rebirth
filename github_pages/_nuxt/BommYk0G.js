import{r as t,f as A,g as B,h as I,i as N,c as y,a as n,j as V,d as x,k as T,t as C,l as r,v as j,b as E,o as g,m as M}from"./BoxtMhU7.js";const S=window.setInterval,b=w=>{const{text:u,cursor:d=!0,delay:p=0,speed:c=50}=w,s=t(!0),_=t(u),o=t([]),a=t(),e=t(!1),i=A(()=>s.value&&e.value&&d),v=async()=>{await new Promise(f=>{setTimeout(()=>{f()},p)}),h();const l=_.value.split("");l.forEach((f,k)=>{const D=Math.random()*(1e4/c);setTimeout(()=>{h(),o.value.push(f),o.value.length===l.length&&m()},1e4/c*k+D)})},h=()=>{clearInterval(a.value),e.value=!0,a.value=S(()=>{e.value=!e.value},500)},m=()=>{clearInterval(a.value),s.value=!1};return{start:v,stop:m,typeArr:o,showCursor:i,typing:s}},z={class:"cb-index"},F={class:"cb-profile"},P={class:"cb-profile-title"},U={class:"title-welcome"},W={key:0},q={class:"title-desc"},G={key:0},H={class:"cb-profile-content"},K={__name:"index",setup(w){const u=B(),{start:d,typeArr:p,showCursor:c,typing:s}=b({text:"Congb19的小屋"}),{start:_,typeArr:o,showCursor:a,typing:e}=b({text:"你在烦恼什么呢？",delay:2e3}),i=t(!1);I(()=>{!s.value&&!e.value&&(i.value=!0)});const v=()=>{console.log("功德+1"),u.add({title:"功德+1",timeout:2e3})};return N(()=>{d(),_()}),(h,m)=>{const l=M;return g(),y("div",z,[n("div",F,[n("div",P,[n("div",U,[x(C(r(p).join("")),1),r(c)?(g(),y("span",W,"_")):T("",!0)]),n("div",q,[x(C(r(o).join("")),1),r(a)?(g(),y("span",G,"_")):T("",!0)])]),V(n("div",H,[E(l,{icon:"i-mingcute-fish-fill",size:"md",color:"white",variant:"ghost",label:"电子木鱼",trailing:!1,onClick:v})],512),[[j,r(i)]])])])}}};export{K as default};
