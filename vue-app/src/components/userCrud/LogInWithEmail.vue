<script setup lang="ts">
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utilites/firebase/firbase";
import router from "@/routes/index";
const emit = defineEmits<{ (e: "logedIn"): void }>();
const input = ref();
let email = ref<string>("");
let password = ref<string>("");
let isLoading = ref<boolean>(false);
let submit = () => {
  isLoading.value = true;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      email.value = "";
      password.value = "";
      isLoading.value = false;
      router.push({ name: "home" });
      emit("logedIn");
    })
    .catch((error) => {
      isLoading.value = false;
    });
};

const vMyDirective = {
  mounted: () => input.value.focus(),
};
</script>
<template>
  <div v-my-directive>
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
        <span v-if="!isLoading">log In</span>
        <span v-else>⏳</span>
      </button>
    </form>
  </div>
</template>
