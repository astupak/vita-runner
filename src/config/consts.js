/**
 * Default game width.
 * @const
 */
export const DEFAULT_WIDTH = 900;

export const DEFAULT_HEIGHT = 225;

export const DIMENSIONS = {
  WIDTH: DEFAULT_WIDTH,
  HEIGHT: DEFAULT_HEIGHT
}

/**
 * Frames per second.
 * @const
 */
export const FPS = 60;

/** @const */
export const IS_HIDPI = window.devicePixelRatio > 1;

/** @const */
export const IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

/** @const */
export const IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

/** @const */
export const IS_TOUCH_ENABLED = 'ontouchstart' in window;

