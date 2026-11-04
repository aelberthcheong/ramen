<script lang="ts">
    import Ramen from "../../assets/icons/Ramen.svelte";

    let span: HTMLElement;
    const jostle = () => {
        span.animate(
            [
                { transform: "translateX(0) rotate(0)" },
                { transform: "translateX(-2px) rotate(-3deg)", offset: 0.25 },
                { transform: "translateX(2px) rotate(3deg)", offset: 0.75 },
                { transform: "translateX(0) rotate(0)" },
            ],
            { duration: 500, easing: "ease-in-out" },
        );
    };

    const { width = "60px", height = "60px" } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<span bind:this={span} onclick={jostle}>
    <Ramen {width} {height} />
</span>

<style>
    span {
        cursor: pointer;
        user-select: none;
    }
</style>
