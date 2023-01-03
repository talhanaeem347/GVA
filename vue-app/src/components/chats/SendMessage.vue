<script setup lang="ts">
import useStore from "@/store/pinia";
import { ref } from "vue";
import { isEmpty } from "@/controler/utilities/validator";
import { sendMessage } from "@/controler/userCrud/dbConnection";
const store = useStore();
let textarea = ref<HTMLInputElement>();
let message = ref<string>("");
let send = () => {
  if (isEmpty(message.value)) showBtn.value = false;
  else {
    sendMessage(message.value, store.getUser.userId, store.getUser.userName);
    message.value = "";
    showBtn.value = false;
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
        <input
          @keyup="message.length ? (showBtn = true) : (showBtn = false)"
          @keyup.enter="send"
          type="text"
          placeholder="Write your messaqge"
          v-model="message"
          ref="textarea"
          class="text-xl h-10 pb-2 pt-1 flex items-start px-2 bg-green-50"
        />
        <button
          @click="send"
          :disabled="!showBtn"
          class="border-l pr-2 pb-1 disabled:opacity-50 disabled:text-gray-400 rounded-r-full"
        >
          <font-awesome-icon
            icon="fa-solid fa-paper-plane"
            style="rotate: 45deg"
            size="2xl"
          />
        </button>
      </div>
    </div>
  </div>
</template>
