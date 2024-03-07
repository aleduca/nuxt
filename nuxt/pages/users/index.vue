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
          <li v-for="user in users.data">
            {{ user.name }} - {{ user.email }} <NuxtLink :to="'/users/'+user.id">Details</NuxtLink>
          </li>
        </ul>

        <ul class="pagination">
          <li class="page-item" v-for="(p,index) in users.links" :key="index">
            <a href="" v-if="p.url" v-html="p.label" class="page-link" :class="{'active':p.active}" @click.prevent="updatePage(p.label)"></a>
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

const router = useRouter();

const config = useRuntimeConfig();

const page = ref(1);

function updatePage(label){
  page.value = label;
  router.push({query: { page: page.value}})
}

const endpoint = computed(() => {
  return config.public.apiBase+'/api/users';
})

const {data:users,error,pending} = await useFetch(endpoint.value,{
  query: { page},
  lazy:true,
  watch: [page]
});

router.push({query: { page: page.value}})

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