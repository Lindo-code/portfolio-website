const domElements = {
  year: document.querySelector(".year"),
  showTitle: document.querySelector(".title"),
  imageDiv: document.querySelector(".top-image-container"),
  navBar: document.querySelector(".nav-bar"),
  redLine: document.querySelector(".text-underline-long"),
  pageTitle: document.querySelector(".curr-page-title"),
  selfPortrait: document.querySelector(".flip-card-inner"),
  textLinks: document.querySelectorAll(".text-link"),
  show: document.querySelectorAll(".appear"),
  divs: document.querySelectorAll(".empty-div"),
  content: document.querySelector(".content"),
  form: document.querySelector(".my-form"),
  status: document.querySelector(".my-form-status"),
  clickPrompt: document.querySelector("#myPopup"),
  stickyElem: document.querySelector(".sticky-div"),
  imageDivLinks: document.querySelectorAll(".top-image-link"),
};

/*-------------------------| HOME |------------------------*/

const homeContent = {
  isNotScroll: true,
  images: {
    homeSvg:
      "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/undraw/code_thinking.svg",
  },
  links: {
    umuzi: "",
  },
  text: {
    headingIntro: ["PROFESSIONAL SUMMARY", "INTERESTS"],
    intro: [
      [
        "I'm a full-stack web developer with a strong foundation in both front-end and back-end technologies. My technical stack includes JavaScript (ES6+), React + React Native, Node.js, and SQL databases. I bring practical experience from real-world Agile team environments, where I’ve contributed to cross-functional projects and led technical teams.",
      ],
      [
        "I have a sharp eye for design and user experience, and I enjoy crafting clean, accessible, and engaging interfaces while ensuring seamless back-end integration. My recent role as a Junior Team Leader and intern at BBD allowed me to mentor peers, lead daily standups, facilitate upskilling sessions, and deepen my technical skills in production-level projects. I am passionate about design thinking, software architecture, and creating elegant, maintainable solutions that prioritize both user needs and team collaboration.",
      ],
    ],
    interests: [
      [
        "Lately, I've developed an interest in design thinking methodologies and exploring software design patterns to enhance software architecture and create elegant solutions that encourage good group cohesion while addressing user needs.",
      ],
      [
        " When not coding I spend my time reading, improving my writing skills by writing fictional works of my own, watching anime, listening to podcasts, and generally just soaking in anything that piques my interest at the time.",
      ],
    ],
  },
};

/*-------------------------| PORTFOLIO |------------------------*/

const portfolioContent = {
  strings: {
    cardLinkIcon: "➜",
    cardLinkTitle: "View More",
    portfolioCategories: {
      skills: "TECH SKILLS",
      currProject: "CURRENT PROJECTS",
      compProject: "COMPLETED PROJECTS",
    },
  },

  cards: [
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/js.png",
      title: "JAVASCRIPT",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "assets/icons/react.png",
      title: "REACT",
      link: "https://drive.google.com/file/d/109NwtlVsWI3aKXWWj5rMkSsGEUd1njvh/view?usp=drive_link",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/git.png",
      title: "GIT",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "assets/icons/express.png",
      title: "EXPRESS",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/node.png",
      title: "NODE.JS",
      link: "https://github.com/Lindo-code",
    },

    {
      img: "assets/icons/jest.png",
      title: "JEST",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/jasmine.png",
      title: "JASMINE",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/postgresql.jpg",
      title: "POSTGRESQL",
      link: "https://www.sololearn.com/profile/25472119",
    },

    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/webpack.png",
      title: "WEBPACK",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/html.png",
      title: "HTML",
      link: "https://www.freecodecamp.org/fcc44702f65-8d01-4507-9afb-4e03b1dbf7ce",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/css.png",
      title: "CSS",
      link: "https://www.freecodecamp.org/fcc44702f65-8d01-4507-9afb-4e03b1dbf7ce",
    },
  ],

  current: [
    {
      img: "assets/project-previews/creative-hub.webp",
      title: "CREATIVE HUB",
      alt: "creative_hub_preview",
      repoLink: null,
      link: "https://lindocode.com",
      objectives: [
        "Status: In Development",
        "Create New Web App For Projects",
        "Host App on Github Pages",
        "Publish App",
        "Migrate Portfolio",
      ],
      tools: ["React"],
    },
    {
      img: "assets/project-previews/infiltration.webp",
      title: "INFILTRATION COUNTDOWN",
      alt: "infiltration_countdown_preview",
      repoLink: null,
      link: "https://lindo-code-infiltration-countdown.netlify.app/",
      objectives: [
        "Status: In Development",
        "Create Game",
        "Host Game on Github Pages",
        "Publish Game",
      ],
      tools: ["React", "Redux", "Jest", "JavaScript", "HTML", "CSS"],
    },
  ],
  complete: [
    {
      img: "assets/project-previews/recipe-search.webp",
      title: "RECIPE SEARCH APP",
      alt: "recipe_search_app_preview",
      repoLink: null,
      link: "https://lindo-code-recipe-search-app.netlify.app/",
      objectives: [
        "Create Recipe Search App",
        "Host as webpage on Github Pages",
        "Publish Recipe Search App",
      ],
      tools: ["React", "Redux", "Javascript", "Material UI", "Rest API"],
    },

    {
      img: "assets/project-previews/jambuddy.webp",
      title: "SEMITONE DIFFERENCE",
      alt: "app_preview",
      repoLink: null,
      link: "https://lindo-code-semitone-difference.netlify.app/",
      objectives: [
        "Create Semitone Difference App",
        "Host App on Github Pages",
      ],
      tools: ["Javascript", "HTML", "CSS", "Jasmine", "Webpack"],
    },
    {
      img: "assets/project-previews/memory-game.webp",
      title: "MEMORY GAME",
      alt: "card_game_preview",
      repoLink: null,
      link: "https://lindo-code-memory-game.netlify.app/",
      objectives: [
        "Create Memory Game Web App",
        "Host App on Github Pages",
        "Publish App",
      ],
      tools: ["React", "Redux", "SQLite", "Jest"],
    },
    {
      img: "assets/project-previews/conference.webp",
      title: "QR CONFERENCE CONNECTOR",
      alt: "app_preview",
      repoLink: "https://github.com/Lindo-code",
      link: null,
      objectives: ["Create Mobile App"],
      tools: ["React native", "Jest"],
    },
    {
      img: "assets/project-previews/vario.webp",
      title: "SIMPLE VARIOMETER",
      alt: "app_preview",
      repoLink: "https://github.com/Lindo-code",
      link: null,
      objectives: ["Create Mobile App"],
      tools: ["React Native"],
    },
  ],
};

/*-------------------------| END |------------------------*/
