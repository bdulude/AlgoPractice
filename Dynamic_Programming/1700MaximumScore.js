/*
https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/

You are given two integer arrays nums and multipliers of size n and m respectively, where n >= m. The arrays are 1-indexed.

You begin with a score of 0. You want to perform exactly m operations. On the ith operation (1-indexed), you will:

Choose one integer x from either the start or the end of the array nums.
Add multipliers[i] * x to your score.
Remove x from the array nums.
Return the maximum score after performing m operations.

Example 1:

Input: nums = [1,2,3], multipliers = [3,2,1]
Output: 14
Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
The total score is 9 + 4 + 1 = 14.
Example 2:

Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
Output: 102
Explanation: An optimal solution is as follows:
- Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
- Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
- Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
- Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
- Choose from the end, [-2,7], adding 7 * 6 = 42 to the score. 
The total score is 50 + 15 - 9 + 4 + 42 = 102.

*/

/*
    So you pick a number at the start or the end of the nums array
    and multiply it by the current multiplier and add it to the current score

    I think we do both multiplications for the end and the start and add whichever one is bigger
    as well as remove the multiplied element from nums

    This seems too simple, I must be missing something

    score
    for mult in multipliers
        calc start * mult
        calc end * mult
        if start > end
            add start
            remove start num
        else 
            add end
            remove end num
    return score

    Yes so I was missing something. I didn't pick up how much potential score was being missed by selecting the start 
    on the 3rd number of example 2. You need to pick the truly optimal score using brute force or dynamic programming.

    I was somewhat misled at the start by reading that it can only use m operations which I assumed meant O(m) for the program.
    I went with the greedy route of picking the local best which doesn't produce the optimal scores in some tests.
    
*/


/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
const maximumScore = function(nums, multipliers) {
    let score = 0
    let indexStart = 0
    let indexEnd = nums.length-1
    for (let mult in multipliers) {
        let start = nums[indexStart] * multipliers[mult]
        let end = nums[indexEnd] * multipliers[mult]
        if (start > end) {
            score += start
            console.log("start selected" + " " + start)
            indexStart++
        }
        else {
            score += end
            console.log("end selected" + " " + end);
            indexEnd--
        }
    }
    return score
}

// console.log(maximumScore([1,2,3],[3,2,1]))
console.log(maximumScore([-5,-3,-3,-2,7,1],[-10,-5,3,4,6]))
