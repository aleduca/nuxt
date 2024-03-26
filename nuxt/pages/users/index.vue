<template>

    <div class="my-8">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-y-24 flex flex-col max-w-5xl">
        <div class="text-center">
          <h1 class="text-md font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Users
          </h1>
          <div v-if="error">
            Ocorreu um erro
          </div>

          <div v-else>

            <div v-if="pending">
              Carregando...
            </div>

            <div v-else>
                <div class="mt-4 mb-4 text-left">
                  <UTable :rows="users.data" :columns="columns">
                    <template #created_at-data="{row}">
                      {{ dateFormat(row.created_at) }}
                    </template>
                  </UTable>
                </div>

                <UPagination v-model="page" :page-count="users.last_page" :total="users.total" @click="updatePage" />
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup>
import dateFormat from '~/utils/dateFormat';

definePageMeta({
  middleware:['auth']
});

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name'
}, {
  key: 'email',
  label: 'E-mail'
},
{
  key: 'created_at',
  label: 'Created'
}
]


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
  credentials: 'include',
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