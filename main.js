window.onload = () => {
  let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: "phaser-example",
    scene: [Breakout],
    physics: {
      default: "arcade",
    },
  };

  var game = new Phaser.Game(config);
};
