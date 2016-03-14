//inherits!

Function.prototype.inherits = function (parentClass) {

  var Surrogate = function () {};

  Surrogate.prototype = parentClass.prototype;

  this.prototype = new Surrogate();

  // this.prototype.constructor = this;

};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

MovingObject.prototype.fly = function () {
  console.log("Wheeee I'm flying!!!!");
};

Ship.prototype.onlyAShip = function () {
  console.log("I'm definitely a ship!");
};
