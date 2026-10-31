<script lang="ts">
    import Logo from "#lib/components/Logo.svelte";
    import { page } from "$app/state";

    const status = $derived(page.status);
    const title = $derived(
        status === 404 ? "Page Not Found" : "Something Went Wrong",
    );
    const description = $derived(
        status === 404
            ? "I don't think this is the web page you are looking for."
            : "An unexpected error occurred.",
    );
</script>

<svelte:head>
    <title>{status} • Ramen</title>
</svelte:head>

<section>
    <div>
        <Logo width="240px" height="140px" />
        <h1>{title}</h1>
        <p>
            {description}
            {#if page.url.pathname !== "/"}
                <br />
                Go back to <a href="/">Home.</a>
            {/if}
        </p>
    </div>
</section>

<style>
    section {
        padding-left: var(--document-margin);
        padding-right: var(--document-margin);

        display: grid;
        place-items: center;
        flex: 1;
    }

    section div {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
        text-align: center;
    }

    section div p {
        max-width: 36rem;
    }
</style>
