const home = new HomePage("about", true);
const portfolio = new PortfolioPage("portfolio", false);
const contact = new ContactPage("contact", false);
const currStickyPos = domElements.stickyElem.getBoundingClientRect().top + window.pageYOffset;

window.onload = () => {
  home.copyright();
  home.animateName();
  home.animateImageContainer();
  home.animateNavBar();
  home.animateRedLine();
  home.spinPortrait();
  home.createAndPopulateDiv();
  home.animateBubbleFadeIn();
  home.showAll();
};

window.onscroll = () => {
  if (homeContent.isNotScroll) {
    homeContent.isNotScroll = false;
    home.animateBubbleFadeOut();
  }
  if (window.pageYOffset > currStickyPos) {
    domElements.stickyElem.style.position = "fixed";
    domElements.stickyElem.style.top = "0px";
    domElements.stickyElem.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    domElements.stickyElem.style.position = "relative";
    domElements.stickyElem.style.top = "initial";
    domElements.stickyElem.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};

domElements.textLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const url = navLink.getAttribute("id");
    if (url === "about") {
      home.isLoad = false;
      home.createAndPopulateDiv();
    }
    if (url === "portfolio") {
      if (homeContent.isNotScroll) {
        homeContent.isNotScroll = false;
        home.animateBubbleFadeOut();
      }
      portfolio.createAndPopulateDiv();
    }
    if (url === "contact") {
      if (homeContent.isNotScroll) {
        homeContent.isNotScroll = false;
        home.animateBubbleFadeOut();
      }
      contact.createAndPopulateDiv();
    }
  });
});
