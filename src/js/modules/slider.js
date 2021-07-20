class Slider {
  constructor() {
    this.slider = document.querySelector('.js-slider')
    this.slides = this.slider.querySelectorAll('.js-slide')
    this.dots = this.slider.querySelectorAll('.js-dot')
    this.title = this.slider.querySelector('.js-title')
    this.slideActiveClass = 'slider__item--active'
    this.dotActiveClass = 'slider__dot--active'

    this.init()
  }

  deleteActive() {
    this.slides.forEach((item) => item.classList.remove(this.slideActiveClass))
    this.dots.forEach((item) => item.classList.remove(this.dotActiveClass))
  }

  changeTitle() {
    this.slides.forEach((slide) => {
      if (slide.classList.contains(this.slideActiveClass)) {
        const { textContent } = slide.querySelector('h3')
        this.title.textContent = textContent
      }
    })
  }

  addListeners() {
    this.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        this.deleteActive()
        slide.classList.add(this.slideActiveClass)
        this.dots[index].classList.add(this.dotActiveClass)
        this.changeTitle()
      })
    })
  }

  init() {
    if (window.innerWidth <= 768) {
      this.addListeners()
      this.changeTitle()
    }
    window.addEventListener('resize', (evt) => {
      if (evt.target.innerWidth >= 768) {
        this.deleteActive()
        this.slides = []
        this.dots = []
      }
    })
  }
}

export default Slider
