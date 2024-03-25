import {resolve} from 'path';
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias:{
    'imgs': resolve(__dirname, './assets/img'),
    '!!': resolve(__dirname, './node_modules'),
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: process.env.API_SECRET,
    dev:{
      apibase:process.env.NUXT_DEV_API_BASE,
    },
    prod:{
      apibase:process.env.NUXT_PROD_API_BASE,
    },
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'http://localhost:8000'
    }
  },
  components:[
    {
      path: '~/components',
      pathPrefix: true
    },
  ],
  colorMode: {
    preference:'system'
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
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
