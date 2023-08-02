<script setup lang="ts">
const { data: posts } = await useFetch(
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
);
</script>

<template>
  <main class="max-w-7xl mx-auto py-10 flex flex-col">
    <section class="flex flex-wrap items-center justify-center gap-8">
      <template v-for="post in posts" :key="post.id">
        {{ post }}
      </template>

      <!-- <BlogThumbnail />
      <BlogThumbnail />
      <BlogThumbnail /> -->
    </section>
  </main>
  <!-- <BlogDetails /> -->
</template>
