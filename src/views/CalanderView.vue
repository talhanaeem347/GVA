<script setup lang="ts">
import { computed, ref } from "vue";
let days = ref(["sun", "mon", "tue", "wed", "thu", "fri", "sat"]);
let date = ref(new Date().getDate());
let month = ref<number>(new Date().getMonth());
let year = ref<number>(new Date().getFullYear());
let bgChange = ref(false)
let timer = ref<number>(0);
let startDayOfCurrentMonth = () =>
  new Date(year.value, month.value, 1).getDay();
let daysInCurrentMonth = () => new Date(year.value, month.value, 0).getDate();
let next = () => {
  if (month.value >= 11) {
    month.value = 0;
    year.value++;
  } else month.value++;
};
let prev = () => {
  if (month.value <= 0) {
    month.value = 11;
    year.value--;
  } else month.value--;
};
let monthName = computed(() =>
  new Date(year.value, month.value).toLocaleString("default", { month: "long" })
);
const vMyDirective = {
  mounted:()=>{
    setInterval(()=>bgChange.value = !bgChange.value,500)   
  },
  unmounted:()=> {
    clearInterval(timer.value);
  },
}
</script>
<template>
  <section v-my-directive class="w-full h-full">

    <div  class="lg:w-1/2 md:w-1/2 sm:w-2/3 mx-auto my-3 text-xl mt-5">
      <h1 class="text-3xl font-bold text-center">Calender</h1>
    <div class="flex justify-between py-2 px-4 mt-5 bg-indigo-400">
      <h1 class="text-xl text-center font-bold ">
        {{ monthName }}
      </h1>
      <h1 class="text-xl text-center font-bold">
        {{ year }}
      </h1>
    </div>
    <div class="bg-green-100">
      <section class="flex ">
        <div
          v-for="day in days"
          :key="day"    
          class="w-[14.28%] p-2 text-center font-semibold"
        >
          {{ day }}
        </div>
      </section>
      <section 
      class="grid grid-cols-7  p-2 h-60 overflow-hidden"
      >
        <div
          v-for="day in startDayOfCurrentMonth()"
          :key="day"
          class="min-w-[14.28%] py-2 text-center opacity-25"
        >
          {{ day }}
        </div>
        <div
          v-for="day in daysInCurrentMonth()"
          :key="day"
          :class="day === date && bgChange ? 'font-bold bg-purple-400' :  ''"
          class="min-w-[14.28%] py-2 text-center"
        >
          {{ day }}
        </div>
      </section>
      
      <div class="flex justify-between px-6 py-2">
        <button
        @click="prev"
        class="text-xl text-center font-semibold rounded-md bg-blue-400 hover:bg-blue-500 px-2 pb-1"
        >
        <font-awesome-icon icon="fa-solid fa-angles-left" size="lg"/>
        </button>
        <button
          @click="next"
          class="text-xl text-center font-semibold rounded-md bg-blue-400 hover:bg-blue-500 px-2 pb-1"
        >
          <font-awesome-icon icon="fa-solid fa-angles-right" size="lg"/>
        </button>
      </div>
    </div>
  </div>
</section>
</template>
