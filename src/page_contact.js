class ContactPage extends Main {
  constructor(page, pages, isLoad) {
    super(page, pages, isLoad);
    this.form = {};
  }

  createAndPopulateDiv() {
    this.animateFadeAndDoubleSpin();
    this.currLinkStyle();
    domElements.pageTitle.innerText = this.page.toUpperCase();
    const divExist = this.checkIfDivExists(this.pages);
    if (divExist) {
      this.removeContent(this.page);
    }
    const contactDivExists = this.checkIfDivExists(this.page);
    if (!contactDivExists) {
      this.createFormDiv();
      this.form.container.innerHTML = this.form.form;
    }
  }

  createFormDiv() {
    this.form.container = this.findEmptyDiv();
    this.form.container.classList.add("email-form-container");
    this.form.container.classList.remove(this.createContainer[3][0]);
    this.form.container.setAttribute(this.createContainer[3][1], this.page);
    this.form.container.setAttribute(
      this.createContainer[3][2],
      this.createContainer[1][1]
    );
    this.form.form = `
    <h4 class="mail text-underline">SEND E-MAIL</h4>
    <form
      class="mail-me my-form"
      action="https://formspree.io/f/xoqzdkrk"
      method="POST"
      name="email"
      target="_blank"
    >
      <input type="hidden" name="_subject" value="New Message From Portfolio Site">
      <br>
      <input type="text" name="name" placeholder="First Name" required class="input1">
      <br>
      <input type="text" name="surname" placeholder="Last Name" required class="input1">
      <br>
      <input type="email" name="email" placeholder="E-mail Address" required class="input1">
      <br>
      <textarea name="yourMessage" placeholder="Message" required rows="10" cols="30" class="input2"></textarea>
      <br>
      <div class="submit-button">
        <button type="submit" class="submit-btn">SUBMIT</button>
      </div>
      <p class="my-form-status"></p>
    </form>
    `;
  }
}
