(function (root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.Game = function () {
    this.DIM_X = 600;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];
    this.addAsteroids();
  };

  Asteroids.Game.prototype.randomPos = function () {
    var pos = [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
    return pos;
  };

  Asteroids.Game.prototype.addAsteroids = function () {
    for (i = 0; i < this.NUM_ASTEROIDS; i ++) {
      var position =  this.randomPos();
      var newAsteroid = new Asteroids.Asteroid( {pos: position });
      this.asteroids.push(newAsteroid);
    }
  };

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function (el) {
      el.draw.call(el, ctx);
    });
  };

  Asteroids.Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (el) {
      el.move.call(el);
    });
  };

})(this);

// var test = new Asteroids.Game();
//
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
//
// setInterval( function () {
//   test.draw(ctx);
//   test.moveObjects();
// }, 16);

// test.draw(ctx);
