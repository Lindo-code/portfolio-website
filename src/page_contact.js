class ContactPage extends Main {
  constructor(page, pages, isLoad) {
    super(page, pages, isLoad);
  }

  createAndPopulateDiv() {
    this.animateFadeAndDoubleSpin();
    this.currLinkStyle();
    domElements.pageTitle.innerText = this.page.toUpperCase();
    const divExist = this.checkIfDivExists(this.pages);
    if (divExist) {
      this.removeContent(this.page);
    }
  }
}
