export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: process.env.NODE_ENV === 'production',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s | Miquel Romero Sanfeliu, frontend developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    linkedinProfileUrl: 'https://www.linkedin.com/in/miquelromero/',
    githubProfileUrl: 'https://github.com/miquelromero',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vue-touch-events.ts'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Comfortaa: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          'Fira Code': [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
        display: 'swap',
      },
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-176283816-1',
      },
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faChevronUp', 'faChevronDown'],
          },
        ],
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://miquel.dev',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    splitChunks: {
      layouts: false,
      pages: false,
      commons: true,
    },
  },
  router: {
    middleware: 'pageMeta',
  },
  workbox: {
    clientsClaim: false,
  },
  pwa: {
    meta: {
      theme_color: '#252f3f',
    },
    manifest: {
      background_color: '#252f3f',
    },
  },
  tailwindcss: {
    jit: true,
    viewer: false,
  },
};
