import {
  FPS,
  IS_HIDPI,
  horizonLineConfig
} from 'Configs';

class HorizonLine {
  constructor(canvas) {
    this.spritePos = {x: 0, y: 0};
    this.sprite = null;
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.sourceDimensions = {};
    this.dimensions = HorizonLine.dimensions;
    this.sourceXPos = [this.spritePos.x, this.spritePos.x +
        this.dimensions.WIDTH];
    this.xPos = [];
    this.yPos = 0;
    this.bumpThreshold = 0.5;

    this.setSourceDimensions();
    this.setSprite();
    this.draw();
  }

  /**
   * Set the source dimensions of the horizon line.
   */
  setSourceDimensions() {

    for (var dimension in HorizonLine.dimensions) {
      if (IS_HIDPI) {
        if (dimension != 'YPOS') {
          this.sourceDimensions[dimension] =
            HorizonLine.dimensions[dimension] * 2;
            console.log(this.sourceDimensions);
        }
      } else {
        this.sourceDimensions[dimension] =
          HorizonLine.dimensions[dimension];
      }
      this.dimensions[dimension] = HorizonLine.dimensions[dimension];
    }

    this.xPos = [0, HorizonLine.dimensions.WIDTH];
    this.yPos = HorizonLine.dimensions.YPOS;
  }

  setSprite() {
    if (IS_HIDPI) {
      this.sprite = document.getElementById(HorizonLine.spriteIds.HDPI.HORIZON);
    } else {
      this.sprite = document.getElementById(HorizonLine.spriteIds.LDPI.HORIZON)
    }
  }

  /**
   * Return the crop x position of a type.
   */
  getRandomType() {
    return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;
  }

  /**
   * Draw the horizon line.
   */
  draw() {
    console.log(this.xPos[0],this.xPos[1])
    this.canvasCtx.drawImage(this.sprite, this.sourceXPos[0],
      this.spritePos.y,
      this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,
      this.xPos[0], this.yPos,
      this.dimensions.WIDTH, this.dimensions.HEIGHT);

    this.canvasCtx.drawImage(this.sprite, this.sourceXPos[1],
      this.spritePos.y,
      this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,
      this.xPos[1], this.yPos,
      this.dimensions.WIDTH, this.dimensions.HEIGHT);
    console.log(this.xPos[0],this.xPos[1])
  }

  /**
   * Update the x position of an indivdual piece of the line.
   * @param {number} pos Line position.
   * @param {number} increment
   */
  updateXPos(pos, increment) {
    var line1 = pos;
    var line2 = pos == 0 ? 1 : 0;
    console.log(line1, line2);
    this.xPos[line1] -= increment;
    this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;

    if (this.xPos[line1] <= -this.dimensions.WIDTH) {
      this.xPos[line1] += this.dimensions.WIDTH *2 ;
      this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;
      this.sourceXPos[line1] = this.getRandomType() + this.spritePos.x;
    }

  }

  /**
   * Update the horizon line.
   * @param {number} deltaTime
   * @param {number} speed
   */
  update(deltaTime, speed) {
    var increment = Math.floor(speed * (FPS / 1000) * deltaTime);

    if (this.xPos[0] <= 0) {
      this.updateXPos(0, increment);
    } else {
      this.updateXPos(1, increment);
    }
    this.draw();
  }

  /**
   * Reset horizon to the starting position.
   */
  reset() {
    this.xPos[0] = 0;
    this.xPos[1] = HorizonLine.dimensions.WIDTH;
  }
}

HorizonLine = Object.assign(HorizonLine, horizonLineConfig);

export default HorizonLine;