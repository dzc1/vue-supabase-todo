<template>
  <!-- New Shit -->

  <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
    <div class="group h-full">
      <div
        class="group relative h-full px-8 pt-16 pb-8 bg-white rounded-md shadow-md hover:shadow-xl transition duration-200"
      >
        <div
          class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-white rounded-full transition duration-200"
        >
          <div
            class="inline-flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-full p-3"
          >
            <!-- Enter icon Here -->
            <AnnotationIcon className="h-2 w-2 " />
          </div>
        </div>
        <h3 class="mb-4 text-xl leading-7 text-coolGray-900 font-bold max-w-xs">
          {{ item.title }}
        </h3>
        <p
          class="text-coolGray-500 group-hover:text-coolGray-600 font-medium transition duration-200"
        >
          {{ item.description }}
        </p>

        <!-- Buttons to ontrol the task -->
        <div class="flex justify-between pt-4">
          <button
            v-if="!item.is_complete"
            class="text-white p-2 rounded bg-green-600 hover:bg-green-500"
            @click="toggleTodo()"
          >
            <CheckIcon class="w-6 h-6" />
          </button>
          <button
            v-if="item.is_complete"
            class="text-white p-2 rounded bg-indigo-400 hover:bg-indigo-500"
            @click="toggleTodo()"
          >
            <RewindIcon class="w-6 h-6" />
          </button>
          <button
            class="text-white p-2 rounded bg-yellow-400 hover:bg-yellow-500"
            @click="toggleEdit()"
          >
            <PencilIcon class="w-6 h-6" />
          </button>

          <button
            class="text-white p-2 rounded bg-rose-500 hover:bg-rose-400"
            @click="remove()"
          >
            <TrashIcon class="w-6 h-6" />
          </button>
        </div>
        <!-- Edit dialog -->
        <div class="flex mt-4" v-if="editDialog">
          <input
            class="font-body appearance-none block w-5/6 p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
            placeholder="Edit Task"
            v-model="editTodo"
            type="text"
          />
          <button
            class="w-1/4 ml-2 inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-800 hover:bg-green-700 font-medium focus:ring-2 focus:ring-green-800 focus:ring-opacity-50 rounded-md"
            type="submit"
            @click.prevent="edit()"
          >
            Add
          </button>
        </div>
        <p
          v-if="empty"
          class="text-rose-600 text-xs font-light text-center mt-4"
        >
          {{ errorInput }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import {
  AnnotationIcon,
  TrashIcon,
  PencilIcon,
  RewindIcon,
  CheckIcon,
} from "@heroicons/vue/outline";

// Error Handling variables
let empty = ref(false); // for editing a task
let errorInput = ref(""); // error message variable

// Edit Dialog variables
let editTodo = ref(""); // value from edit dialog
let editDialog = ref(false); // initially hidden
let currentIndex = ref(""); // used to show only 1 dialog
let taskDone = true; // toggleDone boolean
const emit = defineEmits([
  "childToggle",
  "childRemove",
  "childEdit",
  "childToggleEdit",
]);
const props = defineProps(["item"]);

// Error Handling
function errHandl() {
  errorInput.value = "Field cannot be empty";
  empty.value = true;
}
// Show Edit Dialog
function toggleEdit() {
  editDialog.value = !editDialog.value;
  editTodo.value = props.item.title;
}
// Toggle Done and Undone
function toggleTodo() {
  emit("childToggle", props.item); // sends info to parent component
}
// Edit task
function edit() {
  if (editTodo.value === "") errHandl();
  // shows error message
  else {
    empty.value = false; // hides error message
    editDialog.value = false; // hides edit dialog
    const editValues = {
      oldValue: props.item,
      newValue: editTodo.value,
    };
    emit("childEdit", editValues);
    // pendings[index] = editTodo.value; // modifies text
    editTodo.value = ""; // clears input field
  }
}
// Remove task
function remove() {
  emit("childRemove", props.item);
}
</script>

<style>
.taskDone {
  text-decoration-line: line-through;
}
</style>
