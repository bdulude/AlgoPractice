/*
https://leetcode.com/problems/zigzag-conversion/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
*/

/*
    I think I'll make a 2d array that is numRows high
    Each row represents a row of the string
    The output will be row1 + row2 + ...
*/

const convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) return s
    let matrix = []
    let row = 0
    let asc = false
    let output = ""
    for (let i = 0; i < numRows; i++){
        matrix.push([])
    }
    for (let x = 0; x < s.length; x++) {
        matrix[row].push(s[x])
        if (row === numRows-1)
            asc = true
        else if (row === 0)
            asc = false
        if (asc === true)
            row--
        else 
            row++
    }
    for (let y = 0; y < matrix.length; y++) {
        output = output + matrix[y].join('')
    }
    return output
}

convert("PAYPALISHIRING", 3)