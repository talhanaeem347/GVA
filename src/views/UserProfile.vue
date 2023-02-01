<script setup lang="ts">
import useStore from "@/store/pinia";
import { ref } from "vue";
import { update } from "@/controler/userCrud/dbConnection";

const store = useStore();
const user = store.getUser;
let changeUserName = ref(false);
let userName = ref("");
let updateUserName = () => {
  changeUserName.value = true;
};
let dontChange = () => {
  changeUserName.value = false;
};
let doneUserName = () => {
  changeUserName.value = false;
  update(userName.value);
  store.setUserName(userName.value);
};
const vMyDirective = {
  mounted: () => {},
};
</script>
<template>
  <div v-my-directive class="-mt-2">
    <div class="lg:px-10 "> 
      <div class="w-full">
        <div class="bg-red-100 p-4 my-2 flex justify-between flex-col items-center lg:flex-row md:flex-row ">
          <img :src="user.photoUrl" alt="image" class="lg:w-1/5 md:w-1/4 sm:w-1/4 w-1/3 rounded" />
          <div class="lg:w-4/5 md:3/4 sm:w-3/4 flex justify-center items-center">
            <h1 class="lg:text-4xl md:text-4xl  text-xl  text-center border mx-auto font-bold">Welcome to User Profile</h1>
          </div>
        </div>
      </div>

      <section class="w-full bg-slate-300">
        <div class="flex flex-wrap border-b border-black w-full">
          <div class="w-1/3  text-start py-2 px-2 font-bold">Name :</div>
          <div class="w-1/3  text-start py-2">{{ user.userName }}</div>
          <div class="w-1/3  text-start py-2" v-if="!changeUserName"><button @click="updateUserName" class="px-2 rounded-md underline italic text-blue-400 hover:text-blue-500 active:bg-blue-600">update</button></div>
          <div class="lg:w-1/3 md:w-1/3 sm:w-1/3 w-full text-start py-2" v-else >
            <div class="flex justify-center">
              <button
                @click="dontChange"
                class="mx-2 rounded-md border px-2 bg-red-400 hover:bg-red-500 active:bg-red-600"
              >
                X
              </button>
              <input
                type="text"
                placeholder="new Name"
                class="text-lg px-2 rounded w-2/3"
                v-model="userName"
              />
              <button
                @click="doneUserName"
                class="mx-2 rounded-md border px-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600"
              >
                <font-awesome-icon icon="fs fa-check-double" />
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-black flex flex-warp">
          <div class="w-1/3 text-start p-2 font-bold ">E-mail :</div>
          <div class="w-1/3 text-start py-2">{{ user.email }}</div>
        </div>
      </section>
    </div>
  </div>
</template>
