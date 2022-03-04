const allProjects = [
    // {
    //     slug: '',
    //     title: '',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    // {
    //     slug: 'portfolio',
    //     title: 'Portfolio website',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: 'https://github.com/SuzannaWentzel/Portfolio',
    //     url: 'www.suzannawentzel.nl',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    // {
    //     slug: 'planter',
    //     title: 'Custom planter',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    // {
    //     slug: 'tea_box',
    //     title: 'Happy tea box',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    // {
    //     slug: 'fairy_tales',
    //     title: 'Fairy tale generator',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    // {
    //     slug: 'story_generator',
    //     title: 'Story generator',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    {
        slug: 'habit_app',
        title: 'Habit app',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'UX project to support forming habits',
        longDescription: ['In the course \'Concepts, Measures and Methods\' we learned a plethora of techniques to study ' +
            'user experience. To complete the course, I had to perform an extensive UX research myself. I was curious if I ' +
            'would be able to design a mobile application that would be able to support students forming habits.',
            'I gathered a lot of information about how people work on forming habits and what they need, using interviews, diary ' +
            'studies, and a card sort to structure all required functionalities. After creating and evaluating a prototype (using MarvelApp, you can check it out in the link below), ' +
            'I found that it was not yet usable enough as it contained some usability issues in the navigation. The (functional) design was however promising, ' +
            'and with some improvements (in a future design cycle) could potentially support students in forming habits.',
            'Note that the design is purely functional, not in any way graphical, as the main purpose was carrying out the ' +
            'research and not having a fully designed product'],
        repository: '',
        url: 'https://marvelapp.com/prototype/cjhg211/screen/82751102',
        report: '',
        date: '2021-10-29',
        tags: ['Application', 'UX']
    },
    // {
    //     slug: 'weather_app',
    //     title: 'Huemidity',
    //     type: '',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: []
    // },
    {
        slug: 'plastic_soup',
        title: 'Plastic Soup',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'Teaching material about the plastic soup',
        longDescription: ['For my educational master (specifically for the course "Ontwerp Studio"), together with 3 ' +
            'other students, I created study materials to educate high school students about the plastic soup in oceans. The idea of the course was ' +
            'to create a transdisciplinary module (integrating different disciplines).', 'We chose the subject "plastic soup" ' +
            'and created a series of lessons (including a teachers\' guide, worksheets and a card to collect stamps) that ' +
            'explains the problem and lets students familiarize with it. The goal of the lessons was that our students come ' +
            'up with solutions that can be tackled within school to help solve the problem. We had the generous opportunity ' +
            'to conduct the lessons in a school in Almelo. Students came up with wonderful ideas (for instance, advising the ' +
            'school board to consider not buying plastic furniture anymore).' ],
        date: '2021-07-15',
        tags: ['Education', 'Plastic Soup']
    },
    {
        slug: 'spydar',
        title: 'Spydar',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'Android application for a spy experience',
        longDescription: ['For the course Designing Interactive Experiences, we had to design and construct a multi-modal ' +
            'interactive experience on the basis of an iterative team-based making-process with constant self-reflection. ' +
            'The aim was to address a problem that occurred during the Corona crisis, but which might still be relevant when ' +
            'this crisis is over. Therefore, our team chose the problem that home and work are less separated because of ' +
            'working from home.', 'We created an application called Spydar. Spydar encourages users to take a walk and unravel ' +
            'a mystery in the neighbourhood, just before starting to work and just after finishing up work, implicitly ' +
            'simulating the commute to and from work. To create such an experience, we learned a lot about storytelling, ' +
            'sounds and immersiveness in the different modalities. We programmed this application using Android studio, ' +
            'in Kotlin and XML.'],
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: ['Application', 'Experience', 'Creative']
    },
    {
        slug: 'line_drawings',
        title: 'Line drawings',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'Mathematical artwork that creates mesmerizing line drawings',
        longDescription: ['During the course Art, Mathematics and Technology, we had to make weekly centerpieces, each ' +
            'centered around a different mathematical subject (geometry, symmetry, rules & patterns, motion and sound). ' +
            'As final project, we had to create a centerpiece containing one or more of these subjects.','I chose motion ' +
            'and geometry, creating line drawings between different hypotrochoids, where the moire effect is visible. ' +
            'This was created using the p5.js library, programmed in javascript and showed in an HTML canvas. The final ' +
            'centerpiece can be seen in the link below, the image shows the weekly centerpieces.'],
        repository: 'https://github.com/SuzannaWentzel/Moire',
        url: 'https://linedrawings.suzannawentzel.nl/',
        report: '',
        date: '',
        tags: ['Website', 'Creative', 'Art']
    },
    {
        slug: 'tinker_portfolio',
        title: 'Tinker portfolio',
        type: 'University project',
        shortDescription: '',
        longDescription: []
    },
    {
        slug: 'once_upon_a_slide',
        title: 'Once Upon a Slide',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'Slide builder, Application Development Norway',
        longDescription: ['During my exchange at UiA (Universitetet i Agder, Norway), I followed the course \'Application '+ 
            'Development\'. In this course, we created our first full-stack web application: an application that allows to create '+
            'slides for presentations, called Once Upon a Slide. Although it contains quite some bugs, it was a lot of ' + 
            'fun to work on this, especially in this nice team of students from different countries.', 'We created it '+ 
            'from scratch, from pure HTML, CSS & JavaScript. It was deployed using Heroku.'],
        url: 'https://once-upon-a-slide.herokuapp.com/',
    },
    {
        slug: 'curb',
        title: 'Curb',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'Bachelor design project: Curriculum Builder'
    }, 
    {
        slug: 'jarvis',
        title: 'Jarvis',
        type: 'Personal project',
        imgs: [],
        videos: [],
        shortDescription: 'Home assistant',
        longDescription: ['Just for fun, I started on a little project called Jarvis (yes, from the MCU). It is a python ' +
            'script, which recognizes and acts on voice input commands. Currently, it only supports commands related to ' +
            'playing music, but I intend to try and link it to some smart home services and have it running on a ' +
            'raspberry pi.'],
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: ['WIP']
    },
    {
        slug: 'snuifhuis_website',
        title: 'Snuifhuis Website',
        type: 'Personal project',
        imgs: [],
        videos: [],
        shortDescription: 'Website for our Student dorm',
        longDescription: ['As a fun side-project, I started to work on designing and building a website for our student '+
            'house (it was located in the Snuifstraat, don\'t worry). However, as studying took a lot of time, I never managed to finish it.','I have made three designs over '+
            'time, and started to implement two of them. Unfortunately, I never got close to an MVP, but it was still nice '+
            'to work on, and I gained some experience in designing.'],
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: ['WIP']
    },
    {
        slug: 'norway_blog',
        title: 'Norway blog',
        type: 'Personal project',
        imgs: [],
        videos: [],
        shortDescription: 'Blog about my exchange to Norway',
        longDescription: ['As part of my bachelor curriculum, I went abroad to Norway for half a year. There, I studied ' +
            'at Universitet i Agder, in Grimstad. I followed the very interesting courses \'Application development\', ' +
            '\'Scripting and Hacking\' and \'Norwegian for international students\'.','To share my experiences and travels ' +
            'with home, I created this blog. I built it from scratch using pure HTML, CSS and JavaScript + JQuery.'],
        repository: 'https://github.com/SuzannaWentzel/Norway',
        url: 'https://norway.suzannawentzel.nl/',
        report: '',
        date: '',
        tags: []
    },
    {
        slug: 'shoes',
        title: 'Shoes',
        type: 'Creative project',
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
        title: 'FabricArt',
        type: 'Creative project',
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
]


export default {
    allProjects
}
