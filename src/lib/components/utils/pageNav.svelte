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
            <TabAnchor  href="/index" selected={$page.url.pathname === '/index'}>Home</TabAnchor >
            <TabAnchor  href="/index/events" selected={$page.url.pathname === '/index/events'}>Events</TabAnchor >
            <TabAnchor  href="/index/courses" selected={$page.url.pathname === '/index/courses'}>Courses</TabAnchor >
            <TabAnchor  href="/index/parties" selected={$page.url.pathname === '/index/parties'}>Parties</TabAnchor >
            <TabAnchor  href="/index/instructors" selected={$page.url.pathname === '/index/instructors'}>Instructors</TabAnchor >
            <TabAnchor  href="/index/about" selected={$page.url.pathname === '/index/about'}>About</TabAnchor >
        </TabGroup>
    </ul>
</nav>