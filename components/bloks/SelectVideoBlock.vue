<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const activeListId = ref(3);

const props = defineProps({
  data: Object,
})

const content = computed(() => props.data?.page.data.attributes.blocks[1] ?? null);

const activeList = computed(() => {
  if (content.value && Array.isArray(content.value.List)) {
    const item = content.value.List.find(item => item.id === activeListId.value);
    return item ? item : content.value.List[0];
  }
  return {};
});





</script>

<template>
  <section  class="px-3 text-white pt-12 pb-6 lg:pt-40 lg:pb-20  relative">
    <div class="container mx-auto flex flex-col lg:flex-row">
      <div class="lg:w-1/2 lg:p-3">
        <span v-if="content.subTitle" class="text-sm font-semibold text-green-500">{{content.subTitle}}</span>
        <TitleSection :text="content.text" :title="content.title"  />

        <div class="mt-3 text-opacity-75">

          <div v-for="item in content.List" class="p-1.5 transition-all duration-300">
            <Transition
                name="fade-down"
                mode="out-in"
            >
            <div @click="activeListId = item.id" class="py-1 px-3 transition-all duration-300  rounded-2xl overflow-hidden cursor-pointer border-2 h-full" :class="(item.id == activeListId ) ? ' card ' : 'border-transparent' ">
              <h3 class="font-semibold relative z-10">{{item.title}}</h3>
                <p v-show="item.id == activeListId" class="relative z-10 text-sm text-slate-100">{{item.text}}</p>
            </div>
            </Transition>
          </div>


        </div>
      </div>
      <div class="lg:w-1/2 lg:p-3">
        <div class="aspect-video rounded-3xl border border-opacity-50 overflow-hidden shadow-2xl">
          <iframe :src="`${activeList.video}?h=d34db182c8&title=0&byline=0&portrait=0&badge=0`" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

.card{
  @apply relative after:content-[''] after:w-40 after:h-40 after:bg-[#00FFE1B2] after:top-0 after:left-3 after:blur-3xl after:opacity-60 after:absolute bg-gray-800 border-2 border-white border-opacity-10 shadow-2xl
}

.fade-down-enter-active, .fade-down-leave-active {
  transition: transform 0.3s;
}

</style>