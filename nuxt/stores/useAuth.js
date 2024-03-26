import {defineStore} from 'pinia';

export const useAuth = defineStore('auth',() => {
  const toast = useToast();

  const config = useRuntimeConfig();

  const loading = ref(false);

  const user = ref(null);

  const isLoggedIn = computed(() => user.value !== null);

  async function getUser(){
    try {
      const data = await $fetch(config.public.apiBase+'/api/user',{
        credentials: 'include'
    });

    user.value = data;
    } catch (error) {
      console.log(error);
    }
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

      await getUser();

      setCookieInDays('logged_in', true,1);

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

  async function logout(){
    try {
      const token = useCookie('XSRF-TOKEN');
      await $fetch(config.public.apiBase+'/logout',{
        credentials: 'include',
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'X-XSRF-TOKEN': token.value
        }
      });

      const authCookie = useCookie('logged_in');
      authCookie.value = null;
      user.value = null;
      token.value = null;

      navigateTo('/');
    } catch (error) {
      console.log(error);
    }
  }

  return {
    login, loading, getUser,isLoggedIn,user,logout
  }
})