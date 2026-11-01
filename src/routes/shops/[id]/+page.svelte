<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
    <title>{data.shop.name} • Ramen</title>
</svelte:head>

<article>
    <h1>{data.shop.name}</h1>
    <p>{data.shop.prefecture}</p>
</article>
