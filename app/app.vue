<script setup lang="ts">
</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
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
const layout = "default";
</script>