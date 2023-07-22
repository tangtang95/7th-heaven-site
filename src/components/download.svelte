<script>
    import Button from './button.svelte';
</script>

<h2 class="py-4 text-center">Download</h2>

<p>
    Download the file and extract the files. You do NOT need to install a previous version to
    use/upgrade to the latest version. You can install over any previous version into the same
    folder if you wish. Direct download is available below.
</p>
<div class="text-center">
    <h3>7th Heaven 3.1 (Stable Build)</h3>
    <a href="">
        <Button>Download 7th Heaven Stable Setup</Button>
    </a>
</div>
<p>
    The latest canary build can be obtained on the following link. This has the latest experimental
    features we are working on and may be buggy.
</p>
<div class="text-center">
    <a href="">
        <Button class="p-2">Download Canary Build</Button>
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
    <li><a href="">Microsoft .NET Desktop Runtime</a></li>
    <li><a href="">Microsoft Visual C++ Redistributable</a></li>
</ul>
