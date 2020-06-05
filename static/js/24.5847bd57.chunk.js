(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[24],{312:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),l=a(3),c=a(47),i=[{property:"options",description:"Button group options",default:"",type:"string[] | number[]",value:""},{property:"onChange",description:"Handle selection (return item and index)",default:"",type:"function",value:""},{property:"default",description:"Set default active item",default:"",type:"number",value:""},{property:"size",description:"Set buttons group size",default:"",type:"string",value:"medium | large"},{property:"icon",description:"Set group type to icon",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set buttons color",default:"",type:"string",value:"primary | info | success | error | secondary | black"},{property:"outlined",description:"Make buttons group background transparent and outline borders",default:"false",type:"boolean",value:"true | false"},{property:"lifted",description:"Lift up the button group",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],s=["KZ","RU","EN"],m=["format-align-left","format-align-center","format-align-right"],u=["primary","info","success","error","secondary","black"],p=["default","medium","large"];t.default=function(){var e=Object(r.useState)(u[0]),t=Object(n.a)(e,2),a=t[0],d=t[1],f=Object(r.useState)(p[0]),b=Object(n.a)(f,2),g=b[0],y=b[1],h=Object(r.useState)(!1),E=Object(n.a)(h,2),k=E[0],v=E[1],O=Object(r.useState)(!1),N=Object(n.a)(O,2),j=N[0],x=N[1],C=Object(r.useState)(!1),S=Object(n.a)(C,2),T=S[0],z=S[1];return o.a.createElement(l.V.Consumer,null,(function(e){return o.a.createElement(c.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { ButtonGroup } from '@assenti/react-ui-components';\nconst icons = ['format-align-left', 'format-align-center', 'format-align-right'];\n\nfunction Example() {\n    const [option, setOption] = useState('');\n\n    return (\n        <>\n            <ButtonGroup \n                default={0} \n                onChange={(item, index) => setOption(item)}\n                options={icons} \n                color=\"primary\"/>\n        </>\n    )\n}",apiDescItems:i,componentName:"<ButtonGroup/>"},o.a.createElement(l.K,{items:p,dark:e,prefix:o.a.createElement(l.z,{name:"format-size"}),width:200,label:"Button size",color:"primary",value:g,onChange:function(e){return y(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.K,{items:u,dark:e,prefix:o.a.createElement(l.z,{name:"brush"}),width:200,label:"Button color",color:"primary",value:a,onChange:function(e){return d(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.Q,{color:"primary",check:k,rightLabel:"Outlined",onChange:function(){return v(!k)}}),o.a.createElement(l.Q,{color:"primary",check:j,rightLabel:"Icon",onChange:function(){return x(!j)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.Q,{color:"primary",check:T,rightLabel:"Lifted",onChange:function(){return z(!T)}}),o.a.createElement(l.r,null),o.a.createElement("br",null),o.a.createElement("div",{className:"pa-10"},o.a.createElement(l.i,{default:0,options:j?m:s,color:a,size:g,icon:j,lifted:T,dark:e,outlined:k,className:"mr-10"})))}))}},47:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),l=a(3),c=a(345),i=a(289),s=a(290),m=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),u=Object(n.a)(a,2),p=(u[0],u[1]);return o.a.createElement(l.V.Consumer,null,(function(a){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",o.a.createElement(l.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),o.a.createElement(l.k,{dark:a,header:o.a.createElement(l.Y,{tooltip:"I am a <Tag/> component",position:"right"},o.a.createElement(l.T,{className:"mx-0 mb-10 mt-0",color:"secondary"},o.a.createElement(l.z,{name:"cog-outline"})," Usage"))},e.children,o.a.createElement(l.n,{className:"mt-10",extra:o.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return p(e)},customToggler:o.a.createElement(l.h,{className:"ml-20",name:"Code",icon:o.a.createElement(l.z,{name:"code",size:20}),color:"info"}),dark:a},o.a.createElement(c.a,{language:"jsx",style:a?i.a:s.a},e.usage))),e.backTopBtn?o.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(l.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&o.a.createElement(l.R,{tableTitle:o.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(l.fb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content),e.apiDescItems2&&o.a.createElement(l.k,{className:"mt-10"},e.apiDescItems2.length>0&&o.a.createElement(l.R,{tableTitle:o.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(l.fb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:m}),e.content))}))}}}]);