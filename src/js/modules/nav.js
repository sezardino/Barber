class Nav {
  constructor() {
    this.container = document.querySelector('.js-header')
    this.nav = this.container.querySelector('.js-nav')
    this.trigger = this.container.querySelector('.js-toggler')
    this.openClass = 'header__wrapper--open'

    this.init()
  }

  closeNav() {
    this.nav.classList.remove(this.openClass)
  }

  addListeners() {
    this.trigger.addEventListener('click', (evt) => {
      evt.preventDefault()
      this.nav.classList.toggle(this.openClass)
    })
    this.nav
      .querySelectorAll('.nav__link')
      .forEach((item) => item.addEventListener('click', () => this.closeNav()))
    window.addEventListener('resize', (evt) => {
      if (
        evt.target.innerWidth >= 576 &&
        this.nav.classList.contains(this.openClass)
      ) {
        this.closeNav()
      }
    })
  }

  init() {
    this.addListeners()
  }
}

export default Nav
