interface Course {
    title: string;
    overview: string;
    detailed: string;
    goal: string;
}

export const myCourses: Course[] = [
    {
        title: "Level One",
        overview: "Level 1 is for you if you never tried west coast swing before, or if you want a refresher. We recommend you to take this level a couple of times. You don`t need to register with a partner to join.",
        detailed: "Some detail",
        goal: "You will learn west coast swing rhythm, all the basic patterns, footwork, handhold and other fundamental techniques you need to be able to dance and have fun!"
    },
    {
        title: "Level Two",
        overview: "Level 2 is for you who have completed the level 1 course, or only one round of level 2 before. You are comfortable with the basics. Level 2 extends over 2 rounds of courses. (Roughly 6 months)",
        detailed: "",
        goal: "During level 2 you will improve your basics and learn new variations, as well as basic musicality, styling and technique."
    },
    {
        title: "Level Three",
        overview: "You have danced WCS for a few years and feel comfortable with different variations of the basics, as well as technique and musicality. You have completed level 1 and 2. You are interested in developing your dancing and want a bigger repertoire and more in-depth technique.",
        detailed: "Something detailed about level Two",
        goal: "During level 3 you will learn more advanced technique, musicality and creativity, as well as more advanced pattern variations. Level 3 extends over 4 rounds of courses."
    },
    {
        title: "Level Four",
        overview: "You have danced WCS for many years and have good control of advanced patterns, technique, styling and musicality. You want to improve your style, you probably participate in international events and competitions, and you are ready for fast paced classes.",
        detailed: "Level 4 is divided into 4 modules: 1. Musicality and creativity, 2. Technique, 3. Creativity and dynamics, and 4. Patterns, that extend throughout one year, over 4 consecutive rounds of courses.",
        goal: "During level 4 you will learn complex concepts, patterns and technique, as well as advanced musicality, creativity and dynamics."
    }
]