class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// { value: 1, next: <obj_2> } -> { value: 2, next: null }

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      // move to the last node
      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length++;
  }

  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;

      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
  }

  get(position) {
    if (position < 0 || this.length <= position ) {
      return;
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  remove(element) {
    this.removeAt( this.indexOf(element) );
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

console.log('s01e11 - Linked List');

let payload = { a: 4 };

function addItems() {
  console.log('\n  Add Items');

  list.add( {a: 1} );
  list.add( {a: 2} );
  list.add( {a: 3} );
  
  list.insert(2, payload);

  list.insert(0, {a: 5});
  list.insert(5, {a: 6});

  list.print();
}

function getItems() {
  console.log('\n  Get Items');

  console.log('get(4):', list.get(4));
  console.log('get(0):', list.get(0));
  console.log('get(-5):', list.get(-5));

  console.log('indexOf {a: 5}:', list.indexOf({a: 5}));
  console.log('indexOf payload:', list.indexOf(payload));
}

function removeItems() {
  console.log('\n  Remove Items');

  console.log('   Before:');
  list.print();

  list.remove(payload);

  console.log('   After:');
  list.print();
}


let list = new LinkedList();

addItems();
getItems();
removeItems();
