import {CollisionBox} from '../collision';

export const config = {
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

export const sourceDimensions = {
  WIDTH: 187,
  HEIGHT: 354,
  WIDTH_DUCK: 181,
  HEIGHT_DUCK: 254,  
};

export const collisionBoxes = {
  DUCKING: [
    new CollisionBox(23, 42, 24, 4),
    new CollisionBox(6, 46, 63, 19),
    new CollisionBox(3, 65, 62, 67)
  ],
  RUNNING: [
    new CollisionBox(19, 0, 26, 11),
    new CollisionBox(5, 11, 54, 13),
    new CollisionBox(1, 24, 64, 17),
    new CollisionBox(0, 41, 55,42),
    new CollisionBox(55, 41, 15, 8),
    new CollisionBox(3, 83, 19, 40),
    new CollisionBox(42, 83, 17, 49)
  ]
};

export const status = {
  CRASHED: 'CRASHED',
  DUCKING: 'DUCKING',
  JUMPING: 'JUMPING',
  RUNNING: 'RUNNING',
  WAITING: 'WAITING'
};

export const BLINK_TIMING = 7000;

export const animFrames = {
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

export const spriteIds = {
  LDPI: {
      TREX: 'trex-1x'
  },
  HDPI: {
      TREX: 'trex-2x'
  }
};