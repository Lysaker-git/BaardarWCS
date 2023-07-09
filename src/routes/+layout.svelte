<script>
    import '@picocss/pico';
    import WcsHeader from "../lib/components/WcsHeader.svelte";
    import WcsWrapper from "../lib/components/WcsWrapper.svelte";
</script>
<WcsWrapper>
    <WcsHeader />
    <slot />
    
    <footer>
        <h2>My footer</h2>
    </footer>
</WcsWrapper>