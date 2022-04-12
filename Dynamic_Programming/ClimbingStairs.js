/*
https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    create a function that takes in a target for number of stairs
    create a base case where the target is equal to 0, return 1
    create count variable
    if the target is less than 0, return 0
    if the target is greater than 0, create two separate recursive calls
        count += climbstairs(n-1)
        count += climbstairs(n-2)
    return count

*/



/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let count = 0;
    if (n < 0) return 0;
    else if (n === 0) return 1;
    else {
        count += climbStairs(n-1);
        count += climbStairs(n-2);
    }
    return count;
};

console.log(climbStairs(44));