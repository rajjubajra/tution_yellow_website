(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{1687:function(t,e,a){Promise.resolve().then(a.bind(a,3790))},1552:function(t,e,a){"use strict";var n=a(7437);a(2265),e.Z=function(){return(0,n.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,n.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},3790:function(t,e,a){"use strict";a.r(e);var n=a(7437),o=a(2265),i=a(2333),r=a(9505),l=a(1552),s=a(7447);let u=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return fetch(...e).then(t=>t.json())};e.default=function(){var t,e,a;let[c,d]=(0,o.useState)(""),p=r.g.URL+"/jsonapi",{data:m,error:f,isLoading:g}=(0,i.ZP)(p,u);(0,o.useEffect)(()=>{var t,e,a,n;d(m&&(null==m?void 0:null===(n=m.meta)||void 0===n?void 0:null===(a=n.links)||void 0===a?void 0:null===(e=a.me)||void 0===e?void 0:null===(t=e.meta)||void 0===t?void 0:t.id))},[m]);let[h,v]=(0,o.useState)(null),[S,j]=(0,o.useState)(""),[x,_]=(0,o.useState)(!1),b="/jsonapi/taxonomy_term/term?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(x?null:h),{data:y,error:T,isLoading:C}=(0,i.ZP)("".concat(r.g.URL).concat(b),u);(0,o.useEffect)(()=>{""===h&&v(null)},[h]);let k=t=>{v(t.attributes.name),j(t.id),_(!0)},U=t=>{_(!1),v(t.target.value)},[w,L]=(0,o.useState)(null),[N,R]=(0,o.useState)(""),[E,P]=(0,o.useState)(!1);console.log("student search",w);let Z="/jsonapi/taxonomy_term/student?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(E?null:w),{data:q,error:A,isLoading:H}=(0,i.ZP)("".concat(r.g.URL).concat(Z),u);console.log("student: ",q),console.log("studen Url",Z),(0,o.useEffect)(()=>{""===w&&L(null)},[w]);let M=t=>{L(t.attributes.name),R(t.id),P(!0)},D=t=>{P(!1),L(t.target.value)},[O,F]=(0,o.useState)(null),[I,W]=(0,o.useState)(""),[z,G]=(0,o.useState)(!1),X="/jsonapi/taxonomy_term/tution_subjects?filter[name][condition][path]=name&filter[name][condition][operator]=STARTS_WITH&filter[name][condition][value]=".concat(z?null:O),{data:Y,error:B,isLoading:J}=(0,i.ZP)("".concat(r.g.URL).concat(X),u);(0,o.useEffect)(()=>{""===O&&F(null)},[O]);let K=t=>{F(t.attributes.name),W(t.id),G(!0)},Q=t=>{G(!1),F(t.target.value)},[V,$]=(0,o.useState)(""),[tt,te]=(0,o.useState)(""),[ta,tn]=(0,o.useState)(""),[to,ti]=(0,o.useState)(""),[tr,tl]=(0,o.useState)(""),ts=new Date(V);return((0,o.useEffect)(()=>{let t={data:{type:"node--tuition_progress_report",attributes:{title:"Progress Report - "+w,created:function(t){let e=t.getUTCFullYear(),a=String(t.getUTCMonth()+1).padStart(2,"0"),n=String(t.getUTCDate()).padStart(2,"0"),o=String(t.getUTCHours()).padStart(2,"0"),i=String(t.getUTCMinutes()).padStart(2,"0"),r=String(t.getUTCSeconds()).padStart(2,"0"),l=t.getTimezoneOffset();return"".concat(e,"-").concat(a,"-").concat(n,"T").concat(o,":").concat(i,":").concat(r).concat(l>=0?"-":"+").concat(String(Math.floor(Math.abs(l)/60)).padStart(2,"0"),":").concat(String(Math.abs(l)%60).padStart(2,"0"))}(ts),field_feedback:{value:ta},field_used_hour:"20.00",moderation_state:"published",status:!0},relationships:{uid:{data:{type:"user--user",id:c}},field_report_by:{data:{type:"user--user",id:c}},field_student_s_name:{data:{type:"taxonomy_term--student",id:N}},field_subject_single:{data:{type:"taxonomy_term--tution_subjects",id:I}},field_term:{data:{type:"taxonomy_term--term",id:S}}}}};tl(t)},[c,V,ta,N,E,I,S,tt]),g&&C&&H&&J)?(0,n.jsx)(l.Z,{}):(0,n.jsx)("div",{className:"md:w-[450px] w-full px-10",children:(0,n.jsxs)("form",{className:"grid grid-cols-1 gap-2",onSubmit:t=>{t.preventDefault(),(0,s.v)(tr,"/jsonapi/node/tuition_progress_report"),console.log("PostData on Submit",tr),$(""),tn(""),L(""),F(""),v(""),ti("")},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{required:!0,type:"date",name:"date",value:V,onChange:t=>$(t.target.value),placeholder:"date"}),(0,n.jsx)("input",{required:!0,type:"text",name:"student",value:w,onChange:t=>D(t),placeholder:"Name of Student"}),(0,n.jsx)("ul",{children:q&&(null==q?void 0:null===(t=q.data)||void 0===t?void 0:t.map(t=>(0,n.jsx)("li",{className:"cursor-pointer",onClick:()=>M(t),children:t.attributes.name},t.id)))}),(0,n.jsx)("input",{required:!0,type:"text",name:"subject",value:O,onChange:t=>Q(t),placeholder:"Subject"}),(0,n.jsx)("ul",{children:Y&&(null==Y?void 0:null===(e=Y.data)||void 0===e?void 0:e.map(t=>(0,n.jsx)("li",{className:"cursor-pointer",onClick:()=>K(t),children:t.attributes.name},t.id)))}),(0,n.jsx)("input",{required:!0,type:"text",name:"term",value:h,onChange:t=>U(t),placeholder:"Term"})]}),(0,n.jsx)("ul",{children:y&&(null==y?void 0:null===(a=y.data)||void 0===a?void 0:a.map(t=>(0,n.jsx)("li",{className:"cursor-pointer",onClick:()=>k(t),children:t.attributes.name},t.id)))}),(0,n.jsxs)("div",{children:[(0,n.jsx)("textarea",{required:!0,value:ta,onChange:t=>tn(t.target.value),name:"feedback",placeholder:"Feedback"}),(0,n.jsx)("input",{required:!0,type:"text",name:"classHour",value:to,onChange:t=>ti(t.target.value),placeholder:"Tuition Hour"})]}),(0,n.jsx)("div",{className:"mt-5",children:(0,n.jsx)("button",{type:"submit",children:"Submit"})})]})})}},9505:function(t,e,a){"use strict";a.d(e,{g:function(){return n}});let n={URL:"https://tuition.yellow-website.com/cms"}},7447:function(t,e,a){"use strict";a.d(e,{v:function(){return i}});var n=a(9222),o=a(9505);let i=async(t,e)=>{console.log("data in post function: ",t);try{let a=await (0,n.Z)({method:"GET",url:o.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(a.data);try{let i=await (0,n.Z)({method:"POST",url:"".concat(o.g.URL).concat(e),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":a.data},data:t});return console.log("Post done: ",i),201===i.status&&window.location.replace("/report/postsuccess"),i}catch(t){console.log("Post Error: ",t)}}catch(t){console.log("Session token error: ",t)}}}},function(t){t.O(0,[801,222,971,596,744],function(){return t(t.s=1687)}),_N_E=t.O()}]);