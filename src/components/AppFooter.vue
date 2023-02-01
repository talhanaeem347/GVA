<script setup lang="ts"></script>
<template>
  <section class="w-full h-full">
    <footer class="text-gray-600 body-font bg-yellow-100 h-full ">
      <div class="flex flex-wrap h-full items-center justify-between  px-10">
        <div class="border-r-2 border-black lg:w-1/4 md:w-1/5 w-1/3 my-2">
          <router-link
            to="/"
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 "
          >
            <img src="@/assets/logo.png" alt=" logo" class="border w-20 h-10" />
          </router-link>
        </div>
        <div class="lg:w-1/4 md:w-2/5 w-2/3 my-2 ">
          <div
            class="text-sm text-gray-500 flex justify-center"
          >
          <span>
              © 2023 Talha —
            </span>
            <a
              href="#"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >@developer</a
            >
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/5 w-1/2 my-2">
          <router-link
            to="/feedback"
            class="w-fit px-2 mx-auto text-lg hover:border-x border-black text-blue-400 underline "
            >Suggestions</router-link
          >
        </div>
        <div class="lg:w-1/4 md:w-1/5 w-1/2 my-2">
          <div
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a href="#" class="text-gray-500">
              <font-awesome-icon icon="fab fa-facebook-f" size="lg" />
            </a>
            <a href="#" class="ml-3 text-gray-500">
              <font-awesome-icon icon="fab fa-twitter" size="lg" />
            </a>
            <a href="#" class="ml-3 text-gray-500">
              <font-awesome-icon icon="fab fa-instagram" size="lg" />
            </a>
            <a href="#" class="ml-3 text-gray-500">
              <font-awesome-icon icon="fab fa-linkedin-in" size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
