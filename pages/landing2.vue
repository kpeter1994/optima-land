<script lang="ts" setup>

import BgcAnimation from "~/components/layout/BgcAnimation.vue";
import SelectVideoBlock from "~/components/bloks/SelectVideoBlock.vue";
import Hero2Block from "~/components/bloks/Hero2Block.vue";
import TestimonialBlock from "~/components/bloks/TestimonialBlock.vue";
import Footer from "~/components/layout/Footer.vue";
import ContentBlock from "~/components/bloks/ContentBlock.vue";
import Content2Block from "~/components/bloks/Content2Block.vue";

const query = gql`
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
`

const {data} = await useAsyncQuery(query)


console.log(data.value.page.data.attributes)

useSeoMeta({
  title: data.value.page.data.attributes.seo.metaTitle,
  ogTitle: data.value.page.data.attributes.seo.metaTitle,
  description: data.value.page.data.attributes.seo.metaDescription,
  ogImage: data.value.page.data.attributes.seo.metaImage
})


</script>

<template>

   <main class="bg-slate-900  bg-[url('/image/lines.svg')]">

     <BgcAnimation>


      <Hero2Block :data="data" />

       <SelectVideoBlock :data="data" />

       <TestimonialBlock :data="data" />

       <Content2Block :data="data" />

       <Footer />



     </BgcAnimation>

   </main>



</template>

<style scoped></style>
