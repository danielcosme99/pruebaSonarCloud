// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript:{
       shim: false 
    },
    nitro: {
        esbuild: {
          options: {
            target: 'esnext'
          }
        }
      }
})
