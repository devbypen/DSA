class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class stackLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //push
    push(element) {
        const newNode = new Node(element);

        if (this.size > 0) {
            newNode.next = this.head
        }
        this.head = newNode
        this.size += 1
    }
    //pop
    pop() {
        if (this.size === 0) {
            return "Empty stack"
        }

        const value = this.head.value;
        this.head = this.head.next
        this.size--;

        return value

    }
    //peek
    peek() {
        if (this.size === 0) {
            return "Empty stack"
        }

        return this.head.value
    };

    //isEmpty
    isEmpty() {
        return this.size === 0
    }
    //size
    getSize() {
        return this.size;
    }
    //print
    print() {
        let currentNode = this.head;

        while (currentNode) {
            process.stdout.write(currentNode.value + ' -> ')
            currentNode = currentNode.next;
        }
    }
}

const stack = new stackLinkedList();

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(30);
stack.push(40);

stack.print();
console.log("Removed value: ", stack.pop());
stack.print();
console.log("Size of stack", stack.getSize());
console.log("Top value:", stack.peek());
console.log("Check empty:", stack.isEmpty());
