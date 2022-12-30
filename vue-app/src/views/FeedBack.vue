<script setup lang="ts">
import { ref } from "vue";
import { format } from "date-fns";
import { push, set } from "firebase/database";
import { feedbackRef } from "@/utilites/firebase/firbase";
let name = ref("");
let email = ref("");
let message = ref("");
let input = ref();
let submit = () => {
  if (message.value) {
    const newRef = push(feedbackRef);
    set(newRef, {
      name: name.value,
      body: message.value,
      time: format(new Date(), "hh:mm"),
      date: format(new Date(), "MM/dd/yy"),
    });
    message.value = "";
  }
};

const vMyDirective = {
  mounted: () => {
    input.value.focus();
  },
};
</script>
<template>
  <div v-my-directive class="w-full h-max mt-5">
    <div class="w-1/2 mx-auto border mt-10 bg-violet-100 rounded-lg">
      <div>
        <h1 class="text-3xl font-bold text-center p-3">
          Feel free for
          <span class="text-4xl block text-center">SUGGESTION </span>
        </h1>
      </div>
      <div class="flex">
        <div class="w-1/2 p-2">
          <div class="px-4 py-1"><label for="name">Name</label></div>
          <div class="px-2">
            <input
              type="text"
              id="name"
              placeholder="Enter you'r Name"
              ref="input"
              v-model="name"
              class="w-full bg-gray-100 px-2 py-1 rounded-md focus:bg-white"
            />
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="px-4 py-1"><label for="email">Email</label></div>
          <div class="px-2">
            <input
              type="email"
              id="email"
              placeholder="someone@example.com"
              v-model="email"
              class="w-full bg-gray-100 px-2 py-1 rounded-md focus:bg-white"
            />
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="px-4 py-1"><label for="message">Message</label></div>
        <div class="px-2">
          <textarea
            id="message"
            placeholder="Suggest here !"
            v-model="message"
            class="w-full h-28 bg-gray-100 px-2 py-1 rounded-md focus:bg-white"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end px-10 py-5">
        <button
          @click="submit"
          class="border px-5 pb-1 rounded text-lg bg-indigo-400 hover:bg-indigo-500 active:bg-slate-600 text-white"
        >
          submit
        </button>
      </div>
    </div>
  </div>
</template>
