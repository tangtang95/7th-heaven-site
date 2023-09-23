<button
    type="button"
    class={`bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full ${$$props.class}`}
    on:click
>
    <slot />
</button>