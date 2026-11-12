import type { AuthorResponse, ShopsResponse } from "./type.ts";

export const maxPerPage = 100;
async function fetchJson<T>(path: string): Promise<T> {
    const url = `https://ramen-api.dev${path}`;
    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error(`Failed to fetch "${url}" (${resp.status})`);
    }

    return resp.json();
}

export const fetchAuthors = (authorId: string) => fetchJson<AuthorResponse>(`/authors/${authorId}`);
export const fetchShop = (page: number, perPage = maxPerPage) =>
    fetchJson<ShopsResponse>(`/shops?page=${page}&perPage=${perPage}`);

export async function fetchShops() {
    const first = await fetchShop(1);
    const pageCount = Math.ceil(first.totalCount / maxPerPage);

    const rest = await Promise.all(
        Array.from(
            { length: Math.max(pageCount - 1, 0) },
            (_, i) => fetchShop(i + 2),
        ),
    );

    return [first, ...rest].flatMap((r) => r.shops);
}
