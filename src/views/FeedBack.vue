<script setup lang="ts">
import { ref } from "vue";
import { sendFeedback } from '@/controler/userCrud/dbConnection'
let name = ref("");
let email = ref("");
let message = ref("");
let input = ref();
let err = ref(true);
let submit = () => {
  err.value = !sendFeedback(name.value, email.value, message.value);
  if (err.value)
    return
  name.value = "";
  email.value = "";
  message.value = "";

};
const vMyDirective = {
  mounted: () => {
    input.value.focus();
  },
};
</script>
<template>
  <div v-my-directive class="w-full h-max mt-5">
    <div class="lg:w-1/2 md:w1/2 sm:w-2/3 w-full mx-auto border mt-10 bg-violet-100 rounded-lg">
      <div>
        <h1 class="text-3xl font-bold text-center p-3">
          Feel free for
          <span class="text-4xl block text-center">SUGGESTION </span>
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row md:flex-row sm:flex-row">
        <div class="lg:w-1/2 md:w-1/2 sm:1/2  p-2">
          <div class="px-4 py-1 text-lg font-medium" :class="err ? 'text-red-700' : ''"><label for="name"><sup
                v-if="err" class="text-xs"><font-awesome-icon icon="fas fa-star" size="xs" /></sup>Name :</label></div>
          <div class="px-2">
            <input type="text" id="name" placeholder="Enter you'r Name" ref="input" v-model="name"
              class="w-full bg-gray-100 px-2 py-1 rounded-md focus:bg-white" />
          </div>
        </div>
        <div class="lg:w-1/2 md:w-1/2 sm:1/2 p-2" :class="err ? 'text-red-700' : ''">
          <div class="px-4 py-1 text-lg font-medium"><label for="email"><sup v-if="err"
                class="text-xs"><font-awesome-icon icon="fas fa-star" size="xs" /></sup>E-mail :</label></div>
          <div class="px-2">
            <input type="email" id="email" placeholder="someone@example.com" v-model="email"
              class="w-full bg-gray-100 px-2 py-1 rounded-md focus:bg-white" />
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="px-4 py-1 text-lg font-medium" :class="err ? 'text-red-700' : ''"><label for="message"><sup
              v-if="err" class="text-xs"><font-awesome-icon icon="fas fa-star" size="xs" /></sup>Message :</label></div>
        <div class="px-2">
          <textarea id="message" placeholder="Suggest here !" v-model="message"
            class="w-full h-28 bg-gray-100 px-2 py-1 rounded-md focus:bg-white"></textarea>
        </div>
      </div>
      <div class="flex justify-end px-10 py-5 -mt-5">
        <button @click="submit" :disabled="!message || !email || !name"
          class="border px-5 pb-1 rounded text-lg bg-indigo-400 hover:bg-indigo-500 active:bg-slate-600 text-white disabled:text-indigo-400">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
