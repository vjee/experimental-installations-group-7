const Boot = require('./states/Boot');
const Preload = require('./states/Preload');
const Menu = require('./states/Menu');
const Nearby = require('./states/Nearby');
const OnboardingEnd = require('./states/OnboardingEnd');
const Instructions = require('./states/Instructions');
const Leaderboard = require('./states/Leaderboard');
const Play = require('./states/Play');
const End = require('./states/End');

module.exports = class Game extends Phaser.Game {
  constructor(arduino) {
    super(1920, 1080, Phaser.AUTO);

    this.arduino = arduino;

    this.arduino.addEventListener('drum-hit', this.logDrumHit);
    this.arduino.addEventListener('spoon-pull', this.logSpoonPull);

    this.state.add('Boot', Boot);
    this.state.add('Preload', Preload);
    this.state.add('Menu', Menu);
    this.state.add('Nearby', Nearby);
    this.state.add('OnboardingEnd', OnboardingEnd);
    this.state.add('Instructions', Instructions);
    this.state.add('Leaderboard', Leaderboard);
    this.state.add('Play', Play);
    this.state.add('End', End);

    this.state.start('Boot');
  }

  logDrumHit() {
    console.log('drum-hit');
  }

  logSpoonPull() {
    console.log('spoon-pull');
  }
};
