import type { Component } from "svelte";

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

/**
 * @see {@link https://github.com/yusukebe/ramen-api | Author}
 */
export type Author = {
    id: string;
    name: string;
    url: string;
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
    icon?: Component;
};

/**
 * Determine if {@linkcode input} matches the `"object"` type
 */
export function isObject(input: unknown): input is object {
    return typeof input === "object" && !!input;
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * Helper type for creating an exclusive union between two types
 *
 * @see {@link https://stackoverflow.com/a/53229567/2250435 | StackOverflow Post}
 */
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;
