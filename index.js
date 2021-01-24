const addon = require('bindings')('addon')

// for(let i = 0; i < 1000; i++) {
    addon.test(function(r) {
        // if(r != 8) {
            console.log(r);
        // }
    });
// }

// function rC(path) {
//     return new Promise(reslove => {
//         addon.count( path, function(num1, num5) {
//             reslove({
//                 num1, 
//                 num5
//             });
//         })
//     })
// }

// async function init(file) {
//     let startTime = new Date;
//     const {
//         num1, 
//         num5
//     } = await rC(file)
//     console.log('count', ((new Date - startTime)/1000));
//     console.log('sssss', num1, num5);
// }

// try {
//     init('/Users/momo/Documents/hack/source1.txt')
// } catch(e) {
//     console.log(e);
// }

// const fs = require('fs');
// const readline = require('readline');

// function readFile(file) {
//     return new Promise(resolve => {
//         let sorted = {};
//         const rl = readline.createInterface({
//             input: fs.createReadStream(file),
//             crlfDelay: Infinity
//         });
          
//         rl.on('line', (line) => {
//             let tmp = line.split(',');
//             if(tmp.length == 3) {
//                 for (let i = 0; i < 3; i++) {
//                     tmp[i] = tmp[i].trim();
//                 }
//                 let time = new Date(tmp[0]).getTime()/1000;
//                 if(time != 0) {
//                     if(sorted[time]) {
//                         sorted[time].push(`${tmp[1]},${tmp[2]}`)
//                     } else {
//                         sorted[time] = [`${tmp[1]},${tmp[2]}`]
//                     }
//                 }
//             }
//         });
    
//         rl.on('close', function() {
//             resolve(sorted);
//         });
//     });
// }

// async function init(file) {
//     let startTime = new Date;
//     let resData = await readFile(file);
//     let keys = Object.keys(resData)//.sort((a,b) => a-b);
//     console.log('read File', (new Date - startTime)/1000);
//     let res = {};
//     keys.forEach(key => {
//         resData[key].forEach(vc => {
//             let status = 0;
//             let tmp = vc.split(',');
//             let pair = vc;
//             if(tmp[0] > tmp[1]) {
//                 pair = tmp[1] + "," + tmp[0];
//                 status = 1;
//             }
//             if(res[pair]) {
//                 if(res[pair][res[pair].length-1] != status) {
//                     res[pair].push(status)
//                 }
//             } else {
//                 res[pair] = [status]
//             }
//         });
//     });
//     console.log('create res:', (new Date - startTime)/1000);
//     let result = {}
//     Object.keys(res).forEach(key => {
//         let rs = res[key].length >> 1
//         let uidStrArr = key.split(',')
//         let uid0 = uidStrArr[0];
//         let uid1 = uidStrArr[1];
//         if (result[uid0]) {
//             result[uid0] = Math.max(rs, result[uid0])
//         } else {
//             result[uid0] = rs;
//         }
//         if (result[uid1]) {
//             result[uid1] = Math.max(rs, result[uid1])
//         } else {
//             result[uid1] = rs;
//         }
//     });
//     let num1 = 0, num5 = 0;
//     let rsarr = Object.keys(result);
//     rsarr.forEach(key => {
//         if(result[key] > 0) {
//             num1++;
//         }
//         if(result[key] > 4) {
//             num5++;
//         }
//     })
//     console.log('end time', 
//         (new Date()-startTime)/1000,
//         ', num1:' + Math.floor(num1*100/rsarr.length),
//         ', num5:' + Math.floor(num5*100/rsarr.length)
//     )
// }

// try {
//     init('/Users/momo/Documents/hack/source1.txt')
// } catch(e) {
//     console.log(e);
// }


// var change = function(amount, coins) {
//     let arr = [];
//     function dfs(start, sum, path) {
//         if (sum > amount) {
//             return 0;
//         }
//         if (sum == amount) {
//             arr.push(path);
//             return 1;
//         }
//         let result = 0;
//         for (let i = start; i < coins.length; i++) {
//             path.push(coins[i]);
//             result += dfs(i, sum+coins[i], [...path]);
//             path.pop();
//         }
//         return result
//     }
//     dfs(0, 0, []);
//     return arr.length;
// };

// console.log(change(5, [1, 2, 5]));


// function subsets(nums) {
//     let res = [];
//     function backtrack(start, res, tmp) {
//         res.push(tmp);
//         for (let i = start; i < nums.length; i++) {
//             tmp.push(nums[i]);
//             backtrack(i+1, res, [...tmp]);
//             tmp.pop();
//         }
//     }
//     backtrack(0, res, []);
//     return res;

// }

// console.log(subsets([1,2,3]))




// var buildTree = function(preorder, inorder) {
//     let map = new Map();
//     inorder.forEach((elem, index) => {
//         map.set(elem, index);
//     })
//     function helper(pl, pr, il, ir) {
//         if(pl > pr || il > ir) {
//             return null;
//         }
//         let rootVal = preorder[pl];
//         let root = new TreeNode(rootVal);
//         let ri = map.get(rootVal);

//         root.left = helper(pl + 1, pl + ri - il, il, ri - 1);
//         root.right = helper(pl + ri - il + 1, pr, ri + 1, ir);

//         return root;
//     }

//     return helper(0, preorder.length, 0, inorder.length);
// };

// var buildTree = function(preorder, inorder) {
//     let mp = new Map();
//     inorder.forEach((item, i) => {
//         mp.set(item, i);
//     })

//     function helper(ps, pr, is, ir) {
//         if (ps > pr || is > ir) {
//             return null;
//         }
//         let root = preorder[ps];
//         let ri = mp.get(root);

//         let node = new TreeNode(root);
//         node.left = helper(ps + 1, ps + ri - is, is, ri - 1);
//         node.right = helper(ps + ri - is + 1, pr, ri + 1, ir);
//         return node;
//     }
    
//     return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };



function knapsack3(weight, value, n, w) {
    let states = [];
    for (let i = 0; i < n; ++i) { // 初始化states
      states[i] = []
      for (let j = 0; j < w+1; ++j) {
        states[i][j] = -1;
      }
    }
    states[0][0] = 0;
    if (weight[0] <= w) {
      states[0][weight[0]] = value[0];
    }
    for (let i = 1; i < n; ++i) { //动态规划，状态转移
      for (let j = 0; j <= w; ++j) { // 不选择第i个物品
        if (states[i-1][j] >= 0) states[i][j] = states[i-1][j];
      }
      for (let j = 0; j <= w-weight[i]; ++j) { // 选择第i个物品
        if (states[i-1][j] >= 0) {
          let v = states[i-1][j] + value[i];
          if (v > states[i][j+weight[i]]) {
            states[i][j+weight[i]] = v;
          }
        }
      }
    }
    // 找出最大值
    let maxvalue = -1;
    for (let j = 0; j <= w; ++j) {
      if (states[n-1][j] > maxvalue) maxvalue = states[n-1][j];
    }
    return maxvalue;
  }

//   console.log(knapsack3([1, 2, 1, 7, 9, 4], [1, 2, 1, 7, 9, 4], 3, 12))


// let maxV = -Infinity; // 结果放到maxV中
// let items = [1, 2, 1, 7, 9, 4];  // 物品的重量
// let value = [1, 2, 1, 7, 9, 4]; // 物品的价值
// let n = 3; // 物品个数
// let w = 12; // 背包承受的最大重量
// function f(i, cw, cv) { // 调用f(0, 0, 0)
//   if (cw == w || i == n) { // cw==w表示装满了，i==n表示物品都考察完了
//     if (cv > maxV) maxV = cv;
//     return;
//   }
//   f(i+1, cw, cv); // 选择不装第i个物品
//   if (cw + items[i] <= w) {
//     f(i+1,cw+items[i], cv+value[i]); // 选择装第i个物品
//   }
// }

// f(0,0,0);
// console.log(maxV)


// 回溯算法实现。注意：我把输入的变量都定义成了成员变量。
// let maxW = -Infinity; // 结果放到maxW中
// let weight = [1, 2, 1, 7, 9, 4];  // 物品重量
// let n = 6; // 物品个数
// let w = 12; // 背包承受的最大重量
// function f(i, cw) { // 调用f(0, 0)
//   if (cw == w || i == n) { // cw==w表示装满了，i==n表示物品都考察完了
//     if (cw > maxW) maxW = cw;
//     return;
//   }
//   f(i+1, cw); // 选择不装第i个物品
//   if (cw + weight[i] <= w) {
//     f(i+1,cw + weight[i]); // 选择装第i个物品
//   }
// }

// f(0, 0);

// console.log(maxW);



// function DP(w, v, N, W) {
//     let dp = [];
//     for(let i = 0; i < N+1; i++) {
//         dp[i] = [];
//         for(let j = 0; j < W+1; j++) {
//             dp[i][j] = 0
//         }
//     }
    
//     for (let tn = 1; tn < N + 1; tn++) { // 遍历每一件物品
//         for (let rw = 1; rw < W + 1; rw++) { // 背包容量有多大就还要计算多少次
//             if (rw < w[tn-1]) {
//                 // 当背包容量小于第tn件物品重量时，只能放入前tn-1件
//                 dp[tn][rw] = dp[tn-1][rw];
//             } else {
//                 // 当背包容量还大于第tn件物品重量时，进一步作出决策
//                 dp[tn][rw] = Math.max(dp[tn-1][rw], (dp[tn-1][rw-w[tn-1]] || 0) + (v[tn-1] || 0));
//             }
//         }
//     }
//     return dp[N][W];
// }

// function lastStoneWeight(stones) {
//     let N = stones.length, W = 0;
//     for (let i = 0; i < stones.length; i++) {
//         W += stones[i];
//     }

//     return W - DP(stones, stones, N, Math.floor(W/2))*2; // 输出答案
// }

// console.log(DP([3, 2, 1],  [5, 2, 3], 3, 5))

// function bag(weight, w){
//     let maxW  = -Infinity;
//     let mem = [];
//     for(let i = 0; i < weight.length; i++) {
//         mem[i] = [];
//     }
//     function dfs(n, i, cw) {
//         if (cw == w || i == n) { // cw==w表示装满了，i==n表示物品都考察完了
//             maxW = Math.max(maxW, cw);
//             return;
//         }
//         if (mem[i][cw]) return; // 重复状态 
//         mem[i][cw] = true; // 记录(i, cw)这个状态
//         dfs(n, i+1, cw); // 选择不装第i个物品
//         if (cw + weight[i] <= w) {
//             dfs(n, i+1, cw + weight[i]); // 选择装第i个物品
//         }
//     }

//     dfs(weight.length, 0, 0);
//     return maxW;
// }

// // console.log(bag([2, 2, 4, 6, 3], 3));

// function minDistDP(matrix, n) {
//     let states = [];
//     for(let i = 0; i < n+1; i++) {
//         states.push([]);
//     }
//     let sum = 0;
//     for (let j = 0; j < n; ++j) { // 初始化states的第一行数据
//       sum += matrix[0][j];
//       states[0][j] = sum;
//     }
//     sum = 0;
//     for (let i = 0; i < n; ++i) { // 初始化states的第一列数据
//       sum += matrix[i][0];
//       states[i][0] = sum;
//     }
//     for (let i = 1; i < n; ++i) {
//       for (let j = 1; j < n; ++j) {
//         states[i][j] = 
//               matrix[i][j] + Math.min(states[i][j-1], states[i-1][j]);
//       }
//     }
//     return states[n-1][n-1];
//   }
// //   console.log(minDistDP([[1,3,5,9],[2,1,3,4],[5,2,6,7],[6,8,4,3]], 4))
// var spiralOrder = function(matrix) {
//     if( matrix.length == 0) {
//         return [];
//     }
//     let res = [];
//     function helper(rs, re, cs, ce) {
//         if(rs > re || cs > ce) {
//             return;
//         }
        
//         for(let i = cs; i < ce; i++) {
//             res.push(matrix[rs][i]);
//         }
//         for(let i = rs + 1; i < re; i++) {
//             res.push(matrix[i][ce-1])
//         }
//         if(re - rs > 1) {
//             for(let i = ce - 2; i >= cs; i--) {
//                 res.push(matrix[re-1][i]);
//             }
//         }
//         if(ce - cs > 1) {
//             for(let i = re - 2; i > rs; i--) {
//                 res.push(matrix[i][rs]);
//             }
//         }
//         helper(rs+1, re-1, cs+1, ce-1);
//     }
//     helper(0, matrix.length, 0, matrix[0].length);
//     return res;
// };
// //  console.log(spiralOrder([[2,5,8],[4,0,-1]]))

// function minDistBacktracing(w) {
//     let minDist =  Infinity;
//     let n = w.length-1;
//     function minDistBT(i, j, dist) {
//         if(i > n || j > n) {
//             return;
//         }
//         if (i == n && j == n) {
//             minDist = Math.min(minDist, dist+ w[i][j]);
//         }
//         minDistBT(i + 1, j, dist+w[i][j]);
//         minDistBT(i, j + 1, dist+w[i][j]);
//     }
//     minDistBT(0,0,0);
//     return minDist;
// }
// console.log(minDistBacktracing([[1,3,5,9],[2,1,3,4],[5,2,6,7],[6,8,4,3]]));


// 数组
// 链表
// 队列
// 栈
// 哈希表
// 树
// 递归
// 分治
// 贪心
// 广度
// 深度
// 二分查找
// 字典树
// 位运算
// 动态规划
// 并查集
// LrU
// 布隆过滤器