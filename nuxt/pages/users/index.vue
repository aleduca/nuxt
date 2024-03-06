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
            {{ user.name }} - {{ user.email }} <NuxtLink :to="'/users/'+user.id">Details</NuxtLink>
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

const endpoint1= 'https://fakestoreapi.com/products';
const endpoint2= config.public.apiBase+'/api/users';

const {data:users,error,pending} = await useAsyncData('users',() => $fetch(endpoint2),{
  lazy: true,
})

const {data:products} = await useFetch(endpoint1,{
  lazy: true,
  key:'products'
});

console.log(users);

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