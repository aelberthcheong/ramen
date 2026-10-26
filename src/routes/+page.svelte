<script lang="ts">
    import Logo from "#lib/components/Logo.svelte";
</script>

<section>
    <header>
        <Logo width="240px" height="140px" />
        <h1>Ramen. . .</h1>
        <p>
            A compendium for those with a gluttonous appetite for world-famous
            Japanese gastronomy.
        </p>
    </header>
</section>
<section></section>

<style>
    section:first-of-type {
        padding-left: var(--document-margin);
        padding-right: var(--document-margin);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    section:first-of-type header {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
        text-align: center;
    }

    section:first-of-type header p {
        max-width: 36rem;
    }
</style>
