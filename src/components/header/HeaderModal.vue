<script setup lang="ts">
import useStore from "@/store/pinia";
const store = useStore();
const emit = defineEmits<{
  (e: "closeModal"): void;
  (e: "isUser", item: { path: string; name: string }): void;
  (e: "logOut"): void;
}>();
const props = defineProps<{
  navList: Array<{ path: string; name: string }>;
}>();
</script>
<template>
  <div class="">
    <section
      @click="emit('closeModal')"
      class="fixed inset-0 w-screen h-screen opacity-50 bg-gray-100 z-10"
    ></section>
    <div class="absolute right-0 z-40 w-40 top-0 h-full ">
      <div class=" rounded-bl-md   bg-indigo-400">
      <div class="px-4 py-3 w-full flex justify-end">
        <button
          @click="emit('closeModal')"
          class="border-2 px-2 rounded bg-slate-200 border-black hover:bg-indigo-300 hover:text-lg"
        >
          <font-awesome-icon icon="fas fa-bars" class="" />
        </button>
      </div>
      <nav
        class="relative z-30 right-0 w-40 flex flex-col h-fit items-start rounded-bl-md"
      >
        <button
          v-for="item in props.navList"
          :key="item.name"
          @click="emit('isUser', item)"
          class="text-white pb-1 px-2 text-xl hover:border-x"
        >
          {{ item.name }}
        </button>
        <div class="pl-2 mb-2">
          <button
            v-if="!store.isLogedIn"
            class="border rounded h-8 w-20 my-1 bg-slate-200 hover:bg-indigo-300 hover:text-lg"
            @click="store.openLoginModal"
          >
            Sign In
          </button>
          <button
            v-else
            class="border rounded h-8 w-20 my-1 bg-slate-200 hover:bg-indigo-300 hover:text-lg"
            @click="emit('logOut')"
          >
            Log out
          </button>
        </div>
      </nav>
    </div>
    </div>
  </div>
</template>
