export const config = {
  FADE_SPEED: 0.035,
  HEIGHT: 60,
  MOON_SPEED: 0.3,
  NUM_STARS: 2,
  STAR_SIZE: 9,
  STAR_SPEED: 0.3,
  STAR_MAX_Y: 100,
  WIDTH: 30
};

export const sourceDimensions = {
  moon: {
    WIDTH: 40,
    HEIGHT: 80,
  },
  STAR_SIZE: 9,
};


export const spriteIds = {
  LDPI: {
      MOON: 'moon-1x',
      STAR: 'star-1x'
  },
  HDPI: {
      MOON: 'moon-2x',
      STAR: 'star-2x'
  }
};

export const phases = [280, 240, 200, 120, 80, 40, 0];