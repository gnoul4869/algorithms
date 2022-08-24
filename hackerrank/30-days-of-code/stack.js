class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of the stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count += 1;
        return this.count - 1; // Return position
    }

    // Return and remove top element of the stack
    pop() {
        if (this.count === 0) return console.log('Stack is empty');
        const deletedItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deletedItem} removed`);
        return deletedItem;
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        console.log(this.count === 0 ? 'Stack is empty' : 'Stack is not empty');
        return this.count === 0;
    }

    // Check size of the stack
    size() {
        console.log(`${this.count} elements in stack`);
        return this.count;
    }

    // Print elements in the stack
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }

        console.log(str);
        return str;
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared');
        return this.items;
    }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.push(300);

stack.peek();

stack.size();

stack.print();

stack.pop();
stack.pop();

stack.clear();

stack.isEmpty();
