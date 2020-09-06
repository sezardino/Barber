export default class Slider {
	constructor(container, slides, dots, title) {
		(this.container = document.querySelector('.slider')),
			(this.slides = document.querySelectorAll('.slide')),
			(this.dots = this.container.querySelectorAll('.dot')),
			(this.title = this.container.querySelector('.slider__title-p'));
	}
	hideSlides() {
		this.slides.forEach((slide) => {
			slide.classList.remove('slide--active');
		});
		this.dots.forEach((dot) => {
			dot.classList.remove('dot--active');
		});
	}

	showSlide(n) {
		this.slides[n].classList.add('slide--active');
		const slideTitle = this.slides[n].querySelector('p').textContent;
		this.title.textContent = slideTitle;
		this.dots[n].classList.add('dot--active');
	}

	bindTriggers(arr) {
		arr.forEach((item, index) => {
			item.addEventListener('click', () => {
				this.hideSlides();
				this.showSlide(index);
			});
		});
	}

	init() {
		this.hideSlides();
		this.showSlide(1);
		this.bindTriggers(this.dots);
		this.bindTriggers(this.slides);
	}
}
