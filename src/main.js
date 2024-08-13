import "phaser";
import { GameScene } from "./scenes/game";
import { GameOverScene } from "./scenes/gameOver";

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: true,
    },
  },
  scene: [GameScene, GameOverScene],
};

export default new Phaser.Game(config);
