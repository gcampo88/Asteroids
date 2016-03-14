(function (root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  Asteroids.GameView.prototype.start = function () {
    this.bindKeyHandlers();
    root.setInterval( function () {
      this.game.draw(this.ctx);
      this.game.step();
    }.bind(this), 16);
  };

  Asteroids.GameView.prototype.bindKeyHandlers = function () {
    key('left', function () {
      this.game.ship.power([-1,0]);
    }.bind(this));
    key('up', function () {
      this.game.ship.power([0,-1]);
    }.bind(this));
    key('right', function () {
      this.game.ship.power([1,0]);
    }.bind(this));
    key('down', function () {
      this.game.ship.power([0,1]);
    }.bind(this));

  };

})(this);
