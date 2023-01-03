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
  smHeader.value = false;
};
</script>
<template>
  <header class="bg-indigo-400 flex justify-between flex-wrap lg:px-10 px-2 py-1">
    <div class=" lg:w-1/12 md:w-1/12 w-1/3">
      <img src="@/assets/logo.png" alt=" logo" class="border  w-20 h-10" />
    </div>
    <div class="lg:flex md:flex hidden justify-between">
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
        <div
          @click="store.openLoginModal"
          v-if="!store.isLogedIn"
          class="hove:border rounded text-indigo-400 hover:text-black hover:bg-white hover:text-lg mt-2 px-2"
        >
          <button class="">Sign In</button>
          <font-awesome-icon icon="far fa-user-circle" size="lg" class="pl-1 text-black " />
        </div>
        <div
          @click="logOut"
          v-else
          class="hove:border rounded text-indigo-400 hover:text-black hover:bg-white hover:text-lg mt-2 px-2"
        >
          <button class=" ">Log out</button>
          <font-awesome-icon icon="fas fa-user-circle" size="lg" class="pl-1 text-black" />
        </div>
      </div>
    </div>
    <div class="p-2 lg:hidden md:hidden  flex">
      <button
        @click="smHeader = true"
        class="border-2 border-black  px-2  rounded bg-slate-200 hover:bg-indigo-300 hover:text-lg"
      >
          <font-awesome-icon icon="fas fa-bars  " />
      </button>
    </div>
  </header>
  <component
    v-if="smHeader"
    :is="HeaderModal"
    :navList="navList"
    @isUser="isUser"
    @logOut="logOut"
    @closeModal="smHeader = false"
  ></component>
</template>
