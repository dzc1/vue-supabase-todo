<template>
  <section
    class="flex items-center h-screen pt-16 bg-white bg-[url('flex-ui-assets/elements/pattern-white.svg')]"
  >
    <div class="container px-4 mx-auto mb-16">
      <div class="w-full md:w-3/5 lg:w-1/2 animate__animated animate__fadeIn">
        <div class="max-w-sm mx-auto">
          <div class="mb-6 text-center">
            <a class="inline-block mb-6" href="#">
              <img
                class="h-8"
                src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg"
                alt=""
              />
            </a>
            <h3 class="mb-4 text-2xl md:text-3xl font-bold font-title">
              Register to TaskApp
            </h3>
            <img src="" alt="" />
            <p class="text-lg text-gray-600 font-body">
              Start Organizing your tasks todays!
            </p>
            <p v-if="errorMsg" class="text-md text-red-600 font-body">
              {{ errorMsg }}
            </p>
          </div>
          <form @submit.prevent="signUp">
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
              <input
                class="inputField"
                type="password"
                placeholder="************"
                v-model="password"
                id="password"
              />
            </div>
            <div class="mb-4">
              <label class="inputFieldLabel" for="">Confirm Password</label>
              <input
                class="inputField"
                type="password"
                placeholder="************"
                v-model="confirmPassword"
                id="confirmPassword"
              />
            </div>
            <button class="btnPrimary" type="submit">Sign In</button>
            <p class="text-center">
              <span class="font-medium">Have an account? </span>

              <PersonalRouter
                class="inline-block font-medium text-green-800 hover:text-green-900 hover:underline"
                :route="route"
                :buttonText="buttonText"
              />
            </p>
          </form>
        </div>
      </div>
    </div>
    <img
      class="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover animate__animated animate__fadeIn"
      src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt=""
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import router from "../router";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

// Create Data
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Component Redirections
const route = "/auth";
const buttonText = "Log In";

// Function To Sign Up User to supaBase with timeOut() method for showingErrors good-ux

async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      // if (error) throw error;
      redirect.push({ path: "/auth" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}

// Same function as above but without using pinia

// async function signUpWithoutPinia() {
//   if (password.value === confirmPassword.value) {
//     try {
//       const { error } = await supabase.auth.signUp({
//         email: email.value,
//         password: password.value,
//       });
//       if (error) throw error;
//       redirect.push({ path: "/auth" });
//     } catch (error) {
//       errorMsg.value = error.message;
//       setTimeout(() => {
//         errorMsg.value = null;
//       }, 5000);
//     }
//     return;
//   }
//   errorMsg.value = "Passwords do not match";
//   setTimeout(() => {
//     errorMsg.value = null;
//   }, 5000);
// }
</script>

<style></style>
