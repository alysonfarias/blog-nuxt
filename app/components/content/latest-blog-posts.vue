<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post.id">
      <span class="text-xs">{{ formatDate(post.publishedAt) }}</span> |
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
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