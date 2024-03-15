<template>
   <UModal>
      <div class="p-3">
        <p class="text-center mb-3">Search for users and/or posts</p>
        <UDivider label="SEARCH" class="mb-3" />

        <UInput v-model="search" color="gray" :loading="loading" icon="i-heroicons-magnifying-glass-20-solid" @keyup.enter="searchData" />

        <div v-if="results.users.length">
          <UDivider :label="`USERS FOUND (${results.users.length})`" class="mb-3 mt-3" />
          <ul :class="{'scroll':results.users.length > 5}">
            <li v-for="user in results.users" :key="user.id" class="flex items-center justify-left mb-3">
              <img class="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center mr-2" :src="user.avatar" :alt="user.name">
              <a href="" @click.prevent="`/users/${user.id}`">{{ user.name }}</a>
            </li>
          </ul>
        </div>

        <div v-if="results.posts.length">
          <UDivider :label="`POSTS FOUND (${results.posts.length})`" class="mb-3 mt-3" />
          <ul :class="{'scroll':results.posts.length > 5}">
            <li v-for="post in results.posts" :key="post.id" class="flex items-center justify-left mb-3">
              <img class="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center mr-2" :src="post.thumb" :alt="post.title">
              <a href="" @click.prevent="`/posts/${post.slug}`">{{ post.title }}</a>
            </li>
          </ul>
        </div>

      </div>
    </UModal>
</template>

<script setup>
const isOpen = ref(false);
const loading = ref(false);
const search = ref('');
const results = reactive({
  users:[],
  posts:[]
})
const config = useRuntimeConfig();

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
  results.users = data.users;
  results.posts = data.posts;
  } catch (error) {
    loading.value = false;
    console.log(error)
  }
}
</script>

<style lang="css" scoped>
.scroll {
  overflow-y:scroll;
  height: 200PX;
}
</style>