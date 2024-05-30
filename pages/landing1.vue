<script lang="ts" setup>

import FeedbackRating from "assets/animation/FeedbackRating.json"
import ProblemSolving from "assets/animation/ProblemSolving.json"
import Secrets from "assets/animation/Secrets.json"
import Bipolar from "assets/animation/BipolarDisorder.json"
import Testimonial2Comkponent from "~/components/Testimonial2Comkponent.vue";

useHead({
  title: 'Optima Online | Az alkohol és drogok elleni küzdelem új eszköze',
  htmlAttrs: {
    lang: 'hu',
  },
  meta: [
    {
      name: "description",
      content: 'Az Optima Online egy praktikus segítőfelület, amely segít megérteni és kezelni a függőségedet. A használata a következő négy fő előnnyel jár.',
    },
    {
      name: "charset",
      content: "UTF-8",
    }
  ],
  link: [
    { rel: 'icon', type: 'image/ico', href: 'favicon/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '32x32', href: 'favicon/apple-touch-icon.svg' },

  ]
});

</script>

<template>
  <div class="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row relative">
    <header class="absolute w-full px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/image/logo.svg" alt="Optima Online"/>
      </NuxtLink>
      <a class="bg-green-950 font-bold text-lg text-white px-6 py-2 rounded-full shadow"
         href="https://optimatagsag.hu/register">Regisztrálok</a>
    </header>

    <div class="bg-green-950 lg:h-full lg:w-7/12 bg-[url('/image/lines.svg')] flex justify-center">
      <div class="max-w-4xl mt-40 lg:mt-28 2xl:mt-40 text-white px-4">
        <h1 class="text-white text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center lg:text-left">Szerezd vissza
          <br>
          az irányítást!</h1>
        <p class="text-xl mt-6 text-center lg:text-left">Itt a megoldás, amit egyre többen választanak a macerás hagyományos kezelések helyett</p>
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
          <VideoComponent src="https://www.youtube.com/embed/JaBTL2E2yZc?si=xqnRcHDvi74hdeJV"/>
        </div>
      </div>
    </div>
    <div
        class="h-[500px] lg:h-full lg:w-5/12 bg-cover bg-[url('/image/landing1/landing-hero.jpg')] bg-top lg:bg-center"></div>

    <div class="lg:absolute -bottom-20 xl:-bottom-12 2xl:bottom-0 left-0 lg:w-9/12 bg-white pt-16 pb-6 px-4 lg:px-16">
      <div class="lg:flex w-full">
        <div class="lg:w-1/3 px-3 mt-3">
          <img class="w-12 mb-3" src="/image/landing1/mdi_help-outline.svg" alt="Átfogó segítség">
          <span class="font-bold mb-3 block">Átfogó segítség</span>
          <p class="text-neutral-600">Az <b>Optima Online</b> tudásanyaga és eszköztára segít az alkohollal és a drogokkal kapcsolatos kihívások leküzdésében.</p>
        </div>

        <div class="lg:w-1/3 px-3">
          <img class="w-12 mb-3 mt-3" src="/image/landing1/game-icons_human-target.svg" alt="Személyre szabottság">
          <span class="font-bold mb-3 block">Személyre szabottság</span>
          <p class="text-neutral-600">Személyre szabottság
            Saját igény szerint hasznosítható videók, útmutatók és élő előadások állnak rendelkezésre a felépülés és az önfejlesztés érdekében.
          </p>
        </div>

        <div class="lg:w-1/3 px-3 mt-3">
          <img class="w-12 mb-3" src="/image/landing1/clarity_group-solid.svg" alt="Közösségi erő">
          <span class="font-bold mb-3 block">Közösségi erő</span>
          <p class="text-neutral-600">Csoportos tanácsadás és közösségi támogatás, amely erőt ad a változtatáshoz...</p>
        </div>

      </div>
    </div>
  </div>

  <section class="bg-white py-12 lg:py-40 px-4">
    <div class="container mx-auto flex flex-col lg:flex-row">
      <div class="lg:w-3/5 2xl:w-1/2">
        <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left">Legyél Te is
          <br> az <span class="text-green-500">Életed Hőse!</span></h2>
        <p class="lg:text-xl text-neutral-600 leading-relaxed  lg:text-left">
          Az Optima Online segít azoknak, akiknek nehézséget okoz az alkoholfogyasztás kontrollálása, és nincs lehetőségük hosszan terápiára járni. Ha szeretnéd megtanulni az önkontrollt, és nem akarod, hogy a környezeted alkoholistának tartson, akkor az Optima segítségével diszkrét támogatáshoz juthatsz a saját otthonodból. Személyre szabott útmutatásokkal és egy támogató közösséggel ébresztünk rá, hogy nem vagy egyedül. Szégyenérzet nélkül, magabiztosan dolgozhatsz a változásért egy boldogabb, egészségesebb élet érdekében.
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

      <div class="lg:w-2/5 2xl:w-1/2 flex justify-end items-center">
        <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full" src="/image/laptop.png" alt="Optima Online"/>
      </div>
    </div>
  </section>

  <section class="bg-green-950 bg-[url('/image/lines.svg')]  py-12 lg:py-40 px-4">
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
            <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full " src="/image/landing1/kepes-leszel.jpg" alt="Optima segítség"/>
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

          <Testimonial2Comkponent class="w-full"/>
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
          <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full" src="/image/landing1/megkozdes-a-problemakkal.jpg" alt="változtatás"/>
        </div>

      </div>
    </div>
  </section>

  <footer class="bg-green-950 text-white">
    <div class="container mx-auto p-1.5 flex flex-col lg:flex-row justify-between">
      <span class="text-xs lg:text-base">© 2024 – OPTIMA by Dudits Minden jog fenntartva!</span>
      <a class="underline text-xs lg:text-base" target="_blank" href="https://optimatagsag.hu/adatvedelmi-szabalyzat">Adatvédelmi szabályzat</a>
    </div>
  </footer>
</template>

<style scoped></style>
