<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/utilites/firebase/firbase";
const emit = defineEmits<{(e: "logedIn"): void;}>();
let logInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then(() => emit("logedIn"))
};
</script>
<template>
  <section class="w-full  flex justify-center">
    <button
      @click="logInWithGoogle"
      class="text-center border w-fit px-2 rounded-md my-4 pb-1 bg-gray-100 hover:text-blue-400"
    >
      Continue In With Google
      <span class="text-xl text-blue-500 italic font-extrabold">G</span>
    </button>
  </section>
</template>
