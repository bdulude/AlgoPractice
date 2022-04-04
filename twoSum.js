
/*
https://leetcode.com/problems/two-sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
    create a function that takes in an array and a target int
    iterate through using two for loops, outer one represents the 
        number being checked against the rest of the array (inner loop)
        start the inner loop at the outer loop
    when the target is found, push x and y into an array and return it
*/


var twoSum = function(nums, target) {
    for (let x = 0; x < nums.length-1; x++) {
        for (let y = x+1; y < nums.length; y++) {
            if (nums[x] + nums[y] === target){
                return [x, y];
            }
        }
    }
};