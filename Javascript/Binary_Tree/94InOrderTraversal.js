/*
https://leetcode.com/problems/binary-tree-inorder-traversal/

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Input: root = [1,null,2,3]
Output: [1,3,2]
*/

/*
Recursively iterate through the nodes in order
Left, Root, Right

if left child exists
    add left child value to array
add root value to array
if right child exists
    add right child value to array
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const output = []
    if (root) helper(root, output)
    return output
}

var helper = function(root, output) {
    if (root.left) {
        helper(root.left, output)
    }
    output.push(root.val)
    if (root.right) {
        helper(root.right, output)
    }
}