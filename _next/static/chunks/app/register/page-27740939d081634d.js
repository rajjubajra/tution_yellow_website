(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8154:function(e,t,n){Promise.resolve().then(n.bind(n,4801))},1552:function(e,t,n){"use strict";var o=n(7437);n(2265),t.Z=function(){return(0,o.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,o.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},4801:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(7437),s=n(2265),r=n(7447),a=function(e){let{userId:t}=e,[n,a]=(0,s.useState)(!0),[i,c]=(0,s.useState)(),[u,l]=(0,s.useState)("");return console.log("post data: ",u),(0,s.useEffect)(()=>{l({data:{type:"taxonomy_term--users_database",attributes:{status:!0,name:i+":"+t,field_userid:t,description:{value:"<p>User logged in ID from '/jsonapi/user/user'</p>",format:"basic_html",processed:"<p>User logged in Id</p>"}}}})},[t,i]),n?(0,o.jsxs)("form",{className:"w-60",onSubmit:e=>{e.preventDefault(),(0,r.v)(u,"/jsonapi/taxonomy_term/users_database"),a(!1)},children:[(0,o.jsx)("input",{required:!0,type:"text",name:"name",placeholder:"Name",value:i,onChange:e=>c(e.target.value)}),(0,o.jsx)("button",{className:"mt-5",children:"Register"})]}):(0,o.jsx)("div",{children:"Registration completed"})},i=n(1552),c=n(127),u=function(){let{userId:e,registration:t,isLoading:n}=(0,c.e)();return n?(0,o.jsx)(i.Z,{}):(0,o.jsx)("div",{className:"flex justify-center mt-20",children:t?(0,o.jsx)("div",{children:"Registered user"}):(0,o.jsx)(a,{userId:e})})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});var o=n(9222),s=n(9505);let r=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,o.Z)({method:"GET",url:s.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let r=await (0,o.Z)({method:"POST",url:"".concat(s.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",r),201===r.status&&window.location.replace("/report/postsuccess"),r}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}},127:function(e,t,n){"use strict";n.d(t,{e:function(){return c}});var o=n(2265),s=n(2333),r=n(9505),a=n(6476);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function c(e){let{loggedInUserId:t}=(0,a.B)(),n=r.g.URL+e,{data:c,error:u,isLoading:l}=(0,s.ZP)(n,i),[d,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var e;let n=c&&(null==c?void 0:null===(e=c.data)||void 0===e?void 0:e.some(e=>e.attributes.field_userid===t));console.log("User Id check ?",n),f(n)},[c,t]),{registration:d,userId:t,isLoading:l,error:u}}},6476:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var o=n(2265),s=n(2333),r=n(9505);let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function i(){let[e,t]=(0,o.useState)(),n=r.g.URL+"/jsonapi",{data:i,error:c,isLoading:u}=(0,s.ZP)(n,a);return(0,o.useEffect)(()=>{var e,n,o,s;i&&t(null==i?void 0:null===(s=i.meta)||void 0===s?void 0:null===(o=s.links)||void 0===o?void 0:null===(n=o.me)||void 0===n?void 0:null===(e=n.meta)||void 0===e?void 0:e.id)},[i]),{loggedInUserId:e}}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=8154)}),_N_E=e.O()}]);