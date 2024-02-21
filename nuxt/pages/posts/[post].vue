<template>
  <div>
    <h2>Post from {{ route.params.post }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route.params.post);
</script>

<style lang="scss" scoped>

</style>