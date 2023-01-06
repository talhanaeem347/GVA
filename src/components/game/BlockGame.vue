<script setup lang="ts">
import { ref } from 'vue';
import { cities } from '@/assets/data'
const props = defineProps<{ index: number }>()
const emit = defineEmits<{
  (e: 'end', country: string): void
}>()
let select = (e: MouseEvent) => {
  let t = e.target as HTMLElement;  
  let c = t.childNodes[0] as HTMLElement;
  emit('end', c.innerText)

}

</script>
<template>
  <section  class="w-full">
    <h1 class="text-2xl font-semibold text-center ">{{ cities[props.index].name }}</h1>
    <div  class="container  mx-auto">
      <div class="flex flex-wrap flex-row  justify-evenly  m-4">
        <div class="lg:w-1/3 md:w-1/3 w-1/2  h-fit   p-3" @click="select">
          <div class="flex relative lg:h-52  md:h-52 sm:h-32 h-20   ">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://i.pinimg.com/originals/10/19/81/101981fadfbcafbbc7acb9b3feabb955.png">
            <div
              class=" relative z-10 w-full border-4 border-gray-200  flex justify-center items-end opacity-0 hover:opacity-100 cursor-pointer ">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3 bg-green-50 h-fit rounded-2xl px-2 pb-1  ">
                Pakistan</h1>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/3 w-1/2 h-fit p-3  " @click="select">
          <div class="flex relative lg:h-52  md:h-52 sm:h-32 h-20">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://c8.alamy.com/zooms/9/0e502161bfbe4d3fb7b2d62cdd46b217/dwdjpt.jpg">
            <div
              class=" relative z-10 w-full border-4 border-gray-200  flex justify-center items-end opacity-0 hover:opacity-100 cursor-pointer ">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3 bg-green-50 h-fit rounded-2xl px-2 pb-1  ">
                Japan</h1>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/3 w-1/2 f-fit p-3" @click="select">
          <div class="flex relative lg:h-52 md:h-52 sm:h-32 h-20">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://media.istockphoto.com/id/682783694/photo/flag-of-saudi-arabia.jpg?s=170667a&w=0&k=20&c=Hbbl7LKP6EYSMoRf9Piqc2-uCM_ANd1RXKdjnnGq1qo=">
            <div
              class=" relative z-10 w-full border-4 border-gray-200  flex justify-center items-end opacity-0 hover:opacity-100 cursor-pointer ">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3 bg-green-50 h-fit rounded-2xl px-2 pb-1  ">
                Saudi Arabia</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>