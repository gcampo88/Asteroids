(function (root) {

 var Asteroids = root.Asteroids = root.Asteroids || {};

 Asteroids.Ship = function (argsHash) {
   argsHash.vel = [0, 0];
   argsHash.color = "#F5D04C";
   argsHash.radius = 10;
   Asteroids.MovingObject.call(this, argsHash);
 };

 Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

 Asteroids.Ship.prototype.relocate = function () {
   this.pos = this.game.randomPos();
   this.vel = [0, 0];
 };

 Asteroids.Ship.prototype.power = function (impulse) {
   this.vel = [this.vel[0] + impulse[0],
     this.vel[1] + impulse[1]];
 };


})(this);
