import{_ as r,k as s,c as t,r as e,j as o,m as n}from"./index-82a332fb.js";import{C as i}from"./cover_3-dba27d2f.js";import{M as a}from"./motion-container-0862ba3b.js";import{g as c}from"./index-85185b56.js";import"./bounce-60412db4.js";import"./transition-8bc41415.js";import"./fade-6abf311c.js";const m=r((function(r){return function(){return r}}));const u=s((function(r,s){var t,e=Number(s),o=0;if(e<0||isNaN(e))throw new RangeError("n must be a non-negative number");for(t=[];o<e;)t.push(r(o)),o+=1;return t}));const l=s((function(r,s){return u(m(r),s)}));function x({isText:r,variant:s,isMulti:m}){const{colorBgLayout:u}=t(),x=e.useMemo((()=>c(s)),[s]),d=e.useMemo((()=>m?l(i,5):[i]),[m]);return o.jsx("div",{className:"overflow-auto rounded-lg xs:p-20",style:{backgroundColor:u},children:r?o.jsx(a,{className:"flex h-80 items-center justify-center font-bold md:text-6xl",children:"SlashAdmin".split("").map(((r,s)=>o.jsx(n.div,{variants:x,className:"xs:ml-1",children:r},s)))}):o.jsx(a,{className:"flex flex-col items-center gap-6",children:d.map(((r,s)=>o.jsx(n.img,{src:r,style:{objectFit:"cover",width:"480px",height:m?"72px":"320px",margin:"auto",borderRadius:"8px"},variants:x},s)))})},s)}export{x as default};