(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8154:function(t,e,n){Promise.resolve().then(n.bind(n,4801))},1552:function(t,e,n){"use strict";var o=n(7437);n(2265),e.Z=function(){return(0,o.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,o.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},4801:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var o=n(7437),a=n(2265),s=n(7447),r=function(t){let{userId:e}=t,[n,r]=(0,a.useState)("");return console.log("post data: ",n),(0,a.useEffect)(()=>{let t=new Date;console.log(t);let n={data:{type:"node--user_database",attributes:{title:"Register Id :"+e,field_register_date:function(t){let e=t.getUTCFullYear(),n=String(t.getUTCMonth()+1).padStart(2,"0"),o=String(t.getUTCDate()).padStart(2,"0"),a=String(t.getUTCHours()).padStart(2,"0"),s=String(t.getUTCMinutes()).padStart(2,"0"),r=String(t.getUTCSeconds()).padStart(2,"0"),i=t.getTimezoneOffset();return"".concat(e,"-").concat(n,"-").concat(o,"T").concat(a,":").concat(s,":").concat(r).concat(i>=0?"-":"+").concat(String(Math.floor(Math.abs(i)/60)).padStart(2,"0"),":").concat(String(Math.abs(i)%60).padStart(2,"0"))}(t),field_user_id:e,moderation_state:"published",status:!0}}};r(n)},[e]),(0,o.jsx)("form",{className:"w-60",onSubmit:t=>{t.preventDefault(),(0,s.v)(n,"/jsonapi/node/user_database")},children:(0,o.jsx)("button",{className:"mt-5",children:"Register"})})},i=n(2333),c=n(9505),l=n(1552);let d=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var u=function(){let t=c.g.URL+"/jsonapi",{data:e,error:n,isLoading:s}=(0,i.ZP)(t,d),[u,f]=(0,a.useState)("");console.log("UserId",u),(0,a.useEffect)(()=>{var t,n,o,a;f(e&&(null==e?void 0:null===(a=e.meta)||void 0===a?void 0:null===(o=a.links)||void 0===o?void 0:null===(n=o.me)||void 0===n?void 0:null===(t=n.meta)||void 0===t?void 0:t.id))},[e]);let p=c.g.URL+"/jsonapi/node/user_database",{data:g,error:v,isLoading:h}=(0,i.ZP)(p,d);console.log("Userdata: ",g);let[S,m]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{var t;let e=g&&(null==g?void 0:null===(t=g.data)||void 0===t?void 0:t.indexOf(t=>t.attributes.field_user_id===u));console.log("User Id check ?",e),1===e?m(!0):m(!1)},[g,u]),s)?(0,o.jsx)(l.Z,{}):(0,o.jsx)("div",{className:"flex justify-center mt-20",children:S?(0,o.jsx)("div",{children:"Registered user"}):(0,o.jsx)(r,{userId:u})})}},9505:function(t,e,n){"use strict";n.d(e,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(t,e,n){"use strict";n.d(e,{v:function(){return s}});var o=n(9222),a=n(9505);let s=async(t,e)=>{console.log("data in post function: ",t);try{let n=await (0,o.Z)({method:"GET",url:a.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let s=await (0,o.Z)({method:"POST",url:"".concat(a.g.URL).concat(e),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:t});return console.log("Post done: ",s),201===s.status&&window.location.replace("/report/postsuccess"),s}catch(t){console.log("Post Error: ",t)}}catch(t){console.log("Session token error: ",t)}}}},function(t){t.O(0,[801,222,971,596,744],function(){return t(t.s=8154)}),_N_E=t.O()}]);