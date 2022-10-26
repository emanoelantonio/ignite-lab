var D=Object.defineProperty;var i=(e,t)=>D(e,"name",{value:t,configurable:!0});import{r}from"./index.aef283a0.js";import{a as R,$ as U}from"./index.module.685ed554.js";import{r as z}from"./index.e46b874a.js";import{j as p,F as g,a as W}from"./jsx-runtime.7a9c2aa2.js";import{I as F,r as K}from"./IconBase.esm.f89f3953.js";import{T as q}from"./Text.74bfd301.js";import"./iframe.db9db107.js";import"./clsx.m.256e9345.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}i(y,"_extends$1");function X(e,t=[]){let n=[];function o(c,f){const u=r.exports.createContext(f),d=n.length;n=[...n,f];function a(l){const{scope:h,children:x,...b}=l,N=(h==null?void 0:h[e][d])||u,$=r.exports.useMemo(()=>b,Object.values(b));return r.exports.createElement(N.Provider,{value:$},x)}i(a,"Provider");function m(l,h){const x=(h==null?void 0:h[e][d])||u,b=r.exports.useContext(x);if(b)return b;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${c}\``)}return i(m,"useContext"),a.displayName=c+"Provider",[a,m]}i(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=i(()=>{const c=n.map(f=>r.exports.createContext(f));return i(function(u){const d=(u==null?void 0:u[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return s.scopeName=e,[o,Y(s,...t)]}i(X,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Y(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return i(function(c){const f=o.reduce((u,{useScope:d,scopeName:a})=>{const l=d(c)[`__scope${a}`];return{...u,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(Y,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}i(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function w(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}i(w,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function H({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[o,s]=Z({defaultProp:t,onChange:n}),c=e!==void 0,f=c?e:o,u=w(n),d=r.exports.useCallback(a=>{if(c){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else s(a)},[c,e,s,u]);return[f,d]}i(H,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Z({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=w(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}i(Z,"$71cd76cc60e0454e$var$useUncontrolledState");function G(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(G,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const P=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function J(e){const[t,n]=r.exports.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let f,u;if("borderBoxSize"in c){const d=c.borderBoxSize,a=Array.isArray(d)?d[0]:d;f=a.inlineSize,u=a.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}i(J,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Q(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}i(Q,"$fe963b355347cc68$export$3e6543de14f8614f");const M=i(e=>{const{present:t,children:n}=e,o=V(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=R(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function V(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),f=e?"mounted":"unmounted",[u,d]=Q(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const a=S(o.current);c.current=u==="mounted"?a:"none"},[u]),P(()=>{const a=o.current,m=s.current;if(m!==e){const h=c.current,x=S(a);e?d("MOUNT"):x==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(m&&h!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),P(()=>{if(t){const a=i(l=>{const x=S(o.current).includes(l.animationName);l.target===t&&x&&z.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),m=i(l=>{l.target===t&&(c.current=S(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.exports.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}i(V,"$921a889cee6df7e8$var$usePresence");function S(e){return(e==null?void 0:e.animationName)||"none"}i(S,"$921a889cee6df7e8$var$getAnimationName");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}i(E,"_extends");const ee=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],T=ee.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...f}=o,u=c?U:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(u,E({},f,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),B="Checkbox",[te,ke]=X(B),[ne,oe]=te(B),re=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:s,defaultChecked:c,required:f,disabled:u,value:d="on",onCheckedChange:a,...m}=e,[l,h]=r.exports.useState(null),x=R(t,v=>h(v)),b=r.exports.useRef(!1),N=l?Boolean(l.closest("form")):!0,[$=!1,j]=H({prop:s,defaultProp:c,onChange:a});return r.exports.createElement(ne,{scope:n,state:$,disabled:u},r.exports.createElement(T.button,y({type:"button",role:"checkbox","aria-checked":C($)?"mixed":$,"aria-required":f,"data-state":I($),"data-disabled":u?"":void 0,disabled:u,value:d},m,{ref:x,onKeyDown:A(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:A(e.onClick,v=>{j(O=>C(O)?!0:!O),N&&(b.current=v.isPropagationStopped(),b.current||v.stopPropagation())})})),N&&r.exports.createElement(ae,{control:l,bubbles:!b.current,name:o,value:d,checked:$,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),se="CheckboxIndicator",ce=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=oe(se,n);return r.exports.createElement(M,{present:o||C(c.state)||c.state===!0},r.exports.createElement(T.span,y({"data-state":I(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ae=i(e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),f=G(n),u=J(t);return r.exports.useEffect(()=>{const d=c.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:o});d.indeterminate=C(n),l.call(d,C(n)?!1:n),d.dispatchEvent(h)}},[f,n,o]),r.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}i(C,"$e698a72e93240346$var$isIndeterminate");function I(e){return C(e)?"indeterminate":e?"checked":"unchecked"}i(I,"$e698a72e93240346$var$getState");const ie=re,ue=ce;var k=new Map;k.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var de=i(function(t,n){return K(t,n,k)},"renderPath"),L=r.exports.forwardRef(function(e,t){return p(F,{...Object.assign({ref:t},e,{renderPath:de})})});L.displayName="Check";const fe=L;function _(e){return p(ie,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:p(ue,{asChild:!0,children:p(fe,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}i(_,"CheckBox");try{_.displayName="CheckBox",_.__docgenInfo={description:"",displayName:"CheckBox",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/CheckBox.tsx#CheckBox"]={docgenInfo:_.__docgenInfo,name:"CheckBox",path:"src/components/CheckBox.tsx#CheckBox"})}catch{}const ge={title:"Components/CheckBox",component:_,args:{},argTypes:{},decorators:[e=>W("div",{className:"flex items-center gap-2",children:[e(),p(q,{size:"sm",children:"Lembrar de mim por 30 dias."})]})]},ye={},Ne=["Default"];export{ye as Default,Ne as __namedExportsOrder,ge as default};
//# sourceMappingURL=CheckBox.stories.0a577730.js.map
