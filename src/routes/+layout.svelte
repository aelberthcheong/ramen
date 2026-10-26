<script lang="ts">
	import "#lib/assets/styles/main.css";
	import spaceGrotesk from "#lib/assets/fonts/SpaceGrotesk-Variable.woff2?url";
	import mayenne from "#lib/assets/fonts/Mayenne_Sans-Regular_web.woff2?url";

	import Header from "#lib/components/Header.svelte";
	import Main from "#lib/components/Main.svelte";
	import Footer from "#lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link
		rel="preload"
		href={spaceGrotesk}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href={mayenne}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<title>Ramen</title>
</svelte:head>

<Header />
<Main {children} />
<Footer />
