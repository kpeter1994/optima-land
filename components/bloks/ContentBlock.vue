<script setup lang="ts">
import ButtonComponent from "~/components/ui/ButtonComponent.vue";

const url = 'http://localhost:1337'


const props = defineProps({
  data: Object,
})





</script>

<template>
  <section class="bg-white py-12 lg:py-40 px-4">
    <div class="container mx-auto flex flex-col lg:flex-row">
      <div class="lg:w-3/5 2xl:w-1/2">
        <h2 v-animateonscroll="{ enterClass: 'animate-fade-up animate-once animate-ease-out animate-delay-[300ms] animate-duration-[600ms]' }" class="text-neutral-800 text-4xl lg:text-6xl font-bold leading-[120%] mb-3 text-center lg:text-left">Legyél Te is
          <br> az <span class="text-green-500">Életed Hőse!</span></h2>
        <p class="lg:text-xl text-neutral-600 leading-relaxed  lg:text-left">
          Az Optima Online segít azoknak, akiknek nehézséget okoz az alkoholfogyasztás kontrollálása, és nincs lehetőségük hosszan terápiára járni. Ha szeretnéd megtanulni az önkontrollt, és nem akarod, hogy a környezeted alkoholistának tartson, akkor az Optima segítségével diszkrét támogatáshoz juthatsz a saját otthonodból. Személyre szabott útmutatásokkal és egy támogató közösséggel ébresztünk rá, hogy nem vagy egyedül. Szégyenérzet nélkül, magabiztosan dolgozhatsz a változásért egy boldogabb, egészségesebb élet érdekében.
        </p>
        <div class="mt-6 mb-12 flex gap-3 flex-col lg:flex-row">
          <ButtonComponent class="primary">
            <a href="https://optimatagsag.hu/register">Regisztrálok</a>
            <i class="pi pi-arrow-right ml-1.5"></i>
          </ButtonComponent>
        </div>
      </div>

      <div class="lg:w-2/5 2xl:w-1/2 flex justify-end items-center">
        <NuxtImg sizes="xs:480px sm:768px" format="webp" class="w-full" src="/image/laptop.png" alt="Optima Online"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>