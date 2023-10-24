<script lang="ts">
    import { AccordionItem, TabGroup, Tab } from "@skeletonlabs/skeleton";

    export let courseItem: object;
    let tabGroup: number = 0;

    
</script>

{#if courseItem.title === 'Level One'}
    <AccordionItem open >
        <svelte:fragment slot="summary"><h2 class="h3">{courseItem.title}</h2></svelte:fragment>
        <svelte:fragment slot="content">
            <TabGroup justify="justify-center">
                <Tab bind:group={tabGroup} name="tabOne" value={0}>
                    <span>Overview</span>
                </Tab>
                <Tab bind:group={tabGroup} name="tabTwo" value={1}>
                    <span>Detailed</span>
                </Tab>
                <Tab bind:group={tabGroup} name="tabThree" value={2}>
                    <span>Goal</span>
                </Tab>
                <svelte:fragment slot="panel">
                    {#if tabGroup === 0}
                    <p class="w-modal min-w-full">{courseItem.overview}</p>
                    {:else if tabGroup === 1}
                    <p class="w-modal min-w-full">{courseItem.detailed}</p>
                    {:else if tabGroup === 2}
                    <p class="w-modal min-w-full">{courseItem.goal}</p>
                    {/if}
                </svelte:fragment>
            </TabGroup>
            <a class="button-base-styles variant-filled-primary" href="#">Book my class!</a>
        </svelte:fragment>
    </AccordionItem>
{:else}
    <AccordionItem >
        <svelte:fragment slot="summary"><h2 class="h3">{courseItem.title}</h2></svelte:fragment>
        <svelte:fragment slot="content">
            <TabGroup justify="justify-center">
                <Tab bind:group={tabGroup} name="tabOne" value={0}>
                    <span>Overview</span>
                </Tab>
                <Tab bind:group={tabGroup} name="tabTwo" value={1}>
                    <span>Detailed</span>
                </Tab>
                <Tab bind:group={tabGroup} name="tabThree" value={2}>
                    <span>Goal</span>
                </Tab>
                <svelte:fragment slot="panel">
                    {#if tabGroup === 0}
                    <p class="w-modal min-w-full">{courseItem.overview}</p>
                    {:else if tabGroup === 1}
                    <p class="w-modal min-w-full">{courseItem.detailed}</p>
                    {:else if tabGroup === 2}
                    <p class="w-modal min-w-full">{courseItem.goal}</p>
                    {/if}
                </svelte:fragment>
            </TabGroup>
            <a class="button-base-styles variant-filled-primary" href="#">Book my class!</a>
        </svelte:fragment>
    </AccordionItem>
{/if}