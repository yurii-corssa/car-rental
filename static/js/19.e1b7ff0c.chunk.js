"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[19],{19:(n,t,r)=>{r.r(t),r.d(t,{default:()=>G});var e,i=r(791),o=r(168),a=r(867);const s=a.zo.div(e||(e=(0,o.Z)(["\n  //\n"])));var c=r(805),l=r(184);const d=n=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",...n,children:(0,l.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var v,h,x,p,u,f,g,j,k,w;const C=a.zo.li(v||(v=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  width: 274px;\n  height: 426px;\n  flex-direction: column;\n  align-items: flex-start;\n\n  &:hover {\n    img {\n      transform: scale(1.02);\n    }\n  }\n"]))),m=a.zo.button(h||(h=(0,o.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background: none;\n  border: none;\n  z-index: 1;\n\n  svg {\n    stroke: ",";\n    fill: ",";\n    stroke-opacity: ",";\n\n    transition: stroke var(--transition), stroke-opacity var(--transition),\n      fill var(--transition);\n  }\n\n  &:hover,\n  :focus {\n    svg {\n      fill: ",";\n      stroke: ",";\n      stroke-opacity: 1;\n    }\n  }\n"])),(n=>{let{$isFavorite:t}=n;return t?"var(--accent)":"var(--white)"}),(n=>{let{$isFavorite:t}=n;return t?"var(--accent)":"transparent"}),(n=>{let{$isFavorite:t}=n;return t?1:.8}),(n=>{let{$isFavorite:t}=n;return t?"var(--accentActive)":"var(--white)"}),(n=>{let{$isFavorite:t}=n;return t?"var(--accentActive)":"var(--white)"})),z=(0,a.zo)(d)(x||(x=(0,o.Z)(["\n  width: 18px;\n  height: 18px;\n"]))),Z=a.zo.div(p||(p=(0,o.Z)(["\n  width: 274px;\n  height: 268px;\n  border-radius: 14px;\n  flex-shrink: 0;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n  overflow: hidden;\n"]))),b=a.zo.img(u||(u=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1);\n  transition: transform var(--transition);\n"]))),L=a.zo.div(f||(f=(0,o.Z)(["\n  //\n"]))),y=a.zo.h2(g||(g=(0,o.Z)(["\n  //\n"]))),F=a.zo.p(j||(j=(0,o.Z)(["\n  //\n"]))),$=a.zo.p(k||(k=(0,o.Z)(["\n  //\n"]))),A=(0,a.zo)(c.O)(w||(w=(0,o.Z)(["\n  width: 274px;\n"]))),B=n=>{let{data:t}=n;const[r,e]=(0,i.useState)(!1),{img:o,make:a,model:s,year:c,rentalPrice:d}=t;return(0,l.jsxs)(C,{children:[(0,l.jsx)(m,{onClick:()=>{e(!r)},$isFavorite:r,children:(0,l.jsx)(z,{})}),(0,l.jsx)(Z,{children:(0,l.jsx)(b,{src:o,alt:"".concat(a," ").concat(s),loading:"lazy"})}),(0,l.jsxs)(L,{children:[(0,l.jsxs)(y,{children:[a," ",(0,l.jsx)("span",{children:s}),", ",c]}),(0,l.jsx)(F,{children:d}),(0,l.jsx)($,{children:""})]}),(0,l.jsx)(A,{type:"button",onClick:()=>{},children:"Learn more"})]})};var M,S;const _=a.zo.ul(M||(M=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n"]))),E=a.zo.button(S||(S=(0,o.Z)(["\n  //\n"])));var H=r(420);const I=n=>n.adverts.items,O=n=>n.adverts.count,P=n=>n.adverts.isLoading;var W=r(854),q=r(595);const D=()=>{const[n,t]=(0,i.useState)(12),r=(0,H.I0)();(0,i.useEffect)((()=>{n<=12&&r((0,q.H)()),r((0,q.B)({limit:n}))}),[r,n]);const e=(0,H.v9)(I),o=(0,H.v9)(P),a=(0,H.v9)(O),s=n<a;return(0,l.jsxs)(_,{children:[e.map((n=>(0,l.jsx)(B,{data:n},n.id))),o&&(0,l.jsx)(W.Z,{}),a===n,s&&(0,l.jsx)(E,{type:"button",onClick:()=>{t((n=>n+12))},children:"Load More"})]})},G=()=>(0,l.jsx)(s,{children:(0,l.jsx)(D,{})})}}]);
//# sourceMappingURL=19.e1b7ff0c.chunk.js.map