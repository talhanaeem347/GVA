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
  <div v-my-directive class="h-screen bg-zinc-300">
    <component :is="AppHeader"> </component>
    <router-view></router-view>
    <teleport to="body">
      <component :is="UseModal"></component>
    </teleport>
  </div>
</template>
