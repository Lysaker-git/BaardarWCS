<script lang="ts">
	import PageNav from './../utils/pageNav.svelte';
    import { LightSwitch } from "@skeletonlabs/skeleton";
	import MobileNav from "../utils/mobileNav.svelte";
    let myWidth = 0;

</script>

<svelte:window bind:innerWidth={myWidth}/>
<header class="flex">
    <div>
        <img alt="" src=""/>
    </div>
    {#if myWidth <= 700}
    <MobileNav />
    {:else}
    <div class="ml-auto">
            <PageNav />
    </div>
    {/if}
    <!-- <div class="absolute bottom-7 right-7 z-10">
        <LightSwitch />
    </div> -->
</header>
