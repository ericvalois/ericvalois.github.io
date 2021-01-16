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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const icons = {
	'layer'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polygon fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="2,7 12,1 22,7 12,13 " stroke-linejoin="miter"></polygon> <polyline data-color="color-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 22,12 12,18 2,12 " stroke-linejoin="miter"></polyline> <polyline data-color="color-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 22,17 12,23 2,17 " stroke-linejoin="miter"></polyline></g></svg>`,
	'twitter'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"><path fill="currentColor" d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path></g></svg>`,
	'arrow-right'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><line data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12" stroke-linejoin="miter" stroke-linecap="butt"></line> <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="15,5 22,12 15,19 " stroke-linejoin="miter"></polyline></g></svg>`,
	'arrow-sm-right'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="10,8 14,12 10,16 " transform="translate(0, 0)" stroke-linejoin="miter"></polyline></g></svg>`,
	'pencil'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><line data-cap="butt" data-color="color-2" x1="14.328" y1="4.672" x2="19.328" y2="9.672" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter"></line> <path d="M8,21,2,22l1-6L16.414,2.586a2,2,0,0,1,2.828,0l2.172,2.172a2,2,0,0,1,0,2.828Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter"></path></g></svg>`,
	'picture'	: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"><path d="M22,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,21H3V3H21Z" fill="currentColor"></path><path data-color="color-2" d="M6,19H18a1,1,0,0,0,.895-1.447l-4-8a1,1,0,0,0-.735-.54.984.984,0,0,0-.867.28l-8,8A1,1,0,0,0,6,19Z" fill="currentColor"></path><circle data-color="color-2" cx="8" cy="8" r="2" fill="currentColor"></circle></g></svg>`,
}

function init(){
	const elements = document.querySelectorAll('i.icon');
	elements.forEach(element => {
		let name = element.getAttribute('data-icon');
		let svg = getSVG(name);
		let trimedSVG = svg.slice(4);
		let newSVG = `<svg class="${element.className}"` + trimedSVG;
		
		element.outerHTML = newSVG + `<!-- ${element.outerHTML} Icon -->`;
	});
}

function getSVG(name){
	
	if(name in icons){
		return icons[name];
	}

	// return default icon if nothing's found
	return '<svg class="icon animate-pulse has-error-500-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';
}

init();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

window.onload = function(){
    setTimeout(function(){
      window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
	  var t = performance.timing || {};

      if (!t) {

        return;
      }
      var start = t.navigationStart,
          end = t.loadEventEnd
          loadTime = (end - start) / 1000;

      var pagespeed = document.querySelector('.pagespeed');
      pagespeed.innerHTML += "<span class='loaded'>This page loaded in <strong>" + loadTime + " seconds</strong>.</span>";
    }, 0); 
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(1);

// EXTERNAL MODULE: ./src/scripts/_icon.js
var _icon = __webpack_require__(2);

// EXTERNAL MODULE: ./src/scripts/_pagespeed.js
var _pagespeed = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/zooming/build/zooming.module.js
var cursor = {
  default: 'auto',
  zoomIn: 'zoom-in',
  zoomOut: 'zoom-out',
  grab: 'grab',
  move: 'move'
};

function listen(el, event, handler) {
  var add = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var options = { passive: false };

  if (add) {
    el.addEventListener(event, handler, options);
  } else {
    el.removeEventListener(event, handler, options);
  }
}

function loadImage(src, cb) {
  if (src) {
    var img = new Image();

    img.onload = function onImageLoad() {
      if (cb) cb(img);
    };

    img.src = src;
  }
}

function getOriginalSource(el) {
  if (el.dataset.original) {
    return el.dataset.original;
  } else if (el.parentNode.tagName === 'A') {
    return el.parentNode.getAttribute('href');
  } else {
    return null;
  }
}

function setStyle(el, styles, remember) {
  checkTrans(styles);

  var s = el.style;
  var original = {};

  for (var key in styles) {
    if (remember) {
      original[key] = s[key] || '';
    }

    s[key] = styles[key];
  }

  return original;
}

function bindAll(_this, that) {
  var methods = Object.getOwnPropertyNames(Object.getPrototypeOf(_this));
  methods.forEach(function bindOne(method) {
    _this[method] = _this[method].bind(that);
  });
}

var trans = {
  transitionProp: 'transition',
  transEndEvent: 'transitionend',
  transformProp: 'transform',
  transformCssProp: 'transform'
};
var transformCssProp = trans.transformCssProp,
    transEndEvent = trans.transEndEvent;


function checkTrans(styles) {
  var transitionProp = trans.transitionProp,
      transformProp = trans.transformProp;


  if (styles.transition) {
    var value = styles.transition;
    delete styles.transition;
    styles[transitionProp] = value;
  }

  if (styles.transform) {
    var _value = styles.transform;
    delete styles.transform;
    styles[transformProp] = _value;
  }
}

var noop = function noop() {};

var DEFAULT_OPTIONS = {
  /**
   * To be able to grab and drag the image for extra zoom-in.
   * @type {boolean}
   */
  enableGrab: true,

  /**
   * Preload zoomable images.
   * @type {boolean}
   */
  preloadImage: false,

  /**
   * Close the zoomed image when browser window is resized.
   * @type {boolean}
   */
  closeOnWindowResize: true,

  /**
   * Transition duration in seconds.
   * @type {number}
   */
  transitionDuration: 0.4,

  /**
   * Transition timing function.
   * @type {string}
   */
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0, 1)',

  /**
   * Overlay background color.
   * @type {string}
   */
  bgColor: 'rgb(255, 255, 255)',

  /**
   * Overlay background opacity.
   * @type {number}
   */
  bgOpacity: 1,

  /**
   * The base scale factor for zooming. By default scale to fit the window.
   * @type {number}
   */
  scaleBase: 1.0,

  /**
   * The additional scale factor when grabbing the image.
   * @type {number}
   */
  scaleExtra: 0.5,

  /**
   * How much scrolling it takes before closing out.
   * @type {number}
   */
  scrollThreshold: 40,

  /**
   * The z-index that the overlay will be added with.
   * @type {number}
   */
  zIndex: 998,

  /**
   * Scale (zoom in) to given width and height. Ignore scaleBase if set.
   * Alternatively, provide a percentage value relative to the original image size.
   * @type {Object|String}
   * @example
   * customSize: { width: 800, height: 400 }
   * customSize: 100%
   */
  customSize: null,

  /**
   * A callback function that will be called when a target is opened and
   * transition has ended. It will get the target element as the argument.
   * @type {Function}
   */
  onOpen: noop,

  /**
   * Same as above, except fired when closed.
   * @type {Function}
   */
  onClose: noop,

  /**
   * Same as above, except fired when grabbed.
   * @type {Function}
   */
  onGrab: noop,

  /**
   * Same as above, except fired when moved.
   * @type {Function}
   */
  onMove: noop,

  /**
   * Same as above, except fired when released.
   * @type {Function}
   */
  onRelease: noop,

  /**
   * A callback function that will be called before open.
   * @type {Function}
   */
  onBeforeOpen: noop,

  /**
   * A callback function that will be called before close.
   * @type {Function}
   */
  onBeforeClose: noop,

  /**
   * A callback function that will be called before grab.
   * @type {Function}
   */
  onBeforeGrab: noop,

  /**
   * A callback function that will be called before release.
   * @type {Function}
   */
  onBeforeRelease: noop,

  /**
   * A callback function that will be called when the hi-res image is loading.
   * @type {Function}
   */
  onImageLoading: noop,

  /**
   * A callback function that will be called when the hi-res image is loaded.
   * @type {Function}
   */
  onImageLoaded: noop
};

var PRESS_DELAY = 200;

var handler = {
  init: function init(instance) {
    bindAll(this, instance);
  },
  click: function click(e) {
    e.preventDefault();

    if (isPressingMetaKey(e)) {
      return window.open(this.target.srcOriginal || e.currentTarget.src, '_blank');
    } else {
      if (this.shown) {
        if (this.released) {
          this.close();
        } else {
          this.release();
        }
      } else {
        this.open(e.currentTarget);
      }
    }
  },
  scroll: function scroll() {
    var el = document.documentElement || document.body.parentNode || document.body;
    var scrollLeft = window.pageXOffset || el.scrollLeft;
    var scrollTop = window.pageYOffset || el.scrollTop;

    if (this.lastScrollPosition === null) {
      this.lastScrollPosition = {
        x: scrollLeft,
        y: scrollTop
      };
    }

    var deltaX = this.lastScrollPosition.x - scrollLeft;
    var deltaY = this.lastScrollPosition.y - scrollTop;
    var threshold = this.options.scrollThreshold;

    if (Math.abs(deltaY) >= threshold || Math.abs(deltaX) >= threshold) {
      this.lastScrollPosition = null;
      this.close();
    }
  },
  keydown: function keydown(e) {
    if (isEscape(e)) {
      if (this.released) {
        this.close();
      } else {
        this.release(this.close);
      }
    }
  },
  mousedown: function mousedown(e) {
    if (!isLeftButton(e) || isPressingMetaKey(e)) return;
    e.preventDefault();
    var clientX = e.clientX,
        clientY = e.clientY;


    this.pressTimer = setTimeout(function grabOnMouseDown() {
      this.grab(clientX, clientY);
    }.bind(this), PRESS_DELAY);
  },
  mousemove: function mousemove(e) {
    if (this.released) return;
    this.move(e.clientX, e.clientY);
  },
  mouseup: function mouseup(e) {
    if (!isLeftButton(e) || isPressingMetaKey(e)) return;
    clearTimeout(this.pressTimer);

    if (this.released) {
      this.close();
    } else {
      this.release();
    }
  },
  touchstart: function touchstart(e) {
    e.preventDefault();
    var _e$touches$ = e.touches[0],
        clientX = _e$touches$.clientX,
        clientY = _e$touches$.clientY;


    this.pressTimer = setTimeout(function grabOnTouchStart() {
      this.grab(clientX, clientY);
    }.bind(this), PRESS_DELAY);
  },
  touchmove: function touchmove(e) {
    if (this.released) return;

    var _e$touches$2 = e.touches[0],
        clientX = _e$touches$2.clientX,
        clientY = _e$touches$2.clientY;

    this.move(clientX, clientY);
  },
  touchend: function touchend(e) {
    if (isTouching(e)) return;
    clearTimeout(this.pressTimer);

    if (this.released) {
      this.close();
    } else {
      this.release();
    }
  },
  clickOverlay: function clickOverlay() {
    this.close();
  },
  resizeWindow: function resizeWindow() {
    this.close();
  }
};

function isLeftButton(e) {
  return e.button === 0;
}

function isPressingMetaKey(e) {
  return e.metaKey || e.ctrlKey;
}

function isTouching(e) {
  e.targetTouches.length > 0;
}

function isEscape(e) {
  var code = e.key || e.code;
  return code === 'Escape' || e.keyCode === 27;
}

var overlay = {
  init: function init(instance) {
    this.el = document.createElement('div');
    this.instance = instance;
    this.parent = document.body;

    setStyle(this.el, {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0
    });

    this.updateStyle(instance.options);
    listen(this.el, 'click', instance.handler.clickOverlay.bind(instance));
  },
  updateStyle: function updateStyle(options) {
    setStyle(this.el, {
      zIndex: options.zIndex,
      backgroundColor: options.bgColor,
      transition: 'opacity\n        ' + options.transitionDuration + 's\n        ' + options.transitionTimingFunction
    });
  },
  insert: function insert() {
    this.parent.appendChild(this.el);
  },
  remove: function remove() {
    this.parent.removeChild(this.el);
  },
  fadeIn: function fadeIn() {
    this.el.offsetWidth;
    this.el.style.opacity = this.instance.options.bgOpacity;
  },
  fadeOut: function fadeOut() {
    this.el.style.opacity = 0;
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// Translate z-axis to fix CSS grid display issue in Chrome:
// https://github.com/kingdido999/zooming/issues/42
var TRANSLATE_Z = 0;

var target = {
  init: function init(el, instance) {
    this.el = el;
    this.instance = instance;
    this.srcThumbnail = this.el.getAttribute('src');
    this.srcset = this.el.getAttribute('srcset');
    this.srcOriginal = getOriginalSource(this.el);
    this.rect = this.el.getBoundingClientRect();
    this.translate = null;
    this.scale = null;
    this.styleOpen = null;
    this.styleClose = null;
  },
  zoomIn: function zoomIn() {
    var _instance$options = this.instance.options,
        zIndex = _instance$options.zIndex,
        enableGrab = _instance$options.enableGrab,
        transitionDuration = _instance$options.transitionDuration,
        transitionTimingFunction = _instance$options.transitionTimingFunction;

    this.translate = this.calculateTranslate();
    this.scale = this.calculateScale();

    this.styleOpen = {
      position: 'relative',
      zIndex: zIndex + 1,
      cursor: enableGrab ? cursor.grab : cursor.zoomOut,
      transition: transformCssProp + '\n        ' + transitionDuration + 's\n        ' + transitionTimingFunction,
      transform: 'translate3d(' + this.translate.x + 'px, ' + this.translate.y + 'px, ' + TRANSLATE_Z + 'px)\n        scale(' + this.scale.x + ',' + this.scale.y + ')',
      height: this.rect.height + 'px',
      width: this.rect.width + 'px'

      // Force layout update
    };this.el.offsetWidth;

    // Trigger transition
    this.styleClose = setStyle(this.el, this.styleOpen, true);
  },
  zoomOut: function zoomOut() {
    // Force layout update
    this.el.offsetWidth;

    setStyle(this.el, { transform: 'none' });
  },
  grab: function grab(x, y, scaleExtra) {
    var windowCenter = getWindowCenter();
    var dx = windowCenter.x - x,
        dy = windowCenter.y - y;


    setStyle(this.el, {
      cursor: cursor.move,
      transform: 'translate3d(\n        ' + (this.translate.x + dx) + 'px, ' + (this.translate.y + dy) + 'px, ' + TRANSLATE_Z + 'px)\n        scale(' + (this.scale.x + scaleExtra) + ',' + (this.scale.y + scaleExtra) + ')'
    });
  },
  move: function move(x, y, scaleExtra) {
    var windowCenter = getWindowCenter();
    var dx = windowCenter.x - x,
        dy = windowCenter.y - y;


    setStyle(this.el, {
      transition: transformCssProp,
      transform: 'translate3d(\n        ' + (this.translate.x + dx) + 'px, ' + (this.translate.y + dy) + 'px, ' + TRANSLATE_Z + 'px)\n        scale(' + (this.scale.x + scaleExtra) + ',' + (this.scale.y + scaleExtra) + ')'
    });
  },
  restoreCloseStyle: function restoreCloseStyle() {
    setStyle(this.el, this.styleClose);
  },
  restoreOpenStyle: function restoreOpenStyle() {
    setStyle(this.el, this.styleOpen);
  },
  upgradeSource: function upgradeSource() {
    if (this.srcOriginal) {
      var parentNode = this.el.parentNode;

      if (this.srcset) {
        this.el.removeAttribute('srcset');
      }

      var temp = this.el.cloneNode(false);

      // Force compute the hi-res image in DOM to prevent
      // image flickering while updating src
      temp.setAttribute('src', this.srcOriginal);
      temp.style.position = 'fixed';
      temp.style.visibility = 'hidden';
      parentNode.appendChild(temp);

      // Add delay to prevent Firefox from flickering
      setTimeout(function updateSrc() {
        this.el.setAttribute('src', this.srcOriginal);
        parentNode.removeChild(temp);
      }.bind(this), 50);
    }
  },
  downgradeSource: function downgradeSource() {
    if (this.srcOriginal) {
      if (this.srcset) {
        this.el.setAttribute('srcset', this.srcset);
      }
      this.el.setAttribute('src', this.srcThumbnail);
    }
  },
  calculateTranslate: function calculateTranslate() {
    var windowCenter = getWindowCenter();
    var targetCenter = {
      x: this.rect.left + this.rect.width / 2,
      y: this.rect.top + this.rect.height / 2

      // The vector to translate image to the window center
    };return {
      x: windowCenter.x - targetCenter.x,
      y: windowCenter.y - targetCenter.y
    };
  },
  calculateScale: function calculateScale() {
    var _el$dataset = this.el.dataset,
        zoomingHeight = _el$dataset.zoomingHeight,
        zoomingWidth = _el$dataset.zoomingWidth;
    var _instance$options2 = this.instance.options,
        customSize = _instance$options2.customSize,
        scaleBase = _instance$options2.scaleBase;


    if (!customSize && zoomingHeight && zoomingWidth) {
      return {
        x: zoomingWidth / this.rect.width,
        y: zoomingHeight / this.rect.height
      };
    } else if (customSize && (typeof customSize === 'undefined' ? 'undefined' : _typeof(customSize)) === 'object') {
      return {
        x: customSize.width / this.rect.width,
        y: customSize.height / this.rect.height
      };
    } else {
      var targetHalfWidth = this.rect.width / 2;
      var targetHalfHeight = this.rect.height / 2;
      var windowCenter = getWindowCenter();

      // The distance between target edge and window edge
      var targetEdgeToWindowEdge = {
        x: windowCenter.x - targetHalfWidth,
        y: windowCenter.y - targetHalfHeight
      };

      var scaleHorizontally = targetEdgeToWindowEdge.x / targetHalfWidth;
      var scaleVertically = targetEdgeToWindowEdge.y / targetHalfHeight;

      // The additional scale is based on the smaller value of
      // scaling horizontally and scaling vertically
      var scale = scaleBase + Math.min(scaleHorizontally, scaleVertically);

      if (customSize && typeof customSize === 'string') {
        // Use zoomingWidth and zoomingHeight if available
        var naturalWidth = zoomingWidth || this.el.naturalWidth;
        var naturalHeight = zoomingHeight || this.el.naturalHeight;
        var maxZoomingWidth = parseFloat(customSize) * naturalWidth / (100 * this.rect.width);
        var maxZoomingHeight = parseFloat(customSize) * naturalHeight / (100 * this.rect.height);

        // Only scale image up to the specified customSize percentage
        if (scale > maxZoomingWidth || scale > maxZoomingHeight) {
          return {
            x: maxZoomingWidth,
            y: maxZoomingHeight
          };
        }
      }

      return {
        x: scale,
        y: scale
      };
    }
  }
};

function getWindowCenter() {
  var docEl = document.documentElement;
  var windowWidth = Math.min(docEl.clientWidth, window.innerWidth);
  var windowHeight = Math.min(docEl.clientHeight, window.innerHeight);

  return {
    x: windowWidth / 2,
    y: windowHeight / 2
  };
}

/**
 * Zooming instance.
 */

var Zooming = function () {
  /**
   * @param {Object} [options] Update default options if provided.
   */
  function Zooming(options) {
    classCallCheck(this, Zooming);

    this.target = Object.create(target);
    this.overlay = Object.create(overlay);
    this.handler = Object.create(handler);
    this.body = document.body;

    this.shown = false;
    this.lock = false;
    this.released = true;
    this.lastScrollPosition = null;
    this.pressTimer = null;

    this.options = _extends({}, DEFAULT_OPTIONS, options);
    this.overlay.init(this);
    this.handler.init(this);
  }

  /**
   * Make element(s) zoomable.
   * @param  {string|Element} el A css selector or an Element.
   * @return {this}
   */


  createClass(Zooming, [{
    key: 'listen',
    value: function listen$$1(el) {
      if (typeof el === 'string') {
        var els = document.querySelectorAll(el);
        var i = els.length;

        while (i--) {
          this.listen(els[i]);
        }
      } else if (el.tagName === 'IMG') {
        el.style.cursor = cursor.zoomIn;
        listen(el, 'click', this.handler.click);

        if (this.options.preloadImage) {
          loadImage(getOriginalSource(el));
        }
      }

      return this;
    }

    /**
     * Update options or return current options if no argument is provided.
     * @param  {Object} options An Object that contains this.options.
     * @return {this|this.options}
     */

  }, {
    key: 'config',
    value: function config(options) {
      if (options) {
        _extends(this.options, options);
        this.overlay.updateStyle(this.options);
        return this;
      } else {
        return this.options;
      }
    }

    /**
     * Open (zoom in) the Element.
     * @param  {Element} el The Element to open.
     * @param  {Function} [cb=this.options.onOpen] A callback function that will
     * be called when a target is opened and transition has ended. It will get
     * the target element as the argument.
     * @return {this}
     */

  }, {
    key: 'open',
    value: function open(el) {
      var _this = this;

      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.onOpen;

      if (this.shown || this.lock) return;

      var target$$1 = typeof el === 'string' ? document.querySelector(el) : el;

      if (target$$1.tagName !== 'IMG') return;

      this.options.onBeforeOpen(target$$1);

      this.target.init(target$$1, this);

      if (!this.options.preloadImage) {
        var srcOriginal = this.target.srcOriginal;


        if (srcOriginal != null) {
          this.options.onImageLoading(target$$1);
          loadImage(srcOriginal, this.options.onImageLoaded);
        }
      }

      this.shown = true;
      this.lock = true;

      this.target.zoomIn();
      this.overlay.insert();
      this.overlay.fadeIn();

      listen(document, 'scroll', this.handler.scroll);
      listen(document, 'keydown', this.handler.keydown);

      if (this.options.closeOnWindowResize) {
        listen(window, 'resize', this.handler.resizeWindow);
      }

      var onOpenEnd = function onOpenEnd() {
        listen(target$$1, transEndEvent, onOpenEnd, false);
        _this.lock = false;
        _this.target.upgradeSource();

        if (_this.options.enableGrab) {
          toggleGrabListeners(document, _this.handler, true);
        }

        cb(target$$1);
      };

      listen(target$$1, transEndEvent, onOpenEnd);

      return this;
    }

    /**
     * Close (zoom out) the Element currently opened.
     * @param  {Function} [cb=this.options.onClose] A callback function that will
     * be called when a target is closed and transition has ended. It will get
     * the target element as the argument.
     * @return {this}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.onClose;

      if (!this.shown || this.lock) return;

      var target$$1 = this.target.el;

      this.options.onBeforeClose(target$$1);

      this.lock = true;
      this.body.style.cursor = cursor.default;
      this.overlay.fadeOut();
      this.target.zoomOut();

      listen(document, 'scroll', this.handler.scroll, false);
      listen(document, 'keydown', this.handler.keydown, false);

      if (this.options.closeOnWindowResize) {
        listen(window, 'resize', this.handler.resizeWindow, false);
      }

      var onCloseEnd = function onCloseEnd() {
        listen(target$$1, transEndEvent, onCloseEnd, false);

        _this2.shown = false;
        _this2.lock = false;

        _this2.target.downgradeSource();

        if (_this2.options.enableGrab) {
          toggleGrabListeners(document, _this2.handler, false);
        }

        _this2.target.restoreCloseStyle();
        _this2.overlay.remove();

        cb(target$$1);
      };

      listen(target$$1, transEndEvent, onCloseEnd);

      return this;
    }

    /**
     * Grab the Element currently opened given a position and apply extra zoom-in.
     * @param  {number}   x The X-axis of where the press happened.
     * @param  {number}   y The Y-axis of where the press happened.
     * @param  {number}   scaleExtra Extra zoom-in to apply.
     * @param  {Function} [cb=this.options.onGrab] A callback function that
     * will be called when a target is grabbed and transition has ended. It
     * will get the target element as the argument.
     * @return {this}
     */

  }, {
    key: 'grab',
    value: function grab(x, y) {
      var scaleExtra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options.scaleExtra;
      var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.options.onGrab;

      if (!this.shown || this.lock) return;

      var target$$1 = this.target.el;

      this.options.onBeforeGrab(target$$1);

      this.released = false;
      this.target.grab(x, y, scaleExtra);

      var onGrabEnd = function onGrabEnd() {
        listen(target$$1, transEndEvent, onGrabEnd, false);
        cb(target$$1);
      };

      listen(target$$1, transEndEvent, onGrabEnd);

      return this;
    }

    /**
     * Move the Element currently grabbed given a position and apply extra zoom-in.
     * @param  {number}   x The X-axis of where the press happened.
     * @param  {number}   y The Y-axis of where the press happened.
     * @param  {number}   scaleExtra Extra zoom-in to apply.
     * @param  {Function} [cb=this.options.onMove] A callback function that
     * will be called when a target is moved and transition has ended. It will
     * get the target element as the argument.
     * @return {this}
     */

  }, {
    key: 'move',
    value: function move(x, y) {
      var scaleExtra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options.scaleExtra;
      var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.options.onMove;

      if (!this.shown || this.lock) return;

      this.released = false;
      this.body.style.cursor = cursor.move;
      this.target.move(x, y, scaleExtra);

      var target$$1 = this.target.el;

      var onMoveEnd = function onMoveEnd() {
        listen(target$$1, transEndEvent, onMoveEnd, false);
        cb(target$$1);
      };

      listen(target$$1, transEndEvent, onMoveEnd);

      return this;
    }

    /**
     * Release the Element currently grabbed.
     * @param  {Function} [cb=this.options.onRelease] A callback function that
     * will be called when a target is released and transition has ended. It
     * will get the target element as the argument.
     * @return {this}
     */

  }, {
    key: 'release',
    value: function release() {
      var _this3 = this;

      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.onRelease;

      if (!this.shown || this.lock) return;

      var target$$1 = this.target.el;

      this.options.onBeforeRelease(target$$1);

      this.lock = true;
      this.body.style.cursor = cursor.default;
      this.target.restoreOpenStyle();

      var onReleaseEnd = function onReleaseEnd() {
        listen(target$$1, transEndEvent, onReleaseEnd, false);
        _this3.lock = false;
        _this3.released = true;
        cb(target$$1);
      };

      listen(target$$1, transEndEvent, onReleaseEnd);

      return this;
    }
  }]);
  return Zooming;
}();


function toggleGrabListeners(el, handler$$1, add) {
  var types = ['mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend'];

  types.forEach(function toggleListener(type) {
    listen(el, type, handler$$1[type], add);
  });
}

/* harmony default export */ var zooming_module = (Zooming);

// CONCATENATED MODULE: ./src/scripts/main.js






//https://kingdido999.github.io/zooming/docs/#/


document.addEventListener('DOMContentLoaded', function () {
	const zooming = new zooming_module({
	  bgColor: 'rgb(5, 5, 5)',
	  bgOpacity: 0.8,
	})
  
	zooming.listen('.img-zoomable')
  })

// import { zoom } from "@nishanths/zoom.js";

// const zoomImages = document.querySelectorAll('[data-action="zoom"]');
// zoomImages.forEach(img => {
// 	zoom.setup(img);
// });



console.log("Works!");



/***/ })
/******/ ]);