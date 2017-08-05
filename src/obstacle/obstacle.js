import {
  obstacleConfig,
  IS_MOBILE,
  IS_HIDPI,
  FPS,
  DIMENSIONS,
} from 'Configs';
import { CollisionBox } from '../collision';
import { getRandomNum } from '../service';

class Obstacle {
  constructor(canvasCtx, type, speed) {
    this.canvasCtx = canvasCtx;
    this.spritePos = {x:0, y:0};
    this.typeConfig = type;
    this.gapCoefficient = Obstacle.GAP_COEFFICIENT;
    this.size = getRandomNum(1, Obstacle.MAX_OBSTACLE_LENGTH);
    this.dimensions = DIMENSIONS;
    this.remove = false;
    this.xPos = DIMENSIONS.WIDTH + (type.width || 0);
    this.yPos = 0;
    this.width = 0;
    this.collisionBoxes = [];
    this.gap = 0;
    this.speedOffset = 0;

    // For animated obstacles.
    this.currentFrame = 0;
    this.timer = 0;

    this.setSprite(type);
    this.init(speed);
  }

  setSprite({type}) {
    this.sprite = Obstacle[`${type}_SPRITE`];
  }

  init(speed) {
    // Only allow sizing if we're at the right speed.
    if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {
      this.size = 1;
    }

    this.collisionBoxes = this.typeConfig.collisionBoxes[this.size]; 

    this.width = this.typeConfig.width * this.size;

    // Check if obstacle can be positioned at various heights.
    if (Array.isArray(this.typeConfig.yPos)) {
      let yPosConfig = IS_MOBILE ? this.typeConfig.yPosMobile :
        this.typeConfig.yPos;
      this.yPos = yPosConfig[getRandomNum(0, yPosConfig.length - 1)];
    } else {
      this.yPos = this.typeConfig.yPos;
    }

    this.draw();

    // For obstacles that go at a different speed from the horizon.
    if (this.typeConfig.speedOffset) {
      this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset :
        -this.typeConfig.speedOffset;
    }

    this.gap = this.getGap(this.gapCoefficient, speed);
  }

  /**
   * Draw and crop based on size.
   */
  draw() {
    let sourceWidth = this.typeConfig.sourceDimensions.width;
    let sourceHeight = this.typeConfig.sourceDimensions.height;

    if (IS_HIDPI) {
      sourceWidth = sourceWidth * 2;
      sourceHeight = sourceHeight * 2;
    }

    // X position in sprite.
    let sourceX = (sourceWidth * this.size) * (0.5 * (this.size - 1)) +
      this.spritePos.x;

    // Animation frames.
    if (this.currentFrame > 0) {
      sourceX += sourceWidth * this.currentFrame;
    }

    this.canvasCtx.drawImage(this.sprite,
      sourceX, this.spritePos.y,
      sourceWidth * this.size, sourceHeight,
      this.xPos, this.yPos,
      this.typeConfig.width * this.size, this.typeConfig.height);
  }

  /**
   * Obstacle frame update.
   * @param {number} deltaTime
   * @param {number} speed
   */
  update(deltaTime, speed) {
    if (!this.remove) {
      if (this.typeConfig.speedOffset) {
        speed += this.speedOffset;
      }
      this.xPos -= Math.floor((speed * FPS / 1000) * deltaTime);

      // Update frame
      if (this.typeConfig.numFrames) {
        this.timer += deltaTime;
        if (this.timer >= this.typeConfig.frameRate) {
          this.currentFrame =
            this.currentFrame == this.typeConfig.numFrames - 1 ?
            0 : this.currentFrame + 1;
          this.timer = 0;
        }
      }
      this.draw();

      if (!this.isVisible()) {
        this.remove = true;
      }
    }
  }

  /**
   * Calculate a random gap size.
   * - Minimum gap gets wider as speed increses
   * @param {number} gapCoefficient
   * @param {number} speed
   * @return {number} The gap size.
   */
  getGap(gapCoefficient, speed) {
    let minGap = Math.round(this.width * speed +
      this.typeConfig.minGap * gapCoefficient);
    let maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);
    return getRandomNum(minGap, maxGap);
  }

  /**
   * Check if obstacle is visible.
   * @return {boolean} Whether the obstacle is in the game area.
   */
  isVisible() {
    return this.xPos + this.width > 0;
  }

};

Obstacle = Object.assign(Obstacle, obstacleConfig);

Obstacle.initSprites = () => {
  for (let {type} of Obstacle.types) {
    if (IS_HIDPI) {
      Obstacle[`${type}_SPRITE`] = document.getElementById(Obstacle.spriteIds.HDPI[type])
    } else {
      Obstacle[`${type}_SPRITE`] = document.getElementById(Obstacle.spriteIds.LDPI[type]);
    }  
  }
};

export default Obstacle;
