const defaultTheme = require('tailwindcss/defaultTheme');
const pages = require('./assets/pages').default;
const colors = pages.map((page) => page.color);

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  experimental: {
    uniformColorPalette: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fontFamily: {
      display: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      body: ['Montserrat', ...defaultTheme.fontFamily.sans],
      // mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    options: {
      whitelist: colors.flatMap((color) => [
        `bg-${color}-100`,
        `bg-${color}-200`,
        `bg-${color}-800`,
        `hover:bg-${color}-200`,
        `hover:text-${color}-800`,
        `text-${color}-800`,
      ]),
    },
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
