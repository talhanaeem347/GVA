<script setup lang="ts">
import { ref, computed } from "vue";
import marked from "@/utilites/other/markeLibrary";
let textarea = ref();
let text = ref("");
let markedText = computed(() => marked(text.value));
const vMyDirective = {
  mounted: () => {
    console.log(markedText.value);
    textarea.value.focus();
  },
};
</script>
<template>
  <div v-my-directive class="w-full h-full">
    <h1 class="w-full text-center text-xl font-bold py-2">Marke Down App</h1>
    <div class="flex w-full h-full text-xl">
      <div class="w-1/2 h-full border">
        <textarea
          v-model="text"
          ref="textarea"
          class="w-full h-full p-3"
        ></textarea>
      </div>
      <div
        class="w-1/2 h-full p-3"
        :class="text ? 'bg-violet-100' : ''"
        v-html="markedText"
      ></div>
    </div>
  </div>
</template>
