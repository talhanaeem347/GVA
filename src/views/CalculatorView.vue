<script setup lang="ts">
import { ref } from "vue";
const list = [
  "On",
  "Off",
  "C",
  "AC",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "-",
  "0",
  ".",
  "/",
  "=",
];
let cruntNum = ref("");
let prevNum = ref<string>("0");
let operation = ref("");
let on = ref<boolean>();
let div = ref<HTMLElement>();
let count = ref(1);
// methods:
let findKey = (key: string) => {
  if (key === "On" || key === " ") powerOn();
  if (!on.value) return;
  if (key === "Off" || key === "Escape") powerOff();
  if ("0123456789.".includes(key)) pressed(key);
  if ("+-*/".includes(key)) setOperation(key);
  if (key === "=" || key === "Enter") calculate();
  if (key === "AC" || key === "Delete") clearAll();
  if (key === "C" || key === "Backspace") clear();
};
let powerOff = () => {
  on.value = false;
  clearAll();
};
let powerOn = () => {
  clearAll();
  on.value = true;
};
let setOperation = (operater: string) => {
  prevNum.value === ""
    ? (prevNum.value = cruntNum.value)
    : applayoperatioin(operation.value);
  clear();
  operation.value = operater;
};
let applayoperatioin = (operator: string) => {
  let prev = parseInt(prevNum.value);
  if (operator === "+") prev += +cruntNum.value;
  else if (operator === "-") prev -= +cruntNum.value;
  else if (operator === "*") prev *= +cruntNum.value;
  else if (operator === "/") prev /= +cruntNum.value;
  prevNum.value = String(prev);
  clear();
};
let clear = () => {
  cruntNum.value = "";
  operation.value = "";
};
let clearAll = () => {
  clear();
  prevNum.value = "0";
  count.value = 1;
};
let pressed = (value: string) => {
  if (count.value == 1) prevNum.value = "";
  count.value++;
  cruntNum.value += value;
};
let calculate = () => {
  applayoperatioin(operation.value);
  cruntNum.value = String(prevNum.value);
  prevNum.value = "";
};
let action = (key: string) => {
  let btns = div.value?.children;
  if (".0123456789+-*/".includes(key)) {
    for (let i = 0; i <= btns!.length; i++) {
      let btn = btns![i];
      if (btn?.innerHTML === key) {
        let b = btn as HTMLElement;
        b.classList.contains("bg-gray-50")
          ? b.classList.replace("bg-gray-50", "bg-gray-300")
          : b.classList.replace("bg-gray-300", "bg-gray-50");
      }
    }
  } else if (key === " ") {
    for (let i = 0; i <= btns!.length; i++) {
      let btn = btns![i];
      if (btn?.innerHTML === "On") {
        let b = btn as HTMLElement;
        b.classList.contains("bg-red-500")
          ? b.classList.replace("bg-red-500", "bg-red-700")
          : b.classList.replace("bg-red-700", "bg-red-500");
      }
    }
  } else if (key === "Delete") {
    for (let i = 0; i <= btns!.length; i++) {
      let btn = btns![i];
      if (btn?.innerHTML === "AC") {
        let b = btn as HTMLElement;
        b.classList.contains("bg-red-500")
          ? b.classList.replace("bg-red-500", "bg-red-700")
          : b.classList.replace("bg-red-700", "bg-red-500");
      }
    }
  } else if (key === "Escape") {
    for (let i = 0; i <= btns!.length; i++) {
      let btn = btns![i];
      if (btn?.innerHTML === "Off") {
        let b = btn as HTMLElement;
        b.classList.contains("bg-blue-500")
          ? b.classList.replace("bg-blue-500", "bg-blue-700")
          : b.classList.replace("bg-blue-700", "bg-blue-500");
      }
    }
  } else if (key === "Backspace") {
    for (let i = 0; i <= btns!.length; i++) {
      let btn = btns![i];
      if (btn?.innerHTML === "C") {
        let b = btn as HTMLElement;
        b.classList.contains("bg-blue-500")
          ? b.classList.replace("bg-blue-500", "bg-blue-700")
          : b.classList.replace("bg-blue-700", "bg-blue-500");
      }
    }
  }
};
let keyupEventHandler = (e: KeyboardEvent) => {
  action(e.key);
  findKey(e.key);
};
let keydownEventHandler = (e: KeyboardEvent) => action(e.key);
const vMyDirective = {
  mounted: () => {
    window.addEventListener("keydown", keydownEventHandler);
    window.addEventListener("keyup", keyupEventHandler);
  },
  unmounted: () => {
    powerOff();
    window.removeEventListener("keyup", keyupEventHandler);
    window.removeEventListener("keydown", keydownEventHandler);
  },
};
</script>
<template>
  <section v-my-directive class="flex w-full">
    <div class="mx-auto lg:w-1/2 md:w-1/2 w-full flex justify-center">
      <div class="w-full flex flex-col justify-center  mt-8 pb-8">
        <h1 class="text-3xl text-center text-gray-200 font-bold w-full mt-4 mb-6">
          Calculator
        </h1>
        <div class="mx-auto p-5 bg-teal-600">
          <div>
            <div class="flex justify-end pb-2 px-2">
              <div class="bg-gray-500">
                <span class="border border-black px-2"></span>
                <span class="border border-black px-2"></span>
                <span class="border border-black px-2"></span>
                <span class="border border-black px-2"></span>
              </div>
            </div>
          </div>
          <h1
            v-if="on"
            class="text-xl text-end font-bold border w-80 h-10 mb-4 bg-gray-100 px-2 py-1 overflow-x-auto"
          >
            {{ prevNum }} {{ operation }} {{ cruntNum }}
          </h1>
          <h1
            v-else
            class="text-xl flex items-center font-bold border w-80 item-center h-10 mb-4 bg-gray-100 px-2 overflow-x-auto"
          ></h1>
          <div ref="div" class="grid grid-cols-4 gap-2 w-80">
            <button
              v-for="item in list"
              :key="item"
              class="border text-center text-xl shadow-md"
              :class="
                item === 'On' || item === 'AC'
                  ? 'bg-red-500 text-white hover:bg-red-700 active:bg-red-900'
                  : item === 'Off' || item === 'C'
                  ? 'bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900'
                  : item === '.'
                  ? 'font-bold bg-gray-50  hover:bg-gray-100 active:bg-gray-200'
                  : 'bg-gray-50  hover:bg-gray-100 active:bg-gray-200'
              "
              @click="findKey(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
