import{B as v,c as I,b as z,_ as $,a as j,g as M,u as O}from"./DtiS7KpJ.js";import{_ as f,o as c,c as r,q as A,p as w,e as y,a as t,f as p,A as m,l as H,h,u as e,t as _,v as T,b as i,F as k,z as C,w as g,j as B,C as N,T as V,i as D,d as q,g as F,k as P}from"./DCFoQbYh.js";import{_ as Q}from"./Dd27gk8d.js";import"./Cl24BdUt.js";const E={},L=a=>(w("data-v-b23c5d9d"),a=a(),y(),a),R={class:"w-full min-h-screen relative overflow-hidden"},G=L(()=>t("div",{class:"bubble"},null,-1)),J=L(()=>t("div",{class:"bubble2"},null,-1));function K(a,l){return c(),r("div",R,[G,J,A(a.$slots,"default",{},void 0,!0)])}const U=f(E,[["render",K],["__scopeId","data-v-b23c5d9d"]]),W={class:"max-w-4xl mx-auto"},X=["innerHTML"],Y=["innerHTML"],S=p({__name:"TitleSection",props:{title:String,text:String,center:Boolean},setup(a){const l=a;return(o,s)=>(c(),r("div",W,[t("h2",{innerHTML:l.title,class:m(["text-4xl lg:text-5xl font-bold mt-3 mb-3 text-center",a.center?"":"lg:text-left"])},null,10,X),t("p",{innerHTML:l.text,class:m(["text-center",a.center?"":"lg:text-left"])},null,10,Y)]))}}),Z={class:"px-3 text-white pt-12 pb-6 lg:pt-40 lg:pb-20 relative"},tt={class:"container mx-auto flex flex-col lg:flex-row"},et={class:"lg:w-1/2 lg:p-3"},st={key:0,class:"text-sm font-semibold text-green-500"},at={class:"mt-3 text-opacity-75"},ot={class:"p-1.5 transition-all duration-300"},lt=["onClick"],nt={class:"font-semibold relative z-10"},it={class:"lg:w-1/2 lg:p-3"},ct={class:"aspect-video rounded-3xl border border-opacity-50 overflow-hidden shadow-2xl"},rt=["src"],dt=p({__name:"SelectVideoBlock",props:{data:Object},setup(a){const l=H(3),o=a,s=h(()=>{var n;return((n=o.data)==null?void 0:n.page.data.attributes.blocks[1])??null}),d=h(()=>{if(s.value&&Array.isArray(s.value.List)){const n=s.value.List.find(u=>u.id===l.value);return n||s.value.List[0]}return{}});return(n,u)=>{const b=S;return c(),r("section",Z,[t("div",tt,[t("div",et,[e(s).subTitle?(c(),r("span",st,_(e(s).subTitle),1)):T("",!0),i(b,{text:e(s).text,title:e(s).title},null,8,["text","title"]),t("div",at,[(c(!0),r(k,null,C(e(s).List,x=>(c(),r("div",ot,[i(V,{name:"fade-down",mode:"out-in"},{default:g(()=>[t("div",{onClick:Xt=>l.value=x.id,class:m(["py-1 px-3 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer border-2 h-full",x.id==e(l)?" card ":"border-transparent"])},[t("h3",nt,_(x.title),1),B(t("p",{class:"relative z-10 text-sm text-slate-100"},_(x.text),513),[[N,x.id==e(l)]])],10,lt)]),_:2},1024)]))),256))])]),t("div",it,[t("div",ct,[t("iframe",{src:`${e(d).video}?h=d34db182c8&title=0&byline=0&portrait=0&badge=0`,width:"100%",height:"100%",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""},null,8,rt)])])])])}}}),_t=f(dt,[["__scopeId","data-v-9ec84ef9"]]),ut={class:"px-3 relative text-white"},pt={class:"pt-3"},xt=t("img",{src:I,alt:"Optima Online"},null,-1),mt={class:"max-w-4xl mx-auto pt-20"},ht={class:"text-4xl lg:text-7xl font-extrabold text-center"},gt={class:"mt-3 text-center"},ft={class:"mt-3 flex flex-col lg:flex-row justify-center items-center gap-3"},bt={href:"https://optimatagsag.hu/register"},vt=t("i",{class:"pi pi-arrow-right ml-1.5"},null,-1),$t={class:"pt-20 flex justify-center max-w-6xl mx-auto"},wt=p({__name:"Hero2Block",props:{data:Object},setup(a){const l=a,o=h(()=>{var s;return((s=l.data)==null?void 0:s.page.data.attributes.blocks[0])??null});return(s,d)=>{const n=Q,u=z,b=$;return c(),r("section",ut,[t("header",pt,[i(n,{to:"/",class:"text-white"},{default:g(()=>[xt]),_:1})]),t("div",mt,[t("h1",ht,_(e(o).title),1),t("p",gt,_(e(o).text),1),t("div",ft,[i(v,{class:m(e(o).buttons[0].theme)},{default:g(()=>[t("a",bt,_(e(o).buttons[0].label),1),vt]),_:1},8,["class"]),i(u,{class:m(e(o).buttons[1].theme),src:e(o).video},null,8,["class","src"])])]),t("div",$t,[i(b,{class:"w-full",src:e(o).image.data.attributes.url,alt:e(o).image.data.attributes.url},null,8,["src","alt"])])])}}}),yt=a=>(w("data-v-92d63faf"),a=a(),y(),a),Tt={class:"px-3 relative text-white py-6 lg:py-20"},kt={class:"max-w-7xl mx-auto"},Ct={class:"grid lg:grid-cols-3 gap-3 mt-20"},Bt={class:"card"},Lt=yt(()=>t("img",{class:"absolute opacity-5",src:j,alt:""},null,-1)),St={class:"pb-6 relative z-10 border-b border-white text-lg border-opacity-15"},It={class:"flex justify-between pt-3 relative z-10"},zt=["src","alt"],jt=p({__name:"TestimonialBlock",props:{data:Object},setup(a){const l=a,o=h(()=>{var s;return((s=l.data)==null?void 0:s.page.data.attributes.blocks[2])??null});return(s,d)=>(c(),r("section",Tt,[t("div",kt,[i(S,{center:"",text:e(o).text,title:e(o).title},null,8,["text","title"]),t("div",Ct,[(c(!0),r(k,null,C(e(o).card,n=>(c(),r("div",Bt,[Lt,t("p",St,_(n.text),1),t("div",It,[t("span",null,_(n.title),1),n.image.data?(c(),r("img",{key:0,class:"w-14 h-14 rounded-full",src:n.image.data.attributes.url,alt:n.image.data.attributes.alternativeText},null,8,zt)):T("",!0)])]))),256))])])]))}}),Mt=f(jt,[["__scopeId","data-v-92d63faf"]]),Ot={},At={class:"bg-slate-900 text-white"},Ht=t("div",{class:"container mx-auto p-1.5 flex flex-col items-center lg:flex-row lg:justify-between"},[t("span",{class:"text-xs lg:text-base"},"© 2024 – OPTIMA by Dudits – Minden jog fenntartva!"),t("a",{class:"underline text-xs lg:text-base",target:"_blank",href:"https://optimatagsag.hu/adatvedelmi-szabalyzat"},"Adatvédelmi szabályzat")],-1),Nt=[Ht];function Vt(a,l){return c(),r("footer",At,Nt)}const Dt=f(Ot,[["render",Vt]]),qt={class:"text-white py-6 lg:py-20 px-4"},Ft={class:"container mx-auto flex flex-col lg:flex-row"},Pt={class:"lg:w-3/5 2xl:w-1/2"},Qt={class:"text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left"},Et=["innerHTML"],Rt={class:"mt-6 mb-12 flex gap-3 flex-col lg:flex-row"},Gt=t("a",{href:"https://optimatagsag.hu/register"},"Regisztrálok",-1),Jt=t("i",{class:"pi pi-arrow-right ml-1.5"},null,-1),Kt={class:"lg:w-2/5 2xl:w-1/2 flex justify-end items-center"},Ut=p({__name:"Content2Block",props:{data:Object},setup(a){const l=a,o=h(()=>{var s;return((s=l.data)==null?void 0:s.page.data.attributes.blocks[3])??null});return(s,d)=>{const n=$,u=D("animateonscroll");return c(),r("section",qt,[t("div",Ft,[t("div",Pt,[B((c(),r("h2",Qt,[q(_(e(o).title),1)])),[[u,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]]),t("div",{innerHTML:e(o).text,class:"lg:text-xl leading-relaxed lg:text-left"},null,8,Et),t("div",Rt,[i(v,{class:"primary"},{default:g(()=>[Gt,Jt]),_:1})])]),t("div",Kt,[i(n,{sizes:"xs:480px sm:768px",format:"webp",class:"w-full",src:"/image/laptop.png",alt:"Optima Online"})])])])}}}),Wt={class:"bg-slate-900 bg-[url('/image/lines.svg')]"},se=p({__name:"landing2",async setup(a){let l,o;const s=M`
query homePageQuery{
  page(id:2){
  data{
    id
    attributes{
      slug
      title
      seo{metaTitle metaDescription}
      blocks{
        __typename
        ... on ComponentBlocksHero{
          id
          title
          text
          image {
          \tdata{
            \tattributes{
              \turl
                alternativeText
            }
          }
        }
          video
          Card{title text image{data{attributes{url alternativeText}}} }
          buttons{href label theme}

        }
        ... on ComponentBlocksContentList\t{
          title
          subTitle
          text
          List{
            id
            title
            text
            video
          }
        }
        ... on ComponentBlocksTestimonial{title text card{title text image{data{attributes{url alternativeText}}}}}
        ... on ComponentBlocksContent {title text image{data{attributes{alternativeText url}}}}
      }
    }
  }
}
}
`,{data:d}=([l,o]=F(()=>P(s)),l=await l,o(),l);return console.log(d.value.page.data.attributes),O({title:d.value.page.data.attributes.seo.metaTitle,ogTitle:d.value.page.data.attributes.seo.metaTitle,description:d.value.page.data.attributes.seo.metaDescription,ogImage:d.value.page.data.attributes.seo.metaImage}),(n,u)=>(c(),r("main",Wt,[i(U,null,{default:g(()=>[i(wt,{data:e(d)},null,8,["data"]),i(_t,{data:e(d)},null,8,["data"]),i(Mt,{data:e(d)},null,8,["data"]),i(Ut,{data:e(d)},null,8,["data"]),i(Dt)]),_:1})]))}});export{se as default};
