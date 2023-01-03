<script setup lang="ts">
import { ref } from "vue";
import router from "@/routes/index";
import { logIn } from "@/controler/userCrud/dbConnection";
const emit = defineEmits<{ (e: "logedIn"): void }>();
const input = ref();
let emailErr = ref(false);
let passwordErr = ref(false);
let email = ref<string>("");
let password = ref<string>("");
let isLoading = ref<boolean>(false);
let submit = () => {
  emailErr.value = false;
  isLoading.value = true;
  passwordErr.value = false;
  let logedIn = logIn(email.value, password.value) 
  setTimeout(()=>{
    if (logedIn) {
      email.value = "";
      password.value = "";
      emit("logedIn");
      router.push({ name: "home" });
    } else {
      emailErr.value = true;
      passwordErr.value = true;
    }
    isLoading.value = false
  }
  ,600)
  };

const vMyDirective = {
  mounted: () => input.value.focus(),
};
</script>
<template>
  <div v-my-directive>
    <form @submit.prevent="submit">
      <div class="shadow-lg mb-8 rounded-lg px-2">
        <label
          for="email"
          class="text-xl"
          :class="emailErr ? 'text-red-700' : ''"
          ><sup v-if="emailErr" class="text-xs"
            ><font-awesome-icon icon="fas fa-star" size="xs" /></sup
          >E-mail :</label
        >
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
        <label
          for="password"
          :class="passwordErr ? 'text-red-700' : ''"
          class="text-xl"
        >
          <sup v-if="passwordErr" class="text-xs"
            ><font-awesome-icon icon="fas fa-star" size="xs" /></sup
          >Password :</label
        >
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
