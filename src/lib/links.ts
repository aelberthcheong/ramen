import type { NavItem } from "#lib/types.ts";
import Twitter from "#lib/assets/icons/Twitter.svelte";
import Github from "#lib/assets/icons/Github.svelte";
import Mail from "#lib/assets/icons/Mail.svelte";

export const headers: NavItem[] = [
    { href: "/shops", label: "Shops" },
    { href: "/about", label: "About" },
];

export const footers: NavItem[] = [
    { href: "https://github.com/aelberthcheong/ramen", label: "GitHub", icon: Github },
    { href: "https://twitter.com/akunsialbert", label: "X/Twitter", icon: Twitter },
    { href: "mailto:aelberth.cheong@outlook.com", label: "Outlook", icon: Mail },
];
