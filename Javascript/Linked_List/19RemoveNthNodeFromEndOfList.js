/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    if (head === null || head.next === null) return null
    let curr = head
    let del = head
    let prev = null
    let count = 0
    
    while (curr !== null){
        if (count >= n) {
            prev = del
            del = del.next
        }
        count++
        curr = curr.next
    }
    
    prev.next = del?.next
    return head
}

// console.log();