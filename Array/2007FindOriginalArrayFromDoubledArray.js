/*
https://leetcode.com/problems/find-original-array-from-doubled-array/


An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

Example 1:
Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].
Example 2:

Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.
Example 3:

Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.
*/


/*
So first off you have to determine if the array is doubled or not
This is tricky because you don't know if a given element is doubled or not

if the array length is odd, it is not a doubled array

So perhaps I build a hash map with all the keys being the original values and the values equal to double the original value
I can push the key to output if the hash map has double the key, and delete the key and the value from the hashmap
if there's any entries left over it is not a doubled array



Ugh so this approach workes for the examples they give, but fails the case [0, 0, 0, 0] which expects the output of [0,0]

*/


/**
 * @param {number[]} changed
 * @return {number[]}
 */
const findOriginalArray = function (changed) {
    if (changed.length %2 === 1) return []
    const hash = new Map()
    const output = []
    for (let x in changed) {
        hash.set(changed[x], changed[x]*2)
    }
    for (let [key, value] of hash) {
        if (hash.has(value)) {
            output.push(key)
            hash.delete(key)
            hash.delete(value)
        }
    }
    return hash.size === 0 ? output : []
}


// console.log(findOriginalArray([1,3,4,2,6,8]));
// console.log(findOriginalArray([0,0,0,0]));
console.log(findOriginalArray([6,3,0,1]));
console.log(findOriginalArray([1]));
