class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.lenght = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.lenght++;
    return this;
  }

  pop() {
    if (this.lenght === 0) return undefined;
    let temp = this.tail;
    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.lenght--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.lenght++;
    return this;
  }

  shift() {
    if (this.lenght === 0) return undefined;
    let temp = this.head;
    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.lenght--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.lenght) {
      return undefined;
    }
    let temp = this.head;
    if (index < this.lenght / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.lenght - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.lenght) return this.push(value);
    if (index < 0 || index > this.lenght) return false;

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.lenght++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.lenght - 1) return this.pop();
    if (index < 0 || index >= this.lenght) return undefined;

    const temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.lenght--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
// myDoublyLinkedList.push(3)
