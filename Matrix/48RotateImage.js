/*
https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

*/

/*
    find center point of grid to rotate around
    swap elements in place using a temp variable for holding
    if number of elements in a row is odd, do not rotate center point


    if x is row length and y is column length
    column, row
        first row
        0,0 becomes 0,x
        1,0 becomes y,1
        y,0 becomes y,x
        first column
        0,0 becomes 0,x
        0,1 becomes 
*/

/*
    I spent 20 minutes theorizing something that only worked for the 3 by 3 matrix.
    Once I realized that I looked into the discussion and found the way to rotate easily:

    clockwise rotate
    first reverse up to down, then swap the symmetry 
    1 2 3     7 8 9     7 4 1
    4 5 6  => 4 5 6  => 8 5 2
    7 8 9     1 2 3     9 6 3

    Wouldn't have gotten this in and interview but oh well. Practice is practice.


    So reorder the rows, top is bottom, bottom is now top
        0 = bottom-0
        1 = bottom-1
        2 = bottom-2
        bottom = bottom-bottom
        Use a for loop and a temp array to swap rows

    So now to swap the symmetry
        column 0 is now row 0
        column 1 is now row 1
        column 2 is now row 2
        last column is now last row

        You have to swap in place though
        Swapping X and Y coordinates
*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    const noRows = matrix.length
    const noCols = matrix[0].length

    // Reorder
    for (let row = 0; row < noRows/2; row++) {
        let temp = matrix[row]
        matrix[row] = matrix[(noRows-1)-row]
        matrix[(noRows-1)-row] = temp
    }

    // Swap Symmetry
    for (row in matrix) {
        for (let col = 0; col < row; col++) {
            let temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }
}

rotate([[1,2,3],[4,5,6],[7,8,9]])

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])