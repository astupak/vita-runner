import {
  cloudConfig,
  IS_HIDPI,
  DIMENSIONS,
} from 'Configs';
import { getRandomNum } from '../service';

class Cloud {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.spritePos = {x:0, y:0};
    this.containerWidth = DIMENSIONS.WIDTH;
    this.xPos = DIMENSIONS.WIDTH;
    this.yPos = 0;
    this.remove = false;
    this.cloudGap = getRandomNum(Cloud.config.MIN_CLOUD_GAP,
      Cloud.config.MAX_CLOUD_GAP);

    this.setSprite();
    this.init();
  }

  setSprite() {
    if (IS_HIDPI) {
      this.sprite = document.getElementById(Cloud.spriteIds.HDPI.CLOUD);
      console.log(this.sprite);
    } else {
      this.sprite = document.getElementById(Cloud.spriteIds.LDPI.CLOUD)
    }
  }
  init() {
    this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL,
      Cloud.config.MIN_SKY_LEVEL);
    this.draw();
  }

  /**
   * Draw the cloud.
   */
  draw() {
    this.canvasCtx.save();
    var sourceWidth = Cloud.config.WIDTH;
    var sourceHeight = Cloud.config.HEIGHT;

    if (IS_HIDPI) {
      sourceWidth = sourceWidth * 2;
      sourceHeight = sourceHeight * 2;
    }

    this.canvasCtx.drawImage(this.sprite, this.spritePos.x,
      this.spritePos.y,
      sourceWidth, sourceHeight,
      this.xPos, this.yPos,
      Cloud.config.WIDTH, Cloud.config.HEIGHT);

    this.canvasCtx.restore();
  }

  /**
   * Update the cloud position.
   * @param {number} speed
   */
  update(speed) {
    if (!this.remove) {
      this.xPos -= Math.ceil(speed);
      this.draw();

      // Mark as removeable if no longer in the canvas.
      if (!this.isVisible()) {
        this.remove = true;
      }
    }
  }

  /**
   * Check if the cloud is visible on the stage.
   * @return {boolean}
   */
  isVisible() {
    return this.xPos + Cloud.config.WIDTH > 0;
  }

}

Cloud = Object.assign(Cloud, cloudConfig);

export default Cloud;