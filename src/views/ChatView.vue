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
  <section v-my-directive class="lg:mt-5 md:mt-5 h-full">
    <div class="lg:w-1/2 md:w-1/2 w-full mx-auto lg:h-5/6 h-full  lg:border-8 md:border-8 rounded-2xl">
      <h1 class="text-3xl justify-center font-bold my-3 lg:flex md:flex hidden ">Chat</h1>
      <div
        class=" lg:w-3/4 md:w-3/4 w-full h-5/6 mx-auto p-2 flex flex-col justify-between rounded-xl bg-white"
      >
        <div class="h-5/6 overflow-auto">
          <component :is="Messages"></component>
        </div>

        <div class="mx-auto -mb-5 w-fit " >
          <component :is="SendMessage" class=" "></component>
        </div>
      </div>
    </div>
  </section>
</template>
