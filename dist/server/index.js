var wc=Object.defineProperty;var Ys=e=>{throw TypeError(e)};var xc=(e,t,r)=>t in e?wc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Zr=(e,t,r)=>xc(e,typeof t!="symbol"?t+"":t,r),Qs=(e,t,r)=>t.has(e)||Ys("Cannot "+r);var ct=(e,t,r)=>(Qs(e,t,"read from private field"),r?r.call(e):t.get(e)),yo=(e,t,r)=>t.has(e)?Ys("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),vo=(e,t,r,n)=>(Qs(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var wo={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks;function Cc(){if(Ks)return ne;Ks=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function y(R){return R===null||typeof R!="object"?null:(R=g&&R[g]||R["@@iterator"],typeof R=="function"?R:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function j(R,B,ee){this.props=R,this.context=B,this.refs=b,this.updater=ee||C}j.prototype.isReactComponent={},j.prototype.setState=function(R,B){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,B,"setState")},j.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function $(){}$.prototype=j.prototype;function I(R,B,ee){this.props=R,this.context=B,this.refs=b,this.updater=ee||C}var L=I.prototype=new $;L.constructor=I,v(L,j.prototype),L.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,D={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function q(R,B,ee){var ie,le={},he=null,ye=null;if(B!=null)for(ie in B.ref!==void 0&&(ye=B.ref),B.key!==void 0&&(he=""+B.key),B)O.call(B,ie)&&!H.hasOwnProperty(ie)&&(le[ie]=B[ie]);var pe=arguments.length-2;if(pe===1)le.children=ee;else if(1<pe){for(var oe=Array(pe),be=0;be<pe;be++)oe[be]=arguments[be+2];le.children=oe}if(R&&R.defaultProps)for(ie in pe=R.defaultProps,pe)le[ie]===void 0&&(le[ie]=pe[ie]);return{$$typeof:e,type:R,key:he,ref:ye,props:le,_owner:D.current}}function W(R,B){return{$$typeof:e,type:R.type,key:B,ref:R.ref,props:R.props,_owner:R._owner}}function G(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function Z(R){var B={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ee){return B[ee]})}var ce=/\/+/g;function z(R,B){return typeof R=="object"&&R!==null&&R.key!=null?Z(""+R.key):B.toString(36)}function J(R,B,ee,ie,le){var he=typeof R;(he==="undefined"||he==="boolean")&&(R=null);var ye=!1;if(R===null)ye=!0;else switch(he){case"string":case"number":ye=!0;break;case"object":switch(R.$$typeof){case e:case t:ye=!0}}if(ye)return ye=R,le=le(ye),R=ie===""?"."+z(ye,0):ie,F(le)?(ee="",R!=null&&(ee=R.replace(ce,"$&/")+"/"),J(le,B,ee,"",function(be){return be})):le!=null&&(G(le)&&(le=W(le,ee+(!le.key||ye&&ye.key===le.key?"":(""+le.key).replace(ce,"$&/")+"/")+R)),B.push(le)),1;if(ye=0,ie=ie===""?".":ie+":",F(R))for(var pe=0;pe<R.length;pe++){he=R[pe];var oe=ie+z(he,pe);ye+=J(he,B,ee,oe,le)}else if(oe=y(R),typeof oe=="function")for(R=oe.call(R),pe=0;!(he=R.next()).done;)he=he.value,oe=ie+z(he,pe++),ye+=J(he,B,ee,oe,le);else if(he==="object")throw B=String(R),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return ye}function ue(R,B,ee){if(R==null)return R;var ie=[],le=0;return J(R,ie,"","",function(he){return B.call(ee,he,le++)}),ie}function de(R){if(R._status===-1){var B=R._result;B=B(),B.then(function(ee){(R._status===0||R._status===-1)&&(R._status=1,R._result=ee)},function(ee){(R._status===0||R._status===-1)&&(R._status=2,R._result=ee)}),R._status===-1&&(R._status=0,R._result=B)}if(R._status===1)return R._result.default;throw R._result}var ae={current:null},ge={transition:null},Se={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:ge,ReactCurrentOwner:D};function fe(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:ue,forEach:function(R,B,ee){ue(R,function(){B.apply(this,arguments)},ee)},count:function(R){var B=0;return ue(R,function(){B++}),B},toArray:function(R){return ue(R,function(B){return B})||[]},only:function(R){if(!G(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},ne.Component=j,ne.Fragment=r,ne.Profiler=a,ne.PureComponent=I,ne.StrictMode=n,ne.Suspense=l,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Se,ne.act=fe,ne.cloneElement=function(R,B,ee){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ie=v({},R.props),le=R.key,he=R.ref,ye=R._owner;if(B!=null){if(B.ref!==void 0&&(he=B.ref,ye=D.current),B.key!==void 0&&(le=""+B.key),R.type&&R.type.defaultProps)var pe=R.type.defaultProps;for(oe in B)O.call(B,oe)&&!H.hasOwnProperty(oe)&&(ie[oe]=B[oe]===void 0&&pe!==void 0?pe[oe]:B[oe])}var oe=arguments.length-2;if(oe===1)ie.children=ee;else if(1<oe){pe=Array(oe);for(var be=0;be<oe;be++)pe[be]=arguments[be+2];ie.children=pe}return{$$typeof:e,type:R.type,key:le,ref:he,props:ie,_owner:ye}},ne.createContext=function(R){return R={$$typeof:s,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:o,_context:R},R.Consumer=R},ne.createElement=q,ne.createFactory=function(R){var B=q.bind(null,R);return B.type=R,B},ne.createRef=function(){return{current:null}},ne.forwardRef=function(R){return{$$typeof:i,render:R}},ne.isValidElement=G,ne.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:de}},ne.memo=function(R,B){return{$$typeof:d,type:R,compare:B===void 0?null:B}},ne.startTransition=function(R){var B=ge.transition;ge.transition={};try{R()}finally{ge.transition=B}},ne.unstable_act=fe,ne.useCallback=function(R,B){return ae.current.useCallback(R,B)},ne.useContext=function(R){return ae.current.useContext(R)},ne.useDebugValue=function(){},ne.useDeferredValue=function(R){return ae.current.useDeferredValue(R)},ne.useEffect=function(R,B){return ae.current.useEffect(R,B)},ne.useId=function(){return ae.current.useId()},ne.useImperativeHandle=function(R,B,ee){return ae.current.useImperativeHandle(R,B,ee)},ne.useInsertionEffect=function(R,B){return ae.current.useInsertionEffect(R,B)},ne.useLayoutEffect=function(R,B){return ae.current.useLayoutEffect(R,B)},ne.useMemo=function(R,B){return ae.current.useMemo(R,B)},ne.useReducer=function(R,B,ee){return ae.current.useReducer(R,B,ee)},ne.useRef=function(R){return ae.current.useRef(R)},ne.useState=function(R){return ae.current.useState(R)},ne.useSyncExternalStore=function(R,B,ee){return ae.current.useSyncExternalStore(R,B,ee)},ne.useTransition=function(){return ae.current.useTransition()},ne.version="18.3.1",ne}var Js;function La(){return Js||(Js=1,wo.exports=Cc()),wo.exports}var S=La(),Xr={},Zs;function Sc(){if(Zs)return Xr;Zs=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.parse=s,Xr.serialize=d;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,n=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function s(y,C){const v=new o,b=y.length;if(b<2)return v;const j=(C==null?void 0:C.decode)||m;let $=0;do{const I=y.indexOf("=",$);if(I===-1)break;const L=y.indexOf(";",$),F=L===-1?b:L;if(I>F){$=y.lastIndexOf(";",I-1)+1;continue}const O=i(y,$,I),D=l(y,I,O),H=y.slice(O,D);if(v[H]===void 0){let q=i(y,I+1,F),W=l(y,F,q);const G=j(y.slice(q,W));v[H]=G}$=F+1}while($<b);return v}function i(y,C,v){do{const b=y.charCodeAt(C);if(b!==32&&b!==9)return C}while(++C<v);return v}function l(y,C,v){for(;C>v;){const b=y.charCodeAt(--C);if(b!==32&&b!==9)return C+1}return v}function d(y,C,v){const b=(v==null?void 0:v.encode)||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const j=b(C);if(!t.test(j))throw new TypeError(`argument val is invalid: ${C}`);let $=y+"="+j;if(!v)return $;if(v.maxAge!==void 0){if(!Number.isInteger(v.maxAge))throw new TypeError(`option maxAge is invalid: ${v.maxAge}`);$+="; Max-Age="+v.maxAge}if(v.domain){if(!r.test(v.domain))throw new TypeError(`option domain is invalid: ${v.domain}`);$+="; Domain="+v.domain}if(v.path){if(!n.test(v.path))throw new TypeError(`option path is invalid: ${v.path}`);$+="; Path="+v.path}if(v.expires){if(!g(v.expires)||!Number.isFinite(v.expires.valueOf()))throw new TypeError(`option expires is invalid: ${v.expires}`);$+="; Expires="+v.expires.toUTCString()}if(v.httpOnly&&($+="; HttpOnly"),v.secure&&($+="; Secure"),v.partitioned&&($+="; Partitioned"),v.priority)switch(typeof v.priority=="string"?v.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${v.priority}`)}if(v.sameSite)switch(typeof v.sameSite=="string"?v.sameSite.toLowerCase():v.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${v.sameSite}`)}return $}function m(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function g(y){return a.call(y)==="[object Date]"}return Xr}var Xs=Sc(),yr={exports:{}},ei;function bc(){if(ei)return yr.exports;ei=1;var e={decodeValues:!0,map:!1,silent:!1};function t(s){return typeof s=="string"&&!!s.trim()}function r(s,i){var l=s.split(";").filter(t),d=l.shift(),m=n(d),g=m.name,y=m.value;i=i?Object.assign({},e,i):e;try{y=i.decodeValues?decodeURIComponent(y):y}catch(v){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+y+"'. Set options.decodeValues to false to disable this feature.",v)}var C={name:g,value:y};return l.forEach(function(v){var b=v.split("="),j=b.shift().trimLeft().toLowerCase(),$=b.join("=");j==="expires"?C.expires=new Date($):j==="max-age"?C.maxAge=parseInt($,10):j==="secure"?C.secure=!0:j==="httponly"?C.httpOnly=!0:j==="samesite"?C.sameSite=$:j==="partitioned"?C.partitioned=!0:C[j]=$}),C}function n(s){var i="",l="",d=s.split("=");return d.length>1?(i=d.shift(),l=d.join("=")):l=s,{name:i,value:l}}function a(s,i){if(i=i?Object.assign({},e,i):e,!s)return i.map?{}:[];if(s.headers)if(typeof s.headers.getSetCookie=="function")s=s.headers.getSetCookie();else if(s.headers["set-cookie"])s=s.headers["set-cookie"];else{var l=s.headers[Object.keys(s.headers).find(function(m){return m.toLowerCase()==="set-cookie"})];!l&&s.headers.cookie&&!i.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),s=l}if(Array.isArray(s)||(s=[s]),i.map){var d={};return s.filter(t).reduce(function(m,g){var y=r(g,i);return m[y.name]=y,m},d)}else return s.filter(t).map(function(m){return r(m,i)})}function o(s){if(Array.isArray(s))return s;if(typeof s!="string")return[];var i=[],l=0,d,m,g,y,C;function v(){for(;l<s.length&&/\s/.test(s.charAt(l));)l+=1;return l<s.length}function b(){return m=s.charAt(l),m!=="="&&m!==";"&&m!==","}for(;l<s.length;){for(d=l,C=!1;v();)if(m=s.charAt(l),m===","){for(g=l,l+=1,v(),y=l;l<s.length&&b();)l+=1;l<s.length&&s.charAt(l)==="="?(C=!0,l=y,i.push(s.substring(d,g)),d=l):l=g+1}else l+=1;(!C||l>=s.length)&&i.push(s.substring(d,s.length))}return i}return yr.exports=a,yr.exports.parse=a,yr.exports.parseString=r,yr.exports.splitCookiesString=o,yr.exports}var Ec=bc(),xo={};/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gl=e=>{throw TypeError(e)},_c=(e,t,r)=>t.has(e)||gl("Cannot "+r),Co=(e,t,r)=>(_c(e,t,"read from private field"),r?r.call(e):t.get(e)),$c=(e,t,r)=>t.has(e)?gl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function je(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jc(){return Math.random().toString(36).substring(2,10)}function ti(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?jr(t):t,state:r,key:t&&t.key||n||jc()}}function Lt({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}var an,Cr=class{constructor(e){if($c(this,an,new Map),e)for(let[t,r]of e)this.set(t,r)}get(e){if(Co(this,an).has(e))return Co(this,an).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Co(this,an).set(e,t)}};an=new WeakMap;var Rc=new Set(["lazy","caseSensitive","path","id","index","children"]);function Pc(e){return Rc.has(e)}var Ac=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function Ic(e){return Ac.has(e)}function kc(e){return e.index===!0}function ts(e,t,r=[],n={}){return e.map((a,o)=>{let s=[...r,String(o)],i=typeof a.id=="string"?a.id:s.join("-");if(se(a.index!==!0||!a.children,"Cannot specify children on an index route"),se(!n[i],`Found a route id collision on id "${i}".  Route id's must be globally unique within Data Router usages`),kc(a)){let l={...a,...t(a),id:i};return n[i]=l,l}else{let l={...a,...t(a),id:i,children:void 0};return n[i]=l,a.children&&(l.children=ts(a.children,t,s,n)),l}})}function $r(e,t,r="/"){return Tc(e,t,r,!1)}function Tc(e,t,r,n){let a=typeof t=="string"?jr(t):t,o=Le(a.pathname||"/",r);if(o==null)return null;let s=yl(e);Oc(s);let i=null;for(let l=0;i==null&&l<s.length;++l){let d=Wc(o);i=qc(s[l],d,n)}return i}function Dc(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function yl(e,t=[],r=[],n=""){let a=(o,s,i)=>{let l={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(n),`Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(n.length));let d=pt([n,l.relativePath]),m=r.concat(l);o.children&&o.children.length>0&&(se(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),yl(o.children,t,m,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Bc(d,o.index),routesMeta:m})};return e.forEach((o,s)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))a(o,s);else for(let l of vl(o.path))a(o,s,l)}),t}function vl(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let s=vl(n.join("/")),i=[];return i.push(...s.map(l=>l===""?o:[o,l].join("/"))),a&&i.push(...s),i.map(l=>e.startsWith("/")&&l===""?"/":l)}function Oc(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Vc(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Lc=/^:[\w-]+$/,Mc=3,Nc=2,Fc=1,Uc=10,Hc=-2,ri=e=>e==="*";function Bc(e,t){let r=e.split("/"),n=r.length;return r.some(ri)&&(n+=Hc),t&&(n+=Nc),r.filter(a=>!ri(a)).reduce((a,o)=>a+(Lc.test(o)?Mc:o===""?Fc:Uc),n)}function Vc(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function qc(e,t,r=!1){let{routesMeta:n}=e,a={},o="/",s=[];for(let i=0;i<n.length;++i){let l=n[i],d=i===n.length-1,m=o==="/"?t:t.slice(o.length)||"/",g=ba({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},m),y=l.route;if(!g&&d&&r&&!n[n.length-1].route.index&&(g=ba({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},m)),!g)return null;Object.assign(a,g.params),s.push({params:a,pathname:pt([o,g.pathname]),pathnameBase:Qc(pt([o,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(o=pt([o,g.pathnameBase]))}return s}function ba(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=zc(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:n.reduce((d,{paramName:m,isOptional:g},y)=>{if(m==="*"){let v=i[y]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const C=i[y];return g&&!C?d[m]=void 0:d[m]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function zc(e,t=!1,r=!0){je(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,l)=>(n.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Wc(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return je(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Le(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Gc(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?jr(e):e;return{pathname:r?r.startsWith("/")?r:Yc(r,t):t,search:Kc(n),hash:Jc(a)}}function Yc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function So(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wl(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function rs(e){let t=wl(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function ns(e,t,r,n=!1){let a;typeof e=="string"?a=jr(e):(a={...e},se(!a.pathname||!a.pathname.includes("?"),So("?","pathname","search",a)),se(!a.pathname||!a.pathname.includes("#"),So("#","pathname","hash",a)),se(!a.search||!a.search.includes("#"),So("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,i;if(s==null)i=r;else{let g=t.length-1;if(!n&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),g-=1;a.pathname=y.join("/")}i=g>=0?t[g]:"/"}let l=Gc(a,i),d=s&&s!=="/"&&s.endsWith("/"),m=(o||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||m)&&(l.pathname+="/"),l}var pt=e=>e.join("/").replace(/\/\/+/g,"/"),Qc=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kc=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jc=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Zc=class{constructor(e,t){this.type="DataWithResponseInit",this.data=e,this.init=t||null}};function De(e,t){return new Zc(e,typeof t=="number"?{status:t}:t)}var qe=(e,t=302)=>{let r=t;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let n=new Headers(r.headers);return n.set("Location",e),new Response(null,{...r,headers:n})},Xc=(e,t)=>{let r=qe(e,t);return r.headers.set("X-Remix-Reload-Document","true"),r},ed=(e,t)=>{let r=qe(e,t);return r.headers.set("X-Remix-Replace","true"),r},er=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Ae(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var xl=["POST","PUT","PATCH","DELETE"],td=new Set(xl),rd=["GET",...xl],nd=new Set(rd),Cl=new Set([301,302,303,307,308]),ad={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sl={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},od={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},sd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,id=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),ld=Symbol("ResetLoaderData");function ud(e,t){se(e.length>0,"You must provide a non-empty routes array to createStaticHandler");let r={},n=(t?t.basename:null)||"/",a=(t==null?void 0:t.mapRouteProperties)||id,o=ts(e,a,void 0,r);async function s(y,{requestContext:C,filterMatchesToLoad:v,skipLoaderErrorBubbling:b,skipRevalidation:j,dataStrategy:$,unstable_respond:I}={}){let L=new URL(y.url),F=y.method,O=ti("",Lt(L),null,"default"),D=$r(o,O,n);if(C=C??new Cr,!di(F)&&F!=="HEAD"){let q=dt(405,{method:F}),{matches:W,route:G}=ci(o),Z={basename:n,location:O,matches:W,loaderData:{},actionData:null,errors:{[G.id]:q},statusCode:q.status,loaderHeaders:{},actionHeaders:{}};return I?I(Z):Z}else if(!D){let q=dt(404,{pathname:O.pathname}),{matches:W,route:G}=ci(o),Z={basename:n,location:O,matches:W,loaderData:{},actionData:null,errors:{[G.id]:q},statusCode:q.status,loaderHeaders:{},actionHeaders:{}};return I?I(Z):Z}if(I&&D.some(q=>q.route.unstable_middleware||typeof q.route.lazy=="object"&&q.route.lazy.unstable_middleware)){se(C instanceof Cr,"When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`");try{await ii(D,r,a);let q,W=await li({request:y,matches:D,params:D[0].params,context:C},!0,async()=>{let G=await l(y,O,D,C,$||null,b===!0,null,v||null,j===!0);return _e(G)?G:(q={location:O,basename:n,...G},await I(q))},async(G,Z)=>{var ce;if(_e(G))return G;if(q)return Z in q.loaderData&&(q.loaderData[Z]=void 0),I(bl(o,q,G,b?Z:on(D,Z).route.id));{let z=b?Z:on(D,((ce=D.find(J=>J.route.id===Z||J.route.loader))==null?void 0:ce.route.id)||Z).route.id;return I({matches:D,location:O,basename:n,loaderData:{},actionData:null,errors:{[z]:G},statusCode:Ae(G)?G.status:500,actionHeaders:{},loaderHeaders:{}})}});return se(_e(W),"Expected a response in query()"),W}catch(q){if(_e(q))return q;throw q}}let H=await l(y,O,D,C,$||null,b===!0,null,v||null,j===!0);return _e(H)?H:{location:O,basename:n,...H}}async function i(y,{routeId:C,requestContext:v,dataStrategy:b,unstable_respond:j}={}){let $=new URL(y.url),I=y.method,L=ti("",Lt($),null,"default"),F=$r(o,L,n);if(v=v??new Cr,!di(I)&&I!=="HEAD"&&I!=="OPTIONS")throw dt(405,{method:I});if(!F)throw dt(404,{pathname:L.pathname});let O=C?F.find(q=>q.route.id===C):fi(F,L);if(C&&!O)throw dt(403,{pathname:L.pathname,routeId:C});if(!O)throw dt(404,{pathname:L.pathname});if(j&&F.some(q=>q.route.unstable_middleware||typeof q.route.lazy=="object"&&q.route.lazy.unstable_middleware))return se(v instanceof Cr,"When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`"),await ii(F,r,a),await li({request:y,matches:F,params:F[0].params,context:v},!0,async()=>{let W=await l(y,L,F,v,b||null,!1,O,null,!1);if(_e(W))return j(W);let G=W.errors?Object.values(W.errors)[0]:void 0;if(G!==void 0)throw G;let Z=W.actionData?Object.values(W.actionData)[0]:Object.values(W.loaderData)[0];return typeof Z=="string"?new Response(Z):Response.json(Z)},W=>_e(W)?j(W):new Response(String(W),{status:500,statusText:"Unexpected Server Error"}));let D=await l(y,L,F,v,b||null,!1,O,null,!1);if(_e(D))return D;let H=D.errors?Object.values(D.errors)[0]:void 0;if(H!==void 0)throw H;if(D.actionData)return Object.values(D.actionData)[0];if(D.loaderData)return Object.values(D.loaderData)[0]}async function l(y,C,v,b,j,$,I,L,F){se(y.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(os(y.method))return await d(y,v,I||fi(v,C),b,j,$,I!=null,L,F);let O=await m(y,v,b,j,$,I,L);return _e(O)?O:{...O,actionData:null,actionHeaders:{}}}catch(O){if(wd(O)&&_e(O.result)){if(O.type==="error")throw O.result;return O.result}if(Na(O))return O;throw O}}async function d(y,C,v,b,j,$,I,L,F){let O;if(!v.route.action&&!v.route.lazy){let q=dt(405,{method:y.method,pathname:new URL(y.url).pathname,routeId:v.route.id});if(I)throw q;O={type:"error",error:q}}else{let q=ui(a,r,y,C,v,[],b);O=(await g(y,q,I,b,j))[v.route.id],y.signal.aborted&&ni(y,I)}if($l(O))throw new Response(null,{status:O.response.status,headers:{Location:O.response.headers.get("Location")}});if(I){if(Zt(O))throw O.error;return{matches:[v],loaderData:{},actionData:{[v.route.id]:O.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{}}}if(F)if(Zt(O)){let q=$?v:on(C,v.route.id);return{statusCode:Ae(O.error)?O.error.status:O.statusCode!=null?O.statusCode:500,actionData:null,actionHeaders:{...O.headers?{[v.route.id]:O.headers}:{}},matches:C,loaderData:{},errors:{[q.route.id]:O.error},loaderHeaders:{}}}else return{actionData:{[v.route.id]:O.data},actionHeaders:O.headers?{[v.route.id]:O.headers}:{},matches:C,loaderData:{},errors:null,statusCode:O.statusCode||200,loaderHeaders:{}};let D=new Request(y.url,{headers:y.headers,redirect:y.redirect,signal:y.signal});if(Zt(O)){let q=$?v:on(C,v.route.id);return{...await m(D,C,b,j,$,null,L,[q.route.id,O]),statusCode:Ae(O.error)?O.error.status:O.statusCode!=null?O.statusCode:500,actionData:null,actionHeaders:{...O.headers?{[v.route.id]:O.headers}:{}}}}return{...await m(D,C,b,j,$,null,L),actionData:{[v.route.id]:O.data},...O.statusCode?{statusCode:O.statusCode}:{},actionHeaders:O.headers?{[v.route.id]:O.headers}:{}}}async function m(y,C,v,b,j,$,I,L){let F=$!=null;if(F&&!($!=null&&$.route.loader)&&!($!=null&&$.route.lazy))throw dt(400,{method:y.method,pathname:new URL(y.url).pathname,routeId:$==null?void 0:$.route.id});let O;if($)O=ui(a,r,y,C,$,[],v);else{let q=L&&Zt(L[1])?C.findIndex(W=>W.route.id===L[0])-1:void 0;O=C.map((W,G)=>q!=null&&G>q?Fo(a,r,y,W,[],v,!1):Fo(a,r,y,W,[],v,(W.route.loader||W.route.lazy)!=null&&(!I||I(W))))}if(!b&&!O.some(q=>q.shouldLoad))return{matches:C,loaderData:{},errors:L&&Zt(L[1])?{[L[0]]:L[1].error}:null,statusCode:200,loaderHeaders:{}};let D=await g(y,O,F,v,b);return y.signal.aborted&&ni(y,F),{...vd(C,D,L,!0,j),matches:C}}async function g(y,C,v,b,j){let $=await pd(j||hd,y,C,null,b),I={};return await Promise.all(C.map(async L=>{if(!(L.route.id in $))return;let F=$[L.route.id];if(xd(F)){let O=F.result;throw yd(O,y,L.route.id,C,n)}if(_e(F.result)&&v)throw F;I[L.route.id]=await gd(F)})),I}return{dataRoutes:o,query:s,queryRoute:i}}function bl(e,t,r,n){let a=n||t._deepestRenderedBoundaryId||e[0].id;return{...t,statusCode:Ae(r)?r.status:500,errors:{[a]:r}}}function ni(e,t){if(e.signal.reason!==void 0)throw e.signal.reason;let r=t?"queryRoute":"query";throw new Error(`${r}() call aborted without an \`AbortSignal.reason\`: ${e.method} ${e.url}`)}function cd(e,t,r,n,a,o){let s,i;s=t,i=t[t.length-1];let l=ns(n||".",rs(s),Le(e.pathname,r)||e.pathname,o==="path");if(n==null&&(l.search=e.search,l.hash=e.hash),(n==null||n===""||n===".")&&i){let d=jl(l.search);if(i.route.index&&!d)l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index";else if(!i.route.index&&d){let m=new URLSearchParams(l.search),g=m.getAll("index");m.delete("index"),g.filter(C=>C).forEach(C=>m.append("index",C));let y=m.toString();l.search=y?`?${y}`:""}}return r!=="/"&&(l.pathname=l.pathname==="/"?r:pt([r,l.pathname])),Lt(l)}function ai(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}var oi=new WeakMap,as=({key:e,route:t,manifest:r,mapRouteProperties:n})=>{let a=r[t.id];if(se(a,"No route found in manifest"),!a.lazy||typeof a.lazy!="object")return;let o=a.lazy[e];if(!o)return;let s=oi.get(a);s||(s={},oi.set(a,s));let i=s[e];if(i)return i;let l=(async()=>{let d=Pc(e),g=a[e]!==void 0&&e!=="hasErrorBoundary";if(d)je(!d,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),s[e]=Promise.resolve();else if(g)je(!1,`Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let y=await o();y!=null&&(Object.assign(a,{[e]:y}),Object.assign(a,n(a)))}typeof a.lazy=="object"&&(a.lazy[e]=void 0,Object.values(a.lazy).every(y=>y===void 0)&&(a.lazy=void 0))})();return s[e]=l,l},si=new WeakMap;function dd(e,t,r,n,a){let o=r[e.id];if(se(o,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=si.get(o);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let g=(async()=>{se(typeof e.lazy=="function","No lazy route function found");let y=await e.lazy(),C={};for(let v in y){let b=y[v];if(b===void 0)continue;let j=Ic(v),I=o[v]!==void 0&&v!=="hasErrorBoundary";j?je(!j,"Route property "+v+" is not a supported property to be returned from a lazy route function. This property will be ignored."):I?je(!I,`Route "${o.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`):C[v]=b}Object.assign(o,C),Object.assign(o,{...n(o),lazy:void 0})})();return si.set(o,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let s=Object.keys(e.lazy),i=[],l;for(let m of s){if(a&&a.includes(m))continue;let g=as({key:m,route:e,manifest:r,mapRouteProperties:n});g&&(i.push(g),m===t&&(l=g))}let d=i.length>0?Promise.all(i).then(()=>{}):void 0;return d==null||d.catch(()=>{}),l==null||l.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:l}}function fd(e){return e!==void 0}function ii(e,t,r){let n=e.map(({route:a})=>{if(!(typeof a.lazy!="object"||!a.lazy.unstable_middleware))return as({key:"unstable_middleware",route:a,manifest:t,mapRouteProperties:r})}).filter(fd);return n.length>0?Promise.all(n):void 0}async function hd(e){let t=e.matches.filter(a=>a.shouldLoad),r={};return(await Promise.all(t.map(a=>a.resolve()))).forEach((a,o)=>{r[t[o].route.id]=a}),r}async function li(e,t,r,n){let{matches:a,request:o,params:s,context:i}=e,l={handlerResult:void 0};try{let d=a.flatMap(g=>g.route.unstable_middleware?g.route.unstable_middleware.map(y=>[g.route.id,y]):[]),m=await El({request:o,params:s,context:i},d,t,l,r);return t?m:l.handlerResult}catch(d){if(!l.middlewareError)throw d;return await n(l.middlewareError.error,l.middlewareError.routeId)}}async function El(e,t,r,n,a,o=0){let{request:s}=e;if(s.signal.aborted)throw s.signal.reason?s.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`);let i=t[o];if(!i)return n.handlerResult=await a(),n.handlerResult;let[l,d]=i,m=!1,g,y=async()=>{if(m)throw new Error("You may only call `next()` once per middleware");return m=!0,g=await El(e,t,r,n,a,o+1),g};try{let C=await d({request:e.request,params:e.params,context:e.context},y);return m?C===void 0?g:C:y()}catch(C){throw n.middlewareError?n.middlewareError.error!==C&&(n.middlewareError={routeId:l,error:C}):n.middlewareError={routeId:l,error:C},C}}function _l(e,t,r,n,a){let o=as({key:"unstable_middleware",route:n.route,manifest:t,mapRouteProperties:e}),s=dd(n.route,os(r.method)?"action":"loader",t,e,a);return{middleware:o,route:s.lazyRoutePromise,handler:s.lazyHandlerPromise}}function Fo(e,t,r,n,a,o,s,i=null){let l=!1,d=_l(e,t,r,n,a);return{...n,_lazyPromises:d,shouldLoad:s,unstable_shouldRevalidateArgs:i,unstable_shouldCallHandler(m){return l=!0,i?typeof m=="boolean"?ai(n,{...i,defaultShouldRevalidate:m}):ai(n,i):s},resolve(m){return l||s||m&&r.method==="GET"&&(n.route.lazy||n.route.loader)?md({request:r,match:n,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:m,scopedContext:o}):Promise.resolve({type:"data",result:void 0})}}}function ui(e,t,r,n,a,o,s,i=null){return n.map(l=>l.route.id!==a.route.id?{...l,shouldLoad:!1,unstable_shouldRevalidateArgs:i,unstable_shouldCallHandler:()=>!1,_lazyPromises:_l(e,t,r,l,o),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Fo(e,t,r,l,o,s,!0,i))}async function pd(e,t,r,n,a,o){r.some(d=>{var m;return(m=d._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(r.map(d=>{var m;return(m=d._lazyPromises)==null?void 0:m.middleware}));let s={request:t,params:r[0].params,context:a,matches:r},l=await e({...s,fetcherKey:n,unstable_runClientMiddleware:()=>{throw new Error("You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`")}});try{await Promise.all(r.flatMap(d=>{var m,g;return[(m=d._lazyPromises)==null?void 0:m.handler,(g=d._lazyPromises)==null?void 0:g.route]}))}catch{}return l}async function md({request:e,match:t,lazyHandlerPromise:r,lazyRoutePromise:n,handlerOverride:a,scopedContext:o}){let s,i,l=os(e.method),d=l?"action":"loader",m=g=>{let y,C=new Promise((j,$)=>y=$);i=()=>y(),e.signal.addEventListener("abort",i);let v=j=>typeof g!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${t.route.id}]`)):g({request:e,params:t.params,context:o},...j!==void 0?[j]:[]),b=(async()=>{try{return{type:"data",result:await(a?a($=>v($)):v())}}catch(j){return{type:"error",result:j}}})();return Promise.race([b,C])};try{let g=l?t.route.action:t.route.loader;if(r||n)if(g){let y,[C]=await Promise.all([m(g).catch(v=>{y=v}),r,n]);if(y!==void 0)throw y;s=C}else{await r;let y=l?t.route.action:t.route.loader;if(y)[s]=await Promise.all([m(y),n]);else if(d==="action"){let C=new URL(e.url),v=C.pathname+C.search;throw dt(405,{method:e.method,pathname:v,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(g)s=await m(g);else{let y=new URL(e.url),C=y.pathname+y.search;throw dt(404,{pathname:C})}}catch(g){return{type:"error",result:g}}finally{i&&e.signal.removeEventListener("abort",i)}return s}async function gd(e){var n,a,o,s,i,l;let{result:t,type:r}=e;if(_e(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:"error",error:m}}return r==="error"?{type:"error",error:new er(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:"data",data:d,statusCode:t.status,headers:t.headers}}return r==="error"?Uo(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(n=t.init)==null?void 0:n.status,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new er(((o=t.init)==null?void 0:o.status)||500,void 0,t.data),statusCode:Ae(t)?t.status:void 0,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Ae(t)?t.status:void 0}:Uo(t)?{type:"data",data:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function yd(e,t,r,n,a){let o=e.headers.get("Location");if(se(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!sd.test(o)){let s=n.slice(0,n.findIndex(i=>i.route.id===r)+1);o=cd(new URL(t.url),s,a,o),e.headers.set("Location",o)}return e}function vd(e,t,r,n=!1,a=!1){let o={},s=null,i,l=!1,d={},m=r&&Zt(r[1])?r[1].error:void 0;return e.forEach(g=>{if(!(g.route.id in t))return;let y=g.route.id,C=t[y];if(se(!$l(C),"Cannot handle redirect results in processLoaderData"),Zt(C)){let v=C.error;if(m!==void 0&&(v=m,m=void 0),s=s||{},a)s[y]=v;else{let b=on(e,y);s[b.route.id]==null&&(s[b.route.id]=v)}n||(o[y]=ld),l||(l=!0,i=Ae(C.error)?C.error.status:500),C.headers&&(d[y]=C.headers)}else o[y]=C.data,C.statusCode&&C.statusCode!==200&&!l&&(i=C.statusCode),C.headers&&(d[y]=C.headers)}),m!==void 0&&r&&(s={[r[0]]:m},r[2]&&(o[r[2]]=void 0)),{loaderData:o,errors:s,statusCode:i||200,loaderHeaders:d}}function on(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function ci(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function dt(e,{pathname:t,routeId:r,method:n,type:a,message:o}={}){let s="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(s="Bad Request",n&&t&&r?i=`You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(s="Forbidden",i=`Route "${r}" does not match URL "${t}"`):e===404?(s="Not Found",i=`No route matches URL "${t}"`):e===405&&(s="Method Not Allowed",n&&t&&r?i=`You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:n&&(i=`Invalid request method "${n.toUpperCase()}"`)),new er(e||500,s,new Error(i),!0)}function wd(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function xd(e){return _e(e.result)&&Cl.has(e.result.status)}function Zt(e){return e.type==="error"}function $l(e){return(e&&e.type)==="redirect"}function Uo(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function _e(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ma(e){return Cl.has(e)}function Na(e){return _e(e)&&Ma(e.status)&&e.headers.has("Location")}function di(e){return nd.has(e.toUpperCase())}function os(e){return td.has(e.toUpperCase())}function jl(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function fi(e,t){let r=typeof t=="string"?jr(t).search:t.search;if(e[e.length-1].route.index&&jl(r||""))return e[e.length-1];let n=wl(e);return n[n.length-1]}var tr=S.createContext(null);tr.displayName="DataRouter";var Rr=S.createContext(null);Rr.displayName="DataRouterState";var ss=S.createContext({isTransitioning:!1});ss.displayName="ViewTransition";var is=S.createContext(new Map);is.displayName="Fetchers";var Ea=S.createContext(null);Ea.displayName="Await";var Je=S.createContext(null);Je.displayName="Navigation";var Fa=S.createContext(null);Fa.displayName="Location";var Ze=S.createContext({outlet:null,matches:[],isDataRoute:!1});Ze.displayName="Route";var ls=S.createContext(null);ls.displayName="RouteError";function Cd(e,{relative:t}={}){se(pn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=S.useContext(Je),{hash:a,pathname:o,search:s}=gn(e,{relative:t}),i=o;return r!=="/"&&(i=o==="/"?r:pt([r,o])),n.createHref({pathname:i,search:s,hash:a})}function pn(){return S.useContext(Fa)!=null}function Me(){return se(pn(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Fa).location}var Rl="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pl(e){S.useContext(Je).static||S.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=S.useContext(Ze);return e?Td():Sd()}function Sd(){se(pn(),"useNavigate() may be used only in the context of a <Router> component.");let e=S.useContext(tr),{basename:t,navigator:r}=S.useContext(Je),{matches:n}=S.useContext(Ze),{pathname:a}=Me(),o=JSON.stringify(rs(n)),s=S.useRef(!1);return Pl(()=>{s.current=!0}),S.useCallback((l,d={})=>{if(je(s.current,Rl),!s.current)return;if(typeof l=="number"){r.go(l);return}let m=ns(l,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:pt([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,o,a,e])}var Al=S.createContext(null);function Il(){return S.useContext(Al)}function bd(e){let t=S.useContext(Ze).outlet;return t&&S.createElement(Al.Provider,{value:e},t)}function kl(){let{matches:e}=S.useContext(Ze),t=e[e.length-1];return t?t.params:{}}function gn(e,{relative:t}={}){let{matches:r}=S.useContext(Ze),{pathname:n}=Me(),a=JSON.stringify(rs(r));return S.useMemo(()=>ns(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function Tl(e,t,r,n){se(pn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=S.useContext(Je),{matches:s}=S.useContext(Ze),i=s[s.length-1],l=i?i.params:{},d=i?i.pathname:"/",m=i?i.pathnameBase:"/",g=i&&i.route;{let I=g&&g.path||"";Ol(d,!g||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let y=Me(),C;C=y;let v=C.pathname||"/",b=v;if(m!=="/"){let I=m.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(I.length).join("/")}let j=!o&&r&&r.matches&&r.matches.length>0?r.matches:$r(e,{pathname:b});return je(g||j!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),je(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Rd(j&&j.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:pt([m,a.encodeLocation?a.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?m:pt([m,a.encodeLocation?a.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,r,n)}function Ed(){let e=Ha(),t=Ae(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:o},"ErrorBoundary")," or"," ",S.createElement("code",{style:o},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),r?S.createElement("pre",{style:a},r):null,s)}var _d=S.createElement(Ed,null),$d=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?S.createElement(Ze.Provider,{value:this.props.routeContext},S.createElement(ls.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jd({routeContext:e,match:t,children:r}){let n=S.useContext(tr);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Ze.Provider,{value:e},r)}function Rd(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r==null?void 0:r.errors;if(o!=null){let l=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);se(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let s=!1,i=-1;if(r)for(let l=0;l<a.length;l++){let d=a[l];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(i=l),d.route.id){let{loaderData:m,errors:g}=r,y=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){s=!0,i>=0?a=a.slice(0,i+1):a=[a[0]];break}}}return a.reduceRight((l,d,m)=>{let g,y=!1,C=null,v=null;r&&(g=o&&d.route.id?o[d.route.id]:void 0,C=d.route.errorElement||_d,s&&(i<0&&m===0?(Ol("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,v=null):i===m&&(y=!0,v=d.route.hydrateFallbackElement||null)));let b=t.concat(a.slice(0,m+1)),j=()=>{let $;return g?$=C:y?$=v:d.route.Component?$=S.createElement(d.route.Component,null):d.route.element?$=d.route.element:$=l,S.createElement(jd,{match:d,routeContext:{outlet:l,matches:b,isDataRoute:r!=null},children:$})};return r&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?S.createElement($d,{location:r.location,revalidation:r.revalidation,component:C,error:g,children:j(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):j()},null)}function us(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pd(e){let t=S.useContext(tr);return se(t,us(e)),t}function Pr(e){let t=S.useContext(Rr);return se(t,us(e)),t}function Ad(e){let t=S.useContext(Ze);return se(t,us(e)),t}function yn(e){let t=Ad(e),r=t.matches[t.matches.length-1];return se(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Id(){return yn("useRouteId")}function Ar(){return Pr("useNavigation").navigation}function cs(){let{matches:e,loaderData:t}=Pr("useMatches");return S.useMemo(()=>e.map(r=>Dc(r,t)),[e,t])}function Re(){let e=Pr("useLoaderData"),t=yn("useLoaderData");return e.loaderData[t]}function kd(e){return Pr("useRouteLoaderData").loaderData[e]}function Ua(){let e=Pr("useActionData"),t=yn("useLoaderData");return e.actionData?e.actionData[t]:void 0}function Ha(){var n;let e=S.useContext(ls),t=Pr("useRouteError"),r=yn("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Dl(){let e=S.useContext(Ea);return e==null?void 0:e._data}function Td(){let{router:e}=Pd("useNavigate"),t=yn("useNavigate"),r=S.useRef(!1);return Pl(()=>{r.current=!0}),S.useCallback(async(a,o={})=>{je(r.current,Rl),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var hi={};function Ol(e,t,r){!t&&!hi[e]&&(hi[e]=!0,je(!1,r))}var pi={};function Ll(e,t){!e&&!pi[t]&&(pi[t]=!0,console.warn(t))}function Dd(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&je(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:S.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&je(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:S.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&je(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}S.memo(Od);function Od({routes:e,future:t,state:r}){return Tl(e,void 0,r,t)}function Ml(e){return bd(e.context)}function Ld({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:o=!1}){se(!pn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),i=S.useMemo(()=>({basename:s,navigator:a,static:o,future:{}}),[s,a,o]);typeof r=="string"&&(r=jr(r));let{pathname:l="/",search:d="",hash:m="",state:g=null,key:y="default"}=r,C=S.useMemo(()=>{let v=Le(l,s);return v==null?null:{location:{pathname:v,search:d,hash:m,state:g,key:y},navigationType:n}},[s,l,d,m,g,y,n]);return je(C!=null,`<Router basename="${s}"> is not able to match the URL "${l}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:S.createElement(Je.Provider,{value:i},S.createElement(Fa.Provider,{children:t,value:C}))}function vn({children:e,errorElement:t,resolve:r}){return S.createElement(Md,{resolve:r,errorElement:t},S.createElement(Nd,null,e))}var Md=class extends S.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,a=0;if(!(r instanceof Promise))a=1,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});else if(this.state.error){a=2;let o=this.state.error;n=Promise.reject().catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>o})}else r._tracked?(n=r,a="_error"in n?2:"_data"in n?1:0):(a=0,Object.defineProperty(r,"_tracked",{get:()=>!0}),n=r.then(o=>Object.defineProperty(r,"_data",{get:()=>o}),o=>Object.defineProperty(r,"_error",{get:()=>o})));if(a===2&&!t)throw n._error;if(a===2)return S.createElement(Ea.Provider,{value:n,children:t});if(a===1)return S.createElement(Ea.Provider,{value:n,children:e});throw n}};function Nd({children:e}){let t=Dl(),r=typeof e=="function"?e(t):e;return S.createElement(S.Fragment,null,r)}var ha="get",pa="application/x-www-form-urlencoded";function Ba(e){return e!=null&&typeof e.tagName=="string"}function Fd(e){return Ba(e)&&e.tagName.toLowerCase()==="button"}function Ud(e){return Ba(e)&&e.tagName.toLowerCase()==="form"}function Hd(e){return Ba(e)&&e.tagName.toLowerCase()==="input"}function Bd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vd(e,t){return e.button===0&&(!t||t==="_self")&&!Bd(e)}var ia=null;function qd(){if(ia===null)try{new FormData(document.createElement("form"),0),ia=!1}catch{ia=!0}return ia}var zd=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bo(e){return e!=null&&!zd.has(e)?(je(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pa}"`),null):e}function Wd(e,t){let r,n,a,o,s;if(Ud(e)){let i=e.getAttribute("action");n=i?Le(i,t):null,r=e.getAttribute("method")||ha,a=bo(e.getAttribute("enctype"))||pa,o=new FormData(e)}else if(Fd(e)||Hd(e)&&(e.type==="submit"||e.type==="image")){let i=e.form;if(i==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(n=l?Le(l,t):null,r=e.getAttribute("formmethod")||i.getAttribute("method")||ha,a=bo(e.getAttribute("formenctype"))||bo(i.getAttribute("enctype"))||pa,o=new FormData(i,e),!qd()){let{name:d,type:m,value:g}=e;if(m==="image"){let y=d?`${d}.`:"";o.append(`${y}x`,"0"),o.append(`${y}y`,"0")}else d&&o.append(d,g)}}else{if(Ba(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ha,n=null,a=pa,s=e}return o&&a==="text/plain"&&(s=o,o=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:o,body:s}}function wn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Gd(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yd(e,t,r){let n=e.map(o=>{var l;let s=t[o.route.id],i=r.routes[o.route.id];return[i&&i.css?i.css.map(d=>({rel:"stylesheet",href:d})):[],((l=s==null?void 0:s.links)==null?void 0:l.call(s))||[]]}).flat(2),a=ds(e,r);return Fl(n,a)}function Nl(e){return e!=null&&typeof e.page=="string"}function Qd(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Kd(e,t,r){let n=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let s=await Gd(o,r);return s.links?s.links():[]}return[]}));return Fl(n.flat(1).filter(Qd).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function mi(e,t,r,n,a,o){let s=(l,d)=>r[d]?l.route.id!==r[d].route.id:!0,i=(l,d)=>{var m;return r[d].pathname!==l.pathname||((m=r[d].route.path)==null?void 0:m.endsWith("*"))&&r[d].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,d)=>s(l,d)||i(l,d)):o==="data"?t.filter((l,d)=>{var g;let m=n.routes[l.route.id];if(!m||!m.hasLoader)return!1;if(s(l,d)||i(l,d))return!0;if(l.route.shouldRevalidate){let y=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((g=r[0])==null?void 0:g.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function ds(e,t,{includeHydrateFallback:r}={}){return Jd(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Jd(e){return[...new Set(e)]}function Zd(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Fl(e,t){let r=new Set,n=new Set(t);return e.reduce((a,o)=>{if(t&&!Nl(o)&&o.as==="script"&&o.href&&n.has(o.href))return a;let i=JSON.stringify(Zd(o));return r.has(i)||(r.add(i),a.push({key:i,link:o})),a},[])}var Xd={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},ef=/[&><\u2028\u2029]/g;function tf(e){return e.replace(ef,t=>Xd[t])}function gi(e){return{__html:e}}var Ul=-1,Hl=-2,Bl=-3,Vl=-4,fs=-5,ql=-6,zl=-7,Wl="B",Gl="D",Sr="E",Ho="M",Yl="N",br="P",Ql="R",Bo="S",Kl="Y",Jl="U",Vo="Z",Zl=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};function rf(){const e=new TextDecoder;let t="";return new TransformStream({transform(r,n){const a=e.decode(r,{stream:!0}),o=(t+a).split(`
`);t=o.pop()||"";for(const s of o)n.enqueue(s)},flush(r){t&&r.enqueue(t)}})}function Ke(e){const{indices:t}=this,r=t.get(e);if(r)return[r];if(e===void 0)return zl;if(e===null)return fs;if(Number.isNaN(e))return Hl;if(e===Number.POSITIVE_INFINITY)return ql;if(e===Number.NEGATIVE_INFINITY)return Bl;if(e===0&&1/e<0)return Vl;const n=this.index++;return t.set(e,n),nf.call(this,e,n),n}function nf(e,t){const{deferred:r,plugins:n,postPlugins:a}=this,o=this.stringified,s=[[e,t]];for(;s.length>0;){const[i,l]=s.pop(),d=g=>Object.keys(g).map(y=>`"_${Ke.call(this,y)}":${Ke.call(this,g[y])}`).join(",");let m=null;switch(typeof i){case"boolean":case"number":case"string":o[l]=JSON.stringify(i);break;case"bigint":o[l]=`["${Wl}","${i}"]`;break;case"symbol":{const g=Symbol.keyFor(i);g?o[l]=`["${Kl}",${JSON.stringify(g)}]`:m=new Error("Cannot encode symbol unless created with Symbol.for()");break}case"object":{if(!i){o[l]=`${fs}`;break}const g=Array.isArray(i);let y=!1;if(!g&&n)for(const C of n){const v=C(i);if(Array.isArray(v)){y=!0;const[b,...j]=v;o[l]=`[${JSON.stringify(b)}`,j.length>0&&(o[l]+=`,${j.map($=>Ke.call(this,$)).join(",")}`),o[l]+="]";break}}if(!y){let C=g?"[":"{";if(g){for(let v=0;v<i.length;v++)C+=(v?",":"")+(v in i?Ke.call(this,i[v]):Ul);o[l]=`${C}]`}else i instanceof Date?o[l]=`["${Gl}",${i.getTime()}]`:i instanceof URL?o[l]=`["${Jl}",${JSON.stringify(i.href)}]`:i instanceof RegExp?o[l]=`["${Ql}",${JSON.stringify(i.source)},${JSON.stringify(i.flags)}]`:i instanceof Set?i.size>0?o[l]=`["${Bo}",${[...i].map(v=>Ke.call(this,v)).join(",")}]`:o[l]=`["${Bo}"]`:i instanceof Map?i.size>0?o[l]=`["${Ho}",${[...i].flatMap(([v,b])=>[Ke.call(this,v),Ke.call(this,b)]).join(",")}]`:o[l]=`["${Ho}"]`:i instanceof Promise?(o[l]=`["${br}",${l}]`,r[l]=i):i instanceof Error?(o[l]=`["${Sr}",${JSON.stringify(i.message)}`,i.name!=="Error"&&(o[l]+=`,${JSON.stringify(i.name)}`),o[l]+="]"):Object.getPrototypeOf(i)===null?o[l]=`["${Yl}",{${d(i)}}]`:of(i)?o[l]=`{${d(i)}}`:m=new Error("Cannot encode object with prototype")}break}default:{const g=Array.isArray(i);let y=!1;if(!g&&n)for(const C of n){const v=C(i);if(Array.isArray(v)){y=!0;const[b,...j]=v;o[l]=`[${JSON.stringify(b)}`,j.length>0&&(o[l]+=`,${j.map($=>Ke.call(this,$)).join(",")}`),o[l]+="]";break}}y||(m=new Error("Cannot encode function or unexpected type"))}}if(m){let g=!1;if(a)for(const y of a){const C=y(i);if(Array.isArray(C)){g=!0;const[v,...b]=C;o[l]=`[${JSON.stringify(v)}`,b.length>0&&(o[l]+=`,${b.map(j=>Ke.call(this,j)).join(",")}`),o[l]+="]";break}}if(!g)throw m}}}var af=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function of(e){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===af}var Eo=typeof window<"u"?window:typeof globalThis<"u"?globalThis:void 0;function qo(e){const{hydrated:t,values:r}=this;if(typeof e=="number")return yi.call(this,e);if(!Array.isArray(e)||!e.length)throw new SyntaxError;const n=r.length;for(const a of e)r.push(a);return t.length=r.length,yi.call(this,n)}function yi(e){const{hydrated:t,values:r,deferred:n,plugins:a}=this;let o;const s=[[e,l=>{o=l}]];let i=[];for(;s.length>0;){const[l,d]=s.pop();switch(l){case zl:d(void 0);continue;case fs:d(null);continue;case Hl:d(NaN);continue;case ql:d(1/0);continue;case Bl:d(-1/0);continue;case Vl:d(-0);continue}if(t[l]){d(t[l]);continue}const m=r[l];if(!m||typeof m!="object"){t[l]=m,d(m);continue}if(Array.isArray(m))if(typeof m[0]=="string"){const[g,y,C]=m;switch(g){case Gl:d(t[l]=new Date(y));continue;case Jl:d(t[l]=new URL(y));continue;case Wl:d(t[l]=BigInt(y));continue;case Ql:d(t[l]=new RegExp(y,C));continue;case Kl:d(t[l]=Symbol.for(y));continue;case Bo:const v=new Set;t[l]=v;for(let F=m.length-1;F>0;F--)s.push([m[F],O=>{v.add(O)}]);d(v);continue;case Ho:const b=new Map;t[l]=b;for(let F=m.length-2;F>0;F-=2){const O=[];s.push([m[F+1],D=>{O[1]=D}]),s.push([m[F],D=>{O[0]=D}]),i.push(()=>{b.set(O[0],O[1])})}d(b);continue;case Yl:const j=Object.create(null);t[l]=j;for(const F of Object.keys(y).reverse()){const O=[];s.push([y[F],D=>{O[1]=D}]),s.push([Number(F.slice(1)),D=>{O[0]=D}]),i.push(()=>{j[O[0]]=O[1]})}d(j);continue;case br:if(t[y])d(t[l]=t[y]);else{const F=new Zl;n[y]=F,d(t[l]=F.promise)}continue;case Sr:const[,$,I]=m;let L=I&&Eo&&Eo[I]?new Eo[I]($):new Error($);t[l]=L,d(L);continue;case Vo:d(t[l]=t[y]);continue;default:if(Array.isArray(a)){const F=[],O=m.slice(1);for(let D=0;D<O.length;D++){const H=O[D];s.push([H,q=>{F[D]=q}])}i.push(()=>{for(const D of a){const H=D(m[0],...F);if(H){d(t[l]=H.value);return}}throw new SyntaxError});continue}throw new SyntaxError}}else{const g=[];t[l]=g;for(let y=0;y<m.length;y++){const C=m[y];C!==Ul&&s.push([C,v=>{g[y]=v}])}d(g);continue}else{const g={};t[l]=g;for(const y of Object.keys(m).reverse()){const C=[];s.push([m[y],v=>{C[1]=v}]),s.push([Number(y.slice(1)),v=>{C[0]=v}]),i.push(()=>{g[C[0]]=C[1]})}d(g);continue}}for(;i.length>0;)i.pop()();return o}async function sf(e,t){const{plugins:r}=t??{},n=new Zl,a=e.pipeThrough(rf()).getReader(),o={values:[],hydrated:[],deferred:{},plugins:r},s=await lf.call(o,a);let i=n.promise;return s.done?n.resolve():i=uf.call(o,a).then(n.resolve).catch(l=>{for(const d of Object.values(o.deferred))d.reject(l);n.reject(l)}),{done:i.then(()=>a.closed),value:s.value}}async function lf(e){const t=await e.read();if(!t.value)throw new SyntaxError;let r;try{r=JSON.parse(t.value)}catch{throw new SyntaxError}return{done:t.done,value:qo.call(this,r)}}async function uf(e){let t=await e.read();for(;!t.done;){if(!t.value)continue;const r=t.value;switch(r[0]){case br:{const n=r.indexOf(":"),a=Number(r.slice(1,n)),o=this.deferred[a];if(!o)throw new Error(`Deferred ID ${a} not found in stream`);const s=r.slice(n+1);let i;try{i=JSON.parse(s)}catch{throw new SyntaxError}const l=qo.call(this,i);o.resolve(l);break}case Sr:{const n=r.indexOf(":"),a=Number(r.slice(1,n)),o=this.deferred[a];if(!o)throw new Error(`Deferred ID ${a} not found in stream`);const s=r.slice(n+1);let i;try{i=JSON.parse(s)}catch{throw new SyntaxError}const l=qo.call(this,i);o.reject(l);break}default:throw new SyntaxError}t=await e.read()}}function cf(e,t){const{plugins:r,postPlugins:n,signal:a}=t??{},o={deferred:{},index:0,indices:new Map,stringified:[],plugins:r,postPlugins:n,signal:a},s=new TextEncoder;let i=0;return new ReadableStream({async start(d){const m=Ke.call(o,e);if(Array.isArray(m))throw new Error("This should never happen");m<0?d.enqueue(s.encode(`${m}
`)):(d.enqueue(s.encode(`[${o.stringified.join(",")}]
`)),i=o.stringified.length-1);const g=new WeakSet;if(Object.keys(o.deferred).length){let y;const C=new Promise((v,b)=>{if(y=v,a){const j=()=>b(a.reason||new Error("Signal was aborted."));a.aborted?j():a.addEventListener("abort",$=>{j()})}});for(;Object.keys(o.deferred).length>0;){for(const[v,b]of Object.entries(o.deferred))g.has(b)||g.add(o.deferred[Number(v)]=Promise.race([C,b]).then(j=>{const $=Ke.call(o,j);if(Array.isArray($))d.enqueue(s.encode(`${br}${v}:[["${Vo}",${$[0]}]]
`)),o.index++,i++;else if($<0)d.enqueue(s.encode(`${br}${v}:${$}
`));else{const I=o.stringified.slice(i+1).join(",");d.enqueue(s.encode(`${br}${v}:[${I}]
`)),i=o.stringified.length-1}},j=>{(!j||typeof j!="object"||!(j instanceof Error))&&(j=new Error("An unknown error occurred"));const $=Ke.call(o,j);if(Array.isArray($))d.enqueue(s.encode(`${Sr}${v}:[["${Vo}",${$[0]}]]
`)),o.index++,i++;else if($<0)d.enqueue(s.encode(`${Sr}${v}:${$}
`));else{const I=o.stringified.slice(i+1).join(",");d.enqueue(s.encode(`${Sr}${v}:[${I}]
`)),i=o.stringified.length-1}}).finally(()=>{delete o.deferred[Number(v)]}));await Promise.race(Object.values(o.deferred))}y()}await Promise.all(Object.values(o.deferred)),d.close()}})}var Mt=Symbol("SingleFetchRedirect"),un=202,df=new Set([100,101,204,205]);function Xl({context:e,identifier:t,reader:r,textDecoder:n,nonce:a}){if(!e.renderMeta||!e.renderMeta.didRenderScripts)return null;e.renderMeta.streamCache||(e.renderMeta.streamCache={});let{streamCache:o}=e.renderMeta,s=o[t];if(s||(s=o[t]=r.read().then(m=>{o[t].result={done:m.done,value:n.decode(m.value,{stream:!0})}}).catch(m=>{o[t].error=m})),s.error)throw s.error;if(s.result===void 0)throw s;let{done:i,value:l}=s.result,d=l?S.createElement("script",{nonce:a,dangerouslySetInnerHTML:{__html:`window.__reactRouterContext.streamController.enqueue(${tf(JSON.stringify(l))});`}}):null;return i?S.createElement(S.Fragment,null,d,S.createElement("script",{nonce:a,dangerouslySetInnerHTML:{__html:"window.__reactRouterContext.streamController.close();"}})):S.createElement(S.Fragment,null,d,S.createElement(S.Suspense,null,S.createElement(Xl,{context:e,identifier:t+1,reader:r,textDecoder:n,nonce:a})))}function ff(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&Le(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function hf(e,t){return sf(e,{plugins:[(r,...n)=>{if(r==="SanitizedError"){let[a,o,s]=n,i=Error;a&&a in t&&typeof t[a]=="function"&&(i=t[a]);let l=new i(o);return l.stack=s,{value:l}}if(r==="ErrorResponse"){let[a,o,s]=n;return{value:new er(o,s,a)}}if(r==="SingleFetchRedirect")return{value:{[Mt]:n[0]}};if(r==="SingleFetchClassInstance")return{value:n[0]};if(r==="SingleFetchFallback")return{value:void 0}}]})}var pf=class extends S.Component{constructor(e){super(e),this.state={error:e.error||null,location:e.location}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error||null,location:e.location}:{error:e.error||t.error,location:t.location}}render(){return this.state.error?S.createElement(eu,{error:this.state.error,isOutsideRemixApp:!0}):this.props.children}};function eu({error:e,isOutsideRemixApp:t}){console.error(e);let r=S.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `}});if(Ae(e))return S.createElement(zo,{title:"Unhandled Thrown Response!"},S.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),r);let n;if(e instanceof Error)n=e;else{let a=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);n=new Error(a)}return S.createElement(zo,{title:"Application Error!",isOutsideRemixApp:t},S.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),S.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},n.stack),r)}function zo({title:e,renderScripts:t,isOutsideRemixApp:r,children:n}){var o;let{routeModules:a}=Ir();return(o=a.root)!=null&&o.Layout&&!r?n:S.createElement("html",{lang:"en"},S.createElement("head",null,S.createElement("meta",{charSet:"utf-8"}),S.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),S.createElement("title",null,e)),S.createElement("body",null,S.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},n,t?S.createElement(nu,null):null)))}function mf(){return S.createElement(zo,{title:"Loading...",renderScripts:!0},S.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `}}))}function gf(e){let t={};return Object.values(e).forEach(r=>{if(r){let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}}),t}function yf(e,t,r){let n=vf(t),a=t.HydrateFallback&&(!r||e.id==="root")?t.HydrateFallback:e.id==="root"?mf:void 0,o=t.ErrorBoundary?t.ErrorBoundary:e.id==="root"?()=>S.createElement(eu,{error:Ha()}):void 0;return e.id==="root"&&t.Layout?{...n?{element:S.createElement(t.Layout,null,S.createElement(n,null))}:{Component:n},...o?{errorElement:S.createElement(t.Layout,null,S.createElement(o,null))}:{ErrorBoundary:o},...a?{hydrateFallbackElement:S.createElement(t.Layout,null,S.createElement(a,null))}:{HydrateFallback:a}}:{Component:n,ErrorBoundary:o,HydrateFallback:a}}function tu(e,t,r,n,a="",o=gf(e),s=Promise.resolve({Component:()=>null})){return(o[a]||[]).map(i=>{let l=t[i.id];wn(l,"No `routeModule` available to create server routes");let d={...yf(i,l,n),caseSensitive:i.caseSensitive,id:i.id,index:i.index,path:i.path,handle:l.handle,lazy:n?()=>s:void 0,loader:i.hasLoader||i.hasClientLoader?()=>null:void 0},m=tu(e,t,r,n,i.id,o,s);return m.length>0&&(d.children=m),d})}function vf(e){if(e.default==null)return;if(!(typeof e.default=="object"&&Object.keys(e.default).length===0))return e.default}function wf(e,t,r,n){return n&&e!=="root"||t!=null&&(t.hydrate===!0||r!==!0)}function xf(e,t){return e.mode==="lazy"&&t===!0}function Cf({sri:e,...t},r){let n=new Set(r.state.matches.map(i=>i.route.id)),a=r.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach(i=>{let l=$r(r.routes,i,r.basename);l&&l.forEach(d=>n.add(d.route.id))});let s=[...n].reduce((i,l)=>Object.assign(i,{[l]:t.routes[l]}),{});return{...t,routes:s,sri:e?!0:void 0}}function Sf(e,t){let r=e||"/__manifest";return t==null?r:`${t}${r}`.replace(/\/+/g,"/")}function hs(){let e=S.useContext(tr);return wn(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Va(){let e=S.useContext(Rr);return wn(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xn=S.createContext(void 0);xn.displayName="FrameworkContext";function Ir(){let e=S.useContext(xn);return wn(e,"You must render this element inside a <HydratedRouter> element"),e}function bf(e,t){let r=S.useContext(xn),[n,a]=S.useState(!1),[o,s]=S.useState(!1),{onFocus:i,onBlur:l,onMouseEnter:d,onMouseLeave:m,onTouchStart:g}=t,y=S.useRef(null);S.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let b=$=>{$.forEach(I=>{s(I.isIntersecting)})},j=new IntersectionObserver(b,{threshold:.5});return y.current&&j.observe(y.current),()=>{j.disconnect()}}},[e]),S.useEffect(()=>{if(n){let b=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(b)}}},[n]);let C=()=>{a(!0)},v=()=>{a(!1),s(!1)};return r?e!=="intent"?[o,y,{}]:[o,y,{onFocus:en(i,C),onBlur:en(l,v),onMouseEnter:en(d,C),onMouseLeave:en(m,v),onTouchStart:en(g,C)}]:[!1,y,{}]}function en(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function ps(e,t,r){if(r&&!ma)return[e[0]];if(t){let n=e.findIndex(a=>t[a.route.id]!==void 0);return e.slice(0,n+1)}return e}function Ef(){let{isSpaMode:e,manifest:t,routeModules:r,criticalCss:n}=Ir(),{errors:a,matches:o}=Va(),s=ps(o,a,e),i=S.useMemo(()=>Yd(s,r,t),[s,r,t]);return S.createElement(S.Fragment,null,typeof n=="string"?S.createElement("style",{dangerouslySetInnerHTML:{__html:n}}):null,typeof n=="object"?S.createElement("link",{rel:"stylesheet",href:n.href}):null,i.map(({key:l,link:d})=>Nl(d)?S.createElement(ru,{key:l,...d}):S.createElement("link",{key:l,...d})))}function ru({page:e,...t}){let{router:r}=hs(),n=S.useMemo(()=>$r(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?S.createElement($f,{page:e,matches:n,...t}):null}function _f(e){let{manifest:t,routeModules:r}=Ir(),[n,a]=S.useState([]);return S.useEffect(()=>{let o=!1;return Kd(e,t,r).then(s=>{o||a(s)}),()=>{o=!0}},[e,t,r]),n}function $f({page:e,matches:t,...r}){let n=Me(),{manifest:a,routeModules:o}=Ir(),{basename:s}=hs(),{loaderData:i,matches:l}=Va(),d=S.useMemo(()=>mi(e,t,l,a,n,"data"),[e,t,l,a,n]),m=S.useMemo(()=>mi(e,t,l,a,n,"assets"),[e,t,l,a,n]),g=S.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let v=new Set,b=!1;if(t.forEach($=>{var L;let I=a.routes[$.route.id];!I||!I.hasLoader||(!d.some(F=>F.route.id===$.route.id)&&$.route.id in i&&((L=o[$.route.id])!=null&&L.shouldRevalidate)||I.hasClientLoader?b=!0:v.add($.route.id))}),v.size===0)return[];let j=ff(e,s);return b&&v.size>0&&j.searchParams.set("_routes",t.filter($=>v.has($.route.id)).map($=>$.route.id).join(",")),[j.pathname+j.search]},[s,i,n,a,d,t,e,o]),y=S.useMemo(()=>ds(m,a),[m,a]),C=_f(m);return S.createElement(S.Fragment,null,g.map(v=>S.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...r})),y.map(v=>S.createElement("link",{key:v,rel:"modulepreload",href:v,...r})),C.map(({key:v,link:b})=>S.createElement("link",{key:v,...b})))}function jf(){let{isSpaMode:e,routeModules:t}=Ir(),{errors:r,matches:n,loaderData:a}=Va(),o=Me(),s=ps(n,r,e),i=null;r&&(i=r[s[s.length-1].route.id]);let l=[],d=null,m=[];for(let g=0;g<s.length;g++){let y=s[g],C=y.route.id,v=a[C],b=y.params,j=t[C],$=[],I={id:C,data:v,meta:[],params:y.params,pathname:y.pathname,handle:y.route.handle,error:i};if(m[g]=I,j!=null&&j.meta?$=typeof j.meta=="function"?j.meta({data:v,params:b,location:o,matches:m,error:i}):Array.isArray(j.meta)?[...j.meta]:j.meta:d&&($=[...d]),$=$||[],!Array.isArray($))throw new Error("The route at "+y.route.path+` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);I.meta=$,m[g]=I,l=[...$],d=l}return S.createElement(S.Fragment,null,l.flat().map(g=>{if(!g)return null;if("tagName"in g){let{tagName:y,...C}=g;if(!Rf(y))return console.warn(`A meta object uses an invalid tagName: ${y}. Expected either 'link' or 'meta'`),null;let v=y;return S.createElement(v,{key:JSON.stringify(C),...C})}if("title"in g)return S.createElement("title",{key:"title"},String(g.title));if("charset"in g&&(g.charSet??(g.charSet=g.charset),delete g.charset),"charSet"in g&&g.charSet!=null)return typeof g.charSet=="string"?S.createElement("meta",{key:"charSet",charSet:g.charSet}):null;if("script:ld+json"in g)try{let y=JSON.stringify(g["script:ld+json"]);return S.createElement("script",{key:`script:ld+json:${y}`,type:"application/ld+json",dangerouslySetInnerHTML:{__html:y}})}catch{return null}return S.createElement("meta",{key:JSON.stringify(g),...g})}))}function Rf(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}var ma=!1;function nu(e){let{manifest:t,serverHandoffString:r,isSpaMode:n,renderMeta:a,routeDiscovery:o,ssr:s}=Ir(),{router:i,static:l,staticContext:d}=hs(),{matches:m}=Va(),g=xf(o,s);a&&(a.didRenderScripts=!0);let y=ps(m,null,n);S.useEffect(()=>{ma=!0},[]);let C=S.useMemo(()=>{var L;let $=d?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",I=l?`${(L=t.hmr)!=null&&L.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${g?"":`import ${JSON.stringify(t.url)}`};
${y.map((F,O)=>{let D=`route${O}`,H=t.routes[F.route.id];wn(H,`Route ${F.route.id} not found in manifest`);let{clientActionModule:q,clientLoaderModule:W,clientMiddlewareModule:G,hydrateFallbackModule:Z,module:ce}=H,z=[...q?[{module:q,varName:`${D}_clientAction`}]:[],...W?[{module:W,varName:`${D}_clientLoader`}]:[],...G?[{module:G,varName:`${D}_clientMiddleware`}]:[],...Z?[{module:Z,varName:`${D}_HydrateFallback`}]:[],{module:ce,varName:`${D}_main`}];if(z.length===1)return`import * as ${D} from ${JSON.stringify(ce)};`;let J=z.map(de=>`import * as ${de.varName} from "${de.module}";`).join(`
`),ue=`const ${D} = {${z.map(de=>`...${de.varName}`).join(",")}};`;return[J,ue].join(`
`)}).join(`
`)}
  ${g?`window.__reactRouterManifest = ${JSON.stringify(Cf(t,i),null,2)};`:""}
  window.__reactRouterRouteModules = {${y.map((F,O)=>`${JSON.stringify(F.route.id)}:route${O}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`:" ";return S.createElement(S.Fragment,null,S.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:gi($),type:void 0}),S.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:gi(I),type:"module",async:!0}))},[]),v=ma?[]:Pf(t.entry.imports.concat(ds(y,t,{includeHydrateFallback:!0}))),b=typeof t.sri=="object"?t.sri:{};return ma?null:S.createElement(S.Fragment,null,typeof t.sri=="object"?S.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,g?null:S.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),S.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),v.map(j=>S.createElement("link",{key:j,rel:"modulepreload",href:j,crossOrigin:e.crossOrigin,integrity:b[j],suppressHydrationWarning:!0})),C)}function Pf(e){return[...new Set(e)]}function Af(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var au=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{au&&(window.__reactRouterVersion="7.6.0")}catch{}var ou=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=S.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:o,replace:s,state:i,target:l,to:d,preventScrollReset:m,viewTransition:g,...y},C){let{basename:v}=S.useContext(Je),b=typeof d=="string"&&ou.test(d),j,$=!1;if(typeof d=="string"&&b&&(j=d,au))try{let W=new URL(window.location.href),G=d.startsWith("//")?new URL(W.protocol+d):new URL(d),Z=Le(G.pathname,v);G.origin===W.origin&&Z!=null?d=Z+G.search+G.hash:$=!0}catch{je(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=Cd(d,{relative:a}),[L,F,O]=bf(n,y),D=If(d,{replace:s,state:i,target:l,preventScrollReset:m,relative:a,viewTransition:g});function H(W){t&&t(W),W.defaultPrevented||D(W)}let q=S.createElement("a",{...y,...O,href:j||I,onClick:$||o?t:H,ref:Af(C,F),target:l,"data-discover":!b&&r==="render"?"true":void 0});return L&&!b?S.createElement(S.Fragment,null,q,S.createElement(ru,{page:I})):q});Ce.displayName="Link";var Et=S.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:o,to:s,viewTransition:i,children:l,...d},m){let g=gn(s,{relative:d.relative}),y=Me(),C=S.useContext(Rr),{navigator:v,basename:b}=S.useContext(Je),j=C!=null&&Nf(g)&&i===!0,$=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,I=y.pathname,L=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(I=I.toLowerCase(),L=L?L.toLowerCase():null,$=$.toLowerCase()),L&&b&&(L=Le(L,b)||L);const F=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let O=I===$||!a&&I.startsWith($)&&I.charAt(F)==="/",D=L!=null&&(L===$||!a&&L.startsWith($)&&L.charAt($.length)==="/"),H={isActive:O,isPending:D,isTransitioning:j},q=O?t:void 0,W;typeof n=="function"?W=n(H):W=[n,O?"active":null,D?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let G=typeof o=="function"?o(H):o;return S.createElement(Ce,{...d,"aria-current":q,className:W,ref:m,style:G,to:s,viewTransition:i},typeof l=="function"?l(H):l)});Et.displayName="NavLink";var kr=S.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:o,method:s=ha,action:i,onSubmit:l,relative:d,preventScrollReset:m,viewTransition:g,...y},C)=>{let v=lu(),b=Df(i,{relative:d}),j=s.toLowerCase()==="get"?"get":"post",$=typeof i=="string"&&ou.test(i),I=L=>{if(l&&l(L),L.defaultPrevented)return;L.preventDefault();let F=L.nativeEvent.submitter,O=(F==null?void 0:F.getAttribute("formmethod"))||s;v(F||L.currentTarget,{fetcherKey:t,method:O,navigate:r,replace:a,state:o,relative:d,preventScrollReset:m,viewTransition:g})};return S.createElement("form",{ref:C,method:j,action:b,onSubmit:n?l:I,...y,"data-discover":!$&&e==="render"?"true":void 0})});kr.displayName="Form";function su({getKey:e,storageKey:t,...r}){let n=S.useContext(xn),{basename:a}=S.useContext(Je),o=Me(),s=cs();Lf({getKey:e,storageKey:t});let i=S.useMemo(()=>{if(!n||!e)return null;let d=Go(o,s,a,e);return d!==o.key?d:null},[]);if(!n||n.isSpaMode)return null;let l=((d,m)=>{if(!window.history.state||!window.history.state.key){let g=Math.random().toString(32).slice(2);window.history.replaceState({key:g},"")}try{let y=JSON.parse(sessionStorage.getItem(d)||"{}")[m||window.history.state.key];typeof y=="number"&&window.scrollTo(0,y)}catch(g){console.error(g),sessionStorage.removeItem(d)}}).toString();return S.createElement("script",{...r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${l})(${JSON.stringify(t||Wo)}, ${JSON.stringify(i)})`}})}su.displayName="ScrollRestoration";function iu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qa(e){let t=S.useContext(tr);return se(t,iu(e)),t}function ms(e){let t=S.useContext(Rr);return se(t,iu(e)),t}function If(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:o,viewTransition:s}={}){let i=mn(),l=Me(),d=gn(e,{relative:o});return S.useCallback(m=>{if(Vd(m,t)){m.preventDefault();let g=r!==void 0?r:Lt(l)===Lt(d);i(e,{replace:g,state:n,preventScrollReset:a,relative:o,viewTransition:s})}},[l,i,d,r,n,t,e,a,o,s])}var kf=0,Tf=()=>`__${String(++kf)}__`;function lu(){let{router:e}=qa("useSubmit"),{basename:t}=S.useContext(Je),r=Id();return S.useCallback(async(n,a={})=>{let{action:o,method:s,encType:i,formData:l,body:d}=Wd(n,t);if(a.navigate===!1){let m=a.fetcherKey||Tf();await e.fetch(m,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:d,formMethod:a.method||s,formEncType:a.encType||i,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:d,formMethod:a.method||s,formEncType:a.encType||i,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Df(e,{relative:t}={}){let{basename:r}=S.useContext(Je),n=S.useContext(Ze);se(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),o={...gn(e||".",{relative:t})},s=Me();if(e==null){o.search=s.search;let i=new URLSearchParams(o.search),l=i.getAll("index");if(l.some(m=>m==="")){i.delete("index"),l.filter(g=>g).forEach(g=>i.append("index",g));let m=i.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:pt([r,o.pathname])),Lt(o)}function gs({key:e}={}){var j;let{router:t}=qa("useFetcher"),r=ms("useFetcher"),n=S.useContext(is),a=S.useContext(Ze),o=(j=a.matches[a.matches.length-1])==null?void 0:j.route.id;se(n,"useFetcher must be used inside a FetchersContext"),se(a,"useFetcher must be used inside a RouteContext"),se(o!=null,'useFetcher can only be used on routes that contain a unique "id"');let s=S.useId(),[i,l]=S.useState(e||s);e&&e!==i&&l(e),S.useEffect(()=>(t.getFetcher(i),()=>t.deleteFetcher(i)),[t,i]);let d=S.useCallback(async($,I)=>{se(o,"No routeId available for fetcher.load()"),await t.fetch(i,o,$,I)},[i,o,t]),m=lu(),g=S.useCallback(async($,I)=>{await m($,{...I,navigate:!1,fetcherKey:i})},[i,m]),y=S.useMemo(()=>{let $=S.forwardRef((I,L)=>S.createElement(kr,{...I,navigate:!1,fetcherKey:i,ref:L}));return $.displayName="fetcher.Form",$},[i]),C=r.fetchers.get(i)||Sl,v=n.get(i);return S.useMemo(()=>({Form:y,submit:g,load:d,...C,data:v}),[y,g,d,C,v])}function Of(){let e=ms("useFetchers");return Array.from(e.fetchers.entries()).map(([t,r])=>({...r,key:t}))}var Wo="react-router-scroll-positions",la={};function Go(e,t,r,n){let a=null;return n&&(r!=="/"?a=n({...e,pathname:Le(e.pathname,r)||e.pathname},t):a=n(e,t)),a==null&&(a=e.key),a}function Lf({getKey:e,storageKey:t}={}){let{router:r}=qa("useScrollRestoration"),{restoreScrollPosition:n,preventScrollReset:a}=ms("useScrollRestoration"),{basename:o}=S.useContext(Je),s=Me(),i=cs(),l=Ar();S.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Mf(S.useCallback(()=>{if(l.state==="idle"){let d=Go(s,i,o,e);la[d]=window.scrollY}try{sessionStorage.setItem(t||Wo,JSON.stringify(la))}catch(d){je(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${d}).`)}window.history.scrollRestoration="auto"},[l.state,e,o,s,i,t])),typeof document<"u"&&(S.useLayoutEffect(()=>{try{let d=sessionStorage.getItem(t||Wo);d&&(la=JSON.parse(d))}catch{}},[t]),S.useLayoutEffect(()=>{let d=r==null?void 0:r.enableScrollRestoration(la,()=>window.scrollY,e?(m,g)=>Go(m,g,o,e):void 0);return()=>d&&d()},[r,o,e]),S.useLayoutEffect(()=>{if(n!==!1){if(typeof n=="number"){window.scrollTo(0,n);return}if(s.hash){let d=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(d){d.scrollIntoView();return}}a!==!0&&window.scrollTo(0,0)}},[s,n,a]))}function Mf(e,t){let{capture:r}={};S.useEffect(()=>{let n=r!=null?{capture:r}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}},[e,r])}function Nf(e,t={}){let r=S.useContext(ss);se(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=qa("useViewTransitionState"),a=gn(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Le(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Le(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ba(a.pathname,s)!=null||ba(a.pathname,o)!=null}function Ff({context:e,router:t,hydrate:r=!0,nonce:n}){se(t&&e,"You must provide `router` and `context` to <StaticRouterProvider>");let a={router:t,navigator:Bf(),static:!0,staticContext:e,basename:e.basename||"/"},o=new Map,s="";if(r!==!1){let l={loaderData:e.loaderData,actionData:e.actionData,errors:Hf(e.errors)};s=`window.__staticRouterHydrationData = JSON.parse(${Gf(JSON.stringify(JSON.stringify(l)))});`}let{state:i}=a.router;return S.createElement(S.Fragment,null,S.createElement(tr.Provider,{value:a},S.createElement(Rr.Provider,{value:i},S.createElement(is.Provider,{value:o},S.createElement(ss.Provider,{value:{isTransitioning:!1}},S.createElement(Ld,{basename:a.basename,location:i.location,navigationType:i.historyAction,navigator:a.navigator,static:a.static},S.createElement(Uf,{routes:t.routes,future:t.future,state:i})))))),s?S.createElement("script",{suppressHydrationWarning:!0,nonce:n,dangerouslySetInnerHTML:{__html:s}}):null)}function Uf({routes:e,future:t,state:r}){return Tl(e,void 0,r,t)}function Hf(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,a]of t)Ae(a)?r[n]={...a,__type:"RouteErrorResponse"}:a instanceof Error?r[n]={message:a.message,__type:"Error",...a.name!=="Error"?{__subType:a.name}:{}}:r[n]=a;return r}function Bf(){return{createHref:uu,encodeLocation:cu,push(e){throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`)},replace(e){throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`)},go(e){throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`)},back(){throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.")},forward(){throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.")}}}function Vf(e,t,r={}){let n={},a=ts(e,Dd,void 0,n),o=t.matches.map(i=>{let l=n[i.route.id]||i.route;return{...i,route:l}}),s=i=>`You cannot use router.${i}() on the server because it is a stateless environment`;return{get basename(){return t.basename},get future(){return{unstable_middleware:!1,...r==null?void 0:r.future}},get state(){return{historyAction:"POP",location:t.location,matches:o,loaderData:t.loaderData,actionData:t.actionData,errors:t.errors,initialized:!0,navigation:ad,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",fetchers:new Map,blockers:new Map}},get routes(){return a},get window(){},initialize(){throw s("initialize")},subscribe(){throw s("subscribe")},enableScrollRestoration(){throw s("enableScrollRestoration")},navigate(){throw s("navigate")},fetch(){throw s("fetch")},revalidate(){throw s("revalidate")},createHref:uu,encodeLocation:cu,getFetcher(){return Sl},deleteFetcher(){throw s("deleteFetcher")},dispose(){throw s("dispose")},getBlocker(){return od},deleteBlocker(){throw s("deleteBlocker")},patchRoutes(){throw s("patchRoutes")},_internalFetchControllers:new Map,_internalSetRoutes(){throw s("_internalSetRoutes")}}}function uu(e){return typeof e=="string"?e:Lt(e)}function cu(e){let t=typeof e=="string"?e:Lt(e);t=t.replace(/ $/,"%20");let r=qf.test(t)?new URL(t):new URL(t,"http://localhost");return{pathname:r.pathname,search:r.search,hash:r.hash}}var qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zf={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Wf=/[&><\u2028\u2029]/g;function Gf(e){return e.replace(Wf,t=>zf[t])}function Yf({context:e,url:t,nonce:r}){typeof t=="string"&&(t=new URL(t));let{manifest:n,routeModules:a,criticalCss:o,serverHandoffString:s}=e,i=tu(n.routes,a,e.future,e.isSpaMode);e.staticHandlerContext.loaderData={...e.staticHandlerContext.loaderData};for(let d of e.staticHandlerContext.matches){let m=d.route.id,g=a[m],y=e.manifest.routes[m];g&&y&&wf(m,g.clientLoader,y.hasLoader,e.isSpaMode)&&(g.HydrateFallback||!y.hasLoader)&&delete e.staticHandlerContext.loaderData[m]}let l=Vf(i,e.staticHandlerContext);return S.createElement(S.Fragment,null,S.createElement(xn.Provider,{value:{manifest:n,routeModules:a,criticalCss:o,serverHandoffString:s,future:e.future,ssr:e.ssr,isSpaMode:e.isSpaMode,routeDiscovery:e.routeDiscovery,serializeError:e.serializeError,renderMeta:e.renderMeta}},S.createElement(pf,{location:l.state.location},S.createElement(Ff,{router:l,context:e.staticHandlerContext,hydrate:!1}))),e.serverHandoffStream?S.createElement(S.Suspense,null,S.createElement(Xl,{context:e,identifier:0,reader:e.serverHandoffStream.getReader(),textDecoder:new TextDecoder,nonce:r})):null)}var ys=new TextEncoder,Qf=async(e,t)=>{let r=ys.encode(e),n=await du(t,["sign"]),a=await crypto.subtle.sign("HMAC",n,r),o=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+o},Kf=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),o=ys.encode(n),s=await du(t,["verify"]),i=Jf(atob(a));return await crypto.subtle.verify("HMAC",s,i,o)?n:!1},du=async(e,t)=>crypto.subtle.importKey("raw",ys.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t);function Jf(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}var Zf=(e,t={})=>{let{secrets:r=[],...n}={path:"/",sameSite:"lax",...t};return oh(e,n.expires),{get name(){return e},get isSigned(){return r.length>0},get expires(){return typeof n.maxAge<"u"?new Date(Date.now()+n.maxAge*1e3):n.expires},async parse(a,o){if(!a)return null;let s=Xs.parse(a,{...n,...o});if(e in s){let i=s[e];return typeof i=="string"&&i!==""?await th(i,r):""}else return null},async serialize(a,o){return Xs.serialize(e,a===""?"":await eh(a,r),{...n,...o})}}},Xf=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function eh(e,t){let r=rh(e);return t.length>0&&(r=await Qf(r,t[0])),r}async function th(e,t){if(t.length>0){for(let r of t){let n=await Kf(e,r);if(n!==!1)return vi(n)}return null}return vi(e)}function rh(e){return btoa(ah(encodeURIComponent(JSON.stringify(e))))}function vi(e){try{return JSON.parse(decodeURIComponent(nh(atob(e))))}catch{return{}}}function nh(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(o=a.charCodeAt(0),o<256?r+="%"+wi(o,2):r+="%u"+wi(o,4).toUpperCase());return r}function wi(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function ah(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(o=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=5;continue}}else if(o=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=2;continue}}r+=a}return r}function oh(e,t){Ll(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function sh(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];return n&&(t[r]=n.module),t},{})}function ih(e){return e==="development"||e==="production"||e==="test"}function za(e,t){if(e instanceof Error&&t!=="development"){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function _a(e,t){return Object.entries(e).reduce((r,[n,a])=>Object.assign(r,{[n]:za(a,t)}),{})}function fu(e,t){let r=za(e,t);return{message:r.message,stack:r.stack}}function xi(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[a,o]of r)if(Ae(o))n[a]={...o,__type:"RouteErrorResponse"};else if(o instanceof Error){let s=za(o,t);n[a]={message:s.message,stack:s.stack,__type:"Error",...s.name!=="Error"?{__subType:s.name}:{}}}else n[a]=o;return n}function Yo(e,t,r){let n=$r(e,t,r);return n?n.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}async function Ci(e,t){let r=await e({request:uh(lh(t.request)),params:t.params,context:t.context});if(Uo(r)&&r.init&&r.init.status&&Ma(r.init.status))throw new Response(null,r.init);return r}function lh(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let o of r)o&&n.push(o);for(let o of n)t.searchParams.append("index",o);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function uh(e){let t=new URL(e.url);t.searchParams.delete("_routes");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}function ga(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"),new Error(t)}function hu(e,t){if(typeof process<"u")try{if((xo==null?void 0:xo.IS_RR_BUILD_REQUEST)==="yes")return e.headers.get(t)}catch{}return null}function pu(e){let t={};return Object.values(e).forEach(r=>{if(r){let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}}),t}function mu(e,t="",r=pu(e)){return(r[t]||[]).map(n=>({...n,children:mu(e,n.id,r)}))}function gu(e,t,r="",n=pu(e)){return(n[r]||[]).map(a=>{let o={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,unstable_middleware:a.module.unstable_middleware,loader:a.module.loader?async s=>{let i=hu(s.request,"X-React-Router-Prerender-Data");if(i!=null){let d=i&&decodeURI(i);ga(d,"Missing prerendered data for route");let m=new TextEncoder().encode(d),g=new ReadableStream({start(v){v.enqueue(m),v.close()}}),C=(await hf(g,global)).value;if(C&&Mt in C){let v=C[Mt],b={status:v.status};throw v.reload?Xc(v.redirect,b):v.replace?ed(v.redirect,b):qe(v.redirect,b)}else{ga(C&&a.id in C,"Unable to decode prerendered data");let v=C[a.id];return ga("data"in v,"Unable to process prerendered data"),v.data}}return await Ci(a.module.loader,s)}:void 0,action:a.module.action?s=>Ci(a.module.action,s):void 0,handle:a.module.handle};return a.index?{index:!0,...o}:{caseSensitive:a.caseSensitive,children:gu(e,t,a.id,n),...o}})}var ch={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},dh=/[&><\u2028\u2029]/g;function fh(e){return e.replace(dh,t=>ch[t])}function Si(e){return fh(JSON.stringify(e))}function vs(e,t){let r=t.errors?t.matches.findIndex(o=>t.errors[o.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:o,actionData:s,loaderHeaders:i,loaderData:l}=t;t.matches.slice(r).some(d=>{let m=d.route.id;return o[m]&&(!s||!s.hasOwnProperty(m))?a=o[m]:i[m]&&!l.hasOwnProperty(m)&&(a=i[m]),a!=null})}return n.reduce((o,s,i)=>{let{id:l}=s.route,d=e.routes[l];ga(d,`Route with id "${l}" not found in build`);let m=d.module,g=t.loaderHeaders[l]||new Headers,y=t.actionHeaders[l]||new Headers,C=a!=null&&i===n.length-1,v=C&&a!==g&&a!==y;if(m.headers==null){let j=new Headers(o);return v&&Qt(a,j),Qt(y,j),Qt(g,j),j}let b=new Headers(m.headers?typeof m.headers=="function"?m.headers({loaderHeaders:g,parentHeaders:o,actionHeaders:y,errorHeaders:C?a:void 0}):m.headers:void 0);return v&&Qt(a,b),Qt(y,b),Qt(g,b),Qt(o,b),b},new Headers)}function Qt(e,t){let r=e.get("Set-Cookie");if(r){let n=Ec.splitCookiesString(r),a=new Set(t.getSetCookie());n.forEach(o=>{a.has(o)||t.append("Set-Cookie",o)})}}var yu=new Set([...df,304]);async function hh(e,t,r,n,a,o,s){try{let l=function(g){let y=vs(e,g);if(Ma(g.statusCode)&&y.has("Location"))return kt(n,e,t,{result:cn(g.statusCode,y,e.basename),headers:y,status:un});g.errors&&(Object.values(g.errors).forEach(v=>{(!Ae(v)||v.error)&&s(v)}),g.errors=_a(g.errors,t));let C;return g.errors?C={error:Object.values(g.errors)[0]}:C={data:Object.values(g.actionData||{})[0]},kt(n,e,t,{result:C,headers:y,status:g.statusCode})};var i=l;let d=new Request(a,{method:n.method,body:n.body,headers:n.headers,signal:n.signal,...n.body?{duplex:"half"}:void 0}),m=await r.query(d,{requestContext:o,skipLoaderErrorBubbling:!0,skipRevalidation:!0,unstable_respond:l});return _e(m)||(m=l(m)),Na(m)?kt(n,e,t,{result:cn(m.status,m.headers,e.basename),headers:m.headers,status:un}):m}catch(l){return s(l),kt(n,e,t,{result:{error:l},headers:new Headers,status:500})}}async function ph(e,t,r,n,a,o,s){try{let l=function(C){let v=vs(e,C);if(Ma(C.statusCode)&&v.has("Location"))return kt(n,e,t,{result:{[Mt]:cn(C.statusCode,v,e.basename)},headers:v,status:un});C.errors&&(Object.values(C.errors).forEach($=>{(!Ae($)||$.error)&&s($)}),C.errors=_a(C.errors,t));let b={},j=new Set(C.matches.filter($=>g?g.has($.route.id):$.route.loader!=null).map($=>$.route.id));if(C.errors)for(let[$,I]of Object.entries(C.errors))b[$]={error:I};for(let[$,I]of Object.entries(C.loaderData))!($ in b)&&j.has($)&&(b[$]={data:I});return kt(n,e,t,{result:b,headers:v,status:C.statusCode})};var i=l;let d=new Request(a,{headers:n.headers,signal:n.signal}),m=new URL(n.url).searchParams.get("_routes"),g=m?new Set(m.split(",")):null,y=await r.query(d,{requestContext:o,filterMatchesToLoad:C=>!g||g.has(C.route.id),skipLoaderErrorBubbling:!0,unstable_respond:l});return _e(y)||(y=l(y)),Na(y)?kt(n,e,t,{result:{[Mt]:cn(y.status,y.headers,e.basename)},headers:y.headers,status:un}):y}catch(l){return s(l),kt(n,e,t,{result:{root:{error:l}},headers:new Headers,status:500})}}function kt(e,t,r,{result:n,headers:a,status:o}){let s=new Headers(a);return s.set("X-Remix-Response","yes"),yu.has(o)?new Response(null,{status:o,headers:s}):(s.set("Content-Type","text/x-script"),new Response($a(n,e.signal,t.entry.module.streamTimeout,r),{status:o||200,headers:s}))}function cn(e,t,r){let n=t.get("Location");return r&&(n=Le(n,r)||n),{redirect:n,status:e,revalidate:t.has("X-Remix-Revalidate")||t.has("Set-Cookie"),reload:t.has("X-Remix-Reload-Document"),replace:t.has("X-Remix-Replace")}}function $a(e,t,r,n){let a=new AbortController,o=setTimeout(()=>a.abort(new Error("Server Timeout")),typeof r=="number"?r:4950);return t.addEventListener("abort",()=>clearTimeout(o)),cf(e,{signal:a.signal,plugins:[s=>{if(s instanceof Error){let{name:i,message:l,stack:d}=n==="production"?za(s,n):s;return["SanitizedError",i,l,d]}if(s instanceof er){let{data:i,status:l,statusText:d}=s;return["ErrorResponse",i,l,d]}if(s&&typeof s=="object"&&Mt in s)return["SingleFetchRedirect",s[Mt]]}],postPlugins:[s=>{if(s&&typeof s=="object")return["SingleFetchClassInstance",Object.fromEntries(Object.entries(s))]},()=>["SingleFetchFallback"]]})}function bi(e,t){let r=mu(e.routes),n=gu(e.routes,e.future),a=ih(t)?t:"production",o=ud(n,{basename:e.basename}),s=e.entry.module.handleError||((i,{request:l})=>{l.signal.aborted||console.error(Ae(i)&&i.error?i.error:i)});return{routes:r,dataRoutes:n,serverMode:a,staticHandler:o,errorHandler:s}}var mh=(e,t)=>{let r,n,a,o,s;return async function(l,d){if(r=typeof e=="function"?await e():e,typeof e=="function"){let F=bi(r,t);n=F.routes,a=F.serverMode,o=F.staticHandler,s=F.errorHandler}else if(!n||!a||!o||!s){let F=bi(r,t);n=F.routes,a=F.serverMode,o=F.staticHandler,s=F.errorHandler}let m={},g,y=F=>{s(F,{context:g,params:m,request:l})};if(r.future.unstable_middleware)if(d==null)g=new Cr;else try{g=new Cr(d)}catch(F){let O=new Error(`Unable to create initial \`unstable_RouterContextProvider\` instance. Please confirm you are returning an instance of \`Map<unstable_routerContext, unknown>\` from your \`getLoadContext\` function.

Error: ${F instanceof Error?F.toString():F}`);return y(O),ja(O,a)}else g=d||{};let C=new URL(l.url),v=r.basename||"/",b=C.pathname;Le(b,v)==="/_root.data"?b=v:b.endsWith(".data")&&(b=b.replace(/\.data$/,"")),Le(b,v)!=="/"&&b.endsWith("/")&&(b=b.slice(0,-1));let j=hu(l,"X-React-Router-SPA-Mode")==="yes";if(!r.ssr){if(r.prerender.length===0)j=!0;else if(!r.prerender.includes(b)&&!r.prerender.includes(b+"/")){if(C.pathname.endsWith(".data"))return s(new er(404,"Not Found",`Refusing to SSR the path \`${b}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`),{context:g,params:m,request:l}),new Response("Not Found",{status:404,statusText:"Not Found"});j=!0}}let $=Sf(r.routeDiscovery.manifestPath,v);if(C.pathname===$)try{return await gh(r,n,C)}catch(F){return y(F),new Response("Unknown Server Error",{status:500})}let I=Yo(n,b,r.basename);I&&I.length>0&&Object.assign(m,I[0].params);let L;if(C.pathname.endsWith(".data")){let F=new URL(l.url);F.pathname=b;let O=Yo(n,F.pathname,r.basename);if(L=await yh(a,r,o,l,F,g,y),r.entry.module.handleDataRequest&&(L=await r.entry.module.handleDataRequest(L,{context:g,params:O?O[0].params:{},request:l}),Na(L))){let D=cn(L.status,L.headers,r.basename);l.method==="GET"&&(D={[Mt]:D});let H=new Headers(L.headers);return H.set("Content-Type","text/x-script"),new Response($a(D,l.signal,r.entry.module.streamTimeout,a),{status:un,headers:H})}}else if(!j&&I&&I[I.length-1].route.module.default==null&&I[I.length-1].route.module.ErrorBoundary==null)L=await wh(a,r,o,I.slice(-1)[0].route.id,l,g,y);else{let{pathname:F}=C,O;r.unstable_getCriticalCss&&(O=await r.unstable_getCriticalCss({pathname:F})),L=await vh(a,r,o,l,g,y,j,O)}return l.method==="HEAD"?new Response(null,{headers:L.headers,status:L.status,statusText:L.statusText}):L}};async function gh(e,t,r){if(e.assets.version!==r.searchParams.get("version"))return new Response(null,{status:204,headers:{"X-Remix-Reload-Document":"true"}});let n={};if(r.searchParams.has("p")){let a=new Set;r.searchParams.getAll("p").forEach(o=>{o.startsWith("/")||(o=`/${o}`);let s=o.split("/").slice(1);s.forEach((i,l)=>{let d=s.slice(0,l+1).join("/");a.add(`/${d}`)})});for(let o of a){let s=Yo(t,o,e.basename);if(s)for(let i of s){let l=i.route.id,d=e.assets.routes[l];d&&(n[l]=d)}}return Response.json(n,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function yh(e,t,r,n,a,o,s){return n.method!=="GET"?await hh(t,e,r,n,a,o,s):await ph(t,e,r,n,a,o,s)}async function vh(e,t,r,n,a,o,s,i){try{let d=await r.query(n,{requestContext:a,unstable_respond:t.future.unstable_middleware?m=>l(m,s):void 0});return _e(d)?d:l(d,s)}catch(d){return o(d),new Response(null,{status:500})}async function l(d,m){if(_e(d))return d;let g=vs(t,d);if(yu.has(d.statusCode))return new Response(null,{status:d.statusCode,headers:g});d.errors&&(Object.values(d.errors).forEach(j=>{(!Ae(j)||j.error)&&o(j)}),d.errors=_a(d.errors,e));let y={loaderData:d.loaderData,actionData:d.actionData,errors:xi(d.errors,e)},C={basename:t.basename,future:t.future,routeDiscovery:t.routeDiscovery,ssr:t.ssr,isSpaMode:m},v={manifest:t.assets,routeModules:sh(t.routes),staticHandlerContext:d,criticalCss:i,serverHandoffString:Si({...C,criticalCss:i}),serverHandoffStream:$a(y,n.signal,t.entry.module.streamTimeout,e),renderMeta:{},future:t.future,ssr:t.ssr,routeDiscovery:t.routeDiscovery,isSpaMode:m,serializeError:j=>fu(j,e)},b=t.entry.module.default;try{return await b(n,d.statusCode,g,v,a)}catch(j){o(j);let $=j;if(_e(j))try{let L=await Ch(j);$=new er(j.status,j.statusText,L)}catch{}d=bl(r.dataRoutes,d,$),d.errors&&(d.errors=_a(d.errors,e));let I={loaderData:d.loaderData,actionData:d.actionData,errors:xi(d.errors,e)};v={...v,staticHandlerContext:d,serverHandoffString:Si(C),serverHandoffStream:$a(I,n.signal,t.entry.module.streamTimeout,e),renderMeta:{}};try{return await b(n,d.statusCode,g,v,a)}catch(L){return o(L),ja(L,e)}}}}async function wh(e,t,r,n,a,o,s){try{let i=await r.queryRoute(a,{routeId:n,requestContext:o,unstable_respond:t.future.unstable_middleware?l=>l:void 0});return _e(i)?i:typeof i=="string"?new Response(i):Response.json(i)}catch(i){if(_e(i))return i.headers.set("X-Remix-Catch","yes"),i;if(Ae(i))return i&&s(i),xh(i,e);if(i instanceof Error&&i.message==="Expected a response from queryRoute"){let l=new Error("Expected a Response to be returned from resource route handler");return s(l),ja(l,e)}return s(i),ja(i,e)}}function xh(e,t){return Response.json(fu(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function ja(e,t){let r="Unexpected Server Error";return t!=="production"&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function Ch(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function _o(e){return`__flash_${e}__`}var Sh=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(_o(n))},get(n){if(r.has(n))return r.get(n);let a=_o(n);if(r.has(a)){let o=r.get(a);return r.delete(a),o}},set(n,a){r.set(n,a)},flash(n,a){r.set(_o(n),a)},unset(n){r.delete(n)}}};function bh(e){Ll(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`)}function Eh({cookie:e}={}){let t=Xf(e)?e:Zf((e==null?void 0:e.name)||"__session",e);return bh(t),{async getSession(r,n){return Sh(r&&await t.parse(r,n)||{})},async commitSession(r,n){let a=await t.serialize(r.data,n);if(a.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+a.length);return a},async destroySession(r,n){return t.serialize("",{...n,maxAge:void 0,expires:new Date(0)})}}}var $o={exports:{}},tn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei;function _h(){if(Ei)return tn;Ei=1;var e=La(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(i,l,d){var m,g={},y=null,C=null;d!==void 0&&(y=""+d),l.key!==void 0&&(y=""+l.key),l.ref!==void 0&&(C=l.ref);for(m in l)n.call(l,m)&&!o.hasOwnProperty(m)&&(g[m]=l[m]);if(i&&i.defaultProps)for(m in l=i.defaultProps,l)g[m]===void 0&&(g[m]=l[m]);return{$$typeof:t,type:i,key:y,ref:C,props:g,_owner:a.current}}return tn.Fragment=r,tn.jsx=s,tn.jsxs=s,tn}var _i;function $h(){return _i||(_i=1,$o.exports=_h()),$o.exports}var f=$h();function _t(e){if(!e){const t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!(t!=null&&t.node))throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}const ya="2025-04",jh="mock.shop",jo=e=>e.includes(jh);function Rh({storeDomain:e,privateStorefrontToken:t,publicStorefrontToken:r,storefrontApiVersion:n=ya,contentType:a}){if(!e)throw new Error(Ro+"`storeDomain` is required when creating a new Storefront client in production.");n!==ya&&Ah(`The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.
You may run into unexpected errors if these versions don't match. Received version: "${n}"; expected version "${ya}"`);const o=s=>{const i=(s==null?void 0:s.storeDomain)??e;return i.includes("://")?i:`https://${i}`};return{getShopifyDomain:o,getStorefrontApiUrl(s){const i=o(s),l=i+(i.endsWith("/")?"api":"/api");return jo(i)?l:`${l}/${(s==null?void 0:s.storefrontApiVersion)??n}/graphql.json`},getPrivateTokenHeaders(s){if(!t&&!(s!=null&&s.privateStorefrontToken)&&!jo(e))throw new Error(Ro+"You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`");return{"content-type":((s==null?void 0:s.contentType)??a)==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":n,"Shopify-Storefront-Private-Token":(s==null?void 0:s.privateStorefrontToken)??t??"",...s!=null&&s.buyerIp?{"Shopify-Storefront-Buyer-IP":s.buyerIp}:{}}},getPublicTokenHeaders(s){if(!r&&!(s!=null&&s.publicStorefrontToken)&&!jo(e))throw new Error(Ro+"You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`");const i=(s==null?void 0:s.contentType)??a??"json";return Ph(i,n,(s==null?void 0:s.publicStorefrontToken)??r??"")}}}function Ph(e,t,r){return{"content-type":e==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":t,"X-Shopify-Storefront-Access-Token":r}}const $i=new Set,Ro="[h2:error:createStorefrontClient] ",Ah=(e,t="warn")=>{$i.has(e)||(console[t](`[h2:${t}:createStorefrontClient] `+e),$i.add(e))},Ih={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:ya,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},kh=S.createContext(Ih);function Th(){const e=S.useContext(kh);if(!e)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return e}const Dh="Shopify-Storefront-Id",Oh="Shopify-Storefront-Y",Lh="Shopify-Storefront-S",Dt="_shopify_y",Ot="_shopify_s";var Mh=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function vu(e){let t={},r,n,a=0,o=e.split(/;\s*/g),s,i;for(;a<o.length;a++)if(n=o[a],r=n.indexOf("="),~r){if(s=n.substring(0,r++).trim(),i=n.substring(r).trim(),i[0]==='"'&&(i=i.substring(1,i.length-1)),~i.indexOf("%"))try{i=decodeURIComponent(i)}catch{}Mh.has(n=s.toLowerCase())?n==="expires"?t.expires=new Date(i):n==="max-age"?t.maxage=+i:t[n]=i:t[s]=i}else(s=n.trim().toLowerCase())&&(s==="httponly"||s==="secure")&&(t[s]=!0);return t}function wu(e,t,r={}){let n=e+"="+encodeURIComponent(t);return r.expires&&(n+="; Expires="+new Date(r.expires).toUTCString()),r.maxage!=null&&r.maxage>=0&&(n+="; Max-Age="+(r.maxage|0)),r.domain&&(n+="; Domain="+r.domain),r.path&&(n+="; Path="+r.path),r.samesite&&(n+="; SameSite="+r.samesite),(r.secure||r.samesite==="None")&&(n+="; Secure"),r.httponly&&(n+="; HttpOnly"),n}const ji="xxxx-4xxx-xxxx-xxxxxxxxxxxx";function Ra(){let e="";try{const t=window.crypto,r=new Uint16Array(31);t.getRandomValues(r);let n=0;e=ji.replace(/[x]/g,a=>{const o=r[n]%16,s=a==="x"?o:o&3|8;return n++,s.toString(16)}).toUpperCase()}catch{e=ji.replace(/[x]/g,r=>{const n=Math.random()*16|0;return(r==="x"?n:n&3|8).toString(16)}).toUpperCase()}return`${Nh()}-${e}`}function Nh(){let e=0,t=0;e=new Date().getTime()>>>0;try{t=performance.now()>>>0}catch{t=0}return Math.abs(e+t).toString(16).toLowerCase().padStart(8,"0")}function ws(e){const t=vu(e);return{[Dt]:t[Dt]||"",[Ot]:t[Ot]||""}}const ot={PAGE_VIEW:"PAGE_VIEW",ADD_TO_CART:"ADD_TO_CART",PAGE_VIEW_2:"PAGE_VIEW_2",COLLECTION_VIEW:"COLLECTION_VIEW",PRODUCT_VIEW:"PRODUCT_VIEW",SEARCH_VIEW:"SEARCH_VIEW"},Er={collection:"collection",product:"product",search:"search"},Fh={headless:"headless"},Ri={hydrogen:"6167201",headless:"12875497473"};function ht(e,t){return{schema_id:e,payload:t,metadata:{event_created_at_ms:Date.now()}}}function ze(e){const t={id:"",resource:null,resourceId:null,search:"",searchParams:new URLSearchParams,hash:""};if(typeof e!="string")return t;try{const{search:r,searchParams:n,pathname:a,hash:o}=new URL(e),s=a.split("/"),i=s[s.length-1],l=s[s.length-2];return!i||!l?t:{id:`${i}${r}${o}`||"",resource:l??null,resourceId:i||null,search:r,searchParams:n,hash:o}}catch{return t}}function st(e,t){return typeof e!="object"?{}:(Object.entries(e).forEach(([r,n])=>{n&&(t[r]=n)}),t)}function Uh(e){return typeof document>"u"?(console.error(`${e} should only be used within the useEffect callback or event handlers`),!0):!1}const Hh="trekkie_storefront_page_view/1.4",Bh="myshopify.dev";function Pi(e){const t=e,{id:r,resource:n}=ze(t.resourceId),a=n?n.toLowerCase():void 0;return[ht(Hh,st({pageType:t.pageType,customerId:parseInt(ze(t.customerId).id||"0"),resourceType:a,resourceId:parseInt(r)},Vh(t)))]}function Vh(e){return{appClientId:e.shopifySalesChannel?Ri[e.shopifySalesChannel]:Ri.headless,isMerchantRequest:qh(e.url),hydrogenSubchannelId:e.storefrontId||e.hydrogenSubchannelId||"0",isPersistentCookie:e.hasUserConsent,uniqToken:e.uniqueToken,visitToken:e.visitToken,microSessionId:Ra(),microSessionCount:1,url:e.url,path:e.path,search:e.search,referrer:e.referrer,title:e.title,shopId:parseInt(ze(e.shopId).id),currency:e.currency,contentLanguage:e.acceptedLanguage||"en"}}function qh(e){if(typeof e!="string")return!1;const t=new URL(e).hostname;return t.indexOf(Bh)!==-1||t==="localhost"}const zh="2025.5.0",Ct="custom_storefront_customer_tracking/1.2",xu="page_rendered",Cu="collection_page_rendered",Su="product_page_rendered",Wh="product_added_to_cart",bu="search_submitted";function Cn(e){return{canonical_url:e.canonicalUrl||e.url,customer_id:parseInt(ze(e.customerId).id||"0")}}function Gh(e){const t=e,r=Cn(t),n=t.pageType,a=[];switch(a.push(ht(Ct,st({event_name:xu,...r},St(t)))),n){case Er.collection:a.push(ht(Ct,st({event_name:Cu,...r,collection_name:t.collectionHandle,collection_id:parseInt(ze(t.collectionId).id)},St(t))));break;case Er.product:a.push(ht(Ct,st({event_name:Su,...r,products:xs(t.products),total_value:t.totalValue},St(t))));break;case Er.search:a.push(ht(Ct,st({event_name:bu,...r,search_string:t.searchString},St(t))));break}return a}function Yh(e){const t=e,r=Cn(t);return[ht(Ct,st({event_name:xu,...r},St(t)))]}function Qh(e){const t=e,r=Cn(t);return[ht(Ct,st({event_name:Cu,...r,collection_name:t.collectionHandle,collection_id:parseInt(ze(t.collectionId).id)},St(t)))]}function Kh(e){const t=e,r=Cn(t);return[ht(Ct,st({event_name:Su,...r,products:xs(t.products),total_value:t.totalValue},St(t)))]}function Jh(e){const t=e,r=Cn(t);return[ht(Ct,st({event_name:bu,...r,search_string:t.searchString},St(t)))]}function Zh(e){const t=e,r=ze(t.cartId);return[ht(Ct,st({event_name:Wh,customerId:t.customerId,cart_token:r!=null&&r.id?`${r.id}`:null,total_value:t.totalValue,products:xs(t.products),customer_id:parseInt(ze(t.customerId).id||"0")},St(t)))]}function St(e){return{source:e.shopifySalesChannel||Fh.headless,asset_version_id:e.assetVersionId||zh,hydrogenSubchannelId:e.storefrontId||e.hydrogenSubchannelId||"0",is_persistent_cookie:e.hasUserConsent,deprecated_visit_token:e.visitToken,unique_token:e.uniqueToken,event_time:Date.now(),event_id:Ra(),event_source_url:e.url,referrer:e.referrer,user_agent:e.userAgent,navigation_type:e.navigationType,navigation_api:e.navigationApi,shop_id:parseInt(ze(e.shopId).id),currency:e.currency,ccpa_enforced:e.ccpaEnforced||!1,gdpr_enforced:e.gdprEnforced||!1,gdpr_enforced_as_string:e.gdprEnforced?"true":"false",analytics_allowed:e.analyticsAllowed||!1,marketing_allowed:e.marketingAllowed||!1,sale_of_data_allowed:e.saleOfDataAllowed||!1}}function xs(e){return e?e.map(t=>{const r=st({variant_gid:t.variantGid,category:t.category,sku:t.sku,product_id:parseInt(ze(t.productGid).id),variant_id:parseInt(ze(t.variantGid).id)},{product_gid:t.productGid,name:t.name,variant:t.variantName||"",brand:t.brand,price:parseFloat(t.price),quantity:Number(t.quantity||0)});return JSON.stringify(r)}):[]}function Sn(e,t){const{eventName:r,payload:n}=e;if(!n.hasUserConsent)return Promise.resolve();let a=[];const o=n;return r===ot.PAGE_VIEW?a=a.concat(Pi(o),Gh(o)):r===ot.ADD_TO_CART?a=a.concat(Zh(n)):r===ot.PAGE_VIEW_2?a=a.concat(Pi(o),Yh(o)):r===ot.COLLECTION_VIEW?a=a.concat(Qh(o)):r===ot.PRODUCT_VIEW?a=a.concat(Kh(o)):r===ot.SEARCH_VIEW&&(a=a.concat(Jh(o))),a.length?ep(a,t):Promise.resolve()}function Xh(){return typeof window>"u"||!window.navigator?!1:/Chrome-Lighthouse/.test(window.navigator.userAgent)}const Ai="sendShopifyAnalytics request is unsuccessful";function ep(e,t){if(Xh())return Promise.resolve();const r={events:e,metadata:{event_sent_at_ms:Date.now()}};try{return fetch(t?`https://${t}/.well-known/shopify/monorail/unstable/produce_batch`:"https://monorail-edge.shopifysvc.com/unstable/produce_batch",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(r)}).then(n=>{if(!n.ok)throw new Error("Response failed");return n.text()}).then(n=>{n&&JSON.parse(n).result.forEach(o=>{o.status!==200&&console.error(Ai,`

`,o.message)})}).catch(n=>{console.error(Ai,n)})}catch{return Promise.resolve()}}function tp(){if(Uh("getClientBrowserParameters"))return{uniqueToken:"",visitToken:"",url:"",path:"",search:"",referrer:"",title:"",userAgent:"",navigationType:"",navigationApi:""};const[e,t]=ap(),r=ws(document.cookie);return{uniqueToken:r[Dt],visitToken:r[Ot],url:location.href,path:location.pathname,search:location.search,referrer:document.referrer,title:document.title,userAgent:navigator.userAgent,navigationType:e,navigationApi:t}}function rp(){try{const e=(performance==null?void 0:performance.getEntriesByType)&&(performance==null?void 0:performance.getEntriesByType("navigation"));if(e&&e[0]){const t=window.performance.getEntriesByType("navigation")[0].type;return t&&t.toString()}}catch{}}function np(){var e,t;try{if(PerformanceNavigation&&((e=performance==null?void 0:performance.navigation)==null?void 0:e.type)!==null&&((t=performance==null?void 0:performance.navigation)==null?void 0:t.type)!==void 0){const r=performance.navigation.type;switch(r){case PerformanceNavigation.TYPE_NAVIGATE:return"navigate";case PerformanceNavigation.TYPE_RELOAD:return"reload";case PerformanceNavigation.TYPE_BACK_FORWARD:return"back_forward";default:return`unknown: ${r}`}}}catch{}}function ap(){try{let e="PerformanceNavigationTiming",t=rp();return t||(t=np(),e="performance.navigation"),t?[t,e]:["unknown","unknown"]}catch{}return["error","error"]}function op(e){const{countryIsoCode:t,languageIsoCode:r}=Th(),n=r.includes("_")?r.replace("_","-"):`${r}-${t}`;if(!n)throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");const a=parseFloat(e.amount),{defaultFormatter:o,nameFormatter:s,narrowSymbolFormatter:i,withoutTrailingZerosFormatter:l,withoutCurrencyFormatter:d,withoutTrailingZerosOrCurrencyFormatter:m}=S.useMemo(()=>{const C={style:"currency",currency:e.currencyCode};return{defaultFormatter:vr(n,C),nameFormatter:vr(n,{...C,currencyDisplay:"name"}),narrowSymbolFormatter:vr(n,{...C,currencyDisplay:"narrowSymbol"}),withoutTrailingZerosFormatter:vr(n,{...C,minimumFractionDigits:0,maximumFractionDigits:0}),withoutCurrencyFormatter:vr(n),withoutTrailingZerosOrCurrencyFormatter:vr(n,{minimumFractionDigits:0,maximumFractionDigits:0})}},[e.currencyCode,n]),g=C=>C.type==="currency",y=S.useMemo(()=>({original:()=>e,currencyCode:()=>e.currencyCode,localizedString:()=>o().format(a),parts:()=>o().formatToParts(a),withoutTrailingZeros:()=>a%1===0?l().format(a):o().format(a),withoutTrailingZerosAndCurrency:()=>a%1===0?m().format(a):d().format(a),currencyName:()=>{var C;return((C=s().formatToParts(a).find(g))==null?void 0:C.value)??e.currencyCode},currencySymbol:()=>{var C;return((C=o().formatToParts(a).find(g))==null?void 0:C.value)??e.currencyCode},currencyNarrowSymbol:()=>{var C;return((C=i().formatToParts(a).find(g))==null?void 0:C.value)??""},amount:()=>o().formatToParts(a).filter(C=>["decimal","fraction","group","integer","literal"].includes(C.type)).map(C=>C.value).join("")}),[e,a,s,o,i,d,l,m]);return S.useMemo(()=>new Proxy(y,{get:(C,v)=>{var b;return(b=Reflect.get(C,v))==null?void 0:b.call(null)}}),[y])}const Ii=new Map;function vr(e,t){const r=JSON.stringify([e,t]);return function(){let n=Ii.get(r);return n||(n=new Intl.NumberFormat(e,t),Ii.set(r,n)),n}}function Oe({data:e,as:t,withoutCurrency:r,withoutTrailingZeros:n,measurement:a,measurementSeparator:o="/",...s}){if(!sp(e))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");const i=op(e),l=t??"div";let d=i.localizedString;return(r||n)&&(r&&!n?d=i.amount:!r&&n?d=i.withoutTrailingZeros:d=i.withoutTrailingZerosAndCurrency),f.jsxs(l,{...s,children:[d,a&&a.referenceUnit&&f.jsxs(f.Fragment,{children:[o,a.referenceUnit]})]})}function sp(e){return typeof e.amount=="string"&&!!e.amount&&typeof e.currencyCode=="string"&&!!e.currencyCode}const Po=",",wr={OPTION:":",END_OF_PREFIX:",",SEQUENCE_GAP:" ",RANGE:"-"},ki=(()=>{const e=new Map;return function(t,r){var n;if(t.length===0)return!1;if(!e.has(r)){const a=new Set;for(const o of ip(r)){a.add(o.join(Po));for(let s=0;s<o.length;s++)a.add(o.slice(0,s+1).join(Po))}e.set(r,a)}return!!((n=e.get(r))!=null&&n.has(t.join(Po)))}})();function ip(e){if(!e)return[];if(e.startsWith("v1_"))return up(lp(e));throw new Error("Unsupported option value encoding")}const lp=e=>e.replace(/^v1_/,"");function up(e){const t=/[ :,-]/g;let r=0,n;const a=[],o=[];let s=0,i=null;for(;n=t.exec(e);){const d=n[0],m=Number.parseInt(e.slice(r,n.index))||0;if(i!==null){for(;i<m;i++)o[s]=i,a.push([...o]);i=null}o[s]=m,d===wr.RANGE?i=m:d===wr.OPTION?s++:((d===wr.SEQUENCE_GAP||d===wr.END_OF_PREFIX&&e[n.index-1]!==wr.END_OF_PREFIX)&&a.push([...o]),d===wr.END_OF_PREFIX&&(o.pop(),s--)),r=t.lastIndex}const l=e.match(/\d+$/g);if(l){const d=parseInt(l[0]);if(i!=null)for(;i<=d;i++)o[s]=i,a.push([...o]);else a.push([d])}return a}function cp(e){return Object.assign({},...e.map(t=>({[t.name]:Object.assign({},...t!=null&&t.optionValues?t.optionValues.map((r,n)=>({[r.name]:n})):[])})))}function Pa(e){return Object.assign({},...e.map(t=>({[t.name]:t.value})))}function Ao(e){return JSON.stringify(Pa(e))}function Eu(e){return Array.isArray(e)?JSON.stringify(Object.assign({},...e.map(t=>({[t.name]:t.value})))):JSON.stringify(e)}function dp(e,t){return Object.keys(e).map(n=>t[n]?t[n][e[n]]:null).filter(n=>n!==null)}function fp(e){return Object.assign({},...e.map(t=>({[Eu(t.selectedOptions||[])]:t})))}const Ti=["options","selectedOrFirstAvailableVariant","adjacentVariants"],hp=["handle","encodedVariantExistence","encodedVariantAvailability"];function Tt(e){return console.error(`[h2:error:getProductOptions] product.${e} is missing. Make sure you query for this field from the Storefront API.`),!1}function _u(e,t=!1){var r;let n=!0;const a=Object.keys(e);if((t?[...Ti,...hp]:Ti).forEach(o=>{a.includes(o)||(n=Tt(o))}),e.options){const o=e==null?void 0:e.options[0];if(t&&!(o!=null&&o.name)&&(n=Tt("options.name")),(r=e==null?void 0:e.options[0])!=null&&r.optionValues){let s=e.options[0].optionValues[0];t&&!(s!=null&&s.name)&&(n=Tt("options.optionValues.name")),s=e.options[0].optionValues.filter(i=>!!(i!=null&&i.firstSelectableVariant))[0],s!=null&&s.firstSelectableVariant&&(n=Io(s.firstSelectableVariant,"options.optionValues.firstSelectableVariant",n,t))}else n=Tt("options.optionValues")}return e.selectedOrFirstAvailableVariant&&(n=Io(e.selectedOrFirstAvailableVariant,"selectedOrFirstAvailableVariant",n,t)),e.adjacentVariants&&e.adjacentVariants[0]&&(n=Io(e.adjacentVariants[0],"adjacentVariants",n,t)),n?e:{}}function Io(e,t,r,n){var a;let o=r;if(n&&!((a=e.product)!=null&&a.handle)&&(o=Tt(`${t}.product.handle`)),e.selectedOptions){const s=e.selectedOptions[0];s!=null&&s.name||(o=Tt(`${t}.selectedOptions.name`)),s!=null&&s.value||(o=Tt(`${t}.selectedOptions.value`))}else o=Tt(`${t}.selectedOptions`);return o}function pp(e){const t=_u(e);if(!t.options)return[];const r={};t.options.map(a=>{var o;(o=a.optionValues)==null||o.map(s=>{if(s.firstSelectableVariant){const i=Ao(s.firstSelectableVariant.selectedOptions);r[i]=s.firstSelectableVariant}})}),t.adjacentVariants.map(a=>{const o=Ao(a.selectedOptions);r[o]=a});const n=t.selectedOrFirstAvailableVariant;if(n){const a=Ao(n.selectedOptions);r[a]=n}return Object.values(r)}function mp(e){const t=_u(e,!0);if(!t.options)return[];const{options:r,selectedOrFirstAvailableVariant:n,adjacentVariants:a,encodedVariantExistence:o,encodedVariantAvailability:s,handle:i}=t,l=n==null?void 0:n.selectedOptions.map(v=>v.name),d=r.filter(v=>l&&l.indexOf(v.name)>=0),m=cp(r),g=fp(n?[n,...a]:a),y=Pa(n?n.selectedOptions:[]);return d.map((v,b)=>({...v,optionValues:v.optionValues.map(j=>{var $;const I={...y};I[v.name]=j.name;const L=Eu(I||[]),O=dp(I||[],m).slice(0,b+1),D=ki(O,o||""),H=ki(O,s||""),q=g[L]||j.firstSelectableVariant;let W={};q&&(W=Pa(q.selectedOptions||[]));const G=new URLSearchParams(W),Z=(($=q==null?void 0:q.product)==null?void 0:$.handle)||i;return{...j,variant:q,handle:Z,variantUriQuery:G.toString(),selected:y[v.name]===j.name,exists:D,available:H,isDifferentProduct:Z!==i}})}))}const Xe=S.forwardRef(({alt:e,aspectRatio:t,crop:r="center",data:n,decoding:a="async",height:o="auto",loader:s=Wa,loading:i="lazy",sizes:l,src:d,srcSetOptions:m={intervals:15,startingWidth:200,incrementSize:200,placeholderWidth:100},width:g="100%",...y},C)=>{const v=S.useMemo(()=>{const D=n!=null&&n.width&&(n!=null&&n.height)?n==null?void 0:n.width:void 0,H=n!=null&&n.width&&(n!=null&&n.height)?n==null?void 0:n.height:void 0;return{width:D,height:H,unitsMatch:!!$u(D,H)}},[n]),b=S.useMemo(()=>{const H=dn((g||"100%").toString()),q=`${H.number}${H.unit}`,W=o==null,G=W?null:dn(o.toString()),Z=G?`${G.number}${G.unit}`:"",ce=W?"auto":Z,z=d||(n==null?void 0:n.url),J=n!=null&&n.altText&&!e?n==null?void 0:n.altText:e||"",ue=t||(v.unitsMatch?[fn(v.width),fn(v.height)].join("/"):void 0);return{width:q,height:ce,src:z,alt:J,aspectRatio:ue}},[g,o,d,n,e,t,v,y==null?void 0:y.key]),{intervals:j,startingWidth:$,incrementSize:I,placeholderWidth:L}=m,F=S.useMemo(()=>vp(g,j,$,I),[g,j,$,I]);return ju(b.width)?f.jsx(gp,{aspectRatio:t,crop:r,decoding:a,height:o,imageWidths:F,loader:s,loading:i,normalizedProps:b,passthroughProps:y,ref:C,width:g,data:n}):f.jsx(yp,{aspectRatio:t,crop:r,decoding:a,imageWidths:F,loader:s,loading:i,normalizedProps:b,passthroughProps:y,placeholderWidth:L,ref:C,sizes:l,data:n})}),gp=S.forwardRef(({aspectRatio:e,crop:t,decoding:r,height:n,imageWidths:a,loader:o=Wa,loading:s,normalizedProps:i,passthroughProps:l,width:d,data:m},g)=>{const y=S.useMemo(()=>{const C=fn(d),v=fn(n),b=e||($u(i.width,i.height)?[C,v].join("/"):i.aspectRatio?i.aspectRatio:void 0),j=a===void 0?void 0:Pu(a,b,t,{width:(m==null?void 0:m.width)??void 0,height:(m==null?void 0:m.height)??void 0}),$=v||(b&&C?C*(Cs(b)??1):void 0),I=Ru(i.src,j,o),L=o({src:i.src,width:C,height:$,crop:i.height==="auto"?void 0:t});return{width:C,aspectRatio:b,height:$,srcSet:I,src:L}},[e,t,m,n,a,o,i,d]);return f.jsx("img",{ref:g,alt:i.alt,decoding:r,height:y.height,loading:s,src:y.src,srcSet:y.srcSet,width:y.width,style:{aspectRatio:y.aspectRatio,...l.style},...l})}),yp=S.forwardRef(({crop:e,decoding:t,imageWidths:r,loader:n=Wa,loading:a,normalizedProps:o,passthroughProps:s,placeholderWidth:i,sizes:l,data:d},m)=>{const g=S.useMemo(()=>{const y=r===void 0?void 0:Pu(r,o.aspectRatio,e,{width:(d==null?void 0:d.width)??void 0,height:(d==null?void 0:d.height)??void 0}),C=o.aspectRatio&&i?i*(Cs(o.aspectRatio)??1):void 0,v=Ru(o.src,y,n),b=n({src:o.src,width:i,height:C,crop:e});return{placeholderHeight:C,srcSet:v,src:b}},[e,d,r,n,o,i]);return f.jsx("img",{ref:m,alt:o.alt,decoding:t,height:g.placeholderHeight,loading:a,sizes:l,src:g.src,srcSet:g.srcSet,width:i,...s,style:{width:o.width,aspectRatio:o.aspectRatio,...s.style}})}),Di="https://placeholder.shopify.com";function Wa({src:e,width:t,height:r,crop:n}){if(!e)return"";const a=new URL(e,Di);return t&&a.searchParams.append("width",Math.round(t).toString()),r&&a.searchParams.append("height",Math.round(r).toString()),n&&a.searchParams.append("crop",n),a.href.replace(Di,"")}function $u(e="100%",t="auto"){return dn(e.toString()).unit===dn(t.toString()).unit}function dn(e){const t=e.replace(/[0-9.]/g,""),r=parseFloat(e.replace(t,""));return{unit:t===""?r===void 0?"auto":"px":t,number:r}}function fn(e){if(e===void 0)return;const{unit:t,number:r}=dn(e.toString());switch(t){case"em":return r*16;case"rem":return r*16;case"px":return r;case"":return r;default:return}}function ju(e){return typeof e=="number"||/\d(px|em|rem)$/.test(e)}function Ru(e,t,r=Wa){return e?(t==null?void 0:t.length)===0||!t?e:t.map((n,a)=>`${r({src:e,width:n.width,height:n.height,crop:n.crop})} ${t.length===3?`${a+1}x`:`${n.width??0}w`}`).join(", "):""}function vp(e="100%",t,r,n){const a=Array.from({length:t},(s,i)=>i*n+r),o=Array.from({length:3},(s,i)=>(i+1)*(fn(e)??0));return ju(e)?o:a}function Cs(e){if(!e)return;const[t,r]=e.split("/");return 1/(Number(t)/Number(r))}function Pu(e,t,r="center",n){if(e)return e.map(a=>({width:a,height:t?a*(Cs(t)??1):void 0,crop:r})).filter(({width:a,height:o})=>!(n!=null&&n.width&&a>n.width||n!=null&&n.height&&o&&o>n.height))}const Oi={};function wp(e,t){const r=Oi[e];if(r)return r;const n=new Promise((a,o)=>{const s=document.createElement("script");t!=null&&t.module?s.type="module":s.type="text/javascript",s.src=e,s.onload=()=>{a(!0)},s.onerror=()=>{o(!1)},(t==null?void 0:t.in)==="head"?document.head.appendChild(s):document.body.appendChild(s);const i=t==null?void 0:t.attributes;i&&Object.keys(i).forEach(l=>{s.setAttribute(l,i[l])})});return Oi[e]=n,n}function Ss(e,t){const[r,n]=S.useState("loading");return S.useEffect(()=>{wp(e,t).then(()=>n("done")).catch(()=>n("error"))},[e]),r}function xp(e){return S.useEffect(()=>{const t=new URLSearchParams(Pa(e||[])),r=new URLSearchParams(window.location.search),n=new URLSearchParams({...Object.fromEntries(r),...Object.fromEntries(t)});n.size>0&&window.history.replaceState({},"",`${window.location.pathname}?${n.toString()}`)},[JSON.stringify(e)]),null}const Cp=60*60*24*360*1,Sp=60*30;function bp(e){const{hasUserConsent:t=!1,domain:r="",checkoutDomain:n=""}=e||{};S.useEffect(()=>{const a=ws(document.cookie);let o=r||window.document.location.host;if(n){const i=n.split(".").reverse(),l=o.split(".").reverse(),d=[];i.forEach((m,g)=>{m===l[g]&&d.push(m)}),o=d.reverse().join(".")}/^localhost/.test(o)&&(o="");const s=o?/^\./.test(o)?o:`.${o}`:"";t?(ua(Dt,a[Dt]||Ra(),Cp,s),ua(Ot,a[Ot]||Ra(),Sp,s)):(ua(Dt,"",0,s),ua(Ot,"",0,s))},[e,t,r,n])}function ua(e,t,r,n){document.cookie=wu(e,t,{maxage:r,domain:n,samesite:"Lax",path:"/"})}function Ep({directives:e}){const t=[],r=e instanceof Map?e.entries():Object.entries(e),n=new Set;for(const[a,o]of r){const s=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(n.has(s))throw new Error(`${a} is specified more than once`);if(n.add(s),o===!0){t.push(s);continue}if(o===!1)continue;const i=typeof o=="string"?o:o.join(" ");t.push(i?`${s} ${i}`:s)}return t.join("; ")}function Ga(e){let{type:t,data:r={},customData:n}=e,a=Me(),{publish:o,cart:s,prevCart:i,shop:l,customData:d}=En(),m=a.pathname+a.search,g={...r,customData:{...d,...n},cart:s,prevCart:i,shop:l};return S.useEffect(()=>{l!=null&&l.shopId&&(g={...g,url:window.location.href},o(t,g))},[o,m,l==null?void 0:l.shopId]),null}function _p(e){return f.jsx(Ga,{...e,type:"page_viewed"})}function $p(e){return f.jsx(Ga,{...e,type:"product_viewed"})}function jp(e){return f.jsx(Ga,{...e,type:"collection_viewed"})}function Rp(e){return f.jsx(Ga,{...e,type:"search_viewed"})}var ft={PAGE_VIEWED:"page_viewed",PRODUCT_VIEWED:"product_viewed",COLLECTION_VIEWED:"collection_viewed",CART_VIEWED:"cart_viewed",SEARCH_VIEWED:"search_viewed",PRODUCT_ADD_TO_CART:"product_added_to_cart"},Pp="https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js",Ap="https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js";function ko(e){console.error(`[h2:error:useCustomerPrivacy] Unable to setup Customer Privacy API: Missing consent.${e} configuration.`)}function Ip(e){let{withPrivacyBanner:t=!1,onVisitorConsentCollected:r,onReady:n,...a}=e;Ss(t?Ap:Pp,{attributes:{id:"customer-privacy-api"}});let{observing:o,setLoaded:s}=kp({withPrivacyBanner:t,onLoaded:n}),i=S.useMemo(()=>{let{checkoutDomain:d,storefrontAccessToken:m}=a;return d||ko("checkoutDomain"),m||ko("storefrontAccessToken"),(m.startsWith("shpat_")||m.length!==32)&&console.error("[h2:error:useCustomerPrivacy] It looks like you passed a private access token, make sure to use the public token"),{checkoutRootDomain:d,storefrontAccessToken:m,storefrontRootDomain:Ni(d),country:a.country,locale:a.locale}},[a,Ni,ko]);S.useEffect(()=>{let d=m=>{r&&r(m.detail)};return document.addEventListener("visitorConsentCollected",d),()=>{document.removeEventListener("visitorConsentCollected",d)}},[r]),S.useEffect(()=>{if(!t||o.current.privacyBanner)return;o.current.privacyBanner=!0;let d=window.privacyBanner||void 0;Object.defineProperty(window,"privacyBanner",{configurable:!0,get(){return d},set(m){if(typeof m=="object"&&m!==null&&"showPreferences"in m&&"loadBanner"in m){let g=m;g.loadBanner(i),d=Ui({privacyBanner:g,config:i}),s.privacyBanner(),Mi()}}})},[t,i,Ui,s.privacyBanner]),S.useEffect(()=>{if(o.current.customerPrivacy)return;o.current.customerPrivacy=!0;let d=null,m=window.Shopify||void 0;Object.defineProperty(window,"Shopify",{configurable:!0,get(){return m},set(g){typeof g=="object"&&g!==null&&Object.keys(g).length===0&&(m=g,Object.defineProperty(window.Shopify,"customerPrivacy",{configurable:!0,get(){return d},set(y){if(typeof y=="object"&&y!==null&&"setTrackingConsent"in y){let C=y;d={...C,setTrackingConsent:Fi({customerPrivacy:C,config:i})},m={...m,customerPrivacy:d},s.customerPrivacy(),Mi()}}}))}})},[i,Fi,s.customerPrivacy]);let l={customerPrivacy:Aa()};return t&&(l.privacyBanner=Qo()),l}var Li=!1;function Mi(){if(Li)return;Li=!0;let e=new CustomEvent("shopifyCustomerPrivacyApiLoaded");document.dispatchEvent(e)}function kp({withPrivacyBanner:e,onLoaded:t}){let r=S.useRef({customerPrivacy:!1,privacyBanner:!1}),[n,a]=S.useState(e?[!1,!1]:[!1]),o=n.every(Boolean),s={customerPrivacy:()=>{a(e?i=>[!0,i[1]]:()=>[!0])},privacyBanner:()=>{e&&a(i=>[i[0],!0])}};return S.useEffect(()=>{o&&t&&t()},[o,t]),{observing:r,setLoaded:s}}function Ni(e){if(typeof window>"u")return;let t=window.document.location.host,r=e.split(".").reverse(),n=t.split(".").reverse(),a=[];return r.forEach((o,s)=>{o===n[s]&&a.push(o)}),a.reverse().join(".")}function Fi({customerPrivacy:e,config:t}){let r=e.setTrackingConsent,{locale:n,country:a,...o}=t;function s(i,l){r({...o,headlessStorefront:!0,...i},l)}return s}function Ui({privacyBanner:e,config:t}){let r=e.loadBanner,n=e.showPreferences;function a(s){if(typeof s=="object"){r({...t,...s});return}r(t)}function o(s){if(typeof s=="object"){n({...t,...s});return}n(t)}return{loadBanner:a,showPreferences:o}}function Aa(){var e;try{return window.Shopify&&window.Shopify.customerPrivacy?(e=window.Shopify)==null?void 0:e.customerPrivacy:null}catch{return null}}function Qo(){try{return window&&(window!=null&&window.privacyBanner)?window.privacyBanner:null}catch{return null}}var Tp="2025.5.0";function Dp(){let e=Aa();if(!e)throw new Error("Shopify Customer Privacy API not available. Must be used within a useEffect. Make sure to load the Shopify Customer Privacy API with useCustomerPrivacy() or <AnalyticsProvider>.");return e}function Op({consent:e,onReady:t,domain:r}){let{subscribe:n,register:a,canTrack:o}=En(),[s,i]=S.useState(!1),[l,d]=S.useState(!1),m=S.useRef(!1),{checkoutDomain:g,storefrontAccessToken:y,language:C}=e,{ready:v}=a("Internal_Shopify_Analytics");return Ip({...e,locale:C,checkoutDomain:g||"mock.shop",storefrontAccessToken:y||"abcdefghijklmnopqrstuvwxyz123456",onVisitorConsentCollected:()=>d(!0),onReady:()=>d(!0)}),bp({hasUserConsent:l?o():!0,domain:r,checkoutDomain:g}),S.useEffect(()=>{m.current||(m.current=!0,n(ft.PAGE_VIEWED,Mp),n(ft.PRODUCT_VIEWED,Np),n(ft.COLLECTION_VIEWED,Fp),n(ft.SEARCH_VIEWED,Up),n(ft.PRODUCT_ADD_TO_CART,Hp),i(!0))},[n]),S.useEffect(()=>{s&&l&&(v(),t())},[s,l,t]),null}function ca(e){console.error(`[h2:error:ShopifyAnalytics] Unable to send Shopify analytics: Missing shop.${e} configuration.`)}function bn(e){var n,a,o,s;let t=Dp(),r=t.analyticsProcessingAllowed();if(!((n=e==null?void 0:e.shop)!=null&&n.shopId)){ca("shopId");return}if(!((a=e==null?void 0:e.shop)!=null&&a.acceptedLanguage)){ca("acceptedLanguage");return}if(!((o=e==null?void 0:e.shop)!=null&&o.currency)){ca("currency");return}if(!((s=e==null?void 0:e.shop)!=null&&s.hydrogenSubchannelId)){ca("hydrogenSubchannelId");return}return{shopifySalesChannel:"hydrogen",assetVersionId:Tp,...e.shop,hasUserConsent:r,...tp(),ccpaEnforced:!t.saleOfDataAllowed(),gdprEnforced:!(t.marketingAllowed()&&t.analyticsProcessingAllowed()),analyticsAllowed:t.analyticsProcessingAllowed(),marketingAllowed:t.marketingAllowed(),saleOfDataAllowed:t.saleOfDataAllowed()}}function Lp(e,t){if(t===null)return;let r=bn(e);return r?{...r,cartId:t.id}:void 0}var Nt={};function Mp(e){let t=bn(e);t&&(Sn({eventName:ot.PAGE_VIEW_2,payload:{...t,...Nt}}),Nt={})}function Np(e){let t=bn(e);if(t&&Au({type:"product",products:e.products})){let r=Ko(e.products);Nt={pageType:Er.product,resourceId:r[0].productGid},t={...t,...Nt,products:Ko(e.products)},Sn({eventName:ot.PRODUCT_VIEW,payload:t})}}function Fp(e){let t=bn(e);t&&(Nt={pageType:Er.collection,resourceId:e.collection.id},t={...t,...Nt,collectionHandle:e.collection.handle,collectionId:e.collection.id},Sn({eventName:ot.COLLECTION_VIEW,payload:t}))}function Up(e){let t=bn(e);t&&(Nt={pageType:Er.search},t={...t,...Nt,searchString:e.searchTerm},Sn({eventName:ot.SEARCH_VIEW,payload:t}))}function Hp(e){let{cart:t,currentLine:r}=e,n=Lp(e,t);!n||!(r!=null&&r.id)||Bp({matchedLine:r,eventPayload:n})}function Bp({matchedLine:e,eventPayload:t}){let r={id:e.merchandise.product.id,variantId:e.merchandise.id,title:e.merchandise.product.title,variantTitle:e.merchandise.title,vendor:e.merchandise.product.vendor,price:e.merchandise.price.amount,quantity:e.quantity,productType:e.merchandise.product.productType,sku:e.merchandise.sku};Au({type:"cart",products:[r]})&&Sn({eventName:ot.ADD_TO_CART,payload:{...t,products:Ko([r])}})}function Kt(e,t,r,n){if(e==="cart"){let a=`${r?"merchandise":"merchandise.product"}.${t}`;console.error(`[h2:error:ShopifyAnalytics] Can't set up cart analytics events because the \`cart.lines[].${a}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartLine on CartLine\` is defined and make sure \`${a}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L25-L56.`)}else{let a=`${n||t}`;console.error(`[h2:error:ShopifyAnalytics] Can't set up product view analytics events because the \`${a}\` is missing from your \`<Analytics.ProductView>\`. Make sure \`${a}\` is part of your products data prop. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/routes/products.%24handle.tsx#L159-L165.`)}}function Au({type:e,products:t}){return!t||t.length===0?(Kt(e,"",!1,"data.products"),!1):(t.forEach(r=>{if(!r.id)return Kt(e,"id",!1),!1;if(!r.title)return Kt(e,"title",!1),!1;if(!r.price)return Kt(e,"price.amount",!0,"price"),!1;if(!r.vendor)return Kt(e,"vendor",!1),!1;if(!r.variantId)return Kt(e,"id",!0,"variantId"),!1;if(!r.variantTitle)return Kt(e,"title",!0,"variantTitle"),!1}),!0)}function Ko(e){return e.map(t=>{let r={productGid:t.id,variantGid:t.variantId,name:t.title,variantName:t.variantTitle,brand:t.vendor,price:t.price,quantity:t.quantity||1,category:t.productType};return t.sku&&(r.sku=t.sku),t.productType&&(r.category=t.productType),r})}function Hi(e){console.error(`[h2:error:CartAnalytics] Can't set up cart analytics events because the \`cart.${e}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartApiQuery on Cart\` is defined and make sure \`${e}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L59.`)}function Vp({cart:e,setCarts:t}){let{publish:r,shop:n,customData:a,canTrack:o,cart:s,prevCart:i}=En(),l=S.useRef(null);return S.useEffect(()=>{if(e)return Promise.resolve(e).then(d=>{if(d&&d.lines){if(!d.id){Hi("id");return}if(!d.updatedAt){Hi("updatedAt");return}}t(({cart:m,prevCart:g})=>(d==null?void 0:d.updatedAt)!==(m==null?void 0:m.updatedAt)?{cart:d,prevCart:m}:{cart:m,prevCart:g})}),()=>{}},[t,e]),S.useEffect(()=>{if(!s||!(s!=null&&s.updatedAt)||(s==null?void 0:s.updatedAt)===(i==null?void 0:i.updatedAt))return;let d;try{d=JSON.parse(localStorage.getItem("cartLastUpdatedAt")||"")}catch{d=null}if(s.id===(d==null?void 0:d.id)&&s.updatedAt===(d==null?void 0:d.updatedAt))return;let m={eventTimestamp:Date.now(),cart:s,prevCart:i,shop:n,customData:a};if(s.updatedAt===l.current)return;l.current=s.updatedAt,r("cart_updated",m),localStorage.setItem("cartLastUpdatedAt",JSON.stringify({id:s.id,updatedAt:s.updatedAt}));let g=i!=null&&i.lines?_t(i==null?void 0:i.lines):[],y=s.lines?_t(s.lines):[];g==null||g.forEach(C=>{let v=y.filter(b=>C.id===b.id);if((v==null?void 0:v.length)===1){let b=v[0];C.quantity<b.quantity?r("product_added_to_cart",{...m,prevLine:C,currentLine:b}):C.quantity>b.quantity&&r("product_removed_from_cart",{...m,prevLine:C,currentLine:b})}else r("product_removed_from_cart",{...m,prevLine:C})}),y==null||y.forEach(C=>{let v=g.filter(b=>C.id===b.id);(!v||v.length===0)&&r("product_added_to_cart",{...m,currentLine:C})})},[s,i,r,n,a,o]),null}var qp="https://cdn.shopify.com/shopifycloud/perf-kit/shopify-perf-kit-spa.min.js";function zp({shop:e}){let t=S.useRef(!1),{subscribe:r,register:n}=En(),{ready:a}=n("Internal_Shopify_Perf_Kit"),o=Ss(qp,{attributes:{id:"perfkit","data-application":"hydrogen","data-shop-id":ze(e.shopId).id.toString(),"data-storefront-id":e.hydrogenSubchannelId,"data-monorail-region":"global","data-spa-mode":"true","data-resource-timing-sampling-rate":"100"}});return S.useEffect(()=>{o!=="done"||t.current||(t.current=!0,r(ft.PAGE_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.navigate()}),r(ft.PRODUCT_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("product")}),r(ft.COLLECTION_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("collection")}),r(ft.SEARCH_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("search")}),r(ft.CART_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("cart")}),a())},[r,a,o]),null}var Bi=new Set,Ia=e=>{Bi.has(e)||(console.warn(e),Bi.add(e))},Vi=new Set,qi=e=>{Vi.has(e)||(console.error(new Error(e)),Vi.add(e))},Wp={canTrack:()=>!1,cart:null,customData:{},prevCart:null,publish:()=>{},shop:null,subscribe:()=>{},register:()=>({ready:()=>{}}),customerPrivacy:null,privacyBanner:null},Iu=S.createContext(Wp),va=new Map,ln={};function ku(){return Object.values(ln).every(Boolean)}function zi(e,t){var r;va.has(e)||va.set(e,new Map),(r=va.get(e))==null||r.set(t.toString(),t)}var wa=new Map;function Wi(e,t){if(!ku()){wa.set(e,t);return}Tu(e,t)}function Tu(e,t){(va.get(e)??new Map).forEach((r,n)=>{try{r(t)}catch(a){typeof a=="object"&&a instanceof Error?console.error("Analytics publish error",a.message,n,a.stack):console.error("Analytics publish error",a,n)}})}function Gi(e){return ln.hasOwnProperty(e)||(ln[e]=!1),{ready:()=>{ln[e]=!0,ku()&&wa.size>0&&(wa.forEach((t,r)=>{Tu(r,t)}),wa.clear())}}}function Yi(){try{return window.Shopify.customerPrivacy.analyticsProcessingAllowed()}catch{}return!1}function Qi(e,t){return`[h2:error:Analytics.Provider] - ${e} is required. Make sure ${t} is defined in your environment variables. See https://h2o.fyi/analytics/consent to learn how to setup environment variables in the Shopify admin.`}function Gp({canTrack:e,cart:t,children:r,consent:n,customData:a={},shop:o=null,cookieDomain:s}){var j;let i=S.useRef(!1),{shop:l}=Yp(o),[d,m]=S.useState(!!e),[g,y]=S.useState({cart:null,prevCart:null}),[C,v]=S.useState(e?()=>e:()=>Yi);if(l)if(/\/68817551382$/.test(l.shopId))Ia("[h2:error:Analytics.Provider] - Mock shop is used. Analytics will not work properly.");else{if(!n.checkoutDomain){let $=Qi("consent.checkoutDomain","PUBLIC_CHECKOUT_DOMAIN");qi($)}if(!n.storefrontAccessToken){let $=Qi("consent.storefrontAccessToken","PUBLIC_STOREFRONT_API_TOKEN");qi($)}n!=null&&n.country||(n.country="US"),n!=null&&n.language||(n.language="EN"),n.withPrivacyBanner===void 0&&(n.withPrivacyBanner=!1)}let b=S.useMemo(()=>({canTrack:C,...g,customData:a,publish:C()?Wi:()=>{},shop:l,subscribe:zi,register:Gi,customerPrivacy:Aa(),privacyBanner:Qo()}),[d,C,g,(j=g.cart)==null?void 0:j.updatedAt,g.prevCart,Wi,zi,a,l,Gi,JSON.stringify(ln),Aa,Qo]);return f.jsxs(Iu.Provider,{value:b,children:[r,!!l&&f.jsx(_p,{}),!!l&&!!t&&f.jsx(Vp,{cart:t,setCarts:y}),!!l&&n.checkoutDomain&&f.jsx(Op,{consent:n,onReady:()=>{i.current=!0,m(!0),v(e?()=>e:()=>Yi)},domain:s}),!!l&&f.jsx(zp,{shop:l})]})}function En(){let e=S.useContext(Iu);if(!e)throw new Error("[h2:error:useAnalytics] 'useAnalytics()' must be a descendent of <AnalyticsProvider/>");return e}function Yp(e){let[t,r]=S.useState(null);return S.useEffect(()=>(Promise.resolve(e).then(r),()=>{}),[r,e]),{shop:t}}async function Qp({storefront:e,publicStorefrontId:t="0"}){return e.query(Kp,{cache:e.CacheLong()}).then(({shop:r,localization:n})=>({shopId:r.id,acceptedLanguage:n.language.isoCode,currency:n.country.currency.isoCode,hydrogenSubchannelId:t}))}var Kp=`#graphql
  query ShopData(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      id
    }
    localization {
      country {
        currency {
          isoCode
        }
      }
      language {
        isoCode
      }
    }
  }
`,Ya={CollectionView:jp,ProductView:$p,Provider:Gp,SearchView:Rp};function Xt(e,t){return Du(e.headers,t)}function Du(e,t){var n;let r=((n=e==null?void 0:e.get)==null?void 0:n.call(e,t))??(e==null?void 0:e[t]);return typeof r=="string"?r:null}function Ki(e){return{requestId:e?Xt(e,"request-id"):void 0,purpose:e?Xt(e,"purpose"):void 0}}function ka(e,t={}){let r=new Error,n=(a,o="Error")=>{let s=(r.stack??"").split(`
`).slice(3+(t.stackOffset??0)).join(`
`).replace(/ at loader(\d+) \(/,(i,l)=>i.replace(l,""));return`${o}: ${a}
`+s};return e.then(a=>{if(a!=null&&a.errors&&Array.isArray(a.errors)){let o=typeof t.logErrors=="function"?t.logErrors:()=>t.logErrors??!1;a.errors.forEach(s=>{s&&(s.stack=n(s.message,s.name),o(s)&&console.error(s))})}return a}).catch(a=>{throw a&&(a.stack=n(a.message,a.name)),a})}var wt=void 0,Qa="public",Jp="private",Ou="no-store",Ji={maxAge:"max-age",staleWhileRevalidate:"stale-while-revalidate",sMaxAge:"s-maxage",staleIfError:"stale-if-error"};function Lu(e){let t=[];return Object.keys(e).forEach(r=>{r==="mode"?t.push(e[r]):Ji[r]&&t.push(`${Ji[r]}=${e[r]}`)}),t.join(", ")}function Zp(){return{mode:Ou}}function bs(e){if(e!=null&&e.mode&&(e==null?void 0:e.mode)!==Qa&&(e==null?void 0:e.mode)!==Jp)throw Error("'mode' must be either 'public' or 'private'")}function Es(e){return bs(e),{mode:Qa,maxAge:1,staleWhileRevalidate:9,...e}}function Xp(e){return bs(e),{mode:Qa,maxAge:3600,staleWhileRevalidate:82800,...e}}function _s(e){return bs(e),{mode:Qa,maxAge:1,staleWhileRevalidate:86399,...e}}function em(e){return e}function hn(e){return String(e).includes("__proto__")?JSON.parse(e,tm):JSON.parse(e)}function tm(e,t){if(e!=="__proto__")return t}function xa(e,t){return e&&t?{...e,...t}:e||_s()}function Jo(e){return Lu(xa(e))}async function rm(e,t){if(!e)return;let r=await e.match(t);if(r)return r}async function nm(e,t,r,n){if(!e)return;let a=xa(n),o=Jo(xa(a,{maxAge:(a.maxAge||0)+(a.staleWhileRevalidate||0)})),s=Jo(xa(a));r.headers.set("cache-control",o),r.headers.set("real-cache-control",s),r.headers.set("cache-put-date",String(Date.now())),await e.put(t,r)}async function am(e,t){e&&await e.delete(t)}function om(e,t){let r=e.headers.get("real-cache-control"),n=0;if(r){let a=r.match(/max-age=(\d*)/);a&&a.length>1&&(n=parseFloat(a[1]))}return[(Date.now()-Number(t))/1e3,n]}function sm(e,t){let r=t.headers.get("cache-put-date");if(!r)return!1;let[n,a]=om(t,r);return n>a}var $s={get:rm,set:nm,delete:am,generateDefaultCacheControlHeader:Jo,isStale:sm};function js(e){return`https://shopify.dev/?${e}`}function im(e){return e||_s()}async function lm(e,t){if(!e)return;let r=js(t),n=new Request(r),a=await $s.get(e,n);if(!a)return;let o=await a.text();try{return[hn(o),a]}catch{return[o,a]}}async function um(e,t,r,n){if(!e)return;let a=js(t),o=new Request(a),s=new Response(JSON.stringify(r));await $s.set(e,o,s,im(n))}function cm(e,t){return $s.isStale(new Request(js(e)),t)}function dm(e){let t=Array.isArray(e)?e:[e],r="";for(let n of t)n!=null&&(typeof n=="object"?r+=JSON.stringify(n):r+=n.toString());return encodeURIComponent(r)}var To=new Set;async function fm(e,t,{strategy:r=Es(),cacheInstance:n,shouldCacheResult:a=()=>!0,waitUntil:o,debugInfo:s}){let i=dm([...typeof e=="string"?[e]:e]),l=C=>{var v,b,j,$;C.displayName,(v=C.response)==null||v.url,(b=C.response)!=null&&b.status,(j=C.response)!=null&&j.statusText,Array.from((($=C.response)==null?void 0:$.headers.entries())||[])},d;if(!n||!r||r.mode===Ou)return await t({addDebugData:l});let m=C=>um(n,i,{value:C,debugInfo:void 0},r),g=await lm(n,i);if(g&&typeof g[0]!="string"){let[{value:C,debugInfo:v},b]=g,j=cm(i,b)?"STALE":"HIT";if(!To.has(i)&&j==="STALE"){To.add(i);let $=Promise.resolve().then(async()=>{let I=Date.now();try{let L=await t({addDebugData:l});a(L)&&(await m(L),d==null||d({result:L,cacheStatus:"PUT",overrideStartTime:I}))}catch(L){L.message&&(L.message="SWR in sub-request failed: "+L.message),console.error(L)}finally{To.delete(i)}});o==null||o($)}return C}let y=await t({addDebugData:l});if(a(y)){let C=Promise.resolve().then(async()=>{await m(y)});o==null||o(C)}return y}function hm(e,t){return[e,{status:t.status,statusText:t.statusText,headers:Array.from(t.headers.entries())}]}function Zi([e,t]){return[e,new Response(e,t)]}async function pm(e,t,{cacheInstance:r,cache:n,cacheKey:a=[e,t],shouldCacheResponse:o,waitUntil:s,debugInfo:i}){return!n&&(!t.method||t.method==="GET")&&(n=Es()),fm(a,async()=>{let l=await fetch(e,t);if(!l.ok)return l;let d=await l.text().catch(()=>"");try{d&&(d=hn(d))}catch{}return hm(d,l)},{cacheInstance:r,waitUntil:s,strategy:n??null,debugInfo:i,shouldCacheResult:l=>"ok"in l?!1:o(...Zi(l))}).then(l=>"ok"in l?[null,l]:Zi(l))}var Mu="cartFormInput";function xe({children:e,action:t,inputs:r,route:n,fetcherKey:a}){let o=gs({key:a});return f.jsxs(o.Form,{action:n||"",method:"post",children:[(t||r)&&f.jsx("input",{type:"hidden",name:Mu,value:JSON.stringify({action:t,inputs:r})}),typeof e=="function"?e(o):e]})}xe.INPUT_NAME=Mu;xe.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",GiftCardCodesUpdate:"GiftCardCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete",DeliveryAddressesAdd:"DeliveryAddressesAdd",DeliveryAddressesUpdate:"DeliveryAddressesUpdate",DeliveryAddressesRemove:"DeliveryAddressesRemove"};function mm(e){let t={};for(let s of e.entries()){let i=s[0],l=e.getAll(i);t[i]=l.length>1?l:s[1],t[i]==="on"?t[i]=!0:t[i]==="off"&&(t[i]=!1)}let{cartFormInput:r,...n}=t,{action:a,inputs:o}=r?JSON.parse(String(r)):{};return{action:a,inputs:{...o,...n}}}xe.getFormInput=mm;var gm=e=>{let t=vu(Du(e,"Cookie")||"");return()=>t.cart?`gid://shopify/Cart/${t.cart}`:void 0},ym=e=>t=>{let r=new Headers;return r.append("Set-Cookie",wu("cart",t.split("/").pop()||"",{path:"/",...e})),r},Xi="Custom-Storefront-Request-Group-ID",el="X-Shopify-Storefront-Access-Token",tl="X-SDK-Variant",rl="X-SDK-Variant-Source",nl="X-SDK-Version";function vm(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`weak-${Math.random().toString(16).substring(2)}`}var Nu="2025.5.0";function Ta(e){return e.replace(/\s*#.*$/gm,"").replace(/\s+/gm," ").trim()}var wm=/(^|}\s)query[\s({]/im,xm=/(^|}\s)mutation[\s({]/im;function Fu(e,t){if(!wm.test(e))throw new Error(`[h2:error:${t}] Can only execute queries`)}function Uu(e,t){if(!xm.test(e))throw new Error(`[h2:error:${t}] Can only execute mutations`)}var Rs=class extends Error{constructor(t,r={}){let n=(r.clientOperation?`[h2:error:${r.clientOperation}] `:"")+t+(r.requestId?` - Request ID: ${r.requestId}`:"");super(n);Zr(this,"locations");Zr(this,"path");Zr(this,"extensions");this.name="GraphQLError",this.extensions=r.extensions,this.locations=r.locations,this.path=r.path,this.stack=r.stack||void 0;try{this.cause=JSON.stringify({...typeof r.cause=="object"?r.cause:{},requestId:r.requestId})}catch{r.cause&&(this.cause=r.cause)}}get[Symbol.toStringTag](){return this.name}toString(){let t=`${this.name}: ${this.message}`;if(this.path)try{t+=` | path: ${JSON.stringify(this.path)}`}catch{}if(this.extensions)try{t+=` | extensions: ${JSON.stringify(this.extensions)}`}catch{}return t+=`
`,this.stack&&(t+=`${this.stack.slice(this.stack.indexOf(`
`)+1)}
`),t}toJSON(){return{name:"Error",message:""}}};function Zo({url:e,response:t,errors:r,type:n,query:a,queryVariables:o,ErrorConstructor:s=Error,client:i="storefront"}){var m;let l=(typeof r=="string"?r:(m=r==null?void 0:r.map)==null?void 0:m.call(r,g=>g.message).join(`
`))||`URL: ${e}
API response error: ${t.status}`,d=new Rs(l,{query:a,queryVariables:o,cause:{errors:r},clientOperation:`${i}.${n}`,requestId:t.headers.get("x-request-id")});throw new s(d.message,{cause:d.cause})}var Cm={language:"EN",country:"US"};function Sm(e){let{storefrontHeaders:t,cache:r,waitUntil:n,i18n:a,storefrontId:o,logErrors:s=!0,...i}=e,{getPublicTokenHeaders:l,getPrivateTokenHeaders:d,getStorefrontApiUrl:m,getShopifyDomain:g}=Rh(i),y=(i.privateStorefrontToken?d:l)({contentType:"json",buyerIp:(t==null?void 0:t.buyerIp)||""});if(y[Xi]=(t==null?void 0:t.requestGroupId)||vm(),o&&(y[Dh]=o),y["user-agent"]=`Hydrogen ${Nu}`,t&&t.cookie){let b=ws(t.cookie??"");b[Dt]&&(y[Oh]=b[Dt]),b[Ot]&&(y[Lh]=b[Ot])}let C=JSON.stringify({"content-type":y["content-type"],"user-agent":y["user-agent"],[tl]:y[tl],[rl]:y[rl],[nl]:y[nl],[el]:y[el]});async function v({query:b,mutation:j,variables:$,cache:I,headers:L=[],storefrontApiVersion:F,displayName:O,stackInfo:D}){let H=L instanceof Headers?Object.fromEntries(L.entries()):Array.isArray(L)?Object.fromEntries(L):L,q=b??j,W={...$};a&&(!($!=null&&$.country)&&/\$country/.test(q)&&(W.country=a.country),!($!=null&&$.language)&&/\$language/.test(q)&&(W.language=a.language));let G=m({storefrontApiVersion:F}),Z=JSON.stringify({query:q,variables:W}),ce={method:"POST",headers:{...y,...H},body:Z},z=[G,ce.method,C,ce.body],[J,ue]=await pm(G,ce,{cacheInstance:j?void 0:r,cache:I||_s(),cacheKey:z,waitUntil:n,shouldCacheResponse:fe=>!(fe!=null&&fe.errors),debugInfo:{requestId:ce.headers[Xi],displayName:O,url:G,stackInfo:D,graphql:Z,purpose:t==null?void 0:t.purpose}}),de={url:G,response:ue,type:j?"mutation":"query",query:q,queryVariables:W,errors:void 0};if(!ue.ok){let fe,R=J;try{R??(R=await ue.text()),fe=hn(R)}catch{fe=[{message:R??"Could not parse Storefront API response"}]}Zo({...de,errors:fe})}let{data:ae,errors:ge}=J,Se=ge==null?void 0:ge.map(({message:fe,...R})=>new Rs(fe,{...R,clientOperation:`storefront.${de.type}`,requestId:ue.headers.get("x-request-id"),queryVariables:W,query:q}));return Ie(ae,Se)}return{storefront:{query(b,j){b=Ta(b),Fu(b,"storefront.query");let $=xr==null?void 0:xr(b);return ka(v({...j,query:b,stackInfo:wt==null?void 0:wt($)}),{stackOffset:$,logErrors:s})},mutate(b,j){b=Ta(b),Uu(b,"storefront.mutate");let $=xr==null?void 0:xr(b);return ka(v({...j,mutation:b,stackInfo:wt==null?void 0:wt($)}),{stackOffset:$,logErrors:s})},cache:r,CacheNone:Zp,CacheLong:Xp,CacheShort:Es,CacheCustom:em,generateCacheControlHeader:Lu,getPublicTokenHeaders:l,getPrivateTokenHeaders:d,getShopifyDomain:g,getApiUrl:m,i18n:a??Cm}}}var xr=void 0;function Ie(e,t){return{...e,...t&&{errors:t}}}function bm({storefront:e,customerAccount:t,getCartId:r,cartFragment:n}){return async a=>{let o=r();if(!o)return null;let[s,{cart:i,errors:l}]=await Promise.all([t?t.isLoggedIn():!1,e.query(Em(n),{variables:{cartId:o,...a},cache:e.CacheNone()})]);if(s&&(i!=null&&i.checkoutUrl)){let d=new URL(i.checkoutUrl);d.searchParams.set("logged_in","true"),i.checkoutUrl=d.toString()}return i||l?Ie(i,l):null}}var Em=(e=_m)=>`#graphql
  query CartQuery(
    $cartId: ID!
    $numCartLines: Int = 100
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartApiQuery
    }
  }

  ${e}
`,_m=`#graphql
  fragment CartApiQuery on Cart {
    updatedAt
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...CartApiMoney
              }
              price {
                ...CartApiMoney
              }
              requiresShipping
              title
              image {
                ...CartApiImage
              }
              product {
                handle
                title
                id
                vendor
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      applicable
      code
    }
  }

  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartApiImage on Image {
    id
    url
    altText
    width
    height
  }
`,We=`#graphql
  fragment CartApiError on CartUserError {
    message
    field
    code
  }
`,Ge=`#graphql
  fragment CartApiMutation on Cart {
    id
    totalQuantity
    checkoutUrl
  }
`,Ye=`#graphql
  fragment CartApiWarning on CartWarning {
    code
    message
    target
  }
`;function $m(e){return async(t,r)=>{let n=e.customerAccount?await e.customerAccount.getBuyer():void 0,{cartId:a,...o}=r||{},{buyerIdentity:s,...i}=t,{cartCreate:l,errors:d}=await e.storefront.mutate(jm(e.cartFragment),{variables:{input:{...i,buyerIdentity:{...n,...s}},...o}});return Ie(l,d)}}var jm=(e=Ge)=>`#graphql
  mutation cartCreate(
    $input: CartInput!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartApiMutation
        checkoutUrl
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Rm(e){return async(t,r)=>{let{cartLinesAdd:n,errors:a}=await e.storefront.mutate(Pm(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return Ie(n,a)}}var Pm=(e=Ge)=>`#graphql
  mutation cartLinesAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`,Hu="__h_pending_";function Am(e){return Hu+e}function Xo(e){return e.startsWith(Hu)}function Bu(e,t){if(t.some(r=>Xo(typeof r=="string"?r:r.id)))throw new Error(`Tried to perform an action on an optimistic line. Make sure to disable your "${e}" CartForm action when the line is optimistic.`)}function Im(e){return async(t,r)=>{Bu("updateLines",t);let{cartLinesUpdate:n,errors:a}=await e.storefront.mutate(km(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return Ie(n,a)}}var km=(e=Ge)=>`#graphql
  mutation cartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Tm(e){return async(t,r)=>{Bu("removeLines",t);let{cartLinesRemove:n,errors:a}=await e.storefront.mutate(Dm(e.cartFragment),{variables:{cartId:e.getCartId(),lineIds:t,...r}});return Ie(n,a)}}var Dm=(e=Ge)=>`#graphql
  mutation cartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Om(e){return async(t,r)=>{let n=t.filter((s,i,l)=>l.indexOf(s)===i),{cartDiscountCodesUpdate:a,errors:o}=await e.storefront.mutate(Lm(e.cartFragment),{variables:{cartId:e.getCartId(),discountCodes:n,...r}});return Ie(a,o)}}var Lm=(e=Ge)=>`#graphql
  mutation cartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Mm(e){return async(t,r)=>{t.companyLocationId&&e.customerAccount&&e.customerAccount.setBuyer({companyLocationId:t.companyLocationId});let n=e.customerAccount?await e.customerAccount.getBuyer():void 0,{cartBuyerIdentityUpdate:a,errors:o}=await e.storefront.mutate(Nm(e.cartFragment),{variables:{cartId:e.getCartId(),buyerIdentity:{...n,...t},...r}});return Ie(a,o)}}var Nm=(e=Ge)=>`#graphql
  mutation cartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Fm(e){return async(t,r)=>{let{cartNoteUpdate:n,errors:a}=await e.storefront.mutate(Um(e.cartFragment),{variables:{cartId:e.getCartId(),note:t,...r}});return Ie(n,a)}}var Um=(e=Ge)=>`#graphql
  mutation cartNoteUpdate(
    $cartId: ID!
    $note: String!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Hm(e){return async(t,r)=>{let{cartSelectedDeliveryOptionsUpdate:n,errors:a}=await e.storefront.mutate(Bm(e.cartFragment),{variables:{cartId:e.getCartId(),selectedDeliveryOptions:t,...r}});return Ie(n,a)}}var Bm=(e=Ge)=>`#graphql
  mutation cartSelectedDeliveryOptionsUpdate(
    $cartId: ID!
    $selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartSelectedDeliveryOptionsUpdate(cartId: $cartId, selectedDeliveryOptions: $selectedDeliveryOptions) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Vm(e){return async(t,r)=>{let{cartAttributesUpdate:n,errors:a}=await e.storefront.mutate(qm(e.cartFragment),{variables:{cartId:(r==null?void 0:r.cartId)||e.getCartId(),attributes:t}});return Ie(n,a)}}var qm=(e=Ge)=>`#graphql
  mutation cartAttributesUpdate(
    $cartId: ID!
    $attributes: [AttributeInput!]!
  ) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function zm(e){return async(t,r)=>{let n=(r==null?void 0:r.cartId)||e.getCartId(),a=t.map(i=>({...i,ownerId:n})),{cartMetafieldsSet:o,errors:s}=await e.storefront.mutate(Wm(),{variables:{metafields:a}});return Ie({cart:{id:n},...o},s)}}var Wm=()=>`#graphql
  mutation cartMetafieldsSet(
    $metafields: [CartMetafieldsSetInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartMetafieldsSet(metafields: $metafields) {
      userErrors {
        code
        elementIndex
        field
        message
      }
    }
  }
`;function Gm(e){return async(t,r)=>{let n=(r==null?void 0:r.cartId)||e.getCartId(),{cartMetafieldDelete:a,errors:o}=await e.storefront.mutate(Ym(),{variables:{input:{ownerId:n,key:t}}});return Ie({cart:{id:n},...a},o)}}var Ym=()=>`#graphql
  mutation cartMetafieldDelete(
    $input: CartMetafieldDeleteInput!
  ) {
    cartMetafieldDelete(input: $input) {
      userErrors {
        code
        field
        message
      }
    }
  }
`;function Qm(e){return async(t,r)=>{let n=t.filter((s,i,l)=>l.indexOf(s)===i),{cartGiftCardCodesUpdate:a,errors:o}=await e.storefront.mutate(Km(e.cartFragment),{variables:{cartId:e.getCartId(),giftCardCodes:n,...r}});return Ie(a,o)}}var Km=(e=Ge)=>`#graphql
  mutation cartGiftCardCodesUpdate(
    $cartId: ID!
    $giftCardCodes: [String!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartGiftCardCodesUpdate(cartId: $cartId, giftCardCodes: $giftCardCodes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Jm(e){return async(t,r)=>{let{cartDeliveryAddressesAdd:n,errors:a}=await e.storefront.mutate(Zm(e.cartFragment),{variables:{cartId:e.getCartId(),addresses:t,...r}});return Ie(n,a)}}var Zm=(e=Ge)=>`#graphql
  mutation cartDeliveryAddressesAdd(
    $cartId: ID!
    $addresses: [CartSelectableAddressInput!]!,
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDeliveryAddressesAdd(addresses: $addresses, cartId: $cartId) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function Xm(e){return async(t,r)=>{let{cartDeliveryAddressesRemove:n,errors:a}=await e.storefront.mutate(eg(e.cartFragment),{variables:{cartId:e.getCartId(),addressIds:t,...r}});return Ie(n,a)}}var eg=(e=Ge)=>`#graphql
  mutation cartDeliveryAddressesRemove(
    $cartId: ID!
    $addressIds: [ID!]!,
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDeliveryAddressesRemove(addressIds: $addressIds, cartId: $cartId) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function tg(e){return async(t,r)=>{let{cartDeliveryAddressesUpdate:n,errors:a}=await e.storefront.mutate(rg(e.cartFragment),{variables:{cartId:e.getCartId(),addresses:t,...r}});return Ie(n,a)}}var rg=(e=Ge)=>`#graphql
  mutation cartDeliveryAddressesUpdate(
    $cartId: ID!
    $addresses: [CartSelectableAddressUpdateInput!]!,
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDeliveryAddressesUpdate(addresses: $addresses, cartId: $cartId) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Ye}
`;function ng(e){let{getCartId:t,setCartId:r,storefront:n,customerAccount:a,cartQueryFragment:o,cartMutateFragment:s,buyerIdentity:i}=e,l=t(),d=()=>l||t(),m={storefront:n,getCartId:d,cartFragment:s,customerAccount:a},g=$m(m),y=async function(...v){var j;v[0].buyerIdentity={...i,...v[0].buyerIdentity};let b=await g(...v);return l=(j=b==null?void 0:b.cart)==null?void 0:j.id,b},C={get:bm({storefront:n,customerAccount:a,getCartId:d,cartFragment:o}),getCartId:d,setCartId:r,create:y,addLines:async(v,b)=>{let j=v.map($=>({attributes:$.attributes,quantity:$.quantity,merchandiseId:$.merchandiseId,sellingPlanId:$.sellingPlanId}));return l||b!=null&&b.cartId?await Rm(m)(j,b):await y({lines:j,buyerIdentity:i},b)},updateLines:Im(m),removeLines:Tm(m),updateDiscountCodes:async(v,b)=>l||b!=null&&b.cartId?await Om(m)(v,b):await y({discountCodes:v},b),updateGiftCardCodes:async(v,b)=>l||b!=null&&b.cartId?await Qm(m)(v,b):await y({giftCardCodes:v},b),updateBuyerIdentity:async(v,b)=>l||b!=null&&b.cartId?await Mm(m)(v,b):await y({buyerIdentity:v},b),updateNote:async(v,b)=>l||b!=null&&b.cartId?await Fm(m)(v,b):await y({note:v},b),updateSelectedDeliveryOption:Hm(m),updateAttributes:async(v,b)=>l||b!=null&&b.cartId?await Vm(m)(v,b):await y({attributes:v},b),setMetafields:async(v,b)=>l||b!=null&&b.cartId?await zm(m)(v,b):await y({metafields:v},b),deleteMetafield:Gm(m),addDeliveryAddresses:Jm(m),removeDeliveryAddresses:Xm(m),updateDeliveryAddresses:tg(m)};return"customMethods"in e?{...C,...e.customMethods??{}}:C}function Vu(e){let t=Of();if(!t||!t.length)return e;let r=e!=null&&e.lines?structuredClone(e):{lines:{nodes:[]}},n=r.lines.nodes,a=!1;for(let{formData:o}of t){if(!o)continue;let s=xe.getFormInput(o);if(s.action===xe.ACTIONS.LinesAdd)for(let i of s.inputs.lines){if(!i.selectedVariant){console.error("[h2:error:useOptimisticCart] No selected variant was passed in the cart action. Make sure to pass the selected variant if you want to use an optimistic cart");continue}let l=n.find(d=>{var m;return d.merchandise.id===((m=i.selectedVariant)==null?void 0:m.id)});a=!0,l?(l.quantity=(l.quantity||1)+(i.quantity||1),l.isOptimistic=!0):n.unshift({id:Am(i.selectedVariant.id),merchandise:i.selectedVariant,isOptimistic:!0,quantity:i.quantity||1})}else if(s.action===xe.ACTIONS.LinesRemove)for(let i of s.inputs.lineIds){let l=n.findIndex(d=>d.id===i);if(l!==-1){if(Xo(n[l].id)){console.error("[h2:error:useOptimisticCart] Tried to remove an optimistic line that has not been added to the cart yet");continue}n.splice(l,1),a=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to remove line '${i}' but it doesn't exist in the cart`)}else if(s.action===xe.ACTIONS.LinesUpdate)for(let i of s.inputs.lines){let l=n.findIndex(d=>i.id===d.id);if(l>-1){if(Xo(n[l].id)){console.error("[h2:error:useOptimisticCart] Tried to update an optimistic line that has not been added to the cart yet");continue}n[l].quantity=i.quantity,n[l].quantity===0&&n.splice(l,1),a=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to update line '${i.id}' but it doesn't exist in the cart`)}}return a&&(r.isOptimistic=a),r.totalQuantity=n.reduce((o,s)=>o+s.quantity,0),r}var Do="2025-04",Da=`Shopify Hydrogen ${Nu}`,ag="30243aa5-17c1-465a-8493-944bcc4e88aa",Be="customerAccount",Ca="buyer",bt=class extends Response{constructor(e,t,r){super(`Bad request: ${e}`,{status:400,headers:r})}};function Sa(e,t={}){let r=t.headers?new Headers(t.headers):new Headers({});return r.set("location",e),new Response(null,{status:t.status||302,headers:r})}async function og({session:e,customerAccountId:t,customerAccountTokenExchangeUrl:r,httpsOrigin:n,debugInfo:a}){let o=new URLSearchParams,s=e.get(Be),i=s==null?void 0:s.refreshToken,l=s==null?void 0:s.idToken;if(!i)throw new bt("Unauthorized","No refreshToken found in the session. Make sure your session is configured correctly and passed to `createCustomerAccountClient`.");o.append("grant_type","refresh_token"),o.append("refresh_token",i),o.append("client_id",t);let d={"content-type":"application/x-www-form-urlencoded","User-Agent":Da,Origin:n};new Date().getTime();let m=r,g=await fetch(m,{method:"POST",headers:d,body:o});if(!g.ok){let b=await g.text();throw new Response(b,{status:g.status,headers:{"Content-Type":"text/html; charset=utf-8"}})}let{access_token:y,expires_in:C,refresh_token:v}=await g.json();if(!y||y.length===0)throw new bt("Unauthorized","Invalid access token received.");e.set(Be,{accessToken:y,expiresAt:new Date(new Date().getTime()+(C-120)*1e3).getTime()+"",refreshToken:v,idToken:l})}function sn(e){e.unset(Be),e.unset(Ca)}async function sg({locks:e,expiresAt:t,session:r,customerAccountId:n,customerAccountTokenExchangeUrl:a,httpsOrigin:o,debugInfo:s}){if(parseInt(t,10)-1e3<new Date().getTime())try{e.refresh||(e.refresh=og({session:r,customerAccountId:n,customerAccountTokenExchangeUrl:a,httpsOrigin:o,debugInfo:s})),await e.refresh,delete e.refresh}catch(i){throw sn(r),i&&i.status!==401?i:new bt("Unauthorized","Login before querying the Customer Account API.")}}function ig(){let e=ug();return qu(e)}async function lg(e){let t=await crypto.subtle.digest({name:"SHA-256"},new TextEncoder().encode(e)),r=cg(t);return qu(r)}function ug(){let e=new Uint8Array(32);return crypto.getRandomValues(e),String.fromCharCode.apply(null,Array.from(e))}function qu(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function cg(e){let t=new Uint8Array(e),r=Array.from(t);return String.fromCharCode(...r)}function dg(){let e=Date.now().toString(),t=Math.random().toString(36).substring(2);return e+t}async function fg(e,t,r,n,a){let o=t;if(!e)throw new bt("Unauthorized","oAuth access token was not provided during token exchange.");let s=new URLSearchParams;s.append("grant_type","urn:ietf:params:oauth:grant-type:token-exchange"),s.append("client_id",o),s.append("audience",ag),s.append("subject_token",e),s.append("subject_token_type","urn:ietf:params:oauth:token-type:access_token"),s.append("scopes","https://api.customers.com/auth/customer.graphql");let i={"content-type":"application/x-www-form-urlencoded","User-Agent":Da,Origin:n};new Date().getTime();let m=await(await fetch(r,{method:"POST",headers:i,body:s})).json();if(m.error)throw new bt(m.error_description);return m.access_token}function hg(e){return pg(e).payload.nonce}function pg(e){let[t,r,n]=e.split("."),a=JSON.parse(atob(t)),o=JSON.parse(atob(r));return{header:a,payload:o,signature:n}}function zu(){return gg(mg())}function mg(){try{return crypto.getRandomValues(new Uint8Array(16))}catch{return new Uint8Array(16).map(()=>Math.random()*255|0)}}function gg(e){return Array.from(e,function(t){return("0"+(t&255).toString(16)).slice(-2)}).join("")}function Wu(e){if(!e)return;let{pathname:t,search:r}=new URL(e),n=t+r,a=new URLSearchParams(r),o=a.get("return_to")||a.get("redirect");if(o){if(Gu(e,o))return o;console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${n} to ${o}`)}}function Gu(e,t){try{return new URL(e).origin===new URL(t,e).origin}catch{return!1}}function al({requestUrl:e,defaultUrl:t,redirectUrl:r}){let n=e,a=ol(e,t),o=r?ol(e,r):a;return Gu(e,o.toString())?o.toString():(console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${n} to ${o}. Default url ${a} is used instead.`),a.toString())}function ol(e,t){return yg(t)?new URL(t):new URL(t,new URL(e).origin)}function yg(e){try{return new URL(e),!0}catch{return!1}}function vg(e,t){let r=`https://shopify.com/${t}`,n=`https://shopify.com/authentication/${t}`;return function(a){switch(a){case"CA_BASE_URL":return r;case"CA_BASE_AUTH_URL":return n;case"GRAPHQL":return`${r}/account/customer/api/${e}/graphql`;case"AUTH":return`${n}/oauth/authorize`;case"LOGIN_SCOPE":return t?"openid email customer-account-api:full":"openid email https://api.customers.com/auth/customer.graphql";case"TOKEN_EXCHANGE":return`${n}/oauth/token`;case"LOGOUT":return`${n}/logout`}}}function wg(e,t){if(!e.url)return t;let{pathname:r}=new URL(e.url),n=r.replace(/\.data$/,"").replace(/\/_root$/,"/").replace(/(.+)\/$/,"$1"),a=t+`?${new URLSearchParams({return_to:n}).toString()}`;return Sa(a)}function xg({session:e,customerAccountId:t,shopId:r,customerApiVersion:n=Do,request:a,waitUntil:o,authUrl:s,customAuthStatusHandler:i,logErrors:l=!0,loginPath:d="/account/login",authorizePath:m="/account/authorize",defaultRedirectPath:g="/account",language:y}){if(n!==Do&&console.warn(`[h2:warn:createCustomerAccountClient] You are using Customer Account API version ${n} when this version of Hydrogen was built for ${Do}.`),e||console.warn("[h2:warn:createCustomerAccountClient] session is required to use Customer Account API. Ensure the session object passed in exist."),!(a!=null&&a.url))throw new Error("[h2:error:createCustomerAccountClient] The request object does not contain a URL.");let C=i||(()=>wg(a,d)),v=new URL(a.url),b=v.protocol==="http:"?v.origin.replace("http","https"):v.origin,j=al({requestUrl:b,defaultUrl:m,redirectUrl:s}),$=vg(n,r),I=Cg($,t),L=$("GRAPHQL"),F={};async function O({query:z,type:J,variables:ue={}}){let de=await q();if(!de)throw C();new Date().getTime();let ae=await fetch(L,{method:"POST",headers:{"Content-Type":"application/json","User-Agent":Da,Origin:b,Authorization:de},body:JSON.stringify({query:z,variables:ue})}),ge=await ae.text(),Se={url:L,response:ae,type:J,query:z,queryVariables:ue,errors:void 0,client:"customer"};if(!ae.ok){if(ae.status===401)throw sn(e),C();let fe;try{fe=hn(ge)}catch{fe=[{message:ge}]}Zo({...Se,errors:fe})}try{let fe=hn(ge),{errors:R}=fe,B=R==null?void 0:R.map(({message:ee,...ie})=>new Rs(ee,{...ie,clientOperation:`customerAccount.${Se.type}`,requestId:ae.headers.get("x-request-id"),queryVariables:ue,query:z}));return{...fe,...R&&{errors:B}}}catch{Zo({...Se,errors:[{message:ge}]})}}async function D(){if(!r)return!1;let z=e.get(Be),J=z==null?void 0:z.accessToken,ue=z==null?void 0:z.expiresAt;if(!J||!ue)return!1;let de=wt==null?void 0:wt();try{await sg({locks:F,expiresAt:ue,session:e,customerAccountId:t,customerAccountTokenExchangeUrl:$("TOKEN_EXCHANGE"),httpsOrigin:b,debugInfo:{waitUntil:o,stackInfo:de,...Ki(a)}})}catch{return!1}return!0}async function H(){if(!await D())throw C()}async function q(){var z;if(await D())return(z=e.get(Be))==null?void 0:z.accessToken}async function W(z,J){return I(),z=Ta(z),Uu(z,"customer.mutate"),ka(O({query:z,type:"mutation",...J}),{logErrors:l})}async function G(z,J){return I(),z=Ta(z),Fu(z,"customer.query"),ka(O({query:z,type:"query",...J}),{logErrors:l})}function Z(z){e.set(Ca,{...e.get(Ca),...z})}async function ce(){let z=await q();if(z)return{...e.get(Ca),customerAccessToken:z}}return{login:async z=>{I();let J=new URL($("AUTH")),ue=dg(),de=zu();J.searchParams.set("client_id",t),J.searchParams.set("scope","openid email"),J.searchParams.append("response_type","code"),J.searchParams.append("redirect_uri",j),J.searchParams.set("scope",$("LOGIN_SCOPE")),J.searchParams.append("state",ue),J.searchParams.append("nonce",de);let ae=Sg({contextLanguage:y??null,uiLocalesOverride:(z==null?void 0:z.uiLocales)??null});ae!=null&&J.searchParams.append("ui_locales",ae);let ge=ig(),Se=await lg(ge);return e.set(Be,{...e.get(Be),codeVerifier:ge,state:ue,nonce:de,redirectPath:Wu(a.url)||Xt(a,"Referer")||g}),J.searchParams.append("code_challenge",Se),J.searchParams.append("code_challenge_method","S256"),Sa(J.toString())},logout:async z=>{var ge;I();let J=(ge=e.get(Be))==null?void 0:ge.idToken,ue=al({requestUrl:b,defaultUrl:b,redirectUrl:z==null?void 0:z.postLogoutRedirectUri}),de=J?new URL(`${$("LOGOUT")}?${new URLSearchParams([["id_token_hint",J],["post_logout_redirect_uri",ue]]).toString()}`).toString():ue;sn(e);let ae=(z==null?void 0:z.headers)instanceof Headers?z==null?void 0:z.headers:new Headers(z==null?void 0:z.headers);return z!=null&&z.keepSession||(e.destroy?ae.set("Set-Cookie",await e.destroy()):console.warn("[h2:warn:customerAccount] session.destroy is not available on your session implementation. All session data might not be cleared on logout."),e.isPending=!1),Sa(de,{headers:ae})},isLoggedIn:D,handleAuthStatus:H,getAccessToken:q,getApiUrl:()=>L,mutate:W,query:G,authorize:async()=>{var oe,be,Ne,$t;I();let z=v.searchParams.get("code"),J=v.searchParams.get("state");if(!z||!J)throw sn(e),new bt("Unauthorized","No code or state parameter found in the redirect URL.");if(((oe=e.get(Be))==null?void 0:oe.state)!==J)throw sn(e),new bt("Unauthorized","The session state does not match the state parameter. Make sure that the session is configured correctly and passed to `createCustomerAccountClient`.");let ue=t,de=new URLSearchParams;de.append("grant_type","authorization_code"),de.append("client_id",ue),de.append("redirect_uri",j),de.append("code",z);let ae=(be=e.get(Be))==null?void 0:be.codeVerifier;if(!ae)throw new bt("Unauthorized","No code verifier found in the session. Make sure that the session is configured correctly and passed to `createCustomerAccountClient`.");de.append("code_verifier",ae);let ge={"content-type":"application/x-www-form-urlencoded","User-Agent":Da,Origin:b};new Date().getTime();let Se=$("TOKEN_EXCHANGE"),fe=await fetch(Se,{method:"POST",headers:ge,body:de});if(!fe.ok)throw new Response(await fe.text(),{status:fe.status,headers:{"Content-Type":"text/html; charset=utf-8"}});let{access_token:R,expires_in:B,id_token:ee,refresh_token:ie}=await fe.json(),le=(Ne=e.get(Be))==null?void 0:Ne.nonce,he=await hg(ee);if(le!==he)throw new bt("Unauthorized",`Returned nonce does not match: ${le} !== ${he}`);let ye=R;r||(ye=await fg(R,t,$("TOKEN_EXCHANGE"),b,{...Ki(a)}));let pe=($t=e.get(Be))==null?void 0:$t.redirectPath;return e.set(Be,{accessToken:ye,expiresAt:new Date(new Date().getTime()+(B-120)*1e3).getTime()+"",refreshToken:ie,idToken:ee}),Sa(pe||g)},setBuyer:Z,getBuyer:ce,UNSTABLE_setBuyer:z=>{Ia("[h2:warn:customerAccount] `customerAccount.UNSTABLE_setBuyer` is deprecated. Please use `customerAccount.setBuyer`."),Z(z)},UNSTABLE_getBuyer:()=>(Ia("[h2:warn:customerAccount] `customerAccount.UNSTABLE_getBuyer` is deprecated. Please use `customerAccount.getBuyer`."),ce())}}function Cg(e,t){return function(){try{if(!t)throw Error();new URL(e("CA_BASE_URL")),new URL(e("CA_BASE_AUTH_URL"))}catch{console.error(new Error("[h2:error:customerAccount] You do not have the valid credential to use Customer Account API.\nRun `h2 env pull` to link your store credentials."));let r="Internal Server Error";throw new Response(r,{status:500})}}}function Sg(e){let t=sl(e.contextLanguage??null);return sl(e.uiLocalesOverride)??t??null}function sl(e){if(e==null)return null;let t=Eg(e).toLowerCase().replaceAll("_","-").split("-"),r=t.at(0)??null,n=t.at(1)??null;return n?`${r}-${n.toUpperCase()}`:r}var bg={PT:"PT_PT",ZH:"ZH_CN"};function Eg(e){return bg[e]??e}function _g(e){let{env:t,request:r,cache:n,waitUntil:a,i18n:o,session:s,logErrors:i,storefront:l={},customerAccount:d,cart:m={},buyerIdentity:g}=e;s||console.warn("[h2:warn:createHydrogenContext] A session object is required to create hydrogen context."),d!=null&&d.unstableB2b&&Ia("[h2:warn:createHydrogenContext] `customerAccount.unstableB2b` is now stable. Please remove the `unstableB2b` option.");let{storefront:y}=Sm({cache:n,waitUntil:a,i18n:o,logErrors:i,storefrontHeaders:l.headers||$g(r),storefrontApiVersion:l.apiVersion,storefrontId:t.PUBLIC_STOREFRONT_ID,storeDomain:t.PUBLIC_STORE_DOMAIN,privateStorefrontToken:t.PRIVATE_STOREFRONT_API_TOKEN,publicStorefrontToken:t.PUBLIC_STOREFRONT_API_TOKEN}),C=xg({session:s,request:r,waitUntil:a,logErrors:i,customerApiVersion:d==null?void 0:d.apiVersion,authUrl:d==null?void 0:d.authUrl,customAuthStatusHandler:d==null?void 0:d.customAuthStatusHandler,language:o==null?void 0:o.language,customerAccountId:t.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID,shopId:t.SHOP_ID}),v=ng({getCartId:m.getId||gm(r.headers),setCartId:m.setId||ym(),cartQueryFragment:m.queryFragment,cartMutateFragment:m.mutateFragment,customMethods:m.customMethods,buyerIdentity:g,storefront:y,customerAccount:C});return{storefront:y,customerAccount:C,cart:v,env:t,waitUntil:a,session:s}}function $g(e){return{requestGroupId:Xt(e,"request-id"),buyerIp:Xt(e,"oxygen-buyer-ip"),cookie:Xt(e,"cookie"),purpose:Xt(e,"purpose")}}var Yu=S.createContext(void 0),jg=Yu.Provider,Qu=()=>S.useContext(Yu);function Rg(e){let t=zu(),r=Pg(t,e);return{nonce:t,header:r,NonceProvider:({children:n})=>S.createElement(jg,{value:t},n)}}function Pg(e,t){let{shop:r,...n}=t??{},a=`'nonce-${e}'`,o=["'self'","'unsafe-inline'","https://cdn.shopify.com"],s=["'self'","https://monorail-edge.shopifysvc.com"];r&&r.checkoutDomain&&s.push(`https://${r.checkoutDomain}`),r&&r.storeDomain&&s.push(`https://${r.storeDomain}`);let i={baseUri:["'self'"],defaultSrc:["'self'",a,"https://cdn.shopify.com","https://shopify.com"],frameAncestors:["'none'"],styleSrc:o,connectSrc:s},l=Object.assign({},i,n);for(let d in i){let m=n[d];d&&m&&(l[d]=Ag(m,i[d]))}return l.scriptSrc instanceof Array?l.scriptSrc=[...l.scriptSrc.filter(d=>!d.startsWith("'nonce")),a]:l.defaultSrc instanceof Array&&(l.defaultSrc=[...l.defaultSrc.filter(d=>!d.startsWith("'nonce")),a]),Ep({directives:l})}function Ag(e,t){let r=typeof t=="string"?[t]:t,n=Array.isArray(e)?e:[String(e)];return Array.isArray(r)?r.every(a=>a==="'none'")?n:[...n,...r]:r}S.forwardRef((e,t)=>{let{waitForHydration:r,src:n,...a}=e,o=Qu();return r?f.jsx(Ig,{src:n,options:a}):f.jsx("script",{suppressHydrationWarning:!0,...a,src:n,nonce:o,ref:t})});function Ig({src:e,options:t}){if(!e)throw new Error("`waitForHydration` with the Script component requires a `src` prop");return Ss(e,{attributes:t}),null}function Ku({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null),namespace:r=""}){let[n,a]=S.useState(!1),o=Ar(),s=Me();mn(),S.useEffect(()=>{o.state==="idle"&&a(!1)},[o.state]);let{endCursor:i,hasNextPage:l,hasPreviousPage:d,nextPageUrl:m,nodes:g,previousPageUrl:y,startCursor:C}=kg(e,r),v=S.useMemo(()=>{var $;return{...s.state,pagination:{...(($=s.state)==null?void 0:$.pagination)||{},[r]:{pageInfo:{endCursor:i,hasPreviousPage:d,hasNextPage:l,startCursor:C},nodes:g}}}},[i,l,d,C,g,r,s.state]),b=S.useMemo(()=>S.forwardRef(function($,I){return l?S.createElement(Ce,{preventScrollReset:!0,...$,to:m,state:v,replace:!0,ref:I,onClick:()=>a(!0)}):null}),[l,m,v]),j=S.useMemo(()=>S.forwardRef(function($,I){return d?S.createElement(Ce,{preventScrollReset:!0,...$,to:y,state:v,replace:!0,ref:I,onClick:()=>a(!0)}):null}),[d,y,v]);return t({state:v,hasNextPage:l,hasPreviousPage:d,isLoading:n,nextPageUrl:m,nodes:g,previousPageUrl:y,NextLink:b,PreviousLink:j})}function da(e,t){let r=new URLSearchParams(e);return Object.keys((t==null?void 0:t.pagination)||{}).forEach(n=>{let a=n===""?"":`${n}_`,o=`${a}cursor`,s=`${a}direction`;r.delete(o),r.delete(s)}),r.toString()}function rn(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function kg(e,t=""){e.pageInfo||rn("pageInfo"),typeof e.pageInfo.startCursor>"u"&&rn("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&rn("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&rn("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&rn("pageInfo.hasPreviousPage");let r=Ar(),n=mn(),{state:a,search:o,pathname:s}=Me(),i=t?`${t}_cursor`:"cursor",l=t?`${t}_direction`:"direction",d=new URLSearchParams(o).get(l)==="previous",m=S.useMemo(()=>{var b,j,$;return!((b=globalThis==null?void 0:globalThis.window)!=null&&b.__hydrogenHydrated)||!(($=(j=a==null?void 0:a.pagination)==null?void 0:j[t])!=null&&$.nodes)?_t(e):d?[..._t(e),...a.pagination[t].nodes||[]]:[...a.pagination[t].nodes||[],..._t(e)]},[a,e,t]),g=S.useMemo(()=>{var O,D,H,q,W;let b=(O=globalThis==null?void 0:globalThis.window)==null?void 0:O.__hydrogenHydrated,j=(H=(D=a==null?void 0:a.pagination)==null?void 0:D[t])==null?void 0:H.pageInfo,$=!b||(j==null?void 0:j.startCursor)===void 0?e.pageInfo.startCursor:j.startCursor,I=!b||(j==null?void 0:j.endCursor)===void 0?e.pageInfo.endCursor:j.endCursor,L=!b||(j==null?void 0:j.hasPreviousPage)===void 0?e.pageInfo.hasPreviousPage:j.hasPreviousPage,F=!b||(j==null?void 0:j.hasNextPage)===void 0?e.pageInfo.hasNextPage:j.hasNextPage;return(W=(q=a==null?void 0:a.pagination)==null?void 0:q[t])!=null&&W.nodes&&(d?($=e.pageInfo.startCursor,L=e.pageInfo.hasPreviousPage):(I=e.pageInfo.endCursor,F=e.pageInfo.hasNextPage)),{startCursor:$,endCursor:I,hasPreviousPage:L,hasNextPage:F}},[d,a,t,e.pageInfo.hasNextPage,e.pageInfo.hasPreviousPage,e.pageInfo.startCursor,e.pageInfo.endCursor]),y=S.useRef({params:da(o,a),pathname:s});S.useEffect(()=>{window.__hydrogenHydrated=!0},[]),S.useEffect(()=>{let b=da(o,a),j=y.current.params;(s!==y.current.pathname||b!==j)&&!(r.state==="idle"&&!r.location)&&(y.current={pathname:s,params:da(o,a)},n(`${s}?${da(o,a)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}}))},[s,o,a]);let C=S.useMemo(()=>{let b=new URLSearchParams(o);return b.set(l,"previous"),g.startCursor&&b.set(i,g.startCursor),`?${b.toString()}`},[o,g.startCursor]),v=S.useMemo(()=>{let b=new URLSearchParams(o);return b.set(l,"next"),g.endCursor&&b.set(i,g.endCursor),`?${b.toString()}`},[o,g.endCursor]);return{...g,previousPageUrl:C,nextPageUrl:v,nodes:m}}function rr(e,t={pageBy:20}){if(typeof(e==null?void 0:e.url)>"u")throw new Error("getPaginationVariables must be called with the Request object passed to your loader function");let{pageBy:r,namespace:n=""}=t,a=new URLSearchParams(new URL(e.url).search),o=n?`${n}_cursor`:"cursor",s=n?`${n}_direction`:"direction",i=a.get(o)??void 0;return(a.get(s)==="previous"?"previous":"next")=="previous"?{last:r,startCursor:i??null}:{first:r,endCursor:i??null}}function Tg(e,t){let r=Ar(),[n,a]=S.useState([]);if(S.useEffect(()=>{Promise.resolve(t).then(o=>{var s,i;o&&a(o instanceof Array?o:((i=(s=o.product)==null?void 0:s.variants)==null?void 0:i.nodes)||[])}).catch(o=>{reportError(new Error("[h2:error:useOptimisticVariant] An error occurred while resolving the variants for the optimistic product hook.",{cause:o}))})},[JSON.stringify(t)]),r.state==="loading"){let o=new URLSearchParams(r.location.search),s=!1,i=n.find(l=>l.selectedOptions?l.selectedOptions.every(d=>o.get(d.name)===d.value):(s||(s=!0,reportError(new Error("[h2:error:useOptimisticVariant] The optimistic product hook requires your product query to include variants with the selectedOptions field."))),!1));if(i)return{...i,isOptimistic:!0}}return e}var Dg=e=>{if(typeof(e==null?void 0:e.url)>"u")throw new TypeError(`Expected a Request instance, got ${typeof e}`);let t=new URL(e.url).searchParams,r=[];return t.forEach((n,a)=>{r.push({name:a,value:n})}),r};async function Og(e){var g,y,C;let{storefront:t,request:r,noAdminRedirect:n,matchQueryParams:a,response:o=new Response("Not Found",{status:404})}=e,s=new URL(r.url),{pathname:i,searchParams:l}=s,d=l.has("_data");l.delete("redirect"),l.delete("return_to"),l.delete("_data");let m=(a?s.toString().replace(s.origin,""):i).toLowerCase();if(s.pathname==="/admin"&&!n)return Lo(`${t.getShopifyDomain()}/admin`,d,l,a);try{let{urlRedirects:v}=await t.query(Lg,{variables:{query:"path:"+m.replace(/\/+$/,"")}}),b=(C=(y=(g=v==null?void 0:v.edges)==null?void 0:g[0])==null?void 0:y.node)==null?void 0:C.target;if(b)return Lo(b,d,l,a);let j=Wu(r.url);if(j)return Lo(j,d,l,a)}catch(v){console.error(`Failed to fetch redirects from Storefront API for route ${m}`,v)}return o}var Oo="https://example.com";function Lo(e,t,r,n){let a=new URL(e,Oo);if(!n)for(let[o,s]of r)a.searchParams.append(o,s);return t?new Response(null,{status:200,headers:{"X-Remix-Redirect":a.toString().replace(Oo,""),"X-Remix-Status":"301"}}):new Response(null,{status:301,headers:{location:a.toString().replace(Oo,"")}})}var Lg=`#graphql
  query redirects($query: String) {
    urlRedirects(first: 1, query: $query) {
      edges {
        node {
          target
        }
      }
    }
  }
`;S.lazy(()=>Promise.resolve().then(()=>cy));var Mg=`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`,Ng=`
</sitemapindex>`,il=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,ll="</urlset>";async function Fg(e){let{storefront:t,request:r,types:n=["products","pages","collections","metaObjects","articles","blogs"],customChildSitemaps:a=[]}=e;if(!r||!r.url)throw new Error("A request object is required to generate a sitemap index");if(!t||!t.query)throw new Error("A storefront client is required to generate a sitemap index");let o=await t.query(Kg);if(!o)throw console.warn("[h2:sitemap:warning] Sitemap index is available in API version 2024-10 and later"),new Response("Sitemap index not found.",{status:404});let s=new URL(r.url).origin,i=Mg+n.map(l=>{if(!o[l])throw new Error(`[h2:sitemap:error] No data found for type ${l}. Check types passed to \`getSitemapIndex\``);return Hg(l,o[l].pagesCount.count,s)}).join(`
`)+a.map(l=>"  <sitemap><loc>"+(s+(l.startsWith("/")?l:"/"+l))+"</loc></sitemap>").join(`
`)+Ng;return new Response(i,{headers:{"Content-Type":"application/xml","Cache-Control":`max-age=${60*60*24}`}})}async function Ug(e){var C,v,b;let{storefront:t,request:r,params:n,getLink:a,locales:o=[],getChangeFreq:s,noItemsFallback:i="/"}=e;if(!n)throw new Error("[h2:sitemap:error] Remix params object is required to generate a sitemap");if(!r||!r.url)throw new Error("A request object is required to generate a sitemap");if(!t||!t.query)throw new Error("A storefront client is required to generate a index");if(!a)throw new Error("A `getLink` function to generate each resource is required to build a sitemap");if(!n.type||!n.page)throw new Response("No data found",{status:404});let l=n.type,d=Jg[l];if(!d)throw new Response("Not found",{status:404});let m=await t.query(d,{variables:{page:parseInt(n.page,10)}});if(!m)throw console.warn("[h2:sitemap:warning] Sitemap is available in API version 2024-10 and later"),new Response("Sitemap not found.",{status:404});let g=new URL(r.url).origin,y="";return(b=(v=(C=m==null?void 0:m.sitemap)==null?void 0:C.resources)==null?void 0:v.items)!=null&&b.length?y=il+m.sitemap.resources.items.map(j=>Bg({getChangeFreq:s,url:a({type:j.type??l,baseUrl:g,handle:j.handle}),type:l,getLink:a,updatedAt:j.updatedAt,handle:j.handle,metaobjectType:j.type,locales:o,baseUrl:g})).join(`
`)+ll:y=il+`
  <url><loc>${g+i}</loc></url>
`+ll,new Response(y,{headers:{"Content-Type":"application/xml","Cache-Control":`max-age=${60*60*24}`}})}function Hg(e,t,r){let n="";for(let a=1;a<=t;a++)n+=`  <sitemap><loc>${r}/sitemap/${e}/${a}.xml</loc></sitemap>
`;return n}function Bg({url:e,updatedAt:t,locales:r,type:n,getLink:a,baseUrl:o,handle:s,getChangeFreq:i,metaobjectType:l}){return`<url>
  <loc>${e}</loc>
  <lastmod>${t}</lastmod>
  <changefreq>${i?i({type:l??n,handle:s}):"weekly"}</changefreq>
${r.map(d=>Vg(a({type:l??n,baseUrl:o,handle:s,locale:d}),d)).join(`
`)}
</url>
  `.trim()}function Vg(e,t){return`  <xhtml:link rel="alternate" hreflang="${t}" href="${e}" />`}var qg=`#graphql
    query SitemapProducts($page: Int!) {
      sitemap(type: PRODUCT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,zg=`#graphql
    query SitemapCollections($page: Int!) {
      sitemap(type: COLLECTION) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Wg=`#graphql
    query SitemapArticles($page: Int!) {
      sitemap(type: ARTICLE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Gg=`#graphql
    query SitemapPages($page: Int!) {
      sitemap(type: PAGE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Yg=`#graphql
    query SitemapBlogs($page: Int!) {
      sitemap(type: BLOG) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Qg=`#graphql
    query SitemapMetaobjects($page: Int!) {
      sitemap(type: METAOBJECT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
            ... on SitemapResourceMetaobject {
              type
            }
          }
        }
      }
    }
`,Kg=`#graphql
query SitemapIndex {
  products: sitemap(type: PRODUCT) {
    pagesCount {
      count
    }
  }
  collections: sitemap(type: COLLECTION) {
    pagesCount {
      count
    }
  }
  articles: sitemap(type: ARTICLE) {
    pagesCount {
      count
    }
  }
  pages: sitemap(type: PAGE) {
    pagesCount {
      count
    }
  }
  blogs: sitemap(type: BLOG) {
    pagesCount {
      count
    }
  }
  metaObjects: sitemap(type: METAOBJECT) {
    pagesCount {
      count
    }
  }
}
`,Jg={products:qg,articles:Wg,collections:zg,pages:Gg,blogs:Yg,metaObjects:Qg};//! @see https://shopify.dev/docs/api/storefront/latest/queries/cart
var Zg=Error.prototype.toString;Error.prototype.toString=function(){return this.stack||Zg.call(this)};function Xg({build:e,mode:t,poweredByHeader:r=!0,getLoadContext:n}){let a=mh(e,t);return async o=>{let s=o.method;if((s==="GET"||s==="HEAD")&&o.body)return new Response(`${s} requests cannot have a body`,{status:400});let i=new URL(o.url);if(i.pathname.includes("//"))return new Response(null,{status:301,headers:{location:i.pathname.replace(/\/+/g,"/")}});let l=n?await n(o):void 0,d=await a(o,l);return r&&d.headers.append("powered-by","Shopify, Hydrogen"),d}}var _r,at;class ey{constructor(t,r){Zr(this,"isPending",!1);yo(this,_r);yo(this,at);vo(this,_r,t),vo(this,at,r)}static async init(t,r){const n=Eh({cookie:{name:"session",httpOnly:!0,path:"/",sameSite:"lax",secrets:r}}),a=await n.getSession(t.headers.get("Cookie")).catch(()=>n.getSession());return new this(n,a)}get has(){return ct(this,at).has}get get(){return ct(this,at).get}get flash(){return ct(this,at).flash}get unset(){return this.isPending=!0,ct(this,at).unset}get set(){return this.isPending=!0,ct(this,at).set}destroy(){return ct(this,_r).destroySession(ct(this,at))}commit(){return this.isPending=!1,ct(this,_r).commitSession(ct(this,at))}}_r=new WeakMap,at=new WeakMap;const ty=`#graphql
  fragment Money on MoneyV2 {
    currencyCode
    amount
  }
  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartLineComponent on ComponentizableCartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height
        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartApiQuery on Cart {
    updatedAt
    id
    appliedGiftCards {
      lastCharacters
      amountUsed {
        ...Money
      }
    }
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
      nodes {
        ...CartLineComponent
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalDutyAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }
`,Ju=`#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`,ry=`#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${Ju}
`,ny=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${Ju}
`;function ay(e){var s;const r=((s=new URL(e.url).pathname.split("/")[1])==null?void 0:s.toUpperCase())??"";let n="",[a,o]=["EN","US"];return/^[A-Z]{2}-[A-Z]{2}$/i.test(r)&&(n="/"+r,[a,o]=r.split("-")),{language:a,country:o,pathPrefix:n}}async function oy(e,t,r){if(!(t!=null&&t.SESSION_SECRET))throw new Error("SESSION_SECRET environment variable is not set");const n=r.waitUntil.bind(r),[a,o]=await Promise.all([caches.open("hydrogen"),ey.init(e,[t.SESSION_SECRET])]);return{..._g({env:t,request:e,cache:a,waitUntil:n,session:o,i18n:ay(e),cart:{queryFragment:ty}})}}const zC={async fetch(e,t,r){try{const n=await oy(e,t,r),o=await Xg({build:await Promise.resolve().then(()=>VC),mode:"production",getLoadContext:()=>n})(e);return n.session.isPending&&o.headers.set("Set-Cookie",await n.session.commit()),o.status===404?Og({request:e,response:o,storefront:n.storefront}):o}catch(n){return console.error(n),new Response("An unexpected error occurred",{status:500})}}};function sy({headTags:e}){return Zu(e),null}var Mo="text-transform: uppercase;",iy="text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold";function Zu(e){console.log(" "),console.log("%cSEO Meta Tags",`${iy}`),console.log(" "),e.forEach(t=>{if(t.tag==="script"){if(console.log("%c• JSON LD ",Mo),t.children)try{console.table(JSON.parse(t.children),["name","content"])}catch{console.log(t.children)}}else{if(console.log(`%c• ${t.tag} `,Mo),t.children)if(typeof t.children=="string")console.log(`↳ ${t.children}`);else try{Object.entries(JSON.parse(t.children)).map(([r,n])=>console.log(`↳ ${n}`))}catch{console.log(t.children)}if(t.props.property==="og:image:url"){let r=t.props.content;ly(r).then(n=>{let a=`font-size: 400px; padding: 10px; background: white url(${n}) no-repeat center; background-size: contain;`;console.log("%c• Share image preview",Mo),console.log("%c  ",a),console.log(`↳ ${r}`)}).catch(n=>{console.error(n)})}Object.entries(t.props).map(([r,n])=>{console.log(`↳ ${r} → ${n}`)})}console.log(" ")})}async function ly(e){let t=await(await(await fetch(e)).blob()).arrayBuffer();return`data:image/png;base64,${uy(t)}`}function uy(e){let t="",r=new Uint8Array(e),n=r.byteLength;for(let a=0;a<n;a++)t+=String.fromCharCode(r[a]);return btoa(t)}const cy=Object.freeze(Object.defineProperty({__proto__:null,default:sy,logSeoTags:Zu},Symbol.toStringTag,{value:"Module"}));var dy=" daum[ /]| deusu/|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|(?<!cam)scan|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^azure|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\(compatible;?(?:\\s\\w+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|agent|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|fetcher|firephp|functionize|grab|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|infrawatch|insight|inspect|iplabel|java(?!;)|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|onetrust|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|retriever|rexx;|rigor|rss\\b|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|xtate/",fy=/bot|crawl|http|lighthouse|scan|search|spider/i,nn;function hy(){if(nn instanceof RegExp)return nn;try{nn=new RegExp(dy,"i")}catch{nn=fy}return nn}function py(e){return!!e&&hy().test(e)}var It={},Jt={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul;function my(){if(ul)return Jt;ul=1;var e=La();function t(u){for(var p="https://reactjs.org/docs/error-decoder.html?invariant="+u,x=1;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x]);return"Minified React error #"+u+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=Object.prototype.hasOwnProperty,n=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a={},o={};function s(u){return r.call(o,u)?!0:r.call(a,u)?!1:n.test(u)?o[u]=!0:(a[u]=!0,!1)}function i(u,p,x,_,T,P,M){this.acceptsBooleans=p===2||p===3||p===4,this.attributeName=_,this.attributeNamespace=T,this.mustUseProperty=x,this.propertyName=u,this.type=p,this.sanitizeURL=P,this.removeEmptyString=M}var l={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(u){l[u]=new i(u,0,!1,u,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(u){var p=u[0];l[p]=new i(p,1,!1,u[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(u){l[u]=new i(u,2,!1,u.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(u){l[u]=new i(u,2,!1,u,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(u){l[u]=new i(u,3,!1,u.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(u){l[u]=new i(u,3,!0,u,null,!1,!1)}),["capture","download"].forEach(function(u){l[u]=new i(u,4,!1,u,null,!1,!1)}),["cols","rows","size","span"].forEach(function(u){l[u]=new i(u,6,!1,u,null,!1,!1)}),["rowSpan","start"].forEach(function(u){l[u]=new i(u,5,!1,u.toLowerCase(),null,!1,!1)});var d=/[\-:]([a-z])/g;function m(u){return u[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(u){var p=u.replace(d,m);l[p]=new i(p,1,!1,u,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(u){var p=u.replace(d,m);l[p]=new i(p,1,!1,u,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(u){var p=u.replace(d,m);l[p]=new i(p,1,!1,u,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(u){l[u]=new i(u,1,!1,u.toLowerCase(),null,!1,!1)}),l.xlinkHref=new i("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(u){l[u]=new i(u,1,!1,u.toLowerCase(),null,!0,!0)});var g={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y=["Webkit","ms","Moz","O"];Object.keys(g).forEach(function(u){y.forEach(function(p){p=p+u.charAt(0).toUpperCase()+u.substring(1),g[p]=g[u]})});var C=/["'&<>]/;function v(u){if(typeof u=="boolean"||typeof u=="number")return""+u;u=""+u;var p=C.exec(u);if(p){var x="",_,T=0;for(_=p.index;_<u.length;_++){switch(u.charCodeAt(_)){case 34:p="&quot;";break;case 38:p="&amp;";break;case 39:p="&#x27;";break;case 60:p="&lt;";break;case 62:p="&gt;";break;default:continue}T!==_&&(x+=u.substring(T,_)),T=_+1,x+=p}u=T!==_?x+u.substring(T,_):x}return u}var b=/([A-Z])/g,j=/^ms-/,$=Array.isArray;function I(u,p){return{insertionMode:u,selectedValue:p}}function L(u,p,x){switch(p){case"select":return I(1,x.value!=null?x.value:x.defaultValue);case"svg":return I(2,null);case"math":return I(3,null);case"foreignObject":return I(1,null);case"table":return I(4,null);case"thead":case"tbody":case"tfoot":return I(5,null);case"colgroup":return I(7,null);case"tr":return I(6,null)}return 4<=u.insertionMode||u.insertionMode===0?I(1,null):u}var F=new Map;function O(u,p,x){if(typeof x!="object")throw Error(t(62));p=!0;for(var _ in x)if(r.call(x,_)){var T=x[_];if(T!=null&&typeof T!="boolean"&&T!==""){if(_.indexOf("--")===0){var P=v(_);T=v((""+T).trim())}else{P=_;var M=F.get(P);M!==void 0||(M=v(P.replace(b,"-$1").toLowerCase().replace(j,"-ms-")),F.set(P,M)),P=M,T=typeof T=="number"?T===0||r.call(g,_)?""+T:T+"px":v((""+T).trim())}p?(p=!1,u.push(' style="',P,":",T)):u.push(";",P,":",T)}}p||u.push('"')}function D(u,p,x,_){switch(x){case"style":O(u,p,_);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<x.length)||x[0]!=="o"&&x[0]!=="O"||x[1]!=="n"&&x[1]!=="N"){if(p=l.hasOwnProperty(x)?l[x]:null,p!==null){switch(typeof _){case"function":case"symbol":return;case"boolean":if(!p.acceptsBooleans)return}switch(x=p.attributeName,p.type){case 3:_&&u.push(" ",x,'=""');break;case 4:_===!0?u.push(" ",x,'=""'):_!==!1&&u.push(" ",x,'="',v(_),'"');break;case 5:isNaN(_)||u.push(" ",x,'="',v(_),'"');break;case 6:!isNaN(_)&&1<=_&&u.push(" ",x,'="',v(_),'"');break;default:p.sanitizeURL&&(_=""+_),u.push(" ",x,'="',v(_),'"')}}else if(s(x)){switch(typeof _){case"function":case"symbol":return;case"boolean":if(p=x.toLowerCase().slice(0,5),p!=="data-"&&p!=="aria-")return}u.push(" ",x,'="',v(_),'"')}}}function H(u,p,x){if(p!=null){if(x!=null)throw Error(t(60));if(typeof p!="object"||!("__html"in p))throw Error(t(61));p=p.__html,p!=null&&u.push(""+p)}}function q(u){var p="";return e.Children.forEach(u,function(x){x!=null&&(p+=x)}),p}function W(u,p,x,_){u.push(ce(x));var T=x=null,P;for(P in p)if(r.call(p,P)){var M=p[P];if(M!=null)switch(P){case"children":x=M;break;case"dangerouslySetInnerHTML":T=M;break;default:D(u,_,P,M)}}return u.push(">"),H(u,T,x),typeof x=="string"?(u.push(v(x)),null):x}var G=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Z=new Map;function ce(u){var p=Z.get(u);if(p===void 0){if(!G.test(u))throw Error(t(65,u));p="<"+u,Z.set(u,p)}return p}function z(u,p,x,_,T){switch(p){case"select":u.push(ce("select"));var P=null,M=null;for(X in x)if(r.call(x,X)){var V=x[X];if(V!=null)switch(X){case"children":P=V;break;case"dangerouslySetInnerHTML":M=V;break;case"defaultValue":case"value":break;default:D(u,_,X,V)}}return u.push(">"),H(u,M,P),P;case"option":M=T.selectedValue,u.push(ce("option"));var Y=V=null,K=null,X=null;for(P in x)if(r.call(x,P)){var Ee=x[P];if(Ee!=null)switch(P){case"children":V=Ee;break;case"selected":K=Ee;break;case"dangerouslySetInnerHTML":X=Ee;break;case"value":Y=Ee;default:D(u,_,P,Ee)}}if(M!=null)if(x=Y!==null?""+Y:q(V),$(M)){for(_=0;_<M.length;_++)if(""+M[_]===x){u.push(' selected=""');break}}else""+M===x&&u.push(' selected=""');else K&&u.push(' selected=""');return u.push(">"),H(u,X,V),V;case"textarea":u.push(ce("textarea")),X=M=P=null;for(V in x)if(r.call(x,V)&&(Y=x[V],Y!=null))switch(V){case"children":X=Y;break;case"value":P=Y;break;case"defaultValue":M=Y;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:D(u,_,V,Y)}if(P===null&&M!==null&&(P=M),u.push(">"),X!=null){if(P!=null)throw Error(t(92));if($(X)&&1<X.length)throw Error(t(93));P=""+X}return typeof P=="string"&&P[0]===`
`&&u.push(`
`),P!==null&&u.push(v(""+P)),null;case"input":u.push(ce("input")),Y=X=V=P=null;for(M in x)if(r.call(x,M)&&(K=x[M],K!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"defaultChecked":Y=K;break;case"defaultValue":V=K;break;case"checked":X=K;break;case"value":P=K;break;default:D(u,_,M,K)}return X!==null?D(u,_,"checked",X):Y!==null&&D(u,_,"checked",Y),P!==null?D(u,_,"value",P):V!==null&&D(u,_,"value",V),u.push("/>"),null;case"menuitem":u.push(ce("menuitem"));for(var et in x)if(r.call(x,et)&&(P=x[et],P!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:D(u,_,et,P)}return u.push(">"),null;case"title":u.push(ce("title")),P=null;for(Ee in x)if(r.call(x,Ee)&&(M=x[Ee],M!=null))switch(Ee){case"children":P=M;break;case"dangerouslySetInnerHTML":throw Error(t(434));default:D(u,_,Ee,M)}return u.push(">"),P;case"listing":case"pre":u.push(ce(p)),M=P=null;for(Y in x)if(r.call(x,Y)&&(V=x[Y],V!=null))switch(Y){case"children":P=V;break;case"dangerouslySetInnerHTML":M=V;break;default:D(u,_,Y,V)}if(u.push(">"),M!=null){if(P!=null)throw Error(t(60));if(typeof M!="object"||!("__html"in M))throw Error(t(61));x=M.__html,x!=null&&(typeof x=="string"&&0<x.length&&x[0]===`
`?u.push(`
`,x):u.push(""+x))}return typeof P=="string"&&P[0]===`
`&&u.push(`
`),P;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":u.push(ce(p));for(var tt in x)if(r.call(x,tt)&&(P=x[tt],P!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,p));default:D(u,_,tt,P)}return u.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return W(u,x,p,_);case"html":return T.insertionMode===0&&u.push("<!DOCTYPE html>"),W(u,x,p,_);default:if(p.indexOf("-")===-1&&typeof x.is!="string")return W(u,x,p,_);u.push(ce(p)),M=P=null;for(K in x)if(r.call(x,K)&&(V=x[K],V!=null))switch(K){case"children":P=V;break;case"dangerouslySetInnerHTML":M=V;break;case"style":O(u,_,V);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:s(K)&&typeof V!="function"&&typeof V!="symbol"&&u.push(" ",K,'="',v(V),'"')}return u.push(">"),H(u,M,P),P}}function J(u,p,x){if(u.push('<!--$?--><template id="'),x===null)throw Error(t(395));return u.push(x),u.push('"></template>')}function ue(u,p,x,_){switch(x.insertionMode){case 0:case 1:return u.push('<div hidden id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 2:return u.push('<svg aria-hidden="true" style="display:none" id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 3:return u.push('<math aria-hidden="true" style="display:none" id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 4:return u.push('<table hidden id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 5:return u.push('<table hidden><tbody id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 6:return u.push('<table hidden><tr id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 7:return u.push('<table hidden><colgroup id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');default:throw Error(t(397))}}function de(u,p){switch(p.insertionMode){case 0:case 1:return u.push("</div>");case 2:return u.push("</svg>");case 3:return u.push("</math>");case 4:return u.push("</table>");case 5:return u.push("</tbody></table>");case 6:return u.push("</tr></table>");case 7:return u.push("</colgroup></table>");default:throw Error(t(397))}}var ae=/[<\u2028\u2029]/g;function ge(u){return JSON.stringify(u).replace(ae,function(p){switch(p){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function Se(u,p){return p=p===void 0?"":p,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:p+"P:",segmentPrefix:p+"S:",boundaryPrefix:p+"B:",idPrefix:p,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:u}}function fe(u,p,x,_){return x.generateStaticMarkup?(u.push(v(p)),!1):(p===""?u=_:(_&&u.push("<!-- -->"),u.push(v(p)),u=!0),u)}var R=Object.assign,B=Symbol.for("react.element"),ee=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),pe=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),it=Symbol.for("react.scope"),jn=Symbol.for("react.debug_trace_mode"),ar=Symbol.for("react.legacy_hidden"),Ka=Symbol.for("react.default_value"),or=Symbol.iterator;function Ft(u){if(u==null)return null;if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u;switch(u){case ie:return"Fragment";case ee:return"Portal";case he:return"Profiler";case le:return"StrictMode";case be:return"Suspense";case Ne:return"SuspenseList"}if(typeof u=="object")switch(u.$$typeof){case pe:return(u.displayName||"Context")+".Consumer";case ye:return(u._context.displayName||"Context")+".Provider";case oe:var p=u.render;return u=u.displayName,u||(u=p.displayName||p.name||"",u=u!==""?"ForwardRef("+u+")":"ForwardRef"),u;case $t:return p=u.displayName||null,p!==null?p:Ft(u.type)||"Memo";case Pe:p=u._payload,u=u._init;try{return Ft(u(p))}catch{}}return null}var sr={};function Rn(u,p){if(u=u.contextTypes,!u)return sr;var x={},_;for(_ in u)x[_]=p[_];return x}var lt=null;function ke(u,p){if(u!==p){u.context._currentValue2=u.parentValue,u=u.parent;var x=p.parent;if(u===null){if(x!==null)throw Error(t(401))}else{if(x===null)throw Error(t(401));ke(u,x)}p.context._currentValue2=p.value}}function Pn(u){u.context._currentValue2=u.parentValue,u=u.parent,u!==null&&Pn(u)}function An(u){var p=u.parent;p!==null&&An(p),u.context._currentValue2=u.value}function In(u,p){if(u.context._currentValue2=u.parentValue,u=u.parent,u===null)throw Error(t(402));u.depth===p.depth?ke(u,p):In(u,p)}function kn(u,p){var x=p.parent;if(x===null)throw Error(t(402));u.depth===x.depth?ke(u,x):kn(u,x),p.context._currentValue2=p.value}function ir(u){var p=lt;p!==u&&(p===null?An(u):u===null?Pn(p):p.depth===u.depth?ke(p,u):p.depth>u.depth?In(p,u):kn(p,u),lt=u)}var Tn={isMounted:function(){return!1},enqueueSetState:function(u,p){u=u._reactInternals,u.queue!==null&&u.queue.push(p)},enqueueReplaceState:function(u,p){u=u._reactInternals,u.replace=!0,u.queue=[p]},enqueueForceUpdate:function(){}};function Dn(u,p,x,_){var T=u.state!==void 0?u.state:null;u.updater=Tn,u.props=x,u.state=T;var P={queue:[],replace:!1};u._reactInternals=P;var M=p.contextType;if(u.context=typeof M=="object"&&M!==null?M._currentValue2:_,M=p.getDerivedStateFromProps,typeof M=="function"&&(M=M(x,T),T=M==null?T:R({},T,M),u.state=T),typeof p.getDerivedStateFromProps!="function"&&typeof u.getSnapshotBeforeUpdate!="function"&&(typeof u.UNSAFE_componentWillMount=="function"||typeof u.componentWillMount=="function"))if(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Tn.enqueueReplaceState(u,u.state,null),P.queue!==null&&0<P.queue.length)if(p=P.queue,M=P.replace,P.queue=null,P.replace=!1,M&&p.length===1)u.state=p[0];else{for(P=M?p[0]:u.state,T=!0,M=M?1:0;M<p.length;M++){var V=p[M];V=typeof V=="function"?V.call(u,P,x,_):V,V!=null&&(T?(T=!1,P=R({},P,V)):R(P,V))}u.state=P}else P.queue=null}var Ja={id:1,overflow:""};function Dr(u,p,x){var _=u.id;u=u.overflow;var T=32-lr(_)-1;_&=~(1<<T),x+=1;var P=32-lr(p)+T;if(30<P){var M=T-T%5;return P=(_&(1<<M)-1).toString(32),_>>=M,T-=M,{id:1<<32-lr(p)+T|x<<T|_,overflow:P+u}}return{id:1<<P|x<<T|_,overflow:u}}var lr=Math.clz32?Math.clz32:eo,Za=Math.log,Xa=Math.LN2;function eo(u){return u>>>=0,u===0?32:31-(Za(u)/Xa|0)|0}function to(u,p){return u===p&&(u!==0||1/u===1/p)||u!==u&&p!==p}var ro=typeof Object.is=="function"?Object.is:to,Qe=null,Or=null,ur=null,me=null,Ut=!1,cr=!1,Ht=0,ut=null,dr=0;function gt(){if(Qe===null)throw Error(t(321));return Qe}function On(){if(0<dr)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function Lr(){return me===null?ur===null?(Ut=!1,ur=me=On()):(Ut=!0,me=ur):me.next===null?(Ut=!1,me=me.next=On()):(Ut=!0,me=me.next),me}function Mr(){Or=Qe=null,cr=!1,ur=null,dr=0,me=ut=null}function Ln(u,p){return typeof p=="function"?p(u):p}function Mn(u,p,x){if(Qe=gt(),me=Lr(),Ut){var _=me.queue;if(p=_.dispatch,ut!==null&&(x=ut.get(_),x!==void 0)){ut.delete(_),_=me.memoizedState;do _=u(_,x.action),x=x.next;while(x!==null);return me.memoizedState=_,[_,p]}return[me.memoizedState,p]}return u=u===Ln?typeof p=="function"?p():p:x!==void 0?x(p):p,me.memoizedState=u,u=me.queue={last:null,dispatch:null},u=u.dispatch=no.bind(null,Qe,u),[me.memoizedState,u]}function Nn(u,p){if(Qe=gt(),me=Lr(),p=p===void 0?null:p,me!==null){var x=me.memoizedState;if(x!==null&&p!==null){var _=x[1];e:if(_===null)_=!1;else{for(var T=0;T<_.length&&T<p.length;T++)if(!ro(p[T],_[T])){_=!1;break e}_=!0}if(_)return x[0]}}return u=u(),me.memoizedState=[u,p],u}function no(u,p,x){if(25<=dr)throw Error(t(301));if(u===Qe)if(cr=!0,u={action:x,next:null},ut===null&&(ut=new Map),x=ut.get(p),x===void 0)ut.set(p,u);else{for(p=x;p.next!==null;)p=p.next;p.next=u}}function ao(){throw Error(t(394))}function fr(){}var Fn={readContext:function(u){return u._currentValue2},useContext:function(u){return gt(),u._currentValue2},useMemo:Nn,useReducer:Mn,useRef:function(u){Qe=gt(),me=Lr();var p=me.memoizedState;return p===null?(u={current:u},me.memoizedState=u):p},useState:function(u){return Mn(Ln,u)},useInsertionEffect:fr,useLayoutEffect:function(){},useCallback:function(u,p){return Nn(function(){return u},p)},useImperativeHandle:fr,useEffect:fr,useDebugValue:fr,useDeferredValue:function(u){return gt(),u},useTransition:function(){return gt(),[!1,ao]},useId:function(){var u=Or.treeContext,p=u.overflow;u=u.id,u=(u&~(1<<32-lr(u)-1)).toString(32)+p;var x=hr;if(x===null)throw Error(t(404));return p=Ht++,u=":"+x.idPrefix+"R"+u,0<p&&(u+="H"+p.toString(32)),u+":"},useMutableSource:function(u,p){return gt(),p(u._source)},useSyncExternalStore:function(u,p,x){if(x===void 0)throw Error(t(407));return x()}},hr=null,Nr=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function oo(u){return console.error(u),null}function Bt(){}function so(u,p,x,_,T,P,M,V,Y){var K=[],X=new Set;return p={destination:null,responseState:p,progressiveChunkSize:_===void 0?12800:_,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:X,pingedTasks:K,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:T===void 0?oo:T,onAllReady:Bt,onShellReady:M===void 0?Bt:M,onShellError:Bt,onFatalError:Bt},x=pr(p,0,null,x,!1,!1),x.parentFlushed=!0,u=Fr(p,u,null,x,X,sr,null,Ja),K.push(u),p}function Fr(u,p,x,_,T,P,M,V){u.allPendingTasks++,x===null?u.pendingRootTasks++:x.pendingTasks++;var Y={node:p,ping:function(){var K=u.pingedTasks;K.push(Y),K.length===1&&zn(u)},blockedBoundary:x,blockedSegment:_,abortSet:T,legacyContext:P,context:M,treeContext:V};return T.add(Y),Y}function pr(u,p,x,_,T,P){return{status:0,id:-1,index:p,parentFlushed:!1,chunks:[],children:[],formatContext:_,boundary:x,lastPushedText:T,textEmbedded:P}}function Vt(u,p){if(u=u.onError(p),u!=null&&typeof u!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof u+'" instead');return u}function mr(u,p){var x=u.onShellError;x(p),x=u.onFatalError,x(p),u.destination!==null?(u.status=2,u.destination.destroy(p)):(u.status=1,u.fatalError=p)}function Un(u,p,x,_,T){for(Qe={},Or=p,Ht=0,u=x(_,T);cr;)cr=!1,Ht=0,dr+=1,me=null,u=x(_,T);return Mr(),u}function Hn(u,p,x,_){var T=x.render(),P=_.childContextTypes;if(P!=null){var M=p.legacyContext;if(typeof x.getChildContext!="function")_=M;else{x=x.getChildContext();for(var V in x)if(!(V in P))throw Error(t(108,Ft(_)||"Unknown",V));_=R({},M,x)}p.legacyContext=_,Te(u,p,T),p.legacyContext=M}else Te(u,p,T)}function Bn(u,p){if(u&&u.defaultProps){p=R({},p),u=u.defaultProps;for(var x in u)p[x]===void 0&&(p[x]=u[x]);return p}return p}function Ur(u,p,x,_,T){if(typeof x=="function")if(x.prototype&&x.prototype.isReactComponent){T=Rn(x,p.legacyContext);var P=x.contextType;P=new x(_,typeof P=="object"&&P!==null?P._currentValue2:T),Dn(P,x,_,T),Hn(u,p,P,x)}else{P=Rn(x,p.legacyContext),T=Un(u,p,x,_,P);var M=Ht!==0;if(typeof T=="object"&&T!==null&&typeof T.render=="function"&&T.$$typeof===void 0)Dn(T,x,_,P),Hn(u,p,T,x);else if(M){_=p.treeContext,p.treeContext=Dr(_,1,0);try{Te(u,p,T)}finally{p.treeContext=_}}else Te(u,p,T)}else if(typeof x=="string"){switch(T=p.blockedSegment,P=z(T.chunks,x,_,u.responseState,T.formatContext),T.lastPushedText=!1,M=T.formatContext,T.formatContext=L(M,x,_),Hr(u,p,P),T.formatContext=M,x){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:T.chunks.push("</",x,">")}T.lastPushedText=!1}else{switch(x){case ar:case jn:case le:case he:case ie:Te(u,p,_.children);return;case Ne:Te(u,p,_.children);return;case it:throw Error(t(343));case be:e:{x=p.blockedBoundary,T=p.blockedSegment,P=_.fallback,_=_.children,M=new Set;var V={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:M,errorDigest:null},Y=pr(u,T.chunks.length,V,T.formatContext,!1,!1);T.children.push(Y),T.lastPushedText=!1;var K=pr(u,0,null,T.formatContext,!1,!1);K.parentFlushed=!0,p.blockedBoundary=V,p.blockedSegment=K;try{if(Hr(u,p,_),u.responseState.generateStaticMarkup||K.lastPushedText&&K.textEmbedded&&K.chunks.push("<!-- -->"),K.status=1,jt(V,K),V.pendingTasks===0)break e}catch(X){K.status=4,V.forceClientRender=!0,V.errorDigest=Vt(u,X)}finally{p.blockedBoundary=x,p.blockedSegment=T}p=Fr(u,P,x,Y,M,p.legacyContext,p.context,p.treeContext),u.pingedTasks.push(p)}return}if(typeof x=="object"&&x!==null)switch(x.$$typeof){case oe:if(_=Un(u,p,x.render,_,T),Ht!==0){x=p.treeContext,p.treeContext=Dr(x,1,0);try{Te(u,p,_)}finally{p.treeContext=x}}else Te(u,p,_);return;case $t:x=x.type,_=Bn(x,_),Ur(u,p,x,_,T);return;case ye:if(T=_.children,x=x._context,_=_.value,P=x._currentValue2,x._currentValue2=_,M=lt,lt=_={parent:M,depth:M===null?0:M.depth+1,context:x,parentValue:P,value:_},p.context=_,Te(u,p,T),u=lt,u===null)throw Error(t(403));_=u.parentValue,u.context._currentValue2=_===Ka?u.context._defaultValue:_,u=lt=u.parent,p.context=u;return;case pe:_=_.children,_=_(x._currentValue2),Te(u,p,_);return;case Pe:T=x._init,x=T(x._payload),_=Bn(x,_),Ur(u,p,x,_,void 0);return}throw Error(t(130,x==null?x:typeof x,""))}}function Te(u,p,x){if(p.node=x,typeof x=="object"&&x!==null){switch(x.$$typeof){case B:Ur(u,p,x.type,x.props,x.ref);return;case ee:throw Error(t(257));case Pe:var _=x._init;x=_(x._payload),Te(u,p,x);return}if($(x)){Vn(u,p,x);return}if(x===null||typeof x!="object"?_=null:(_=or&&x[or]||x["@@iterator"],_=typeof _=="function"?_:null),_&&(_=_.call(x))){if(x=_.next(),!x.done){var T=[];do T.push(x.value),x=_.next();while(!x.done);Vn(u,p,T)}return}throw u=Object.prototype.toString.call(x),Error(t(31,u==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":u))}typeof x=="string"?(_=p.blockedSegment,_.lastPushedText=fe(p.blockedSegment.chunks,x,u.responseState,_.lastPushedText)):typeof x=="number"&&(_=p.blockedSegment,_.lastPushedText=fe(p.blockedSegment.chunks,""+x,u.responseState,_.lastPushedText))}function Vn(u,p,x){for(var _=x.length,T=0;T<_;T++){var P=p.treeContext;p.treeContext=Dr(P,_,T);try{Hr(u,p,x[T])}finally{p.treeContext=P}}}function Hr(u,p,x){var _=p.blockedSegment.formatContext,T=p.legacyContext,P=p.context;try{return Te(u,p,x)}catch(Y){if(Mr(),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"){x=Y;var M=p.blockedSegment,V=pr(u,M.chunks.length,null,M.formatContext,M.lastPushedText,!0);M.children.push(V),M.lastPushedText=!1,u=Fr(u,p.node,p.blockedBoundary,V,p.abortSet,p.legacyContext,p.context,p.treeContext).ping,x.then(u,u),p.blockedSegment.formatContext=_,p.legacyContext=T,p.context=P,ir(P)}else throw p.blockedSegment.formatContext=_,p.legacyContext=T,p.context=P,ir(P),Y}}function Br(u){var p=u.blockedBoundary;u=u.blockedSegment,u.status=3,Rt(this,p,u)}function qn(u,p,x){var _=u.blockedBoundary;u.blockedSegment.status=3,_===null?(p.allPendingTasks--,p.status!==2&&(p.status=2,p.destination!==null&&p.destination.push(null))):(_.pendingTasks--,_.forceClientRender||(_.forceClientRender=!0,u=x===void 0?Error(t(432)):x,_.errorDigest=p.onError(u),_.parentFlushed&&p.clientRenderedBoundaries.push(_)),_.fallbackAbortableTasks.forEach(function(T){return qn(T,p,x)}),_.fallbackAbortableTasks.clear(),p.allPendingTasks--,p.allPendingTasks===0&&(_=p.onAllReady,_()))}function jt(u,p){if(p.chunks.length===0&&p.children.length===1&&p.children[0].boundary===null){var x=p.children[0];x.id=p.id,x.parentFlushed=!0,x.status===1&&jt(u,x)}else u.completedSegments.push(p)}function Rt(u,p,x){if(p===null){if(x.parentFlushed){if(u.completedRootSegment!==null)throw Error(t(389));u.completedRootSegment=x}u.pendingRootTasks--,u.pendingRootTasks===0&&(u.onShellError=Bt,p=u.onShellReady,p())}else p.pendingTasks--,p.forceClientRender||(p.pendingTasks===0?(x.parentFlushed&&x.status===1&&jt(p,x),p.parentFlushed&&u.completedBoundaries.push(p),p.fallbackAbortableTasks.forEach(Br,u),p.fallbackAbortableTasks.clear()):x.parentFlushed&&x.status===1&&(jt(p,x),p.completedSegments.length===1&&p.parentFlushed&&u.partialBoundaries.push(p)));u.allPendingTasks--,u.allPendingTasks===0&&(u=u.onAllReady,u())}function zn(u){if(u.status!==2){var p=lt,x=Nr.current;Nr.current=Fn;var _=hr;hr=u.responseState;try{var T=u.pingedTasks,P;for(P=0;P<T.length;P++){var M=T[P],V=u,Y=M.blockedSegment;if(Y.status===0){ir(M.context);try{Te(V,M,M.node),V.responseState.generateStaticMarkup||Y.lastPushedText&&Y.textEmbedded&&Y.chunks.push("<!-- -->"),M.abortSet.delete(M),Y.status=1,Rt(V,M.blockedBoundary,Y)}catch(Fe){if(Mr(),typeof Fe=="object"&&Fe!==null&&typeof Fe.then=="function"){var K=M.ping;Fe.then(K,K)}else{M.abortSet.delete(M),Y.status=4;var X=M.blockedBoundary,Ee=Fe,et=Vt(V,Ee);if(X===null?mr(V,Ee):(X.pendingTasks--,X.forceClientRender||(X.forceClientRender=!0,X.errorDigest=et,X.parentFlushed&&V.clientRenderedBoundaries.push(X))),V.allPendingTasks--,V.allPendingTasks===0){var tt=V.onAllReady;tt()}}}finally{}}}T.splice(0,P),u.destination!==null&&gr(u,u.destination)}catch(Fe){Vt(u,Fe),mr(u,Fe)}finally{hr=_,Nr.current=x,x===Fn&&ir(p)}}}function qt(u,p,x){switch(x.parentFlushed=!0,x.status){case 0:var _=x.id=u.nextSegmentId++;return x.lastPushedText=!1,x.textEmbedded=!1,u=u.responseState,p.push('<template id="'),p.push(u.placeholderPrefix),u=_.toString(16),p.push(u),p.push('"></template>');case 1:x.status=2;var T=!0;_=x.chunks;var P=0;x=x.children;for(var M=0;M<x.length;M++){for(T=x[M];P<T.index;P++)p.push(_[P]);T=zt(u,p,T)}for(;P<_.length-1;P++)p.push(_[P]);return P<_.length&&(T=p.push(_[P])),T;default:throw Error(t(390))}}function zt(u,p,x){var _=x.boundary;if(_===null)return qt(u,p,x);if(_.parentFlushed=!0,_.forceClientRender)return u.responseState.generateStaticMarkup||(_=_.errorDigest,p.push("<!--$!-->"),p.push("<template"),_&&(p.push(' data-dgst="'),_=v(_),p.push(_),p.push('"')),p.push("></template>")),qt(u,p,x),u=u.responseState.generateStaticMarkup?!0:p.push("<!--/$-->"),u;if(0<_.pendingTasks){_.rootSegmentID=u.nextSegmentId++,0<_.completedSegments.length&&u.partialBoundaries.push(_);var T=u.responseState,P=T.nextSuspenseID++;return T=T.boundaryPrefix+P.toString(16),_=_.id=T,J(p,u.responseState,_),qt(u,p,x),p.push("<!--/$-->")}if(_.byteSize>u.progressiveChunkSize)return _.rootSegmentID=u.nextSegmentId++,u.completedBoundaries.push(_),J(p,u.responseState,_.id),qt(u,p,x),p.push("<!--/$-->");if(u.responseState.generateStaticMarkup||p.push("<!--$-->"),x=_.completedSegments,x.length!==1)throw Error(t(391));return zt(u,p,x[0]),u=u.responseState.generateStaticMarkup?!0:p.push("<!--/$-->"),u}function Vr(u,p,x){return ue(p,u.responseState,x.formatContext,x.id),zt(u,p,x),de(p,x.formatContext)}function qr(u,p,x){for(var _=x.completedSegments,T=0;T<_.length;T++)zr(u,p,x,_[T]);if(_.length=0,u=u.responseState,_=x.id,x=x.rootSegmentID,p.push(u.startInlineScript),u.sentCompleteBoundaryFunction?p.push('$RC("'):(u.sentCompleteBoundaryFunction=!0,p.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),_===null)throw Error(t(395));return x=x.toString(16),p.push(_),p.push('","'),p.push(u.segmentPrefix),p.push(x),p.push('")<\/script>')}function zr(u,p,x,_){if(_.status===2)return!0;var T=_.id;if(T===-1){if((_.id=x.rootSegmentID)===-1)throw Error(t(392));return Vr(u,p,_)}return Vr(u,p,_),u=u.responseState,p.push(u.startInlineScript),u.sentCompleteSegmentFunction?p.push('$RS("'):(u.sentCompleteSegmentFunction=!0,p.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),p.push(u.segmentPrefix),T=T.toString(16),p.push(T),p.push('","'),p.push(u.placeholderPrefix),p.push(T),p.push('")<\/script>')}function gr(u,p){try{var x=u.completedRootSegment;if(x!==null&&u.pendingRootTasks===0){zt(u,p,x),u.completedRootSegment=null;var _=u.responseState.bootstrapChunks;for(x=0;x<_.length-1;x++)p.push(_[x]);x<_.length&&p.push(_[x])}var T=u.clientRenderedBoundaries,P;for(P=0;P<T.length;P++){var M=T[P];_=p;var V=u.responseState,Y=M.id,K=M.errorDigest,X=M.errorMessage,Ee=M.errorComponentStack;if(_.push(V.startInlineScript),V.sentClientRenderFunction?_.push('$RX("'):(V.sentClientRenderFunction=!0,_.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),Y===null)throw Error(t(395));if(_.push(Y),_.push('"'),K||X||Ee){_.push(",");var et=ge(K||"");_.push(et)}if(X||Ee){_.push(",");var tt=ge(X||"");_.push(tt)}if(Ee){_.push(",");var Fe=ge(Ee);_.push(Fe)}if(!_.push(")<\/script>")){u.destination=null,P++,T.splice(0,P);return}}T.splice(0,P);var Wt=u.completedBoundaries;for(P=0;P<Wt.length;P++)if(!qr(u,p,Wt[P])){u.destination=null,P++,Wt.splice(0,P);return}Wt.splice(0,P);var yt=u.partialBoundaries;for(P=0;P<yt.length;P++){var Gr=yt[P];e:{T=u,M=p;var Gt=Gr.completedSegments;for(V=0;V<Gt.length;V++)if(!zr(T,M,Gr,Gt[V])){V++,Gt.splice(0,V);var Yn=!1;break e}Gt.splice(0,V),Yn=!0}if(!Yn){u.destination=null,P++,yt.splice(0,P);return}}yt.splice(0,P);var Pt=u.completedBoundaries;for(P=0;P<Pt.length;P++)if(!qr(u,p,Pt[P])){u.destination=null,P++,Pt.splice(0,P);return}Pt.splice(0,P)}finally{u.allPendingTasks===0&&u.pingedTasks.length===0&&u.clientRenderedBoundaries.length===0&&u.completedBoundaries.length===0&&p.push(null)}}function Wn(u,p){try{var x=u.abortableTasks;x.forEach(function(_){return qn(_,u,p)}),x.clear(),u.destination!==null&&gr(u,u.destination)}catch(_){Vt(u,_),mr(u,_)}}function Gn(){}function Wr(u,p,x,_){var T=!1,P=null,M="",V={push:function(K){return K!==null&&(M+=K),!0},destroy:function(K){T=!0,P=K}},Y=!1;if(u=so(u,Se(x,p?p.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Gn,void 0,function(){Y=!0}),zn(u),Wn(u,_),u.status===1)u.status=2,V.destroy(u.fatalError);else if(u.status!==2&&u.destination===null){u.destination=V;try{gr(u,V)}catch(K){Vt(u,K),mr(u,K)}}if(T)throw P;if(!Y)throw Error(t(426));return M}return Jt.renderToNodeStream=function(){throw Error(t(207))},Jt.renderToStaticMarkup=function(u,p){return Wr(u,p,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Jt.renderToStaticNodeStream=function(){throw Error(t(208))},Jt.renderToString=function(u,p){return Wr(u,p,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Jt.version="18.3.1",Jt}var fa={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl;function gy(){if(cl)return fa;cl=1;var e=La();function t(c){for(var h="https://reactjs.org/docs/error-decoder.html?invariant="+c,w=1;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w]);return"Minified React error #"+c+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=null,n=0;function a(c,h){if(h.length!==0)if(512<h.length)0<n&&(c.enqueue(new Uint8Array(r.buffer,0,n)),r=new Uint8Array(512),n=0),c.enqueue(h);else{var w=r.length-n;w<h.length&&(w===0?c.enqueue(r):(r.set(h.subarray(0,w),n),c.enqueue(r),h=h.subarray(w)),r=new Uint8Array(512),n=0),r.set(h,n),n+=h.length}}function o(c,h){return a(c,h),!0}function s(c){r&&0<n&&(c.enqueue(new Uint8Array(r.buffer,0,n)),r=null,n=0)}var i=new TextEncoder;function l(c){return i.encode(c)}function d(c){return i.encode(c)}function m(c,h){typeof c.error=="function"?c.error(h):c.close()}var g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},v={};function b(c){return g.call(v,c)?!0:g.call(C,c)?!1:y.test(c)?v[c]=!0:(C[c]=!0,!1)}function j(c,h,w,E,k,A,N){this.acceptsBooleans=h===2||h===3||h===4,this.attributeName=E,this.attributeNamespace=k,this.mustUseProperty=w,this.propertyName=c,this.type=h,this.sanitizeURL=A,this.removeEmptyString=N}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(c){$[c]=new j(c,0,!1,c,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(c){var h=c[0];$[h]=new j(h,1,!1,c[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(c){$[c]=new j(c,2,!1,c.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(c){$[c]=new j(c,2,!1,c,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(c){$[c]=new j(c,3,!1,c.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(c){$[c]=new j(c,3,!0,c,null,!1,!1)}),["capture","download"].forEach(function(c){$[c]=new j(c,4,!1,c,null,!1,!1)}),["cols","rows","size","span"].forEach(function(c){$[c]=new j(c,6,!1,c,null,!1,!1)}),["rowSpan","start"].forEach(function(c){$[c]=new j(c,5,!1,c.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function L(c){return c[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(c){var h=c.replace(I,L);$[h]=new j(h,1,!1,c,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(c){var h=c.replace(I,L);$[h]=new j(h,1,!1,c,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(c){var h=c.replace(I,L);$[h]=new j(h,1,!1,c,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(c){$[c]=new j(c,1,!1,c.toLowerCase(),null,!1,!1)}),$.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(c){$[c]=new j(c,1,!1,c.toLowerCase(),null,!0,!0)});var F={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O=["Webkit","ms","Moz","O"];Object.keys(F).forEach(function(c){O.forEach(function(h){h=h+c.charAt(0).toUpperCase()+c.substring(1),F[h]=F[c]})});var D=/["'&<>]/;function H(c){if(typeof c=="boolean"||typeof c=="number")return""+c;c=""+c;var h=D.exec(c);if(h){var w="",E,k=0;for(E=h.index;E<c.length;E++){switch(c.charCodeAt(E)){case 34:h="&quot;";break;case 38:h="&amp;";break;case 39:h="&#x27;";break;case 60:h="&lt;";break;case 62:h="&gt;";break;default:continue}k!==E&&(w+=c.substring(k,E)),k=E+1,w+=h}c=k!==E?w+c.substring(k,E):w}return c}var q=/([A-Z])/g,W=/^ms-/,G=Array.isArray,Z=d("<script>"),ce=d("<\/script>"),z=d('<script src="'),J=d('<script type="module" src="'),ue=d('" async=""><\/script>'),de=/(<\/|<)(s)(cript)/gi;function ae(c,h,w,E){return""+h+(w==="s"?"\\u0073":"\\u0053")+E}function ge(c,h,w,E,k){c=c===void 0?"":c,h=h===void 0?Z:d('<script nonce="'+H(h)+'">');var A=[];if(w!==void 0&&A.push(h,l((""+w).replace(de,ae)),ce),E!==void 0)for(w=0;w<E.length;w++)A.push(z,l(H(E[w])),ue);if(k!==void 0)for(E=0;E<k.length;E++)A.push(J,l(H(k[E])),ue);return{bootstrapChunks:A,startInlineScript:h,placeholderPrefix:d(c+"P:"),segmentPrefix:d(c+"S:"),boundaryPrefix:c+"B:",idPrefix:c,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Se(c,h){return{insertionMode:c,selectedValue:h}}function fe(c){return Se(c==="http://www.w3.org/2000/svg"?2:c==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function R(c,h,w){switch(h){case"select":return Se(1,w.value!=null?w.value:w.defaultValue);case"svg":return Se(2,null);case"math":return Se(3,null);case"foreignObject":return Se(1,null);case"table":return Se(4,null);case"thead":case"tbody":case"tfoot":return Se(5,null);case"colgroup":return Se(7,null);case"tr":return Se(6,null)}return 4<=c.insertionMode||c.insertionMode===0?Se(1,null):c}var B=d("<!-- -->");function ee(c,h,w,E){return h===""?E:(E&&c.push(B),c.push(l(H(h))),!0)}var ie=new Map,le=d(' style="'),he=d(":"),ye=d(";");function pe(c,h,w){if(typeof w!="object")throw Error(t(62));h=!0;for(var E in w)if(g.call(w,E)){var k=w[E];if(k!=null&&typeof k!="boolean"&&k!==""){if(E.indexOf("--")===0){var A=l(H(E));k=l(H((""+k).trim()))}else{A=E;var N=ie.get(A);N!==void 0||(N=d(H(A.replace(q,"-$1").toLowerCase().replace(W,"-ms-"))),ie.set(A,N)),A=N,k=typeof k=="number"?k===0||g.call(F,E)?l(""+k):l(k+"px"):l(H((""+k).trim()))}h?(h=!1,c.push(le,A,he,k)):c.push(ye,A,he,k)}}h||c.push(Ne)}var oe=d(" "),be=d('="'),Ne=d('"'),$t=d('=""');function Pe(c,h,w,E){switch(w){case"style":pe(c,h,E);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<w.length)||w[0]!=="o"&&w[0]!=="O"||w[1]!=="n"&&w[1]!=="N"){if(h=$.hasOwnProperty(w)?$[w]:null,h!==null){switch(typeof E){case"function":case"symbol":return;case"boolean":if(!h.acceptsBooleans)return}switch(w=l(h.attributeName),h.type){case 3:E&&c.push(oe,w,$t);break;case 4:E===!0?c.push(oe,w,$t):E!==!1&&c.push(oe,w,be,l(H(E)),Ne);break;case 5:isNaN(E)||c.push(oe,w,be,l(H(E)),Ne);break;case 6:!isNaN(E)&&1<=E&&c.push(oe,w,be,l(H(E)),Ne);break;default:h.sanitizeURL&&(E=""+E),c.push(oe,w,be,l(H(E)),Ne)}}else if(b(w)){switch(typeof E){case"function":case"symbol":return;case"boolean":if(h=w.toLowerCase().slice(0,5),h!=="data-"&&h!=="aria-")return}c.push(oe,l(w),be,l(H(E)),Ne)}}}var it=d(">"),jn=d("/>");function ar(c,h,w){if(h!=null){if(w!=null)throw Error(t(60));if(typeof h!="object"||!("__html"in h))throw Error(t(61));h=h.__html,h!=null&&c.push(l(""+h))}}function Ka(c){var h="";return e.Children.forEach(c,function(w){w!=null&&(h+=w)}),h}var or=d(' selected=""');function Ft(c,h,w,E){c.push(ke(w));var k=w=null,A;for(A in h)if(g.call(h,A)){var N=h[A];if(N!=null)switch(A){case"children":w=N;break;case"dangerouslySetInnerHTML":k=N;break;default:Pe(c,E,A,N)}}return c.push(it),ar(c,k,w),typeof w=="string"?(c.push(l(H(w))),null):w}var sr=d(`
`),Rn=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,lt=new Map;function ke(c){var h=lt.get(c);if(h===void 0){if(!Rn.test(c))throw Error(t(65,c));h=d("<"+c),lt.set(c,h)}return h}var Pn=d("<!DOCTYPE html>");function An(c,h,w,E,k){switch(h){case"select":c.push(ke("select"));var A=null,N=null;for(te in w)if(g.call(w,te)){var U=w[te];if(U!=null)switch(te){case"children":A=U;break;case"dangerouslySetInnerHTML":N=U;break;case"defaultValue":case"value":break;default:Pe(c,E,te,U)}}return c.push(it),ar(c,N,A),A;case"option":N=k.selectedValue,c.push(ke("option"));var Q=U=null,re=null,te=null;for(A in w)if(g.call(w,A)){var we=w[A];if(we!=null)switch(A){case"children":U=we;break;case"selected":re=we;break;case"dangerouslySetInnerHTML":te=we;break;case"value":Q=we;default:Pe(c,E,A,we)}}if(N!=null)if(w=Q!==null?""+Q:Ka(U),G(N)){for(E=0;E<N.length;E++)if(""+N[E]===w){c.push(or);break}}else""+N===w&&c.push(or);else re&&c.push(or);return c.push(it),ar(c,te,U),U;case"textarea":c.push(ke("textarea")),te=N=A=null;for(U in w)if(g.call(w,U)&&(Q=w[U],Q!=null))switch(U){case"children":te=Q;break;case"value":A=Q;break;case"defaultValue":N=Q;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:Pe(c,E,U,Q)}if(A===null&&N!==null&&(A=N),c.push(it),te!=null){if(A!=null)throw Error(t(92));if(G(te)&&1<te.length)throw Error(t(93));A=""+te}return typeof A=="string"&&A[0]===`
`&&c.push(sr),A!==null&&c.push(l(H(""+A))),null;case"input":c.push(ke("input")),Q=te=U=A=null;for(N in w)if(g.call(w,N)&&(re=w[N],re!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"defaultChecked":Q=re;break;case"defaultValue":U=re;break;case"checked":te=re;break;case"value":A=re;break;default:Pe(c,E,N,re)}return te!==null?Pe(c,E,"checked",te):Q!==null&&Pe(c,E,"checked",Q),A!==null?Pe(c,E,"value",A):U!==null&&Pe(c,E,"value",U),c.push(jn),null;case"menuitem":c.push(ke("menuitem"));for(var He in w)if(g.call(w,He)&&(A=w[He],A!=null))switch(He){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:Pe(c,E,He,A)}return c.push(it),null;case"title":c.push(ke("title")),A=null;for(we in w)if(g.call(w,we)&&(N=w[we],N!=null))switch(we){case"children":A=N;break;case"dangerouslySetInnerHTML":throw Error(t(434));default:Pe(c,E,we,N)}return c.push(it),A;case"listing":case"pre":c.push(ke(h)),N=A=null;for(Q in w)if(g.call(w,Q)&&(U=w[Q],U!=null))switch(Q){case"children":A=U;break;case"dangerouslySetInnerHTML":N=U;break;default:Pe(c,E,Q,U)}if(c.push(it),N!=null){if(A!=null)throw Error(t(60));if(typeof N!="object"||!("__html"in N))throw Error(t(61));w=N.__html,w!=null&&(typeof w=="string"&&0<w.length&&w[0]===`
`?c.push(sr,l(w)):c.push(l(""+w)))}return typeof A=="string"&&A[0]===`
`&&c.push(sr),A;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":c.push(ke(h));for(var rt in w)if(g.call(w,rt)&&(A=w[rt],A!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,h));default:Pe(c,E,rt,A)}return c.push(jn),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Ft(c,w,h,E);case"html":return k.insertionMode===0&&c.push(Pn),Ft(c,w,h,E);default:if(h.indexOf("-")===-1&&typeof w.is!="string")return Ft(c,w,h,E);c.push(ke(h)),N=A=null;for(re in w)if(g.call(w,re)&&(U=w[re],U!=null))switch(re){case"children":A=U;break;case"dangerouslySetInnerHTML":N=U;break;case"style":pe(c,E,U);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:b(re)&&typeof U!="function"&&typeof U!="symbol"&&c.push(oe,l(re),be,l(H(U)),Ne)}return c.push(it),ar(c,N,A),A}}var In=d("</"),kn=d(">"),ir=d('<template id="'),Tn=d('"></template>'),Dn=d("<!--$-->"),Ja=d('<!--$?--><template id="'),Dr=d('"></template>'),lr=d("<!--$!-->"),Za=d("<!--/$-->"),Xa=d("<template"),eo=d('"'),to=d(' data-dgst="');d(' data-msg="'),d(' data-stck="');var ro=d("></template>");function Qe(c,h,w){if(a(c,Ja),w===null)throw Error(t(395));return a(c,w),o(c,Dr)}var Or=d('<div hidden id="'),ur=d('">'),me=d("</div>"),Ut=d('<svg aria-hidden="true" style="display:none" id="'),cr=d('">'),Ht=d("</svg>"),ut=d('<math aria-hidden="true" style="display:none" id="'),dr=d('">'),gt=d("</math>"),On=d('<table hidden id="'),Lr=d('">'),Mr=d("</table>"),Ln=d('<table hidden><tbody id="'),Mn=d('">'),Nn=d("</tbody></table>"),no=d('<table hidden><tr id="'),ao=d('">'),fr=d("</tr></table>"),Fn=d('<table hidden><colgroup id="'),hr=d('">'),Nr=d("</colgroup></table>");function oo(c,h,w,E){switch(w.insertionMode){case 0:case 1:return a(c,Or),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,ur);case 2:return a(c,Ut),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,cr);case 3:return a(c,ut),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,dr);case 4:return a(c,On),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,Lr);case 5:return a(c,Ln),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,Mn);case 6:return a(c,no),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,ao);case 7:return a(c,Fn),a(c,h.segmentPrefix),a(c,l(E.toString(16))),o(c,hr);default:throw Error(t(397))}}function Bt(c,h){switch(h.insertionMode){case 0:case 1:return o(c,me);case 2:return o(c,Ht);case 3:return o(c,gt);case 4:return o(c,Mr);case 5:return o(c,Nn);case 6:return o(c,fr);case 7:return o(c,Nr);default:throw Error(t(397))}}var so=d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Fr=d('$RS("'),pr=d('","'),Vt=d('")<\/script>'),mr=d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Un=d('$RC("'),Hn=d('","'),Bn=d('")<\/script>'),Ur=d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Te=d('$RX("'),Vn=d('"'),Hr=d(")<\/script>"),Br=d(","),qn=/[<\u2028\u2029]/g;function jt(c){return JSON.stringify(c).replace(qn,function(h){switch(h){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Rt=Object.assign,zn=Symbol.for("react.element"),qt=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Vr=Symbol.for("react.strict_mode"),qr=Symbol.for("react.profiler"),zr=Symbol.for("react.provider"),gr=Symbol.for("react.context"),Wn=Symbol.for("react.forward_ref"),Gn=Symbol.for("react.suspense"),Wr=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),x=Symbol.for("react.scope"),_=Symbol.for("react.debug_trace_mode"),T=Symbol.for("react.legacy_hidden"),P=Symbol.for("react.default_value"),M=Symbol.iterator;function V(c){if(c==null)return null;if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case zt:return"Fragment";case qt:return"Portal";case qr:return"Profiler";case Vr:return"StrictMode";case Gn:return"Suspense";case Wr:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case gr:return(c.displayName||"Context")+".Consumer";case zr:return(c._context.displayName||"Context")+".Provider";case Wn:var h=c.render;return c=c.displayName,c||(c=h.displayName||h.name||"",c=c!==""?"ForwardRef("+c+")":"ForwardRef"),c;case u:return h=c.displayName||null,h!==null?h:V(c.type)||"Memo";case p:h=c._payload,c=c._init;try{return V(c(h))}catch{}}return null}var Y={};function K(c,h){if(c=c.contextTypes,!c)return Y;var w={},E;for(E in c)w[E]=h[E];return w}var X=null;function Ee(c,h){if(c!==h){c.context._currentValue=c.parentValue,c=c.parent;var w=h.parent;if(c===null){if(w!==null)throw Error(t(401))}else{if(w===null)throw Error(t(401));Ee(c,w)}h.context._currentValue=h.value}}function et(c){c.context._currentValue=c.parentValue,c=c.parent,c!==null&&et(c)}function tt(c){var h=c.parent;h!==null&&tt(h),c.context._currentValue=c.value}function Fe(c,h){if(c.context._currentValue=c.parentValue,c=c.parent,c===null)throw Error(t(402));c.depth===h.depth?Ee(c,h):Fe(c,h)}function Wt(c,h){var w=h.parent;if(w===null)throw Error(t(402));c.depth===w.depth?Ee(c,w):Wt(c,w),h.context._currentValue=h.value}function yt(c){var h=X;h!==c&&(h===null?tt(c):c===null?et(h):h.depth===c.depth?Ee(h,c):h.depth>c.depth?Fe(h,c):Wt(h,c),X=c)}var Gr={isMounted:function(){return!1},enqueueSetState:function(c,h){c=c._reactInternals,c.queue!==null&&c.queue.push(h)},enqueueReplaceState:function(c,h){c=c._reactInternals,c.replace=!0,c.queue=[h]},enqueueForceUpdate:function(){}};function Gt(c,h,w,E){var k=c.state!==void 0?c.state:null;c.updater=Gr,c.props=w,c.state=k;var A={queue:[],replace:!1};c._reactInternals=A;var N=h.contextType;if(c.context=typeof N=="object"&&N!==null?N._currentValue:E,N=h.getDerivedStateFromProps,typeof N=="function"&&(N=N(w,k),k=N==null?k:Rt({},k,N),c.state=k),typeof h.getDerivedStateFromProps!="function"&&typeof c.getSnapshotBeforeUpdate!="function"&&(typeof c.UNSAFE_componentWillMount=="function"||typeof c.componentWillMount=="function"))if(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Gr.enqueueReplaceState(c,c.state,null),A.queue!==null&&0<A.queue.length)if(h=A.queue,N=A.replace,A.queue=null,A.replace=!1,N&&h.length===1)c.state=h[0];else{for(A=N?h[0]:c.state,k=!0,N=N?1:0;N<h.length;N++){var U=h[N];U=typeof U=="function"?U.call(c,A,w,E):U,U!=null&&(k?(k=!1,A=Rt({},A,U)):Rt(A,U))}c.state=A}else A.queue=null}var Yn={id:1,overflow:""};function Pt(c,h,w){var E=c.id;c=c.overflow;var k=32-Qn(E)-1;E&=~(1<<k),w+=1;var A=32-Qn(h)+k;if(30<A){var N=k-k%5;return A=(E&(1<<N)-1).toString(32),E>>=N,k-=N,{id:1<<32-Qn(h)+k|w<<k|E,overflow:A+c}}return{id:1<<A|w<<k|E,overflow:c}}var Qn=Math.clz32?Math.clz32:dc,uc=Math.log,cc=Math.LN2;function dc(c){return c>>>=0,c===0?32:31-(uc(c)/cc|0)|0}function fc(c,h){return c===h&&(c!==0||1/c===1/h)||c!==c&&h!==h}var hc=typeof Object.is=="function"?Object.is:fc,vt=null,io=null,Kn=null,ve=null,Yr=!1,Jn=!1,Qr=0,At=null,Zn=0;function Yt(){if(vt===null)throw Error(t(321));return vt}function Is(){if(0<Zn)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function lo(){return ve===null?Kn===null?(Yr=!1,Kn=ve=Is()):(Yr=!0,ve=Kn):ve.next===null?(Yr=!1,ve=ve.next=Is()):(Yr=!0,ve=ve.next),ve}function uo(){io=vt=null,Jn=!1,Kn=null,Zn=0,ve=At=null}function ks(c,h){return typeof h=="function"?h(c):h}function Ts(c,h,w){if(vt=Yt(),ve=lo(),Yr){var E=ve.queue;if(h=E.dispatch,At!==null&&(w=At.get(E),w!==void 0)){At.delete(E),E=ve.memoizedState;do E=c(E,w.action),w=w.next;while(w!==null);return ve.memoizedState=E,[E,h]}return[ve.memoizedState,h]}return c=c===ks?typeof h=="function"?h():h:w!==void 0?w(h):h,ve.memoizedState=c,c=ve.queue={last:null,dispatch:null},c=c.dispatch=pc.bind(null,vt,c),[ve.memoizedState,c]}function Ds(c,h){if(vt=Yt(),ve=lo(),h=h===void 0?null:h,ve!==null){var w=ve.memoizedState;if(w!==null&&h!==null){var E=w[1];e:if(E===null)E=!1;else{for(var k=0;k<E.length&&k<h.length;k++)if(!hc(h[k],E[k])){E=!1;break e}E=!0}if(E)return w[0]}}return c=c(),ve.memoizedState=[c,h],c}function pc(c,h,w){if(25<=Zn)throw Error(t(301));if(c===vt)if(Jn=!0,c={action:w,next:null},At===null&&(At=new Map),w=At.get(h),w===void 0)At.set(h,c);else{for(h=w;h.next!==null;)h=h.next;h.next=c}}function mc(){throw Error(t(394))}function Xn(){}var Os={readContext:function(c){return c._currentValue},useContext:function(c){return Yt(),c._currentValue},useMemo:Ds,useReducer:Ts,useRef:function(c){vt=Yt(),ve=lo();var h=ve.memoizedState;return h===null?(c={current:c},ve.memoizedState=c):h},useState:function(c){return Ts(ks,c)},useInsertionEffect:Xn,useLayoutEffect:function(){},useCallback:function(c,h){return Ds(function(){return c},h)},useImperativeHandle:Xn,useEffect:Xn,useDebugValue:Xn,useDeferredValue:function(c){return Yt(),c},useTransition:function(){return Yt(),[!1,mc]},useId:function(){var c=io.treeContext,h=c.overflow;c=c.id,c=(c&~(1<<32-Qn(c)-1)).toString(32)+h;var w=ea;if(w===null)throw Error(t(404));return h=Qr++,c=":"+w.idPrefix+"R"+c,0<h&&(c+="H"+h.toString(32)),c+":"},useMutableSource:function(c,h){return Yt(),h(c._source)},useSyncExternalStore:function(c,h,w){if(w===void 0)throw Error(t(407));return w()}},ea=null,co=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function gc(c){return console.error(c),null}function Kr(){}function yc(c,h,w,E,k,A,N,U,Q){var re=[],te=new Set;return h={destination:null,responseState:h,progressiveChunkSize:E===void 0?12800:E,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:te,pingedTasks:re,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:k===void 0?gc:k,onAllReady:A===void 0?Kr:A,onShellReady:N===void 0?Kr:N,onShellError:U===void 0?Kr:U,onFatalError:Q===void 0?Kr:Q},w=ta(h,0,null,w,!1,!1),w.parentFlushed=!0,c=fo(h,c,null,w,te,Y,null,Yn),re.push(c),h}function fo(c,h,w,E,k,A,N,U){c.allPendingTasks++,w===null?c.pendingRootTasks++:w.pendingTasks++;var Q={node:h,ping:function(){var re=c.pingedTasks;re.push(Q),re.length===1&&Bs(c)},blockedBoundary:w,blockedSegment:E,abortSet:k,legacyContext:A,context:N,treeContext:U};return k.add(Q),Q}function ta(c,h,w,E,k,A){return{status:0,id:-1,index:h,parentFlushed:!1,chunks:[],children:[],formatContext:E,boundary:w,lastPushedText:k,textEmbedded:A}}function Jr(c,h){if(c=c.onError(h),c!=null&&typeof c!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof c+'" instead');return c}function ra(c,h){var w=c.onShellError;w(h),w=c.onFatalError,w(h),c.destination!==null?(c.status=2,m(c.destination,h)):(c.status=1,c.fatalError=h)}function Ls(c,h,w,E,k){for(vt={},io=h,Qr=0,c=w(E,k);Jn;)Jn=!1,Qr=0,Zn+=1,ve=null,c=w(E,k);return uo(),c}function Ms(c,h,w,E){var k=w.render(),A=E.childContextTypes;if(A!=null){var N=h.legacyContext;if(typeof w.getChildContext!="function")E=N;else{w=w.getChildContext();for(var U in w)if(!(U in A))throw Error(t(108,V(E)||"Unknown",U));E=Rt({},N,w)}h.legacyContext=E,Ue(c,h,k),h.legacyContext=N}else Ue(c,h,k)}function Ns(c,h){if(c&&c.defaultProps){h=Rt({},h),c=c.defaultProps;for(var w in c)h[w]===void 0&&(h[w]=c[w]);return h}return h}function ho(c,h,w,E,k){if(typeof w=="function")if(w.prototype&&w.prototype.isReactComponent){k=K(w,h.legacyContext);var A=w.contextType;A=new w(E,typeof A=="object"&&A!==null?A._currentValue:k),Gt(A,w,E,k),Ms(c,h,A,w)}else{A=K(w,h.legacyContext),k=Ls(c,h,w,E,A);var N=Qr!==0;if(typeof k=="object"&&k!==null&&typeof k.render=="function"&&k.$$typeof===void 0)Gt(k,w,E,A),Ms(c,h,k,w);else if(N){E=h.treeContext,h.treeContext=Pt(E,1,0);try{Ue(c,h,k)}finally{h.treeContext=E}}else Ue(c,h,k)}else if(typeof w=="string"){switch(k=h.blockedSegment,A=An(k.chunks,w,E,c.responseState,k.formatContext),k.lastPushedText=!1,N=k.formatContext,k.formatContext=R(N,w,E),po(c,h,A),k.formatContext=N,w){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:k.chunks.push(In,l(w),kn)}k.lastPushedText=!1}else{switch(w){case T:case _:case Vr:case qr:case zt:Ue(c,h,E.children);return;case Wr:Ue(c,h,E.children);return;case x:throw Error(t(343));case Gn:e:{w=h.blockedBoundary,k=h.blockedSegment,A=E.fallback,E=E.children,N=new Set;var U={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:N,errorDigest:null},Q=ta(c,k.chunks.length,U,k.formatContext,!1,!1);k.children.push(Q),k.lastPushedText=!1;var re=ta(c,0,null,k.formatContext,!1,!1);re.parentFlushed=!0,h.blockedBoundary=U,h.blockedSegment=re;try{if(po(c,h,E),re.lastPushedText&&re.textEmbedded&&re.chunks.push(B),re.status=1,na(U,re),U.pendingTasks===0)break e}catch(te){re.status=4,U.forceClientRender=!0,U.errorDigest=Jr(c,te)}finally{h.blockedBoundary=w,h.blockedSegment=k}h=fo(c,A,w,Q,N,h.legacyContext,h.context,h.treeContext),c.pingedTasks.push(h)}return}if(typeof w=="object"&&w!==null)switch(w.$$typeof){case Wn:if(E=Ls(c,h,w.render,E,k),Qr!==0){w=h.treeContext,h.treeContext=Pt(w,1,0);try{Ue(c,h,E)}finally{h.treeContext=w}}else Ue(c,h,E);return;case u:w=w.type,E=Ns(w,E),ho(c,h,w,E,k);return;case zr:if(k=E.children,w=w._context,E=E.value,A=w._currentValue,w._currentValue=E,N=X,X=E={parent:N,depth:N===null?0:N.depth+1,context:w,parentValue:A,value:E},h.context=E,Ue(c,h,k),c=X,c===null)throw Error(t(403));E=c.parentValue,c.context._currentValue=E===P?c.context._defaultValue:E,c=X=c.parent,h.context=c;return;case gr:E=E.children,E=E(w._currentValue),Ue(c,h,E);return;case p:k=w._init,w=k(w._payload),E=Ns(w,E),ho(c,h,w,E,void 0);return}throw Error(t(130,w==null?w:typeof w,""))}}function Ue(c,h,w){if(h.node=w,typeof w=="object"&&w!==null){switch(w.$$typeof){case zn:ho(c,h,w.type,w.props,w.ref);return;case qt:throw Error(t(257));case p:var E=w._init;w=E(w._payload),Ue(c,h,w);return}if(G(w)){Fs(c,h,w);return}if(w===null||typeof w!="object"?E=null:(E=M&&w[M]||w["@@iterator"],E=typeof E=="function"?E:null),E&&(E=E.call(w))){if(w=E.next(),!w.done){var k=[];do k.push(w.value),w=E.next();while(!w.done);Fs(c,h,k)}return}throw c=Object.prototype.toString.call(w),Error(t(31,c==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":c))}typeof w=="string"?(E=h.blockedSegment,E.lastPushedText=ee(h.blockedSegment.chunks,w,c.responseState,E.lastPushedText)):typeof w=="number"&&(E=h.blockedSegment,E.lastPushedText=ee(h.blockedSegment.chunks,""+w,c.responseState,E.lastPushedText))}function Fs(c,h,w){for(var E=w.length,k=0;k<E;k++){var A=h.treeContext;h.treeContext=Pt(A,E,k);try{po(c,h,w[k])}finally{h.treeContext=A}}}function po(c,h,w){var E=h.blockedSegment.formatContext,k=h.legacyContext,A=h.context;try{return Ue(c,h,w)}catch(Q){if(uo(),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"){w=Q;var N=h.blockedSegment,U=ta(c,N.chunks.length,null,N.formatContext,N.lastPushedText,!0);N.children.push(U),N.lastPushedText=!1,c=fo(c,h.node,h.blockedBoundary,U,h.abortSet,h.legacyContext,h.context,h.treeContext).ping,w.then(c,c),h.blockedSegment.formatContext=E,h.legacyContext=k,h.context=A,yt(A)}else throw h.blockedSegment.formatContext=E,h.legacyContext=k,h.context=A,yt(A),Q}}function vc(c){var h=c.blockedBoundary;c=c.blockedSegment,c.status=3,Hs(this,h,c)}function Us(c,h,w){var E=c.blockedBoundary;c.blockedSegment.status=3,E===null?(h.allPendingTasks--,h.status!==2&&(h.status=2,h.destination!==null&&h.destination.close())):(E.pendingTasks--,E.forceClientRender||(E.forceClientRender=!0,c=w===void 0?Error(t(432)):w,E.errorDigest=h.onError(c),E.parentFlushed&&h.clientRenderedBoundaries.push(E)),E.fallbackAbortableTasks.forEach(function(k){return Us(k,h,w)}),E.fallbackAbortableTasks.clear(),h.allPendingTasks--,h.allPendingTasks===0&&(E=h.onAllReady,E()))}function na(c,h){if(h.chunks.length===0&&h.children.length===1&&h.children[0].boundary===null){var w=h.children[0];w.id=h.id,w.parentFlushed=!0,w.status===1&&na(c,w)}else c.completedSegments.push(h)}function Hs(c,h,w){if(h===null){if(w.parentFlushed){if(c.completedRootSegment!==null)throw Error(t(389));c.completedRootSegment=w}c.pendingRootTasks--,c.pendingRootTasks===0&&(c.onShellError=Kr,h=c.onShellReady,h())}else h.pendingTasks--,h.forceClientRender||(h.pendingTasks===0?(w.parentFlushed&&w.status===1&&na(h,w),h.parentFlushed&&c.completedBoundaries.push(h),h.fallbackAbortableTasks.forEach(vc,c),h.fallbackAbortableTasks.clear()):w.parentFlushed&&w.status===1&&(na(h,w),h.completedSegments.length===1&&h.parentFlushed&&c.partialBoundaries.push(h)));c.allPendingTasks--,c.allPendingTasks===0&&(c=c.onAllReady,c())}function Bs(c){if(c.status!==2){var h=X,w=co.current;co.current=Os;var E=ea;ea=c.responseState;try{var k=c.pingedTasks,A;for(A=0;A<k.length;A++){var N=k[A],U=c,Q=N.blockedSegment;if(Q.status===0){yt(N.context);try{Ue(U,N,N.node),Q.lastPushedText&&Q.textEmbedded&&Q.chunks.push(B),N.abortSet.delete(N),Q.status=1,Hs(U,N.blockedBoundary,Q)}catch(nt){if(uo(),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"){var re=N.ping;nt.then(re,re)}else{N.abortSet.delete(N),Q.status=4;var te=N.blockedBoundary,we=nt,He=Jr(U,we);if(te===null?ra(U,we):(te.pendingTasks--,te.forceClientRender||(te.forceClientRender=!0,te.errorDigest=He,te.parentFlushed&&U.clientRenderedBoundaries.push(te))),U.allPendingTasks--,U.allPendingTasks===0){var rt=U.onAllReady;rt()}}}finally{}}}k.splice(0,A),c.destination!==null&&mo(c,c.destination)}catch(nt){Jr(c,nt),ra(c,nt)}finally{ea=E,co.current=w,w===Os&&yt(h)}}}function aa(c,h,w){switch(w.parentFlushed=!0,w.status){case 0:var E=w.id=c.nextSegmentId++;return w.lastPushedText=!1,w.textEmbedded=!1,c=c.responseState,a(h,ir),a(h,c.placeholderPrefix),c=l(E.toString(16)),a(h,c),o(h,Tn);case 1:w.status=2;var k=!0;E=w.chunks;var A=0;w=w.children;for(var N=0;N<w.length;N++){for(k=w[N];A<k.index;A++)a(h,E[A]);k=oa(c,h,k)}for(;A<E.length-1;A++)a(h,E[A]);return A<E.length&&(k=o(h,E[A])),k;default:throw Error(t(390))}}function oa(c,h,w){var E=w.boundary;if(E===null)return aa(c,h,w);if(E.parentFlushed=!0,E.forceClientRender)E=E.errorDigest,o(h,lr),a(h,Xa),E&&(a(h,to),a(h,l(H(E))),a(h,eo)),o(h,ro),aa(c,h,w);else if(0<E.pendingTasks){E.rootSegmentID=c.nextSegmentId++,0<E.completedSegments.length&&c.partialBoundaries.push(E);var k=c.responseState,A=k.nextSuspenseID++;k=d(k.boundaryPrefix+A.toString(16)),E=E.id=k,Qe(h,c.responseState,E),aa(c,h,w)}else if(E.byteSize>c.progressiveChunkSize)E.rootSegmentID=c.nextSegmentId++,c.completedBoundaries.push(E),Qe(h,c.responseState,E.id),aa(c,h,w);else{if(o(h,Dn),w=E.completedSegments,w.length!==1)throw Error(t(391));oa(c,h,w[0])}return o(h,Za)}function Vs(c,h,w){return oo(h,c.responseState,w.formatContext,w.id),oa(c,h,w),Bt(h,w.formatContext)}function qs(c,h,w){for(var E=w.completedSegments,k=0;k<E.length;k++)zs(c,h,w,E[k]);if(E.length=0,c=c.responseState,E=w.id,w=w.rootSegmentID,a(h,c.startInlineScript),c.sentCompleteBoundaryFunction?a(h,Un):(c.sentCompleteBoundaryFunction=!0,a(h,mr)),E===null)throw Error(t(395));return w=l(w.toString(16)),a(h,E),a(h,Hn),a(h,c.segmentPrefix),a(h,w),o(h,Bn)}function zs(c,h,w,E){if(E.status===2)return!0;var k=E.id;if(k===-1){if((E.id=w.rootSegmentID)===-1)throw Error(t(392));return Vs(c,h,E)}return Vs(c,h,E),c=c.responseState,a(h,c.startInlineScript),c.sentCompleteSegmentFunction?a(h,Fr):(c.sentCompleteSegmentFunction=!0,a(h,so)),a(h,c.segmentPrefix),k=l(k.toString(16)),a(h,k),a(h,pr),a(h,c.placeholderPrefix),a(h,k),o(h,Vt)}function mo(c,h){r=new Uint8Array(512),n=0;try{var w=c.completedRootSegment;if(w!==null&&c.pendingRootTasks===0){oa(c,h,w),c.completedRootSegment=null;var E=c.responseState.bootstrapChunks;for(w=0;w<E.length-1;w++)a(h,E[w]);w<E.length&&o(h,E[w])}var k=c.clientRenderedBoundaries,A;for(A=0;A<k.length;A++){var N=k[A];E=h;var U=c.responseState,Q=N.id,re=N.errorDigest,te=N.errorMessage,we=N.errorComponentStack;if(a(E,U.startInlineScript),U.sentClientRenderFunction?a(E,Te):(U.sentClientRenderFunction=!0,a(E,Ur)),Q===null)throw Error(t(395));a(E,Q),a(E,Vn),(re||te||we)&&(a(E,Br),a(E,l(jt(re||"")))),(te||we)&&(a(E,Br),a(E,l(jt(te||"")))),we&&(a(E,Br),a(E,l(jt(we)))),o(E,Hr)}k.splice(0,A);var He=c.completedBoundaries;for(A=0;A<He.length;A++)qs(c,h,He[A]);He.splice(0,A),s(h),r=new Uint8Array(512),n=0;var rt=c.partialBoundaries;for(A=0;A<rt.length;A++){var nt=rt[A];e:{k=c,N=h;var sa=nt.completedSegments;for(U=0;U<sa.length;U++)if(!zs(k,N,nt,sa[U])){U++,sa.splice(0,U);var Gs=!1;break e}sa.splice(0,U),Gs=!0}if(!Gs){c.destination=null,A++,rt.splice(0,A);return}}rt.splice(0,A);var go=c.completedBoundaries;for(A=0;A<go.length;A++)qs(c,h,go[A]);go.splice(0,A)}finally{s(h),c.allPendingTasks===0&&c.pingedTasks.length===0&&c.clientRenderedBoundaries.length===0&&c.completedBoundaries.length===0&&h.close()}}function Ws(c,h){try{var w=c.abortableTasks;w.forEach(function(E){return Us(E,c,h)}),w.clear(),c.destination!==null&&mo(c,c.destination)}catch(E){Jr(c,E),ra(c,E)}}return fa.renderToReadableStream=function(c,h){return new Promise(function(w,E){var k,A,N=new Promise(function(te,we){A=te,k=we}),U=yc(c,ge(h?h.identifierPrefix:void 0,h?h.nonce:void 0,h?h.bootstrapScriptContent:void 0,h?h.bootstrapScripts:void 0,h?h.bootstrapModules:void 0),fe(h?h.namespaceURI:void 0),h?h.progressiveChunkSize:void 0,h?h.onError:void 0,A,function(){var te=new ReadableStream({type:"bytes",pull:function(we){if(U.status===1)U.status=2,m(we,U.fatalError);else if(U.status!==2&&U.destination===null){U.destination=we;try{mo(U,we)}catch(He){Jr(U,He),ra(U,He)}}},cancel:function(){Ws(U)}},{highWaterMark:0});te.allReady=N,w(te)},function(te){N.catch(function(){}),E(te)},k);if(h&&h.signal){var Q=h.signal,re=function(){Ws(U,Q.reason),Q.removeEventListener("abort",re)};Q.addEventListener("abort",re)}Bs(U)})},fa.version="18.3.1",fa}var dl;function yy(){if(dl)return It;dl=1;var e,t;return e=my(),t=gy(),It.version=e.version,It.renderToString=e.renderToString,It.renderToStaticMarkup=e.renderToStaticMarkup,It.renderToNodeStream=e.renderToNodeStream,It.renderToStaticNodeStream=e.renderToStaticNodeStream,It.renderToReadableStream=t.renderToReadableStream,It}var vy=yy();async function wy(e,t,r,n,a){const{nonce:o,header:s,NonceProvider:i}=Rg({shop:{checkoutDomain:a.env.PUBLIC_CHECKOUT_DOMAIN,storeDomain:a.env.PUBLIC_STORE_DOMAIN}}),l=await vy.renderToReadableStream(f.jsx(i,{children:f.jsx(Yf,{context:n,url:e.url,nonce:o})}),{nonce:o,signal:e.signal,onError(d){console.error(d),t=500}});return py(e.headers.get("user-agent"))&&await l.allReady,r.set("Content-Type","text/html"),r.set("Content-Security-Policy",s),new Response(l,{headers:r,status:t})}const xy=Object.freeze(Object.defineProperty({__proto__:null,default:wy},Symbol.toStringTag,{value:"Module"}));function $e(e){return function(){const r={params:kl(),loaderData:Re(),actionData:Ua(),matches:cs()};return S.createElement(e,r)}}function Cy(e){return function(){const r={params:kl(),loaderData:Re(),actionData:Ua(),error:Ha()};return S.createElement(e,r)}}const Sy="/assets/favicon-DZkC1E9c.svg",by="/assets/reset-BKioPaen.css",Ey="/assets/app-Bv0Oluef.css",_y="/assets/tailwind-C15ECn2D.css";function _n({children:e,heading:t,type:r}){const{type:n,close:a}=mt(),o=r===n;return S.useEffect(()=>{const s=new AbortController;return o&&document.addEventListener("keydown",function(l){l.key==="Escape"&&a()},{signal:s.signal}),()=>s.abort()},[a,o]),f.jsxs("div",{"aria-modal":!0,className:`overlay ${o?"expanded":""}`,role:"dialog",children:[f.jsx("button",{className:"close-outside",onClick:a}),f.jsxs("aside",{children:[f.jsxs("header",{children:[f.jsx("h3",{children:t}),f.jsx("button",{className:"close reset",onClick:a,"aria-label":"Close",children:"×"})]}),f.jsx("main",{children:e})]})]})}const Xu=S.createContext(null);_n.Provider=function({children:t}){const[r,n]=S.useState("closed");return f.jsx(Xu.Provider,{value:{type:r,open:n,close:()=>n("closed")},children:t})};function mt(){const e=S.useContext(Xu);if(!e)throw new Error("useAside must be used within an AsideProvider");return e}function $y({footer:e,header:t,publicStoreDomain:r}){return f.jsx(S.Suspense,{children:f.jsx(vn,{resolve:e,children:n=>{var a;return f.jsx("footer",{className:"footer",children:(n==null?void 0:n.menu)&&((a=t.shop.primaryDomain)==null?void 0:a.url)&&f.jsx(jy,{menu:n.menu,primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:r})})}})})}function jy({menu:e,primaryDomainUrl:t,publicStoreDomain:r}){return f.jsx("nav",{className:"footer-menu",role:"navigation",children:(e||Ry).items.map(n=>{if(!n.url)return null;const a=n.url.includes("myshopify.com")||n.url.includes(r)||n.url.includes(t)?new URL(n.url).pathname:n.url;return!a.startsWith("/")?f.jsx("a",{href:a,rel:"noopener noreferrer",target:"_blank",children:n.title},n.id):f.jsx(Et,{end:!0,prefetch:"intent",style:Py,to:a,children:n.title},n.id)})})}const Ry={items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function Py({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"white"}}function Ay({header:e,isLoggedIn:t,cart:r,publicStoreDomain:n}){const{shop:a,menu:o}=e;return f.jsxs("header",{className:"header",children:[f.jsx(Et,{prefetch:"intent",to:"/",style:Oa,end:!0,children:f.jsx("strong",{children:a.name})}),f.jsx(ec,{menu:o,viewport:"desktop",primaryDomainUrl:e.shop.primaryDomain.url,publicStoreDomain:n}),f.jsx(Iy,{isLoggedIn:t,cart:r})]})}function ec({menu:e,primaryDomainUrl:t,viewport:r,publicStoreDomain:n}){const a=`header-menu-${r}`,{close:o}=mt();return f.jsxs("nav",{className:a,role:"navigation",children:[r==="mobile"&&f.jsx(Et,{end:!0,onClick:o,prefetch:"intent",style:Oa,to:"/",children:"Home"}),(e||Ly).items.map(s=>{if(!s.url)return null;const i=s.url.includes("myshopify.com")||s.url.includes(n)||s.url.includes(t)?new URL(s.url).pathname:s.url;return f.jsx(Et,{className:"header-menu-item",end:!0,onClick:o,prefetch:"intent",style:Oa,to:i,children:s.title},s.id)})]})}function Iy({isLoggedIn:e,cart:t}){return f.jsxs("nav",{className:"header-ctas",role:"navigation",children:[f.jsx(ky,{}),f.jsx(Et,{prefetch:"intent",to:"/account",style:Oa,children:f.jsx(S.Suspense,{fallback:"Sign in",children:f.jsx(vn,{resolve:e,errorElement:"Sign in",children:r=>r?"Account":"Sign in"})})}),f.jsx(Ty,{}),f.jsx(Dy,{cart:t})]})}function ky(){const{open:e}=mt();return f.jsx("button",{className:"header-menu-mobile-toggle reset",onClick:()=>e("mobile"),children:f.jsx("h3",{children:"☰"})})}function Ty(){const{open:e}=mt();return f.jsx("button",{className:"reset",onClick:()=>e("search"),children:"Search"})}function tc({count:e}){const{open:t}=mt(),{publish:r,shop:n,cart:a,prevCart:o}=En();return f.jsxs("a",{href:"/cart",onClick:s=>{s.preventDefault(),t("cart"),r("cart_viewed",{cart:a,prevCart:o,shop:n,url:window.location.href||""})},children:["Cart ",e===null?f.jsx("span",{children:" "}):e]})}function Dy({cart:e}){return f.jsx(S.Suspense,{fallback:f.jsx(tc,{count:null}),children:f.jsx(vn,{resolve:e,children:f.jsx(Oy,{})})})}function Oy(){const e=Dl(),t=Vu(e);return f.jsx(tc,{count:(t==null?void 0:t.totalQuantity)??0})}const Ly={items:[{id:"gid://shopify/MenuItem/461609500728",resourceId:null,tags:[],title:"Collections",type:"HTTP",url:"/collections",items:[]},{id:"gid://shopify/MenuItem/461609533496",resourceId:null,tags:[],title:"Blog",type:"HTTP",url:"/blogs/journal",items:[]},{id:"gid://shopify/MenuItem/461609566264",resourceId:null,tags:[],title:"Policies",type:"HTTP",url:"/policies",items:[]},{id:"gid://shopify/MenuItem/461609599032",resourceId:"gid://shopify/Page/92591030328",tags:[],title:"About",type:"PAGE",url:"/pages/about",items:[]}]};function Oa({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"black"}}function rc(e,t){const{pathname:r}=Me();return S.useMemo(()=>My({handle:e,pathname:r,searchParams:new URLSearchParams,selectedOptions:t}),[e,t,r])}function My({handle:e,pathname:t,searchParams:r,selectedOptions:n}){const a=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(t),s=a&&a.length>0?`${a[0]}products/${e}`:`/products/${e}`;n==null||n.forEach(l=>{r.set(l.name,l.value)});const i=r.toString();return s+(i?"?"+r.toString():"")}function nc({price:e,compareAtPrice:t}){return f.jsx("div",{className:"product-price",children:t?f.jsxs("div",{className:"product-price-on-sale",children:[e?f.jsx(Oe,{data:e}):null,f.jsx("s",{children:f.jsx(Oe,{data:t})})]}):e?f.jsx(Oe,{data:e}):f.jsx("span",{children:" "})})}function Ny({layout:e,line:t}){var m;const{id:r,merchandise:n}=t,{product:a,title:o,image:s,selectedOptions:i}=n,l=rc(a.handle,i),{close:d}=mt();return f.jsxs("li",{className:"cart-line",children:[s&&f.jsx(Xe,{alt:o,aspectRatio:"1/1",data:s,height:100,loading:"lazy",width:100}),f.jsxs("div",{children:[f.jsx(Ce,{prefetch:"intent",to:l,onClick:()=>{e==="aside"&&d()},children:f.jsx("p",{children:f.jsx("strong",{children:a.title})})}),f.jsx(nc,{price:(m=t==null?void 0:t.cost)==null?void 0:m.totalAmount}),f.jsx("ul",{children:i.map(g=>f.jsx("li",{children:f.jsxs("small",{children:[g.name,": ",g.value]})},g.name))}),f.jsx(Fy,{line:t})]})]},r)}function Fy({line:e}){if(!e||typeof(e==null?void 0:e.quantity)>"u")return null;const{id:t,quantity:r,isOptimistic:n}=e,a=Number(Math.max(0,r-1).toFixed(0)),o=Number((r+1).toFixed(0));return f.jsxs("div",{className:"cart-line-quantity",children:[f.jsxs("small",{children:["Quantity: ",r,"   "]}),f.jsx(fl,{lines:[{id:t,quantity:a}],children:f.jsx("button",{"aria-label":"Decrease quantity",disabled:r<=1||!!n,name:"decrease-quantity",value:a,children:f.jsx("span",{children:"− "})})})," ",f.jsx(fl,{lines:[{id:t,quantity:o}],children:f.jsx("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:o,disabled:!!n,children:f.jsx("span",{children:"+"})})})," ",f.jsx(Uy,{lineIds:[t],disabled:!!n})]})}function Uy({lineIds:e,disabled:t}){return f.jsx(xe,{fetcherKey:ac(e),route:"/cart",action:xe.ACTIONS.LinesRemove,inputs:{lineIds:e},children:f.jsx("button",{disabled:t,type:"submit",children:"Remove"})})}function fl({children:e,lines:t}){const r=t.map(n=>n.id);return f.jsx(xe,{fetcherKey:ac(r),route:"/cart",action:xe.ACTIONS.LinesUpdate,inputs:{lines:t},children:e})}function ac(e){return[xe.ACTIONS.LinesUpdate,...e].join("-")}function Hy({cart:e,layout:t}){var n,a,o;const r=t==="page"?"cart-summary-page":"cart-summary-aside";return f.jsxs("div",{"aria-labelledby":"cart-summary",className:r,children:[f.jsx("h4",{children:"Totals"}),f.jsxs("dl",{className:"cart-subtotal",children:[f.jsx("dt",{children:"Subtotal"}),f.jsx("dd",{children:(a=(n=e.cost)==null?void 0:n.subtotalAmount)!=null&&a.amount?f.jsx(Oe,{data:(o=e.cost)==null?void 0:o.subtotalAmount}):"-"})]}),f.jsx(Vy,{discountCodes:e.discountCodes}),f.jsx(qy,{giftCardCodes:e.appliedGiftCards}),f.jsx(By,{checkoutUrl:e.checkoutUrl})]})}function By({checkoutUrl:e}){return e?f.jsxs("div",{children:[f.jsx("a",{href:e,target:"_self",children:f.jsx("p",{children:"Continue to Checkout →"})}),f.jsx("br",{})]}):null}function Vy({discountCodes:e}){var r;const t=((r=e==null?void 0:e.filter(n=>n.applicable))==null?void 0:r.map(({code:n})=>n))||[];return f.jsxs("div",{children:[f.jsx("dl",{hidden:!t.length,children:f.jsxs("div",{children:[f.jsx("dt",{children:"Discount(s)"}),f.jsx(hl,{children:f.jsxs("div",{className:"cart-discount",children:[f.jsx("code",{children:t==null?void 0:t.join(", ")})," ",f.jsx("button",{children:"Remove"})]})})]})}),f.jsx(hl,{discountCodes:t,children:f.jsxs("div",{children:[f.jsx("input",{type:"text",name:"discountCode",placeholder:"Discount code"})," ",f.jsx("button",{type:"submit",children:"Apply"})]})})]})}function hl({discountCodes:e,children:t}){return f.jsx(xe,{route:"/cart",action:xe.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:t})}function qy({giftCardCodes:e}){const t=S.useRef([]),r=S.useRef(null),n=(e==null?void 0:e.map(({lastCharacters:s})=>`***${s}`))||[];function a(s){const i=s.replace(/\s/g,"");t.current.includes(i)||t.current.push(i),r.current.value=""}function o(){t.current=[]}return f.jsxs("div",{children:[f.jsx("dl",{hidden:!n.length,children:f.jsxs("div",{children:[f.jsx("dt",{children:"Applied Gift Card(s)"}),f.jsx(pl,{children:f.jsxs("div",{className:"cart-discount",children:[f.jsx("code",{children:n==null?void 0:n.join(", ")})," ",f.jsx("button",{onSubmit:()=>o,children:"Remove"})]})})]})}),f.jsx(pl,{giftCardCodes:t.current,saveAppliedCode:a,children:f.jsxs("div",{children:[f.jsx("input",{type:"text",name:"giftCardCode",placeholder:"Gift card code",ref:r})," ",f.jsx("button",{type:"submit",children:"Apply"})]})})]})}function pl({giftCardCodes:e,saveAppliedCode:t,children:r}){return f.jsx(xe,{route:"/cart",action:xe.ACTIONS.GiftCardCodesUpdate,inputs:{giftCardCodes:e||[]},children:n=>{var o;const a=(o=n.formData)==null?void 0:o.get("giftCardCode");return a&&t&&t(a),r}})}function oc({layout:e,cart:t}){var i,l,d,m,g;const r=Vu(t),n=!!((l=(i=r==null?void 0:r.lines)==null?void 0:i.nodes)!=null&&l.length),o=`cart-main ${r&&!!((m=(d=r==null?void 0:r.discountCodes)==null?void 0:d.filter(y=>y.applicable))!=null&&m.length)?"with-discount":""}`,s=r!=null&&r.totalQuantity?r.totalQuantity>0:!1;return f.jsxs("div",{className:o,children:[f.jsx(zy,{hidden:n,layout:e}),f.jsxs("div",{className:"cart-details",children:[f.jsx("div",{"aria-labelledby":"cart-lines",children:f.jsx("ul",{children:(((g=r==null?void 0:r.lines)==null?void 0:g.nodes)??[]).map(y=>f.jsx(Ny,{line:y,layout:e},y.id))})}),s&&f.jsx(Hy,{cart:r,layout:e})]})]})}function zy({hidden:e=!1}){const{close:t}=mt();return f.jsxs("div",{hidden:e,children:[f.jsx("br",{}),f.jsx("p",{children:"Looks like you haven’t added anything yet, let’s get you started!"}),f.jsx("br",{}),f.jsx(Ce,{to:"/collections",onClick:t,prefetch:"viewport",children:"Continue shopping →"})]})}const es="/search";function Wy({children:e,className:t="predictive-search-form",...r}){const n=gs({key:"search"}),a=S.useRef(null),o=mn(),s=mt();function i(m){var g;m.preventDefault(),m.stopPropagation(),(g=a==null?void 0:a.current)!=null&&g.value&&a.current.blur()}function l(){var g;const m=(g=a==null?void 0:a.current)==null?void 0:g.value;o(es+(m?`?q=${m}`:"")),s.close()}function d(m){n.submit({q:m.target.value||"",limit:5,predictive:!0},{method:"GET",action:es})}return S.useEffect(()=>{var m;(m=a==null?void 0:a.current)==null||m.setAttribute("type","search")},[]),typeof e!="function"?null:f.jsx(n.Form,{...r,className:t,onSubmit:i,children:e({inputRef:a,fetcher:n,fetchResults:d,goToSearch:l})})}function sc(){return{total:0,items:{articles:[],collections:[],products:[],pages:[],queries:[]}}}function nr({baseUrl:e,trackingParams:t,params:r,term:n}){let a=new URLSearchParams({...r,q:encodeURIComponent(n)}).toString();return t&&(a=`${a}&${t}`),`${e}?${a}`}function Ve({children:e}){const t=mt(),{term:r,inputRef:n,fetcher:a,total:o,items:s}=Xy();function i(){n.current&&(n.current.blur(),n.current.value="")}function l(){i(),t.close()}return e({items:s,closeSearch:l,inputRef:n,state:a.state,term:r,total:o})}Ve.Articles=Gy;Ve.Collections=Yy;Ve.Pages=Qy;Ve.Products=Ky;Ve.Queries=Jy;Ve.Empty=Zy;function Gy({term:e,articles:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Articles"}),f.jsx("ul",{children:t.map(n=>{var o;const a=nr({baseUrl:`/blogs/${n.blog.handle}/${n.handle}`,trackingParams:n.trackingParameters,term:e.current??""});return f.jsx("li",{className:"predictive-search-result-item",children:f.jsxs(Ce,{onClick:r,to:a,children:[((o=n.image)==null?void 0:o.url)&&f.jsx(Xe,{alt:n.image.altText??"",src:n.image.url,width:50,height:50}),f.jsx("div",{children:f.jsx("span",{children:n.title})})]})},n.id)})})]},"articles"):null}function Yy({term:e,collections:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Collections"}),f.jsx("ul",{children:t.map(n=>{var o;const a=nr({baseUrl:`/collections/${n.handle}`,trackingParams:n.trackingParameters,term:e.current});return f.jsx("li",{className:"predictive-search-result-item",children:f.jsxs(Ce,{onClick:r,to:a,children:[((o=n.image)==null?void 0:o.url)&&f.jsx(Xe,{alt:n.image.altText??"",src:n.image.url,width:50,height:50}),f.jsx("div",{children:f.jsx("span",{children:n.title})})]})},n.id)})})]},"collections"):null}function Qy({term:e,pages:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Pages"}),f.jsx("ul",{children:t.map(n=>{const a=nr({baseUrl:`/pages/${n.handle}`,trackingParams:n.trackingParameters,term:e.current});return f.jsx("li",{className:"predictive-search-result-item",children:f.jsx(Ce,{onClick:r,to:a,children:f.jsx("div",{children:f.jsx("span",{children:n.title})})})},n.id)})})]},"pages"):null}function Ky({term:e,products:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Products"}),f.jsx("ul",{children:t.map(n=>{var i,l;const a=nr({baseUrl:`/products/${n.handle}`,trackingParams:n.trackingParameters,term:e.current}),o=(i=n==null?void 0:n.selectedOrFirstAvailableVariant)==null?void 0:i.price,s=(l=n==null?void 0:n.selectedOrFirstAvailableVariant)==null?void 0:l.image;return f.jsx("li",{className:"predictive-search-result-item",children:f.jsxs(Ce,{to:a,onClick:r,children:[s&&f.jsx(Xe,{alt:s.altText??"",src:s.url,width:50,height:50}),f.jsxs("div",{children:[f.jsx("p",{children:n.title}),f.jsx("small",{children:o&&f.jsx(Oe,{data:o})})]})]})},n.id)})})]},"products"):null}function Jy({queries:e,queriesDatalistId:t}){return e.length?f.jsx("datalist",{id:t,children:e.map(r=>r?f.jsx("option",{value:r.text},r.text):null)}):null}function Zy({term:e}){return e.current?f.jsxs("p",{children:["No results found for ",f.jsx("q",{children:e.current})]}):null}function Xy(){var o,s;const e=gs({key:"search"}),t=S.useRef(""),r=S.useRef(null);(e==null?void 0:e.state)==="loading"&&(t.current=String(((o=e.formData)==null?void 0:o.get("q"))||"")),S.useEffect(()=>{r.current||(r.current=document.querySelector('input[type="search"]'))},[]);const{items:n,total:a}=((s=e==null?void 0:e.data)==null?void 0:s.result)??sc();return{items:n,total:a,inputRef:r,term:t,fetcher:e}}function ev({cart:e,children:t=null,footer:r,header:n,isLoggedIn:a,publicStoreDomain:o}){return f.jsxs(_n.Provider,{children:[f.jsx(tv,{cart:e}),f.jsx(rv,{}),f.jsx(nv,{header:n,publicStoreDomain:o}),n&&f.jsx(Ay,{header:n,cart:e,isLoggedIn:a,publicStoreDomain:o}),f.jsx("main",{children:t}),f.jsx($y,{footer:r,header:n,publicStoreDomain:o})]})}function tv({cart:e}){return f.jsx(_n,{type:"cart",heading:"CART",children:f.jsx(S.Suspense,{fallback:f.jsx("p",{children:"Loading cart ..."}),children:f.jsx(vn,{resolve:e,children:t=>f.jsx(oc,{cart:t,layout:"aside"})})})})}function rv(){const e=S.useId();return f.jsx(_n,{type:"search",heading:"SEARCH",children:f.jsxs("div",{className:"predictive-search",children:[f.jsx("br",{}),f.jsx(Wy,{children:({fetchResults:t,goToSearch:r,inputRef:n})=>f.jsxs(f.Fragment,{children:[f.jsx("input",{name:"q",onChange:t,onFocus:t,placeholder:"Search",ref:n,type:"search",list:e})," ",f.jsx("button",{onClick:r,children:"Search"})]})}),f.jsx(Ve,{children:({items:t,total:r,term:n,state:a,closeSearch:o})=>{const{articles:s,collections:i,pages:l,products:d,queries:m}=t;return a==="loading"&&n.current?f.jsx("div",{children:"Loading..."}):r?f.jsxs(f.Fragment,{children:[f.jsx(Ve.Queries,{queries:m,queriesDatalistId:e}),f.jsx(Ve.Products,{products:d,closeSearch:o,term:n}),f.jsx(Ve.Collections,{collections:i,closeSearch:o,term:n}),f.jsx(Ve.Pages,{pages:l,closeSearch:o,term:n}),f.jsx(Ve.Articles,{articles:s,closeSearch:o,term:n}),n.current&&r?f.jsx(Ce,{onClick:o,to:`${es}?q=${n.current}`,children:f.jsxs("p",{children:["View all results for ",f.jsx("q",{children:n.current}),"  →"]})}):null]}):f.jsx(Ve.Empty,{term:n})}})]})})}function nv({header:e,publicStoreDomain:t}){var r;return e.menu&&((r=e.shop.primaryDomain)==null?void 0:r.url)&&f.jsx(_n,{type:"mobile",heading:"MENU",children:f.jsx(ec,{menu:e.menu,viewport:"mobile",primaryDomainUrl:e.shop.primaryDomain.url,publicStoreDomain:t})})}const av=({formMethod:e,currentUrl:t,nextUrl:r})=>!!(e&&e!=="GET"||t.toString()===r.toString());function ov(){return[{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:Sy}]}async function sv(e){const t=lv(e),r=await iv(e),{storefront:n,env:a}=e.context;return{...t,...r,publicStoreDomain:a.PUBLIC_STORE_DOMAIN,shop:Qp({storefront:n,publicStorefrontId:a.PUBLIC_STOREFRONT_ID}),consent:{checkoutDomain:a.PUBLIC_CHECKOUT_DOMAIN,storefrontAccessToken:a.PUBLIC_STOREFRONT_API_TOKEN,withPrivacyBanner:!1,country:e.context.storefront.i18n.country,language:e.context.storefront.i18n.language}}}async function iv({context:e}){const{storefront:t}=e,[r]=await Promise.all([t.query(ry,{cache:t.CacheLong(),variables:{headerMenuHandle:"main-menu"}})]);return{header:r}}function lv({context:e}){const{storefront:t,customerAccount:r,cart:n}=e,a=t.query(ny,{cache:t.CacheLong(),variables:{footerMenuHandle:"footer"}}).catch(o=>(console.error(o),null));return{cart:n.get(),isLoggedIn:r.isLoggedIn(),footer:a}}function uv({children:e}){const t=Qu(),r=kd("root");return f.jsxs("html",{lang:"en",children:[f.jsxs("head",{children:[f.jsx("meta",{charSet:"utf-8"}),f.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),f.jsx("link",{rel:"stylesheet",href:_y}),f.jsx("link",{rel:"stylesheet",href:by}),f.jsx("link",{rel:"stylesheet",href:Ey}),f.jsx(jf,{}),f.jsx(Ef,{})]}),f.jsxs("body",{children:[r?f.jsx(Ya.Provider,{cart:r.cart,shop:r.shop,consent:r.consent,children:f.jsx(ev,{...r,children:e})}):e,f.jsx(su,{nonce:t}),f.jsx(nu,{nonce:t})]})]})}const cv=$e(function(){return f.jsx(Ml,{})}),dv=Cy(function(){var a;const t=Ha();let r="Unknown error",n=500;return Ae(t)?(r=((a=t==null?void 0:t.data)==null?void 0:a.message)??t.data,n=t.status):t instanceof Error&&(r=t.message),f.jsxs("div",{className:"route-error",children:[f.jsx("h1",{children:"Oops"}),f.jsx("h2",{children:n}),r&&f.jsx("fieldset",{children:f.jsx("pre",{children:r})})]})}),fv=Object.freeze(Object.defineProperty({__proto__:null,ErrorBoundary:dv,Layout:uv,default:cv,links:ov,loader:sv,shouldRevalidate:av},Symbol.toStringTag,{value:"Module"}));async function hv({request:e,context:t}){const r=new URL(e.url),{shop:n}=await t.storefront.query(mv),a=ze(n.id).id,o=pv({url:r.origin,shopId:a});return new Response(o,{status:200,headers:{"Content-Type":"text/plain","Cache-Control":`max-age=${60*60*24}`}})}function pv({url:e,shopId:t}){const r=e?`${e}/sitemap.xml`:void 0;return`
User-agent: *
${No({sitemapUrl:r,shopId:t})}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
${t?`Disallow: /${t}/checkouts`:""}
${t?`Disallow: /${t}/orders`:""}
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${No({sitemapUrl:r,shopId:t})}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${No({sitemapUrl:r,shopId:t})}

User-agent: MJ12bot
Crawl-Delay: 10

User-agent: Pinterest
Crawl-delay: 1
`.trim()}function No({shopId:e,sitemapUrl:t}){return`Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
${e?`Disallow: /${e}/checkouts`:""}
${e?`Disallow: /${e}/orders`:""}
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Allow: /search/
Disallow: /search/?*
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
${t?`Sitemap: ${t}`:""}`}const mv=`#graphql
  query StoreRobots($country: CountryCode, $language: LanguageCode)
   @inContext(country: $country, language: $language) {
    shop {
      id
    }
  }
`,gv=Object.freeze(Object.defineProperty({__proto__:null,loader:hv},Symbol.toStringTag,{value:"Module"}));async function yv({params:e,context:t}){const{language:r,country:n}=t.storefront.i18n;if(e.locale&&e.locale.toLowerCase()!==`${r}-${n}`.toLowerCase())throw new Response(null,{status:404});return null}const vv=Object.freeze(Object.defineProperty({__proto__:null,loader:yv},Symbol.toStringTag,{value:"Module"}));function $n(e,...t){const r=new URL(e.url);let n=!1;if(t.forEach(({handle:a,data:o})=>{a!==o.handle&&(r.pathname=r.pathname.replace(a,o.handle),n=!0)}),n)throw qe(r.toString())}const wv=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.article.title)??""} article`}];async function xv(e){const t=Sv(e),r=await Cv(e);return{...t,...r}}async function Cv({context:e,request:t,params:r}){const{blogHandle:n,articleHandle:a}=r;if(!a||!n)throw new Response("Not found",{status:404});const[{blog:o}]=await Promise.all([e.storefront.query(Ev,{variables:{blogHandle:n,articleHandle:a}})]);if(!(o!=null&&o.articleByHandle))throw new Response(null,{status:404});return $n(t,{handle:a,data:o.articleByHandle},{handle:n,data:o}),{article:o.articleByHandle}}function Sv({context:e}){return{}}const bv=$e(function(){const{article:t}=Re(),{title:r,image:n,contentHtml:a,author:o}=t,s=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(t.publishedAt));return f.jsxs("div",{className:"article",children:[f.jsxs("h1",{children:[r,f.jsxs("div",{children:[f.jsx("time",{dateTime:t.publishedAt,children:s})," ·"," ",f.jsx("address",{children:o==null?void 0:o.name})]})]}),n&&f.jsx(Xe,{data:n,sizes:"90vw",loading:"eager"}),f.jsx("div",{dangerouslySetInnerHTML:{__html:a},className:"article"})]})}),Ev=`#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      handle
      articleByHandle(handle: $articleHandle) {
        handle
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`,_v=Object.freeze(Object.defineProperty({__proto__:null,default:bv,loader:xv,meta:wv},Symbol.toStringTag,{value:"Module"}));async function $v({params:e,context:t,request:r}){const n=await fetch(`https://${t.env.PUBLIC_CHECKOUT_DOMAIN}/api/${e.version}/graphql.json`,{method:"POST",body:r.body,headers:r.headers});return new Response(n.body,{headers:new Headers(n.headers)})}const jv=Object.freeze(Object.defineProperty({__proto__:null,action:$v},Symbol.toStringTag,{value:"Module"}));async function Rv({request:e,params:t,context:{storefront:r}}){const n=await Ug({storefront:r,request:e,params:t,locales:["EN-US","EN-CA","FR-CA"],getLink:({type:a,baseUrl:o,handle:s,locale:i})=>i?`${o}/${i}/${a}/${s}`:`${o}/${a}/${s}`});return n.headers.set("Cache-Control",`max-age=${60*60*24}`),n}const Pv=Object.freeze(Object.defineProperty({__proto__:null,loader:Rv},Symbol.toStringTag,{value:"Module"}));function Tr({connection:e,children:t,resourcesClassName:r}){return f.jsx(Ku,{connection:e,children:({nodes:n,isLoading:a,PreviousLink:o,NextLink:s})=>{const i=n.map((l,d)=>t({node:l,index:d}));return f.jsxs("div",{children:[f.jsx(o,{children:a?"Loading...":f.jsx("span",{children:"↑ Load previous"})}),r?f.jsx("div",{className:r,children:i}):i,f.jsx(s,{children:a?"Loading...":f.jsx("span",{children:"Load more ↓"})})]})}})}const Av=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.blog.title)??""} blog`}];async function Iv(e){const t=Tv(e),r=await kv(e);return{...t,...r}}async function kv({context:e,request:t,params:r}){const n=rr(t,{pageBy:4});if(!r.blogHandle)throw new Response("blog not found",{status:404});const[{blog:a}]=await Promise.all([e.storefront.query(Lv,{variables:{blogHandle:r.blogHandle,...n}})]);if(!(a!=null&&a.articles))throw new Response("Not found",{status:404});return $n(t,{handle:r.blogHandle,data:a}),{blog:a}}function Tv({context:e}){return{}}const Dv=$e(function(){const{blog:t}=Re(),{articles:r}=t;return f.jsxs("div",{className:"blog",children:[f.jsx("h1",{children:t.title}),f.jsx("div",{className:"blog-grid",children:f.jsx(Tr,{connection:r,children:({node:n,index:a})=>f.jsx(Ov,{article:n,loading:a<2?"eager":"lazy"},n.id)})})]})});function Ov({article:e,loading:t}){const r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return f.jsx("div",{className:"blog-article",children:f.jsxs(Ce,{to:`/blogs/${e.blog.handle}/${e.handle}`,children:[e.image&&f.jsx("div",{className:"blog-article-image",children:f.jsx(Xe,{alt:e.image.altText||e.title,aspectRatio:"3/2",data:e.image,loading:t,sizes:"(min-width: 768px) 50vw, 100vw"})}),f.jsx("h3",{children:e.title}),f.jsx("small",{children:r})]})},e.id)}const Lv=`#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      handle
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
          startCursor
        }

      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`,Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv,loader:Iv,meta:Av},Symbol.toStringTag,{value:"Module"}));function Ps({product:e,loading:t}){const r=rc(e.handle),n=e.featuredImage;return f.jsxs(Ce,{className:"product-item",prefetch:"intent",to:r,children:[n&&f.jsx(Xe,{alt:n.altText||e.title,aspectRatio:"1/1",data:n,loading:t,sizes:"(min-width: 45em) 400px, 100vw"}),f.jsx("h4",{children:e.title}),f.jsx("small",{children:f.jsx(Oe,{data:e.priceRange.minVariantPrice})})]},e.id)}const Nv=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.collection.title)??""} Collection`}];async function Fv(e){const t=Hv(e),r=await Uv(e);return{...t,...r}}async function Uv({context:e,params:t,request:r}){const{handle:n}=t,{storefront:a}=e,o=rr(r,{pageBy:8});if(!n)throw qe("/collections");const[{collection:s}]=await Promise.all([a.query(qv,{variables:{handle:n,...o}})]);if(!s)throw new Response(`Collection ${n} not found`,{status:404});return $n(r,{handle:n,data:s}),{collection:s}}function Hv({context:e}){return{}}const Bv=$e(function(){const{collection:t}=Re();return f.jsxs("div",{className:"collection",children:[f.jsx("h1",{children:t.title}),f.jsx("p",{className:"collection-description",children:t.description}),f.jsx(Tr,{connection:t.products,resourcesClassName:"products-grid",children:({node:r,index:n})=>f.jsx(Ps,{product:r,loading:n<8?"eager":void 0},r.id)}),f.jsx(Ya.CollectionView,{data:{collection:{id:t.id,handle:t.handle}}})]})}),Vv=`#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
`,qv=`#graphql
  ${Vv}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`,zv=Object.freeze(Object.defineProperty({__proto__:null,default:Bv,loader:Fv,meta:Nv},Symbol.toStringTag,{value:"Module"}));async function Wv({context:e}){return e.customerAccount.authorize()}const Gv=Object.freeze(Object.defineProperty({__proto__:null,loader:Wv},Symbol.toStringTag,{value:"Module"}));async function Yv(e){const t=Kv(e),r=await Qv(e);return{...t,...r}}async function Qv({context:e,request:t}){const r=rr(t,{pageBy:4}),[{collections:n}]=await Promise.all([e.storefront.query(Xv,{variables:r})]);return{collections:n}}function Kv({context:e}){return{}}const Jv=$e(function(){const{collections:t}=Re();return f.jsxs("div",{className:"collections",children:[f.jsx("h1",{children:"Collections"}),f.jsx(Tr,{connection:t,resourcesClassName:"collections-grid",children:({node:r,index:n})=>f.jsx(Zv,{collection:r,index:n},r.id)})]})});function Zv({collection:e,index:t}){return f.jsxs(Ce,{className:"collection-item",to:`/collections/${e.handle}`,prefetch:"intent",children:[(e==null?void 0:e.image)&&f.jsx(Xe,{alt:e.image.altText||e.title,aspectRatio:"1/1",data:e.image,loading:t<3?"eager":void 0,sizes:"(min-width: 45em) 400px, 100vw"}),f.jsx("h5",{children:e.title})]},e.id)}const Xv=`#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`,ew=Object.freeze(Object.defineProperty({__proto__:null,default:Jv,loader:Yv},Symbol.toStringTag,{value:"Module"})),tw=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.policy.title)??""}`}];async function rw({params:e,context:t}){var o,s;if(!e.handle)throw new Response("No handle was passed in",{status:404});const r=e.handle.replace(/-([a-z])/g,(i,l)=>l.toUpperCase()),a=(s=(await t.storefront.query(aw,{variables:{privacyPolicy:!1,shippingPolicy:!1,termsOfService:!1,refundPolicy:!1,[r]:!0,language:(o=t.storefront.i18n)==null?void 0:o.language}})).shop)==null?void 0:s[r];if(!a)throw new Response("Could not find the policy",{status:404});return{policy:a}}const nw=$e(function(){const{policy:t}=Re();return f.jsxs("div",{className:"policy",children:[f.jsx("br",{}),f.jsx("br",{}),f.jsx("div",{children:f.jsx(Ce,{to:"/policies",children:"← Back to Policies"})}),f.jsx("br",{}),f.jsx("h1",{children:t.title}),f.jsx("div",{dangerouslySetInnerHTML:{__html:t.body}})]})}),aw=`#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
`,ow=Object.freeze(Object.defineProperty({__proto__:null,default:nw,loader:rw,meta:tw},Symbol.toStringTag,{value:"Module"}));function sw({image:e}){return e?f.jsx("div",{className:"product-image",children:f.jsx(Xe,{alt:e.altText||"Product Image",aspectRatio:"1/1",data:e,sizes:"(min-width: 45em) 50vw, 100vw"},e.id)}):f.jsx("div",{className:"product-image"})}function iw({analytics:e,children:t,disabled:r,lines:n,onClick:a}){return f.jsx(xe,{route:"/cart",inputs:{lines:n},action:xe.ACTIONS.LinesAdd,children:o=>f.jsxs(f.Fragment,{children:[f.jsx("input",{name:"analytics",type:"hidden",value:JSON.stringify(e)}),f.jsx("button",{type:"submit",onClick:a,disabled:r??o.state!=="idle",children:t})]})})}function lw({productOptions:e,selectedVariant:t}){const r=mn(),{open:n}=mt();return f.jsxs("div",{className:"product-form",children:[e.map(a=>a.optionValues.length===1?null:f.jsxs("div",{className:"product-options",children:[f.jsx("h5",{children:a.name}),f.jsx("div",{className:"product-options-grid",children:a.optionValues.map(o=>{const{name:s,handle:i,variantUriQuery:l,selected:d,available:m,exists:g,isDifferentProduct:y,swatch:C}=o;return y?f.jsx(Ce,{className:"product-options-item",prefetch:"intent",preventScrollReset:!0,replace:!0,to:`/products/${i}?${l}`,style:{border:d?"1px solid black":"1px solid transparent",opacity:m?1:.3},children:f.jsx(ml,{swatch:C,name:s})},a.name+s):f.jsx("button",{type:"button",className:`product-options-item${g&&!d?" link":""}`,style:{border:d?"1px solid black":"1px solid transparent",opacity:m?1:.3},disabled:!g,onClick:()=>{d||r(`?${l}`,{replace:!0,preventScrollReset:!0})},children:f.jsx(ml,{swatch:C,name:s})},a.name+s)})}),f.jsx("br",{})]},a.name)),f.jsx(iw,{disabled:!t||!t.availableForSale,onClick:()=>{n("cart")},lines:t?[{merchandiseId:t.id,quantity:1,selectedVariant:t}]:[],children:t!=null&&t.availableForSale?"Add to cart":"Sold out"})]})}function ml({swatch:e,name:t}){var a,o;const r=(o=(a=e==null?void 0:e.image)==null?void 0:a.previewImage)==null?void 0:o.url,n=e==null?void 0:e.color;return!r&&!n?t:f.jsx("div",{"aria-label":t,className:"product-option-label-swatch",style:{backgroundColor:n||"transparent"},children:!!r&&f.jsx("img",{src:r,alt:t})})}const uw=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.product.title)??""}`},{rel:"canonical",href:`/products/${e==null?void 0:e.product.handle}`}];async function cw(e){const t=fw(e),r=await dw(e);return{...t,...r}}async function dw({context:e,params:t,request:r}){const{handle:n}=t,{storefront:a}=e;if(!n)throw new Error("Expected product handle to be defined");const[{product:o}]=await Promise.all([a.query(gw,{variables:{handle:n,selectedOptions:Dg(r)}})]);if(!(o!=null&&o.id))throw new Response(null,{status:404});return $n(r,{handle:n,data:o}),{product:o}}function fw({context:e,params:t}){return{}}const hw=$e(function(){const{product:t}=Re(),r=Tg(t.selectedOrFirstAvailableVariant,pp(t));xp(r.selectedOptions);const n=mp({...t,selectedOrFirstAvailableVariant:r}),{title:a,descriptionHtml:o}=t;return f.jsxs("div",{className:"product",children:[f.jsx(sw,{image:r==null?void 0:r.image}),f.jsxs("div",{className:"product-main",children:[f.jsx("h1",{children:a}),f.jsx(nc,{price:r==null?void 0:r.price,compareAtPrice:r==null?void 0:r.compareAtPrice}),f.jsx("br",{}),f.jsx(lw,{productOptions:n,selectedVariant:r}),f.jsx("br",{}),f.jsx("br",{}),f.jsx("p",{children:f.jsx("strong",{children:"Description"})}),f.jsx("br",{}),f.jsx("div",{dangerouslySetInnerHTML:{__html:o}}),f.jsx("br",{})]}),f.jsx(Ya.ProductView,{data:{products:[{id:t.id,title:t.title,price:(r==null?void 0:r.price.amount)||"0",vendor:t.vendor,variantId:(r==null?void 0:r.id)||"",variantTitle:(r==null?void 0:r.title)||"",quantity:1}]}})]})}),pw=`#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`,mw=`#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${pw}
`,gw=`#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${mw}
`,yw=Object.freeze(Object.defineProperty({__proto__:null,default:hw,loader:cw,meta:uw},Symbol.toStringTag,{value:"Module"}));async function vw(){return qe("/")}async function ww({context:e}){return e.customerAccount.logout()}const xw=Object.freeze(Object.defineProperty({__proto__:null,action:ww,loader:vw},Symbol.toStringTag,{value:"Module"})),Cw=()=>[{title:"Hydrogen | Products"}];async function Sw(e){const t=Ew(e),r=await bw(e);return{...t,...r}}async function bw({context:e,request:t}){const{storefront:r}=e,n=rr(t,{pageBy:8}),[{products:a}]=await Promise.all([r.query(jw,{variables:{...n}})]);return{products:a}}function Ew({context:e}){return{}}const _w=$e(function(){const{products:t}=Re();return f.jsxs("div",{className:"collection",children:[f.jsx("h1",{children:"Products"}),f.jsx(Tr,{connection:t,resourcesClassName:"products-grid",children:({node:r,index:n})=>f.jsx(Ps,{product:r,loading:n<8?"eager":void 0},r.id)})]})}),$w=`#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
`,jw=`#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...CollectionItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${$w}
`,Rw=Object.freeze(Object.defineProperty({__proto__:null,default:_w,loader:Sw,meta:Cw},Symbol.toStringTag,{value:"Module"}));async function Pw({context:e}){const t=await e.storefront.query(Iw),r=Object.values(t.shop||{});if(!r.length)throw new Response("No policies found",{status:404});return{policies:r}}const Aw=$e(function(){const{policies:t}=Re();return f.jsxs("div",{className:"policies",children:[f.jsx("h1",{children:"Policies"}),f.jsx("div",{children:t.map(r=>r?f.jsx("fieldset",{children:f.jsx(Ce,{to:`/policies/${r.handle}`,children:r.title})},r.id):null)})]})}),Iw=`#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`,kw=Object.freeze(Object.defineProperty({__proto__:null,default:Aw,loader:Pw},Symbol.toStringTag,{value:"Module"}));async function Tw({request:e,context:t}){return t.customerAccount.login()}const Dw=Object.freeze(Object.defineProperty({__proto__:null,loader:Tw},Symbol.toStringTag,{value:"Module"}));async function Ow({request:e,context:t,params:r}){const{cart:n}=t,{code:a}=r,o=new URL(e.url),s=new URLSearchParams(o.search);let i=s.get("redirect")||s.get("return_to")||"/";i.includes("//")&&(i="/"),s.delete("redirect"),s.delete("return_to");const l=`${i}?${s}`;if(!a)return qe(l);const d=await n.updateDiscountCodes([a]),m=n.setCartId(d.cart.id);return qe(l,{status:303,headers:m})}const Lw=Object.freeze(Object.defineProperty({__proto__:null,loader:Ow},Symbol.toStringTag,{value:"Module"}));async function Mw({request:e,context:{storefront:t}}){const r=await Fg({storefront:t,request:e});return r.headers.set("Cache-Control",`max-age=${60*60*24}`),r}const Nw=Object.freeze(Object.defineProperty({__proto__:null,loader:Mw},Symbol.toStringTag,{value:"Module"})),Fw=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.page.title)??""}`}];async function Uw(e){const t=Bw(e),r=await Hw(e);return{...t,...r}}async function Hw({context:e,request:t,params:r}){if(!r.handle)throw new Error("Missing page handle");const[{page:n}]=await Promise.all([e.storefront.query(qw,{variables:{handle:r.handle}})]);if(!n)throw new Response("Not Found",{status:404});return $n(t,{handle:r.handle,data:n}),{page:n}}function Bw({context:e}){return{}}const Vw=$e(function(){const{page:t}=Re();return f.jsxs("div",{className:"page",children:[f.jsx("header",{children:f.jsx("h1",{children:t.title})}),f.jsx("main",{dangerouslySetInnerHTML:{__html:t.body}})]})}),qw=`#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      handle
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`,zw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw,loader:Uw,meta:Fw},Symbol.toStringTag,{value:"Module"})),Ww=()=>[{title:"Hydrogen | Blogs"}];async function Gw(e){const t=Qw(e),r=await Yw(e);return{...t,...r}}async function Yw({context:e,request:t}){const r=rr(t,{pageBy:10}),[{blogs:n}]=await Promise.all([e.storefront.query(Jw,{variables:{...r}})]);return{blogs:n}}function Qw({context:e}){return{}}const Kw=$e(function(){const{blogs:t}=Re();return f.jsxs("div",{className:"blogs",children:[f.jsx("h1",{children:"Blogs"}),f.jsx("div",{className:"blogs-grid",children:f.jsx(Tr,{connection:t,children:({node:r})=>f.jsx(Ce,{className:"blog",prefetch:"intent",to:`/blogs/${r.handle}`,children:f.jsx("h2",{children:r.title})},r.handle)})})]})}),Jw=`#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo {
          title
          description
        }
      }
    }
  }
`,Zw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw,loader:Gw,meta:Ww},Symbol.toStringTag,{value:"Module"})),Xw=`#graphql
  fragment Customer on Customer {
    id
    firstName
    lastName
    defaultAddress {
      ...Address
    }
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
  }
  fragment Address on CustomerAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    territoryCode
    zoneCode
    city
    zip
    phoneNumber
  }
`,ex=`#graphql
  query CustomerDetails {
    customer {
      ...Customer
    }
  }
  ${Xw}
`;function tx(){return!0}async function rx({context:e}){const{data:t,errors:r}=await e.customerAccount.query(ex);if(r!=null&&r.length||!(t!=null&&t.customer))throw new Error("Customer not found");return De({customer:t.customer},{headers:{"Cache-Control":"no-cache, no-store, must-revalidate"}})}const nx=$e(function(){const{customer:t}=Re(),r=t?t.firstName?`Welcome, ${t.firstName}`:"Welcome to your account.":"Account Details";return f.jsxs("div",{className:"account",children:[f.jsx("h1",{children:r}),f.jsx("br",{}),f.jsx(ax,{}),f.jsx("br",{}),f.jsx("br",{}),f.jsx(Ml,{context:{customer:t}})]})});function ax(){function e({isActive:t,isPending:r}){return{fontWeight:t?"bold":void 0,color:r?"grey":"black"}}return f.jsxs("nav",{role:"navigation",children:[f.jsx(Et,{to:"/account/orders",style:e,children:"Orders  "})," | ",f.jsx(Et,{to:"/account/profile",style:e,children:"  Profile  "})," | ",f.jsx(Et,{to:"/account/addresses",style:e,children:"  Addresses  "})," | ",f.jsx(ox,{})]})}function ox(){return f.jsxs(kr,{className:"account-logout",method:"POST",action:"/account/logout",children:[" ",f.jsx("button",{type:"submit",children:"Sign out"})]})}const sx=Object.freeze(Object.defineProperty({__proto__:null,default:nx,loader:rx,shouldRevalidate:tx},Symbol.toStringTag,{value:"Module"})),ix=`#graphql
  fragment OrderItem on Order {
    totalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    id
    number
    processedAt
  }
`,lx=`#graphql
  fragment CustomerOrders on Customer {
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
  ${ix}
`,ux=`#graphql
  ${lx}
  query CustomerOrders(
    $endCursor: String
    $first: Int
    $last: Int
    $startCursor: String
  ) {
    customer {
      ...CustomerOrders
    }
  }
`,cx=()=>[{title:"Orders"}];async function dx({request:e,context:t}){const r=rr(e,{pageBy:20}),{data:n,errors:a}=await t.customerAccount.query(ux,{variables:{...r}});if(a!=null&&a.length||!(n!=null&&n.customer))throw Error("Customer orders not found");return{customer:n.customer}}const fx=$e(function(){const{customer:t}=Re(),{orders:r}=t;return f.jsx("div",{className:"orders",children:r.nodes.length?f.jsx(hx,{orders:r}):f.jsx(ic,{})})});function hx({orders:e}){return f.jsx("div",{className:"acccount-orders",children:e!=null&&e.nodes.length?f.jsx(Tr,{connection:e,children:({node:t})=>f.jsx(px,{order:t},t.id)}):f.jsx(ic,{})})}function ic(){return f.jsxs("div",{children:[f.jsx("p",{children:"You haven't placed any orders yet."}),f.jsx("br",{}),f.jsx("p",{children:f.jsx(Ce,{to:"/collections",children:"Start Shopping →"})})]})}function px({order:e}){var r;const t=(r=_t(e.fulfillments)[0])==null?void 0:r.status;return f.jsxs(f.Fragment,{children:[f.jsxs("fieldset",{children:[f.jsx(Ce,{to:`/account/orders/${btoa(e.id)}`,children:f.jsxs("strong",{children:["#",e.number]})}),f.jsx("p",{children:new Date(e.processedAt).toDateString()}),f.jsx("p",{children:e.financialStatus}),t&&f.jsx("p",{children:t}),f.jsx(Oe,{data:e.totalPrice}),f.jsx(Ce,{to:`/account/orders/${btoa(e.id)}`,children:"View Order →"})]}),f.jsx("br",{})]})}const mx=Object.freeze(Object.defineProperty({__proto__:null,default:fx,loader:dx,meta:cx},Symbol.toStringTag,{value:"Module"})),gx=`#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineItemFull on LineItem {
    id
    title
    quantity
    price {
      ...OrderMoney
    }
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    totalDiscount {
      ...OrderMoney
    }
    image {
      altText
      height
      url
      id
      width
    }
    variantTitle
  }
  fragment Order on Order {
    id
    name
    statusPageUrl
    processedAt
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    totalTax {
      ...OrderMoney
    }
    totalPrice {
      ...OrderMoney
    }
    subtotal {
      ...OrderMoney
    }
    shippingAddress {
      name
      formatted(withName: true)
      formattedArea
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order($orderId: ID!) {
    order(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`,yx=({data:e})=>{var t;return[{title:`Order ${(t=e==null?void 0:e.order)==null?void 0:t.name}`}]};async function vx({params:e,context:t}){var y,C;if(!e.id)return qe("/account/orders");const r=atob(e.id),{data:n,errors:a}=await t.customerAccount.query(gx,{variables:{orderId:r}});if(a!=null&&a.length||!(n!=null&&n.order))throw new Error("Order not found");const{order:o}=n,s=_t(o.lineItems),i=_t(o.discountApplications),l=((y=_t(o.fulfillments)[0])==null?void 0:y.status)??"N/A",d=(C=i[0])==null?void 0:C.value,m=(d==null?void 0:d.__typename)==="MoneyV2"&&d,g=(d==null?void 0:d.__typename)==="PricingPercentageValue"&&(d==null?void 0:d.percentage);return{order:o,lineItems:s,discountValue:m,discountPercentage:g,fulfillmentStatus:l}}const wx=$e(function(){const{order:t,lineItems:r,discountValue:n,discountPercentage:a,fulfillmentStatus:o}=Re();return f.jsxs("div",{className:"account-order",children:[f.jsxs("h2",{children:["Order ",t.name]}),f.jsxs("p",{children:["Placed on ",new Date(t.processedAt).toDateString()]}),f.jsx("br",{}),f.jsxs("div",{children:[f.jsxs("table",{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",children:"Product"}),f.jsx("th",{scope:"col",children:"Price"}),f.jsx("th",{scope:"col",children:"Quantity"}),f.jsx("th",{scope:"col",children:"Total"})]})}),f.jsx("tbody",{children:r.map((s,i)=>f.jsx(xx,{lineItem:s},i))}),f.jsxs("tfoot",{children:[(n&&n.amount||a)&&f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:f.jsx("p",{children:"Discounts"})}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Discounts"})}),f.jsx("td",{children:a?f.jsxs("span",{children:["-",a,"% OFF"]}):n&&f.jsx(Oe,{data:n})})]}),f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:f.jsx("p",{children:"Subtotal"})}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Subtotal"})}),f.jsx("td",{children:f.jsx(Oe,{data:t.subtotal})})]}),f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:"Tax"}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Tax"})}),f.jsx("td",{children:f.jsx(Oe,{data:t.totalTax})})]}),f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:"Total"}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Total"})}),f.jsx("td",{children:f.jsx(Oe,{data:t.totalPrice})})]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{children:"Shipping Address"}),t!=null&&t.shippingAddress?f.jsxs("address",{children:[f.jsx("p",{children:t.shippingAddress.name}),t.shippingAddress.formatted?f.jsx("p",{children:t.shippingAddress.formatted}):"",t.shippingAddress.formattedArea?f.jsx("p",{children:t.shippingAddress.formattedArea}):""]}):f.jsx("p",{children:"No shipping address defined"}),f.jsx("h3",{children:"Status"}),f.jsx("div",{children:f.jsx("p",{children:o})})]})]}),f.jsx("br",{}),f.jsx("p",{children:f.jsx("a",{target:"_blank",href:t.statusPageUrl,rel:"noreferrer",children:"View Order Status →"})})]})});function xx({lineItem:e}){return f.jsxs("tr",{children:[f.jsx("td",{children:f.jsxs("div",{children:[(e==null?void 0:e.image)&&f.jsx("div",{children:f.jsx(Xe,{data:e.image,width:96,height:96})}),f.jsxs("div",{children:[f.jsx("p",{children:e.title}),f.jsx("small",{children:e.variantTitle})]})]})}),f.jsx("td",{children:f.jsx(Oe,{data:e.price})}),f.jsx("td",{children:e.quantity}),f.jsx("td",{children:f.jsx(Oe,{data:e.totalDiscount})})]},e.id)}const Cx=Object.freeze(Object.defineProperty({__proto__:null,default:wx,loader:vx,meta:yx},Symbol.toStringTag,{value:"Module"})),Sx=`#graphql
  mutation customerAddressUpdate(
    $address: CustomerAddressInput!
    $addressId: ID!
    $defaultAddress: Boolean
 ) {
    customerAddressUpdate(
      address: $address
      addressId: $addressId
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,bx=`#graphql
  mutation customerAddressDelete(
    $addressId: ID!,
  ) {
    customerAddressDelete(addressId: $addressId) {
      deletedAddressId
      userErrors {
        code
        field
        message
      }
    }
  }
`,Ex=`#graphql
  mutation customerAddressCreate(
    $address: CustomerAddressInput!
    $defaultAddress: Boolean
  ) {
    customerAddressCreate(
      address: $address
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,_x=()=>[{title:"Addresses"}];async function $x({context:e}){return await e.customerAccount.handleAuthStatus(),{}}async function jx({request:e,context:t}){var n,a,o,s,i,l,d,m,g,y,C,v,b;const{customerAccount:r}=t;try{const j=await e.formData(),$=j.has("addressId")?String(j.get("addressId")):null;if(!$)throw new Error("You must provide an address id.");if(!await r.isLoggedIn())return De({error:{[$]:"Unauthorized"}},{status:401});const L=j.has("defaultAddress")?String(j.get("defaultAddress"))==="on":!1,F={},O=["address1","address2","city","company","territoryCode","firstName","lastName","phoneNumber","zoneCode","zip"];for(const D of O){const H=j.get(D);typeof H=="string"&&(F[D]=H)}switch(e.method){case"POST":try{const{data:D,errors:H}=await r.mutate(Ex,{variables:{address:F,defaultAddress:L}});if(H!=null&&H.length)throw new Error(H[0].message);if((a=(n=D==null?void 0:D.customerAddressCreate)==null?void 0:n.userErrors)!=null&&a.length)throw new Error((o=D==null?void 0:D.customerAddressCreate)==null?void 0:o.userErrors[0].message);if(!((s=D==null?void 0:D.customerAddressCreate)!=null&&s.customerAddress))throw new Error("Customer address create failed.");return{error:null,createdAddress:(i=D==null?void 0:D.customerAddressCreate)==null?void 0:i.customerAddress,defaultAddress:L}}catch(D){return D instanceof Error?De({error:{[$]:D.message}},{status:400}):De({error:{[$]:D}},{status:400})}case"PUT":try{const{data:D,errors:H}=await r.mutate(Sx,{variables:{address:F,addressId:decodeURIComponent($),defaultAddress:L}});if(H!=null&&H.length)throw new Error(H[0].message);if((d=(l=D==null?void 0:D.customerAddressUpdate)==null?void 0:l.userErrors)!=null&&d.length)throw new Error((m=D==null?void 0:D.customerAddressUpdate)==null?void 0:m.userErrors[0].message);if(!((g=D==null?void 0:D.customerAddressUpdate)!=null&&g.customerAddress))throw new Error("Customer address update failed.");return{error:null,updatedAddress:F,defaultAddress:L}}catch(D){return D instanceof Error?De({error:{[$]:D.message}},{status:400}):De({error:{[$]:D}},{status:400})}case"DELETE":try{const{data:D,errors:H}=await r.mutate(bx,{variables:{addressId:decodeURIComponent($)}});if(H!=null&&H.length)throw new Error(H[0].message);if((C=(y=D==null?void 0:D.customerAddressDelete)==null?void 0:y.userErrors)!=null&&C.length)throw new Error((v=D==null?void 0:D.customerAddressDelete)==null?void 0:v.userErrors[0].message);if(!((b=D==null?void 0:D.customerAddressDelete)!=null&&b.deletedAddressId))throw new Error("Customer address delete failed.");return{error:null,deletedAddress:$}}catch(D){return D instanceof Error?De({error:{[$]:D.message}},{status:400}):De({error:{[$]:D}},{status:400})}default:return De({error:{[$]:"Method not allowed"}},{status:405})}}catch(j){return j instanceof Error?De({error:j.message},{status:400}):De({error:j},{status:400})}}const Rx=$e(function(){const{customer:t}=Il(),{defaultAddress:r,addresses:n}=t;return f.jsxs("div",{className:"account-addresses",children:[f.jsx("h2",{children:"Addresses"}),f.jsx("br",{}),n.nodes.length?f.jsxs("div",{children:[f.jsxs("div",{children:[f.jsx("legend",{children:"Create address"}),f.jsx(Px,{})]}),f.jsx("br",{}),f.jsx("hr",{}),f.jsx("br",{}),f.jsx(Ax,{addresses:n,defaultAddress:r})]}):f.jsx("p",{children:"You have no addresses saved."})]})});function Px(){const e={address1:"",address2:"",city:"",company:"",territoryCode:"",firstName:"",id:"new",lastName:"",phoneNumber:"",zoneCode:"",zip:""};return f.jsx(As,{addressId:"NEW_ADDRESS_ID",address:e,defaultAddress:null,children:({stateForMethod:t})=>f.jsx("div",{children:f.jsx("button",{disabled:t("POST")!=="idle",formMethod:"POST",type:"submit",children:t("POST")!=="idle"?"Creating":"Create"})})})}function Ax({addresses:e,defaultAddress:t}){return f.jsxs("div",{children:[f.jsx("legend",{children:"Existing addresses"}),e.nodes.map(r=>f.jsx(As,{addressId:r.id,address:r,defaultAddress:t,children:({stateForMethod:n})=>f.jsxs("div",{children:[f.jsx("button",{disabled:n("PUT")!=="idle",formMethod:"PUT",type:"submit",children:n("PUT")!=="idle"?"Saving":"Save"}),f.jsx("button",{disabled:n("DELETE")!=="idle",formMethod:"DELETE",type:"submit",children:n("DELETE")!=="idle"?"Deleting":"Delete"})]})},r.id))]})}function As({addressId:e,address:t,defaultAddress:r,children:n}){var d;const{state:a,formMethod:o}=Ar(),s=Ua(),i=(d=s==null?void 0:s.error)==null?void 0:d[e],l=(r==null?void 0:r.id)===e;return f.jsx(kr,{id:e,children:f.jsxs("fieldset",{children:[f.jsx("input",{type:"hidden",name:"addressId",defaultValue:e}),f.jsx("label",{htmlFor:"firstName",children:"First name*"}),f.jsx("input",{"aria-label":"First name",autoComplete:"given-name",defaultValue:(t==null?void 0:t.firstName)??"",id:"firstName",name:"firstName",placeholder:"First name",required:!0,type:"text"}),f.jsx("label",{htmlFor:"lastName",children:"Last name*"}),f.jsx("input",{"aria-label":"Last name",autoComplete:"family-name",defaultValue:(t==null?void 0:t.lastName)??"",id:"lastName",name:"lastName",placeholder:"Last name",required:!0,type:"text"}),f.jsx("label",{htmlFor:"company",children:"Company"}),f.jsx("input",{"aria-label":"Company",autoComplete:"organization",defaultValue:(t==null?void 0:t.company)??"",id:"company",name:"company",placeholder:"Company",type:"text"}),f.jsx("label",{htmlFor:"address1",children:"Address line*"}),f.jsx("input",{"aria-label":"Address line 1",autoComplete:"address-line1",defaultValue:(t==null?void 0:t.address1)??"",id:"address1",name:"address1",placeholder:"Address line 1*",required:!0,type:"text"}),f.jsx("label",{htmlFor:"address2",children:"Address line 2"}),f.jsx("input",{"aria-label":"Address line 2",autoComplete:"address-line2",defaultValue:(t==null?void 0:t.address2)??"",id:"address2",name:"address2",placeholder:"Address line 2",type:"text"}),f.jsx("label",{htmlFor:"city",children:"City*"}),f.jsx("input",{"aria-label":"City",autoComplete:"address-level2",defaultValue:(t==null?void 0:t.city)??"",id:"city",name:"city",placeholder:"City",required:!0,type:"text"}),f.jsx("label",{htmlFor:"zoneCode",children:"State / Province*"}),f.jsx("input",{"aria-label":"State/Province",autoComplete:"address-level1",defaultValue:(t==null?void 0:t.zoneCode)??"",id:"zoneCode",name:"zoneCode",placeholder:"State / Province",required:!0,type:"text"}),f.jsx("label",{htmlFor:"zip",children:"Zip / Postal Code*"}),f.jsx("input",{"aria-label":"Zip",autoComplete:"postal-code",defaultValue:(t==null?void 0:t.zip)??"",id:"zip",name:"zip",placeholder:"Zip / Postal Code",required:!0,type:"text"}),f.jsx("label",{htmlFor:"territoryCode",children:"Country Code*"}),f.jsx("input",{"aria-label":"territoryCode",autoComplete:"country",defaultValue:(t==null?void 0:t.territoryCode)??"",id:"territoryCode",name:"territoryCode",placeholder:"Country",required:!0,type:"text",maxLength:2}),f.jsx("label",{htmlFor:"phoneNumber",children:"Phone"}),f.jsx("input",{"aria-label":"Phone Number",autoComplete:"tel",defaultValue:(t==null?void 0:t.phoneNumber)??"",id:"phoneNumber",name:"phoneNumber",placeholder:"+16135551111",pattern:"^\\+?[1-9]\\d{3,14}$",type:"tel"}),f.jsxs("div",{children:[f.jsx("input",{defaultChecked:l,id:"defaultAddress",name:"defaultAddress",type:"checkbox"}),f.jsx("label",{htmlFor:"defaultAddress",children:"Set as default address"})]}),i?f.jsx("p",{children:f.jsx("mark",{children:f.jsx("small",{children:i})})}):f.jsx("br",{}),n({stateForMethod:m=>o===m?a:"idle"})]})})}const Ix=Object.freeze(Object.defineProperty({__proto__:null,AddressForm:As,action:jx,default:Rx,loader:$x,meta:_x},Symbol.toStringTag,{value:"Module"})),kx=`#graphql
  # https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
  ){
    customerUpdate(input: $customer) {
      customer {
        firstName
        lastName
        emailAddress {
          emailAddress
        }
        phoneNumber {
          phoneNumber
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Tx=()=>[{title:"Profile"}];async function Dx({context:e}){return await e.customerAccount.handleAuthStatus(),{}}async function Ox({request:e,context:t}){var a,o;const{customerAccount:r}=t;if(e.method!=="PUT")return De({error:"Method not allowed"},{status:405});const n=await e.formData();try{const s={},i=["firstName","lastName"];for(const[m,g]of n.entries())i.includes(m)&&typeof g=="string"&&g.length&&(s[m]=g);const{data:l,errors:d}=await r.mutate(kx,{variables:{customer:s}});if(d!=null&&d.length)throw new Error(d[0].message);if(!((a=l==null?void 0:l.customerUpdate)!=null&&a.customer))throw new Error("Customer profile update failed.");return{error:null,customer:(o=l==null?void 0:l.customerUpdate)==null?void 0:o.customer}}catch(s){return De({error:s.message,customer:null},{status:400})}}const Lx=$e(function(){const t=Il(),{state:r}=Ar(),n=Ua(),a=(n==null?void 0:n.customer)??(t==null?void 0:t.customer);return f.jsxs("div",{className:"account-profile",children:[f.jsx("h2",{children:"My profile"}),f.jsx("br",{}),f.jsxs(kr,{method:"PUT",children:[f.jsx("legend",{children:"Personal information"}),f.jsxs("fieldset",{children:[f.jsx("label",{htmlFor:"firstName",children:"First name"}),f.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",defaultValue:a.firstName??"",minLength:2}),f.jsx("label",{htmlFor:"lastName",children:"Last name"}),f.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",defaultValue:a.lastName??"",minLength:2})]}),n!=null&&n.error?f.jsx("p",{children:f.jsx("mark",{children:f.jsx("small",{children:n.error})})}):f.jsx("br",{}),f.jsx("button",{type:"submit",disabled:r!=="idle",children:r!=="idle"?"Updating":"Update"})]})]})}),Mx=Object.freeze(Object.defineProperty({__proto__:null,action:Ox,default:Lx,loader:Dx,meta:Tx},Symbol.toStringTag,{value:"Module"}));async function Nx(){return qe("/account/orders")}const Fx=Object.freeze(Object.defineProperty({__proto__:null,loader:Nx},Symbol.toStringTag,{value:"Module"}));async function Ux({context:e}){return await e.customerAccount.handleAuthStatus(),qe("/account")}const Hx=Object.freeze(Object.defineProperty({__proto__:null,loader:Ux},Symbol.toStringTag,{value:"Module"})),Bx=()=>[{title:"Hydrogen | Home"}];async function Vx(e){const t=zx(e),r=await qx(e);return{...t,...r}}async function qx({context:e}){const[{collections:t}]=await Promise.all([e.storefront.query(Qx)]);return{featuredCollection:t.nodes[0]}}function zx({context:e}){return{recommendedProducts:e.storefront.query(Kx).catch(r=>(console.error(r),null))}}const Wx=$e(function(){const t=Re();return f.jsxs("div",{className:"home",children:[f.jsx(Gx,{collection:t.featuredCollection}),f.jsx(Yx,{products:t.recommendedProducts})]})});function Gx({collection:e}){if(!e)return null;const t=e==null?void 0:e.image;return f.jsxs(Ce,{className:"featured-collection",to:`/collections/${e.handle}`,children:[t&&f.jsx("div",{className:"featured-collection-image",children:f.jsx(Xe,{data:t,sizes:"100vw"})}),f.jsx("h1",{children:e.title})]})}function Yx({products:e}){return f.jsxs("div",{className:"recommended-products",children:[f.jsx("h2",{children:"Recommended Products"}),f.jsx(S.Suspense,{fallback:f.jsx("div",{children:"Loading..."}),children:f.jsx(vn,{resolve:e,children:t=>f.jsx("div",{className:"recommended-products-grid",children:t?t.products.nodes.map(r=>f.jsx(Ps,{product:r},r.id)):null})})}),f.jsx("br",{})]})}const Qx=`#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`,Kx=`#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`,Jx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx,loader:Vx,meta:Bx},Symbol.toStringTag,{value:"Module"}));function Zx({children:e,...t}){const r=S.useRef(null);return Xx(r),typeof e!="function"?null:f.jsx(kr,{method:"get",...t,children:e({inputRef:r})})}function Xx(e){S.useEffect(()=>{function t(r){var n,a;r.key==="k"&&r.metaKey&&(r.preventDefault(),(n=e.current)==null||n.focus()),r.key==="Escape"&&((a=e.current)==null||a.blur())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[e])}function xt({term:e,result:t,children:r}){return t!=null&&t.total?r({...t.items,term:e}):null}xt.Articles=eC;xt.Pages=tC;xt.Products=rC;xt.Empty=nC;function eC({term:e,articles:t}){var r;return t!=null&&t.nodes.length?f.jsxs("div",{className:"search-result",children:[f.jsx("h2",{children:"Articles"}),f.jsx("div",{children:(r=t==null?void 0:t.nodes)==null?void 0:r.map(n=>{const a=nr({baseUrl:`/blogs/${n.handle}`,trackingParams:n.trackingParameters,term:e});return f.jsx("div",{className:"search-results-item",children:f.jsx(Ce,{prefetch:"intent",to:a,children:n.title})},n.id)})}),f.jsx("br",{})]}):null}function tC({term:e,pages:t}){var r;return t!=null&&t.nodes.length?f.jsxs("div",{className:"search-result",children:[f.jsx("h2",{children:"Pages"}),f.jsx("div",{children:(r=t==null?void 0:t.nodes)==null?void 0:r.map(n=>{const a=nr({baseUrl:`/pages/${n.handle}`,trackingParams:n.trackingParameters,term:e});return f.jsx("div",{className:"search-results-item",children:f.jsx(Ce,{prefetch:"intent",to:a,children:n.title})},n.id)})}),f.jsx("br",{})]}):null}function rC({term:e,products:t}){return t!=null&&t.nodes.length?f.jsxs("div",{className:"search-result",children:[f.jsx("h2",{children:"Products"}),f.jsx(Ku,{connection:t,children:({nodes:r,isLoading:n,NextLink:a,PreviousLink:o})=>{const s=r.map(i=>{var g,y;const l=nr({baseUrl:`/products/${i.handle}`,trackingParams:i.trackingParameters,term:e}),d=(g=i==null?void 0:i.selectedOrFirstAvailableVariant)==null?void 0:g.price,m=(y=i==null?void 0:i.selectedOrFirstAvailableVariant)==null?void 0:y.image;return f.jsx("div",{className:"search-results-item",children:f.jsxs(Ce,{prefetch:"intent",to:l,children:[m&&f.jsx(Xe,{data:m,alt:i.title,width:50}),f.jsxs("div",{children:[f.jsx("p",{children:i.title}),f.jsx("small",{children:d&&f.jsx(Oe,{data:d})})]})]})},i.id)});return f.jsxs("div",{children:[f.jsx("div",{children:f.jsx(o,{children:n?"Loading...":f.jsx("span",{children:"↑ Load previous"})})}),f.jsxs("div",{children:[s,f.jsx("br",{})]}),f.jsx("div",{children:f.jsx(a,{children:n?"Loading...":f.jsx("span",{children:"Load more ↓"})})})]})}}),f.jsx("br",{})]}):null}function nC(){return f.jsx("p",{children:"No results, try a different search."})}const aC=()=>[{title:"Hydrogen | Search"}];async function oC({request:e,context:t}){const a=new URL(e.url).searchParams.has("predictive")?vC({request:e,context:t}):dC({request:e,context:t});return a.catch(o=>(console.error(o),{term:"",result:null,error:o.message})),await a}const sC=$e(function(){const{type:t,term:r,result:n,error:a}=Re();return t==="predictive"?null:f.jsxs("div",{className:"search",children:[f.jsx("h1",{children:"Search"}),f.jsx(Zx,{children:({inputRef:o})=>f.jsxs(f.Fragment,{children:[f.jsx("input",{defaultValue:r,name:"q",placeholder:"Search…",ref:o,type:"search"})," ",f.jsx("button",{type:"submit",children:"Search"})]})}),a&&f.jsx("p",{style:{color:"red"},children:a}),!r||!(n!=null&&n.total)?f.jsx(xt.Empty,{}):f.jsx(xt,{result:n,term:r,children:({articles:o,pages:s,products:i,term:l})=>f.jsxs("div",{children:[f.jsx(xt.Products,{products:i,term:l}),f.jsx(xt.Pages,{pages:s,term:l}),f.jsx(xt.Articles,{articles:o,term:l})]})}),f.jsx(Ya.SearchView,{data:{searchTerm:r,searchResults:n}})]})}),iC=`#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
      compareAtPrice {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
      product {
        handle
        title
      }
    }
  }
`,lC=`#graphql
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
`,uC=`#graphql
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
`,cC=`#graphql
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`,lc=`#graphql
  query RegularSearch(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $term: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    articles: search(
      query: $term,
      types: [ARTICLE],
      first: $first,
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
    pages: search(
      query: $term,
      types: [PAGE],
      first: $first,
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    products: search(
      after: $endCursor,
      before: $startCursor,
      first: $first,
      last: $last,
      query: $term,
      sortKey: RELEVANCE,
      types: [PRODUCT],
      unavailableProducts: HIDE,
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${iC}
  ${lC}
  ${uC}
  ${cC}
`;async function dC({request:e,context:t}){const{storefront:r}=t,n=new URL(e.url),a=rr(e,{pageBy:8}),o=String(n.searchParams.get("q")||""),{errors:s,...i}=await r.query(lc,{variables:{...a,term:o}});if(!i)throw new Error("No search data returned from Shopify API");const l=Object.values(i).reduce((m,{nodes:g})=>m+g.length,0),d=s?s.map(({message:m})=>m).join(", "):void 0;return{type:"regular",term:o,error:d,result:{total:l,items:i}}}const fC=`#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    blog {
      handle
    }
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
`,hC=`#graphql
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
`,pC=`#graphql
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
`,mC=`#graphql
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
    }
  }
`,gC=`#graphql
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
`,yC=`#graphql
  query PredictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $term: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $term,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
  ${fC}
  ${hC}
  ${pC}
  ${mC}
  ${gC}
`;async function vC({request:e,context:t}){const{storefront:r}=t,n=new URL(e.url),a=String(n.searchParams.get("q")||"").trim(),o=Number(n.searchParams.get("limit")||10),s="predictive";if(!a)return{type:s,term:a,result:sc()};const{predictiveSearch:i,errors:l}=await r.query(yC,{variables:{limit:o,limitScope:"EACH",term:a}});if(l)throw new Error(`Shopify API errors: ${l.map(({message:m})=>m).join(", ")}`);if(!i)throw new Error("No predictive search data returned from Shopify API");const d=Object.values(i).reduce((m,g)=>m+g.length,0);return{type:s,term:a,result:{items:i,total:d}}}const wC=Object.freeze(Object.defineProperty({__proto__:null,SEARCH_QUERY:lc,default:sC,loader:oC,meta:aC},Symbol.toStringTag,{value:"Module"})),xC=()=>[{title:"Hydrogen | Cart"}],CC=({actionHeaders:e})=>e;async function SC({request:e,context:t}){var v;const{cart:r}=t,n=await e.formData(),{action:a,inputs:o}=xe.getFormInput(n);if(!a)throw new Error("No action provided");let s=200,i;switch(a){case xe.ACTIONS.LinesAdd:i=await r.addLines(o.lines);break;case xe.ACTIONS.LinesUpdate:i=await r.updateLines(o.lines);break;case xe.ACTIONS.LinesRemove:i=await r.removeLines(o.lineIds);break;case xe.ACTIONS.DiscountCodesUpdate:{const b=o.discountCode,j=b?[b]:[];j.push(...o.discountCodes),i=await r.updateDiscountCodes(j);break}case xe.ACTIONS.GiftCardCodesUpdate:{const b=o.giftCardCode,j=b?[b]:[];j.push(...o.giftCardCodes),i=await r.updateGiftCardCodes(j);break}case xe.ACTIONS.BuyerIdentityUpdate:{i=await r.updateBuyerIdentity({...o.buyerIdentity});break}default:throw new Error(`${a} cart action is not defined`)}const l=(v=i==null?void 0:i.cart)==null?void 0:v.id,d=l?r.setCartId(i.cart.id):new Headers,{cart:m,errors:g,warnings:y}=i,C=n.get("redirectTo")??null;return typeof C=="string"&&(s=303,d.set("Location",C)),De({cart:m,errors:g,warnings:y,analytics:{cartId:l}},{status:s,headers:d})}async function bC({context:e}){const{cart:t}=e;return await t.get()}const EC=$e(function(){const t=Re();return f.jsxs("div",{className:"cart",children:[f.jsx("h1",{children:"Cart"}),f.jsx(oc,{layout:"page",cart:t})]})}),_C=Object.freeze(Object.defineProperty({__proto__:null,action:SC,default:EC,headers:CC,loader:bC,meta:xC},Symbol.toStringTag,{value:"Module"}));async function $C({request:e,context:t,params:r}){var C;const{cart:n}=t,{lines:a}=r;if(!a)return qe("/cart");const o=a.split(",").map(v=>{const b=v.split(":"),j=b[0],$=parseInt(b[1],10);return{merchandiseId:`gid://shopify/ProductVariant/${j}`,quantity:$}}),s=new URL(e.url),l=new URLSearchParams(s.search).get("discount"),d=l?[l]:[],m=await n.create({lines:o,discountCodes:d}),g=m.cart;if((C=m.errors)!=null&&C.length||!g)throw new Response("Link may be expired. Try checking the URL.",{status:410});const y=n.setCartId(g.id);if(g.checkoutUrl)return qe(g.checkoutUrl,{headers:y});throw new Error("No checkout URL found")}const jC=$e(function(){return null}),RC=Object.freeze(Object.defineProperty({__proto__:null,default:jC,loader:$C},Symbol.toStringTag,{value:"Module"}));async function PC({request:e}){throw new Response(`${new URL(e.url).pathname} not found`,{status:404})}const AC=$e(function(){return null}),IC=Object.freeze(Object.defineProperty({__proto__:null,default:AC,loader:PC},Symbol.toStringTag,{value:"Module"})),kC={entry:{module:"/assets/entry.client-BzHiJ9Or.js",imports:["/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!0,module:"/assets/root-CdsZWgZS.js",imports:["/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/with-props-DVGQI9yc.js","/assets/index-DrHV5oH8.js","/assets/ProductPrice-wUdys-RI.js","/assets/CartMain-PFirBfZ6.js","/assets/search-DOeYwaXi.js","/assets/Image-Lob9_gmS.js","/assets/Money-D5nHN9tR.js","/assets/variants-Cdxbna-A.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/_robots.txt_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale)":{id:"routes/($locale)",parentId:"root",path:":locale?",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale)-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).blogs.$blogHandle.$articleHandle":{id:"routes/($locale).blogs.$blogHandle.$articleHandle",parentId:"routes/($locale)",path:"blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).blogs._blogHandle._articleHandle-LJtfrWQa.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/Image-Lob9_gmS.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).api.$version.[graphql.json]":{id:"routes/($locale).api.$version.[graphql.json]",parentId:"routes/($locale)",path:"api/:version/graphql.json",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).api._version._graphql.json_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).sitemap.$type.$page[.xml]":{id:"routes/($locale).sitemap.$type.$page[.xml]",parentId:"routes/($locale)",path:"sitemap/:type/:page.xml",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).sitemap._type._page_.xml_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).blogs.$blogHandle._index":{id:"routes/($locale).blogs.$blogHandle._index",parentId:"routes/($locale)",path:"blogs/:blogHandle",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).blogs._blogHandle._index-CZ_Y-Cx5.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/PaginatedResourceSection-BgTPys-_.js","/assets/Image-Lob9_gmS.js","/assets/index-DrHV5oH8.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).collections.$handle":{id:"routes/($locale).collections.$handle",parentId:"routes/($locale)",path:"collections/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).collections._handle-rC9V-UGU.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/index-DrHV5oH8.js","/assets/PaginatedResourceSection-BgTPys-_.js","/assets/ProductItem-DSLIcf28.js","/assets/variants-Cdxbna-A.js","/assets/Image-Lob9_gmS.js","/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account_.authorize":{id:"routes/($locale).account_.authorize",parentId:"routes/($locale)",path:"account/authorize",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account_.authorize-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).collections._index":{id:"routes/($locale).collections._index",parentId:"routes/($locale)",path:"collections",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).collections._index-BYG2VR1Y.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/PaginatedResourceSection-BgTPys-_.js","/assets/Image-Lob9_gmS.js","/assets/index-DrHV5oH8.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).policies.$handle":{id:"routes/($locale).policies.$handle",parentId:"routes/($locale)",path:"policies/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).policies._handle-Bi6PhVvb.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).products.$handle":{id:"routes/($locale).products.$handle",parentId:"routes/($locale)",path:"products/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).products._handle-DHaOQd-_.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/index-DrHV5oH8.js","/assets/ProductPrice-wUdys-RI.js","/assets/Image-Lob9_gmS.js","/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account_.logout":{id:"routes/($locale).account_.logout",parentId:"routes/($locale)",path:"account/logout",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account_.logout-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).collections.all":{id:"routes/($locale).collections.all",parentId:"routes/($locale)",path:"collections/all",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).collections.all-D28QmZec.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/PaginatedResourceSection-BgTPys-_.js","/assets/ProductItem-DSLIcf28.js","/assets/index-DrHV5oH8.js","/assets/variants-Cdxbna-A.js","/assets/Image-Lob9_gmS.js","/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).policies._index":{id:"routes/($locale).policies._index",parentId:"routes/($locale)",path:"policies",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).policies._index-B7AClpI2.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account_.login":{id:"routes/($locale).account_.login",parentId:"routes/($locale)",path:"account/login",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account_.login-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).discount.$code":{id:"routes/($locale).discount.$code",parentId:"routes/($locale)",path:"discount/:code",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).discount._code-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).[sitemap.xml]":{id:"routes/($locale).[sitemap.xml]",parentId:"routes/($locale)",path:"sitemap.xml",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale)._sitemap.xml_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).pages.$handle":{id:"routes/($locale).pages.$handle",parentId:"routes/($locale)",path:"pages/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).pages._handle-oYM1bBHM.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).blogs._index":{id:"routes/($locale).blogs._index",parentId:"routes/($locale)",path:"blogs",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).blogs._index-CYqWxjkr.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/PaginatedResourceSection-BgTPys-_.js","/assets/index-DrHV5oH8.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account":{id:"routes/($locale).account",parentId:"routes/($locale)",path:"account",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account-BtJy_XWb.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.orders._index":{id:"routes/($locale).account.orders._index",parentId:"routes/($locale).account",path:"orders",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account.orders._index-cXLRZrkq.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/PaginatedResourceSection-BgTPys-_.js","/assets/index-DrHV5oH8.js","/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.orders.$id":{id:"routes/($locale).account.orders.$id",parentId:"routes/($locale).account",path:"orders/:id",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account.orders._id-fvwQcCj4.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/Money-D5nHN9tR.js","/assets/Image-Lob9_gmS.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.addresses":{id:"routes/($locale).account.addresses",parentId:"routes/($locale).account",path:"addresses",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account.addresses-B2VRSbt3.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.profile":{id:"routes/($locale).account.profile",parentId:"routes/($locale).account",path:"profile",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account.profile-CTexDSaq.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account._index":{id:"routes/($locale).account._index",parentId:"routes/($locale).account",path:void 0,index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account._index-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.$":{id:"routes/($locale).account.$",parentId:"routes/($locale).account",path:"*",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).account._-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale)._index":{id:"routes/($locale)._index",parentId:"routes/($locale)",path:void 0,index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale)._index-BqIHzcOh.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/ProductItem-DSLIcf28.js","/assets/Image-Lob9_gmS.js","/assets/variants-Cdxbna-A.js","/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).search":{id:"routes/($locale).search",parentId:"routes/($locale)",path:"search",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).search-NlWLdY5g.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/index-DrHV5oH8.js","/assets/search-DOeYwaXi.js","/assets/Image-Lob9_gmS.js","/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).cart":{id:"routes/($locale).cart",parentId:"routes/($locale)",path:"cart",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).cart-DVZfMRca.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/jsx-runtime-B1QxFx_A.js","/assets/chunk-D4RADZKF-CYQil85_.js","/assets/CartMain-PFirBfZ6.js","/assets/index-DrHV5oH8.js","/assets/ProductPrice-wUdys-RI.js","/assets/Money-D5nHN9tR.js","/assets/variants-Cdxbna-A.js","/assets/Image-Lob9_gmS.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).cart.$lines":{id:"routes/($locale).cart.$lines",parentId:"routes/($locale).cart",path:":lines",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale).cart._lines-BHTEHLjV.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).$":{id:"routes/($locale).$",parentId:"routes/($locale)",path:"*",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"/assets/(_locale)._-Ch91UYVy.js",imports:["/assets/with-props-DVGQI9yc.js","/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0}},url:"/assets/manifest-a271b578.js",version:"a271b578",sri:void 0},TC="dist/client",DC="/",OC={unstable_middleware:!1,unstable_optimizeDeps:!1,unstable_splitRouteModules:!1,unstable_subResourceIntegrity:!1,unstable_viteEnvironmentApi:!1},LC=!0,MC=!1,NC=[],FC={mode:"lazy",manifestPath:"/__manifest"},UC="/",HC={module:xy},BC={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:fv},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,module:gv},"routes/($locale)":{id:"routes/($locale)",parentId:"root",path:":locale?",index:void 0,caseSensitive:void 0,module:vv},"routes/($locale).blogs.$blogHandle.$articleHandle":{id:"routes/($locale).blogs.$blogHandle.$articleHandle",parentId:"routes/($locale)",path:"blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,module:_v},"routes/($locale).api.$version.[graphql.json]":{id:"routes/($locale).api.$version.[graphql.json]",parentId:"routes/($locale)",path:"api/:version/graphql.json",index:void 0,caseSensitive:void 0,module:jv},"routes/($locale).sitemap.$type.$page[.xml]":{id:"routes/($locale).sitemap.$type.$page[.xml]",parentId:"routes/($locale)",path:"sitemap/:type/:page.xml",index:void 0,caseSensitive:void 0,module:Pv},"routes/($locale).blogs.$blogHandle._index":{id:"routes/($locale).blogs.$blogHandle._index",parentId:"routes/($locale)",path:"blogs/:blogHandle",index:!0,caseSensitive:void 0,module:Mv},"routes/($locale).collections.$handle":{id:"routes/($locale).collections.$handle",parentId:"routes/($locale)",path:"collections/:handle",index:void 0,caseSensitive:void 0,module:zv},"routes/($locale).account_.authorize":{id:"routes/($locale).account_.authorize",parentId:"routes/($locale)",path:"account/authorize",index:void 0,caseSensitive:void 0,module:Gv},"routes/($locale).collections._index":{id:"routes/($locale).collections._index",parentId:"routes/($locale)",path:"collections",index:!0,caseSensitive:void 0,module:ew},"routes/($locale).policies.$handle":{id:"routes/($locale).policies.$handle",parentId:"routes/($locale)",path:"policies/:handle",index:void 0,caseSensitive:void 0,module:ow},"routes/($locale).products.$handle":{id:"routes/($locale).products.$handle",parentId:"routes/($locale)",path:"products/:handle",index:void 0,caseSensitive:void 0,module:yw},"routes/($locale).account_.logout":{id:"routes/($locale).account_.logout",parentId:"routes/($locale)",path:"account/logout",index:void 0,caseSensitive:void 0,module:xw},"routes/($locale).collections.all":{id:"routes/($locale).collections.all",parentId:"routes/($locale)",path:"collections/all",index:void 0,caseSensitive:void 0,module:Rw},"routes/($locale).policies._index":{id:"routes/($locale).policies._index",parentId:"routes/($locale)",path:"policies",index:!0,caseSensitive:void 0,module:kw},"routes/($locale).account_.login":{id:"routes/($locale).account_.login",parentId:"routes/($locale)",path:"account/login",index:void 0,caseSensitive:void 0,module:Dw},"routes/($locale).discount.$code":{id:"routes/($locale).discount.$code",parentId:"routes/($locale)",path:"discount/:code",index:void 0,caseSensitive:void 0,module:Lw},"routes/($locale).[sitemap.xml]":{id:"routes/($locale).[sitemap.xml]",parentId:"routes/($locale)",path:"sitemap.xml",index:void 0,caseSensitive:void 0,module:Nw},"routes/($locale).pages.$handle":{id:"routes/($locale).pages.$handle",parentId:"routes/($locale)",path:"pages/:handle",index:void 0,caseSensitive:void 0,module:zw},"routes/($locale).blogs._index":{id:"routes/($locale).blogs._index",parentId:"routes/($locale)",path:"blogs",index:!0,caseSensitive:void 0,module:Zw},"routes/($locale).account":{id:"routes/($locale).account",parentId:"routes/($locale)",path:"account",index:void 0,caseSensitive:void 0,module:sx},"routes/($locale).account.orders._index":{id:"routes/($locale).account.orders._index",parentId:"routes/($locale).account",path:"orders",index:!0,caseSensitive:void 0,module:mx},"routes/($locale).account.orders.$id":{id:"routes/($locale).account.orders.$id",parentId:"routes/($locale).account",path:"orders/:id",index:void 0,caseSensitive:void 0,module:Cx},"routes/($locale).account.addresses":{id:"routes/($locale).account.addresses",parentId:"routes/($locale).account",path:"addresses",index:void 0,caseSensitive:void 0,module:Ix},"routes/($locale).account.profile":{id:"routes/($locale).account.profile",parentId:"routes/($locale).account",path:"profile",index:void 0,caseSensitive:void 0,module:Mx},"routes/($locale).account._index":{id:"routes/($locale).account._index",parentId:"routes/($locale).account",path:void 0,index:!0,caseSensitive:void 0,module:Fx},"routes/($locale).account.$":{id:"routes/($locale).account.$",parentId:"routes/($locale).account",path:"*",index:void 0,caseSensitive:void 0,module:Hx},"routes/($locale)._index":{id:"routes/($locale)._index",parentId:"routes/($locale)",path:void 0,index:!0,caseSensitive:void 0,module:Jx},"routes/($locale).search":{id:"routes/($locale).search",parentId:"routes/($locale)",path:"search",index:void 0,caseSensitive:void 0,module:wC},"routes/($locale).cart":{id:"routes/($locale).cart",parentId:"routes/($locale)",path:"cart",index:void 0,caseSensitive:void 0,module:_C},"routes/($locale).cart.$lines":{id:"routes/($locale).cart.$lines",parentId:"routes/($locale).cart",path:":lines",index:void 0,caseSensitive:void 0,module:RC},"routes/($locale).$":{id:"routes/($locale).$",parentId:"routes/($locale)",path:"*",index:void 0,caseSensitive:void 0,module:IC}},VC=Object.freeze(Object.defineProperty({__proto__:null,assets:kC,assetsBuildDirectory:TC,basename:DC,entry:HC,future:OC,isSpaMode:MC,prerender:NC,publicPath:UC,routeDiscovery:FC,routes:BC,ssr:LC},Symbol.toStringTag,{value:"Module"}));export{zC as default};
//# sourceMappingURL=index.js.map
