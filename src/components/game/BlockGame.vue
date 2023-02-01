<script setup lang="ts">
import { cities } from "@/assets/data";
const props = defineProps<{ index: number }>();
const emit = defineEmits<{
  (e: "end", country: string): void;
}>();
let select = (country: string) => emit("end", country);
</script>
<template>
  <section class="w-full">
    <h1 class="text-2xl font-semibold text-center">
      {{ cities[props.index].name }}
    </h1>
    <div class="mb-4">
      <div class="flex flex-wrap flex-row justify-evenly">
        <div class="lg:w-1/3 md:w-1/3 w-1/2 h-fit p-3">
          <div
            class="flex relative lg:h-48 md:h-48 sm:h-32 h-20 "
            @click="select('Pakistan')"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center rounded-md border"
              src="https://i.pinimg.com/originals/10/19/81/101981fadfbcafbbc7acb9b3feabb955.png"
            />
            <div
              class="relative w-full border-2 border-gray-200 flex justify-center items-end lg:opacity-0 md:opacity-0 hover:opacity-100 cursor-pointer"
            >
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3 bg-green-50 h-fit rounded-2xl px-2 pb-1"
              >
                Pakistan
              </h1>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/3 w-1/2 h-fit p-3">
          <div
            class="flex relative lg:h-48 md:h-48 sm:h-32 h-20"
            @click="select('Japan')"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center rounded-md border"
              src="https://c8.alamy.com/zooms/9/0e502161bfbe4d3fb7b2d62cdd46b217/dwdjpt.jpg"
            />
            <div
              class="relative w-full border-2 border-gray-200 flex justify-center items-end lg:opacity-0 md:opacity-0 hover:opacity-100 cursor-pointer"
            >
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3 bg-green-50 h-fit rounded-2xl px-2 pb-1"
              >
                Japan
              </h1>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/3 w-full h-fit p-3 ">
          <div
            class="flex relative lg:h-48 md:h-48 sm:h-32 h-20"
            @click="select('Saudi Arabia')"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center rounded-md border"
              src="https://static.vecteezy.com/system/resources/thumbnails/008/040/674/original/realistic-3d-rendering-looping-saudi-arabia-flag-animation-background-free-video.jpg"
            />
            <div
              class="relative w-full border-2 border-gray-200 flex justify-center items-end lg:opacity-0 md:opacity-0 hover:opacity-100 cursor-pointer"
            >
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3 bg-green-50 h-fit rounded-2xl px-2 pb-1"
              >
              Saudi Arabia
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
