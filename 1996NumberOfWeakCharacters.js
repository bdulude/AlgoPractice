/*
https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/

You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.

A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei.

Return the number of weak characters.

Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.
*/

/*
    I was thinking of first finding the weakest attack and weakest defense on the first iteration
    then comparing them to the rest of the characters. However there might be a test case where
    they specifically pair up the weakest offense/defense with a powerful opposite stat.

    I was also thinking of simply adding both offense and defense together to get a power stat.
    Then I can compare the lower half of the characters to the upper half. But the weakest character
    still might be weaker than the strongest character in the weaker half. So I guess I'd have to iterate 
    through the lower power characters until I stop finding characters weaker than the character currently
    being compared.

    So first iteration I generate a power stat for each character
    I think I'll put this into another 2d array with the power stat and index of the character in the first array
    Then I have to sort the generated array by power stat
    Then start comparing the weakest power character to the second weakest. 
        If the current iteration is weaker
            add one to the weak character count
        If it is not weaker break the iteration
        If there are no more characters to compare break (should be taken care of by the loop)
    Return weak character count


    Didn't get this within 45 minutes, however I was on the right track.
    Here's a solution that works from https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/discuss/2551606/Javascript-5-lines
    const numberOfWeakCharacters = properties => {
    properties.sort((a, b) => b[0] - a[0] || a[1] - b[1])
    let ans = 0, max = 0
    for (let [_, d] of properties)
        d < max ? ans++ : max = d
    return ans
}
*/




/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
    if (properties.length < 2) return 0
    let weakCount = 0
    // Generate sorted powers array by adding attack and defense. Keeps track of index.
    let powers = properties.map((x, index) => [x[0] + x[1], index])
    powers.sort((a,b) => a[0] - b[0])
    // Compares weakest power to second weakest and so on until no more weak characters are found
    console.log(powers.length);
    for (let x = 0; x < powers.length-2; x++){
        console.log(x);
        let weaker = properties[powers[x][1]]
        let stronger = properties[powers[x][1] + 1]
        if (weaker[0] < stronger[0] && weaker[1] < stronger[1]) {
            weakCount++
            console.log(`${weaker} is weaker than ${stronger}`);
            continue
        }
    }
    console.log(properties);
    console.log(powers)
    return weakCount
}


// console.log(numberOfWeakCharacters([[5,5],[6,3],[3,6]]))
// console.log(numberOfWeakCharacters([[2,2],[3,3]]))
console.log(numberOfWeakCharacters([[1,5],[10,4],[4,3]]))