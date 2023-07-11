<script>
    import logo from '$lib/components/assets/WCS-Club_txt.svg';
    import WcsNavLinks from './WcsNavLinks.svelte';
</script>

<header class="container">
    <div>
        <a href="/">
            <img src={logo} alt='logo' />
        </a>
    </div>
    <WcsNavLinks />
</header>

<style>
    header {
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
    }
    img {
        height: 2rem;
    }
</style>