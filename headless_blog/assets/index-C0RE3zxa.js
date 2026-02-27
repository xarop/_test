var Vt=Object.defineProperty;var Wt=(i,t,e)=>t in i?Vt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var b=(i,t,e)=>Wt(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,ht=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),pt=new WeakMap;let kt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ht&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&pt.set(e,t))}return t}toString(){return this.cssText}};const qt=i=>new kt(typeof i=="string"?i:i+"",void 0,ut),I=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new kt(e,i,ut)},Ft=(i,t)=>{if(ht)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=B.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},ft=ht?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return qt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yt,defineProperty:Xt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Jt,getPrototypeOf:Gt}=Object,w=globalThis,mt=w.trustedTypes,Qt=mt?mt.emptyScript:"",Y=w.reactiveElementPolyfillSupport,M=(i,t)=>i,G={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Tt=(i,t)=>!Yt(i,t),gt={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:Tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Xt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=Kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const c=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gt}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=Gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,r=[...Zt(e),...Jt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(ft(s))}else t!==void 0&&e.push(ft(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ft(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:G).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const c=r.getPropertyOptions(s),a=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:G;this._$Em=s;const h=a.fromAttribute(e,c.type);this[s]=h??((n=this._$Ej)==null?void 0:n.get(s))??h,this._$Em=null}}requestUpdate(t,e,r,s=!1,o){var n;if(t!==void 0){const c=this.constructor;if(s===!1&&(o=this[t]),r??(r=c.getPropertyOptions(t)),!((r.hasChanged??Tt)(o,e)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(c._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:o},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:c}=n,a=this[o];c!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[M("elementProperties")]=new Map,k[M("finalized")]=new Map,Y==null||Y({ReactiveElement:k}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,vt=i=>i,W=j.trustedTypes,bt=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ut="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+x,te=`<${Mt}>`,C=document,H=()=>C.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",dt=Array.isArray,ee=i=>dt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",X=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,_t=/>/g,A=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,xt=/"/g,jt=/^(?:script|style|textarea|title)$/i,re=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),v=re(1),O=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),wt=new WeakMap,S=C.createTreeWalker(C,129);function Ht(i,t){if(!dt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const ie=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=U;for(let c=0;c<e;c++){const a=i[c];let h,u,l=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===U?u[1]==="!--"?n=yt:u[1]!==void 0?n=_t:u[2]!==void 0?(jt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=A):u[3]!==void 0&&(n=A):n===A?u[0]===">"?(n=s??U,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?A:u[3]==='"'?xt:$t):n===xt||n===$t?n=A:n===yt||n===_t?n=U:(n=A,s=void 0);const f=n===A&&i[c+1].startsWith("/>")?" ":"";o+=n===U?a+te:l>=0?(r.push(h),a.slice(0,l)+Ut+a.slice(l)+x+f):a+x+(l===-2?c:f)}return[Ht(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class z{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[h,u]=ie(t,e);if(this.el=z.createElement(h,r),S.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=S.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(Ut)){const p=u[n++],f=s.getAttribute(l).split(x),y=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:y[2],strings:f,ctor:y[1]==="."?oe:y[1]==="?"?ne:y[1]==="@"?ae:q}),s.removeAttribute(l)}else l.startsWith(x)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(jt.test(s.tagName)){const l=s.textContent.split(x),p=l.length-1;if(p>0){s.textContent=W?W.emptyScript:"";for(let f=0;f<p;f++)s.append(l[f],H()),S.nextNode(),a.push({type:2,index:++o});s.append(l[p],H())}}}else if(s.nodeType===8)if(s.data===Mt)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(x,l+1))!==-1;)a.push({type:7,index:o}),l+=x.length-1}o++}}static createElement(t,e){const r=C.createElement("template");return r.innerHTML=t,r}}function T(i,t,e=i,r){var n,c;if(t===O)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=R(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=T(i,s._$AS(i,t.values),s,r)),t}class se{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??C).importNode(e,!0);S.currentNode=s;let o=S.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new N(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new ce(o,this,t)),this._$AV.push(h),a=r[++c]}n!==(a==null?void 0:a.index)&&(o=S.nextNode(),n++)}return S.currentNode=C,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),R(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ee(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=z.createElement(Ht(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new se(s,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new z(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new N(this.O(H()),this.O(H()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const s=vt(t).nextSibling;vt(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=T(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const c=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=T(this,c[r+a],e,a),h===O&&(h=this._$AH[a]),n||(n=!R(h)||h!==this._$AH[a]),h===d?t=d:t!==d&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class oe extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class ne extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ae extends q{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===O)return;const r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ce{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const K=j.litHtmlPolyfillSupport;K==null||K(z,N),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.2");const le=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new N(t.insertBefore(H(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;let _=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=le(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}};var Ot;_._$litElement$=!0,_.finalized=!0,(Ot=P.litElementHydrateSupport)==null||Ot.call(P,{LitElement:_});const Z=P.litElementPolyfillSupport;Z==null||Z({LitElement:_});(P.litElementVersions??(P.litElementVersions=[])).push("4.2.2");var Q=function(i,t){return Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])},Q(i,t)};function L(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Q(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function tt(i){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&i[t],r=0;if(e)return e.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function et(i,t){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var r=e.call(i),s,o=[],n;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)o.push(s.value)}catch(c){n={error:c}}finally{try{s&&!s.done&&(e=r.return)&&e.call(r)}finally{if(n)throw n.error}}return o}function rt(i,t,e){if(e||arguments.length===2)for(var r=0,s=t.length,o;r<s;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return i.concat(o||Array.prototype.slice.call(t))}function $(i){return typeof i=="function"}function Rt(i){var t=function(r){Error.call(r),r.stack=new Error().stack},e=i(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var J=Rt(function(i){return function(e){i(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,s){return s+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function it(i,t){if(i){var e=i.indexOf(t);0<=e&&i.splice(e,1)}}var F=(function(){function i(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var t,e,r,s,o;if(!this.closed){this.closed=!0;var n=this._parentage;if(n)if(this._parentage=null,Array.isArray(n))try{for(var c=tt(n),a=c.next();!a.done;a=c.next()){var h=a.value;h.remove(this)}}catch(g){t={error:g}}finally{try{a&&!a.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}else n.remove(this);var u=this.initialTeardown;if($(u))try{u()}catch(g){o=g instanceof J?g.errors:[g]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var p=tt(l),f=p.next();!f.done;f=p.next()){var y=f.value;try{At(y)}catch(g){o=o??[],g instanceof J?o=rt(rt([],et(o)),et(g.errors)):o.push(g)}}}catch(g){r={error:g}}finally{try{f&&!f.done&&(s=p.return)&&s.call(p)}finally{if(r)throw r.error}}}if(o)throw new J(o)}},i.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)At(t);else{if(t instanceof i){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},i.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},i.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},i.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&it(e,t)},i.prototype.remove=function(t){var e=this._finalizers;e&&it(e,t),t instanceof i&&t._removeParent(this)},i.EMPTY=(function(){var t=new i;return t.closed=!0,t})(),i})(),zt=F.EMPTY;function It(i){return i instanceof F||i&&"closed"in i&&$(i.remove)&&$(i.add)&&$(i.unsubscribe)}function At(i){$(i)?i():i.unsubscribe()}var he={Promise:void 0},ue={setTimeout:function(i,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,rt([i,t],et(e)))},clearTimeout:function(i){return clearTimeout(i)},delegate:void 0};function de(i){ue.setTimeout(function(){throw i})}function Et(){}function V(i){i()}var Nt=(function(i){L(t,i);function t(e){var r=i.call(this)||this;return r.isStopped=!1,e?(r.destination=e,It(e)&&e.add(r)):r.destination=me,r}return t.create=function(e,r,s){return new st(e,r,s)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(F),pe=(function(){function i(t){this.partialObserver=t}return i.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(r){D(r)}},i.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(r){D(r)}else D(t)},i.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){D(e)}},i})(),st=(function(i){L(t,i);function t(e,r,s){var o=i.call(this)||this,n;return $(e)||!e?n={next:e??void 0,error:r??void 0,complete:s??void 0}:n=e,o.destination=new pe(n),o}return t})(Nt);function D(i){de(i)}function fe(i){throw i}var me={closed:!0,next:Et,error:fe,complete:Et},ge=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ve(i){return i}function be(i){return i.length===0?ve:i.length===1?i[0]:function(e){return i.reduce(function(r,s){return s(r)},e)}}var St=(function(){function i(t){t&&(this._subscribe=t)}return i.prototype.lift=function(t){var e=new i;return e.source=this,e.operator=t,e},i.prototype.subscribe=function(t,e,r){var s=this,o=_e(t)?t:new st(t,e,r);return V(function(){var n=s,c=n.operator,a=n.source;o.add(c?c.call(o,a):a?s._subscribe(o):s._trySubscribe(o))}),o},i.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},i.prototype.forEach=function(t,e){var r=this;return e=Pt(e),new e(function(s,o){var n=new st({next:function(c){try{t(c)}catch(a){o(a),n.unsubscribe()}},error:o,complete:s});r.subscribe(n)})},i.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},i.prototype[ge]=function(){return this},i.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return be(t)(this)},i.prototype.toPromise=function(t){var e=this;return t=Pt(t),new t(function(r,s){var o;e.subscribe(function(n){return o=n},function(n){return s(n)},function(){return r(o)})})},i.create=function(t){return new i(t)},i})();function Pt(i){var t;return(t=i??he.Promise)!==null&&t!==void 0?t:Promise}function ye(i){return i&&$(i.next)&&$(i.error)&&$(i.complete)}function _e(i){return i&&i instanceof Nt||ye(i)&&It(i)}var $e=Rt(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Lt=(function(i){L(t,i);function t(){var e=i.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var r=new Ct(this,this);return r.operator=e,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new $e},t.prototype.next=function(e){var r=this;V(function(){var s,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var n=tt(r.currentObservers),c=n.next();!c.done;c=n.next()){var a=c.value;a.next(e)}}catch(h){s={error:h}}finally{try{c&&!c.done&&(o=n.return)&&o.call(n)}finally{if(s)throw s.error}}}})},t.prototype.error=function(e){var r=this;V(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var s=r.observers;s.length;)s.shift().error(e)}})},t.prototype.complete=function(){var e=this;V(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var r=this,s=this,o=s.hasError,n=s.isStopped,c=s.observers;return o||n?zt:(this.currentObservers=null,c.push(e),new F(function(){r.currentObservers=null,it(c,e)}))},t.prototype._checkFinalizedStatuses=function(e){var r=this,s=r.hasError,o=r.thrownError,n=r.isStopped;s?e.error(o):n&&e.complete()},t.prototype.asObservable=function(){var e=new St;return e.source=this,e},t.create=function(e,r){return new Ct(e,r)},t})(St),Ct=(function(i){L(t,i);function t(e,r){var s=i.call(this)||this;return s.destination=e,s.source=r,s}return t.prototype.next=function(e){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.next)===null||s===void 0||s.call(r,e)},t.prototype.error=function(e){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.error)===null||s===void 0||s.call(r,e)},t.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},t.prototype._subscribe=function(e){var r,s;return(s=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&s!==void 0?s:zt},t})(Lt),E=(function(i){L(t,i);function t(e){var r=i.call(this)||this;return r._value=e,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(e){var r=i.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},t.prototype.getValue=function(){var e=this,r=e.hasError,s=e.thrownError,o=e._value;if(r)throw s;return this._throwIfClosed(),o},t.prototype.next=function(e){i.prototype.next.call(this,this._value=e)},t})(Lt);class xe{constructor(){this._posts=new E([]),this.posts$=this._posts.asObservable(),this._categories=new E([]),this.categories$=this._categories.asObservable(),this._activeCategory=new E(null),this.activeCategory$=this._activeCategory.asObservable(),this._selectedPost=new E(null),this.selectedPost$=this._selectedPost.asObservable(),this._currentPage=new E("home"),this.currentPage$=this._currentPage.asObservable(),this._theme=new E(localStorage.getItem("theme")||"dark"),this.theme$=this._theme.asObservable(),this._loading=new E(!1),this.loading$=this._loading.asObservable(),this.baseUrl="https://xarop.com/wp-json/wp/v2"}async fetchPosts(){this._loading.next(!0);try{const t=await fetch(`${this.baseUrl}/posts?_embed=1&per_page=6`);if(!t.ok)throw new Error("Error al conectar con la API de WordPress");const r=(await t.json()).map(o=>{var n,c,a,h,u,l,p,f,y;return{id:o.id,title:o.title.rendered,excerpt:o.excerpt.rendered,content:o.content.rendered,date:new Date(o.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),link:o.link,image:((a=(c=(n=o._embedded)==null?void 0:n["wp:featuredmedia"])==null?void 0:c[0])==null?void 0:a.source_url)||"https://via.placeholder.com/800x400?text=Xarop+Blog",author:((l=(u=(h=o._embedded)==null?void 0:h.author)==null?void 0:u[0])==null?void 0:l.name)||"Admin",categories:((y=(f=(p=o._embedded)==null?void 0:p["wp:term"])==null?void 0:f[0])==null?void 0:y.map(g=>({id:g.id,name:g.name})))||[]}}),s=new Map;r.forEach(o=>{o.categories.forEach(n=>s.set(n.id,n.name))}),this._categories.next(Array.from(s.entries()).map(([o,n])=>({id:o,name:n}))),this._posts.next(r)}catch(t){console.error("WP API Error:",t)}finally{this._loading.next(!1)}}setCategory(t){this._activeCategory.next(t)}navigateToDetail(t){this._selectedPost.next(t),this._currentPage.next("detail"),window.scrollTo(0,0)}navigateToHome(){this._selectedPost.next(null),this._currentPage.next("home")}toggleTheme(){const t=this._theme.value==="dark"?"light":"dark";this._theme.next(t),localStorage.setItem("theme",t),document.documentElement.setAttribute("data-theme",t)}initTheme(){document.documentElement.setAttribute("data-theme",this._theme.value)}}const m=new xe;class Dt extends _{render(){return v`
      <div class="container">
        <span class="badge">Open Cells & WordPress</span>
        <h1>Xarop Insights</h1>
        <p>Explorando la intersección del diseño, la tecnología y el desarrollo web moderno desde Barcelona.</p>
      </div>
    `}}b(Dt,"styles",I`
    :host {
      display: block;
      padding: 6rem 0 4rem 0;
      text-align: center;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .badge {
      display: inline-block;
      color: var(--primary);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin: 0 0 1.5rem 0;
      color: var(--text);
      line-height: 1;
      letter-spacing: -0.04em;
    }

    p {
      color: var(--text-dim);
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 300;
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.5rem; }
    }
  `);customElements.define("blog-header",Dt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we={CHILD:2},Ae=i=>(...t)=>({_$litDirective$:i,values:t});class Ee{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends Ee{constructor(t){if(super(t),this.it=d,t.type!==we.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===O)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;const Bt=Ae(ot);class nt extends _{render(){var t;return this.post?v`
      <div class="card" @click=${()=>m.navigateToDetail(this.post)}>
        <div class="image-container">
          <img src=${this.post.image} alt=${this.post.title}>
        </div>
        <div class="content">
          <div class="meta">
            <span class="category-label" @click=${e=>{var r;e.stopPropagation(),m.setCategory((r=this.post.categories[0])==null?void 0:r.id)}}>
              ${((t=this.post.categories[0])==null?void 0:t.name)||"Xarop"}
            </span>
            <span>${this.post.date}</span>
          </div>
          <h3>${this.post.title}</h3>
          <div class="excerpt">${Bt(this.post.excerpt)}</div>
          <div class="footer">
            <span class="author">Por ${this.post.author}</span>
            <span style="color: var(--primary); font-size: 0.8rem; font-weight: 600;">Leer →</span>
          </div>
        </div>
      </div>
    `:""}}b(nt,"properties",{post:{type:Object}}),b(nt,"styles",I`
    :host {
      display: block;
      cursor: pointer;
    }

    .card {
      background: var(--bg-card);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
      transition: all var(--transition);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      box-shadow: var(--shadow);
      border-color: var(--primary);
      transform: translateY(-4px);
    }

    .image-container {
      width: 100%;
      height: 220px;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
      filter: grayscale(10%);
    }

    .card:hover img {
      transform: scale(1.05);
      filter: grayscale(0%);
    }

    .content {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .meta {
      display: flex;
      gap: 1rem;
      font-size: 0.75rem;
      color: var(--text-dim);
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
    }

    .category-label {
      color: var(--primary);
    }

    .category-label:hover {
      text-decoration: underline;
    }

    h3 {
      margin: 0 0 1rem 0;
      color: var(--text);
      font-size: 1.4rem;
      line-height: 1.3;
      font-weight: 600;
    }

    .excerpt {
      color: var(--text-dim);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-weight: 300;
    }

    .footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }

    .author {
      font-size: 0.85rem;
      color: var(--text-dim);
      font-weight: 400;
    }
  `);customElements.define("blog-post-card",nt);class at extends _{constructor(){super(),this._posts=[],this._categories=[],this._activeCategory=null,this._loading=!1}connectedCallback(){super.connectedCallback(),this._subs=[m.posts$.subscribe(t=>{this._posts=t}),m.categories$.subscribe(t=>{this._categories=t}),m.activeCategory$.subscribe(t=>{this._activeCategory=t}),m.loading$.subscribe(t=>{this._loading=t})],m.fetchPosts()}disconnectedCallback(){super.disconnectedCallback(),this._subs.forEach(t=>t.unsubscribe())}render(){if(this._loading&&this._posts.length===0)return v`
        <div class="loading-state">
          <span class="loader"></span>
          <p>Cargando posts de WordPress...</p>
        </div>
      `;const t=this._activeCategory?this._posts.filter(e=>e.categories.some(r=>r.id===this._activeCategory)):this._posts;return v`
      <div class="filters">
        <button 
          class="filter-btn ${this._activeCategory?"":"active"}" 
          @click=${()=>m.setCategory(null)}>
          Todos los temas
        </button>
        ${this._categories.map(e=>v`
          <button 
            class="filter-btn ${this._activeCategory===e.id?"active":""}" 
            @click=${()=>m.setCategory(e.id)}>
            ${e.name}
          </button>
        `)}
      </div>

      <div class="grid">
        ${t.map(e=>v`
          <blog-post-card .post=${e}></blog-post-card>
        `)}
      </div>
    `}}b(at,"properties",{_posts:{type:Array,state:!0},_categories:{type:Array,state:!0},_activeCategory:{type:Object,state:!0},_loading:{type:Boolean,state:!0}}),b(at,"styles",I`
    :host {
      display: block;
      padding: 2rem 0 6rem 0;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 4rem;
      justify-content: center;
    }

    .filter-btn {
      background: none;
      border: none;
      color: var(--text-dim);
      padding: 0.5rem 0;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 400;
      transition: all var(--transition);
      border-bottom: 2px solid transparent;
      font-family: var(--font-main);
    }

    .filter-btn:hover {
      color: var(--text);
    }

    .filter-btn.active {
      color: var(--primary);
      border-bottom-color: var(--primary);
      font-weight: 600;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 3rem;
    }

    .loading-state {
      text-align: center;
      padding: 4rem;
      color: var(--text-dim);
    }

    .loader {
      width: 40px;
      height: 40px;
      border: 2px solid var(--border);
      border-top-color: var(--primary);
      border-radius: 50%;
      display: inline-block;
      animation: rotation 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    @keyframes rotation {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `);customElements.define("blog-page",at);class ct extends _{render(){var t;return this.post?v`
      <button class="back-btn" @click=${()=>m.navigateToHome()}>
        ← Volver al blog
      </button>

      <article>
        <div class="meta">
          <span>${((t=this.post.categories[0])==null?void 0:t.name)||"Xarop"}</span>
          <span>${this.post.date}</span>
        </div>
        <h1>${this.post.title}</h1>
        <img class="featured-image" src=${this.post.image} alt=${this.post.title}>
        
        <div class="post-content">
          ${Bt(this.post.content)}
        </div>
      </article>
    `:v`<p>Cargando artículo...</p>`}}b(ct,"properties",{post:{type:Object}}),b(ct,"styles",I`
    :host {
      display: block;
      padding: 4rem 0;
      color: var(--text);
    }

    .back-btn {
      background: none;
      border: 1px solid var(--border);
      color: var(--text-dim);
      padding: 0.75rem 1.5rem;
      border-radius: 999px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 4rem;
      font-weight: 500;
      transition: all var(--transition);
      font-family: var(--font-main);
    }

    .back-btn:hover {
      background: var(--bg-subtle);
      color: var(--text);
      border-color: var(--primary);
    }

    article {
      max-width: 750px;
      margin: 0 auto;
    }

    .meta {
      display: flex;
      gap: 1.5rem;
      color: var(--primary);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 3.5rem;
      line-height: 1.1;
      margin-bottom: 3rem;
      color: var(--text);
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    .featured-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 4rem;
    }

    .post-content {
      line-height: 1.9;
      font-size: 1.25rem;
      color: var(--text);
      font-weight: 300;
    }

    .post-content p {
      margin-bottom: 2rem;
    }

    .post-content h2 {
      font-size: 2rem;
      margin: 3rem 0 1.5rem 0;
      font-weight: 700;
    }

    .post-content figure {
      margin: 3rem 0;
    }

    .post-content img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.2rem; }
      .featured-image { height: 300px; }
      .post-content { font-size: 1.1rem; }
    }
  `);customElements.define("post-detail-page",ct);class lt extends _{constructor(){super(),this._currentPage="home",this._selectedPost=null,this._theme="dark",m.initTheme()}connectedCallback(){super.connectedCallback(),this._subs=[m.currentPage$.subscribe(t=>{this._currentPage=t}),m.selectedPost$.subscribe(t=>{this._selectedPost=t}),m.theme$.subscribe(t=>{this._theme=t})]}disconnectedCallback(){super.disconnectedCallback(),this._subs.forEach(t=>t.unsubscribe())}render(){return v`
      <div class="top-bar">
        <div class="theme-toggle-container">
          <div
            class="theme-switch"
            @click=${()=>m.toggleTheme()}
            title="Cambiar tema"
          >
            <span class="switch-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                ></path>
              </svg>
            </span>
            <span class="switch-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </span>
          </div>
        </div>
      </div>

      ${this._currentPage==="home"?v`<blog-header></blog-header>`:""}

      <main class="fade-in">
        ${this._currentPage==="home"?v`<blog-page></blog-page>`:v`<post-detail-page
              .post=${this._selectedPost}
            ></post-detail-page>`}
      </main>

      <footer>
        &copy; 2026 Xarop Design & Development. Barcelona Experience.
      </footer>
    `}}b(lt,"properties",{_currentPage:{type:String,state:!0},_selectedPost:{type:Object,state:!0},_theme:{type:String,state:!0}}),b(lt,"styles",I`
    :host {
      display: block;
      min-height: 100vh;
    }

    .top-bar {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 2rem;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    footer {
      text-align: center;
      padding: 6rem 0;
      color: var(--text-dim);
      font-size: 0.85rem;
      border-top: 1px solid var(--border);
      margin-top: 6rem;
      font-weight: 300;
      letter-spacing: 0.05em;
    }

    .theme-toggle-container {
      margin-top: 5px;
    }
  `);customElements.define("headless-app",lt);
