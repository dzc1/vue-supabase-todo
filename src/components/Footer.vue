<template>
  <section class="bg-white">
    <div class="container px-4 mx-auto">
      <div class="mx-auto max-w-4xl">
        <a class="block md:mx-auto mb-5 max-w-max pt-4" href="#">
          <router-link class="flex items-center" to="/">
            <img
              src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648481844/taskApp/imgs/logo-small_bh8xj2.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </router-link>
        </a>
        <div class="flex flex-wrap justify-center -mx-3 lg:-mx-6">
          <div class="w-full md:w-auto p-3 md:px-6">
            <router-link
              class="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
              to="/"
              >Home</router-link
            >
          </div>
          <div class="w-full md:w-auto p-3 md:px-6">
            <router-link
              class="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
              to="/profile"
              >Profile</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-coolGray-100"></div>
    <div class="container px-4 mx-auto">
      <p
        class="py-10 md:pb-20 text-lg md:text-xl text-coolGray-400 font-medium text-center"
      >
        © {{ time }} TaskApp. All rights reserved. Built with ❤️ by Diego Zito
      </p>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";

//  Print Date
const time = moment().format("YYYY");
</script>

<style></style>
