(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{8522:function(e,t,n){Promise.resolve().then(n.bind(n,6012))},6012:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(7437),r=n(127),s=n(649),i=n(1396),a=n.n(i),u=function(e){let{username:t}=e;return(0,o.jsx)("div",{className:"md:px-20",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"capitalize",children:t}),(0,o.jsx)("div",{children:"Teching Subjects:"}),(0,o.jsx)("div",{children:"Students: [name][grade][subject]"}),(0,o.jsx)("div",{children:(0,o.jsx)(a(),{href:"#",children:"Tution Class"})})]})})},l=n(7447),c=function(e){let{userId:t,username:n}=e,r={data:{type:"taxonomy_term--tutor_user_id",attributes:{status:!0,name:n+":"+t,field_userid:t,field_username:n,description:{value:"<p>User logged in ID from '/jsonapi/user/user'</p><p>The username may be different from the 'user-user' database if the user changes the username later on.</p>",format:"basic_html",processed:"<p>User logged in Id</p>"}}}};return console.log("DATA to be posted:",r),(0,o.jsx)("form",{className:"w-60",onSubmit:e=>{e.preventDefault(),(0,l.v)(r,"/jsonapi/taxonomy_term/tutor_user_id")},children:(0,o.jsx)("button",{className:"mt-5",children:"Register"})})},d=function(){let{username:e}=(0,s.C)(),{registration:t,userId:n}=(0,r.e)("/jsonapi/taxonomy_term/tutor_user_id");return console.log("TuTOR REGISTRATION : ",t),(0,o.jsx)("div",{children:t?(0,o.jsx)(u,{username:e}):(0,o.jsx)(c,{userId:n,username:e})})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var o=n(9222),r=n(9505);let s=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,o.Z)({method:"GET",url:r.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let s=await (0,o.Z)({method:"POST",url:"".concat(r.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",s),201===s.status&&window.location.replace("/report/postsuccess"),s}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}},127:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var o=n(2265),r=n(2333),s=n(9505),i=n(6476);let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function u(e){let{loggedInUserId:t}=(0,i.B)(),n=s.g.URL+e,{data:u,error:l,isLoading:c}=(0,r.ZP)(n,a),[d,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var e;let n=u&&(null==u?void 0:null===(e=u.data)||void 0===e?void 0:e.some(e=>e.attributes.field_userid===t));console.log("User Id check ?",n),f(n)},[u,t]),{registration:d,userId:t,isLoading:c,error:l}}},6476:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var o=n(2265),r=n(2333),s=n(9505);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function a(){let[e,t]=(0,o.useState)(),n=s.g.URL+"/jsonapi",{data:a,error:u,isLoading:l}=(0,r.ZP)(n,i);return(0,o.useEffect)(()=>{var e,n,o,r;a&&t(null==a?void 0:null===(r=a.meta)||void 0===r?void 0:null===(o=r.links)||void 0===o?void 0:null===(n=o.me)||void 0===n?void 0:null===(e=n.meta)||void 0===e?void 0:e.id)},[a]),{loggedInUserId:e}}},649:function(e,t,n){"use strict";n.d(t,{C:function(){return u}});var o=n(6476),r=n(2265),s=n(2333),i=n(9505);let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};function u(){let[e,t]=(0,r.useState)(""),{loggedInUserId:n}=(0,o.B)(),u=i.g.URL+"/jsonapi/user/user/"+n,{data:l,error:c,isLoading:d}=(0,s.ZP)(u,a);return console.log("useUserName data : ",l,"isERROR",c),(0,r.useEffect)(()=>{var e,n;let o=l&&(null==l?void 0:null===(n=l.data)||void 0===n?void 0:null===(e=n.attributes)||void 0===e?void 0:e.name);o&&t(o)},[l]),{username:e}}},1396:function(e,t,n){e.exports=n(6685)}},function(e){e.O(0,[801,685,222,971,596,744],function(){return e(e.s=8522)}),_N_E=e.O()}]);