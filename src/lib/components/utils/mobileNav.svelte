<script lang="ts">
    import { page } from '$app/stores';
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';


</script>


<nav class="absolute flex items-center h-screen right-0">
    <ul>
        <AppRail>
            <AppRailAnchor href="/index" selected={$page.url.pathname === '/index'}>Home</AppRailAnchor>
            <AppRailAnchor href="/index/events" selected={$page.url.pathname === '/index/events'}>Events</AppRailAnchor>
            <AppRailAnchor href="/index/courses" selected={$page.url.pathname === '/index/courses'}>Courses</AppRailAnchor>
            <AppRailAnchor href="/index/parties" selected={$page.url.pathname === '/index/parties'}>Parties</AppRailAnchor>
            <AppRailAnchor href="/index/instructors" selected={$page.url.pathname === '/index/instructors'}>Instructors</AppRailAnchor>
            <AppRailAnchor href="/index/about" selected={$page.url.pathname === '/index/about'}>About</AppRailAnchor>
        </AppRail>
    </ul>
</nav>