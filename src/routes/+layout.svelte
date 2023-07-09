<script>
	import WcsThemeProvider from './../lib/components/WcsThemeProvider.svelte';
	import WcsFooter from './../lib/components/WcsFooter.svelte';
    import '@picocss/pico';
    import WcsHeader from "../lib/components/WcsHeader.svelte";
    import WcsWrapper from "../lib/components/WcsWrapper.svelte";
</script>
<WcsThemeProvider>
    <WcsWrapper>
        <WcsHeader />
        <slot />
        <WcsFooter />
    </WcsWrapper>
</WcsThemeProvider>