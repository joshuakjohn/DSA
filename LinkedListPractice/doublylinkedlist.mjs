class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insertion at the end of the list
    insertAtEnd(value) {
        const newNode = new Node(value);

        if (this.head === null) { // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
        console.log(`${value} inserted at the end.`);
    }

    // Deletion from the end of the list
    deleteFromEnd() {
        if (this.tail === null) {
            console.log("The list is empty. Nothing to delete.");
            return;
        }

        const value = this.tail.data;

        if (this.tail === this.head) { // Only one element
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        console.log(`${value} deleted from the end.`);
    }

    // Traversing the list from the beginning
    traverseForward() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        console.log("List (Forward Traversal):");
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Traversing the list from the end
    traverseBackward() {
        if (this.tail === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.tail;
        console.log("List (Backward Traversal):");
        while (current !== null) {
            console.log(current.data);
            current = current.prev;
        }
    }

}

// Example usage:
const dll = new DoublyLinkedList();

dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.traverseForward();  // Output: 10, 20
dll.traverseBackward(); // Output: 20, 10

dll.deleteFromEnd(); // Deletes 20
dll.traverseForward();  // Output: 10
