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
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;

    this.head = newNode;

    this.length += 1;
  }


  addToTail(val) {
    const newNode = new LinkedListNode(val);

    if( this.head === null) this.head = newNode

    else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = newNode
    }
    this.length++
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
