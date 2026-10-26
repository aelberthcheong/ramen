import type { NavItem } from "#lib/types.ts";
import Twitter from "#lib/icons/Twitter.svelte";
import LinkedIn from "#lib/icons/LinkedIn.svelte";
import Github from "#lib/icons/Github.svelte";
import Mail from "#lib/icons/Mail.svelte";

export const headers: NavItem[] = [
    { href: "/shops", label: "Shops" },
    { href: "/about", label: "About" },
];

export const footers: NavItem[] = [
    { href: "https://github.com/aelberthcheong", label: "GitHub", icon: Github },
    { href: "https://linkedin.com/in/aelberthcheong", label: "LinkedIn", icon: LinkedIn },
    { href: "https://twitter.com/akunsialbert", label: "X/Twitter", icon: Twitter },
    { href: "mailto:aelberth.cheong@outlook.com", label: "Outlook", icon: Mail },
];
