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


