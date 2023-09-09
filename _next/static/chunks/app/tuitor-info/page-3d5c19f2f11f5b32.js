(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{3591:function(e,i,t){Promise.resolve().then(t.bind(t,8711))},1295:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{default:function(){return r},unstable_getImgProps:function(){return u}});let l=t(1024),n=t(2301),d=t(7873),a=t(3222),o=l._(t(6515)),u=e=>{(0,d.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:i}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(i))void 0===t&&delete i[e];return{props:i}},r=a.Image},2706:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return d}});let l=t(1024),n=l._(t(2265)),d=n.default.createContext(null)},1552:function(e,i,t){"use strict";var l=t(7437);t(2265),i.Z=function(){return(0,l.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,l.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},8711:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return f}});var l=t(7437),n=t(2333),d=t(9505),a=t(1552),o=t(2265),u=function(e){let{item:i}=e,[t,n]=(0,o.useState)(null);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-light text-xs uppercase",children:"Brief Introduction:"}),t===i.id?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:i.attributes.field_tuitor_introduction.value}}):(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:i.attributes.field_tuitor_introduction.value.substring(0,150)}}),(0,l.jsx)("button",{onClick:()=>t===i.id?n(null):n(i.id),className:"text-xs hover:tracking-wider duration-300 mt-5",children:t===i.id?"Close":"Read more.."})]})},r=t(6691),s=t.n(r);function c(e){var i,t,n,a,o,u,r,c,m,f,v,_,h,x,g,j,p,b;let{data:y,id:N}=e,w=null==y?void 0:null===(i=y.included)||void 0===i?void 0:i.findIndex(e=>e.id===N),I=null==y?void 0:null===(o=y.included[w])||void 0===o?void 0:null===(a=o.relationships)||void 0===a?void 0:null===(n=a.field_media_image)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.id;console.log("id",N);let O=null==y?void 0:null===(u=y.included)||void 0===u?void 0:u.findIndex(e=>e.id===I),P=null==y?void 0:null===(c=y.included[O])||void 0===c?void 0:null===(r=c.attributes)||void 0===r?void 0:r.uri.url;return null==y||null===(h=y.included[O])||void 0===h||null===(_=h.relationships)||void 0===_||null===(v=_.field_media_image)||void 0===v||null===(f=v.data)||void 0===f||null===(m=f.meta)||void 0===m||m.width,null==y||null===(b=y.included[O])||void 0===b||null===(p=b.relationships)||void 0===p||null===(j=p.field_media_image)||void 0===j||null===(g=j.data)||void 0===g||null===(x=g.meta)||void 0===x||x.height,y&&N&&(0,l.jsx)(s(),{className:"w-full h-auto",src:d.g.URL+P.replace("cms/",""),width:500,height:500,alt:"test"})}let m=function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return fetch(...i).then(e=>e.json())};var f=function(){var e;let{data:i,error:t,isLoading:o}=(0,n.ZP)("".concat(d.g.URL,"/jsonapi/node/tutor?include=field__address, field__address.field_city,field__address.field_country, field__address.field_post_code,field_students,field_subject,field_tutor_s_name,field_image_media,field_image_media.field_media_image"),m),{data:r,error:s,isLoading:f}=(0,n.ZP)("".concat(d.g.URL).concat("/jsonapi/taxonomy_term/tution_subjects"),m);console.log("DatA TUITOR :",i);let v=(e,i)=>{let t=e.findIndex(e=>e.id===i),l=e[t].attributes.name;return l},_=e=>{var i;let t=[];return null==r||null===(i=r.data)||void 0===i||i.map(i=>{null==e||e.some(e=>{e.id===i.id&&t.push({subject_id:i.id,subject_name:i.attributes.name})})}),t&&t.map(e=>(0,l.jsx)("div",{children:e.subject_name},e.subject_id))};return t?(0,l.jsx)("div",{children:"failed to load"}):o?(0,l.jsx)(a.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"ml-10 text-2xl uppercase mt-20",children:"Our Tutors:"}),(0,l.jsx)("div",{className:"md:grid md:grid-cols-2",children:i&&(null==i?void 0:null===(e=i.data)||void 0===e?void 0:e.map(e=>{var t,n,d;return(0,l.jsxs)("div",{className:"my-10 mx-5 p-10",children:[(0,l.jsx)("div",{className:"w-40 my-4",children:(0,l.jsx)(c,{data:i,id:null===(d=e.relationships)||void 0===d?void 0:null===(n=d.field_image_media)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.id})}),(0,l.jsx)("div",{className:"text-2xl",children:v(null==i?void 0:i.included,e.relationships.field_tutor_s_name.data.id)}),(0,l.jsx)("div",{className:"flex gap-3 font-bold",children:_(e.relationships.field_subject.data)}),(0,l.jsx)("div",{className:"mt-5",children:(0,l.jsx)(u,{item:e})})]},e.id)}))})]})}},9505:function(e,i,t){"use strict";t.d(i,{g:function(){return l}});let l={URL:"https://tuition.yellow-website.com/cms"}},6691:function(e,i,t){e.exports=t(1295)}},function(e){e.O(0,[801,144,971,596,744],function(){return e(e.s=3591)}),_N_E=e.O()}]);