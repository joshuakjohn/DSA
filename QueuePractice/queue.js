class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to store queue elements
    }

    // Enqueue: Add an element to the back of the queue
    enqueue(element) {
        this.items.push(element); // Add element at the end of the array
    }

    // Dequeue: Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return null; // Return null if the queue is empty
        }
        return this.items.shift(); // Remove the first element in the array
    }

    // Peek: Return the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return null; // Return null if the queue is empty
        }
        return this.items[0]; // Access the first element in the array
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0; // True if no elements are in the queue
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Empty the queue
    clear() {
        this.items = []; // Reset the array to an empty array
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false
queue.clear();
console.log(queue.isEmpty()); // true
