class PortfolioPage extends Page {
  constructor(page, load, createContainer, count) {
    super(page, load, createContainer, count);
    this.pages = ["home", "portfolio", "contact"];
    this.headings = {
      temp: null,
      container: {}
    };
    this.projects = {
      temp: null,
      container: {}
    };
    this.cards = {};
  }

  CreateAndPopulateDiv() {
    if (this.count === 0) this.count++;
    this.animateFadeAndDoubleSpin();
    this.currLinkStyle();
    domElements.pageTitle.innerText = this.page.toUpperCase();
    const divExist = this.checkIfDivExists(this.pages);
    if (divExist) {
      this.removeContent(this.page);
    }
    const portfolioDivExists = this.checkIfDivExists(this.page);
    console.log(`showCards? ${portfolioDivExists}`)
    if (!portfolioDivExists) {
      console.log("nnnnnn");
      this.projects.temp = "complete";
      this.createProjectsContainer();

      this.headings.temp = "compProject";
      this.createTitleContainer();

      this.projects.temp = "current";
      this.createProjectsContainer();

      this.headings.temp = "currProject";
      this.createTitleContainer();

      this.createCardsContainer();

      this.headings.temp = "skills";
      this.createTitleContainer();

      this.populatePage();
    }
  }

  createProjectsContainer() {
    this.projects.container[this.projects.temp] = this.findEmptyDiv();
    this.projects.container[this.projects.temp].classList.add(
      this.createContainer[0][0]
    );
    this.projects.container[this.projects.temp].classList.remove("empty-div");
    this.projects.container[this.projects.temp].setAttribute("div", this.page);
    this.projects.container[this.projects.temp].setAttribute(
      "display",
      this.createContainer[0][1]
    );
    this.projects[this.projects.temp] += this.addProjects();
  }

  addProjects() {
    const projects = portfolioContent[this.projects.temp];
    let projectsDiv = "";
    for (let i = 0; i < projects.length; i++) {
      projectsDiv += `
        <h4 class="color">${projects[i].title}</h4>
        <div class="img-text">
          <img src=${projects[i].img} alt=${
        projects[i].alt
      } class="project-img" />
          <div class="all-project-details">
              <h5>OBJECTIVES</h5>
              <ul class="custom-font" type="circle">
                ${this.addList(projects[i].objectives)}
              </ul>
              <h5>TOOLS USED</h5>
              <form class="custom-font">
                ${this.addTechUsed(projects[i].tools)}
              </form>
              <br>
              <div class="inline">
                  ${this.addIcon(projects[i])}
              </div>
          </div>
        </div><br><br>`;
    }
    return projectsDiv;
  }

  addList(objectives) {
    let list = "";
    objectives.forEach((item) => {
      list += `<li>${item}</li>`;
    });
    return list;
  }

  addTechUsed(tech) {
    let list = "";
    tech.forEach((item) => {
      list += `<input type="checkbox" name=${item} value=${item} checked="yes" onclick="return false" />
                <label>${item}</label> </br>`;
    });
    return list;
  }

  addIcon(project) {
    return project.link !== null && project.repoLink !== null
      ? `<a href=${project.repoLink} class="project-icon" target="_blank">
      <i class="fab fa-github-square" ></i>
    </a>
    <a href=${project.link} class="project-icon" target="_blank">
      <i class="fas fa-globe" ></i>
    </a>`
      : project.repoLink === null
      ? `<a href=${project.link} class="project-icon" target="_blank">
      <i class="fas fa-globe" ></i>
    </a>`
      : `<a href=${project.repoLink} class="project-icon" target="_blank">
      <i class="fab fa-github-square" ></i>
    </a>`;
  }

  createTitleContainer() {
    this.headings.container[this.headings.temp] = this.findEmptyDiv();
    this.headings.container[this.headings.temp].classList.add("heading");
    this.headings.container[this.headings.temp].classList.remove("empty-div");
    this.headings.container[this.headings.temp].setAttribute(
      "div",
      "portfolio"
    );
    this.headings.container[this.headings.temp].setAttribute("display", "flex");
    this.headings[this.headings.temp] = `<h4 class="text-underline">${
      portfolioContent.strings.portfolioCategories[this.headings.temp]
    }</h4>`;
  }

  createCardsContainer() {
    this.cards.cardsContainer = this.findEmptyDiv();
    this.cards.cardsContainer.classList.add(this.createContainer[1][0]);
    this.cards.cardsContainer.classList.remove("empty-div");
    this.cards.cardsContainer.setAttribute("div", this.page);
    this.cards.cardsContainer.setAttribute(
      "display",
      this.createContainer[1][1]
    );
    this.cards.allCards = "";
    this.cards.allCards += this.addCards();
  }

  addCards() {
    const cards = portfolioContent.cards;
    let allCards = "";
    for (let i = 0; i < cards.length; i++) {
      allCards += `<div class='card'><h4>${cards[i].title}</h4>
        <img src=${cards[i].img} alt="javascript_abbreviation_image" class="skill-img" />
        <a href=${cards[i].link} target="_blank">
          <span>${portfolioContent.strings.cardLinkTitle} <span style="color:red; ">${portfolioContent.strings.cardLinkIcon}</span></span>
        </a></div>`;
    }
    return allCards;
  }

  populatePage() {
    this.headings.container.skills.innerHTML = this.headings.skills;
    this.cards.cardsContainer.innerHTML = this.cards.allCards;
    this.headings.container.currProject.innerHTML = this.headings.currProject;
    this.projects.container.current.innerHTML = this.projects.current.replace(
      "undefined",
      ""
    );
    this.headings.container.compProject.innerHTML = this.headings.compProject;
    this.projects.container.complete.innerHTML = this.projects.complete.replace(
      "undefined",
      ""
    );
  }
}
