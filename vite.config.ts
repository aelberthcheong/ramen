import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
            },
            adapter: adapter({ fallback: "404.html" }),
        }),
    ],
    /**
     * Custom chunking is optional, and SvelteKit’s defaults are usually fine.
     * Only keep it if we have a measured reason.
     */
    // build: {
    //     rollupOptions: {
    //         platform: "browser",
    //         output: {
    //             codeSplitting: {
    //                 groups: [
    //                     {
    //                         test: /node_modules[\\/]bits-ui[\\/]/,
    //                         name: "bits-ui",
    //                         priority: 1,
    //                     },
    //                     {
    //                         test: /node_modules/,
    //                         name: "vendor",
    //                         priority: 0,
    //                     },
    //                 ],
    //             },
    //         },
    //     },
    // },
});
