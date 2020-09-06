/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor() {
    this.form = document.querySelector('.form');
    this.btn = this.form.querySelector('.form__button');
    this.path = 'question.php';
  }

  async postData(data) {
    const response = await fetch(this.path, {
      method: 'Post',
      body: data
    });
    return await response.text();
  }

  onFormSubmit(evt) {
    this.form.addEventListener('submit', evt => {
      evt.preventDefault();
      const data = new FormData(this.form);
      this.btn.textContent = 'Loading';
      this.btn.style.backgroundColor = 'blue';
      this.postData(data).then(res => {
        console.log(res);
        this.btn.textContent = 'Отправленно';
        this.btn.style.backgroundColor = 'green';
      }).catch(() => {
        this.btn.textContent = 'Ошибка';
        this.btn.style.backgroundColor = 'red';
      }).finally(() => setTimeout(() => {
        this.btn.textContent = 'отправить';
        this.btn.style.backgroundColor = '#000000';
      }, 3000));
      this.form.reset();
    });
  }

  init() {
    this.onFormSubmit();
  }

}

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
class Menu {
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

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor(container, slides, dots, title) {
    this.container = document.querySelector('.slider'), this.slides = document.querySelectorAll('.slide'), this.dots = this.container.querySelectorAll('.dot'), this.title = this.container.querySelector('.slider__title-p');
  }

  hideSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove('slide--active');
    });
    this.dots.forEach(dot => {
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

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ "./src/js/components/form.js");



document.addEventListener('DOMContentLoaded', () => {
  new _components_menu__WEBPACK_IMPORTED_MODULE_0__["default"]().init();
  new _components_form__WEBPACK_IMPORTED_MODULE_2__["default"]().init();
  let slider = new _components_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('.slider', '.slide', '.dot', '.slider__title-p');

  if (document.documentElement.clientWidth < 1200) {
    slider.init();
  }

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 1200) {
      slider = new _components_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('.slider', '.slide', '.dot', '.slider__title-p');
      slider.init();
    } else if (document.documentElement.clientWidth > 1200) {
      slider = null;
    }
  }); // if (document.documentElement.clientWidth < 1200) {
  // 	new Slider('.slider', '.slide', '.dot', '.slider__title-p').init();
  // }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map