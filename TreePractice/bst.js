// Node class represents each node in the BST
class Node {
    constructor(data) {
        this.data = data;      // Data held by the node
        this.left = null;      // Left child
        this.right = null;     // Right child
    }
}

// BinarySearchTree class represents the BST itself
class BinarySearchTree {
    constructor() {
        this.root = null;      // The root node of the tree
    }

    // Insert a node into the BST
    insert(data) {
        const newNode = new Node(data);

        // If the tree is empty, the new node becomes the root
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Recursive function to insert a node in the correct position
    insertNode(node, newNode) {
        // If the new node's data is less, go to the left subtree
        if (newNode.data < node.data) {
            // If there is no left child, place the new node here
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode); // Recur on left subtree
            }
        } else {
            // If the new node's data is greater, go to the right subtree
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode); // Recur on right subtree
            }
        }
    }

    // Search for a node with given data
    search(data) {
        return this.searchNode(this.root, data);
    }

    // Recursive function to search for a node
    searchNode(node, data) {
        if (!node) {
            return null;  // Data not found
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);  // Search in the left subtree
        } else if (data > node.data) {
            return this.searchNode(node.right, data);  // Search in the right subtree
        } else {
            return node;  // Data found
        }
    }

    // Inorder traversal (left-root-right)
    inorder() {
        this.inorderTraversal(this.root);
    }

    // Helper function for inorder traversal
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    }

    // Preorder traversal (root-left-right)
    preorder() {
        this.preorderTraversal(this.root);
    }

    // Helper function for preorder traversal
    preorderTraversal(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    // Postorder traversal (left-right-root)
    postorder() {
        this.postorderTraversal(this.root);
    }

    // Helper function for postorder traversal
    postorderTraversal(node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    }

    // Delete a node from the BST
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    // Recursive function to delete a node
    deleteNode(node, data) {
        // Base case: tree is empty
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            // If data to be deleted is smaller, go to the left subtree
            node.left = this.deleteNode(node.left, data);
        } else if (data > node.data) {
            // If data to be deleted is larger, go to the right subtree
            node.right = this.deleteNode(node.right, data);
        } else {
            // Node to be deleted is found

            // Case 1: Node with only one child or no child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Case 2: Node with two children
            // Find the smallest node in the right subtree (inorder successor)
            node.data = this.findMinNode(node.right).data;

            // Delete the inorder successor
            node.right = this.deleteNode(node.right, node.data);
        }
        return node;
    }

    // Helper function to find the node with the minimum value (leftmost node)
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// Example usage:
const bst = new BinarySearchTree();

// Insert elements
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

// Perform traversals
console.log("Inorder traversal:");
bst.inorder();  // Output: 8 10 12 15 17 20 25

console.log("Preorder traversal:");
bst.preorder(); // Output: 15 10 8 12 20 17 25

console.log("Postorder traversal:");
bst.postorder(); // Output: 8 12 10 17 25 20 15

// Search for a node
const foundNode = bst.search(17);
console.log("Node found:", foundNode ? foundNode.data : "Not found"); // Output: Node found: 17

// Delete a node
bst.delete(10);
console.log("Inorder traversal after deletion:");
bst.inorder();  // Output: 8 12 15 17 20 25
