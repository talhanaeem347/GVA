<script setup lang="ts">
import { ref, computed } from "vue";
import marked from "@/utilites/other/markeLibrary";
let textarea = ref();
let text = ref("**bold**");
let markedText = computed(() => marked(text.value));
const vMyDirective = {
  mounted: () => {
    textarea.value.focus();
  },
};
</script>
<template>
  <div v-my-directive class="w-full h-full  px-2">
    <h1 class="w-full text-center text-3xl font-bold text-gray-200 py-2">Marke Down</h1>
    <div class="flex lg:w-2/3 md:w-2/3  mx-auto  h-2/3 border-8 text-xl ">
      <div class="w-1/2 h-full border">
        <textarea
        @click="text = ''"
          v-model="text"
          ref="textarea"
          class="w-full h-full p-3"
        ></textarea>
      </div>
      <div
        class="w-1/2 h-full p-3 border border-black rounded"
        :class="text ? 'bg-violet-100' : ''"
        v-html="markedText"
      ></div>
    </div>
  </div>
</template>
