import{aN as s,r as a,aQ as C}from"./index-Cnyimvyr.js";import{a as g,b as f}from"./project-17REHQku.js";import{F as m,M as w,n as h}from"./index-BS2iWgXM.js";const y="_container_1dnu4_1",k="_right_1dnu4_8",u={container:y,right:k},$="_container_1ag6p_1",P="_logo_1ag6p_5",S="_item_1ag6p_9",I="_label_1ag6p_22",o={container:$,logo:P,item:S,label:I},F=c=>{const{onClick:t}=c;return s.jsxs("div",{className:o.container,children:[s.jsx("div",{className:o.logo,children:"1325390776@qq.com"}),s.jsxs("div",{className:o.item,onClick:()=>t("projects"),children:[s.jsx("span",{className:"iconfont icon-assets"}),s.jsx("span",{className:o.label,children:"项目"})]}),s.jsxs("div",{className:o.item,onClick:()=>t("templates"),children:[s.jsx("span",{className:"iconfont icon-assets"}),s.jsx("span",{className:o.label,children:"示例"})]}),s.jsxs("div",{className:o.item,onClick:()=>t("documents"),children:[s.jsx("span",{className:"iconfont icon-assets"}),s.jsx("span",{className:o.label,children:"文档"})]})]})},q="_title-container_1atwi_1",E="_title_1atwi_1",M="_container_1atwi_12",A="_body_1atwi_18",B="_projects_1atwi_37",D="_project_1atwi_37",L="_cover_1atwi_60",T="_actived_1atwi_70",V="_name_1atwi_74",n={titleContainer:q,title:E,container:M,body:A,projects:B,project:D,cover:L,actived:T,name:V},G={labelCol:{xs:{span:8},sm:{span:4}},wrapperCol:{xs:{span:16},sm:{span:20}}},H=c=>{const{visible:t,setVisible:i,onConfirm:r}=c,[l]=m.useForm(),[j,d]=a.useState(!1),_=()=>{l.submit()},p=()=>{i(!1)},x=async e=>{d(!0);const{name:v,desc:N}=e,b=await g(v,N);i(!1),r(b)};return s.jsx(w,{title:"创建3D项目",open:t,loading:j,onOk:_,onCancel:p,children:s.jsxs(m,{form:l,...G,onFinish:x,children:[s.jsx(m.Item,{label:"项目名称",name:"name",rules:[{required:!0,message:"请输入项目名称"}],children:s.jsx(h,{})}),s.jsx(m.Item,{label:"项目描述",name:"desc",children:s.jsx(h.TextArea,{})})]})})},O=()=>{const[c,t]=a.useState([]),[i,r]=a.useState(!1),[l,j]=a.useState(""),d=async()=>{const e=await f();console.log(e),t(e)};a.useEffect(()=>{d()},[]);const _=e=>{window.open(`/editor?id=${e.code}`,`/editor?id=${e.code}`)},p=()=>{r(!0)},x=e=>{d(),window.open(`/editor?id=${e}`,`/editor?id=${e}`)};return s.jsxs("div",{className:n.container,children:[s.jsxs("div",{className:n.titleContainer,children:[s.jsx("div",{className:n.title,children:"项目"}),s.jsx(C,{type:"primary",onClick:p,children:"新建项目"})]}),s.jsx("div",{className:n.body,children:s.jsx("div",{className:n.projects,children:c.map(e=>s.jsxs("div",{className:n.project,onClick:()=>j(e.code),onDoubleClick:()=>_(e),children:[s.jsx("div",{className:`${n.cover} ${l===e.code?n.actived:""}`,style:{backgroundImage:`url(${e.cover})`}}),s.jsx("div",{className:n.name,children:e.name})]},e.code))})}),s.jsx(H,{visible:i,setVisible:r,onConfirm:x})]})},J=()=>{const[c,t]=a.useState("projects");return s.jsxs("div",{className:u.container,children:[s.jsx(F,{onClick:t}),s.jsx("div",{className:u.right,children:c==="projects"&&s.jsx(O,{})})]})};export{J as default};
