<script lang="ts">
    import Logo from "#lib/components/Logo.svelte";
    import Carousel from "#lib/components/Carousel.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Ramen</title>
    <meta
        name="description"
        content="A compendium of world-famous Japanese ramen shops."
    />
    <link rel="canonical" href="https://ramen.aelberthcheong.dev/" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Ramen" />
    <meta property="og:title" content="Ramen" />
    <meta
        property="og:description"
        content="A compendium of world-famous Japanese ramen shops."
    />
    <meta property="og:url" content="https://ramen.aelberthcheong.dev/" />
    <meta
        property="og:image"
        content="https://ramen.aelberthcheong.dev/og.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="hero">
    <header>
        <Logo width="240px" height="140px" />
        <h1>Ramen. . .</h1>
        <p>
            A compendium for those with a gluttonous appetite for world-famous
            Japanese cuisine.
        </p>
    </header>
</section>
<Carousel shops={data.shops} />

<style>
    .hero {
        padding-left: var(--document-margin);
        padding-right: var(--document-margin);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero header {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
        text-align: center;

        & p {
            max-width: 36rem;
        }
    }
</style>
