<template>
    <div v-if="showTopBar" class="relative bg-primary hover:bg-primary/90 transition-[background] backdrop-blur z-50 app-banner">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2">
        <div class="flex items-center justify-between gap-2">
          <div class="lg:flex-1 hidden lg:flex items-center"></div>
          <p class="text-sm font-medium text-white dark:text-gray-900">
            <span class="i-heroicons-rocket-launch w-5 h-5 align-top flex-shrink-0 pointer-events-none mr-2"></span>
            <span class="font-semibold">Nuxt & Laravel</span>
          </p>
          <div class="flex items-center justify-end lg:flex-1">
            <button @click="closeTopBar" class="p-1.5 rounded-md inline-flex hover:bg-primary/90" aria-label="Close banner">
              <span class="i-heroicons-x-mark-20-solid w-5 h-5 text-white dark:text-gray-900"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

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
          <button type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Search">
            <span class="i-heroicons-magnifying-glass-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
          </button>
        </div>
        <button type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label=" dark mode">
          <span class="i-heroicons-sun-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
        </button>
        <button type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          aria-label="light mode">
          <span class="i-heroicons-moon-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
        </button>

        <NuxtLink class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          to="/login">
          <span class="">Sign in</span>
        </NuxtLink>
        <div class="relative flex items-center dropdown">
          <button type="button" class="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 :dark:text-zink-200">
            <div class="bg-pink-100 rounded-full">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdEM0Q3M0Q0OEE3MjExRUU5QzY1Qjg0RTZGNUJCMkJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdEM0Q3M0Q1OEE3MjExRUU5QzY1Qjg0RTZGNUJCMkJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0QzRDczRDI4QTcyMTFFRTlDNjVCODRFNkY1QkIyQkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0QzRDczRDM4QTcyMTFFRTlDNjVCODRFNkY1QkIyQkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70YlHmAAAK6UlEQVR42sxYaWxc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"
                 alt="" class="w-[37.5px] h-[37.5px] rounded-full">
            </div>
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
import { useTopBar } from '~/composables/useTopBar';

const links = [{
  label: 'Inicio',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Users',
  icon: 'i-heroicons-users',
  to: '/users'
}]

const showTopBar = ref(false);

const topBar = useCookie('topBar');

function closeTopBar() {
  showTopBar.value = false;
  topBar.value = false;
  setTimeout(() => {
    setCookieInMinutes('topBar', false, 1);
  }, 300);
}

onMounted(() => {

  console.log(topBar.value);

  useTopBar(topBar, showTopBar);

});

</script>

<style lang="scss" scoped>

</style>