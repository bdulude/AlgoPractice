/*
https://leetcode.com/problems/reverse-integer/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

/*
    Converting to a string would be the easiest, but I'm not sure if that's how interviewers want to see the problem solved

    I suppose you could do the mod 10 method to get individual digits. You'd then multiply the output by 10 every new digit you added to the result.

    There's probably some fancy binary operation you can do. Perhaps shift the binary around a certain number of digits or something. Not sure.

    So Javascript is kind of cheating for this problem. There is no int or long datatype. Part of the challenge is that the int will overflow
    on some test cases. Since that doesn't happen with js, we don't have to deal with that problem. 

    One non-js solution I saw for that problem was to check if output > int.Max / 10 before multiplying by 10
*/



/**
 * @param {number} x
 * @return {number}
 */
const reverseString = function(x) {
    let str = String(x)
    let rvs = ""
    let output
    for (let i = str.length-1; i > -1; i--)
        rvs += str[i]
    output = parseInt(rvs)
    if (output > 2147483648) 
        return 0
    if (x < 0) 
        return output = output * -1
    else
        return output
}

const reverseMath = function(x) {
    let output = 0
    while (x !== 0) {
        let remainder = x%10
        if (x > 9 || x < -9) {
            x = (x-remainder)/10
            output = (output + remainder) * 10
        }
        else {
            output += x
            x = 0
        }
    }
    if (Math.abs(output) > Math.pow(2, 31))
        return 0
    return output
}


// console.log(reverse(-123));
// console.log(reverse(123));
// console.log(reverse(120));
// console.log(reverse(10));
// console.log(reverse(1534236469));
// console.log(reverse(1563847412));
