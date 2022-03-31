<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link class="flex items-center" to="/">
        <img
          src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648481844/taskApp/imgs/logo-small_bh8xj2.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </router-link>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-green-800 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li class="flex items-center justify-center">
            <router-link class="flex items-center" to="/">
              <p
                class="text-center block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
              >
                Home
              </p></router-link
            >
          </li>
          <li class="flex items-center justify-center">
            <router-link class="flex items-center" to="/profile">
              <p
                class="text-center block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
              >
                Profile
              </p>
            </router-link>
          </li>
          <li class="flex items-center justify-center">
            <p
              href="#"
              class="text-center block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
            >
              Welcome Back <span class="font-bold">{{ userName }}</span>
            </p>
          </li>
          <li class="flex justify-center pt-4 md:pt-0">
            <button
              class="ml-8 inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-800 hover:bg-green-700 font-medium focus:ring-2 focus:ring-green-800 focus:ring-opacity-50 rounded-md"
              type="submit"
              @click.prevent="signOut"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
const router = useRouter();

// get user from store
const user = computed(() => useUserStore().$state.user);

//Print User into the UI
const userEmail = useUserStore().user.email;
const userName = userEmail.split("@")[0];

// logout function2
async function signOut() {
  await useUserStore().signOut();
  router.push({ path: "/auth" });
}
</script>

<style></style>
