(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{2405:function(e,t,n){Promise.resolve().then(n.bind(n,2778))},1552:function(e,t,n){"use strict";var a=n(7437);n(2265),t.Z=function(){return(0,a.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,a.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},2778:function(e,t,n){"use strict";n.r(t);var a=n(7437),o=n(2265),l=n(2333),i=n(9505);n(1552),n(7447);let s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};t.default=function(){var e,t;let[n,c]=(0,o.useState)(""),[r,u]=(0,o.useState)(""),[d,m]=(0,o.useState)(""),[p,h]=(0,o.useState)([]),[f,j]=(0,o.useState)(""),[v,x]=(0,o.useState)("");(0,o.useEffect)(()=>{x("1702d5cc-2c56-4849-8384-b14248d1da3b")},[]);let[g,S]=(0,o.useState)(null),[y,T]=(0,o.useState)(""),[b,C]=(0,o.useState)(!1);console.log("student search",g);let N="/jsonapi/taxonomy_term/student?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(b?null:g),{data:_,error:w,isLoading:k}=(0,l.ZP)("".concat(i.g.URL).concat(N),s);console.log("student: ",p),console.log("studen Url",N),(0,o.useEffect)(()=>{""===g&&S(null)},[g]);let E=e=>{S(e.attributes.name),T(e.id),C(!0)},L=e=>{C(!1),S(e.target.value)},[R,P]=(0,o.useState)(null),[U,A]=(0,o.useState)(""),[Z,O]=(0,o.useState)(!1),q="/jsonapi/taxonomy_term/tution_subjects?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(Z?null:R),{data:F,error:H,isLoading:I}=(0,l.ZP)("".concat(i.g.URL).concat(q),s);(0,o.useEffect)(()=>{""===R&&P(null)},[R]);let W=e=>{P(e.attributes.name),A(e.id),O(!0)},D=e=>{O(!1),P(e.target.value)};return(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,a.jsx)("h2",{className:"font-light text-2xl my-20",children:"Tuition Class"}),(0,a.jsxs)("div",{className:"w-60",children:[(0,a.jsx)("h3",{children:"Class hour entry form"}),(0,a.jsxs)("form",{children:[(0,a.jsx)("input",{type:"date",name:"date",onChange:e=>c(e.target.value),placeholder:"Date"}),(0,a.jsx)("label",{children:"Time from"}),(0,a.jsx)("input",{type:"time",name:"timeFrom",onChange:e=>u(e.target.value),placeholder:"Time from"}),(0,a.jsx)("label",{children:"Time to"}),(0,a.jsx)("input",{type:"time",name:"timeTo",onChange:e=>m(e.target.value),placeholder:"Time To"}),(0,a.jsx)("input",{required:!0,type:"text",name:"subject",value:R,onChange:e=>D(e),placeholder:"Subject"}),(0,a.jsx)("ul",{children:F&&(null==F?void 0:null===(e=F.data)||void 0===e?void 0:e.map(e=>(0,a.jsx)("li",{className:"cursor-pointer",onClick:()=>W(e),children:e.attributes.name},e.id)))}),(0,a.jsx)("input",{required:!0,type:"text",name:"student",value:g,onChange:e=>L(e),placeholder:"Name of Student"}),(0,a.jsx)("ul",{children:_&&(null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.map(e=>(0,a.jsx)("li",{className:"cursor-pointer",onClick:()=>E(e),children:e.attributes.name},e.id)))})]})]})]})}},9505:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});let a={URL:"https://tuition.yellow-website.com/cms"}},7447:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var a=n(9222),o=n(9505);let l=async(e,t)=>{console.log("data in post function: ",e);try{let n=await (0,a.Z)({method:"GET",url:o.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let l=await (0,a.Z)({method:"POST",url:"".concat(o.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:e});return console.log("Post done: ",l),201===l.status&&window.location.replace("/report/postsuccess"),l}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=2405)}),_N_E=e.O()}]);