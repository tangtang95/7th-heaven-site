<script>
    import Acknoledgements from '../components/acknoledgements.svelte';
    import Download from '../components/download.svelte';
    import Home from '../components/home.svelte';
</script>

<div class="px-5 xl:px-72">
    <section id="home">
        <Home />
    </section>
    <section id="download">
        <Download />
    </section>
    <section id="acknowledgements">
        <Acknoledgements />
    </section>
</div>

<style lang="postcss">
    div :global(a) {
        @apply text-primary dark:text-accent;
        @apply hover:underline;
    }
</style>
