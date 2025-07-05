// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://violet-virgo-3b1zr1eet-hasansarwers-projects.vercel.app",
  integrations: [preact()]
});