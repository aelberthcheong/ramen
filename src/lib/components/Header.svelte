<script lang="ts">
    import Navigation from "#lib/components/Navigation.svelte";
    import Logo from "#lib/components/Logo.svelte";
    import { headers } from "#lib/links.ts";
</script>

<header>
    <a href="/" aria-label="home">
        <Logo />
    </a>
    <Navigation links={headers} />
</header>

<style>
    header {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: var(--header-py) var(--document-margin);
    }
</style>
