<script setup lang="ts">
import { Post } from "@/types/index";

const route = useRoute();

const { data: post } = await useFetch<Post>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`
);
</script>

<template>
  <BlogDetails :post="post" />
</template>
