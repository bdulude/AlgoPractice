// In Order- Left Root Right
function inOrder(root) {
    root.left && inOrder(root.left)
    console.log(root.val)
    root.right && inOrder(root.right)
}

// Preorder- Root Left Right
function preOrder(node) {
    console.log(node.val)
    node.left && this.preOrder(node.left)
    node.right && this.preOrder(node.right)
}


// Post Order- Left Right Root
function postOrder(node) {
    node.left && this.postOrder(node.left)
    node.right && this.postOrder(node.right)
    console.log(node.val)
}


function inorder2() {
    if (root == null)
        return;
    var s = [];
    var curr = root;
    // traverse the tree
    while (curr != null || s.length > 0) {
        /*
         * Reach the left most Node of the curr Node
         */
        while (curr != null) {
            /*
             * place pointer to a tree node on the stack before traversing the node's left
             * subtree
             */
            s.push(curr);
            curr = curr.left;
        }
        /* Current must be NULL at this point */
        curr = s.pop();
        document.write(curr.data + " ");
        /*
         * we have visited the node and its left subtree. Now, it's right subtree's turn
         */
        curr = curr.right;
    }
}

