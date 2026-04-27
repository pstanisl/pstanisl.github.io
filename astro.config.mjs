// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://petrstanislav.com', // Update with your actual domain
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    routing: {
      prefixDefaultLocale: false, // English at / , Czech at /cs/
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});