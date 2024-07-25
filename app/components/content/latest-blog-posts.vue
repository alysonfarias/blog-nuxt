<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div class="flex justify-between" v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      <span class="text-xs">{{ formatDate(post.publishedAt) }}</span>
    </div>
  </BlogPosts>
</template>

<script setup>
defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const formatDate = (dateString, displayYear) => {
  if (!dateString) return ''; // Handle missing dates

  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };



  return date.toLocaleDateString(undefined, options);
};
</script>