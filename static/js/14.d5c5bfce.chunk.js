(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[14],{292:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),c=a.n(l),r=a(3),o=a(66),i=a(346),m=a(289),s=a(290),u=a(50),d=a.n(u);t.default=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],u=t[1],E=Object(l.useState)(!1),h=Object(n.a)(E,2),p=h[0],g=h[1],f=Object(l.useState)(1e3),v=Object(n.a)(f,2),b=v[0],k=v[1],y=Object(l.useState)(o.b[0].name),x=Object(n.a)(y,2),w=x[0],N=x[1];return c.a.createElement(r.W.Consumer,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Here is an example how you can combine and use components"),c.a.createElement("br",null),c.a.createElement(r.k,{style:{height:600},className:"pa-0"},c.a.createElement(r.y,{lifted:!0,dark:e,padding:"0 10px",height:50},c.a.createElement("h4",{className:"row align-center my-0 text-dark"},c.a.createElement(r.z,{className:"mr-10",name:"dashboard-outline"})," Dashboard Layout"),c.a.createElement(r.u,{dark:e,width:200,position:"right",content:c.a.createElement("div",{className:"pa-10"},c.a.createElement("div",{className:"text-center"},c.a.createElement(r.c,{img:d.a,borderType:"rounded",height:100,dark:e}),c.a.createElement("h4",null,"John Doe")),c.a.createElement(r.r,null),c.a.createElement(r.C,{dark:e},o.b.map((function(e,t){return c.a.createElement(r.C.Item,{key:t,hover:!0,noDivider:!0,isActiveItem:w===e.name,item:e.name,icon:e.icon,onClick:function(){"Exit"===e.name?u(!0):N(e.name)}})})))),trigger:c.a.createElement(r.h,{dark:e,light:!e,icon:"account"})})),c.a.createElement("div",{className:"row",style:{height:"calc(100% - ".concat(50,"px")}},c.a.createElement(r.L,{height:"100%",dark:e,lifted:!0,min:p,collapsable:!0,onToggle:function(){return g(!p)}},c.a.createElement(r.C,{size:"medium",dark:e},o.b.map((function(e,t){return c.a.createElement(r.C.Item,{key:t,hover:!0,isActiveItem:w===e.name,noDivider:!0,tooltip:p?e.name:"",tooltipPosition:"right",item:p?"":e.name,icon:e.icon,onClick:function(){"Exit"===e.name?u(!0):N(e.name)}})})))),c.a.createElement("div",{style:{height:"100%"},className:"rui-content pa-10"},c.a.createElement("div",{className:"row wrap",style:{height:"50%"}},c.a.createElement("div",{className:"col pa-5"},c.a.createElement(r.k,{style:{height:"100%"},dark:e},c.a.createElement(r.P,{title:"Speed of light, m/s",value:299792458,financial:!0,valueSize:24}),c.a.createElement("div",{className:"text-center mt-10"},c.a.createElement(r.z,{name:"chart-donut",color:"indigo",size:90})))),c.a.createElement("div",{className:"col pa-5"},c.a.createElement(r.k,{style:{height:"100%"},dark:e},c.a.createElement(r.P,{title:"Almaty, pop. (M)",align:"bottom",value:2,valueColor:"#42a5f5",prefix:c.a.createElement(r.z,{name:"account-group",className:"mr-5",color:"#42a5f5",size:35})})))),c.a.createElement("div",{className:"row",style:{height:"50%"}},c.a.createElement("div",{className:"col pa-5"},c.a.createElement(r.k,{dark:e,style:{height:"100%"}},c.a.createElement(r.P,{title:c.a.createElement("div",{className:"row space-between align-center"},c.a.createElement(r.U,{value:"Downloads, p/w",color:"success",className:"ma-0",tiny:!0}),c.a.createElement(r.Z,{tooltip:"Refresh"},c.a.createElement(r.h,{icon:"refresh",light:!0,onClick:function(){return k(1e3)}}))),align:"bottom",value:b,valueColor:"#1aaa55",valueSize:30,fractions:2,autoFill:!0,step:20,onDone:function(){return console.log("DONE")},prefix:c.a.createElement(r.z,{name:"download",color:"#1aaa55"})}))),c.a.createElement("div",{className:"col pa-5"},c.a.createElement(r.k,{dark:e,style:{height:"100%"}},c.a.createElement(r.P,{title:"Downloads trend",align:"bottom",value:15.15,valueColor:"red",valueSize:35,suffix:c.a.createElement("small",{style:{color:"red"}},"%"),prefix:c.a.createElement(r.z,{name:"arrow-down",color:"red"})}))))),c.a.createElement(r.q,{dark:e,title:"Do you want to exit ?",visible:a,onCancel:function(){return u(!1)},onConfirm:function(){return u(!1)}})),c.a.createElement(i.a,{language:"jsx",style:e?m.a:s.a},"")))}))}},50:function(e,t,a){e.exports=a.p+"static/media/man.e941ef11.png"},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var n=[{name:"Home",icon:"home"},{name:"Profile",icon:"account"},{name:"Settings",icon:"cog-outline"},{name:"Exit",icon:"exit-to-app"}],l=[{name:"Main",icon:"dashboard-outline"},{name:"Profile",icon:"account"},{name:"Settings",icon:"cog-outline"},{name:"Exit",icon:"exit-to-app"}]}}]);