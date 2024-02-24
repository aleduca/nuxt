<template>
    <Header />

    <div class="container">
        <slot />
    </div>

    <Footer />
</template>

<script setup>
// import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
</script>

<style lang="css">
@import url('~/assets/css/style.css');
/* @import url('@/node_modules/bootstrap/dist/css/bootstrap.min.css'); */
</style>