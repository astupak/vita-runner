import { config } from './gameOverPanel-config';
import { IS_HIDPI } from '../consts';

class GameOverPanel {
  constructor(canvas, textImgPos, restartImgPos, dimensions) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.canvasDimensions = dimensions;
    this.textImgPos = textImgPos;
    this.restartImgPos = restartImgPos;
    this.draw();
  }

  updateDimensions(width, opt_height) {
    this.canvasDimensions.WIDTH = width;
    if (opt_height) {
      this.canvasDimensions.HEIGHT = opt_height;
    }
  }

  /**
   * Draw the panel.
   */
  draw() {
    // var dimensions = GameOverPanel.dimensions;

    // var centerX = this.canvasDimensions.WIDTH / 2;

    // // Game over text.
    // var textSourceX = dimensions.TEXT_X;
    // var textSourceY = dimensions.TEXT_Y;
    // var textSourceWidth = dimensions.TEXT_WIDTH;
    // var textSourceHeight = dimensions.TEXT_HEIGHT;

    // var textTargetX = Math.round(centerX - (dimensions.TEXT_WIDTH / 2));
    // var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
    // var textTargetWidth = dimensions.TEXT_WIDTH;
    // var textTargetHeight = dimensions.TEXT_HEIGHT;

    // var restartSourceWidth = dimensions.RESTART_WIDTH;
    // var restartSourceHeight = dimensions.RESTART_HEIGHT;
    // var restartTargetX = centerX - (dimensions.RESTART_WIDTH / 2);
    // var restartTargetY = this.canvasDimensions.HEIGHT / 2;

    // if (IS_HIDPI) {
    //   textSourceY *= 2;
    //   textSourceX *= 2;
    //   textSourceWidth *= 2;
    //   textSourceHeight *= 2;
    //   restartSourceWidth *= 2;
    //   restartSourceHeight *= 2;
    // }

    // textSourceX += this.textImgPos.x;
    // textSourceY += this.textImgPos.y;

    // // Game over text from sprite.
    // this.canvasCtx.drawImage(Runner.imageSprite,
    //   textSourceX, textSourceY, textSourceWidth, textSourceHeight,
    //   textTargetX, textTargetY, textTargetWidth, textTargetHeight);

    // // Restart button.
    // this.canvasCtx.drawImage(Runner.imageSprite,
    //   this.restartImgPos.x, this.restartImgPos.y,
    //   restartSourceWidth, restartSourceHeight,
    //   restartTargetX, restartTargetY, dimensions.RESTART_WIDTH,
    //   dimensions.RESTART_HEIGHT);
  }
}

GameOverPanel.config = config;

export default GameOverPanel;