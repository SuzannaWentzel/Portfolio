const universityProjects = [
    {
        slug: 'spydar',
        title: "Spydar",
        imgs: [],
        videos: [],
        shortDescription: 'Android application for a spy experience',
        longDescription: 'For the course Designing Interactive Experiences, we had to design and construct a multi-modal ' +
            'interactive experience on the basis of an iterative team-based making-process with constant self-reflection. ' +
            'The aim was to address a problem that occurred during the Corona crisis, but which might still be relevant when ' +
            'this crisis is over. Therefore, our team chose the problem that home and work are less separated because of ' +
            'working from home. We created an application called Spydar. Spydar encourages users to take a walk and unravel ' +
            'a mystery in the neighbourhood, just before starting to work and just after finishing up work, implicitly ' +
            'simulating the commute to and from work. To create such an experience, we learned a lot about storytelling, ' +
            'sounds and immersiveness in the different modalities. We programmed this application using Android studio, ' +
            'in Kotlin and XML.',
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: ['Application', 'Experience', 'Creative']
    },
    {
        slug: 'line_drawings',
        title: 'Line drawings',
        imgs: [],
        videos: [],
        shortDescription: 'Mathematical artwork with which line animations are created',
        longDescription: 'During the course Art, Mathematics and Technology, we had to make weekly centerpieces, each ' +
            'centered around a different mathematical subject (geometry, symmetry, rules & patterns, motion and sound). ' +
            'As final project, we had to create a centerpiece containing one or more of these subjects. I chose motion ' +
            'and geometry, creating line drawings between different hypotrochoids, where the moire effect is visible. ' +
            'This was created using the p5.js library, programmed in javascript and showed in an html canvas. The final ' +
            'centerpiece can be seen in the link below, but pictures of the weekly centerpieces can be seen above.',
        repository: 'https://github.com/SuzannaWentzel/Moire',
        url: 'https://linedrawings.suzannawentzel.nl/',
        report: '',
        date: '',
        tags: ['Website', 'Creative', 'Art']
    },
    {
        slug: 'ml_familiarity',
        title: 'ML algorithm to recognize familiarity',
    },
    {
        slug: 'tinker_portfolio',
        title: 'Tinker portfolio',
    },
    {
        slug: 'once_upon_a_slide',
        title: 'Once Upon a Slide',
        imgs: [],
        videos: [],
        shortDescription: 'Slide builder, Application Development Norway'
    },
    {
        slug: 'curb',
        title: 'Curb',
        imgs: [],
        videos: [],
        shortDescription: 'Bachelor design project: Curriculum Builder'
    }
];

const personalCodingProjects = [
    {
        slug: 'jarvis',
        title: "Jarvis",
        imgs: [],
        videos: [],
        shortDescription: 'Home assistant',
        longDescription: 'Just for fun, I started on a little project called Jarvis (yes, from the MCU). It is a python ' +
            'script, which recognizes and acts on voice input commands. Currently, it only supports commands related to ' +
            'playing music, but I intend to try and link it to some smart home services and have it running on a ' +
            'raspberry pi.',
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: ['WIP']
    },
    {
        slug: 'snuifhuis_website',
        title: "Snuifhuis Website",
        imgs: [],
        videos: [],
        shortDescription: 'Website for our Student dorm',
        longDescription: '',
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: ['WIP']
    },
    {
        slug: 'norway_blog',
        title: "Norway blog",
        imgs: [],
        videos: [],
        shortDescription: 'Blog about my exchange to Norway',
        longDescription: 'As part of my bachelor curriculum, I went abroad to Norway for half a year. There, I studied ' +
            'at Universitet i Agder, in Grimstad. I followed the very interesting courses \'Application development\', ' +
            '\'Scripting and Hacking\' and \'Norwegian for international students\'. To share my experiences and travels ' +
            'with home, I created this blog. I built it from scratch using pure HTML, CSS and JavaScript + JQuery.',
        repository: '',
        url: 'https://norway.suzannawentzel.nl/',
        report: '',
        date: '',
        tags: []
    }
];

const personalCreativeProjects = [
    {
        slug: 'shoes',
        title: "Shoes",
        imgs: [],
        videos: [],
        shortDescription: '',
        longDescription: '',
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: []
    },
    {
        slug: 'fabric_art',
        title: "FabricArt",
        imgs: [],
        videos: [],
        shortDescription: 'Hand drawn designs on cotton bags.',
        longDescription: '',
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: []
    },
];


export default {
    universityProjects,
    personalCodingProjects,
    personalCreativeProjects
}
