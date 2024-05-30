<script lang="ts" setup>

const props = defineProps({
  src: String,
})

const open = ref(false)
</script>

<template>
  <div>
    <button @click="open = !open" class="text-xl w-full font-bold hover:bg-white transition-all hover:text-blue-950 text-white px-4 py-3 inline-flex justify-center items-center ring ring-white rounded-lg">
      <i class="pi pi-play-circle mr-1.5"></i>
      Megnézem a videót
    </button>

    <div v-if="open"
         class="h-screen fixed bg-black top-0 right-0 left-0 bottom-0 z-10 bg-opacity-60 backdrop-blur-lg flex justify-center items-center">


      <button @click="open = !open" class="absolute top-3 right-3 text-2xl text-white"><i class="pi pi-times"></i></button>

      <iframe class="max-w-4xl 2xl:max-w-7xl aspect-video w-full"
                :src="props.src"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>


    </div>
  </div>
</template>

<style scoped></style>
