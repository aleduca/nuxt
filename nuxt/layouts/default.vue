<template>
    <AppHeader />

    <div class="container">
        <slot />
    </div>

    <AppFooter />
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

if(process.client){
    console.log(runtimeConfig);
}

</script>

<style lang="css">
@import url('~/assets/css/style.css');
</style>