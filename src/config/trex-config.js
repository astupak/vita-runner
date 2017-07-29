import {CollisionBox} from '../collision';

export const config = {
  SOURCE_WIDTH: 375,
  SOURCE_HEIGHT: 707,
  SOURCE_WIDTH_DUCK: 362,
  SOURCE_HEIGHT_DUCK: 507,  
  DROP_VELOCITY: -5,
  GRAVITY: 0.6,
  HEIGHT: 47,
  HEIGHT_DUCK: 25,
  INIITAL_JUMP_VELOCITY: -10,
  INTRO_DURATION: 1500,
  MAX_JUMP_HEIGHT: 30,
  MIN_JUMP_HEIGHT: 30,
  SPEED_DROP_COEFFICIENT: 3,
  SPRITE_WIDTH: 262,
  START_X_POS: 50,
  WIDTH: 44,
  WIDTH_DUCK: 59
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
    frames: [375, 0],
    msPerFrame: 1000 / 3
  },
  RUNNING: {
    frames: [750, 1125],
    msPerFrame: 1500 / 12
  },
  CRASHED: {
    frames: [220],
    msPerFrame: 1000 / 60
  },
  JUMPING: {
    frames: [0],
    msPerFrame: 1000 / 60
  },
  DUCKING: {
    frames: [2250, 2612],
    msPerFrame: 1000 / 8
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