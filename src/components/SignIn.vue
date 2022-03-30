<template>
  <section
    class="flex items-center h-screen relative pt-16 bg-white bg-[url('flex-ui-assets/elements/pattern-white.svg')]"
  >
    <div class="container px-4 mx-auto mb-16">
      <div class="w-full md:w-3/5 lg:w-1/2 animate__animated animate__fadeIn">
        <div class="max-w-sm mx-auto">
          <div class="mb-6 text-center">
            <router-link class="inline-block mb-6" to="#">
              <img
                class="h-8"
                src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg"
                alt=""
              />
            </router-link>
            <h3 class="appTitle">Log In to TaskApp</h3>
            <p class="appSubtitle">Start Organizing your tasks todays!</p>
            <p v-if="errorMsg" class="text-md text-red-600 font-body">
              {{ errorMsg }}
            </p>
          </div>
          <form @submit.prevent="signIn">
            <div class="mb-6">
              <label class="inputFieldLabel" for="">Email</label>
              <input
                class="inputField"
                type="email"
                placeholder="dave@wuTangfinancial.com"
                v-model="email"
                id="email"
              />
            </div>
            <div class="mb-4">
              <label class="inputFieldLabel" for="">Password</label>

              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <input
                  class="inputField"
                  :type="passwordFieldType"
                  onpaste="return false"
                  placeholder="************"
                  v-model="password"
                  id="password"
                />
                <span
                  class="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                >
                  <EyeIcon
                    :class="[passwordFieldIcon]"
                    @click.prevent="hidePassword = !hidePassword"
                  />
                  <div></div>
                </span>
              </div>
            </div>

            <button class="btnPrimary" type="submit">Sign In</button>
            <p class="text-center">
              <span class="font-medium">Don’t have an account? </span>

              <PersonalRouter
                class="font-medium text-green-800 hover:text-green-900 hover:underline"
                :route="route"
                :buttonText="buttonText"
              />
            </p>
          </form>
        </div>
      </div>
    </div>
    <img
      class="md:absolute md:top-0 md:right-0 mx-auto sm:h-full md:w-2/5 lg:w-1/2 md:object-cover animate__animated animate__fadeIn"
      src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt=""
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
import "animate.css";
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/outline";

// Test Variables

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const hidePassword = ref(true);

// Auth Variables
const email = ref("");
const password = ref("");
const errorMsg = ref("");

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Sign Up";

// vue-router variable
const redirect = useRouter();

// Add Function to Signin through supaBase
async function signIn() {
  try {
    await useUserStore().signIn(email.value, password.value);
    // if (error) throw error;
    redirect.push({ path: "/" });
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
}
</script>

<style></style>
