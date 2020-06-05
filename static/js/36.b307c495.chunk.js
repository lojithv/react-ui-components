(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[36],{305:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),l=a.n(n),o=a(3),c=a(47),s=[{property:"visible",description:"Set modal visible state",default:"",type:"boolean",value:"true | false"},{property:"onClose",description:"Ivokes on close icon click",default:"",type:"function",value:""},{property:"closable",description:"Set closable on modal overlay click",default:"false",type:"boolean",value:"true | false"},{property:"centered",description:"Set modal vertical position - center",default:"false",type:"boolean",value:"true | false"},{property:"hideOverlay",description:"Hide modal overlay",default:"false",type:"boolean",value:"true | false"},{property:"marginTop",description:"Set margin top (has no effect with centered prop)",default:"20px",type:"number | string",value:""},{property:"padding",description:"Set modal body padding",default:"15px",type:"number | string",value:""},{property:"width",description:"Set modal width",default:"",type:"number | string",value:""},{property:"toggleFullscreen",description:"Enable modal fullscreen mode",default:"false",type:"boolean",value:"true | false"},{property:"headerReverse",description:"Reverse modal header icons position",default:"false",type:"boolean",value:"true | false"},{property:"closeIconColor",description:"Set close icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"fullscreenIconColor",description:"Set fullscreen icon color",default:"gray",type:"string",value:"hex | rgb(-a) | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"},{property:"header",description:"Set modal header",default:"",type:"any",value:""},{property:"footer",description:"Set modal footer",default:"",type:"any",value:""},{property:"className",description:"Set css custom class",default:"",type:"string",value:""}];t.default=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],m=Object(n.useState)(!1),p=Object(r.a)(m,2),d=p[0],u=p[1],y=Object(n.useState)(!1),f=Object(r.a)(y,2),b=f[0],h=f[1],g=Object(n.useState)(!1),v=Object(r.a)(g,2),E=v[0],k=v[1],S=Object(n.useState)(!1),N=Object(r.a)(S,2),C=N[0],O=N[1],x=Object(n.useState)(!1),j=Object(r.a)(x,2),T=j[0],D=j[1];return l.a.createElement(o.V.Consumer,null,(function(e){return l.a.createElement(c.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { Button, Modal } from '@assenti/rui-components';\n\nfunction Example() {\n    const [modal, setModal] = useState(false);\n\n    return (\n        <>\n            <Button\n                color=\"primary\"\n                name=\"Open Modal\"\n                onClick={() => setModal(true)}/>\n            <Modal\n                centered\n                onClose={() => setModal(false)} \n                visible={modal} \n                header={<div>Sign in</div>}>\n                content...\n            </Modal>\n        </>\n    )\n}",apiDescItems:s,componentName:"<Modal/>"},l.a.createElement(o.Q,{color:"primary",check:d,rightLabel:"Reversed header",className:"pl-10 my-10",onChange:function(){return u(!d)}}),l.a.createElement(o.Q,{color:"primary",check:b,rightLabel:"Close on background",className:"pl-10 my-10",onChange:function(){return h(!b)}}),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:T,rightLabel:"Hide overlay",className:"pl-10 my-10",onChange:function(){return D(!T)}}),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:E,rightLabel:"Centered",className:"pl-10 my-10",onChange:function(){return k(!E)}}),l.a.createElement(o.Q,{color:"primary",check:C,rightLabel:"With full screen option",className:"pl-10 my-10",onChange:function(){return O(!C)}}),l.a.createElement(o.r,null),l.a.createElement("br",null),l.a.createElement(o.h,{color:"primary",name:"Open Modal",onClick:function(){return i(!0)}}),l.a.createElement(o.D,{closable:b,dark:e,width:350,hideOverplay:T,centered:E,headerReverse:d,toggleFullscreen:C,onClose:function(){return i(!1)},visible:a,header:l.a.createElement("div",null,"Sign in")},l.a.createElement("div",{className:"pa-10"},l.a.createElement(o.A,{style:{width:"100%"},size:"medium",borderType:"rounded",className:"my-10",dark:e,prefix:l.a.createElement(o.z,{name:"account"}),placeholder:"Login"}),l.a.createElement(o.A,{style:{width:"100%"},size:"medium",borderType:"rounded",className:"my-10",dark:e,prefix:l.a.createElement(o.z,{name:"key"}),placeholder:"Password",type:"password"}),l.a.createElement(o.m,{className:"my-10",color:"primary",checked:d,label:"Remember me?"}),l.a.createElement(o.h,{borderType:"rounded",size:"medium",className:"my-10",color:"primary",name:"Sign in",block:!0}),l.a.createElement("div",{className:"fz-9 rui-link text-center py-10"},"Dont't have an account?"))))}))}},47:function(e,t,a){"use strict";var r=a(1),n=a(0),l=a.n(n),o=a(3),c=a(345),s=a(289),i=a(290),m=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),p=Object(r.a)(a,2),d=(p[0],p[1]);return l.a.createElement(o.V.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",l.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),l.a.createElement(o.k,{dark:a,header:l.a.createElement(o.Y,{tooltip:"I am a <Tag/> component",position:"right"},l.a.createElement(o.T,{className:"mx-0 mb-10 mt-0",color:"secondary"},l.a.createElement(o.z,{name:"cog-outline"})," Usage"))},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:"Code",icon:l.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:a},l.a.createElement(c.a,{language:"jsx",style:a?s.a:i.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&l.a.createElement(o.R,{tableTitle:l.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.fb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content),e.apiDescItems2&&l.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&l.a.createElement(o.R,{tableTitle:l.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.fb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:m}),e.content))}))}}}]);