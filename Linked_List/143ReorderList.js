/*
https://leetcode.com/problems/reorder-list/

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/

/*
    I'll use floyd's fast slow to find the mid point
    then I'll reverse the second half of the list
    Then when it is reversed I can merge them
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    let fast = head
    let mid = head
    while (fast && fast.next) {
        fast = fast.next.next
        mid = mid.next
    }
    let rev = reverse(null, mid)
    let temp
    while (rev.next) {
        temp = head.next
        head.next = rev
        head = temp
        temp = rev.next
        rev.next = head
        rev = temp
    }
}

const reverse = function(previous, curr) {
    if (curr === null)
        return previous
    let next = curr.next
    curr.next = previous
    previous = curr
    return reverse(previous, next)
}