<template>
  <div>
      <h2>Home</h2>
      <button class="btn btn-danger btn-sm">Login</button>
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