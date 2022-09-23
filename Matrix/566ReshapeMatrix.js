/*
https://leetcode.com/problems/reshape-the-matrix/

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
*/


/*
    I'm thinking some form of two nested loops for both rows and columns
    Rows being the outer loop
    Columns being the inner loop
    The tricky part is keeping track of which element is being inserted
    I think you can set up two pointers to the current row and col
    and use some logic within the loops to increment row after col > row.length

    You can also calculate if the output matrix is legal if you multiply rows * col 
    and compare that to the inputs r * c

*/


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(mat, r, c) {
    const colLength = mat[0].length
    const rowLength = mat.length
    if (colLength * rowLength !== r * c) return mat
    let colPointer = 0
    let rowPointer = 0
    let output = []
    for (let row = 0; row < r; row++) {
        let rowArr = []
        for (let col = 0; col < c; col++) {
            if (colPointer === colLength) {
                rowPointer++
                colPointer = 0
            }
            rowArr.push(mat[rowPointer][colPointer])
            colPointer++
        }
        output.push(rowArr)
    }
    return output
}

console.log(matrixReshape([[1,2],[3,4]], 1, 4));
// console.log(matrixReshape([[1,2,3,4]], 2, 2));