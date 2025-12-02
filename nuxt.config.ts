import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

const pkg = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url), 'utf-8')
)

const APP_VERSION = pkg.version
const APP_BUILD_DATE = new Date().toISOString()

const DEFAULT_LOCALE = 'pl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: DEFAULT_LOCALE
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    '@vueuse/motion/nuxt',
    '@vite-pwa/nuxt'
  ],
  // Global animation configuration
  runtimeConfig: {
    public: {
      motion: {
        // Global animation defaults
        transition: {
          duration: 400,
          ease: 'easeOut'
        },
        // Respect user preferences
        respectMotionPreferences: true
      }
    }
  },
  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    define: {
      'import.meta.env.VITE_VERSION': JSON.stringify(APP_VERSION),
      'import.meta.env.VITE_BUILD_DATE': JSON.stringify(APP_BUILD_DATE)
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'pl',
        name: 'Polski',
        file: 'pl.ts',
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.ts',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    vueI18n: './i18n/index.ts',
    pages: {
      '404': {
        en: false,
        pl: false,
        ru: false
      }
    }
  },
  pwa: {
    manifest: {
      name: 'DEV Made IT',
      short_name: 'DEV Made IT',
      description: 'Professional full stack development',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      orientation: 'portrait-primary',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      lang: DEFAULT_LOCALE,
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
  },
})
