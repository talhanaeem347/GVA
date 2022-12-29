<script setup lang="ts">
import { ref } from "vue";
import { creteUser, update } from "@/utilites/firebase/firbase";
let email = ref("");
let password = ref("");
let isLoading = ref(false);
let submit = () => {
  creteUser(email.value, password.value);
  email.value = "";
  password.value = "";
};
</script>
<template>
  <div >
    <form @submit.prevent="submit">
      <div class="shadow-lg mb-8 rounded-lg px-2">
        <label for="email" class="text-xl">Email</label>
        <input
          type="email"
          id="email"
          placeholder="someone@example.com"
          ref="input"
          v-model="email"
          class="text-xl w-full pb-1 px-2"
        />
      </div>
      <div class="shadow-lg mb-4 rounded-lg px-2">
        <label for="password" class="text-xl">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password@123"
          v-model="password"
          class="text-xl w-full pb-1 px-2"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-300 hover:bg-indigo-400 py-1 rounded-md text-lg"
      >
        <span v-if="!isLoading">Create Acount</span>
        <span v-else>⏳</span>
      </button>
    </form>
  </div>
</template>
