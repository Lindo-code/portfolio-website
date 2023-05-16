class HomePage extends Page {
  constructor(page, load, createContainer) {
    super(page, load, createContainer);
    this.container = {
      temp: null,
      intro: "",
      container: {
        intro: null,
      },
    };
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
      domElements.selfPortrait.classList.toggle("rotate");
      domElements.show.forEach((element) => {
        element.classList.toggle("fade-in");
      });
      setTimeout(() => {
        domElements.selfPortrait.classList.toggle("rotate");
        domElements.show.forEach((element) => {
          element.classList.toggle("fade-in");
        });
      }, 1000);
    }
    const divExist = this.checkIfDivExists(this.page);
    this.currLinkStyle(this.page);
    domElements.pageTitle.innerText = this.page.toUpperCase();
    if (divExist === true) {
      this.removeContent(this.page);
    } else {
      const div1 = this.findEmptyDiv();
      div1.classList.add(this.createContainer[2][0]);
      div1.classList.remove("empty-div");
      div1.setAttribute("div", this.page);
      div1.setAttribute("display", this.createContainer[2][1]);
      const introDiv = `
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
      div1.innerHTML = introDiv;
    }
  }
}
