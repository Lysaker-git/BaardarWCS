<script lang="ts">
    import { page } from '$app/stores';
    import { AppRail, TabAnchor , TabGroup } from '@skeletonlabs/skeleton';


</script>


<nav >
    <ul>
        <TabGroup
         active="variant-filled-primary"
         hover="hover:variant-soft-primary"
         flex="flex-1 lg:flex-none"
         rounded=""
         border=""
         class="w-full"
        >
            <TabAnchor  href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor >
            <TabAnchor  href="/events" selected={$page.url.pathname === '/events'}>Events</TabAnchor >
            <TabAnchor  href="/courses" selected={$page.url.pathname === '/courses'}>Courses</TabAnchor >
            <TabAnchor  href="/parties" selected={$page.url.pathname === '/parties'}>Parties</TabAnchor >
            <TabAnchor  href="/instructors" selected={$page.url.pathname === '/instructors'}>Instructors</TabAnchor >
            <TabAnchor  href="/about" selected={$page.url.pathname === '/about'}>About</TabAnchor >
        </TabGroup>
    </ul>
</nav>