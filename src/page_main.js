class Main {
  constructor(pageName, load) {
    this.page = pageName;
    this.isLoad = load;
    this.pages = ["home", "portfolio", "contact"];
    this.animations = ["fade-in", "rotate"],
    this.createContainer = [
      ["projects-container", "block"],
      ["cards-container", "grid"],
      ["image-text", "flex"],
      ["empty-div", "div", "display"]
    ];
  }

  findEmptyDiv() {
    let emptyDiv;
    domElements.divs.forEach((div) => {
      if (div.classList.contains(this.createContainer[3][0]) !== undefined) {
        div.classList.contains(this.createContainer[3][0])
          ? (emptyDiv = div)
          : (emptyDiv = emptyDiv);
      }
    });
    return emptyDiv;
  }

  currLinkStyle() {
    domElements.textLinks.forEach((link) => {
      if (link.classList.contains("bold-onclick", "text-underline"))
        link.classList.remove(...link.classList);
      if (link.getAttribute("id") === this.page)
        link.classList.add("bold-onclick", "text-underline");
    });
  }

  checkIfDivExists(name) {
    let divExist = false;
    domElements.divs.forEach((div) => {
      (name !== undefined && div.getAttribute(this.createContainer[3][1]) === name[0]) ||
      (name !== undefined && div.getAttribute(this.createContainer[3][1]) === name[1]) ||
      (name !== undefined && div.getAttribute(this.createContainer[3][1]) === name[2])
        ? (divExist = true)
        : typeof name === "string" && div.getAttribute(this.createContainer[3][1]) === name
        ? (divExist = true)
        : (divExist = divExist);
    });
    return divExist;
  }

  removeContent(page) {
    domElements.divs.forEach((div) => {
      if (
        div.getAttribute(this.createContainer[3][1]) === page ||
        typeof div.getAttribute(this.createContainer[3][1]) !== "string"
      )
        div.style.display = div.getAttribute(this.createContainer[3][2]);
      else div.style.display = "none";
    });
  }

  copyright() {
    const date = new Date();
    const currYear = date.getFullYear();
    const str = `${currYear}`;
    domElements.year.innerText = str;
  }

  animateRedLine() {
    domElements.redLine.style.opacity = 1;
    domElements.redLine.style.margin = "1em 10% 1em 10%";
  }

  spinPortrait() {
    setTimeout(() => {
      domElements.selfPortrait.classList.toggle(this.animations[1]);
      domElements.clickPrompt.style.visibility = "hidden";
    }, 2300);
  }

  animateFadeAndDoubleSpin() {
    domElements.selfPortrait.classList.toggle(this.animations[1]);
    domElements.show.forEach((element) => {
      element.classList.toggle(this.animations[0]);
    });
    setTimeout(() => {
      domElements.selfPortrait.classList.toggle(this.animations[1]);
      domElements.show.forEach((element) => {
        element.classList.toggle(this.animations[0]);
      });
    }, 1000);
  }

  showAll() {
    setTimeout(() => {
      domElements.show.forEach((element) => {
        element.classList.toggle(this.animations[0]);
      });
    }, 2300);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: domElements.form.method,
      body: data,
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        domElements.status.innerHTML = "Thanks for your submission!";
        domElements.form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            domElements.status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            domElements.status.innerHTML =
              "Oops! There was a problem submitting your form";
          }
        });
      }
    });
    if (error) {
      domElements.status.innerHTML =
        "Oops! There was a problem submitting your form";
      throw new Error(error);
    }
  }
}
