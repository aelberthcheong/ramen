<script lang="ts">
    import Gunkanmaki from "#lib/assets/teams/Gunkanmaki.svelte";
    import KappaMaki from "#lib/assets/teams/KappaMaki.svelte";
    import SakeMaki from "#lib/assets/teams/SakeMaki.svelte";

    const teams = [
        { name: "Albert Cheong", image: Gunkanmaki, color: "var(--coral-02)" },
        { name: "Fendy", image: KappaMaki, color: "var(--moss-02)" },
        { name: "Laurencio Luckson", image: SakeMaki, color: "var(--wine-03)" },
    ];
</script>

<svelte:head>
    <title>About • Ramen</title>
</svelte:head>

<article>
    <header>
        <h1>About</h1>
        <p>
            Ramen is a web app built as a submission for our university computer
            science course. It's a simple frontend for a publicly available API,
            which we've also reused in our other courses. In our dev ops course,
            for example, we put it behind an nginx reverse proxy. Basically it's
            our Hello World.
        </p>
    </header>
    <section>
        <h2>Team</h2>
        <div class="team">
            {#each teams as member (member.name)}
                <div class="member">
                    <figure
                        style="background-color: {member.color}"
                        aria-hidden="true"
                    >
                        <member.image />
                    </figure>
                    <p>{member.name}</p>
                </div>
            {/each}
        </div>
    </section>
    <section>
        <h2>Special Thanks</h2>
        <p>
            Thanks to the <a
                href="https://github.com/yusukebe/ramen-api"
                rel="noopener noreferrer"
                target="_blank">Ramen API</a
            >
            project by Yusukebe and its contributors.
        </p>
    </section>
</article>

<style>
    header,
    section {
        padding-inline: max(
            var(--document-margin),
            50vw - var(--content-regular) / 2
        );
    }

    article > * {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    article > header > h1 {
        margin-bottom: clamp(1rem, 0.775rem + 0.75vw, 1.375rem);
    }

    .team {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
        gap: 1.5rem 1rem;
    }

    .member {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
        text-align: center;
    }

    .member figure {
        margin: 0;
        width: 100%;
        max-width: 9rem;
        aspect-ratio: 1;
        border-radius: 50%;

        display: grid;
        place-items: center;
        padding: 10%;
        box-sizing: border-box;
        overflow: hidden;
    }

    .member figure :global(svg) {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
