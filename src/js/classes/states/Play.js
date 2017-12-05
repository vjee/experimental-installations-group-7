export default class Play extends Phaser.State {
  create() {
    console.log(`[Play] — Create()`);
    this.createaBackground();
    this.createVegetableIndicators();
    this.createTimer();
  }
  createaBackground() {
    console.log(`[Play] — createLogo()`);
    this.background = this.add.image(0, 0, `kitchenBackground`);
  }

  createVegetableIndicators() {
    //rounded background for the indicators
    this.VegetableIndicatorBackground = this.game.add.graphics(0,0);
    this.VegetableIndicatorBackground.beginFill(0xFFFFFF, 1);
    this.VegetableIndicatorBackground.drawRoundedRect(1435, 40, 425, 120, 70);

    // left dish
    this.dishCircle = this.game.add.graphics(0,0);
    this.dishCircle.beginFill(0xededed, 1);
    this.dishCircle.lineStyle(5, 0x69d7a1, 1);
    this.dishCircle.drawCircle(1500, 100, 100);

    // right dish
    this.dishCircle = this.game.add.graphics(0,0);
    this.dishCircle.beginFill(0xededed, 1);
    this.dishCircle.lineStyle(5, 0xFFFFFF, 1);
    this.dishCircle.drawCircle(1500 + 300, 100, 100);

    //cirlce-active
    this.dishCircle = this.game.add.graphics(0,0);
    this.dishCircle.lineStyle(10, 0xFFFFFF, 1);
    this.dishCircle.drawCircle(1500 + 150, 100, 100);

    //img
    this.spaghetti = this.add.image(1500 + 150, 100, `spaghetti`);
    this.spaghetti.anchor.setTo(0.5, 0.5);
    //mask
    this.mask = this.game.add.graphics(0, 0);
    this.mask.beginFill(0xffffff);
    this.mask.drawCircle(1500 + 150, 100, 100);
    this.spaghetti.mask = this.mask;
  }
  createTimer() {
    this.timerBackground = this.game.add.graphics(0,0);
    this.timerBackground.beginFill(0xFFFFFF, 1);
    this.timerBackground.lineStyle(5, 0xc1c1c1, 1);
    this.timerBackground.drawRoundedRect(120, 218, 530, 248, 5);
  }
  update() {
    console.log(`[Play] — Update()`);
  }
}
