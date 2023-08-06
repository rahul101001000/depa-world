"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6738],{2475:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"depa",title:"Data Sharing in DEPA",description:"Data Sharing in DEPA"},l="Data Sharing in DEPA",c={unversionedId:"depa",id:"depa",title:"Data Sharing in DEPA",description:"Data Sharing in DEPA",source:"@site/internal/training/depa.md",sourceDirName:".",slug:"/depa",permalink:"/training/depa",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/depa.md",tags:[],version:"current",lastUpdatedAt:1691162932,formattedLastUpdatedAt:"8/4/2023",frontMatter:{id:"depa",title:"Data Sharing in DEPA",description:"Data Sharing in DEPA"},sidebar:"training",previous:{title:"DEPA Training Framework",permalink:"/training/depa_training_framework"},next:{title:"Principles",permalink:"/training/principles"}},d=[{value:"Limits of Consent",id:"limits-of-consent",children:[],level:2},{value:"De-identification",id:"de-identification",children:[],level:2},{value:"Privacy-preserving Data Sharing",id:"privacy-preserving-data-sharing",children:[],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-sharing-in-depa"},"Data Sharing in DEPA"),(0,r.kt)("p",null,"The Data Empowerment and Protection Architecture (DEPA) is digital public good (DPG) that empowers data principals to share their data residing with one or more ",(0,r.kt)("em",{parentName:"p"},"data providers")," with ",(0,r.kt)("em",{parentName:"p"},"data consumers")," who wish to use data to provide services. All data sharing in DEPA is mediated by fine-grained and timely consent - data flows to data consumers only after clear and explicit consent has been obtained from the data principal. DEPA introduces an entity called the ",(0,r.kt)("em",{parentName:"p"},"Consent Manager"),", which helps citizens manage consent requests. DEPA also defines data formats, APIs and protocols to simplify and standardize the process of obtaining credible data for making better decisions e.g., deciding what services to offer. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Sharing in DEPA",src:a(5069).Z,width:"896",height:"496"})),(0,r.kt)("p",null,"While DEPA to a large extent addresses the challenge of obtaining authentic personal data, this data is purpose-limited. Its use is limited to offering a specific service for which consent was obtained. This data cannot be used or shared for other purposes such as analytics or training models. Therefore, organizations that wish to build better models are constrained by the lack of high quality training datasets. This is especially true for smaller organizations that do not have a large user base of their own. For such organizations, creating new datasets is both expensive, laborious, and time-consuming. "),(0,r.kt)("p",null,"An alternative is to source data from other organizations. For example, advertisers can (and often do) source data from other providers to enrich their own datasets. A fintech that specializes in fraud detection could in theory source transaction data from financial institutions such as banks, credit bureaus, and payment gateways. But such ad-hoc data sharing arrangements often compromise user privacy, lack transparency, and are anti-competitive. It is therefore not surprising that such arrangements are increasingly viewed with a lot of suspicion from law makers, regulators and the public at large. In fact, this has motivated a number of privacy laws such as HIPAA and GDPR which recognize each individual's right to privacy and require that organizations establish a legal basis before using or sharing personal data. "),(0,r.kt)("h2",{id:"limits-of-consent"},"Limits of Consent"),(0,r.kt)("p",null,"In theory, it is possible to obtain separate consent for analytics and training purposes. However, fine-grained consent is not practical for these scenarios for the following reasons."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data principals do not directly benefit from analytics and training. These tasks benefit businesses and sometimes the society. Therefore, unless appropriately incentivized, data principals are less likely to consent to the use of their data for these purposes. "),(0,r.kt)("li",{parentName:"ul"},"Analytics and training requires data to be used multiple times over a longer time period. For example, training a flow-based credit model requires a dataset of past borrowers and their profiles. This dataset is useful for training only when it has been labelled with additional information collected over time such as whether the borrower defaulted or not. This label may only be available a long time after the data was collected. Therefore, consent obtained at the time the data was first obtained is less meaningful. "),(0,r.kt)("li",{parentName:"ul"},"Analytics and training often require data from multiple sources to be aggregated and joined. Consent collect at source should not be construed to allow arbitrary aggregation and joining with data from other sources since such operations can significantly compromise privacy.  ")),(0,r.kt)("h2",{id:"de-identification"},"De-identification"),(0,r.kt)("p",null,"For scenarios where consent is not practical, modern privacy laws permit alternative ways for establishing a legal basis for sharing and processing bulk data. It is possible to share and process ",(0,r.kt)("em",{parentName:"p"},"de-identified")," data ",(0,r.kt)("strong",{parentName:"p"},"as long as the risk of re-identification has been minimized"),". There are a number of de-identification techniques, e.g., data masking, PII-scrubbing, and k-anonymization. "),(0,r.kt)("p",null,"Recently, real world studies have shown that user information can often be reverse engineered from de-identified datasets e.g, by correlating attributes in the dataset with additional data. The canonical example is the the Netflix dataset which was released for research purposes. Researchers subsequently showed that it was easy to re-identify Netflix users.  "),(0,r.kt)("h2",{id:"privacy-preserving-data-sharing"},"Privacy-preserving Data Sharing"),(0,r.kt)("p",null,"The challenges in data sharing have given rise to a number of ",(0,r.kt)("em",{parentName:"p"},"privacy preserving technologies")," (PETs), which enable secure and private sharing of datasets. Some of the technologies namely confidential computing, differential privacy, and distributed ledgers have matured over the last decade and are finding applications at scale. The DEPA training framework aims to build on these technologies and enable privacy-by-design data sharing and unlock the true value of data and AI."))}u.isMDXComponent=!0},5069:function(e,t,a){t.Z=a.p+"assets/images/depa-0be3e22957caea0bb0547d1bd6c82fe7.jpg"},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);