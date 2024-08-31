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
  title: 'Alyson Farias Desenvolvedor',
  ogTitle: 'alyson farias',
  description: 'alyson farias - digital garden',
  ogDescription: 'alyson farias - digital garden',
  twitterCard: 'summary_large_image',
})
const route = useRoute()
const config = useRuntimeConfig();
useHead(() => {
  const canonical = `${config.public.baseUrl}${route.path}`;
  return {
    link: [
      { hid: "canonical", rel: "canonical", href: canonical }
    ]
  };
});
</script>
