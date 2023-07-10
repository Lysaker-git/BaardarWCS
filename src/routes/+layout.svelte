<script>
	import WcsThemeProvider from './../lib/components/WcsThemeProvider.svelte';
	import WcsFooter from './../lib/components/WcsFooter.svelte';
    import WcsHeader from "../lib/components/WcsHeader.svelte";
    import WcsWrapper from "../lib/components/WcsWrapper.svelte";
    import '@picocss/pico';
</script>
<WcsThemeProvider>
    <WcsWrapper>
        <WcsHeader />
        <slot />
        <WcsFooter />
    </WcsWrapper>
</WcsThemeProvider>