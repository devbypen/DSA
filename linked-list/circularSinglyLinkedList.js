class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(7);
const node2 = new Node(3);
const node3 = new Node(6);
const node4 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

let currentNode = node1;
const startNode = node1;

process.stdout.write(currentNode.value + '->')
currentNode = currentNode.next

while (currentNode != startNode) {
    process.stdout.write(currentNode.value + '->')
    currentNode = currentNode.next
}
console.log('...')

