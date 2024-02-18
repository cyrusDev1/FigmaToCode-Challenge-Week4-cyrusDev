// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  css: ['~/assets/css/main.css'],
  plugins: [
  ],
  image: {
    inject: true,
  },
  buildModules: ['@nuxt/image'],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
   
})