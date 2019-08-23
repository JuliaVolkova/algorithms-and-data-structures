// --- Description
// Create a stack data structure.  The stack
// should be a class with methods 'add' and 'remove'.

// --- Examples
//     const q = new Stack();
//     q.add(1);
//     q.remove(); // returns 1;

class Stack {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}
