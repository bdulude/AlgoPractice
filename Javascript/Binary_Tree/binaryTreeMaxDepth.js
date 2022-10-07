/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    let rightDepth = 1 + maxDepth(root.right);
    let leftDepth = 1 + maxDepth(root.left);
    return rightDepth >= leftDepth ? rightDepth : leftDepth;
};
