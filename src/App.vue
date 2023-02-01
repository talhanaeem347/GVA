<script setup lang="ts">
import { onAuthStateChanged } from "@firebase/auth";
import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { auth } from "@/utilites/firebase/firbase";
import useStore from "@/store/pinia";
import UseModal from "@/views/UserAuth.vue";
const store = useStore();
const vMyDirective = {
  mounted: () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        store.setUser({
          userId: user.uid,
          userName: user.displayName ? user.displayName : user.uid,
          email: user.email!,
          photoUrl: user.photoURL
            ? user.photoURL
            : "https://www.seekpng.com/png/detail/421-4219874_icone-homem-png-man-icon-png.png",
          phonNumber: user.phoneNumber!,
        });
        store.logedIn();
        store.closeLoginModal();
      } else {
        store.openLoginModal();
        store.logedOut();
      }
    });
  },
};
</script>
<template>
  <!-- <div v-my-directive class="h-screen bg-zinc-300"> -->
  <div id="bg" v-my-directive class="h-screen flex flex-col justify-between">
    <div class="h-12">
      <div class="fixed z-10 w-full">
        <component :is="AppHeader"> </component>
      </div>
    </div>
    <div class="h-screen  py-5">
      <router-view></router-view>
      
    </div>
    <div class=" bg-yellow-100  overflow-auto  w-full">
      <component :is="AppFooter"> </component>
    </div>
    <teleport to="body">
      <component :is="UseModal"></component>
    </teleport>
  </div>
</template>
<style>
#bg{
  background-image: url('https://images4.alphacoders.com/153/thumb-1920-153318.jpg');
  background-position: center;
  background-repeat: no-repeat;
  
}
</style>