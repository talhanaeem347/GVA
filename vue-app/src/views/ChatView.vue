<script setup lang="ts">
import Messages from "@/components/chats/Messages.vue";
import SendMessage from "@/components/chats/SendMessage.vue";
import router from "@/routes";
import useStore from "@/store/pinia";
const store = useStore();
const vMyDirective = {
  mounted: () => (!store.isLogedIn ? router.push({ name: "home" }) : ""),
};
</script>
<template>
  <section v-my-directive class="lg:mt-5 h-full   ">
    <div class=" lg:w-96 w-full border-2  bg-sky-100  mx-aut lg:h-[465px] h-full lg:rounded-2xl lg:p-2 pb-0">
      <div class="lg:h-[400px] h-4/5 overflow-auto">
        <component :is="Messages"></component>
      </div>

      <div class="absolute bottom-0  ">
        <component :is="SendMessage" class=" "></component>
      </div>
    </div>
  </section>
</template>
