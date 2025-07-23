# i18n Configuration Problem

## Current Issue
- Polish (PL) translations work correctly as default language
- English (EN) translations show placeholders (e.g., "hero.description") instead of actual text
- Language switching from PL to EN fails to load proper translations

## Current Configuration

### Nuxt Config (`nuxt.config.ts`)
```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', 'shadcn-nuxt', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'pl',
        name: 'Polski'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    vueI18n: './i18n/index.ts'
  }
})
```

### i18n Config (`i18n/index.ts`)
```typescript
import en from './en'
import pl from './pl'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en.default ?? en,
    pl: pl.default ?? pl,
  },
}))
```

### Translation Files Structure
- `i18n/en/index.ts` - English translations
- `i18n/pl/index.ts` - Polish translations

Both files export default objects with nested structure:
```typescript
export default {
  nav: { home: 'Home', about: 'About', contact: 'Contact' },
  hero: { description: 'Full-stack web development...', ... },
  // ... more nested objects
}
```

## Problem Analysis

### Generated JSON Files Issue
When building, the generated JSON files have incorrect nesting:
- `/_i18n/en/messages.json` contains: `{"en": {...translations...}}`
- `/_i18n/pl/messages.json` contains: `{"pl": {...translations...}}`

The translations are wrapped in an extra language key, causing the app to look for `en.hero.description` instead of `hero.description`.

### What Should Work
- Default locale (PL) works because browser detection might be defaulting to PL
- English translations fail because of the extra nesting level in generated JSON

## Attempted Solutions
1. ✅ Fixed langDir configuration
2. ✅ Removed duplicate i18n setups
3. ✅ Used proper @nuxtjs/i18n configuration format
4. ❌ Added `en.default ?? en` fallback - didn't resolve nesting issue

## Next Steps to Try
1. Verify translation file exports are correct (no extra default wrapping)
2. Check if @nuxtjs/i18n expects different file structure
3. Test with simplified inline messages to isolate the issue
4. Review @nuxtjs/i18n documentation for proper file-based configuration