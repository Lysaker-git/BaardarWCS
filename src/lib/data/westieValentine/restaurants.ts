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
		details: 'Burger Joint',
		rating: 4.2,
		openingHours: '11:30 Friday (14 Sat and sun) - 22 (21 on Sunday)',
		link: 'https://diggburger.com/'
	},
	{
		id: 5,
		name: 'Tullins Cafe',
		details: 'Cafe',
		rating: 4.3,
		openingHours: 'Open from 11-02 (23:30 Sunday)',
		link: 'http://www.tullins.no/'
	},
	{
		id: 7,
		name: 'Beijing Palace',
		details: 'Chinese restaurant',
		rating: 4.1,
		openingHours: 'Open from 13:00 - 21:00',
		link: 'https://beijingpalace.no/'
	},
	{
		id: 8,
		name: 'Backstube',
		details: 'Bakery',
		rating: 4.4,
		openingHours: 'Open from 07-18',
		link: 'http://www.backstube.no/'
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
