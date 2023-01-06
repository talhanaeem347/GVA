<script setup lang="ts">
import { onChildAdded } from "@firebase/database";
import { ref } from "vue";
import {format} from 'date-fns'
import { chatsRef } from "@/utilites/firebase/firbase";
import useStore from "@/store/pinia";
const store = useStore();
let chats = ref<
  Array<{
    name: string;
    body: string;
    date: string;
    from: string;
  }>
>([]);
// format(new Date(chat.date,"hh:mm:ss"))
const vMyDirective = {
  mounted: async () => {
    onChildAdded(chatsRef, (data) => {      
      chats.value.push(
      {
        name:data.val().name,
        body:data.val().body,
        date:format(new Date(data.val().date),"hh:mm"),
        from:data.val().from
      }  
      );
    });    
  },
}
</script>
<template>
  <div v-my-directive class="">
    <div
      v-for="chat in chats"
      :key="chat.body"
      class="flex p-2 flex-col"
      :class="chat.from == store.getUser.userId ? 'items-end' : 'items-start'"
    >
      <div
        class="w-fit max-w-xs px-2 rounded-2xl  flex flex-col py-1 focus:text-red-900 "
        :class="
          chat.from == store.getUser.userId
            ? 'rounded-bl-none items-start bg-green-200 '
            : 'rounded-br-none items-end bg-blue-300'
        "
      >
        <small class="text-xs underline italic">{{ chat.name }}</small>
        <span>
          {{ chat.body }}
        </span>
        <small class="text-xs">{{chat.date}}</small>
      </div>
    </div>
  </div>
</template>
