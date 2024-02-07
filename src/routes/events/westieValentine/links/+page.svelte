<script lang="ts">
    import overview from '$lib/assets/img/Overview.png';
    import schedule from '$lib/assets/img/schedule.png';
    import { myRestaurants } from "$lib/data/westieValentine/restaurants"
    import arrow from '$lib/assets/arrow-right.svg';
</script>

<main class="container mx-auto grid place-items-center my-10">
    <h1 class="h1">Westie valentines information</h1>
    <section class="mt-10">
        <h2 class="h2 mb-2 mx-auto">
            Schedule
        </h2>
    </section>
    <div class="card overflow-hidden shadow-md">
        <section>
            <img src={schedule} alt="schedule to the event"/>
        </section>  
    </div>
    <section>
        <div class="">
            <h2 class="h2 mt-10 mb-4">
                How do i get to Westie Valentine?
            </h2>
        </div>
        <div class="card p-4">
            <h2 class="h4 mb-4">There is three solid options to get to the location by subway unless you are staying at Halse Linie.</h2>
            <p>These options are:</p>
            <ul class="list-disc list-inside ">
                <li class=" my-2 ">
                    You can take subway 5 to Hasle then walk the yellow path on the map below. The path will take roughly 12 minutes to walk.
                </li>
                <li class=" my-2 ">
                    Same as above you can take 4 or 5 to Økern subway station and then walk the Light blue path. This will roughly take you 11 minutes to walk.
                </li>
                <li class=" my-2 ">
                    Lastly you can take subway 4 to Løren subway station and then walk the dark blue path. This route will take you roughly 18 minutes to walk.
                </li>
            </ul>
        </div>
    </section>
    <div class="card my-5 overflow-hidden shadow-md">
        <section>
            <img src={overview} alt="map of westie valentine area with locations to hotel, subway and 16 restaurants" />
        </section>
    </div>
    <section class="w-full">
        <h2 class="h2 mb-2">
            Food options:
        </h2>
        <div class="w-full">
            <nav class="list-nav w-full">
                <ul class="">
                    {#each myRestaurants as restaurant}
                        <li class="card">
                            <a href={restaurant.link} class="flex flex-col">
                                <p class="block text-lg font-semibold card-header">{restaurant.id}: {restaurant.name}</p>
                                <p class="block">Rating: {restaurant.rating}</p>
                                <p class="block">{restaurant.details}</p>
                                <p class="block card-footer">{restaurant.openingHours}</p>
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
        <div>
            <h3 class="h2 my-3">
                Other options
            </h3>
            <p>You can also order from delivery services like foodora, wolt and more.</p>
        </div>
    </section>
</main>

<style>
    .custom-flex {


    }
</style>