<script lang="ts">
    import { page } from '$app/stores';
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';


</script>


<nav class="absolute flex items-center h-screen right-0">
    <ul>
        <AppRail>
            <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>Home</AppRailAnchor>
            <AppRailAnchor href="/events" selected={$page.url.pathname === '/events'}>Events</AppRailAnchor>
            <AppRailAnchor href="/courses" selected={$page.url.pathname === '/courses'}>Courses</AppRailAnchor>
            <AppRailAnchor href="/parties" selected={$page.url.pathname === '/parties'}>Parties</AppRailAnchor>
            <AppRailAnchor href="/instructors" selected={$page.url.pathname === '/instructors'}>Instructors</AppRailAnchor>
            <AppRailAnchor href="/about" selected={$page.url.pathname === '/about'}>About</AppRailAnchor>
        </AppRail>
    </ul>
</nav>