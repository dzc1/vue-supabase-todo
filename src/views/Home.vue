<template>
  <!-- Import Nav -->
  <Nav />
  <section class="pt-4 bg-gray-100">
    <div class="container px-4 mx-auto">
      <div
        class="max-w-4xl mx-auto text-center animate__animated animate__fadeIn"
      >
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium rounded-full shadow-sm"
          >TASK</span
        >
        <h2
          class="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
        >
          Add a new Task
        </h2>
        <p class="text-lg md:text-xl text-coolGray-500 font-medium">
          Keep your life organized, prepare for a trip ? Start here
        </p>
        <p class="mb-10 text-lg text-coolGray-500 font-medium">
          Today's Date is {{ time }}
        </p>
        <NewTask @childAddTodo="addTodo" />
      </div>

      <!-- Buttons controlling all tasks -->
      <div
        class="flex flex-col sm:flex-row w-3/4 gap-10 my-10 rounded-md mx-auto justify-center"
      >
        <!-- Mark All -->
        <div>
          <button
            id="selectDropdownButton"
            data-dropdown-toggle="selectDropdown"
            class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Mark All
            <svg
              class="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="selectDropdown"
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>Mark All</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer hover:text-green-500"
                  ><button @click="markAllDone" class="">Done</button></a
                >
              </li>
              <li>
                <a
                  class="hover:text-yellow-200 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  ><button @click="markAllUndone" class="">Undone</button></a
                >
              </li>
              <li>
                <a
                  data-modal-toggle="defaultModal"
                  class="hover:text-red-500 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  >Remove</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Filter By -->
        <!-- <div>
          <button
            id="filterByDropdownButton"
            data-dropdown-toggle="filterByDropdown"
            class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Sort By
            <svg
              class="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="filterByDropdown"
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>Sort By</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 hover:text-green-500 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  <button @click="showDone" class="">Done</button></a
                >
              </li>
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 hover:text-yellow-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  <button @click="showUndone" class="">Undone</button></a
                >
              </li>
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  ><button @click="resetFilters" class="">Reset</button></a
                >
              </li>
            </ul>
          </div>
        </div> -->

        <!-- Sort By -->
        <!-- <div>
          <button
            id="sortByDropdownButton"
            data-dropdown-toggle="sortByDropdown"
            class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Select By
            <svg
              class="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="sortByDropdown"
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>Select By</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  ><button @click="sortTitle" class="">Title</button></a
                >
              </li>
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  ><button @click="sortDate" class="">Date</button></a
                >
              </li>
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer hover:text-red-500"
                  ><button @click="resetFilters" class="">Reset</button></a
                >
              </li>
            </ul>
          </div>
        </div> -->
      </div>

      <!-- Remove all tasks dialog -->
      <div
        v-if="removeAllDialog"
        class="flex w-3/4 mx-auto rounded-md bg-gray-100 shadow-lg p-5 gap-5"
      >
        <input class="bg-gray-100 bg-icon bg-danger w-10" type="text" />
        <p class="font-mono text-red-600 italic font-bold w-2/3">
          You're about to remove all tasks, are you sure?
        </p>
        <button
          class="bg-btn bg-done btn-template bg-green-400 w-16 hover:bg-green-500"
          @click.prevent="removeAll"
        ></button>
        <button
          class="bg-btn bg-undone btn-template bg-red-500 w-16 hover:bg-red-600"
          @click.prevent="confirmRemoveAll"
        ></button>
      </div>

      <!-- Dropdown menu -->

      <div class="flex flex-wrap -mx-4 mt-24">
        <TaskItem
          class="animate__animated animate__fadeInUp"
          @childToggle="toggleTodo"
          @childRemove="remove"
          @childEdit="edit"
          v-for="(task, index) in tasks"
          :item="task"
        />
      </div>

      <!-- Modal -->
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600"
            >
              <h3
                class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white"
              >
                Delete All Tasks
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  class="w-5 h-5"
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
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <p
                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              >
                Are yo sure you want to delete all of your tasks?
              </p>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
            >
              <button
                @click.prevent="removeAll"
                type="button"
                class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Delete All Tasks
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Nav from "../components/Nav.vue";
import { ref, reactive, computed, onMounted } from "vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
import moment from "moment";
import "animate.css";

// Initialization array of tasks
let tasks = ref([]);
let removeAllDialog = ref(false);

//  Print Date
const time = moment().format("MMM Do YYYY");

// Getting tasks from supabase
async function getTasks() {
  tasks.value = await useTaskStore().fetchTasks();
}
getTasks();
// Printing user email
const userEmail = useUserStore().user.email;
const userName = userEmail.split("@")[0];

// Dropdown variables
const dropdownSelect = ref(false);
const dropdownFilter = ref(false);
const dropdownSort = ref(false);

// Global Functions
async function showDone() {
  resetFilters();
  const filterDone = await useTaskStore().filterDone();
  tasks.value = filterDone;
  resetDropdowns();
}
async function showUndone() {
  resetFilters();
  const filterUndone = await useTaskStore().filterUndone();
  tasks.value = filterUndone;
  resetDropdowns();
}
async function resetFilters() {
  getTasks();
}
async function markAllDone() {
  await useTaskStore().allDone();
  getTasks();
}
async function markAllUndone() {
  await useTaskStore().allUndone();
  getTasks();
}

function confirmRemoveAll() {
  removeAllDialog.value = !removeAllDialog.value;
  resetDropdowns();
}

async function removeAll() {
  await getTasks();
  tasks.value.forEach(async (task) => {
    await remove(task);
  });
}

// Sorting Functions
async function sortTitle() {
  getTasks();
  const sortTitle = await useTaskStore().sortTitle();
  tasks.value = sortTitle;
  resetDropdowns();
}
async function sortDate() {
  getTasks();
  const sortDate = await useTaskStore().sortDate();
  tasks.value = sortDate;
  resetDropdowns();
}

//Toggle Dropdowns
function toggleDropdownSelect() {
  dropdownSelect.value = !dropdownSelect.value;
}
function toggleDropdownFilter() {
  dropdownFilter.value = !dropdownFilter.value;
}
function toggleDropdownSort() {
  dropdownSort.value = !dropdownSort.value;
}

function resetDropdowns() {
  dropdownSelect.value = false;
  dropdownFilter.value = false;
  dropdownSort.value = false;
}

// Individual Functions
async function addTodo(newTodo, newDescription) {
  await useTaskStore().addTask(newTodo, newDescription);
  getTasks();
}

// Toggle
async function toggleTodo(item) {
  const toggleComplete = !item.is_complete;
  const toggleId = item.id;
  await useTaskStore().toggleDone(toggleComplete, toggleId);
  getTasks();
}

//Edit Items
async function edit(item) {
  const newTitle = item.newValue;
  const editId = item.oldValue.id;
  await useTaskStore().editTask(newTitle, editId);
  getTasks();
}

// Remove Items
async function remove(item) {
  await useTaskStore().deleteTask(item.id);
  getTasks();
}
</script>

<style></style>
