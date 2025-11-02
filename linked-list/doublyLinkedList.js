class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const node1 = new Node(2);
const node2 = new Node(7);
const node3 = new Node(4);
const node4 = new Node(6);

node1.next = node2;
node1.prev = null;

node2.next = node3;
node2.prev = node1;

node3.next = node4;
node3.prev = node2;

node4.next = null;
node4.prev = node3;

let currentNode = node1;

console.log("from head to tail: ");
while (currentNode) {
    process.stdout.write(currentNode.value + ' -> ');
    currentNode = currentNode.next;
}
console.log('null');

let tailNode = node4;
console.log("from tail to head: ")
while (tailNode) {
    process.stdout.write(tailNode.value + ' -> ')
    tailNode = tailNode.prev
}
console.log('null');
