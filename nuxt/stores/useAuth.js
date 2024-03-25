import {defineStore} from 'pinia';

export const useAuth = defineStore('auth',() => {
  const toast = useToast();

  const config = useRuntimeConfig();

  const loading = ref(false);

  async function getUser(){
    return await $fetch(config.public.apiBase+'/api/user',{
        credentials: 'include'
    });
  }

  async function login(form){
    try {
      loading.value = true;
      // generate cookie to protect against CSRF
      await $fetch(config.public.apiBase+'/sanctum/csrf-cookie',{
        credentials: 'include'
      });

      // get cookie csrf
      const token = useCookie('XSRF-TOKEN');

      //login
      await $fetch(config.public.apiBase+'/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'X-XSRF-TOKEN': token.value
        },
        body: JSON.stringify(form.value),
        credentials: 'include'
      });

      const user = await getUser();

      loading.value = false;

      navigateTo('/');
    } catch (error) {
      loading.value = false;
      toast.add({
        title: 'Error Login',
        description: 'Error login, please try again',
        icon:'i-heroicons-exclamation-circle',
        timeout: 5000,
      })
    }
  }

  return {
    login, loading, getUser
  }
})