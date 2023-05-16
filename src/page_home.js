class HomePage extends Main {
  constructor(page, load, createContainer) {
    super(page, load, createContainer);
    this.about = {};
  }

  animateName() {
    setTimeout(() => {
      domElements.showTitle.style.opacity = 1;
      domElements.showTitle.style.marginLeft = 0;
      domElements.showTitle.classList.toggle("bounce-in-left");
    }, 1000);
  }

  animateImageContainer() {
    setTimeout(() => {
      domElements.imageDiv.classList.toggle("bounce-in-top");
    }, 500);
  }

  animateNavBar() {
    setTimeout(() => {
      domElements.navBar.style.opacity = 1;
      domElements.navBar.style.marginRight = 0;
      domElements.navBar.classList.toggle("bounce-in-right");
    }, 1000);
  }

  CreateAndPopulateDiv() {
    if (!this.isLoad) {
      this.animateFadeAndDoubleSpin();
    }
    const divExist = this.checkIfDivExists(this.page);
    this.currLinkStyle(this.page);
    domElements.pageTitle.innerText = this.page.toUpperCase();
    if (divExist) {
      this.removeContent(this.page);
    } else {
      this.createIntroDiv();
      this.about.container.innerHTML = this.about.introDiv;
    }
  }

  createIntroDiv() {
    this.about.container = this.findEmptyDiv();
    this.about.container.classList.add(this.createContainer[2][0]);
    this.about.container.classList.remove("empty-div");
    this.about.container.setAttribute("div", this.page);
    this.about.container.setAttribute("display", this.createContainer[2][1]);
    this.about.introDiv = `
      <img src=${homeContent.images.homeSvg} alt="person_sitting" class="svg-img" />
      <div class="project-details">
        <h4 class="text-underline"> ${homeContent.text.headingIntro[0][0]} </h4>
        <p style="text-align: left;" class="type-writer">
          ${homeContent.text.intro[0][0]}
          <br><br>
          ${homeContent.text.intro[1][0]}
          <br><br>
        </p>
        <a href=${homeContent.links.umuzi} id="deco" target="_blank"> Umuzi.org</a>
      </div>`;
  }
}
