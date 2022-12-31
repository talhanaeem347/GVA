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
  if (message.value === "" || message.value === "\n") {
    showBtn.value = false;
  } else {
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
  showBtn.value = false;
};

let showBtn = ref(false);
const vMyDirective = {
  mounted: () => {
    textarea.value?.focus();
  },
};
</script>
<template>
  <div v-my-directive class="flex w-fit justify-center">
    <div class="w-fit">
      <div class="pb-1 h-10 max-h-24 flex flex-col justify-end overflow-auto">
        <pre
          v-if="message"
          :class="message ? 'opacity-100' : 'opacity-0'"
          class="absolute z-30 bg-green-100 text-sm px-2 shadow w-44 text-ellipsis h-fit"
          >{{ message }} </pre
        >
      </div>
      <div class="flex w-fit bg-green-50 rounded-full">
        <textarea
          type="text"
          @keyup="message ? (showBtn = true) : (showBtn = false)"
          @keyup.insert="newLine"
          @keyup.enter="send"
          placeholder="Write your messaqge"
          v-model="message"
          ref="textarea"
          class="h-6 pb-1 flex items-start px-2 bg-green-50"
        ></textarea>
        <button
          @click="send"
          :disabled="!showBtn"
          class="border-l px-2 disabled:opacity-50 disabled:text-gray-400 rounded-r-full"
        >
          <font-awesome-icon
            icon="fa-solid fa-paper-plane"
            style="rotate: 40deg"
            />
            <!-- size="lg" -->
        </button>
      </div>
    </div>
  </div>
</template>
