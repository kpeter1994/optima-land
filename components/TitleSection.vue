<script lang="ts" setup>

const props = defineProps({
  title: String,
  text: String,
  center: Boolean
})


</script>


<template>
  <div class="max-w-4xl mx-auto ">
    <h2 v-html="props.title" class="text-4xl lg:text-5xl font-bold mt-3 mb-3 text-center " :class="center ? '' : 'lg:text-left' "></h2>
    <p v-html="props.text" class="text-center" :class="center ? '' : 'lg:text-left' " ></p>
  </div>

</template>

<style scoped></style>
