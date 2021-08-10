function compose() {
  var fns = [].slice.call(arguments)
  return function (initialArg) {
      var res = initialArg
      for (let i = fns.length - 1; i > -1; i--) {
          res = fns[i](res)
      }
      return res
  }
}

function compose(...fns) {
  return x => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
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


class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = [];
    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map(handler => handler(status)); 
      });
    });
    this.notifyHandlers = notifyHandlers;
  }
  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler);
    return this;
  }
}

"use strict";
// 基础框架 
function fib(n) {
  return fibImpl(0, 1, n);
}
// 执行递归
function fibImpl(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a+b, n -1);
}