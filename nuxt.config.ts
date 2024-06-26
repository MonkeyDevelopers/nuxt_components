// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [`assets/css/style.css`],
  
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  
  imports: {
    dirs: ["./store"]
  },
  
  pinia: {
    storeDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"]
  }
  
})
