import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT
} from './consts';

export const config = {
  ACCELERATION: 0.001,
  CLEAR_TIME: 3000,
  GAMEOVER_CLEAR_TIME: 750,
  INVERT_FADE_DURATION: 12000,
  INVERT_DISTANCE: 700,
  MAX_BLINK_COUNT: 3,
  MAX_SPEED: 13,
  MOBILE_SPEED_COEFFICIENT: 1.2,
  RESOURCE_TEMPLATE_ID: 'audio-resources',
  SPEED: 6,
};

export const classes = {
  CANVAS: 'runner-canvas',
  CONTAINER: 'runner-container',
  CRASHED: 'crashed',
  ICON: 'icon-offline',
  INVERTED: 'inverted',
  SNACKBAR: 'snackbar',
  SNACKBAR_SHOW: 'snackbar-show',
  TOUCH_CONTROLLER: 'controller'
};

export const events = {
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

export const spriteIds = {
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

export const sounds = {
  BUTTON_PRESS: 'offline-sound-press',
  HIT: 'offline-sound-hit',
  SCORE: 'offline-sound-reached'
};

export const keycodes = {
  JUMP: { '38': 1, '32': 1 },  // Up, spacebar
  DUCK: { '40': 1 },  // Down
  RESTART: { '13': 1 }  // Enter
};