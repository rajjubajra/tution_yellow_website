(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{2405:function(t,e,n){Promise.resolve().then(n.bind(n,5322))},1552:function(t,e,n){"use strict";var i=n(7437);n(2265),e.Z=function(){return(0,i.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:(0,i.jsx)("h3",{className:"text-3xl",children:"Loading..."})})}},5322:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=n(7437),a=n(2265);n(1552);var o=n(7447),l=n(2333),s=n(9505);let r=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var d=function(t){let{id:e}=t;console.log(e);let[n,o]=(0,a.useState)(""),{studentTaxonomy:d,studentTaxonomyError:c,studentTaxonomyIsLoading:u}=function(){let t=s.g.URL+"/jsonapi/taxonomy_term/student",{data:e,error:n,isLoading:i}=(0,l.ZP)(t,r);return{studentTaxonomy:e,studentTaxonomyError:n,studentTaxonomyIsLoading:i}}();return console.log("Error:",c),(0,a.useEffect)(()=>{var t;let n=d&&(null==d?void 0:null===(t=d.data)||void 0===t?void 0:t.findIndex(t=>t.id===e));o(null==d?void 0:d.data[n].attributes.name)},[d,e]),(0,i.jsx)("div",{children:n})};let c=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var u=function(t){let{id:e}=t,[n,o]=(0,a.useState)(""),{subjectTaxonomy:r,subjectTaxonomyError:d,subjectTaxonomyIsLoading:u}=function(){let t=s.g.URL+"/jsonapi/taxonomy_term/tution_subjects",{data:e,error:n,isLoading:i}=(0,l.ZP)(t,c);return{subjectTaxonomy:e,subjectTaxonomyError:n,subjectTaxonomyIsLoading:i}}();return console.log("Error:",d),(0,a.useEffect)(()=>{var t,n,i;let a=r&&(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.findIndex(t=>t.id===e));o(null==r?void 0:null===(i=r.data[a])||void 0===i?void 0:null===(n=i.attributes)||void 0===n?void 0:n.name)},[r,e]),(0,i.jsx)("div",{children:n})},f=function(t){let{students:e,subjects:n}=t;console.log(e,n);let[l,s]=(0,a.useState)(""),[r,c]=(0,a.useState)(""),[f,v]=(0,a.useState)(""),[m,h]=(0,a.useState)(""),[p,x]=(0,a.useState)([]),[g,j]=(0,a.useState)(""),[_,y]=(0,a.useState)("");console.log(_),(0,a.useEffect)(()=>{let t=new Date(r),e={data:{type:"node--tuition_class",attributes:{title:"Title: "+l,field_class_name:l,field_date:function(t){let e=t.getUTCFullYear(),n=String(t.getUTCMonth()+1).padStart(2,"0"),i=String(t.getUTCDate()).padStart(2,"0"),a=String(t.getUTCHours()).padStart(2,"0"),o=String(t.getUTCMinutes()).padStart(2,"0"),l=String(t.getUTCSeconds()).padStart(2,"0"),s=t.getTimezoneOffset();return"".concat(e,"-").concat(n,"-").concat(i,"T").concat(a,":").concat(o,":").concat(l).concat(s>=0?"-":"+").concat(String(Math.floor(Math.abs(s)/60)).padStart(2,"0"),":").concat(String(Math.abs(s)%60).padStart(2,"0"))}(t),field_time_from:m,field_time_to:f},relationships:{field_students:{data:[p]},field_subject_single:{data:{type:"taxonomy_term--tution_subjects",id:g}},field_tutor_s_name:{data:{type:"taxonomy_term--tutor_s_name",id:"66a381cc-6c05-496a-beba-1dd1aa1af5ea"}}}}};y(e)},[g,r,p,f,m,l]);let S=t=>{x([...p,{type:"taxonomy_term--student",id:t}])};return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,i.jsx)("h2",{className:"font-light text-2xl my-20",children:"Tuition Class - Daybook"}),(0,i.jsxs)("div",{className:"w-60",children:[(0,i.jsx)("h3",{children:"Tuition Record"}),(0,i.jsxs)("div",{className:"flex gap-1",children:["Class: ",(0,i.jsx)(u,{id:g})]}),(0,i.jsxs)("form",{onSubmit:t=>{t.preventDefault(),(0,o.v)(_,"/jsonapi/node/tuition_class")},children:[(0,i.jsx)("input",{required:!0,type:"text",name:"title",value:l,onChange:t=>s(t.target.value),placeholder:"Title"}),(0,i.jsx)("input",{type:"date",name:"date",value:r,onChange:t=>c(t.target.value),placeholder:"Date"}),(0,i.jsx)("label",{children:"Time from"}),(0,i.jsx)("input",{type:"time",name:"timeFrom",onChange:t=>v(t.target.value),placeholder:"Time from"}),(0,i.jsx)("label",{children:"Time to"}),(0,i.jsx)("input",{type:"time",name:"timeTo",onChange:t=>h(t.target.value),placeholder:"Time To"}),(0,i.jsxs)("div",{className:"my-5",children:[(0,i.jsx)("h3",{className:"border-b mb-3",children:"Students"}),(0,i.jsx)("div",{className:"flex gap-4",children:e&&e.map(t=>void 0===p.find(e=>e.id===t.id)?(0,i.jsx)("div",{className:"cursor-pointer",onClick:()=>S(t.id),children:(0,i.jsx)(d,{id:t.id})},t.id):(0,i.jsx)("div",{className:"text-slate-300",children:(0,i.jsx)(d,{id:t.id})},t.id))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"border-b mb-3",children:"Subject"}),(0,i.jsx)("div",{className:"flex gap-4",children:n&&n.map(t=>-1!==g.indexOf(t.id)?(0,i.jsx)("div",{className:"text-slate-300",children:(0,i.jsx)(u,{id:t.id})},t.id):(0,i.jsx)("div",{className:"cursor-pointer",onClick:()=>j(t.id),children:(0,i.jsx)(u,{id:t.id})},t.id))})]}),(0,i.jsx)("div",{className:"mt-5",children:(0,i.jsx)("button",{children:"Submit"})})]})]})]})},v=n(649);let m=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};var h=n(6476),p=function(){var t,e,n,a,o,r;let{username:d}=(0,v.C)(),{loggedInUserId:c}=(0,h.B)("");console.log("Logged In user",c);let{aTutor:u,aTutorError:p,aTutorIsLoading:x}=function(t){console.log("UseATutor Id: ",t);let e=s.g.URL+"/jsonapi/node/tutor?filter[field_tutor_s_name.id]="+t,{data:n,error:i,isLoading:a}=(0,l.ZP)(e,m);return{aTutor:n,aTutorError:i,aTutorIsLoading:a}}(c);return console.log("Current Tutor Data: ",u),(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,i.jsx)("h2",{className:"text-2xl my-5",children:d}),(0,i.jsx)(f,{students:null==u?void 0:null===(n=u.data[0])||void 0===n?void 0:null===(e=n.relationships)||void 0===e?void 0:null===(t=e.field_students)||void 0===t?void 0:t.data,subjects:null==u?void 0:null===(r=u.data[0])||void 0===r?void 0:null===(o=r.relationships)||void 0===o?void 0:null===(a=o.field_subject)||void 0===a?void 0:a.data})]})}},9505:function(t,e,n){"use strict";n.d(e,{g:function(){return i}});let i={URL:"https://tuition.yellow-website.com/cms"}},7447:function(t,e,n){"use strict";n.d(e,{v:function(){return o}});var i=n(9222),a=n(9505);let o=async(t,e)=>{console.log("data in post function: ",t);try{let n=await (0,i.Z)({method:"GET",url:a.g.URL+"/session/token",headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"}});console.log(n.data);try{let o=await (0,i.Z)({method:"POST",url:"".concat(a.g.URL).concat(e),headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json","X-CSRF-Token":n.data},data:t});return console.log("Post done: ",o),201===o.status&&window.location.replace("/report/postsuccess"),o}catch(t){console.log("Post Error: ",t)}}catch(t){console.log("Session token error: ",t)}}},6476:function(t,e,n){"use strict";n.d(e,{B:function(){return s}});var i=n(2265),a=n(2333),o=n(9505);let l=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};function s(){let[t,e]=(0,i.useState)(),n=o.g.URL+"/jsonapi",{data:s,error:r,isLoading:d}=(0,a.ZP)(n,l);return(0,i.useEffect)(()=>{var t,n,i,a;s&&e(null==s?void 0:null===(a=s.meta)||void 0===a?void 0:null===(i=a.links)||void 0===i?void 0:null===(n=i.me)||void 0===n?void 0:null===(t=n.meta)||void 0===t?void 0:t.id)},[s]),{loggedInUserId:t}}},649:function(t,e,n){"use strict";n.d(e,{C:function(){return r}});var i=n(6476),a=n(2265),o=n(2333),l=n(9505);let s=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return fetch(...e).then(t=>t.json())};function r(){let[t,e]=(0,a.useState)(""),{loggedInUserId:n}=(0,i.B)(),r=l.g.URL+"/jsonapi/taxonomy_term/users_database?filter[field_userid]="+n,{data:d,error:c,isLoading:u}=(0,o.ZP)(r,s);return console.log("HOOK USER NAME DATA? ",d,"HU ERROR",c),(0,a.useEffect)(()=>{var t,n;let i=null==d?void 0:null===(n=d.data[0])||void 0===n?void 0:null===(t=n.attributes)||void 0===t?void 0:t.name.split(":");u||e(i[1])},[d,u]),{username:t}}}},function(t){t.O(0,[801,222,971,596,744],function(){return t(t.s=2405)}),_N_E=t.O()}]);