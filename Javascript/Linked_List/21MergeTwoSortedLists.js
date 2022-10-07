/*
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/*
    So you create two pointers, one for each linked list
    Each iteration you compare the nodes, insert the lesser node
    Keep the previously inserted node as a variable to set the node next variable
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// My solution works, but looking up how they did it makes sense to use a prehead
// That way you don't have to deal with the null cases and head initialization I did
const mergeTwoLists = function(list1, list2) {
    let head = null
    if (list1 === null) return list2
    if (list2 === null) return list1
    if (list1.val < list2.val) {
        head = list1
        list1 = list1.next
    }
    else {
        head = list2
        list2 = list2.next
    }
    let current = head
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        }
        else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 === null ? list2 : list1
    return head
}


// Prehead
const mergeTwoLists2 = function(list1, list2) {
    let prehead = new ListNode(-1)
    let previous = prehead
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            previous.next = list1
            list1 = list1.next
        }
        else {
            current.next = list2
            list2 = list2.next
        }
        previous = previous.next
    }
    previous.next = list1 === null ? list2 : list1
    return prehead.next
}