const Button = require('../objects/Button');

module.exports = class End extends Phaser.State {
  create() {
    console.log('[Menu] — create()');
    this.createaBackground();
    this.createScore();
    this.createButton();
  }

  createaBackground() {
    console.log('[Menu] — createaBackground()');
    this.game.stage.backgroundColor = '#FF780F';
  }

  createScore() {
    this.medal = this.add.image(this.world.centerX, -420, 'medal');
    this.medal.anchor.setTo(0.5, 0.5);
    this.medal.scale.setTo(0.7, 0.7);
    this.game.add.tween(this.medal).to({ y: 350 }, 400, Phaser.Easing.Cubic.EaseIn, true);

    this.pageTitleShadow = this.add.text(this.world.centerX - 245, 85, 'Proficiat!', {
      font: '120px circular-medium',
      fill: '#fff',
    });
    this.pageTitleShadow.tint = 0x000000;
    this.pageTitleShadow.alpha = 0.6;

    this.pageTitle = this.add.text(this.world.centerX, 150, 'Proficiat!', {
      font: '120px circular-medium',
      fill: '#fff',
    });
    this.pageTitle.anchor.setTo(0.5, 0.5);

    const timePlayed = localStorage.getItem('timePlayed');

    const SCORE = timePlayed;

    this.score = this.add.text(this.world.centerX, this.world.centerY + 25, `${SCORE}`, {
      font: '160px circular-medium',
      fill: '#fff',
    });
    this.score.anchor.setTo(0.5, 0.5);
    this.score.alpha = 0;
    this.game.add.tween(this.score).to({ alpha: 1 }, 400, Phaser.Easing.Cubic.EaseIn, true, 400);
  }

  createButton() {
    const buttonPlay = new Button(
      this.game,
      this.world.centerX,
      this.world.height - 150,
      this.buttonPlayClicked,
      this,
      'button',
      'Naar het begin',
    );
    buttonPlay.anchor.setTo(0.5, 0.5);
    this.add.existing(buttonPlay);
  }

  buttonPlayClicked() {
    console.log('[OnboardingEnd] — handleStart()');
    this.state.start('Menu');
  }
};
