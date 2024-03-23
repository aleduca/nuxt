<template>
   <TopBar />

  <header class="h-13 bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <a aria-current="page" href="/" class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5" aria-label="Logo">
          Nuxt & Laravel
          <span class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 mb-0.5">
            Course
          </span>
        </a>
      </div>

      <ul class="items-center gap-x-8 hidden lg:flex">
        <UHorizontalNavigation :links="links"
          class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" />
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <div class="relative inline-flex">
            <Search />
        </div>
        <ClientOnly>
        <button type="button" v-if="colorMode.value !== 'dark'" @click="colorMode.preference = 'dark'"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label="dark mode">
          <span class="i-heroicons-moon-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
        </button>
        <button type="button"  v-if="colorMode.value !== 'light'" @click="colorMode.preference = 'light'"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label="light mode">
          <span class="i-heroicons-sun-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
        </button>
      </ClientOnly>

        <NuxtLink class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          to="/login">
          <span class="">Sign in</span>
        </NuxtLink>
        <div class="relative flex items-center dropdown">
          <button type="button" class="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 :dark:text-zink-200">
              <Avatar />
          </button>
        </div>

        <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu">
          <span class="i-heroicons-bars-3-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
        </button>
      </div>
    </div>


  </header>


</template>

<script setup>

const colorMode = useColorMode()

const links = [{
  label: 'Inicio',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Users',
  icon: 'i-heroicons-users',
  to: '/users'
}]

</script>

<style lang="scss" scoped>

</style>