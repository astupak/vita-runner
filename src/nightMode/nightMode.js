import { 
  nightModeConfig,
  IS_HIDPI,
  DIMENSIONS,
} from 'Configs';
import { getRandomNum } from '../service';

class NightMode {
  constructor(canvas) {
    this.moonSpritePos = {x:0, y:0};
    this.starSpritePos = {x:0, y:0};
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.xPos = DIMENSIONS.WIDTH - 50;
    this.yPos = 30;
    this.currentPhase = 0;
    this.opacity = 0;
    this.containerWidth = DIMENSIONS.WIDTH;
    this.stars = [];
    this.drawStars = false;

    this.setSprite();
    this.placeStars();
  }

  setSprite() {
    if (IS_HIDPI) {
      this.moonSprite = document.getElementById(NightMode.spriteIds.HDPI.MOON);
      this.starSprite = document.getElementById(NightMode.spriteIds.HDPI.STAR)
    } else {
      this.moonSprite = document.getElementById(NightMode.spriteIds.LDPI.MOON);
      this.starSprite = document.getElementById(NightMode.spriteIds.LDPI.STAR)
    }
  }

  update(activated, delta) {
    // Moon phase.
    if (activated && this.opacity == 0) {
      this.currentPhase++;

      if (this.currentPhase >= NightMode.phases.length) {
        this.currentPhase = 0;
      }
    }

    // Fade in / out.
    if (activated && (this.opacity < 1 || this.opacity == 0)) {
      this.opacity += NightMode.config.FADE_SPEED;
    } else if (this.opacity > 0) {
      this.opacity -= NightMode.config.FADE_SPEED;
    }

    // Set moon positioning.
    if (this.opacity > 0) {
      this.xPos = this.updateXPos(this.xPos, NightMode.config.MOON_SPEED);

      // Update stars.
      if (this.drawStars) {
        for (let i = 0; i < NightMode.config.NUM_STARS; i++) {
          this.stars[i].x = this.updateXPos(this.stars[i].x,
            NightMode.config.STAR_SPEED);
        }
      }
      this.draw();
    } else {
      this.opacity = 0;
      this.placeStars();
    }
    this.drawStars = true;
  }

  updateXPos(currentPos, speed) {
    if (currentPos < -NightMode.config.WIDTH) {
      currentPos = this.containerWidth;
    } else {
      currentPos -= speed;
    }
    return currentPos;
  }

  draw() {
    let moonSourceWidth = this.currentPhase == 3 ? NightMode.sourceDimensions.moon.WIDTH * 2 :
        NightMode.sourceDimensions.moon.WIDTH;
    let moonSourceHeight = NightMode.sourceDimensions.moon.HEIGHT;
    let moonSourceX = this.moonSpritePos.x + NightMode.phases[this.currentPhase];
    let moonOutputWidth = this.currentPhase == 3 ? NightMode.config.WIDTH * 2 :
        NightMode.config.WIDTH;
    let sourceStarSize = NightMode.sourceDimensions.STAR_SIZE;
    let starSourceX = this.starSpritePos.x;

    if (IS_HIDPI) {
        moonSourceWidth *= 2;
        moonSourceHeight *= 2;
        moonSourceX = this.moonSpritePos.x +
            (NightMode.phases[this.currentPhase] * 2);
        sourceStarSize *= 2;
        starSourceX = this.starSpritePos.x;
    }

    this.canvasCtx.save();
    this.canvasCtx.globalAlpha = this.opacity;

    // Stars.
    if (this.drawStars) {
        for (let i = 0; i < NightMode.config.NUM_STARS; i++) {
            this.canvasCtx.drawImage(this.starSprite,
                starSourceX, this.stars[i].sourceY, sourceStarSize, sourceStarSize,
                Math.round(this.stars[i].x), this.stars[i].y,
                NightMode.config.STAR_SIZE, NightMode.config.STAR_SIZE);
        }
    }

    // Moon.
    console.log(moonSourceX);
    this.canvasCtx.drawImage(this.moonSprite, moonSourceX,
        this.moonSpritePos.y, moonSourceWidth, moonSourceHeight,
        Math.round(this.xPos), this.yPos,
        moonOutputWidth, NightMode.config.HEIGHT);

    this.canvasCtx.globalAlpha = 1;
    this.canvasCtx.restore();
  }

  // Do star placement.
  placeStars() {
    let segmentSize = Math.round(this.containerWidth /
      NightMode.config.NUM_STARS);

    for (let i = 0; i < NightMode.config.NUM_STARS; i++) {
      this.stars[i] = {};
      this.stars[i].x = getRandomNum(segmentSize * i, segmentSize * (i + 1));
      this.stars[i].y = getRandomNum(0, NightMode.config.STAR_MAX_Y);

      if (IS_HIDPI) {
        this.stars[i].sourceY = this.starSpritePos.y +
          NightMode.config.STAR_SIZE * 2 * i;
      } else {
        this.stars[i].sourceY = this.starSpritePos.y +
          NightMode.config.STAR_SIZE * i;
      }
    }
  }

  reset() {
    this.currentPhase = 0;
    this.opacity = 0;
    this.update(false);
  }
};

NightMode = Object.assign(NightMode, nightModeConfig);

export default NightMode;
