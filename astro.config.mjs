// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://ramen.aelberthcheong.dev",
    build: { inlineStylesheets: "always" },
    redirects: {
        "/1": "/",
    },
    integrations: [svelte(), sitemap()],
});
