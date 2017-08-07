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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameOverPanelConfig = exports.distanceMeterConfig = exports.horizonLineConfig = exports.nightModeConfig = exports.obstacleConfig = exports.horizonConfig = exports.runnerConfig = exports.cloudConfig = exports.trexConfig = undefined;

var _consts = __webpack_require__(3);

Object.keys(_consts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _consts[key];
    }
  });
});

var _trexConfig = __webpack_require__(9);

var trexConfig = _interopRequireWildcard(_trexConfig);

var _cloudConfig = __webpack_require__(11);

var cloudConfig = _interopRequireWildcard(_cloudConfig);

var _runnerConfig = __webpack_require__(12);

var runnerConfig = _interopRequireWildcard(_runnerConfig);

var _horizonConfig = __webpack_require__(13);

var horizonConfig = _interopRequireWildcard(_horizonConfig);

var _obstacleConfig = __webpack_require__(14);

var obstacleConfig = _interopRequireWildcard(_obstacleConfig);

var _nightModeConfig = __webpack_require__(15);

var nightModeConfig = _interopRequireWildcard(_nightModeConfig);

var _horizonLineConfig = __webpack_require__(16);

var horizonLineConfig = _interopRequireWildcard(_horizonLineConfig);

var _distanceMeterConfig = __webpack_require__(17);

var distanceMeterConfig = _interopRequireWildcard(_distanceMeterConfig);

var _gameOverPanelConfig = __webpack_require__(18);

var gameOverPanelConfig = _interopRequireWildcard(_gameOverPanelConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.trexConfig = trexConfig;
exports.cloudConfig = cloudConfig;
exports.runnerConfig = runnerConfig;
exports.horizonConfig = horizonConfig;
exports.obstacleConfig = obstacleConfig;
exports.nightModeConfig = nightModeConfig;
exports.horizonLineConfig = horizonLineConfig;
exports.distanceMeterConfig = distanceMeterConfig;
exports.gameOverPanelConfig = gameOverPanelConfig;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomNum = getRandomNum;
exports.vibrate = vibrate;
exports.createCanvas = createCanvas;
exports.decodeBase64ToArrayBuffer = decodeBase64ToArrayBuffer;
exports.getTimeStamp = getTimeStamp;
exports.setAssignPolyFill = setAssignPolyFill;

var _Configs = __webpack_require__(0);

var classes = _Configs.runnerConfig.classes;
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Vibrate on mobile devices.
 * @param {number} duration Duration of the vibration in milliseconds.
 */
function vibrate(duration) {
  if (_Configs.IS_MOBILE && window.navigator.vibrate) {
    window.navigator.vibrate(duration);
  }
};

/**
 * Create canvas element.
 * @param {HTMLElement} container Element to append canvas to.
 * @param {number} width
 * @param {number} height
 * @param {string} opt_classname
 * @return {HTMLCanvasElement}
 */
function createCanvas(container, width, height, opt_classname) {
  var canvas = document.createElement('canvas');
  canvas.className = opt_classname ? classes.CANVAS + ' ' + opt_classname : classes.CANVAS;
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);

  return canvas;
};

/**
 * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
 * @param {string} base64String
 */
function decodeBase64ToArrayBuffer(base64String) {
  var len = base64String.length / 4 * 3;
  var str = atob(base64String);
  var arrayBuffer = new ArrayBuffer(len);
  var bytes = new Uint8Array(arrayBuffer);

  for (var i = 0; i < len; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes.buffer;
};

/**
 * Return the current timestamp.
 * @return {number}
 */
function getTimeStamp() {
  return _Configs.IS_IOS ? new Date().getTime() : performance.now();
};

function setAssignPolyFill() {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target, firstSource) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collisionBox = __webpack_require__(10);

Object.keys(_collisionBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collisionBox[key];
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default game width.
 * @const
 */
var DEFAULT_WIDTH = exports.DEFAULT_WIDTH = 900;

var DEFAULT_HEIGHT = exports.DEFAULT_HEIGHT = 270;

var DIMENSIONS = exports.DIMENSIONS = {
  WIDTH: DEFAULT_WIDTH,
  HEIGHT: DEFAULT_HEIGHT

  /**
   * Frames per second.
   * @const
   */
};var FPS = exports.FPS = 60;

/** @const */
var IS_HIDPI = exports.IS_HIDPI = window.devicePixelRatio > 1;

/** @const */
var IS_IOS = exports.IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

/** @const */
var IS_MOBILE = exports.IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

/** @const */
var IS_TOUCH_ENABLED = exports.IS_TOUCH_ENABLED = 'ontouchstart' in window;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloud = __webpack_require__(24);

var _cloud2 = _interopRequireDefault(_cloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cloud2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _obstacle = __webpack_require__(25);

var _obstacle2 = _interopRequireDefault(_obstacle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _obstacle2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _runner = __webpack_require__(7);

var _runner2 = _interopRequireDefault(_runner);

var _service = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  window['Runner'] = _runner2.default;
})();

function onDocumentLoad() {
  console.log('Object assign defined:' + (Object.assign != undefined));
  if (!Object.assign) {

    (0, _service.setAssignPolyFill)();

    console.log('Assign Polyfill set:' + (Object.assign != undefined));
  }
  console.log('Object assign defined:' + (Object.assign != undefined));

  new _runner2.default('.interstitial-wrapper');
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _runner = __webpack_require__(8);

var _runner2 = _interopRequireDefault(_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _runner2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

var _service = __webpack_require__(1);

var _horizon = __webpack_require__(19);

var _horizon2 = _interopRequireDefault(_horizon);

var _trex = __webpack_require__(26);

var _trex2 = _interopRequireDefault(_trex);

var _distanceMeter = __webpack_require__(28);

var _distanceMeter2 = _interopRequireDefault(_distanceMeter);

var _gameOverPanel = __webpack_require__(30);

var _gameOverPanel2 = _interopRequireDefault(_gameOverPanel);

var _obstacle = __webpack_require__(5);

var _obstacle2 = _interopRequireDefault(_obstacle);

var _cloud = __webpack_require__(4);

var _cloud2 = _interopRequireDefault(_cloud);

var _collision = __webpack_require__(2);

var _imagesLoader = __webpack_require__(32);

var _imagesLoader2 = _interopRequireDefault(_imagesLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Runner = function () {
  function Runner(outerContainerId, opt_config) {
    _classCallCheck(this, Runner);

    this.outerContainerEl = document.querySelector(outerContainerId);
    this.containerEl = null;
    this.detailsButton = this.outerContainerEl.querySelector('#details-button');

    this.config = opt_config || Runner.config;

    this.dimensions = _Configs.DIMENSIONS;

    this.canvas = null;
    this.canvasCtx = null;

    this.tRex = null;

    this.distanceMeter = null;
    this.distanceRan = 0;

    this.highestScore = 0;

    this.time = 0;
    this.runningTime = 0;
    this.msPerFrame = 1000 / _Configs.FPS;
    this.currentSpeed = this.config.SPEED;

    this.obstacles = [];

    this.activated = false; // Whether the easter egg has been activated.
    this.playing = false; // Whether the game is currently in play state.
    this.crashed = false;
    this.paused = false;
    this.inverted = false;
    this.invertTimer = 0;
    this.resizeTimerId_ = null;

    this.playCount = 0;

    // Sound FX.
    this.audioBuffer = null;
    this.soundFx = {};

    // Global web audio context for playing sounds.
    this.audioContext = null;

    // Images.
    this.images = {};
    this.imagesLoaded = 0;

    this.adjustDimensions();

    if (this.isDisabled()) {
      this.setupDisabledRunner();
    } else {
      this.loadImages();
    }
  }

  _createClass(Runner, [{
    key: 'isDisabled',
    value: function isDisabled() {
      // return loadTimeData && loadTimeData.valueExists('disabledEasterEgg');
      return false;
    }

    /**
     * For disabled instances, set up a snackbar with the disabled message.
     */

  }, {
    key: 'setupDisabledRunner',
    value: function setupDisabledRunner() {
      this.containerEl = document.createElement('div');
      this.containerEl.className = Runner.classes.SNACKBAR;
      this.containerEl.textContent = loadTimeData.getValue('disabledEasterEgg');
      this.outerContainerEl.appendChild(this.containerEl);

      // Show notification when the activation key is pressed.
      document.addEventListener(Runner.events.KEYDOWN, function (e) {
        if (Runner.keycodes.JUMP[e.keyCode]) {
          this.containerEl.classList.add(Runner.classes.SNACKBAR_SHOW);
          document.querySelector('.icon').classList.add('icon-disabled');
        }
      }.bind(this));
    }

    /**
     * Cache the appropriate image sprite from the page and get the sprite sheet
     * definition.
     */

  }, {
    key: 'loadImages',
    value: function loadImages() {
      var imagesLoader = void 0,
          spriteIds = void 0;

      if (_Configs.IS_HIDPI) {
        spriteIds = Runner.spriteIds['HDPI'];
      } else {
        spriteIds = Runner.spriteIds['LDPI'];
      }

      imagesLoader = new _imagesLoader2.default(spriteIds);

      if (imagesLoader.checkAll()) {
        this.init();
      } else {
        imagesLoader.onLoaded(this.init.bind(this));
      }
    }

    /**
     * Load and decode base 64 encoded sounds.
     */

  }, {
    key: 'loadSounds',
    value: function loadSounds() {
      if (!_Configs.IS_IOS) {
        this.audioContext = new AudioContext();

        var resourceTemplate = document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;

        for (var sound in Runner.sounds) {
          var soundSrc = resourceTemplate.getElementById(Runner.sounds[sound]).src;
          soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
          var buffer = (0, _service.decodeBase64ToArrayBuffer)(soundSrc);

          // Async, so no guarantee of order in array.
          this.audioContext.decodeAudioData(buffer, function (index, audioData) {
            this.soundFx[index] = audioData;
          }.bind(this, sound));
        }
      }
    }

    /**
     * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
     * @param {number} opt_speed
     */

  }, {
    key: 'setSpeed',
    value: function setSpeed(opt_speed) {
      var speed = opt_speed || this.currentSpeed;

      // Reduce the speed on smaller mobile screens.
      if (this.dimensions.WIDTH < _Configs.DEFAULT_WIDTH) {
        var mobileSpeed = speed * this.dimensions.WIDTH / _Configs.DEFAULT_WIDTH * this.config.MOBILE_SPEED_COEFFICIENT;
        this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
      } else if (opt_speed) {
        this.currentSpeed = opt_speed;
      }
    }

    /**
     * Game initialiser.
     */

  }, {
    key: 'init',
    value: function init() {
      // Hide the static icon.
      document.querySelector('.' + Runner.classes.ICON).style.visibility = 'hidden';

      this.adjustDimensions();
      this.setSpeed();

      this.containerEl = document.createElement('div');
      this.containerEl.className = Runner.classes.CONTAINER;

      // Player canvas container.
      this.canvas = (0, _service.createCanvas)(this.containerEl, this.dimensions.WIDTH, this.dimensions.HEIGHT, Runner.classes.PLAYER);

      this.canvasCtx = this.canvas.getContext('2d');
      this.canvasCtx.fillStyle = '#f7f7f7';
      this.canvasCtx.fill();
      Runner.updateCanvasScaling(this.canvas);

      _cloud2.default.initSprites();
      _obstacle2.default.initSprites();

      // Horizon contains clouds, obstacles and the ground.
      this.horizon = new _horizon2.default(this.canvas);

      // Distance meter
      this.distanceMeter = new _distanceMeter2.default(this.canvas);

      // Draw t-rex
      this.tRex = new _trex2.default(this.canvas);

      this.outerContainerEl.appendChild(this.containerEl);

      if (_Configs.IS_MOBILE) {
        this.createTouchController();
      }

      this.startListening();
      this.update();

      window.addEventListener(Runner.events.RESIZE, this.debounceResize.bind(this));
    }

    /**
     * Create the touch controller. A div that covers whole screen.
     */

  }, {
    key: 'createTouchController',
    value: function createTouchController() {
      this.touchController = document.createElement('div');
      this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
      this.outerContainerEl.appendChild(this.touchController);
    }

    /**
     * Debounce the resize event.
     */

  }, {
    key: 'debounceResize',
    value: function debounceResize() {
      if (!this.resizeTimerId_) {
        this.resizeTimerId_ = setInterval(this.adjustDimensions.bind(this), 250);
      }
    }

    /**
     * Adjust game space dimensions on resize.
     */

  }, {
    key: 'adjustDimensions',
    value: function adjustDimensions() {
      clearInterval(this.resizeTimerId_);
      this.resizeTimerId_ = null;

      var boxStyles = window.getComputedStyle(this.outerContainerEl);
      var padding = Number(boxStyles.paddingLeft.substr(0, boxStyles.paddingLeft.length - 2));

      this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;

      // Redraw the elements back onto the canvas.
      if (this.canvas) {
        this.canvas.width = this.dimensions.WIDTH;
        this.canvas.height = this.dimensions.HEIGHT;

        Runner.updateCanvasScaling(this.canvas);

        this.distanceMeter.calcXPos(this.dimensions.WIDTH);
        this.clearCanvas();
        this.horizon.update(0, 0, true);
        this.tRex.update(0);

        // Outer container and distance meter.
        if (this.playing || this.crashed || this.paused) {
          this.containerEl.style.width = this.dimensions.WIDTH + 'px';
          this.containerEl.style.height = this.dimensions.HEIGHT + 'px';
          this.distanceMeter.update(0, Math.ceil(this.distanceRan));
          this.stop();
        } else {
          this.tRex.draw(0, 0);
        }

        // Game over panel.
        if (this.crashed && this.gameOverPanel) {
          this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
          this.gameOverPanel.draw();
        }
      }
    }

    /**
     * Play the game intro.
     * Canvas container width expands out to the full width.
     */

  }, {
    key: 'playIntro',
    value: function playIntro() {
      if (!this.activated && !this.crashed) {
        this.playingIntro = true;
        this.tRex.playingIntro = true;

        // CSS animation definition.
        var keyframes = '@-webkit-keyframes intro { ' + 'from { width:' + _trex2.default.config.WIDTH + 'px }' + 'to { width: ' + this.dimensions.WIDTH + 'px }' + '}';
        document.styleSheets[0].insertRule(keyframes, 0);

        this.containerEl.addEventListener(Runner.events.ANIM_END, this.startGame.bind(this));

        this.containerEl.style.webkitAnimation = 'intro .4s ease-out 1 both';
        this.containerEl.style.width = this.dimensions.WIDTH + 'px';

        // if (this.touchController) {
        //     this.outerContainerEl.appendChild(this.touchController);
        // }
        this.playing = true;
        this.activated = true;
      } else if (this.crashed) {
        this.restart();
      }
    }

    /**
     * Update the game status to started.
     */

  }, {
    key: 'startGame',
    value: function startGame() {
      this.runningTime = 0;
      this.playingIntro = false;
      this.tRex.playingIntro = false;
      this.containerEl.style.webkitAnimation = '';
      this.playCount++;

      // Handle tabbing off the page. Pause the current game.
      document.addEventListener(Runner.events.VISIBILITY, this.onVisibilityChange.bind(this));

      window.addEventListener(Runner.events.BLUR, this.onVisibilityChange.bind(this));

      window.addEventListener(Runner.events.FOCUS, this.onVisibilityChange.bind(this));
    }
  }, {
    key: 'clearCanvas',
    value: function clearCanvas() {
      this.canvasCtx.clearRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
    }

    /**
     * Update the game frame and schedules the next one.
     */

  }, {
    key: 'update',
    value: function update() {
      this.updatePending = false;

      var now = (0, _service.getTimeStamp)();
      var deltaTime = now - (this.time || now);
      this.time = now;

      if (this.playing) {
        this.clearCanvas();

        if (this.tRex.jumping) {
          this.tRex.updateJump(deltaTime);
        }

        this.runningTime += deltaTime;
        var hasObstacles = this.runningTime > this.config.CLEAR_TIME;

        // First jump triggers the intro.
        if (this.tRex.jumpCount == 1 && !this.playingIntro) {
          this.playIntro();
        }

        // The horizon doesn't move until the intro is over.
        if (this.playingIntro) {
          this.horizon.update(0, this.currentSpeed, hasObstacles);
        } else {
          deltaTime = !this.activated ? 0 : deltaTime;
          this.horizon.update(deltaTime, this.currentSpeed, hasObstacles, this.inverted);
        }

        // Check for collisions.
        var collision = hasObstacles && (0, _collision.checkForCollision)(this.horizon.obstacles[0], this.tRex);

        if (!collision) {
          this.distanceRan += this.currentSpeed * deltaTime / this.msPerFrame;

          if (this.currentSpeed < this.config.MAX_SPEED) {
            this.currentSpeed += this.config.ACCELERATION;
          }
        } else {
          this.gameOver();
        }

        var playAchievementSound = this.distanceMeter.update(deltaTime, Math.ceil(this.distanceRan));

        if (playAchievementSound) {
          this.playSound(this.soundFx.SCORE);
        }

        // Night mode.
        if (this.invertTimer > this.config.INVERT_FADE_DURATION) {
          this.invertTimer = 0;
          this.invertTrigger = false;
          this.invert();
        } else if (this.invertTimer) {
          this.invertTimer += deltaTime;
        } else {
          var actualDistance = this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));

          if (actualDistance > 0) {
            this.invertTrigger = !(actualDistance % this.config.INVERT_DISTANCE);

            if (this.invertTrigger && this.invertTimer === 0) {
              this.invertTimer += deltaTime;
              this.invert();
            }
          }
        }
      }

      if (this.playing || !this.activated && this.tRex.blinkCount < Runner.config.MAX_BLINK_COUNT) {
        this.tRex.update(deltaTime);
        this.scheduleNextUpdate();
      }
    }

    /**
     * Event handler.
     */

  }, {
    key: 'handleEvent',
    value: function handleEvent(e) {
      return function (evtType, events) {
        switch (evtType) {
          case events.KEYDOWN:
          case events.TOUCHSTART:
          case events.MOUSEDOWN:
            this.onKeyDown(e);
            break;
          case events.KEYUP:
          case events.TOUCHEND:
          case events.MOUSEUP:
            this.onKeyUp(e);
            break;
        }
      }.bind(this)(e.type, Runner.events);
    }

    /**
     * Bind relevant key / mouse / touch listeners.
     */

  }, {
    key: 'startListening',
    value: function startListening() {
      // Keys.
      document.addEventListener(Runner.events.KEYDOWN, this);
      document.addEventListener(Runner.events.KEYUP, this);

      if (_Configs.IS_MOBILE) {
        // Mobile only touch devices.
        this.touchController.addEventListener(Runner.events.TOUCHSTART, this);
        this.touchController.addEventListener(Runner.events.TOUCHEND, this);
        this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);
      } else {
        // Mouse.
        document.addEventListener(Runner.events.MOUSEDOWN, this);
        document.addEventListener(Runner.events.MOUSEUP, this);
      }
    }

    /**
     * Remove all listeners.
     */

  }, {
    key: 'stopListening',
    value: function stopListening() {
      document.removeEventListener(Runner.events.KEYDOWN, this);
      document.removeEventListener(Runner.events.KEYUP, this);

      if (_Configs.IS_MOBILE) {
        this.touchController.removeEventListener(Runner.events.TOUCHSTART, this);
        this.touchController.removeEventListener(Runner.events.TOUCHEND, this);
        this.containerEl.removeEventListener(Runner.events.TOUCHSTART, this);
      } else {
        document.removeEventListener(Runner.events.MOUSEDOWN, this);
        document.removeEventListener(Runner.events.MOUSEUP, this);
      }
    }

    /**
     * Process keydown.
     * @param {Event} e
     */

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      // Prevent native page scrolling whilst tapping on mobile.
      if (_Configs.IS_MOBILE && this.playing) {
        e.preventDefault();
      }

      if (e.target != this.detailsButton) {
        if (!this.crashed && (Runner.keycodes.JUMP[e.keyCode] || e.type == Runner.events.TOUCHSTART)) {
          if (!this.playing) {
            this.loadSounds();
            this.playing = true;
            this.update();
            if (window.errorPageController) {
              errorPageController.trackEasterEgg();
            }
          }
          //  Play sound effect and jump on starting the game for the first time.
          if (!this.tRex.jumping && !this.tRex.ducking) {
            this.playSound(this.soundFx.BUTTON_PRESS);
            this.tRex.startJump(this.currentSpeed);
          }
        }

        if (this.crashed && e.type == Runner.events.TOUCHSTART && e.currentTarget == this.containerEl) {
          this.restart();
        }
      }

      if (this.playing && !this.crashed && Runner.keycodes.DUCK[e.keyCode]) {
        e.preventDefault();
        if (this.tRex.jumping) {
          // Speed drop, activated only when jump key is not pressed.
          this.tRex.setSpeedDrop();
        } else if (!this.tRex.jumping && !this.tRex.ducking) {
          // Duck.
          this.tRex.setDuck(true);
        }
      }
    }

    /**
     * Process key up.
     * @param {Event} e
     */

  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      var keyCode = String(e.keyCode);
      var isjumpKey = Runner.keycodes.JUMP[keyCode] || e.type == Runner.events.TOUCHEND || e.type == Runner.events.MOUSEDOWN;

      if (this.isRunning() && isjumpKey) {
        this.tRex.endJump();
      } else if (Runner.keycodes.DUCK[keyCode]) {
        this.tRex.speedDrop = false;
        this.tRex.setDuck(false);
      } else if (this.crashed) {
        // Check that enough time has elapsed before allowing jump key to restart.
        var deltaTime = (0, _service.getTimeStamp)() - this.time;

        if (Runner.keycodes.RESTART[keyCode] || this.isLeftClickOnCanvas(e) || deltaTime >= this.config.GAMEOVER_CLEAR_TIME && Runner.keycodes.JUMP[keyCode]) {
          this.restart();
        }
      } else if (this.paused && isjumpKey) {
        // Reset the jump state
        this.tRex.reset();
        this.play();
      }
    }

    /**
     * Returns whether the event was a left click on canvas.
     * On Windows right click is registered as a click.
     * @param {Event} e
     * @return {boolean}
     */

  }, {
    key: 'isLeftClickOnCanvas',
    value: function isLeftClickOnCanvas(e) {
      return e.button != null && e.button < 2 && e.type == Runner.events.MOUSEUP && e.target == this.canvas;
    }

    /**
     * RequestAnimationFrame wrapper.
     */

  }, {
    key: 'scheduleNextUpdate',
    value: function scheduleNextUpdate() {
      if (!this.updatePending) {
        this.updatePending = true;
        this.raqId = requestAnimationFrame(this.update.bind(this));
      }
    }

    /**
     * Whether the game is running.
     * @return {boolean}
     */

  }, {
    key: 'isRunning',
    value: function isRunning() {
      return !!this.raqId;
    }

    /**
     * Game over state.
     */

  }, {
    key: 'gameOver',
    value: function gameOver() {
      this.playSound(this.soundFx.HIT);
      (0, _service.vibrate)(200);

      this.stop();
      this.crashed = true;
      this.distanceMeter.acheivement = false;

      this.tRex.update(100, _trex2.default.status.CRASHED);

      // Game over panel.
      if (!this.gameOverPanel) {
        this.gameOverPanel = new _gameOverPanel2.default(this.canvas);
      } else {
        this.gameOverPanel.draw();
      }

      // Update the high score.
      if (this.distanceRan > this.highestScore) {
        this.highestScore = Math.ceil(this.distanceRan);
        this.distanceMeter.setHighScore(this.highestScore);
      }

      // Reset the time clock.
      this.time = (0, _service.getTimeStamp)();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.playing = false;
      this.paused = true;
      cancelAnimationFrame(this.raqId);
      this.raqId = 0;
    }
  }, {
    key: 'play',
    value: function play() {
      if (!this.crashed) {
        this.playing = true;
        this.paused = false;
        this.tRex.update(0, _trex2.default.status.RUNNING);
        this.time = (0, _service.getTimeStamp)();
        this.update();
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      if (!this.raqId) {
        this.playCount++;
        this.runningTime = 0;
        this.playing = true;
        this.crashed = false;
        this.distanceRan = 0;
        this.setSpeed(this.config.SPEED);
        this.time = (0, _service.getTimeStamp)();
        this.containerEl.classList.remove(Runner.classes.CRASHED);
        this.clearCanvas();
        this.distanceMeter.reset(this.highestScore);
        this.horizon.reset();
        this.tRex.reset();
        this.playSound(this.soundFx.BUTTON_PRESS);
        this.invert(true);
        this.update();
      }
    }

    /**
     * Pause the game if the tab is not in focus.
     */

  }, {
    key: 'onVisibilityChange',
    value: function onVisibilityChange(e) {
      if (document.hidden || document.webkitHidden || e.type == 'blur' || document.visibilityState != 'visible') {
        this.stop();
      } else if (!this.crashed) {
        this.tRex.reset();
        this.play();
      }
    }

    /**
     * Play a sound.
     * @param {SoundBuffer} soundBuffer
     */

  }, {
    key: 'playSound',
    value: function playSound(soundBuffer) {
      if (soundBuffer) {
        var sourceNode = this.audioContext.createBufferSource();
        sourceNode.buffer = soundBuffer;
        sourceNode.connect(this.audioContext.destination);
        sourceNode.start(0);
      }
    }

    /**
     * Inverts the current page / canvas colors.
     * @param {boolean} Whether to reset colors.
     */

  }, {
    key: 'invert',
    value: function invert(reset) {
      if (reset) {
        document.body.classList.toggle(Runner.classes.INVERTED, false);
        this.invertTimer = 0;
        this.inverted = false;
      } else {
        this.inverted = document.body.classList.toggle(Runner.classes.INVERTED, this.invertTrigger);
      }
    }
  }]);

  return Runner;
}();

Runner = Object.assign(Runner, _Configs.runnerConfig);

Runner.updateCanvasScaling = function (canvas, opt_width, opt_height) {
  var context = canvas.getContext('2d');

  // Query the let pixel ratios
  var devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;
  var backingStoreRatio = Math.floor(context.webkitBackingStorePixelRatio) || 1;
  var ratio = devicePixelRatio / backingStoreRatio;

  // Upscale the canvas if the two ratios don't match
  if (devicePixelRatio !== backingStoreRatio) {
    var oldWidth = opt_width || canvas.width;
    var oldHeight = opt_height || canvas.height;

    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;

    canvas.style.width = oldWidth + 'px';
    canvas.style.height = oldHeight + 'px';

    // Scale the context to counter the fact that we've manually scaled
    // our canvas element.
    context.scale(ratio, ratio);
    return true;
  } else if (devicePixelRatio == 1) {
    // Reset the canvas width / height. Fixes scaling bug when the page is
    // zoomed and the devicePixelRatio changes accordingly.
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
  }
  return false;
};

exports.default = Runner;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spriteIds = exports.animFrames = exports.BLINK_TIMING = exports.status = exports.collisionBoxes = exports.sourceDimensions = exports.config = undefined;

var _collision = __webpack_require__(2);

var config = exports.config = {
    BOTTOM_PAD: 10,
    DROP_VELOCITY: -11,
    GRAVITY: 1.0,
    HEIGHT: 132,
    HEIGHT_DUCK: 90,
    INIITAL_JUMP_VELOCITY: -16,
    INTRO_DURATION: 1200,
    MAX_JUMP_HEIGHT: 120,
    MIN_JUMP_HEIGHT: 80,
    SPEED_DROP_COEFFICIENT: 3,
    START_X_POS: 50,
    WIDTH: 70,
    WIDTH_DUCK: 70
};

var sourceDimensions = exports.sourceDimensions = {
    WIDTH: 187,
    HEIGHT: 354,
    WIDTH_DUCK: 181,
    HEIGHT_DUCK: 254
};

var collisionBoxes = exports.collisionBoxes = {
    DUCKING: [new _collision.CollisionBox(23, 42, 24, 4), new _collision.CollisionBox(6, 46, 63, 19), new _collision.CollisionBox(3, 65, 62, 67)],
    RUNNING: [new _collision.CollisionBox(19, 0, 26, 11), new _collision.CollisionBox(5, 11, 54, 13), new _collision.CollisionBox(1, 24, 64, 17), new _collision.CollisionBox(0, 41, 55, 42), new _collision.CollisionBox(55, 41, 15, 8), new _collision.CollisionBox(3, 83, 19, 40), new _collision.CollisionBox(42, 83, 17, 49)]
};

var status = exports.status = {
    CRASHED: 'CRASHED',
    DUCKING: 'DUCKING',
    JUMPING: 'JUMPING',
    RUNNING: 'RUNNING',
    WAITING: 'WAITING'
};

var BLINK_TIMING = exports.BLINK_TIMING = 7000;

var animFrames = exports.animFrames = {
    WAITING: {
        frames: [188, 0],
        msPerFrame: 1500 / 3
    },
    RUNNING: {
        frames: [376, 564],
        msPerFrame: 1500 / 12
    },
    CRASHED: {
        frames: [940],
        msPerFrame: 1500 / 60
    },
    JUMPING: {
        frames: [0],
        msPerFrame: 1500 / 60
    },
    DUCKING: {
        frames: [1125, 1306],
        msPerFrame: 1500 / 8
    }
};

var spriteIds = exports.spriteIds = {
    LDPI: {
        TREX: 'trex-1x'
    },
    HDPI: {
        TREX: 'trex-2x'
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollisionBox = undefined;
exports.checkForCollision = checkForCollision;
exports.createAdjustedCollisionBox = createAdjustedCollisionBox;
exports.drawCollisionBoxes = drawCollisionBoxes;
exports.boxCompare = boxCompare;

var _Configs = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollisionBox = exports.CollisionBox = function CollisionBox(x, y, w, h) {
  _classCallCheck(this, CollisionBox);

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
};

;

/**
 * Check for a collision.
 * @param {!Obstacle} obstacle
 * @param {!Trex} tRex T-rex object.
 * @param {HTMLCanvasContext} opt_canvasCtx Optional canvas context for drawing
 *    collision boxes.
 * @return {Array<CollisionBox>}
 */
function checkForCollision(obstacle, tRex, opt_canvasCtx) {
  var obstacleBoxXPos = _Configs.DIMENSIONS.WIDTH + obstacle.xPos;

  // Adjustments are made to the bounding box as there is a 1 pixel white
  // border around the t-rex and obstacles.
  var tRexBox = new CollisionBox(tRex.xPos + 1, tRex.yPos + 1, tRex.config.WIDTH - 2, tRex.config.HEIGHT - 2);

  var obstacleBox = new CollisionBox(obstacle.xPos + 1, obstacle.yPos + 1, obstacle.typeConfig.width * obstacle.size - 2, obstacle.typeConfig.height - 2);

  // Debug outer box
  if (opt_canvasCtx) {
    drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox);
  }

  // Simple outer bounds check.
  if (boxCompare(tRexBox, obstacleBox)) {
    var collisionBoxes = obstacle.collisionBoxes;
    var tRexCollisionBoxes = tRex.ducking ? _Configs.trexConfig.collisionBoxes.DUCKING : _Configs.trexConfig.collisionBoxes.RUNNING;

    // Detailed axis aligned box check.
    for (var t = 0; t < tRexCollisionBoxes.length; t++) {
      for (var i = 0; i < collisionBoxes.length; i++) {
        // Adjust the box to actual positions.
        var adjTrexBox = createAdjustedCollisionBox(tRexCollisionBoxes[t], tRexBox);
        var adjObstacleBox = createAdjustedCollisionBox(collisionBoxes[i], obstacleBox);
        var crashed = boxCompare(adjTrexBox, adjObstacleBox);

        // Draw boxes for debug.
        if (opt_canvasCtx) {
          drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox);
        }

        if (crashed) {
          return [adjTrexBox, adjObstacleBox];
        }
      }
    }
  }
  return false;
};

/**
 * Adjust the collision box.
 * @param {!CollisionBox} box The original box.
 * @param {!CollisionBox} adjustment Adjustment box.
 * @return {CollisionBox} The adjusted collision box object.
 */
function createAdjustedCollisionBox(box, adjustment) {
  return new CollisionBox(box.x + adjustment.x, box.y + adjustment.y, box.width, box.height);
};

/**
 * Draw the collision boxes for debug.
 */
function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
  canvasCtx.save();
  canvasCtx.strokeStyle = '#f00';
  canvasCtx.strokeRect(tRexBox.x, tRexBox.y, tRexBox.width, tRexBox.height);

  canvasCtx.strokeStyle = '#0f0';
  canvasCtx.strokeRect(obstacleBox.x, obstacleBox.y, obstacleBox.width, obstacleBox.height);
  canvasCtx.restore();
};

/**
 * Compare two collision boxes for a collision.
 * @param {CollisionBox} tRexBox
 * @param {CollisionBox} obstacleBox
 * @return {boolean} Whether the boxes intersected.
 */
function boxCompare(tRexBox, obstacleBox) {
  var crashed = false;
  var tRexBoxX = tRexBox.x;
  var tRexBoxY = tRexBox.y;

  var obstacleBoxX = obstacleBox.x;
  var obstacleBoxY = obstacleBox.y;

  // Axis-Aligned Bounding Box method.
  if (tRexBox.x < obstacleBoxX + obstacleBox.width && tRexBox.x + tRexBox.width > obstacleBoxX && tRexBox.y < obstacleBox.y + obstacleBox.height && tRexBox.height + tRexBox.y > obstacleBox.y) {
    crashed = true;
  }

  return crashed;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  HEIGHT: 21,
  MAX_CLOUD_GAP: 800,
  MAX_SKY_LEVEL: 54,
  MIN_CLOUD_GAP: 150,
  MIN_SKY_LEVEL: 150,
  WIDTH: 69
};

var sourceDimensions = exports.sourceDimensions = {
  HEIGHT: 14,
  WIDTH: 46
};

var spriteIds = exports.spriteIds = {
  LDPI: {
    CLOUD: 'cloud-1x'
  },
  HDPI: {
    CLOUD: 'cloud-2x'
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keycodes = exports.sounds = exports.spriteIds = exports.events = exports.classes = exports.config = undefined;

var _consts = __webpack_require__(3);

var config = exports.config = {
  ACCELERATION: 0.001,
  CLEAR_TIME: 3000,
  GAMEOVER_CLEAR_TIME: 750,
  INVERT_FADE_DURATION: 10000,
  INVERT_DISTANCE: 500,
  MAX_BLINK_COUNT: 3,
  MAX_SPEED: 20,
  MOBILE_SPEED_COEFFICIENT: 2.5,
  RESOURCE_TEMPLATE_ID: 'audio-resources',
  SPEED: 6
};

var classes = exports.classes = {
  CANVAS: 'runner-canvas',
  CONTAINER: 'runner-container',
  CRASHED: 'crashed',
  ICON: 'icon-offline',
  INVERTED: 'inverted',
  SNACKBAR: 'snackbar',
  SNACKBAR_SHOW: 'snackbar-show',
  TOUCH_CONTROLLER: 'controller'
};

var events = exports.events = {
  ANIM_END: 'webkitAnimationEnd',
  CLICK: 'click',
  KEYDOWN: 'keydown',
  KEYUP: 'keyup',
  MOUSEDOWN: 'mousedown',
  MOUSEUP: 'mouseup',
  RESIZE: 'resize',
  TOUCHEND: 'touchend',
  TOUCHSTART: 'touchstart',
  VISIBILITY: 'visibilitychange',
  BLUR: 'blur',
  FOCUS: 'focus',
  LOAD: 'load'
};

var spriteIds = exports.spriteIds = {
  LDPI: {
    HORIZON: 'horizonLine-1x',
    CLOUD: 'cloud-1x',
    MOON: 'moon-1x',
    STAR: 'star-1x',
    CACTUS_SMALL: 'cactusSmall-1x',
    CACTUS_LARGE: 'cactusLarge-1x',
    PTERODACTYL: 'pterodactyl-1x',
    TREX: 'trex-1x',
    TEXT_SPRITE: 'text-1x',
    GAME_OVER: 'gameOver-1x',
    RESTART: 'restart-1x'
  },
  HDPI: {
    HORIZON: 'horizonLine-2x',
    CLOUD: 'cloud-2x',
    MOON: 'moon-2x',
    STAR: 'star-2x',
    CACTUS_SMALL: 'cactusSmall-2x',
    CACTUS_LARGE: 'cactusLarge-2x',
    PTERODACTYL: 'pterodactyl-2x',
    TREX: 'trex-2x',
    TEXT_SPRITE: 'text-2x',
    GAME_OVER: 'gameOver-2x',
    RESTART: 'restart-2x'
  }
};

var sounds = exports.sounds = {
  BUTTON_PRESS: 'offline-sound-press',
  HIT: 'offline-sound-hit',
  SCORE: 'offline-sound-reached'
};

var keycodes = exports.keycodes = {
  JUMP: { '38': 1, '32': 1 }, // Up, spacebar
  DUCK: { '40': 1 }, // Down
  RESTART: { '13': 1 // Enter
  } };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  BG_CLOUD_SPEED: 0.2,
  CLOUD_FREQUENCY: .5,
  MAX_OBSTACLE_DUPLICATION: 2,
  MAX_CLOUDS: 3
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spriteIds = exports.types = exports.MAX_OBSTACLE_LENGTH = exports.GAP_COEFFICIENT = exports.MAX_GAP_COEFFICIENT = undefined;

var _collision = __webpack_require__(2);

var MAX_GAP_COEFFICIENT = exports.MAX_GAP_COEFFICIENT = 1.0;

var GAP_COEFFICIENT = exports.GAP_COEFFICIENT = 0.5;

var MAX_OBSTACLE_LENGTH = exports.MAX_OBSTACLE_LENGTH = 3;

var types = exports.types = [{
  type: 'CACTUS_SMALL',
  width: 42,
  height: 80,
  sourceDimensions: {
    width: 34,
    height: 70
  },
  yPos: 178,
  multipleSpeed: 4,
  minGap: 240,
  minSpeed: 0,
  collisionBoxes: {
    '1': [new _collision.CollisionBox(0, 0, 42, 80)],
    '2': [new _collision.CollisionBox(4, 1, 41, 75), new _collision.CollisionBox(45, 13, 35, 63)],
    '3': [new _collision.CollisionBox(0, 4, 43, 72), new _collision.CollisionBox(43, 26, 77, 50)]
  }
}, {
  type: 'CACTUS_LARGE',
  width: 44,
  height: 92,
  sourceDimensions: {
    width: 50,
    height: 100
  },
  yPos: 168,
  multipleSpeed: 7,
  minGap: 240,
  minSpeed: 0,
  collisionBoxes: {
    '1': [new _collision.CollisionBox(0, 0, 44, 92)],
    '2': [new _collision.CollisionBox(0, 0, 88, 92)],
    '3': [new _collision.CollisionBox(5, 5, 120, 78)]
  }
}, {
  type: 'PTERODACTYL',
  width: 84,
  height: 72,
  sourceDimensions: {
    width: 46,
    height: 40
  },
  yPos: [200, 100, 75], // Variable height.
  yPosMobile: [180, 80], // Variable height mobile.
  multipleSpeed: 999,
  minSpeed: 8.5,
  minGap: 300,
  collisionBoxes: {
    '1': [new _collision.CollisionBox(0, 25, 84, 11)]
  },

  numFrames: 2,
  frameRate: 2000 / 6,
  speedOffset: .8
}];

var spriteIds = exports.spriteIds = {
  LDPI: {
    CACTUS_SMALL: 'cactusSmall-1x',
    CACTUS_LARGE: 'cactusLarge-1x',
    PTERODACTYL: 'pterodactyl-1x'

  },
  HDPI: {
    CACTUS_SMALL: 'cactusSmall-2x',
    CACTUS_LARGE: 'cactusLarge-2x',
    PTERODACTYL: 'pterodactyl-2x'
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  FADE_SPEED: 0.035,
  HEIGHT: 60,
  MOON_SPEED: 0.3,
  NUM_STARS: 2,
  STAR_SIZE: 9,
  STAR_SPEED: 0.3,
  STAR_MAX_Y: 100,
  WIDTH: 30
};

var sourceDimensions = exports.sourceDimensions = {
  moon: {
    WIDTH: 40,
    HEIGHT: 80
  },
  STAR_SIZE: 9
};

var spriteIds = exports.spriteIds = {
  LDPI: {
    MOON: 'moon-1x',
    STAR: 'star-1x'
  },
  HDPI: {
    MOON: 'moon-2x',
    STAR: 'star-2x'
  }
};

var phases = exports.phases = [280, 240, 200, 120, 80, 40, 0];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dimensions = exports.dimensions = {
  WIDTH: 900,
  HEIGHT: 23,
  YPOS: 234
};

var sourceDimensions = exports.sourceDimensions = {
  WIDTH: 600,
  HEIGHT: 12
};

var spriteIds = exports.spriteIds = {
  LDPI: {
    HORIZON: 'horizonLine-1x'
  },
  HDPI: {
    HORIZON: 'horizonLine-2x'
  }
};

var BUMP_THRESHOLD = exports.BUMP_THRESHOLD = .5;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dimensions = exports.dimensions = {
  WIDTH: 10,
  HEIGHT: 13,
  DEST_WIDTH: 11
};

/**
 * Y positioning of the digits in the sprite sheet.
 * X position is always 0.
 * @type {Array<number>}
 */
var yPos = exports.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120];

/**
 * Distance meter config.
 * @enum {number}
 */
var config = exports.config = {
  // Number of digits.
  MAX_DISTANCE_UNITS: 5,

  // Distance that causes achievement animation.
  ACHIEVEMENT_DISTANCE: 100,

  // Used for conversion from pixel distance to a scaled unit.
  COEFFICIENT: 0.025,

  // Flash duration in milliseconds.
  FLASH_DURATION: 1000 / 4,

  // Flash iterations for achievement animation.
  FLASH_ITERATIONS: 3
};

var spriteIds = exports.spriteIds = {
  LDPI: {
    TEXT_SPRITE: 'text-1x'
  },
  HDPI: {
    TEXT_SPRITE: 'text-2x'
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dimensions = exports.dimensions = {
  TEXT_X: 0,
  TEXT_Y: 0,
  TEXT_WIDTH: 191,
  TEXT_HEIGHT: 11,
  RESTART_WIDTH: 36,
  RESTART_HEIGHT: 32
};

var spriteIds = exports.spriteIds = {
  LDPI: {
    GAME_OVER: 'gameOver-1x',
    RESTART: 'restart-1x'
  },
  HDPI: {
    GAME_OVER: 'gameOver-2x',
    RESTART: 'restart-2x'
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horizon = __webpack_require__(20);

var _horizon2 = _interopRequireDefault(_horizon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _horizon2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

var _horizonLine = __webpack_require__(21);

var _horizonLine2 = _interopRequireDefault(_horizonLine);

var _nightMode = __webpack_require__(22);

var _nightMode2 = _interopRequireDefault(_nightMode);

var _cloud = __webpack_require__(4);

var _cloud2 = _interopRequireDefault(_cloud);

var _obstacle = __webpack_require__(5);

var _obstacle2 = _interopRequireDefault(_obstacle);

var _service = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Horizon = function () {
  function Horizon(canvas) {
    _classCallCheck(this, Horizon);

    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.config = Horizon.config;
    this.obstacles = [];
    this.obstacleHistory = [];
    this.dimensions = _Configs.DIMENSIONS;
    this.cloudFrequency = this.config.CLOUD_FREQUENCY;
    this.nightMode = null;

    // Cloud
    this.clouds = [];
    this.cloudSpeed = this.config.BG_CLOUD_SPEED;

    // Horizon
    this.horizonLine = null;
    this.init();
  }

  _createClass(Horizon, [{
    key: 'init',
    value: function init() {
      this.addCloud();
      this.horizonLine = new _horizonLine2.default(this.canvas);
      this.nightMode = new _nightMode2.default(this.canvas);
    }

    /**
     * @param {number} deltaTime
     * @param {number} currentSpeed
     * @param {boolean} updateObstacles Used as an override to prevent
     *     the obstacles from being updated / added. This happens in the
     *     ease in section.
     * @param {boolean} showNightMode Night mode activated.
     */

  }, {
    key: 'update',
    value: function update(deltaTime, currentSpeed, updateObstacles, showNightMode) {
      this.runningTime += deltaTime;
      this.horizonLine.update(deltaTime, currentSpeed);
      this.nightMode.update(showNightMode);
      this.updateClouds(deltaTime, currentSpeed);

      if (updateObstacles) {
        this.updateObstacles(deltaTime, currentSpeed);
      }
    }

    /**
     * Update the cloud positions.
     * @param {number} deltaTime
     * @param {number} currentSpeed
     */

  }, {
    key: 'updateClouds',
    value: function updateClouds(deltaTime, speed) {
      var cloudSpeed = this.cloudSpeed / 1000 * deltaTime * speed;
      var numClouds = this.clouds.length;

      if (numClouds) {
        for (var i = numClouds - 1; i >= 0; i--) {
          this.clouds[i].update(cloudSpeed);
        }

        var lastCloud = this.clouds[numClouds - 1];

        // Check for adding a new cloud.
        if (numClouds < this.config.MAX_CLOUDS && this.dimensions.WIDTH - lastCloud.xPos > lastCloud.cloudGap && this.cloudFrequency > Math.random()) {
          this.addCloud();
        }

        // Remove expired clouds.
        this.clouds = this.clouds.filter(function (obj) {
          return !obj.remove;
        });
      } else {
        this.addCloud();
      }
    }

    /**
     * Update the obstacle positions.
     * @param {number} deltaTime
     * @param {number} currentSpeed
     */

  }, {
    key: 'updateObstacles',
    value: function updateObstacles(deltaTime, currentSpeed) {
      // Obstacles, move to Horizon layer.
      var updatedObstacles = this.obstacles.slice(0);

      for (var i = 0; i < this.obstacles.length; i++) {
        var obstacle = this.obstacles[i];
        obstacle.update(deltaTime, currentSpeed);

        // Clean up existing obstacles.
        if (obstacle.remove) {
          updatedObstacles.shift();
        }
      }
      this.obstacles = updatedObstacles;

      if (this.obstacles.length > 0) {
        var lastObstacle = this.obstacles[this.obstacles.length - 1];

        if (lastObstacle && !lastObstacle.followingObstacleCreated && lastObstacle.isVisible() && lastObstacle.xPos + lastObstacle.width + lastObstacle.gap < this.dimensions.WIDTH) {
          this.addNewObstacle(currentSpeed);
          lastObstacle.followingObstacleCreated = true;
        }
      } else {
        // Create new obstacles.
        this.addNewObstacle(currentSpeed);
      }
    }
  }, {
    key: 'removeFirstObstacle',
    value: function removeFirstObstacle() {
      this.obstacles.shift();
    }

    /**
     * Add a new obstacle.
     * @param {number} currentSpeed
     */

  }, {
    key: 'addNewObstacle',
    value: function addNewObstacle(currentSpeed) {
      var obstacleTypeIndex = (0, _service.getRandomNum)(0, _obstacle2.default.types.length - 1);
      var obstacleType = _obstacle2.default.types[obstacleTypeIndex];

      // Check for multiples of the same type of obstacle.
      // Also check obstacle is available at current speed.
      if (this.duplicateObstacleCheck(obstacleType.type) || currentSpeed < obstacleType.minSpeed) {
        this.addNewObstacle(currentSpeed);
      } else {
        this.obstacles.push(new _obstacle2.default(this.canvasCtx, obstacleType, currentSpeed));

        this.obstacleHistory.unshift(obstacleType.type);

        if (this.obstacleHistory.length > 1) {
          this.obstacleHistory.splice(Horizon.config.MAX_OBSTACLE_DUPLICATION);
        }
      }
    }

    /**
     * Returns whether the previous two obstacles are the same as the next one.
     * Maximum duplication is set in config value MAX_OBSTACLE_DUPLICATION.
     * @return {boolean}
     */

  }, {
    key: 'duplicateObstacleCheck',
    value: function duplicateObstacleCheck(nextObstacleType) {
      var duplicateCount = 0;

      for (var i = 0; i < this.obstacleHistory.length; i++) {
        duplicateCount = this.obstacleHistory[i] == nextObstacleType ? duplicateCount + 1 : 0;
      }
      return duplicateCount >= Horizon.config.MAX_OBSTACLE_DUPLICATION;
    }

    /**
     * Reset the horizon layer.
     * Remove existing obstacles and reposition the horizon line.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.obstacles = [];
      this.horizonLine.reset();
      this.nightMode.reset();
    }

    /**
     * Update the canvas width and scaling.
     * @param {number} width Canvas width.
     * @param {number} height Canvas height.
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }

    /**
     * Add a new cloud to the horizon.
     */

  }, {
    key: 'addCloud',
    value: function addCloud() {
      this.clouds.push(new _cloud2.default(this.canvas));
    }
  }]);

  return Horizon;
}();

;

Horizon = Object.assign(Horizon, _Configs.horizonConfig);

exports.default = Horizon;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HorizonLine = function () {
  function HorizonLine(canvas) {
    _classCallCheck(this, HorizonLine);

    this.spritePos = { x: 0, y: 0 };
    this.sourceDimensions = HorizonLine.sourceDimensions;
    this.sprite = null;
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.dimensions = HorizonLine.dimensions;
    this.sourceXPos = [this.spritePos.x, this.spritePos.x + this.sourceDimensions.WIDTH];
    this.xPos = [];
    this.yPos = 0;
    this.bumpThreshold = HorizonLine.BUMP_THRESHOLD;

    this.setSourceDimensions();
    this.setSprite();
    this.draw();
  }

  /**
   * Set the source dimensions of the horizon line.
   */


  _createClass(HorizonLine, [{
    key: 'setSourceDimensions',
    value: function setSourceDimensions() {

      for (var dimension in HorizonLine.sourceDimensions) {
        if (_Configs.IS_HIDPI) {
          if (dimension != 'YPOS') {
            this.sourceDimensions[dimension] = HorizonLine.sourceDimensions[dimension] * 2;
          }
        } else {
          this.sourceDimensions[dimension] = HorizonLine.sourceDimensions[dimension];
        }

        this.dimensions[dimension] = HorizonLine.dimensions[dimension];
      }

      this.xPos = [0, HorizonLine.dimensions.WIDTH];
      this.yPos = HorizonLine.dimensions.YPOS;
    }
  }, {
    key: 'setSprite',
    value: function setSprite() {
      if (_Configs.IS_HIDPI) {
        this.sprite = document.getElementById(HorizonLine.spriteIds.HDPI.HORIZON);
      } else {
        this.sprite = document.getElementById(HorizonLine.spriteIds.LDPI.HORIZON);
      }
    }

    /**
     * Return the crop x position of a type.
     */

  }, {
    key: 'getRandomType',
    value: function getRandomType() {
      return Math.random() > this.bumpThreshold ? this.sourceDimensions.WIDTH : 0;
    }

    /**
     * Draw the horizon line.
     */

  }, {
    key: 'draw',
    value: function draw() {
      this.canvasCtx.drawImage(this.sprite, this.sourceXPos[0], this.spritePos.y, this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT, this.xPos[0], this.yPos, this.dimensions.WIDTH, this.dimensions.HEIGHT);

      this.canvasCtx.drawImage(this.sprite, this.sourceXPos[1], this.spritePos.y, this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT, this.xPos[1], this.yPos, this.dimensions.WIDTH, this.dimensions.HEIGHT);
    }

    /**
     * Update the x position of an indivdual piece of the line.
     * @param {number} pos Line position.
     * @param {number} increment
     */

  }, {
    key: 'updateXPos',
    value: function updateXPos(pos, increment) {
      var line1 = pos;
      var line2 = pos == 0 ? 1 : 0;
      this.xPos[line1] -= increment;
      this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;

      if (this.xPos[line1] <= -this.dimensions.WIDTH) {
        this.xPos[line1] += this.dimensions.WIDTH * 2;
        this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;
        this.sourceXPos[line1] = this.getRandomType() + this.spritePos.x;
      }
    }

    /**
     * Update the horizon line.
     * @param {number} deltaTime
     * @param {number} speed
     */

  }, {
    key: 'update',
    value: function update(deltaTime, speed) {
      var increment = Math.floor(speed * (_Configs.FPS / 1000) * deltaTime);

      if (this.xPos[0] <= 0) {
        this.updateXPos(0, increment);
      } else {
        this.updateXPos(1, increment);
      }
      this.draw();
    }

    /**
     * Reset horizon to the starting position.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.xPos[0] = 0;
      this.xPos[1] = HorizonLine.dimensions.WIDTH;
    }
  }]);

  return HorizonLine;
}();

;

HorizonLine = Object.assign(HorizonLine, _Configs.horizonLineConfig);

exports.default = HorizonLine;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nightMode = __webpack_require__(23);

var _nightMode2 = _interopRequireDefault(_nightMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nightMode2.default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

var _service = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NightMode = function () {
  function NightMode(canvas) {
    _classCallCheck(this, NightMode);

    this.moonSpritePos = { x: 0, y: 0 };
    this.starSpritePos = { x: 0, y: 0 };
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.xPos = _Configs.DIMENSIONS.WIDTH - 50;
    this.yPos = 30;
    this.currentPhase = 0;
    this.opacity = 0;
    this.containerWidth = _Configs.DIMENSIONS.WIDTH;
    this.stars = [];
    this.drawStars = false;

    this.setSprite();
    this.placeStars();
  }

  _createClass(NightMode, [{
    key: 'setSprite',
    value: function setSprite() {
      if (_Configs.IS_HIDPI) {
        this.moonSprite = document.getElementById(NightMode.spriteIds.HDPI.MOON);
        this.starSprite = document.getElementById(NightMode.spriteIds.HDPI.STAR);
      } else {
        this.moonSprite = document.getElementById(NightMode.spriteIds.LDPI.MOON);
        this.starSprite = document.getElementById(NightMode.spriteIds.LDPI.STAR);
      }
    }
  }, {
    key: 'update',
    value: function update(activated, delta) {
      // Moon phase.
      if (activated && this.opacity == 0) {
        this.currentPhase++;

        if (this.currentPhase >= NightMode.phases.length) {
          this.currentPhase = 0;
        }
      }

      // Fade in / out.
      if (activated && (this.opacity < 1 || this.opacity == 0)) {
        this.opacity += NightMode.config.FADE_SPEED;
      } else if (this.opacity > 0) {
        this.opacity -= NightMode.config.FADE_SPEED;
      }

      // Set moon positioning.
      if (this.opacity > 0) {
        this.xPos = this.updateXPos(this.xPos, NightMode.config.MOON_SPEED);

        // Update stars.
        if (this.drawStars) {
          for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
            this.stars[i].x = this.updateXPos(this.stars[i].x, NightMode.config.STAR_SPEED);
          }
        }
        this.draw();
      } else {
        this.opacity = 0;
        this.placeStars();
      }
      this.drawStars = true;
    }
  }, {
    key: 'updateXPos',
    value: function updateXPos(currentPos, speed) {
      if (currentPos < -NightMode.config.WIDTH) {
        currentPos = this.containerWidth;
      } else {
        currentPos -= speed;
      }
      return currentPos;
    }
  }, {
    key: 'draw',
    value: function draw() {
      var moonSourceWidth = this.currentPhase == 3 ? NightMode.sourceDimensions.moon.WIDTH * 2 : NightMode.sourceDimensions.moon.WIDTH;
      var moonSourceHeight = NightMode.sourceDimensions.moon.HEIGHT;
      var moonSourceX = this.moonSpritePos.x + NightMode.phases[this.currentPhase];
      var moonOutputWidth = this.currentPhase == 3 ? NightMode.config.WIDTH * 2 : NightMode.config.WIDTH;
      var sourceStarSize = NightMode.sourceDimensions.STAR_SIZE;
      var starSourceX = this.starSpritePos.x;

      if (_Configs.IS_HIDPI) {
        moonSourceWidth *= 2;
        moonSourceHeight *= 2;
        moonSourceX = this.moonSpritePos.x + NightMode.phases[this.currentPhase] * 2;
        sourceStarSize *= 2;
        starSourceX = this.starSpritePos.x;
      }

      this.canvasCtx.save();
      this.canvasCtx.globalAlpha = this.opacity;

      // Stars.
      if (this.drawStars) {
        for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
          this.canvasCtx.drawImage(this.starSprite, starSourceX, this.stars[i].sourceY, sourceStarSize, sourceStarSize, Math.round(this.stars[i].x), this.stars[i].y, NightMode.config.STAR_SIZE, NightMode.config.STAR_SIZE);
        }
      }

      // Moon.
      this.canvasCtx.drawImage(this.moonSprite, moonSourceX, this.moonSpritePos.y, moonSourceWidth, moonSourceHeight, Math.round(this.xPos), this.yPos, moonOutputWidth, NightMode.config.HEIGHT);

      this.canvasCtx.globalAlpha = 1;
      this.canvasCtx.restore();
    }

    // Do star placement.

  }, {
    key: 'placeStars',
    value: function placeStars() {
      var segmentSize = Math.round(this.containerWidth / NightMode.config.NUM_STARS);

      for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
        this.stars[i] = {};
        this.stars[i].x = (0, _service.getRandomNum)(segmentSize * i, segmentSize * (i + 1));
        this.stars[i].y = (0, _service.getRandomNum)(0, NightMode.config.STAR_MAX_Y);

        if (_Configs.IS_HIDPI) {
          this.stars[i].sourceY = this.starSpritePos.y + NightMode.config.STAR_SIZE * 2 * i;
        } else {
          this.stars[i].sourceY = this.starSpritePos.y + NightMode.config.STAR_SIZE * i;
        }
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.currentPhase = 0;
      this.opacity = 0;
      this.update(false);
    }
  }]);

  return NightMode;
}();

;

NightMode = Object.assign(NightMode, _Configs.nightModeConfig);

exports.default = NightMode;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

var _service = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cloud = function () {
  function Cloud(canvas) {
    _classCallCheck(this, Cloud);

    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.spritePos = { x: 0, y: 0 };
    this.containerWidth = _Configs.DIMENSIONS.WIDTH;
    this.xPos = _Configs.DIMENSIONS.WIDTH;
    this.yPos = 0;
    this.remove = false;

    this.sourceDimensions = Cloud.sourceDimensions;

    this.sprite = Cloud.CLOUD_SPRITE;

    this.init();
  }

  _createClass(Cloud, [{
    key: 'init',
    value: function init() {
      this.yPos = (0, _service.getRandomNum)(Cloud.config.MAX_SKY_LEVEL, Cloud.config.MIN_SKY_LEVEL);
      this.draw();
    }

    /**
     * Draw the cloud.
     */

  }, {
    key: 'draw',
    value: function draw() {
      this.canvasCtx.save();

      var sourceWidth = this.sourceDimensions.WIDTH;
      var sourceHeight = this.sourceDimensions.HEIGHT;

      if (_Configs.IS_HIDPI) {
        sourceWidth = sourceWidth * 2;
        sourceHeight = sourceHeight * 2;
      }

      this.canvasCtx.drawImage(this.sprite, this.spritePos.x, this.spritePos.y, sourceWidth, sourceHeight, this.xPos, this.yPos, Cloud.config.WIDTH, Cloud.config.HEIGHT);

      this.canvasCtx.restore();
    }

    /**
     * Update the cloud position.
     * @param {number} speed
     */

  }, {
    key: 'update',
    value: function update(speed) {
      if (!this.remove) {
        this.xPos -= Math.ceil(speed);
        this.draw();

        // Mark as removeable if no longer in the canvas.
        if (!this.isVisible()) {
          this.remove = true;
        }
      }
    }

    /**
     * Check if the cloud is visible on the stage.
     * @return {boolean}
     */

  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.xPos + Cloud.config.WIDTH > 0;
    }
  }]);

  return Cloud;
}();

;

Cloud = Object.assign(Cloud, _Configs.cloudConfig);

Cloud.initSprites = function () {
  if (_Configs.IS_HIDPI) {
    Cloud.CLOUD_SPRITE = document.getElementById(Cloud.spriteIds.HDPI.CLOUD);
  } else {
    Cloud.CLOUD_SPRITE = document.getElementById(Cloud.spriteIds.LDPI.CLOUD);
  }
};

exports.default = Cloud;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

var _collision = __webpack_require__(2);

var _service = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obstacle = function () {
  function Obstacle(canvasCtx, type, speed) {
    _classCallCheck(this, Obstacle);

    this.canvasCtx = canvasCtx;
    this.spritePos = { x: 0, y: 0 };
    this.typeConfig = type;
    this.gapCoefficient = Obstacle.GAP_COEFFICIENT;
    this.size = (0, _service.getRandomNum)(1, Obstacle.MAX_OBSTACLE_LENGTH);
    this.dimensions = _Configs.DIMENSIONS;
    this.remove = false;
    this.xPos = _Configs.DIMENSIONS.WIDTH + (type.width || 0);
    this.yPos = 0;
    this.width = 0;
    this.collisionBoxes = [];
    this.gap = 0;
    this.speedOffset = 0;

    // For animated obstacles.
    this.currentFrame = 0;
    this.timer = 0;

    this.setSprite(type);
    this.init(speed);
  }

  _createClass(Obstacle, [{
    key: 'setSprite',
    value: function setSprite(_ref) {
      var type = _ref.type;

      this.sprite = Obstacle[type + '_SPRITE'];
    }
  }, {
    key: 'init',
    value: function init(speed) {
      // Only allow sizing if we're at the right speed.
      if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {
        this.size = 1;
      }

      this.collisionBoxes = this.typeConfig.collisionBoxes[this.size];

      this.width = this.typeConfig.width * this.size;

      // Check if obstacle can be positioned at various heights.
      if (Array.isArray(this.typeConfig.yPos)) {
        var yPosConfig = _Configs.IS_MOBILE ? this.typeConfig.yPosMobile : this.typeConfig.yPos;
        this.yPos = yPosConfig[(0, _service.getRandomNum)(0, yPosConfig.length - 1)];
      } else {
        this.yPos = this.typeConfig.yPos;
      }

      this.draw();

      // For obstacles that go at a different speed from the horizon.
      if (this.typeConfig.speedOffset) {
        this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset : -this.typeConfig.speedOffset;
      }

      this.gap = this.getGap(this.gapCoefficient, speed);
    }

    /**
     * Draw and crop based on size.
     */

  }, {
    key: 'draw',
    value: function draw() {
      var sourceWidth = this.typeConfig.sourceDimensions.width;
      var sourceHeight = this.typeConfig.sourceDimensions.height;

      if (_Configs.IS_HIDPI) {
        sourceWidth = sourceWidth * 2;
        sourceHeight = sourceHeight * 2;
      }

      // X position in sprite.
      var sourceX = sourceWidth * this.size * (0.5 * (this.size - 1)) + this.spritePos.x;

      // Animation frames.
      if (this.currentFrame > 0) {
        sourceX += sourceWidth * this.currentFrame;
      }

      this.canvasCtx.drawImage(this.sprite, sourceX, this.spritePos.y, sourceWidth * this.size, sourceHeight, this.xPos, this.yPos, this.typeConfig.width * this.size, this.typeConfig.height);
    }

    /**
     * Obstacle frame update.
     * @param {number} deltaTime
     * @param {number} speed
     */

  }, {
    key: 'update',
    value: function update(deltaTime, speed) {
      if (!this.remove) {
        if (this.typeConfig.speedOffset) {
          speed += this.speedOffset;
        }
        this.xPos -= Math.floor(speed * _Configs.FPS / 1000 * deltaTime);

        // Update frame
        if (this.typeConfig.numFrames) {
          this.timer += deltaTime;
          if (this.timer >= this.typeConfig.frameRate) {
            this.currentFrame = this.currentFrame == this.typeConfig.numFrames - 1 ? 0 : this.currentFrame + 1;
            this.timer = 0;
          }
        }
        this.draw();

        if (!this.isVisible()) {
          this.remove = true;
        }
      }
    }

    /**
     * Calculate a random gap size.
     * - Minimum gap gets wider as speed increses
     * @param {number} gapCoefficient
     * @param {number} speed
     * @return {number} The gap size.
     */

  }, {
    key: 'getGap',
    value: function getGap(gapCoefficient, speed) {
      var minGap = Math.round(this.width * speed + this.typeConfig.minGap * gapCoefficient);
      var maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);
      return (0, _service.getRandomNum)(minGap, maxGap);
    }

    /**
     * Check if obstacle is visible.
     * @return {boolean} Whether the obstacle is in the game area.
     */

  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.xPos + this.width > 0;
    }
  }]);

  return Obstacle;
}();

;

Obstacle = Object.assign(Obstacle, _Configs.obstacleConfig);

Obstacle.initSprites = function () {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Obstacle.types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;
      var type = _ref3.type;

      if (_Configs.IS_HIDPI) {
        Obstacle[type + '_SPRITE'] = document.getElementById(Obstacle.spriteIds.HDPI[type]);
      } else {
        Obstacle[type + '_SPRITE'] = document.getElementById(Obstacle.spriteIds.LDPI[type]);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

exports.default = Obstacle;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trex = __webpack_require__(27);

var _trex2 = _interopRequireDefault(_trex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _trex2.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

var _service = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Trex = function () {
  function Trex(canvas) {
    _classCallCheck(this, Trex);

    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.spritePos = { x: 0, y: 0 };
    this.xPos = 0;
    this.yPos = 0;
    // Position when on the ground.
    this.groundYPos = 0;
    this.currentFrame = 0;
    this.currentAnimFrames = [];
    this.blinkDelay = 0;
    this.blinkCount = 0;
    this.animStartTime = 0;
    this.timer = 0;
    this.msPerFrame = 2000 / _Configs.FPS;
    this.config = Trex.config;
    this.sourceDimensions = Trex.sourceDimensions;
    // Current status.
    this.status = Trex.status.WAITING;

    this.jumping = false;
    this.ducking = false;
    this.jumpVelocity = 0;
    this.reachedMinHeight = false;
    this.speedDrop = false;
    this.jumpCount = 0;
    this.jumpspotX = 0;

    this.setSprite();
    this.init();
  }

  _createClass(Trex, [{
    key: 'setSprite',
    value: function setSprite() {
      if (_Configs.IS_HIDPI) {
        this.sprite = document.getElementById(Trex.spriteIds.HDPI.TREX);
      } else {
        this.sprite = document.getElementById(Trex.spriteIds.LDPI.TREX);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this.groundYPos = _Configs.DIMENSIONS.HEIGHT - this.config.HEIGHT - this.config.BOTTOM_PAD;
      this.yPos = this.groundYPos;
      this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;

      this.draw(0, 0);
      this.update(0, Trex.status.WAITING);
    }

    /**
     * Setter for the jump velocity.
     * The approriate drop velocity is also set.
     */

  }, {
    key: 'setJumpVelocity',
    value: function setJumpVelocity(setting) {
      this.config.INIITAL_JUMP_VELOCITY = -setting;
      this.config.DROP_VELOCITY = -setting / 2;
    }

    /**
     * Set the animation status.
     * @param {!number} deltaTime
     * @param {Trex.status} status Optional status to switch to.
     */

  }, {
    key: 'update',
    value: function update(deltaTime, opt_status) {
      this.timer += deltaTime;

      // Update the status.
      if (opt_status) {
        this.status = opt_status;
        this.currentFrame = 0;
        this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;
        this.currentAnimFrames = Trex.animFrames[opt_status].frames;

        if (opt_status == Trex.status.WAITING) {
          this.animStartTime = (0, _service.getTimeStamp)();
          this.setBlinkDelay();
        }
      }

      // Game intro animation, T-rex moves in from the left.
      if (this.playingIntro && this.xPos < this.config.START_X_POS) {
        this.xPos += Math.round(this.config.START_X_POS / this.config.INTRO_DURATION * deltaTime);
      }

      if (this.status == Trex.status.WAITING) {
        this.blink((0, _service.getTimeStamp)());
      } else {
        this.draw(this.currentAnimFrames[this.currentFrame], 0);
      }

      // Update the frame position.
      if (this.timer >= this.msPerFrame) {
        this.currentFrame = this.currentFrame == this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1;
        this.timer = 0;
      }

      // Speed drop becomes duck if the down key is still being pressed.
      if (this.speedDrop && this.yPos == this.groundYPos) {
        this.speedDrop = false;
        this.setDuck(true);
      }
    }

    /**
     * Draw the t-rex to a particular position.
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'draw',
    value: function draw(x, y) {
      var sourceX = x;
      var sourceY = y;

      var sourceWidth = this.ducking && this.status != Trex.status.CRASHED ? this.sourceDimensions.WIDTH_DUCK : this.sourceDimensions.WIDTH;
      var sourceHeight = this.sourceDimensions.HEIGHT;

      if (_Configs.IS_HIDPI) {
        sourceX *= 2;
        sourceY *= 2;
        sourceWidth *= 2;
        sourceHeight *= 2;
      }

      // Adjustments for sprite sheet position.
      sourceX += this.spritePos.x;
      sourceY += this.spritePos.y;

      // Ducking.
      if (this.ducking && this.status != Trex.status.CRASHED) {
        this.canvasCtx.drawImage(this.sprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH_DUCK, this.config.HEIGHT);
      } else {
        // Crashed whilst ducking. Trex is standing up so needs adjustment.
        if (this.ducking && this.status == Trex.status.CRASHED) {
          this.xPos++;
        }
        // Standing / running
        this.canvasCtx.drawImage(this.sprite, sourceX, sourceY, sourceWidth, sourceHeight, this.xPos, this.yPos, this.config.WIDTH, this.config.HEIGHT);
      }
    }

    /**
     * Sets a random time for the blink to happen.
     */

  }, {
    key: 'setBlinkDelay',
    value: function setBlinkDelay() {
      this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING);
    }

    /**
     * Make t-rex blink at random intervals.
     * @param {number} time Current time in milliseconds.
     */

  }, {
    key: 'blink',
    value: function blink(time) {
      var deltaTime = time - this.animStartTime;

      if (deltaTime >= this.blinkDelay) {
        this.draw(this.currentAnimFrames[this.currentFrame], 0);

        if (this.currentFrame == 1) {
          // Set new random delay to blink.
          this.setBlinkDelay();
          this.animStartTime = time;
          this.blinkCount++;
        }
      }
    }

    /**
     * Initialise a jump.
     * @param {number} speed
     */

  }, {
    key: 'startJump',
    value: function startJump(speed) {
      if (!this.jumping) {
        this.update(0, Trex.status.JUMPING);
        // Tweak the jump velocity based on the speed.
        this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - speed / 10;
        this.jumping = true;
        this.reachedMinHeight = false;
        this.speedDrop = false;
      }
    }

    /**
     * Jump is complete, falling down.
     */

  }, {
    key: 'endJump',
    value: function endJump() {
      if (this.reachedMinHeight && this.jumpVelocity < this.config.DROP_VELOCITY) {
        this.jumpVelocity = this.config.DROP_VELOCITY;
      }
    }

    /**
     * Update frame for a jump.
     * @param {number} deltaTime
     * @param {number} speed
     */

  }, {
    key: 'updateJump',
    value: function updateJump(deltaTime, speed) {
      var msPerFrame = Trex.animFrames[this.status].msPerFrame;
      var framesElapsed = deltaTime / msPerFrame;

      // Speed drop makes Trex fall faster.
      if (this.speedDrop) {
        this.yPos += Math.round(this.jumpVelocity * this.config.SPEED_DROP_COEFFICIENT * framesElapsed);
      } else {
        this.yPos += Math.round(this.jumpVelocity * framesElapsed);
      }

      this.jumpVelocity += this.config.GRAVITY * framesElapsed;

      // Minimum height has been reached.
      if (this.yPos < this.minJumpHeight || this.speedDrop) {
        this.reachedMinHeight = true;
      }

      // Reached max height
      if (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {
        this.endJump();
      }

      // Back down at ground level. Jump completed.
      if (this.yPos > this.groundYPos) {
        this.reset();
        this.jumpCount++;
      }

      this.update(deltaTime);
    }

    /**
     * Set the speed drop. Immediately cancels the current jump.
     */

  }, {
    key: 'setSpeedDrop',
    value: function setSpeedDrop() {
      this.speedDrop = true;
      this.jumpVelocity = 1;
    }

    /**
     * @param {boolean} isDucking.
     */

  }, {
    key: 'setDuck',
    value: function setDuck(isDucking) {
      if (isDucking && this.status != Trex.status.DUCKING) {
        this.update(0, Trex.status.DUCKING);
        this.ducking = true;
      } else if (this.status == Trex.status.DUCKING) {
        this.update(0, Trex.status.RUNNING);
        this.ducking = false;
      }
    }

    /**
     * Reset the t-rex to running at start of game.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.yPos = this.groundYPos;
      this.jumpVelocity = 0;
      this.jumping = false;
      this.ducking = false;
      this.update(0, Trex.status.RUNNING);
      this.midair = false;
      this.speedDrop = false;
      this.jumpCount = 0;
    }
  }]);

  return Trex;
}();

Trex = Object.assign(Trex, _Configs.trexConfig);

exports.default = Trex;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _distanceMeter = __webpack_require__(29);

var _distanceMeter2 = _interopRequireDefault(_distanceMeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _distanceMeter2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DistanceMeter = function () {
  function DistanceMeter(canvas) {
    _classCallCheck(this, DistanceMeter);

    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.spritePos = { x: 0, y: 0 };
    this.x = 0;
    this.y = 5;

    this.maxScore = 0;
    this.highScore = 0;

    this.digits = [];
    this.acheivement = false;
    this.defaultString = '';
    this.flashTimer = 0;
    this.flashIterations = 0;

    this.config = DistanceMeter.config;
    this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS;

    this.setSprite();

    this.init(_Configs.DIMENSIONS.WIDTH);
  }

  _createClass(DistanceMeter, [{
    key: 'setSprite',
    value: function setSprite() {
      if (_Configs.IS_HIDPI) {
        this.sprite = document.getElementById(DistanceMeter.spriteIds.HDPI.TEXT_SPRITE);
      } else {
        this.sprite = document.getElementById(DistanceMeter.spriteIds.LDPI.TEXT_SPRITE);
      }
    }
  }, {
    key: 'init',
    value: function init(width) {
      var maxDistanceStr = '';

      this.calcXPos(width);
      this.maxScore = this.maxScoreUnits;

      for (var i = 0; i < this.maxScoreUnits; i++) {
        this.draw(i, 0);
        this.defaultString += '0';
        maxDistanceStr += '9';
      }

      this.maxScore = parseInt(maxDistanceStr);
    }

    /**
     * Calculate the xPos in the canvas.
     * @param {number} canvasWidth
     */

  }, {
    key: 'calcXPos',
    value: function calcXPos(canvasWidth) {
      this.x = canvasWidth - DistanceMeter.dimensions.DEST_WIDTH * (this.maxScoreUnits + 1);
    }

    /**
     * Draw a digit to canvas.
     * @param {number} digitPos Position of the digit.
     * @param {number} value Digit value 0-9.
     * @param {boolean} opt_highScore Whether drawing the high score.
     */

  }, {
    key: 'draw',
    value: function draw(digitPos, value, opt_highScore) {
      var sourceWidth = DistanceMeter.dimensions.WIDTH;
      var sourceHeight = DistanceMeter.dimensions.HEIGHT;
      var sourceX = DistanceMeter.dimensions.WIDTH * value;
      var sourceY = 0;

      var targetX = digitPos * DistanceMeter.dimensions.DEST_WIDTH;
      var targetY = this.y;
      var targetWidth = DistanceMeter.dimensions.WIDTH;
      var targetHeight = DistanceMeter.dimensions.HEIGHT;

      // For high DPI we 2x source values.
      if (_Configs.IS_HIDPI) {
        sourceWidth *= 2;
        sourceHeight *= 2;
        sourceX *= 2;
      }

      sourceX += this.spritePos.x;
      sourceY += this.spritePos.y;

      this.canvasCtx.save();

      if (opt_highScore) {
        // Left of the current score.
        var highScoreX = this.x - this.maxScoreUnits * 2 * DistanceMeter.dimensions.WIDTH;
        this.canvasCtx.translate(highScoreX, this.y);
      } else {
        this.canvasCtx.translate(this.x, this.y);
      }

      this.canvasCtx.drawImage(this.sprite, sourceX, sourceY, sourceWidth, sourceHeight, targetX, targetY, targetWidth, targetHeight);

      this.canvasCtx.restore();
    }

    /**
     * Covert pixel distance to a 'real' distance.
     * @param {number} distance Pixel distance ran.
     * @return {number} The 'real' distance ran.
     */

  }, {
    key: 'getActualDistance',
    value: function getActualDistance(distance) {
      return distance ? Math.round(distance * this.config.COEFFICIENT) : 0;
    }

    /**
     * Update the distance meter.
     * @param {number} distance
     * @param {number} deltaTime
     * @return {boolean} Whether the acheivement sound fx should be played.
     */

  }, {
    key: 'update',
    value: function update(deltaTime, distance) {
      var paint = true;
      var playSound = false;

      if (!this.acheivement) {
        distance = this.getActualDistance(distance);
        // Score has gone beyond the initial digit count.
        if (distance > this.maxScore && this.maxScoreUnits == this.config.MAX_DISTANCE_UNITS) {
          this.maxScoreUnits++;
          this.maxScore = parseInt(this.maxScore + '9');
        } else {
          this.distance = 0;
        }

        if (distance > 0) {
          // Acheivement unlocked
          if (distance % this.config.ACHIEVEMENT_DISTANCE == 0) {
            // Flash score and play sound.
            this.acheivement = true;
            this.flashTimer = 0;
            playSound = true;
          }

          // Create a string representation of the distance with leading 0.
          var distanceStr = (this.defaultString + distance).substr(-this.maxScoreUnits);
          this.digits = distanceStr.split('');
        } else {
          this.digits = this.defaultString.split('');
        }
      } else {
        // Control flashing of the score on reaching acheivement.
        if (this.flashIterations <= this.config.FLASH_ITERATIONS) {
          this.flashTimer += deltaTime;

          if (this.flashTimer < this.config.FLASH_DURATION) {
            paint = false;
          } else if (this.flashTimer > this.config.FLASH_DURATION * 2) {
            this.flashTimer = 0;
            this.flashIterations++;
          }
        } else {
          this.acheivement = false;
          this.flashIterations = 0;
          this.flashTimer = 0;
        }
      }

      // Draw the digits if not flashing.
      if (paint) {
        for (var i = this.digits.length - 1; i >= 0; i--) {
          this.draw(i, parseInt(this.digits[i]));
        }
      }

      this.drawHighScore();
      return playSound;
    }

    /**
     * Draw the high score.
     */

  }, {
    key: 'drawHighScore',
    value: function drawHighScore() {
      this.canvasCtx.save();
      this.canvasCtx.globalAlpha = .8;
      for (var i = this.highScore.length - 1; i >= 0; i--) {
        this.draw(i, parseInt(this.highScore[i], 10), true);
      }
      this.canvasCtx.restore();
    }

    /**
     * Set the highscore as a array string.
     * Position of char in the sprite: H - 10, I - 11.
     * @param {number} distance Distance ran in pixels.
     */

  }, {
    key: 'setHighScore',
    value: function setHighScore(distance) {
      distance = this.getActualDistance(distance);
      var highScoreStr = (this.defaultString + distance).substr(-this.maxScoreUnits);

      this.highScore = ['10', '11', ''].concat(highScoreStr.split(''));
    }

    /**
     * Reset the distance meter back to '00000'.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.update(0);
      this.acheivement = false;
    }
  }]);

  return DistanceMeter;
}();

;

DistanceMeter = Object.assign(DistanceMeter, _Configs.distanceMeterConfig);

exports.default = DistanceMeter;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gameOverPanel = __webpack_require__(31);

var _gameOverPanel2 = _interopRequireDefault(_gameOverPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _gameOverPanel2.default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameOverPanel = function () {
  function GameOverPanel(canvas) {
    _classCallCheck(this, GameOverPanel);

    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.canvasDimensions = _Configs.DIMENSIONS;
    this.textImgPos = { x: 0, y: 0 };
    this.restartImgPos = { x: 0, y: 0 };

    this.setSprites();

    this.draw();
  }

  _createClass(GameOverPanel, [{
    key: 'setSprites',
    value: function setSprites() {
      if (_Configs.IS_HIDPI) {
        this.textSprite = document.getElementById(GameOverPanel.spriteIds.HDPI.GAME_OVER);
        this.restartSprite = document.getElementById(GameOverPanel.spriteIds.HDPI.RESTART);
      } else {
        this.textSprite = document.getElementById(GameOverPanel.spriteIds.LDPI.GAME_OVER);
        this.restartSprite = document.getElementById(GameOverPanel.spriteIds.LDPI.RESTART);
      }
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions(width, opt_height) {
      this.canvasDimensions.WIDTH = width;
      if (opt_height) {
        this.canvasDimensions.HEIGHT = opt_height;
      }
    }

    /**
     * Draw the panel.
     */

  }, {
    key: 'draw',
    value: function draw() {
      var dimensions = GameOverPanel.dimensions;

      var centerX = this.canvasDimensions.WIDTH / 2;

      // Game over text.
      var textSourceX = dimensions.TEXT_X;
      var textSourceY = dimensions.TEXT_Y;
      var textSourceWidth = dimensions.TEXT_WIDTH;
      var textSourceHeight = dimensions.TEXT_HEIGHT;

      var textTargetX = Math.round(centerX - dimensions.TEXT_WIDTH / 2);
      var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
      var textTargetWidth = dimensions.TEXT_WIDTH;
      var textTargetHeight = dimensions.TEXT_HEIGHT;

      var restartSourceWidth = dimensions.RESTART_WIDTH;
      var restartSourceHeight = dimensions.RESTART_HEIGHT;
      var restartTargetX = centerX - dimensions.RESTART_WIDTH / 2;
      var restartTargetY = this.canvasDimensions.HEIGHT / 2;

      if (_Configs.IS_HIDPI) {
        textSourceY *= 2;
        textSourceX *= 2;
        textSourceWidth *= 2;
        textSourceHeight *= 2;
        restartSourceWidth *= 2;
        restartSourceHeight *= 2;
      }

      textSourceX += this.textImgPos.x;
      textSourceY += this.textImgPos.y;

      // Game over text from sprite.
      this.canvasCtx.drawImage(this.textSprite, textSourceX, textSourceY, textSourceWidth, textSourceHeight, textTargetX, textTargetY, textTargetWidth, textTargetHeight);

      // Restart button.
      this.canvasCtx.drawImage(this.restartSprite, this.restartImgPos.x, this.restartImgPos.y, restartSourceWidth, restartSourceHeight, restartTargetX, restartTargetY, dimensions.RESTART_WIDTH, dimensions.RESTART_HEIGHT);
    }
  }]);

  return GameOverPanel;
}();

;

GameOverPanel = Object.assign(GameOverPanel, _Configs.gameOverPanelConfig);

exports.default = GameOverPanel;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configs = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImagesLoader = function () {
  function ImagesLoader(ids) {
    _classCallCheck(this, ImagesLoader);

    this.images = [];
    this.loadedCallback = null;
    this.callbackCalled = false;
    this.setImages(ids);
  }

  _createClass(ImagesLoader, [{
    key: 'setImages',
    value: function setImages(ids) {
      for (var name in ids) {
        this.images.push(document.getElementById(ids[name]));
      }
    }
  }, {
    key: 'checkAll',
    value: function checkAll() {
      return this.images.reduce(function (accumulated, current) {
        return accumulated && current.complete;
      }, true);
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var img = _step.value;

          img.addEventListener(_Configs.runnerConfig.events.LOAD, function () {
            if (_this.checkAll() && !_this.callbackCalled) {
              _this.callbackCalled = true;
              _this.loadedCallback();
            }
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'onLoaded',
    value: function onLoaded(callback) {
      this.loadedCallback = callback;
      this.addEventListeners();
    }
  }]);

  return ImagesLoader;
}();

;

exports.default = ImagesLoader;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map