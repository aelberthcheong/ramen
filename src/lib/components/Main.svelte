<script lang="ts">
    let { children } = $props();
</script>

<main>
    {@render children()}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: clamp(2rem, 0.8rem + 4vw, 4rem);
        margin-top: clamp(3rem, 1.8rem + 4vw, 5rem);
        width: 100%;
    }
</style>
