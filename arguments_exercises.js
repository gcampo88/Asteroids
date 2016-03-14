//sum

function sum() {
  var arrayArgs = Array.prototype.slice.call(arguments);
  var total = 0;
  arrayArgs.forEach( function (el) {
    total += el;
  });
  return total;
}


//myBind
Function.prototype.myBind = function () {
  var binding = arguments[0];
  var arrayArgs = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function () {
    var passedArgs = Array.prototype.slice.call(arguments);
    passedArgs = arrayArgs.concat(passedArgs);
    return fn.apply(binding, passedArgs);
  };
};

// eating curry

function curriedSum(numArgs) {
  var numbers = [];

  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var total = 0;
      numbers.forEach( function (el) {
        total += el;
      });
      return total;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;

}

Function.prototype.curry = function (numArgs) {
  var numbers = [];
  var _curriedFunction = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return this.apply(this, numbers);
    } else {
      return _curriedFunction;
    }
  }.bind(this);

  return _curriedFunction;
};















//
