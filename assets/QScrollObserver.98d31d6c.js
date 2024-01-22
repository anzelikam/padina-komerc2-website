import{h as T,a1 as p,a2 as h,i as x,t as f,v as S,x as P,F as k,l as L,z as R}from"./index.58ec4dea.js";import{f as $,h as C,i as E,b as M,j as Q,k as z}from"./scroll.914d7bba.js";var y=T({name:"QRouteTab",props:{...p,...$},emits:C,setup(e,{slots:u,emit:t}){const o=h({useDisableForRouterLinkProps:!1}),{renderTab:n,$tabs:i}=E(e,u,t,{exact:x(()=>e.exact),...o});return f(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{i.verifyRouteModel()}),()=>n(o.linkTag.value,o.linkAttrs.value)}});const{passive:b}=R,F=["both","horizontal","vertical"];var A=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>F.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,n,i;f(()=>e.scrollTarget,()=>{m(),g()});function l(){o!==null&&o();const s=Math.max(0,Q(n)),c=z(n),a={top:s-t.position.top,left:c-t.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const v=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";t.position={top:s,left:c},t.directionChanged=t.direction!==v,t.delta=a,t.directionChanged===!0&&(t.direction=v,t.inflectionPoint=t.position),u("scroll",{...t})}function g(){n=M(i,e.scrollTarget),n.addEventListener("scroll",r,b),r(!0)}function m(){n!==void 0&&(n.removeEventListener("scroll",r,b),n=void 0)}function r(s){if(s===!0||e.debounce===0||e.debounce==="0")l();else if(o===null){const[c,a]=e.debounce?[setTimeout(l,e.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];o=()=>{a(c),o=null}}}const{proxy:d}=L();return f(()=>d.$q.lang.rtl,l),S(()=>{i=d.$el.parentNode,g()}),P(()=>{o!==null&&o(),m()}),Object.assign(d,{trigger:r,getPosition:()=>t}),k}});export{y as Q,A as a};
