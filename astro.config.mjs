// @ts-check

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://madewithwagtail.org',
  integrations: [react(), sitemap()],
  // Meta-refresh pages for the legacy tag URLs worth preserving; all other
  // legacy /sites/tag/ URLs are left to 404.
  redirects: {
    '/sites/tag/education': '/sites/sector/education/',
    '/sites/tag/blog': '/sites/type/blog/',
    '/sites/tag/portfolio': '/sites/type/portfolio/',
    '/sites/tag/industry': '/sites/sector/industry/',
    '/sites/tag/news': '/sites/type/news/',
  },
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
