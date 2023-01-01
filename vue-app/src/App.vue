<script setup lang="ts">
import { onAuthStateChanged } from "@firebase/auth";
import AppHeader from "@/components/header/AppHeader.vue";
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
  <div v-my-directive class="h-screen bg-zinc-300 ">
    <div class="fixed z-40 w-full" >

      <component   :is="AppHeader"> </component>
    </div>
    <div class="absolute inset-0 pt-16 pb-5">

      <router-view></router-view>
    </div>
      <teleport to="body">
      <component :is="UseModal"></component>
    </teleport>
  </div>
</template>
