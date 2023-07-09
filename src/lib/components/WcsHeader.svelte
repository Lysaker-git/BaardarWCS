<script>
    import logo from '$lib/components/assets/WCS-Club_txt.svg';
</script>

<header>
    <div>
        <a href="/">
            <img src={logo} alt='logo' />
        </a>
    </div>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/classes">Classes</a>
            </li>
            <li>
                <a href="/events">Events</a>
            </li>
            <li>
                <a href="/about">The Team</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    * {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        height: 2rem;
        fill: red;
    }
</style>