(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{8522:function(e,t,n){Promise.resolve().then(n.bind(n,4179))},4179:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(7437),r=n(127),s=n(649),i=function(){let{username:e}=(0,s.C)();return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"capitalize",children:["Username: ",e]})})},a=n(2265),u=n(7447),l=n(6476),c=function(){let[e,t]=(0,a.useState)(!0),{loggedInUserId:n}=(0,l.B)(),{username:r}=(0,s.C)(),[i,c]=(0,a.useState)("");return console.log("post data: ",i,"userId",n),(0,a.useEffect)(()=>{c({data:{type:"taxonomy_term--tutor_user_id",attributes:{status:!0,name:r+":"+n,field_userid:n,field_username:r,description:{value:"<p>User logged in ID from '/jsonapi/user/user'</p><p>The username may be different from the 'user-user' database if the user changes the username later on.</p>",format:"basic_html",processed:"<p>User logged in Id</p>"}}}})},[n,r]),e?(0,o.jsx)("form",{className:"w-60",onSubmit:e=>{e.preventDefault(),(0,u.v)(i,"/jsonapi/taxonomy_term/tutor_user_id"),t(!1)},children:(0,o.jsx)("button",{className:"mt-5",children:"Register"})}):(0,o.jsx)("div",{children:"Registration completed"})},d=function(){return(0,o.jsx)("div",{className:"flex justify-center mt-20",children:(0,o.jsx)(c,{})})},f=function(){let{registration:e}=(0,r.e)("/jsonapi/taxonomy_term/tutor_user_id");return console.log("TOTOR REGISTRATION : ",e),(0,o.jsx)("div",{children:e?(0,o.jsx)(i,{}):(0,o.jsx)(d,{})})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var o=n(9222),r=n(9505);let s=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,o.Z)({method:"GET",url:r.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let s=await (0,o.Z)({method:"POST",url:"".concat(r.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",s),201===s.status&&window.location.replace("/report/postsuccess"),s}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}},127:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var o=n(2265),r=n(2333),s=n(9505),i=n(6476);let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function u(e){let{loggedInUserId:t}=(0,i.B)(),n=s.g.URL+e,{data:u,error:l,isLoading:c}=(0,r.ZP)(n,a),[d,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var e;let n=u&&(null==u?void 0:null===(e=u.data)||void 0===e?void 0:e.indexOf(e=>e.attributes.field_userid===t));console.log("User Id check ?",n),-1===n?f(!1):f(!0)},[u,t]),{registration:d,isLoading:c,error:l}}},6476:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var o=n(2265),r=n(2333),s=n(9505);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function a(){let[e,t]=(0,o.useState)(),n=s.g.URL+"/jsonapi",{data:a,error:u,isLoading:l}=(0,r.ZP)(n,i);return(0,o.useEffect)(()=>{var e,n,o,r;a&&t(null==a?void 0:null===(r=a.meta)||void 0===r?void 0:null===(o=r.links)||void 0===o?void 0:null===(n=o.me)||void 0===n?void 0:null===(e=n.meta)||void 0===e?void 0:e.id)},[a]),{loggedInUserId:e}}},649:function(e,t,n){"use strict";n.d(t,{C:function(){return u}});var o=n(6476),r=n(2265),s=n(2333),i=n(9505);let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function u(){let[e,t]=(0,r.useState)(""),{loggedInUserId:n}=(0,o.B)(),u=i.g.URL+"/jsonapi/user/user/"+n,{data:l,error:c,isLoading:d}=(0,s.ZP)(u,a);return console.log("HOOK USER NAME DATA? ",l,"HU ERROR",c),(0,r.useEffect)(()=>{var e,n;let o=!d&&(null==l?void 0:null===(n=l.data)||void 0===n?void 0:null===(e=n.attributes)||void 0===e?void 0:e.name);o&&t(o)},[l,d]),{username:e}}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=8522)}),_N_E=e.O()}]);