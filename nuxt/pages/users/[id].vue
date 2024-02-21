<template>
  <div>
      <h2>User found {{ route.params.id }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route.params.id);
</script>

<style lang="scss" scoped>

</style>