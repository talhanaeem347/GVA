<script setup lang="ts">
import Messages from "@/components/chats/ChatMessages.vue";
import SendMessage from "@/components/chats/SendMessage.vue";
import router from "@/routes";
import useStore from "@/store/pinia";
const store = useStore();
const vMyDirective = {
  mounted: () => (!store.isLogedIn ? router.push({ name: "home" }) : ""),
};
</script>
<template>
  <section v-my-directive class="mt-5 h-full">
    <div class="w-1/2 mx-auto h-3/4 border-8 rounded-2xl">
      <h1 class="text-3xl text-center font-bold my-3">Chate</h1>
      <div
        class="border-2 w-3/4 h-5/6 mx-auto p-2 flex flex-col justify-between rounded-xl bg-white"
      >
        <div class="h-5/6 overflow-auto">
          <component :is="Messages"></component>
        </div>

        <div class="mx-auto -mb-5">
          <component :is="SendMessage" class=" "></component>
        </div>
      </div>
    </div>
  </section>
</template>
