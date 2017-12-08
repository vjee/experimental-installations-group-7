module.exports = class Preload extends Phaser.State {
  init() {
    this.game.stage.backgroundColor = '#FF780F';

    this.loader = this.add.sprite(this.world.centerX, this.world.centerY, 'preloader');
    this.loader.anchor.setTo(0.5, 0.5);
  }
  preload() {
    console.log('[Preload] — preload()');
    // preload all game assets
    this.load.image('logoFill', 'assets/img/logo-fill-05.png');
    this.load.image('logoBorder', 'assets/img/logo-border-05.png');
    this.load.image('vegetables', 'assets/img/vegetables-05.png');
    this.load.image('choppedVegetables', 'assets/img/chopped-vegetables-05.png');
    this.load.image('knife', 'assets/img/knife-05.png');
    this.load.image('kitchenBackground', 'assets/img/kitchen-background-03.jpg');
    this.load.image('spaghetti', 'assets/img/spaghetti.jpg');
    this.load.image('cucumber', 'assets/img/cucumber.png');
    this.load.image('ok', 'assets/img/ok.png');
    this.load.image('thumbsUp', 'assets/img/thumbs-up.png');

    this.load.image('choppedTopCucumber', 'assets/img/cucumber-chopped-top.png');
    this.load.image('choppedBottomCucumber', 'assets/img/cucumber-chopped-bottom.png');

    this.load.image('carrot', 'assets/img/carrot.png');

    this.load.image('tomato', 'assets/img/tomato.png');

    this.load.atlasJSONHash('button-comp', 'assets/img/components/button-comp.png', 'assets/img/components/button-comp.json');
    this.load.atlasJSONHash('cutting-animation', 'assets/img/components/cutting-animation.png', 'assets/img/components/cutting-animation.json');
    this.load.atlasJSONHash('cucumber-cutting-animation', 'assets/img/components/cucumber-cutting-animation.png', 'assets/img/components/cucumber-cutting-animation.json');
    this.load.atlasJSONHash('eggplant-cutting-animation', 'assets/img/components/eggplant-cutting-animation.png', 'assets/img/components/eggplant-cutting-animation.json');
    this.load.atlasJSONHash('carrot-cutting-animation', 'assets/img/components/carrot-cutting-animation.png', 'assets/img/components/carrot-cutting-animation.json');
    this.load.atlasJSONHash('plate-animation', 'assets/img/components/plate-animation.png', 'assets/img/components/plate-animation.json');
  }
  create() {
    this.state.start('Menu');
  }
};
