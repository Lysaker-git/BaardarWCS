<script>
	import WcsContact from "./WcsContact.svelte";
    import WcsNavLinks from "./WcsNavLinks.svelte";
</script>

<footer>
    <div>
        <article>
            <WcsContact />
        </article>
    </div>
    <WcsNavLinks />
</footer>

<style>
    article {
        max-width: 800px;
        margin: 0 auto;
    }
    footer {
        margin-bottom: 5rem;
    }
</style>