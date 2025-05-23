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
    {
        slug: 'ovo',
        title: 'Motivating students',
        type: 'University project',
        imgs: ['OvO-motivatie.png'],
        videos: [],
        shortDescription: 'Research on how to motivate high school students',
        longDescription: ['To finish my educational master, I had to conduct a practical research (\'Onderzoek van ' +
            'Onderwijs\'). At the time, I was teaching at a school, so the research was conducted there. I was ' +
            'experiencing some problems with motivating students to do their work in my class and to do their ' +
            'homework, so I wanted to learn what things I could do to improve.',
            'I performed a literature study, interviewed teachers, surveyed students and created a list of ' +
            'guidelines to motivate students. Then, I tried some of them out in class, and evaluated this with ' + 
            'students and teachers. I found that some of the guidelines already worked, some needed some other ' +
            'implementation in class.',
            'It was a fun research to perform and the results and learnings were directly applicable in the lessons I gave.'
        ],
        repository: '',
        url: '',
        report: 'https://purl.utwente.nl/essays/92505',
        date: '14/08/2022',
        tags: ['Research', 'Teaching']
    },
    {
        slug: 'furhat',
        title: 'Persuasion bot',
        type: 'University project',
        imgs: ['conversational-agent.png'],
        videos: [],
        shortDescription: 'Conversational Agent that tries to change your opinion',
        longDescription: [],
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: []
    },
    {
        slug: 'audio-story',
        title: 'The Mysterious Pond',
        type: 'University project',
        imgs: ['storytelling-through-sound.png'],
        videos: [],
        shortDescription: 'Audio Story',
        longDescription: [],
        repository: '',
        url: 'https://audiomack.com/storytelling-through-sound/song/suzanna-the-mysterious-pond',
        report: '',
        date: '',
        tags: []
    },
    // {
    //     slug: 'portfolio',
    //     title: 'Portfolio website',
    //     type: 'Personal project',
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
    //     type: 'Creative project',
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
    //     type: 'Creative project',
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
    //     type: 'University Project',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: [],
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: [],
        // starred: false

    // },
    {
        slug: 'story_generator',
        title: 'Story generator',
        type: 'University project',
        imgs: ['nlp-generated-stories.png'],
        videos: [],
        shortDescription: 'Generating new stories from existing books',
        longDescription: ['For the course \'Natural Language Processing\' we created a model that generates new stories '+
            'from existing ones, to see if such models could imitate the writing style of the original authors. ',
            'We created two language models using n-grams and Maximum Likelihood Estimation on datasets of both ' + 
            'Lord of the Rings (Tolkien) and A Song of Ice and Fire (George R. R. Martin). These language models '+ 
            'were evaluated against the original works of the authors using a survey. ',
            'The results show that the language models are not yet capable of imitating the styles of the authors well '+ 
            'enough to be considered in the same style as the authors. However, they did present funny stories and even '+ 
            'though lots of improvements can be done, we learned a lot.'
        ],
        repository: 'https://github.com/SuzannaWentzel/Story-generator',
        url: '',
        report: '',
        date: '',
        tags: [],
        starred: true,
    },
    {
        slug: 'habit_app',
        title: 'Habit app',
        type: 'University project',
        imgs: ['habit-app.png'],
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
        tags: ['Application', 'UX'],
        starred: false
    },
    {
        slug: 'weather_app',
        title: 'Huemidity',
        type: 'Personal project',
        imgs: ['splash.png'],
        videos: [],
        shortDescription: 'Android weather application',
        longDescription: ['In the summer of 2021, I wanted to start a fun project to practice my mobile application design and development skills. ' +
            'I decided to create a weather application from scratch. I’ve seen many designers do that on Pinterest and it seemed fun. ',
            'I started with creating a list of the functionalities I wanted to include, sketched wireframes and watched ' + 
            'a lot of Adobe Illustrator tutorials. I created some art, and in Android Studio I put together the application, requesting weather forecasts from the OpenWeatherMap API.',
            'The goal was to have a first version working at the end of the summer break, that goal was met!',
        ],
        repository: 'https://github.com/SuzannaWentzel/Huemidity',
        url: '',
        report: '',
        date: '',
        tags: ['Application', 'UX', 'Creative'],
        starred: true
    },
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
        tags: ['Education', 'Plastic Soup'],
        starred: false
    },
    {
        slug: 'spydar',
        title: 'Spydar',
        type: 'University project',
        imgs: ['spydar.png'],
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
        tags: ['Application', 'Experience', 'Creative'],
        starred: false
    },
    {
        slug: 'line_drawings',
        title: 'Line drawings',
        type: 'University project',
        imgs: ['iterated-flower.png'],
        videos: [],
        shortDescription: 'Mathematical artwork that makes mesmerizing drawings',
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
        tags: ['Website', 'Creative', 'Art'],
        starred: true
    },
    {
        slug: 'tinker_portfolio',
        title: 'Tinker portfolio',
        type: 'University project',
        imgs: ['tinkering.jpg'],
        videos: [],
        shortDescription: '',
        longDescription: [],
        starred: false
    },
    {
        slug: 'once_upon_a_slide',
        title: 'Once Upon a Slide',
        type: 'University project',
        imgs: ['once-upon-a-slide.png'],
        videos: [],
        shortDescription: 'Slide builder, Application Development Norway',
        longDescription: ['During my exchange at UiA (Universitetet i Agder, Norway), I followed the course \'Application '+ 
            'Development\'. In this course, we created our first full-stack web application: an application that allows to create '+
            'slides for presentations, called Once Upon a Slide. Although it contains quite some bugs, it was a lot of ' + 
            'fun to work on this, especially in this nice team of students from different countries.', 'We created it '+ 
            'from scratch, from pure HTML, CSS & JavaScript. It was deployed using Heroku.'],
        url: 'https://once-upon-a-slide.herokuapp.com/',
        starred: false
    },
    {
        slug: 'curb',
        title: 'Curb',
        type: 'University project',
        imgs: [],
        videos: [],
        shortDescription: 'Bachelor design project: Curriculum Builder',
        longDescription: ['For my Design Project (the final practical course of TCS), we formed a group of 4 students and built a Curriculum Builder (CurB). We did a full requirement analysis on which functionalities to include, and then built the application using frameworks such as Vue.js, Spring Boot and GraphQL.'],
        starred: false
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
        tags: ['WIP'],
        starred: false
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
        tags: ['WIP'],
        starred: false
    },
    {
        slug: 'norway_blog',
        title: 'Norway blog',
        type: 'Personal project',
        imgs: ['norway-blog.png'],
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
        tags: [],
        starred: false
    },
    // {
    //     slug: 'shoes',
    //     title: 'Shoes',
    //     type: 'Creative project',
    //     imgs: [],
    //     videos: [],
    //     shortDescription: '',
    //     longDescription: '',
    //     repository: '',
    //     url: '',
    //     report: '',
    //     date: '',
    //     tags: [],
    //     starred: false
    // },
    {
        slug: 'fabric_art',
        title: 'FabricArt',
        type: 'Creative project',
        imgs: [],
        videos: [],
        shortDescription: 'Hand drawn designs on cotton bags.',
        longDescription: ['In the summer of 2015, I worked on setting up a small business with my sister. We drew our own colorful and happy designs on cotton totebags, to stimulate people to use them instead of plastic bags.', 'To start this business, we got help from The New Entrepreneur (de Zomerondernemer). Though we did not sell many bags, we learned a lot and it was a nice experience.'],
        repository: '',
        url: '',
        report: '',
        date: '',
        tags: [],
        starred: false
    },
]


export default {
    allProjects
}
