const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Register-Cdh8L-g1.js","assets/Register-CY0ig8bZ.css","assets/Login-CrHSRtPY.js","assets/Login-CbKO3joz.css","assets/Home--VmA_jQJ.js","assets/chat-CdhCVEM-.js","assets/Home-D-nPbT4c.css","assets/Chat-DLIAACG7.js","assets/Chat-BoWhdY3i.css","assets/AIComponent--VZfnltN.js","assets/AIComponent-CaCBY0E0.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ou(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},cs=[],cn=()=>{},Yv=()=>!1,Da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),au=t=>t.startsWith("onUpdate:"),Ye=Object.assign,cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xv=Object.prototype.hasOwnProperty,Se=(t,e)=>Xv.call(t,e),re=Array.isArray,ls=t=>Ds(t)==="[object Map]",Oa=t=>Ds(t)==="[object Set]",Tf=t=>Ds(t)==="[object Date]",Zv=t=>Ds(t)==="[object RegExp]",fe=t=>typeof t=="function",Ue=t=>typeof t=="string",dn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",ag=t=>(Oe(t)||fe(t))&&fe(t.then)&&fe(t.catch),cg=Object.prototype.toString,Ds=t=>cg.call(t),eE=t=>Ds(t).slice(8,-1),lg=t=>Ds(t)==="[object Object]",lu=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tE=/-(\w)/g,Kt=Va(t=>t.replace(tE,(e,n)=>n?n.toUpperCase():"")),nE=/\B([A-Z])/g,yr=Va(t=>t.replace(nE,"-$1").toLowerCase()),Na=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uc=Va(t=>t?`on${Na(t)}`:""),nr=(t,e)=>!Object.is(t,e),us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ug=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rE=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let wf;const xa=()=>wf||(wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uu(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?aE(r):uu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Oe(t))return t}const sE=/;(?![^(]*\))/g,iE=/:([^]+)/,oE=/\/\*[^]*?\*\//g;function aE(t){const e={};return t.replace(oE,"").split(sE).forEach(n=>{if(n){const r=n.split(iE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gt(t){let e="";if(Ue(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Gt(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lE=ou(cE);function hg(t){return!!t||t===""}function uE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ma(t[r],e[r]);return n}function Ma(t,e){if(t===e)return!0;let n=Tf(t),r=Tf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=dn(t),r=dn(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?uE(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ma(t[o],e[o]))return!1}}return String(t)===String(e)}function fg(t,e){return t.findIndex(n=>Ma(n,e))}const dg=t=>!!(t&&t.__v_isRef===!0),Pi=t=>Ue(t)?t:t==null?"":re(t)||Oe(t)&&(t.toString===cg||!fe(t.toString))?dg(t)?Pi(t.value):JSON.stringify(t,pg,2):String(t),pg=(t,e)=>dg(e)?pg(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jc(r,i)+" =>"]=s,n),{})}:Oa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jc(n))}:dn(e)?jc(e):Oe(e)&&!re(e)&&!lg(e)?String(e):e,jc=(t,e="")=>{var n;return dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class gg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mg(t){return new gg(t)}function _g(){return Tt}function hE(t,e=!1){Tt&&Tt.cleanups.push(t)}let Ve;const $c=new WeakSet;class yg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$c.has(this)&&($c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Eg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,If(this),Tg(this);const e=Ve,n=Qt;Ve=this,Qt=!0;try{return this.fn()}finally{wg(this),Ve=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)du(e);this.deps=this.depsTail=void 0,If(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pl(this)&&this.run()}get dirty(){return pl(this)}}let vg=0,gi,mi;function Eg(t,e=!1){if(t.flags|=8,e){t.next=mi,mi=t;return}t.next=gi,gi=t}function hu(){vg++}function fu(){if(--vg>0)return;if(mi){let e=mi;for(mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;gi;){let e=gi;for(gi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Tg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),du(r),fE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ig(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ig(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci))return;t.globalVersion=Ci;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pl(t)){t.flags&=-3;return}const n=Ve,r=Qt;Ve=t,Qt=!0;try{Tg(t);const s=t.fn(t._value);(e.version===0||nr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Qt=r,wg(t),t.flags&=-3}}function du(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)du(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Ag=[];function vr(){Ag.push(Qt),Qt=!1}function Er(){const t=Ag.pop();Qt=t===void 0?!0:t}function If(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Ci=0;class dE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!Qt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new dE(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,bg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){hu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fu()}}}function bg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)bg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ea=new WeakMap,Mr=Symbol(""),gl=Symbol(""),ki=Symbol("");function pt(t,e,n){if(Qt&&Ve){let r=ea.get(t);r||ea.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new pu),s.map=r,s.key=n),s.track()}}function En(t,e,n,r,s,i){const o=ea.get(t);if(!o){Ci++;return}const c=l=>{l&&l.trigger()};if(hu(),e==="clear")o.forEach(c);else{const l=re(t),u=l&&lu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ki||!dn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(ki)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Mr)),ls(t)&&c(o.get(gl)));break;case"delete":l||(c(o.get(Mr)),ls(t)&&c(o.get(gl)));break;case"set":ls(t)&&c(o.get(Mr));break}}fu()}function pE(t,e){const n=ea.get(t);return n&&n.get(e)}function Xr(t){const e=we(t);return e===t?e:(pt(e,"iterate",ki),qt(t)?e:e.map(gt))}function La(t){return pt(t=we(t),"iterate",ki),t}const gE={__proto__:null,[Symbol.iterator](){return Bc(this,Symbol.iterator,gt)},concat(...t){return Xr(this).concat(...t.map(e=>re(e)?Xr(e):e))},entries(){return Bc(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return _n(this,"find",t,e,gt,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return Xr(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return Af(this,"reduce",t,e)},reduceRight(t,...e){return Af(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return Xr(this).toReversed()},toSorted(t){return Xr(this).toSorted(t)},toSpliced(...t){return Xr(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return Bc(this,"values",gt)}};function Bc(t,e,n){const r=La(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const mE=Array.prototype;function _n(t,e,n,r,s,i){const o=La(t),c=o!==t&&!qt(t),l=o[e];if(l!==mE[e]){const p=l.apply(t,i);return c?gt(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,gt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Af(t,e,n,r){const s=La(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,gt(c),l,t)}),s[e](i,...r)}function Hc(t,e,n){const r=we(t);pt(r,"iterate",ki);const s=r[e](...n);return(s===-1||s===!1)&&_u(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Zs(t,e,n=[]){vr(),hu();const r=we(t)[e].apply(t,n);return fu(),Er(),r}const _E=ou("__proto__,__v_isRef,__isVue"),Rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dn));function yE(t){dn(t)||(t=String(t));const e=we(this);return pt(e,"has",t),e.hasOwnProperty(t)}class Sg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?PE:Dg:i?kg:Cg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=gE[n]))return l;if(n==="hasOwnProperty")return yE}const c=Reflect.get(e,n,Ke(e)?e:r);return(dn(n)?Rg.has(n):_E(n))||(s||pt(e,"get",n),i)?c:Ke(c)?o&&lu(n)?c:c.value:Oe(c)?s?Vg(c):Gi(c):c}}class Pg extends Sg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ur(i);if(!qt(r)&&!Ur(r)&&(i=we(i),r=we(r)),!re(e)&&Ke(i)&&!Ke(r))return l?!1:(i.value=r,!0)}const o=re(e)&&lu(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===we(s)&&(o?nr(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!dn(n)||!Rg.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",re(e)?"length":Mr),Reflect.ownKeys(e)}}class vE extends Sg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const EE=new Pg,TE=new vE,wE=new Pg(!0);const ml=t=>t,Ro=t=>Reflect.getPrototypeOf(t);function IE(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=ls(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?ml:e?_l:gt;return!e&&pt(i,"iterate",l?gl:Mr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function So(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function AE(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(nr(s,c)&&pt(o,"get",s),pt(o,"get",c));const{has:l}=Ro(o),u=e?ml:t?_l:gt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(we(s),"iterate",Mr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(nr(s,c)&&pt(o,"has",s),pt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),u=e?ml:t?_l:gt;return!t&&pt(l,"iterate",Mr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Ye(n,t?{add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear")}:{add(s){!e&&!qt(s)&&!Ur(s)&&(s=we(s));const i=we(this);return Ro(i).has.call(i,s)||(i.add(s),En(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!Ur(i)&&(i=we(i));const o=we(this),{has:c,get:l}=Ro(o);let u=c.call(o,s);u||(s=we(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?nr(i,f)&&En(o,"set",s,i):En(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=Ro(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&En(i,"delete",s,void 0),u},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&En(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=IE(s,t,e)}),n}function gu(t,e){const n=AE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const bE={get:gu(!1,!1)},RE={get:gu(!1,!0)},SE={get:gu(!0,!1)};const Cg=new WeakMap,kg=new WeakMap,Dg=new WeakMap,PE=new WeakMap;function CE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kE(t){return t.__v_skip||!Object.isExtensible(t)?0:CE(eE(t))}function Gi(t){return Ur(t)?t:mu(t,!1,EE,bE,Cg)}function Og(t){return mu(t,!1,wE,RE,kg)}function Vg(t){return mu(t,!0,TE,SE,Dg)}function mu(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=kE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function rr(t){return Ur(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ur(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function _u(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function yu(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&ug(t,"__v_skip",!0),t}const gt=t=>Oe(t)?Gi(t):t,_l=t=>Oe(t)?Vg(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function kt(t){return Ng(t,!1)}function DE(t){return Ng(t,!0)}function Ng(t,e){return Ke(t)?t:new OE(t,e)}class OE{constructor(e,n){this.dep=new pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Ur(e);e=r?e:we(e),nr(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Pt(t){return Ke(t)?t.value:t}const VE={get:(t,e,n)=>e==="__v_raw"?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xg(t){return rr(t)?t:new Proxy(t,VE)}function NE(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=ME(t,n);return e}class xE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pE(we(this._object),this._key)}}function ME(t,e,n){const r=t[e];return Ke(r)?r:new xE(t,e,n)}class LE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Eg(this,!0),!0}get value(){const e=this.dep.track();return Ig(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function FE(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new LE(r,s,n)}const Po={},ta=new WeakMap;let Or;function UE(t,e=!1,n=Or){if(n){let r=ta.get(n);r||ta.set(n,r=[]),r.push(t)}}function jE(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=x=>s?x:qt(x)||s===!1||s===0?Tn(x,1):Tn(x);let f,p,g,m,S=!1,k=!1;if(Ke(t)?(p=()=>t.value,S=qt(t)):rr(t)?(p=()=>u(t),S=!0):re(t)?(k=!0,S=t.some(x=>rr(x)||qt(x)),p=()=>t.map(x=>{if(Ke(x))return x.value;if(rr(x))return u(x);if(fe(x))return l?l(x,2):x()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){vr();try{g()}finally{Er()}}const x=Or;Or=f;try{return l?l(t,3,[m]):t(m)}finally{Or=x}}:p=cn,e&&s){const x=p,z=s===!0?1/0:s;p=()=>Tn(x(),z)}const D=_g(),B=()=>{f.stop(),D&&D.active&&cu(D.effects,f)};if(i&&e){const x=e;e=(...z)=>{x(...z),B()}}let O=k?new Array(t.length).fill(Po):Po;const V=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(e){const z=f.run();if(s||S||(k?z.some((ee,b)=>nr(ee,O[b])):nr(z,O))){g&&g();const ee=Or;Or=f;try{const b=[z,O===Po?void 0:k&&O[0]===Po?[]:O,m];l?l(e,3,b):e(...b),O=z}finally{Or=ee}}}else f.run()};return c&&c(V),f=new yg(p),f.scheduler=o?()=>o(V,!1):V,m=x=>UE(x,!1,f),g=f.onStop=()=>{const x=ta.get(f);if(x){if(l)l(x,4);else for(const z of x)z();ta.delete(f)}},e?r?V(!0):O=f.run():o?o(V.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function Tn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))Tn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(Oa(t)||ls(t))t.forEach(r=>{Tn(r,e,n)});else if(lg(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Fa(s,e,n)}}function Yt(t,e,n,r){if(fe(t)){const s=Qi(t,e,n,r);return s&&ag(s)&&s.catch(i=>{Fa(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function Fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){vr(),Qi(i,null,10,[t,l,u]),Er();return}}$E(t,n,s,r,o)}function $E(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let rn=-1;const hs=[];let Kn=null,ts=0;const Mg=Promise.resolve();let na=null;function Ua(t){const e=na||Mg;return t?e.then(this?t.bind(this):t):e}function BE(t){let e=rn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=Di(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vu(t){if(!(t.flags&1)){const e=Di(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Di(n)?wt.push(t):wt.splice(BE(e),0,t),t.flags|=1,Lg()}}function Lg(){na||(na=Mg.then(Ug))}function HE(t){re(t)?hs.push(...t):Kn&&t.id===-1?Kn.splice(ts+1,0,t):t.flags&1||(hs.push(t),t.flags|=1),Lg()}function bf(t,e,n=rn+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fg(t){if(hs.length){const e=[...new Set(hs)].sort((n,r)=>Di(n)-Di(r));if(hs.length=0,Kn){Kn.push(...e);return}for(Kn=e,ts=0;ts<Kn.length;ts++){const n=Kn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kn=null,ts=0}}const Di=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ug(t){try{for(rn=0;rn<wt.length;rn++){const e=wt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<wt.length;rn++){const e=wt[rn];e&&(e.flags&=-2)}rn=-1,wt.length=0,Fg(),na=null,(wt.length||hs.length)&&Ug()}}let bt=null,jg=null;function ra(t){const e=bt;return bt=t,jg=t&&t.type.__scopeId||null,e}function an(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xf(-1);const i=ra(e);let o;try{o=t(...s)}finally{ra(i),r._d&&xf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yD(t,e){if(bt===null)return t;const n=Ga(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=De]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(vr(),Yt(l,n,8,[t.el,c,t,e]),Er())}}const qE=Symbol("_vte"),$g=t=>t.__isTeleport,Wn=Symbol("_leaveCb"),Co=Symbol("_enterCb");function Bg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{t.isMounted=!0}),qa(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],Hg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},qg=t=>{const e=t.subTree;return e.component?qg(e.component):e},KE={name:"BaseTransition",props:Hg,setup(t,{slots:e}){const n=za(),r=Bg();return()=>{const s=e.default&&Eu(e.default(),!0);if(!s||!s.length)return;const i=Kg(s),o=we(t),{mode:c}=o;if(r.isLeaving)return qc(i);const l=Rf(i);if(!l)return qc(i);let u=Oi(l,o,r,n,p=>u=p);l.type!==It&&lr(l,u);let f=n.subTree&&Rf(n.subTree);if(f&&f.type!==It&&!Jn(l,f)&&qg(n).type!==It){let p=Oi(f,o,r,n);if(lr(f,p),c==="out-in"&&l.type!==It)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},qc(i);c==="in-out"&&l.type!==It?p.delayLeave=(g,m,S)=>{const k=Wg(r,f);k[String(f.key)]=f,g[Wn]=()=>{m(),g[Wn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Kg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==It){e=n;break}}return e}const WE=KE;function Wg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Oi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:m,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:D,onAppear:B,onAfterAppear:O,onAppearCancelled:V}=e,x=String(t.key),z=Wg(n,t),ee=(y,w)=>{y&&Yt(y,r,9,w)},b=(y,w)=>{const R=w[1];ee(y,w),re(y)?y.every(A=>A.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:c,beforeEnter(y){let w=l;if(!n.isMounted)if(i)w=D||l;else return;y[Wn]&&y[Wn](!0);const R=z[x];R&&Jn(t,R)&&R.el[Wn]&&R.el[Wn](),ee(w,[y])},enter(y){let w=u,R=f,A=p;if(!n.isMounted)if(i)w=B||u,R=O||f,A=V||p;else return;let E=!1;const be=y[Co]=He=>{E||(E=!0,He?ee(A,[y]):ee(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Co]=void 0)};w?b(w,[y,be]):be()},leave(y,w){const R=String(t.key);if(y[Co]&&y[Co](!0),n.isUnmounting)return w();ee(g,[y]);let A=!1;const E=y[Wn]=be=>{A||(A=!0,w(),be?ee(k,[y]):ee(S,[y]),y[Wn]=void 0,z[R]===t&&delete z[R])};z[R]=t,m?b(m,[y,E]):E()},clone(y){const w=Oi(y,e,n,r,s);return s&&s(w),w}};return v}function qc(t){if($a(t))return t=Sn(t),t.children=null,t}function Rf(t){if(!$a(t))return $g(t.type)&&t.children?Kg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function lr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Eu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Bt?(o.patchFlag&128&&s++,r=r.concat(Eu(o.children,e,c))):(e||o.type!==It)&&r.push(c!=null?Sn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ja(t,e){return fe(t)?Ye({name:t.name},e,{setup:t}):t}function zg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sa(t,e,n,r,s=!1){if(re(t)){t.forEach((S,k)=>sa(S,e&&(re(e)?e[k]:e),n,r,s));return}if(fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&sa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ga(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===De?c.refs={}:c.refs,p=c.setupState,g=we(p),m=p===De?()=>!1:S=>Se(g,S);if(u!=null&&u!==l&&(Ue(u)?(f[u]=null,m(u)&&(p[u]=null)):Ke(u)&&(u.value=null)),fe(l))Qi(l,c,12,[o,f]);else{const S=Ue(l),k=Ke(l);if(S||k){const D=()=>{if(t.f){const B=S?m(l)?p[l]:f[l]:l.value;s?re(B)&&cu(B,i):re(B)?B.includes(i)||B.push(i):S?(f[l]=[i],m(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else S?(f[l]=o,m(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,rt(D,n)):D()}}}xa().requestIdleCallback;xa().cancelIdleCallback;const fs=t=>!!t.type.__asyncLoader,$a=t=>t.type.__isKeepAlive,zE={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=za(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:f,o:{createElement:p}}}=r,g=p("div");r.activate=(O,V,x,z,ee)=>{const b=O.component;u(O,V,x,0,c),l(b.vnode,O,V,x,b,c,z,O.slotScopeIds,ee),rt(()=>{b.isDeactivated=!1,b.a&&us(b.a);const v=O.props&&O.props.onVnodeMounted;v&&$t(v,b.parent,O)},c)},r.deactivate=O=>{const V=O.component;oa(V.m),oa(V.a),u(O,g,null,1,c),rt(()=>{V.da&&us(V.da);const x=O.props&&O.props.onVnodeUnmounted;x&&$t(x,V.parent,O),V.isDeactivated=!0},c)};function m(O){Kc(O),f(O,n,c,!0)}function S(O){s.forEach((V,x)=>{const z=Il(V.type);z&&!O(z)&&k(x)})}function k(O){const V=s.get(O);V&&(!o||!Jn(V,o))?m(V):o&&Kc(o),s.delete(O),i.delete(O)}Fr(()=>[t.include,t.exclude],([O,V])=>{O&&S(x=>ni(O,x)),V&&S(x=>!ni(V,x))},{flush:"post",deep:!0});let D=null;const B=()=>{D!=null&&(aa(n.subTree.type)?rt(()=>{s.set(D,ko(n.subTree))},n.subTree.suspense):s.set(D,ko(n.subTree)))};return Ha(B),Tu(B),qa(()=>{s.forEach(O=>{const{subTree:V,suspense:x}=n,z=ko(V);if(O.type===z.type&&O.key===z.key){Kc(z);const ee=z.component.da;ee&&rt(ee,x);return}m(O)})}),()=>{if(D=null,!e.default)return o=null;const O=e.default(),V=O[0];if(O.length>1)return o=null,O;if(!Ni(V)||!(V.shapeFlag&4)&&!(V.shapeFlag&128))return o=null,V;let x=ko(V);if(x.type===It)return o=null,x;const z=x.type,ee=Il(fs(x)?x.type.__asyncResolved||{}:z),{include:b,exclude:v,max:y}=t;if(b&&(!ee||!ni(b,ee))||v&&ee&&ni(v,ee))return x.shapeFlag&=-257,o=x,V;const w=x.key==null?z:x.key,R=s.get(w);return x.el&&(x=Sn(x),V.shapeFlag&128&&(V.ssContent=x)),D=w,R?(x.el=R.el,x.component=R.component,x.transition&&lr(x,x.transition),x.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),y&&i.size>parseInt(y,10)&&k(i.values().next().value)),x.shapeFlag|=256,o=x,aa(V.type)?V:x}}},GE=zE;function ni(t,e){return re(t)?t.some(n=>ni(n,e)):Ue(t)?t.split(",").includes(e):Zv(t)?(t.lastIndex=0,t.test(e)):!1}function Gg(t,e){Jg(t,"a",e)}function Qg(t,e){Jg(t,"da",e)}function Jg(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$a(s.parent.vnode)&&QE(r,e,n,s),s=s.parent}}function QE(t,e,n,r){const s=Ba(e,t,r,!0);wu(()=>{cu(r[e],s)},n)}function Kc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ko(t){return t.shapeFlag&128?t.ssContent:t}function Ba(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vr();const c=Ji(n),l=Yt(e,n,t,o);return c(),Er(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=Ze)=>{(!xi||t==="sp")&&Ba(t,(...r)=>e(...r),n)},JE=On("bm"),Ha=On("m"),YE=On("bu"),Tu=On("u"),qa=On("bum"),wu=On("um"),XE=On("sp"),ZE=On("rtg"),eT=On("rtc");function tT(t,e=Ze){Ba("ec",t,e)}const Yg="components";function Iu(t,e){return Zg(Yg,t,!0,e)||t}const Xg=Symbol.for("v-ndc");function nT(t){return Ue(t)?Zg(Yg,t,!1)||t:t||Xg}function Zg(t,e,n=!0,r=!1){const s=bt||Ze;if(s){const i=s.type;{const c=Il(i,!1);if(c&&(c===e||c===Kt(e)||c===Na(Kt(e))))return i}const o=Sf(s[t]||i[t],e)||Sf(s.appContext[t],e);return!o&&r?i:o}}function Sf(t,e){return t&&(t[e]||t[Kt(e)]||t[Na(Kt(e))])}function vD(t,e,n,r){let s;const i=n,o=re(t);if(o||Ue(t)){const c=o&&rr(t);let l=!1;c&&(l=!qt(t),t=La(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?gt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const yl=t=>t?ym(t)?Ga(t):yl(t.parent):null,_i=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yl(t.parent),$root:t=>yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>tm(t),$forceUpdate:t=>t.f||(t.f=()=>{vu(t.update)}),$nextTick:t=>t.n||(t.n=Ua.bind(t.proxy)),$watch:t=>bT.bind(t)}),Wc=(t,e)=>t!==De&&!t.__isScriptSetup&&Se(t,e),rT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(s!==De&&Se(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(n!==De&&Se(n,e))return o[e]=4,n[e];vl&&(o[e]=0)}}const f=_i[e];let p,g;if(f)return e==="$attrs"&&pt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==De&&Se(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Se(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wc(s,e)?(s[e]=n,!0):r!==De&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==De&&Se(t,o)||Wc(e,o)||(c=i[0])&&Se(c,o)||Se(r,o)||Se(_i,o)||Se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pf(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vl=!0;function sT(t){const e=tm(t),n=t.proxy,r=t.ctx;vl=!1,e.beforeCreate&&Cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:m,updated:S,activated:k,deactivated:D,beforeDestroy:B,beforeUnmount:O,destroyed:V,unmounted:x,render:z,renderTracked:ee,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:R,components:A,directives:E,filters:be}=e;if(u&&iT(u,r,null),o)for(const ue in o){const ge=o[ue];fe(ge)&&(r[ue]=ge.bind(n))}if(s){const ue=s.call(n,n);Oe(ue)&&(t.data=Gi(ue))}if(vl=!0,i)for(const ue in i){const ge=i[ue],Dt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):cn,Wt=!fe(ge)&&fe(ge.set)?ge.set.bind(n):cn,Lt=At({get:Dt,set:Wt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:Le=>Lt.value=Le})}if(c)for(const ue in c)em(c[ue],r,n,ue);if(l){const ue=fe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ge=>{Uo(ge,ue[ge])})}f&&Cf(f,t,"c");function Ce(ue,ge){re(ge)?ge.forEach(Dt=>ue(Dt.bind(n))):ge&&ue(ge.bind(n))}if(Ce(JE,p),Ce(Ha,g),Ce(YE,m),Ce(Tu,S),Ce(Gg,k),Ce(Qg,D),Ce(tT,v),Ce(eT,ee),Ce(ZE,b),Ce(qa,O),Ce(wu,x),Ce(XE,y),re(w))if(w.length){const ue=t.exposed||(t.exposed={});w.forEach(ge=>{Object.defineProperty(ue,ge,{get:()=>n[ge],set:Dt=>n[ge]=Dt})})}else t.exposed||(t.exposed={});z&&t.render===cn&&(t.render=z),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),E&&(t.directives=E),y&&zg(t)}function iT(t,e,n=cn){re(t)&&(t=El(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cf(t,e,n){Yt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function em(t,e,n,r){let s=r.includes(".")?pm(n,r):()=>n[r];if(Ue(t)){const i=e[t];fe(i)&&Fr(s,i)}else if(fe(t))Fr(s,t.bind(n));else if(Oe(t))if(re(t))t.forEach(i=>em(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Fr(s,i,t)}}function tm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ia(l,u,o,!0)),ia(l,e,o)),Oe(e)&&i.set(e,l),l}function ia(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ia(t,i,n,!0),s&&s.forEach(o=>ia(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=oT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const oT={data:kf,props:Df,emits:Df,methods:ri,computed:ri,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:ri,directives:ri,watch:cT,provide:kf,inject:aT};function kf(t,e){return e?t?function(){return Ye(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function aT(t,e){return ri(El(t),El(e))}function El(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function ri(t,e){return t?Ye(Object.create(null),t,e):e}function Df(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Pf(t),Pf(e??{})):e}function cT(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function nm(){return{app:null,config:{isNativeTag:Yv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lT=0;function uT(t,e){return function(r,s=null){fe(r)||(r=Ye({},r)),s!=null&&!Oe(s)&&(s=null);const i=nm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:lT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Em,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const m=u._ceVNode||Me(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,f,g),l=!0,u._container=f,f.__vue_app__=u,Ga(m.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Yt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Lr;Lr=u;try{return f()}finally{Lr=p}}};return u}}let Lr=null;function Uo(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=Ze||bt;if(r||Lr){const s=Lr?Lr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function hT(){return!!(Ze||bt||Lr)}const rm={},sm=()=>Object.create(rm),im=t=>Object.getPrototypeOf(t)===rm;function fT(t,e,n,r=!1){const s={},i=sm();t.propsDefaults=Object.create(null),om(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Og(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ka(t.emitsOptions,g))continue;const m=e[g];if(l)if(Se(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const S=Kt(g);s[S]=Tl(l,c,S,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{om(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=yr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Tl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&En(t.attrs,"set","")}function om(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(pi(l))continue;const u=e[l];let f;s&&Se(s,f=Kt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ka(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=we(n),u=c||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Tl(s,l,p,u[p],t,!Se(u,p))}}return o}function Tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Ji(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===yr(n))&&(r=!0))}return r}const pT=new WeakMap;function am(t,e,n=!1){const r=n?pT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[g,m]=am(p,e,!0);Ye(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Oe(t)&&r.set(t,cs),cs;if(re(i))for(let f=0;f<i.length;f++){const p=Kt(i[f]);Of(p)&&(o[p]=De)}else if(i)for(const f in i){const p=Kt(f);if(Of(p)){const g=i[f],m=o[p]=re(g)||fe(g)?{type:g}:Ye({},g),S=m.type;let k=!1,D=!0;if(re(S))for(let B=0;B<S.length;++B){const O=S[B],V=fe(O)&&O.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(D=!1)}else k=fe(S)&&S.name==="Boolean";m[0]=k,m[1]=D,(k||Se(m,"default"))&&c.push(p)}}const u=[o,c];return Oe(t)&&r.set(t,u),u}function Of(t){return t[0]!=="$"&&!pi(t)}const cm=t=>t[0]==="_"||t==="$stable",Au=t=>re(t)?t.map(on):[on(t)],gT=(t,e,n)=>{if(e._n)return e;const r=an((...s)=>Au(e(...s)),n);return r._c=!1,r},lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cm(s))continue;const i=t[s];if(fe(i))e[s]=gT(s,i,r);else if(i!=null){const o=Au(i);e[s]=()=>o}}},um=(t,e)=>{const n=Au(e);t.slots.default=()=>n},hm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},mT=(t,e,n)=>{const r=t.slots=sm();if(t.vnode.shapeFlag&32){const s=e._;s?(hm(r,e,n),n&&ug(r,"_",s,!0)):lm(e,r)}else e&&um(t,e)},_T=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:hm(s,e,n):(i=!e.$stable,lm(e,s)),o=e}else e&&(um(t,e),o={default:1});if(i)for(const c in s)!cm(c)&&o[c]==null&&delete s[c]},rt=OT;function yT(t){return vT(t)}function vT(t,e){const n=xa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:m=cn,insertStaticContent:S}=t,k=(T,I,P,L=null,$=null,U=null,G=void 0,K=null,q=!!I.dynamicChildren)=>{if(T===I)return;T&&!Jn(T,I)&&(L=M(T),Le(T,$,U,!0),T=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:H,ref:ie,shapeFlag:J}=I;switch(H){case Wa:D(T,I,P,L);break;case It:B(T,I,P,L);break;case jo:T==null&&O(I,P,L,G);break;case Bt:A(T,I,P,L,$,U,G,K,q);break;default:J&1?z(T,I,P,L,$,U,G,K,q):J&6?E(T,I,P,L,$,U,G,K,q):(J&64||J&128)&&H.process(T,I,P,L,$,U,G,K,q,te)}ie!=null&&$&&sa(ie,T&&T.ref,U,I||T,!I)},D=(T,I,P,L)=>{if(T==null)r(I.el=c(I.children),P,L);else{const $=I.el=T.el;I.children!==T.children&&u($,I.children)}},B=(T,I,P,L)=>{T==null?r(I.el=l(I.children||""),P,L):I.el=T.el},O=(T,I,P,L)=>{[T.el,T.anchor]=S(T.children,I,P,L,T.el,T.anchor)},V=({el:T,anchor:I},P,L)=>{let $;for(;T&&T!==I;)$=g(T),r(T,P,L),T=$;r(I,P,L)},x=({el:T,anchor:I})=>{let P;for(;T&&T!==I;)P=g(T),s(T),T=P;s(I)},z=(T,I,P,L,$,U,G,K,q)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),T==null?ee(I,P,L,$,U,G,K,q):y(T,I,$,U,G,K,q)},ee=(T,I,P,L,$,U,G,K)=>{let q,H;const{props:ie,shapeFlag:J,transition:ne,dirs:ce}=T;if(q=T.el=o(T.type,U,ie&&ie.is,ie),J&8?f(q,T.children):J&16&&v(T.children,q,null,L,$,zc(T,U),G,K),ce&&Cr(T,null,L,"created"),b(q,T,T.scopeId,G,L),ie){for(const pe in ie)pe!=="value"&&!pi(pe)&&i(q,pe,null,ie[pe],U,L);"value"in ie&&i(q,"value",null,ie.value,U),(H=ie.onVnodeBeforeMount)&&$t(H,L,T)}ce&&Cr(T,null,L,"beforeMount");const oe=ET($,ne);oe&&ne.beforeEnter(q),r(q,I,P),((H=ie&&ie.onVnodeMounted)||oe||ce)&&rt(()=>{H&&$t(H,L,T),oe&&ne.enter(q),ce&&Cr(T,null,L,"mounted")},$)},b=(T,I,P,L,$)=>{if(P&&m(T,P),L)for(let U=0;U<L.length;U++)m(T,L[U]);if($){let U=$.subTree;if(I===U||aa(U.type)&&(U.ssContent===I||U.ssFallback===I)){const G=$.vnode;b(T,G,G.scopeId,G.slotScopeIds,$.parent)}}},v=(T,I,P,L,$,U,G,K,q=0)=>{for(let H=q;H<T.length;H++){const ie=T[H]=K?zn(T[H]):on(T[H]);k(null,ie,I,P,L,$,U,G,K)}},y=(T,I,P,L,$,U,G)=>{const K=I.el=T.el;let{patchFlag:q,dynamicChildren:H,dirs:ie}=I;q|=T.patchFlag&16;const J=T.props||De,ne=I.props||De;let ce;if(P&&kr(P,!1),(ce=ne.onVnodeBeforeUpdate)&&$t(ce,P,I,T),ie&&Cr(I,T,P,"beforeUpdate"),P&&kr(P,!0),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&f(K,""),H?w(T.dynamicChildren,H,K,P,L,zc(I,$),U):G||ge(T,I,K,null,P,L,zc(I,$),U,!1),q>0){if(q&16)R(K,J,ne,P,$);else if(q&2&&J.class!==ne.class&&i(K,"class",null,ne.class,$),q&4&&i(K,"style",J.style,ne.style,$),q&8){const oe=I.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Ee=oe[pe],ct=J[Ee],et=ne[Ee];(et!==ct||Ee==="value")&&i(K,Ee,ct,et,$,P)}}q&1&&T.children!==I.children&&f(K,I.children)}else!G&&H==null&&R(K,J,ne,P,$);((ce=ne.onVnodeUpdated)||ie)&&rt(()=>{ce&&$t(ce,P,I,T),ie&&Cr(I,T,P,"updated")},L)},w=(T,I,P,L,$,U,G)=>{for(let K=0;K<I.length;K++){const q=T[K],H=I[K],ie=q.el&&(q.type===Bt||!Jn(q,H)||q.shapeFlag&70)?p(q.el):P;k(q,H,ie,null,L,$,U,G,!0)}},R=(T,I,P,L,$)=>{if(I!==P){if(I!==De)for(const U in I)!pi(U)&&!(U in P)&&i(T,U,I[U],null,$,L);for(const U in P){if(pi(U))continue;const G=P[U],K=I[U];G!==K&&U!=="value"&&i(T,U,K,G,$,L)}"value"in P&&i(T,"value",I.value,P.value,$)}},A=(T,I,P,L,$,U,G,K,q)=>{const H=I.el=T?T.el:c(""),ie=I.anchor=T?T.anchor:c("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ce}=I;ce&&(K=K?K.concat(ce):ce),T==null?(r(H,P,L),r(ie,P,L),v(I.children||[],P,ie,$,U,G,K,q)):J>0&&J&64&&ne&&T.dynamicChildren?(w(T.dynamicChildren,ne,P,$,U,G,K),(I.key!=null||$&&I===$.subTree)&&fm(T,I,!0)):ge(T,I,P,ie,$,U,G,K,q)},E=(T,I,P,L,$,U,G,K,q)=>{I.slotScopeIds=K,T==null?I.shapeFlag&512?$.ctx.activate(I,P,L,G,q):be(I,P,L,$,U,G,q):He(T,I,q)},be=(T,I,P,L,$,U,G)=>{const K=T.component=UT(T,L,$);if($a(T)&&(K.ctx.renderer=te),jT(K,!1,G),K.asyncDep){if($&&$.registerDep(K,Ce,G),!T.el){const q=K.subTree=Me(It);B(null,q,I,P)}}else Ce(K,T,I,P,$,U,G)},He=(T,I,P)=>{const L=I.component=T.component;if(kT(T,I,P))if(L.asyncDep&&!L.asyncResolved){ue(L,I,P);return}else L.next=I,L.update();else I.el=T.el,L.vnode=I},Ce=(T,I,P,L,$,U,G)=>{const K=()=>{if(T.isMounted){let{next:J,bu:ne,u:ce,parent:oe,vnode:pe}=T;{const lt=dm(T);if(lt){J&&(J.el=pe.el,ue(T,J,G)),lt.asyncDep.then(()=>{T.isUnmounted||K()});return}}let Ee=J,ct;kr(T,!1),J?(J.el=pe.el,ue(T,J,G)):J=pe,ne&&us(ne),(ct=J.props&&J.props.onVnodeBeforeUpdate)&&$t(ct,oe,J,pe),kr(T,!0);const et=Vf(T),Ft=T.subTree;T.subTree=et,k(Ft,et,p(Ft.el),M(Ft),T,$,U),J.el=et.el,Ee===null&&DT(T,et.el),ce&&rt(ce,$),(ct=J.props&&J.props.onVnodeUpdated)&&rt(()=>$t(ct,oe,J,pe),$)}else{let J;const{el:ne,props:ce}=I,{bm:oe,m:pe,parent:Ee,root:ct,type:et}=T,Ft=fs(I);kr(T,!1),oe&&us(oe),!Ft&&(J=ce&&ce.onVnodeBeforeMount)&&$t(J,Ee,I),kr(T,!0);{ct.ce&&ct.ce._injectChildStyle(et);const lt=T.subTree=Vf(T);k(null,lt,P,L,T,$,U),I.el=lt.el}if(pe&&rt(pe,$),!Ft&&(J=ce&&ce.onVnodeMounted)){const lt=I;rt(()=>$t(J,Ee,lt),$)}(I.shapeFlag&256||Ee&&fs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&T.a&&rt(T.a,$),T.isMounted=!0,I=P=L=null}};T.scope.on();const q=T.effect=new yg(K);T.scope.off();const H=T.update=q.run.bind(q),ie=T.job=q.runIfDirty.bind(q);ie.i=T,ie.id=T.uid,q.scheduler=()=>vu(ie),kr(T,!0),H()},ue=(T,I,P)=>{I.component=T;const L=T.vnode.props;T.vnode=I,T.next=null,dT(T,I.props,L,P),_T(T,I.children,P),vr(),bf(T),Er()},ge=(T,I,P,L,$,U,G,K,q=!1)=>{const H=T&&T.children,ie=T?T.shapeFlag:0,J=I.children,{patchFlag:ne,shapeFlag:ce}=I;if(ne>0){if(ne&128){Wt(H,J,P,L,$,U,G,K,q);return}else if(ne&256){Dt(H,J,P,L,$,U,G,K,q);return}}ce&8?(ie&16&&Rt(H,$,U),J!==H&&f(P,J)):ie&16?ce&16?Wt(H,J,P,L,$,U,G,K,q):Rt(H,$,U,!0):(ie&8&&f(P,""),ce&16&&v(J,P,L,$,U,G,K,q))},Dt=(T,I,P,L,$,U,G,K,q)=>{T=T||cs,I=I||cs;const H=T.length,ie=I.length,J=Math.min(H,ie);let ne;for(ne=0;ne<J;ne++){const ce=I[ne]=q?zn(I[ne]):on(I[ne]);k(T[ne],ce,P,null,$,U,G,K,q)}H>ie?Rt(T,$,U,!0,!1,J):v(I,P,L,$,U,G,K,q,J)},Wt=(T,I,P,L,$,U,G,K,q)=>{let H=0;const ie=I.length;let J=T.length-1,ne=ie-1;for(;H<=J&&H<=ne;){const ce=T[H],oe=I[H]=q?zn(I[H]):on(I[H]);if(Jn(ce,oe))k(ce,oe,P,null,$,U,G,K,q);else break;H++}for(;H<=J&&H<=ne;){const ce=T[J],oe=I[ne]=q?zn(I[ne]):on(I[ne]);if(Jn(ce,oe))k(ce,oe,P,null,$,U,G,K,q);else break;J--,ne--}if(H>J){if(H<=ne){const ce=ne+1,oe=ce<ie?I[ce].el:L;for(;H<=ne;)k(null,I[H]=q?zn(I[H]):on(I[H]),P,oe,$,U,G,K,q),H++}}else if(H>ne)for(;H<=J;)Le(T[H],$,U,!0),H++;else{const ce=H,oe=H,pe=new Map;for(H=oe;H<=ne;H++){const tt=I[H]=q?zn(I[H]):on(I[H]);tt.key!=null&&pe.set(tt.key,H)}let Ee,ct=0;const et=ne-oe+1;let Ft=!1,lt=0;const Mn=new Array(et);for(H=0;H<et;H++)Mn[H]=0;for(H=ce;H<=J;H++){const tt=T[H];if(ct>=et){Le(tt,$,U,!0);continue}let Ut;if(tt.key!=null)Ut=pe.get(tt.key);else for(Ee=oe;Ee<=ne;Ee++)if(Mn[Ee-oe]===0&&Jn(tt,I[Ee])){Ut=Ee;break}Ut===void 0?Le(tt,$,U,!0):(Mn[Ut-oe]=H+1,Ut>=lt?lt=Ut:Ft=!0,k(tt,I[Ut],P,null,$,U,G,K,q),ct++)}const js=Ft?TT(Mn):cs;for(Ee=js.length-1,H=et-1;H>=0;H--){const tt=oe+H,Ut=I[tt],lo=tt+1<ie?I[tt+1].el:L;Mn[H]===0?k(null,Ut,P,lo,$,U,G,K,q):Ft&&(Ee<0||H!==js[Ee]?Lt(Ut,P,lo,2):Ee--)}}},Lt=(T,I,P,L,$=null)=>{const{el:U,type:G,transition:K,children:q,shapeFlag:H}=T;if(H&6){Lt(T.component.subTree,I,P,L);return}if(H&128){T.suspense.move(I,P,L);return}if(H&64){G.move(T,I,P,te);return}if(G===Bt){r(U,I,P);for(let J=0;J<q.length;J++)Lt(q[J],I,P,L);r(T.anchor,I,P);return}if(G===jo){V(T,I,P);return}if(L!==2&&H&1&&K)if(L===0)K.beforeEnter(U),r(U,I,P),rt(()=>K.enter(U),$);else{const{leave:J,delayLeave:ne,afterLeave:ce}=K,oe=()=>r(U,I,P),pe=()=>{J(U,()=>{oe(),ce&&ce()})};ne?ne(U,oe,pe):pe()}else r(U,I,P)},Le=(T,I,P,L=!1,$=!1)=>{const{type:U,props:G,ref:K,children:q,dynamicChildren:H,shapeFlag:ie,patchFlag:J,dirs:ne,cacheIndex:ce}=T;if(J===-2&&($=!1),K!=null&&sa(K,null,P,T,!0),ce!=null&&(I.renderCache[ce]=void 0),ie&256){I.ctx.deactivate(T);return}const oe=ie&1&&ne,pe=!fs(T);let Ee;if(pe&&(Ee=G&&G.onVnodeBeforeUnmount)&&$t(Ee,I,T),ie&6)tn(T.component,P,L);else{if(ie&128){T.suspense.unmount(P,L);return}oe&&Cr(T,null,I,"beforeUnmount"),ie&64?T.type.remove(T,I,P,te,L):H&&!H.hasOnce&&(U!==Bt||J>0&&J&64)?Rt(H,I,P,!1,!0):(U===Bt&&J&384||!$&&ie&16)&&Rt(q,I,P),L&&Fe(T)}(pe&&(Ee=G&&G.onVnodeUnmounted)||oe)&&rt(()=>{Ee&&$t(Ee,I,T),oe&&Cr(T,null,I,"unmounted")},P)},Fe=T=>{const{type:I,el:P,anchor:L,transition:$}=T;if(I===Bt){xn(P,L);return}if(I===jo){x(T);return}const U=()=>{s(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:G,delayLeave:K}=$,q=()=>G(P,U);K?K(T.el,U,q):q()}else U()},xn=(T,I)=>{let P;for(;T!==I;)P=g(T),s(T),T=P;s(I)},tn=(T,I,P)=>{const{bum:L,scope:$,job:U,subTree:G,um:K,m:q,a:H}=T;oa(q),oa(H),L&&us(L),$.stop(),U&&(U.flags|=8,Le(G,T,I,P)),K&&rt(K,I),rt(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Rt=(T,I,P,L=!1,$=!1,U=0)=>{for(let G=U;G<T.length;G++)Le(T[G],I,P,L,$)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=g(T.anchor||T.el),P=I&&I[qE];return P?g(P):I};let Y=!1;const Q=(T,I,P)=>{T==null?I._vnode&&Le(I._vnode,null,null,!0):k(I._vnode||null,T,I,null,null,null,P),I._vnode=T,Y||(Y=!0,bf(),Fg(),Y=!1)},te={p:k,um:Le,m:Lt,r:Fe,mt:be,mc:v,pc:ge,pbc:w,n:M,o:t};return{render:Q,hydrate:void 0,createApp:uT(Q)}}function zc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ET(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fm(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&fm(o,c)),c.type===Wa&&(c.el=o.el)}}function TT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dm(e)}function oa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const wT=Symbol.for("v-scx"),IT=()=>xt(wT);function AT(t,e){return bu(t,null,e)}function Fr(t,e,n){return bu(t,e,n)}function bu(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ye({},n),l=e&&r||!e&&i!=="post";let u;if(xi){if(i==="sync"){const m=IT();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=cn,m.resume=cn,m.pause=cn,m}}const f=Ze;c.call=(m,S,k)=>Yt(m,f,S,k);let p=!1;i==="post"?c.scheduler=m=>{rt(m,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(m,S)=>{S?m():vu(m)}),c.augmentJob=m=>{e&&(m.flags|=4),p&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const g=jE(t,e,c);return xi&&(u?u.push(g):l&&g()),g}function bT(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?pm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ji(this),c=bu(s,i.bind(r),n);return o(),c}function pm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const RT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${yr(e)}Modifiers`];function ST(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&RT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),o.number&&(s=n.map(dl)));let c,l=r[c=Uc(e)]||r[c=Uc(Kt(e))];!l&&i&&(l=r[c=Uc(yr(e))]),l&&Yt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yt(u,t,6,s)}}function gm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=gm(u,e,!0);f&&(c=!0,Ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):Ye(o,i),Oe(t)&&r.set(t,o),o)}function Ka(t,e){return!t||!Da(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,yr(e))||Se(t,e))}function Vf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:m,ctx:S,inheritAttrs:k}=t,D=ra(t);let B,O;try{if(n.shapeFlag&4){const x=s||r,z=x;B=on(u.call(z,x,f,p,m,g,S)),O=c}else{const x=e;B=on(x.length>1?x(p,{attrs:c,slots:o,emit:l}):x(p,null)),O=e.props?c:PT(c)}}catch(x){yi.length=0,Fa(x,t,1),B=Me(It)}let V=B;if(O&&k!==!1){const x=Object.keys(O),{shapeFlag:z}=V;x.length&&z&7&&(i&&x.some(au)&&(O=CT(O,i)),V=Sn(V,O,!1,!0))}return n.dirs&&(V=Sn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&lr(V,n.transition),B=V,ra(D),B}const PT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},CT=(t,e)=>{const n={};for(const r in t)(!au(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Nf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Ka(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Nf(r,o,u):!0:!!o;return!1}function Nf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ka(n,i))return!0}return!1}function DT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const aa=t=>t.__isSuspense;function OT(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):HE(t)}const Bt=Symbol.for("v-fgt"),Wa=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),yi=[];let Vt=null;function Be(t=!1){yi.push(Vt=t?null:[])}function VT(){yi.pop(),Vt=yi[yi.length-1]||null}let Vi=1;function xf(t,e=!1){Vi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function mm(t){return t.dynamicChildren=Vi>0?Vt||cs:null,VT(),Vi>0&&Vt&&Vt.push(t),t}function st(t,e,n,r,s,i){return mm(ye(t,e,n,r,s,i,!0))}function si(t,e,n,r,s){return mm(Me(t,e,n,r,s,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const _m=({key:t})=>t??null,$o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Ke(t)||fe(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function ye(t,e=null,n=null,r=0,s=null,i=t===Bt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_m(e),ref:e&&$o(e),scopeId:jg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return c?(Ru(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Vi>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Me=NT;function NT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xg)&&(t=It),Ni(t)){const c=Sn(t,e,!0);return n&&Ru(c,n),Vi>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(qT(t)&&(t=t.__vccOpts),e){e=xT(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=Gt(c)),Oe(l)&&(_u(l)&&!re(l)&&(l=Ye({},l)),e.style=uu(l))}const o=Ue(t)?1:aa(t)?128:$g(t)?64:Oe(t)?4:fe(t)?2:0;return ye(t,e,n,r,s,o,i,!0)}function xT(t){return t?_u(t)||im(t)?Ye({},t):t:null}function Sn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?MT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&_m(u),ref:e&&e.ref?n&&i?re(i)?i.concat($o(e)):[i,$o(e)]:$o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&lr(f,l.clone(f)),f}function vi(t=" ",e=0){return Me(Wa,null,t,e)}function ED(t,e){const n=Me(jo,null,t);return n.staticCount=e,n}function ii(t="",e=!1){return e?(Be(),si(It,null,t)):Me(It,null,t)}function on(t){return t==null||typeof t=="boolean"?Me(It):re(t)?Me(Bt,null,t.slice()):Ni(t)?zn(t):Me(Wa,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sn(t)}function Ru(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ru(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!im(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[vi(e)]):n=8);t.children=e,t.shapeFlag|=n}function MT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gt([e.class,r.class]));else if(s==="style")e.style=uu([e.style,r.style]);else if(Da(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){Yt(t,e,7,[n,r])}const LT=nm();let FT=0;function UT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||LT,i={uid:FT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:am(r,s),emitsOptions:gm(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ST.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const za=()=>Ze||bt;let ca,wl;{const t=xa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),wl=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Ji=t=>{const e=Ze;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},Mf=()=>{Ze&&Ze.scope.off(),ca(null)};function ym(t){return t.vnode.shapeFlag&4}let xi=!1;function jT(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=ym(t);fT(t,r,i,e),mT(t,s,n);const o=i?$T(t,e):void 0;return e&&wl(!1),o}function $T(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rT);const{setup:r}=n;if(r){vr();const s=t.setupContext=r.length>1?HT(t):null,i=Ji(t),o=Qi(r,t,0,[t.props,s]),c=ag(o);if(Er(),i(),(c||t.sp)&&!fs(t)&&zg(t),c){if(o.then(Mf,Mf),e)return o.then(l=>{Lf(t,l)}).catch(l=>{Fa(l,t,0)});t.asyncDep=o}else Lf(t,o)}else vm(t)}function Lf(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=xg(e)),vm(t)}function vm(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=Ji(t);vr();try{sT(t)}finally{Er(),s()}}}const BT={get(t,e){return pt(t,"get",""),t[e]}};function HT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,BT),slots:t.slots,emit:t.emit,expose:e}}function Ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xg(yu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}})):t.proxy}function Il(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function qT(t){return fe(t)&&"__vccOpts"in t}const At=(t,e)=>FE(t,e,xi);function Su(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!re(e)?Ni(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),Me(t,e,n))}const Em="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Ff=typeof window<"u"&&window.trustedTypes;if(Ff)try{Al=Ff.createPolicy("vue",{createHTML:t=>t})}catch{}const Tm=Al?t=>Al.createHTML(t):t=>t,KT="http://www.w3.org/2000/svg",WT="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Uf=vn&&vn.createElement("template"),zT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(KT,t):e==="mathml"?vn.createElementNS(WT,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uf.innerHTML=Tm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Uf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jn="transition",ei="animation",ys=Symbol("_vtc"),wm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Im=Ye({},Hg,wm),GT=t=>(t.displayName="Transition",t.props=Im,t),QT=GT((t,{slots:e})=>Su(WE,Am(t),e)),Dr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},jf=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function Am(t){const e={};for(const A in t)A in wm||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,S=JT(s),k=S&&S[0],D=S&&S[1],{onBeforeEnter:B,onEnter:O,onEnterCancelled:V,onLeave:x,onLeaveCancelled:z,onBeforeAppear:ee=B,onAppear:b=O,onAppearCancelled:v=V}=e,y=(A,E,be,He)=>{A._enterCancelled=He,Hn(A,E?f:c),Hn(A,E?u:o),be&&be()},w=(A,E)=>{A._isLeaving=!1,Hn(A,p),Hn(A,m),Hn(A,g),E&&E()},R=A=>(E,be)=>{const He=A?b:O,Ce=()=>y(E,A,be);Dr(He,[E,Ce]),$f(()=>{Hn(E,A?l:i),nn(E,A?f:c),jf(He)||Bf(E,r,k,Ce)})};return Ye(e,{onBeforeEnter(A){Dr(B,[A]),nn(A,i),nn(A,o)},onBeforeAppear(A){Dr(ee,[A]),nn(A,l),nn(A,u)},onEnter:R(!1),onAppear:R(!0),onLeave(A,E){A._isLeaving=!0;const be=()=>w(A,E);nn(A,p),A._enterCancelled?(nn(A,g),bl()):(bl(),nn(A,g)),$f(()=>{A._isLeaving&&(Hn(A,p),nn(A,m),jf(x)||Bf(A,r,D,be))}),Dr(x,[A,be])},onEnterCancelled(A){y(A,!1,void 0,!0),Dr(V,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Dr(v,[A])},onLeaveCancelled(A){w(A),Dr(z,[A])}})}function JT(t){if(t==null)return null;if(Oe(t))return[Gc(t.enter),Gc(t.leave)];{const e=Gc(t);return[e,e]}}function Gc(t){return rE(t)}function nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ys]||(t[ys]=new Set)).add(e)}function Hn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ys];n&&(n.delete(e),n.size||(t[ys]=void 0))}function $f(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let YT=0;function Bf(t,e,n,r){const s=t._endId=++YT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=bm(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,g)}function bm(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=Hf(s,i),c=r(`${ei}Delay`),l=r(`${ei}Duration`),u=Hf(c,l);let f=null,p=0,g=0;e===jn?o>0&&(f=jn,p=o,g=i.length):e===ei?u>0&&(f=ei,p=u,g=l.length):(p=Math.max(o,u),f=p>0?o>u?jn:ei:null,g=f?f===jn?i.length:l.length:0);const m=f===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:m}}function Hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>qf(n)+qf(t[r])))}function qf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function bl(){return document.body.offsetHeight}function XT(t,e,n){const r=t[ys];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kf=Symbol("_vod"),ZT=Symbol("_vsh"),ew=Symbol(""),tw=/(^|;)\s*display\s*:/;function nw(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Bo(r,c,"")}else for(const o in e)n[o]==null&&Bo(r,o,"");for(const o in n)o==="display"&&(i=!0),Bo(r,o,n[o])}else if(s){if(e!==n){const o=r[ew];o&&(n+=";"+o),r.cssText=n,i=tw.test(n)}}else e&&t.removeAttribute("style");Kf in t&&(t[Kf]=i?r.display:"",t[ZT]&&(r.display="none"))}const Wf=/\s*!important$/;function Bo(t,e,n){if(re(n))n.forEach(r=>Bo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rw(t,e);Wf.test(n)?t.setProperty(yr(r),n.replace(Wf,""),"important"):t[r]=n}}const zf=["Webkit","Moz","ms"],Qc={};function rw(t,e){const n=Qc[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return Qc[e]=r;r=Na(r);for(let s=0;s<zf.length;s++){const i=zf[s]+r;if(i in t)return Qc[e]=i}return e}const Gf="http://www.w3.org/1999/xlink";function Qf(t,e,n,r,s,i=lE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gf,e.slice(6,e.length)):t.setAttributeNS(Gf,e,n):n==null||i&&!hg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":dn(n)?String(n):n)}function Jf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Tm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Nr(t,e,n,r){t.addEventListener(e,n,r)}function sw(t,e,n,r){t.removeEventListener(e,n,r)}const Yf=Symbol("_vei");function iw(t,e,n,r,s=null){const i=t[Yf]||(t[Yf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=ow(e);if(r){const u=i[e]=lw(r,s);Nr(t,c,u,l)}else o&&(sw(t,c,o,l),i[e]=void 0)}}const Xf=/(?:Once|Passive|Capture)$/;function ow(t){let e;if(Xf.test(t)){e={};let r;for(;r=t.match(Xf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yr(t.slice(2)),e]}let Jc=0;const aw=Promise.resolve(),cw=()=>Jc||(aw.then(()=>Jc=0),Jc=Date.now());function lw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(uw(r,n.value),e,5,[r])};return n.value=t,n.attached=cw(),n}function uw(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Zf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?XT(t,r,o):e==="style"?nw(t,n,r):Da(e)?au(e)||iw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fw(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?Jf(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qf(t,e,r,o))};function fw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zf(e)&&Ue(n)?!1:e in t}const Rm=new WeakMap,Sm=new WeakMap,la=Symbol("_moveCb"),ed=Symbol("_enterCb"),dw=t=>(delete t.props.mode,t),pw=dw({name:"TransitionGroup",props:Ye({},Im,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=za(),r=Bg();let s,i;return Tu(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!yw(s[0].el,n.vnode.el,o))return;s.forEach(gw),s.forEach(mw);const c=s.filter(_w);bl(),c.forEach(l=>{const u=l.el,f=u.style;nn(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[la]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[la]=null,Hn(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=we(t),c=Am(o);let l=o.tag||Bt;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),lr(f,Oi(f,c,r,n)),Rm.set(f,f.el.getBoundingClientRect()))}i=e.default?Eu(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&lr(f,Oi(f,c,r,n))}return Me(l,null,i)}}}),TD=pw;function gw(t){const e=t.el;e[la]&&e[la](),e[ed]&&e[ed]()}function mw(t){Sm.set(t,t.el.getBoundingClientRect())}function _w(t){const e=Rm.get(t),n=Sm.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function yw(t,e,n){const r=t.cloneNode(),s=t[ys];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=bm(r);return i.removeChild(r),o}const ua=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>us(e,n):e};function vw(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ds=Symbol("_assign"),wD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ds]=ua(s);const i=r||s.props&&s.props.type==="number";Nr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=dl(c)),t[ds](c)}),n&&Nr(t,"change",()=>{t.value=t.value.trim()}),e||(Nr(t,"compositionstart",vw),Nr(t,"compositionend",td),Nr(t,"change",td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ds]=ua(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?dl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ID={deep:!0,created(t,e,n){t[ds]=ua(n),Nr(t,"change",()=>{const r=t._modelValue,s=Ew(t),i=t.checked,o=t[ds];if(re(r)){const c=fg(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Oa(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Pm(t,i))})},mounted:nd,beforeUpdate(t,e,n){t[ds]=ua(n),nd(t,e,n)}};function nd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(re(e))s=fg(e,r.props.value)>-1;else if(Oa(e))s=e.has(r.props.value);else{if(e===n)return;s=Ma(e,Pm(t,!0))}t.checked!==s&&(t.checked=s)}function Ew(t){return"_value"in t?t._value:t.value}function Pm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tw=["ctrl","shift","alt","meta"],ww={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tw.some(n=>t[`${n}Key`]&&!e.includes(n))},AD=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=ww[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Iw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bD=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=yr(s.key);if(e.some(o=>o===i||Iw[o]===i))return t(s)})},Aw=Ye({patchProp:hw},zT);let rd;function bw(){return rd||(rd=yT(Aw))}const Rw=(...t)=>{const e=bw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pw(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Sw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Sw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pw(t){return Ue(t)?document.querySelector(t):t}function Rl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Rl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const Cw={run:t=>t()},kw=()=>Cw,Cm=typeof console.createTask<"u"?console.createTask:kw;function Dw(t,e){const n=e.shift(),r=Cm(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function Ow(t,e){const n=e.shift(),r=Cm(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Yc(t,e){for(const n of[...t])n(e)}class Vw{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Rl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Rl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Dw,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Ow,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Yc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Yc(this._after,s)}):(this._after&&s&&Yc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Nw(){return new Vw}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let km;const Qa=t=>km=t,Dm=Symbol();function Sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function xw(){const t=mg(!0),e=t.run(()=>kt({}));let n=[],r=[];const s=yu({install(i){Qa(s),s._a=i,i.provide(Dm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Om=()=>{};function sd(t,e,n,r=Om){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&_g()&&hE(s),s}function Zr(t,...e){t.slice().forEach(n=>{n(...e)})}const Mw=t=>t(),id=Symbol(),Xc=Symbol();function Pl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Sl(s)&&Sl(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!rr(r)?t[n]=Pl(s,r):t[n]=r}return t}const Lw=Symbol();function Fw(t){return!Sl(t)||!t.hasOwnProperty(Lw)}const{assign:qn}=Object;function Uw(t){return!!(Ke(t)&&t.effect)}function jw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=NE(n.state.value[t]);return qn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=yu(At(()=>{Qa(n);const m=n._s.get(t);return o[g].call(m,m)})),p),{}))}return l=Vm(t,u,e,n,r,!0),l}function Vm(t,e,n={},r,s,i){let o;const c=qn({actions:{}},n),l={deep:!0};let u,f,p=[],g=[],m;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),kt({});let k;function D(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:Ei.patchFunction,storeId:t,events:m}):(Pl(r.state.value[t],v),y={type:Ei.patchObject,payload:v,storeId:t,events:m});const w=k=Symbol();Ua().then(()=>{k===w&&(u=!0)}),f=!0,Zr(p,y,r.state.value[t])}const B=i?function(){const{state:y}=n,w=y?y():{};this.$patch(R=>{qn(R,w)})}:Om;function O(){o.stop(),p=[],g=[],r._s.delete(t)}const V=(v,y="")=>{if(id in v)return v[Xc]=y,v;const w=function(){Qa(r);const R=Array.from(arguments),A=[],E=[];function be(ue){A.push(ue)}function He(ue){E.push(ue)}Zr(g,{args:R,name:w[Xc],store:z,after:be,onError:He});let Ce;try{Ce=v.apply(this&&this.$id===t?this:z,R)}catch(ue){throw Zr(E,ue),ue}return Ce instanceof Promise?Ce.then(ue=>(Zr(A,ue),ue)).catch(ue=>(Zr(E,ue),Promise.reject(ue))):(Zr(A,Ce),Ce)};return w[id]=!0,w[Xc]=y,w},x={_p:r,$id:t,$onAction:sd.bind(null,g),$patch:D,$reset:B,$subscribe(v,y={}){const w=sd(p,v,y.detached,()=>R()),R=o.run(()=>Fr(()=>r.state.value[t],A=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:Ei.direct,events:m},A)},qn({},l,y)));return w},$dispose:O},z=Gi(x);r._s.set(t,z);const b=(r._a&&r._a.runWithContext||Mw)(()=>r._e.run(()=>(o=mg()).run(()=>e({action:V}))));for(const v in b){const y=b[v];if(Ke(y)&&!Uw(y)||rr(y))i||(S&&Fw(y)&&(Ke(y)?y.value=S[v]:Pl(y,S[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const w=V(y,v);b[v]=w,c.actions[v]=y}}return qn(z,b),qn(we(z),b),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:v=>{D(y=>{qn(y,v)})}}),r._p.forEach(v=>{qn(z,o.run(()=>v({store:z,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(z.$state,S),u=!0,f=!0,z}/*! #__NO_SIDE_EFFECTS__ */function $w(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=hT();return o=o||(l?xt(Dm,null):null),o&&Qa(o),o=km,o._s.has(t)||(s?Vm(t,e,r,o):jw(t,r,o)),o._s.get(t)}return i.$id=t,i}const Bw=new Set(["title","titleTemplate","script","style","noscript"]),Ho=new Set(["base","meta","link","style","script","noscript"]),Hw=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),qw=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Nm=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Kw=typeof window<"u";function ha(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Cl(t){if(t._h)return t._h;if(t._d)return ha(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return ha(e)}function Ww(t,e){return t instanceof Promise?t.then(e):e(t)}function kl(t,e,n,r){const s=r||Mm(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>kl(t,e,n,o));const i={tag:t,props:s};for(const o of Nm){const c=i.props[o]!==void 0?i.props[o]:n[o];c!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Bw.has(i.tag))&&(i[o==="children"?"innerHTML":o]=c),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function zw(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function xm(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=zw(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,xm(t,e,n,s)));if(!e&&!Nm.has(i)){const o=String(t[i]),c=i.startsWith("data-");o==="true"||o===""?t[i]=c?"true":!0:t[i]||(c&&o==="false"?t[i]="false":delete t[i])}}}function Mm(t,e=!1){const n=xm(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const Gw=10;function Lm(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,Lm(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function Qw(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!Hw.has(s))){if(Array.isArray(i)){for(const o of i)e.push(kl(s,o,t));continue}e.push(kl(s,i,t))}}if(e.length===0)return[];const r=[];return Ww(Lm(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<Gw)+i,s)))}const od=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),ad={base:-10,title:10},cd={critical:-80,high:-10,low:20};function fa(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in ad&&(n=ad[t.tag]),e&&e in cd?n+cd[e]:n}const Jw=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Yw=["name","property","http-equiv"];function Fm(t){const{props:e,tag:n}=t;if(qw.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of Yw)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Gn="%separator";function Xw(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const Zw=new RegExp(`${Gn}(?:\\s*${Gn})*`,"g");function Do(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Gn);return t=t.replace(/%\w+(?:\.\w+)?/g,c=>{if(c===Gn||!i.includes(c))return c;const l=Xw(e,c.slice(1),r);return l!==void 0?l:c}).trim(),o&&(t.endsWith(Gn)&&(t=t.slice(0,-Gn.length)),t.startsWith(Gn)&&(t=t.slice(Gn.length)),t=t.replace(Zw,n).trim()),t}function ld(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function eI(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var p;const i=(await t.resolveTags()).map(g=>({tag:g,id:Ho.has(g.tag)?Cl(g):g.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const g=new Set;for(const m of["body","head"]){const S=(p=n[m])==null?void 0:p.children;for(const k of S){const D=k.tagName.toLowerCase();if(!Ho.has(D))continue;const B={tag:D,props:await Mm(k.getAttributeNames().reduce((z,ee)=>({...z,[ee]:k.getAttribute(ee)}),{})),innerHTML:k.innerHTML},O=Fm(B);let V=O,x=1;for(;V&&g.has(V);)V=`${O}:${x++}`;V&&(B._d=V,g.add(V)),o.elMap[k.getAttribute("data-hid")||Cl(B)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function c(g,m,S){const k=`${g}:${m}`;o.sideEffects[k]=S,delete o.pendingSideEffects[k]}function l({id:g,$el:m,tag:S}){const k=S.tag.endsWith("Attrs");if(o.elMap[g]=m,k||(S.textContent&&S.textContent!==m.textContent&&(m.textContent=S.textContent),S.innerHTML&&S.innerHTML!==m.innerHTML&&(m.innerHTML=S.innerHTML),c(g,"el",()=>{var D;(D=o.elMap[g])==null||D.remove(),delete o.elMap[g]})),S._eventHandlers)for(const D in S._eventHandlers)Object.prototype.hasOwnProperty.call(S._eventHandlers,D)&&m.getAttribute(`data-${D}`)!==""&&((S.tag==="bodyAttrs"?n.defaultView:m).addEventListener(D.substring(2),S._eventHandlers[D].bind(m)),m.setAttribute(`data-${D}`,""));for(const D in S.props){if(!Object.prototype.hasOwnProperty.call(S.props,D))continue;const B=S.props[D],O=`attr:${D}`;if(D==="class"){if(!B)continue;for(const V of B.split(" "))k&&c(g,`${O}:${V}`,()=>m.classList.remove(V)),!m.classList.contains(V)&&m.classList.add(V)}else if(D==="style"){if(!B)continue;for(const V of B.split(";")){const x=V.indexOf(":"),z=V.substring(0,x).trim(),ee=V.substring(x+1).trim();c(g,`${O}:${z}`,()=>{m.style.removeProperty(z)}),m.style.setProperty(z,ee)}}else m.getAttribute(D)!==B&&m.setAttribute(D,B===!0?"":String(B)),k&&c(g,O,()=>m.removeAttribute(D))}}const u=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const g of i){const{tag:m,shouldRender:S,id:k}=g;if(S){if(m.tag==="title"){n.title=m.textContent;continue}g.$el=g.$el||o.elMap[k],g.$el?l(g):Ho.has(m.tag)&&u.push(g)}}for(const g of u){const m=g.tag.tagPosition||"head";g.$el=n.createElement(g.tag.tag),l(g),f[m]=f[m]||n.createDocumentFragment(),f[m].appendChild(g.$el)}for(const g of i)await t.hooks.callHook("dom:renderTag",g,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const g in o.pendingSideEffects)o.pendingSideEffects[g]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function tI(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>eI(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function nI(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{tI(i,t)}}}}}const rI=new Set(["templateParams","htmlAttrs","bodyAttrs"]),sI={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=Fm(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Cl(r),i=e[s];if(i){let c=r==null?void 0:r.tagDuplicateStrategy;if(!c&&rI.has(r.tag)&&(c="merge"),c==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(fa(r)>fa(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Ho.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},iI=new Set(["script","link","bodyAttrs"]),oI=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!iI.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&od.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||ha(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const c=o.slice(0,-5);od.has(c)&&((i=(s=n._eventHandlers)==null?void 0:s[c])==null||i.call(e,new Event(c.substring(2))))}}}}),aI=new Set(["link","style","script","noscript"]),cI={hooks:{"tag:normalise":({tag:t})=>{t.key&&aI.has(t.tag)&&(t.props["data-hid"]=t._h=ha(t.key))}}},lI={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},uI={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of Jw){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(c=>c._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=fa(n),i=fa(r);return s<i?-1:s>i?1:n._p-r._p})}}},hI={meta:"content",link:"href",htmlAttrs:"lang"},fI=["innerHTML","textContent"],dI=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let c=0;c<n.length;c+=1)n[c].tag==="templateParams"&&(r=e.tags.splice(c,1)[0].props,c-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Do(s.pageTitle||((o=n.find(c=>c.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const c of n){if(c.processTemplateParams===!1)continue;const l=hI[c.tag];if(l&&typeof c.props[l]=="string")c.props[l]=Do(c.props[l],s,i);else if(c.processTemplateParams||c.tag==="titleTemplate"||c.tag==="title")for(const u of fI)typeof c[u]=="string"&&(c[u]=Do(c[u],s,i,c.tag==="script"&&c.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Do(n.textContent,t._templateParams,t._separator))}}}),pI={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=ld(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=ld(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},gI={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Um;function mI(t={}){const e=_I(t);return e.use(nI()),Um=e}function ud(t,e){return!t||t==="server"&&e||t==="client"&&!e}function _I(t={}){const e=Nw();e.addHooks(t.hooks||{}),t.document=t.document||(Kw?document:void 0);const n=!t.document,r=()=>{c.dirty=!0,e.callHook("entries:updated",c)};let s=0,i=[];const o=[],c={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(c):l;(!u.key||!o.some(f=>f.key===u.key))&&(o.push(u),ud(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const f={_i:s++,input:l,...u};return ud(f.mode,n)&&(i.push(f),r()),{dispose(){i=i.filter(p=>p._i!==f._i),r()},patch(p){for(const g of i)g._i===f._i&&(g.input=f.input=p);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const f=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(f):f),u.resolvedInput)for(const p of await Qw(u)){const g={tag:p,entry:u,resolvedOptions:c.resolvedOptions};await e.callHook("tag:normalise",g),l.tags.push(g.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[sI,lI,oI,cI,uI,dI,pI,gI,...(t==null?void 0:t.plugins)||[]].forEach(l=>c.use(l)),c.hooks.callHook("init",c),c}function yI(){return Um}const vI=Em[0]==="3";function EI(t){return typeof t=="function"?t():Pt(t)}function da(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=EI(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>da(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Pt(e[r]);continue}n[r]=da(e[r])}return n}return e}const TI={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=da(e.input)}}},jm="usehead";function wI(t){return{install(n){vI&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(jm,t))}}.install}function II(t={}){t.domDelayFn=t.domDelayFn||(n=>Ua(()=>setTimeout(()=>n(),0)));const e=mI(t);return e.use(TI),e.install=wI(e),e}const hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fd="__unhead_injection_handler__";function AI(){return fd in hd?hd[fd]():xt(jm)||yI()}function $m(t,e={}){const n=e.head||AI();if(n)return n.ssr?n.push(t,e):bI(n,t,e)}function bI(t,e,n={}){const r=kt(!1),s=kt({});AT(()=>{s.value=r.value?{}:da(e)});const i=t.push(s.value,n);return Fr(s,c=>{i.patch(c)}),za()&&(qa(()=>{i.dispose()}),Qg(()=>{r.value=!0}),Gg(()=>{r.value=!1})),i}function RI(t){const e=t;return e.headTags=t.resolveTags,e.addEntry=t.push,e.addHeadObjs=t.push,e.addReactiveEntry=(n,r)=>{const s=$m(n,r);return s!==void 0?s.dispose:()=>{}},e.removeHeadObjs=()=>{},e.updateDOM=()=>{t.hooks.callHook("entries:updated",t)},e.unhead=t,e}function SI(t,e){const n=II({});return RI(n)}const PI=()=>{};var dd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},CI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[f],n[p],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new kI;const g=i<<2|c>>4;if(r.push(g),u!==64){const m=c<<4&240|u>>2;if(r.push(m),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DI=function(t){const e=Bm(t);return Hm.encodeByteArray(e,!0)},pa=function(t){return DI(t).replace(/\./g,"")},qm=function(t){try{return Hm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=()=>OI().__FIREBASE_DEFAULTS__,NI=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qm(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return PI()||VI()||NI()||xI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Km=t=>{var e,n;return(n=(e=Ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MI=t=>{const e=Km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wm=()=>{var t;return(t=Ja())===null||t===void 0?void 0:t.config},zm=t=>{var e;return(e=Ja())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function jI(){var t;const e=(t=Ja())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $I(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qI(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KI(){return!jI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GI,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,c,r)}}function QI(t,e){return t.replace(JI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JI=/\{\$([^}]+)}/g;function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(pd(i)&&pd(o)){if(!ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ai(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XI(t,e){const n=new ZI(t,e);return n.subscribe.bind(n)}class ZI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zc),s.error===void 0&&(s.error=Zc),s.complete===void 0&&(s.complete=Zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===Vr?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const iA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},oA=me.INFO,aA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},cA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pu{constructor(e){this.name=e,this._logLevel=oA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const lA=(t,e)=>e.some(n=>t instanceof n);let gd,md;function uA(){return gd||(gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hA(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gm=new WeakMap,Dl=new WeakMap,Qm=new WeakMap,el=new WeakMap,Cu=new WeakMap;function fA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gm.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function dA(t){if(Dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dl.set(t,e)}let Ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pA(t){Ol=t(Ol)}function gA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tl(this),e,...n);return Qm.set(r,e.sort?e.sort():[e]),sr(r)}:hA().includes(t)?function(...e){return t.apply(tl(this),e),sr(Gm.get(this))}:function(...e){return sr(t.apply(tl(this),e))}}function mA(t){return typeof t=="function"?gA(t):(t instanceof IDBTransaction&&dA(t),lA(t,uA())?new Proxy(t,Ol):t)}function sr(t){if(t instanceof IDBRequest)return fA(t);if(el.has(t))return el.get(t);const e=mA(t);return e!==t&&(el.set(t,e),Cu.set(e,t)),e}const tl=t=>Cu.get(t);function _A(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const yA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],nl=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nl.get(e))return nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return nl.set(e,i),i}pA(t=>({...t,get:(e,n,r)=>_d(e,n)||t.get(e,n,r),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",yd="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Pu("@firebase/app"),wA="@firebase/app-compat",IA="@firebase/analytics-compat",AA="@firebase/analytics",bA="@firebase/app-check-compat",RA="@firebase/app-check",SA="@firebase/auth",PA="@firebase/auth-compat",CA="@firebase/database",kA="@firebase/data-connect",DA="@firebase/database-compat",OA="@firebase/functions",VA="@firebase/functions-compat",NA="@firebase/installations",xA="@firebase/installations-compat",MA="@firebase/messaging",LA="@firebase/messaging-compat",FA="@firebase/performance",UA="@firebase/performance-compat",jA="@firebase/remote-config",$A="@firebase/remote-config-compat",BA="@firebase/storage",HA="@firebase/storage-compat",qA="@firebase/firestore",KA="@firebase/vertexai",WA="@firebase/firestore-compat",zA="firebase",GA="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="[DEFAULT]",QA={[Vl]:"fire-core",[wA]:"fire-core-compat",[AA]:"fire-analytics",[IA]:"fire-analytics-compat",[RA]:"fire-app-check",[bA]:"fire-app-check-compat",[SA]:"fire-auth",[PA]:"fire-auth-compat",[CA]:"fire-rtdb",[kA]:"fire-data-connect",[DA]:"fire-rtdb-compat",[OA]:"fire-fn",[VA]:"fire-fn-compat",[NA]:"fire-iid",[xA]:"fire-iid-compat",[MA]:"fire-fcm",[LA]:"fire-fcm-compat",[FA]:"fire-perf",[UA]:"fire-perf-compat",[jA]:"fire-rc",[$A]:"fire-rc-compat",[BA]:"fire-gcs",[HA]:"fire-gcs-compat",[qA]:"fire-fst",[WA]:"fire-fst-compat",[KA]:"fire-vertex","fire-js":"fire-js",[zA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map,JA=new Map,xl=new Map;function vd(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(xl.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of Mi.values())vd(n,t);for(const n of JA.values())vd(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Yi("app","Firebase",YA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=GA;function Jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=Wm()),!n)throw ir.create("no-options");const i=Mi.get(s);if(i){if(ur(n,i.options)&&ur(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new sA(s);for(const l of xl.values())o.addComponent(l);const c=new XA(n,r,o);return Mi.set(s,c),c}function Du(t=Nl){const e=Mi.get(t);if(!e&&t===Nl&&Wm())return Jm();if(!e)throw ir.create("no-app",{appName:t});return e}function ZA(){return Array.from(Mi.values())}function or(t,e,n){var r;let s=(r=QA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(c.join(" "));return}vs(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="firebase-heartbeat-database",tb=1,Li="firebase-heartbeat-store";let rl=null;function Ym(){return rl||(rl=_A(eb,tb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),rl}async function nb(t){try{const n=(await Ym()).transaction(Li),r=await n.objectStore(Li).get(Xm(t));return await n.done,r}catch(e){if(e instanceof Vn)Pn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Ed(t,e){try{const r=(await Ym()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,Xm(t)),await r.done}catch(n){if(n instanceof Vn)Pn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function Xm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=1024,sb=30;class ib{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ab(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Td();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sb){const o=cb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Td(),{heartbeatsToSend:r,unsentEntries:s}=ob(this._heartbeatsCache.heartbeats),i=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function Td(){return new Date().toISOString().substring(0,10)}function ob(t,e=rb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ab{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function cb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){vs(new jr("platform-logger",e=>new EA(e),"PRIVATE")),vs(new jr("heartbeat",e=>new ib(e),"PRIVATE")),or(Vl,yd,t),or(Vl,yd,"esm2017"),or("fire-js","")}lb("");function Ou(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ub=Zm,e_=new Yi("auth","Firebase",Zm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Pu("@firebase/auth");function hb(t,...e){ga.logLevel<=me.WARN&&ga.warn(`Auth (${Os}): ${t}`,...e)}function qo(t,...e){ga.logLevel<=me.ERROR&&ga.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Vu(t,...e)}function ln(t,...e){return Vu(t,...e)}function t_(t,e,n){const r=Object.assign(Object.assign({},ub()),{[e]:n});return new Yi("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return t_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e_.create(t,...e)}function ae(t,e,...n){if(!t)throw Vu(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function Cn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fb(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fb()||BI()||"connection"in navigator)?navigator.onLine:!0}function pb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=UI()||HI()}get(){return db()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new Zi(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,s={}){return r_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return $I()||(u.referrerPolicy="no-referrer"),n_.fetch()(s_(t,t.config.apiHost,n,c),u)})}async function r_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gb),e);try{const s=new yb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw t_(t,f,u);Xt(t,f)}}catch(s){if(s instanceof Vn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function eo(t,e,n,r,s={}){const i=await Nn(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function s_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nu(t.config,s):`${t.config.apiScheme}://${s}`}function _b(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),mb.get())})}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Ad(t){return t!==void 0&&t.enterprise!==void 0}class vb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _b(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Eb(t,e){return Nn(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function i_(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wb(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=xu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ti(sl(s.auth_time)),issuedAtTime:Ti(sl(s.iat)),expirationTime:Ti(sl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sl(t){return Number(t)*1e3}function xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=qm(n);return s?JSON.parse(s):(qo("Failed to decode base64 JWT payload"),null)}catch(s){return qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bd(t){const e=xu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&Ib(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ib({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Es(t,i_(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?o_(i.providerUserInfo):[],c=Rb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function bb(t){const e=We(t);await ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function o_(t){return t.map(e=>{var{providerId:n}=e,r=Ou(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){const n=await r_(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=s_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",n_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pb(t,e){return Nn(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=bd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Sb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ps;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wb(this,e)}reload(){return bb(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Es(this,Tb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:x,isAnonymous:z,providerData:ee,stsTokenManager:b}=n;ae(V&&b,e,"internal-error");const v=ps.fromJSON(this.name,b);ae(typeof V=="string",e,"internal-error"),$n(p,e.name),$n(g,e.name),ae(typeof x=="boolean",e,"internal-error"),ae(typeof z=="boolean",e,"internal-error"),$n(m,e.name),$n(S,e.name),$n(k,e.name),$n(D,e.name),$n(B,e.name),$n(O,e.name);const y=new In({uid:V,auth:e,email:g,emailVerified:x,displayName:p,isAnonymous:z,photoURL:S,phoneNumber:m,tenantId:k,stsTokenManager:v,createdAt:B,lastLoginAt:O});return ee&&Array.isArray(ee)&&(y.providerData=ee.map(w=>Object.assign({},w))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ps;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?o_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ps;c.updateFromIdToken(r);const l=new In({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ll(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new Map;function An(t){Cn(t instanceof Function,"Expected a class definition");let e=Rd.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const Sd=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(An(Sd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(Sd);const o=Ko(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=In._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new gs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(p_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c_(t=yt()){return/firefox\//i.test(t)}function l_(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=yt()){return/crios\//i.test(t)}function h_(t=yt()){return/iemobile/i.test(t)}function f_(t=yt()){return/android/i.test(t)}function d_(t=yt()){return/blackberry/i.test(t)}function p_(t=yt()){return/webos/i.test(t)}function Mu(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cb(t=yt()){var e;return Mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kb(){return qI()&&document.documentMode===10}function g_(t=yt()){return Mu(t)||f_(t)||p_(t)||d_(t)||/windows phone/i.test(t)||h_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e=[]){let n;switch(t){case"Browser":n=Pd(yt());break;case"Worker":n=`${Pd(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e={}){return Nn(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=6;class Nb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new Db(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await i_(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(bn(this));const n=e?We(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ob(this),n=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(t){return We(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(t){Ya=t}function __(t){return Ya.loadJS(t)}function Lb(){return Ya.recaptchaEnterpriseScript}function Fb(){return Ya.gapiScript}function Ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jb{constructor(){this.enterprise=new $b}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $b{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Bb="recaptcha-enterprise",y_="NO_RECAPTCHA";class Hb{constructor(e){this.type=Bb,this.auth=Kr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Eb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new vb(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Ad(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(y_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ad(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Lb();l.length!==0&&(l+=c),__(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function kd(t,e,n,r=!1,s=!1){const i=new Hb(t);let o;if(s)o=y_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Fl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await kd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await kd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t,e){const n=ku(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ur(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function Kb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wb(t,e,n){const r=Kr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=v_(e),{host:o,port:c}=zb(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(ur(u,r.config.emulator)&&ur(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Gb()}function v_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zb(t){const e=v_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dd(o)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function Qb(t,e){return Nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function Xb(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,n,"signInWithPassword",Jb);case"emailLink":return Yb(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,r,"signUpPassword",Qb);case"emailLink":return Xb(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="http://localhost";class $r extends Lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ou(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t0(t){const e=oi(ai(t)).link,n=e?oi(ai(e)).deep_link_id:null,r=oi(ai(t)).deep_link_id;return(r?oi(ai(r)).link:null)||r||n||e||t}class Fu{constructor(e){var n,r,s,i,o,c;const l=oi(ai(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=e0((s=l.mode)!==null&&s!==void 0?s:null);ae(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=t0(e);try{return new Fu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return Fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fu.parseLink(n);return ae(r,"argument-error"),Fi._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends to{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends to{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends to{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e){return eo(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=Od(r);return new Br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Od(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _a(e,n,r,s)}}function T_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(t,i,e,r):i})}async function r0(t,e,n=!1){const r=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(bn(r));const s="reauthenticate";try{const i=await Es(t,T_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=xu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e,n=!1){if(Ht(t.app))return Promise.reject(bn(t));const r="signIn",s=await T_(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function i0(t,e){return w_(Kr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t){const e=Kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o0(t,e,n){if(Ht(t.app))return Promise.reject(bn(t));const r=Kr(t),o=await Fl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&I_(t),l}),c=await Br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function a0(t,e,n){return Ht(t.app)?Promise.reject(bn(t)):i0(We(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&I_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e){return Nn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Es(r,c0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e){return We(t).setPersistence(e)}function h0(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function f0(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function d0(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function p0(t){return We(t).signOut()}const ya="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=1e3,m0=10;class b_ extends A_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,m0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}b_.type="LOCAL";const R_=b_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends A_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S_.type="SESSION";const P_=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await _0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Uu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function v0(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function E0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w0(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebaseLocalStorageDb",I0=1,va="firebaseLocalStorage",D_="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function A0(){const t=indexedDB.deleteDatabase(k_);return new no(t).toPromise()}function Ul(){const t=indexedDB.open(k_,I0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(va,{keyPath:D_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(va)?e(r):(r.close(),await A0(),e(await Ul()))})})}async function Vd(t,e,n){const r=Za(t,!0).put({[D_]:e,value:n});return new no(r).toPromise()}async function b0(t,e){const n=Za(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Nd(t,e){const n=Za(t,!0).delete(e);return new no(n).toPromise()}const R0=800,S0=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>S0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xa._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await E0(),!this.activeServiceWorker)return;this.sender=new y0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await Vd(e,ya,"1"),await Nd(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>b0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Za(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const P0=O_;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){return e?An(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function k0(t){return w_(t.auth,new ju(t),t.bypassAuthState)}function D0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),s0(n,new ju(t),t.bypassAuthState)}async function O0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),r0(n,new ju(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k0;case"linkViaPopup":case"linkViaRedirect":return O0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:Xt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new Zi(2e3,1e4);class as extends V_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V0.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="pendingRedirect",Wo=new Map;class x0 extends V_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await M0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M0(t,e){const n=U0(e),r=F0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function L0(t,e){Wo.set(t._key(),e)}function F0(t){return An(t._redirectPersistence)}function U0(t){return Ko(N0,t.config.apiKey,t.name)}async function j0(t,e,n=!1){if(Ht(t.app))return Promise.reject(bn(t));const r=Kr(t),s=C0(r,e),o=await new x0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=10*60*1e3;class B0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!N_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$0&&this.cachedEventUids.clear(),this.cachedEventUids.has(xd(e))}saveEventToCache(e){this.cachedEventUids.add(xd(e)),this.lastProcessedEventTime=Date.now()}}function xd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function N_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W0=/^https?/;async function z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await q0(t);for(const n of e)try{if(G0(n))return}catch{}Xt(t,"unauthorized-domain")}function G0(t){const e=Ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W0.test(n))return!1;if(K0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new Zi(3e4,6e4);function Md(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J0(t){return new Promise((e,n)=>{var r,s,i;function o(){Md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Md(),n(ln(t,"network-request-failed"))},timeout:Q0.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const c=Ub("iframefcb");return un()[c]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},__(`${Fb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw zo=null,e})}let zo=null;function Y0(t){return zo=zo||J0(t),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Zi(5e3,15e3),Z0="__/auth/iframe",eR="emulator/auth/iframe",tR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nu(e,eR):`https://${t.config.authDomain}/${Z0}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=nR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function sR(t){const e=await Y0(t),n=un().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:rR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=un().setTimeout(()=>{i(o)},X0.get());function l(){un().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oR=500,aR=600,cR="_blank",lR="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uR(t,e,n,r=oR,s=aR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},iR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=yt().toLowerCase();n&&(c=u_(u)?cR:n),c_(u)&&(e=e||lR,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[m,S])=>`${g}${m}=${S},`,"");if(Cb(u)&&c!=="_self")return hR(e||"",c),new Ld(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Ld(p)}function hR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="__/auth/handler",dR="emulator/auth/handler",pR=encodeURIComponent("fac");async function Fd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof E_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof to){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${pR}=${encodeURIComponent(l)}`:"";return`${gR(t)}?${Xi(c).slice(1)}${u}`}function gR({config:t}){return t.emulator?Nu(t,dR):`https://${t.authDomain}/${fR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="webStorageSupport";class mR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=j0,this._overrideRedirectResult=L0}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fd(e,n,r,Ml(),s);return uR(e,o,Uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fd(e,n,r,Ml(),s);return v0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sR(e),r=new B0(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(il,{type:il},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[il];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||l_()||Mu()}}const _R=mR;var Ud="@firebase/auth",jd="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ER(t){vs(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(t)},u=new xb(r,s,i,l);return Kb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vs(new jr("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(r=>new yR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(Ud,jd,vR(t)),or(Ud,jd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=5*60,wR=zm("authIdTokenMaxAge")||TR;let $d=null;const IR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wR)return;const s=n==null?void 0:n.token;$d!==s&&($d=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AR(t=Du()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qb(t,{popupRedirectResolver:_R,persistence:[P0,R_,P_]}),r=zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IR(i.toString());f0(n,o,()=>o(n.currentUser)),h0(n,c=>o(c))}}const s=Km("auth");return s&&Wb(n,`http://${s}`),n}function bR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Mb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ER("Browser");var Bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,x_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(w,R,A){for(var E=Array(arguments.length-2),be=2;be<arguments.length;be++)E[be-2]=arguments[be];return v.prototype[R].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)w[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)w[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],R=b.g[2];var A=b.g[3],E=v+(A^y&(R^A))+w[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+w[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+w[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+w[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+w[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+w[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+w[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(R^A&(y^R))+w[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+w[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+w[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+w[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+w[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+w[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+w[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(y^R^A)+w[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+w[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+w[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+w[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+w[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+w[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+w[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(R^(y|~A))+w[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+w[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+w[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+w[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+w[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+w[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,w=this.B,R=this.h,A=0;A<v;){if(R==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(w[R++]=b.charCodeAt(A++),R==this.blockSize){s(this,w),R=0;break}}else for(;A<v;)if(w[R++]=b[A++],R==this.blockSize){s(this,w),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)b[y++]=this.g[v]>>>w&255;return b};function i(b,v){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],w=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;w&&A==v||(y[R]=A,w=!1)}this.g=y}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(u(-b));for(var v=[],y=1,w=0;b>=y;w++)v[w]=b/y|0,y*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return D(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),w=p,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),E=parseInt(b.substring(R,R+A),v);8>A?(A=u(Math.pow(v,A)),w=w.j(A).add(u(E))):(w=w.j(y),w=w.add(u(E)))}return w}var p=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);b+=(0<=w?w:4294967296+w)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(k(this))return"-"+D(this).toString(b);for(var v=u(Math.pow(b,6)),y=this,w="";;){var R=x(y,v).g;y=B(y,R.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,S(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=B(this,b),k(b)?-1:S(b)?0:1};function D(b){for(var v=b.g.length,y=[],w=0;w<v;w++)y[w]=~b.g[w];return new o(y,~b.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0,R=0;R<=v;R++){var A=w+(this.i(R)&65535)+(b.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);w=E>>>16,A&=65535,E&=65535,y[R]=E<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function B(b,v){return b.add(D(v))}t.j=function(b){if(S(this)||S(b))return p;if(k(this))return k(b)?D(this).j(D(b)):D(D(this).j(b));if(k(b))return D(this.j(D(b)));if(0>this.l(m)&&0>b.l(m))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<b.g.length;R++){var A=this.i(w)>>>16,E=this.i(w)&65535,be=b.i(R)>>>16,He=b.i(R)&65535;y[2*w+2*R]+=E*He,O(y,2*w+2*R),y[2*w+2*R+1]+=A*He,O(y,2*w+2*R+1),y[2*w+2*R+1]+=E*be,O(y,2*w+2*R+1),y[2*w+2*R+2]+=A*be,O(y,2*w+2*R+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new o(y,0)};function O(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function V(b,v){this.g=b,this.h=v}function x(b,v){if(S(v))throw Error("division by zero");if(S(b))return new V(p,p);if(k(b))return v=x(D(b),v),new V(D(v.g),D(v.h));if(k(v))return v=x(b,D(v)),new V(D(v.g),v.h);if(30<b.g.length){if(k(b)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,w=v;0>=w.l(b);)y=z(y),w=z(w);var R=ee(y,1),A=ee(w,1);for(w=ee(w,2),y=ee(y,2);!S(w);){var E=A.add(w);0>=E.l(b)&&(R=R.add(y),A=E),w=ee(w,1),y=ee(y,1)}return v=B(b,R.j(v)),new V(R,v)}for(R=p;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=u(y),E=A.j(v);k(E)||0<E.l(b);)y-=w,A=u(y),E=A.j(v);S(A)&&(A=g),R=R.add(A),b=B(b,E)}return new V(R,b)}t.A=function(b){return x(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&b.i(w);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|b.i(w);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^b.i(w);return new o(y,this.h^b.h)};function z(b){for(var v=b.g.length+1,y=[],w=0;w<v;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(y,b.h)}function ee(b,v){var y=v>>5;v%=32;for(var w=b.g.length-y,R=[],A=0;A<w;A++)R[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,x_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ar=o}).apply(typeof Bd<"u"?Bd:typeof self<"u"?self:typeof window<"u"?window:{});var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var M_,ci,L_,Go,jl,F_,U_,j_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var C=a[_];if(!(C in d))break e;d=d[C]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,_=!1,C={next:function(){if(!_&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,_),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function m(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,C,N){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return h.prototype[C].apply(_,W)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(l(_)){const C=a.length||0,N=_.length||0;a.length=C+N;for(let W=0;W<N;W++)a[C+W]=_[W]}else a.push(_)}}class B{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var z=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function ee(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function b(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let d,_;for(let C=1;C<arguments.length;C++){_=arguments[C];for(d in _)a[d]=_[d];for(let N=0;N<y.length;N++)d=y[N],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function E(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class be{constructor(){this.h=this.g=null}add(h,d){const _=He.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var He=new B(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ge=!1,Dt=new be,Wt=()=>{const a=c.Promise.resolve(void 0);ue=()=>{a.then(Lt)}};var Lt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){A(d)}var h=He;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var xn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function tn(a,h){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{x(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&tn.aa.h.call(this)}}S(tn,Fe);var Rt={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,h,d,_,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=C,this.key=++Y,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ie(a){this.src=a,this.g={},this.h=0}Ie.prototype.add=function(a,h,d,_,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=I(a,h,_,C);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new Q(h,this.src,N,!!_,C),h.fa=d,a.push(h)),h};function T(a,h){var d=h.type;if(d in a.g){var _=a.g[d],C=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(_,C,1),N&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,h,d,_){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==_)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function $(a,h,d,_,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)$(a,h[N],d,_,C);return null}return d=ce(d),a&&a[M]?a.K(h,d,u(_)?!!_.capture:!1,C):U(a,h,d,!1,_,C)}function U(a,h,d,_,C,N){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,ke=J(a);if(ke||(a[P]=ke=new Ie(a)),d=ke.add(h,d,_,W,N),d.proxy)return d;if(_=G(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)xn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),_,C);else if(a.attachEvent)a.attachEvent(H(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,_,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)K(a,h[N],d,_,C);else _=u(_)?!!_.capture:!!_,d=ce(d),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=I(N,d,_,C),-1<d&&(te(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,d,_,C)),(d=-1<a?h[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])T(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(H(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=J(h))?(T(d,a),d.h==0&&(d.src=null,h[P]=null)):te(a)}}}function H(a){return a in L?L[a]:L[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new tn(h,this);var d=a.listener,_=a.ha||a.src;a.fa&&q(a),a=d.call(_,h)}return a}function J(a){return a=a[P],a instanceof Ie?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function oe(){Le.call(this),this.i=new Ie(this),this.M=this,this.F=null}S(oe,Le),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(a,h,d,_){K(this,a,h,d,_)};function pe(a,h){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Fe(h,a);else if(h instanceof Fe)h.target=h.target||a;else{var C=h;h=new Fe(_,a),w(h,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];C=Ee(W,_,!0,h)&&C}if(W=h.g=a,C=Ee(W,_,!0,h)&&C,C=Ee(W,_,!1,h)&&C,d)for(N=0;N<d.length;N++)W=h.g=d[N],C=Ee(W,_,!1,h)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],_=0;_<d.length;_++)te(d[_]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},oe.prototype.L=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function Ee(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var ke=W.listener,nt=W.ha||W.src;W.fa&&T(a.i,W),C=ke.call(nt,_)!==!1&&C}}return C&&!_.defaultPrevented}function ct(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function et(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends Le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(a){Le.call(this),this.h=a,this.g={}}S(lt,Le);var Mn=[];function js(a){ee(a.g,function(h,d){this.g.hasOwnProperty(d)&&q(h)},a),a.g={}}lt.prototype.N=function(){lt.aa.N.call(this),js(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=c.JSON.stringify,Ut=c.JSON.parse,lo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ac(){}Ac.prototype.h=null;function Ch(a){return a.h||(a.h=a.i())}function kh(){}var $s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bc(){Fe.call(this,"d")}S(bc,Fe);function Rc(){Fe.call(this,"c")}S(Rc,Fe);var br={},Dh=null;function uo(){return Dh=Dh||new oe}br.La="serverreachability";function Oh(a){Fe.call(this,br.La,a)}S(Oh,Fe);function Bs(a){const h=uo();pe(h,new Oh(h))}br.STAT_EVENT="statevent";function Vh(a,h){Fe.call(this,br.STAT_EVENT,a),this.stat=h}S(Vh,Fe);function vt(a){const h=uo();pe(h,new Vh(h,a))}br.Ma="timingevent";function Nh(a,h){Fe.call(this,br.Ma,a),this.size=h}S(Nh,Fe);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function Pv(a,h,d,_,C,N){a.info(function(){if(a.g)if(N)for(var W="",ke=N.split("&"),nt=0;nt<ke.length;nt++){var Ae=ke[nt].split("=");if(1<Ae.length){var ut=Ae[0];Ae=Ae[1];var ht=ut.split("_");W=2<=ht.length&&ht[1]=="type"?W+(ut+"="+Ae+"&"):W+(ut+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+_+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function Cv(a,h,d,_,C,N,W){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+W})}function Gr(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Dv(a,d)+(_?" "+_:"")})}function kv(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function Dv(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var C=_[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return tt(d)}catch{return h}}var ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sc;function fo(){}S(fo,Ac),fo.prototype.g=function(){return new XMLHttpRequest},fo.prototype.i=function(){return{}},Sc=new fo;function Ln(a,h,d,_){this.j=a,this.i=h,this.l=d,this.R=_||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mh}function Mh(){this.i=null,this.g="",this.h=!1}var Lh={},Pc={};function Cc(a,h,d){a.L=1,a.v=_o(gn(h)),a.m=d,a.P=!0,Fh(a,null)}function Fh(a,h){a.F=Date.now(),po(a),a.A=gn(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Xh(d.i,"t",_),a.C=0,d=a.j.J,a.h=new Mh,a.g=_f(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ft(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,_=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Mn[0]=C.toString()),C=Mn);for(var N=0;N<C.length;N++){var W=$(d,C[N],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Bs(),Pv(a.i,a.u,a.A,a.l,a.R,a.m)}Ln.prototype.ca=function(a){a=a.target;const h=this.M;h&&mn(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const ht=mn(this.g);var h=this.g.Ba();const Yr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||of(this.g)))){this.J||ht!=4||h==7||(h==8||0>=Yr?Bs(3):Bs(2)),kc(this);var d=this.g.Z();this.X=d;t:if(Uh(this)){var _=of(this.g);a="";var C=_.length,N=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),Ks(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==C-1)});_.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Cv(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ke)){var Ae=ke;break t}}Ae=null}if(d=Ae)Gr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,d);else{this.o=!1,this.s=3,vt(12),Rr(this),Ks(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<W.length;)if(zt=Ov(this,W),zt==Pc){ht==4&&(this.s=4,vt(14),d=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Lh){this.s=4,vt(15),Gr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Gr(this.i,this.l,zt,null),Dc(this,zt);if(Uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||W.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)Gr(this.i,this.l,W,"[Invalid Chunked Response]"),Rr(this),Ks(this);else if(0<W.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Lc(ut),ut.M=!0,vt(11))}}else Gr(this.i,this.l,W,null),Dc(this,W);ht==4&&Rr(this),this.o&&!this.J&&(ht==4?df(this.j,this):(this.o=!1,po(this)))}else Qv(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Rr(this),Ks(this)}}}catch{}finally{}};function Uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ov(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?Pc:(d=Number(h.substring(d,_)),isNaN(d)?Lh:(_+=1,_+d>h.length?Pc:(h=h.slice(_,_+d),a.C=_+d,h)))}Ln.prototype.cancel=function(){this.J=!0,Rr(this)};function po(a){a.S=Date.now()+a.I,jh(a,a.I)}function jh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hs(g(a.ba,a),h)}function kc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kv(this.i,this.A),this.L!=2&&(Bs(),vt(17)),Rr(this),this.s=2,Ks(this)):jh(this,this.S-a)};function Ks(a){a.j.G==0||a.J||df(a.j,a)}function Rr(a){kc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,js(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Oc(d.h,a))){if(!a.K&&Oc(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var C=_;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Io(d),To(d);else break e;Mc(d),vt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Hs(g(d.Za,d),6e3));if(1>=Hh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Pr(d,11)}else if((a.K||d.g==a)&&Io(d),!O(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Ae=C[h];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const ut=Ae[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Ae[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const Yr=Ae[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(_=1.5*Yr,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const zt=a.g;if(zt){const bo=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bo){var N=_.h;N.g||bo.indexOf("spdy")==-1&&bo.indexOf("quic")==-1&&bo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Vc(N,N.h),N.h=null))}if(_.D){const Fc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fc&&(_.ya=Fc,Ne(_.I,_.D,Fc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var W=a;if(_.qa=mf(_,_.J?_.ia:null,_.W),W.K){qh(_.h,W);var ke=W,nt=_.L;nt&&(ke.I=nt),ke.B&&(kc(ke),po(ke)),_.g=W}else hf(_);0<d.i.length&&wo(d)}else Ae[0]!="stop"&&Ae[0]!="close"||Pr(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Pr(d,7):xc(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}Bs(4)}catch{}}var Vv=class{constructor(a,h){this.g=a,this.map=h}};function $h(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hh(a){return a.h?1:a.g?a.g.size:0}function Oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vc(a,h){a.g?a.g.add(h):a.h=h}function qh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}$h.prototype.cancel=function(){if(this.i=Kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function Nv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,_=0;_<d;_++)h.push(a[_]);return h}h=[],d=0;for(_ in a)h[d++]=a[_];return h}function xv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const _ in a)h[d++]=_;return h}}}function Wh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=xv(a),_=Nv(a),C=_.length,N=0;N<C;N++)h.call(void 0,_[N],d&&d[N],a)}var zh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),C=null;if(0<=_){var N=a[d].substring(0,_);C=a[d].substring(_+1)}else N=a[d];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,go(this,a.j),this.o=a.o,this.g=a.g,mo(this,a.s),this.l=a.l;var h=a.i,d=new Gs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Gh(this,d),this.m=a.m}else a&&(h=String(a).match(zh))?(this.h=!1,go(this,h[1]||"",!0),this.o=Ws(h[2]||""),this.g=Ws(h[3]||"",!0),mo(this,h[4]),this.l=Ws(h[5]||"",!0),Gh(this,h[6]||"",!0),this.m=Ws(h[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}Sr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zs(h,Qh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,Qh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zs(d,d.charAt(0)=="/"?Uv:Fv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zs(d,$v)),a.join("")};function gn(a){return new Sr(a)}function go(a,h,d){a.j=d?Ws(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function mo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Gh(a,h,d){h instanceof Gs?(a.i=h,Bv(a.i,a.h)):(d||(h=zs(h,jv)),a.i=new Gs(h,a.h))}function Ne(a,h,d){a.i.set(h,d)}function _o(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Lv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qh=/[#\/\?@]/g,Fv=/[#\?:]/g,Uv=/[#\?]/g,jv=/[#\?@]/g,$v=/#/g;function Gs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&Mv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Gs.prototype,t.add=function(a,h){Fn(this),this.i=null,a=Qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Jh(a,h){Fn(a),h=Qr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Yh(a,h){return Fn(a),h=Qr(a,h),a.g.has(h)}t.forEach=function(a,h){Fn(this),this.g.forEach(function(d,_){d.forEach(function(C){a.call(h,C,_,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let _=0;_<h.length;_++){const C=a[_];for(let N=0;N<C.length;N++)d.push(h[_])}return d},t.V=function(a){Fn(this);let h=[];if(typeof a=="string")Yh(this,a)&&(h=h.concat(this.g.get(Qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Fn(this),this.i=null,a=Qr(this,a),Yh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Xh(a,h,d){Jh(a,h),0<d.length&&(a.i=null,a.g.set(Qr(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var _=h[d];const N=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var C=N;W[_]!==""&&(C+="="+encodeURIComponent(String(W[_]))),a.push(C)}}return this.i=a.join("&")};function Qr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Bv(a,h){h&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,_){var C=_.toLowerCase();_!=C&&(Jh(this,_),Xh(this,C,d))},a)),a.j=h}function Hv(a,h){const d=new qs;if(c.Image){const _=new Image;_.onload=m(Un,d,"TestLoadImage: loaded",!0,h,_),_.onerror=m(Un,d,"TestLoadImage: error",!1,h,_),_.onabort=m(Un,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=m(Un,d,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function qv(a,h){const d=new qs,_=new AbortController,C=setTimeout(()=>{_.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(C),N.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,_,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),_(d)}catch{}}function Kv(){this.g=new lo}function Wv(a,h,d){const _=d||"";try{Wh(a,function(C,N){let W=C;u(C)&&(W=tt(C)),h.push(_+N+"="+encodeURIComponent(W))})}catch(C){throw h.push(_+"type="+encodeURIComponent("_badmap")),C}}function yo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(yo,Ac),yo.prototype.g=function(){return new vo(this.l,this.j)},yo.prototype.i=function(a){return function(){return a}}({});function vo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(vo,oe),t=vo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Js(this),this.readyState==3&&Zh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ef(a){let h="";return ee(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function Nc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=ef(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ne(a,h,d))}function $e(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S($e,oe);var zv=/^https?$/i,Gv=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sc.g(),this.v=this.o?Ch(this.o):Ch(Sc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){tf(this,N);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var C in _)d.set(C,_[C]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())d.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Gv,h,void 0))||_||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){tf(this,N)}};function tf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,nf(a),Eo(a)}function nf(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),Eo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Eo(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rf(this):this.bb())},t.bb=function(){rf(this)};function rf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)ct(a.Ea,0,a);else if(pe(a,"readystatechange"),mn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=W===0){var C=String(a.D).match(zh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),_=!zv.test(C?C.toLowerCase():"")}d=_}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var N=2<mn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",nf(a)}}finally{Eo(a)}}}}function Eo(a,h){if(a.g){sf(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=_}catch{}}}function sf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function of(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qv(a){const h={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(O(a[_]))continue;var d=R(a[_]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}b(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function af(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ys("baseRetryDelayMs",5e3,a),this.cb=Ys("retryDelaySeedMs",1e4,a),this.Wa=Ys("forwardChannelMaxRetries",2,a),this.wa=Ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $h(a&&a.concurrentRequestLimit),this.Da=new Kv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=af.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,_){vt(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=mf(this,null,this.W),wo(this)};function xc(a){if(cf(a),a.G==3){var h=a.U++,d=gn(a.I);if(Ne(d,"SID",a.K),Ne(d,"RID",h),Ne(d,"TYPE","terminate"),Xs(a,d),h=new Ln(a,a.j,h),h.L=2,h.v=_o(gn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=_f(h.j,null),h.g.ea(h.v)),h.F=Date.now(),po(h)}gf(a)}function To(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function cf(a){To(a),a.u&&(c.clearTimeout(a.u),a.u=null),Io(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function wo(a){if(!Bh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ue||Wt(),ge||(ue(),ge=!0),Dt.add(h,a),a.B=0}}function Jv(a,h){return Hh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hs(g(a.Ga,a,h),pf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Ln(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=uf(this,C,h),d=gn(this.I),Ne(d,"RID",a),Ne(d,"CVER",22),this.D&&Ne(d,"X-HTTP-Session-Id",this.D),Xs(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(ef(N)))+"&"+h:this.m&&Nc(d,this.m,N)),Vc(this.h,C),this.Ua&&Ne(d,"TYPE","init"),this.P?(Ne(d,"$req",h),Ne(d,"SID","null"),C.T=!0,Cc(C,d,null)):Cc(C,d,h),this.G=2}}else this.G==3&&(a?lf(this,a):this.i.length==0||Bh(this.h)||lf(this))};function lf(a,h){var d;h?d=h.l:d=a.U++;const _=gn(a.I);Ne(_,"SID",a.K),Ne(_,"RID",d),Ne(_,"AID",a.T),Xs(a,_),a.m&&a.o&&Nc(_,a.m,a.o),d=new Ln(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=uf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,d),Cc(d,_,h)}function Xs(a,h){a.H&&ee(a.H,function(d,_){Ne(h,_,d)}),a.l&&Wh({},function(d,_){Ne(h,_,d)})}function uf(a,h,d){d=Math.min(a.i.length,d);var _=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=C[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let ke=!0;for(let nt=0;nt<d;nt++){let Ae=C[nt].g;const ut=C[nt].map;if(Ae-=N,0>Ae)N=Math.max(0,C[nt].g-100),ke=!1;else try{Wv(ut,W,"req"+Ae+"_")}catch{_&&_(ut)}}if(ke){_=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,_}function hf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ue||Wt(),ge||(ue(),ge=!0),Dt.add(h,a),a.v=0}}function Mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hs(g(a.Fa,a),pf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),To(this),ff(this))};function Lc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ff(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);Ne(h,"RID","rpc"),Ne(h,"SID",a.K),Ne(h,"AID",a.T),Ne(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(h,"TO",a.ja),Ne(h,"TYPE","xmlhttp"),Xs(a,h),a.m&&a.o&&Nc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=_o(gn(h)),d.m=null,d.P=!0,Fh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,To(this),Mc(this),vt(19))};function Io(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function df(a,h){var d=null;if(a.g==h){Io(a),Lc(a),a.g=null;var _=2}else if(Oc(a.h,h))d=h.D,qh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;_=uo(),pe(_,new Nh(_,d)),wo(a)}else hf(a);else if(C=h.s,C==3||C==0&&0<h.X||!(_==1&&Jv(a,h)||_==2&&Mc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function pf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Pr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),_=a.Xa;const C=!_;_=new Sr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||go(_,"https"),_o(_),C?Hv(_.toString(),d):qv(_.toString(),d)}else vt(2);a.G=0,a.l&&a.l.sa(h),gf(a),cf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function gf(a){if(a.G=0,a.ka=[],a.l){const h=Kh(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function mf(a,h,d){var _=d instanceof Sr?gn(d):new Sr(d);if(_.g!="")h&&(_.g=h+"."+_.g),mo(_,_.s);else{var C=c.location;_=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new Sr(null);_&&go(N,_),h&&(N.g=h),C&&mo(N,C),d&&(N.l=d),_=N}return d=a.D,h=a.ya,d&&h&&Ne(_,d,h),Ne(_,"VER",a.la),Xs(a,_),_}function _f(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new yo({eb:d})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yf(){}t=yf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ao(){}Ao.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){oe.call(this),this.g=new af(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Jr(this)}S(Ot,oe),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){xc(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tt(a),a=d);h.i.push(new Vv(h.Ya++,a)),h.G==3&&wo(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,Ot.aa.N.call(this)};function vf(a){bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(vf,bc);function Ef(){Rc.call(this),this.status=1}S(Ef,Rc);function Jr(a){this.g=a}S(Jr,yf),Jr.prototype.ua=function(){pe(this.g,"a")},Jr.prototype.ta=function(a){pe(this.g,new vf(a))},Jr.prototype.sa=function(a){pe(this.g,new Ef)},Jr.prototype.ra=function(){pe(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,j_=function(){return new Ao},U_=function(){return uo()},F_=br,jl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,Go=ho,xh.COMPLETE="complete",L_=xh,kh.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",oe.prototype.listen=oe.prototype.K,ci=kh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,M_=$e}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});const Hd="@firebase/firestore",qd="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Pu("@firebase/firestore");function ns(){return Hr.logLevel}function X(t,...e){if(Hr.logLevel<=me.DEBUG){const n=e.map($u);Hr.debug(`Firestore (${Ns}): ${t}`,...n)}}function kn(t,...e){if(Hr.logLevel<=me.ERROR){const n=e.map($u);Hr.error(`Firestore (${Ns}): ${t}`,...n)}}function Ts(t,...e){if(Hr.logLevel<=me.WARN){const n=e.map($u);Hr.warn(`Firestore (${Ns}): ${t}`,...n)}}function $u(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Pe(t,e){t||le()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class SR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PR{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new $_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new dt(e)}}class CR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class kR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DR{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ht(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Kd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new Kd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=OR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=-62135596800,zd=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zd);return new Qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wd)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zd}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Qe(0,0))}static max(){return new he(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),s=sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class xe extends sn{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const VR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends sn{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return VR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gd}static keyField(){return new ot([Gd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(xe.fromString(e))}static fromName(e){return new se(xe.fromString(e).popFirst(5))}static empty(){return new se(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new xe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=-1;function NR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new hr(s,se.empty(),e)}function xR(t){return new hr(t.readTime,t.key,Ui)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(he.min(),se.empty(),Ui)}static max(){return new hr(he.max(),se.empty(),Ui)}}function MR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==LR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function UR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ec.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=-1;function tc(t){return t==null}function Ea(t){return t===0&&1/t==-1/0}function jR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="";function $R(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qd(e)),e=BR(t.get(n),e);return Qd(e)}function BR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case H_:n+="";break;default:n+=i}}return n}function Qd(t){return t+H_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yd(this.data.getIterator())}getIteratorFrom(e){return new Yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Je(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new K_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const HR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=HR.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="server_timestamp",z_="__type__",G_="__previous_value__",Q_="__local_write_time__";function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[z_])===null||n===void 0?void 0:n.stringValue)===W_}function nc(t){const e=t.mapValue.fields[G_];return Hu(e)?nc(e):e}function ji(t){const e=fr(t.mapValue.fields[Q_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}const Ta="(default)";class $i{constructor(e,n){this.projectId=e,this.database=n||Ta}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database===Ta}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="__type__",KR="__max__",xo={mapValue:{}},Y_="__vector__",wa="value";function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:zR(t)?9007199254740991:WR(t)?10:11:le()}function pn(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),c=fr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return dr(s.bytesValue).isEqual(dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?Ea(o)===Ea(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Jd(o)!==Jd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0}(t,e);default:return le()}}function Bi(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(ji(t),ji(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const c=dr(i),l=dr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ve(c[u],l[u]);if(f!==0)return f}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(qe(i.latitude),qe(o.latitude));return c!==0?c:ve(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},g=o.fields||{},m=(c=p[wa])===null||c===void 0?void 0:c.arrayValue,S=(l=g[wa])===null||l===void 0?void 0:l.arrayValue,k=ve(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Zd(m,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=ve(l[p],f[p]);if(g!==0)return g;const m=Is(c[l[p]],u[f[p]]);if(m!==0)return m}return ve(l.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=fr(t),r=fr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Zd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Is(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function As(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$l(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$l(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Qo(t){switch(pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nc(t);return e?16+Qo(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return wr(r.fields,(i,o)=>{s+=i.length+Qo(o)}),s}(t.mapValue);default:throw le()}}function ep(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bl(t){return!!t&&"integerValue"in t}function qu(t){return!!t&&"arrayValue"in t}function tp(t){return!!t&&"nullValue"in t}function np(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jo(t){return!!t&&"mapValue"in t}function WR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[J_])===null||n===void 0?void 0:n.stringValue)===Y_}function wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===KR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=wi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Jo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(wi(this.value))}}function X_(t){const e=[];return wr(t.fields,(n,r)=>{const s=new ot([n]);if(Jo(r)){const i=X_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,he.min(),he.min(),he.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,he.min(),he.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,he.min(),he.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.position=e,this.inclusive=n}}function rp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n="asc"){this.field=e,this.dir=n}}function GR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{}class Ge extends Z_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JR(e,n,r):n==="array-contains"?new ZR(e,r):n==="in"?new eS(e,r):n==="not-in"?new tS(e,r):n==="array-contains-any"?new nS(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YR(e,r):new XR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends Z_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Zt(e,n)}matches(e){return ey(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ey(t){return t.op==="and"}function ty(t){return QR(t)&&ey(t)}function QR(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Hl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+As(t.value);if(ty(t))return t.filters.map(e=>Hl(e)).join(",");{const e=t.filters.map(n=>Hl(n)).join(",");return`${t.op}(${e})`}}function ny(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&ny(o,s.filters[c]),!0):!1}(t,e):void le()}function ry(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(ry).join(" ,")+"}"}(t):"Filter"}class JR extends Ge{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class YR extends Ge{constructor(e,n){super(e,"in",n),this.keys=sy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=sy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class ZR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&Bi(n.arrayValue,this.value)}}class eS extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class tS extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bi(this.value.arrayValue,n)}}class nS extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function ip(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rS(t,e,n,r,s,i,o)}function Ku(t){const e=de(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.le=n}return e.le}function Wu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ny(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sp(t.startAt,e.startAt)&&sp(t.endAt,e.endAt)}function ql(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function sS(t,e,n,r,s,i,o,c){return new Ls(t,e,n,r,s,i,o,c)}function rc(t){return new Ls(t)}function op(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iy(t){return t.collectionGroup!==null}function Ii(t){const e=de(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Je(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Hi(i,r))}),n.has(ot.keyField().canonicalString())||e.he.push(new Hi(ot.keyField(),r))}return e.he}function hn(t){const e=de(t);return e.Pe||(e.Pe=iS(e,Ii(t))),e.Pe}function iS(t,e){if(t.limitType==="F")return ip(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hi(s.field,i)});const n=t.endAt?new Ia(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ia(t.startAt.position,t.startAt.inclusive):null;return ip(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kl(t,e){const n=t.filters.concat([e]);return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wl(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Wu(hn(t),hn(e))&&t.limitType===e.limitType}function oy(t){return`${Ku(hn(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ry(s)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>As(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>As(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=rp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ii(r),s)||r.endAt&&!function(o,c,l){const u=rp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ii(r),s))}(t,e)}function oS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ay(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=aS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aS(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Is(l,u):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new je(se.comparator);function Dn(){return cS}const cy=new je(se.comparator);function li(...t){let e=cy;for(const n of t)e=e.insert(n.key,n);return e}function ly(t){let e=cy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return Ai()}function uy(){return Ai()}function Ai(){return new Wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const lS=new je(se.comparator),uS=new Je(se.comparator);function _e(...t){let e=uS;for(const n of t)e=e.add(n);return e}const hS=new Je(ve);function fS(){return hS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function hy(t){return{integerValue:""+t}}function dS(t,e){return jR(e)?hy(e):zu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this._=void 0}}function pS(t,e,n){return t instanceof qi?function(s,i){const o={fields:{[z_]:{stringValue:W_},[Q_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hu(i)&&(i=nc(i)),i&&(o.fields[G_]=i),{mapValue:o}}(n,e):t instanceof bs?dy(t,e):t instanceof Ki?py(t,e):function(s,i){const o=fy(s,i),c=ap(o)+ap(s.Ie);return Bl(o)&&Bl(s.Ie)?hy(c):zu(s.serializer,c)}(t,e)}function gS(t,e,n){return t instanceof bs?dy(t,e):t instanceof Ki?py(t,e):n}function fy(t,e){return t instanceof Aa?function(r){return Bl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qi extends oc{}class bs extends oc{constructor(e){super(),this.elements=e}}function dy(t,e){const n=gy(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ki extends oc{constructor(e){super(),this.elements=e}}function py(t,e){let n=gy(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class Aa extends oc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ap(t){return qe(t.integerValue||t.doubleValue)}function gy(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.field=e,this.transform=n}}function mS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof bs&&s instanceof bs||r instanceof Ki&&s instanceof Ki?ws(r.elements,s.elements,pn):r instanceof Aa&&s instanceof Aa?pn(r.Ie,s.Ie):r instanceof qi&&s instanceof qi}(t.transform,e.transform)}class _S{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function _y(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vy(t.key,Jt.none()):new ro(t.key,t.data,Jt.none());{const n=t.data,r=Ct.empty();let s=new Je(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ir(t.key,r,new Nt(s.toArray()),Jt.none())}}function yS(t,e,n){t instanceof ro?function(s,i,o){const c=s.value.clone(),l=lp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(s,i,o){if(!Yo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=lp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(yy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bi(t,e,n,r){return t instanceof ro?function(i,o,c,l){if(!Yo(i.precondition,o))return c;const u=i.value.clone(),f=up(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(i,o,c,l){if(!Yo(i.precondition,o))return c;const u=up(i.fieldTransforms,l,o),f=o.data;return f.setAll(yy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function vS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fy(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function cp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,(i,o)=>mS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends ac{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends ac{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lp(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,gS(o,c,n[s]))}return r}function up(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,pS(i,o,e))}return r}class vy extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ES extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=_y(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>cp(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>cp(n,r))}}class Gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return lS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Te;function AS(t){switch(t){case F.OK:return le();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return le()}}function Ey(t){if(t===void 0)return kn("GRPC error has no .code"),F.UNKNOWN;switch(t){case ze.OK:return F.OK;case ze.CANCELLED:return F.CANCELLED;case ze.UNKNOWN:return F.UNKNOWN;case ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ze.INTERNAL:return F.INTERNAL;case ze.UNAVAILABLE:return F.UNAVAILABLE;case ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ze.NOT_FOUND:return F.NOT_FOUND;case ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ze.ABORTED:return F.ABORTED;case ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ze.DATA_LOSS:return F.DATA_LOSS;default:return le()}}(Te=ze||(ze={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new ar([4294967295,4294967295],0);function hp(t){const e=bS().encode(t),n=new x_;return n.update(e),new Uint8Array(n.digest())}function fp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([n,r],0),new ar([s,i],0)]}class Qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ui(`Invalid padding: ${n}`);if(r<0)throw new ui(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ui(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ui(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ar.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(ar.fromNumber(r)));return s.compare(RS)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=hp(e),[r,s]=fp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const n=hp(e),[r,s]=fp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(he.min(),s,new je(ve),Dn(),_e())}}class so{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new so(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class Ty{constructor(e,n){this.targetId=e,this.ge=n}}class wy{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dp{constructor(){this.pe=0,this.ye=pp(),this.we=at.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=_e(),n=_e(),r=_e();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new so(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=pp()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Pe(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class SS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Dn(),this.$e=Mo(),this.Ke=Mo(),this.Ue=new je(ve)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(ql(i))if(r===0){const o=new se(i.path);this.ze(n,o,mt.newNoDocument(o,he.min()))}else Pe(r===1);else{const o=this.et(n);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=dr(r).toUint8Array()}catch(l){if(l instanceof K_)return Ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Qu(o,s,i)}catch(l){return Ts(l instanceof ui?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&ql(c.target)){const l=new se(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,mt.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=_e();this.Ke.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new cc(e,n,this.Ue,this.Qe,r);return this.Qe=Dn(),this.$e=Mo(),this.Ke=Mo(),this.Ue=new je(ve),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new dp,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new Je(ve),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Je(ve),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new dp),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Mo(){return new je(se.comparator)}function pp(){return new je(se.comparator)}const PS={asc:"ASCENDING",desc:"DESCENDING"},CS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kS={and:"AND",or:"OR"};class DS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zl(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function ba(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OS(t,e){return ba(t,e.toTimestamp())}function fn(t){return Pe(!!t),he.fromTimestamp(function(n){const r=fr(n);return new Qe(r.seconds,r.nanos)}(t))}function Ju(t,e){return Gl(t,e).canonicalString()}function Gl(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ay(t){const e=xe.fromString(t);return Pe(Cy(e)),e}function Ql(t,e){return Ju(t.databaseId,e.path)}function ol(t,e){const n=Ay(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Ry(n))}function by(t,e){return Ju(t.databaseId,e)}function VS(t){const e=Ay(t);return e.length===4?xe.emptyPath():Ry(e)}function Jl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ry(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gp(t,e,n){return{name:Ql(t,e),fields:n.value.mapValue.fields}}function NS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?F.UNKNOWN:Ey(u.code);return new Z(f,u.message||"")}(o);n=new wy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ol(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):he.min(),c=new Ct({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Xo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ol(t,r.document),i=r.readTime?fn(r.readTime):he.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Xo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ol(t,r.document),i=r.removedTargetIds||[];n=new Xo([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new IS(s,i),c=r.targetId;n=new Ty(c,o)}}return n}function xS(t,e){let n;if(e instanceof ro)n={update:gp(t,e.key,e.value)};else if(e instanceof vy)n={delete:Ql(t,e.key)};else if(e instanceof Ir)n={update:gp(t,e.key,e.data),updateMask:qS(e.fieldMask)};else{if(!(e instanceof ES))return le();n={verify:Ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Aa)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:OS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function MS(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(he.min())&&(o=fn(i)),new _S(o,s.transformResults||[])}(n,e))):[]}function LS(t,e){return{documents:[by(t,e.path)]}}function FS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=by(t,s);const i=function(u){if(u.length!==0)return Py(Zt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:ss(g.field),direction:$S(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=zl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function US(t){let e=VS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Sy(p);return g instanceof Zt&&ty(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Hi(is(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,tc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,m=p.values||[];return new Ia(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,m=p.values||[];return new Ia(m,g)}(n.endAt)),sS(e,s,o,i,c,"F",l,u)}function jS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>Sy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function $S(t){return PS[t]}function BS(t){return CS[t]}function HS(t){return kS[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return ot.fromServerFormat(t.fieldPath)}function Py(t){return t instanceof Ge?function(n){if(n.op==="=="){if(np(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(tp(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(np(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(tp(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:BS(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>Py(s));return r.length===1?r[0]:{compositeFilter:{op:HS(n.op),filters:r}}}(t):le()}function qS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.Tt=e}}function WS(t){const e=US({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.Tn=new GS}addToCollectionParentIndex(e,n){return this.Tn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(hr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class GS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ky=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(ky,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Rs(0)}static Un(){return new Rs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="LruGarbageCollector",QS=1048576;function yp([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class JS{constructor(e){this.Hn=e,this.buffer=new Je(yp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(_p,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?X(_p,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.er(3e5)})}}class XS{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(ec.ae);const r=new JS(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(mp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mp):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ns()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function ZS(t,e){return new XS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.changes=new Wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bi(r.mutation,s,Nt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=li();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Dn();const o=Ai(),c=function(){return Ai()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Ir)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),bi(f.mutation,u,f.mutation.getFieldMask(),Qe.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new tP(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ai();let s=new je((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Nt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=uy();f.forEach(g=>{if(!i.has(g)){const m=_y(n.get(g),r.get(g));m!==null&&p.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(xr());let c=Ui,l=i;return o.next(u=>j.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(f=>({batchId:c,changes:ly(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=li();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=li();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,l=>{const u=function(p,g){return new Ls(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let c=li();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&bi(f.mutation,u,Nt.empty(),Qe.now()),ic(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return j.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:WS(s.bundledQuery),readTime:fn(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.overlays=new je(se.comparator),this.Rr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=xr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=xr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return j.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wS(n,r));let i=this.Rr.get(n);i===void 0&&(i=_e(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Vr=new Je(Xe.mr),this.gr=new Je(Xe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Xe(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new se(new xe([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new se(new xe([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=_e();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return se.comparator(e.key,n.key)||ve(e.Cr,n.Cr)}static pr(e,n){return ve(e.Cr,n.Cr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Je(Xe.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new Xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Bu:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ve);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new se(i),0);let c=new Je(ve);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Cr)),!0)},o),j.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Mr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.kr=e,this.docs=function(){return new je(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MR(xR(f),r)<=0||(s.has(f.key)||ic(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}qr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cP(this)}getSize(e){return j.resolve(this.size)}}class cP extends eP{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.persistence=e,this.Qr=new Wr(n=>Ku(n),Wu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Yu,this.targetCount=0,this.Ur=Rs.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),j.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.zn(n),j.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ec(0),this.zr=!1,this.zr=!0,this.jr=new iP,this.referenceDelegate=e(this),this.Hr=new lP(this),this.indexManager=new zS,this.remoteDocumentCache=function(s){return new aP(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new KS(n),this.Yr=new rP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new oP(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new uP(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class uP extends FR{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.ti=new Yu,this.ni=null}static ri(e){return new Xu(e)}get ii(){if(this.ni)return this.ni;throw le()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),j.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const s=se.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return j.or([()=>j.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Ra{constructor(e,n){this.persistence=e,this.oi=new Wr(r=>$R(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ZS(this,n)}static ri(e,n){return new Ra(e,n)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return j.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qo(e.data.value)),n}ar(e,n,r){return j.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return KI()?8:UR(yt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hP;return this._s(e,n,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,o,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(ns()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(ns()<=me.DEBUG&&X("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(ns()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):j.resolve())}rs(e,n){if(op(n))return j.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Wl(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,c);return this.ls(n,u,o,l.readTime)?this.rs(e,Wl(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,s){return op(n)||s.isEqual(he.min())?j.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?j.resolve(null):(ns()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.hs(e,o,n,NR(s,Ui)).next(c=>c))})}cs(e,n){let r=new Je(ay(e));return n.forEach((s,i)=>{ic(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return ns()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",rs(n)),this.ns.getDocumentsMatchingQuery(e,n,hr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="LocalStore",dP=3e8;class pP{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new je(ve),this.Is=new Wr(i=>Ku(i),Wu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nP(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function gP(t,e,n,r){return new pP(t,e,n,r)}async function Oy(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:c}))})})}function mP(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,g=p.keys();let m=j.resolve();return g.forEach(S=>{m=m.next(()=>f.getEntry(l,S)).next(k=>{const D=u.docVersions.get(S);Pe(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),m.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vy(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function _P(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,p)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?m=m.withResumeToken(at.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,r)),s=s.insert(p,m),function(k,D,B){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=dP?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,m,f)&&c.push(n.Hr.updateTargetData(i,m))});let l=Dn(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(yP(i,o,e.documentUpdates).next(f=>{l=f.Vs,u=f.fs})),!r.isEqual(he.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ts=s,i))}function yP(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(eh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function vP(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EP(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=de(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ms(o))throw o;X(eh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function vp(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=de(l),g=p.Is.get(f);return g!==void 0?j.resolve(p.Ts.get(g)):p.Hr.getTargetData(u,f)}(r,o,hn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(c=>(TP(r,oS(e),c),{documents:c,gs:i})))}function TP(t,e,n){let r=t.Es.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Ep{constructor(){this.activeTargetIds=fS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wP{constructor(){this.ho=new Ep,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="ConnectivityMonitor";class wp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Tp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Tp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=null;function Xl(){return Lo===null?Lo=function(){return 268435456+Math.round(2147483648*Math.random())}():Lo++,"0x"+Lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="RestConnection",AP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bP{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ta?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=Xl(),c=this.So(e,n.toUriEncodedString());X(al,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(u=>(X(al,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ts(al,`RPC '${e}' ${o} failed with error: `,u,"url: ",c,"request:",r),u})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=AP[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class SP extends bP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Xl();return new Promise((o,c)=>{const l=new M_;l.setWithCredentials(!0),l.listenOnce(L_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Go.NO_ERROR:const f=l.getResponseJson();X(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Go.TIMEOUT:X(ft,`RPC '${e}' ${i} timed out`),c(new Z(F.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const p=l.getStatus();if(X(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const S=function(D){const B=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(B)>=0?B:F.UNKNOWN}(m.status);c(new Z(S,m.message))}else c(new Z(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Z(F.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(ft,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);X(ft,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=Xl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=j_(),c=U_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ft,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,m=!1;const S=new RP({Fo:D=>{m?X(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(X(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(ft,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Mo:()=>p.close()}),k=(D,B,O)=>{D.listen(B,V=>{try{O(V)}catch(x){setTimeout(()=>{throw x},0)}})};return k(p,ci.EventType.OPEN,()=>{m||(X(ft,`RPC '${e}' stream ${s} transport opened.`),S.Qo())}),k(p,ci.EventType.CLOSE,()=>{m||(m=!0,X(ft,`RPC '${e}' stream ${s} transport closed`),S.Ko())}),k(p,ci.EventType.ERROR,D=>{m||(m=!0,Ts(ft,`RPC '${e}' stream ${s} transport errored:`,D),S.Ko(new Z(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,ci.EventType.MESSAGE,D=>{var B;if(!m){const O=D.data[0];Pe(!!O);const V=O,x=(V==null?void 0:V.error)||((B=V[0])===null||B===void 0?void 0:B.error);if(x){X(ft,`RPC '${e}' stream ${s} received error:`,x);const z=x.status;let ee=function(y){const w=ze[y];if(w!==void 0)return Ey(w)}(z),b=x.message;ee===void 0&&(ee=F.INTERNAL,b="Unknown error status: "+z+" with message "+x.message),m=!0,S.Ko(new Z(ee,b)),p.close()}else X(ft,`RPC '${e}' stream ${s} received:`,O),S.Uo(O)}}),k(c,F_.STAT_EVENT,D=>{D.stat===jl.PROXY?X(ft,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===jl.NOPROXY&&X(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function cl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return new DS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="PersistentStream";class xy{constructor(e,n,r,s,i,o,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ny(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Ip,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Ip,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PP extends xy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=NS(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?fn(o.readTime):he.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Jl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=ql(l)?{documents:LS(i,l)}:{query:FS(i,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Iy(i,o.resumeToken);const u=zl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=ba(i,o.snapshotVersion.toTimestamp());const u=zl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=jS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Jl(this.serializer),n.removeTarget=e,this.I_(n)}}class CP extends xy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=MS(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Jl(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xS(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{}class DP extends kP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,Gl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(F.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Gl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(F.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class OP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(kn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="RemoteStore";class VP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{zr(this)&&(X(qr,"Restarting streams for network reachability change."),await async function(l){const u=de(l);u.W_.add(4),await io(u),u.j_.set("Unknown"),u.W_.delete(4),await uc(u)}(this))})}),this.j_=new OP(r,s)}}async function uc(t){if(zr(t))for(const e of t.G_)await e(!0)}async function io(t){for(const e of t.G_)await e(!1)}function My(t,e){const n=de(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),sh(n)?rh(n):Fs(n).c_()&&nh(n,e))}function th(t,e){const n=de(t),r=Fs(n);n.U_.delete(e),r.c_()&&Ly(n,e),n.U_.size===0&&(r.c_()?r.P_():zr(n)&&n.j_.set("Unknown"))}function nh(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).y_(e)}function Ly(t,e){t.H_.Ne(e),Fs(t).w_(e)}function rh(t){t.H_=new SS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.j_.B_()}function sh(t){return zr(t)&&!Fs(t).u_()&&t.U_.size>0}function zr(t){return de(t).W_.size===0}function Fy(t){t.H_=void 0}async function NP(t){t.j_.set("Online")}async function xP(t){t.U_.forEach((e,n)=>{nh(t,e)})}async function MP(t,e){Fy(t),sh(t)?(t.j_.q_(e),rh(t)):t.j_.set("Unknown")}async function LP(t,e,n){if(t.j_.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.U_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){X(qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sa(t,r)}else if(e instanceof Xo?t.H_.We(e):e instanceof Ty?t.H_.Ze(e):t.H_.je(e),!n.isEqual(he.min()))try{const r=await Vy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.U_.get(u);f&&i.U_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.U_.get(l);if(!f)return;i.U_.set(l,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),Ly(i,l);const p=new tr(f.target,l,u,f.sequenceNumber);nh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(qr,"Failed to raise snapshot:",r),await Sa(t,r)}}async function Sa(t,e,n){if(!Ms(e))throw e;t.W_.add(1),await io(t),t.j_.set("Offline"),n||(n=()=>Vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(qr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await uc(t)})}function Uy(t,e){return e().catch(n=>Sa(t,n,e))}async function hc(t){const e=de(t),n=gr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Bu;for(;FP(e);)try{const s=await vP(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,UP(e,s)}catch(s){await Sa(e,s)}jy(e)&&$y(e)}function FP(t){return zr(t)&&t.K_.length<10}function UP(t,e){t.K_.push(e);const n=gr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function jy(t){return zr(t)&&!gr(t).u_()&&t.K_.length>0}function $y(t){gr(t).start()}async function jP(t){gr(t).C_()}async function $P(t){const e=gr(t);for(const n of t.K_)e.S_(n.mutations)}async function BP(t,e,n){const r=t.K_.shift(),s=Gu.from(r,e,n);await Uy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hc(t)}async function HP(t,e){e&&gr(t).b_&&await async function(r,s){if(function(o){return AS(o)&&o!==F.ABORTED}(s.code)){const i=r.K_.shift();gr(r).h_(),await Uy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hc(r)}}(t,e),jy(t)&&$y(t)}async function Ap(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X(qr,"RemoteStore received new credentials");const r=zr(n);n.W_.add(3),await io(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await uc(n)}async function qP(t,e){const n=de(t);e?(n.W_.delete(2),await uc(n)):e||(n.W_.add(2),await io(n),n.j_.set("Unknown"))}function Fs(t){return t.J_||(t.J_=function(n,r,s){const i=de(n);return i.M_(),new PP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:NP.bind(null,t),No:xP.bind(null,t),Lo:MP.bind(null,t),p_:LP.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),sh(t)?rh(t):t.j_.set("Unknown")):(await t.J_.stop(),Fy(t))})),t.J_}function gr(t){return t.Y_||(t.Y_=function(n,r,s){const i=de(n);return i.M_(),new CP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:jP.bind(null,t),Lo:HP.bind(null,t),D_:$P.bind(null,t),v_:BP.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await hc(t)):(await t.Y_.stop(),t.K_.length>0&&(X(qr,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ih(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Ms(t))return new Z(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static emptySet(e){return new _s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=li(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.Z_=new je(se.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):le():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ss(e,n,_s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class WP{constructor(){this.queries=Rp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Rp(),i.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new Z(F.ABORTED,"Firestore shutting down"))}}function Rp(){return new Wr(t=>oy(t),sc)}async function ah(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new KP,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=oh(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&lh(n)}async function ch(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zP(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&lh(n)}function GP(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function lh(t){t.ia.forEach(e=>{e.next()})}var Zl,Sp;(Sp=Zl||(Zl={}))._a="default",Sp.Cache="cache";class uh{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.key=e}}class Hy{constructor(e){this.key=e}}class QP{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=_e(),this.mutatedKeys=_e(),this.ya=ay(e),this.wa=new _s(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new bp,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),m=ic(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;g&&m?g.data.isEqual(m.data)?S!==k&&(r.track({type:3,doc:m}),D=!0):this.va(g,m)||(r.track({type:2,doc:m}),D=!0,(l&&this.ya(m,l)>0||u&&this.ya(m,u)<0)&&(c=!0)):!g&&m?(r.track({type:0,doc:m}),D=!0):g&&!m&&(r.track({type:1,doc:g}),D=!0,(l||u)&&(c=!0)),D&&(m?(o=o.add(m),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,p)=>function(m,S){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return k(m)-k(S)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new Ss(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new bp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=_e(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new Hy(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new By(r))}),n}Oa(e){this.fa=e.gs,this.pa=_e();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Ss.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const hh="SyncEngine";class JP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YP{constructor(e){this.key=e,this.Ba=!1}}class XP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Wr(c=>oy(c),sc),this.qa=new Map,this.Qa=new Set,this.$a=new je(se.comparator),this.Ka=new Map,this.Ua=new Yu,this.Wa={},this.Ga=new Map,this.za=Rs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function ZP(t,e,n=!0){const r=Qy(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await qy(r,e,n,!0),s}async function eC(t,e){const n=Qy(t);await qy(n,e,!0,!1)}async function qy(t,e,n,r){const s=await EP(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await tC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&My(t.remoteStore,s),c}async function tC(t,e,n,r,s){t.Ha=(p,g,m)=>async function(k,D,B,O){let V=D.view.Sa(B);V.ls&&(V=await vp(k.localStore,D.query,!1).then(({documents:b})=>D.view.Sa(b,V)));const x=O&&O.targetChanges.get(D.targetId),z=O&&O.targetMismatches.get(D.targetId)!=null,ee=D.view.applyChanges(V,k.isPrimaryClient,x,z);return Cp(k,D.targetId,ee.Ma),ee.snapshot}(t,p,g,m);const i=await vp(t.localStore,e,!0),o=new QP(e,i.gs),c=o.Sa(i.documents),l=so.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Cp(t,n,u.Ma);const f=new JP(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function nC(t,e,n){const r=de(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!sc(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&th(r.remoteStore,s.targetId),eu(r,s.targetId)}).catch(xs)):(eu(r,s.targetId),await Yl(r.localStore,s.targetId,!0))}async function rC(t,e){const n=de(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),th(n.remoteStore,r.targetId))}async function sC(t,e,n){const r=hC(t);try{const s=await function(o,c){const l=de(o),u=Qe.now(),f=c.reduce((m,S)=>m.add(S.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let S=Dn(),k=_e();return l.ds.getEntries(m,f).next(D=>{S=D,S.forEach((B,O)=>{O.isValidDocument()||(k=k.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,S)).next(D=>{p=D;const B=[];for(const O of c){const V=vS(O,p.get(O.key).overlayedDocument);V!=null&&B.push(new Ir(O.key,V,X_(V.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,B,c)}).next(D=>{g=D;const B=D.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(m,D.batchId,B)})}).then(()=>({batchId:g.batchId,changes:ly(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new je(ve)),u=u.insert(c,l),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await oo(r,s.changes),await hc(r.remoteStore)}catch(s){const i=oh(s,"Failed to persist write");n.reject(i)}}async function Ky(t,e){const n=de(t);try{const r=await _P(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Pe(o.Ba):s.removedDocuments.size>0&&(Pe(o.Ba),o.Ba=!1))}),await oo(n,r,e)}catch(r){await xs(r)}}function Pp(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const g of p.ta)g.sa(c)&&(u=!0)}),u&&lh(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iC(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,mt.newNoDocument(i,he.min()));const c=_e().add(i),l=new cc(he.min(),new Map,new je(ve),o,c);await Ky(r,l),r.$a=r.$a.remove(i),r.Ka.delete(e),fh(r)}else await Yl(r.localStore,e,!1).then(()=>eu(r,e,n)).catch(xs)}async function oC(t,e){const n=de(t),r=e.batch.batchId;try{const s=await mP(n.localStore,e);zy(n,r,null),Wy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oo(n,s)}catch(s){await xs(s)}}async function aC(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Pe(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);zy(r,e,n),Wy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oo(r,s)}catch(s){await xs(s)}}function Wy(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function zy(t,e,n){const r=de(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||Gy(t,r)})}function Gy(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(th(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),fh(t))}function Cp(t,e,n){for(const r of n)r instanceof By?(t.Ua.addReference(r.key,e),cC(t,r)):r instanceof Hy?(X(hh,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||Gy(t,r.key)):le()}function cC(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(hh,"New document in limbo: "+n),t.Qa.add(r),fh(t))}function fh(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new se(xe.fromString(e)),r=t.za.next();t.Ka.set(r,new YP(n)),t.$a=t.$a.insert(n,r),My(t.remoteStore,new tr(hn(rc(n.path)),r,"TargetPurposeLimboResolution",ec.ae))}}async function oo(t,e,n){const r=de(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Zu.Yi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,g=>j.forEach(g.Hi,m=>f.persistence.referenceDelegate.addReference(p,g.targetId,m)).next(()=>j.forEach(g.Ji,m=>f.persistence.referenceDelegate.removeReference(p,g.targetId,m)))))}catch(p){if(!Ms(p))throw p;X(eh,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const m=f.Ts.get(g),S=m.snapshotVersion,k=m.withLastLimboFreeSnapshotVersion(S);f.Ts=f.Ts.insert(g,k)}}}(r.localStore,i))}async function lC(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X(hh,"User change. New user:",e.toKey());const r=await Oy(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new Z(F.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oo(n,r.Rs)}}function uC(t,e){const n=de(t),r=n.Ka.get(e);if(r&&r.Ba)return _e().add(r.key);{let s=_e();const i=n.qa.get(e);if(!i)return s;for(const o of i){const c=n.ka.get(o);s=s.unionWith(c.view.ba)}return s}}function Qy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iC.bind(null,e),e.La.p_=zP.bind(null,e.eventManager),e.La.Ja=GP.bind(null,e.eventManager),e}function hC(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aC.bind(null,e),e}class Pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return gP(this.persistence,new fP,e.initialUser,this.serializer)}Xa(e){return new Dy(Xu.ri,this.serializer)}Za(e){return new wP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pa.provider={build:()=>new Pa};class fC extends Pa{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Pe(this.persistence.referenceDelegate instanceof Ra);const r=this.persistence.referenceDelegate.garbageCollector;return new YS(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Dy(r=>Ra.ri(r,n),this.serializer)}}class tu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lC.bind(null,this.syncEngine),await qP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WP}()}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=function(i){return new SP(i)}(e.databaseInfo);return function(i,o,c,l){return new DP(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new VP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Pp(this.syncEngine,n,0),function(){return wp.D()?new wp:new IP}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new XP(s,i,o,c,l,u);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);X(qr,"RemoteStore shutting down."),i.W_.add(5),await io(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tu.provider={build:()=>new tu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirestoreClient";class dC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=B_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),X(mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Oy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pC(t);X(mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ap(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ap(e.remoteStore,s)),t._onlineComponents=e}async function pC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(mr,"Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new Pa)}}else X(mr,"Using default OfflineComponentProvider"),await ll(t,new fC(void 0));return t._offlineComponents}async function Jy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(mr,"Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(X(mr,"Using default OnlineComponentProvider"),await kp(t,new tu))),t._onlineComponents}function gC(t){return Jy(t).then(e=>e.syncEngine)}async function Ca(t){const e=await Jy(t),n=e.eventManager;return n.onListen=ZP.bind(null,e.syncEngine),n.onUnlisten=nC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rC.bind(null,e.syncEngine),n}function mC(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new dh({next:g=>{f.su(),o.enqueueAndForget(()=>ch(i,p));const m=g.docs.has(c);!m&&g.fromCache?u.reject(new Z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&l&&l.source==="server"?u.reject(new Z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new uh(rc(c.path),f,{includeMetadataChanges:!0,Ta:!0});return ah(i,p)}(await Ca(t),t.asyncQueue,e,n,r)),r.promise}function _C(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new dh({next:g=>{f.su(),o.enqueueAndForget(()=>ch(i,p)),g.fromCache&&l.source==="server"?u.reject(new Z(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new uh(c,f,{includeMetadataChanges:!0,Ta:!0});return ah(i,p)}(await Ca(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e,n){if(!n)throw new Z(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yC(t,e,n,r){if(e===!0&&r===!0)throw new Z(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Op(t){if(!se.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vp(t){if(se.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fc(t);throw new Z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="firestore.googleapis.com",Np=!0;class xp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zy,this.ssl=Np}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Np;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ky;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QS)throw new Z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RR;switch(r.type){case"firstParty":return new kR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Dp.get(n);r&&(X("ComponentProvider","Removing Datastore"),Dp.delete(n),r.terminate())}(this),Promise.resolve()}}function vC(t,e,n,r={}){var s;const i=(t=Mt(t,dc))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==Zy&&i.host!==c&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!ur(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=dt.MOCK_USER;else{u=FI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(p)}t._authCredentials=new SR(new $_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class cr extends Ar{constructor(e,n,r){super(e,n,rc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new se(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function SD(t,e,...n){if(t=We(t),Xy("collection","path",e),t instanceof dc){const r=xe.fromString(e,...n);return Vp(r),new cr(t,null,r)}{if(!(t instanceof _t||t instanceof cr))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Vp(r),new cr(t.firestore,null,r)}}function hi(t,e,...n){if(t=We(t),arguments.length===1&&(e=B_.newId()),Xy("doc","path",e),t instanceof dc){const r=xe.fromString(e,...n);return Op(r),new _t(t,null,new se(r))}{if(!(t instanceof _t||t instanceof cr))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Op(r),new _t(t.firestore,t instanceof cr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="AsyncQueue";class Lp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ny(this,"async_queue_retry"),this.bu=()=>{const r=cl();r&&X(Mp,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Rn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ms(e))throw e;X(Mp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=ih.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&le()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function Fp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class _r extends dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lp(e),this._firestoreClient=void 0,await e}}}function ev(t,e){const n=typeof t=="object"?t:Du(),r=typeof t=="string"?t:Ta,s=ku(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=MI("firestore");i&&vC(s,...i)}return s}function pc(t){if(t._terminated)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EC(t),t._firestoreClient}function EC(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new qR(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Yy(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new dC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(at.fromBase64String(e))}catch(n){throw new Z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^__.*__$/;class wC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class tv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class mc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ka(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(nv(this.Lu)&&TC.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class IC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}ju(e,n,r,s=!1){return new mc({Lu:e,methodName:n,zu:r,path:ot.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new IC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rv(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);yh("Data must be an object, but it was:",o,r);const c=sv(r,o);let l,u;if(i.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=nu(e,p,n);if(!o.contains(g))throw new Z(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ov(f,g)||f.push(g)}l=new Nt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new wC(new Ct(c),l,u)}class yc extends ao{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function AC(t,e,n){return new mc({Lu:3,zu:e.settings.zu,methodName:t._methodName,Qu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class mh extends ao{_toFieldTransform(e){return new my(e.path,new qi)}isEqual(e){return e instanceof mh}}class _h extends ao{constructor(e,n){super(e),this.Hu=n}_toFieldTransform(e){const n=AC(this,e,!0),r=this.Hu.map(i=>Us(i,n)),s=new bs(r);return new my(e.path,s)}isEqual(e){return e instanceof _h&&ur(this.Hu,e.Hu)}}function bC(t,e,n,r){const s=t.ju(1,e,n);yh("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();wr(r,(l,u)=>{const f=vh(e,l,n);u=We(u);const p=s.Ku(f);if(u instanceof yc)i.push(f);else{const g=Us(u,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Nt(i);return new tv(o,c,s.fieldTransforms)}function RC(t,e,n,r,s,i){const o=t.ju(1,e,n),c=[nu(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(nu(e,i[g])),l.push(i[g+1]);const u=[],f=Ct.empty();for(let g=c.length-1;g>=0;--g)if(!ov(u,c[g])){const m=c[g];let S=l[g];S=We(S);const k=o.Ku(m);if(S instanceof yc)u.push(m);else{const D=Us(S,k);D!=null&&(u.push(m),f.set(m,D))}}const p=new Nt(u);return new tv(f,p,o.fieldTransforms)}function SC(t,e,n,r=!1){return Us(n,t.ju(r?4:3,e))}function Us(t,e){if(iv(t=We(t)))return yh("Unsupported field value:",e,t),sv(t,e);if(t instanceof ao)return function(r,s){if(!nv(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Us(c,s.Uu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:ba(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ba(s.serializer,i)}}if(r instanceof ph)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ps)return{bytesValue:Iy(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gh)return function(o,c){return{mapValue:{fields:{[J_]:{stringValue:Y_},[wa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Wu("VectorValues must only contain numeric values.");return zu(c.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${fc(r)}`)}(t,e)}function sv(t,e){const n={};return q_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,s)=>{const i=Us(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof ph||t instanceof Ps||t instanceof _t||t instanceof ao||t instanceof gh)}function yh(t,e,n){if(!iv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function nu(t,e,n){if((e=We(e))instanceof gc)return e._internalPath;if(typeof e=="string")return vh(t,e);throw ka("Field path arguments must be of type string or ",t,!1,void 0,n)}const PC=new RegExp("[~\\*/\\[\\]]");function vh(t,e,n){if(e.search(PC)>=0)throw ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ka(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(F.INVALID_ARGUMENT,c+t+l)}function ov(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CC extends av{data(){return super.data()}}function vc(t,e){return typeof e=="string"?vh(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eh{}class lv extends Eh{}function PD(t,e,...n){let r=[];e instanceof Eh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Th).length,c=i.filter(l=>l instanceof Ec).length;if(o>1||o>0&&c>0)throw new Z(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ec extends lv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ec(e,n,r)}_apply(e){const n=this._parse(e);return uv(e._query,n),new Ar(e.firestore,e.converter,Kl(e._query,n))}_parse(e){const n=_c(e.firestore);return function(i,o,c,l,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){jp(p,f);const S=[];for(const k of p)S.push(Up(l,i,k));g={arrayValue:{values:S}}}else g=Up(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||jp(p,f),g=SC(c,o,p,f==="in"||f==="not-in");return Ge.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CD(t,e,n){const r=e,s=vc("where",t);return Ec._create(s,r,n)}class Th extends Eh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Th(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)uv(o,l),o=Kl(o,l)}(e._query,n),new Ar(e.firestore,e.converter,Kl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wh extends lv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hi(i,o)}(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function kD(t,e="asc"){const n=e,r=vc("orderBy",t);return wh._create(r,n)}function Up(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iy(e)&&n.indexOf("/")!==-1)throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!se.isDocumentKey(r))throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ep(t,new se(r))}if(n instanceof _t)return ep(t,n._key);throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(n)}.`)}function jp(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uv(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kC{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[wa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new gh(i)}convertGeoPoint(e){return new ph(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=fr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Pe(Cy(r));const s=new $i(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fv extends av{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zo extends fv{data(e={}){return super.data(e)}}class dv{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:DC(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){t=Mt(t,_t);const e=Mt(t.firestore,_r);return mC(pc(e),t._key).then(n=>pv(e,t,n))}class Ih extends kC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function DD(t){t=Mt(t,Ar);const e=Mt(t.firestore,_r),n=pc(e),r=new Ih(e);return cv(t._query),_C(n,t._query).then(s=>new dv(e,r,t,s))}function Bp(t,e,n){t=Mt(t,_t);const r=Mt(t.firestore,_r),s=hv(t.converter,e,n);return Ah(r,[rv(_c(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jt.none())])}function OD(t,e,n,...r){t=Mt(t,_t);const s=Mt(t.firestore,_r),i=_c(s);let o;return o=typeof(e=We(e))=="string"||e instanceof gc?RC(i,"updateDoc",t._key,e,n,r):bC(i,"updateDoc",t._key,e),Ah(s,[o.toMutation(t._key,Jt.exists(!0))])}function VD(t,e){const n=Mt(t.firestore,_r),r=hi(t),s=hv(t.converter,e);return Ah(n,[rv(_c(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function ND(t,...e){var n,r,s;t=We(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Fp(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof _t)u=Mt(t.firestore,_r),f=rc(t._key.path),l={next:p=>{e[o]&&e[o](pv(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Mt(t,Ar);u=Mt(p.firestore,_r),f=p._query;const g=new Ih(u);l={next:m=>{e[o]&&e[o](new dv(u,g,p,m))},error:e[o+1],complete:e[o+2]},cv(t._query)}return function(g,m,S,k){const D=new dh(k),B=new uh(m,D,S);return g.asyncQueue.enqueueAndForget(async()=>ah(await Ca(g),B)),()=>{D.su(),g.asyncQueue.enqueueAndForget(async()=>ch(await Ca(g),B))}}(pc(u),f,c,l)}function Ah(t,e){return function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget(async()=>sC(await gC(r),s,i)),i.promise}(pc(t),e)}function pv(t,e,n){const r=n.docs.get(e._key),s=new Ih(t);return new fv(t,s,e._key,r,new fi(n.hasPendingWrites,n.fromCache),e.converter)}function xD(){return new mh("serverTimestamp")}function MD(...t){return new _h("arrayUnion",t)}(function(e,n=!0){(function(s){Ns=s})(Os),vs(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new _r(new PR(r.getProvider("auth-internal")),new DR(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),or(Hd,qd,e),or(Hd,qd,"esm2017")})();var OC="firebase",VC="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(OC,VC,"app");const NC={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},bh=ZA().length?Du():Jm(NC),LD=ev(bh),di=AR(bh),Fo=ev(bh);u0(di,R_).catch(t=>{console.error("⚠️ Firebase Auth Persistence Error:",t)});const Tc=$w("auth",()=>{const t=kt(null),e=kt(!1),n=kt(!1),r=kt(null),s=At(()=>!!t.value),i=At(()=>t.value);async function o(){return console.log("authStore: initAuth started"),n.value=!0,r.value=null,new Promise((f,p)=>{const g=setTimeout(()=>{r.value="Connection to cosmos failed. Check your network.",n.value=!1,p(new Error("Auth timeout"))},1e4);e.value?(clearTimeout(g),n.value=!1,f(t.value)):(console.log("authStore: Setting up onAuthStateChanged"),d0(di,async m=>{if(clearTimeout(g),console.log("authStore: onAuthStateChanged fired, user:",(m==null?void 0:m.uid)||"none"),m)try{const S=await $p(hi(Fo,"users",m.uid));t.value=S.exists()?{...m,...S.data()}:m}catch(S){console.error("Firestore fetch failed:",S),t.value=m}else t.value=null;e.value=!0,n.value=!1,f(t.value)},m=>{clearTimeout(g),r.value="Authentication error: "+m.message,n.value=!1,p(m)}))})}async function c(f,p,g){n.value=!0,r.value=null;try{const m=await o0(di,f,p);return await l0(m.user,{displayName:g}),await Bp(hi(Fo,"users",m.user.uid),{name:g,email:f,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString()}),t.value={...m.user,name:g},m.user}catch(m){throw r.value=m.message||"Registration failed",m}finally{n.value=!1}}async function l(f,p){n.value=!0,r.value=null;try{const g=await a0(di,f,p);await Bp(hi(Fo,"users",g.user.uid),{lastLogin:new Date().toISOString()},{merge:!0});const m=await $p(hi(Fo,"users",g.user.uid));return t.value=m.exists()?{...g.user,...m.data()}:g.user,g.user}catch(g){throw r.value=g.message||"Login failed",g}finally{n.value=!1}}async function u(){try{await p0(di),t.value=null}catch(f){throw r.value=f.message||"Logout failed",f}}return{user:t,authInitialized:e,isLoading:n,error:r,isAuthenticated:s,currentUser:i,initAuth:o,register:c,login:l,logout:u}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function gv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&gv(t.default)}const Re=Object.assign;function ul(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Ri=()=>{},en=Array.isArray,mv=/#/g,MC=/&/g,LC=/\//g,FC=/=/g,UC=/\?/g,_v=/\+/g,jC=/%5B/g,$C=/%5D/g,yv=/%5E/g,BC=/%60/g,vv=/%7B/g,HC=/%7C/g,Ev=/%7D/g,qC=/%20/g;function Rh(t){return encodeURI(""+t).replace(HC,"|").replace(jC,"[").replace($C,"]")}function KC(t){return Rh(t).replace(vv,"{").replace(Ev,"}").replace(yv,"^")}function ru(t){return Rh(t).replace(_v,"%2B").replace(qC,"+").replace(mv,"%23").replace(MC,"%26").replace(BC,"`").replace(vv,"{").replace(Ev,"}").replace(yv,"^")}function WC(t){return ru(t).replace(FC,"%3D")}function zC(t){return Rh(t).replace(mv,"%23").replace(UC,"%3F")}function GC(t){return t==null?"":zC(t).replace(LC,"%2F")}function Wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const QC=/\/$/,JC=t=>t.replace(QC,"");function hl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ek(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Wi(o)}}function YC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cs(e.matched[r],n.matched[s])&&Tv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ZC(t[n],e[n]))return!1;return!0}function ZC(t,e){return en(t)?qp(t,e):en(e)?qp(e,t):t===e}function qp(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ek(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zi;(function(t){t.pop="pop",t.push="push"})(zi||(zi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function tk(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JC(t)}const nk=/^[^#]+#/;function rk(t,e){return t.replace(nk,"#")+e}function sk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wc=()=>({left:window.scrollX,top:window.scrollY});function ik(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kp(t,e){return(history.state?history.state.position-e:-1)+t}const su=new Map;function ok(t,e){su.set(t,e)}function ak(t){const e=su.get(t);return su.delete(t),e}let ck=()=>location.protocol+"//"+location.host;function wv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Hp(l,"")}return Hp(n,t)+r+s}function lk(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=wv(t,location),S=n.value,k=e.value;let D=0;if(g){if(n.value=m,e.value=g,o&&o===S){o=null;return}D=k?g.position-k.position:0}else r(m);s.forEach(B=>{B(n.value,S,{delta:D,type:zi.pop,direction:D?D>0?Si.forward:Si.back:Si.unknown})})};function l(){o=n.value}function u(g){s.push(g);const m=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(m),m}function f(){const{history:g}=window;g.state&&g.replaceState(Re({},g.state,{scroll:wc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Wp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wc():null}}function uk(t){const{history:e,location:n}=window,r={value:wv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:ck()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](g)}}function o(l,u){const f=Re({},e.state,Wp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:wc()});i(f.current,f,!0);const p=Re({},Wp(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function hk(t){t=tk(t);const e=uk(t),n=lk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:rk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fk(t){return typeof t=="string"||t&&typeof t=="object"}function Iv(t){return typeof t=="string"||typeof t=="symbol"}const Av=Symbol("");var zp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zp||(zp={}));function ks(t,e){return Re(new Error,{type:t,[Av]:!0},e)}function yn(t,e){return t instanceof Error&&Av in t&&(e==null||!!(t.type&e))}const Gp="[^/]+?",dk={sensitive:!1,strict:!1,start:!0,end:!0},pk=/[.+*?^${}()[\]/\\]/g;function gk(t,e){const n=Re({},dk,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let m=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(pk,"\\$&"),m+=40;else if(g.type===1){const{value:S,repeatable:k,optional:D,regexp:B}=g;i.push({name:S,repeatable:k,optional:D});const O=B||Gp;if(O!==Gp){m+=10;try{new RegExp(`(${O})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${S}" (${O}): `+x.message)}}let V=k?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(V=D&&u.length<2?`(?:/${V})`:"/"+V),D&&(V+="?"),s+=V,m+=20,D&&(m+=-8),k&&(m+=-20),O===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const m=f[g]||"",S=i[g-1];p[S.name]=m&&S.repeatable?m.split("/"):m}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const m of g)if(m.type===0)f+=m.value;else if(m.type===1){const{value:S,repeatable:k,optional:D}=m,B=S in u?u[S]:"";if(en(B)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const O=en(B)?B.join("/"):B;if(!O)if(D)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=O}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function mk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qp(r))return 1;if(Qp(s))return-1}return s.length-r.length}function Qp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _k={type:0,value:""},yk=/[a-zA-Z0-9_]/;function vk(t){if(!t)return[[]];if(t==="/")return[[_k]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:yk.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Ek(t,e,n){const r=gk(vk(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tk(t,e){const n=[],r=new Map;e=Zp({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,m){const S=!m,k=Yp(p);k.aliasOf=m&&m.record;const D=Zp(e,p),B=[k];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of x)B.push(Yp(Re({},k,{components:m?m.record.components:k.components,path:z,aliasOf:m?m.record:k})))}let O,V;for(const x of B){const{path:z}=x;if(g&&z[0]!=="/"){const ee=g.record.path,b=ee[ee.length-1]==="/"?"":"/";x.path=g.record.path+(z&&b+z)}if(O=Ek(x,g,D),m?m.alias.push(O):(V=V||O,V!==O&&V.alias.push(O),S&&p.name&&!Xp(O)&&o(p.name)),Rv(O)&&l(O),k.children){const ee=k.children;for(let b=0;b<ee.length;b++)i(ee[b],O,m&&m.children[b])}m=m||O}return V?()=>{o(V)}:Ri}function o(p){if(Iv(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=Ak(p,n);n.splice(g,0,p),p.record.name&&!Xp(p)&&r.set(p.record.name,p)}function u(p,g){let m,S={},k,D;if("name"in p&&p.name){if(m=r.get(p.name),!m)throw ks(1,{location:p});D=m.record.name,S=Re(Jp(g.params,m.keys.filter(V=>!V.optional).concat(m.parent?m.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Jp(p.params,m.keys.map(V=>V.name))),k=m.stringify(S)}else if(p.path!=null)k=p.path,m=n.find(V=>V.re.test(k)),m&&(S=m.parse(k),D=m.record.name);else{if(m=g.name?r.get(g.name):n.find(V=>V.re.test(g.path)),!m)throw ks(1,{location:p,currentLocation:g});D=m.record.name,S=Re({},g.params,p.params),k=m.stringify(S)}const B=[];let O=m;for(;O;)B.unshift(O.record),O=O.parent;return{name:D,path:k,params:S,matched:B,meta:Ik(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Jp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:wk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function wk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ik(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Zp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ak(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bv(t,e[i])<0?r=i:n=i+1}const s=bk(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function bk(t){let e=t;for(;e=e.parent;)if(Rv(e)&&bv(t,e)===0)return e}function Rv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Rk(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_v," "),o=i.indexOf("="),c=Wi(o<0?i:i.slice(0,o)),l=o<0?null:Wi(i.slice(o+1));if(c in e){let u=e[c];en(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function eg(t){let e="";for(let n in t){const r=t[n];if(n=WC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&ru(i)):[r&&ru(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Sk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Pk=Symbol(""),tg=Symbol(""),Ic=Symbol(""),Sh=Symbol(""),iu=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(ks(4,{from:n,to:e})):g instanceof Error?l(g):fk(g)?l(ks(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function fl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(gv(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Qn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=xC(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&Qn(m,n,r,o,c,s)()}))}}return i}function ng(t){const e=xt(Ic),n=xt(Sh),r=At(()=>{const l=Pt(t.to);return e.resolve(l)}),s=At(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Cs.bind(null,f));if(g>-1)return g;const m=rg(l[u-2]);return u>1&&rg(f)===m&&p[p.length-1].path!==m?p.findIndex(Cs.bind(null,l[u-2])):g}),i=At(()=>s.value>-1&&Vk(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&Tv(n.params,r.value.params));function c(l={}){if(Ok(l)){const u=e[Pt(t.replace)?"replace":"push"](Pt(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Ck(t){return t.length===1?t[0]:t}const kk=ja({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ng,setup(t,{slots:e}){const n=Gi(ng(t)),{options:r}=xt(Ic),s=At(()=>({[sg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Ck(e.default(n));return t.custom?i:Su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Dk=kk;function Ok(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Vk(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function rg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sg=(t,e,n)=>t??e??n,Nk=ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(iu),s=At(()=>t.route||r.value),i=xt(tg,0),o=At(()=>{let u=Pt(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=At(()=>s.value.matched[o.value]);Uo(tg,At(()=>o.value+1)),Uo(Pk,c),Uo(iu,s);const l=kt();return Fr(()=>[l.value,c.value,t.name],([u,f,p],[g,m,S])=>{f&&(f.instances[p]=u,m&&m!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!Cs(f,m)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return ig(n.default,{Component:g,route:u});const m=p.props[f],S=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=Su(g,Re({},S,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return ig(n.default,{Component:D,route:u})||D}}});function ig(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xk=Nk;function Mk(t){const e=Tk(t.routes,t),n=t.parseQuery||Rk,r=t.stringifyQuery||eg,s=t.history,i=ti(),o=ti(),c=ti(),l=DE(Bn);let u=Bn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ul.bind(null,M=>""+M),p=ul.bind(null,GC),g=ul.bind(null,Wi);function m(M,Y){let Q,te;return Iv(M)?(Q=e.getRecordMatcher(M),te=Y):te=M,e.addRoute(te,Q)}function S(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(M=>M.record)}function D(M){return!!e.getRecordMatcher(M)}function B(M,Y){if(Y=Re({},Y||l.value),typeof M=="string"){const P=hl(n,M,Y.path),L=e.resolve({path:P.path},Y),$=s.createHref(P.fullPath);return Re(P,L,{params:g(L.params),hash:Wi(P.hash),redirectedFrom:void 0,href:$})}let Q;if(M.path!=null)Q=Re({},M,{path:hl(n,M.path,Y.path).path});else{const P=Re({},M.params);for(const L in P)P[L]==null&&delete P[L];Q=Re({},M,{params:p(P)}),Y.params=p(Y.params)}const te=e.resolve(Q,Y),Ie=M.hash||"";te.params=f(g(te.params));const T=YC(r,Re({},M,{hash:KC(Ie),path:te.path})),I=s.createHref(T);return Re({fullPath:T,hash:Ie,query:r===eg?Sk(M.query):M.query||{}},te,{redirectedFrom:void 0,href:I})}function O(M){return typeof M=="string"?hl(n,M,l.value.path):Re({},M)}function V(M,Y){if(u!==M)return ks(8,{from:Y,to:M})}function x(M){return b(M)}function z(M){return x(Re(O(M),{replace:!0}))}function ee(M){const Y=M.matched[M.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let te=typeof Q=="function"?Q(M):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=O(te):{path:te},te.params={}),Re({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function b(M,Y){const Q=u=B(M),te=l.value,Ie=M.state,T=M.force,I=M.replace===!0,P=ee(Q);if(P)return b(Re(O(P),{state:typeof P=="object"?Re({},Ie,P.state):Ie,force:T,replace:I}),Y||Q);const L=Q;L.redirectedFrom=Y;let $;return!T&&XC(r,te,Q)&&($=ks(16,{to:L,from:te}),Lt(te,te,!0,!1)),($?Promise.resolve($):w(L,te)).catch(U=>yn(U)?yn(U,2)?U:Wt(U):ge(U,L,te)).then(U=>{if(U){if(yn(U,2))return b(Re({replace:I},O(U.to),{state:typeof U.to=="object"?Re({},Ie,U.to.state):Ie,force:T}),Y||L)}else U=A(L,te,!0,I,Ie);return R(L,te,U),U})}function v(M,Y){const Q=V(M,Y);return Q?Promise.reject(Q):Promise.resolve()}function y(M){const Y=xn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function w(M,Y){let Q;const[te,Ie,T]=Lk(M,Y);Q=fl(te.reverse(),"beforeRouteLeave",M,Y);for(const P of te)P.leaveGuards.forEach(L=>{Q.push(Qn(L,M,Y))});const I=v.bind(null,M,Y);return Q.push(I),Rt(Q).then(()=>{Q=[];for(const P of i.list())Q.push(Qn(P,M,Y));return Q.push(I),Rt(Q)}).then(()=>{Q=fl(Ie,"beforeRouteUpdate",M,Y);for(const P of Ie)P.updateGuards.forEach(L=>{Q.push(Qn(L,M,Y))});return Q.push(I),Rt(Q)}).then(()=>{Q=[];for(const P of T)if(P.beforeEnter)if(en(P.beforeEnter))for(const L of P.beforeEnter)Q.push(Qn(L,M,Y));else Q.push(Qn(P.beforeEnter,M,Y));return Q.push(I),Rt(Q)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),Q=fl(T,"beforeRouteEnter",M,Y,y),Q.push(I),Rt(Q))).then(()=>{Q=[];for(const P of o.list())Q.push(Qn(P,M,Y));return Q.push(I),Rt(Q)}).catch(P=>yn(P,8)?P:Promise.reject(P))}function R(M,Y,Q){c.list().forEach(te=>y(()=>te(M,Y,Q)))}function A(M,Y,Q,te,Ie){const T=V(M,Y);if(T)return T;const I=Y===Bn,P=os?history.state:{};Q&&(te||I?s.replace(M.fullPath,Re({scroll:I&&P&&P.scroll},Ie)):s.push(M.fullPath,Ie)),l.value=M,Lt(M,Y,Q,I),Wt()}let E;function be(){E||(E=s.listen((M,Y,Q)=>{if(!tn.listening)return;const te=B(M),Ie=ee(te);if(Ie){b(Re(Ie,{replace:!0,force:!0}),te).catch(Ri);return}u=te;const T=l.value;os&&ok(Kp(T.fullPath,Q.delta),wc()),w(te,T).catch(I=>yn(I,12)?I:yn(I,2)?(b(Re(O(I.to),{force:!0}),te).then(P=>{yn(P,20)&&!Q.delta&&Q.type===zi.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ge(I,te,T))).then(I=>{I=I||A(te,T,!1),I&&(Q.delta&&!yn(I,8)?s.go(-Q.delta,!1):Q.type===zi.pop&&yn(I,20)&&s.go(-1,!1)),R(te,T,I)}).catch(Ri)}))}let He=ti(),Ce=ti(),ue;function ge(M,Y,Q){Wt(M);const te=Ce.list();return te.length?te.forEach(Ie=>Ie(M,Y,Q)):console.error(M),Promise.reject(M)}function Dt(){return ue&&l.value!==Bn?Promise.resolve():new Promise((M,Y)=>{He.add([M,Y])})}function Wt(M){return ue||(ue=!M,be(),He.list().forEach(([Y,Q])=>M?Q(M):Y()),He.reset()),M}function Lt(M,Y,Q,te){const{scrollBehavior:Ie}=t;if(!os||!Ie)return Promise.resolve();const T=!Q&&ak(Kp(M.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Ua().then(()=>Ie(M,Y,T)).then(I=>I&&ik(I)).catch(I=>ge(I,M,Y))}const Le=M=>s.go(M);let Fe;const xn=new Set,tn={currentRoute:l,listening:!0,addRoute:m,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:k,resolve:B,options:t,push:x,replace:z,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ce.add,isReady:Dt,install(M){const Y=this;M.component("RouterLink",Dk),M.component("RouterView",xk),M.config.globalProperties.$router=Y,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Pt(l)}),os&&!Fe&&l.value===Bn&&(Fe=!0,x(s.location).catch(Ie=>{}));const Q={};for(const Ie in Bn)Object.defineProperty(Q,Ie,{get:()=>l.value[Ie],enumerable:!0});M.provide(Ic,Y),M.provide(Sh,Og(Q)),M.provide(iu,l);const te=M.unmount;xn.add(M),M.unmount=function(){xn.delete(M),xn.size<1&&(u=Bn,E&&E(),E=null,l.value=Bn,Fe=!1,ue=!1),te()}}};function Rt(M){return M.reduce((Y,Q)=>Y.then(()=>y(Q)),Promise.resolve())}return tn}function Lk(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Cs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Cs(u,l))||s.push(l))}return[n,r,s]}function Sv(){return xt(Ic)}function FD(t){return xt(Sh)}const Fk={class:"bg-cosmic-dark text-white shadow-lg"},Uk={class:"container mx-auto px-4 py-3 flex justify-between items-center"},jk={class:"flex items-center"},$k={class:"w-8 h-8 rounded-full bg-cosmic-accent flex items-center justify-center text-white"},Bk={class:"hidden md:block"},Hk={key:0,class:"absolute right-0 mt-2 w-48 bg-white dark:bg-cosmic-light rounded-md shadow-lg py-1 z-10"},qk=ja({__name:"Header",setup(t){const e=Tc(),n=Sv(),r=kt(!1),s=kt(null),i=At(()=>{var p;const u=((p=e.user)==null?void 0:p.displayName)||"";if(!u)return"?";const f=u.split(" ");return f.length===1?f[0].charAt(0).toUpperCase():(f[0].charAt(0)+f[f.length-1].charAt(0)).toUpperCase()});function o(){r.value=!r.value}async function c(){(await e.signOut()).success&&n.push("/login")}function l(u){s.value&&!s.value.contains(u.target)&&(r.value=!1)}return Ha(()=>{document.addEventListener("click",l)}),wu(()=>{document.removeEventListener("click",l)}),(u,f)=>{var g;const p=Iu("router-link");return Be(),st("header",Fk,[ye("div",Uk,[Me(p,{to:"/",class:"flex items-center"},{default:an(()=>f[2]||(f[2]=[ye("h1",{class:"text-2xl md:text-3xl font-display font-bold cosmic-glow animate-pulse-slow"}," DawntasyAI ",-1)])),_:1}),ye("div",jk,[ye("div",{class:"relative",ref_key:"profileDropdown",ref:s},[ye("button",{onClick:o,class:"flex items-center space-x-2 p-2 rounded-full hover:bg-cosmic-light transition-colors duration-200"},[ye("div",$k,Pi(i.value),1),ye("span",Bk,Pi((g=Pt(e).user)==null?void 0:g.displayName),1),f[3]||(f[3]=ye("i",{class:"ri-arrow-down-s-line"},null,-1))]),r.value?(Be(),st("div",Hk,[Me(p,{to:"/profile",class:"block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-cosmic-accent",onClick:f[0]||(f[0]=m=>r.value=!1)},{default:an(()=>f[4]||(f[4]=[ye("i",{class:"ri-user-line mr-2"},null,-1),vi(" Profile ")])),_:1}),Me(p,{to:"/settings",class:"block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-cosmic-accent",onClick:f[1]||(f[1]=m=>r.value=!1)},{default:an(()=>f[5]||(f[5]=[ye("i",{class:"ri-settings-3-line mr-2"},null,-1),vi(" Settings ")])),_:1}),f[7]||(f[7]=ye("div",{class:"border-t border-gray-200 dark:border-gray-700 my-1"},null,-1)),ye("button",{onClick:c,class:"block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-cosmic-accent"},f[6]||(f[6]=[ye("i",{class:"ri-logout-box-line mr-2"},null,-1),vi(" Logout ")]))])):ii("",!0)],512)])])])}}}),Kk={class:"flex-1 flex flex-col items-center py-4 overflow-y-auto"},Wk={class:"sidebar-tooltip"},zk={key:0,class:"ml-4"},Gk={key:1,class:"sidebar-tooltip"},Qk={key:0,class:"ml-4"},Jk={key:1,class:"sidebar-tooltip"},Yk={key:0,class:"ml-4"},Xk={key:1,class:"sidebar-tooltip"},Zk={key:0,class:"ml-4"},eD={key:1,class:"sidebar-tooltip"},tD={key:0,class:"ml-4"},nD={key:1,class:"sidebar-tooltip"},rD=ja({__name:"Sidebar",setup(t){const e=Tc(),n=Sv(),r=kt(!1);function s(){r.value=!r.value}async function i(){(await e.signOut()).success&&n.push("/login")}return(o,c)=>{const l=Iu("router-link");return Be(),st(Bt,null,[ye("div",{class:Gt(["fixed inset-y-0 left-0 z-10 flex flex-col w-16 bg-cosmic-dark text-white shadow-lg transition-all duration-300",{"w-64":r.value}])},[c[6]||(c[6]=ye("div",{class:"flex-shrink-0 h-16"},null,-1)),ye("div",Kk,[ye("button",{onClick:s,class:"sidebar-icon mb-6"},[ye("i",{class:Gt([r.value?"ri-menu-fold-line":"ri-menu-unfold-line","text-xl"])},null,2),ye("span",Wk,Pi(r.value?"Collapse":"Expand"),1)]),Me(l,{to:"/",class:Gt(["sidebar-icon",{"justify-start px-4 w-full":r.value}])},{default:an(()=>[c[0]||(c[0]=ye("i",{class:"ri-home-line text-xl"},null,-1)),r.value?(Be(),st("span",zk,"Home")):(Be(),st("span",Gk,"Home"))]),_:1},8,["class"]),Me(l,{to:"/chats",class:Gt(["sidebar-icon",{"justify-start px-4 w-full":r.value}])},{default:an(()=>[c[1]||(c[1]=ye("i",{class:"ri-chat-3-line text-xl"},null,-1)),r.value?(Be(),st("span",Qk,"Chats")):(Be(),st("span",Jk,"Chats"))]),_:1},8,["class"]),Me(l,{to:"/settings",class:Gt(["sidebar-icon",{"justify-start px-4 w-full":r.value}])},{default:an(()=>[c[2]||(c[2]=ye("i",{class:"ri-settings-3-line text-xl"},null,-1)),r.value?(Be(),st("span",Yk,"Settings")):(Be(),st("span",Xk,"Settings"))]),_:1},8,["class"]),Me(l,{to:"/ai",class:Gt(["sidebar-icon",{"justify-start px-4 w-full":r.value}])},{default:an(()=>[c[3]||(c[3]=ye("i",{class:"ri-robot-line text-xl"},null,-1)),r.value?(Be(),st("span",Zk,"AI")):(Be(),st("span",eD,"AI"))]),_:1},8,["class"]),c[5]||(c[5]=ye("div",{class:"flex-grow"},null,-1)),ye("button",{onClick:i,class:Gt(["sidebar-icon",{"justify-start px-4 w-full":r.value}])},[c[4]||(c[4]=ye("i",{class:"ri-logout-box-line text-xl"},null,-1)),r.value?(Be(),st("span",tD,"Logout")):(Be(),st("span",nD,"Logout"))],2)])],2),c[7]||(c[7]=ye("div",{class:"w-16 flex-shrink-0"},null,-1))],64)}}}),sD=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},iD={class:"flex-grow flex transition-transform duration-700 ease-in-out"},oD={class:"flex-grow overflow-auto w-full"},aD={key:0,class:"flex justify-center items-center h-screen"},cD={class:"cosmic-loader"},lD={key:0,class:"mt-2 text-red-400 animate-fade-in"},uD={key:1,class:"footer"},hD={__name:"App",setup(t){const e=Tc(),n=kt(!0),r=kt(!0),s=()=>{e.error=null,e.initAuth()};return $m({title:"Dawntasy AI | Ultimate Legendary Chatbot Experience",meta:[{name:"description",content:"Legendary AI-powered chatbot built for Dawntasy fans."},{property:"og:title",content:"Dawntasy AI – Epic Chatbot for Dawntasy Fans!"},{property:"og:description",content:"Chat with your favorite Dawntasy characters."},{property:"og:image",content:"/images/dawntasy-ai-banner.png"},{name:"twitter:card",content:"summary_large_image"},{name:"viewport",content:"width=device-width, initial-scale=1.0"}]}),(i,o)=>{const c=Iu("router-view");return Be(),st("div",{class:Gt([n.value?"dark":"","min-h-screen transition-colors duration-700 ease-in-out bg-gradient-to-br from-cosmic-dark via-indigo-900 to-purple-900 text-white overflow-hidden"])},[Pt(e).isAuthenticated?(Be(),si(qk,{key:0,class:"opacity-100 transition-opacity duration-700 ease-in-out"})):ii("",!0),ye("div",iD,[Pt(e).isAuthenticated?(Be(),si(rD,{key:0})):ii("",!0),ye("main",oD,[r.value?(Be(),st("div",aD,[ye("div",cD,[o[0]||(o[0]=ye("div",{class:"cosmic-spinner"},null,-1)),o[1]||(o[1]=ye("p",{class:"mt-4 text-xl text-cosmic-glow animate-pulse"},"Loading DawntasyAI...",-1)),Pt(e).error?(Be(),st("p",lD,[vi(Pi(Pt(e).error)+" ",1),ye("button",{onClick:s,class:"ml-2 underline hover:text-cosmic-glow"},"Retry")])):ii("",!0)])])):(Be(),si(GE,{key:1},[Me(c,null,{default:an(({Component:l})=>[Me(QT,{name:"page-slide",mode:"out-in"},{default:an(()=>[(Be(),si(nT(l),{key:i.$route.fullPath}))]),_:2},1024)]),_:1})],1024))])]),Pt(e).isAuthenticated?(Be(),st("footer",uD," Made with 💜 for the Dawntasy Universe ")):ii("",!0)],2)}}},fD=sD(hD,[["__scopeId","data-v-ea61a5a4"]]),dD="modulepreload",pD=function(t){return"/app.html/"+t},og={},es=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=pD(l),l in og)return;og[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":dD,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((g,m)=>{p.addEventListener("load",g),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},gD=[{path:"/",redirect:"/home"},{path:"/register",component:()=>es(()=>import("./Register-Cdh8L-g1.js"),__vite__mapDeps([0,1])),meta:{requiresGuest:!0}},{path:"/login",component:()=>es(()=>import("./Login-CrHSRtPY.js"),__vite__mapDeps([2,3])),meta:{requiresGuest:!0}},{path:"/home",component:()=>es(()=>import("./Home--VmA_jQJ.js"),__vite__mapDeps([4,5,6])),meta:{requiresAuth:!0}},{path:"/chat/:id?",component:()=>es(()=>import("./Chat-DLIAACG7.js"),__vite__mapDeps([7,5,8])),meta:{requiresAuth:!0}},{path:"/settings",component:()=>es(()=>import("./Settings-tFD_ycFY.js"),[]),meta:{requiresAuth:!0}},{path:"/ai",component:()=>es(()=>import("./AIComponent--VZfnltN.js"),__vite__mapDeps([9,10])),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/home"}],Ph=Mk({history:hk("/ai/"),routes:gD});Ph.beforeEach(async(t,e,n)=>{const r=Tc();r.authInitialized||await r.initAuth(),t.meta.requiresAuth&&!r.isAuthenticated?n("/login"):t.meta.requiresGuest&&r.isAuthenticated?n("/home"):n()});const co=Rw(fD),mD=SI(),_D=xw();co.use(_D);co.use(Ph);co.use(mD);Ph.isReady().then(()=>{co.mount("#app")});co.config.errorHandler=(t,e,n)=>{console.error("Vue Error:",t),console.error("Component:",e),console.error("Info:",n)};export{hi as A,LD as B,OD as C,xD as D,MD as E,Bt as F,$w as G,At as H,PD as I,SD as J,CD as K,kD as L,DD as M,$p as N,ND as O,VD as P,AT as Q,ID as R,Pt as S,QT as T,uu as U,sD as _,ye as a,ii as b,st as c,ja as d,vi as e,Me as f,an as g,Iu as h,AD as i,Sv as j,vD as k,Ha as l,FD as m,Gt as n,Be as o,Fr as p,TD as q,kt as r,ED as s,Pi as t,Tc as u,wD as v,yD as w,bD as x,Qe as y,Ua as z};
