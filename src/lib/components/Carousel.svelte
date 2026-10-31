<script lang="ts">
    import type { ShopsResponse } from "#lib/types.ts";

    let { shops }: { shops: ShopsResponse["shops"] } = $props();
</script>

<section class="carousel">
    {#each shops as shop, i (shop.id)}
        {@const photo = shop.photos[0]}
        <a
            class="slide"
            href="/shops/{shop.id}"
            style="animation-delay: {i * 0.1}s"
        >
            {#if photo}
                <figure class="photo">
                    <img
                        src={photo.url}
                        alt={shop.name}
                        width={photo.width}
                        height={photo.height}
                        loading={i < 2 ? "eager" : "lazy"}
                    />
                </figure>
            {/if}
            <h3 lang="jp">{shop.name}</h3>
            <p lang="jp">{shop.prefecture}</p>
        </a>
    {/each}
</section>

<style>
    .carousel {
        padding-top: 1rem;
        padding-bottom: 1rem;

        display: flex;
        gap: clamp(1rem, 0.4rem + 2vw, 2rem);
        padding-inline: var(--document-margin);
        scroll-padding-inline: var(--document-margin);
        max-inline-size: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
    }

    .slide {
        flex: 0 0 auto;
        scroll-snap-align: center;
        position: relative;
        isolation: isolate;
        display: block;
        text-decoration: none;

        min-width: 16rem;

        transform-origin: bottom center;
        opacity: 0;

        animation:
            cityGuideTransform 0.25s cubic-bezier(0, 0.23, 0.07, 1) forwards,
            cityGuideOpacity 0.5s cubic-bezier(0, 0.23, 0.07, 1) forwards;

        & > h3 {
            margin-top: 1.5rem;
        }

        & > p {
            margin-top: 0.125rem;
        }
    }

    .photo {
        aspect-ratio: 3 / 4;
        position: relative;
        margin: 0;

        & img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--border-radius-md);
        }
    }

    @keyframes cityGuideTransform {
        from {
            transform: translate3d(0, 1.25rem, 0) scale(0.96);
        }
        to {
            transform: none;
        }
    }

    @keyframes cityGuideOpacity {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .slide {
            animation: none;
            opacity: 1;
        }
    }

    @media (hover: hover) {
        .slide::before {
            content: "";
            position: absolute;
            z-index: -1;
            top: -1rem;
            left: -1rem;
            width: calc(100% + 2rem);
            height: calc(100% + 2rem);
            background-color: var(--saffron-03);

            transition: all 0.25s cubic-bezier(0, 0.23, 0.07, 1);
            transform-origin: center;
            transform: scale(0.96);
            opacity: 0;
        }

        .slide:hover::before {
            transform: none;
            opacity: 1;
        }
    }
</style>
