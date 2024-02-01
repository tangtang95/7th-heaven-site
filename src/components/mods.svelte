<script lang="ts">
    import Spinner from './spinner.svelte';
    import { getModsFromCatalogTagRelease } from '$lib/catalog-service';
    import { CATALOG_ID_TO_SHOW } from '$lib/constants';

    const mods = getModsFromCatalogTagRelease('canary')
        .then(mods => mods.filter(mod => CATALOG_ID_TO_SHOW.includes(mod.ID)));
    $: console.log(mods);
</script>

<h2 class="text-center">Mods</h2>
{#await mods}
    <div class="text-center">
        <Spinner />
    </div>
{:then mods}
    <ul class="list-disc list-outside">
        {#each mods as mod}
            <li>
                {mod.Name}<br>
                {#if Array.isArray(mod.LatestVersion.Link)}
                    {#each mod.LatestVersion.Link as link, i}
                        <a href={link}>[Download with 7th]</a><br>
                    {/each}
                {:else}
                    <a href={mod.LatestVersion.Link}>[Download with 7th]</a> or manual download
                {/if}
                
            </li>
        {/each}
    </ul>
{:catch}
    <div class="text-center">
        <Spinner />
    </div>
{/await}
