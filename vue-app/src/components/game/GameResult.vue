<script setup lang="ts">
import { ref } from 'vue';
import { cities } from '@/assets/data'
let rank = ref<string>()
const props = defineProps<{
  item: {
    contry: string,
    index: number
  }
}>()
const vMyDirective = ({
  mounted: () => {
    if (props.item.contry === cities[props.item.index].cName)
      rank.value = 'Well done'
    else
      rank.value = `Oops correct answer is ${cities[props.item.index].cName}`
  },
})
</script>

<template>
  <section v-my-directive class="w-full">

    <div class="border w-64 py-16 flex items-center justify-center mx-auto my-2 bg-indigo-300  rounded-lg flex-col  ">
      <p class="text-center text-xl text-red-400">{{ rank }}</p>
    </div>
  </section>
</template> 