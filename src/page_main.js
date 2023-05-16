class Main {
  constructor(pageName, load) {
    this.page = pageName;
    this.isLoad = load;
    this.createContainer = [["projects-container", "block"], ["cards-container", "grid"], ["image-text", "flex"]];
    this.pages = ["home", "portfolio", "contact"];
  }

  findEmptyDiv() {
    let emptyDiv;
    domElements.divs.forEach((div) => {
      if (div.classList.contains("empty-div") !== undefined) {
        div.classList.contains("empty-div")
          ? (emptyDiv = div)
          : (emptyDiv = emptyDiv);
      }
    });
    return emptyDiv;
  };

  currLinkStyle() {
    domElements.textLinks.forEach((link) => {
      if (link.classList.contains("bold-onclick", "text-underline"))
        link.classList.remove(...link.classList);
      if (link.getAttribute("page") === this.page)
        link.classList.add("bold-onclick", "text-underline");
    });
  };
  
  checkIfDivExists(name) {
    let divExist = false;
    domElements.divs.forEach((div) => {
      (name !== undefined && div.getAttribute("div") === name[0]) ||
        (name !== undefined && div.getAttribute("div") === name[1]) ||
        (name !== undefined && div.getAttribute("div") === name[2])
        ? (divExist = true)
        : typeof name === "string" && div.getAttribute("div") === name
          ? (divExist = true)
          : (divExist = divExist);
    });
    return divExist;
  };

  removeContent(page) {
    domElements.divs.forEach((div) => {
      console.log(typeof div.getAttribute(div))
        if (div.getAttribute("div") === page || typeof div.getAttribute("div") !== "string")
          div.style.display = div.getAttribute("display");
        else div.style.display = "none";
    });
  };

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
      domElements.selfPortrait.classList.toggle("rotate");
    }, 2000);
  }

  animateFadeAndDoubleSpin() {
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

  showAll() {
    setTimeout(() => {
      domElements.show.forEach((element) => {
        element.classList.toggle("fade-in");
      });
    }, 2200);
  };

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
