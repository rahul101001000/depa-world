"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1813],{2548:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={id:"overview",title:"Overview",description:"Overview"},c="Architecture",l={unversionedId:"overview",id:"overview",title:"Overview",description:"Overview",source:"@site/internal/training/overview.md",sourceDirName:".",slug:"/overview",permalink:"/training/overview",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/overview.md",tags:[],version:"current",lastUpdatedAt:1691162932,formattedLastUpdatedAt:"8/4/2023",frontMatter:{id:"overview",title:"Overview",description:"Overview"},sidebar:"training",previous:{title:"Principles",permalink:"/training/principles"},next:{title:"Use cases",permalink:"/training/use_cases"}},d=[{value:"Key Terms and Concepts",id:"key-terms-and-concepts",children:[],level:2},{value:"Architecture Overview",id:"architecture-overview",children:[],level:2}],p={toc:d};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The DEPA training framework aims to develop technologies that allow secure and compliant sharing of datasets for analytics and training. "),(0,i.kt)("h2",{id:"key-terms-and-concepts"},"Key Terms and Concepts"),(0,i.kt)("p",null,"The terms defined in this section have special meaning in the context of the DEPA training framework throughout this document. To ensure readability, only a core set of terms is included in this section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Principal"),": The individual to whom data belongs. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Training dataset"),": Dataset obtained by aggregating and de-identifying data belonging to multiple data principals. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Training Data Provider (TDP)"),": Person or organization who shares training datasets. A TDP MUST have obtained consent from all data principals to share their de-identified data for analytics/training. TDPs MAY be required to share certain training datasets without remuneration. Where TDPs add significant values, they MAY expect remuneration on a FRAND (Fair, Reasonable and non-discriminatory) basis. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Training Data Consumer (TDC)"),": Person or organization who wishes to analyse or train models on one or more training datasets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trusted Execution Environment (TEE)"),": A combination of hardware and software that provides a secure environment for processing sensitive data. TEEs allow code to execute in isolation with confidentiality and integrity and protect data that exists within it. TEEs allow external parties to verify that the software does exactly what the software manufacturer claims it does."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Differential privacy"),": A system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Confidential Clean Room"),": A secure environment where training datasets can be processed while ensuring security and privacy. Confidential clean rooms bring together data protection capabilities of TEEs with algorithmic notions of privacy such as differential privacy. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CCR Provider"),": An organization that provides clean room infrastructure and services, either in the cloud or on-premises. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technical Standards Organization (TSO)"),": An sector-specific organization that defines security and privacy standards that TDPs, TDPs and CCR providers are expected to meet. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Self-regulated Organization (SRO)"),": A consortium of sector-specific organizations that regulates data sharing on the basis of standards set by the TSO. The SRO hosts core infrastructure components such as the central registry, contract and code signing services in support of the framework. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Central Registry"),": A service provided by the SRO where TDPs, TDCs and CCR providers are registered after meeting requirements set by the SRO. The central registry may host a token service that issues participants with tokens that participants can use as proof of registration. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dataset Reference"),": Metadata about a dataset published by a TDP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signed Dataset Reference"),": An identifiable and non-repudiable dataset reference. In DEPA training framework, signed  dataset references are encoded as COSE1 signed objects; the payload contains the dataset reference. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contract"),": An agreement between multiple participants (TDPs, TDCs, and CCR Providers) defining the terms and constraints under which one or more datasets are shared. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signed Contract"),": An identifiable and non-repudiable contract made by one or more participants. In DEPA training framework, signed contracts are encoded as COSE signed objects; the payload of the COSE structure contains the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contract Service"),": A service setup by the SRO to register dataset references and contracts between participants. The contract service MAY enforce SRO specific policies during dataset and contract registration to ensure that data sharing agreements meet published norms. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Management Service"),": A service hosted by TDPs to store data encryption keys, and release keys only to CCRs meet the TDPs security and privacy policies. ")),(0,i.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,i.kt)("p",null,"It is widely recognized that training accurate AI models requires diverse datasets. However, sharing datasets across organizations in a secure and complaint manner is often a tedious and time-consuming process. Organizations need to build trust between each other, and develop legal and technical terms under which datasets will be shared. From a regulatory perspective, this process lacks transparency and creates market distortions, with only a handful of large organizations being able to accumulate sufficiently diverse datasets. "),(0,i.kt)("p",null,"The DEPA training framework is a ",(0,i.kt)("em",{parentName:"p"},"techno-legal framework")," that democratizes and accelerates this process by providing a pre-certified secure, privacy preserving, and compliant process for Training Data Providers (TDP) to share datasets with any Training Data Consumers (TDC), obtain compensation in return, and share returns with data principals. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture",src:a(4573).Z,width:"671",height:"777"})),(0,i.kt)("p",null,"In the DEPA training framework, TDPs and TDCs register with a central registry setup by the SRO. After SRO verifies their identities, TDPs and TDCs sign a common agreement, accepting the terms of participation in the framework."),(0,i.kt)("p",null,"Next, TDPs register their datasets with a ",(0,i.kt)("a",{parentName:"p",href:"/training/contract_service_specifications"},"contract service")," setup by the SRO along with the terms of availability. At the same time, TDPs encrypt their datasets with their own encryption keys hosted in their key management systems (KMS) and host endpoints where encrypted datasets can be accessed. "),(0,i.kt)("p",null,"At any time, TDCs can query the contract service for available datasets. TDCs can use sample datasets provided by the TDPs to develop their initial models. Once a TDC has identified the datasets they wish to use, the TDC enters into a digital contract with the TDPs. Contract may be two-party (between a TDC and a single TDP), or multi-party (between a TDC and multiple TDPs). Contracts specify the datasets being shared and terms under which sharing is permitted. Terms include security and privacy constraints in line with standards set by the SRO, the purpose for which datasets are being shared, period of the contract, and payment terms. "),(0,i.kt)("p",null,"After agreeing on a contract, TDPs and TDCs digitally sign the contract using their long term digital identities and register signed contract with the contract service. A contract is said to be valid only when all participants in the contract have signed."),(0,i.kt)("p",null,"Next, the TDC (or a CCR provider that acts on behalf of the TDC) sets up a ",(0,i.kt)("a",{parentName:"p",href:"/training/confidential_clean_room_design"},"confidential clean room")," (CCR) with a set of signed contracts and additional configuration describing the model that the TDC wishes to train (e.g., initial weights, hyperparameters etc). The CCR is a secure environment the provides hardware based security and privacy for datasets and models during use. The CCR is deployed with a privacy-preserving analytics and ML framework certified by the SRO."),(0,i.kt)("p",null,"The CCR obtains encryption keys for TDP datasets from the TDPs KMS. The TDP KMS release keys to the CCR after verifying CCR attestation reports. The CCR decrypts the dataset, and trains the model with privacy guarantees. After training is complete, the CCR notifies the contract service, which can trigger external payment services to trigger payments to the TDPs in real time as per the terms of the contract. "),(0,i.kt)("p",null,"This framework aims to meet the principles of zero trust and privacy-by-design. The CCR ensures that raw datasets are never revealed to the TDC or any entity such as the CCR provider or the cloud provider acting on behalf of the TDC. Also, the TDC's model architecture or weights are not revealed to the TDPs."),(0,i.kt)("p",null,"We recognize that no technology or framework is perfect. Some TDCs and TDPs may act with malicious intent. Vulnerabilities may be discovered in contract services and CCRs implementations. New privacy technologies might emerge that invalidate current best practices. Instances of the DEPA training framework will be designed for resiliency in the face of such changes."))}h.isMDXComponent=!0},4573:function(e,t,a){t.Z=a.p+"assets/images/architecture.drawio-0128c32db744d0de289e528c29897c94.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return a?r.createElement(m,s(s({ref:t},d),{},{components:a})):r.createElement(m,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);