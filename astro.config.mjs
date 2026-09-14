// @ts-check

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config';
import { tagRedirects } from './src/tag-redirects.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://madewithwagtail.org',
  integrations: [react(), sitemap()],
  // Meta-refresh pages for legacy /sites/tag/<slug>/ URLs that no longer
  // resolve to a facet page (the only redirect mechanism on GitHub Pages).
  redirects: tagRedirects,
  // Serve content images as-is: no resizing, re-encoding, or format conversion.
  image: { service: passthroughImageService() },
  vite: {
    css: {
      lightningcss: {
        errorRecovery: true,
      },
    },
  },
});
