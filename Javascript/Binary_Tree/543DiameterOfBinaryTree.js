/*
https://leetcode.com/problems/diameter-of-binary-tree/
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
const diameterOfBinaryTree = function(root) {
    let res = 0
    const longestPath = function(node) {
        if (node === null) return 0
        let left = longestPath(node.left)
        let right = longestPath(node.right)
        res = Math.max(res, left + right)
        return Math.max(left, right) + 1
    }
    longestPath(root)
    return res
}