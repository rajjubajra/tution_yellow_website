(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{2405:function(t,e,n){Promise.resolve().then(n.bind(n,7455))},1552:function(t,e,n){"use strict";var i=n(7437);n(2265),e.Z=function(){return(0,i.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,i.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},7455:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var i=n(7437),o=n(2265);n(1552);var a=n(7447),l=n(2333),s=n(9505);let r=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var d=function(t){let{id:e}=t;console.log(e);let[n,a]=(0,o.useState)(""),{studentTaxonomy:d,studentTaxonomyError:c,studentTaxonomyIsLoading:u}=function(){let t=s.g.URL+"/jsonapi/taxonomy_term/student",{data:e,error:n,isLoading:i}=(0,l.ZP)(t,r);return{studentTaxonomy:e,studentTaxonomyError:n,studentTaxonomyIsLoading:i}}();return console.log("Error:",c),(0,o.useEffect)(()=>{var t;let n=d&&(null==d?void 0:null===(t=d.data)||void 0===t?void 0:t.findIndex(t=>t.id===e));a(null==d?void 0:d.data[n].attributes.name)},[d,e]),(0,i.jsx)("div",{children:n})};let c=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var u=function(t){let{id:e}=t,[n,a]=(0,o.useState)(""),{subjectTaxonomy:r,subjectTaxonomyError:d,subjectTaxonomyIsLoading:u}=function(){let t=s.g.URL+"/jsonapi/taxonomy_term/tution_subjects",{data:e,error:n,isLoading:i}=(0,l.ZP)(t,c);return{subjectTaxonomy:e,subjectTaxonomyError:n,subjectTaxonomyIsLoading:i}}();return console.log("Error:",d),(0,o.useEffect)(()=>{var t,n,i;let o=r&&(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.findIndex(t=>t.id===e));a(null==r?void 0:null===(i=r.data[o])||void 0===i?void 0:null===(n=i.attributes)||void 0===n?void 0:n.name)},[r,e]),(0,i.jsx)("div",{children:n})},v=function(t){let{students:e,subjects:n}=t;console.log(e,n);let[l,s]=(0,o.useState)(""),[r,c]=(0,o.useState)(""),[v,f]=(0,o.useState)(""),[m,h]=(0,o.useState)(""),[x,g]=(0,o.useState)([]),[j,p]=(0,o.useState)(""),[_,y]=(0,o.useState)("");console.log(_),(0,o.useEffect)(()=>{let t=new Date(r),e={data:{type:"node--tuition_class",attributes:{title:"Title: "+l,field_class_name:l,field_date:function(t){let e=t.getUTCFullYear(),n=String(t.getUTCMonth()+1).padStart(2,"0"),i=String(t.getUTCDate()).padStart(2,"0"),o=String(t.getUTCHours()).padStart(2,"0"),a=String(t.getUTCMinutes()).padStart(2,"0"),l=String(t.getUTCSeconds()).padStart(2,"0"),s=t.getTimezoneOffset();return"".concat(e,"-").concat(n,"-").concat(i,"T").concat(o,":").concat(a,":").concat(l).concat(s>=0?"-":"+").concat(String(Math.floor(Math.abs(s)/60)).padStart(2,"0"),":").concat(String(Math.abs(s)%60).padStart(2,"0"))}(t),field_time_from:m,field_time_to:v},relationships:{field_students:{data:[x]},field_subject_single:{data:{type:"taxonomy_term--tution_subjects",id:j}},field_tutor_s_name:{data:{type:"taxonomy_term--tutor_s_name",id:"66a381cc-6c05-496a-beba-1dd1aa1af5ea"}}}}};y(e)},[j,r,x,v,m,l]);let S=t=>{g([...x,{type:"taxonomy_term--student",id:t}])};return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,i.jsx)("h2",{className:"font-light text-2xl my-20",children:"Tuition Class - Daybook"}),(0,i.jsxs)("div",{className:"w-60",children:[(0,i.jsx)("h3",{children:"Tuition Record"}),(0,i.jsxs)("div",{className:"flex gap-1",children:["Class: ",(0,i.jsx)(u,{id:j})]}),(0,i.jsxs)("form",{onSubmit:t=>{t.preventDefault(),(0,a.v)(_,"/jsonapi/node/tuition_class")},children:[(0,i.jsx)("input",{required:!0,type:"text",name:"title",value:l,onChange:t=>s(t.target.value),placeholder:"Title"}),(0,i.jsx)("input",{type:"date",name:"date",value:r,onChange:t=>c(t.target.value),placeholder:"Date"}),(0,i.jsx)("label",{children:"Time from"}),(0,i.jsx)("input",{type:"time",name:"timeFrom",onChange:t=>f(t.target.value),placeholder:"Time from"}),(0,i.jsx)("label",{children:"Time to"}),(0,i.jsx)("input",{type:"time",name:"timeTo",onChange:t=>h(t.target.value),placeholder:"Time To"}),(0,i.jsxs)("div",{className:"my-5",children:[(0,i.jsx)("h3",{className:"border-b mb-3",children:"Students"}),(0,i.jsx)("div",{className:"flex gap-4",children:e&&e.map(t=>void 0===x.find(e=>e.id===t.id)?(0,i.jsx)("div",{className:"cursor-pointer",onClick:()=>S(t.id),children:(0,i.jsx)(d,{id:t.id})},t.id):(0,i.jsx)("div",{className:"text-slate-300",children:(0,i.jsx)(d,{id:t.id})},t.id))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"border-b mb-3",children:"Subject"}),(0,i.jsx)("div",{className:"flex gap-4",children:n&&n.map(t=>-1!==j.indexOf(t.id)?(0,i.jsx)("div",{className:"text-slate-300",children:(0,i.jsx)(u,{id:t.id})},t.id):(0,i.jsx)("div",{className:"cursor-pointer",onClick:()=>p(t.id),children:(0,i.jsx)(u,{id:t.id})},t.id))})]}),(0,i.jsx)("div",{className:"mt-5",children:(0,i.jsx)("button",{children:"Submit"})})]})]})]})};let f=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};function m(t){let{id:e}=t,[n,a]=(0,o.useState)(""),{tutorTaxonomy:r,tutorTaxonomyError:d,tutorTaxonomyIsLoading:c}=function(){let t=s.g.URL+"/jsonapi/taxonomy_term/tutor_s_name",{data:e,error:n,isLoading:i}=(0,l.ZP)(t,f);return{tutorTaxonomy:e,tutorTaxonomyError:n,tutorTaxonomyIsLoading:i}}();return console.log("Tutor Taxonomy: ",r),console.log("Error Taxonomy:",d),(0,o.useEffect)(()=>{var t,n;let i=r&&(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.findIndex(t=>t.id===e));a(null==r?void 0:null===(n=r.data[i])||void 0===n?void 0:n.attributes.name)},[r,e]),(0,i.jsx)("div",{children:n})}let h=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())},x=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var g=function(){var t,e,n,a,r,d;let{loggedInUserId:c}=function(){let[t,e]=(0,o.useState)(),n=s.g.URL+"/jsonapi",{data:i,error:a,isLoading:r}=(0,l.ZP)(n,x);return console.log("logged in data",i),(0,o.useEffect)(()=>{var t,n,o,a;i&&e(null==i?void 0:null===(a=i.meta)||void 0===a?void 0:null===(o=a.links)||void 0===o?void 0:null===(n=o.me)||void 0===n?void 0:null===(t=n.meta)||void 0===t?void 0:t.id)},[i]),{loggedInUserId:t}}();console.log("Logged In user",c);let{aTutor:u,aTutorError:f,aTutorIsLoading:g}=function(t){let e=s.g.URL+"/jsonapi/node/tutor?filter[field_tutor_s_name.id]="+t,{data:n,error:i,isLoading:o}=(0,l.ZP)(e,h);return{aTutor:n,aTutorError:i,aTutorIsLoading:o}}(c);return console.log("Current Tutor Data: ",u),(0,i.jsx)("div",{className:"flex flex-col justify-center items-center",children:void 0!==c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mt-20 text-2xl",children:(0,i.jsx)(m,{id:c})}),(0,i.jsx)(v,{students:null==u?void 0:null===(n=u.data[0])||void 0===n?void 0:null===(e=n.relationships)||void 0===e?void 0:null===(t=e.field_students)||void 0===t?void 0:t.data,subjects:null==u?void 0:null===(d=u.data[0])||void 0===d?void 0:null===(r=d.relationships)||void 0===r?void 0:null===(a=r.field_subject)||void 0===a?void 0:a.data})]}):(0,i.jsx)("div",{className:"mt-40 font-light md:text-2xl ",children:(0,i.jsx)("h3",{children:"This page is accessible only for Registered Tutor"})})})}},9505:function(t,e,n){"use strict";n.d(e,{g:function(){return i}});let i={URL:"https://tuition.yellow-website.com/cms"}},7447:function(t,e,n){"use strict";n.d(e,{v:function(){return a}});var i=n(9222),o=n(9505);let a=async(t,e)=>{console.log("data in post function: ",t);try{let n=await (0,i.Z)({method:"GET",url:o.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let a=await (0,i.Z)({method:"POST",url:"".concat(o.g.URL).concat(e),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:t});return console.log("Post done: ",a),201===a.status&&window.location.replace("/report/postsuccess"),a}catch(t){console.log("Post Error: ",t)}}catch(t){console.log("Session token error: ",t)}}}},function(t){t.O(0,[801,222,971,596,744],function(){return t(t.s=2405)}),_N_E=t.O()}]);