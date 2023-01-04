<script setup lang="ts">
import { ref } from 'vue';

let show = ref(true)
let timer = ref(0)
const vMyDirective = {
  mounted  () {
 timer.value = setInterval(()=>show.value=!show.value,500)        
  },
  unmounted() {
    clearInterval(timer.value)
  },
};
</script>
<template>
  <section v-my-directive class=" h-full p-2 flex justify-center items-center ">
    <div class="h-2/3 bg-red-200 p-4">
      <div class="flex justify-center mb-5">
        <h1 class=" text-2xl font-bold">Hii</h1>
        <h1  class="px-4 text-yellow-600 "> <font-awesome-icon   icon="fa-solid fa-hands-clapping" size="xl" /></h1>
      </div>
      <div class="flex justify-between flex-col items-center h-2/3">
        <p class="text-xl font-semibold py-2">This app show's my skills in Vue and TypeScript</p>
        <p class="text-xl font-semibold py-2">Explor this and give your suggestions </p>
        <p class="text-xl font-semibold py-2">But befor that  </p>
        <p class="text-xl font-semibold  h-6 text-yellow-600"><font-awesome-icon v-if="show" icon="fa-solid fa-hand-point-right" rotation="90" size="xl" /></p>
        <router-link to="/game" class="border mt-2 px-2 pb-1 rounded bg-indigo-500 hover:bg-indigo-600 text-white" >PlayGame</router-link>
      </div>
    </div>
   
  </section>
</template>
