(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[7],{282:function(e,t,a){e.exports=a.p+"static/media/slide1.5224be5c.jpg"},283:function(e,t,a){e.exports=a.p+"static/media/slide2.a834a990.jpg"},284:function(e,t,a){e.exports=a.p+"static/media/slide3.2a435fab.jpg"},294:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),o=a(3),l=a(282),s=a.n(l),c=a(283),m=a.n(c),p=a(284),u=a.n(p),d=a(47),g=[{property:"items",description:"Carousel slides",default:"",type:"{ img: string, title: string }",value:""},{property:"onClick",description:"Invokes on slide click",default:"",type:"function",value:""},{property:"height",description:"Set Carousel height",default:"",type:"string | number",value:""},{property:"width",description:"Set Carousel width",default:"",type:"string | number",value:""},{property:"hideArrows",description:"Hide arrows",default:"false",type:"boolean",value:"true | false"},{property:"hideDots",description:"Hide dots",default:"false",type:"boolean",value:"true | false"},{property:"autoMotion",description:"Enable Carousel auto motion",default:"false",type:"boolean",value:"true | false"},{property:"interval",description:"Set Carousel slides change motion interval",default:"3000ms",type:"number",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){var e=[{img:s.a,title:"Slide 1"},{img:m.a,title:"Slide 2"},{img:u.a,title:"Slide 3"}],t=Object(r.useState)(!1),a=Object(n.a)(t,2),l=a[0],c=a[1],p=Object(r.useState)(!1),f=Object(n.a)(p,2),h=f[0],y=f[1];return i.a.createElement(o.W.Consumer,null,(function(t){return i.a.createElement(d.a,{usage:"// Usage example\nimport React from 'react';\nimport { Carousel } from '../components';\nimport slide1 from 'path/to/images/slide1.jpg';\nimport slide2 from 'path/to/images/slide2.jpg';\nimport slide3 from 'path/to/images/slide3.jpg';\n\nfunction Example() {\n    const slides = [\n        { img: slide1, title: 'Slide 1' },\n        { img: slide2, title: 'Slide 2' },\n        { img: slide3, title: 'Slide 3' }\n    ]\n\n    return (\n        <>\n            <Carousel \n                height={400}\n                autoMotion\n                items={slides}/>\n        </>\n    )\n}",apiDescItems:g,componentName:"<Carousel/>"},i.a.createElement(o.Q,{color:"primary",check:l,rightLabel:"Hide arrows",className:"my-10",onChange:function(){return c(!l)}}),i.a.createElement(o.Q,{color:"primary",check:h,rightLabel:"Hide dots",className:"my-10",onChange:function(){return y(!h)}}),i.a.createElement("br",null),i.a.createElement(o.r,null),i.a.createElement(o.l,{height:400,autoMotion:!0,hideArrows:l,onClick:function(e,t){return console.log(e,t)},hideDots:h,items:e}))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),i=a.n(r),o=a(3),l=a(346),s=a(289),c=a(290),m=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),p=Object(n.a)(a,2),u=(p[0],p[1]);return i.a.createElement(o.W.Consumer,null,(function(a){return i.a.createElement("div",{className:"rui-page",ref:t},i.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",i.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),i.a.createElement(o.k,{dark:a,header:i.a.createElement(o.Z,{tooltip:"I am a <Tag/> component",position:"right"},i.a.createElement(o.U,{className:"mx-0 mb-10 mt-0",color:"secondary"},i.a.createElement(o.z,{size:18,className:"mr-4",name:"cog-outline"})," Usage"))},e.children,i.a.createElement(o.n,{className:"mt-10",extra:i.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return u(e)},customToggler:i.a.createElement(o.h,{className:"ml-20",name:"Code",icon:i.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:a},i.a.createElement(l.a,{language:"jsx",style:a?s.a:c.a},e.usage))),e.backTopBtn?i.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,i.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&i.a.createElement(o.R,{tableTitle:i.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content),e.apiDescItems2&&i.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&i.a.createElement(o.R,{tableTitle:i.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:m}),e.content))}))}}}]);