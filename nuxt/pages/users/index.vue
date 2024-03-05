<template>
  <div>
      <h2>Users</h2>

      <div v-if="error">
        {{ error.status }}
        {{ error.statusText }}
      </div>

      <div v-else>

      <div v-if="pending">
        Carregando...
      </div>

      <div v-else>
        <ul>
          <li v-for="user in users">
            {{ user.name }} - {{ user.email }}
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Users',
  meta: [
    {
      name: 'description',
      content: 'Users page list',
    },
  ],
})

const users = ref([]);
const error = ref(null);
const pending = ref(true);

const config = useRuntimeConfig();

// const endpoint= 'https://fakestoreapi.com/products';
const endpoint= config.public.apiBase+'/api/users';

async function loadUsers(){
  try {
    const data = await $fetch(endpoint);
    pending.value = false;

    users.value = data;
  } catch (e) {
    error.value = e;
    console.log(e)
  }

}
// console.log(users);

onMounted(() => {
  nextTick(() => {
    loadUsers();
  });
})


</script>

<style lang="css" scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>