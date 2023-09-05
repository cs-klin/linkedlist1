class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    // Your code here
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val, null);

    newNode.next = this.head;

    this.head = newNode;

    this.length += 1;
  }

  // addToHead(value) {

  //   // Create a new node with the given value
  //   const newNode = new LinkedListNode(value, null);

  //   // Set the node's `next` pointer to the list's current head pointer
  //   newNode.next = this.head;

  //   // Set the list head to point to the new link
  //   this.head = newNode;
  // }

  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
