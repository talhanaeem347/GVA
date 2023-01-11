<script setup lang="ts">
import { ref } from "vue";
import { isEqual, isEmpty } from "@/controler/utilities/validator";
import { creteUser } from "@/controler/userCrud/dbConnection";
let email = ref("");
let emailErr = ref(false);
let password = ref("");
let cPassword = ref("");
let passwordErr = ref(false);
let isLoading = ref(false);
let submit = () => {
  emailErr.value = false;
  passwordErr.value = false;
  let userCreated = false;
  if (isEmpty(password.value)) passwordErr.value = true;
  else if (isEqual(password.value, cPassword.value))
    userCreated = creteUser(email.value, password.value);
  else passwordErr.value = true;
  if (!passwordErr.value)
    setTimeout(() => {
      if (userCreated) {
        email.value = "";
        password.value = "";
        cPassword.value = "";
      } else {
        emailErr.value = true;
        passwordErr.value = true;
      }
      isLoading.value = false;
    }, 600);
};
</script>
<template>
  <div>
    <form @submit.prevent="submit">
      <div class="shadow-lg mb-8 rounded-lg px-2">
        <label
          for="email"
          class="text-xl"
          :class="emailErr ? 'text-red-700' : ''"
        >
          <sup v-if="emailErr" class="text-xs"
            ><font-awesome-icon icon="fas fa-star" size="xs"
          /></sup>
          E-mail :</label
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
          class="text-xl"
          :class="passwordErr ? 'text-red-700' : ''"
        >
          <sup v-if="passwordErr" class="text-xs"
            ><font-awesome-icon icon="fas fa-star" size="xs"
          /></sup>
          Password :</label
        >
        <input
          type="password"
          id="password"
          placeholder="Password@123"
          v-model="password"
          class="text-xl w-full pb-1 px-2"
        />
      </div>
      <div class="shadow-lg mb-4 rounded-lg px-2">
        <label
          for="cPassword"
          class="text-xl"
          :class="passwordErr ? 'text-red-700' : ''"
        >
          <sup v-if="passwordErr" class="text-xs"
            ><font-awesome-icon icon="fas fa-star" size="xs"
          /></sup>
          Confirm Password :</label
        >
        <input
          type="password"
          id="cPassword"
          placeholder="Password@123"
          v-model="cPassword"
          class="text-xl w-full pb-1 px-2"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-300 hover:bg-indigo-400 py-1 rounded-md text-lg"
      >
        <span v-if="!isLoading">Create Account</span>
        <span v-else>⏳</span>
      </button>
    </form>
  </div>
</template>
