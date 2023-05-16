const home = new HomePage("home", true);
const portfolio = new PortfolioPage("portfolio", false);

window.onload = () => {
  home.copyright();
  home.animateName();
  home.animateImageContainer();
  home.animateNavBar();
  home.animateRedLine();
  home.spinPortrait();
  home.CreateAndPopulateDiv();
  home.showAll();
};

domElements.textLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const url = navLink.getAttribute("page");
    if(url === "home") {
      home.isLoad = false;
      home.CreateAndPopulateDiv()
    }
    if(url === "portfolio") {
      portfolio.CreateAndPopulateDiv()
    }
    if(url === "contact") {
      // contact.spinPortrait();
      // contact.showAll();
      console.log("bohoo!")
    }
  })
},);


// function scrollFunction() {
//   (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? query.scrollBtn.style.display = "block" : query.scrollBtn.style.display = "none";
// };

// function delay(url) {
//   setTimeout(function() {
//       window.open(url, "_blank") = url;
//   }, 1000);
// };
