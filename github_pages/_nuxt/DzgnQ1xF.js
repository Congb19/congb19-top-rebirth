import{_ as f}from"./D1rm9Kjn.js";import{h as w,R as x,S as y,T as h,U as B,V as g,O as S,j as k,w as r,o as l,a as u,c as s,F as i,l as c,K as p,t as b}from"./CX-k2Hzx.js";const D=w({__name:"sysinfo",setup(C){const v=x(),n=y(),_=h(),o=B(),m=g(),t=S({system:[{label:"网络在线",value:v},{label:"是否有电池",value:n.isSupported},{label:"电量",value:Number(n.level.value)*100+"%"}],browser:[{label:"刷新率",value:_},{label:"逻辑分辨率(宽)",value:o.width},{label:"逻辑分辨率(高)",value:o.height},{label:"总缩放倍率",value:m.pixelRatio}]});return console.log(t),(F,a)=>{const d=f;return l(),k(d,null,{header:r(()=>[a[0]||(a[0]=u("h3",null,"系统信息:",-1)),(l(!0),s(i,null,c(p(t).system,e=>(l(),s("li",null,b(e.label+": "+e.value),1))),256))]),default:r(()=>[a[1]||(a[1]=u("h3",null,"浏览器相关:",-1)),(l(!0),s(i,null,c(p(t).browser,e=>(l(),s("li",null,b(e.label+": "+e.value),1))),256))]),_:1})}}});export{D as _};
