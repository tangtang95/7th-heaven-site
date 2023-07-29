<script lang="ts">
    import Spinner from "./spinner.svelte";
    import { getModsFromCatalogTagRelease } from "$lib/catalog-service";

    const mods = getModsFromCatalogTagRelease('canary');
</script>

<h2 class="text-center">Mods</h2>
{#await mods}
    <div class="text-center">
        <Spinner />
    </div>
{:then mods}
    <ul class="list-disc list-inside">
        {#each mods as mod}
            <li>{mod.Name}</li>
        {/each}
    </ul>
{:catch}
    <div class="text-center">
        <Spinner />
    </div>
{/await}