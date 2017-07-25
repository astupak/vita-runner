/**
 * Default game width.
 * @const
 */
const DEFAULT_WIDTH = 600;

/**
 * Frames per second.
 * @const
 */
const FPS = 60;

/** @const */
const IS_HIDPI = window.devicePixelRatio > 1;

/** @const */
const IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

/** @const */
const IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

/** @const */
const IS_TOUCH_ENABLED = 'ontouchstart' in window;

export default {
  DEFAULT_WIDTH,
  FPS,
  IS_HIDPI,
  IS_IOS,
  IS_MOBILE,
  IS_TOUCH_ENABLED,
}