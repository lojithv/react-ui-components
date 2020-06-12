(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[26],{332:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),l=a.n(r),o=a(3),i=a(47),s=[{property:"locale",description:"Set locale (English, Kazakh, Russian, French. i18n in process)",default:"en",type:"string",value:"en | kz | ru | fr"},{property:"events",description:"Set events",default:"",type:"array[{ date, items: [{title?, event, color?}] }]",value:""},{property:"holidays",description:"Set holidays",default:"",type:"array[{ date }]",value:""},{property:"onDate",description:"Invokes on date click (return Date object)",default:"",type:"function",value:""},{property:"active",description:"Chosen date value (original Date value)",default:"",type:"string",value:""},{property:"hideWeekend",description:"If flag is set, weekend highlighting disabled",default:"false",type:"boolean",value:"true | false"},{property:"hideCurrentDay",description:"If flag is set, today highlighting disabled",default:"false",type:"boolean",value:"true | false"},{property:"disabledDates",description:"Pass array of dates that not available for pick",default:"",type:"Date[]",value:""},{property:"minDate",description:"Set minimum endable date for pick",default:"",type:"Date",value:""},{property:"maxDate",description:"Set maximum endable date for pick",default:"",type:"Date",value:""},{property:"color",description:"Set Calendar color theme",default:"",type:"string",value:"primary | info | success | error | dark"},{property:"selectBorderType",description:"Set years select borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"size",description:"Set Calendar size",default:"",type:"string",value:"medium | large"},{property:"limit",description:"Set years limit that should be enabled",default:"15",type:"number",value:""},{property:"onlyPast",description:"If flag is set, only past years enabled",default:"false",type:"boolean",value:"true | false"},{property:"weekStartsSunday",description:"If flag is set, week starts from Sunday",default:"false",type:"boolean",value:"true | false"},{property:"shortWeekName",description:"Set short week name",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"width",description:"Set width",default:"100%",type:"number | string",value:""},{property:"popOverTrigger",description:"Set event popover invoking mode",default:"hover",type:"string",value:"hover | click"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],c=["primary","info","success","error","black"],m=["default","medium","large"],d=["en","kz","ru","fr"],u=["default","tile","rounded","smooth"],p=[{date:new Date(2020,2,8),items:[{title:"Event",event:"International Women Day",color:"#9C27B0"},{title:"Event",event:"Congratulate my women",color:"#9C27B0"}]},{date:new Date(2020,2,22),items:[{title:"Event",event:"Nauryz Meiramy Holiday",color:"#9C27B0"}]}],y=[{date:new Date(2020,2,8)},{date:new Date(2020,2,9)},{date:new Date(2020,2,22)},{date:new Date(2020,2,23)}];t.default=function(){var e=Object(r.useState)(c[0]),t=Object(n.a)(e,2),a=t[0],h=t[1],f=Object(r.useState)(m[0]),b=Object(n.a)(f,2),g=b[0],v=b[1],E=Object(r.useState)(d[0]),k=Object(n.a)(E,2),D=k[0],S=k[1],w=Object(r.useState)(15),C=Object(n.a)(w,2),j=C[0],O=C[1],N=Object(r.useState)(!0),x=Object(n.a)(N,2),z=x[0],I=x[1],T=Object(r.useState)(!1),W=Object(n.a)(T,2),B=W[0],P=W[1],H=Object(r.useState)(!1),K=Object(n.a)(H,2),L=K[0],R=K[1],Q=Object(r.useState)(!1),U=Object(n.a)(Q,2),A=U[0],F=U[1],J=Object(r.useState)(!1),M=Object(n.a)(J,2),V=M[0],Y=M[1],Z=Object(r.useState)(u[0]),q=Object(n.a)(Z,2),G=q[0],X=q[1],$=Object(r.useState)(""),_=Object(n.a)($,2),ee=_[0],te=_[1];return l.a.createElement(o.W.Consumer,null,(function(e){return l.a.createElement(i.a,{usage:"// Usage example\nimport React, { useState } from 'react';\nimport { Calendar } from '@assenti/rui-components';\n\nconst events = [\n    { \n        date: new Date(2020,2,8), \n        items: [\n            { title: 'Event', event: 'International Women Day', color: '#9C27B0' },\n            { title: 'Event', event: 'Congratulate my women', color: '#9C27B0' }\n\n        ]\n    },\n    { \n        date: new Date(2020,2,22), \n        items: [\n            { title: 'Event', event: 'Nauryz Meiramy Holiday', color: '#9C27B0' }\n        ]\n    }\n]\n\nconst holidays = [\n    { date: new Date(2020,2,8) },\n    { date: new Date(2020,2,9) },\n    { date: new Date(2020,2,22) },\n    { date: new Date(2020,2,23) }\n]\n\nfunction Example() {\n    const [date, setDate] = useState('');\n\n    return (\n        <>\n            <Calendar\n                width={400}\n                shortWeekName\n                active={date}\n                disabledDates={[new Date(2020,3,19), new Date(2020,3,20)]}\n                maxDate={new Date()}\n                onDate={(date) => {\n                    console.log(date)\n                    setDate(date)\n                }}\n                events={events}\n                holidays={holidays}\n                weekStartsSunday={weekStartsSunday}\n                onlyPast\n                color=\"primary\"/>\n        </>\n    )\n}",componentName:"<Calendar/>",apiSearchable:!0,apiDescItems:s},l.a.createElement(o.K,{items:c,prefix:l.a.createElement(o.z,{name:"brush"}),width:200,dark:e,label:"Calendar color",color:"primary",className:"mr-10",value:a,onChange:function(e){return h(e)}}),l.a.createElement(o.K,{items:u,dark:e,prefix:l.a.createElement(o.z,{name:"shape"}),width:200,label:"Select border type",color:"primary",className:"mr-10",value:G,onChange:function(e){return X(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:m,prefix:l.a.createElement(o.z,{name:"format-size"}),width:200,dark:e,label:"Calendar size",color:"primary",value:g,onChange:function(e){return v(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:d,prefix:l.a.createElement(o.z,{name:"translate"}),width:200,dark:e,label:"Locale",color:"primary",className:"mr-10",value:D,onChange:function(e){return S(e)}}),l.a.createElement(o.A,{style:{width:200},value:j,dark:e,label:"Years limit",onChange:function(e){return O(e.target.value)},prefix:l.a.createElement(o.z,{name:"calendar-month"})}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:z,rightLabel:"Show only past years",onChange:function(){return I(!z)}}),l.a.createElement(o.Q,{color:"primary",check:B,rightLabel:"Week starts from Sunday",onChange:function(){return P(!B)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:L,rightLabel:"Full width",onChange:function(){return R(!L)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:V,rightLabel:"Hide current day highlight",onChange:function(){return Y(!V)}}),l.a.createElement(o.Q,{color:"primary",check:A,rightLabel:"Hide weekend highlight",onChange:function(){return F(!A)}}),l.a.createElement(o.r,null),l.a.createElement("br",null),l.a.createElement(o.j,{width:L?null:400,shortWeekName:!0,active:ee,selectBorderType:G,disabledDates:[new Date(2020,3,19),new Date(2020,3,20)],maxDate:new Date,hideWeekend:A,hideCurrentDay:V,onDate:function(e){console.log(e),te(e)},events:p,holidays:y,weekStartsSunday:B,size:g,dark:e,limit:j,onlyPast:z,locale:D,color:a}))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(3),i=a(346),s=a(289),c=a(290),m=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),d=Object(n.a)(a,2),u=(d[0],d[1]);return l.a.createElement(o.W.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",l.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),l.a.createElement(o.k,{dark:a,header:l.a.createElement(o.Z,{tooltip:"I am a <Tag/> component",position:"right"},l.a.createElement(o.U,{className:"mx-0 mb-10 mt-0",color:"secondary"},l.a.createElement(o.z,{size:18,className:"mr-4",name:"cog-outline"})," Usage"))},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return u(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:"Code",icon:l.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:a},l.a.createElement(i.a,{language:"jsx",style:a?s.a:c.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&l.a.createElement(o.R,{tableTitle:l.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content),e.apiDescItems2&&l.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&l.a.createElement(o.R,{tableTitle:l.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:m}),e.content))}))}}}]);