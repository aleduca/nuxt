<template>
  <div>
      <h2>Users</h2>

      <!-- <button class="btn btn-success btn-sm mb-4" @click="execute">Fetch</button>-->

      <div v-if="error">
        {{ error.statusCode }}
        {{ error.message }}
      </div>

      <div v-else>
      <div v-if="pending && status === 'pending'">Carregando...</div>
      <div v-else>
        <ul>
          <li v-for="user in  users" :key="user.id">
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
const endpoint= config.public.apiBase+'/api/users';

const { data:users, pending, error, status,refresh, execute } = await useFetch(endpoint,{
  lazy:true,
  // immediate:false,
  // server:false,
  // pick:['id','price','title','image']
  // transform: (products) => {
  //   return products.map(product =>
  //   ({
  //     id: product.id,
  //     price: product.price,
  //     name: product.title,
  //     image: product.image
  //   }))
  // }
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