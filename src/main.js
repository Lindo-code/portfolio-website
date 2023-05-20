const home = new HomePage("about", true);
const portfolio = new PortfolioPage("portfolio", false);
const contact = new ContactPage("contact", false);

window.onload = () => {
  home.copyright();
  home.animateName();
  home.animateImageContainer();
  home.animateNavBar();
  home.animateRedLine();
  home.spinPortrait();
  home.createAndPopulateDiv();
  home.animateBubbleFadeIn();
  home.animateBubbleFadeOut();
  home.showAll();
};

domElements.textLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const url = navLink.getAttribute("id");
    if (url === "about") {
      home.isLoad = false;
      home.createAndPopulateDiv();
    }
    if (url === "portfolio") {
      portfolio.createAndPopulateDiv();
    }
    if (url === "contact") {
      contact.createAndPopulateDiv();
    }
  });
});
