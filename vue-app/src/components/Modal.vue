<script setup lang="ts">
import LogInWithEmail from "./userCrud/LogInWithEmail.vue";
const emit = defineEmits<{
  (e:'closeModal'):void
  (e:'signUp'):void
}>()
</script>
<template>
  <div>
    <section
      @click="emit('closeModal')"
      class="fixed inset-0 w-screen h-screen opacity-50 bg-gray-100 z-10"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white px-2 py-5 rounded-lg z-20">
          <div class="border p-2 rounded-lg">
            <h1
              class="border bg-gradient-to-r from-violet-500 to-rose-500 text-center mb-4 text-xl text-white rounded-md"
            >
              <slot name="title">
                <span > Sign In </span>
              </slot>
            </h1>
            <div class="border p-2 rounded">
              <slot name="body">
                <component
                  :is="LogInWithEmail"
                ></component>
              </slot>
            </div>
            <div class="">
              <p class="text-center mt-2 italic">Or</p>
              <slot name="footer">
                <div
                  class="flex justify-between  px-2"
                >
                  <p class="text-lg text-center italic">
                    create a new Account?
                  </p>
                  <button
                    @click=" emit('signUp')"
                    class="text-sm hover:underline focus:text-purple-500 text-blue-400"
                  >
                    Sign Up
                  </button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
