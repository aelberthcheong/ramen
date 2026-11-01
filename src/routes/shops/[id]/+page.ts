import { error } from "@sveltejs/kit";
import type { PageLoad } from "../../../../.svelte-kit/types/src/routes/shops/[id]/$types.d.ts";

export const load: PageLoad = async ({ fetch, params }) => {
    const resp = await fetch(
        `https://ramen-api.dev/shops/${encodeURIComponent(params.id)}`,
    );
    if (resp.status === 404) error(404, "Shop not found");
    if (!resp.ok) error(502, `Shops API returned ${resp.status}`);

    return { shop: await resp.json() };
};
