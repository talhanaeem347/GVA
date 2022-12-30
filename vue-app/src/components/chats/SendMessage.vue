<script setup lang="ts">
import { chatsRef } from "@/utilites/firebase/firbase";
import { push, set } from "firebase/database";
import useStore from "@/store/pinia";
import { format } from "date-fns";
import { ref } from "vue";
const store = useStore();
let textarea = ref<HTMLInputElement>();
let message = ref<string>("");
let newLine = () => (message.value += "\n");
let send = () => {
  if (message.value) {
    const newChatRef = push(chatsRef);
    set(newChatRef, {
      from: store.getUser.userId,
      name: store.getUser.userName,
      body: message.value,
      time: format(new Date(), "hh:mm"),
      date: format(new Date(), "MM/dd/yy"),
    });
    message.value = "";
  }
};

let showBtn = ref(false);
const vMyDirective = {
  mounted: () => {
    textarea.value?.focus();
  },
};
</script>
<template>
  <div v-my-directive class="w-96 flex border flex-col items-center justify-center">
    <div class="border w-full ">
      <div
        class="lg:w-52 pb-1 h-10 max-h-24 flex flex-col  justify-end overflow-auto"
      >
        <pre
          v-if="message"
          :class="message ? 'opacity-100' : 'opacity-0'"
          class="z-30 text-sm shadow w-44 text-ellipsis h-fit"
          >{{ message }} </pre
        >
      </div>
      <div class="border-2 flex rounded-r-full overflow-auto">
        <textarea
          type="text"
          @keyup="message ? (showBtn = true) : (showBtn = false)"
          @keyup.insert="newLine"
          @keyup.enter="send"
          placeholder="Write your messaqge"
          v-model="message"
          ref="textarea"
          class="h-6 flex items-start w-44 px-2"
        ></textarea>
        <button
          @click="send"
          :disabled="!showBtn"
          class="border-l px-2 disabled:bg-gray-100 disabled:text-gray-400 rounded-r-full"
        >
          send
        </button>
      </div>
    </div>
  </div>
</template>
