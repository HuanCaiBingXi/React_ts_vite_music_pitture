import{c as t,F as r,r as s,j as f}from"./index.529ae73f.js";import{c}from"./index.esm.4985c651.js";const l=({color:i,str:e,setIsNotify:o})=>{s.exports.useEffect(()=>{let d;return d=setTimeout(()=>{a(!1),setTimeout(()=>{o(!1)},1e3)},1200),()=>{clearTimeout(d)}},[]);const[n,a]=s.exports.useState(!0);return f("div",{className:"Notify",style:{animationName:n?"NotifyStart":"NotifyEnd",color:`${i}`},children:[t("p",{children:e}),t("span",{className:"Loading3Quarters",children:t(c,{})})]})},u=({color:i,str:e,isNotify:o,setIsNotify:n})=>t(r,{children:o?t(l,{color:i,str:e,setIsNotify:n}):t(r,{})});const m=({setIsDialog:i,render:e})=>f("div",{className:"Dialog",children:[t("button",{onClick:()=>{i(!1)},children:"\u5173\u95ED\u7EC4\u4EF6"}),e()]}),h=({isDialog:i,setIsDialog:e,render:o})=>t(r,{children:i?t(m,{setIsDialog:e,render:o}):t(r,{})});const b=({isSmallWidth:i})=>{const[e,o]=s.exports.useState(!1),[n,a]=s.exports.useState(!1);return f("div",{className:"Third",style:{width:i?"90vw":"70vw"},children:[t("button",{onClick:()=>{o(!0)},children:"\u901A\u77E5\u5F39\u7A97\u7EC4\u4EF6"}),t("button",{onClick:()=>{a(!0)},children:"\u5F39\u7A97\u7EC4\u4EF6"}),t(h,{isDialog:n,setIsDialog:a,render:()=>f("div",{className:"DialogDivtest",children:[t("p",{children:"dawd"}),t("span",{children:"23323"})]})}),t(u,{color:"red",str:"\u4FE1\u606F\u5C55\u793A\u533A",isNotify:e,setIsNotify:o})]})};export{b as default};