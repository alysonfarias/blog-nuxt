<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
useSeoMeta({
  title: 'Alyson Farias',
  ogTitle: 'alyson farias',
  description: 'alyson farias - digital garden',
  ogDescription: 'alyson farias - digital garden',
  ogImage: 'https://api.deepai.org/job-view-file/533d2fa2-e867-411f-8051-adb15c9218ec/outputs/output.jpg?art-image=true',
  twitterCard: 'summary_large_image',
  keywords: 'alyson farias, desenvolvedor, fullstack, frontend, developer, backend',
  ogType: 'website',
  ogUrl: 'https://alysonfarias.me/',
  ogSiteName: 'Alyson Farias - Digital Garden',
})
</script>

<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentDoc path="/" />
  </article>
</template>
