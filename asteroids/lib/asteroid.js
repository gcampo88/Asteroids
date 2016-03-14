(function (root) {

 var Asteroids = root.Asteroids = root.Asteroids || {};

 Asteroids.Asteroid = function (argsHash) {
   argsHash.vel = Asteroids.Util.randomVec(2);
   argsHash.color = "#9932CC";
   argsHash.radius = 15;
   Asteroids.MovingObject.call(this, argsHash);
 };

 Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);


})(this);
