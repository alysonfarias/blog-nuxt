<template>
  <div class="container mx-auto max-w-4xl flex flex-col min-h-screen">
    <header class="flex justify-between items-start md:items-center mt-5">
      <div class="flex items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800">Alyson Farias
          </NuxtLink>
        </div>

        <Menu />
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>

    <main class="p-2 mt-10 flex-grow">
      <slot />
    </main>
    <footer class="mt-auto flex justify-end">
      <small>{{ age }}y</small>
    </footer>
  </div>
</template>


<script setup>
useHead({
  titleTemplate: '%s - Alyson Farias',
  // link: [
  //   {
  //     rel: 'preconnect',
  //     href: 'https://fonts.googleapis.com'
  //   },
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  //     crossorigin: ''
  //   }
  // ]
})
import { onMounted, ref } from 'vue';

const age = ref(null);

function calculateAge() {
  const birthYear = 2001;
  const monthYear = 12;
  const fictionalDayDate = 1
  const birthDate = new Date(birthYear, monthYear, fictionalDayDate);

  const now = new Date();
  const ageInMilliseconds = now - birthDate;
  const years = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return years.toFixed(10);
}

onMounted(() => {
  setInterval(() => {
    age.value = calculateAge();
  }, 900);
});

</script>

<style>
/* body {
  font-family: 'Montserrat';
} */

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>