"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3801],{8104:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"nominee-flow",title:"Nominee Flow",description:"Description of the flow of nominee information in DEPA"},f=void 0,l={unversionedId:"flows/nominee-flow",id:"flows/nominee-flow",title:"Nominee Flow",description:"Description of the flow of nominee information in DEPA",source:"@site/internal/specification/flows/nominee-flow.md",sourceDirName:"flows",slug:"/flows/nominee-flow",permalink:"/specification/flows/nominee-flow",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/specification/flows/nominee-flow.md",tags:[],version:"current",lastUpdatedAt:1646839958,formattedLastUpdatedAt:"3/9/2022",frontMatter:{id:"nominee-flow",title:"Nominee Flow",description:"Description of the flow of nominee information in DEPA"},sidebar:"specification",previous:{title:"Guardian Flow",permalink:"/specification/flows/guardian-flow"}},p=[],s={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A nominee is the person who acts as the account controller post the death of the Data Principal. A nominee can be appointed by the Data Principal during his lifetime or nominee can approach the DP with adequate proof to be listed as nominee of the account."),(0,i.kt)("p",null,"The Nominee flow will be exactly the same as the guardian flow. One major difference is that instead of issuing the Guardian TOKEN the DP issues a Nominee TOKEN as a proof of being a nominee."))}u.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var f=o.createContext({}),l=function(e){var n=o.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(f.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,f=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(f,".").concat(m)]||u[m]||s[m]||i;return t?o.createElement(d,a(a({ref:n},p),{},{components:t})):o.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var f in n)hasOwnProperty.call(n,f)&&(c[f]=n[f]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);