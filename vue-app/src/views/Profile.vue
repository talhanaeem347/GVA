<script setup lang="ts">
import useStore, { user } from "@/store/pinia";
import { ref } from "vue";
import { update } from "@/utilites/firebase/firbase";

const store = useStore();
const user = store.getUser;
let changeUserName = ref(false);
let userName = ref("");
let updateUserName = () => {
  changeUserName.value = true;
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
  <div v-my-directive class="">
    <div class="px-10">
      <div class="w-full">
        <div class="bg-red-100 p-2 my-2 flex justify-between">
          <img :src="user.photoUrl" alt="image" class="w-1/5 rounded" />
          <div class="w-4/5 flex justify-center items-center">
            <h1 class="text-4xl font-bold">Welcome to User Profile</h1>
          </div>
        </div>
      </div>
      <table class="w-full">
        <tr class="border-b">
          <th class="w-1/3 text-start py-2">Name :</th>
          <td class="w-1/3 text-start py-2">{{ user.userName }}</td>
          <td class="w-1/3 text-start py-2" v-if="!changeUserName">
            <button
              @click="updateUserName"
              class="px-2 rounded-md underline italic text-blue-400 hover:text-blue-500 active:bg-blue-600"
            >
              update
            </button>
          </td>
          <td class="w-1/3 text-start py-2" v-else>
            <div>
              <input
                type="text"
                placeholder="new Name"
                class="text-lg px-2 rounded"
                v-model="userName"
              />
              <button
                @click="doneUserName"
                class="mx-2 rounded-md border px-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600"
              >
                done
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b">
          <th class="w-1/3 text-start py-2">E-mail :</th>
          <td class="w-1/3 text-start py-2">{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
