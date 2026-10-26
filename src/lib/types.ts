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
    photos?: Photo[];
};

/**
 * @see {@link https://github.com/yusukebe/ramen-api | Author}
 */
export type Author = {
    id: string;
    name: string;
    url: string;
};

export type NavItem = {
    href: string;
    label: string;
    icon?: Component;
};
