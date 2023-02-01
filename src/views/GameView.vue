<script setup lang="ts">
import { ref } from 'vue';
import Block from '../components/game/BlockGame.vue';
import Result from '../components/game/GameResult.vue';
let showBtn = ref<boolean>(true)
let isPlaing = ref<boolean>();
let showResult = ref<boolean>()
let index = ref<number>();
let contry = ref<string>();
let startGame = () => {
  index.value = Number((Math.random() * 100).toFixed());
  isPlaing.value = true;
  showResult.value = false;
  showBtn.value = false;
}
let endGame = (contryName: string) => {
  contry.value = contryName
  isPlaing.value = false;
  showResult.value = true;
  showBtn.value = true;

}
let abortGame = () =>{
  isPlaing.value = false;
  showBtn.value = true;
  showResult.value = false;
}
</script>
<template>
<section class=" w-full h-full lg:p-10 md:p-10 p-2">
    <div class="bg-teal-700 h-full rounded-md">
        <div class="lg:pt-5 pt-2">
            <h1 class="text-3xl text-center font-bold p-2 ">Knowledge test</h1>
            <p class="text-xl text-center font-semibold pb-4">We show a city name and you have to select a country related </p>
        </div>
        <button @click="startGame" v-if="showBtn"
        class="border rounded flex justify-center px-8 pb-1 bg-indigo-500 hover:bg-indigo-600  mx-auto disabled:bg-gray-100">play</button>
        <button @click="abortGame" v-else
        class="border rounded flex justify-center px-4 pb-1 bg-indigo-500 hover:bg-indigo-600  mx-auto disabled:bg-gray-100">End Game</button>
        <component v-if="isPlaing" :is="Block" :index="index" @end="endGame"></component>
        <component v-if="showResult" :is='Result' :item="{ contry, index }"></component>
    </div>
</section>
</template>