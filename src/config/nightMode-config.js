export const config = {
  FADE_SPEED: 0.035,
  HEIGHT: 50,
  MOON_SPEED: 0.25,
  NUM_STARS: 2,
  STAR_SIZE: 9,
  STAR_SPEED: 0.3,
  STAR_MAX_Y: 100,
  WIDTH: 25
};

export const sourceDimensions = {
  moon: {
    WIDTH: 20,
    HEIGHT: 40,
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
export const phases = [140, 120, 100, 60, 40, 20, 0];