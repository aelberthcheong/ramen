<script lang="ts">
    import Logo from "#lib/components/Logo.svelte";
    import Carousel from "#lib/components/Carousel.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Ramen</title>
</svelte:head>

<section class="hero">
    <header>
        <Logo width="240px" height="140px" />
        <h1>Ramen. . .</h1>
        <p>
            A compendium for those with a gluttonous appetite for world-famous
            Japanese gastronomy.
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
