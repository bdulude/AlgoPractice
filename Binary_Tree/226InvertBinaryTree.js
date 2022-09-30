/*
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
*/

/*
    So for each node
        left becomes right
        right becomes left

    Not sure if recursive or iterative would be better
    Recursive would be easier to code so I'll go with that

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
 * @return {TreeNode}
 */

const invertTreeIterative = function(root) {
    if (!root) return root
    // let queue = [root]
    let stack = [root]
    // while (queue.length > 0) {
    while (stack.length > 0) {
        // let curr = queue.shift()
        let curr = stack.pop()
        let temp = curr.left
        curr.left = curr.right
        curr.right = temp
        if (curr.left)
            // queue.push(curr.left)
            stack.push(curr.left)
        if (curr.right)
            // queue.push(curr.right)
            stack.push(curr.right)
    }
    return root
}


const invertTreeRecursive = function(root) {
    if (!root) return root
    let temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
}

// const invertTree = function(root) {
//     helper(root)
//     return root
// }

const helper = function(root) {
    if (root === null) return null
    let temp = root.left
    root.left = root.right
    root.right = temp
    helper(root.left)
    helper(root.right)
}