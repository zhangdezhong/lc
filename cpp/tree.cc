
//
//  tree.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/9/30.
//
#include <stdio.h>
#include <vector>
#include <string>
#include <queue>
#include <iostream>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Tree {
public:
    // 二叉搜索树最近公共祖先
    TreeNode* lowestCommonAncestorBST(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(p-> val < root->val && q->val < root->val) {
            return  lowestCommonAncestorBST(root->left, p, q);
        }
        if(p-> val > root->val && q->val > root->val) {
            return lowestCommonAncestorBST(root->right, p, q);
        }
        return root;
    }
    // 二叉树最近公共祖先
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(root == NULL || root   == p || root == q) {
            return root;
        }
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        return left == NULL ? right : (right == NULL ? left: root);
    }
    // 序列化
    vector<string> serializeBFS(TreeNode* root) {
        vector<string> res;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode* tmp = q.front();
            q.pop();
            if (tmp) {
                res.push_back(to_string(tmp->val));
                q.push(tmp->left);
                q.push(tmp->right);
            } else {
                res.push_back("null");
            }
        }
        return res;
    }
    // 反序列化
    vector<TreeNode*> deserializeBFS(std::vector<std::string>& vc) {
        vector<TreeNode*> vec;
        for (size_t i = 0; i < vc.size(); i++) {
            if(vc[i] == "null") {
                vec.push_back(NULL);
            } else {
                vec.push_back(new TreeNode(stoi(vc[i])));
            }
        }
        int j = 1;
        for (int i = 0; j < int(vec.size()); ++i) {
            if (vec[i] == NULL) continue;
            vec[i]->left = vec[j++];
            vec[i]->right = vec[j++];
        }
        return vec;
    }
};
