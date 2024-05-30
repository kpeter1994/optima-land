// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL ?? 'http://localhost:1337',
    }
  },


  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],



  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-primevue",
    "@nuxtjs/apollo",
    "@nuxtjs/strapi"
  ],

  image: {
    format: ['webp'],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  primevue: {
    components: {
      include: ['AnimateOnScroll', 'DeferredContent']
    },
    directives: {
      include: ['Ripple', 'AnimateOnScroll']
    }
  },

})