class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.rear = null;
        this.size = 0;
    }

    print() {
        let currentNode = this.first;
        while(currentNode) {
            process.stdout.write(currentNode.value + "->");
            currentNode = currentNode.next;
        }
        console.log('null')
    };

    dequeue() {
        if (this.size < 1) {
            return "Empty Queue";
        }
        const removedValue = this.first.value;
        this.first = this.first.next;
        
        if(!this.first) {
            this.rear = null;
        }
        this.size--;
        return removedValue

    }

    isEmtpy() {
        return this.size === 0;
    }
    
    peek() {
        if (this.isEmtpy()) {
            return "Empty Queue";
        }
        return this.first.value;
    }

    getSize() {
        return this.size;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (this.first === null) {
            this.first = newNode;
            this.rear = newNode;
        } else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
        return newNode
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.print();
console.log("Removed first element:", queue.dequeue());
queue.print();
console.log("Check empty:", queue.isEmtpy());
console.log("Check value first element", queue.peek());
console.log("Size of queue:", queue.getSize());

console.log("Added new element:", queue.enqueue(7));
queue.print();

