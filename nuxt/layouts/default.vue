<template>
    <AppHeader />

    <LazyAppButtonsDanger v-if="show" />

    <button @click="show = !show">Toogle Button</button>

    <div class="container">
        <slot />
    </div>

    <AppFooter />
</template>

<script setup>
// import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
const show = ref(false)
</script>

<style lang="css">
@import url('~/assets/css/style.css');
/* @import url('@/node_modules/bootstrap/dist/css/bootstrap.min.css'); */
</style>