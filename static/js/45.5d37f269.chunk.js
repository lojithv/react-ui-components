(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[45],{293:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(47),o=a(3),i=[{property:"title",description:"Set statisctics title",default:"",type:"ReactNode",value:""},{property:"value",description:"Set statisctics value",default:"",type:"number",value:""},{property:"fractions",description:"Set statisctics value fractions length after the integer",default:"0",type:"number",value:""},{property:"valueSize",description:"Set statisctics value font size",default:"",type:"number",value:""},{property:"valueColor",description:"Set statisctics value color",default:"",type:"string",value:""},{property:"autoFill",description:"Set value autofill mode",default:"false",type:"boolean",value:"true | false"},{property:"step",description:"Set autofilling step size",default:"10",type:"number",value:""},{property:"interval",description:"Set autofilling interval",default:"30ms",type:"number",value:""},{property:"onDone",description:"Invoked on value autofill finishes (has effect with autoFill mode)",default:"",type:"function",value:""},{property:"financial",description:"Set a financial display of the number",default:"false",type:"boolean",value:"true | false"},{property:"prefix",description:"Set prefix",default:"",type:"ReactNode",value:""},{property:"suffix",description:"Set suffix",default:"",type:"ReactNode",value:""},{property:"align",description:"Set vertical alignment",default:"",type:"string",value:"top | center | bottom"},{property:"style",description:"Set a custom inline styles",default:"",type:"object",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){return n.a.createElement(o.V.Consumer,null,(function(e){return n.a.createElement(r.a,{usage:'// Usage example\nimport React from \'react\';\nimport { Statistics, Tag, Icon } from \'../components\';\n\nfunction Example() {\n    return (\n        <>\n            <Statistics\n                title={\n                    <Tag\n                        value="Downloads, p/w" \n                        color="success"\n                        className="ma-0"\n                        tiny/>}\n                align="bottom"\n                value={1000}\n                valueColor="#1aaa55"\n                valueSize={30}\n                fractions={2}\n                autoFill\n                onDone={() => console.log(\'DONE\')}\n                prefix={<Icon name="download"/>}/>\n        </>\n    )\n}',apiDescItems:i,componentName:"<Statistics/>"},n.a.createElement("div",{className:"row align-top wrap"},n.a.createElement(o.k,{dark:e,style:{width:185,height:100},className:"my-5 mr-10"},n.a.createElement(o.P,{title:"Speed of light, m/s",value:299792458,financial:!0,valueSize:24})),n.a.createElement(o.k,{dark:e,style:{width:160,height:100},className:"my-5 mr-10"},n.a.createElement(o.P,{title:"Almaty, pop. (M)",align:"bottom",value:2,valueColor:"#42a5f5",prefix:n.a.createElement(o.z,{name:"account-group",className:"mr-5",color:"#42a5f5",size:35})})),n.a.createElement(o.k,{dark:e,style:{width:180,height:100},className:"my-5 mr-10"},n.a.createElement(o.P,{title:n.a.createElement(o.T,{color:"success",className:"ma-0",tiny:!0},"Downloads, p/w"),align:"bottom",value:1e3,style:{width:170},valueColor:"#1aaa55",valueSize:30,fractions:2,step:20,autoFill:!0,onDone:function(){return console.log("DONE")},prefix:n.a.createElement(o.z,{name:"download"})})),n.a.createElement(o.k,{dark:e,style:{width:160,height:100},className:"my-5"},n.a.createElement(o.P,{title:"Downloads trend",align:"bottom",value:15.15,valueColor:"red",valueSize:35,suffix:n.a.createElement("small",{style:{color:"red"}},"%"),prefix:n.a.createElement(o.z,{name:"arrow-down",color:"red"})}))))}))}},47:function(e,t,a){"use strict";var l=a(1),n=a(0),r=a.n(n),o=a(3),i=a(345),s=a(289),c=a(290),m=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),p=Object(l.a)(a,2),u=(p[0],p[1]);return r.a.createElement(o.V.Consumer,null,(function(a){return r.a.createElement("div",{className:"rui-page",ref:t},r.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",r.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),r.a.createElement(o.k,{dark:a,header:r.a.createElement(o.Y,{tooltip:"I am a <Tag/> component",position:"right"},r.a.createElement(o.T,{className:"mx-0 mb-10 mt-0",color:"secondary"},r.a.createElement(o.z,{name:"cog-outline"})," Usage"))},e.children,r.a.createElement(o.n,{className:"mt-10",extra:r.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return u(e)},customToggler:r.a.createElement(o.h,{className:"ml-20",name:"Code",icon:r.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:a},r.a.createElement(i.a,{language:"jsx",style:a?s.a:c.a},e.usage))),e.backTopBtn?r.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,r.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&r.a.createElement(o.R,{tableTitle:r.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.fb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m}),e.content),e.apiDescItems2&&r.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&r.a.createElement(o.R,{tableTitle:r.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.fb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:m}),e.content))}))}}}]);