<template>
    <AppHeader />

    <img src="/img/image1.jpeg" width="300" height="230">

    <div class="container">
        <slot />
    </div>

    <AppFooter />
</template>

<script setup>
// import '!!/bootstrap/dist/css/bootstrap.min.css'
const show = ref(false)
</script>

<style lang="css">
/* @import url('!!/bootstrap/dist/css/bootstrap.min.css'); */
@import url('~/assets/css/style.css');
</style>