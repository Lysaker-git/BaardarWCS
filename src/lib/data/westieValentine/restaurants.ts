interface Restaurants {
	id: number;
	name: string;
	details: string;
	rating: number;
	openingHours: string;
	link: string;
}

export const myRestaurants: Restaurants[] = [
	{
		id: 2,
		name: 'DIGG burger Bislett',
		details: 'Gastro pub with a different set of typical gastro pub food.',
		rating: 4.2,
		openingHours: 'Open from 12:00 - 01:00 (23:00 Sunday)',
		link: 'https://www.frydloren.no/'
	},
	{
		id: 5,
		name: 'Tullins Cafe',
		details: 'Standard pizza place. Decent food, mostly pizza.',
		rating: 3.8,
		openingHours: 'Open from 13:00 - 23:00',
		link: 'https://www.peppes.no/forside/aktiv/Peppes_forside.html'
	},
	{
		id: 7,
		name: 'Beijing Palace',
		details: 'A traditional Sushi restaurant',
		rating: 4.5,
		openingHours: 'Open from 13:00 - 21:00',
		link: 'https://umaisushi.no/restaurant/home'
	},
	{
		id: 8,
		name: 'Backstube',
		details: 'Bakery',
		rating: 4.5,
		openingHours: 'Open from 13:00 (15:00 Friday) - 23:00 (22:00 Sunday)',
		link: 'https://www.tiffanys.no/'
	},
	{
		id: 9,
		name: 'Fuglen',
		details: 'Espressobar',
		rating: 4.5,
		openingHours: 'Open from 07:30 - 01 (09 - 20 Sunday)',
		link: 'http://www.fuglen.no/'
	},
	{
		id: 11,
		name: 'Café Tekehtopa',
		details:
			'Casual café/bar with an exquisite menu in a 19th-century mansion with rooms with high ceilings and chandeliers.',
		rating: 4,
		openingHours: 'Open from 11 (12:00 Saturday) - 00 (Sunday Closed)',
		link: 'http://www.tekehtopa.no/'
	},
	{
		id: 13,
		name: 'Izakaya',
		details: 'Asian restaurant',
		rating: 4.6,
		openingHours: 'Open from 17-01 (Closed Sunday)',
		link: 'http://izakayaoslo.com/'
	},
	{
		id: 12,
		name: 'Extra Pilestredet Park',
		details: 'Grocery Store closest to the event',
		rating: 4.1,
		openingHours: 'Open from 07-23 (Sunday closed)',
		link: 'https://coop.no/'
	},
	{
		id: 14,
		name: 'KIWI St. Olavsplass',
		details: 'Standard Asian-fusion restaurant, sushi and more',
		rating: 4.0,
		openingHours: 'Open from 07-23 (Sunday closed)',
		link: 'https://kiwi.no/'
	}
];
