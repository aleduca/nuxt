import {resolve} from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    'imgs': resolve(__dirname, './assets/img'),
    '!!': resolve(__dirname, './node_modules'),
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    dev:{
      apiBase: 'http://localhost:3000/api',
    },
    prod:{
      apiBase: 'http://production:3000/api',
    },
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE
    }
  },
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
