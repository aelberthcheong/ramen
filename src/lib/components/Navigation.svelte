<script lang="ts">
    import { page } from "$app/state";
    import Logo from "#lib/components/Logo.svelte";
    import type { NavItem } from "#lib/types.ts";

    let { links }: { links: NavItem[] } = $props();

    let open = $state(false);
    let toggle = $state<HTMLButtonElement>();
    let dialog = $state<HTMLDialogElement>();

    const isCurrent = (href: string) => page.url.pathname === href;

    const handleClosure = (event: Event) => {
        if (!open) return;

        const target = event.target as Node;
        if (!dialog?.contains(target) && !toggle?.contains(target)) {
            open = false;
        }
    };

    $effect(() => {
        page.url.pathname;
        open = false;
    });
</script>

<svelte:window
    onclick={handleClosure}
    onfocusin={handleClosure}
    ontouchstart={handleClosure}
    onkeydown={(e) => e.key === "Escape" && (open = false)}
/>

<nav class="desktop" aria-label="Main">
    {#each links as { href, label }}
        <a {href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</a
        >
    {/each}
</nav>

<button
    bind:this={toggle}
    class:active={open}
    aria-expanded={open}
    aria-controls="nav-dialog"
    aria-label="Menu"
    onclick={() => (open = !open)}
>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 100 100"
        xml:space="preserve"
    >
        <path
            d="M99.7 43.9c-.5-4.7-1.8-9.4-3.6-13.8C89.3 14 73.1 2.1 55.6.3S18.7 6 9.4 20.9C2.7 31.6-.8 35.9.1 58.4v.3c-.3 10.2 5.3 19.6 12.3 27.2s16.9 13 27.2 13.8c4.9.5 9.8.4 14.7-.2 5.1-.5 10.2-1.6 15.1-3.3 4.2-1.7 8.2-4 11.7-6.9 13.4-11.1 20.4-28.1 18.6-45.4z"
            fill="currentColor"
        ></path>

        {#if open}
            <path
                class="lines"
                d="M30.1 66.5c1.8-2 3.7-3.9 5.7-5.7 3.7-3.4 6.6-6.3 10.1-9.8 1.6-1.6 16.1-16.4 19.6-20.4.4-.4 1.1-.5 1.6-.1l.1.1 2.5 2.8c.6.6.5 1.5 0 2-11.5 11.4-23.2 22.9-35 34.1-.5.5-1.2.5-1.7.1-1.4-.8-3.4-2.2-2.9-3.1z"
            ></path>
            <path
                class="lines"
                d="M65.9 69.7C54.2 57.7 42.2 45.9 30 34.2c-.4-.4-.5-1.2-.1-1.6.9-1.1 1.4-1.7 2-2.3.5-.5 1.3-.6 1.9-.1 1.4 1.1 2.8 2.6 4.3 4 1.8 1.6 5.2 4.8 7 6.4L70 65c.4.4.5 1.1.2 1.5-.8 1.2-1.6 2.2-2.6 3.2-.6.6-1.3.6-1.7 0z"
            ></path>
        {:else}
            <path
                class="lines"
                d="m76.9 63.9-.2 3.3c-.1.7-.7 1.2-1.4 1.2-16.7-1.2-33.4.6-50.1.2-.6 0-1.1-.5-1.2-1.2 0-1.6-.2-4 .5-4.7 1-1 4.7-.4 6.1-.4l14.7-.1L75 62c.6-.1 1.2.1 1.6.4.3.5.4 1 .3 1.5zM24.6 48.5c2.7-.1 5.4-.1 8.1 0 5 .2 9.1.2 14.1.2 2.2 0 23-.2 28.3-.6.6 0 1.1.4 1.2 1v.1l-.2 3.7c0 .8-.7 1.4-1.4 1.4-16.3.2-32.7 0-49-.4-.6 0-1.1-.5-1.2-1.1-.4-1.6-.9-4 .1-4.3zM75.9 39.5c-16.8-.2-33.6-.1-50.5.3-.6 0-1.2-.5-1.2-1.1-.1-1.4-.2-2.2-.2-3 0-.7.5-1.4 1.3-1.4 1.8-.2 3.8-.1 5.9-.2 2.4-.1 7.1-.3 9.5-.4l34.8-.4c.6 0 1.1.4 1.2.9.3 1.4.4 2.7.4 4.1 0 .8-.5 1.3-1.2 1.2z"
            ></path>
        {/if}
    </svg>
</button>

<dialog
    bind:this={dialog}
    id="nav-dialog"
    class:has-tongue={open}
    inert={!open}
>
    <div class="dialog-logo">
        <a href="/" aria-label="home">
            <Logo />
        </a>
    </div>

    <nav class="mobile" aria-label="Main (mobile)">
        {#each links as { href, label }, i}
            <a
                {href}
                style:--i={i}
                aria-current={isCurrent(href) ? "page" : undefined}
                onclick={() => (open = false)}>{label}</a
            >
        {/each}
    </nav>
</dialog>

<style>
    .desktop {
        margin-left: auto;
        display: none;
        align-items: center;
        gap: 2rem;
    }

    .desktop a {
        position: relative;
        display: flex;
        justify-content: center;
        font-family: var(--type-font-family);
        font-size: 1.25rem;
        text-decoration: none;
        color: inherit;
    }

    .desktop a::before {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        width: 100%;
        height: 0.125rem;
        background-color: var(--raisin);
        transform-origin: top;
        transform: translateY(-2px);
        opacity: 0;
        transition: all 150ms 20ms cubic-bezier(0, 0, 0.2, 1);
        pointer-events: none;
    }

    .desktop a:hover::before,
    .desktop a[aria-current="page"]::before {
        transform: none;
        opacity: 1;
    }

    button {
        position: fixed;
        right: var(--document-margin);
        display: block;
        padding: 0;
        width: clamp(3.25rem, 2.95rem + 1vw, 3.75rem);
        height: clamp(3.25rem, 2.95rem + 1vw, 3.75rem);
        background-color: transparent;
        border: 0;
        border-radius: var(--border-radius-full);
        z-index: 666;
        transform-origin: center;
        transition: all 175ms 20ms cubic-bezier(0, 0, 0.2, 1);
    }

    button:active {
        transform: scale(0.9);
    }

    @media (prefers-reduced-motion: no-preference) {
        button:focus-visible {
            outline-offset: 0.5rem;
            outline: 0.25rem dashed var(--coral-05);
            transition: outline-offset 200ms ease;
        }
    }

    button svg {
        display: block;
        width: 100%;
        height: auto;
        color: var(--raisin);
    }

    button svg .lines {
        fill: #fafafa;
    }

    button.active svg {
        color: #fafafa;
    }

    button.active svg .lines {
        fill: var(--raisin);
    }

    dialog {
        position: fixed;
        display: grid;
        justify-items: start;
        top: 0;
        left: 0;
        right: 0;
        width: auto;
        height: auto;
        overflow: hidden;
        padding: var(--header-py) var(--document-margin);
        border: 0;
        border-bottom-left-radius: var(--border-radius-xl);
        border-bottom-right-radius: var(--border-radius-xl);
        background-color: var(--raisin);
        transform: translate3d(0, -100%, 0);
        transform-origin: bottom center;
        transition: transform 0.25s cubic-bezier(0.55, 0.08, 0, 1);
        z-index: 66;
    }

    dialog.has-tongue {
        transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
        dialog {
            display: none;
            visibility: hidden;
        }
        dialog.has-tongue {
            display: block;
            visibility: visible;
        }
    }

    .dialog-logo {
        display: flex; /* avoids the inline baseline gap under the svg */
        color: #fafafa;
        transform: translateY(6rem);
        opacity: 0;
        transition:
            opacity 0.8s cubic-bezier(0.55, 0.08, 0, 1),
            transform 0.5s cubic-bezier(0.55, 0.08, 0, 1);
    }

    .has-tongue .dialog-logo {
        transform: none;
        opacity: 1;
    }

    .dialog-logo :global(svg) {
        fill: currentColor;
    }

    .mobile {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 100%;
        margin-top: 1.5rem;
    }

    .mobile a {
        display: block;
        padding: 0.5rem;
        font-family: var(--type-font-family);
        font-size: clamp(1.5rem, 1.35rem + 0.5vw, 1.75rem);
        line-height: 1;
        text-decoration: none;
        text-align: right;
        color: #fafafa;
        background-color: transparent;
        border-radius: var(--border-radius-sm);
        transform: translateY(8rem);
        opacity: 0;
        transition:
            opacity 0.8s cubic-bezier(0.55, 0.08, 0, 1),
            transform 0.5s cubic-bezier(0.55, 0.08, 0, 1);
    }

    .has-tongue .mobile a {
        transform: none;
        opacity: 1;
        transition-delay: calc((var(--i) + 1) * 25ms); /* staggered */
    }

    @media (min-width: 768px) {
        .mobile {
            margin-top: 2rem;
        }
    }

    @media (min-width: 1280px) {
        .desktop {
            display: flex;
        }
        button,
        dialog {
            display: none;
            visibility: hidden;
        }
    }
</style>
