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
  @apply ring font-bold text-xl justify-center px-4 py-3 rounded-lg inline-flex items-center shadow;
}

.primary {
  @apply bg-green-400 ring ring-green-400 text-black font-bold hover:bg-green-500 shadow;
}

.secondary {
  @apply ring ring-white font-bold text-white  hover:bg-white hover:text-black shadow;
}

</style>