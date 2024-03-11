<template>
  <div class="py-24 sm:py-32 md:py-10 !pb-0">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-y-24 flex flex-col max-w-5xl">
          <div class="text-center">
              <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                  <span>
                      <span class="text-primary inline-flex">NUXT & LARAVEL</span>
                  </span>
              </h1>
              <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
                  <span>Seja muito bem vindo ao curso de Nuxt 3 com Laravel 10.

                  </span>
              </p>
          </div>
      </div>
  </div>

</template>

<script setup>
// definePageMeta({
//   layout: 'custom',
// })

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home page description',
    },
  ],
})

</script>

<style lang="scss" scoped>

</style>