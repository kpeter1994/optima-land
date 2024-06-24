<script setup lang="ts">
import ButtonComponent from "~/components/ui/ButtonComponent.vue";
import TitleSection from "~/components/TitleSection.vue";


const url = 'http://localhost:1337'


const props = defineProps({
  data: Object,
})

const testimonial = computed(() => props.data?.page.data.attributes.blocks[2] ?? null);



</script>

<template>
  <section class="px-3 relative text-white py-6 lg:py-20">

    <div class="max-w-7xl mx-auto">
      <TitleSection center :text="testimonial.text" :title="testimonial.title"  />

      <div class="grid lg:grid-cols-3 gap-3 mt-20">


          <div v-for="card in testimonial.card" class="card">
            <img class="absolute opacity-5" src="/image/velemenyek.svg" alt="">
            <p class="pb-6 relative z-10 border-b border-white text-lg border-opacity-15">{{card.text}}</p>
            <div class="flex justify-between pt-3 relative z-10">
              <span>{{card.title}}</span>
             <img class="w-14 h-14 rounded-full" v-if="card.image.data" :src="card.image.data.attributes.url" :alt="card.image.data.attributes.alternativeText">
            </div>
          </div>
        </div>





      </div>

  </section>


</template>

<style scoped>
.card{
  @apply relative p-6 overflow-hidden rounded-2xl after:content-[''] after:w-40 after:h-40 after:bg-[#00FFE1B2] after:bottom-0 after:right-3 after:blur-3xl after:opacity-40 after:absolute bg-gray-800 border-2 border-white border-opacity-10 shadow-2xl
}
</style>