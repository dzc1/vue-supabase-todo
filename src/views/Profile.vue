<template>
  <Nav />
  <section class="">
    <section
      class="py-10 md:pb-28 bg-gray-100"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container px-4 mx-auto animate__animated animate__fadeIn">
        <div class="text-center mb-8">
          <span
            class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl"
            >Profile</span
          >
          <img
            class="h-64 w-64 mx-auto mb-6 rounded"
            :src="profiles.avatar_url"
            alt=""
          />
          <h3 class="mb-2 text-xl md:text-2xl font-semibold">
            {{ profiles.username }}
          </h3>
          <span class="text-lg text-coolGray-500 font-medium">{{
            profiles.userDescription
          }}</span>
        </div>
      </div>
    </section>

    <!-- <div
      class="w-3/4 mx-auto my-10 flex flex-col sm:flex-row items-center justify-around gap-y-5"
    >
      <img
        :src="profiles.avatar_url"
        class="w-48 h-48 rounded-full border-2 border-green-400 shadow-lg object-cover"
        alt="avatar"
      />

      <p class="font-mono text-3xl font-bold text-green-500">
        {{ profiles.username }}
      </p>
    </div> -->

    <!-- Upload a file Wrapper -->
    <!-- <div
      class="mx-auto w-3/4 items-center flex flex-col sm:flex-row justify-around gap-y-5"
    >
      <label
        for="avatar"
        class="block border border-black rounded text-center p-2 mx-auto w-3/4 cursor-pointer sm:w-60 dark:border-white dark:text-white"
      >
        <input
          type="file"
          class="hidden"
          @change="handleFileChange"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />Select a file</label
      >
      <button
        @click="uploadFile"
        class="font-mono block w-full sm:w-60 mx-auto btn-template bg-sky-500 hover:bg-sky-600"
      >
        Upload
      </button>
    </div> -->

    <!-- // Back to Dashboard button -->
    <!-- <router-link to="/">
      <button
        class="font-mono block w-full sm:w-60 mx-auto my-20 btn-template bg-green-500 hover:bg-green-600"
      >
        Back to Dashboard
      </button>
    </router-link> -->

    <!-- Confirmation message -->
    <!-- <p
      v-if="okMsg"
      class="mx-auto w-3/4 mt-2 p-5 rounded-md text-center bg-gray-100 dark:bg-gray-400 font-bold font-mono text-green-500 italic"
    >
      {{ okMsg }}
    </p> -->

    <!-- Info to Update Wrapper -->
    <!-- <form
      @submit.prevent="updateProfile"
      class="max-w-screen-sm mx-auto w-3/4 p-10 flex flex-col gap-y-5 bg-gray-200 rounded-md shadow-lg dark:bg-gray-500"
    >
      <div class="flex flex-col mb-2">
        <label for="username" class="mb-1 text-lg text-green-500"
          >Username</label
        >
        Input wrapper
        <div class="flex items-center">
          <input
            type="text"
            required
            :disabled="disabledUsername"
            placeholder="add a username"
            class="w-4/5 p-2 pl-12 text-gray-500 rounded bg-icon bg-avatar focus:outline-none disabled:bg-slate-300"
            id="username"
            v-model="profiles.username"
          />
          <button
            class="w-1/5 bg-btn bg-edit btn-template bg-slate-300 hover:bg-slate-400"
            @click.prevent="toggleUsername"
          ></button>
        </div>
      </div>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-lg text-green-500">Email</label>
        <input
          type="text"
          placeholder="random@names.com"
          disabled
          class="p-2 pl-12 text-gray-500 rounded bg-icon bg-email focus:outline-none disabled:bg-slate-300"
          id="email"
          v-model="email"
        />
      </div>
      <div class="flex flex-col mb-2">
        <a target="_blank" class="mb-1 w-4/5" :href="'//' + profiles.website">
          <label for="website" class="text-lg text-green-500 cursor-pointer"
            >Website</label
          >
        </a>
        Input wrapper
        <div class="flex items-center">
          <input
            type="text"
            :disabled="disabledWebsite"
            required
            placeholder="add your website"
            class="w-full p-2 pl-12 text-gray-500 rounded bg-icon bg-website focus:outline-none disabled:bg-slate-300"
            id="website"
            v-model="profiles.website"
          />
          <button
            class="w-1/5 bg-btn bg-edit btn-template bg-slate-300 hover:bg-slate-400"
            @click.prevent="toggleWebsite"
          ></button>
        </div>
      </div>

      Save Changes Button
      <button
        @submit="updateProfile"
        class="block w-full sm:inline sm:w-48 font-mono mt-5 py-2 px-6 rounded self-start text-white font-bold bg-green-500 border-solid border-2 border-transparent hover:border-green-500 hover:bg-white hover:text-green-500"
      >
        Save Changes
      </button>

      Error Handling
      <p
        v-if="errorMsg"
        class="mt-2 p-5 rounded-md text-center bg-gray-100 dark:bg-gray-400 font-bold font-mono text-red-600 italic"
      >
        {{ errorMsg }}
      </p>
    </form> -->
  </section>
  <Footer />
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useProfileStore } from "../store/profile";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import Footer from "../components/Footer.vue";
import Nav from "../components/Nav.vue";
const profiles = ref([]);

// Getting tasks from supabase
async function getProfile() {
  const arrayProfile = await useProfileStore().fetchProfile();
  profiles.value = arrayProfile[0];
}
getProfile();
const user = useUserStore().user;
const selectedFile = ref(null);
// Getting data from user
const email = ref(null);
email.value = user.email;
// Disabled Inputs
const disabledUsername = ref(true);
const disabledWebsite = ref(true);
const disabledAvatar = ref(true);
const newPassword = ref(null);
const confirmNewPassword = ref(null);
// Messages
const okMsg = ref(null);
const errorMsg = ref(null);
// Avatar variables
let avatarImg = ref(null);
let path = ref(null);
const redirect = useRouter();
function toggleUsername() {
  disabledUsername.value = !disabledUsername.value;
}
function toggleWebsite() {
  disabledWebsite.value = !disabledWebsite.value;
}
function toggleAvatar() {
  disabledAvatar.value = !disabledAvatar.value;
}
function handleFileChange(event) {
  selectedFile.value = event.target.files[0];
  console.log(selectedFile.value.name);
}
async function uploadFile() {
  const uuid = self.crypto.randomUUID().split("-")[0];
  path.value = uuid;
  await useProfileStore().uploadFile(uuid, selectedFile.value);
  getProfileImg();
}
async function getProfileImg() {
  const imgUrl = await useProfileStore().getFile(path.value);
  profiles.value.avatar_url = imgUrl;
}
async function updateProfile() {
  await useProfileStore().updateProfile(
    profiles.value.username,
    profiles.value.website,
    profiles.value.avatar_url
  );
  okMsg.value = "Profile updated succesfully";
  setTimeout(() => {
    okMsg.value = null;
  }, 5000);
  if (
    newPassword !== null &&
    confirmNewPassword !== null &&
    newPassword.value === confirmNewPassword.value
  ) {
    try {
      newPassword.value = useUserStore().user.password;
      // console.log(newPassword.value);
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
</script>

<style></style>
