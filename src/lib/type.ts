import type { LegacyComponentType } from "svelte/legacy";

/**
 * @see {@link https://github.com/yusukebe/ramen-api | Author}
 */
export type Author = {
    id: string;
    name: string;
    url: string;
};

/**
 * @see {@link https://github.com/yusukebe/ramen-api | Photo}
 */
export type Photo = {
    name: string;
    url: string;
    width: number;
    height: number;
    authorId?: string;
    author?: Author;
};

/**
 * @see {@link https://github.com/yusukebe/ramen-api | Shop}
 */
export type Shop = {
    id: string;
    name?: string;
    prefecture?: string;
    photos: Photo[];
};

export type ShopsResponse = {
    shops: Shop[];
    totalCount: number;
    nextPage: number | null;
    prevPage: number | null;
    lastPage: number;
    perPage: number;
    currentPage: number;
};

export type NavItem = {
    href: string;
    label: string;
    icon?: LegacyComponentType;
};
