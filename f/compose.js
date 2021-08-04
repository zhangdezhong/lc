function compose() {
  var fns = [].slice.call(arguments)
  return function (initialArg) {
      var res = initialArg
      for (var i = fns.length - 1; i > -1; i--) {
          res = fns[i](res)
      }
      return res
  }
}

function pipe() {
  var fns = [].slice.call(arguments)
  return function (initialAgr) {
      var res = initialAgr
      for (var i = 0; i < fns.length; i++) {
          res = fns[i](res)
      }
      return res
  }
}

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
     console.log(this.name)
  }
}

function New(fn, ...arg) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, arg);
  return obj instanceof Object ? obj : {};
}


function Bromise(executor) { 
  var onResolve_ = null;
  var onReject_ = null; //模拟实现resolve和then，暂不支持rejcet 
  this.then = function (onResolve, onReject) { 
    onResolve_ = onResolve;
    onReject_ = onReject;
  };
  function resolve(value) { 
    setTimeout(()=>{ 
      onResolve_(value) 
    },0);
  }
  function reject(value) { 
    //setTimeout(()=>{ 
      onReject_(value) 
    // },0) 
  }
  executor(resolve, reject);
}


function instanceOf (left, right) {
  let proto = left.__proto__
  while(proto){
      if (proto === right.prototype) {
          return true
      }
      proto = proto.__proto__
  }
  return false
}