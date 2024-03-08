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
          <div class="mt-4 mb-4">
            <UTable :rows="users.data" :columns="columns" />
          </div>

          <UPagination v-model="page" :page-count="users.last_page" :total="users.total" @click="updatePage" />
      </div>
    </div>
  </div>
</template>

<script setup>

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name'
}, {
  key: 'email',
  label: 'E-mail'
}]


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

function updatePage(){
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