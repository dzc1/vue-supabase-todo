<template>
  <!-- Adding a new task -->
  <div class="mb-6">
    <div class="flex flex-col px-4">
      <input
        class="inputField mb-4"
        placeholder="Add a Task Title"
        v-model="newTodo"
        type="text"
        name="newTodo"
        id="name"
      />
      <input
        class="inputField mb-4"
        placeholder="Adda a Task Decription"
        v-model="newDescription"
        type="text"
        name="newDescription"
        id="description"
      />
      <button
        class="inline-block py-2 px-4text-sm leading-5 text-green-50 bg-green-800 hover:bg-green-700 font-medium focus:ring-2 focus:ring-green-800 focus:ring-opacity-50 rounded-md"
        type="submit"
        @click.prevent="addTodo"
      >
        Add
      </button>
    </div>
  </div>
  <p v-if="emptyNew" class="text-red-600 font-bold mt-5 ml-10">
    {{ errorInput }}
  </p>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useTaskStore } from "../store/task";
const emit = defineEmits(["childAddTodo"]);

// New Todo dialog variables
let newTodo = ref(""); // newTodo input field
let newDescription = ref(""); // description inputField
let emptyNew = ref(false); // error box initially hidden
let errorInput = ref(""); // error message variable

function addTodo() {
  if (newTodo.value === "") {
    emptyNew.value = true; // shows error
    errorInput.value = "Title & Description are needed";
    setTimeout(() => {
      emptyNew.value = false; // hides error
    }, 1000);
  }
  // shows error message
  else {
    emptyNew.value = false; // hides error message
    emit("childAddTodo", newTodo.value, newDescription.value); // sends info to parent component
    newTodo.value = ""; // clears Task input field
    newDescription.value = ""; // clears Task input field
  }
}
</script>

<style></style>
