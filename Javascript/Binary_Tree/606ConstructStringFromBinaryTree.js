/*
https://leetcode.com/problems/construct-string-from-binary-tree/

Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"


Input: root = [1,2,3,null,4]
Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
*/


/*
You need to use preorder traversal (root, left, right)
Each child tree needs to be contained within parenthesis which will be annoying
You could probably use a recursive call within a string concat
Empty parenthesis need to be omitted except for if there is a lone right child, and empty left one needs to be put in


string = root.val
if left child exists 
    string + ( tree2str(root.left) )
else if left child doesn't exist and right does exist
    string + ()
if right child exists
    string + ( tree2str(root.right) )

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
 * @return {string}
 */
var tree2str = function (root) {
    if (root === null) return ""
    let output = "" + root.val
    if (root.left !== null) {
        output = output + "(" + tree2str(root.left) + ")"
    }
    if (root.left === null && root.right !== null) {
        output = output + "()"
    }
    if (root.right !== null) {
        output = output + "(" + tree2str(root.right) + ")"
    }
    return output
}