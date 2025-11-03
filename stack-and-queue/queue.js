class Queue {
    constructor() {
        this.items = []
    }

    print() {
       console.log(this.items.join('-'))
    };

    dequeue() {
        if (this.items.length < 1) {
            return "Empty Queue";
        }
        return  this.items.shift();
    }

    isEmtpy() {
        return this.items.length === 0;
    }
    
    peek() {
        if (this.isEmtpy()) {
            return "Empty Queue";
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        return this.items.push(element);
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
console.log("Size of queue:", queue.size());

console.log("Added new element:", queue.enqueue(7));
queue.print();

