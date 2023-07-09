<script>
    import logo from '$lib/components/assets/WCS-Club_txt.svg';
    import WcsNavLinks from './WcsNavLinks.svelte';
</script>

<header>
    <div>
        <a href="/">
            <img src={logo} alt='logo' />
        </a>
    </div>
    <WcsNavLinks />
</header>

<style>
    * {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        height: 2rem;
    }
</style>