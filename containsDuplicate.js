/*
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

var containsDuplicate = function(nums) {
    let obj = {};
    for (num of nums) {
        console.log(num);
        if (obj.hasOwnProperty(num)) {
            return true;
        }
        else {
            obj[num] = false;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));