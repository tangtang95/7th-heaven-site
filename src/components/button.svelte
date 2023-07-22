<button
    type="button"
    class={`focus:ring-5 mt-2 rounded-full bg-primary p-3 text-white hover:-translate-y-1 hover:bg-accent hover:transition-all focus:ring-secondary ${$$props.class}`}
    on:click
>
    <slot />
</button>
