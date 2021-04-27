// 105. 从前序与中序遍历序列构造二叉树
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
var buildTree = function(preorder, inorder) {
    let map = new Map();
    inorder.forEach((elem, index) => {
        map.set(elem, index);
    })
    function helper(pl, pr, il, ir) {
        if(pl > pr || il > ir) {
            return null;
        }
        let rootVal = preorder[pl];
        let root = new TreeNode(rootVal);
        let ri = map.get(rootVal);

        root.left = helper(pl + 1, pl + ri - il, il, ri - 1);
        root.right = helper(pl + ri - il + 1, pr, ri + 1, ir);

        return root;
    }

    return helper(0, preorder.length-1, 0, inorder.length-1);
};
// 889. 根据前序和后序遍历构造二叉树
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
// 剑指 Offer 07. 重建二叉树
// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
var constructFromPrePost = function(pre, post) {
    let map = new Map();
    for(let i = 0; i < post.length; i++) 
        map.set(post[i],i);
    function helper(preL, preR, postL, postR){
          if (preL>preR)
              return null;
          if(preL==preR)   //要提前结束，不然后面pre[preL+1]数组会越界，（注意105题、106题）
              return new TreeNode(pre[preL]);
          
          let head = new TreeNode(pre[preL]);
          let preRootVal = pre[preL+1]; //前序遍历的第二个节点就是左子树的开始节点pre_second_node
          let postMid = map.get(preRootVal); //后序遍历节点pre_second_node出现位置（在数组post中的索引）
          let postLeftNum = postMid-postL; //后序遍历数组的左子树的节点的个数
          
          head.left = helper(preL+1,preL+1+postLeftNum,postL,postMid);//递归构建左子树
          head.right = helper(preL+1+postLeftNum+1,preR,postMid+1,postR-1);//递归构建右子树
          return head;
    }
    return helper(0,pre.length-1,0,post.length-1);
};
// 106. 从中序与后序遍历序列构造二叉树
// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
var buildTree = function(inorder, postorder) {
    if(!inorder || !postorder || inorder.length != postorder.length) {
        return null;
    }
    let mp = new Map();
    inorder.forEach((item, i) => {
        mp.set(item, i);
    });

    function hepler(il, ir, pl, pr) {
        if(il > ir || pl > pr) {
            return null;
        }

        let rootval = postorder[pr];
        let ri = mp.get(rootval);

        let node = new TreeNode(rootval);

        node.left =  hepler(il, ri - 1, pl, pl + ri - 1 - il);
        node.right =  hepler(ri + 1, ir, pl + ri - il, pr - 1);

        return node;
    }

    return hepler(0, inorder.length - 1, 0, postorder.length - 1)
};

// 1008. 前序遍历构造二叉搜索树
// https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/
var bstFromPreorder = function(preorder) {
    let inorder = [...preorder].sort((a,b) => a - b);
    let mp = new Map();
    inorder.forEach((item, i) => {
        mp.set(item, i);
    })
    function helper( ps, pe, is, ie) {
        if(is > ie || ps > pe) {
            return null;
        }

        let root = preorder[ps];
        let ri = mp.get(root);
        let node = new TreeNode(root);

        node.left = helper(ps + 1, ps + ri - is, is, ri - 1);
        node.right = helper(ps + 1 + ri - is, pe, ri + 1, ie);
        return node;
    }

    return helper(0, inorder.length - 1, 0, preorder.length - 1);
};

// 108. 将有序数组转换为二叉搜索树
// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
var sortedArrayToBST = function(nums) {
    function dfs(lo, hi) {
        if (lo > hi) {
            return null;
        } 
        let mid = lo + (hi - lo >> 1);
        let root = new TreeNode(nums[mid]);

        root.left = dfs(lo, mid - 1);
        root.right = dfs(mid + 1, hi); 
        return root;
    }
    return dfs(0, nums.length - 1);   
};
// 109. 有序链表转换二叉搜索树
// https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
var sortedListToBST = function(head) {
    if(head==null) return null;
    function toBST(head, tail){
        if(head == tail) return null;
        let slow = head;
        let fast = head;
        while(fast != tail && fast.next!=tail){
            fast = fast.next.next;
            slow = slow.next;
        }
        let root = new TreeNode(slow.val);
        root.left = toBST(head, slow);
        root.right = toBST(slow.next, tail);
        return thead;
    }
    return toBST(head, null);
};
// 剑指 Offer 37. 序列化二叉树
// https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
var serialize = function(root) {
    if(root == null) return "[]";
    let res = [];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        if(node != null) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push('null');
        }
    }
    return `[${res.join(',')}]`;
};
var deserialize = function(data) {
    if(data == '[]') return null;
    let vals = data.slice(1, data.length - 1).split(",");
    let root = new TreeNode(parseInt(vals[0]));
    let queue = [root];
    let i = 1;
    while(queue.length) {
        let node = queue.shift();
        if(vals[i] != "null") {
            node.left = new TreeNode(parseInt(vals[i]));
            queue.push(node.left);
        }
        i++;
        if(vals[i] != "null") {
            node.right = new TreeNode(parseInt(vals[i]));
            queue.push(node.right);
        }
        i++;
    }
    return root;
};