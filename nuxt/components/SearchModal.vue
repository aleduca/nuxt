<template>
   <UModal>
      <div class="p-3">
        <p class="text-center mb-3">Search for users and/or posts</p>
        <UDivider label="SEARCH" class="mb-3" />

        <UInput v-model="search" color="gray" :loading="loading" icon="i-heroicons-magnifying-glass-20-solid" @keyup.enter="searchData" />

        <div v-if="!results.users.lenght && !results.posts.length && searched">
          <p class="text-center mt-3">No results found</p>
        </div>

        <div v-else>
          <div v-if="results.users.length">
            <UsersSearch :users="results.users" />
          </div>

          <div v-if="results.posts.length">
            <PostsSearch :posts="results.posts" />
          </div>
        </div>

      </div>
    </UModal>
</template>

<script setup>
const loading = ref(false);
const search = ref('');
const searched = ref(false);
const results = reactive({
  users:[],
  posts:[]
})
const modal = useModal();
const config = useRuntimeConfig();
const toast = useToast()

watch([search, modal.isOpen],([searchValue, modalIsOpen])=>{
  if(!searchValue.length){
    results.users = [];
    results.posts = [];
  }

  if(!modalIsOpen){
    results.users = [];
    results.posts = [];
    search.value = '';
  }
})

async function searchData(){
  loading.value = true;
  try {
  const data = await $fetch(config.public.apiBase+'/api/search',{
    query:{
      's':search.value
    },
    headers:{
      'Content-Type':'application/json'
    }
  })
  loading.value = false;
  searched.value = true;
  results.users = data.users;
  results.posts = data.posts;

  setTimeout(() => {
    searched.value = false;
  }, 5000);
  } catch (error) {
    toast.add({
      title: 'Error',
      description: 'An error occurred while searching',
      icon: 'i-octicon-desktop-download-24',
      timeout: 5000,
    })
    loading.value = false;
    searched.value = false;
    console.log(error)
  }
}
</script>

<style lang="css" scoped>

</style>