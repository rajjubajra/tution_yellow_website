(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8154:function(e,t,n){Promise.resolve().then(n.bind(n,4801))},1552:function(e,t,n){"use strict";var o=n(7437);n(2265),t.Z=function(){return(0,o.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,o.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},4801:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(7437),s=n(2265),a=n(7447),i=function(e){let{userId:t}=e,[n,i]=(0,s.useState)("");return console.log("post data: ",n),(0,s.useEffect)(()=>{i({data:{type:"taxonomy_term--users_database",attributes:{status:!0,name:t,description:{value:"<p>User logged in Id</p>",format:"basic_html",processed:"<p>User logged in Id</p>"}}}})},[t]),(0,o.jsx)("form",{className:"w-60",onSubmit:e=>{e.preventDefault(),(0,a.v)(n,"/jsonapi/taxonomy_term/users_database")},children:(0,o.jsx)("button",{className:"mt-5",children:"Register"})})},r=n(2333),l=n(9505),c=n(1552);let u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};var d=function(){var e,t;let n=l.g.URL+"/jsonapi",{data:a,error:d,isLoading:v}=(0,r.ZP)(n,u),[p,f]=(0,s.useState)("");console.log("Logged in - UserId - ",p),(0,s.useEffect)(()=>{var e,t,n,o;f(a&&(null==a?void 0:null===(o=a.meta)||void 0===o?void 0:null===(n=o.links)||void 0===n?void 0:null===(t=n.me)||void 0===t?void 0:null===(e=t.meta)||void 0===e?void 0:e.id))},[a]);let m=l.g.URL+"/jsonapi/taxonomy_term/users_database",{data:g,error:h,isLoading:j}=(0,r.ZP)(m,u);console.log("Userdata: ",g),console.log("userdata - userId",null==g?void 0:null===(t=g.data[0])||void 0===t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.name);let[x,b]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{var e;let t=g&&(null==g?void 0:null===(e=g.data)||void 0===e?void 0:e.some(e=>e.attributes.name===p));console.log("User Id check ?",t),t?b(!0):b(!1)},[g,p]),v)?(0,o.jsx)(c.Z,{}):(0,o.jsx)("div",{className:"flex justify-center mt-20",children:x?(0,o.jsx)("div",{children:"Registered user"}):(0,o.jsx)(i,{userId:p})})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});let o={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var o=n(9222),s=n(9505);let a=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,o.Z)({method:"GET",url:s.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let a=await (0,o.Z)({method:"POST",url:"".concat(s.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",a),201===a.status&&window.location.replace("/report/postsuccess"),a}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=8154)}),_N_E=e.O()}]);