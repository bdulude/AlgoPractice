/*
https://leetcode.com/problems/middle-of-the-linked-list/

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

/*
    Use Floyd's Slow and Fast Algo to find the middle
    Slow increments one node at a time
    Fast increments two at a time
    When fast becomes null, return slow
    (Fast is at the end, slow is in the middle)
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next === null ? null : fast.next.next
    }
    return slow
}