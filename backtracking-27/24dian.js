
let TARGET = 24;
let EPSILON = 1e-6;
let ADD = 0, MULTIPLY = 1, SUBTRACT = 2, DIVIDE = 3;
var judgePoint24 = function(nums) {
    let list = [];
    for (let num of nums) {
        list.push(num);
    }
    return solve(list);
}

function solve(list) {
    if (list.length == 0) return false;
    if (list.length == 1) {
        return Math.abs(list[0] - TARGET) < EPSILON;
    }
    let size = list.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i != j) {
                let list2 = [];
                for (let k = 0; k < size; k++) {
                    if (k != i && k != j) {
                        list2.push(list[k]);
                    }
                }
                for (let k = 0; k < 4; k++) {
                    if (k < 2 && i > j) {
                        continue;
                    }
                    if (k == ADD) {
                        list2.push(list[i] + list[j]);
                    } else if (k == MULTIPLY) {
                      list2.push(list[i] * list[j]);
                    } else if (k == SUBTRACT) {
                      list2.push(list[i] - list[j]);
                    } else if (k == DIVIDE) {
                        if (Math.abs(list[j]) < EPSILON) {
                            continue;
                        } else {
                            list2.push(Math.floor( list[i] / list[j] * 10) / 10);
                        }
                    }
                    if (solve(list2)) {
                        return true;
                    }
                    list2.remove(list2.size() - 1);
                }
            }
        }
    }
    return false;
}



var minWindow = function(s, t) {
  let map = {};
  for (let tc of t) {
    if (!map[tc]) {
      map[tc] = 1
    } else {
      map[tc]++;
    }
  }
  let counter = 0, begin = 0, end = 0, d = 0; 
  while(end < s.length){
      if(map.get[s[end++]]++>0) counter++; 
      while(counter>0) if(map[s[begin++]]-->1) counter--;
      d= Math.max(d, end - begin); //while valid, update d
  }
  return d;
};

minWindow('ADOBECODEBANC', 'ABC');