import{_ as se,q as ie,u as ue,r as n,i as ne,e as de,j as re,a as p,o as r,c,b as l,d as o,w as u,l as V,t as f,g as _,n as y,m as ce,p as me,h as ve}from"./index.c68dd7c5.js";import{P as pe}from"./ProductService.dbc46c77.js";const i=D=>(me("data-v-6a9f84b5"),D=D(),ve(),D),_e={class:"grid"},fe={class:"col-12"},he={class:"card"},be={class:"my-2"},ye=i(()=>l("input",{type:"file",name:"contrat",id:"contart"},null,-1)),ge={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Ve=i(()=>l("h5",{class:"m-0"},"gestions des formateurs",-1)),Se={class:"block mt-2 md:mt-0 p-input-icon-left"},ke=i(()=>l("i",{class:"pi pi-search"},null,-1)),we=i(()=>l("span",{class:"p-column-title"},"id",-1)),Ce=i(()=>l("span",{class:"p-column-title"},"nom",-1)),xe=i(()=>l("span",{class:"p-column-title"},"prenom",-1)),Ue=i(()=>l("span",{class:"p-column-title"},"specialite",-1)),De=i(()=>l("span",{class:"p-column-title"},"telephone",-1)),qe=i(()=>l("span",{class:"p-column-title"},"email",-1)),Te=["src","alt"],Ne={class:"field"},Pe=i(()=>l("label",{for:"name"},"nom",-1)),Fe={key:0,class:"p-invalid"},Ie={class:"field"},Me=i(()=>l("label",{for:"name"},"pr\xE9nom",-1)),Le={key:0,class:"p-invalid"},Be={class:"field"},Oe=i(()=>l("label",{for:"name"},"email",-1)),Ae={key:0,class:"p-invalid"},Re={class:"field"},Ke=i(()=>l("label",{for:"name"},"t\xE9l\xE9phone",-1)),je={key:0,class:"p-invalid"},Ee={class:"field"},ze=i(()=>l("label",{for:"name"},"sp\xE9cialite",-1)),$e={key:0,class:"p-invalid"},Ye={class:"field"},Qe=i(()=>l("label",{for:"description"},"Description",-1)),We=i(()=>l("h5",null,"image",-1)),Ge=i(()=>l("input",{type:"file",name:"contrat",id:"contart"},null,-1)),He=["src","alt"],Je={class:"field"},Xe=i(()=>l("label",{for:"name"},"Name test",-1)),Ze={key:0,class:"p-invalid"},el={class:"field"},ll=i(()=>l("label",{for:"description"},"Description",-1)),tl={class:"field"},al=i(()=>l("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1)),ol={key:0},sl={key:1},il={key:2},ul={class:"field"},nl=i(()=>l("label",{class:"mb-3"},"Category",-1)),dl={class:"formgrid grid"},rl={class:"field-radiobutton col-6"},cl=i(()=>l("label",{for:"category1"},"Accessories",-1)),ml={class:"field-radiobutton col-6"},vl=i(()=>l("label",{for:"category2"},"Clothing",-1)),pl={class:"field-radiobutton col-6"},_l=i(()=>l("label",{for:"category3"},"Electronics",-1)),fl={class:"field-radiobutton col-6"},hl=i(()=>l("label",{for:"category4"},"Fitness",-1)),bl={class:"formgrid grid"},yl={class:"field col"},gl=i(()=>l("label",{for:"price"},"Price",-1)),Vl={key:0,class:"p-invalid"},Sl={class:"field col"},kl=i(()=>l("label",{for:"quantity"},"Quantity",-1)),wl={class:"flex align-items-center justify-content-center"},Cl=i(()=>l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),xl={key:0},Ul={class:"flex align-items-center justify-content-center"},Dl=i(()=>l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),ql={key:0},Tl={__name:"CrudFormateur",setup(D){const k=ie(),{contextPath:K}=ue(),h=n([]),w=n(!1),U=n(!1),q=n(!1),s=n({}),C=n(null);n(null),n({});const v=n(!1),j=()=>{v.value=!0,s.value.nom&&s.value.nom.trim()&&(s.value.id?(h.value[O(s.value.id)]=s.value,k.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(s.value.id=M(),h.value.push(s.value),k.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),w.value=!1,s.value={})},E=d=>{s.value={...d},console.log(s),w.value=!0},z=d=>{s.value=d,U.value=!0},$=()=>{h.value=h.value.filter(d=>d.id!==s.value.id),U.value=!1,s.value={},k.add({severity:"success",summary:"Successful",detail:"formateur Deleted",life:3e3})},Y=()=>{h.value=h.value.filter(d=>!C.value.includes(d)),q.value=!1,C.value=null,k.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},F=n(null),I=n(!1);n(!1);const Q=n(!1),a=n({});n(null);const L=n(null),T=n({}),x=n(!1),W=n([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),G=new pe;ne(()=>{ee()}),de(()=>{G.getProducts().then(d=>F.value=d)});const H=()=>{s.value={},v.value=!1,w.value=!0},B=()=>{w.value=!1,v.value=!1},J=()=>{x.value=!0,a.value.name&&a.value.name.trim()&&a.value.price&&(a.value.id?(a.value.inventoryStatus=a.value.inventoryStatus.value?a.value.inventoryStatus.value:a.value.inventoryStatus,F.value[O(a.value.id)]=a.value,k.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(a.value.id=M(),a.value.code=M(),a.value.image="product-placeholder.svg",a.value.inventoryStatus=a.value.inventoryStatus?a.value.inventoryStatus.value:"INSTOCK",F.value.push(a.value),k.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),I.value=!1,a.value={})},O=d=>{let t=-1;for(let b=0;b<h.value.length;b++)if(h.value[b].id===d){t=b;break}return t},M=()=>{let d="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let b=0;b<5;b++)d+=t.charAt(Math.floor(Math.random()*t.length));return d},X=()=>{L.value.exportCSV()},Z=()=>{q.value=!0},ee=()=>{T.value={global:{value:null,matchMode:re.CONTAINS}}};return(d,t)=>{const b=p("Toast"),m=p("Button"),le=p("Toolbar"),S=p("InputText"),g=p("Column"),te=p("DataTable"),A=p("Textarea"),N=p("Dialog"),ae=p("Dropdown"),P=p("RadioButton"),R=p("InputNumber");return r(),c("div",_e,[l("div",fe,[l("div",he,[o(b),o(le,{class:"mb-4"},{start:u(()=>[l("div",be,[o(m,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:H}),o(m,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:Z,disabled:!C.value||!C.value.length},null,8,["disabled"])])]),end:u(()=>[ye,o(m,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:t[0]||(t[0]=e=>X(e))})]),_:1}),o(te,{ref_key:"dt",ref:L,value:h.value,selection:C.value,"onUpdate:selection":t[2]||(t[2]=e=>C.value=e),dataKey:"id",paginator:!0,rows:10,filters:T.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:u(()=>[l("div",ge,[Ve,l("span",Se,[ke,o(S,{modelValue:T.value.global.value,"onUpdate:modelValue":t[1]||(t[1]=e=>T.value.global.value=e),placeholder:"Search..."},null,8,["modelValue"])])])]),default:u(()=>[o(g,{selectionMode:"multiple",headerStyle:"width: 3rem"}),o(g,{field:"id",header:"id",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:u(e=>[we,V(" "+f(e.data.id),1)]),_:1}),o(g,{field:"nom",header:"nom",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:u(e=>[Ce,V(" "+f(e.data.nom),1)]),_:1}),o(g,{field:"prenom",header:"prenom",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:u(e=>[xe,V(" "+f(e.data.prenom),1)]),_:1}),o(g,{field:"specialite",header:"specialite",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:u(e=>[Ue,V(" "+f(e.data.specialite),1)]),_:1}),o(g,{field:"telephone",header:"telephone",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:u(e=>[De,V(" "+f(e.data.telephone),1)]),_:1}),o(g,{field:"email",header:"email",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:u(e=>[qe,V(" "+f(e.data.email),1)]),_:1}),o(g,{headerStyle:"min-width:10rem;"},{body:u(e=>[o(m,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:oe=>E(e.data)},null,8,["onClick"]),o(m,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:oe=>z(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","filters"]),o(N,{visible:w.value,"onUpdate:visible":t[9]||(t[9]=e=>w.value=e),style:{width:"450px"},header:"formateur details",modal:!0,class:"p-fluid"},{footer:u(()=>[o(m,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:B}),o(m,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:j})]),default:u(()=>[s.value.image?(r(),c("img",{key:0,src:s.value.image,alt:s.value.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,Te)):_("",!0),l("div",Ne,[Pe,o(S,{id:"nom",modelValue:s.value.nom,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value.nom=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":v.value&&!s.value.nom})},null,8,["modelValue","class"]),v.value&&!s.value.name?(r(),c("small",Fe,"Name is required.")):_("",!0)]),l("div",Ie,[Me,o(S,{id:"prenom",modelValue:s.value.prenom,"onUpdate:modelValue":t[4]||(t[4]=e=>s.value.prenom=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":v.value&&!s.value.prenom})},null,8,["modelValue","class"]),v.value&&!s.value.name?(r(),c("small",Le,"Name is required.")):_("",!0)]),l("div",Be,[Oe,o(S,{id:"nom",modelValue:s.value.email,"onUpdate:modelValue":t[5]||(t[5]=e=>s.value.email=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":v.value&&!s.value.email})},null,8,["modelValue","class"]),v.value&&!s.value.email?(r(),c("small",Ae,"email is required.")):_("",!0)]),l("div",Re,[Ke,o(S,{id:"prenom",modelValue:s.value.telephone,"onUpdate:modelValue":t[6]||(t[6]=e=>s.value.telephone=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":v.value&&!s.value.telephone})},null,8,["modelValue","class"]),x.value&&!s.value.telephone?(r(),c("small",je,"telephone is required.")):_("",!0)]),l("div",Ee,[ze,o(S,{id:"prenom",modelValue:s.value.specialite,"onUpdate:modelValue":t[7]||(t[7]=e=>s.value.specialite=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":v.value&&!s.value.specialite})},null,8,["modelValue","class"]),v.value&&!s.value.specialite?(r(),c("small",$e,"telephone is required.")):_("",!0)]),l("div",Ye,[Qe,o(A,{id:"description",modelValue:s.value.description,"onUpdate:modelValue":t[8]||(t[8]=e=>s.value.description=e),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),We,Ge]),_:1},8,["visible"]),o(N,{visible:I.value,"onUpdate:visible":t[19]||(t[19]=e=>I.value=e),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:u(()=>[o(m,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:B}),o(m,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:J})]),default:u(()=>[a.value.image?(r(),c("img",{key:0,src:ce(K)+"demo/images/product/"+a.value.image,alt:a.value.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,He)):_("",!0),l("div",Je,[Xe,o(S,{id:"name",modelValue:a.value.name,"onUpdate:modelValue":t[10]||(t[10]=e=>a.value.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":x.value&&!a.value.name})},null,8,["modelValue","class"]),x.value&&!a.value.name?(r(),c("small",Ze,"Name is required.")):_("",!0)]),l("div",el,[ll,o(A,{id:"description",modelValue:a.value.description,"onUpdate:modelValue":t[11]||(t[11]=e=>a.value.description=e),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),l("div",tl,[al,o(ae,{id:"inventoryStatus",modelValue:a.value.inventoryStatus,"onUpdate:modelValue":t[12]||(t[12]=e=>a.value.inventoryStatus=e),options:W.value,optionLabel:"label",placeholder:"Select a Status"},{value:u(e=>[e.value&&e.value.value?(r(),c("div",ol,[l("span",{class:y("product-badge status-"+e.value.value)},f(e.value.label),3)])):e.value&&!e.value.value?(r(),c("div",sl,[l("span",{class:y("product-badge status-"+e.value.toLowerCase())},f(e.value),3)])):(r(),c("span",il,f(e.placeholder),1))]),_:1},8,["modelValue","options"])]),l("div",ul,[nl,l("div",dl,[l("div",rl,[o(P,{id:"category1",name:"category",value:"Accessories",modelValue:a.value.category,"onUpdate:modelValue":t[13]||(t[13]=e=>a.value.category=e)},null,8,["modelValue"]),cl]),l("div",ml,[o(P,{id:"category2",name:"category",value:"Clothing",modelValue:a.value.category,"onUpdate:modelValue":t[14]||(t[14]=e=>a.value.category=e)},null,8,["modelValue"]),vl]),l("div",pl,[o(P,{id:"category3",name:"category",value:"Electronics",modelValue:a.value.category,"onUpdate:modelValue":t[15]||(t[15]=e=>a.value.category=e)},null,8,["modelValue"]),_l]),l("div",fl,[o(P,{id:"category4",name:"category",value:"Fitness",modelValue:a.value.category,"onUpdate:modelValue":t[16]||(t[16]=e=>a.value.category=e)},null,8,["modelValue"]),hl])])]),l("div",bl,[l("div",yl,[gl,o(R,{id:"price",modelValue:a.value.price,"onUpdate:modelValue":t[17]||(t[17]=e=>a.value.price=e),mode:"currency",currency:"USD",locale:"en-US",class:y({"p-invalid":x.value&&!a.value.price}),required:!0},null,8,["modelValue","class"]),x.value&&!a.value.price?(r(),c("small",Vl,"Price is required.")):_("",!0)]),l("div",Sl,[kl,o(R,{id:"quantity",modelValue:a.value.quantity,"onUpdate:modelValue":t[18]||(t[18]=e=>a.value.quantity=e),integeronly:""},null,8,["modelValue"])])])]),_:1},8,["visible"]),o(N,{visible:U.value,"onUpdate:visible":t[21]||(t[21]=e=>U.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:u(()=>[o(m,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[20]||(t[20]=e=>U.value=!1)}),o(m,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:$})]),default:u(()=>[l("div",wl,[Cl,s.value?(r(),c("span",xl,[V("Are you sure you want to delete "),l("b",null,f(s.value.nom),1),V("?")])):_("",!0)])]),_:1},8,["visible"]),o(N,{visible:q.value,"onUpdate:visible":t[23]||(t[23]=e=>q.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:u(()=>[o(m,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[22]||(t[22]=e=>Q.value=!1)}),o(m,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:Y})]),default:u(()=>[l("div",Ul,[Dl,a.value?(r(),c("span",ql,"Are you sure you want to delete the selected formateurs?")):_("",!0)])]),_:1},8,["visible"])])])])}}},Fl=se(Tl,[["__scopeId","data-v-6a9f84b5"]]);export{Fl as default};
