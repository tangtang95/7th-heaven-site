<script lang="ts">
    import Button from './button.svelte';
    import Spinner from './spinner.svelte';
    import Icon from '@iconify/svelte';
    import { getLatest7thRelease } from '$lib/mod-manager-service';

    const releaseInfo = getLatest7thRelease();
</script>

<h2 class="py-4 text-center">Download</h2>

<p>
    Download the file and extract the files. You do NOT need to install a previous version to
    use/upgrade to the latest version. You can install over any previous version into the same
    folder if you wish. Direct download is available below.
</p>
{#await releaseInfo}
    <div class="text-center">
        <Spinner />
    </div>
{:then releaseInfo}
    <div class="text-center">
        <a href={releaseInfo.exeDownloadUrl}>
            <Button>
                <Icon icon="material-symbols:download" width="32px" height="32px" class="inline"/> <span class="align-middle">7th Heaven {releaseInfo.tagName} Stable Setup</span>
            </Button>
        </a>
    </div>
{:catch}
    <!-- Fallback to Github Latest Release page -->
    <div class="text-center">
        <h3>7th Heaven Stable Release Github Link</h3>
        <a href="https://github.com/tsunamods-codes/7th-Heaven/releases/latest">
            <Button>Go to Github Latest Release page</Button>
        </a>
    </div>
{/await}
<p>
    The latest canary build can be obtained on the following link. This has the latest experimental
    features we are working on and may be buggy.
</p>
<div class="text-center">
    <a href="https://github.com/tsunamods-codes/7th-Heaven/releases/tag/canary">
        <Button class="p-2">Go to Canary Release page</Button>
    </a>
</div>
<p>
    The installer should automatically install the dependencies, but if you have dependency popup's
    when starting 7th Heaven then please also install <b>.NET Desktop Runtime (both x86 and x64)</b>
    from the first link direct from Microsoft. Finally also the
    <b>Microsoft Visual C++ 2015, 2017, 2019, 2022 Redistributable</b>
    libraries from the second link (x86 and x64).
</p>
<ul class="list-inside list-disc pl-3">
    <li>
        <a href="https://dotnet.microsoft.com/en-us/download/dotnet/7.0"
            >Microsoft .NET Desktop Runtime</a
        >
    </li>
    <li>
        <a
            href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022"
            >Microsoft Visual C++ Redistributable</a
        >
    </li>
</ul>
