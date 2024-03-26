export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuth();
  const authCookie = useCookie('logged_in');

  console.log('plugin');

  if(authCookie.value){
    await auth.getUser();
  }
})