<script setup lang="ts">
import ButtonComponent from "~/components/ui/ButtonComponent.vue";


const url = 'http://localhost:1337'


const props = defineProps({
  data: Object,
})

const hero = computed(() => props.data?.page.data.attributes.blocks[0] ?? null);



</script>

<template>
  <section class="px-3 relative text-white">

    <header class="pt-3">
      <NuxtLink to="/" class="text-white">
        <img src="/image/logo.svg" alt="Optima Online">
      </NuxtLink>
    </header>

    <div class="max-w-4xl mx-auto pt-20">
      <h1 class="text-4xl lg:text-7xl font-extrabold text-center">{{hero.title}}</h1>
      <p class="mt-3 text-center">{{hero.text}}</p>
      <div class="mt-3 flex flex-col lg:flex-row justify-center items-center gap-3">

        <ButtonComponent :class="hero.buttons[0].theme">
          <a href="https://optimatagsag.hu/register">{{hero.buttons[0].label}}</a>
          <i class="pi pi-arrow-right ml-1.5"></i>
        </ButtonComponent>


        <VideoComponent :class="hero.buttons[1].theme" :src="hero.video" />


      </div>
    </div>
    <div class=" pt-20 flex justify-center max-w-6xl mx-auto">
      <NuxtImg class="w-full" :src="hero.image.data.attributes.url" :alt="hero.image.data.attributes.url" />
    </div>

  </section>
</template>

<style scoped>

</style>