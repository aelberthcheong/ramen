import Github from "../assets/icons/Github.svelte";
import Mail from "../assets/icons/Mail.svelte";
import Twitter from "../assets/icons/Twitter.svelte";
import type { NavItem } from "./type.ts";

export type { NavItem };

export const headers: NavItem[] = [
    { href: "/shops", label: "Shops" },
    { href: "/about", label: "About" },
];

export const footers: NavItem[] = [
    { href: "https://github.com/aelberthcheong/ramen", label: "GitHub", icon: Github },
    { href: "https://twitter.com/akunsialbert", label: "X/Twitter", icon: Twitter },
    { href: "mailto:aelberth.cheong@outlook.com", label: "Outlook", icon: Mail },
];
