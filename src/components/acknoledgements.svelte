<script lang="ts">
    type Ack = {
        title: string;
        list: Array<{
            content: string;
            link?: string;
        }>;
    };

    let acks: Ack[] = [
        {
            title: '7th Heaven Developers',
            list: [
                {
                    content:
                        'Bonez, Chrysalis, Kuraudo, LaZar00, Lord Urquan, Myst6re, TrueOdin, sjenkins, Vertex2995 (Current)'
                },
                {
                    content: 'Martin Barker, rodriada, unaBomb (2.0/2.2)'
                },
                {
                    content: 'Ficedula, Iros, TrueOdin, TurBoss (1.x)'
                }
            ]
        },
        {
            title: '7th Heaven hosting platform',
            list: [{ content: 'Chrysalis' }]
        },
        {
            title: 'Final Fantasy 7 Modding community',
            list: [
                { content: 'Qhimm Community', link: 'https://forums.qhimm.com/' },
                { content: 'Tsunamods Community', link: 'https://forum.tsunamods.com/' }
            ]
        }
    ];
</script>

<h1 class="py-4 text-center text-2xl">Acknowledgements</h1>
<div class="flex flex-col py-2">
    <p class="my-3">The developers wish to thank you for using 7th Heaven.</p>
    {#each acks as ack}
        <div class="py-2">
            <h1 class="text-xl font-semibold">{ack.title}</h1>
            <ul class="list-inside list-disc">
                {#each ack.list as ackList}
                    <li class="pl-3">
                        {#if ackList.link}
                            <a
                                class="text-blue-600 hover:underline dark:text-blue-500"
                                href={ackList.link}>{ackList.content}</a
                            >
                        {:else}
                            {ackList.content}
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</div>
