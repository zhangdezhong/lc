
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const deepTag = new Set([mapTag, setTag, arrayTag, objectTag, argsTag]);

function isObject(target) {
  const type = typeof target;
  return target != null && (type === 'object' || type === 'function')
}

function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}

function clone(target, map = new WeakMap()) {
  if (!isObject(target)) {
    return target;
  }
  const type = Object.prototype.toString.call(target);
  let cloneTarget;
  if (deepTag.has(type)) {
    cloneTarget = new target.constructor();
  } else {
    return;
  }
  if (map.has(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);
  if (type == setTag) {
    target.forEach(value => {
      cloneTarget.add(clone(value, map))
    });
    return cloneTarget;
  }

  if (type == mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value));
    });
    return cloneTarget;
  }

  if (type == arrayTag) {
    target.forEach(value => {
      cloneTarget.push(clone(value, map));
    });
    return cloneTarget;
  }

  if (type == objectTag) {
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        cloneTarget[key] = clone(target[key]);
      }
    }
    return cloneTarget;
  }
}


let minFallingPathSum = function(matrix) {
  let min = Infinity;
  let dp = new Array(matrix.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(-1);
  }
  for(let i = 0 ; i < matrix[0].length ; i++){
      min = Math.min(helper(matrix, 0, i, dp), min);
  }
  return min;
}

function helper(matrix, i, j, dp){
  if(i == matrix.length) return 0;
  
  if(dp[i][j] != -1) return dp[i][j];
  
  let d1 = j + 1 < matrix[0].length ? helper(matrix, i + 1, j + 1, dp) : Infinity;
  let d2 = helper(matrix, i + 1, j, dp);
  let d3 = j - 1 >= 0 ? helper(matrix, i + 1, j - 1, dp) : Infinity;
  
  return dp[i][j] = Math.min(d1, d2,d3) + matrix[i][j];
}


var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length == 0) return false;
  let row = matrix.length - 1;
  let col = 0;
  while (row > 0 && col < matrix[0].length) {
    if (matrix[row][col] == target) return true;
    if (target > matrix[row][col]) {
      col++;
    } else {
      row--;
    }
  }
  return false;
};

findNumberIn2DArray([[-5]], -5);