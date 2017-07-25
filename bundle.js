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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default game width.
 * @const
 */
var DEFAULT_WIDTH = 600;

/**
 * Frames per second.
 * @const
 */
var FPS = 60;

/** @const */
var IS_HIDPI = window.devicePixelRatio > 1;

/** @const */
var IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

/** @const */
var IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

/** @const */
var IS_TOUCH_ENABLED = 'ontouchstart' in window;

exports.default = {
  DEFAULT_WIDTH: DEFAULT_WIDTH,
  FPS: FPS,
  IS_HIDPI: IS_HIDPI,
  IS_IOS: IS_IOS,
  IS_MOBILE: IS_MOBILE,
  IS_TOUCH_ENABLED: IS_TOUCH_ENABLED
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keycodes = exports.sounds = exports.spriteDefinition = exports.events = exports.classes = exports.defaultDimensions = exports.config = undefined;

var _consts = __webpack_require__(0);

var config = exports.config = {
  ACCELERATION: 0.001,
  BG_CLOUD_SPEED: 0.2,
  BOTTOM_PAD: 10,
  CLEAR_TIME: 3000,
  CLOUD_FREQUENCY: 0.5,
  GAMEOVER_CLEAR_TIME: 750,
  GAP_COEFFICIENT: 0.6,
  GRAVITY: 0.6,
  INITIAL_JUMP_VELOCITY: 12,
  INVERT_FADE_DURATION: 12000,
  INVERT_DISTANCE: 700,
  MAX_BLINK_COUNT: 3,
  MAX_CLOUDS: 6,
  MAX_OBSTACLE_LENGTH: 3,
  MAX_OBSTACLE_DUPLICATION: 2,
  MAX_SPEED: 13,
  MIN_JUMP_HEIGHT: 35,
  MOBILE_SPEED_COEFFICIENT: 1.2,
  RESOURCE_TEMPLATE_ID: 'audio-resources',
  SPEED: 6,
  SPEED_DROP_COEFFICIENT: 3
};

var defaultDimensions = exports.defaultDimensions = {
  WIDTH: _consts.DEFAULT_WIDTH,
  HEIGHT: _consts.DEFAULT_HEIGHT
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

var spriteDefinition = exports.spriteDefinition = {
  LDPI: {
    CACTUS_LARGE: { x: 332, y: 2 },
    CACTUS_SMALL: { x: 228, y: 2 },
    CLOUD: { x: 86, y: 2 },
    HORIZON: { x: 2, y: 54 },
    MOON: { x: 484, y: 2 },
    PTERODACTYL: { x: 134, y: 2 },
    RESTART: { x: 2, y: 2 },
    TEXT_SPRITE: { x: 655, y: 2 },
    TREX: { x: 848, y: 2 },
    STAR: { x: 645, y: 2 }
  },
  HDPI: {
    CACTUS_LARGE: { x: 652, y: 2 },
    CACTUS_SMALL: { x: 446, y: 2 },
    CLOUD: { x: 166, y: 2 },
    HORIZON: { x: 2, y: 104 },
    MOON: { x: 954, y: 2 },
    PTERODACTYL: { x: 260, y: 2 },
    RESTART: { x: 2, y: 2 },
    TEXT_SPRITE: { x: 1294, y: 2 },
    TREX: { x: 1678, y: 2 },
    STAR: { x: 1276, y: 2 }
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _runner = __webpack_require__(3);

var _runner2 = _interopRequireDefault(_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {})();

function onDocumentLoad() {
  new _runner2.default('.interstitial-wrapper');
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _runner = __webpack_require__(4);

var _runner2 = _interopRequireDefault(_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _runner2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _runnerConfig = __webpack_require__(1);

var runnerConfig = _interopRequireWildcard(_runnerConfig);

var _service = __webpack_require__(5);

var _horizon = __webpack_require__(6);

var _horizon2 = _interopRequireDefault(_horizon);

var _consts = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Runner = function () {
  function Runner(outerContainerId, opt_config) {
    _classCallCheck(this, Runner);

    this.outerContainerEl = document.querySelector(outerContainerId);
    this.containerEl = null;
    this.snackbarEl = null;
    this.detailsButton = this.outerContainerEl.querySelector('#details-button');

    this.config = opt_config || Runner.config;

    this.dimensions = Runner.defaultDimensions;

    this.canvas = null;
    this.canvasCtx = null;

    this.tRex = null;

    this.distanceMeter = null;
    this.distanceRan = 0;

    this.highestScore = 0;

    this.time = 0;
    this.runningTime = 0;
    this.msPerFrame = 1000 / _consts.FPS;
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
     * Setting individual settings for debugging.
     * @param {string} setting
     * @param {*} value
     */

  }, {
    key: 'updateConfigSetting',
    value: function updateConfigSetting(setting, value) {
      if (setting in this.config && value != undefined) {
        this.config[setting] = value;

        switch (setting) {
          case 'GRAVITY':
          case 'MIN_JUMP_HEIGHT':
          case 'SPEED_DROP_COEFFICIENT':
            this.tRex.config[setting] = value;
            break;
          case 'INITIAL_JUMP_VELOCITY':
            this.tRex.setJumpVelocity(value);
            break;
          case 'SPEED':
            this.setSpeed(value);
            break;
        }
      }
    }

    /**
     * Cache the appropriate image sprite from the page and get the sprite sheet
     * definition.
     */

  }, {
    key: 'loadImages',
    value: function loadImages() {
      if (_consts.IS_HIDPI) {
        Runner.imageSprite = document.getElementById('offline-resources-2x');
        this.spriteDef = Runner.spriteDefinition.HDPI;
      } else {
        Runner.imageSprite = document.getElementById('offline-resources-1x');
        this.spriteDef = Runner.spriteDefinition.LDPI;
      }

      if (Runner.imageSprite.complete) {
        this.init();
      } else {
        // If the images are not yet loaded, add a listener.
        Runner.imageSprite.addEventListener(Runner.events.LOAD, this.init.bind(this));
      }
    }

    /**
     * Load and decode base 64 encoded sounds.
     */

  }, {
    key: 'loadSounds',
    value: function loadSounds() {
      if (!_consts.IS_IOS) {
        this.audioContext = new AudioContext();

        var resourceTemplate = document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;

        for (var sound in Runner.sounds) {
          var soundSrc = resourceTemplate.getElementById(Runner.sounds[sound]).src;
          soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
          var buffer = decodeBase64ToArrayBuffer(soundSrc);

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
      if (this.dimensions.WIDTH < _consts.DEFAULT_WIDTH) {
        var mobileSpeed = speed * this.dimensions.WIDTH / _consts.DEFAULT_WIDTH * this.config.MOBILE_SPEED_COEFFICIENT;
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

      // Horizon contains clouds, obstacles and the ground.
      this.horizon = new _horizon2.default(this.canvas, this.spriteDef, this.dimensions, this.config.GAP_COEFFICIENT);

      // Distance meter
      this.distanceMeter = new DistanceMeter(this.canvas, this.spriteDef.TEXT_SPRITE, this.dimensions.WIDTH);

      // Draw t-rex
      this.tRex = new Trex(this.canvas, this.spriteDef.TREX);

      this.outerContainerEl.appendChild(this.containerEl);

      if (_consts.IS_MOBILE) {
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
        var keyframes = '@-webkit-keyframes intro { ' + 'from { width:' + Trex.config.WIDTH + 'px }' + 'to { width: ' + this.dimensions.WIDTH + 'px }' + '}';
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

      var now = getTimeStamp();
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
        var collision = hasObstacles && checkForCollision(this.horizon.obstacles[0], this.tRex);

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

      if (_consts.IS_MOBILE) {
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

      if (_consts.IS_MOBILE) {
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
      if (_consts.IS_MOBILE && this.playing) {
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
        var deltaTime = getTimeStamp() - this.time;

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
      vibrate(200);

      this.stop();
      this.crashed = true;
      this.distanceMeter.acheivement = false;

      this.tRex.update(100, Trex.status.CRASHED);

      // Game over panel.
      if (!this.gameOverPanel) {
        this.gameOverPanel = new GameOverPanel(this.canvas, this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART, this.dimensions);
      } else {
        this.gameOverPanel.draw();
      }

      // Update the high score.
      if (this.distanceRan > this.highestScore) {
        this.highestScore = Math.ceil(this.distanceRan);
        this.distanceMeter.setHighScore(this.highestScore);
      }

      // Reset the time clock.
      this.time = getTimeStamp();
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
        this.tRex.update(0, Trex.status.RUNNING);
        this.time = getTimeStamp();
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
        this.time = getTimeStamp();
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

Runner = Object.assign(Runner, runnerConfig);

Runner.updateCanvasScaling = function (canvas, opt_width, opt_height) {
  var context = canvas.getContext('2d');

  // Query the various pixel ratios
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
/* 5 */
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

var _runnerConfig = __webpack_require__(1);

var _consts = __webpack_require__(0);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Vibrate on mobile devices.
 * @param {number} duration Duration of the vibration in milliseconds.
 */
function vibrate(duration) {
  if (_consts.IS_MOBILE && window.navigator.vibrate) {
    window.navigator.vibrate(duration);
  }
}

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
  canvas.className = opt_classname ? _runnerConfig.classes.CANVAS + ' ' + opt_classname : _runnerConfig.classes.CANVAS;
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);

  return canvas;
}

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
}

/**
 * Return the current timestamp.
 * @return {number}
 */
function getTimeStamp() {
  return _consts.IS_IOS ? new Date().getTime() : performance.now();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horizon = __webpack_require__(7);

var _horizon2 = _interopRequireDefault(_horizon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _horizon2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _horizonConfig = __webpack_require__(8);

var _cloud = __webpack_require__(9);

var _cloud2 = _interopRequireDefault(_cloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Horizon = function () {
  function Horizon(canvas, spritePos, dimensions, gapCoefficient) {
    _classCallCheck(this, Horizon);

    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.config = Horizon.config;
    this.dimensions = dimensions;
    this.gapCoefficient = gapCoefficient;
    this.obstacles = [];
    this.obstacleHistory = [];
    this.horizonOffsets = [0, 0];
    this.cloudFrequency = this.config.CLOUD_FREQUENCY;
    this.spritePos = spritePos;
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
      this.horizonLine = new HorizonLine(this.canvas, this.spritePos.HORIZON);
      this.nightMode = new NightMode(this.canvas, this.spritePos.MOON, this.dimensions.WIDTH);
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
      var obstacleTypeIndex = getRandomNum(0, Obstacle.types.length - 1);
      var obstacleType = Obstacle.types[obstacleTypeIndex];

      // Check for multiples of the same type of obstacle.
      // Also check obstacle is available at current speed.
      if (this.duplicateObstacleCheck(obstacleType.type) || currentSpeed < obstacleType.minSpeed) {
        this.addNewObstacle(currentSpeed);
      } else {
        var obstacleSpritePos = this.spritePos[obstacleType.type];

        this.obstacles.push(new Obstacle(this.canvasCtx, obstacleType, obstacleSpritePos, this.dimensions, this.gapCoefficient, currentSpeed, obstacleType.width));

        this.obstacleHistory.unshift(obstacleType.type);

        if (this.obstacleHistory.length > 1) {
          this.obstacleHistory.splice(Runner.config.MAX_OBSTACLE_DUPLICATION);
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
      return duplicateCount >= Runner.config.MAX_OBSTACLE_DUPLICATION;
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
      this.clouds.push(new _cloud2.default(this.canvas, this.spritePos.CLOUD, this.dimensions.WIDTH));
    }
  }]);

  return Horizon;
}();

Horizon.config = _horizonConfig.config;

exports.default = Horizon;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  BG_CLOUD_SPEED: 0.2,
  BUMPY_THRESHOLD: .3,
  CLOUD_FREQUENCY: .5,
  HORIZON_HEIGHT: 16,
  MAX_CLOUDS: 6
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloud = __webpack_require__(10);

var _cloud2 = _interopRequireDefault(_cloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cloud2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cloudConfig = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cloud = function () {
  function Cloud(canvas, spritePos, containerWidth) {
    _classCallCheck(this, Cloud);

    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.spritePos = spritePos;
    this.containerWidth = containerWidth;
    this.xPos = containerWidth;
    this.yPos = 0;
    this.remove = false;
    this.cloudGap = getRandomNum(Cloud.config.MIN_CLOUD_GAP, Cloud.config.MAX_CLOUD_GAP);

    this.init();
  }

  _createClass(Cloud, [{
    key: 'init',
    value: function init() {
      this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL, Cloud.config.MIN_SKY_LEVEL);
      this.draw();
    }

    /**
     * Draw the cloud.
     */

  }, {
    key: 'draw',
    value: function draw() {
      this.canvasCtx.save();
      var sourceWidth = Cloud.config.WIDTH;
      var sourceHeight = Cloud.config.HEIGHT;

      if (IS_HIDPI) {
        sourceWidth = sourceWidth * 2;
        sourceHeight = sourceHeight * 2;
      }

      this.canvasCtx.drawImage(Runner.imageSprite, this.spritePos.x, this.spritePos.y, sourceWidth, sourceHeight, this.xPos, this.yPos, Cloud.config.WIDTH, Cloud.config.HEIGHT);

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

Cloud.config = _cloudConfig.config;

exports.default = Cloud;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  HEIGHT: 14,
  MAX_CLOUD_GAP: 400,
  MAX_SKY_LEVEL: 30,
  MIN_CLOUD_GAP: 100,
  MIN_SKY_LEVEL: 71,
  WIDTH: 46
};

/***/ })
/******/ ]);