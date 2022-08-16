class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

function LinkedList() {
  let head = null;
  function append(value) {
    let newNode = new Node(value);
    let currentNode;
    if (head === null) {
      head = newNode;
    } else {
      currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    return head; // for testing, not necessary
  }

  function prepend(value) {
    let newNode = new Node(value);
    let currentNode;
    if (head === null) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    return head; // for testing, not necessary
  }

  function size() {
    let counter = 1;
    let nodeTraversal = head;
    while (nodeTraversal.next) {
      nodeTraversal = nodeTraversal.next;
      counter++;
    }
    return counter;
  }

  function returnHead() {
    return head;
  }

  function returnTail() {
    let tail;
    let list = head;
    while (list.next) {
      if (list.next.next === null) {
        tail = list.next;
        list = list.next;
      } else {
        list = list.next;
      }
    }
    return tail;
  }

  function indexAt(index) {
    let indexElement;
    let list = head;
    let indexCount = 0; // Starting from zero
    while (indexCount <= index) {
      if (indexCount === index) {
        indexElement = list;
      }
      list = list.next;
      indexCount++;
    }
    return indexElement;
  }

  function pop() {
    let list = head;
    while (list.next) {
      if (list.next.next === null) {
        list.next = null;
      } else {
        list = list.next;
      }
    }
    return head;
  }

  function contains(value) {
    let valueExist = false;
    let list = head;
    while (list.next) {
      if (list.value === value) {
        valueExist = true;
      }
      list = list.next;
    }
    return valueExist;
  }

  function find(value) {
    let index = 0;
    let valueIndex = null;
    let list = head;
    while (list.next) {
      if (list.value === value) {
        valueIndex = index;
      }
      index++;
      list = list.next;
    }
    if (!valueIndex) {
      let tail = returnTail();
      if (tail.value === value) {
        valueIndex = index;
      }
    }
    return valueIndex;
  }

  function toString() {
    if (head === null) {
      return null;
    }

    let listStr = "";
    let list = head;
    while (list.next) {
      if (listStr === "") {
        listStr += `(${list.value})`;
      } else {
        listStr += ` -> (${list.value})`;
      }
      list = list.next;
    }

    let tail = returnTail();
    listStr += ` -> (${tail.value})`;
    return listStr;
  }

  return {
    append,
    prepend,
    size,
    returnHead,
    returnTail,
    indexAt,
    pop,
    contains,
    find,
    toString,
  };
}

export { Node, LinkedList };
