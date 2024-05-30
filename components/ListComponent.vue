<script lang="ts" setup>



const props = defineProps<{
  title: string,
  text: string,
}>()
</script>

<template>
  <div class="lg:w-1/2 py-6 px-8">
    <div class="flex justify-center lg:justify-start">
      <div class="bg-green-500 p-1 w-24 h-24 flex justify-center items-center rounded-full mb-3">
        <div class="bg-white w-full h-full rounded-full ">
          <slot></slot>

        </div>
      </div>
    </div>

    <h3 class="text-xl text-center lg:text-left font-semibold mb-1.5">{{props.title}}</h3>
    <p class="text-center lg:text-left lg:text-lg">{{props.text}}</p>
  </div>
</template>

<style scoped></style>
