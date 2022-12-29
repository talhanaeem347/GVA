<script setup lang="ts">
import { ref } from "vue";
import Model from "@/components/Modal.vue";
let isFirstModel = ref<boolean>(false);
let isSecModel = ref<boolean>(false);
let closeFirstModal = () => (isFirstModel.value = false);
let openFiestModal = () => (isFirstModel.value = true);
let closeSecModal = () => (isSecModel.value = false);
let openSecModal = () => (isSecModel.value = true);
</script>
<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl font-bold text-center">ReUseableModel</h1>
      <div class="flex mt-2 w-64">
        <button
          @click="openFiestModal"
          class="border rounded-md flex justify-center m-auto px-2 bg-red-300 hover:bg-red-400"
        >
          1st Model
        </button>
        <button
          @click="openSecModal"
          class="border rounded-md flex justify-center m-auto px-2 bg-blue-300 hover:bg-blue-400"
        >
          2nd Model
        </button>
      </div>
      <component v-if="isFirstModel" @closeModal="closeFirstModal" :is="Model">
        <template #title>
          <p class="bg-red-200 p-2">Modal 1</p>
        </template>
        <template #body>
          <p class="bg-red-200 p-2">Click anywhere to close Modal</p>
        </template>
        <template #footer>
          <p class="bg-red-200 p-2">This is Fopoter</p>
        </template>
      </component>
      <component v-if="isSecModel" @closeModal="closeSecModal" :is="Model">
        <template #title>
          <p class="bg-blue-200 p-2">Modal 2</p>
        </template>
        <template #body>
          <p class="bg-blue-200 p-2">Click anywhere to close Modal</p>
        </template>
        <template #footer>
          <p class="bg-blue-200 p-2">This is also a Footer</p>
        </template>
      </component>
    </div>
  </section>
</template>
