<template>
    <AppHeader />

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