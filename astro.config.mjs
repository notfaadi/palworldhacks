import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'http://localhost:4321',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/palworld-hacks/',
    '/cheats/lite/': '/products/palworld-hacks/',
    '/cheats/pro/': '/products/palworld-hacks/',
    '/cheats/elite/': '/products/palworld-hacks/elite/',
    '/cheats/compare/': '/blog/palworld-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/palworld-hacks/',
    '/products/dota-2-cheats/elite/': '/products/palworld-hacks/elite/',
    '/products/dota-2-cheats/utilities/': '/products/palworld-hacks/utilities/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
