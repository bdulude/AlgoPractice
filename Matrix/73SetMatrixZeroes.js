/*
https://leetcode.com/problems/set-matrix-zeroes/

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/


/*
    The tricky part about this one is that you only want to zero out the rows and columns of the original zeros
    I think you have to do one iteration to keep track of the original zeros, or at least the rows and columns you are zeroing

    Perhaps use a hashmap to keep the original zero points

    Wanted to do this in constant space but I couldn't think of how. Peeked at solution.
    Original idea was the first solution, but not space optimal.

    Okay so you can iterate through the matrix and when you detect a zero you put a zero at the start of the row or column
    that way you won't zero out rows on accident because you've already iterated past them.
*/



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Suboptimal space method
const setZeroes = function(matrix) {
    let cols = new Map()
    let rows = new Map()
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                if (!cols.has(x)) cols.set(x)
                if (!rows.has(y)) rows.set(y)
            }
        }
    }
    for (const x of cols.keys()) {
        for (let z = 0; z < matrix.length; z++) {
            matrix[z][x] = 0
        }
    }
    for (const y of rows.keys()) {
        for (let z = 0; z < matrix[0].length; z++) {
            matrix[y][z] = 0
        }
    }
    console.log(matrix);
}





/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Optimal space method that isn't working
// It needs a special first row/col case
const setZeroes2 = function(matrix) {
    // Iterate over to set zero in first row/col
    for (let i = 0; i < matrix.length; i++) { // i height
        for (let j = 0; j < matrix[0].length; j++) { // j width
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    // Then iterate over first row and column to detect/set zeros
    for (let y = 0; y < matrix[0].length; y++) { // rows
        if (matrix[0][y] === 0) {
            for (let b = 1; b < matrix[0].length; b++) {
                matrix[a][b] = 0
            }
        }
    }
    for (let x = 0; x < matrix.length; x++) { // cols
        if (matrix[0][x] === 0) {
            for (let y = 1; y < matrix.length; y++) {
                matrix[y][x] = 0
            }
        }
    }

    // console.log(matrix);
}

// setZeroes([[1,1,1],[1,0,1],[1,1,1]])
setZeroes2([[0,1,2,0],[3,4,5,2],[1,3,1,5]])