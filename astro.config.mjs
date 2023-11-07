import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stellar-platypus-a47c95.netlify.app/",
  integrations: [preact()]
});