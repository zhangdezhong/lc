const isArray = (something)=>{
  return Object.prototype.toString.call(something) === '[object Array]';
}
function flat(arr, arrResult) {
  if (!Array.isArray(arr)) {
    arrResult.push(arr);
    return arrResult;
  }
  for (const item of arr) {
    flat(item, arrResult)
  }
  return arrResult;
}

const flat = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};

Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = this.concat();
  while (num > 0) {           
    if (arr.some(x => Array.isArray(x))) {
      arr = [].concat.apply([], arr);
    } else {
      break;
    }
    num--;
  }
  return arr;
};
const rejectHandler = reason => ({status: "rejected", reason})
const resolveHandler = value => ({status: "fulfilled", value})
Promise.allSettled = promises => {
  return Promise.all(
    promises.map(promise =>
      Promise.resolve(promise) 
        .then(resolveHandler, rejectHandler)
    )
  );
}

Promise.prototype.all = function(promises) {
  let results = [];
  let promiseCount = 0;
  let promisesLength = promises.length;
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function(res) {
        promiseCount++;
        results[i] = res;
        if (promiseCount === promisesLength) {
          return resolve(results);
        }
      }, function(err) {
        return reject(err);
      });
    }
  });
};