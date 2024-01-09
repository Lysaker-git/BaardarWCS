<script lang="ts">
	import { Accordion, AccordionItem, AppBar, Tab, TabGroup } from "@skeletonlabs/skeleton";
    import { myCourses } from "$lib/data/courses/courses";
    import Course from "$lib/components/courseItem/course.svelte";
    
</script>

<section>
    <div class="grid place-items-center h-80">
        <h1 class="h1">What courses do we provide?</h1>
    </div>

    <div class="mx-auto w-fit">
            <section class="card p-5 rounded-none">
                <Accordion autocollapse>
                    {#each myCourses as course}
                        <Course courseItem={course} />
                        
                    {/each}
                </Accordion>
            </section>
    </div>
</section>