<script lang="ts" setup>
import FeedbackRating from "assets/animation/FeedbackRating.json"
import ProblemSolving from "assets/animation/ProblemSolving.json"
import Secrets from "assets/animation/Secrets.json"
import Bipolar from "assets/animation/BipolarDisorder.json"
import HeroBlock from "~/components/bloks/HeroBlock.vue";
import ContentBlock from "~/components/bloks/ContentBlock.vue";
import ButtonComponent from "~/components/ui/ButtonComponent.vue";
import type {HomePageQueryResult} from "~/types/interfaces";

const query = gql`
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
`

const {data} = await useAsyncQuery<HomePageQueryResult>(query)


const content1 = computed(() => data.value?.page.data.attributes.blocks[2] ?? null);
const content2 = computed(() => data.value?.page.data.attributes.blocks[4] ?? null);

const testimonial = computed(() => data.value?.page.data.attributes.blocks[3] ?? null);

useSeoMeta({
  title: data.value?.page.data.attributes.seo.metaTitle,
  ogTitle: data.value?.page.data.attributes.seo.metaTitle,
  description: data.value?.page.data.attributes.seo.metaDescription,
  ogImage: data.value?.page.data.attributes.seo.metaImage
})

</script>

<template>



 <HeroBlock color="blue" :data="data"/>

  <ContentBlock :data="data"/>

  <section class="bg-blue-950 bg-[url('/image/lines.svg')]  py-12 lg:py-40 px-4">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row">
        <div class="max-w-2xl mx-auto text-white flex flex-col justify-center">
          <h2 v-html="content1.title" v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
              class="text-4xl lg:text-6xl font-bold text-center lg:text-left">
          </h2>

          <div class="mt-6 mb-12 flex gap-3 flex-col lg:flex-row">
            <ButtonComponent class="primary">
              <a href="https://optimatagsag.hu/register">Regisztrálok</a>
              <i class="pi pi-arrow-right ml-1.5"></i>
            </ButtonComponent>


          </div>
          <p class="text-lg mb-3 text-center lg:text-left">{{content1.text}}</p>

        </div>

        <div class="w-full lg:w-1/2 mx-auto text-white lg:p-6">

          <div class="rounded-xl overflow-hidden w-full">
            <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full " :src="content1.image.data.attributes.url" :alt="content1.image.data.attributes.alternativeText"/>
          </div>

        </div>

      </div>

      <div class="flex flex-col flex-wrap lg:flex-row text-white mt-6 ">
       <ListComponent :title="content1.List[0].title" :text="content1.List[0].text" >
         <client-only>
           <div class="p-1">
             <Vue3Lottie
                 :animation-data="ProblemSolving"
             />
           </div>

         </client-only>
       </ListComponent>
       <ListComponent :title="content1.List[1].title" :text="content1.List[1].text" >
         <client-only>
           <div class="p-1">
             <Vue3Lottie
                 :animation-data="Bipolar"
             />
           </div>

         </client-only>
       </ListComponent>
       <ListComponent :title="content1.List[2].title" :text="content1.List[2].text" >
         <client-only>
           <div class="p-1 flex ">
             <Vue3Lottie
                 :animation-data="Secrets"
             />
           </div>

         </client-only>
       </ListComponent>
       <ListComponent :title="content1.List[3].title" :text="content1.List[3].text" >
         <client-only>
           <div class="p-1">
             <Vue3Lottie
                 :animation-data="FeedbackRating"
             />
           </div>

         </client-only>
       </ListComponent>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-12 lg:py-40 px-4">
    <div class="container mx-auto ">
      <div class="max-w-2xl mx-auto">
        <h2 v-html="testimonial.title" v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
            class="text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] text-center mb-12"></h2>
      </div>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full">
          <TestimonialComkponent :data="testimonial" class="w-full"/>
        </div>
      </div>

    </div>
  </section>


  <section class="bg-white py-12 lg:py-40 px-4">
    <div class="container mx-auto flex flex-col lg:flex-row lg:gap-6">
      <div class="lg:w-3/5 2xl:w-1/2">
        <h2 v-html="content2.title" v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
            class="text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left">
        </h2>

        <div v-html="content2.text" class="lg:text-xl text-neutral-600 leading-relaxed  lg:text-left mb-3">

        </div>

        <div class="mt-6 mb-12 flex gap-3 flex-col lg:flex-row">

          <ButtonComponent class="primary">
            <a href="https://optimatagsag.hu/register">Regisztrálok
              <i class="pi pi-arrow-right ml-1.5"></i>
            </a>
          </ButtonComponent>

        </div>
      </div>

      <div class="lg:w-2/5 2xl:w-1/2 flex justify-end items-center ">
        <div class="w-full rounded-2xl overflow-hidden">
          <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full" :src="content2.image.data.attributes.url" :alt="content2.image.data.attributes.alternativeText"/>
        </div>

      </div>
    </div>
  </section>

  <footer class="bg-blue-950 text-white">
    <div class="container mx-auto p-1.5 flex flex-col items-center lg:flex-row lg:justify-between">
      <span class="text-xs lg:text-base">© 2024 – OPTIMA by Dudits – Minden jog fenntartva!</span>
      <a class="underline text-xs lg:text-base" target="_blank" href="https://optimatagsag.hu/adatvedelmi-szabalyzat">Adatvédelmi szabályzat</a>
    </div>
  </footer>

</template>

<style scoped></style>
