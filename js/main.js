import Menu from './components/menu';
import Slider from './components/slider';
import Form from './components/form';

document.addEventListener('DOMContentLoaded', () => {
  new Menu().init();
  new Form().init();

  if(document.documentElement.clientWidth < 1200) {
    new Slider('.slider', '.slide', '.dot', '.slider__title-p').init();
  }
});
