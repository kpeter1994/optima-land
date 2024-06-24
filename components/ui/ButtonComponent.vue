<script setup lang="ts">

const props = defineProps({
  src: String,
  label: String,
})

</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>

.btn {
  @apply  font-bold text-lg shadow-inner justify-center px-4 py-4 rounded-xl inline-flex items-center ;
}

.primary {
  @apply bg-gradient-to-l from-green-600 to-green-300 hover:from-green-300 hover:to-green-100 transition-all text-black font-bold hover:bg-green-500 shadow inner-shadow;
}

.secondary {
  @apply bg-white transition-all text-black font-bold hover:bg-white inner-shadow;
}

.inner-shadow {
  box-shadow: inset 1px 1px 3px 1px rgba(255, 255, 255, 0.6),
    /* Outer gray shadow */
  //3px 3px 5px 0 rgba(128, 128, 128, 0.7);
}

</style>