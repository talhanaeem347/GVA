<script setup lang="ts">
import { signOut } from "firebase/auth";
import { auth } from "@/utilites/firebase/firbase";
import { ref } from "vue";
import router from "@/routes/index";
import useStore from "@/store/pinia";
import HeaderModal from "./HeaderModal.vue";
const store = useStore();
let smHeader = ref(false);
let logOut = () => {
  signOut(auth)
    .then(() => {
      store.openLoginModal();
      router.push({ name: "home" });
    })
    .catch((error) => console.log(error));
};
let navList = ref([
  { path: "/", name: "Home" },
  { path: "/Calculator", name: "Calculator" },
  { path: "/marke-down", name: "Marke Down" },
  { path: "/reuseable-modal", name: "Slot" },
  { path: "/chat", name: "Chat" },
  { path: "/profile", name: "Profile" },
  { path: "/feed-back", name: "Feedback" },
]);
let isUser = (item: { path: string; name: string }) => {
  if (item.name == "Chat" || item.name == "Profile") {
    if (store.isLogedIn) router.push(item.path);
    else {
      store.openLoginModal();
      router.push({ name: "home" });
    }
  } else router.push(item.path);
  smHeader.value = false
};
</script>
<template>
  <header class="bg-indigo-400 flex justify-between px-10 py-1">
    <div class="border rounded-full">
      <img src="" alt=" logo" />
    </div>
    <div class="w-4/5 lg:flex md:flex sm:flex hidden justify-between">
      <nav class="my-1">
        <button
          v-for="item in navList"
          :key="item.name"
          @click="isUser(item)"
          class="text-white pb-1 px-2 text-xl hover:border-x"
        >
          {{ item.name }}
      </button>
      </nav>
      <div>
        <button
          v-if="!store.isLogedIn"
          class="border rounded h-8 w-20 my-1 bg-slate-200 hover:bg-indigo-300 hover:text-lg"
          @click="store.openLoginModal"
        >
          Sign In
        </button>
        <button
          v-else
          class="border rounded h-8 w-20 my-1 bg-slate-200 hover:bg-indigo-300 hover:text-lg"
          @click="logOut"
        >
          Log out
        </button>
      </div>
    </div>
    <div class="p-2 lg:hidden md:hidden sm:hidden flex">
      <Button
      @click="smHeader = true"
        class="border px-2 rounded bg-slate-200 hover:bg-indigo-300 hover:text-lg"
      >
        nav
      </Button>
    </div>
  </header>
  <component v-if="smHeader" :is="HeaderModal" :navList="navList" @isUser="isUser" @logOut="logOut" @closeModal="smHeader= false"></component> 
  </template>
