/*
https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed 
by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/*
    create empty maps to contain magazine/ransomNote letter frequencies
    use helper function to generate frequencies
    iterate through string letters
        if map doesn't have letter, add it with the value 1
        if map does have it, increment value    
    return map

    compare maps
    if the letters and values within ransomNote frequencies map are equal to or less than the magazine frequencies
        return true
    else
        return false
*/

const canConstruct = function(ransomNote, magazine) {
    let ransomMap = generateFrequencies(ransomNote)
    let magazineMap = generateFrequencies(magazine)
    for (const [key, value] of ransomMap) {
        if (!magazineMap.has(key)) {
            return false
        }
        else {
            if (magazineMap.get(key) < value) {
                return false
            }
        }
    }
    return true
}

const generateFrequencies = function (string) {
    let freq = new Map();
    for (let letter of string) {
        freq.set(letter, freq.get(letter) + 1 || 1)
    }
    return freq
}


console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));

