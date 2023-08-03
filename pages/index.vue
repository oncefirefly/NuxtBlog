<script setup lang="ts">
import { Post } from "@/types/index";

// data fetching
const { data: posts } = await useFetch<Post[]>(
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
);

// refs and wars
const itemsOnPage = 6;
const currentPage = ref<number>(1);

// methods
const handlePrevClick = () => {
  if (currentPage.value === 1) return;

  currentPage.value -= 1;
};

const handleNextClick = (totalPages: number) => {
  if (currentPage.value < totalPages) {
    currentPage.value += 1;
  }
};

const handlePageClick = (clickedPage: number) => {
  currentPage.value = clickedPage;
};
</script>

<template>
  <main class="max-w-7xl mx-auto py-10 flex flex-col">
    <section
      v-if="posts?.length"
      class="flex flex-wrap items-center justify-center gap-8 mb-12"
    >
      <template
        v-for="post in posts.slice(
          (currentPage - 1) * itemsOnPage,
          currentPage * itemsOnPage
        )"
        :key="post.id"
      >
        <BlogThumbnail :post="post" />
      </template>
    </section>
    <template v-if="posts?.length! > 1">
      <Pagination
        :items-on-page="itemsOnPage"
        :total-items="posts!.length"
        :current-page="currentPage"
        @next-click="handleNextClick"
        @prev-click="handlePrevClick"
        @page-click="handlePageClick"
      />
    </template>
  </main>
</template>
