class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end of the circular linked list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Circular link
        } else {
            let temp = this.head;
            // Traverse to the last node
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head; // Make it circular
        }
    }

    // Add a node at the beginning of the circular linked list
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Circular link
        } else {
            let temp = this.head;
            // Traverse to the last node
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            // Set the new node's next to head and update last node's next to the new node
            newNode.next = this.head;
            temp.next = newNode;
            this.head = newNode;
        }
    }

    // Print the circular linked list
    printList() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let temp = this.head;
        const result = [];
        do {
            result.push(temp.data);
            temp = temp.next;
        } while (temp !== this.head);

        console.log(result.join(" -> ") + " -> " + result[0]); // To show the circular link
    }

    // Delete a node with a specific value from the circular linked list
    deleteNode(data) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        let previous = null;

        // Check if the node to be deleted is the head
        if (current.data === data) {
            // Traverse to the last node to update its next pointer
            while (current.next !== this.head) {
                current = current.next;
            }

            // If the list contains only one node
            if (this.head.next === this.head) {
                this.head = null;
            } else {
                current.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        // Search for the node to delete
        previous = this.head;
        current = this.head.next;

        while (current !== this.head) {
            if (current.data === data) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }

        console.log("Node not found in the list");
    }
}

// Example usage:
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.prepend(5);
cll.printList(); // Output: 5 -> 10 -> 20 -> 30 -> 5

cll.deleteNode(10);
cll.printList(); // Output: 5 -> 20 -> 30 -> 5
