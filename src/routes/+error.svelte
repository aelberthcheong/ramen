<script lang="ts">
    import Logo from "#lib/components/Logo.svelte";
</script>

<section>
    <div>
        <Logo width="240px" height="140px" />
        <h1>Page Not Found</h1>
        <p>
            I don't think this is the web page you are looking for. <br />
            Go back to <a href="/">Home.</a>
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
