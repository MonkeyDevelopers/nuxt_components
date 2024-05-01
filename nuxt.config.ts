// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [`assets/css/style.css`],
  
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],
  
  imports: {
    dirs: ["./store"]
  },
  
  pinia: {
    storeDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"]
  }
  
})
