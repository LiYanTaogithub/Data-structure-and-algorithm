function Fn() {
    var n = 10;
    this.m = 20;
    this.a = function () {
      console.log(this.m);
    };
  }
  var f1 = new Fn();
  Fn.prototype = {
    a: function () {
      console.log(this.m + 10);
    },
  };
  var f2 = new Fn
  console.log(f1.constructor)
  console.log(f2.constructor)
  f1.a()
  f2.a()
  f2.__proto_.a()
  [Function: Fn]
  [Function: Object]
  20
  20

  function runStack(n){
      if(n === 0) return 100
      return runStack(n-2)
  }
  runStack(50000) //RangeError: Maximum call stack size exceeded 递归调用导致堆栈溢出


  function fruits(){}
  fruits.prototype = {
      color: 'red',
      say: function(){
          console.log(this.color)
      }
  }
  var apple = new fruits()
  apple.say()
  banana = {color: 'yellow'} // red
  apple.say.call(banana) // yellow
  apple.say.apply(banana) // yellow
  apple.say.apply(null) // undefined