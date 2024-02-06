<script lang="ts">
    import overview from '$lib/assets/img/Overview.png';
    import schedule from '$lib/assets/img/schedule.png';
</script>

<main class="container mx-auto grid place-items-center my-10">
    <h1 class="h1">Westie valentines information</h1>
    <section class="mt-10 grid place-items-center">
        <h2 class="h2 mb-2 mx-auto">
            Schedule
        </h2>
    </section>
    <div class="card overflow-hidden">
        <section>
            <img src={schedule} alt="schedule to the event"/>
        </section>  
    </div>
    <section>
        <div class="grid place-items-center">
            <h2 class="h2 mt-10 mb-4">
                How do i get to Westie Valentine?
            </h2>
        </div>
        <div class="card p-4">
            <h2 class="h4 mb-4">There is three solid options to get to the location by subway unless you are staying at Halse Linie.</h2>
            <p>These options are:</p>
            <ul class="list">
                <li class="list-item list-option">
                    <p>You can take subway 5 to Hasle then walk the yellow path on the map below. The path will take roughly 12 minutes to walk.</p>
                </li>
                <li class="list-item list-option">
                    <p>Same as above you can take 4 or 5 to Økern subway station and then walk the Light blue path. This will roughly take you 11 minutes to walk.</p>
                </li>
                <li class="list-item list-option">
                    <p>Lastly you can take subway 4 to Løren subway station and then walk the dark blue path. This route will take you roughly 18 minutes to walk. </p>
                </li>
            </ul>
        </div>
    </section>
    <div class="card overflow-hidden my-5">
        <section>
            <img src={overview} alt="map of westie valentine area with locations to hotel, subway and 16 restaurants" />
        </section>
    </div>
    <section>
        <h2 class="h2 mb-2">
            Food options:
        </h2>
        <div>
            <ul>
                <li class="list-option">
                    <p><span>1 - Fryd Gastro:</span> Open from 12:00 - 01:00 (23:00 Sunday), a 4.2 star gastro pub with different good food. No special theme</p>
                </li>
                <li class="list-option">
                    <p><span>2 - Peppes Pizza:</span> Open from 13:00 - 23:00, a 3.8 star standard pizza place. Decent food, mostly pizza.</p>
                </li>
                <li class="list-option">
                    <p><span>3 - Umai Sushi:</span> Open from 13:00 - 21:00, a 4.5 stay sushi restaurant.</p>
                </li>
                <li class="list-option">
                    <p><span>4 - Tiffany Løren:</span> Open from 13:00 (15:00 Friday) - 23:00 (22:00 Sunday), a 4.5 restaurant with varied food from burgers to bowls and snacks.</p>
                </li>
                <li class="list-option">
                    <p><span>5 - Dominos Pizza:</span> Open from 13:00 - 23:00 (22:00 Sunday), a 3.9 generic Pizza place.</p>
                </li>
                <li class="list-option">
                    <p><span>6 - Osloves Pizza:</span> Open from 12:00 (11:00 Friday) - 03:00 (23:00 Sunday), a 4.3 pizza restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>7 - Kai Izakaya:</span> Open from 16:00 - 23:00 (Closed Sunday), a 4.9 asian restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>8 - Dil Se Indian kitchen & Bar:</span> Open from 13:00 - 23:00 (Sunday uncertain), a 4.8 indian restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>9 - Noa Asian Food:</span> Open from 13:00 - 21:00, a 4.0 asian-fusion restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>10 - Tandoori Guru Oslo: </span> Open from 15:00 - 23:00 (14:00 - 21:00 Sunday), a 5.0 indian restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>11 - Vu Kjøkken: </span> Open from 13:00 (11:00 Friday) - 21:00, a 4.9 asian restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>12 - Stykke:</span> Open from 13:00 (11:00 Friday) - 22:00 (21:00 Sunday), a 4.7 pizza restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>13 - SUGAR & SPICE:</span> Open from 15:00 (11:00 Friday) - 22:00 (21:00 Sunday), a 4.5 Pan-asian restaurant</p>
                </li>
                <li class="list-option">
                    <p><span>14 - W.B. Samson - Hasle:</span> Open from 09:00 - 21:00 (10:00 - 20:00 Sunday), a bakery.</p>
                </li>
                <li class="list-option">
                    <p><span>15 - Hasle Linie Gastropub: </span> Open from 12:00 (11:00 Friday) - 01:00 (23:00 Sunday), a 4.0 Gastropub.</p>
                </li>
                <li class="list-option">
                    <p><span>16 - The Hawker Tran:</span> Open from 14:00 - 21:00 (11:30 - 20:30 Friday), a 5.0 asian restaurant</p>
                </li>
            </ul>
            
        </div>
        <div>
            <h3 class="h2 my-3">
                Other options
            </h3>
            <p>You can also order from delivery services like foodora.</p>
        </div>
    </section>
</main>

<style>
    span {
        font-weight: bolder;
    }
</style>