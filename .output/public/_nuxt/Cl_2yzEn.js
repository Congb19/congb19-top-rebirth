import{_ as l,l as g,q as p,o as s,w as c,c as r,i as o,n as d,p as n,s as b,D as f,x as y,e as m,y as k,z as v,m as h,k as u}from"./DjjTtOtg.js";import{u as $}from"./DkEonsAk.js";const C={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},w=h(u.ui.strategy,u.ui.card,C),S=g({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:i}=$("card",y(e,"ui"),w),t=m(()=>k(v(a.value.base,a.value.rounded,a.value.divide,a.value.ring,a.value.shadow,a.value.background),e.class));return{ui:a,attrs:i,cardClass:t}}});function B(e,a,i,t,j,z){return s(),p(f(e.$attrs.onSubmit?"form":e.as),b({class:e.cardClass},e.attrs),{default:c(()=>[e.$slots.header?(s(),r("div",{key:0,class:d([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[n(e.$slots,"header")],2)):o("",!0),e.$slots.default?(s(),r("div",{key:1,class:d([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[n(e.$slots,"default")],2)):o("",!0),e.$slots.footer?(s(),r("div",{key:2,class:d([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[n(e.$slots,"footer")],2)):o("",!0)]),_:3},16,["class"])}const O=l(S,[["render",B]]);export{O as _};
