// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deine GitHub Pages Haupt-URL
  site: 'https://NaMToK19.github.io',
  // Der Name deines Repositories (mit Schrägstrich am Anfang!)
  base: '/mh-nails-website',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    icon()
  ]
});