<script lang="ts">
    import { Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';

    const sourceData = [
        { position: 1, name: 'Basic pass (Beginner / Improver or Intermediate / Advanced)', Membersprice: 1300, Price: 1550 },
        { position: 2, name: 'Advanced Intensive (Sunday party included)', Membersprice: 600, Price: 750 },
        { position: 3, name: 'Blues Intensive (Friday party included)', Membersprice: 600, Price: 750 },
        { position: 4, name: 'Basics and basics variations (Friday party included)', Membersprice: 350, Price: 350 },
    ];

    const tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Tracks', 'Members Price', 'Price'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['name', 'Membersprice', 'Price']),
    };
</script>
<div class="bg-promo"></div>
<main class="grid place-items-center mx-10">
<section class="h-96 grid place-items-center">
</section>
<section class="grid mt-8">
    <section class="mx-auto p-4">
        <h2>We are happy to be back with a new edition of Westie Valentine (9-11 February, 2024)!</h2>
        <a class="btn variant-filled-primary rounded" href="https://forms.gle/PUo3ezxCE2GvtN6t9">Register for the event here</a>
    </section>
    <section>
        <h2 class="h2">Instructors</h2>
        <div class="grid">
            <div class="card rounded p-3">
                <h3>Semion Ovsiannikov and Maria Elizarova</h3>
                
            </div>
            <div class="card rounded p-3">
                <h3>Ludovic Pelegrin and Melodie Paletta</h3>

            </div>
        </div>
    </section>
    <section class=" p-4 mx-auto">
        <h2 class="h2">Hotels and accommodation</h2>
        <p>The closest hotel to the event is Quality Hotel Hasle Linie</p>
        <p>It is about 10 minutes walking distance from the event.</p>
        
        <a class="btn variant-filled-primary" href="https://www.strawberry.no/hotell/norge/oslo/quality-hotel-hasle-linie/?fbclid=IwAR1au9vd2lQFTBxiMeHjDCJXm5aURFREHhW0wkVdGVQDwHcvSGV3IP459TM">Hotel Webpage</a>
    </section>

    <section class="p-4 mx-auto">
        <h2 class="h2">What levels do we have in our main pass?</h2>
        <div class="my-4">
            <h3 class="h3">Beginner / Improver</h3>
            <ul>
                <li>6 Hours of classes</li>
                <li>1 hour bonus all levels class</li>
                <li>BONUS: 2 hours basics and basics variations workshop</li>
            </ul>
        </div>
        <div class="my-4">
            <h3 class="h3">Intermediate / Advanced</h3>
            <ul>
                <li>6 Hours of classes</li>
                <li>1 hour bonus all levels class</li>
                <li>BONUS: 2 hours basics and basics variations workshop</li>
            </ul>
        </div>
    </section>
    <section class="p-4 mx-auto">
        <h2 class="h2">We have some additional workshops!</h2>
        <div>
            <h3 class="h3">Advanced Intensive</h3>
            <p>Join us in a 3 hour long advanced intensive going into more detail with <span class="font-bold">Semion and Maria</span>!</p>
            <p class="italic">Requires Intermediate points according to WSDC</p>
        </div>
        <div>
            <h3 class="h3">Blues Intensive</h3>
            <p>Join us in a 3 hours long blues intensive honing those blues rhythms and skills with <span class="font-bold">Ludovic and Melodie</span>!</p>
            <p class="italic">Open for everyone!</p>
        </div>
        <div>
            <h3 class="h3">Basics and Basic Variations</h3>
            <p>Unsure of your basics and want a refresh? Join <span class="font-bold">Tom-Elbin and Veronika</span> in a 2 hours long class diving into basics!</p>
            <p>This track is included in the <span class="font-bold">main pass</span></p>
        </div>
    </section>
    <section class="p-4 mx-auto">
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
    .bg-promo {
        background-image: url(../../../lib/assets/wv2024.jpg);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 3.5rem;
        height: 30rem;
        z-index: -10;

    }
</style>