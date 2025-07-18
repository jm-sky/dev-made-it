## Zadanie: Dodanie prerenderingu (SSG) do istniejącej aplikacji Vue 3 + Vite

### Cel:
Dodać `vite-plugin-ssr`, by generować statyczny HTML podczas builda, bez zmiany działania dev (SPA).

### Kroki:
1. Zainstaluj plugin:
   ```bash
   npm install vite-plugin-ssr
   ```

2. Zmień `vite.config.js`:
   ```js
   import vue from '@vitejs/plugin-vue'
   import ssr from 'vite-plugin-ssr/plugin'

   export default {
     plugins: [vue(), ssr()]
   }
   ```

3. Utwórz folder `pages/` i plik `index.page.js`:
   ```js
   export { Page }
   export const prerender = true

   const Page = () => import('./index.page.vue')
   ```

4. Przenieś aktualny kod strony głównej do `pages/index.page.vue`.

5. Buduj i prerenderuj:
   ```bash
   npm run build
   npx vite-plugin-ssr prerender
   ```

### Efekt:
- Dev: działa jak wcześniej (SPA).
- Po buildzie: statyczny HTML gotowy do hostingu.
