<script lang="ts" setup>

import ButtonComponent from "~/components/ui/ButtonComponent.vue";

const props = defineProps({
  src: String,
  class: String,
})

const open = ref(false)
</script>


<template>
  <div>


    <ButtonComponent @click="open = !open" class="btn secondary w-full lg:w-auto">
      <i class="pi pi-play-circle mr-1.5"></i>
      Megnézem a videót
    </ButtonComponent>

    <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-95 duration-200"
        enter-to-class="opacity-100 scale-100 duration-200"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 scale-100 duration-200"
        leave-to-class="opacity-0 scale-95 duration-200"
    >
    <div v-if="open"
         class="h-screen fixed bg-black top-0 right-0 left-0 bottom-0 z-10 bg-opacity-60 backdrop-blur-lg flex justify-center items-center">


      <button @click="open = !open" class="absolute top-3 right-3 text-2xl text-white"><i class="pi pi-times"></i></button>

      <iframe class="max-w-4xl 2xl:max-w-7xl aspect-video w-full"
                :src="props.src"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>


    </div>
    </Transition>
  </div>
</template>

<style scoped>

.btn {
  @apply  font-bold text-lg shadow-inner justify-center px-4 py-4 rounded-xl inline-flex items-center ;
}

.primary {
  @apply bg-gradient-to-l from-green-600 to-green-300 hover:from-green-300 hover:to-green-100 transition-all text-black font-bold hover:bg-green-500 shadow inner-shadow;
}

.secondary {
  @apply bg-gray-300 transition-all text-black font-bold hover:bg-gray-200 shadow inner-shadow;
}

.inner-shadow {
  box-shadow: inset 1px 1px 3px 1px rgba(255, 255, 255, 0.6),
    /* Outer gray shadow */
  3px 3px 5px 0 rgba(128, 128, 128, 0.7);
}

</style>
