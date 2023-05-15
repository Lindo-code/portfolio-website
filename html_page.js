class Page {
  constructor(pageName, load) {
    this.page = pageName;
    this.isLoad = load;
  }

  findEmptyDiv() {
    let emptyDiv;
    elements.divs.forEach((div) => {
      if (div.classList.contains("empty-div") !== undefined) {
        div.classList.contains("empty-div")
          ? (emptyDiv = div)
          : (emptyDiv = emptyDiv);
      }
    });
    return emptyDiv;
  };

  currLinkStyle() {
    elements.textLinks.forEach((link) => {
      // Move underline to current link
      if (link.classList.contains("bold-onclick", "text-underline"))
        link.classList.remove(...link.classList);
      if (link.getAttribute("page") === this.page)
        link.classList.add("bold-onclick", "text-underline");
    });
  };
  
  checkIfDivExists(name) {
    let divExist = false;
    elements.divs.forEach((div) => {
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
    elements.divs.forEach((div) => {
      //Show relevant content
        if (div.getAttribute("div") === page)
        console.log("beef")
          div.style.display = div.getAttribute("display");
        else div.style.display = "none";
    });
  };

  copyright() {
    const date = new Date();
    const currYear = date.getFullYear();
    const str = `${currYear}`;
    elements.year.innerText = str;
  }

  animateRedLine() {
    elements.redLine.style.opacity = 1;
    elements.redLine.style.margin = "1em 10% 1em 10%";
  }

  spinPortrait() {
    setTimeout(() => {
      elements.selfPortrait.classList.toggle("rotate");
    }, 2000);
  }

  showAll() {
    setTimeout(() => {
      elements.show.forEach((element) => {
        element.classList.toggle("fade-in");
      });
    }, 2200);
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: elements.form.method,
      body: data,
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        elements.status.innerHTML = "Thanks for your submission!";
        elements.form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            elements.status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            elements.status.innerHTML =
              "Oops! There was a problem submitting your form";
          }
        });
      }
    });
    if (error) {
      elements.status.innerHTML =
        "Oops! There was a problem submitting your form";
      throw new Error(error);
    }
  }
}
