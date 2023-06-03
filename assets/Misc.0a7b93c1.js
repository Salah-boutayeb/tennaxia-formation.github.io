import{u as B,r as z,e as P,A as S,a as t,v as A,o as k,c as q,b as s,d as e,x as m,w as p,m as r}from"./index.c68dd7c5.js";const T={class:"grid"},C={class:"col-12"},I={class:"card"},M=s("h5",null,"ProgressBar",-1),D={class:"grid"},E={class:"col"},V={class:"col"},j={class:"col-12 lg:col-6"},G={class:"card"},L=s("h4",null,"Badge",-1),N=s("h5",null,"Numbers",-1),U={class:"badges"},W=s("h5",null,"Positioned Badge",-1),F={class:"pi pi-bell mr-4 p-text-secondary",style:{"font-size":"2rem"}},J={class:"pi pi-calendar mr-4 p-text-secondary",style:{"font-size":"2rem"}},O={class:"pi pi-envelope p-text-secondary",style:{"font-size":"2rem"}},H=s("h5",null,"Inline Button Badge",-1),K=s("h5",null,"Sizes",-1),Q={class:"badges"},R={class:"card"},X=s("h4",null,"Avatar",-1),Y=s("h5",null,"Avatar Group",-1),Z=s("h5",null,"Label - Circle",-1),$=s("h5",null,"Icon - Badge",-1),ee={class:"card"},se=s("h4",null,"ScrollTop",-1),ae=s("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1),le={class:"col-12 lg:col-6"},ie={class:"card"},te=s("h4",null,"Tag",-1),oe=s("h5",null,"Tags",-1),ne=s("h5",null,"Pills",-1),re=s("h5",null,"Icons",-1),ce={class:"card"},ue=s("h4",null,"Chip",-1),de=s("h5",null,"Basic",-1),me={class:"flex align-items-center flex-column sm:flex-row"},ge=s("h5",null,"Icon",-1),_e={class:"flex align-items-center flex-column sm:flex-row"},he=s("h5",null,"Image",-1),ve={class:"flex align-items-center flex-column sm:flex-row"},pe={class:"card"},be=s("h4",null,"Skeleton",-1),fe={class:"border-round border-1 surface-border p-4"},ye={class:"flex mb-3"},xe={class:"flex justify-content-between mt-3"},Pe={__name:"Misc",setup(we){const{contextPath:o}=B(),g=z(0);let _=null;const b=()=>{_=setInterval(()=>{let u=g.value+Math.floor(Math.random()*10)+1;u>=100&&(u=100),g.value=u},2e3)},f=()=>{clearInterval(_),_=null};return P(()=>{b()}),S(()=>{f()}),(u,Be)=>{const h=t("ProgressBar"),n=t("Badge"),v=t("Button"),i=t("Avatar"),y=t("AvatarGroup"),x=t("ScrollTop"),w=t("ScrollPanel"),a=t("Tag"),l=t("Chip"),c=t("Skeleton"),d=A("badge");return k(),q("div",T,[s("div",C,[s("div",I,[M,s("div",D,[s("div",E,[e(h,{value:g.value},null,8,["value"])]),s("div",V,[e(h,{value:50,showValue:!1})])])])]),s("div",j,[s("div",G,[L,N,s("div",U,[e(n,{value:2,class:"mr-2"}),e(n,{value:8,severity:"success",class:"mr-2"}),e(n,{value:4,severity:"info",class:"mr-2"}),e(n,{value:12,severity:"warning",class:"mr-2"}),e(n,{value:3,severity:"danger"})]),W,m(s("i",F,null,512),[[d,2]]),m(s("i",J,null,512),[[d,"10+",void 0,{danger:!0}]]),m(s("i",O,null,512),[[d,void 0,void 0,{danger:!0}]]),H,e(v,{label:"Emails",badge:"8",class:"mr-2"}),e(v,{label:"Messages",icon:"pi pi-users",class:"p-button-warning",badge:"8",badgeClass:"p-badge-danger"}),K,s("div",Q,[e(n,{value:2,class:"mr-2"}),e(n,{value:4,size:"large",severity:"warning",class:"mr-2"}),e(n,{value:6,size:"xlarge",severity:"success"})])]),s("div",R,[X,Y,e(y,{class:"mb-3"},{default:p(()=>[e(i,{image:r(o)+"demo/images/avatar/amyelsner.png",size:"large",shape:"circle"},null,8,["image"]),e(i,{image:r(o)+"demo/images/avatar/asiyajavayant.png",size:"large",shape:"circle"},null,8,["image"]),e(i,{image:r(o)+"demo/images/avatar/onyamalimba.png",size:"large",shape:"circle"},null,8,["image"]),e(i,{image:r(o)+"demo/images/avatar/ionibowcher.png",size:"large",shape:"circle"},null,8,["image"]),e(i,{image:r(o)+"demo/images/avatar/xuxuefeng.png",size:"large",shape:"circle"},null,8,["image"]),e(i,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),Z,e(i,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),e(i,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),e(i,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),$,m(e(i,{icon:"pi pi-user",class:"mr-2",size:"xlarge"},null,512),[[d,4,void 0,{success:!0}]])]),s("div",ee,[se,e(w,{style:{width:"250px",height:"200px"}},{default:p(()=>[ae,e(x,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),s("div",le,[s("div",ie,[te,oe,e(a,{class:"mr-2",value:"Primary"}),e(a,{class:"mr-2",severity:"success",value:"Success"}),e(a,{class:"mr-2",severity:"info",value:"Info"}),e(a,{class:"mr-2",severity:"warning",value:"Warning"}),e(a,{severity:"danger",value:"Danger"}),ne,e(a,{class:"mr-2",value:"Primary",rounded:!0}),e(a,{class:"mr-2",severity:"success",value:"Success",rounded:!0}),e(a,{class:"mr-2",severity:"info",value:"Info",rounded:!0}),e(a,{class:"mr-2",severity:"warning",value:"Warning",rounded:!0}),e(a,{severity:"danger",value:"Danger",rounded:!0}),re,e(a,{class:"mr-2",icon:"pi pi-user",value:"Primary"}),e(a,{class:"mr-2",icon:"pi pi-check",severity:"success",value:"Success"}),e(a,{class:"mr-2",icon:"pi pi-info-circle",severity:"info",value:"Info"}),e(a,{class:"mr-2",con:"pi pi-exclamation-triangle",severity:"warning",value:"Warning"}),e(a,{icon:"pi pi-times",severity:"danger",value:"Danger"})]),s("div",ce,[ue,de,s("div",me,[e(l,{label:"Action",class:"mr-2 mb-2"}),e(l,{label:"Comedy",class:"mr-2 mb-2"}),e(l,{label:"Mystery",class:"mr-2 mb-2"}),e(l,{label:"Thriller",removable:!0,class:"mb-2"})]),ge,s("div",_e,[e(l,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),e(l,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),e(l,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),e(l,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),he,s("div",ve,[e(l,{label:"Amy Elsner",image:r(o)+"demo/images/avatar/amyelsner.png",class:"mr-2 mb-2"},null,8,["image"]),e(l,{label:"Asiya Javayant",image:r(o)+"demo/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"},null,8,["image"]),e(l,{label:"Onyama Limba",image:r(o)+"demo/images/avatar/onyamalimba.png",class:"mr-2 mb-2"},null,8,["image"])])]),s("div",pe,[be,s("div",fe,[s("div",ye,[e(c,{shape:"circle",size:"4rem",class:"mr-2"}),s("div",null,[e(c,{width:"10rem",class:"mb-2"}),e(c,{width:"5rem",class:"mb-2"}),e(c,{height:".5rem"})])]),e(c,{width:"100%",height:"150px"}),s("div",xe,[e(c,{width:"4rem",height:"2rem"}),e(c,{width:"4rem",height:"2rem"})])])])])])}}};export{Pe as default};
