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
      body: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      transitionDuration: {
        600: '600ms',
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    options: {
      whitelist: colors.flatMap((color) => [
        `bg-${color}-200`,
        `hover:bg-${color}-200`,
        `text-${color}-900`,
        `hover:text-${color}-900`,
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
