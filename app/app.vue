<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: 'Alyson Farias ',
  ogTitle: 'alyson farias',
  description: 'alyson farias - digital garden',
  ogDescription: 'alyson farias - digital garden',
  ogImage: 'https://api.deepai.org/job-view-file/533d2fa2-e867-411f-8051-adb15c9218ec/outputs/output.jpg?art-image=true',
  twitterCard: 'summary_large_image',
})
</script>
