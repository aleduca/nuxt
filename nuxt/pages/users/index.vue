<template>
  <div>
      <h2>Users</h2>

      <button @click="execute">Fetch</button>

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
          <li v-for="user in data.users">
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

const config = useRuntimeConfig();

// const endpoint= 'https://fakestoreapi.com/products';
const endpoint1= config.public.apiBase+'/api/users';
const endpoint2= 'https://fakestoreapi.com/products/';

const {data,error,pending,execute} = await useAsyncData('users', async () => {
  const [users, products] = await Promise.all([
      $fetch(endpoint1),
      $fetch(endpoint2)
  ])

  return {users, products}
},{
  lazy: true,
})

console.log(data.value.products);

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