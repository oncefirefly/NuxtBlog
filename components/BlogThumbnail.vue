<script setup lang="ts">
import { Post } from "@/types/index";

const props = defineProps<{
  post: Post | null;
}>();

const router = useRouter();

const handleBlogClick = () => {
  router.push({ path: `/${props?.post?.id}` });
};
</script>

<template>
  <div @click="handleBlogClick" class="max-w-lg h-96 cursor-pointer">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm flex flex-col h-full"
    >
      <div to="" class="w-full min-h-24 h-1/3 flex items-center justify-center">
        <!-- <img
          class="rounded-t-lg w-full h-full"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          :alt="props?.post?.image"
        /> -->
        <img
          class="rounded-t-lg w-full h-full"
          :src="props?.post?.image"
          :alt="props?.post?.image"
        />
      </div>
      <div class="p-5 flex flex-col h-full">
        <div href="#">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ props?.post?.title }}
          </h5>
        </div>
        <p class="font-normal text-gray-700 mb-3">
          {{ props?.post?.preview }}
        </p>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-24 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mt-auto"
          href="#"
        >
          Read more
        </button>
      </div>
    </div>
  </div>
</template>
