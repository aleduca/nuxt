<template>
   <UModal>
      <div class="p-3">
        <p class="text-center mb-3">Search for users and/or posts</p>
        <UDivider label="SEARCH" class="mb-3" />

        <UInput v-model="search" color="gray" :loading="loading" icon="i-heroicons-magnifying-glass-20-solid" @keyup.enter="searchData" />
      </div>
    </UModal>
</template>

<script setup>
const isOpen = ref(false);
const loading = ref(false);
const search = ref('');

function searchData(){
  console.log(search.value);
}
</script>

<style lang="scss" scoped>

</style>