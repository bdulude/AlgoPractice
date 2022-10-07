/*
Given an array of strings words, return true if it forms a valid word square.

A sequence of strings forms a valid word square if the kth row and column read the same string, where 0 <= k < max(numRows, numColumns).

Example 1:
Input: words = ["abcd","bnrt","crmy","dtye"]
Output: true
Explanation:
The 1st row and 1st column both read "abcd".
The 2nd row and 2nd column both read "bnrt".
The 3rd row and 3rd column both read "crmy".
The 4th row and 4th column both read "dtye".
Therefore, it is a valid word square.

Example 2:
Input: words = ["abcd","bnrt","crm","dt"]
Output: true
Explanation:
The 1st row and 1st column both read "abcd".
The 2nd row and 2nd column both read "bnrt".
The 3rd row and 3rd column both read "crm".
The 4th row and 4th column both read "dt".
Therefore, it is a valid word square.

Example 3:
Input: words = ["ball","area","read","lady"]
Output: false
Explanation:
The 3rd row reads "read" while the 3rd column reads "lead".
Therefore, it is NOT a valid word square.
*/

/*
    I think you can get away with checking half the elements by matching up one element with it's opposite counterpart
    0,1 should be the same letter as 1,0
    1,2 should be the same letter as 2,1
    and so on

    Never mind, leetcode made a specific test case so this wouldn't work. Jerks. 
*/

/**
 * @param {string[]} words
 * @return {boolean}
 */
const validWordSquare = function(words) {
    if (words.length !== words[0].length) return false
    for (let y = 0; y < words.length; y++) {
        for (let x = 0; x < y; x++){
            // console.log(`${words[y][x]} at ${y},${x}`);
            // if (words[y].length !== words.length) return false
            if (words[y][x] !== words[x]?.[y]) return false
        }
    }
    return true
}

// console.log(validWordSquare(["abcd","bnrt","crmy","dtye"]));
// console.log(validWordSquare(["abcd","bnrt","crm","dt"]));
// console.log(validWordSquare(["ball","area","read","lady"]));
// console.log(validWordSquare(["abc","b"]));
console.log(validWordSquare(["abc","bde","cefg"]));


// a b c
// b d e
// c e f g