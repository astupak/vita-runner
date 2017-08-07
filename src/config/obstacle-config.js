import { CollisionBox } from '../collision';

export const MAX_GAP_COEFFICIENT = 1.0;

export const GAP_COEFFICIENT = 0.5;

export const MAX_OBSTACLE_LENGTH = 3;

export const types = [{
  type: 'CACTUS_SMALL',
  width: 42,
  height: 80,
  sourceDimensions: {
    width: 34,
    height: 70,
  },
  yPos: 178,
  multipleSpeed: 4,
  minGap: 240,
  minSpeed: 0,
  collisionBoxes: {
    '1': [ new CollisionBox(0, 0, 42, 80) ],
    '2': [ 
      new CollisionBox(4, 1, 41, 75),
      new CollisionBox(45, 13, 35, 63),
    ],
    '3': [ 
      new CollisionBox(0, 4, 43, 72),
      new CollisionBox(43, 26, 77, 50),
     ]
  }
}, 
{
  type: 'CACTUS_LARGE',
  width: 44,
  height: 92,
  sourceDimensions: {
    width: 50,
    height: 100,
  },
  yPos: 168,
  multipleSpeed: 7,
  minGap: 240,
  minSpeed: 0,
  collisionBoxes: {
    '1': [ new CollisionBox(0, 0, 44, 92) ],
    '2': [ new CollisionBox(0, 0, 88, 92) ],
    '3': [ new CollisionBox(0, 0, 132, 92) ]
  }
}, {
  type: 'PTERODACTYL',
  width: 84,
  height: 72,
  sourceDimensions: {
    width: 46,
    height: 40,
  },
  yPos: [200, 100, 75], // Variable height.
  yPosMobile: [100, 50], // Variable height mobile.
  multipleSpeed: 999,
  minSpeed: 8.5,
  minGap: 300,
  collisionBoxes: {
    '1': [  new CollisionBox(0, 25, 84, 11) ]
  }
  ,
  numFrames: 2,
  frameRate: 2000 / 6,
  speedOffset: .8
}
];

export const spriteIds = {
  LDPI: {
      CACTUS_SMALL: 'cactusSmall-1x',
      CACTUS_LARGE: 'cactusLarge-1x',
      PTERODACTYL: 'pterodactyl-1x',

  },
  HDPI: {
      CACTUS_SMALL: 'cactusSmall-2x',
      CACTUS_LARGE: 'cactusLarge-2x',
      PTERODACTYL: 'pterodactyl-2x',
  }
};