/*
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

/*
So we need to traverse down the nodes until we get to the last one
We also need a way to keep track of the nodes we previously traversed
I'm having a hard time thinking about how to do it recursively, so I think I'll use a stack
In JS that's just an array using push and pop

while next is not null
    push val onto stack

create new head node
while array length > 0
    create new node
    set val with pop
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

// Stack - my original solution
const reverseList = function(head) {
    if(head === null) return head
    let stack = []
    while(head !== null) {
        stack.push(head)
        head = head.next
    }
    let curr = stack.pop()
    head = curr
    while (stack.length > 0) {
        curr.next = stack.pop()
        curr = curr.next
    }
    curr.next = null
    return head
}

// Iterative, adapted from https://leetcode.com/problems/reverse-linked-list/discuss/58127/Python-Iterative-and-Recursive-Solution
/*
    This solution iterates through changing the next node to be the previous one

    Set a null previous value, as the current head.next will be null
    Each iteration sets the current node
    At the end of the iteration it updates the previous to be the current
*/
const reverseList2 = function(head) {
    let previous = null
    while (head) {
        let current = head
        head = head.next
        current.next = previous
        previous = current
    }
    return previous
}

// Recursive