(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7117:function(e,t,n){Promise.resolve().then(n.bind(n,1301))},1295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},unstable_getImgProps:function(){return a}});let r=n(1024),o=n(2301),l=n(7873),i=n(3222),s=r._(n(6515)),a=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=i.Image},1301:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7437),o=n(5506),l=n.n(o);n(2471);var i=n(2265),s=n(4606),a=function(e){let{mode:t,setMode:n}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{title:"change Dark Mode",className:"fixed right-4 top-0 z-50 p-2 rounded-full m-2  hover:bg-gray-500 dark:bg-slate-300 cursor-pointer",onClick:()=>n("dark"===t?"light":"dark"),children:"dark"===t?(0,r.jsx)(s.pwr,{}):(0,r.jsx)(s.eSY,{})})})},c=n(6691),u=n.n(c),d=n(1396),f=n.n(d),m=n(2333),h=n(9505),v=n(1552),g=n(649);let x=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};var p=function(){var e,t;let{username:n}=(0,g.C)(),{data:o,error:l,isLoading:i}=(0,m.ZP)("".concat(h.g.URL,"/system/menu/tuition-admin/linkset"),x);return l?(0,r.jsx)("div",{children:"failed to load"}):i?(0,r.jsx)(v.Z,{}):(0,r.jsxs)("div",{className:"w-full md:flex gap-2 flex justify-center",children:[o&&(null===(t=o.linkset[0])||void 0===t?void 0:null===(e=t.item)||void 0===e?void 0:e.map((e,t)=>(0,r.jsx)("div",{className:"font-light",children:(0,r.jsx)(f(),{className:"mx-2 p-2 hover:border-b",href:e.href.replace("/cms",""),children:e.title})},t))),n?(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(f(),{className:"font-light text-xs px-4 py-2 bg-slate-900  hover:shadow-md duration-500 text-slate-50",href:"https://tuition.yellow-website.com/cms/user/logout",children:"Logout"}),(0,r.jsx)("div",{className:"text-xs mt-1",children:n})]}):(0,r.jsx)(f(),{className:"font-light text-xs px-4 py-2 bg-slate-900  hover:shadow-md duration-500 text-slate-50",href:"https://tuition.yellow-website.com/cms/user/login",children:"Login"})]})};function y(e){let{children:t}=e,[n,o]=(0,i.useState)("light");return(0,r.jsx)("html",{lang:"en",className:"".concat(n),children:(0,r.jsxs)("body",{className:l().className,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(f(),{href:"/",children:(0,r.jsx)(u(),{src:"/yw-logo.png",width:"60",height:"60",alt:"logo"})}),(0,r.jsx)(a,{mode:n,setMode:o})]}),(0,r.jsx)("div",{children:(0,r.jsx)(p,{})}),t]})})}},1552:function(e,t,n){"use strict";var r=n(7437);n(2265),t.Z=function(){return(0,r.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,r.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});let r={URL:"https://tuition.yellow-website.com/cms"}},6476:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var r=n(2265),o=n(2333),l=n(9505);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function s(){let[e,t]=(0,r.useState)(),n=l.g.URL+"/jsonapi",{data:s,error:a,isLoading:c}=(0,o.ZP)(n,i);return(0,r.useEffect)(()=>{var e,n,r,o;s&&t(null==s?void 0:null===(o=s.meta)||void 0===o?void 0:null===(r=o.links)||void 0===r?void 0:null===(n=r.me)||void 0===n?void 0:null===(e=n.meta)||void 0===e?void 0:e.id)},[s]),{loggedInUserId:e}}},649:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(6476),o=n(2265),l=n(2333),i=n(9505);let s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function a(){let[e,t]=(0,o.useState)(""),{loggedInUserId:n}=(0,r.B)(),a=i.g.URL+"/jsonapi/user/user/"+n,{data:c,error:u,isLoading:d}=(0,l.ZP)(a,s);return console.log("HOOK USERNAME DATA? ",c,"HU ERROR",u),(0,o.useEffect)(()=>{var e,n;let r=c&&(null==c?void 0:null===(n=c.data)||void 0===n?void 0:null===(e=n.attributes)||void 0===e?void 0:e.name);r&&t(r)},[c]),{username:e}}},2471:function(){},5506:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},6691:function(e,t,n){e.exports=n(1295)},1396:function(e,t,n){e.exports=n(6685)},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return a}});var r=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function a(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,o=e.attr,l=e.size,a=e.title,c=s(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[447,801,685,144,971,596,744],function(){return e(e.s=7117)}),_N_E=e.O()}]);