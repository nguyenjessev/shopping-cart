import{E as b,V as y,O as m,s as q,N as w}from"./index.54b01e36.js";const o=[];function z(n,u){return{subscribe:A(n,u).subscribe}}function A(n,u=b){let r;const t=new Set;function f(e){if(q(n,e)&&(n=e,r)){const i=!o.length;for(const s of t)s[1](),o.push(s,n);if(i){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){f(e(n))}function a(e,i=b){const s=[e,i];return t.add(s),t.size===1&&(r=u(f)||b),e(n),()=>{t.delete(s),t.size===0&&r&&(r(),r=null)}}return{set:f,update:l,subscribe:a}}function E(n,u,r){const t=!Array.isArray(n),f=t?[n]:n,l=u.length<2;return z(r,a=>{let e=!1;const i=[];let s=0,d=b;const g=()=>{if(s)return;d();const c=u(t?i[0]:i,a);l?a(c):d=w(c)?c:b},_=f.map((c,p)=>y(c,h=>{i[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){m(_),d()}})}export{E as d,A as w};
