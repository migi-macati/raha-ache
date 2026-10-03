import { defineConfig } from 'astro/config';
import remarkEntityLinks from './scripts/remark-entity-links.mjs';

export default defineConfig({
  site: 'https://migi-macati.github.io',
  base: '/raha-ache',
  markdown: {
    remarkPlugins: [remarkEntityLinks]
  }
});
