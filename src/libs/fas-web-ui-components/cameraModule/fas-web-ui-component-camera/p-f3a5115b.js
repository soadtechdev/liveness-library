let e,t,n=!1;const l={},o=e=>"object"==(e=typeof e)||"function"===e,s=(e,t,...n)=>{let l=null,s=!1,r=!1;const u=[],a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!o(l))&&(l+=""),s&&r?u[u.length-1].t+=l:u.push(s?c(null,l):l),r=s)};if(a(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,u,i);const f=c(e,null);return f.l=t,u.length>0&&(f.o=u),f},c=(e,t)=>({i:0,u:e,t,p:null,o:null,l:null}),r={},i={forEach:(e,t)=>e.map(u).forEach(t),map:(e,t)=>e.map(u).map(t).map(a)},u=e=>({vattrs:e.l,vchildren:e.o,vkey:e.m,vname:e.h,vtag:e.u,vtext:e.t}),a=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),s(e.vtag,t,...e.vchildren||[])}const t=c(e.vtag,e.vtext);return t.l=e.vattrs,t.o=e.vchildren,t.m=e.vkey,t.h=e.vname,t},f=e=>V(e).$,p=(e,t,n)=>{const l=f(e);return{emit:e=>d(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},d=(e,t,n)=>{const l=Y.ce(t,n);return e.dispatchEvent(l),l},m=new WeakMap,y=e=>"sc-"+e.v,h=(e,t,n,l,s,c)=>{if(n!==l){let r=B(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=b(n),s=b(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const i=o(l);if((r||i&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&c||s)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):B(Q,i)?i.slice(2):i[2]+t.slice(3),n&&Y.rel(e,t,n,!1),l&&Y.ael(e,t,l,!1)}},$=/\s/,b=e=>e?e.split($):[],w=(e,t,n,o)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,c=e&&e.l||l,r=t.l||l;for(o in c)o in r||h(s,o,c[o],void 0,n,t.i);for(o in r)h(s,o,c[o],r[o],n,t.i)},v=(t,n,l)=>{const o=n.o[l];let s,c,r=0;if(null!==o.t)s=o.p=X.createTextNode(o.t);else if(s=o.p=X.createElement(o.u),w(null,o,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),o.o)for(r=0;r<o.o.length;++r)c=v(t,o,r),c&&s.appendChild(c);return s},g=(e,n,l,o,s,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=v(null,l,s),r&&(o[s].p=r,i.insertBefore(r,n)))},S=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.p,k(l),o.remove())},j=(e,t)=>e.u===t.u,M=(e,t)=>{const n=t.p=e.p,l=e.o,o=t.o,s=t.t;null===s?(w(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],u=t[r],a=l.length-1,f=l[0],p=l[a];for(;s<=r&&c<=a;)null==i?i=t[++s]:null==u?u=t[--r]:null==f?f=l[++c]:null==p?p=l[--a]:j(i,f)?(M(i,f),i=t[++s],f=l[++c]):j(u,p)?(M(u,p),u=t[--r],p=l[--a]):j(i,p)?(M(i,p),e.insertBefore(i.p,u.p.nextSibling),i=t[++s],p=l[--a]):j(u,f)?(M(u,f),e.insertBefore(u.p,i.p),u=t[--r],f=l[++c]):(o=v(t&&t[c],n,c),f=l[++c],o&&i.p.parentNode.insertBefore(o,i.p));s>r?g(e,null==l[a+1]?null:l[a+1].p,n,l,c,a):c>a&&S(t,s,r)})(n,l,t,o):null!==o?(null!==e.t&&(n.textContent=""),g(n,null,t,o,0,o.length-1)):null!==l&&S(l,0,l.length-1)):e.t!==s&&(n.data=s)},k=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(k)},O=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},C=(e,t)=>{if(e.i|=16,!(4&e.i))return O(e,e.S),re((()=>x(e,t)));e.i|=512},x=(e,t)=>{const n=e.j;let l;return t&&(e.i|=256,e.M&&(e.M.map((([e,t])=>T(n,e,t))),e.M=null),l=T(n,"componentWillLoad")),U(l,(()=>E(e,n,t)))},E=async(e,t,n)=>{const l=e.$,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.$,l=t.i,o=((e,t)=>{let n=y(t);const l=K.get(n);if(e=11===e.nodeType?e:X,l)if("string"==typeof l){let t,o=m.get(e=e.head||e);o||m.set(e,o=new Set),o.has(n)||(t=X.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);L(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>P(e);0===t.length?n():(Promise.all(t).then(n),e.i|=4,t.length=0)}},L=(n,l)=>{try{l=l.render(),n.i&=-17,n.i|=2,((n,l)=>{const o=n.$,i=n.O||c(null,null),u=(e=>e&&e.u===r)(l)?l:s(null,null,l);t=o.tagName,u.u=null,u.i|=4,n.O=u,u.p=i.p=o.shadowRoot||o,e=o["s-sc"],M(i,u)})(n,l)}catch(e){G(e,n.$)}return null},P=e=>{const t=e.$,n=e.j,l=e.S;64&e.i?T(n,"componentDidUpdate"):(e.i|=64,W(t),T(n,"componentDidLoad"),e.C(t),l||N()),e.g&&(e.g(),e.g=void 0),512&e.i&&ce((()=>C(e,!1))),e.i&=-517},N=()=>{W(X.documentElement),ce((()=>d(Q,"appload",{detail:{namespace:"fas-web-ui-component-camera"}})))},T=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){G(e)}},U=(e,t)=>e&&e.then?e.then(t):t(),W=e=>e.classList.add("hydrated"),A=(e,t,n)=>{if(t.L){const l=Object.entries(t.L),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>V(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=V(e),c=s.P.get(t),r=s.i,i=s.j;n=((e,t)=>null==e||o(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),8&r&&void 0!==c||n===c||Number.isNaN(c)&&Number.isNaN(n)||(s.P.set(t,n),i&&2==(18&r)&&C(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){Y.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},D=(e,t={})=>{const n=[],l=t.exclude||[],o=Q.customElements,s=X.head,c=s.querySelector("meta[charset]"),r=X.createElement("style"),i=[];let u,a=!0;Object.assign(Y,t),Y.N=new URL(t.resourcesUrl||"./",X.baseURI).href,e.map((e=>{e[1].map((t=>{const s={i:t[0],v:t[1],L:t[2],T:t[3]};s.L=t[2],s.T=t[3];const c=s.v,r=class extends HTMLElement{constructor(e){super(e),z(e=this,s),1&s.i&&e.attachShadow({mode:"open"})}connectedCallback(){u&&(clearTimeout(u),u=null),a?i.push(this):Y.jmp((()=>(e=>{if(0==(1&Y.i)){const t=V(e),n=t.k,l=()=>{};if(1&t.i)F(e,t,n.T);else{t.i|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.S=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.i)){{if(t.i|=32,(o=J(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(A(o,n,2),o.isProxied=!0);const e=()=>{};t.i|=8;try{new o(t)}catch(e){G(e)}t.i&=-9,e()}if(o.style){let e=o.style;const t=y(n);if(!K.has(t)){const l=()=>{};((e,t,n)=>{let l=K.get(e);ee&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,K.set(e,l)})(t,e,!!(1&n.i)),l()}}}const s=t.S,c=()=>C(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){Y.jmp((()=>(()=>{if(0==(1&Y.i)){const e=V(this);e.U&&(e.U.map((e=>e())),e.U=void 0)}})()))}componentOnReady(){return V(this).W}};s.A=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,A(r,s,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),a=!1,i.length?i.map((e=>e.connectedCallback())):Y.jmp((()=>u=setTimeout(N,30)))},F=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=e,c=R(t,o),r=q(n);Y.ael(s,l,c,r),(t.U=t.U||[]).push((()=>Y.rel(s,l,c,r)))}))},R=(e,t)=>n=>{try{256&e.i?e.j[t](n):(e.M=e.M||[]).push([t,n])}catch(e){G(e)}},q=e=>0!=(2&e),H=new WeakMap,V=e=>H.get(e),_=(e,t)=>H.set(t.j=e,t),z=(e,t)=>{const n={i:0,$:e,k:t,P:new Map};return n.W=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],F(e,n,t.T),H.set(e,n)},B=(e,t)=>t in e,G=(e,t)=>(0,console.error)(e,t),I=new Map,J=e=>{const t=e.v.replace(/-/g,"_"),n=e.A,l=I.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(I.set(n,e),e[t])),G)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},K=new Map,Q="undefined"!=typeof window?window:{},X=Q.document||{head:{}},Y={i:0,N:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},Z=e=>Promise.resolve(e),ee=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),te=[],ne=[],le=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&Y.i?ce(se):Y.raf(se))},oe=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){G(e)}e.length=0},se=()=>{oe(te),oe(ne),(n=te.length>0)&&Y.raf(se)},ce=e=>Z().then(e),re=le(ne,!0);export{D as b,p as c,f as g,s as h,Z as p,_ as r}