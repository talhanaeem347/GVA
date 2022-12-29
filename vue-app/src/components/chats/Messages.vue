<script setup lang="ts">
import { onChildAdded, onValue } from "@firebase/database";
import { ref } from "vue";
import { chatsRef } from "@/utilites/firebase/firbase";
import useStore from "@/store/pinia";
const store = useStore();
// const uid = ref(store.getUserId())
let chats = ref<
  Array<{
    name: string;
    body: string;
    date: string;
    time: string;
    from: string;
  }>
>([]);
const vMyDirective = {
  mounted: async () => {
    // onValue(chatsRef, (snapshoot) => {
    //   chats.value = snapshoot.val();
    //  });
    onChildAdded(chatsRef, (data) => {
      // console.log(data.val());
      
      chats.value.push(data.val());
      
    });
  },
};
</script>
<template>
  <div v-my-directive class="">
    <div
      v-for="chat in chats"
      :key="chat.time"
      class="flex p-2 flex-col"
      :class="chat.from == store.getUser.userId ? 'items-end' : 'items-start'"
    >
      <div
        class="w-fit max-w-xs px-2 rounded-2xl  flex flex-col py-1"
        :class="
          chat.from == store.getUser.userId
            ? 'rounded-bl-none items-start bg-green-200 '
            : 'rounded-br-none items-end bg-gray-200'
        "
      >
        <small class="text-xs underline italic">{{ chat.name }}</small>
        <span>
          {{ chat.body }}
        </span>
        <small class="text-xs">{{ chat.time }}</small>
      </div>
    </div>
  </div>
</template>
