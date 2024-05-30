<script setup lang="ts">
import ButtonComponent from "~/components/ui/ButtonComponent.vue";


const url = 'http://localhost:1337'


const props = defineProps({
  data: Object,
})

const hero = computed(() => props.data?.page.data.attributes.blocks[0] ?? null);



</script>

<template>
  <div class="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row relative">
    <header class="absolute w-full px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/image/logo.svg" alt="Optima Online"/>
      </NuxtLink>
      <a class="bg-blue-950 font-bold text-lg text-white px-6 py-2 rounded-full shadow"
         href="https://optimatagsag.hu/register">Regisztrálok</a>
    </header>

    <div class="bg-blue-950 lg:h-full lg:w-7/12 bg-[url('/image/lines.svg')] flex justify-center">
      <div class="max-w-4xl mt-40 lg:mt-28 2xl:mt-40 text-white px-4">
        <h1 class="text-white text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center lg:text-left">
          {{ hero.title }}
        </h1>

        <p class="text-xl mt-6 text-center lg:text-left">
          {{ hero.text }}
        </p>

        <div class="mt-6 mb-12 flex gap-3 flex-col lg:flex-row">

          <ButtonComponent :class="hero.buttons[0].theme">
            <a  :href="hero.buttons[0].href">
              {{ hero.buttons[0].label }}
              <i class="pi pi-arrow-right ml-1.5"></i>
            </a>
          </ButtonComponent>

          <VideoComponent :src="hero.video"/>
        </div>
      </div>
    </div>
    <div
        class="h-[500px] lg:h-full lg:w-5/12">
      <NuxtImg class="w-full h-full object-cover"
               :src="url + hero.image.data.attributes.url"
               format="webp"
               sizes="xs: 483px sm: 824px md: 992px lg:800px"
               :alt="hero.image.data.attributes.alternativeText"/>
    </div>

    <div class="lg:absolute -bottom-20 xl:-bottom-12 2xl:bottom-0 left-0 lg:w-9/12 bg-white pt-16 pb-6 px-4 lg:px-16">
      <div class="lg:flex w-full">

        <div v-for="card in hero.Card" class="lg:w-1/3 px-3 mt-3">
          <img class="w-12 mb-3" :src="url + card.image.data.attributes.url" alt="Átfogó segítség">
          <span class="font-bold mb-3 block">{{card.title}}</span>
          <p class="text-neutral-600">{{card.text}}</p>
        </div>



      </div>
    </div>
  </div>
</template>

<style scoped>

</style>