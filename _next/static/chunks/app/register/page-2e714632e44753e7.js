(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{4889:function(e,t,n){Promise.resolve().then(n.bind(n,6224))},1552:function(e,t,n){"use strict";var o=n(7437);n(2265),t.Z=function(){return(0,o.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,o.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},6224:function(e,t,n){"use strict";n.r(t);var o=n(7437),a=n(2265),s=n(2333),i=n(9505),l=n(1552),r=n(7447);let c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};t.default=function(){var e,t,n,u;let[d,p]=(0,a.useState)(""),[v,f]=(0,a.useState)("");console.log("Today: ",v);let h=new Date(Date.now()),g=i.g.URL+"/jsonapi",{data:m,error:j,isLoading:x}=(0,s.ZP)(g,c),[y,w]=(0,a.useState)("");return(console.log("UserId",y),x)?(0,o.jsx)(l.Z,{}):(0,o.jsxs)("form",{className:"w-60",onSubmit:e=>{e.preventDefault(),(0,r.v)({data:{type:"node--user_database"},attributes:{title:d,field_register_date:v,field_user_id:y}},"/jsonapi/node/user_database")},children:[(0,o.jsx)("input",{type:"text",name:"title",value:"Register Id - ".concat(y),onChange:e=>p(e.target.value)}),(0,o.jsx)("input",{type:"date",name:"date",value:h,onChange:e=>f(e.target.value)}),(0,o.jsx)("input",{type:"text",name:"userId",placeholder:"user id",value:m&&(null==m?void 0:null===(u=m.meta)||void 0===u?void 0:null===(n=u.links)||void 0===n?void 0:null===(t=n.me)||void 0===t?void 0:null===(e=t.meta)||void 0===e?void 0:e.id),onChange:e=>w(e.target.value)}),(0,o.jsx)("button",{className:"mt-5",children:"Register"})]})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var o=n(9222),a=n(9505);let s=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,o.Z)({method:"GET",url:a.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let s=await (0,o.Z)({method:"POST",url:"".concat(a.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",s),201===s.status&&window.location.replace("/report/postsuccess"),s}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=4889)}),_N_E=e.O()}]);