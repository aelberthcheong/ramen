<script lang="ts">
    import { footers } from "#lib/links.ts";

    const isMailToUrl = (href: string) => /^mailto?:\/\//.test(href);
</script>

<footer>
    <section>
        <div class="footnote">
            <p>
                © 2026 Ramen • Powered by
                <a
                    href="https://github.com/yusukebe/ramen-api"
                    aria-label="ramen-api">Ramen API</a
                >
            </p>
        </div>
        <nav aria-label="social-media">
            <ul>
                {#each footers as { href, label, icon: Icon }}
                    <li>
                        <a
                            {href}
                            aria-label={label}
                            target={isMailToUrl(href) ? undefined : "_blank"}
                            rel={isMailToUrl(href)
                                ? undefined
                                : "noopener noreferrer"}
                        >
                            {#if Icon}
                                <Icon />
                            {:else}
                                {label}
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </section>
</footer>

<style>
    footer {
        padding-left: var(--document-margin);
        padding-right: var(--document-margin);
    }

    footer {
        margin-top: clamp(3rem, 1.8rem + 4vw, 5rem);
    }

    footer section {
        padding-block: 20px 40px;
        padding-inline: 12px;

        display: flex;
        align-items: center;
        gap: clamp(1rem, 0.5rem + 2vw, 2rem);
    }

    .footnote {
        margin-right: auto;
    }

    .footnote > p {
        line-height: 1.287;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul a {
        display: grid;
        place-items: center;
        width: 2.5rem;
        height: 2.5rem;
        color: inherit;
        border-radius: var(--border-radius-full);
        transition: background-color 150ms;
    }

    ul a:hover {
        background-color: var(--saffron-03);
    }

    ul a :global(svg) {
        width: 1.5rem;
        height: 1.5rem;
    }

    p a {
        color: rgb(from var(--raisin) r g b / 60%);
    }
</style>
