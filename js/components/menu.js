export default class Menu{
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.nav = document.querySelector('.nav');
  }
  init() {
    this.hamburger.addEventListener('click', () => {
      this.nav.classList.toggle('nav-active');
    });


  }
}
