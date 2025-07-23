# Dev Commands

## Development
- `npm run dev` - Start development server (runs on port 3002 if 3000 is taken)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Dependencies
- Project uses **pnpm** as package manager
- Added vue-i18n and @nuxtjs/i18n for internationalization

## Project Structure Notes
- Components are located in `components/` (root level)
- App entry point copies components to `app/components/` for Nuxt 4 compatibility
- CSS files are in `assets/css/` and copied to `app/assets/css/`
- Uses Tailwind CSS v4 with @tailwindcss/vite plugin