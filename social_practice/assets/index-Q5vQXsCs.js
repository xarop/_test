var zt=Object.defineProperty;var Lt=(s,t,e)=>t in s?zt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var $=(s,t,e)=>Lt(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,nt=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),lt=new WeakMap;let xt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(nt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&lt.set(e,t))}return t}toString(){return this.cssText}};const Dt=s=>new xt(typeof s=="string"?s:s+"",void 0,at),B=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new xt(e,s,at)},Bt=(s,t)=>{if(nt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=z.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},ht=nt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Dt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:qt,getOwnPropertyDescriptor:Wt,getOwnPropertyNames:Ft,getOwnPropertySymbols:Yt,getPrototypeOf:Kt}=Object,m=globalThis,ut=m.trustedTypes,Zt=ut?ut.emptyScript:"",W=m.reactiveElementPolyfillSupport,U=(s,t)=>s,Q={toAttribute(s,t){switch(t){case Boolean:s=s?Zt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Pt=(s,t)=>!Vt(s,t),pt={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&qt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:o}=Wt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const c=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,r=[...Ft(e),...Yt(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(ht(i))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Q).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o,n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const c=r.getPropertyOptions(i),a=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:Q;this._$Em=i;const h=a.fromAttribute(e,c.type);this[i]=h??((n=this._$Ej)==null?void 0:n.get(i))??h,this._$Em=null}}requestUpdate(t,e,r,i=!1,o){var n;if(t!==void 0){const c=this.constructor;if(i===!1&&(o=this[t]),r??(r=c.getPropertyOptions(t)),!((r.hasChanged??Pt)(o,e)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(c._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:c}=n,a=this[o];c!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[U("elementProperties")]=new Map,x[U("finalized")]=new Map,W==null||W({ReactiveElement:x}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,dt=s=>s,D=T.trustedTypes,ft=D?D.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ot="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+y,Jt=`<${Ct}>`,E=document,M=()=>E.createComment(""),k=s=>s===null||typeof s!="object"&&typeof s!="function",ct=Array.isArray,Qt=s=>ct(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",F=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,bt=/>/g,g=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,mt=/"/g,Ut=/^(?:script|style|textarea|title)$/i,Gt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),H=Gt(1),P=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),_t=new WeakMap,A=E.createTreeWalker(E,129);function Tt(s,t){if(!ct(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(t):t}const Xt=(s,t)=>{const e=s.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=C;for(let c=0;c<e;c++){const a=s[c];let h,u,l=-1,d=0;for(;d<a.length&&(n.lastIndex=d,u=n.exec(a),u!==null);)d=n.lastIndex,n===C?u[1]==="!--"?n=vt:u[1]!==void 0?n=bt:u[2]!==void 0?(Ut.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=g):u[3]!==void 0&&(n=g):n===g?u[0]===">"?(n=i??C,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?g:u[3]==='"'?mt:yt):n===mt||n===yt?n=g:n===vt||n===bt?n=C:(n=g,i=void 0);const f=n===g&&s[c+1].startsWith("/>")?" ":"";o+=n===C?a+Jt:l>=0?(r.push(h),a.slice(0,l)+Ot+a.slice(l)+y+f):a+y+(l===-2?c:f)}return[Tt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class j{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[h,u]=Xt(t,e);if(this.el=j.createElement(h,r),A.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=A.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(Ot)){const d=u[n++],f=i.getAttribute(l).split(y),w=/([.?@])?(.*)/.exec(d);a.push({type:1,index:o,name:w[2],strings:f,ctor:w[1]==="."?ee:w[1]==="?"?re:w[1]==="@"?se:V}),i.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(Ut.test(i.tagName)){const l=i.textContent.split(y),d=l.length-1;if(d>0){i.textContent=D?D.emptyScript:"";for(let f=0;f<d;f++)i.append(l[f],M()),A.nextNode(),a.push({type:2,index:++o});i.append(l[d],M())}}}else if(i.nodeType===8)if(i.data===Ct)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:o}),l+=y.length-1}o++}}static createElement(t,e){const r=E.createElement("template");return r.innerHTML=t,r}}function O(s,t,e=s,r){var n,c;if(t===P)return t;let i=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=k(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=i:e._$Cl=i),i!==void 0&&(t=O(s,i._$AS(s,t.values),i,r)),t}class te{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??E).importNode(e,!0);A.currentNode=i;let o=A.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new R(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new ie(o,this,t)),this._$AV.push(h),a=r[++c]}n!==(a==null?void 0:a.index)&&(o=A.nextNode(),n++)}return A.currentNode=E,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),k(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=j.createElement(Tt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new te(i,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new j(t)),e}k(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new R(this.O(M()),this.O(M()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const i=dt(t).nextSibling;dt(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,i){const o=this.strings;let n=!1;if(o===void 0)t=O(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const c=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=O(this,c[r+a],e,a),h===P&&(h=this._$AH[a]),n||(n=!k(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ee extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class re extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class se extends V{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??p)===P)return;const r=this._$AH,i=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==p&&(r===p||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ie{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Y=T.litHtmlPolyfillSupport;Y==null||Y(j,R),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.2");const oe=(s,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new R(t.insertBefore(M(),o),o,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class _ extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}}var wt;_._$litElement$=!0,_.finalized=!0,(wt=S.litElementHydrateSupport)==null||wt.call(S,{LitElement:_});const K=S.litElementPolyfillSupport;K==null||K({LitElement:_});(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");class Mt extends _{render(){return H`
      <nav>
        <div class="logo">CellsSocial</div>
        <div class="actions">
          <span>Home</span>
          <span>Explore</span>
          <img class="avatar" src="https://i.pravatar.cc/150?u=me" alt="me">
        </div>
      </nav>
    `}}$(Mt,"styles",B`
    :host {
      display: block;
      height: 64px;
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    nav {
      max-width: 1000px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      background: linear-gradient(to right, #8b5cf6, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .actions {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #8b5cf6;
    }
  `);customElements.define("social-header",Mt);var G=function(s,t){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},G(s,t)};function N(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");G(s,t);function e(){this.constructor=s}s.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function X(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],r=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&r>=s.length&&(s=void 0),{value:s&&s[r++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function tt(s,t){var e=typeof Symbol=="function"&&s[Symbol.iterator];if(!e)return s;var r=e.call(s),i,o=[],n;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(c){n={error:c}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(n)throw n.error}}return o}function et(s,t,e){if(e||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return s.concat(o||Array.prototype.slice.call(t))}function b(s){return typeof s=="function"}function kt(s){var t=function(r){Error.call(r),r.stack=new Error().stack},e=s(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Z=kt(function(s){return function(e){s(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function rt(s,t){if(s){var e=s.indexOf(t);0<=e&&s.splice(e,1)}}var q=(function(){function s(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return s.prototype.unsubscribe=function(){var t,e,r,i,o;if(!this.closed){this.closed=!0;var n=this._parentage;if(n)if(this._parentage=null,Array.isArray(n))try{for(var c=X(n),a=c.next();!a.done;a=c.next()){var h=a.value;h.remove(this)}}catch(v){t={error:v}}finally{try{a&&!a.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}else n.remove(this);var u=this.initialTeardown;if(b(u))try{u()}catch(v){o=v instanceof Z?v.errors:[v]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var d=X(l),f=d.next();!f.done;f=d.next()){var w=f.value;try{$t(w)}catch(v){o=o??[],v instanceof Z?o=et(et([],tt(o)),tt(v.errors)):o.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new Z(o)}},s.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)$t(t);else{if(t instanceof s){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},s.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},s.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},s.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&rt(e,t)},s.prototype.remove=function(t){var e=this._finalizers;e&&rt(e,t),t instanceof s&&t._removeParent(this)},s.EMPTY=(function(){var t=new s;return t.closed=!0,t})(),s})(),Ht=q.EMPTY;function jt(s){return s instanceof q||s&&"closed"in s&&b(s.remove)&&b(s.add)&&b(s.unsubscribe)}function $t(s){b(s)?s():s.unsubscribe()}var ne={Promise:void 0},ae={setTimeout:function(s,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,et([s,t],tt(e)))},clearTimeout:function(s){return clearTimeout(s)},delegate:void 0};function ce(s){ae.setTimeout(function(){throw s})}function gt(){}function L(s){s()}var Rt=(function(s){N(t,s);function t(e){var r=s.call(this)||this;return r.isStopped=!1,e?(r.destination=e,jt(e)&&e.add(r)):r.destination=ue,r}return t.create=function(e,r,i){return new st(e,r,i)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,s.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(q),le=(function(){function s(t){this.partialObserver=t}return s.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(r){I(r)}},s.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(r){I(r)}else I(t)},s.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){I(e)}},s})(),st=(function(s){N(t,s);function t(e,r,i){var o=s.call(this)||this,n;return b(e)||!e?n={next:e??void 0,error:r??void 0,complete:i??void 0}:n=e,o.destination=new le(n),o}return t})(Rt);function I(s){ce(s)}function he(s){throw s}var ue={closed:!0,next:gt,error:he,complete:gt},pe=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function de(s){return s}function fe(s){return s.length===0?de:s.length===1?s[0]:function(e){return s.reduce(function(r,i){return i(r)},e)}}var At=(function(){function s(t){t&&(this._subscribe=t)}return s.prototype.lift=function(t){var e=new s;return e.source=this,e.operator=t,e},s.prototype.subscribe=function(t,e,r){var i=this,o=be(t)?t:new st(t,e,r);return L(function(){var n=i,c=n.operator,a=n.source;o.add(c?c.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},s.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},s.prototype.forEach=function(t,e){var r=this;return e=St(e),new e(function(i,o){var n=new st({next:function(c){try{t(c)}catch(a){o(a),n.unsubscribe()}},error:o,complete:i});r.subscribe(n)})},s.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},s.prototype[pe]=function(){return this},s.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fe(t)(this)},s.prototype.toPromise=function(t){var e=this;return t=St(t),new t(function(r,i){var o;e.subscribe(function(n){return o=n},function(n){return i(n)},function(){return r(o)})})},s.create=function(t){return new s(t)},s})();function St(s){var t;return(t=s??ne.Promise)!==null&&t!==void 0?t:Promise}function ve(s){return s&&b(s.next)&&b(s.error)&&b(s.complete)}function be(s){return s&&s instanceof Rt||ve(s)&&jt(s)}var ye=kt(function(s){return function(){s(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Nt=(function(s){N(t,s);function t(){var e=s.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var r=new Et(this,this);return r.operator=e,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new ye},t.prototype.next=function(e){var r=this;L(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var n=X(r.currentObservers),c=n.next();!c.done;c=n.next()){var a=c.value;a.next(e)}}catch(h){i={error:h}}finally{try{c&&!c.done&&(o=n.return)&&o.call(n)}finally{if(i)throw i.error}}}})},t.prototype.error=function(e){var r=this;L(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var i=r.observers;i.length;)i.shift().error(e)}})},t.prototype.complete=function(){var e=this;L(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),s.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var r=this,i=this,o=i.hasError,n=i.isStopped,c=i.observers;return o||n?Ht:(this.currentObservers=null,c.push(e),new q(function(){r.currentObservers=null,rt(c,e)}))},t.prototype._checkFinalizedStatuses=function(e){var r=this,i=r.hasError,o=r.thrownError,n=r.isStopped;i?e.error(o):n&&e.complete()},t.prototype.asObservable=function(){var e=new At;return e.source=this,e},t.create=function(e,r){return new Et(e,r)},t})(At),Et=(function(s){N(t,s);function t(e,r){var i=s.call(this)||this;return i.destination=e,i.source=r,i}return t.prototype.next=function(e){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,e)},t.prototype.error=function(e){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,e)},t.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},t.prototype._subscribe=function(e){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&i!==void 0?i:Ht},t})(Nt),me=(function(s){N(t,s);function t(e){var r=s.call(this)||this;return r._value=e,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(e){var r=s.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},t.prototype.getValue=function(){var e=this,r=e.hasError,i=e.thrownError,o=e._value;if(r)throw i;return this._throwIfClosed(),o},t.prototype.next=function(e){s.prototype.next.call(this,this._value=e)},t})(Nt);class _e{constructor(){this._posts=new me([]),this.posts$=this._posts.asObservable()}async loadPosts(){try{const r=(await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")).json()).map(i=>({...i,author:`Usuario ${i.userId}`,avatar:`https://i.pravatar.cc/150?u=${i.userId}`,likes:Math.floor(Math.random()*100),timestamp:"Hace 2 horas"}));this._posts.next(r)}catch(t){console.error("Error loading social feed",t)}}addPost(t){const e=this._posts.value,r={id:Date.now(),title:"Nuevo Post",body:t,author:"Tú",avatar:"https://i.pravatar.cc/150?u=me",likes:0,timestamp:"Ahora mismo"};this._posts.next([r,...e])}}const J=new _e;class it extends _{render(){return this.post?H`
      <div class="card">
        <div class="header">
          <img class="avatar" src=${this.post.avatar} alt="avatar">
          <div class="meta">
            <h4>${this.post.author}</h4>
            <span>${this.post.timestamp}</span>
          </div>
        </div>
        <div class="content">
          <p>${this.post.body}</p>
        </div>
        <div class="footer">
          <div class="action">❤️ ${this.post.likes}</div>
          <div class="action">💬 Comentar</div>
          <div class="action">🔗 Compartir</div>
        </div>
      </div>
    `:""}}$(it,"properties",{post:{type:Object}}),$(it,"styles",B`
    .card {
      background: #1e293b;
      border-radius: 12px;
      padding: 1.25rem;
      margin-bottom: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: border-color 0.2s;
    }

    .card:hover {
      border-color: rgba(139, 92, 246, 0.5);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .meta h4 {
      margin: 0;
      font-size: 0.95rem;
    }

    .meta span {
      font-size: 0.8rem;
      color: #94a3b8;
    }

    .content {
      font-size: 1rem;
      color: #f8fafc;
      margin-bottom: 1rem;
    }

    .footer {
      display: flex;
      gap: 1.5rem;
      color: #94a3b8;
      font-size: 0.85rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 0.75rem;
    }

    .action {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .action:hover {
      color: #8b5cf6;
    }
  `);customElements.define("social-post",it);class ot extends _{constructor(){super(),this._posts=[]}connectedCallback(){super.connectedCallback(),this._subscription=J.posts$.subscribe(t=>{this._posts=t}),J.loadPosts()}disconnectedCallback(){super.disconnectedCallback(),this._subscription&&this._subscription.unsubscribe()}_handlePost(){const t=this.shadowRoot.querySelector("textarea");t.value.trim()&&(J.addPost(t.value),t.value="")}render(){return H`
      <div class="composer">
        <textarea placeholder="¿Qué estás pensando?" rows="3"></textarea>
        <div class="composer-footer">
          <button @click=${this._handlePost}>Publicar</button>
        </div>
      </div>

      <div class="feed">
        ${this._posts.map(t=>H`
          <social-post .post=${t}></social-post>
        `)}
      </div>
    `}}$(ot,"properties",{_posts:{type:Array,state:!0}}),$(ot,"styles",B`
    :host {
      display: block;
      padding-top: 2rem;
    }

    .composer {
      background: #1e293b;
      padding: 1rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    textarea {
      width: 100%;
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: white;
      padding: 1rem;
      resize: none;
      font-family: inherit;
      margin-bottom: 0.5rem;
    }

    .composer-footer {
      display: flex;
      justify-content: flex-end;
    }

    button {
      background: #8b5cf6;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      transition: background 0.2s;
    }

    button:hover {
      background: #7c3aed;
    }
  `);customElements.define("home-page",ot);class It extends _{render(){return H`
      <social-header></social-header>
      <main>
        <home-page></home-page>
      </main>
    `}}$(It,"styles",B`
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `);customElements.define("social-app",It);
