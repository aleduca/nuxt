<template>
  <UDivider :label="`USERS FOUND (${users.length})`" class="mb-3 mt-3" />
  <ul :class="{'scroll':users.length > 5}">
      <li v-for="user in users" :key="user.id" class="flex items-center justify-left mb-3">
        <img class="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center mr-2" :src="user.avatar" :alt="user.name">
        <a href="" @click.prevent="goToUserPage(user.id)">{{ user.name }}</a>
      </li>
  </ul>
</template>

<script setup>
const router = useRouter();
const modal = useModal();

defineProps({
  users: Object
})

function goToUserPage(id){
  modal.close();
  router.push(`/users/${id}`);
}
</script>

<style lang="css" scoped>
.scroll {
  overflow-y:scroll;
  height: 200PX;
}
</style>