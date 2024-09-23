class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to store stack elements
    }

    // Push a new element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the element from the top of the stack
    pop() {
        if (this.isEmpty()) {
            return null; // Return null if the stack is empty
        }
        return this.items.pop(); // Remove the top element from the stack
    }

    // Return the element at the top of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return null; // Return null if the stack is empty
        }
        return this.items[this.items.length - 1]; // Get the last element in the array
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0; // True if no elements are in the stack
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Empty the stack
    clear() {
        this.items = []; // Reset the array to an empty array
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true
