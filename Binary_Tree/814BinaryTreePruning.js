/*
https://leetcode.com/problems/binary-tree-pruning/

Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

A subtree of a node node is node plus every node that is a descendant of node.

*/

/*
So you have to traverse the tree and prune every branch that does not have a zero

Use recursion to traverse the tree
    if the node is null then nothing happens
    if a node is 0 and has no children, it is removed
    On each node that has children, use a helper function to check all children
        if the left/right branch exists and has no 1's
            remove left/right branch
        if the left/right branch exists and has 1's
            recurse into left/right branch
        

Helper function that searches subtree for 1's
    if left child is 1
        return true
    if left child is 0 and has children
        helper(left child)
    if right child is 1 
        return true
    if right child is 0 and has children
        helper(right child)
    

    Ran out of time, but I think I was close

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
var pruneTree = function (root) {
    if (root === null) return null
    if (root.val === 0) {
        if (root.left === undefined && root.right === undefined){
            root = null
        }
        else {
            if (root.left !== undefined) {
                if (hasOne(root.left)) {
                    pruneTree(root.left)
                }
                else {
                    root.left = null;
                }
            }
            else if (root.right !== undefined) {
                if (hasOne(root.right)) {
                    pruneTree(root.right)
                }
                else {
                    root.right = null
                }
            }
        }
    }
    else {
        if (root.left !== undefined) {
            if (hasOne(root.left)) {
                pruneTree(root.left)
            }
            else {
                root.left = null;
            }
        }
        else if (root.right !== undefined) {
            if (hasOne(root.right)) {
                pruneTree(root.right)
            }
            else {
                root.right = null
            }
        }
    }
    return root

}

var hasOne = function(root) {
    
    if (root.left.val === 1) return true
    if (root.left.val === 0 && (root.left.left !== undefined || root.left.right !== undefined)){
        return helper(root.left)
    }
    if (root.right.val === 1) return true
    if (root.right.val === 0 && (root.right.left !== undefined || root.right.right !== undefined)){
        return helper(root.right)
    }
    return false
}