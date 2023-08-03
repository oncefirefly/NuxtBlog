<script setup lang="ts">
import { Post } from "@/types/index";

const { data: posts } = await useFetch<Post[]>(
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
);
</script>

<template>
  <main class="max-w-7xl mx-auto py-10 flex flex-col">
    <section class="flex flex-wrap items-center justify-center gap-8">
      <template v-for="post in posts" :key="post.id">
        <BlogThumbnail :post="post" />
      </template>
    </section>
  </main>
  <!-- <BlogDetails /> -->
</template>
