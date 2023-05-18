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
  clickPrompt: document.querySelector(".box"),
};

/*-------------------------| HOME |------------------------*/

const homeContent = {
  images: {
    homeSvg:
      "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/undraw/code_thinking.svg",
  },
  links: {
    umuzi: "https://www.umuzi.org",
  },
  text: {
    headingIntro: [["WHO AM I?"]],
    intro: [
      [
        "I'm an aspiring web-developer and all-round programmer, who's currently learning javascript for front-end web development and node for back-end web development, with the goal of becoming a full-stack web developer.",
      ],
      [
        "As someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project.",
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
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(personal).jpg",
      title: "FIRST PERSONAL WEBSITE",
      alt: "personal_website_preview",
      repoLink: "https://github.com/Lindo-code/portfolio-website",
      link: null,
      objectives: [
        "Create personal website",
        "Host as website on Github Pages",
      ],
      tools: ["Javascript", "HTML", "CSS", "CSS Grid", "Flexbox", "Webpack"],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(bullies).jpg",
      title: "BULLIES TRAINING WEBSITE",
      alt: "bullies_training_website_preview",
      repoLink: "https://github.com/Lindo-code/personal_website.git",
      link: null,
      objectives: [
        "Revamp bullies training website",
        "Host as website on Github Pages",
      ],
      tools: [
        "Javascript Basics",
        "HTML Basics",
        "CSS Basics",
        "CSS Grid",
        "Flexbox",
      ],
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
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(sunny).jpg",
      title: "SUNNYSIDE AGENCY LANDING PAGE",
      alt: "landing_page_preview",
      repoLink:
        "https://github.com/Lindo-code/sunnyside-agency-landing-page-main",
      link: "https://lindo-code.github.io/sunnyside-agency-landing-page-main/",
      objectives: [
        "Create website landing page",
        "Host as webpage on Github Pages",
        "Publish Landing Page",
      ],
      tools: ["Javascript", "HTML", "CSS", "CSS Grid", "Flexbox"],
    },
    {
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(semitone).jpg",
      title: "SEMITONE DIFFERENCE",
      alt: "app_preview",
      repoLink: "https://github.com/Lindo-code",
      link: null,
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
      img: "https://raw.githubusercontent.com/Lindo-code/portfolio-website/main/assets/project-previews/project-preview(memory).jpg",
      title: "MEMORY: CARD GAME",
      alt: "card_game_preview",
      repoLink: "https://github.com/Lindo-code",
      link: null,
      objectives: [
        "Create Memory Game Web App",
        "Host App on Github Pages",
        "Publish App",
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
  ],
};

/*-------------------------| END |------------------------*/
