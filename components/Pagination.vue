<script setup lang="ts">
// props
const props = defineProps<{
  currentPage: number;
  itemsOnPage: number;
  totalItems: number;
}>();

console.log(props.currentPage);

// emits
const emits = defineEmits<{
  prevClick: [];
  nextClick: [totalPages: number];
  pageClick: [clickedPage: number];
}>();

// refs and vars
const totalPages = ref<number>(Math.ceil(props.totalItems / props.itemsOnPage));

// methods
const handlePrevClick = () => {
  emits("prevClick");
};

const handleNextClick = () => {
  emits("nextClick", totalPages.value);
};

const handlePageClick = (e: MouseEvent) => {
  const { target } = e;

  emits("pageClick", +(target as HTMLButtonElement).value);
};
</script>

<template>
  <nav class="flex justify-center">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <button
          @click="handlePrevClick"
          class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button
          @click="(e) => handlePageClick(e)"
          v-if="
            Math.abs(page - currentPage) < 3 ||
            page === totalPages ||
            page === 1
          "
          :value="page"
          :class="{
            ['z-10 flex items-center justify-center px-3 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white']:
              page === currentPage,
          }"
          class="flex items-center justify-center w-12 px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          @click="handleNextClick"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>
