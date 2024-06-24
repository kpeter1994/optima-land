import{g as C,u as k,B as y,_ as B}from"./DtiS7KpJ.js";import{_ as M,a as H,b as z,c as D,P as j,B as S,S as V,F as A,d as F}from"./Bp3imbpe.js";import{f as I,g as N,h as x,r as P,i as $,o as q,c as R,b as a,u as e,a as t,j as _,w as l,t as Q,F as E,k as O,d as G}from"./DCFoQbYh.js";import"./Cl24BdUt.js";import"./8QeP0aVk.js";import"./Dd27gk8d.js";const J={class:"bg-blue-950 bg-[url('/image/lines.svg')] py-12 lg:py-40 px-4"},K={class:"container mx-auto"},U={class:"flex flex-col lg:flex-row"},W={class:"max-w-2xl mx-auto text-white flex flex-col justify-center"},X=["innerHTML"],Y={class:"mt-6 mb-12 flex gap-3 flex-col lg:flex-row"},Z=t("a",{href:"https://optimatagsag.hu/register"},"Regisztrálok",-1),tt=t("i",{class:"pi pi-arrow-right ml-1.5"},null,-1),et={class:"text-lg mb-3 text-center lg:text-left"},at={class:"w-full lg:w-1/2 mx-auto text-white lg:p-6"},st={class:"rounded-xl overflow-hidden w-full"},lt={class:"flex flex-col flex-wrap lg:flex-row text-white mt-6"},it={class:"p-1"},nt={class:"p-1"},ot={class:"p-1 flex"},ct={class:"p-1"},rt={class:"bg-slate-50 py-12 lg:py-40 px-4"},dt={class:"container mx-auto"},ut={class:"max-w-2xl mx-auto"},mt=["innerHTML"],xt={class:"flex flex-col lg:flex-row"},_t={class:"w-full"},gt={class:"bg-white py-12 lg:py-40 px-4"},pt={class:"container mx-auto flex flex-col lg:flex-row lg:gap-6"},ft={class:"lg:w-3/5 2xl:w-1/2"},ht=["innerHTML"],bt=["innerHTML"],vt={class:"mt-6 mb-12 flex gap-3 flex-col lg:flex-row"},wt=t("a",{href:"https://optimatagsag.hu/register"},[G("Regisztrálok "),t("i",{class:"pi pi-arrow-right ml-1.5"})],-1),yt={class:"lg:w-2/5 2xl:w-1/2 flex justify-end items-center"},Tt={class:"w-full rounded-2xl overflow-hidden"},Lt=t("footer",{class:"bg-blue-950 text-white"},[t("div",{class:"container mx-auto p-1.5 flex flex-col items-center lg:flex-row lg:justify-between"},[t("span",{class:"text-xs lg:text-base"},"© 2024 – OPTIMA by Dudits – Minden jog fenntartva!"),t("a",{class:"underline text-xs lg:text-base",target:"_blank",href:"https://optimatagsag.hu/adatvedelmi-szabalyzat"},"Adatvédelmi szabályzat")])],-1),St=I({__name:"index",async setup(Ct){var f,h,b,v;let o,g;const T=C`
query homePageQuery{
  page(id:1){
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
`,{data:i}=([o,g]=N(()=>O(T)),o=await o,g(),o),s=x(()=>{var n;return((n=i.value)==null?void 0:n.page.data.attributes.blocks[2])??null}),c=x(()=>{var n;return((n=i.value)==null?void 0:n.page.data.attributes.blocks[4])??null}),p=x(()=>{var n;return((n=i.value)==null?void 0:n.page.data.attributes.blocks[3])??null});return k({title:(f=i.value)==null?void 0:f.page.data.attributes.seo.metaTitle,ogTitle:(h=i.value)==null?void 0:h.page.data.attributes.seo.metaTitle,description:(b=i.value)==null?void 0:b.page.data.attributes.seo.metaDescription,ogImage:(v=i.value)==null?void 0:v.page.data.attributes.seo.metaImage}),(n,kt)=>{const w=B,r=P("Vue3Lottie"),d=F,u=z,L=D,m=$("animateonscroll");return q(),R(E,null,[a(M,{color:"blue",data:e(i)},null,8,["data"]),a(H,{data:e(i)},null,8,["data"]),t("section",J,[t("div",K,[t("div",U,[t("div",W,[_(t("h2",{innerHTML:e(s).title,class:"text-4xl lg:text-6xl font-bold text-center lg:text-left"},null,8,X),[[m,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]]),t("div",Y,[a(y,{class:"primary"},{default:l(()=>[Z,tt]),_:1})]),t("p",et,Q(e(s).text),1)]),t("div",at,[t("div",st,[a(w,{sizes:"xs:480px sm:768px",format:"webp",class:"w-full",src:e(s).image.data.attributes.url,alt:e(s).image.data.attributes.alternativeText},null,8,["src","alt"])])])]),t("div",lt,[a(u,{title:e(s).List[0].title,text:e(s).List[0].text},{default:l(()=>[a(d,null,{default:l(()=>[t("div",it,[a(r,{"animation-data":e(j)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"]),a(u,{title:e(s).List[1].title,text:e(s).List[1].text},{default:l(()=>[a(d,null,{default:l(()=>[t("div",nt,[a(r,{"animation-data":e(S)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"]),a(u,{title:e(s).List[2].title,text:e(s).List[2].text},{default:l(()=>[a(d,null,{default:l(()=>[t("div",ot,[a(r,{"animation-data":e(V)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"]),a(u,{title:e(s).List[3].title,text:e(s).List[3].text},{default:l(()=>[a(d,null,{default:l(()=>[t("div",ct,[a(r,{"animation-data":e(A)},null,8,["animation-data"])])]),_:1})]),_:1},8,["title","text"])])])]),t("section",rt,[t("div",dt,[t("div",ut,[_(t("h2",{innerHTML:e(p).title,class:"text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] text-center mb-12"},null,8,mt),[[m,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]])]),t("div",xt,[t("div",_t,[a(L,{data:e(p),class:"w-full"},null,8,["data"])])])])]),t("section",gt,[t("div",pt,[t("div",ft,[_(t("h2",{innerHTML:e(c).title,class:"text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left"},null,8,ht),[[m,{enterClass:"animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]"}]]),t("div",{innerHTML:e(c).text,class:"lg:text-xl text-neutral-600 leading-relaxed lg:text-left mb-3"},null,8,bt),t("div",vt,[a(y,{class:"primary"},{default:l(()=>[wt]),_:1})])]),t("div",yt,[t("div",Tt,[a(w,{sizes:"xs:480px sm:768px",format:"webp",class:"w-full",src:e(c).image.data.attributes.url,alt:e(c).image.data.attributes.alternativeText},null,8,["src","alt"])])])])]),Lt],64)}}});export{St as default};
