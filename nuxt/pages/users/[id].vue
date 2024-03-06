<template>
  <div>
      <h2>User</h2>
      {{ user }}
  </div>
</template>

<script setup>
const route = useRoute();

const id = route.params.id;
const config = useRuntimeConfig();
const {data:users} = useNuxtData('users');

// const user = data.value.find(user => parseInt(user.id) === parseInt(id));

const { data:user } = useLazyFetch(config.public.apiBase+`/api/user/${id}`, {
  key: `user-${id}`,
  default() {
    return users.value.find(user => parseInt(user.id) === parseInt(id))
  }
})

</script>

<style lang="scss" scoped>

</style>