import{g as T,u as k,B as C,_ as L}from"./DtiS7KpJ.js";import{_ as B,a as z,b as M,c as j,P as D,B as H,S,F as V,d as A}from"./Bp3imbpe.js";import{f as F,g as I,h as u,r as N,i as P,o as _,c as g,b as a,u as e,a as t,j as p,d as x,t as f,w as i,F as $,k as q}from"./DCFoQbYh.js";import"./Cl24BdUt.js";import"./8QeP0aVk.js";import"./Dd27gk8d.js";const R={class:"bg-green-950 bg-[url('/image/lines.svg')] py-12 lg:py-40 px-4"},Q={class:"container mx-auto"},E={class:"flex flex-col lg:flex-row"},O={class:"max-w-2xl mx-auto text-white flex flex-col justify-center"},G={class:"text-4xl lg:text-6xl font-bold text-center lg:text-left"},J={class:"mt-6 mb-12 flex gap-3 flex-col lg:flex-row"},K=t("a",{href:"https://optimatagsag.hu/register"},"Regisztrálok",-1),U=t("i",{class:"pi pi-arrow-right ml-1.5"},null,-1),W={class:"text-lg mt-3 text-center lg:text-left"},X={class:"lg:w-1/2 mx-auto text-white p-6"},Y={class:"rounded-xl overflow-hidden"},Z={class:"flex flex-col flex-wrap lg:flex-row text-white mt-6"},tt={class:"p-1"},et={class:"p-1"},at={class:"p-1 flex"},st={class:"p-1"},lt={class:"bg-slate-50 py-12 lg:py-40 px-4"},it={class:"container mx-auto"},nt={class:"max-w-2xl mx-auto"},ot={class:"text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] text-center mb-12"},ct={class:"flex flex-col lg:flex-row"},rt={class:"w-full"},dt={class:"bg-white py-12 lg:py-40 px-4"},xt={class:"container mx-auto flex flex-col lg:flex-row gap-6"},mt={class:"lg:w-3/5 2xl:w-1/2"},ut=["innerHTML"],_t=["innerHTML"],gt=t("div",{class:"mt-6 mb-12 flex gap-3 flex-col lg:flex-row"},[t("a",{class:"bg-green-400 ring ring-green-400 font-bold text-xl text-black justify-center px-4 py-3 rounded-lg inline-flex items-center hover:bg-green-500 shadow-xl",href:"https://optimatagsag.hu/register"},[x("Regisztrálok "),t("i",{class:"pi pi-arrow-right ml-1.5"})])],-1),pt={class:"lg:w-2/5 2xl:w-1/2 flex justify-end items-center"},ft={class:"rounded-2xl overflow-hidden w-full"},ht=t("footer",{class:"bg-green-950 text-white"},[t("div",{class:"container mx-auto p-1.5 flex flex-col items-center lg:flex-row lg:justify-between"},[t("span",{class:"text-xs lg:text-base"},"© 2024 – OPTIMA by Dudits – Minden jog fenntartva!"),t("a",{class:"underline text-xs lg:text-base",target:"_blank",href:"https://optimatagsag.hu/adatvedelmi-szabalyzat"},"Adatvédelmi szabályzat")])],-1),zt=F({__name:"landing1",async setup(bt){let n,h;const w=T`
query homePageQuery{
  page(id:3){
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
          image{data{attributes{alternativeText url}}}
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
`,{data:l}=([n,h]=I(()=>q(w)),n=await n,h(),n),s=u(()=>l.value.page.data.attributes.blocks[2]??null),o=u(()=>l.value.page.data.attributes.blocks[4]??null),b=u(()=>l.value.page.data.attributes.blocks[3]??null);return k({title:l.value.page.data.attributes.seo.metaTitle,ogTitle:l.value.page.data.attributes.seo.metaTitle,description:l.value.page.data.attributes.seo.metaDescription,ogImage:l.value.page.data.attributes.seo.metaImage}),(vt,wt)=>{const v=L,c=N("Vue3Lottie"),r=A,d=M,y=j,m=P("animateonscroll");return _(),g($,null,[a(B,{color:"green",data:e(l)},null,8,["data"]),a(z,{data:e(l)},null,8,["data"]),t("section",R,[t("div",Q,[t("div",E,[t("div",O,[p((_(),g("h2",G,[x(f(e(s).title),1)])),[[m,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]]),x(),t("div",J,[a(C,{class:"primary"},{default:i(()=>[K,U]),_:1})]),t("p",W,f(e(s).text),1)]),t("div",X,[t("div",Y,[a(v,{sizes:"xs:480px sm:768px",format:"webp",class:"w-full",src:e(s).image.data.attributes.url,alt:e(s).image.data.attributes.alternativeText},null,8,["src","alt"])])])]),t("div",Z,[a(d,{title:e(s).List[0].title,text:e(s).List[0].text},{default:i(()=>[a(r,null,{default:i(()=>[t("div",tt,[a(c,{"animation-data":e(D)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"]),a(d,{title:e(s).List[1].title,text:e(s).List[1].text},{default:i(()=>[a(r,null,{default:i(()=>[t("div",et,[a(c,{"animation-data":e(H)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"]),a(d,{title:e(s).List[2].title,text:e(s).List[2].text},{default:i(()=>[a(r,null,{default:i(()=>[t("div",at,[a(c,{"animation-data":e(S)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"]),a(d,{title:e(s).List[3].title,text:e(s).List[3].text},{default:i(()=>[a(r,null,{default:i(()=>[t("div",st,[a(c,{"animation-data":e(V)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"])])])]),t("section",lt,[t("div",it,[t("div",nt,[p((_(),g("h2",ot,[x(f(e(b).title),1)])),[[m,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]])]),t("div",ct,[t("div",rt,[a(y,{data:e(b),class:"w-full"},null,8,["data"])])])])]),t("section",dt,[t("div",xt,[t("div",mt,[p(t("h2",{innerHTML:e(o).title,class:"text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left"},null,8,ut),[[m,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]]),t("div",{innerHTML:e(o).text,class:"lg:text-xl text-neutral-600 leading-relaxed lg:text-left mb-3"},null,8,_t),gt]),t("div",pt,[t("div",ft,[a(v,{sizes:"xs:480px sm:768px",format:"webp",class:"w-full",src:e(o).image.data.attributes.url,alt:e(o).image.data.attributes.alternativeText},null,8,["src","alt"])])])])]),ht],64)}}});export{zt as default};
