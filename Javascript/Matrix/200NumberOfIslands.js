/*
https://leetcode.com/problems/number-of-islands/

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

*/

/*

Didn't get working within 45 minutes, but got the general idea and direction down


NoIslands variable
Keep track of the number of land "spaces" I've already searched
//Queue of spaces to be checked
A map of the spaces I've already checked, land or water
A method to iterate through unchecked spaces
    When a land space is found, check surrounding spaces for more land
        Once a new unchecked land space is found, increment NoIslands
    Add space to checked spaces
Add additional land spaces to checked map


*/


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const noIslands = 0
    const checked = new Map()
    const noSpaces = grid[0].length * grid.length
    for (y in grid) {
        for (x in grid[y]) {
            if (grid[y][x] == '1'){
                if (!checked.get(`${y}, ${x}`)) {
                    landSearch([y, x], checked, grid);
                    noIslands++;
                }
            }
            checked.set(`${y}, ${x}`, true)
        }
    }
    return noIslands;
};

var landSearch = function(start, checked, grid) {
    // const toCheck = new Map();
    let y = start[0]
    let x = start[1]
    // Check Below Start
    if (!checked.get(`${y+1}, ${x}`) && grid[y+1][x] == '1') {
        checked.set(`${y+1}, ${x}`)
        landSearch([y+1, x], checked, grid)
    }
    // Check Left of Start
    if (!checked.get(`${y}, ${x-1}`) && grid[y][x-1] == '1') {
        checked.set(`${y}, ${x-1}`)
        landSearch([y, x-1], checked, grid)
    }
    // Check Right of Start
    if (!checked.get(`${y}, ${x+1}`) && grid[y][x+1] == '1') {
        checked.set(`${y}, ${x+1}`)
        landSearch([y, x+1], checked, grid)
    }
}




console.log(
    numIslands(
        [["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]]
    )
)
