<template>
  <header>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
  </header>
</template>

<script setup>
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Users',
  icon: 'i-heroicons-users',
  to: '/users'
}, {
  label: 'Login',
  icon: 'i-heroicons-arrow-left-end-on-rectanglechart-bar',
  to: '/login'
}]
</script>

<style lang="scss" scoped>

</style>