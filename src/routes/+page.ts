import type { ShopsResponse } from "#lib/types.ts";
import type { PageLoad } from "../../.svelte-kit/types/src/routes/$types.d.ts";

import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
    const resp = await fetch(`https://ramen-api.dev/shops?page=1&perPage=10`);
    if (!resp.ok) {
        error(502, `Failed to fetch from "https://ramen-api.dev"`);
    }

    return (
        await resp.json() as ShopsResponse
    );
};
