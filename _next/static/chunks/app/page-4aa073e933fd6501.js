(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6374:function(e,t,r){Promise.resolve().then(r.bind(r,9901))},9901:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Home}});var a=r(3602),s=r(9709);let o=(0,s.createContext)({state:{authorized:!1,heading:"",cards:[],user:null,isBrowser:!1},dispatch:()=>{}}),MainUnauthorized=()=>{let e=(0,s.useContext)(o);return(0,a.jsxs)("section",{className:"bg-gray-200 w-2/3 mx-auto my-6 p-16 ",children:[(0,a.jsx)("h2",{className:"text-5xl font-medium",children:e.state.heading}),(0,a.jsx)("p",{className:"text-2xl pt-2",children:"Facebook & VK killer."})]})},CardsList=()=>{let e=(0,s.useContext)(o);return e.state.cards?(0,a.jsx)("div",{className:"flex gap-2 pt-6 flex-wrap justify-center",children:e.state.cards.map((e,t)=>(0,a.jsxs)("div",{className:"bg-gray-200 w-1/3 p-8",children:[(0,a.jsx)("img",{src:e.image,alt:"Картинка"}),(0,a.jsx)("h2",{className:"text-2xl font-medium",children:e.title}),(0,a.jsx)("p",{children:e.content})]},t))}):(0,a.jsx)("div",{children:"Loading..."})},MainAuthorized=()=>(0,a.jsx)("div",{children:(0,a.jsx)(CardsList,{})}),Main=()=>{let e=(0,s.useContext)(o);return(0,a.jsx)("main",{children:e.state.authorized?(0,a.jsx)(MainAuthorized,{}):(0,a.jsx)(MainUnauthorized,{})})},n={login:"Login",logout:"Logout"},Button=e=>{let{onClick:t}=e,r=(0,s.useContext)(o);return(0,a.jsx)("button",{type:"submit",className:"p-2 border-2 border-solid rounded ".concat(r.state.authorized?"border-red-500 text-red-500":"border-emerald-500 text-emerald-500"),onClick:t,children:r.state.authorized?n.logout:n.login})},Authorized=()=>{var e,t,r;let n=(0,s.useContext)(o);return(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("span",{className:"py-2 text-gray-800",children:"Hello, "+(null===(e=n.state.user)||void 0===e?void 0:e.name)}),(0,a.jsx)("img",{src:null===(t=n.state.user)||void 0===t?void 0:t.avatar,alt:null===(r=n.state.user)||void 0===r?void 0:r.name,className:"rounded-full"}),(0,a.jsx)(Button,{onClick:function(){n.dispatch({type:"unauthorized"}),localStorage.removeItem("authorized"),localStorage.removeItem("user")}})]})},fetchFunction=async(e,t,r)=>{let a;return"GET"===t&&await fetch(e,{headers:{Authorization:"Bearer ".concat(r.auth)}}).then(e=>{if(e.ok)return e.json();throw Error(e.statusText)}).then(e=>{a=e}).catch(e=>{console.error(e)}),await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.body)}).then(e=>{if(e.ok)return e.json();throw Error(e.statusText)}).then(e=>{a=e}).catch(e=>{console.error(e)}),a},i="Username",l="Password",AuthorizationForm=()=>{let e=(0,s.useContext)(o),submitHandler=async t=>{t.preventDefault();let r=t.currentTarget,a=r.elements.namedItem(i),s=r.elements.namedItem(l),o=await fetchFunction("http://localhost:7070/auth","POST",{body:{login:a.value,password:s.value}});o&&o.token&&localStorage&&(localStorage.setItem("authorized",o.token),e.dispatch({type:"authorized"})),a.value="",s.value=""};return(0,a.jsxs)("form",{className:"flex gap-2",onSubmit:submitHandler,children:[(0,a.jsx)("input",{name:i,className:"p-2 rounded",placeholder:i}),(0,a.jsx)("input",{name:l,className:"p-2 rounded",placeholder:l}),(0,a.jsx)(Button,{})]})},Header=()=>{let e=(0,s.useContext)(o);return(0,a.jsxs)("header",{className:"flex items-center justify-between p-4 bg-gray-100",children:[(0,a.jsx)("h1",{className:"text-2xl",children:e.state.heading}),e.state.authorized?(0,a.jsx)(Authorized,{}):(0,a.jsx)(AuthorizationForm,{})]})};function reducer(e,t){switch(t.type){case"authorized":return{...e,authorized:!0};case"unauthorized":return{...e,authorized:!1};case"getUser":return{...e,user:t.payload};case"getCards":return{...e,cards:t.payload};case"browser":return{...e,isBrowser:t.payload};default:return e}}async function getCards(e){let t=await fetchFunction("http://localhost:7070/private/news","GET",{auth:e});if(t)return t;throw Error("Failed to fetch cards")}let useAuthorizedData=()=>{let[e,t]=(0,s.useReducer)(reducer,{authorized:!1,heading:"Neto Social",cards:null,user:null,isBrowser:!1}),r=(0,s.useCallback)(async e=>{let r;if(!(r=await fetchFunction("http://localhost:7070/private/me","GET",{auth:e})))throw Error("Failed to fetch user");return localStorage.setItem("user",JSON.stringify(r)),t({type:"getUser",payload:r}),r},[]),a=(0,s.useCallback)(async e=>{let r=await getCards(e);if(!r)throw Error("Failed to fetch cards");return t({type:"getCards",payload:r}),r},[]);return(0,s.useEffect)(()=>{let init=async()=>{try{t({type:"browser",payload:!0});let e=localStorage.getItem("authorized");if(e){let s=await r(e);await a(e),s&&(t({type:"getUser",payload:s}),t({type:"authorized"}))}}catch(e){console.error("Error initializing data:",e),t({type:"unauthorized"})}};init()},[a,r,e.authorized]),{state:e,dispatch:t}};function Home(){let{state:e,dispatch:t}=useAuthorizedData();return e.isBrowser?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.Provider,{value:{state:e,dispatch:t},children:[(0,a.jsx)(Header,{}),(0,a.jsx)(Main,{})]})}):null}},3200:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(9709),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var a,o={},u=null,d=null;for(a in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:u,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},3602:function(e,t,r){"use strict";e.exports=r(3200)}},function(e){e.O(0,[496,663,744],function(){return e(e.s=6374)}),_N_E=e.O()}]);