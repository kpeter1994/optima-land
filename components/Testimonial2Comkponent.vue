<script lang="ts" setup>
import Carousel from 'primevue/carousel';

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const products = ref([
  {
    name: 'Tarján Zoltán', text: '„Ha bárki megkérdezi, mit adott nekem az Optima, a válaszom egyértelmű: Mindent!\n' +
        'Az alkoholfüggőségem átalakult Józanságfüggőséggé, és mindezt az Optimának köszönhetem.” \n', image: 'tarjan-zoltan.png'
  },
  {
    name: 'Szabó Győző színész, sorstárs, segítő',
    text: '„OPTIMA... Tuti, könnyebben álltam volna talpra, ha az önsegítésben így is segítettek volna…”',
    image: 'szabo-gyozo.jpg'
  },
  {
    name: 'Patrik',
    text: 'Sziasztok. Jelentem, megvan a 60. nap józanul. Még 1 hónap, és Optima Zóna! ;-)” ',
    image: null
  },
  {
    name: 'Kriszta',
    text: 'Köszönet az újabb tudásanyagokért. Átolvasva a feladatlapokat, máris új felismerésekre jutottam.',
    image: null
  },
  {
    name: 'Kristóf',
    text: 'Ez nekem ütős volt! Ezeket a témákat megkerülve akartam mindig leszokni. Azt hittem, hogy csak nem voltam kellőképpen felkészülve, azért estem mindig vissza (10 év után is). Sejtettem, hogy más oldalról is meg kell közelítenem ezt az egészet…” ',
    image: null
  },
  {
    name: 'Lili',
    text: '„De kár, hogy ezt az Live-ot nem 14 ével ezelőtt néztem meg! Tudatosabban választottam volna! Ez a csoport szuper!',
    image: null
  },
  {
    name: 'Roland',
    text: 'Ez nagyon jó videó volt, és minden elemében átéltem. A visszaesés ciklikusságát és kifutását is… és azt is, hogy csinálj valami olyat, mint amikor jól vagy… Köszi, Dénes, hogy megfogalmaztad. Ez most hatalmas segítség',
    image: null
  },
  {
    name: 'Barbara',
    text: 'Nagyon jó, hogy a csoportban beszélhetünk a dolgainkról. Dénes, ez a csoport egy fantasztikus találmány, nagyon nagy dolgot vittél véghez! Hálás vagyok neked ezért, és tudom, hogy nem én vagyok az egyetlen, aki így gondolja. Sokat segítesz a szakértelmeddel…',
    image: null
  },
  {
    name: 'Dávid',
    text: 'Köszönöm újra ezt az agyat-érzéseket megmozgató előadást. Érintettként nézve, rezgést éreztem az Erőben. Találó példák, ismerős és kifejező képek…',
    image: null
  },

]);

</script>


<template>
  <div class="card">
    <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border-1 surface-border rounded-2xl bg-white border my-10 md:mx-3  p-6 relative">

          <div class="mb-3">
            <div v-if="slotProps.data.image" class="w-20 h-20 bg-white border rounded-full absolute -top-10 left-1/2 -translate-x-1/2 p-1">
              <NuxtImg sizes="xs:70px lg:70px" format="webp" :src="`/image/${slotProps.data.image}`" :alt="slotProps.data.name" class="w-full h-full object-cover rounded-full"/>
            </div>
          </div>

          <div class="mb-2">
            <img class="w-12 rotate-180" src="/image/landing1/velemenyek.svg" alt="vélemények">
          </div>

          <div class="flex justify-content-between align-items-center">

            <div class="mt-0 mb-3 font-semibold lg:text-lg text-neutral-600">{{ slotProps.data.text }}</div>



            <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined/>
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
              </span>
          </div>

          <div class="mb-3 font-medium text-right">{{ slotProps.data.name }}</div>

          <div class="mb-t flex justify-end">
            <img class="w-12 " src="/image/landing1/velemenyek.svg" alt="vélemények">
          </div>
        </div>
      </template>
    </Carousel>
  </div>

</template>

<style scoped></style>
