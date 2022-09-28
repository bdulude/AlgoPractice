/*
https://leetcode.com/problems/median-of-two-sorted-arrays/

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/


/*
    So first you need to get the length of both arrays added together
    If there is an odd number of elements, you can take length/2 element
    If there is an even number, you take the average between the two center elements
    Using a two pointer system to iterate each lesser number when compared, adding a count for every element
    Find median when count === length/2 ish
    Do separate things if length is even or odd

    Even length is tricky to deal with, as you might have to average numbers between arrays
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1 ? nums1.length : 0
    let len2 = nums2 ? nums2.length : 0
    let length = len1 + len2
    if (length === 0) return null
    let odd = length % 2 === 0 ? false : true
    let count = Math.floor(length / 2)
    let index1 = 0
    let index2 = 0
    let last = null
    let curr = null
    while (count > -1) {
        let val1 = nums1[index1] !== undefined ? nums1[index1] : 1001
        let val2 = nums2[index2] !== undefined ? nums2[index2] : 1001
        if (val1 <= val2) {
            last = curr
            curr = val1
            index1++
        }
        else {
            last = curr
            curr = val2
            index2++
        }
        count--
    }
    if (odd)
        return curr
    else
        return (curr + last) / 2
}