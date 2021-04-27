// 144. 二叉树的前序遍历
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
var preorderTraversal = function(root) {
    let res = [];
    if(!root) return res;
    let st = [root];
    while(st.length) {
        root = st.pop();
        res.push(root.val);
        root.right && st.push(root.right);
        root.left && st.push(root.left);
    }
    return res;
};
var preorderTraversal = function(root) {
    let ans  = [];
    function helper(root) {
        if(!root) return;
        ans.push(root.val);
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return ans;
};
// 589. N叉树的前序遍历
// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
var preorder = function(root) {
    let res = [];
    if(!root) return res;
    let st = [root];
    while(st.length) {
        let node = st.pop();
        res.push(node.val);
        for(let i = node.children.length-1; i >= 0; i--) {
            st.push(node.children[i]);
        }
    }
    return res;
}
// 94. 二叉树的中序遍历
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
var inorderTraversal = function(root) {
    let stack = []
    let ans = []
    while(root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
            continue;
        }
        root = stack.pop()
        ans.push(root.val)
        root = root.right
    }
    return ans
};

var inorderTraversal = function(root) {
    let ans  = [];
    function helper(root) {
        if(!root) return;
        helper(root.left);
        ans.push(root.val);
        helper(root.right);
    }
    helper(root);
    return ans;
}
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// 145. 二叉树的后序遍历
var postorderTraversal = root => {
    let res = [], stack = [];
    while (root || stack.length) {
        res.push(root.val)
        if (root.left) stack.push(root.left)
        if (root.right) stack.push(root.right)
        root = stack.pop()
    }
    return res.reverse();
}
// 590. N叉树的后序遍历
// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
var postorder = function(root) {
    if (!root) return []
    let stack = [root];
    let ans = [];
    while (stack.length) {
        const node = stack.pop();
        ans.unshift(node.val);
        for(let children of node.children) {
            stack.push(children);
        }
    }
    return ans;
};

// 102. 二叉树的层序遍历
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 107. 二叉树的层次遍历 II 
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
// ans.reverse
// 103. 二叉树的锯齿形层次遍历
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
// 剑指 Offer 32 - III. 从上到下打印二叉树 III
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
// 988. 从叶结点开始的最小字符串
// https://leetcode-cn.com/problems/smallest-string-starting-from-leaf/
var levelOrder = function(root) {
    let ans = [];
    if(!root) return ans;
    let stack =  [root];
    while(stack.length) {
        let len = stack.length;
        let tmp = [];
        for(let i = 0; i < len; i++) {
            let elm = stack.shift();
            tmp.push(elm.val);
            elm.left && stack.push(elm.left);
            elm.right && stack.push(elm.right);
        }
        ans.push(tmp);
    }
    return ans;
};

var levelOrder  = function(root) {
    let ans = [];
    function dfs(level, root) {
        if(!root) return;
        if(!ans[level]) ans[level] = [];
        ans[level].push(root.val);
        dfs(level + 1, root.left);
        dfs(level + 1, root.right);
    }
    dfs(0, root);
    return ans.reverse();
}
// 剑指 Offer 32 - I. 从上到下打印二叉树
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let result  = [];
    while(queue.length) {
        let temp = [];
        while(queue.length) {
            let p = queue.shift()
            result.push(p.val);
            p.left && temp.push(p.left)
            p.right && temp.push(p.right)
        }
        queue = temp;
    }
    return result;
};
// 515. 在每个树行中找最大值
// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
var largestValues = function(root) {
    let res = [];
    function dfs(root, level) {
        if (!root) return;
        if(res[level] == undefined) res[level] = -Infinity;
        res[level] = Math.max(res[level], root.val);
        dfs(root.left, level+1);
        dfs(root.right, level+1);
    }
    dfs(root, 0);
    return res;
};
// 1302. 层数最深叶子节点的和
// https://leetcode-cn.com/problems/deepest-leaves-sum/
// 872. 叶子相似的树
// https://leetcode-cn.com/problems/leaf-similar-trees/
var deepestLeavesSum = function(root) {
    let arr = [];
    function dfs(root, level) {
        if (!root) return;
        if(!arr[level]) arr[level] = [];
        arr[level].push(root.val);
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }
    dfs(root, 0);
    return arr[arr.length-1].reduce((a, b) => a + b);
};

// 429. N叉树的层序遍历
// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let queue = [root];
    while(queue.length) {
        let tmp = [];
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let elem = queue.shift();
            tmp.push(elem.val);
            for(let child of elem.children) {
                queue.push(child);
            }
        }
        res.push(tmp);
    }
    return res;
};
// 199. 二叉树的右视图
// https://leetcode-cn.com/problems/binary-tree-right-side-view/
var rightSideView = function(root) {
    let res = [];
    function dfs(root, level) {
        if(!root) return;
        if(res.length == level) {
            res.push(root.val);
        }
        level++;
        dfs(root.right, level);
        dfs(root.left, level);
    }
    dfs(root, 0);
    return res;
};

// 面试题 04.03. 特定深度节点链表
// https://leetcode-cn.com/problems/list-of-depth-lcci/
var listOfDepth = function(tree) {
    if(!tree) return [];
    let queue = [tree];
    let res = [];
    while(queue.length) {
        let len = queue.length;
        let tmp = [];
        let link = new ListNode();
        let pre = link;
        for(let i = 0; i < len; i++) {
            let elem = queue.shift();
            pre.next = new ListNode(elem.val);
            pre = pre.next;
            elem.left && queue.push(elem.left);
            elem.right && queue.push(elem.right);
        }
        res.push(link.next);
    }
    return res;
};

// 366. 寻找二叉树的叶子节点
// https://leetcode-cn.com/problems/find-leaves-of-binary-tree/
var findLeaves = function(root) {
    let leaf = [];

    function dfs(root, list) {
        if(!root) {
            return;
        }
        if(!root.left && !root.right) {
            list.push(root.val);
            return
        }
        root.left = dfs(root.left, list);
        root.right = dfs(root.right, list);
        return root;
    }
    
    while(root != null){
        let list = [];
        root = dfs(root, list);
        leaf.push(list);
    }
    return leaf;
};
// 987. 二叉树的垂序遍历
// https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/
var verticalTraversal = function(root) {
    let map = new Map();
    let res = []
    function dfs(root, left, depth) {
        if(!root) return;
        if(map.has(left)) {
            map.get(left).push({depth, val: root.val});
        } else {
            map.set(left, [{depth, val: root.val}]);
        }
        dfs(root.left, left - 1, depth+1);
        dfs(root.right, left + 1, depth+1);
    }
    dfs(root, 0, 0);
    return Array.from(map)
            .sort((a, b) => a[0] - b[0])
            .map(item  => {
                item[1].sort((a, b) => {
                    if(a.depth == b.depth) {
                        return a.val - b.val;
                    }
                    return a.depth - b.depth;
                });
                let tmp = []
                item[1].forEach(elem => {
                    tmp.push(elem.val);
                })
                return tmp
            });
};
// 1469. 寻找所有的独生节点
// https://leetcode-cn.com/problems/find-all-the-lonely-nodes/
var getLonelyNodes = function(root) {
    function dfs(node, parent, ans) {
        if (!node) return;
        if (parent && (!parent.left || !parent.right))
            ans.push(node.val);

        dfs(node.left, node, ans);
        dfs(node.right, node, ans);
        return ans;
    };

    return dfs(root, null, []);
};
// https://leetcode-cn.com/problems/find-bottom-left-tree-value/
// 513. 找树左下角的值
var findBottomLeftValue = function(root) {
    let res = 0, maxlevel = -1;
    function dfs(root, level) {
        if(!root) return;
        if(maxlevel < level) {
            maxlevel = level;
            res = root.val;
        } 
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }
    dfs(root, 0);
    return res || 0;
};