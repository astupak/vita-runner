import { 
  gameOverPanelConfig,
  DIMENSIONS,
  IS_HIDPI,
} from 'Configs';


class GameOverPanel {
  constructor(canvas, textImgPos, restartImgPos, dimensions) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.canvasDimensions = DIMENSIONS;
    this.textImgPos = {x:0, y:0};
    this.restartImgPos = {x:0, y:0};

    this.setSprites();

    this.draw();
  }
  
   setSprites() {
    if (IS_HIDPI) {
      this.textSprite = document.getElementById(GameOverPanel.spriteIds.HDPI.GAME_OVER);
      this.restartSprite = document.getElementById(GameOverPanel.spriteIds.HDPI.RESTART);

    } else {
      this.textSprite = document.getElementById(GameOverPanel.spriteIds.LDPI.GAME_OVER);
      this.restartSprite = document.getElementById(GameOverPanel.spriteIds.LDPI.RESTART);

    }
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
    var dimensions = GameOverPanel.dimensions;

    var centerX = this.canvasDimensions.WIDTH / 2;

    // Game over text.
    var textSourceX = dimensions.TEXT_X;
    var textSourceY = dimensions.TEXT_Y;
    var textSourceWidth = dimensions.TEXT_WIDTH;
    var textSourceHeight = dimensions.TEXT_HEIGHT;

    var textTargetX = Math.round(centerX - (dimensions.TEXT_WIDTH / 2));
    var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
    var textTargetWidth = dimensions.TEXT_WIDTH;
    var textTargetHeight = dimensions.TEXT_HEIGHT;

    var restartSourceWidth = dimensions.RESTART_WIDTH;
    var restartSourceHeight = dimensions.RESTART_HEIGHT;
    var restartTargetX = centerX - (dimensions.RESTART_WIDTH / 2);
    var restartTargetY = this.canvasDimensions.HEIGHT / 2;

    if (IS_HIDPI) {
      textSourceY *= 2;
      textSourceX *= 2;
      textSourceWidth *= 2;
      textSourceHeight *= 2;
      restartSourceWidth *= 2;
      restartSourceHeight *= 2;
    }

    textSourceX += this.textImgPos.x;
    textSourceY += this.textImgPos.y;

    // Game over text from sprite.
    console.log(textSourceX, textSourceY);
    this.canvasCtx.drawImage(this.textSprite,
      textSourceX, textSourceY, textSourceWidth, textSourceHeight,
      textTargetX, textTargetY, textTargetWidth, textTargetHeight);

    // Restart button.
    this.canvasCtx.drawImage(this.restartSprite,
      this.restartImgPos.x, this.restartImgPos.y,
      restartSourceWidth, restartSourceHeight,
      restartTargetX, restartTargetY, dimensions.RESTART_WIDTH,
      dimensions.RESTART_HEIGHT);
  }
}

GameOverPanel = Object.assign(GameOverPanel, gameOverPanelConfig);

export default GameOverPanel;