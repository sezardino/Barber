import Menu from './components/menu';
import Slider from './components/slider';
import Form from './components/form';

document.addEventListener('DOMContentLoaded', () => {
	new Menu().init();
	new Form().init();

	let slider = new Slider('.slider', '.slide', '.dot', '.slider__title-p');

	if (document.documentElement.clientWidth < 1200) {
		slider.init();
	}

	window.addEventListener('resize', () => {
		if (document.documentElement.clientWidth < 1200) {
			slider = new Slider('.slider', '.slide', '.dot', '.slider__title-p');
			slider.init();
		} else if (document.documentElement.clientWidth > 1200) {
			slider = null;
		}
	});
	// if (document.documentElement.clientWidth < 1200) {
	// 	new Slider('.slider', '.slide', '.dot', '.slider__title-p').init();
	// }
});
