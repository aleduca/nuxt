// https://nuxt.com/docs/api/configuration/nuxt-config
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css:[
  //   '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  // ],
  app:{
    head:{
      link: [
        {
        rel: 'stylesheet',
        integrity:'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
        crossorigin:'anonymous',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
       }
      ]
    }
  },
  components:[
    {
      path: '~/components',
      pathPrefix: true
    },
  ],
  modules: [
    [
      '@nuxtjs/google-fonts',{
      families:{
        'Kode Mono':true
      }
    }
  ]
]
  // modules: ['@nuxtjs/tailwindcss']
})
