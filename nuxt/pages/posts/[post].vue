<template>
  <div>
    <h2>Post from {{ route.params.post }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>

</style>