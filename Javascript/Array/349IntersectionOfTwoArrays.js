/*
https://leetcode.com/problems/intersection-of-two-arrays/

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

/*
    Make a hashmap for one, iterate over second and push matches to output
    Updated to use sets for both, removes the extra lookups that hash tables need
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    if (nums1.length < 1 || nums2.length < 1)
        return []
    let set1 = new Set()
    let set2 = new Set()
    for (num in nums1) {
        set1.add(nums1[num])
    }
    for (num in nums2) {
        if (set1.has(nums2[num]))
            set2.add(nums2[num])
    }
    return [...set2.keys()]
}