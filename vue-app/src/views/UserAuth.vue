<script setup lang="ts">
import useStore from "@/store/pinia";
import Modal from "@/components/Modal.vue";
import SignUp from "@/components/userCrud/SignUp.vue";
import Google from "@/components/userCrud/Google.vue";
import { ref } from "vue";
const store = useStore();
let isSignUpModalOpen = ref(false)
let closeSignUpModal = () => isSignUpModalOpen.value = false;  
let closeModal = () => {
    closeSignUpModal();
    store.closeLoginModal()
};
</script>
<template>
  <div>
    <component
      v-if="store.getLoginModal"
      @closeModal="closeModal"
      @signUp="isSignUpModalOpen = true"
      :is="Modal"
      ><template v-if="isSignUpModalOpen" #title> Sign Up </template>
      <template v-if="isSignUpModalOpen" #body>
        <component :is="SignUp"></component>
      </template>
      <template #footer>
        <component v-if="isSignUpModalOpen" :is="Google"></component>
      </template>
    </component>
  </div>
</template>
