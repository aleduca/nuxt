<template>
 <UDivider :label="`POSTS FOUND (${posts.length})`" class="mb-3 mt-3" />
  <ul :class="{'scroll':posts.length > 5}">
    <li v-for="post in posts" :key="post.id" class="flex items-center justify-left mb-3">
      <img class="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center mr-2" :src="post.thumb" :alt="post.title">
      <a href="" @click.prevent="goToPostPage(post.slug)">{{ post.title }}</a>
    </li>
  </ul>
</template>

<script setup>
const modal = useModal();
const router = useRouter();
defineProps({
  posts: Object
})

function goToPostPage(slug){
  modal.close();
  router.push(`/posts/${slug}`);
}
</script>

<style lang="scss" scoped>

</style>