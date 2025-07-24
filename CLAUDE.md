# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Dev Commands

## Development  
- `pnpm dev` - Start development server (Nuxt dev mode)
- `pnpm build` - Build for production  
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- `pnpm postinstall` - Prepare Nuxt (runs automatically after install)

## Linting and Type Checking
- ESLint configuration uses Nuxt's built-in ESLint config (`.nuxt/eslint.config.mjs`)
- TypeScript references are managed by Nuxt's generated tsconfig files

## Dependencies
- Project uses **pnpm** as package manager
- Uses Nuxt 4 with Vue 3 and TypeScript
- Key modules: @nuxt/ui, @nuxtjs/i18n, shadcn-nuxt
- Styling: Tailwind CSS v4 with @tailwindcss/vite plugin

# Project Architecture

## Component Structure
- **Root components/**: Source components copied to `app/components/` for Nuxt 4 compatibility
- **app/components/**: Nuxt-accessible components organized by category:
  - `Buttons/`: DarkModeButton, LocaleButton  
  - `Cards/`: AboutCard, BaseCard, ContactCard
  - `Layout/`: Navbar, NavbarLinks
  - `Sections/`: HeroSection, AboutSection, ContactSection, FooterSection, etc.
  - `ui/`: shadcn-vue components (managed by shadcn-nuxt)

## Application Structure  
- **Single-page application**: `app/app.vue` contains main layout with all sections
- **Section-based design**: Hero → About → Contact → Footer with ScrollToTop
- **Static generation ready**: Uses `pnpm generate` for deployment

## Internationalization (i18n)
- **Locales**: English (default) and Polish in `i18n/locales/`
- **Configuration**: Cookie-based detection, redirects on root
- **Integration**: Uses @nuxtjs/i18n module with vue-i18n

## Styling System
- **Tailwind CSS v4**: Latest version with Vite plugin integration
- **shadcn-vue**: Component library with New York style, slate base color
- **CSS location**: `app/assets/css/index.css` (copied from `assets/css/`)
- **Component styling**: Uses CSS variables for theming

## Build and Deployment
- **Static generation**: Primary deployment method via `pnpm generate`
- **Build script**: `scripts/build-deploy.sh` handles git pull, generate, and finalization
- **Production**: Uses Nuxt's optimized build process

# Key Configuration Files
- `nuxt.config.ts`: Main Nuxt configuration with modules and i18n setup
- `components.json`: shadcn-vue configuration with aliases and styling preferences
- `tsconfig.json`: TypeScript references managed by Nuxt's generated configs