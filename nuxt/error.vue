<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <p>{{ error?.statusMessage }}</p>
    <button @click="handleRedirect">Redirect to Home</button>
  </div>
</template>

<script setup>
// import type { NuxtError } from '#app'

// const props = defineProps({
//   error: Object as () => NuxtError
// })

const error = useError();

function handleRedirect(){
  return navigateTo('/');
}
</script>

<style lang="scss" scoped>

</style>