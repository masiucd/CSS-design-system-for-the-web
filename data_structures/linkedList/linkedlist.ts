interface INode {
  data: number | null;
  next: INode | null;
}

class Node {
  data: number | null;

  next: INode | null;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data: number) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  insertLast(data: number) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    this.size += 1;
    return this;
  }

  showNodes() {
    const nodesList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodesList.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return { nodesList, size: this.size };
  }

  get(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (index !== counter) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  dropHead() {
    if (!this.head.next) return this.head;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  insert(index: number, data: number) {
    if (index === 0) return this.insertFirst(data);
    if (index > this.size || index < 0) return undefined;
    const newNode = new Node(data);
    const prevNode = this.get(index - 1);
    const pointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  delete(index: number) {
    if (index === 0) return this.dropHead();
    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.size -= 1;
    return this;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const ll = new LL();
ll.insertFirst(7);
ll.insertFirst(2);
ll.insertLast(12);
ll.insert(1, 99);
ll.delete(1);
ll.reverse();
console.log(ll.showNodes());
