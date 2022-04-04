
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

/*
    create a function that takes in an array and an int
    create an object that uses the nums as keys
    for each num, subtract it from the target and see if the result exists in the object
    if it does, get the key value which is the place in the array
*/

var twoSum2 = function(nums, target) {
    let obj = {};
    for (let x = 0; x < nums.length; x++) {
        obj[nums[x]] = x;
    }
    for (let y = 0; y < nums.length; y++) {
        let product = target - nums[y];
        let string = product.toString();
        if (obj.hasOwnProperty(string) && obj[string] !== y){
            return [y, obj[product]];
        }
    }
}


var twoSum3 = function(nums, target) {
    let obj = {};
    for (let x = 0; x < nums.length; x++) {
        let product = target - nums[x];
        if (product in obj) {
            return [obj[product], x];
        }
        obj[nums[x]] = x;
    }
}


console.log(twoSum3([2,7,11,15], 9));
// twoSum2([2,7,11,15], 9);