(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[574],{3511:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(1664),s=n(5893),a=function(){return(0,s.jsx)("nav",{className:"flex items-center justify-between flex-wrap bg-teal p-6 bg-primaire",children:(0,s.jsx)("div",{className:"flex items-center flex-no-shrink text-white mr-6",children:(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{className:"font-semibold text-2xl",style:{color:"#fff"},children:"Dakar Xewel Toastmaster"})})})})}},196:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5861),s=n(7757),a=n.n(s),l=n(5675),i=n(7294),c=n(1664),o=n(3511),d=n(5893);function u(){var e=(0,i.useState)([]),t=e[0],n=e[1],s=(0,i.useState)(!1),u=s[0],f=s[1],x=(0,i.useState)(null),h=x[0],m=x[1],p=(new Date).toISOString().substr(0,10).replace("T"," ");(0,i.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]);var v=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!=h&&h.nom&&h.type&&h.dateSeance)){e.next=12;break}return t={nom:h.nom,type:h.type,dateSeance:h.dateSeance},e.next=4,fetch("/api/users/vote",{method:"POST",body:JSON.stringify(t)});case 4:if((n=e.sent).ok){e.next=9;break}throw new Error(n.statusText);case 9:201==n.status&&(alert("Vote effectu\xe9 avec succ\xe8s !"),window.location.reload(),localStorage.setItem("vot_eval","true"),localStorage.setItem("date_eval",p));case 10:e.next=13;break;case 12:alert("Veuillez choisir un candidat !");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function j(){return(j=(0,r.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.db-ip.com/v2/free/self");case 2:return e.sent,e.next=5,fetch("/api/users?type=2");case 5:if(!(t=e.sent).ok){e.next=16;break}if(204!==t.status){e.next=11;break}f(!0),e.next=16;break;case 11:return e.next=13,t.json();case 13:r=e.sent,n(r),f(!1);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t.length>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.J,{}),(0,d.jsx)("div",{className:"md:container flex justify-center",children:(0,d.jsxs)("div",{className:"sm:w-full md:w-5/12 lg:w-5/12",children:[(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)(l.default,{src:"/../public/logo.jpg",width:200,height:200})}),(0,d.jsx)("div",{className:"border-2 p-4",style:{marginBottom:50},children:u?(0,d.jsx)("div",{className:"flex justify-center rounded h-10",style:{backgroundColor:"#c82333",color:"#fff",alignItems:"center"},children:"Aucun enregistrement trouv\xe9 !"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h1",{className:"text-xl h-16",children:[(0,d.jsx)("strong",{children:"Note : "}),"Choisissez votre meilleur \xe9valuateur"]}),t.map((function(e){return(0,d.jsx)("div",{className:"rounded border-2 sm:w-full mb-8",children:(0,d.jsxs)("div",{className:"flex items-center h-12",children:[(0,d.jsx)("input",{id:e.id,value:e,name:"platform",type:"radio",className:"w-14 h-5",onChange:function(){return function(e){m(e)}(e)}}),(0,d.jsx)("label",{htmlFor:"vote",className:"text-xl",children:e.nom})]})},e.id)})),(0,d.jsx)("br",{}),localStorage.getItem("vot_eval")&&localStorage.getItem("date_eval")==p?(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsx)("div",{style:{color:"green"},children:"Votre vote a \xe9t\xe9 pris en compte !"}),(0,d.jsx)("div",{children:(0,d.jsx)(c.default,{href:"/improvisation",children:(0,d.jsx)("a",{style:{color:"royalblue",textDecoration:"underline"},children:"Prochain vote--\x3e"})})})]}):(0,d.jsx)("div",{className:"flex justify-items-end",children:(0,d.jsx)("div",{className:"rounded border-2 h-10 border-[#3490DC] m-4 bg-[#3490DC] w-auto",children:(0,d.jsx)("button",{className:"text-white w-full text-xl px-12",onClick:v,children:"Valider"})})})]})})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"flex items-center justify-center flex-wrap bg-teal p-4 bg-primaire",style:{position:"fixed",width:"100%",bottom:0},children:(0,d.jsx)("p",{style:{display:"flex",justifyContent:"center",color:"#fff"},children:"\xa9 2021 By Abdel-Kader Sabiou"})})]}):(0,d.jsx)("div",{className:"md:container flex justify-center",children:(0,d.jsxs)("div",{className:"sm:w-full md:w-5/12 lg:w-5/12",children:[(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)(l.default,{src:"/../public/logo.jpg",width:200,height:200})}),(0,d.jsx)("div",{className:"border-2 p-4",style:{marginBottom:50},children:u?(0,d.jsx)("div",{className:"flex justify-center rounded h-10",style:{backgroundColor:"#c82333",color:"#fff",alignItems:"center"},children:"Aucun enregistrement trouv\xe9 !"}):null})]})})}},5969:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/evaluation",function(){return n(196)}])}},function(e){e.O(0,[379,774,888,179],(function(){return t=5969,e(e.s=t);var t}));var t=e.O();_N_E=t}]);