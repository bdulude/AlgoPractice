/*
https://leetcode.com/problems/restore-ip-addresses/

A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
    let res = []
    if (s.length > 12) return res
    const isValid = function(check) {
        if (check[0] === '0' && check.length > 1) return false
        if (parseInt(check) > 255) return false
        return true
    }
    const backtrack = function(i, dots, curIp) {
        if (dots > 4)
            return
        if (dots === 4 && i === s.length) {
            console.log("Push " + curIp);
            console.log("Dots: " + dots);
            res.push(curIp.slice(0, -1))
            return
        }
        for (let j = i; j < Math.min(i + 3, s.length); j++) {
            let slice = s.slice(i,j+1)
            if (isValid(slice)) {
                backtrack(j + 1, dots + 1, curIp + slice + ".")
            }
        }
    }
    backtrack(0, 0, "")
    return res
}


console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));

