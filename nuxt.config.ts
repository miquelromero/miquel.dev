// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint'
  ],

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {}
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: true,
        commaDangle: "always"
      }
    }
  },

  // https://devtools.nuxt.com
  devtools: { enabled: true }
})