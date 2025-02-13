<script lang="ts">
    import { Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';
    import { myTracks } from '$lib/data/westieValentine/tracks';
    import promoImg from '$lib/assets/wv2024.jpg';

    const trackHeadersArray = ['Tracks', 'Members Price', 'Price'];
    const trackTableMappedArray = ['Tracks', 'MembersPrice', 'Price'];

    const tableSimple: TableSource = {
        head: trackHeadersArray,
        body: tableMapperValues(myTracks, trackTableMappedArray),
    };
</script>
<main class="continer mx-auto grid place-items-center">
    <section class="">
        <img src={promoImg} alt="promo of westie valentine">
    </section>
    <section class="my-4 grid">
        <section class="mx-auto px-3">
            <h2>We are happy to be back with a new edition of Westie Valentine (9-11 February, 2024)!</h2>
            <a class="my-5 btn btn-lg variant-filled-primary" href="https://forms.gle/PUo3ezxCE2GvtN6t9">Register for the event here</a>
        </section>
        <section>
            <h2 class="">Instructors</h2>
            <div class="">
                <div class="">
                    <h3>Semion Ovsiannikov and Maria Elizarova</h3>
                    
                </div>
                <div class="">
                    <h3>Ludovic Pelegrin and Melodie Paletta</h3>

                </div>
            </div>
        </section>
        <section class="">
            <h2 class="">Hotels and accommodation</h2>
            <p>The closest hotel to the event is Quality Hotel Hasle Linie</p>
            <p>It is about 10 minutes walking distance from the event.</p>
            
            <a class="" href="https://www.strawberry.no/hotell/norge/oslo/quality-hotel-hasle-linie/?fbclid=IwAR1au9vd2lQFTBxiMeHjDCJXm5aURFREHhW0wkVdGVQDwHcvSGV3IP459TM">Hotel Webpage</a>
        </section>

        <section class="">
            <h2 class="">What levels do we have in our main pass?</h2>
            <div class="">
                <h3 class="">Beginner / Improver</h3>
                <ul>
                    <li>6 Hours of classes</li>
                    <li>1 hour bonus all levels class</li>
                    <li>BONUS: 2 hours basics and basics variations workshop</li>
                </ul>
            </div>
            <div class="">
                <h3 class="">Intermediate / Advanced</h3>
                <ul>
                    <li>6 Hours of classes</li>
                    <li>1 hour bonus all levels class</li>
                    <li>BONUS: 2 hours basics and basics variations workshop</li>
                </ul>
            </div>
        </section>
        <section class="">
            <h2 class="">We have some additional workshops!</h2>
            <div>
                <h3 class="">Advanced Intensive</h3>
                <p>Join us in a 3 hour long advanced intensive going into more detail with <span class="font-bold">Semion and Maria</span>!</p>
                <p class="italic">Requires Intermediate points according to WSDC</p>
            </div>
            <div>
                <h3 class="">Blues Intensive</h3>
                <p>Join us in a 3 hours long blues intensive honing those blues rhythms and skills with <span class="font-bold">Ludovic and Melodie</span>!</p>
                <p class="italic">Open for everyone!</p>
            </div>
            <div>
                <h3 class="">Basics and Basic Variations</h3>
                <p>Unsure of your basics and want a refresh? Join <span class="font-bold">Tom-Elbin and Veronika</span> in a 2 hours long class diving into basics!</p>
                <p>This track is included in the <span class="font-bold">main pass</span></p>
            </div>
        </section>
        <section class="">
            <h2 class="h2">Prices</h2>
            <Table source={tableSimple} />
            <div>
                <p class="italic"><span class="font-bold">*Members price:</span> you should be a member of Bårdar WCS Club for calendar year 2024. <a class="underline decoration-solid" href="https://forms.gle/B43SWoqQ4yCoQorQ7">Register here to become a member</a></p>
                <p class="italic">Party pass and social dance drop-in prices will be released in January if we have enough space after the main registration.</p>
            </div>
            <a class="btn variant-filled-primary" href="https://forms.gle/PUo3ezxCE2GvtN6t9">Register for the event here</a>
        </section>
        <section class="p-4 mx-auto">
            <h2 class="h2">Cancellation Policy</h2>
            <p>Before December 24th there is a 100% refund of the event pass</p>
            <p>Between December 24th and January 7th there is a 50% refund on event pass</p>
            <p>After January 7th there will be no refunds provided</p>
            <p class="italic">Please note that at any point in time you can transfer your registration to another dancer. Please send an email to info@baardarwcs.no to learn the details of transfer.</p>
        </section>
    </section>
</main>

<style>
</style>