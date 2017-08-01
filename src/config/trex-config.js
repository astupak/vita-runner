import {CollisionBox} from '../collision';

export const config = {
  BOTTOM_PAD: 10,
  DROP_VELOCITY: -8,
  GRAVITY: 0.6,
  HEIGHT: 95,
  HEIGHT_DUCK: 70,
  INIITAL_JUMP_VELOCITY: -13,
  INTRO_DURATION: 1200,
  MAX_JUMP_HEIGHT: 60,
  MIN_JUMP_HEIGHT: 60,
  SPEED_DROP_COEFFICIENT: 3,
  START_X_POS: 50,
  WIDTH: 60,
  WIDTH_DUCK: 60
};

export const sourceDimensions = {
  WIDTH: 188,
  HEIGHT: 354,
  WIDTH_DUCK: 181,
  HEIGHT_DUCK: 254,  
};

export const collisionBoxes = {
  DUCKING: [
    new CollisionBox(1, 18, 55, 25)
  ],
  RUNNING: [
    new CollisionBox(22, 0, 17, 16),
    new CollisionBox(1, 18, 30, 9),
    new CollisionBox(10, 35, 14, 8),
    new CollisionBox(1, 24, 29, 5),
    new CollisionBox(5, 30, 21, 4),
    new CollisionBox(9, 34, 15, 4)
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