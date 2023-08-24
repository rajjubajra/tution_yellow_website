(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{3697:function(e,t,a){Promise.resolve().then(a.bind(a,5200))},1552:function(e,t,a){"use strict";var n=a(7437);a(2265),t.Z=function(){return(0,n.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,n.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},5200:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7437),o=a(2265),l=a(2333),i=a(9505),r=a(1552),s=a(9222);let d=async(e,t)=>{console.log("data in post function: ",e);try{let a=await (0,s.Z)({method:"GET",url:i.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(a.data);try{let n=await (0,s.Z)({method:"POST",url:"".concat(i.g.URL).concat(t),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":a.data},data:e});return console.log("Post Success: ",n),n}catch(e){console.log("Post Error: ",e)}}catch(e){console.log("Session token error: ",e)}},u=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch(...t).then(e=>e.json())},c="border-b px-2 py-3 my-2 w-full outline-0 placeholder:font-thin bg-transparent placeholder:tracking-widest placeholder:text-slate-800 placeholder:font-light";var p=function(){var e,t,a;let[s,p]=(0,o.useState)(""),m=i.g.URL+"/jsonapi",{data:h,error:f,isLoading:v}=(0,l.ZP)(m,u);(0,o.useEffect)(()=>{var e,t,a,n;p(h&&(null==h?void 0:null===(n=h.meta)||void 0===n?void 0:null===(a=n.links)||void 0===a?void 0:null===(t=a.me)||void 0===t?void 0:null===(e=t.meta)||void 0===e?void 0:e.id))},[h]);let[g,x]=(0,o.useState)(null),[j,b]=(0,o.useState)(""),[y,_]=(0,o.useState)(!1),S="/jsonapi/taxonomy_term/term?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(y?null:g),{data:k,error:N,isLoading:w}=(0,l.ZP)("".concat(i.g.URL).concat(S),u);(0,o.useEffect)(()=>{""===g&&x(null)},[g]);let T=e=>{x(e.attributes.name),b(e.id),_(!0)},C=e=>{_(!1),x(e.target.value)},[L,R]=(0,o.useState)(null),[E,P]=(0,o.useState)(""),[U,Z]=(0,o.useState)(!1);console.log("student search",L);let q="/jsonapi/taxonomy_term/student?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(U?null:L),{data:A,error:H,isLoading:F}=(0,l.ZP)("".concat(i.g.URL).concat(q),u);console.log("student: ",A),console.log("studen Url",q),(0,o.useEffect)(()=>{""===L&&R(null)},[L]);let I=e=>{R(e.attributes.name),P(e.id),Z(!0)},O=e=>{Z(!1),R(e.target.value)},[W,D]=(0,o.useState)(null),[G,X]=(0,o.useState)(""),[z,B]=(0,o.useState)(!1),J="/jsonapi/taxonomy_term/tution_subjects?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(z?null:W),{data:K,error:M,isLoading:Q}=(0,l.ZP)("".concat(i.g.URL).concat(J),u);(0,o.useEffect)(()=>{""===W&&D(null)},[W]);let V=e=>{D(e.attributes.name),X(e.id),B(!0)},Y=e=>{B(!1),D(e.target.value)},[$,ee]=(0,o.useState)(""),[et,ea]=(0,o.useState)(""),[en,eo]=(0,o.useState)(""),[el,ei]=(0,o.useState)(""),[er,es]=(0,o.useState)("");return((0,o.useEffect)(()=>{ea(U+" - Feedback"),es({data:{type:"node--tuition_progress_report",attributes:{title:et,created:$,field_feedback:{value:en},field_used_hour:"20.00"},relationships:{revision_uid:{data:{type:"user--user",id:s}},uid:{data:{type:"user--user",id:s}},field_report_by:{data:{type:"user--user",id:s}},field_student_s_name:{data:{type:"taxonomy_term--student",id:E}},field_subject_single:{data:{type:"taxonomy_term--tution_subjects",id:G}},field_term:{data:{type:"taxonomy_term--term",id:j}}}}})},[s,$,en,E,U,G,j,et]),v&&w&&F&&Q)?(0,n.jsx)(r.Z,{}):(0,n.jsx)("div",{className:"md:w-[450px] w-full px-10",children:(0,n.jsxs)("form",{className:"grid grid-cols-1 gap-2",onSubmit:()=>{d(er,"/jsonapi/node/tuition_progress_report"),console.log("PostData on Submit",er)},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{className:c,required:!0,type:"date",name:"date",value:$,onChange:e=>ee(e.target.value),placeholder:"date"}),(0,n.jsx)("input",{className:c,required:!0,type:"text",name:"student",value:L,onChange:e=>O(e),placeholder:"Name of Student"}),(0,n.jsx)("ul",{children:A&&(null==A?void 0:null===(e=A.data)||void 0===e?void 0:e.map(e=>(0,n.jsx)("li",{className:"cursor-pointer",onClick:()=>I(e),children:e.attributes.name},e.id)))}),(0,n.jsx)("input",{className:c,required:!0,type:"text",name:"subject",value:W,onChange:e=>Y(e),placeholder:"Subject"}),(0,n.jsx)("ul",{children:K&&(null==K?void 0:null===(t=K.data)||void 0===t?void 0:t.map(e=>(0,n.jsx)("li",{className:"cursor-pointer",onClick:()=>V(e),children:e.attributes.name},e.id)))}),(0,n.jsx)("input",{className:c,required:!0,type:"text",name:"term",value:g,onChange:e=>C(e),placeholder:"Term"})]}),(0,n.jsx)("ul",{children:k&&(null==k?void 0:null===(a=k.data)||void 0===a?void 0:a.map(e=>(0,n.jsx)("li",{className:"cursor-pointer",onClick:()=>T(e),children:e.attributes.name},e.id)))}),(0,n.jsxs)("div",{children:[(0,n.jsx)("textarea",{className:"border-b px-2 py-3 w-full my-2 h-60 outline-0 placeholder:font-thin bg-transparent placeholder:tracking-widest placeholder:text-slate-800 placeholder:font-light",required:!0,value:en,onChange:e=>eo(e.target.value),name:"feedback",placeholder:"Feedback"}),(0,n.jsx)("input",{className:c,required:!0,type:"text",name:"classHour",value:el,onChange:e=>ei(e.target.value),placeholder:"Tuition Hour"})]}),(0,n.jsx)("div",{className:"mt-5",children:(0,n.jsx)("button",{className:"w-32 border py-4 cursor-pointer uppercase font-light tracking-wider border-white bg-slate-200 hover:shadow-md dark:text-gray-700 duration-700",type:"submit",children:"Submit"})})]})})}},9505:function(e,t,a){"use strict";a.d(t,{g:function(){return n}});let n={URL:"https://tuition.yellow-website.com/cms"}}},function(e){e.O(0,[801,222,971,596,744],function(){return e(e.s=3697)}),_N_E=e.O()}]);