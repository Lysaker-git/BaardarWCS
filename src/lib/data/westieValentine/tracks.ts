interface Tracks {
    position: number,
    Tracks: string, 
    MembersPrice: number,
    Price: number
}

export const myTracks: Tracks[] = [
    { 
        position: 1, 
        Tracks: 'Basic pass (Beginner / Improver or Intermediate / Advanced)', 
        MembersPrice: 1300,
        Price: 1550 
    },
    { 
        position: 2, 
        Tracks: 'Advanced Intensive (Sunday party included)', 
        MembersPrice: 600, 
        Price: 750 
    },
    { 
        position: 3, 
        Tracks: 'Blues Intensive (Friday party included)', 
        MembersPrice: 600, 
        Price: 750 },
    { 
        position: 4, 
        Tracks: 'Basics and basics variations (Friday party included)', 
        MembersPrice: 350, 
        Price: 350 },
];