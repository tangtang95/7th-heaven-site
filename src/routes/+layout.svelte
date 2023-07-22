<script>
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
    import '../app.css';

    let navLinks = [
        {
            title: 'Home',
            link: '#home'
        },
        {
            title: 'Download',
            link: '#download'
        },
        {
            title: 'Acknowledgements',
            link: '#acknowledgements'
        }
    ];

    $: hrefPath = $page.url.href.substring($page.url.origin.length + 1);
    $: currentNavLink = navLinks.findIndex((navLink) => navLink.link === hrefPath);
    $: validNavLink = currentNavLink != -1 ? currentNavLink : 0;

    let navbarHidden = true;
</script>

<nav>
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" class="flex items-center">
            <img src="logo.png" class="mr-3 h-8" alt="7th Heaven Logo" />
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                7th Heaven
            </span>
        </a>
        <button
            on:click={() => (navbarHidden = !navbarHidden)}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-accent dark:focus:ring-primary md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <span class="sr-only">Open main menu</span>
            <svg
                class="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
        <div class="w-full md:block md:w-auto" class:hidden={navbarHidden} id="navbar-default">
            <ul
                class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-primary dark:bg-secondary md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-black"
            >
                {#each navLinks as navLink, i}
                    <li>
                        <a
                            class='block rounded py-2 pl-3 pr-4 hover:bg-accent hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent'
                            class:md:text-accent={validNavLink === i}
                            href={navLink.link}
                            aria-current={validNavLink === i ? 'page' : null}
                        >
                            {navLink.title}
                        </a>
                    </li>
                {/each}
                <li class="block self-center">
                    <a class="hover:text-accent" href="https://github.com/tsunamods-codes/7th-Heaven">
                        <Icon icon="mdi:github" width="24" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<slot />

<footer class="m-4 rounded-lg bg-white shadow dark:bg-black">
    <div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
            >© 2023 <a href="/" class="hover:underline">7th Heaven</a>. All Rights Reserved.
        </span>
    </div>
</footer>
