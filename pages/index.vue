<script lang="ts" setup>
import FeedbackRating from "assets/animation/FeedbackRating.json"
import ProblemSolving from "assets/animation/ProblemSolving.json"
import Secrets from "assets/animation/Secrets.json"
import Bipolar from "assets/animation/BipolarDisorder.json"
import HeroBlock from "~/components/bloks/HeroBlock.vue";
import ContentBlock from "~/components/bloks/ContentBlock.vue";

const query = gql`
query homePageQuery{
  page(id:1){
  data{
    id
    attributes{
      slug
      title
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
      }
    }
  }
}
}
`

const {data} = await useAsyncQuery(query)



</script>

<template>



 <HeroBlock :data="data"/>

  <ContentBlock :data="data"/>

  <section class="bg-blue-950 bg-[url('/image/lines.svg')]  py-12 lg:py-40 px-4">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row">
        <div class="max-w-2xl mx-auto text-white flex flex-col justify-center">
          <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
              class="text-4xl lg:text-6xl font-bold text-center lg:text-left">
            4 dolog, amire képes leszel az Optima Online segítségével
          </h2>
          <p class="text-lg mt-3 text-center lg:text-left">Az Optima Online egy praktikus segítőfelület, amely segít megérteni és kezelni a függőségedet. A használata a következő négy fő előnnyel jár:</p>
          <div class="mt-6 mb-12 flex gap-3 flex-col lg:flex-row">
            <a class="
          bg-green-400
          ring
          ring-green-400
          font-bold
          text-xl
          text-black
          justify-center
          px-4
          py-3
          rounded-lg
          inline-flex
          items-center
          hover:bg-green-500
          shadow"
               href="https://optimatagsag.hu/register">Regisztrálok
              <i class="pi pi-arrow-right ml-1.5"></i>
            </a>

          </div>
        </div>
        <div class="lg:w-1/2 mx-auto text-white p-6">
          <div class="rounded-xl overflow-hidden">
            <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full " src="/image/portrait-mature-woman-smiling.jpg" alt="Optima segítség"/>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-wrap lg:flex-row text-white mt-6 ">
       <ListComponent title="Segít változásra ösztönözni önmagad"
                      text="Aki már küzd a függősége ellen, tudja, hogy bizonyos szokásain változtatnia kellene. A szokásokon változtatni azonban nem könnyű. Az Optima Online viszont többféleképpen is segít neked rálépni a változás ösvényére." >
         <client-only>
           <div class="p-1">
             <Vue3Lottie
                 :animation-data="ProblemSolving"
             />
           </div>

         </client-only>
       </ListComponent>
       <ListComponent title="Kezelni a lelki fájdalmaidat" text="Az alkohollal vagy a droggal sokan egyfajta lelki űrt szeretnének betölteni. Az Optima Online segítségével felfedezheted, hogy a te lelkedben mi kelti azt a bizonyos űrt, és megtanulhatod, hogyan lehet egészségesen felszámolni a hiány érzését." >
         <client-only>
           <div class="p-1">
             <Vue3Lottie
                 :animation-data="Bipolar"
             />
           </div>

         </client-only>
       </ListComponent>
       <ListComponent title="Segít kezelni a lelki fájdalmaidat"
                      text="Az alkohollal vagy a droggal sokan egyfajta lelki űrt szeretnének betölteni. Az Optima Online segítségével felfedezheted, hogy a te lelkedben mi kelti azt a bizonyos űrt, és megtanulhatod, hogyan lehet egészségesen felszámolni a hiány érzését." >
         <client-only>
           <div class="p-1 flex ">
             <Vue3Lottie
                 :animation-data="Secrets"
             />
           </div>

         </client-only>
       </ListComponent>
       <ListComponent title="Segít hatékonyan szabályozni az érzelmeidet"
                      text="Ahhoz, hogy hosszú távon is meg tudd őrizni a leszokásban elért eredményeidet, fontos megtanulnod, hogyan lehet az érzelmeidet megfelelően szabályozni, és a józanság állapotát tartósan stabilizálni. Az Optima Online ezt is megkönnyíti." >
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
        <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] text-center mb-12">Az Optimáról írták</h2>

      </div>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full">
          <TestimonialComkponent class="w-full"/>
        </div>
      </div>

    </div>
  </section>


  <section class="bg-white py-12 lg:py-40 px-4">
    <div class="container mx-auto flex flex-col lg:flex-row gap-6">
      <div class="lg:w-3/5 2xl:w-1/2">
        <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }"
            class="text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left">
          Ne halogasd tovább <br> a változtatást!
        </h2>
        <p class="lg:text-xl text-neutral-600 leading-relaxed  lg:text-left mb-3">
          Az idő múlásával a <b>problémák csak súlyosbodhatnak,</b>
        </p>
        <p class="lg:text-xl text-neutral-600 leading-relaxed  lg:text-left">
          Az Optima Online eszköztára és közösségi támogatása révén megtanulhatod, hogyan kontrolláld a függőségedet, és lépj egy kiegyensúlyozottabb, szabadabb élet felé. Legyen szó alkoholról vagy drogokról, mostantól nem vagy egyedül a küzdelemben. Itt az idő, hogy megtegyed az első lépést egy boldogabb, egészségesebb jövő felé. Regisztrálj most, és kezd el az utat a valódi szabadság és önkontroll irányába!	Regisztrálj most, és kezdd meg az utat az önkontroll és a valódi szabadság irányába!
        </p>
        <div class="mt-6 mb-12 flex gap-3 flex-col lg:flex-row">
          <a class="
          bg-green-400
          ring
          ring-green-400
          font-bold
          text-xl
          text-black
          justify-center
          px-4
          py-3
          rounded-lg
          inline-flex
          items-center
          hover:bg-green-500
          shadow-xl"
             href="https://optimatagsag.hu/register">Regisztrálok
            <i class="pi pi-arrow-right ml-1.5"></i>
          </a>
        </div>
      </div>

      <div class="lg:w-2/5 2xl:w-1/2 flex justify-end items-center ">
        <div class="rounded-2xl overflow-hidden">
          <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full" src="/image/wooden-blocks-paused-from-falling.jpg" alt="változtatás"/>
        </div>

      </div>
    </div>
  </section>

  <footer class="bg-blue-950 text-white">
    <div class="container mx-auto p-1.5 flex flex-col lg:flex-row justify-between">
      <span class="text-xs lg:text-base">© 2024 – OPTIMA by Dudits Minden jog fenntartva!</span>
      <a class="underline text-xs lg:text-base" target="_blank" href="https://optimatagsag.hu/adatvedelmi-szabalyzat">Adatvédelmi szabályzat</a>
    </div>
  </footer>

</template>

<style scoped></style>
