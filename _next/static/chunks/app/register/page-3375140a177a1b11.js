(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8154:function(e,t,n){Promise.resolve().then(n.bind(n,4801))},1552:function(e,t,n){"use strict";var o=n(7437);n(2265),t.Z=function(){return(0,o.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,o.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},4801:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(7437),a=n(2265),s=n(7447),r=n(2333),i=n(9505),l=n(1552);let c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};var d=function(e){let{userId:t}=e,n=i.g.URL+"/jsonapi/taxonomy_term/users_database",{data:l,error:d,isLoading:u}=(0,r.ZP)(n,c);console.log("URL - UserId : ",n),console.log("DATA??",l,"data-error",d,"data-loading",u);let[f,p]=(0,a.useState)(),[m,v]=(0,a.useState)("");return console.log("post data: ",m),(0,a.useEffect)(()=>{t&&console.log("UseEffect: DATA??",l,"data-error",d,"data-loading",u),v({data:{type:"taxonomy_term--users_database",attributes:{status:!0,name:t,field_userid:t,field_name:f,description:{value:"<p>User logged in Id</p>",format:"basic_html",processed:"<p>User logged in Id</p>"}}}})},[t,f,d,u,l]),(0,o.jsxs)("form",{className:"w-60",onSubmit:e=>{e.preventDefault(),(0,s.v)(m,"/jsonapi/taxonomy_term/users_database")},children:[(0,o.jsx)("input",{required:!0,type:"text",name:"name",placeholder:"Name",value:f,onChange:e=>p(e.target.value)}),(0,o.jsx)("button",{className:"mt-5",children:"Register"})]})};let u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};var f=function(){let e=i.g.URL+"/jsonapi",{data:t,error:n,isLoading:s}=(0,r.ZP)(e,u),[c,f]=(0,a.useState)("");console.log("Logged in - UserId - ",c),(0,a.useEffect)(()=>{var e,n,o,a;f(t&&(null==t?void 0:null===(a=t.meta)||void 0===a?void 0:null===(o=a.links)||void 0===o?void 0:null===(n=o.me)||void 0===n?void 0:null===(e=n.meta)||void 0===e?void 0:e.id))},[t]);let p=i.g.URL+"/jsonapi/taxonomy_term/users_database",{data:m,error:v,isLoading:g}=(0,r.ZP)(p,u),[h,j]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{var e;let t=m&&(null==m?void 0:null===(e=m.data)||void 0===e?void 0:e.some(e=>e.attributes.name===c));t?j(!0):j(!1)},[m,c]),s)?(0,o.jsx)(l.Z,{}):(0,o.jsx)("div",{className:"flex justify-center mt-20",children:h?(0,o.jsx)("div",{children:"Registered user"}):(0,o.jsx)(d,{userId:c})})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var o=n(9222),a=n(9505);let s=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,o.Z)({method:"GET",url:a.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let s=await (0,o.Z)({method:"POST",url:"".concat(a.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",s),201===s.status&&window.location.replace("/report/postsuccess"),s}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=8154)}),_N_E=e.O()}]);