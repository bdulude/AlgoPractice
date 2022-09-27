/*
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/


/*
    I suppose you could find a midpoint and reverse the second half
    Then do a comparison iteration
    Do the floyd's fast slow algo to get the middle
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
 * @return {boolean}
 */
const isPalindrome = function(head) {
    let fast = head
    let mid = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        mid = mid.next
    }
    // let secondHalfRev = reverse(null, mid)
    // console.log(secondHalfRev);
    
    while (secondHalfRev !== null) {
        if (head.val !== secondHalfRev.val) return false
        head = head.next
        secondHalfRev = secondHalfRev.next
    }
    return true
}

const reverse = function(head) {
    let prev = null
    let next = null
    while (head !== null) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}


// const reverse = function(previous, head){
//     if (head === null) return previous
//     let next = head.next
//     head.next = previous
//     return reverse(head, next)
// }