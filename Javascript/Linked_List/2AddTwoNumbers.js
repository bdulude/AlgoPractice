/*
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/*
    Okay so the tricky part is how you carry over the numbers above 10
    I think I can use a remainder boolean to carry over between iterations
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let remainder = false
    let pre = new ListNode(-1)
    let curr = pre
    while (l1 || l2 || remainder) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let calc = val1 + val2 + remainder
        if (calc >= 10) {
            curr.next = new ListNode(calc - 10)
            remainder = true
        }
        else {
            curr.next = new ListNode(calc)
            remainder = false
        }
        if (l1) 
            l1 = l1.next
        if (l2) 
            l2 = l2.next
        curr = curr.next
    }
    return pre.next
}