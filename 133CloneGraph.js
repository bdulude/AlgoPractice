/*
https://leetcode.com/problems/clone-graph/


I think I might traverse the graph and build a hashmap of new nodes
Then I can traverse the hashmap and connect all the nodes
*/


/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (graph) {
    const traverse = function (node) {
        if (!seen.has(node.val)) {
            seen.set(node.val, new Node(node.val))
            seen.get(node.val).neighbors = node.neighbors.map(traverse)
        }
        return seen.get(node.val)
    }
    let seen = new Map()
    return graph ? traverse(graph) : graph
}
