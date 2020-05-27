(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[32],{314:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),l=a.n(n),o=a(3),c=a(47),i=[{property:"title",description:"Set Header title",default:"",type:"any",value:""},{property:"height",description:"Set Header height",default:"50px",type:"string | number",value:""},{property:"color",description:"Set Header background color",default:"",type:"string",value:"primary | info | success | info | black"},{property:"sticky",description:"Set Header position sticky",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"lifted",description:"Elevate header",default:"false",type:"boolean",value:"true | false"},{property:"leftControl",description:"Set control button on left side",default:"false",type:"boolean",value:"true | false"},{property:"leftControlIcon",description:"Set control button icon (see icons list)",default:"menu",type:"string",value:""},{property:"leftControlSize",description:"Set left control button size",default:"medium",type:"string",value:"default | medium | large"},{property:"onLeftControl",description:"Invokes on left control click",default:"",type:"function",value:""},{property:"rightSide",description:"Set right side elements",default:"",type:"any",value:""},{property:"smooth",description:"Make header borders smooth",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],s=["default","primary","info","success","error","black"];t.default=function(){var e=Object(n.useState)(s[0]),t=Object(r.a)(e,2),a=t[0],u=t[1],p=Object(n.useState)(!1),m=Object(r.a)(p,2),d=m[0],f=m[1],y=Object(n.useState)(!0),h=Object(r.a)(y,2),b=h[0],g=h[1],E=Object(n.useState)(!1),k=Object(r.a)(E,2),v=k[0],S=k[1],C=Object(n.useState)(!1),O=Object(r.a)(C,2),j=O[0],N=O[1];return l.a.createElement(o.T.Consumer,null,(function(e){return l.a.createElement(c.a,{usage:"// Usage examples\nimport React from 'react';\nimport { Header, Button } from '@assenti/react-ui-components';\n\nfunction Example() {\n    return (\n        <>\n            <Header\n                title=\"Header light\" \n                leftControl\n                rightSide={<Button icon=\"account\"/>}\n        </>\n    )\n}",componentName:"<Header/>",apiDescItems:i},l.a.createElement(o.y,{color:e?null:a,smooth:d,dark:e,lifted:j,title:"Header",leftControl:b,rightSide:v?l.a.createElement(o.h,{dark:e||a&&"default"!==a,light:"default"===a&&!e,icon:"account"}):null}),l.a.createElement("br",null),l.a.createElement(o.r,null),l.a.createElement(o.K,{items:s,prefix:l.a.createElement(o.z,{name:"brush"}),width:200,dark:e,label:"Color theme",color:"primary",value:a,onChange:function(e){return u(e)}}),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:d,rightLabel:"Smooth borders",className:"my-10",onChange:function(){return f(!d)}}),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:v,rightLabel:"Right side",className:"my-10",onChange:function(){return S(!v)}}),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:b,rightLabel:"Left control",className:"my-10",onChange:function(){return g(!b)}}),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:j,rightLabel:"Lifted",className:"my-10",onChange:function(){return N(!j)}}))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),l=a.n(n),o=a(3),c=a(343),i=a(291),s=a(292),u=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),p=Object(r.a)(a,2),m=p[0],d=p[1];return l.a.createElement(o.T.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),l.a.createElement(o.k,{dark:a,header:l.a.createElement("h4",null,"Usage")},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:a},l.a.createElement(c.a,{language:"jsx",style:a?i.a:s.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10"},l.a.createElement(o.P,{tableTitle:l.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:u})))}))}}}]);