(function (root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.Bullet = function (argsHash) {
    argsHash.color = "#41A317";
    argsHash.radius = 2;
    Asteroids.MovingObject.call(this, argsHash);
  };

  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Asteroids.Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };


})(this);
