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
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/py.png",
      title: "PYTHON",
      link: "https://www.sololearn.com/profile/25472119",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/js.png",
      title: "JAVASCRIPT",
      link: "https://www.freecodecamp.org/fcc44702f65-8d01-4507-9afb-4e03b1dbf7ce",
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
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/postgresql.jpg",
      title: "POSTGRESQL",
      link: "https://www.sololearn.com/profile/25472119",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/docker.png",
      title: "DOCKER",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/jasmine.png",
      title: "JASMINE",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/git.png",
      title: "GIT",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/node.png",
      title: "NODE",
      link: "https://github.com/Lindo-code",
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/icons/webpack.png",
      title: "WEBPACK",
      link: "https://github.com/Lindo-code",
    },
  ],

  current: [
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview-infiltration2.jpg",
      title: "INFILTRATION COUNTDOWN",
      alt: "infiltration_countdown_preview",
      repoLink: null,
      link: "https://lindo-code-infiltration-countdown.netlify.app/",
      objectives: ["Create Game", "Host Game on Github Pages", "Publish Game"],
      tools: ["React", "Redux", "Javascript", "HTML", "CSS", "Flexbox"],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview-infiltration2.jpg",
      title: "INFILTRATION COUNTDOWN",
      alt: "infiltration_countdown_preview",
      repoLink: null,
      link: "https://lindo-code-infiltration-countdown.netlify.app/",
      objectives: ["Create Game", "Host Game on Github Pages", "Publish Game"],
      tools: ["React", "Redux", "Javascript", "HTML", "CSS", "Flexbox"],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(writer).jpg",
      title: "WRITER WEBSITE",
      alt: "writer_website_preview",
      repoLink: "https://github.com/Lindo-code/writer-website",
      link: "https://lindo-code.github.io/writer-website",
      objectives: [
        "Create writer portfolio website",
        "Host website on Github Pages",
        "Publish website",
      ],
      tools: [
        "Javascript Basics",
        "HTML Basics",
        "CSS Basics",
        "CSS Grid",
        "Flexbox",
      ],
    },
  ],
  complete: [
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(semitone).jpg",
      title: "SEMITONE DIFFERENCE",
      alt: "app_preview",
      repoLink: null,
      link: "https://lindo-code-semitone-difference.netlify.app/",
      objectives: [
        "Create Semitone Difference App",
        "Host App on Github Pages",
      ],
      tools: [
        "Javascript Basics",
        "HTML Basics",
        "CSS Basics",
        "CSS Grid",
        "Flexbox",
        "Jasmine",
        "Webpack",
      ],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview-recipe1.jpg",
      title: "RECIPE SEARCH APP",
      alt: "recipe_search_app_preview",
      repoLink: null,
      link: "https://lindo-code-recipe-search-app.netlify.app/",
      objectives: [
        "Create Recipe Search App",
        "Host as webpage on Github Pages",
        "Publish Recipe Search App",
      ],
      tools: ["React", "Redux", "Javascript", "HTML", "CSS", "Material UI"],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview-mem-react.jpg",
      title: "MEMORY: CARD GAME",
      alt: "card_game_preview",
      repoLink: null,
      link: "https://lindo-code-memory-game.netlify.app/",
      objectives: [
        "Create Memory Game Web App",
        "Host App on Github Pages",
        "Publish App",
      ],
      tools: ["React", "Redux", "Javascript", "HTML", "CSS"],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(sunny).jpg",
      title: "SUNNYSIDE AGENCY LANDING PAGE",
      alt: "landing_page_preview",
      repoLink:
        "https://github.com/Lindo-code/sunnyside-agency-landing-page-main",
      link: "https://lindo-code.github.io/sunnyside-agency-landing-page-main/",
      objectives: [
        "Create website landing page",
        "Host Page on Github",
        "Publish Landing Page",
      ],
      tools: ["Javascript", "HTML", "CSS", "CSS Grid", "Flexbox"],
    },
  ],
};

/*-------------------------| END |------------------------*/
