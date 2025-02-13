<script lang="ts">
	import overview from '$lib/assets/img/Overview2025.png';
	import schedule from '$lib/assets/img/schedule2025.png';
	import roadmap from '$lib/assets/roadmap2025.png';
	import { myRestaurants } from '$lib/data/westieValentine/restaurants';
	import arrow from '$lib/assets/arrow-right.svg';
</script>

<main class="container grid place-items-center mx-auto">
	<h1 class="h2 mx-auto mt-3">Westie valentines information</h1>
	<section class="mx-auto my-5">
		<h2 class="h3">Schedule</h2>
	</section>
	<div class="card overflow-hidden mx-2">
		<section>
			<img src={schedule} alt="schedule to the event" class="mx-auto" />
		</section>
	</div>
	<section class="my-5 mx-2 card p-3">
		<div class="">
			<h2 class="h4 font-bold">How do i get to Westie Valentine?</h2>
		</div>
		<div class="">
			<h3 class="mt-2">
				There is two solid options to get to the location by subway unless you are staying at the
				event hotels.
			</h3>
			<p class="font-bold">These options are:</p>
			<ul class="list-disc list-inside">
				<li class="my-2">
					You can take the subway to Nationaltheater and walk a brisk 11 minute walk from there as
					shown below in black.
				</li>
				<li class="my-2">
					You can also take the subway to Stortinget and have a similar walk shown in Blue.
				</li>
			</ul>
		</div>
		<div class="card overflow-hidden mx-2">
			<section>
				<img src={roadmap} alt="Map from subways to BLS" class="" />
			</section>
		</div>
	</section>
	<div class="card overflow-hidden mx-2 max-w-4xl">
		<section>
			<img src={overview} alt="Map of hotels, restaurants and grocery stores" class="" />
		</section>
	</div>
	<section class="my-5 mx-2">
		<h2 class="h2 font-bold mb-4">Food options:</h2>
		<p class="italic">(Each card is a link to the restaurant)</p>
		<div class="">
			<nav class="">
				<ul class="flex flex-wrap gap-4">
					{#each myRestaurants as restaurant}
						<li class="card p-4" style="flex: 1 1 20rem">
							<a href={restaurant.link} class="">
								<p class="font-bold">{restaurant.id}: {restaurant.name}</p>
								<p class="">Rating: {restaurant.rating}</p>
								<p class="break-words">{restaurant.details}</p>
								<p class="">{restaurant.openingHours}</p>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<div class="card p-4 my-5">
			<h3 class="h4">Other options</h3>
			<p>You can also order from delivery services like foodora, wolt and more.</p>
		</div>
	</section>
</main>

<style>
</style>
