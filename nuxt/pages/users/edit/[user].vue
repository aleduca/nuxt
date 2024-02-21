<template>
  <div>
    <h2>Edit User {{ route.params.user }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route.params.user);
</script>

<style lang="scss" scoped>

</style>