/*
https://leetcode.com/problems/find-duplicate-file-in-system/

Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

Example 1:

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
Example 2:

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]

*/


/*
I think I'd start off by iterating through the strings and splitting on ' ' to get the paths and content
Then I split up the paths and content by splitting on the '(' character and removing the last ')' for content
From there I can add to a hash table with the file contents as the keys, and paths as an array
Output by iterating through the hash table and creating a 2d array

for each string
    split on ' ' to get path + filenames content
    for each substring after first
        split on '(' to create path and content variables
        remove ')' from content
        if content key exists in hash table
            push path + filename
        else
            set content, create path array

for each hash table entry
    push array to output array

return output
*/


/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function(paths) {
    let hash = new Map()
    for (let string in paths) {
        let input = paths[string].split(' ');
        let path = input[0]
        for (let x = 1; x < input.length; x++) {
            let input2 = input[x].split('(')
            let filename = input2[0]
            let content = input2[1].slice(0, -1)
            if (hash.has(content)) {
                let array = hash.get(content)
                array.push(path + '/' + filename)
                hash.set(content, array)
            }
            else {
                hash.set(content, [path + '/' + filename])
            }
        }
    }
    let output = []
    for (const [content, paths] of hash) {
        if (paths.length > 1) output.push(paths)
    }
    return output
}


console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]));