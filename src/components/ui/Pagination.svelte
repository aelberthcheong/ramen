<script lang="ts">
    import { Pagination } from "bits-ui";

    let {
        count,
        perPage,
        page,
        baseUrl = "",
    }: {
        count: number;
        perPage: number;
        page: number;
        baseUrl?: string;
    } = $props();

    // Page 1 lives at the base URL itself (e.g. "/"), the rest at "/2", "/3", ...
    const hrefFor = (p: number) =>
        p === 1 ? baseUrl || "/" : `${baseUrl}/${p}`;
</script>

<Pagination.Root
    {count}
    {perPage}
    {page}
    siblingCount={1}
    onPageChange={(p) => (window.location.href = hrefFor(p))}
>
    {#snippet children({ pages, range })}
        <nav class="pagination" aria-label="Pagination">
            <div class="controls">
                <Pagination.PrevButton
                    class="pg-btn pg-arrow"
                    aria-label="Previous page"
                >
                    <svg
                        viewBox="0 0 256 256"
                        width="16"
                        height="16"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"
                        />
                    </svg>
                </Pagination.PrevButton>

                <div class="pages">
                    {#each pages as p (p.key)}
                        {#if p.type === "ellipsis"}
                            <span class="pg-ellipsis" aria-hidden="true">…</span
                            >
                        {:else}
                            <Pagination.Page page={p} class="pg-btn pg-page">
                                {p.value}
                            </Pagination.Page>
                        {/if}
                    {/each}
                </div>

                <Pagination.NextButton
                    class="pg-btn pg-arrow"
                    aria-label="Next page"
                >
                    <svg
                        viewBox="0 0 256 256"
                        width="16"
                        height="16"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128 90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"
                        />
                    </svg>
                </Pagination.NextButton>
            </div>

            <p class="summary">
                Showing {range.start} - {range.end} of {count}
            </p>
        </nav>
    {/snippet}
</Pagination.Root>

<style>
    .pagination {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
        margin-top: 1.4rem;
        padding-inline: var(--document-margin);
    }

    .controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .pages {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    /* Bits UI renders the elements itself, so scoped styles need :global. */
    .pagination :global(.pg-btn) {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        min-width: 2.25rem;
        height: 2.25rem;
        padding: 0 0.5rem;

        font: inherit;
        font-size: 0.875rem;
        font-weight: 500;
        color: inherit;

        background: transparent;
        border: 0;
        border-radius: 0.5625rem;
        cursor: pointer;

        transition:
            background-color 0.15s ease,
            color 0.15s ease,
            transform 0.1s ease;
    }

    .pagination :global(.pg-btn:hover:not([data-selected]):not(:disabled)) {
        background: var(--saffron-03);
    }

    .pagination :global(.pg-btn:active:not(:disabled)) {
        transform: scale(0.95);
    }

    .pagination :global(.pg-page[data-selected]) {
        background: currentColor;
        cursor: default;
    }

    .pagination :global(.pg-page[data-selected] > *),
    .pagination :global(.pg-page[data-selected]) {
        background-color: var(
            --pagination-selected-text,
            color-mix(in srgb, currentColor 10%, transparent)
        );
    }

    .pagination :global(.pg-btn:disabled) {
        opacity: 0.4;
        cursor: not-allowed;
    }

    .pg-ellipsis {
        min-width: 1.5rem;
        text-align: center;
        opacity: 0.6;
        user-select: none;
    }

    .summary {
        margin: 0;
        font-size: 0.8125rem;
        opacity: 0.65;
    }
</style>
