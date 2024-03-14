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
</template>

<script setup>
import { useTopBar } from '~/composables/useTopBar';

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
  useTopBar(topBar, showTopBar);
});
</script>

<style lang="scss" scoped>

</style>